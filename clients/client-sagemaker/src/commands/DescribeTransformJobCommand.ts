// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTransformJobRequest, DescribeTransformJobResponse } from "../models/models_3";
import { de_DescribeTransformJobCommand, se_DescribeTransformJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransformJobCommand}.
 */
export interface DescribeTransformJobCommandInput extends DescribeTransformJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransformJobCommand}.
 */
export interface DescribeTransformJobCommandOutput extends DescribeTransformJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a transform job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeTransformJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeTransformJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeTransformJobRequest
 *   TransformJobName: "STRING_VALUE", // required
 * };
 * const command = new DescribeTransformJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransformJobResponse
 * //   TransformJobName: "STRING_VALUE", // required
 * //   TransformJobArn: "STRING_VALUE", // required
 * //   TransformJobStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped", // required
 * //   FailureReason: "STRING_VALUE",
 * //   ModelName: "STRING_VALUE", // required
 * //   MaxConcurrentTransforms: Number("int"),
 * //   ModelClientConfig: { // ModelClientConfig
 * //     InvocationsTimeoutInSeconds: Number("int"),
 * //     InvocationsMaxRetries: Number("int"),
 * //   },
 * //   MaxPayloadInMB: Number("int"),
 * //   BatchStrategy: "MultiRecord" || "SingleRecord",
 * //   Environment: { // TransformEnvironmentMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   TransformInput: { // TransformInput
 * //     DataSource: { // TransformDataSource
 * //       S3DataSource: { // TransformS3DataSource
 * //         S3DataType: "ManifestFile" || "S3Prefix" || "AugmentedManifestFile", // required
 * //         S3Uri: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     ContentType: "STRING_VALUE",
 * //     CompressionType: "None" || "Gzip",
 * //     SplitType: "None" || "Line" || "RecordIO" || "TFRecord",
 * //   },
 * //   TransformOutput: { // TransformOutput
 * //     S3OutputPath: "STRING_VALUE", // required
 * //     Accept: "STRING_VALUE",
 * //     AssembleWith: "None" || "Line",
 * //     KmsKeyId: "STRING_VALUE",
 * //   },
 * //   DataCaptureConfig: { // BatchDataCaptureConfig
 * //     DestinationS3Uri: "STRING_VALUE", // required
 * //     KmsKeyId: "STRING_VALUE",
 * //     GenerateInferenceId: true || false,
 * //   },
 * //   TransformResources: { // TransformResources
 * //     InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge", // required
 * //     InstanceCount: Number("int"), // required
 * //     VolumeKmsKeyId: "STRING_VALUE",
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   TransformStartTime: new Date("TIMESTAMP"),
 * //   TransformEndTime: new Date("TIMESTAMP"),
 * //   LabelingJobArn: "STRING_VALUE",
 * //   AutoMLJobArn: "STRING_VALUE",
 * //   DataProcessing: { // DataProcessing
 * //     InputFilter: "STRING_VALUE",
 * //     OutputFilter: "STRING_VALUE",
 * //     JoinSource: "Input" || "None",
 * //   },
 * //   ExperimentConfig: { // ExperimentConfig
 * //     ExperimentName: "STRING_VALUE",
 * //     TrialName: "STRING_VALUE",
 * //     TrialComponentDisplayName: "STRING_VALUE",
 * //     RunName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTransformJobCommandInput - {@link DescribeTransformJobCommandInput}
 * @returns {@link DescribeTransformJobCommandOutput}
 * @see {@link DescribeTransformJobCommandInput} for command's `input` shape.
 * @see {@link DescribeTransformJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeTransformJobCommand extends $Command
  .classBuilder<
    DescribeTransformJobCommandInput,
    DescribeTransformJobCommandOutput,
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
  .s("SageMaker", "DescribeTransformJob", {})
  .n("SageMakerClient", "DescribeTransformJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTransformJobCommand)
  .de(de_DescribeTransformJobCommand)
  .build() {}
