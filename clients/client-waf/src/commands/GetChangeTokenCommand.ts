// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetChangeTokenRequest, GetChangeTokenResponse } from "../models/models_0";
import { de_GetChangeTokenCommand, se_GetChangeTokenCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetChangeTokenCommand}.
 */
export interface GetChangeTokenCommandInput extends GetChangeTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetChangeTokenCommand}.
 */
export interface GetChangeTokenCommandOutput extends GetChangeTokenResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete request. Change tokens ensure that your application doesn't submit conflicting requests to AWS WAF.</p>
 * 		       <p>Each create, update, or delete request must use a unique change token. If your application submits a <code>GetChangeToken</code> request
 * 			and then submits a second <code>GetChangeToken</code> request before submitting a create, update, or delete request, the second
 * 			<code>GetChangeToken</code> request returns the same value as the first <code>GetChangeToken</code> request.</p>
 * 		       <p>When you use a change token in a create, update, or delete request, the status of the change token changes to <code>PENDING</code>,
 * 			which indicates that AWS WAF is propagating the change to all AWS WAF servers. Use <code>GetChangeTokenStatus</code> to determine the
 * 			status of your change token.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetChangeTokenCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetChangeTokenCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const input = {};
 * const command = new GetChangeTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetChangeTokenResponse
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetChangeTokenCommandInput - {@link GetChangeTokenCommandInput}
 * @returns {@link GetChangeTokenCommandOutput}
 * @see {@link GetChangeTokenCommandInput} for command's `input` shape.
 * @see {@link GetChangeTokenCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFServiceException}
 * <p>Base exception class for all service exceptions from WAF service.</p>
 *
 * @public
 * @example To get a change token
 * ```javascript
 * // The following example returns a change token to use for a create, update or delete operation.
 * const input = {};
 * const command = new GetChangeTokenCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
 * }
 * *\/
 * // example id: get-change-token-example-1471635120794
 * ```
 *
 */
export class GetChangeTokenCommand extends $Command
  .classBuilder<
    GetChangeTokenCommandInput,
    GetChangeTokenCommandOutput,
    WAFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WAFClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_20150824", "GetChangeToken", {})
  .n("WAFClient", "GetChangeTokenCommand")
  .f(void 0, void 0)
  .ser(se_GetChangeTokenCommand)
  .de(de_GetChangeTokenCommand)
  .build() {}
