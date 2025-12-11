// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutIdentityPolicyRequest, PutIdentityPolicyResponse } from "../models/models_0";
import { PutIdentityPolicy } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutIdentityPolicyCommand}.
 */
export interface PutIdentityPolicyCommandInput extends PutIdentityPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutIdentityPolicyCommand}.
 */
export interface PutIdentityPolicyCommandOutput extends PutIdentityPolicyResponse, __MetadataBearer {}

/**
 * <p>Adds or updates a sending authorization policy for the specified identity (an email
 *             address or a domain).</p>
 *          <note>
 *             <p>This operation is for the identity owner only. If you have not verified the
 *                 identity, it returns an error.</p>
 *          </note>
 *          <p>Sending authorization is a feature that enables an identity owner to authorize other
 *             senders to use its identities. For information about using sending authorization, see
 *             the <a href="https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, PutIdentityPolicyCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, PutIdentityPolicyCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
 * const client = new SESClient(config);
 * const input = { // PutIdentityPolicyRequest
 *   Identity: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new PutIdentityPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutIdentityPolicyCommandInput - {@link PutIdentityPolicyCommandInput}
 * @returns {@link PutIdentityPolicyCommandOutput}
 * @see {@link PutIdentityPolicyCommandInput} for command's `input` shape.
 * @see {@link PutIdentityPolicyCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link InvalidPolicyException} (client fault)
 *  <p>Indicates that the provided policy is invalid. Check the error stack for more
 *             information about what caused the error.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 *
 * @example PutIdentityPolicy
 * ```javascript
 * // The following example adds a sending authorization policy to an identity:
 * const input = {
 *   Identity: "example.com",
 *   Policy: `{"Version":"2008-10-17","Statement":[{"Sid":"stmt1469123904194","Effect":"Allow","Principal":{"AWS":"arn:aws:iam::123456789012:root"},"Action":["ses:SendEmail","ses:SendRawEmail"],"Resource":"arn:aws:ses:us-east-1:EXAMPLE65304:identity/example.com"}]}`,
 *   PolicyName: "MyPolicy"
 * };
 * const command = new PutIdentityPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutIdentityPolicyCommand extends $Command
  .classBuilder<
    PutIdentityPolicyCommandInput,
    PutIdentityPolicyCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService", "PutIdentityPolicy", {})
  .n("SESClient", "PutIdentityPolicyCommand")
  .sc(PutIdentityPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutIdentityPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutIdentityPolicyCommandInput;
      output: PutIdentityPolicyCommandOutput;
    };
  };
}
