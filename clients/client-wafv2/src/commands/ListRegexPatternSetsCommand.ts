// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRegexPatternSetsRequest, ListRegexPatternSetsResponse } from "../models/models_0";
import { ListRegexPatternSets$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRegexPatternSetsCommand}.
 */
export interface ListRegexPatternSetsCommandInput extends ListRegexPatternSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListRegexPatternSetsCommand}.
 */
export interface ListRegexPatternSetsCommandOutput extends ListRegexPatternSetsResponse, __MetadataBearer {}

/**
 * <p>Retrieves an array of <a>RegexPatternSetSummary</a> objects for the regex
 *          pattern sets that you manage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListRegexPatternSetsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListRegexPatternSetsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // ListRegexPatternSetsRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListRegexPatternSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListRegexPatternSetsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   RegexPatternSets: [ // RegexPatternSetSummaries
 * //     { // RegexPatternSetSummary
 * //       Name: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       LockToken: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRegexPatternSetsCommandInput - {@link ListRegexPatternSetsCommandInput}
 * @returns {@link ListRegexPatternSetsCommandOutput}
 * @see {@link ListRegexPatternSetsCommandInput} for command's `input` shape.
 * @see {@link ListRegexPatternSetsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 *
 * @public
 */
export class ListRegexPatternSetsCommand extends $Command
  .classBuilder<
    ListRegexPatternSetsCommandInput,
    ListRegexPatternSetsCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20190729", "ListRegexPatternSets", {})
  .n("WAFV2Client", "ListRegexPatternSetsCommand")
  .sc(ListRegexPatternSets$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRegexPatternSetsRequest;
      output: ListRegexPatternSetsResponse;
    };
    sdk: {
      input: ListRegexPatternSetsCommandInput;
      output: ListRegexPatternSetsCommandOutput;
    };
  };
}
