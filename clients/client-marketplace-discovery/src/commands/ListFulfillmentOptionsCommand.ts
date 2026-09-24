// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFulfillmentOptionsInput, ListFulfillmentOptionsOutput } from "../models/models_0";
import { ListFulfillmentOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFulfillmentOptionsCommand}.
 */
export interface ListFulfillmentOptionsCommandInput extends ListFulfillmentOptionsInput {}
/**
 * @public
 *
 * The output of {@link ListFulfillmentOptionsCommand}.
 */
export interface ListFulfillmentOptionsCommandOutput extends ListFulfillmentOptionsOutput, __MetadataBearer {}

/**
 * <p>Returns the fulfillment options available for a product, including deployment details such as version information, operating systems, usage instructions, and release notes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDiscoveryClient, ListFulfillmentOptionsCommand } from "@aws-sdk/client-marketplace-discovery"; // ES Modules import
 * // const { MarketplaceDiscoveryClient, ListFulfillmentOptionsCommand } = require("@aws-sdk/client-marketplace-discovery"); // CommonJS import
 * // import type { MarketplaceDiscoveryClientConfig } from "@aws-sdk/client-marketplace-discovery";
 * const config = {}; // type is MarketplaceDiscoveryClientConfig
 * const client = new MarketplaceDiscoveryClient(config);
 * const input = { // ListFulfillmentOptionsInput
 *   locale: "STRING_VALUE",
 *   productId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListFulfillmentOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListFulfillmentOptionsOutput
 * //   locale: "STRING_VALUE",
 * //   fulfillmentOptions: [ // FulfillmentOptionsList // required
 * //     { // FulfillmentOption Union: only one key present
 * //       amazonMachineImageFulfillmentOption: { // AmazonMachineImageFulfillmentOption
 * //         fulfillmentOptionId: "STRING_VALUE", // required
 * //         fulfillmentOptionName: "STRING_VALUE", // required
 * //         fulfillmentOptionVersion: "STRING_VALUE",
 * //         fulfillmentOptionType: "AMAZON_MACHINE_IMAGE" || "API" || "CLOUDFORMATION_TEMPLATE" || "CONTAINER" || "HELM" || "EKS_ADD_ON" || "EC2_IMAGE_BUILDER_COMPONENT" || "DATA_EXCHANGE" || "PROFESSIONAL_SERVICES" || "SAAS" || "SAGEMAKER_ALGORITHM" || "SAGEMAKER_MODEL", // required
 * //         fulfillmentOptionDisplayName: "STRING_VALUE", // required
 * //         operatingSystems: [ // AmazonMachineImageOperatingSystemList // required
 * //           { // AmazonMachineImageOperatingSystem
 * //             operatingSystemFamilyName: "STRING_VALUE", // required
 * //             operatingSystemName: "STRING_VALUE", // required
 * //             operatingSystemVersion: "STRING_VALUE",
 * //           },
 * //         ],
 * //         recommendation: { // AmazonMachineImageRecommendation
 * //           instanceType: "STRING_VALUE", // required
 * //           securityGroups: [ // AmazonMachineImageSecurityGroupList
 * //             { // AmazonMachineImageSecurityGroup
 * //               protocol: "STRING_VALUE", // required
 * //               fromPort: Number("int"), // required
 * //               toPort: Number("int"), // required
 * //               cidrIpAddresses: [ // AmazonMachineImageCidrIpAddressList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //         releaseNotes: "STRING_VALUE",
 * //         usageInstructions: "STRING_VALUE",
 * //         availableFromTime: new Date("TIMESTAMP"),
 * //         accessUrlTemplate: "STRING_VALUE",
 * //         architecture: "STRING_VALUE", // required
 * //         amiAlias: "STRING_VALUE",
 * //         ebsVolume: { // AmazonMachineImageEbsVolume
 * //           volumeTypes: [ // AmazonMachineImageEbsVolumeTypeList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           iops: Number("int"),
 * //         },
 * //         shortDescription: "STRING_VALUE",
 * //       },
 * //       apiFulfillmentOption: { // ApiFulfillmentOption
 * //         fulfillmentOptionId: "STRING_VALUE", // required
 * //         fulfillmentOptionType: "AMAZON_MACHINE_IMAGE" || "API" || "CLOUDFORMATION_TEMPLATE" || "CONTAINER" || "HELM" || "EKS_ADD_ON" || "EC2_IMAGE_BUILDER_COMPONENT" || "DATA_EXCHANGE" || "PROFESSIONAL_SERVICES" || "SAAS" || "SAGEMAKER_ALGORITHM" || "SAGEMAKER_MODEL", // required
 * //         fulfillmentOptionDisplayName: "STRING_VALUE", // required
 * //         usageInstructions: "STRING_VALUE",
 * //         awsSupportedServices: [ // AwsSupportedServiceList // required
 * //           { // AwsSupportedService
 * //             supportedServiceType: "STRING_VALUE", // required
 * //             displayName: "STRING_VALUE", // required
 * //             description: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       cloudFormationFulfillmentOption: { // CloudFormationFulfillmentOption
 * //         fulfillmentOptionId: "STRING_VALUE", // required
 * //         fulfillmentOptionName: "STRING_VALUE", // required
 * //         fulfillmentOptionType: "AMAZON_MACHINE_IMAGE" || "API" || "CLOUDFORMATION_TEMPLATE" || "CONTAINER" || "HELM" || "EKS_ADD_ON" || "EC2_IMAGE_BUILDER_COMPONENT" || "DATA_EXCHANGE" || "PROFESSIONAL_SERVICES" || "SAAS" || "SAGEMAKER_ALGORITHM" || "SAGEMAKER_MODEL", // required
 * //         fulfillmentOptionDisplayName: "STRING_VALUE", // required
 * //         fulfillmentOptionVersion: "STRING_VALUE",
 * //         releaseNotes: "STRING_VALUE",
 * //         usageInstructions: "STRING_VALUE",
 * //         availableFromTime: new Date("TIMESTAMP"),
 * //         shortDescription: "STRING_VALUE",
 * //         longDescription: "STRING_VALUE",
 * //       },
 * //       containerFulfillmentOption: { // ContainerFulfillmentOption
 * //         fulfillmentOptionId: "STRING_VALUE", // required
 * //         fulfillmentOptionName: "STRING_VALUE", // required
 * //         fulfillmentOptionType: "AMAZON_MACHINE_IMAGE" || "API" || "CLOUDFORMATION_TEMPLATE" || "CONTAINER" || "HELM" || "EKS_ADD_ON" || "EC2_IMAGE_BUILDER_COMPONENT" || "DATA_EXCHANGE" || "PROFESSIONAL_SERVICES" || "SAAS" || "SAGEMAKER_ALGORITHM" || "SAGEMAKER_MODEL", // required
 * //         fulfillmentOptionDisplayName: "STRING_VALUE", // required
 * //         fulfillmentOptionVersion: "STRING_VALUE",
 * //         operatingSystems: [ // ContainerOperatingSystemList
 * //           { // ContainerOperatingSystem
 * //             operatingSystemFamilyName: "STRING_VALUE", // required
 * //             operatingSystemName: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         awsSupportedServices: [
 * //           {
 * //             supportedServiceType: "STRING_VALUE", // required
 * //             displayName: "STRING_VALUE", // required
 * //             description: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         releaseNotes: "STRING_VALUE",
 * //         usageInstructions: "STRING_VALUE",
 * //       },
 * //       helmFulfillmentOption: { // HelmFulfillmentOption
 * //         fulfillmentOptionId: "STRING_VALUE", // required
 * //         fulfillmentOptionName: "STRING_VALUE", // required
 * //         fulfillmentOptionType: "AMAZON_MACHINE_IMAGE" || "API" || "CLOUDFORMATION_TEMPLATE" || "CONTAINER" || "HELM" || "EKS_ADD_ON" || "EC2_IMAGE_BUILDER_COMPONENT" || "DATA_EXCHANGE" || "PROFESSIONAL_SERVICES" || "SAAS" || "SAGEMAKER_ALGORITHM" || "SAGEMAKER_MODEL", // required
 * //         fulfillmentOptionDisplayName: "STRING_VALUE", // required
 * //         fulfillmentOptionVersion: "STRING_VALUE",
 * //         operatingSystems: [ // HelmOperatingSystemList
 * //           { // HelmOperatingSystem
 * //             operatingSystemFamilyName: "STRING_VALUE", // required
 * //             operatingSystemName: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         releaseNotes: "STRING_VALUE",
 * //         awsSupportedServices: [
 * //           {
 * //             supportedServiceType: "STRING_VALUE", // required
 * //             displayName: "STRING_VALUE", // required
 * //             description: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         usageInstructions: "STRING_VALUE",
 * //       },
 * //       eksAddOnFulfillmentOption: { // EksAddOnFulfillmentOption
 * //         fulfillmentOptionId: "STRING_VALUE", // required
 * //         fulfillmentOptionName: "STRING_VALUE", // required
 * //         fulfillmentOptionType: "AMAZON_MACHINE_IMAGE" || "API" || "CLOUDFORMATION_TEMPLATE" || "CONTAINER" || "HELM" || "EKS_ADD_ON" || "EC2_IMAGE_BUILDER_COMPONENT" || "DATA_EXCHANGE" || "PROFESSIONAL_SERVICES" || "SAAS" || "SAGEMAKER_ALGORITHM" || "SAGEMAKER_MODEL", // required
 * //         fulfillmentOptionDisplayName: "STRING_VALUE", // required
 * //         fulfillmentOptionVersion: "STRING_VALUE",
 * //         operatingSystems: [ // EksAddOnOperatingSystemList
 * //           { // EksAddOnOperatingSystem
 * //             operatingSystemFamilyName: "STRING_VALUE", // required
 * //             operatingSystemName: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         releaseNotes: "STRING_VALUE",
 * //         usageInstructions: "STRING_VALUE",
 * //         awsSupportedServices: [
 * //           {
 * //             supportedServiceType: "STRING_VALUE", // required
 * //             displayName: "STRING_VALUE", // required
 * //             description: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       ec2ImageBuilderComponentFulfillmentOption: { // Ec2ImageBuilderComponentFulfillmentOption
 * //         fulfillmentOptionId: "STRING_VALUE", // required
 * //         fulfillmentOptionName: "STRING_VALUE", // required
 * //         fulfillmentOptionType: "AMAZON_MACHINE_IMAGE" || "API" || "CLOUDFORMATION_TEMPLATE" || "CONTAINER" || "HELM" || "EKS_ADD_ON" || "EC2_IMAGE_BUILDER_COMPONENT" || "DATA_EXCHANGE" || "PROFESSIONAL_SERVICES" || "SAAS" || "SAGEMAKER_ALGORITHM" || "SAGEMAKER_MODEL", // required
 * //         fulfillmentOptionDisplayName: "STRING_VALUE", // required
 * //         fulfillmentOptionVersion: "STRING_VALUE",
 * //         operatingSystems: [
 * //           {
 * //             operatingSystemFamilyName: "STRING_VALUE", // required
 * //             operatingSystemName: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         awsSupportedServices: [
 * //           {
 * //             supportedServiceType: "STRING_VALUE", // required
 * //             displayName: "STRING_VALUE", // required
 * //             description: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         releaseNotes: "STRING_VALUE",
 * //         usageInstructions: "STRING_VALUE",
 * //       },
 * //       dataExchangeFulfillmentOption: { // DataExchangeFulfillmentOption
 * //         fulfillmentOptionId: "STRING_VALUE", // required
 * //         fulfillmentOptionType: "AMAZON_MACHINE_IMAGE" || "API" || "CLOUDFORMATION_TEMPLATE" || "CONTAINER" || "HELM" || "EKS_ADD_ON" || "EC2_IMAGE_BUILDER_COMPONENT" || "DATA_EXCHANGE" || "PROFESSIONAL_SERVICES" || "SAAS" || "SAGEMAKER_ALGORITHM" || "SAGEMAKER_MODEL", // required
 * //         fulfillmentOptionDisplayName: "STRING_VALUE", // required
 * //         dataArtifacts: [ // DataArtifactList
 * //           { // DataArtifact
 * //             description: "STRING_VALUE",
 * //             resourceArn: "STRING_VALUE",
 * //             resourceType: "STRING_VALUE", // required
 * //             dataClassification: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       professionalServicesFulfillmentOption: { // ProfessionalServicesFulfillmentOption
 * //         fulfillmentOptionId: "STRING_VALUE", // required
 * //         fulfillmentOptionType: "AMAZON_MACHINE_IMAGE" || "API" || "CLOUDFORMATION_TEMPLATE" || "CONTAINER" || "HELM" || "EKS_ADD_ON" || "EC2_IMAGE_BUILDER_COMPONENT" || "DATA_EXCHANGE" || "PROFESSIONAL_SERVICES" || "SAAS" || "SAGEMAKER_ALGORITHM" || "SAGEMAKER_MODEL", // required
 * //         fulfillmentOptionDisplayName: "STRING_VALUE", // required
 * //       },
 * //       saasFulfillmentOption: { // SaasFulfillmentOption
 * //         fulfillmentOptionId: "STRING_VALUE", // required
 * //         fulfillmentOptionType: "AMAZON_MACHINE_IMAGE" || "API" || "CLOUDFORMATION_TEMPLATE" || "CONTAINER" || "HELM" || "EKS_ADD_ON" || "EC2_IMAGE_BUILDER_COMPONENT" || "DATA_EXCHANGE" || "PROFESSIONAL_SERVICES" || "SAAS" || "SAGEMAKER_ALGORITHM" || "SAGEMAKER_MODEL", // required
 * //         fulfillmentOptionDisplayName: "STRING_VALUE", // required
 * //         fulfillmentUrl: "STRING_VALUE",
 * //         usageInstructions: "STRING_VALUE",
 * //         availableFromTime: new Date("TIMESTAMP"),
 * //         launchUrl: "STRING_VALUE",
 * //         quickLaunch: "ENABLED" || "DISABLED", // required
 * //       },
 * //       sageMakerAlgorithmFulfillmentOption: { // SageMakerAlgorithmFulfillmentOption
 * //         fulfillmentOptionId: "STRING_VALUE", // required
 * //         fulfillmentOptionType: "AMAZON_MACHINE_IMAGE" || "API" || "CLOUDFORMATION_TEMPLATE" || "CONTAINER" || "HELM" || "EKS_ADD_ON" || "EC2_IMAGE_BUILDER_COMPONENT" || "DATA_EXCHANGE" || "PROFESSIONAL_SERVICES" || "SAAS" || "SAGEMAKER_ALGORITHM" || "SAGEMAKER_MODEL", // required
 * //         fulfillmentOptionDisplayName: "STRING_VALUE", // required
 * //         fulfillmentOptionVersion: "STRING_VALUE",
 * //         releaseNotes: "STRING_VALUE",
 * //         usageInstructions: "STRING_VALUE",
 * //         recommendation: { // SageMakerAlgorithmRecommendation
 * //           recommendedBatchTransformInstanceType: "STRING_VALUE", // required
 * //           recommendedRealtimeInferenceInstanceType: "STRING_VALUE",
 * //           recommendedTrainingInstanceType: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       sageMakerModelFulfillmentOption: { // SageMakerModelFulfillmentOption
 * //         fulfillmentOptionId: "STRING_VALUE", // required
 * //         fulfillmentOptionType: "AMAZON_MACHINE_IMAGE" || "API" || "CLOUDFORMATION_TEMPLATE" || "CONTAINER" || "HELM" || "EKS_ADD_ON" || "EC2_IMAGE_BUILDER_COMPONENT" || "DATA_EXCHANGE" || "PROFESSIONAL_SERVICES" || "SAAS" || "SAGEMAKER_ALGORITHM" || "SAGEMAKER_MODEL", // required
 * //         fulfillmentOptionDisplayName: "STRING_VALUE", // required
 * //         fulfillmentOptionVersion: "STRING_VALUE",
 * //         releaseNotes: "STRING_VALUE",
 * //         usageInstructions: "STRING_VALUE",
 * //         recommendation: { // SageMakerModelRecommendation
 * //           recommendedBatchTransformInstanceType: "STRING_VALUE", // required
 * //           recommendedRealtimeInferenceInstanceType: "STRING_VALUE",
 * //         },
 * //         supportedContentTypes: [ // SageMakerModelContentTypeList
 * //           "STRING_VALUE",
 * //         ],
 * //         supportedResponseMimeTypes: [ // SageMakerModelResponseMimeTypeList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFulfillmentOptionsCommandInput - {@link ListFulfillmentOptionsCommandInput}
 * @returns {@link ListFulfillmentOptionsCommandOutput}
 * @see {@link ListFulfillmentOptionsCommandInput} for command's `input` shape.
 * @see {@link ListFulfillmentOptionsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceDiscoveryClientResolvedConfig | config} for MarketplaceDiscoveryClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link MarketplaceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceDiscovery service.</p>
 *
 *
 * @example List AMI Fulfillment Options
 * ```javascript
 * //
 * const input = {
 *   locale: "en-US",
 *   productId: "prod-sampleAmiId"
 * };
 * const command = new ListFulfillmentOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   fulfillmentOptions: [
 *     {
 *       amazonMachineImageFulfillmentOption: {
 *         accessUrlTemplate: "http://{0}:8888/",
 *         amiAlias: "/aws/service/marketplace/prod-sampleAmiId/2.0.20260120.1",
 *         architecture: "x86_64",
 *         availableFromTime: "2022-03-07T00:00:00Z",
 *         ebsVolume: {
 *           volumeTypes: [
 *             "gp2"
 *           ]
 *         },
 *         fulfillmentOptionDisplayName: "Amazon Machine Image",
 *         fulfillmentOptionId: "fo-sampleAmiId",
 *         fulfillmentOptionName: "64-bit (x86) Amazon Machine Image (AMI)",
 *         fulfillmentOptionType: "AMAZON_MACHINE_IMAGE",
 *         fulfillmentOptionVersion: "2.0.20260120.1",
 *         operatingSystems: [
 *           {
 *             operatingSystemFamilyName: "AMAZONLINUX",
 *             operatingSystemName: "AmazonLinux 2.0.20250623.0",
 *             operatingSystemVersion: "2.0.20250623.0"
 *           }
 *         ],
 *         recommendation: {
 *           instanceType: "t3a.medium",
 *           securityGroups: [
 *             {
 *               cidrIpAddresses: [
 *                 "0.0.0.0/0"
 *               ],
 *               fromPort: 22,
 *               protocol: "tcp",
 *               toPort: 22
 *             }
 *           ]
 *         },
 *         releaseNotes: "https://aws.amazon.com/amazon-linux-2/release-notes/",
 *         shortDescription: "Amazon Linux 2 AMI for x86_64 EC2 instances.",
 *         usageInstructions: "The Amazon Linux 2 AMI can be launched through the EC2 console's Quick Launch page."
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List API Fulfillment Options
 * ```javascript
 * //
 * const input = {
 *   locale: "en-US",
 *   productId: "prod-sampleApiId"
 * };
 * const command = new ListFulfillmentOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   fulfillmentOptions: [
 *     {
 *       apiFulfillmentOption: {
 *         awsSupportedServices: [
 *           {
 *             description: "A managed service that enables you to develop, deploy, and maintain AI agents seamlessly.",
 *             displayName: "Amazon Bedrock AgentCore",
 *             supportedServiceType: "BEDROCK_AGENTCORE"
 *           }
 *         ],
 *         fulfillmentOptionDisplayName: "API-Based Agents & Tools",
 *         fulfillmentOptionId: "fo-sampleApiId",
 *         fulfillmentOptionType: "API",
 *         usageInstructions: "Please refer to the MCP usage instructions."
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List API Fulfillment Options with Dynamic Endpoint
 * ```javascript
 * //
 * const input = {
 *   locale: "en-US",
 *   productId: "prod-sampleApiDynamicId"
 * };
 * const command = new ListFulfillmentOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   fulfillmentOptions: [
 *     {
 *       apiFulfillmentOption: {
 *         awsSupportedServices: [
 *           {
 *             description: "A managed service that enables you to develop, deploy, and maintain AI agents seamlessly.",
 *             displayName: "Amazon Bedrock AgentCore",
 *             supportedServiceType: "BEDROCK_AGENTCORE"
 *           }
 *         ],
 *         fulfillmentOptionDisplayName: "API-Based Agents & Tools",
 *         fulfillmentOptionId: "fo-sampleApiDynamicId",
 *         fulfillmentOptionType: "API",
 *         usageInstructions: "Deploy to your preferred region using the dynamic endpoint."
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List CloudFormation Template Fulfillment Options
 * ```javascript
 * //
 * const input = {
 *   locale: "en-US",
 *   productId: "prod-sampleCftId"
 * };
 * const command = new ListFulfillmentOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   fulfillmentOptions: [
 *     {
 *       cloudFormationFulfillmentOption: {
 *         availableFromTime: "2021-12-15T00:00:00Z",
 *         fulfillmentOptionDisplayName: "CloudFormation Template",
 *         fulfillmentOptionId: "fo-sampleCftId",
 *         fulfillmentOptionName: "Sophos Standalone Firewall for AWS",
 *         fulfillmentOptionType: "CLOUDFORMATION_TEMPLATE",
 *         fulfillmentOptionVersion: "21.5 MR1",
 *         longDescription: "This CloudFormation template deploys the Sophos XG Firewall with auto-scaling and load balancing for enterprise environments.",
 *         releaseNotes: "https://community.sophos.com/products/xg-firewall/b/blog",
 *         shortDescription: "Deploy Sophos XG Firewall on AWS with high availability.",
 *         usageInstructions: "You can manage your Sophos XG Firewall on AWS from the Web Interface using HTTPS (TCP port 4444)."
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List Container Fulfillment Options
 * ```javascript
 * //
 * const input = {
 *   locale: "en-US",
 *   productId: "prod-sampleContainerId"
 * };
 * const command = new ListFulfillmentOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   fulfillmentOptions: [
 *     {
 *       containerFulfillmentOption: {
 *         awsSupportedServices: [
 *           {
 *             description: "A managed service that enables you to develop, deploy, and maintain AI agents seamlessly.",
 *             displayName: "Amazon Bedrock AgentCore",
 *             supportedServiceType: "BEDROCK_AGENTCORE"
 *           }
 *         ],
 *         fulfillmentOptionDisplayName: "Container Image",
 *         fulfillmentOptionId: "fo-sampleContainerId",
 *         fulfillmentOptionName: "New delivery option 1",
 *         fulfillmentOptionType: "CONTAINER",
 *         fulfillmentOptionVersion: "Elastic MCP Version 1",
 *         operatingSystems: [
 *           {
 *             operatingSystemFamilyName: "Linux",
 *             operatingSystemName: "Linux"
 *           }
 *         ],
 *         releaseNotes: "Version 1 of Elastic MCP Server",
 *         usageInstructions: "See Elastic MCP GitHub instructions"
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List Helm Fulfillment Options
 * ```javascript
 * //
 * const input = {
 *   locale: "en-US",
 *   productId: "prod-sampleHelmId"
 * };
 * const command = new ListFulfillmentOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   fulfillmentOptions: [
 *     {
 *       helmFulfillmentOption: {
 *         awsSupportedServices: [
 *           {
 *             description: "Amazon Elastic Kubernetes Service",
 *             displayName: "Amazon EKS",
 *             supportedServiceType: "EKS"
 *           }
 *         ],
 *         fulfillmentOptionDisplayName: "Helm Chart",
 *         fulfillmentOptionId: "fo-sampleHelmId",
 *         fulfillmentOptionName: "NGINX Ingress Controller",
 *         fulfillmentOptionType: "HELM",
 *         fulfillmentOptionVersion: "1.14.3-0-r03",
 *         operatingSystems: [
 *           {
 *             operatingSystemFamilyName: "Linux",
 *             operatingSystemName: "Linux"
 *           }
 *         ],
 *         releaseNotes: "* Maintenance release",
 *         usageInstructions: "helm install nginx-ingress"
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List EKS Add-On Fulfillment Options
 * ```javascript
 * //
 * const input = {
 *   locale: "en-US",
 *   productId: "prod-sampleEksId"
 * };
 * const command = new ListFulfillmentOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   fulfillmentOptions: [
 *     {
 *       eksAddOnFulfillmentOption: {
 *         awsSupportedServices: [
 *           {
 *             description: "Amazon Elastic Kubernetes Service",
 *             displayName: "Amazon EKS",
 *             supportedServiceType: "EKS"
 *           }
 *         ],
 *         fulfillmentOptionDisplayName: "Add-on for Amazon EKS",
 *         fulfillmentOptionId: "fo-sampleEksId",
 *         fulfillmentOptionName: "Splunk Distribution of the OpenTelemetry Collector Chart",
 *         fulfillmentOptionType: "EKS_ADD_ON",
 *         fulfillmentOptionVersion: "0.144.0",
 *         operatingSystems: [
 *           {
 *             operatingSystemFamilyName: "Linux",
 *             operatingSystemName: "Linux"
 *           }
 *         ],
 *         releaseNotes: "https://github.com/signalfx/splunk-otel-collector-chart/releases/tag/splunk-otel-collector-0.144.0",
 *         usageInstructions: "https://help.splunk.com/en/splunk-observability-cloud/manage-data/splunk-distribution-of-the-opentelemetry-collector/get-started-with-the-splunk-distribution-of-the-opentelemetry-collector/collector-for-kubernetes/kubernetes-eks-add-on"
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List EC2 Image Builder Component Fulfillment Options
 * ```javascript
 * //
 * const input = {
 *   locale: "en-US",
 *   productId: "prod-sampleImageBuilderId"
 * };
 * const command = new ListFulfillmentOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   fulfillmentOptions: [
 *     {
 *       ec2ImageBuilderComponentFulfillmentOption: {
 *         awsSupportedServices: [
 *           {
 *             description: "EC2 Image Builder is a fully managed AWS service. It automates creation, management, and deployment of custom, secure, and up-to-date server images.",
 *             displayName: "Amazon EC2 Image Builder",
 *             supportedServiceType: "IMAGEBUILDER"
 *           }
 *         ],
 *         fulfillmentOptionDisplayName: "EC2 Image Builder Component",
 *         fulfillmentOptionId: "fo-sampleImageBuilderId",
 *         fulfillmentOptionName: "Linux v1.2.3",
 *         fulfillmentOptionType: "EC2_IMAGE_BUILDER_COMPONENT",
 *         fulfillmentOptionVersion: "1.2.3",
 *         operatingSystems: [
 *           {
 *             operatingSystemFamilyName: "Linux",
 *             operatingSystemName: "Linux"
 *           }
 *         ],
 *         releaseNotes: "https://github.com/CrowdStrike/aws-ec2-image-builder/releases",
 *         usageInstructions: "https://github.com/CrowdStrike/aws-ec2-image-builder"
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List Data Exchange Fulfillment Options
 * ```javascript
 * //
 * const input = {
 *   locale: "en-US",
 *   productId: "prod-sampleDataExchangeId"
 * };
 * const command = new ListFulfillmentOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   fulfillmentOptions: [
 *     {
 *       dataExchangeFulfillmentOption: {
 *         dataArtifacts: [
 *           {
 *             dataClassification: "NONE",
 *             description: "Sample testing dataset.",
 *             resourceArn: "arn:aws:dataexchange:us-east-2::DataSet/sample-dataset-id",
 *             resourceType: "API_GATEWAY_APIS"
 *           }
 *         ],
 *         fulfillmentOptionDisplayName: "Data Exchange",
 *         fulfillmentOptionId: "fo-sampleDataExchangeId",
 *         fulfillmentOptionType: "DATA_EXCHANGE"
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List Professional Services Fulfillment Options
 * ```javascript
 * //
 * const input = {
 *   locale: "en-US",
 *   productId: "prod-sampleProServId"
 * };
 * const command = new ListFulfillmentOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   fulfillmentOptions: [
 *     {
 *       professionalServicesFulfillmentOption: {
 *         fulfillmentOptionDisplayName: "Professional Services",
 *         fulfillmentOptionId: "fo-sampleProServId",
 *         fulfillmentOptionType: "PROFESSIONAL_SERVICES"
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List SaaS Fulfillment Options
 * ```javascript
 * //
 * const input = {
 *   locale: "en-US",
 *   productId: "prod-sampleSaasId"
 * };
 * const command = new ListFulfillmentOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   fulfillmentOptions: [
 *     {
 *       saasFulfillmentOption: {
 *         availableFromTime: "2018-08-07T00:00:00.000Z",
 *         fulfillmentOptionDisplayName: "SaaS",
 *         fulfillmentOptionId: "fo-sampleSaasId",
 *         fulfillmentOptionType: "SAAS",
 *         fulfillmentUrl: "https://example.com/order/SAMPLE123",
 *         launchUrl: "https://example.com/saas/launch",
 *         quickLaunch: "ENABLED",
 *         usageInstructions: "Refer to the seller's setup guide to configure and start using this SaaS product."
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List SageMaker Algorithm Fulfillment Options
 * ```javascript
 * //
 * const input = {
 *   locale: "en-US",
 *   productId: "prod-sampleSmAlgoId"
 * };
 * const command = new ListFulfillmentOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   fulfillmentOptions: [
 *     {
 *       sageMakerAlgorithmFulfillmentOption: {
 *         fulfillmentOptionDisplayName: "SageMaker Algorithm",
 *         fulfillmentOptionId: "fo-sampleSmAlgoId",
 *         fulfillmentOptionType: "SAGEMAKER_ALGORITHM",
 *         fulfillmentOptionVersion: "v1.0.0",
 *         recommendation: {
 *           recommendedBatchTransformInstanceType: "ml.m5.large",
 *           recommendedRealtimeInferenceInstanceType: "ml.m5.large",
 *           recommendedTrainingInstanceType: "ml.g4dn.xlarge"
 *         },
 *         releaseNotes: "Bug fixes",
 *         usageInstructions: "A zip file called train should be provided."
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @example List SageMaker Model Fulfillment Options
 * ```javascript
 * //
 * const input = {
 *   locale: "en-US",
 *   productId: "prod-sampleSmModelId"
 * };
 * const command = new ListFulfillmentOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   fulfillmentOptions: [
 *     {
 *       sageMakerModelFulfillmentOption: {
 *         fulfillmentOptionDisplayName: "SageMaker Model",
 *         fulfillmentOptionId: "fo-sampleSmModelId",
 *         fulfillmentOptionType: "SAGEMAKER_MODEL",
 *         fulfillmentOptionVersion: "1.2.3",
 *         recommendation: {
 *           recommendedBatchTransformInstanceType: "ml.g5.12xlarge",
 *           recommendedRealtimeInferenceInstanceType: "ml.g5.12xlarge"
 *         },
 *         releaseNotes: "Initial release",
 *         supportedContentTypes: [
 *           "application/json",
 *           "text/csv"
 *         ],
 *         supportedResponseMimeTypes: [
 *           "application/json"
 *         ],
 *         usageInstructions: "See Input Summary"
 *       }
 *     }
 *   ],
 *   locale: "en-US"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListFulfillmentOptionsCommand extends command<ListFulfillmentOptionsCommandInput, ListFulfillmentOptionsCommandOutput>(
  _ep0,
  _mw0,
  "ListFulfillmentOptions",
  ListFulfillmentOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFulfillmentOptionsInput;
      output: ListFulfillmentOptionsOutput;
    };
    sdk: {
      input: ListFulfillmentOptionsCommandInput;
      output: ListFulfillmentOptionsCommandOutput;
    };
  };
}
