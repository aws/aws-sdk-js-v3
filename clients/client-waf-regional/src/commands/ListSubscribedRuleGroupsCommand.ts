// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSubscribedRuleGroupsRequest, ListSubscribedRuleGroupsResponse } from "../models/models_0";
import { ListSubscribedRuleGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSubscribedRuleGroupsCommand}.
 */
export interface ListSubscribedRuleGroupsCommandInput extends ListSubscribedRuleGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListSubscribedRuleGroupsCommand}.
 */
export interface ListSubscribedRuleGroupsCommandOutput extends ListSubscribedRuleGroupsResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Returns an array of RuleGroup objects that you are subscribed to.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListSubscribedRuleGroupsCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListSubscribedRuleGroupsCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // ListSubscribedRuleGroupsRequest
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListSubscribedRuleGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscribedRuleGroupsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   RuleGroups: [ // SubscribedRuleGroupSummaries
 * //     { // SubscribedRuleGroupSummary
 * //       RuleGroupId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       MetricName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSubscribedRuleGroupsCommandInput - {@link ListSubscribedRuleGroupsCommandInput}
 * @returns {@link ListSubscribedRuleGroupsCommandOutput}
 * @see {@link ListSubscribedRuleGroupsCommandInput} for command's `input` shape.
 * @see {@link ListSubscribedRuleGroupsCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *
 * The operation failed because the referenced object doesn't exist.
 *
 * @throws {@link WAFRegionalServiceException}
 *
 * Base exception class for all service exceptions from WAFRegional service.
 *
 * @public
 */
export class ListSubscribedRuleGroupsCommand extends command<ListSubscribedRuleGroupsCommandInput, ListSubscribedRuleGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListSubscribedRuleGroups",
  ListSubscribedRuleGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSubscribedRuleGroupsRequest;
      output: ListSubscribedRuleGroupsResponse;
    };
    sdk: {
      input: ListSubscribedRuleGroupsCommandInput;
      output: ListSubscribedRuleGroupsCommandOutput;
    };
  };
}
