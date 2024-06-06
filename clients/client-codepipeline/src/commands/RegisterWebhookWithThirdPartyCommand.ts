// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterWebhookWithThirdPartyInput, RegisterWebhookWithThirdPartyOutput } from "../models/models_0";
import {
  de_RegisterWebhookWithThirdPartyCommand,
  se_RegisterWebhookWithThirdPartyCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterWebhookWithThirdPartyCommand}.
 */
export interface RegisterWebhookWithThirdPartyCommandInput extends RegisterWebhookWithThirdPartyInput {}
/**
 * @public
 *
 * The output of {@link RegisterWebhookWithThirdPartyCommand}.
 */
export interface RegisterWebhookWithThirdPartyCommandOutput
  extends RegisterWebhookWithThirdPartyOutput,
    __MetadataBearer {}

/**
 * <p>Configures a connection between the webhook that was created and the external tool
 *             with events to be detected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, RegisterWebhookWithThirdPartyCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, RegisterWebhookWithThirdPartyCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // RegisterWebhookWithThirdPartyInput
 *   webhookName: "STRING_VALUE",
 * };
 * const command = new RegisterWebhookWithThirdPartyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterWebhookWithThirdPartyCommandInput - {@link RegisterWebhookWithThirdPartyCommandInput}
 * @returns {@link RegisterWebhookWithThirdPartyCommandOutput}
 * @see {@link RegisterWebhookWithThirdPartyCommandInput} for command's `input` shape.
 * @see {@link RegisterWebhookWithThirdPartyCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link WebhookNotFoundException} (client fault)
 *  <p>The specified webhook was entered in an invalid format or cannot be
 *             found.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 * @public
 */
export class RegisterWebhookWithThirdPartyCommand extends $Command
  .classBuilder<
    RegisterWebhookWithThirdPartyCommandInput,
    RegisterWebhookWithThirdPartyCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodePipeline_20150709", "RegisterWebhookWithThirdParty", {})
  .n("CodePipelineClient", "RegisterWebhookWithThirdPartyCommand")
  .f(void 0, void 0)
  .ser(se_RegisterWebhookWithThirdPartyCommand)
  .de(de_RegisterWebhookWithThirdPartyCommand)
  .build() {}
