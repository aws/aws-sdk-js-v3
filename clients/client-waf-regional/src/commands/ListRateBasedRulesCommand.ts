// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRateBasedRulesRequest, ListRateBasedRulesResponse } from "../models/models_0";
import { ListRateBasedRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRateBasedRulesCommand}.
 */
export interface ListRateBasedRulesCommandInput extends ListRateBasedRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListRateBasedRulesCommand}.
 */
export interface ListRateBasedRulesCommandOutput extends ListRateBasedRulesResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Returns an array of <a>RuleSummary</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListRateBasedRulesCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListRateBasedRulesCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // ListRateBasedRulesRequest
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListRateBasedRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListRateBasedRulesResponse
 * //   NextMarker: "STRING_VALUE",
 * //   Rules: [ // RuleSummaries
 * //     { // RuleSummary
 * //       RuleId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRateBasedRulesCommandInput - {@link ListRateBasedRulesCommandInput}
 * @returns {@link ListRateBasedRulesCommandOutput}
 * @see {@link ListRateBasedRulesCommandInput} for command's `input` shape.
 * @see {@link ListRateBasedRulesCommandOutput} for command's `response` shape.
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
export class ListRateBasedRulesCommand extends command<ListRateBasedRulesCommandInput, ListRateBasedRulesCommandOutput>(
  _ep0,
  _mw0,
  "ListRateBasedRules",
  ListRateBasedRules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRateBasedRulesRequest;
      output: ListRateBasedRulesResponse;
    };
    sdk: {
      input: ListRateBasedRulesCommandInput;
      output: ListRateBasedRulesCommandOutput;
    };
  };
}
