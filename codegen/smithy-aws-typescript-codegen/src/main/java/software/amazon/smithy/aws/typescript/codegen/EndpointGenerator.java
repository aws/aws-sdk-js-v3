/*
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

package software.amazon.smithy.aws.typescript.codegen;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.aws.traits.auth.SigV4Trait;
import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.model.node.ArrayNode;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.model.node.ObjectNode;
import software.amazon.smithy.model.node.StringNode;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.utils.IoUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Writes out a file that resolves endpoints using endpoints.json, but the
 * created resolver resolves endpoints for a single service.
 */
@SmithyInternalApi
final class EndpointGenerator implements Runnable {

    private static final int VERSION = 3;

    private final TypeScriptWriter writer;
    private final ObjectNode endpointData;
    private final ServiceTrait serviceTrait;
    private final String endpointPrefix;
    private final String baseSigningService;
    private final Map<String, Partition> partitions = new TreeMap<>();
    private final Map<String, ObjectNode> endpoints = new TreeMap<>();

    EndpointGenerator(ServiceShape service, TypeScriptWriter writer) {
        this.writer = writer;
        serviceTrait = service.getTrait(ServiceTrait.class)
                .orElseThrow(() -> new CodegenException("No service trait found on " + service.getId()));
        endpointPrefix = serviceTrait.getEndpointPrefix();
        baseSigningService = service.getTrait(SigV4Trait.class).map(SigV4Trait::getName)
                .orElse(serviceTrait.getArnNamespace());
        endpointData = Node.parse(IoUtils.readUtf8Resource(getClass(), "endpoints.json")).expectObjectNode();
        validateVersion();
        loadPartitions();
        loadServiceEndpoints();
    }

    private void validateVersion() {
        int version = endpointData.expectNumberMember("version").getValue().intValue();
        if (version != VERSION) {
            throw new CodegenException("Invalid endpoints.json version. Expected version 3, found " +  version);
        }
    }

    private void loadPartitions() {
        List<ObjectNode> partitionObjects = endpointData
                .expectArrayMember("partitions")
                .getElementsAs(Node::expectObjectNode);

        for (ObjectNode partition : partitionObjects) {
            String partitionName = partition.expectStringMember("partition").getValue();
            partitions.put(partitionName, new Partition(partition, partitionName));
        }
    }

    private void loadServiceEndpoints() {
        for (Partition partition : partitions.values()) {
            String dnsSuffix = partition.dnsSuffix;
            ObjectNode serviceData = partition.getService();
            ObjectNode endpointMap = serviceData.getObjectMember("endpoints").orElse(Node.objectNode());

            for (Map.Entry<String, Node> entry : endpointMap.getStringMap().entrySet()) {
                ObjectNode config = entry.getValue().expectObjectNode();
                if (!config.containsMember("deprecated")
                        && (config.containsMember("hostname") || config.containsMember("variants"))) {
                    String region = entry.getKey();
                    String hostname = config.getStringMemberOrDefault("hostname", partition.hostnameTemplate);
                    String resolvedHostname = getResolvedHostname(hostname, endpointPrefix, region);

                    ArrayNode variants = getServiceVariants(
                        config.getArrayMember("variants").orElse(ArrayNode.fromNodes()),
                        resolvedHostname,
                        dnsSuffix);

                    if (config.containsMember("hostname")) {
                        // Populate default variant only if endpoint entry contains hostname
                        String defaultHostname = getResolvedHostnameWithDnsSuffix(resolvedHostname, dnsSuffix);
                        ArrayNode defaultVariant = ArrayNode.fromNodes(getDefaultVariant(defaultHostname));
                        variants = defaultVariant.merge(variants);
                    }

                    endpoints.put(region,
                        config
                            .withMember("hostname", resolvedHostname)
                            .withMember("variants", variants));
                }
            }
        }
    }

