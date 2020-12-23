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

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.TreeMap;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.aws.traits.auth.SigV4Trait;
import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.model.node.ObjectNode;
import software.amazon.smithy.model.node.StringNode;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.utils.CaseUtils;
import software.amazon.smithy.utils.IoUtils;
import software.amazon.smithy.utils.OptionalUtils;
import software.amazon.smithy.utils.StringUtils;

/**
 * Writes out a file that resolves endpoints using endpoints.json, but the
 * created resolver resolves endpoints for a single service.
 */
final class EndpointGenerator implements Runnable {

    private static final int VERSION = 3;

    private final TypeScriptWriter writer;
    private final ObjectNode endpointData;
    private final ServiceTrait serviceTrait;
    private final String endpointPrefix;
    private final String baseSigningSerivce;
    private final Map<String, Partition> partitions = new TreeMap<>();
    private final Map<String, ObjectNode> endpoints = new TreeMap<>();
    private final Map<String, Partition> regionPartitionsMap = new TreeMap<>();

    EndpointGenerator(ServiceShape service, TypeScriptWriter writer) {
        this.writer = writer;
        serviceTrait = service.getTrait(ServiceTrait.class)
                .orElseThrow(() -> new CodegenException("No service trait found on " + service.getId()));
        endpointPrefix = serviceTrait.getEndpointPrefix();
        baseSigningSerivce = service.getTrait(SigV4Trait.class).map(SigV4Trait::getName)
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
                // Merge the endpoint settings into the resolved service settings.
                ObjectNode config = partition.getDefaults().merge(entry.getValue().expectObjectNode());
                // Resolve the hostname.
                String hostName = config.expectStringMember("hostname").getValue();
                hostName = hostName.replace("{dnsSuffix}", dnsSuffix);
                hostName = hostName.replace("{service}", endpointPrefix);
                hostName = hostName.replace("{region}", entry.getKey());
                config = config.withMember("hostname", hostName);
                endpoints.put(entry.getKey(), config);
                regionPartitionsMap.put(entry.getKey(), partition);
            }
        }
    }

    @Override
    public void run() {
        writePartitionTemplates();
        writePartitionRegions();
        writeEndpointProviderFunction();
    }

    private void writePartitionTemplates() {
        writer.write("// Partition default templates");
        partitions.values().forEach(partition -> {
            writer.write("const $L = $S;", partition.templateVariableName, partition.templateValue);
        });
        writer.write("");
    }

    private void writePartitionRegions() {
        writer.write("// Partition regions");
        partitions.values().forEach(partition -> {
            writer.openBlock("const $L = new Set([", "]);", partition.regionVariableName, () -> {
                for (String region : partition.getAllRegions()) {
                    writer.write("$S,", region);
                }
            });
        });
        writer.write("");
    }

    private void writeEndpointProviderFunction() {
        writer.addImport("RegionInfoProvider", "RegionInfoProvider", TypeScriptDependency.AWS_SDK_TYPES.packageName);
        writer.addImport("RegionInfo", "RegionInfo", TypeScriptDependency.AWS_SDK_TYPES.packageName);
        writer.openBlock("export const defaultRegionInfoProvider: RegionInfoProvider = (\n"
                         + "  region: string,\n"
                         + "  options?: any\n"
                         + ") => {", "};", () -> {
            writer.write("let regionInfo: RegionInfo | undefined = undefined;");
            writer.openBlock("switch (region) {", "}", () -> {
                writer.write("// First, try to match exact region names.");
                for (Map.Entry<String, ObjectNode> entry : endpoints.entrySet()) {
                    writer.write("case $S:", entry.getKey()).indent();
                    writeEndpointSpecificResolver(entry.getKey(), entry.getValue());
                    writer.write("break;");
                    writer.dedent();
                }
                writer.write("// Next, try to match partition endpoints.");
                writer.write("default:").indent();
                partitions.values().forEach(partition -> {
                    writer.openBlock("if ($L.has(region)) {", "}", partition.regionVariableName, () -> {
                        writePartitionEndpointResolver(partition); });
                });
                // Default to using the AWS partition resolver.
                writer.write("// Finally, assume it's an AWS partition endpoint.");
                writer.openBlock("if (regionInfo === undefined) {", "}", () -> {
                    writePartitionEndpointResolver(partitions.get("aws")); });
                writer.dedent();
            });
            writer.write("return Promise.resolve({ signingService: $S, ...regionInfo });", baseSigningSerivce);
        });
    }

    private void writePartitionEndpointResolver(Partition partition) {
        OptionalUtils.ifPresentOrElse(
                partition.getPartitionEndpoint(),
                name -> writer.write("return defaultRegionInfoProvider($S);", name),
                () -> {
                    writer.openBlock("regionInfo = {", "};", () -> {
                        String template = partition.templateVariableName;
                        writer.write("hostname: $L.replace(\"{region}\", region),", template);
                        writer.write("partition: $S,", partition.identifier);
                        writeAdditionalEndpointSettings(partition.getDefaults());
                    });
                }
        );
    }

    private void writeEndpointSpecificResolver(String region, ObjectNode resolved) {
        String hostname = resolved.expectStringMember("hostname").getValue();
        writer.openBlock("regionInfo = {", "};", () -> {
            writer.write("hostname: $S,", hostname);
            writer.write("partition: $S,", regionPartitionsMap.get(region).identifier);
            writeAdditionalEndpointSettings(resolved);
        });
    }

    // Write credential scope settings into the resolved endpoint object.
    private void writeAdditionalEndpointSettings(ObjectNode settings) {
        settings.getObjectMember("credentialScope").ifPresent(scope -> {
            scope.getStringMember("region").ifPresent(signingRegion -> {
                writer.write("signingRegion: $S,", signingRegion);
            });
            scope.getStringMember("service").ifPresent(signingService -> {
                writer.write("signingService: $S,", signingService);
            });
        });
    }

    private final class Partition {
        final ObjectNode defaults;
        final String regionVariableName;
        final String templateVariableName;
        final String templateValue;
        final String dnsSuffix;
        final String identifier;
        private final ObjectNode config;

        private Partition(ObjectNode config, String partition) {
            this.config = config;
            // Resolve the partition defaults + the service defaults.
            ObjectNode partitionDefaults = config.expectObjectMember("defaults");
            defaults = partitionDefaults.merge(getService().getObjectMember("defaults").orElse(Node.objectNode()));

            // Resolve the template to use for this service in this partition.
            String template = defaults.expectStringMember("hostname").getValue();
            template = template.replace("{service}", endpointPrefix);
            template = template.replace("{dnsSuffix}", config.expectStringMember("dnsSuffix").getValue());
            templateValue = template;

            // Compute the template and regions variable names.
            String snakePartition = StringUtils.upperCase(CaseUtils.toSnakeCase(partition));
            templateVariableName = snakePartition + "_TEMPLATE";
            regionVariableName = snakePartition + "_REGIONS";

            dnsSuffix = config.expectStringMember("dnsSuffix").getValue();
            identifier = partition;
        }

        ObjectNode getDefaults() {
            return defaults;
        }

        ObjectNode getService() {
            ObjectNode services = config.getObjectMember("services").orElse(Node.objectNode());
            return services.getObjectMember(endpointPrefix).orElse(Node.objectNode());
        }

        Set<String> getAllRegions() {
            return config.getObjectMember("regions").orElse(Node.objectNode()).getStringMap().keySet();
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
