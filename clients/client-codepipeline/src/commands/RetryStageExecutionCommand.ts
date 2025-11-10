// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RetryStageExecutionInput, RetryStageExecutionOutput } from "../models/models_0";
import { RetryStageExecution } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RetryStageExecutionCommand}.
 */
export interface RetryStageExecutionCommandInput extends RetryStageExecutionInput {}
/**
 * @public
 *
 * The output of {@link RetryStageExecutionCommand}.
 */
export interface RetryStageExecutionCommandOutput extends RetryStageExecutionOutput, __MetadataBearer {}

/**
 * <p>You can retry a stage that has failed without having to run a pipeline again from
 *             the beginning. You do this by either retrying the failed actions in a stage or by
 *             retrying all actions in the stage starting from the first action in the stage. When you
 *             retry the failed actions in a stage, all actions that are still in progress continue
 *             working, and failed actions are triggered again. When you retry a failed stage from the
 *             first action in the stage, the stage cannot have any actions in progress. Before a stage
 *             can be retried, it must either have all actions failed or some actions failed and some
 *             succeeded.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, RetryStageExecutionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, RetryStageExecutionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // RetryStageExecutionInput
 *   pipelineName: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE", // required
 *   pipelineExecutionId: "STRING_VALUE", // required
 *   retryMode: "FAILED_ACTIONS" || "ALL_ACTIONS", // required
 * };
 * const command = new RetryStageExecutionCommand(input);
 * const response = await client.send(command);
 * // { // RetryStageExecutionOutput
 * //   pipelineExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RetryStageExecutionCommandInput - {@link RetryStageExecutionCommandInput}
 * @returns {@link RetryStageExecutionCommandOutput}
 * @see {@link RetryStageExecutionCommandInput} for command's `input` shape.
 * @see {@link RetryStageExecutionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ConcurrentPipelineExecutionsLimitExceededException} (client fault)
 *  <p>The pipeline has reached the limit for concurrent pipeline executions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request cannot be handled because the pipeline is busy handling ongoing
 *             activities. Try again later.</p>
 *
 * @throws {@link NotLatestPipelineExecutionException} (client fault)
 *  <p>The stage has failed in a later run of the pipeline and the
 *                 <code>pipelineExecutionId</code> associated with the request is out of
 *             date.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link StageNotFoundException} (client fault)
 *  <p>The stage was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link StageNotRetryableException} (client fault)
 *  <p>Unable to retry. The pipeline structure or stage state might have changed while
 *             actions awaited retry, or the stage contains no failed
 *             actions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 *
 * @public
 */
export class RetryStageExecutionCommand extends $Command
  .classBuilder<
    RetryStageExecutionCommandInput,
    RetryStageExecutionCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodePipeline_20150709", "RetryStageExecution", {})
  .n("CodePipelineClient", "RetryStageExecutionCommand")
  .sc(RetryStageExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RetryStageExecutionInput;
      output: RetryStageExecutionOutput;
    };
    sdk: {
      input: RetryStageExecutionCommandInput;
      output: RetryStageExecutionCommandOutput;
    };
  };
}
