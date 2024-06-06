// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetChangeTokenStatusRequest, GetChangeTokenStatusResponse } from "../models/models_0";
import { de_GetChangeTokenStatusCommand, se_GetChangeTokenStatusCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetChangeTokenStatusCommand}.
 */
export interface GetChangeTokenStatusCommandInput extends GetChangeTokenStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetChangeTokenStatusCommand}.
 */
export interface GetChangeTokenStatusCommandOutput extends GetChangeTokenStatusResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns the status of a <code>ChangeToken</code> that you got by calling <a>GetChangeToken</a>. <code>ChangeTokenStatus</code> is
 * 			one of the following values:</p>
 * 		       <ul>
 *             <li>
 *                <p>
 *                   <code>PROVISIONED</code>: You requested the change token by calling <code>GetChangeToken</code>, but you haven't used it yet
 * 				in a call to create, update, or delete an AWS WAF object.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PENDING</code>: AWS WAF is propagating the create, update, or delete request to all AWS WAF servers.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INSYNC</code>: Propagation is complete.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetChangeTokenStatusCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetChangeTokenStatusCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const input = { // GetChangeTokenStatusRequest
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new GetChangeTokenStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetChangeTokenStatusResponse
 * //   ChangeTokenStatus: "PROVISIONED" || "PENDING" || "INSYNC",
 * // };
 *
 * ```
 *
 * @param GetChangeTokenStatusCommandInput - {@link GetChangeTokenStatusCommandInput}
 * @returns {@link GetChangeTokenStatusCommandOutput}
 * @see {@link GetChangeTokenStatusCommandInput} for command's `input` shape.
 * @see {@link GetChangeTokenStatusCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFServiceException}
 * <p>Base exception class for all service exceptions from WAF service.</p>
 *
 * @public
 * @example To get the change token status
 * ```javascript
 * // The following example returns the status of a change token with the ID abcd12f2-46da-4fdb-b8d5-fbd4c466928f.
 * const input = {
 *   "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
 * };
 * const command = new GetChangeTokenStatusCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeTokenStatus": "PENDING"
 * }
 * *\/
 * // example id: getchangetokenstatus-1474658417107
 * ```
 *
 */
export class GetChangeTokenStatusCommand extends $Command
  .classBuilder<
    GetChangeTokenStatusCommandInput,
    GetChangeTokenStatusCommandOutput,
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
  .s("AWSWAF_20150824", "GetChangeTokenStatus", {})
  .n("WAFClient", "GetChangeTokenStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetChangeTokenStatusCommand)
  .de(de_GetChangeTokenStatusCommand)
  .build() {}
