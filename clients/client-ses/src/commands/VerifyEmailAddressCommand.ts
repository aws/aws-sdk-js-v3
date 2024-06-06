// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { VerifyEmailAddressRequest } from "../models/models_0";
import { de_VerifyEmailAddressCommand, se_VerifyEmailAddressCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link VerifyEmailAddressCommand}.
 */
export interface VerifyEmailAddressCommandInput extends VerifyEmailAddressRequest {}
/**
 * @public
 *
 * The output of {@link VerifyEmailAddressCommand}.
 */
export interface VerifyEmailAddressCommandOutput extends __MetadataBearer {}

/**
 * <p>Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email
 *             address.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, VerifyEmailAddressCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, VerifyEmailAddressCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // VerifyEmailAddressRequest
 *   EmailAddress: "STRING_VALUE", // required
 * };
 * const command = new VerifyEmailAddressCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param VerifyEmailAddressCommandInput - {@link VerifyEmailAddressCommandInput}
 * @returns {@link VerifyEmailAddressCommandOutput}
 * @see {@link VerifyEmailAddressCommandInput} for command's `input` shape.
 * @see {@link VerifyEmailAddressCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example VerifyEmailAddress
 * ```javascript
 * // The following example starts the email address verification process with Amazon SES:
 * const input = {
 *   "EmailAddress": "user@example.com"
 * };
 * const command = new VerifyEmailAddressCommand(input);
 * await client.send(command);
 * // example id: verifyemailaddress-1469048849187
 * ```
 *
 */
export class VerifyEmailAddressCommand extends $Command
  .classBuilder<
    VerifyEmailAddressCommandInput,
    VerifyEmailAddressCommandOutput,
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
  .s("SimpleEmailService", "VerifyEmailAddress", {})
  .n("SESClient", "VerifyEmailAddressCommand")
  .f(void 0, void 0)
  .ser(se_VerifyEmailAddressCommand)
  .de(de_VerifyEmailAddressCommand)
  .build() {}
