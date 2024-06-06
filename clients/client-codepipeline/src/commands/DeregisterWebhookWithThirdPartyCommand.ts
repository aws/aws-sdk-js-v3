// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterWebhookWithThirdPartyInput, DeregisterWebhookWithThirdPartyOutput } from "../models/models_0";
import {
  de_DeregisterWebhookWithThirdPartyCommand,
  se_DeregisterWebhookWithThirdPartyCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterWebhookWithThirdPartyCommand}.
 */
export interface DeregisterWebhookWithThirdPartyCommandInput extends DeregisterWebhookWithThirdPartyInput {}
/**
 * @public
 *
 * The output of {@link DeregisterWebhookWithThirdPartyCommand}.
 */
export interface DeregisterWebhookWithThirdPartyCommandOutput
  extends DeregisterWebhookWithThirdPartyOutput,
    __MetadataBearer {}

/**
 * <p>Removes the connection between the webhook that was created by CodePipeline
 *             and the external tool with events to be detected. Currently supported only for webhooks
 *             that target an action type of GitHub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, DeregisterWebhookWithThirdPartyCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, DeregisterWebhookWithThirdPartyCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const input = { // DeregisterWebhookWithThirdPartyInput
 *   webhookName: "STRING_VALUE",
 * };
 * const command = new DeregisterWebhookWithThirdPartyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterWebhookWithThirdPartyCommandInput - {@link DeregisterWebhookWithThirdPartyCommandInput}
 * @returns {@link DeregisterWebhookWithThirdPartyCommandOutput}
 * @see {@link DeregisterWebhookWithThirdPartyCommandInput} for command's `input` shape.
 * @see {@link DeregisterWebhookWithThirdPartyCommandOutput} for command's `response` shape.
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
export class DeregisterWebhookWithThirdPartyCommand extends $Command
  .classBuilder<
    DeregisterWebhookWithThirdPartyCommandInput,
    DeregisterWebhookWithThirdPartyCommandOutput,
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
  .s("CodePipeline_20150709", "DeregisterWebhookWithThirdParty", {})
  .n("CodePipelineClient", "DeregisterWebhookWithThirdPartyCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterWebhookWithThirdPartyCommand)
  .de(de_DeregisterWebhookWithThirdPartyCommand)
  .build() {}
