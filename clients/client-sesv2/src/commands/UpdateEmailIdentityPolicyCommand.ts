// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateEmailIdentityPolicyRequest, UpdateEmailIdentityPolicyResponse } from "../models/models_1";
import { UpdateEmailIdentityPolicy$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEmailIdentityPolicyCommand}.
 */
export interface UpdateEmailIdentityPolicyCommandInput extends UpdateEmailIdentityPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEmailIdentityPolicyCommand}.
 */
export interface UpdateEmailIdentityPolicyCommandOutput extends UpdateEmailIdentityPolicyResponse, __MetadataBearer {}

/**
 * <p>Updates the specified sending authorization policy for the given identity (an email
 *             address or a domain). This API returns successfully even if a policy with the specified
 *             name does not exist.</p>
 *          <note>
 *             <p>This API is for the identity owner only. If you have not verified the identity,
 *                 this API will return an error.</p>
 *          </note>
 *          <p>Sending authorization is a feature that enables an identity owner to authorize other
 *             senders to use its identities. For information about using sending authorization, see
 *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, UpdateEmailIdentityPolicyCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, UpdateEmailIdentityPolicyCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // UpdateEmailIdentityPolicyRequest
 *   EmailIdentity: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new UpdateEmailIdentityPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateEmailIdentityPolicyCommandInput - {@link UpdateEmailIdentityPolicyCommandInput}
 * @returns {@link UpdateEmailIdentityPolicyCommandOutput}
 * @see {@link UpdateEmailIdentityPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateEmailIdentityPolicyCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class UpdateEmailIdentityPolicyCommand extends $Command
  .classBuilder<
    UpdateEmailIdentityPolicyCommandInput,
    UpdateEmailIdentityPolicyCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService_v2", "UpdateEmailIdentityPolicy", {})
  .n("SESv2Client", "UpdateEmailIdentityPolicyCommand")
  .sc(UpdateEmailIdentityPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEmailIdentityPolicyRequest;
      output: {};
    };
    sdk: {
      input: UpdateEmailIdentityPolicyCommandInput;
      output: UpdateEmailIdentityPolicyCommandOutput;
    };
  };
}
