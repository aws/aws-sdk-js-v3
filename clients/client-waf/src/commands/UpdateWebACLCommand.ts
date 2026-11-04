// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWebACLRequest, UpdateWebACLResponse } from "../models/models_0";
import { UpdateWebACL$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateWebACLCommand}.
 */
export interface UpdateWebACLCommandInput extends UpdateWebACLRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWebACLCommand}.
 */
export interface UpdateWebACLCommandOutput extends UpdateWebACLResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Inserts or deletes ActivatedRule objects in a `WebACL`. Each `Rule` identifies web requests that you want to allow, block, or count. When you update a `WebACL`, you specify the following values:
 *
 * - A default action for the `WebACL`, either `ALLOW` or `BLOCK`. AWS WAF performs the default action if a request doesn't match the criteria in any of the `Rules` in a `WebACL`.
 * - The `Rules` that you want to add or delete. If you want to replace one `Rule` with another, you delete the existing `Rule` and add the new one.
 * - For each `Rule`, whether you want AWS WAF to allow requests, block requests, or count requests that match the conditions in the `Rule`.
 * - The order in which you want AWS WAF to evaluate the `Rules` in a `WebACL`. If you add more than one `Rule` to a `WebACL`, AWS WAF evaluates each request against the `Rules` in order based on the value of `Priority`. (The `Rule` that has the lowest value for `Priority` is evaluated first.) When a web request matches all the predicates (such as `ByteMatchSets` and `IPSets`) in a `Rule`, AWS WAF immediately takes the corresponding action, allow or block, and doesn't evaluate the request against the remaining `Rules` in the `WebACL`, if any.
 *
 *
 *
 * To create and configure a `WebACL`, perform the following steps:
 *
 * 1. Create and update the predicates that you want to include in `Rules`. For more information, see CreateByteMatchSet, UpdateByteMatchSet, CreateIPSet, UpdateIPSet, CreateSqlInjectionMatchSet, and UpdateSqlInjectionMatchSet.
 * 2. Create and update the `Rules` that you want to include in the `WebACL`. For more information, see CreateRule and UpdateRule.
 * 3. Create a `WebACL`. See CreateWebACL.
 * 4. Use `GetChangeToken` to get the change token that you provide in the `ChangeToken` parameter of an UpdateWebACL request.
 * 5. Submit an `UpdateWebACL` request to specify the `Rules` that you want to include in the `WebACL`, to specify the default action, and to associate the `WebACL` with a CloudFront distribution.
 *
 *    The `ActivatedRule` can be a rule group. If you specify a rule group as your `ActivatedRule` , you can exclude specific rules from that rule group.
 *
 *    If you already have a rule group associated with a web ACL and want to submit an `UpdateWebACL` request to exclude certain rules from that rule group, you must first remove the rule group from the web ACL, the re-insert it again, specifying the excluded rules. For details, see ActivatedRule$ExcludedRules .
 *
 * Be aware that if you try to add a RATE_BASED rule to a web ACL without setting the rule type when first creating the rule, the UpdateWebACL request will fail because the request tries to add a REGULAR rule (the default rule type) with the specified ID, which does not exist.
 *
 *
 *
 * For more information about how to use the AWS WAF API to allow or block HTTP requests, see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, UpdateWebACLCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, UpdateWebACLCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // UpdateWebACLRequest
 *   WebACLId: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 *   Updates: [ // WebACLUpdates
 *     { // WebACLUpdate
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
 *   DefaultAction: {
 *     Type: "BLOCK" || "ALLOW" || "COUNT", // required
 *   },
 * };
 * const command = new UpdateWebACLCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWebACLResponse
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateWebACLCommandInput - {@link UpdateWebACLCommandInput}
 * @returns {@link UpdateWebACLCommandOutput}
 * @see {@link UpdateWebACLCommandInput} for command's `input` shape.
 * @see {@link UpdateWebACLCommandOutput} for command's `response` shape.
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
 * @throws {@link WAFSubscriptionNotFoundException} (client fault)
 *
 * The specified subscription does not exist.
 *
 * @throws {@link WAFServiceException}
 *
 * Base exception class for all service exceptions from WAF service.
 *
 * @example To update a Web ACL
 * ```javascript
 * // The following example deletes an ActivatedRule object in a WebACL with the ID webacl-1472061481310.
 * const input = {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   DefaultAction: {
 *     Type: "ALLOW"
 *   },
 *   Updates: [
 *     {
 *       Action: "DELETE",
 *       ActivatedRule: {
 *         Action: {
 *           Type: "ALLOW"
 *         },
 *         Priority: 1,
 *         RuleId: "WAFRule-1-Example"
 *       }
 *     }
 *   ],
 *   WebACLId: "webacl-1472061481310"
 * };
 * const command = new UpdateWebACLCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateWebACLCommand extends command<UpdateWebACLCommandInput, UpdateWebACLCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWebACL",
  UpdateWebACL$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWebACLRequest;
      output: UpdateWebACLResponse;
    };
    sdk: {
      input: UpdateWebACLCommandInput;
      output: UpdateWebACLCommandOutput;
    };
  };
}
