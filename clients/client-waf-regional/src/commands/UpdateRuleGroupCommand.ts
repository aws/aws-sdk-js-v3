// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRuleGroupRequest, UpdateRuleGroupResponse } from "../models/models_0";
import { UpdateRuleGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRuleGroupCommand}.
 */
export interface UpdateRuleGroupCommandInput extends UpdateRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRuleGroupCommand}.
 */
export interface UpdateRuleGroupCommandOutput extends UpdateRuleGroupResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Inserts or deletes ActivatedRule objects in a `RuleGroup`.
 *
 * You can only insert `REGULAR` rules into a rule group.
 *
 * You can have a maximum of ten rules per rule group.
 *
 *
 *
 *
 * To create and configure a `RuleGroup`, perform the following steps:
 *
 * 1. Create and update the `Rules` that you want to include in the `RuleGroup`. See CreateRule.
 * 2. Use `GetChangeToken` to get the change token that you provide in the `ChangeToken` parameter of an UpdateRuleGroup request.
 * 3. Submit an `UpdateRuleGroup` request to add `Rules` to the `RuleGroup`.
 * 4. Create and update a `WebACL` that contains the `RuleGroup`. See CreateWebACL.
 *
 * If you want to replace one `Rule` with another, you delete the existing one and add the new one.
 *
 *
 *
 * For more information about how to use the AWS WAF API to allow or block HTTP requests, see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, UpdateRuleGroupCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, UpdateRuleGroupCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // UpdateRuleGroupRequest
 *   RuleGroupId: "STRING_VALUE", // required
 *   Updates: [ // RuleGroupUpdates // required
 *     { // RuleGroupUpdate
 *       Action: "INSERT" || "DELETE", // required
 *       ActivatedRule: { // ActivatedRule
 *         Priority: Number("int"), // required
 *         RuleId: "STRING_VALUE", // required
 *         Action: { // WafAction
 *           Type: "BLOCK" || "ALLOW" || "COUNT", // required
 *         },
 *         OverrideAction: { // WafOverrideAction
 *           Type: "NONE" || "COUNT", // required
 *         },
 *         Type: "REGULAR" || "RATE_BASED" || "GROUP",
 *         ExcludedRules: [ // ExcludedRules
 *           { // ExcludedRule
 *             RuleId: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   ],
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRuleGroupResponse
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateRuleGroupCommandInput - {@link UpdateRuleGroupCommandInput}
 * @returns {@link UpdateRuleGroupCommandOutput}
 * @see {@link UpdateRuleGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *
 * The operation failed because there was nothing to do. For example:
 *
 * - You tried to remove a `Rule` from a `WebACL`, but the `Rule` isn't in the specified `WebACL`.
 * - You tried to remove an IP address from an `IPSet`, but the IP address isn't in the specified `IPSet`.
 * - You tried to remove a `ByteMatchTuple` from a `ByteMatchSet`, but the `ByteMatchTuple` isn't in the specified `WebACL`.
 * - You tried to add a `Rule` to a `WebACL`, but the `Rule` already exists in the specified `WebACL`.
 * - You tried to add a `ByteMatchTuple` to a `ByteMatchSet`, but the `ByteMatchTuple` already exists in the specified `WebACL`.
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
 * @throws {@link WAFLimitsExceededException} (client fault)
 *
 * The operation exceeds a resource limit, for example, the maximum number of `WebACL` objects that you can create for an AWS account. For more information, see [Limits](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *AWS WAF Developer Guide*.
 *
 * @throws {@link WAFNonexistentContainerException} (client fault)
 *
 * The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:
 *
 * - You tried to add a `Rule` to or delete a `Rule` from a `WebACL` that doesn't exist.
 * - You tried to add a `ByteMatchSet` to or delete a `ByteMatchSet` from a `Rule` that doesn't exist.
 * - You tried to add an IP address to or delete an IP address from an `IPSet` that doesn't exist.
 * - You tried to add a `ByteMatchTuple` to or delete a `ByteMatchTuple` from a `ByteMatchSet` that doesn't exist.
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *
 * The operation failed because the referenced object doesn't exist.
 *
 * @throws {@link WAFStaleDataException} (client fault)
 *
 * The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.
 *
 * @throws {@link WAFRegionalServiceException}
 *
 * Base exception class for all service exceptions from WAFRegional service.
 *
 * @public
 */
export class UpdateRuleGroupCommand extends command<UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRuleGroup",
  UpdateRuleGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRuleGroupRequest;
      output: UpdateRuleGroupResponse;
    };
    sdk: {
      input: UpdateRuleGroupCommandInput;
      output: UpdateRuleGroupCommandOutput;
    };
  };
}
