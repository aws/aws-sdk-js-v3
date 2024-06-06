// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SetIdentityMailFromDomainRequest, SetIdentityMailFromDomainResponse } from "../models/models_0";
import { de_SetIdentityMailFromDomainCommand, se_SetIdentityMailFromDomainCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

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
 * @public
 * @example SetIdentityMailFromDomain
 * ```javascript
 * // The following example configures Amazon SES to use a custom MAIL FROM domain for an identity:
 * const input = {
 *   "BehaviorOnMXFailure": "UseDefaultValue",
 *   "Identity": "user@example.com",
 *   "MailFromDomain": "bounces.example.com"
 * };
 * const command = new SetIdentityMailFromDomainCommand(input);
 * await client.send(command);
 * // example id: setidentitymailfromdomain-1469057693908
 * ```
 *
 */
export class SetIdentityMailFromDomainCommand extends $Command
  .classBuilder<
    SetIdentityMailFromDomainCommandInput,
    SetIdentityMailFromDomainCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "SetIdentityMailFromDomain", {})
  .n("SESClient", "SetIdentityMailFromDomainCommand")
  .f(void 0, void 0)
  .ser(se_SetIdentityMailFromDomainCommand)
  .de(de_SetIdentityMailFromDomainCommand)
  .build() {}
