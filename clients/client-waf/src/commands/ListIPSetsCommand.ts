// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListIPSetsRequest, ListIPSetsResponse } from "../models/models_0";
import { ListIPSets } from "../schemas/schemas_37_ListIPSets";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

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
 * import { WAFClient, ListIPSetsCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, ListIPSetsCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
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
 * @example To list IP sets
 * ```javascript
 * // The following example returns an array of up to 100 IP match sets.
 * const input = {
 *   Limit: 100
 * };
 * const command = new ListIPSetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   IPSets: [
 *     {
 *       IPSetId: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *       Name: "MyIPSetFriendlyName"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListIPSetsCommand extends $Command
  .classBuilder<
    ListIPSetsCommandInput,
    ListIPSetsCommandOutput,
    WAFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20150824", "ListIPSets", {})
  .n("WAFClient", "ListIPSetsCommand")
  .sc(ListIPSets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIPSetsRequest;
      output: ListIPSetsResponse;
    };
    sdk: {
      input: ListIPSetsCommandInput;
      output: ListIPSetsCommandOutput;
    };
  };
}
