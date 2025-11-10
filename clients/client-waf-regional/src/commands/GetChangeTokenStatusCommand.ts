// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetChangeTokenStatusRequest, GetChangeTokenStatusResponse } from "../models/models_0";
import { GetChangeTokenStatus } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

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
 * import { WAFRegionalClient, GetChangeTokenStatusCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetChangeTokenStatusCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
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
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 *
 * @example To get the change token status
 * ```javascript
 * // The following example returns the status of a change token with the ID abcd12f2-46da-4fdb-b8d5-fbd4c466928f.
 * const input = {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
 * };
 * const command = new GetChangeTokenStatusCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChangeTokenStatus: "PENDING"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetChangeTokenStatusCommand extends $Command
  .classBuilder<
    GetChangeTokenStatusCommandInput,
    GetChangeTokenStatusCommandOutput,
    WAFRegionalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFRegionalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_Regional_20161128", "GetChangeTokenStatus", {})
  .n("WAFRegionalClient", "GetChangeTokenStatusCommand")
  .sc(GetChangeTokenStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChangeTokenStatusRequest;
      output: GetChangeTokenStatusResponse;
    };
    sdk: {
      input: GetChangeTokenStatusCommandInput;
      output: GetChangeTokenStatusCommandOutput;
    };
  };
}