    private ArrayNode getServiceVariants(ArrayNode variants, String defaultHostname, String defaultDnsSuffix) {
        List<Node> serviceVariants = new ArrayList<Node>();

        variants.forEach(variant -> {
            ObjectNode variantNode = variant.expectObjectNode();
            if (!variantNode.containsMember("hostname") && !variantNode.containsMember("dnsSuffix")) {
                // Skip the empty variant which just contains tags.
                return;
            }
            String hostname = variantNode.getStringMemberOrDefault("hostname", defaultHostname);
            String dnsSuffix = variantNode.getStringMemberOrDefault("dnsSuffix", defaultDnsSuffix);
            String resolvedHostname = getResolvedHostnameWithDnsSuffix(
                getResolvedHostname(hostname, endpointPrefix),
                dnsSuffix
            );
            serviceVariants.add(variantNode.withMember("hostname", resolvedHostname).withoutMember("dnsSuffix"));
        });

        return ArrayNode.fromNodes(serviceVariants);
    }

    @Override
    public void run() {
        writeRegionHash();
        writePartitionHash();
        writeEndpointProviderFunction();
    }

    private void writeRegionHash() {
        writer.addImport("RegionHash", "RegionHash", TypeScriptDependency.CONFIG_RESOLVER);
        writer.openBlock("const regionHash: RegionHash = {", "};", () -> {
            for (Map.Entry<String, ObjectNode> entry : endpoints.entrySet()) {
                writeEndpointSpecificResolver(entry.getKey(), entry.getValue());
            }
        });
        writer.write("");
    }

    private void writePartitionHash() {
        writer.addImport("PartitionHash", "PartitionHash", TypeScriptDependency.CONFIG_RESOLVER);
        writer.openBlock("const partitionHash: PartitionHash = {", "};", () -> {
            partitions.values().forEach(partition -> {
                writer.openBlock("$S: {", "},", partition.identifier, () -> {
                    writer.openBlock("regions: [", "],", () -> {
                        for (String region : partition.getAllRegions()) {
                            writer.write("$S,", region);
                        }
                    });
                    writer.write("regionRegex: $S,", partition.regionRegex);
                    writer.write("variants: $L,", ArrayNode.prettyPrintJson(partition.variants));
                    partition.getPartitionEndpoint().ifPresent(
                        endpoint -> writer.write("endpoint: $S,", endpoint));
                });
            });
        });
        writer.write("");
    }

    private void writeEndpointProviderFunction() {
        writer.addImport("RegionInfoProvider", "RegionInfoProvider", TypeScriptDependency.AWS_SDK_TYPES);
        writer.addImport("RegionInfoProviderOptions", "RegionInfoProviderOptions",
                TypeScriptDependency.AWS_SDK_TYPES);
        writer.addImport("getRegionInfo", "getRegionInfo", TypeScriptDependency.CONFIG_RESOLVER);
        writer.openBlock("export const defaultRegionInfoProvider: RegionInfoProvider = async (\n"
                         + "  region: string,\n"
                         + "  options?: RegionInfoProviderOptions\n"
                         + ") => ", ";", () -> {
            writer.openBlock("getRegionInfo(region, {", "})", () -> {
                writer.write("...options,");
                writer.write("signingService: $S,", baseSigningService);
                writer.write("regionHash,");
                writer.write("partitionHash,");
            });
        });
    }

    private void writeEndpointSpecificResolver(String region, ObjectNode resolved) {
        writer.openBlock("$S: {", "},", region, () -> {
            ArrayNode variants = resolved.expectArrayMember("variants");
            writer.write("variants: $L,", ArrayNode.prettyPrintJson(variants));

            resolved.getObjectMember("credentialScope").ifPresent(scope -> {
                scope.getStringMember("region").ifPresent(signingRegion -> {
                    writer.write("signingRegion: $S,", signingRegion);
                });
                scope.getStringMember("service").ifPresent(signingService -> {
                    writer.write("signingService: $S,", signingService);
                });
            });
        });
    }

    private ObjectNode getDefaultVariant(String hostname) {
        return ObjectNode
            .fromStringMap(Collections.singletonMap("hostname", hostname))
            .withMember("tags", ArrayNode.fromStrings(Collections.emptyList()));
    }

    private String getResolvedHostname(String hostnameTemplate, String service) {
        return getResolvedHostname(hostnameTemplate, service, "{region}");
    }

    private String getResolvedHostname(String hostnameTemplate, String service, String region) {
        return hostnameTemplate
            .replace("{service}", service)
            .replace("{region}", region);
    }

