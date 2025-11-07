// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRegexMatchSetsRequest, ListRegexMatchSetsResponse } from "../models/models_0";
import { ListRegexMatchSets } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRegexMatchSetsCommand}.
 */
export interface ListRegexMatchSetsCommandInput extends ListRegexMatchSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListRegexMatchSetsCommand}.
 */
export interface ListRegexMatchSetsCommandOutput extends ListRegexMatchSetsResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Returns an array of <a>RegexMatchSetSummary</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListRegexMatchSetsCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListRegexMatchSetsCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // ListRegexMatchSetsRequest
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListRegexMatchSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListRegexMatchSetsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   RegexMatchSets: [ // RegexMatchSetSummaries
 * //     { // RegexMatchSetSummary
 * //       RegexMatchSetId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRegexMatchSetsCommandInput - {@link ListRegexMatchSetsCommandInput}
 * @returns {@link ListRegexMatchSetsCommandOutput}
 * @see {@link ListRegexMatchSetsCommandInput} for command's `input` shape.
 * @see {@link ListRegexMatchSetsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListRegexMatchSetsCommand extends $Command
  .classBuilder<
    ListRegexMatchSetsCommandInput,
    ListRegexMatchSetsCommandOutput,
    WAFRegionalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFRegionalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_Regional_20161128", "ListRegexMatchSets", {})
  .n("WAFRegionalClient", "ListRegexMatchSetsCommand")
  .sc(ListRegexMatchSets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRegexMatchSetsRequest;
      output: ListRegexMatchSetsResponse;
    };
    sdk: {
      input: ListRegexMatchSetsCommandInput;
      output: ListRegexMatchSetsCommandOutput;
    };
  };
}
