// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisableStageTransitionInput } from "../models/models_0";
import { DisableStageTransition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableStageTransitionCommand}.
 */
export interface DisableStageTransitionCommandInput extends DisableStageTransitionInput {}
/**
 * @public
 *
 * The output of {@link DisableStageTransitionCommand}.
 */
export interface DisableStageTransitionCommandOutput extends __MetadataBearer {}

/**
 * <p>Prevents artifacts in a pipeline from transitioning to the next stage in the
 *             pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, DisableStageTransitionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, DisableStageTransitionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // DisableStageTransitionInput
 *   pipelineName: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE", // required
 *   transitionType: "Inbound" || "Outbound", // required
 *   reason: "STRING_VALUE", // required
 * };
 * const command = new DisableStageTransitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableStageTransitionCommandInput - {@link DisableStageTransitionCommandInput}
 * @returns {@link DisableStageTransitionCommandOutput}
 * @see {@link DisableStageTransitionCommandInput} for command's `input` shape.
 * @see {@link DisableStageTransitionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link StageNotFoundException} (client fault)
 *  <p>The stage was specified in an invalid format or cannot be found.</p>
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
export class DisableStageTransitionCommand extends $Command
  .classBuilder<
    DisableStageTransitionCommandInput,
    DisableStageTransitionCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodePipeline_20150709", "DisableStageTransition", {})
  .n("CodePipelineClient", "DisableStageTransitionCommand")
  .sc(DisableStageTransition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableStageTransitionInput;
      output: {};
    };
    sdk: {
      input: DisableStageTransitionCommandInput;
      output: DisableStageTransitionCommandOutput;
    };
  };
}
