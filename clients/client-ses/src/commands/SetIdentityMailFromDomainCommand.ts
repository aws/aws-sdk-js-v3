// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SetIdentityMailFromDomainRequest, SetIdentityMailFromDomainResponse } from "../models/models_0";
import { SetIdentityMailFromDomain } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetIdentityMailFromDomainCommand}.
 */
export interface SetIdentityMailFromDomainCommandInput extends SetIdentityMailFromDomainRequest {}
/**
 * @public
 *
 * The output of {@link SetIdentityMailFromDomainCommand}.
 */
export interface SetIdentityMailFromDomainCommandOutput extends SetIdentityMailFromDomainResponse, __MetadataBearer {}

/**
 * <p>Enables or disables the custom MAIL FROM domain setup for a verified identity (an
 *             email address or a domain).</p>
 *          <important>
 *             <p>To send emails using the specified MAIL FROM domain, you must add an MX record to
 *                 your MAIL FROM domain's DNS settings. To ensure that your emails pass Sender Policy
 *                 Framework (SPF) checks, you must also add or update an SPF record. For more
 *                 information, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/mail-from.html">Amazon SES Developer Guide</a>.</p>
 *          </important>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SetIdentityMailFromDomainCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SetIdentityMailFromDomainCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
 * const client = new SESClient(config);
 * const input = { // SetIdentityMailFromDomainRequest
 *   Identity: "STRING_VALUE", // required
 *   MailFromDomain: "STRING_VALUE",
 *   BehaviorOnMXFailure: "UseDefaultValue" || "RejectMessage",
 * };
 * const command = new SetIdentityMailFromDomainCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetIdentityMailFromDomainCommandInput - {@link SetIdentityMailFromDomainCommandInput}
 * @returns {@link SetIdentityMailFromDomainCommandOutput}
 * @see {@link SetIdentityMailFromDomainCommandInput} for command's `input` shape.
 * @see {@link SetIdentityMailFromDomainCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 *
 * @example SetIdentityMailFromDomain
 * ```javascript
 * // The following example configures Amazon SES to use a custom MAIL FROM domain for an identity:
 * const input = {
 *   BehaviorOnMXFailure: "UseDefaultValue",
 *   Identity: "user@example.com",
 *   MailFromDomain: "bounces.example.com"
 * };
 * const command = new SetIdentityMailFromDomainCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SetIdentityMailFromDomainCommand extends $Command
  .classBuilder<
    SetIdentityMailFromDomainCommandInput,
    SetIdentityMailFromDomainCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService", "SetIdentityMailFromDomain", {})
  .n("SESClient", "SetIdentityMailFromDomainCommand")
  .sc(SetIdentityMailFromDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetIdentityMailFromDomainRequest;
      output: {};
    };
    sdk: {
      input: SetIdentityMailFromDomainCommandInput;
      output: SetIdentityMailFromDomainCommandOutput;
    };
  };
}
