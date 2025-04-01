// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListByteMatchSetsRequest, ListByteMatchSetsResponse } from "../models/models_0";
import { de_ListByteMatchSetsCommand, se_ListByteMatchSetsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListByteMatchSetsCommand}.
 */
export interface ListByteMatchSetsCommandInput extends ListByteMatchSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListByteMatchSetsCommand}.
 */
export interface ListByteMatchSetsCommandOutput extends ListByteMatchSetsResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns an array of <a>ByteMatchSetSummary</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListByteMatchSetsCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListByteMatchSetsCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const input = { // ListByteMatchSetsRequest
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListByteMatchSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListByteMatchSetsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   ByteMatchSets: [ // ByteMatchSetSummaries
 * //     { // ByteMatchSetSummary
 * //       ByteMatchSetId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListByteMatchSetsCommandInput - {@link ListByteMatchSetsCommandInput}
 * @returns {@link ListByteMatchSetsCommandOutput}
 * @see {@link ListByteMatchSetsCommandInput} for command's `input` shape.
 * @see {@link ListByteMatchSetsCommandOutput} for command's `response` shape.
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
export class ListByteMatchSetsCommand extends $Command
  .classBuilder<
    ListByteMatchSetsCommandInput,
    ListByteMatchSetsCommandOutput,
    WAFRegionalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFRegionalClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_Regional_20161128", "ListByteMatchSets", {})
  .n("WAFRegionalClient", "ListByteMatchSetsCommand")
  .f(void 0, void 0)
  .ser(se_ListByteMatchSetsCommand)
  .de(de_ListByteMatchSetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListByteMatchSetsRequest;
      output: ListByteMatchSetsResponse;
    };
    sdk: {
      input: ListByteMatchSetsCommandInput;
      output: ListByteMatchSetsCommandOutput;
    };
  };
}
