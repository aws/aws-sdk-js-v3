// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EnableStageTransitionInput } from "../models/models_0";
import { EnableStageTransition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableStageTransitionCommand}.
 */
export interface EnableStageTransitionCommandInput extends EnableStageTransitionInput {}
/**
 * @public
 *
 * The output of {@link EnableStageTransitionCommand}.
 */
export interface EnableStageTransitionCommandOutput extends __MetadataBearer {}

/**
 * Enables artifacts in a pipeline to transition to a stage in a pipeline.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, EnableStageTransitionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, EnableStageTransitionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // EnableStageTransitionInput
 *   pipelineName: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE", // required
 *   transitionType: "Inbound" || "Outbound", // required
 * };
 * const command = new EnableStageTransitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableStageTransitionCommandInput - {@link EnableStageTransitionCommandInput}
 * @returns {@link EnableStageTransitionCommandOutput}
 * @see {@link EnableStageTransitionCommandInput} for command's `input` shape.
 * @see {@link EnableStageTransitionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *
 * The pipeline was specified in an invalid format or cannot be found.
 *
 * @throws {@link StageNotFoundException} (client fault)
 *
 * The stage was specified in an invalid format or cannot be found.
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
export class EnableStageTransitionCommand extends command<EnableStageTransitionCommandInput, EnableStageTransitionCommandOutput>(
  _ep0,
  _mw0,
  "EnableStageTransition",
  EnableStageTransition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableStageTransitionInput;
      output: {};
    };
    sdk: {
      input: EnableStageTransitionCommandInput;
      output: EnableStageTransitionCommandOutput;
    };
  };
}
