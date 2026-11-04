// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRateBasedRuleRequest, UpdateRateBasedRuleResponse } from "../models/models_0";
import { UpdateRateBasedRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRateBasedRuleCommand}.
 */
export interface UpdateRateBasedRuleCommandInput extends UpdateRateBasedRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRateBasedRuleCommand}.
 */
export interface UpdateRateBasedRuleCommandOutput extends UpdateRateBasedRuleResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Inserts or deletes Predicate objects in a rule and updates the `RateLimit` in the rule.
 *
 * Each `Predicate` object identifies a predicate, such as a ByteMatchSet or an IPSet, that specifies the web requests that you want to block or count. The `RateLimit` specifies the number of requests every five minutes that triggers the rule.
 *
 * If you add more than one predicate to a `RateBasedRule`, a request must match all the predicates and exceed the `RateLimit` to be counted or blocked. For example, suppose you add the following to a `RateBasedRule`:
 *
 * - An `IPSet` that matches the IP address `192.0.2.44/32`
 * - A `ByteMatchSet` that matches `BadBot` in the `User-Agent` header
 *
 * Further, you specify a `RateLimit` of 1,000.
 *
 * You then add the `RateBasedRule` to a `WebACL` and specify that you want to block requests that satisfy the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 *and* the `User-Agent` header in the request must contain the value `BadBot`. Further, requests that match these two conditions much be received at a rate of more than 1,000 every five minutes. If the rate drops below this limit, AWS WAF no longer blocks the requests.
 *
 *
 *
 * As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a `RateBasedRule`:
 *
 *
 *
 *
 * - A `ByteMatchSet` with `FieldToMatch` of `URI`
 * - A `PositionalConstraint` of `STARTS_WITH`
 * - A `TargetString` of `login`
 *
 * Further, you specify a `RateLimit` of 1,000.
 *
 * By adding this `RateBasedRule` to a `WebACL`, you could limit requests to your login page without affecting the rest of your site.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, UpdateRateBasedRuleCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, UpdateRateBasedRuleCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // UpdateRateBasedRuleRequest
 *   RuleId: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 *   Updates: [ // RuleUpdates // required
 *     { // RuleUpdate
 *       Action: "INSERT" || "DELETE", // required
 *       Predicate: { // Predicate
 *         Negated: true || false, // required
 *         Type: "IPMatch" || "ByteMatch" || "SqlInjectionMatch" || "GeoMatch" || "SizeConstraint" || "XssMatch" || "RegexMatch", // required
 *         DataId: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   RateLimit: Number("long"), // required
 * };
 * const command = new UpdateRateBasedRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRateBasedRuleResponse
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateRateBasedRuleCommandInput - {@link UpdateRateBasedRuleCommandInput}
 * @returns {@link UpdateRateBasedRuleCommandOutput}
 * @see {@link UpdateRateBasedRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateRateBasedRuleCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *
 * The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.
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
 * @throws {@link WAFReferencedItemException} (client fault)
 *
 * The operation failed because you tried to delete an object that is still in use. For example:
 *
 * - You tried to delete a `ByteMatchSet` that is still referenced by a `Rule`.
 * - You tried to delete a `Rule` that is still referenced by a `WebACL`.
 *
 * @throws {@link WAFStaleDataException} (client fault)
 *
 * The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.
 *
 * @throws {@link WAFServiceException}
 *
 * Base exception class for all service exceptions from WAF service.
 *
 * @public
 */
export class UpdateRateBasedRuleCommand extends command<UpdateRateBasedRuleCommandInput, UpdateRateBasedRuleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRateBasedRule",
  UpdateRateBasedRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRateBasedRuleRequest;
      output: UpdateRateBasedRuleResponse;
    };
    sdk: {
      input: UpdateRateBasedRuleCommandInput;
      output: UpdateRateBasedRuleCommandOutput;
    };
  };
}
