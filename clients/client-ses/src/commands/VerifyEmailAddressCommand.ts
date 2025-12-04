// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { VerifyEmailAddressRequest } from "../models/models_0";
import { VerifyEmailAddress } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

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
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
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
 *
 * @example VerifyEmailAddress
 * ```javascript
 * // The following example starts the email address verification process with Amazon SES:
 * const input = {
 *   EmailAddress: "user@example.com"
 * };
 * const command = new VerifyEmailAddressCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class VerifyEmailAddressCommand extends $Command
  .classBuilder<
    VerifyEmailAddressCommandInput,
    VerifyEmailAddressCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService", "VerifyEmailAddress", {})
  .n("SESClient", "VerifyEmailAddressCommand")
  .sc(VerifyEmailAddress)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: VerifyEmailAddressRequest;
      output: {};
    };
    sdk: {
      input: VerifyEmailAddressCommandInput;
      output: VerifyEmailAddressCommandOutput;
    };
  };
}
