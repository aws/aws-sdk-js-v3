// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeInferenceComponentInput } from "../models/models_2";
import type { DescribeInferenceComponentOutput } from "../models/models_3";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeInferenceComponent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInferenceComponentCommand}.
 */
export interface DescribeInferenceComponentCommandInput extends DescribeInferenceComponentInput {}
/**
 * @public
 *
 * The output of {@link DescribeInferenceComponentCommand}.
 */
export interface DescribeInferenceComponentCommandOutput extends DescribeInferenceComponentOutput, __MetadataBearer {}

/**
 * <p>Returns information about an inference component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeInferenceComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeInferenceComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeInferenceComponentInput
 *   InferenceComponentName: "STRING_VALUE", // required
 * };
 * const command = new DescribeInferenceComponentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInferenceComponentOutput
 * //   InferenceComponentName: "STRING_VALUE", // required
 * //   InferenceComponentArn: "STRING_VALUE", // required
 * //   EndpointName: "STRING_VALUE", // required
 * //   EndpointArn: "STRING_VALUE", // required
 * //   VariantName: "STRING_VALUE",
 * //   FailureReason: "STRING_VALUE",
 * //   Specification: { // InferenceComponentSpecificationSummary
 * //     InstanceType: "ml.t2.medium" || "ml.t2.large" || "ml.t2.xlarge" || "ml.t2.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.12xlarge" || "ml.m5d.24xlarge" || "ml.c4.large" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5d.large" || "ml.c5d.xlarge" || "ml.c5d.2xlarge" || "ml.c5d.4xlarge" || "ml.c5d.9xlarge" || "ml.c5d.18xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.12xlarge" || "ml.r5.24xlarge" || "ml.r5d.large" || "ml.r5d.xlarge" || "ml.r5d.2xlarge" || "ml.r5d.4xlarge" || "ml.r5d.12xlarge" || "ml.r5d.24xlarge" || "ml.inf1.xlarge" || "ml.inf1.2xlarge" || "ml.inf1.6xlarge" || "ml.inf1.24xlarge" || "ml.dl1.24xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.r6i.large" || "ml.r6i.xlarge" || "ml.r6i.2xlarge" || "ml.r6i.4xlarge" || "ml.r6i.8xlarge" || "ml.r6i.12xlarge" || "ml.r6i.16xlarge" || "ml.r6i.24xlarge" || "ml.r6i.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.g6.xlarge" || "ml.g6.2xlarge" || "ml.g6.4xlarge" || "ml.g6.8xlarge" || "ml.g6.12xlarge" || "ml.g6.16xlarge" || "ml.g6.24xlarge" || "ml.g6.48xlarge" || "ml.r8g.medium" || "ml.r8g.large" || "ml.r8g.xlarge" || "ml.r8g.2xlarge" || "ml.r8g.4xlarge" || "ml.r8g.8xlarge" || "ml.r8g.12xlarge" || "ml.r8g.16xlarge" || "ml.r8g.24xlarge" || "ml.r8g.48xlarge" || "ml.g6e.xlarge" || "ml.g6e.2xlarge" || "ml.g6e.4xlarge" || "ml.g6e.8xlarge" || "ml.g6e.12xlarge" || "ml.g6e.16xlarge" || "ml.g6e.24xlarge" || "ml.g6e.48xlarge" || "ml.g7e.2xlarge" || "ml.g7e.4xlarge" || "ml.g7e.8xlarge" || "ml.g7e.12xlarge" || "ml.g7e.24xlarge" || "ml.g7e.48xlarge" || "ml.p4d.24xlarge" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m6gd.large" || "ml.m6gd.xlarge" || "ml.m6gd.2xlarge" || "ml.m6gd.4xlarge" || "ml.m6gd.8xlarge" || "ml.m6gd.12xlarge" || "ml.m6gd.16xlarge" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c6gd.large" || "ml.c6gd.xlarge" || "ml.c6gd.2xlarge" || "ml.c6gd.4xlarge" || "ml.c6gd.8xlarge" || "ml.c6gd.12xlarge" || "ml.c6gd.16xlarge" || "ml.c6gn.large" || "ml.c6gn.xlarge" || "ml.c6gn.2xlarge" || "ml.c6gn.4xlarge" || "ml.c6gn.8xlarge" || "ml.c6gn.12xlarge" || "ml.c6gn.16xlarge" || "ml.r6g.large" || "ml.r6g.xlarge" || "ml.r6g.2xlarge" || "ml.r6g.4xlarge" || "ml.r6g.8xlarge" || "ml.r6g.12xlarge" || "ml.r6g.16xlarge" || "ml.r6gd.large" || "ml.r6gd.xlarge" || "ml.r6gd.2xlarge" || "ml.r6gd.4xlarge" || "ml.r6gd.8xlarge" || "ml.r6gd.12xlarge" || "ml.r6gd.16xlarge" || "ml.p4de.24xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.trn2.48xlarge" || "ml.inf2.xlarge" || "ml.inf2.8xlarge" || "ml.inf2.24xlarge" || "ml.inf2.48xlarge" || "ml.p5.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.m7i.large" || "ml.m7i.xlarge" || "ml.m7i.2xlarge" || "ml.m7i.4xlarge" || "ml.m7i.8xlarge" || "ml.m7i.12xlarge" || "ml.m7i.16xlarge" || "ml.m7i.24xlarge" || "ml.m7i.48xlarge" || "ml.c7i.large" || "ml.c7i.xlarge" || "ml.c7i.2xlarge" || "ml.c7i.4xlarge" || "ml.c7i.8xlarge" || "ml.c7i.12xlarge" || "ml.c7i.16xlarge" || "ml.c7i.24xlarge" || "ml.c7i.48xlarge" || "ml.r7i.large" || "ml.r7i.xlarge" || "ml.r7i.2xlarge" || "ml.r7i.4xlarge" || "ml.r7i.8xlarge" || "ml.r7i.12xlarge" || "ml.r7i.16xlarge" || "ml.r7i.24xlarge" || "ml.r7i.48xlarge" || "ml.c8g.medium" || "ml.c8g.large" || "ml.c8g.xlarge" || "ml.c8g.2xlarge" || "ml.c8g.4xlarge" || "ml.c8g.8xlarge" || "ml.c8g.12xlarge" || "ml.c8g.16xlarge" || "ml.c8g.24xlarge" || "ml.c8g.48xlarge" || "ml.r7gd.medium" || "ml.r7gd.large" || "ml.r7gd.xlarge" || "ml.r7gd.2xlarge" || "ml.r7gd.4xlarge" || "ml.r7gd.8xlarge" || "ml.r7gd.12xlarge" || "ml.r7gd.16xlarge" || "ml.m8g.medium" || "ml.m8g.large" || "ml.m8g.xlarge" || "ml.m8g.2xlarge" || "ml.m8g.4xlarge" || "ml.m8g.8xlarge" || "ml.m8g.12xlarge" || "ml.m8g.16xlarge" || "ml.m8g.24xlarge" || "ml.m8g.48xlarge" || "ml.c6in.large" || "ml.c6in.xlarge" || "ml.c6in.2xlarge" || "ml.c6in.4xlarge" || "ml.c6in.8xlarge" || "ml.c6in.12xlarge" || "ml.c6in.16xlarge" || "ml.c6in.24xlarge" || "ml.c6in.32xlarge" || "ml.p6-b200.48xlarge" || "ml.p6-b300.48xlarge" || "ml.p6e-gb200.36xlarge" || "ml.p5.4xlarge",
 * //     ModelName: "STRING_VALUE",
 * //     Container: { // InferenceComponentContainerSpecificationSummary
 * //       DeployedImage: { // DeployedImage
 * //         SpecifiedImage: "STRING_VALUE",
 * //         ResolvedImage: "STRING_VALUE",
 * //         ResolutionTime: new Date("TIMESTAMP"),
 * //       },
 * //       ArtifactUrl: "STRING_VALUE",
 * //       Environment: { // EnvironmentMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     StartupParameters: { // InferenceComponentStartupParameters
 * //       ModelDataDownloadTimeoutInSeconds: Number("int"),
 * //       ContainerStartupHealthCheckTimeoutInSeconds: Number("int"),
 * //     },
 * //     ComputeResourceRequirements: { // InferenceComponentComputeResourceRequirements
 * //       NumberOfCpuCoresRequired: Number("float"),
 * //       NumberOfAcceleratorDevicesRequired: Number("float"),
 * //       MinMemoryRequiredInMb: Number("int"), // required
 * //       MaxMemoryRequiredInMb: Number("int"),
 * //     },
 * //     BaseInferenceComponentName: "STRING_VALUE",
 * //     DataCacheConfig: { // InferenceComponentDataCacheConfigSummary
 * //       EnableCaching: true || false, // required
 * //     },
 * //     SchedulingConfig: { // InferenceComponentSchedulingConfig
 * //       PlacementStrategy: "SPREAD" || "BINPACK", // required
 * //       AvailabilityZoneBalance: { // InferenceComponentAvailabilityZoneBalance
 * //         EnforcementMode: "PERMISSIVE", // required
 * //         MaxImbalance: Number("int"),
 * //       },
 * //     },
 * //   },
 * //   Specifications: [ // InferenceComponentSpecificationSummaryList
 * //     {
 * //       InstanceType: "ml.t2.medium" || "ml.t2.large" || "ml.t2.xlarge" || "ml.t2.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.12xlarge" || "ml.m5d.24xlarge" || "ml.c4.large" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5d.large" || "ml.c5d.xlarge" || "ml.c5d.2xlarge" || "ml.c5d.4xlarge" || "ml.c5d.9xlarge" || "ml.c5d.18xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.12xlarge" || "ml.r5.24xlarge" || "ml.r5d.large" || "ml.r5d.xlarge" || "ml.r5d.2xlarge" || "ml.r5d.4xlarge" || "ml.r5d.12xlarge" || "ml.r5d.24xlarge" || "ml.inf1.xlarge" || "ml.inf1.2xlarge" || "ml.inf1.6xlarge" || "ml.inf1.24xlarge" || "ml.dl1.24xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.r6i.large" || "ml.r6i.xlarge" || "ml.r6i.2xlarge" || "ml.r6i.4xlarge" || "ml.r6i.8xlarge" || "ml.r6i.12xlarge" || "ml.r6i.16xlarge" || "ml.r6i.24xlarge" || "ml.r6i.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.g6.xlarge" || "ml.g6.2xlarge" || "ml.g6.4xlarge" || "ml.g6.8xlarge" || "ml.g6.12xlarge" || "ml.g6.16xlarge" || "ml.g6.24xlarge" || "ml.g6.48xlarge" || "ml.r8g.medium" || "ml.r8g.large" || "ml.r8g.xlarge" || "ml.r8g.2xlarge" || "ml.r8g.4xlarge" || "ml.r8g.8xlarge" || "ml.r8g.12xlarge" || "ml.r8g.16xlarge" || "ml.r8g.24xlarge" || "ml.r8g.48xlarge" || "ml.g6e.xlarge" || "ml.g6e.2xlarge" || "ml.g6e.4xlarge" || "ml.g6e.8xlarge" || "ml.g6e.12xlarge" || "ml.g6e.16xlarge" || "ml.g6e.24xlarge" || "ml.g6e.48xlarge" || "ml.g7e.2xlarge" || "ml.g7e.4xlarge" || "ml.g7e.8xlarge" || "ml.g7e.12xlarge" || "ml.g7e.24xlarge" || "ml.g7e.48xlarge" || "ml.p4d.24xlarge" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m6gd.large" || "ml.m6gd.xlarge" || "ml.m6gd.2xlarge" || "ml.m6gd.4xlarge" || "ml.m6gd.8xlarge" || "ml.m6gd.12xlarge" || "ml.m6gd.16xlarge" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c6gd.large" || "ml.c6gd.xlarge" || "ml.c6gd.2xlarge" || "ml.c6gd.4xlarge" || "ml.c6gd.8xlarge" || "ml.c6gd.12xlarge" || "ml.c6gd.16xlarge" || "ml.c6gn.large" || "ml.c6gn.xlarge" || "ml.c6gn.2xlarge" || "ml.c6gn.4xlarge" || "ml.c6gn.8xlarge" || "ml.c6gn.12xlarge" || "ml.c6gn.16xlarge" || "ml.r6g.large" || "ml.r6g.xlarge" || "ml.r6g.2xlarge" || "ml.r6g.4xlarge" || "ml.r6g.8xlarge" || "ml.r6g.12xlarge" || "ml.r6g.16xlarge" || "ml.r6gd.large" || "ml.r6gd.xlarge" || "ml.r6gd.2xlarge" || "ml.r6gd.4xlarge" || "ml.r6gd.8xlarge" || "ml.r6gd.12xlarge" || "ml.r6gd.16xlarge" || "ml.p4de.24xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.trn2.48xlarge" || "ml.inf2.xlarge" || "ml.inf2.8xlarge" || "ml.inf2.24xlarge" || "ml.inf2.48xlarge" || "ml.p5.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.m7i.large" || "ml.m7i.xlarge" || "ml.m7i.2xlarge" || "ml.m7i.4xlarge" || "ml.m7i.8xlarge" || "ml.m7i.12xlarge" || "ml.m7i.16xlarge" || "ml.m7i.24xlarge" || "ml.m7i.48xlarge" || "ml.c7i.large" || "ml.c7i.xlarge" || "ml.c7i.2xlarge" || "ml.c7i.4xlarge" || "ml.c7i.8xlarge" || "ml.c7i.12xlarge" || "ml.c7i.16xlarge" || "ml.c7i.24xlarge" || "ml.c7i.48xlarge" || "ml.r7i.large" || "ml.r7i.xlarge" || "ml.r7i.2xlarge" || "ml.r7i.4xlarge" || "ml.r7i.8xlarge" || "ml.r7i.12xlarge" || "ml.r7i.16xlarge" || "ml.r7i.24xlarge" || "ml.r7i.48xlarge" || "ml.c8g.medium" || "ml.c8g.large" || "ml.c8g.xlarge" || "ml.c8g.2xlarge" || "ml.c8g.4xlarge" || "ml.c8g.8xlarge" || "ml.c8g.12xlarge" || "ml.c8g.16xlarge" || "ml.c8g.24xlarge" || "ml.c8g.48xlarge" || "ml.r7gd.medium" || "ml.r7gd.large" || "ml.r7gd.xlarge" || "ml.r7gd.2xlarge" || "ml.r7gd.4xlarge" || "ml.r7gd.8xlarge" || "ml.r7gd.12xlarge" || "ml.r7gd.16xlarge" || "ml.m8g.medium" || "ml.m8g.large" || "ml.m8g.xlarge" || "ml.m8g.2xlarge" || "ml.m8g.4xlarge" || "ml.m8g.8xlarge" || "ml.m8g.12xlarge" || "ml.m8g.16xlarge" || "ml.m8g.24xlarge" || "ml.m8g.48xlarge" || "ml.c6in.large" || "ml.c6in.xlarge" || "ml.c6in.2xlarge" || "ml.c6in.4xlarge" || "ml.c6in.8xlarge" || "ml.c6in.12xlarge" || "ml.c6in.16xlarge" || "ml.c6in.24xlarge" || "ml.c6in.32xlarge" || "ml.p6-b200.48xlarge" || "ml.p6-b300.48xlarge" || "ml.p6e-gb200.36xlarge" || "ml.p5.4xlarge",
 * //       ModelName: "STRING_VALUE",
 * //       Container: {
 * //         DeployedImage: {
 * //           SpecifiedImage: "STRING_VALUE",
 * //           ResolvedImage: "STRING_VALUE",
 * //           ResolutionTime: new Date("TIMESTAMP"),
 * //         },
 * //         ArtifactUrl: "STRING_VALUE",
 * //         Environment: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       StartupParameters: {
 * //         ModelDataDownloadTimeoutInSeconds: Number("int"),
 * //         ContainerStartupHealthCheckTimeoutInSeconds: Number("int"),
 * //       },
 * //       ComputeResourceRequirements: {
 * //         NumberOfCpuCoresRequired: Number("float"),
 * //         NumberOfAcceleratorDevicesRequired: Number("float"),
 * //         MinMemoryRequiredInMb: Number("int"), // required
 * //         MaxMemoryRequiredInMb: Number("int"),
 * //       },
 * //       BaseInferenceComponentName: "STRING_VALUE",
 * //       DataCacheConfig: {
 * //         EnableCaching: true || false, // required
 * //       },
 * //       SchedulingConfig: {
 * //         PlacementStrategy: "SPREAD" || "BINPACK", // required
 * //         AvailabilityZoneBalance: {
 * //           EnforcementMode: "PERMISSIVE", // required
 * //           MaxImbalance: Number("int"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   RuntimeConfig: { // InferenceComponentRuntimeConfigSummary
 * //     DesiredCopyCount: Number("int"),
 * //     CurrentCopyCount: Number("int"),
 * //     PlacementStatus: [ // InferenceComponentPlacementStatusList
 * //       { // InferenceComponentPlacementStatus
 * //         InstanceType: "ml.t2.medium" || "ml.t2.large" || "ml.t2.xlarge" || "ml.t2.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.12xlarge" || "ml.m5d.24xlarge" || "ml.c4.large" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5d.large" || "ml.c5d.xlarge" || "ml.c5d.2xlarge" || "ml.c5d.4xlarge" || "ml.c5d.9xlarge" || "ml.c5d.18xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.12xlarge" || "ml.r5.24xlarge" || "ml.r5d.large" || "ml.r5d.xlarge" || "ml.r5d.2xlarge" || "ml.r5d.4xlarge" || "ml.r5d.12xlarge" || "ml.r5d.24xlarge" || "ml.inf1.xlarge" || "ml.inf1.2xlarge" || "ml.inf1.6xlarge" || "ml.inf1.24xlarge" || "ml.dl1.24xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.r6i.large" || "ml.r6i.xlarge" || "ml.r6i.2xlarge" || "ml.r6i.4xlarge" || "ml.r6i.8xlarge" || "ml.r6i.12xlarge" || "ml.r6i.16xlarge" || "ml.r6i.24xlarge" || "ml.r6i.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.g6.xlarge" || "ml.g6.2xlarge" || "ml.g6.4xlarge" || "ml.g6.8xlarge" || "ml.g6.12xlarge" || "ml.g6.16xlarge" || "ml.g6.24xlarge" || "ml.g6.48xlarge" || "ml.r8g.medium" || "ml.r8g.large" || "ml.r8g.xlarge" || "ml.r8g.2xlarge" || "ml.r8g.4xlarge" || "ml.r8g.8xlarge" || "ml.r8g.12xlarge" || "ml.r8g.16xlarge" || "ml.r8g.24xlarge" || "ml.r8g.48xlarge" || "ml.g6e.xlarge" || "ml.g6e.2xlarge" || "ml.g6e.4xlarge" || "ml.g6e.8xlarge" || "ml.g6e.12xlarge" || "ml.g6e.16xlarge" || "ml.g6e.24xlarge" || "ml.g6e.48xlarge" || "ml.g7e.2xlarge" || "ml.g7e.4xlarge" || "ml.g7e.8xlarge" || "ml.g7e.12xlarge" || "ml.g7e.24xlarge" || "ml.g7e.48xlarge" || "ml.p4d.24xlarge" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m6gd.large" || "ml.m6gd.xlarge" || "ml.m6gd.2xlarge" || "ml.m6gd.4xlarge" || "ml.m6gd.8xlarge" || "ml.m6gd.12xlarge" || "ml.m6gd.16xlarge" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c6gd.large" || "ml.c6gd.xlarge" || "ml.c6gd.2xlarge" || "ml.c6gd.4xlarge" || "ml.c6gd.8xlarge" || "ml.c6gd.12xlarge" || "ml.c6gd.16xlarge" || "ml.c6gn.large" || "ml.c6gn.xlarge" || "ml.c6gn.2xlarge" || "ml.c6gn.4xlarge" || "ml.c6gn.8xlarge" || "ml.c6gn.12xlarge" || "ml.c6gn.16xlarge" || "ml.r6g.large" || "ml.r6g.xlarge" || "ml.r6g.2xlarge" || "ml.r6g.4xlarge" || "ml.r6g.8xlarge" || "ml.r6g.12xlarge" || "ml.r6g.16xlarge" || "ml.r6gd.large" || "ml.r6gd.xlarge" || "ml.r6gd.2xlarge" || "ml.r6gd.4xlarge" || "ml.r6gd.8xlarge" || "ml.r6gd.12xlarge" || "ml.r6gd.16xlarge" || "ml.p4de.24xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.trn2.48xlarge" || "ml.inf2.xlarge" || "ml.inf2.8xlarge" || "ml.inf2.24xlarge" || "ml.inf2.48xlarge" || "ml.p5.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.m7i.large" || "ml.m7i.xlarge" || "ml.m7i.2xlarge" || "ml.m7i.4xlarge" || "ml.m7i.8xlarge" || "ml.m7i.12xlarge" || "ml.m7i.16xlarge" || "ml.m7i.24xlarge" || "ml.m7i.48xlarge" || "ml.c7i.large" || "ml.c7i.xlarge" || "ml.c7i.2xlarge" || "ml.c7i.4xlarge" || "ml.c7i.8xlarge" || "ml.c7i.12xlarge" || "ml.c7i.16xlarge" || "ml.c7i.24xlarge" || "ml.c7i.48xlarge" || "ml.r7i.large" || "ml.r7i.xlarge" || "ml.r7i.2xlarge" || "ml.r7i.4xlarge" || "ml.r7i.8xlarge" || "ml.r7i.12xlarge" || "ml.r7i.16xlarge" || "ml.r7i.24xlarge" || "ml.r7i.48xlarge" || "ml.c8g.medium" || "ml.c8g.large" || "ml.c8g.xlarge" || "ml.c8g.2xlarge" || "ml.c8g.4xlarge" || "ml.c8g.8xlarge" || "ml.c8g.12xlarge" || "ml.c8g.16xlarge" || "ml.c8g.24xlarge" || "ml.c8g.48xlarge" || "ml.r7gd.medium" || "ml.r7gd.large" || "ml.r7gd.xlarge" || "ml.r7gd.2xlarge" || "ml.r7gd.4xlarge" || "ml.r7gd.8xlarge" || "ml.r7gd.12xlarge" || "ml.r7gd.16xlarge" || "ml.m8g.medium" || "ml.m8g.large" || "ml.m8g.xlarge" || "ml.m8g.2xlarge" || "ml.m8g.4xlarge" || "ml.m8g.8xlarge" || "ml.m8g.12xlarge" || "ml.m8g.16xlarge" || "ml.m8g.24xlarge" || "ml.m8g.48xlarge" || "ml.c6in.large" || "ml.c6in.xlarge" || "ml.c6in.2xlarge" || "ml.c6in.4xlarge" || "ml.c6in.8xlarge" || "ml.c6in.12xlarge" || "ml.c6in.16xlarge" || "ml.c6in.24xlarge" || "ml.c6in.32xlarge" || "ml.p6-b200.48xlarge" || "ml.p6-b300.48xlarge" || "ml.p6e-gb200.36xlarge" || "ml.p5.4xlarge", // required
 * //         CurrentCopyCount: Number("int"), // required
 * //       },
 * //     ],
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   InferenceComponentStatus: "InService" || "Creating" || "Updating" || "Failed" || "Deleting",
 * //   LastDeploymentConfig: { // InferenceComponentDeploymentConfig
 * //     RollingUpdatePolicy: { // InferenceComponentRollingUpdatePolicy
 * //       MaximumBatchSize: { // InferenceComponentCapacitySize
 * //         Type: "COPY_COUNT" || "CAPACITY_PERCENT", // required
 * //         Value: Number("int"), // required
 * //       },
 * //       WaitIntervalInSeconds: Number("int"), // required
 * //       MaximumExecutionTimeoutInSeconds: Number("int"),
 * //       RollbackMaximumBatchSize: {
 * //         Type: "COPY_COUNT" || "CAPACITY_PERCENT", // required
 * //         Value: Number("int"), // required
 * //       },
 * //     },
 * //     AutoRollbackConfiguration: { // AutoRollbackConfig
 * //       Alarms: [ // AlarmList
 * //         { // Alarm
 * //           AlarmName: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInferenceComponentCommandInput - {@link DescribeInferenceComponentCommandInput}
 * @returns {@link DescribeInferenceComponentCommandOutput}
 * @see {@link DescribeInferenceComponentCommandInput} for command's `input` shape.
 * @see {@link DescribeInferenceComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeInferenceComponentCommand extends $Command
  .classBuilder<
    DescribeInferenceComponentCommandInput,
    DescribeInferenceComponentCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DescribeInferenceComponent", {})
  .n("SageMakerClient", "DescribeInferenceComponentCommand")
  .sc(DescribeInferenceComponent$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInferenceComponentInput;
      output: DescribeInferenceComponentOutput;
    };
    sdk: {
      input: DescribeInferenceComponentCommandInput;
      output: DescribeInferenceComponentCommandOutput;
    };
  };
}
