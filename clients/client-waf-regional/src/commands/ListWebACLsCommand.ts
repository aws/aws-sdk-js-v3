// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListWebACLsRequest, ListWebACLsResponse } from "../models/models_0";
import { ListWebACLs } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWebACLsCommand}.
 */
export interface ListWebACLsCommandInput extends ListWebACLsRequest {}
/**
 * @public
 *
 * The output of {@link ListWebACLsCommand}.
 */
export interface ListWebACLsCommandOutput extends ListWebACLsResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns an array of <a>WebACLSummary</a> objects in the response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListWebACLsCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListWebACLsCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // ListWebACLsRequest
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListWebACLsCommand(input);
 * const response = await client.send(command);
 * // { // ListWebACLsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   WebACLs: [ // WebACLSummaries
 * //     { // WebACLSummary
 * //       WebACLId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWebACLsCommandInput - {@link ListWebACLsCommandInput}
 * @returns {@link ListWebACLsCommandOutput}
 * @see {@link ListWebACLsCommandInput} for command's `input` shape.
 * @see {@link ListWebACLsCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
 *
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 *
 * @example To list Web ACLs
 * ```javascript
 * // The following example returns an array of up to 100 web ACLs.
 * const input = {
 *   Limit: 100
 * };
 * const command = new ListWebACLsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   WebACLs: [
 *     {
 *       Name: "WebACLexample",
 *       WebACLId: "webacl-1472061481310"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListWebACLsCommand extends $Command
  .classBuilder<
    ListWebACLsCommandInput,
    ListWebACLsCommandOutput,
    WAFRegionalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFRegionalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_Regional_20161128", "ListWebACLs", {})
  .n("WAFRegionalClient", "ListWebACLsCommand")
  .sc(ListWebACLs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWebACLsRequest;
      output: ListWebACLsResponse;
    };
    sdk: {
      input: ListWebACLsCommandInput;
      output: ListWebACLsCommandOutput;
    };
  };
}