    private String getResolvedHostnameWithDnsSuffix(String hostnameTemplate, String dnsSuffix) {
        return hostnameTemplate.replace("{dnsSuffix}", dnsSuffix);
    }

    private final class Partition {
        final ArrayNode variants;
        final String dnsSuffix;
        final String identifier;
        final String regionRegex;
        final String hostnameTemplate;
        private final ObjectNode config;

        private Partition(ObjectNode config, String partition) {
            this.config = config;
            // Resolve the partition defaults + the service defaults.
            ObjectNode partitionDefaults = config.expectObjectMember("defaults");
            ObjectNode serviceDefaults = getService().getObjectMember("defaults").orElse(Node.objectNode());
            ObjectNode defaults = partitionDefaults.merge(serviceDefaults);

            dnsSuffix = config.expectStringMember("dnsSuffix").getValue();
            identifier = partition;
            regionRegex = config.expectStringMember("regionRegex").getValue();

            // Resolve the template to use for this service in this partition.
            String hostname = defaults.expectStringMember("hostname").getValue();
            hostnameTemplate = getResolvedHostname(hostname, endpointPrefix);

            ArrayNode mergedVariants = getMergedVariants(
                partitionDefaults.getArrayMember("variants").orElse(Node.arrayNode()),
                serviceDefaults.getArrayMember("variants").orElse(Node.arrayNode())
            );
            variants = getVariants(mergedVariants);
        }

        ObjectNode getService() {
            ObjectNode services = config.getObjectMember("services").orElse(Node.objectNode());
            return services.getObjectMember(endpointPrefix).orElse(Node.objectNode());
        }

        Set<String> getAllRegions() {
            Set<String> regions = new TreeSet<String>();
            regions.addAll(
                config.getObjectMember("regions")
                    .orElse(Node.objectNode()).getStringMap().keySet()
            );
            regions.addAll(
                getService().getObjectMember("endpoints")
                    .orElse(Node.objectNode()).getStringMap().keySet()
            );
            return regions;
        }

        private ArrayNode getVariants(ArrayNode mergedVariants) {
            List<Node> allVariants = new ArrayList<Node>();

            allVariants.add(getDefaultVariant(getResolvedHostnameWithDnsSuffix(hostnameTemplate, this.dnsSuffix)));
            mergedVariants.forEach(mergedVariant -> {
                ObjectNode variantNode = mergedVariant.expectObjectNode();
                String hostname = variantNode.expectStringMember("hostname").getValue();
                String dnsSuffix = variantNode.getStringMemberOrDefault("dnsSuffix", this.dnsSuffix);
                String resolvedHostname = getResolvedHostnameWithDnsSuffix(
                    getResolvedHostname(hostname, endpointPrefix),
                    dnsSuffix
                );
                allVariants.add(variantNode.withMember("hostname", resolvedHostname).withoutMember("dnsSuffix"));
            });

            return ArrayNode.fromNodes(allVariants);
        }

        private ArrayNode getMergedVariants(ArrayNode partitionVariants, ArrayNode serviceVariants) {
            List<Node> mergedVariants = new ArrayList<Node>();

            partitionVariants.forEach(partitionVariant -> {
                ObjectNode partitionVariantNode = partitionVariant.expectObjectNode();
                ArrayNode tags = partitionVariantNode.expectArrayMember("tags");
                Node equivalentServiceVariantNode = serviceVariants.getElements().stream()
                    .filter(serviceVariantNode -> tags.equals(
                        serviceVariantNode.expectObjectNode().expectArrayMember("tags")))
                    .findFirst()
                    .orElse(null);
                mergedVariants.add((equivalentServiceVariantNode == null)
                    ? partitionVariantNode : equivalentServiceVariantNode);
            });

            return ArrayNode.fromNodes(mergedVariants);
        }

        Optional<String> getPartitionEndpoint() {
            ObjectNode service = getService();
            // Note: regionalized services always use regionalized endpoints.
            return service.getBooleanMemberOrDefault("isRegionalized", true)
                   ? Optional.empty()
                   : service.getStringMember("partitionEndpoint").map(StringNode::getValue);
        }
    }
}
