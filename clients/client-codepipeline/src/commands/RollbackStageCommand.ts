// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RollbackStageInput, RollbackStageOutput } from "../models/models_0";
import { RollbackStage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RollbackStageCommand}.
 */
export interface RollbackStageCommandInput extends RollbackStageInput {}
/**
 * @public
 *
 * The output of {@link RollbackStageCommand}.
 */
export interface RollbackStageCommandOutput extends RollbackStageOutput, __MetadataBearer {}

/**
 * Rolls back a stage execution.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, RollbackStageCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, RollbackStageCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // RollbackStageInput
 *   pipelineName: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE", // required
 *   targetPipelineExecutionId: "STRING_VALUE", // required
 * };
 * const command = new RollbackStageCommand(input);
 * const response = await client.send(command);
 * // { // RollbackStageOutput
 * //   pipelineExecutionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param RollbackStageCommandInput - {@link RollbackStageCommandInput}
 * @returns {@link RollbackStageCommandOutput}
 * @see {@link RollbackStageCommandInput} for command's `input` shape.
 * @see {@link RollbackStageCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Your request cannot be handled because the pipeline is busy handling ongoing activities. Try again later.
 *
 * @throws {@link PipelineExecutionNotFoundException} (client fault)
 *
 * The pipeline execution was specified in an invalid format or cannot be found, or an execution ID does not belong to the specified pipeline.
 *
 * @throws {@link PipelineExecutionOutdatedException} (client fault)
 *
 * The specified pipeline execution is outdated and cannot be used as a target pipeline execution for rollback.
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *
 * The pipeline was specified in an invalid format or cannot be found.
 *
 * @throws {@link StageNotFoundException} (client fault)
 *
 * The stage was specified in an invalid format or cannot be found.
 *
 * @throws {@link UnableToRollbackStageException} (client fault)
 *
 * Unable to roll back the stage. The cause might be if the pipeline version has changed since the target pipeline execution was deployed, the stage is currently running, or an incorrect target pipeline execution ID was provided.
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
export class RollbackStageCommand extends command<RollbackStageCommandInput, RollbackStageCommandOutput>(
  _ep0,
  _mw0,
  "RollbackStage",
  RollbackStage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RollbackStageInput;
      output: RollbackStageOutput;
    };
    sdk: {
      input: RollbackStageCommandInput;
      output: RollbackStageCommandOutput;
    };
  };
}
