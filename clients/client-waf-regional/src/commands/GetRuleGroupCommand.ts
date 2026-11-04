// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRuleGroupRequest, GetRuleGroupResponse } from "../models/models_0";
import { GetRuleGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRuleGroupCommand}.
 */
export interface GetRuleGroupCommandInput extends GetRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetRuleGroupCommand}.
 */
export interface GetRuleGroupCommandOutput extends GetRuleGroupResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Returns the RuleGroup that is specified by the `RuleGroupId` that you included in the `GetRuleGroup` request.
 *
 * To view the rules in a rule group, use ListActivatedRulesInRuleGroup.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, GetRuleGroupCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetRuleGroupCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // GetRuleGroupRequest
 *   RuleGroupId: "STRING_VALUE", // required
 * };
 * const command = new GetRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetRuleGroupResponse
 * //   RuleGroup: { // RuleGroup
 * //     RuleGroupId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     MetricName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRuleGroupCommandInput - {@link GetRuleGroupCommandInput}
 * @returns {@link GetRuleGroupCommandOutput}
 * @see {@link GetRuleGroupCommandInput} for command's `input` shape.
 * @see {@link GetRuleGroupCommandOutput} for command's `response` shape.
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
export class GetRuleGroupCommand extends command<GetRuleGroupCommandInput, GetRuleGroupCommandOutput>(
  _ep0,
  _mw0,
  "GetRuleGroup",
  GetRuleGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRuleGroupRequest;
      output: GetRuleGroupResponse;
    };
    sdk: {
      input: GetRuleGroupCommandInput;
      output: GetRuleGroupCommandOutput;
    };
  };
}
