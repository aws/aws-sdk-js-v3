// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListGeoMatchSetsRequest, ListGeoMatchSetsResponse } from "../models/models_0";
import { ListGeoMatchSets } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

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
 * import { WAFClient, ListGeoMatchSetsCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, ListGeoMatchSetsCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
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
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
 *
 * @throws {@link WAFServiceException}
 * <p>Base exception class for all service exceptions from WAF service.</p>
 *
 *
 * @public
 */
export class ListGeoMatchSetsCommand extends $Command
  .classBuilder<
    ListGeoMatchSetsCommandInput,
    ListGeoMatchSetsCommandOutput,
    WAFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20150824", "ListGeoMatchSets", {})
  .n("WAFClient", "ListGeoMatchSetsCommand")
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
