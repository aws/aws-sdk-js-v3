// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListIdentityPoliciesRequest, ListIdentityPoliciesResponse } from "../models/models_0";
import { de_ListIdentityPoliciesCommand, se_ListIdentityPoliciesCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIdentityPoliciesCommand}.
 */
export interface ListIdentityPoliciesCommandInput extends ListIdentityPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListIdentityPoliciesCommand}.
 */
export interface ListIdentityPoliciesCommandOutput extends ListIdentityPoliciesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of sending authorization policies that are attached to the given
 *             identity (an email address or a domain). This operation returns only a list. To get the
 *             actual policy content, use <code>GetIdentityPolicies</code>.</p>
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
 * import { SESClient, ListIdentityPoliciesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListIdentityPoliciesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // ListIdentityPoliciesRequest
 *   Identity: "STRING_VALUE", // required
 * };
 * const command = new ListIdentityPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentityPoliciesResponse
 * //   PolicyNames: [ // PolicyNameList // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListIdentityPoliciesCommandInput - {@link ListIdentityPoliciesCommandInput}
 * @returns {@link ListIdentityPoliciesCommandOutput}
 * @see {@link ListIdentityPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListIdentityPoliciesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example ListIdentityPolicies
 * ```javascript
 * // The following example returns a list of sending authorization policies that are attached to an identity:
 * const input = {
 *   "Identity": "example.com"
 * };
 * const command = new ListIdentityPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "PolicyNames": [
 *     "MyPolicy"
 *   ]
 * }
 * *\/
 * // example id: listidentitypolicies-1469124417674
 * ```
 *
 */
export class ListIdentityPoliciesCommand extends $Command
  .classBuilder<
    ListIdentityPoliciesCommandInput,
    ListIdentityPoliciesCommandOutput,
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
  .s("SimpleEmailService", "ListIdentityPolicies", {})
  .n("SESClient", "ListIdentityPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_ListIdentityPoliciesCommand)
  .de(de_ListIdentityPoliciesCommand)
  .build() {}
