// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SetIdentityDkimEnabledRequest, SetIdentityDkimEnabledResponse } from "../models/models_0";
import { de_SetIdentityDkimEnabledCommand, se_SetIdentityDkimEnabledCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetIdentityDkimEnabledCommand}.
 */
export interface SetIdentityDkimEnabledCommandInput extends SetIdentityDkimEnabledRequest {}
/**
 * @public
 *
 * The output of {@link SetIdentityDkimEnabledCommand}.
 */
export interface SetIdentityDkimEnabledCommandOutput extends SetIdentityDkimEnabledResponse, __MetadataBearer {}

/**
 * <p>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM
 *             signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends
 *             from addresses on that domain. If Easy DKIM signing is enabled for an email address,
 *             then Amazon SES uses DKIM to sign all email it sends from that address.</p>
 *          <note>
 *             <p>For email addresses (for example, <code>user@example.com</code>), you can only
 *                 enable DKIM signing if the corresponding domain (in this case,
 *                     <code>example.com</code>) has been set up to use Easy DKIM.</p>
 *          </note>
 *          <p>You can enable DKIM signing for an identity at any time after you start the
 *             verification process for the identity, even if the verification process isn't complete. </p>
 *          <p>You can execute this operation no more than once per second.</p>
 *          <p>For more information about Easy DKIM signing, go to the <a href="https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-dkim-easy.html">Amazon SES Developer
 *                 Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SetIdentityDkimEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SetIdentityDkimEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SESClient(config);
 * const input = { // SetIdentityDkimEnabledRequest
 *   Identity: "STRING_VALUE", // required
 *   DkimEnabled: true || false, // required
 * };
 * const command = new SetIdentityDkimEnabledCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetIdentityDkimEnabledCommandInput - {@link SetIdentityDkimEnabledCommandInput}
 * @returns {@link SetIdentityDkimEnabledCommandOutput}
 * @see {@link SetIdentityDkimEnabledCommandInput} for command's `input` shape.
 * @see {@link SetIdentityDkimEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example SetIdentityDkimEnabled
 * ```javascript
 * // The following example configures Amazon SES to Easy DKIM-sign the email sent from an identity:
 * const input = {
 *   "DkimEnabled": true,
 *   "Identity": "user@example.com"
 * };
 * const command = new SetIdentityDkimEnabledCommand(input);
 * await client.send(command);
 * // example id: setidentitydkimenabled-1469057485202
 * ```
 *
 */
export class SetIdentityDkimEnabledCommand extends $Command
  .classBuilder<
    SetIdentityDkimEnabledCommandInput,
    SetIdentityDkimEnabledCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "SetIdentityDkimEnabled", {})
  .n("SESClient", "SetIdentityDkimEnabledCommand")
  .f(void 0, void 0)
  .ser(se_SetIdentityDkimEnabledCommand)
  .de(de_SetIdentityDkimEnabledCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetIdentityDkimEnabledRequest;
      output: {};
    };
    sdk: {
      input: SetIdentityDkimEnabledCommandInput;
      output: SetIdentityDkimEnabledCommandOutput;
    };
  };
}
