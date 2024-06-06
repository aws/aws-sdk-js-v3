// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListIPSetsRequest, ListIPSetsResponse } from "../models/models_0";
import { de_ListIPSetsCommand, se_ListIPSetsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIPSetsCommand}.
 */
export interface ListIPSetsCommandInput extends ListIPSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListIPSetsCommand}.
 */
export interface ListIPSetsCommandOutput extends ListIPSetsResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns an array of <a>IPSetSummary</a> objects in the response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListIPSetsCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListIPSetsCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const input = { // ListIPSetsRequest
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListIPSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListIPSetsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   IPSets: [ // IPSetSummaries
 * //     { // IPSetSummary
 * //       IPSetId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListIPSetsCommandInput - {@link ListIPSetsCommandInput}
 * @returns {@link ListIPSetsCommandOutput}
 * @see {@link ListIPSetsCommandInput} for command's `input` shape.
 * @see {@link ListIPSetsCommandOutput} for command's `response` shape.
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
 * @public
 * @example To list IP sets
 * ```javascript
 * // The following example returns an array of up to 100 IP match sets.
 * const input = {
 *   "Limit": 100
 * };
 * const command = new ListIPSetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "IPSets": [
 *     {
 *       "IPSetId": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *       "Name": "MyIPSetFriendlyName"
 *     }
 *   ]
 * }
 * *\/
 * // example id: listipsets-1472235676229
 * ```
 *
 */
export class ListIPSetsCommand extends $Command
  .classBuilder<
    ListIPSetsCommandInput,
    ListIPSetsCommandOutput,
    WAFRegionalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WAFRegionalClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_Regional_20161128", "ListIPSets", {})
  .n("WAFRegionalClient", "ListIPSetsCommand")
  .f(void 0, void 0)
  .ser(se_ListIPSetsCommand)
  .de(de_ListIPSetsCommand)
  .build() {}
