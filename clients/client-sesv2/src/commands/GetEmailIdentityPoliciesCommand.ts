// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetEmailIdentityPoliciesRequest, GetEmailIdentityPoliciesResponse } from "../models/models_0";
import { de_GetEmailIdentityPoliciesCommand, se_GetEmailIdentityPoliciesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEmailIdentityPoliciesCommand}.
 */
export interface GetEmailIdentityPoliciesCommandInput extends GetEmailIdentityPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link GetEmailIdentityPoliciesCommand}.
 */
export interface GetEmailIdentityPoliciesCommandOutput extends GetEmailIdentityPoliciesResponse, __MetadataBearer {}

/**
 * <p>Returns the requested sending authorization policies for the given identity (an email
 *             address or a domain). The policies are returned as a map of policy names to policy
 *             contents. You can retrieve a maximum of 20 policies at a time.</p>
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
 * import { SESv2Client, GetEmailIdentityPoliciesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetEmailIdentityPoliciesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // GetEmailIdentityPoliciesRequest
 *   EmailIdentity: "STRING_VALUE", // required
 * };
 * const command = new GetEmailIdentityPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // GetEmailIdentityPoliciesResponse
 * //   Policies: { // PolicyMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEmailIdentityPoliciesCommandInput - {@link GetEmailIdentityPoliciesCommandInput}
 * @returns {@link GetEmailIdentityPoliciesCommandOutput}
 * @see {@link GetEmailIdentityPoliciesCommandInput} for command's `input` shape.
 * @see {@link GetEmailIdentityPoliciesCommandOutput} for command's `response` shape.
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
export class GetEmailIdentityPoliciesCommand extends $Command
  .classBuilder<
    GetEmailIdentityPoliciesCommandInput,
    GetEmailIdentityPoliciesCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "GetEmailIdentityPolicies", {})
  .n("SESv2Client", "GetEmailIdentityPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_GetEmailIdentityPoliciesCommand)
  .de(de_GetEmailIdentityPoliciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEmailIdentityPoliciesRequest;
      output: GetEmailIdentityPoliciesResponse;
    };
    sdk: {
      input: GetEmailIdentityPoliciesCommandInput;
      output: GetEmailIdentityPoliciesCommandOutput;
    };
  };
}
