// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopPipelineExecutionRequest, StopPipelineExecutionResponse } from "../models/models_4";
import { de_StopPipelineExecutionCommand, se_StopPipelineExecutionCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopPipelineExecutionCommand}.
 */
export interface StopPipelineExecutionCommandInput extends StopPipelineExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StopPipelineExecutionCommand}.
 */
export interface StopPipelineExecutionCommandOutput extends StopPipelineExecutionResponse, __MetadataBearer {}

/**
 * <p>Stops a pipeline execution.</p>
 *          <p>
 *             <b>Callback Step</b>
 *          </p>
 *          <p>A pipeline execution won't stop while a callback step is running.
 *         When you call <code>StopPipelineExecution</code>
 *         on a pipeline execution with a running callback step, SageMaker Pipelines sends an
 *         additional Amazon SQS message to the specified SQS queue. The body of the SQS message
 *         contains a "Status" field which is set to "Stopping".</p>
 *          <p>You should add logic to your Amazon SQS message consumer to take any needed action (for
 *         example, resource cleanup) upon receipt of the message followed by a call to
 *         <code>SendPipelineExecutionStepSuccess</code> or
 *         <code>SendPipelineExecutionStepFailure</code>.</p>
 *          <p>Only when SageMaker Pipelines receives one of these calls will it stop the pipeline execution.</p>
 *          <p>
 *             <b>Lambda Step</b>
 *          </p>
 *          <p>A pipeline execution can't be stopped while a lambda step is running because the Lambda
 *         function invoked by the lambda step can't be stopped. If you attempt to stop the execution
 *         while the Lambda function is running, the pipeline waits for the Lambda function to finish
 *         or until the timeout is hit, whichever occurs first, and then stops. If the Lambda function
 *         finishes, the pipeline execution status is <code>Stopped</code>. If the timeout is hit
 *         the pipeline execution status is <code>Failed</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopPipelineExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopPipelineExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // StopPipelineExecutionRequest
 *   PipelineExecutionArn: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new StopPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StopPipelineExecutionResponse
 * //   PipelineExecutionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopPipelineExecutionCommandInput - {@link StopPipelineExecutionCommandInput}
 * @returns {@link StopPipelineExecutionCommandOutput}
 * @see {@link StopPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StopPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class StopPipelineExecutionCommand extends $Command
  .classBuilder<
    StopPipelineExecutionCommandInput,
    StopPipelineExecutionCommandOutput,
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
  .s("SageMaker", "StopPipelineExecution", {})
  .n("SageMakerClient", "StopPipelineExecutionCommand")
  .f(void 0, void 0)
  .ser(se_StopPipelineExecutionCommand)
  .de(de_StopPipelineExecutionCommand)
  .build() {}
