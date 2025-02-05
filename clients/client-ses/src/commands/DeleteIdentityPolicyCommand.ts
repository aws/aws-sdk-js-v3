// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIdentityPolicyRequest, DeleteIdentityPolicyResponse } from "../models/models_0";
import { de_DeleteIdentityPolicyCommand, se_DeleteIdentityPolicyCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIdentityPolicyCommand}.
 */
export interface DeleteIdentityPolicyCommandInput extends DeleteIdentityPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIdentityPolicyCommand}.
 */
export interface DeleteIdentityPolicyCommandOutput extends DeleteIdentityPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified sending authorization policy for the given identity (an email
 *             address or a domain). This operation returns successfully even if a policy with the
 *             specified name does not exist.</p>
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
 * import { SESClient, DeleteIdentityPolicyCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteIdentityPolicyCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SESClient(config);
 * const input = { // DeleteIdentityPolicyRequest
 *   Identity: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdentityPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIdentityPolicyCommandInput - {@link DeleteIdentityPolicyCommandInput}
 * @returns {@link DeleteIdentityPolicyCommandOutput}
 * @see {@link DeleteIdentityPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentityPolicyCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example DeleteIdentityPolicy
 * ```javascript
 * // The following example deletes a sending authorization policy for an identity:
 * const input = {
 *   "Identity": "user@example.com",
 *   "PolicyName": "MyPolicy"
 * };
 * const command = new DeleteIdentityPolicyCommand(input);
 * await client.send(command);
 * // example id: deleteidentitypolicy-1469055282499
 * ```
 *
 */
export class DeleteIdentityPolicyCommand extends $Command
  .classBuilder<
    DeleteIdentityPolicyCommandInput,
    DeleteIdentityPolicyCommandOutput,
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
  .s("SimpleEmailService", "DeleteIdentityPolicy", {})
  .n("SESClient", "DeleteIdentityPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIdentityPolicyCommand)
  .de(de_DeleteIdentityPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIdentityPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteIdentityPolicyCommandInput;
      output: DeleteIdentityPolicyCommandOutput;
    };
  };
}
