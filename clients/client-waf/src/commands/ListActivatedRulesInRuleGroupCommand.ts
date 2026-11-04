// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListActivatedRulesInRuleGroupRequest, ListActivatedRulesInRuleGroupResponse } from "../models/models_0";
import { ListActivatedRulesInRuleGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListActivatedRulesInRuleGroupCommand}.
 */
export interface ListActivatedRulesInRuleGroupCommandInput extends ListActivatedRulesInRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link ListActivatedRulesInRuleGroupCommand}.
 */
export interface ListActivatedRulesInRuleGroupCommandOutput extends ListActivatedRulesInRuleGroupResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Returns an array of ActivatedRule objects.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, ListActivatedRulesInRuleGroupCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, ListActivatedRulesInRuleGroupCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // ListActivatedRulesInRuleGroupRequest
 *   RuleGroupId: "STRING_VALUE",
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListActivatedRulesInRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // ListActivatedRulesInRuleGroupResponse
 * //   NextMarker: "STRING_VALUE",
 * //   ActivatedRules: [ // ActivatedRules
 * //     { // ActivatedRule
 * //       Priority: Number("int"), // required
 * //       RuleId: "STRING_VALUE", // required
 * //       Action: { // WafAction
 * //         Type: "BLOCK" || "ALLOW" || "COUNT", // required
 * //       },
 * //       OverrideAction: { // WafOverrideAction
 * //         Type: "NONE" || "COUNT", // required
 * //       },
 * //       Type: "REGULAR" || "RATE_BASED" || "GROUP",
 * //       ExcludedRules: [ // ExcludedRules
 * //         { // ExcludedRule
 * //           RuleId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListActivatedRulesInRuleGroupCommandInput - {@link ListActivatedRulesInRuleGroupCommandInput}
 * @returns {@link ListActivatedRulesInRuleGroupCommandOutput}
 * @see {@link ListActivatedRulesInRuleGroupCommandInput} for command's `input` shape.
 * @see {@link ListActivatedRulesInRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *
 * The operation failed because AWS WAF didn't recognize a parameter in the request. For example:
 *
 * - You specified an invalid parameter name.
 * - You specified an invalid value.
 * - You tried to update an object (`ByteMatchSet`, `IPSet`, `Rule`, or `WebACL`) using an action other than `INSERT` or `DELETE`.
 * - You tried to create a `WebACL` with a `DefaultAction` `Type` other than `ALLOW`, `BLOCK`, or `COUNT`.
 * - You tried to create a `RateBasedRule` with a `RateKey` value other than `IP`.
 * - You tried to update a `WebACL` with a `WafAction` `Type` other than `ALLOW`, `BLOCK`, or `COUNT`.
 * - You tried to update a `ByteMatchSet` with a `FieldToMatch` `Type` other than HEADER, METHOD, QUERY_STRING, URI, or BODY.
 * - You tried to update a `ByteMatchSet` with a `Field` of `HEADER` but no value for `Data`.
 * - Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *
 * The operation failed because the referenced object doesn't exist.
 *
 * @throws {@link WAFServiceException}
 *
 * Base exception class for all service exceptions from WAF service.
 *
 * @public
 */
export class ListActivatedRulesInRuleGroupCommand extends command<ListActivatedRulesInRuleGroupCommandInput, ListActivatedRulesInRuleGroupCommandOutput>(
  _ep0,
  _mw0,
  "ListActivatedRulesInRuleGroup",
  ListActivatedRulesInRuleGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListActivatedRulesInRuleGroupRequest;
      output: ListActivatedRulesInRuleGroupResponse;
    };
    sdk: {
      input: ListActivatedRulesInRuleGroupCommandInput;
      output: ListActivatedRulesInRuleGroupCommandOutput;
    };
  };
}
