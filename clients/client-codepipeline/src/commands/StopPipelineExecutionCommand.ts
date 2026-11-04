// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopPipelineExecutionInput, StopPipelineExecutionOutput } from "../models/models_0";
import { StopPipelineExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Stops the specified pipeline execution. You choose to either stop the pipeline execution by completing in-progress actions without starting subsequent actions, or by abandoning in-progress actions. While completing or abandoning in-progress actions, the pipeline execution is in a `Stopping` state. After all in-progress actions are completed or abandoned, the pipeline execution is in a `Stopped` state.
 *
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
 *
 * Your request cannot be handled because the pipeline is busy handling ongoing activities. Try again later.
 *
 * @throws {@link DuplicatedStopRequestException} (client fault)
 *
 * The pipeline execution is already in a `Stopping` state. If you already chose to stop and wait, you cannot make that request again. You can choose to stop and abandon now, but be aware that this option can lead to failed tasks or out of sequence tasks. If you already chose to stop and abandon, you cannot make that request again.
 *
 * @throws {@link PipelineExecutionNotStoppableException} (client fault)
 *
 * Unable to stop the pipeline execution. The execution might already be in a `Stopped` state, or it might no longer be in progress.
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *
 * The pipeline was specified in an invalid format or cannot be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The validation was specified in an invalid format.
 *
 * @throws {@link CodePipelineServiceException}
 *
 * Base exception class for all service exceptions from CodePipeline service.
 *
 * @public
 */
export class StopPipelineExecutionCommand extends command<StopPipelineExecutionCommandInput, StopPipelineExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StopPipelineExecution",
  StopPipelineExecution$
) {
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
