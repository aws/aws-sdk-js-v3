// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeModelInput, DescribeModelOutput } from "../models/models_2";
import { de_DescribeModelCommand, se_DescribeModelCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeModelCommand}.
 */
export interface DescribeModelCommandInput extends DescribeModelInput {}
/**
 * @public
 *
 * The output of {@link DescribeModelCommand}.
 */
export interface DescribeModelCommandOutput extends DescribeModelOutput, __MetadataBearer {}

/**
 * <p>Describes a model that you created using the <code>CreateModel</code>
 *             API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeModelCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeModelCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeModelInput
 *   ModelName: "STRING_VALUE", // required
 * };
 * const command = new DescribeModelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeModelOutput
 * //   ModelName: "STRING_VALUE", // required
 * //   PrimaryContainer: { // ContainerDefinition
 * //     ContainerHostname: "STRING_VALUE",
 * //     Image: "STRING_VALUE",
 * //     ImageConfig: { // ImageConfig
 * //       RepositoryAccessMode: "Platform" || "Vpc", // required
 * //       RepositoryAuthConfig: { // RepositoryAuthConfig
 * //         RepositoryCredentialsProviderArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     Mode: "SingleModel" || "MultiModel",
 * //     ModelDataUrl: "STRING_VALUE",
 * //     ModelDataSource: { // ModelDataSource
 * //       S3DataSource: { // S3ModelDataSource
 * //         S3Uri: "STRING_VALUE", // required
 * //         S3DataType: "S3Prefix" || "S3Object", // required
 * //         CompressionType: "None" || "Gzip", // required
 * //         ModelAccessConfig: { // ModelAccessConfig
 * //           AcceptEula: true || false, // required
 * //         },
 * //       },
 * //     },
 * //     Environment: { // EnvironmentMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     ModelPackageName: "STRING_VALUE",
 * //     InferenceSpecificationName: "STRING_VALUE",
 * //     MultiModelConfig: { // MultiModelConfig
 * //       ModelCacheSetting: "Enabled" || "Disabled",
 * //     },
 * //   },
 * //   Containers: [ // ContainerDefinitionList
 * //     {
 * //       ContainerHostname: "STRING_VALUE",
 * //       Image: "STRING_VALUE",
 * //       ImageConfig: {
 * //         RepositoryAccessMode: "Platform" || "Vpc", // required
 * //         RepositoryAuthConfig: {
 * //           RepositoryCredentialsProviderArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       Mode: "SingleModel" || "MultiModel",
 * //       ModelDataUrl: "STRING_VALUE",
 * //       ModelDataSource: {
 * //         S3DataSource: {
 * //           S3Uri: "STRING_VALUE", // required
 * //           S3DataType: "S3Prefix" || "S3Object", // required
 * //           CompressionType: "None" || "Gzip", // required
 * //           ModelAccessConfig: {
 * //             AcceptEula: true || false, // required
 * //           },
 * //         },
 * //       },
 * //       Environment: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ModelPackageName: "STRING_VALUE",
 * //       InferenceSpecificationName: "STRING_VALUE",
 * //       MultiModelConfig: {
 * //         ModelCacheSetting: "Enabled" || "Disabled",
 * //       },
 * //     },
 * //   ],
 * //   InferenceExecutionConfig: { // InferenceExecutionConfig
 * //     Mode: "Serial" || "Direct", // required
 * //   },
 * //   ExecutionRoleArn: "STRING_VALUE",
 * //   VpcConfig: { // VpcConfig
 * //     SecurityGroupIds: [ // VpcSecurityGroupIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //     Subnets: [ // Subnets // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   ModelArn: "STRING_VALUE", // required
 * //   EnableNetworkIsolation: true || false,
 * //   DeploymentRecommendation: { // DeploymentRecommendation
 * //     RecommendationStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "NOT_APPLICABLE", // required
 * //     RealTimeInferenceRecommendations: [ // RealTimeInferenceRecommendations
 * //       { // RealTimeInferenceRecommendation
 * //         RecommendationId: "STRING_VALUE", // required
 * //         InstanceType: "ml.t2.medium" || "ml.t2.large" || "ml.t2.xlarge" || "ml.t2.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.12xlarge" || "ml.m5d.24xlarge" || "ml.c4.large" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5d.large" || "ml.c5d.xlarge" || "ml.c5d.2xlarge" || "ml.c5d.4xlarge" || "ml.c5d.9xlarge" || "ml.c5d.18xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.12xlarge" || "ml.r5.24xlarge" || "ml.r5d.large" || "ml.r5d.xlarge" || "ml.r5d.2xlarge" || "ml.r5d.4xlarge" || "ml.r5d.12xlarge" || "ml.r5d.24xlarge" || "ml.inf1.xlarge" || "ml.inf1.2xlarge" || "ml.inf1.6xlarge" || "ml.inf1.24xlarge" || "ml.dl1.24xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.g6.xlarge" || "ml.g6.2xlarge" || "ml.g6.4xlarge" || "ml.g6.8xlarge" || "ml.g6.12xlarge" || "ml.g6.16xlarge" || "ml.g6.24xlarge" || "ml.g6.48xlarge" || "ml.p4d.24xlarge" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m6gd.large" || "ml.m6gd.xlarge" || "ml.m6gd.2xlarge" || "ml.m6gd.4xlarge" || "ml.m6gd.8xlarge" || "ml.m6gd.12xlarge" || "ml.m6gd.16xlarge" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c6gd.large" || "ml.c6gd.xlarge" || "ml.c6gd.2xlarge" || "ml.c6gd.4xlarge" || "ml.c6gd.8xlarge" || "ml.c6gd.12xlarge" || "ml.c6gd.16xlarge" || "ml.c6gn.large" || "ml.c6gn.xlarge" || "ml.c6gn.2xlarge" || "ml.c6gn.4xlarge" || "ml.c6gn.8xlarge" || "ml.c6gn.12xlarge" || "ml.c6gn.16xlarge" || "ml.r6g.large" || "ml.r6g.xlarge" || "ml.r6g.2xlarge" || "ml.r6g.4xlarge" || "ml.r6g.8xlarge" || "ml.r6g.12xlarge" || "ml.r6g.16xlarge" || "ml.r6gd.large" || "ml.r6gd.xlarge" || "ml.r6gd.2xlarge" || "ml.r6gd.4xlarge" || "ml.r6gd.8xlarge" || "ml.r6gd.12xlarge" || "ml.r6gd.16xlarge" || "ml.p4de.24xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.inf2.xlarge" || "ml.inf2.8xlarge" || "ml.inf2.24xlarge" || "ml.inf2.48xlarge" || "ml.p5.48xlarge" || "ml.m7i.large" || "ml.m7i.xlarge" || "ml.m7i.2xlarge" || "ml.m7i.4xlarge" || "ml.m7i.8xlarge" || "ml.m7i.12xlarge" || "ml.m7i.16xlarge" || "ml.m7i.24xlarge" || "ml.m7i.48xlarge" || "ml.c7i.large" || "ml.c7i.xlarge" || "ml.c7i.2xlarge" || "ml.c7i.4xlarge" || "ml.c7i.8xlarge" || "ml.c7i.12xlarge" || "ml.c7i.16xlarge" || "ml.c7i.24xlarge" || "ml.c7i.48xlarge" || "ml.r7i.large" || "ml.r7i.xlarge" || "ml.r7i.2xlarge" || "ml.r7i.4xlarge" || "ml.r7i.8xlarge" || "ml.r7i.12xlarge" || "ml.r7i.16xlarge" || "ml.r7i.24xlarge" || "ml.r7i.48xlarge", // required
 * //         Environment: "<EnvironmentMap>",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeModelCommandInput - {@link DescribeModelCommandInput}
 * @returns {@link DescribeModelCommandOutput}
 * @see {@link DescribeModelCommandInput} for command's `input` shape.
 * @see {@link DescribeModelCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class DescribeModelCommand extends $Command
  .classBuilder<
    DescribeModelCommandInput,
    DescribeModelCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DescribeModel", {})
  .n("SageMakerClient", "DescribeModelCommand")
  .f(void 0, void 0)
  .ser(se_DescribeModelCommand)
  .de(de_DescribeModelCommand)
  .build() {}
