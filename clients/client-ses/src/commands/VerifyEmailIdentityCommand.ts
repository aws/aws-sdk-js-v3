// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { VerifyEmailIdentityRequest, VerifyEmailIdentityResponse } from "../models/models_0";
import { de_VerifyEmailIdentityCommand, se_VerifyEmailIdentityCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link VerifyEmailIdentityCommand}.
 */
export interface VerifyEmailIdentityCommandInput extends VerifyEmailIdentityRequest {}
/**
 * @public
 *
 * The output of {@link VerifyEmailIdentityCommand}.
 */
export interface VerifyEmailIdentityCommandOutput extends VerifyEmailIdentityResponse, __MetadataBearer {}

/**
 * <p>Adds an email address to the list of identities for your Amazon SES account in the current
 *             Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a
 *             verification email is sent to the specified address.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, VerifyEmailIdentityCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, VerifyEmailIdentityCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // VerifyEmailIdentityRequest
 *   EmailAddress: "STRING_VALUE", // required
 * };
 * const command = new VerifyEmailIdentityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param VerifyEmailIdentityCommandInput - {@link VerifyEmailIdentityCommandInput}
 * @returns {@link VerifyEmailIdentityCommandOutput}
 * @see {@link VerifyEmailIdentityCommandInput} for command's `input` shape.
 * @see {@link VerifyEmailIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example VerifyEmailIdentity
 * ```javascript
 * // The following example starts the email address verification process with Amazon SES:
 * const input = {
 *   "EmailAddress": "user@example.com"
 * };
 * const command = new VerifyEmailIdentityCommand(input);
 * await client.send(command);
 * // example id: verifyemailidentity-1469049068623
 * ```
 *
 */
export class VerifyEmailIdentityCommand extends $Command
  .classBuilder<
    VerifyEmailIdentityCommandInput,
    VerifyEmailIdentityCommandOutput,
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
  .s("SimpleEmailService", "VerifyEmailIdentity", {})
  .n("SESClient", "VerifyEmailIdentityCommand")
  .f(void 0, void 0)
  .ser(se_VerifyEmailIdentityCommand)
  .de(de_VerifyEmailIdentityCommand)
  .build() {}
