// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StopPipelineExecutionInput, StopPipelineExecutionOutput } from "../models/models_0";
import { StopPipelineExecution$ } from "../schemas/schemas_0";

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
export interface StopPipelineExecutionCommandInput extends StopPipelineExecutionInput {}
/**
 * @public
 *
 * The output of {@link StopPipelineExecutionCommand}.
 */
export interface StopPipelineExecutionCommandOutput extends StopPipelineExecutionOutput, __MetadataBearer {}

/**
 * <p>Stops the specified pipeline execution. You choose to either stop the pipeline
 *             execution by completing in-progress actions without starting subsequent actions, or by
 *             abandoning in-progress actions. While completing or abandoning in-progress actions, the
 *             pipeline execution is in a <code>Stopping</code> state. After all in-progress actions
 *             are completed or abandoned, the pipeline execution is in a <code>Stopped</code>
 *             state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, StopPipelineExecutionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, StopPipelineExecutionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // StopPipelineExecutionInput
 *   pipelineName: "STRING_VALUE", // required
 *   pipelineExecutionId: "STRING_VALUE", // required
 *   abandon: true || false,
 *   reason: "STRING_VALUE",
 * };
 * const command = new StopPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StopPipelineExecutionOutput
 * //   pipelineExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopPipelineExecutionCommandInput - {@link StopPipelineExecutionCommandInput}
 * @returns {@link StopPipelineExecutionCommandOutput}
 * @see {@link StopPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StopPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request cannot be handled because the pipeline is busy handling ongoing
 *             activities. Try again later.</p>
 *
 * @throws {@link DuplicatedStopRequestException} (client fault)
 *  <p>The pipeline execution is already in a <code>Stopping</code> state. If you already
 *             chose to stop and wait, you cannot make that request again. You can choose to stop and
 *             abandon now, but be aware that this option can lead to failed tasks or out of sequence
 *             tasks. If you already chose to stop and abandon, you cannot make that request
 *             again.</p>
 *
 * @throws {@link PipelineExecutionNotStoppableException} (client fault)
 *  <p>Unable to stop the pipeline execution. The execution might already be in a
 *                 <code>Stopped</code> state, or it might no longer be in progress.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
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
export class StopPipelineExecutionCommand extends $Command
  .classBuilder<
    StopPipelineExecutionCommandInput,
    StopPipelineExecutionCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodePipeline_20150709", "StopPipelineExecution", {})
  .n("CodePipelineClient", "StopPipelineExecutionCommand")
  .sc(StopPipelineExecution$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopPipelineExecutionInput;
      output: StopPipelineExecutionOutput;
    };
    sdk: {
      input: StopPipelineExecutionCommandInput;
      output: StopPipelineExecutionCommandOutput;
    };
  };
}
