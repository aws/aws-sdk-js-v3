// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListGeoMatchSetsRequest, ListGeoMatchSetsResponse } from "../models/models_0";
import { ListGeoMatchSets } from "../schemas/schemas_25_ListGeoMatchSets";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGeoMatchSetsCommand}.
 */
export interface ListGeoMatchSetsCommandInput extends ListGeoMatchSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListGeoMatchSetsCommand}.
 */
export interface ListGeoMatchSetsCommandOutput extends ListGeoMatchSetsResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Returns an array of <a>GeoMatchSetSummary</a> objects in the response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListGeoMatchSetsCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListGeoMatchSetsCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // ListGeoMatchSetsRequest
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListGeoMatchSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListGeoMatchSetsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   GeoMatchSets: [ // GeoMatchSetSummaries
 * //     { // GeoMatchSetSummary
 * //       GeoMatchSetId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListGeoMatchSetsCommandInput - {@link ListGeoMatchSetsCommandInput}
 * @returns {@link ListGeoMatchSetsCommandOutput}
 * @see {@link ListGeoMatchSetsCommandInput} for command's `input` shape.
 * @see {@link ListGeoMatchSetsCommandOutput} for command's `response` shape.
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
export class ListGeoMatchSetsCommand extends $Command
  .classBuilder<
    ListGeoMatchSetsCommandInput,
    ListGeoMatchSetsCommandOutput,
    WAFRegionalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFRegionalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_Regional_20161128", "ListGeoMatchSets", {})
  .n("WAFRegionalClient", "ListGeoMatchSetsCommand")
  .sc(ListGeoMatchSets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGeoMatchSetsRequest;
      output: ListGeoMatchSetsResponse;
    };
    sdk: {
      input: ListGeoMatchSetsCommandInput;
      output: ListGeoMatchSetsCommandOutput;
    };
  };
}
