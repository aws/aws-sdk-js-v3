// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRegexMatchSetsRequest, ListRegexMatchSetsResponse } from "../models/models_0";
import { ListRegexMatchSets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Returns an array of RegexMatchSetSummary objects.
 *
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
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *
 * The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.
 *
 * @throws {@link WAFRegionalServiceException}
 *
 * Base exception class for all service exceptions from WAFRegional service.
 *
 * @public
 */
export class ListRegexMatchSetsCommand extends command<ListRegexMatchSetsCommandInput, ListRegexMatchSetsCommandOutput>(
  _ep0,
  _mw0,
  "ListRegexMatchSets",
  ListRegexMatchSets$
) {
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
