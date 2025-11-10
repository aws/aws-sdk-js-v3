// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSizeConstraintSetsRequest, ListSizeConstraintSetsResponse } from "../models/models_0";
import { ListSizeConstraintSets } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSizeConstraintSetsCommand}.
 */
export interface ListSizeConstraintSetsCommandInput extends ListSizeConstraintSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListSizeConstraintSetsCommand}.
 */
export interface ListSizeConstraintSetsCommandOutput extends ListSizeConstraintSetsResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns an array of <a>SizeConstraintSetSummary</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, ListSizeConstraintSetsCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, ListSizeConstraintSetsCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // ListSizeConstraintSetsRequest
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListSizeConstraintSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListSizeConstraintSetsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   SizeConstraintSets: [ // SizeConstraintSetSummaries
 * //     { // SizeConstraintSetSummary
 * //       SizeConstraintSetId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSizeConstraintSetsCommandInput - {@link ListSizeConstraintSetsCommandInput}
 * @returns {@link ListSizeConstraintSetsCommandOutput}
 * @see {@link ListSizeConstraintSetsCommandInput} for command's `input` shape.
 * @see {@link ListSizeConstraintSetsCommandOutput} for command's `response` shape.
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
 * @example To list a size constraint sets
 * ```javascript
 * // The following example returns an array of up to 100 size contraint match sets.
 * const input = {
 *   Limit: 100
 * };
 * const command = new ListSizeConstraintSetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SizeConstraintSets: [
 *     {
 *       Name: "MySampleSizeConstraintSet",
 *       SizeConstraintSetId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSizeConstraintSetsCommand extends $Command
  .classBuilder<
    ListSizeConstraintSetsCommandInput,
    ListSizeConstraintSetsCommandOutput,
    WAFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20150824", "ListSizeConstraintSets", {})
  .n("WAFClient", "ListSizeConstraintSetsCommand")
  .sc(ListSizeConstraintSets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSizeConstraintSetsRequest;
      output: ListSizeConstraintSetsResponse;
    };
    sdk: {
      input: ListSizeConstraintSetsCommandInput;
      output: ListSizeConstraintSetsCommandOutput;
    };
  };
}
