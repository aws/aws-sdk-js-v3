// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { RollbackStageInput, RollbackStageOutput } from "../models/models_0";
import { RollbackStage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Rolls back a stage execution.</p>
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
 *  <p>Your request cannot be handled because the pipeline is busy handling ongoing
 *             activities. Try again later.</p>
 *
 * @throws {@link PipelineExecutionNotFoundException} (client fault)
 *  <p>The pipeline execution was specified in an invalid format or cannot be found, or an
 *             execution ID does not belong to the specified pipeline. </p>
 *
 * @throws {@link PipelineExecutionOutdatedException} (client fault)
 *  <p>The specified pipeline execution is outdated and cannot be used as a target pipeline
 *             execution for rollback.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link StageNotFoundException} (client fault)
 *  <p>The stage was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link UnableToRollbackStageException} (client fault)
 *  <p>Unable to roll back the stage. The cause might be if the pipeline version has changed
 *             since the target pipeline execution was deployed, the stage is currently running, or an
 *             incorrect target pipeline execution ID was provided.</p>
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
export class RollbackStageCommand extends $Command
  .classBuilder<
    RollbackStageCommandInput,
    RollbackStageCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodePipeline_20150709", "RollbackStage", {})
  .n("CodePipelineClient", "RollbackStageCommand")
  .sc(RollbackStage$)
  .build() {
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
