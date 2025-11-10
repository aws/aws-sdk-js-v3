// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListXssMatchSetsRequest, ListXssMatchSetsResponse } from "../models/models_0";
import { ListXssMatchSets } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListXssMatchSetsCommand}.
 */
export interface ListXssMatchSetsCommandInput extends ListXssMatchSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListXssMatchSetsCommand}.
 */
export interface ListXssMatchSetsCommandOutput extends ListXssMatchSetsResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns an array of <a>XssMatchSet</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListXssMatchSetsCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListXssMatchSetsCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // ListXssMatchSetsRequest
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListXssMatchSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListXssMatchSetsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   XssMatchSets: [ // XssMatchSetSummaries
 * //     { // XssMatchSetSummary
 * //       XssMatchSetId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListXssMatchSetsCommandInput - {@link ListXssMatchSetsCommandInput}
 * @returns {@link ListXssMatchSetsCommandOutput}
 * @see {@link ListXssMatchSetsCommandInput} for command's `input` shape.
 * @see {@link ListXssMatchSetsCommandOutput} for command's `response` shape.
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
 * @example To list XSS match sets
 * ```javascript
 * // The following example returns an array of up to 100 XSS match sets.
 * const input = {
 *   Limit: 100
 * };
 * const command = new ListXssMatchSetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   XssMatchSets: [
 *     {
 *       Name: "MySampleXssMatchSet",
 *       XssMatchSetId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListXssMatchSetsCommand extends $Command
  .classBuilder<
    ListXssMatchSetsCommandInput,
    ListXssMatchSetsCommandOutput,
    WAFRegionalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFRegionalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_Regional_20161128", "ListXssMatchSets", {})
  .n("WAFRegionalClient", "ListXssMatchSetsCommand")
  .sc(ListXssMatchSets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListXssMatchSetsRequest;
      output: ListXssMatchSetsResponse;
    };
    sdk: {
      input: ListXssMatchSetsCommandInput;
      output: ListXssMatchSetsCommandOutput;
    };
  };
}
