// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterWebhookWithThirdPartyInput, RegisterWebhookWithThirdPartyOutput } from "../models/models_0";
import { RegisterWebhookWithThirdParty$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface RegisterWebhookWithThirdPartyCommandOutput extends RegisterWebhookWithThirdPartyOutput, __MetadataBearer {}

/**
 * <p>Configures a connection between the webhook that was created and the external tool
 *             with events to be detected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, RegisterWebhookWithThirdPartyCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, RegisterWebhookWithThirdPartyCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
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
 *
 * @public
 */
export class RegisterWebhookWithThirdPartyCommand extends command<RegisterWebhookWithThirdPartyCommandInput, RegisterWebhookWithThirdPartyCommandOutput>(
  _ep0,
  _mw0,
  "RegisterWebhookWithThirdParty",
  RegisterWebhookWithThirdParty$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterWebhookWithThirdPartyInput;
      output: {};
    };
    sdk: {
      input: RegisterWebhookWithThirdPartyCommandInput;
      output: RegisterWebhookWithThirdPartyCommandOutput;
    };
  };
}
