// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTrainingJobRequest, UpdateTrainingJobResponse } from "../models/models_4";
import { de_UpdateTrainingJobCommand, se_UpdateTrainingJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTrainingJobCommand}.
 */
export interface UpdateTrainingJobCommandInput extends UpdateTrainingJobRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrainingJobCommand}.
 */
export interface UpdateTrainingJobCommandOutput extends UpdateTrainingJobResponse, __MetadataBearer {}

/**
 * <p>Update a model training job to request a new Debugger profiling configuration or to
 *             change warm pool retention length.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateTrainingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateTrainingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateTrainingJobRequest
 *   TrainingJobName: "STRING_VALUE", // required
 *   ProfilerConfig: { // ProfilerConfigForUpdate
 *     S3OutputPath: "STRING_VALUE",
 *     ProfilingIntervalInMilliseconds: Number("long"),
 *     ProfilingParameters: { // ProfilingParameters
 *       "<keys>": "STRING_VALUE",
 *     },
 *     DisableProfiler: true || false,
 *   },
 *   ProfilerRuleConfigurations: [ // ProfilerRuleConfigurations
 *     { // ProfilerRuleConfiguration
 *       RuleConfigurationName: "STRING_VALUE", // required
 *       LocalPath: "STRING_VALUE",
 *       S3OutputPath: "STRING_VALUE",
 *       RuleEvaluatorImage: "STRING_VALUE", // required
 *       InstanceType: "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge",
 *       VolumeSizeInGB: Number("int"),
 *       RuleParameters: { // RuleParameters
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   ResourceConfig: { // ResourceConfigForUpdate
 *     KeepAlivePeriodInSeconds: Number("int"), // required
 *   },
 *   RemoteDebugConfig: { // RemoteDebugConfigForUpdate
 *     EnableRemoteDebug: true || false,
 *   },
 * };
 * const command = new UpdateTrainingJobCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTrainingJobResponse
 * //   TrainingJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateTrainingJobCommandInput - {@link UpdateTrainingJobCommandInput}
 * @returns {@link UpdateTrainingJobCommandOutput}
 * @see {@link UpdateTrainingJobCommandInput} for command's `input` shape.
 * @see {@link UpdateTrainingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class UpdateTrainingJobCommand extends $Command
  .classBuilder<
    UpdateTrainingJobCommandInput,
    UpdateTrainingJobCommandOutput,
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
  .s("SageMaker", "UpdateTrainingJob", {})
  .n("SageMakerClient", "UpdateTrainingJobCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTrainingJobCommand)
  .de(de_UpdateTrainingJobCommand)
  .build() {}
