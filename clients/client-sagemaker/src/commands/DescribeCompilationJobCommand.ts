// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCompilationJobRequest, DescribeCompilationJobResponse } from "../models/models_2";
import { de_DescribeCompilationJobCommand, se_DescribeCompilationJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCompilationJobCommand}.
 */
export interface DescribeCompilationJobCommandInput extends DescribeCompilationJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCompilationJobCommand}.
 */
export interface DescribeCompilationJobCommandOutput extends DescribeCompilationJobResponse, __MetadataBearer {}

/**
 * <p>Returns information about a model compilation job.</p>
 *          <p>To create a model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateCompilationJob.html">CreateCompilationJob</a>. To get information about multiple model compilation
 *             jobs, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListCompilationJobs.html">ListCompilationJobs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeCompilationJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeCompilationJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeCompilationJobRequest
 *   CompilationJobName: "STRING_VALUE", // required
 * };
 * const command = new DescribeCompilationJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCompilationJobResponse
 * //   CompilationJobName: "STRING_VALUE", // required
 * //   CompilationJobArn: "STRING_VALUE", // required
 * //   CompilationJobStatus: "INPROGRESS" || "COMPLETED" || "FAILED" || "STARTING" || "STOPPING" || "STOPPED", // required
 * //   CompilationStartTime: new Date("TIMESTAMP"),
 * //   CompilationEndTime: new Date("TIMESTAMP"),
 * //   StoppingCondition: { // StoppingCondition
 * //     MaxRuntimeInSeconds: Number("int"),
 * //     MaxWaitTimeInSeconds: Number("int"),
 * //     MaxPendingTimeInSeconds: Number("int"),
 * //   },
 * //   InferenceImage: "STRING_VALUE",
 * //   ModelPackageVersionArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   FailureReason: "STRING_VALUE", // required
 * //   ModelArtifacts: { // ModelArtifacts
 * //     S3ModelArtifacts: "STRING_VALUE", // required
 * //   },
 * //   ModelDigests: { // ModelDigests
 * //     ArtifactDigest: "STRING_VALUE",
 * //   },
 * //   RoleArn: "STRING_VALUE", // required
 * //   InputConfig: { // InputConfig
 * //     S3Uri: "STRING_VALUE", // required
 * //     DataInputConfig: "STRING_VALUE",
 * //     Framework: "TENSORFLOW" || "KERAS" || "MXNET" || "ONNX" || "PYTORCH" || "XGBOOST" || "TFLITE" || "DARKNET" || "SKLEARN", // required
 * //     FrameworkVersion: "STRING_VALUE",
 * //   },
 * //   OutputConfig: { // OutputConfig
 * //     S3OutputLocation: "STRING_VALUE", // required
 * //     TargetDevice: "lambda" || "ml_m4" || "ml_m5" || "ml_m6g" || "ml_c4" || "ml_c5" || "ml_c6g" || "ml_p2" || "ml_p3" || "ml_g4dn" || "ml_inf1" || "ml_inf2" || "ml_trn1" || "ml_eia2" || "jetson_tx1" || "jetson_tx2" || "jetson_nano" || "jetson_xavier" || "rasp3b" || "rasp4b" || "imx8qm" || "deeplens" || "rk3399" || "rk3288" || "aisage" || "sbe_c" || "qcs605" || "qcs603" || "sitara_am57x" || "amba_cv2" || "amba_cv22" || "amba_cv25" || "x86_win32" || "x86_win64" || "coreml" || "jacinto_tda4vm" || "imx8mplus",
 * //     TargetPlatform: { // TargetPlatform
 * //       Os: "ANDROID" || "LINUX", // required
 * //       Arch: "X86_64" || "X86" || "ARM64" || "ARM_EABI" || "ARM_EABIHF", // required
 * //       Accelerator: "INTEL_GRAPHICS" || "MALI" || "NVIDIA" || "NNA",
 * //     },
 * //     CompilerOptions: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //   },
 * //   VpcConfig: { // NeoVpcConfig
 * //     SecurityGroupIds: [ // NeoVpcSecurityGroupIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //     Subnets: [ // NeoVpcSubnets // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   DerivedInformation: { // DerivedInformation
 * //     DerivedDataInputConfig: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCompilationJobCommandInput - {@link DescribeCompilationJobCommandInput}
 * @returns {@link DescribeCompilationJobCommandOutput}
 * @see {@link DescribeCompilationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeCompilationJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeCompilationJobCommand extends $Command
  .classBuilder<
    DescribeCompilationJobCommandInput,
    DescribeCompilationJobCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DescribeCompilationJob", {})
  .n("SageMakerClient", "DescribeCompilationJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCompilationJobCommand)
  .de(de_DescribeCompilationJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCompilationJobRequest;
      output: DescribeCompilationJobResponse;
    };
    sdk: {
      input: DescribeCompilationJobCommandInput;
      output: DescribeCompilationJobCommandOutput;
    };
  };
}
