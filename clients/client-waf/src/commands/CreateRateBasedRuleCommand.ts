// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRateBasedRuleRequest, CreateRateBasedRuleResponse } from "../models/models_0";
import { CreateRateBasedRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRateBasedRuleCommand}.
 */
export interface CreateRateBasedRuleCommandInput extends CreateRateBasedRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateRateBasedRuleCommand}.
 */
export interface CreateRateBasedRuleCommandOutput extends CreateRateBasedRuleResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Creates a RateBasedRule. The `RateBasedRule` contains a `RateLimit`, which specifies the maximum number of requests that AWS WAF allows from a specified IP address in a five-minute period. The `RateBasedRule` also contains the `IPSet` objects, `ByteMatchSet` objects, and other predicates that identify the requests that you want to count or block if these requests exceed the `RateLimit`.
 *
 * If you add more than one predicate to a `RateBasedRule`, a request not only must exceed the `RateLimit`, but it also must match all the conditions to be counted or blocked. For example, suppose you add the following to a `RateBasedRule`:
 *
 * - An `IPSet` that matches the IP address `192.0.2.44/32`
 * - A `ByteMatchSet` that matches `BadBot` in the `User-Agent` header
 *
 * Further, you specify a `RateLimit` of 1,000.
 *
 * You then add the `RateBasedRule` to a `WebACL` and specify that you want to block requests that meet the conditions in the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 *and* the `User-Agent` header in the request must contain the value `BadBot`. Further, requests that match these two conditions must be received at a rate of more than 1,000 requests every five minutes. If both conditions are met and the rate is exceeded, AWS WAF blocks the requests. If the rate drops below 1,000 for a five-minute period, AWS WAF no longer blocks the requests.
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
 *
 *
 *
 * To create and configure a `RateBasedRule`, perform the following steps:
 *
 * 1. Create and update the predicates that you want to include in the rule. For more information, see CreateByteMatchSet, CreateIPSet, and CreateSqlInjectionMatchSet.
 * 2. Use GetChangeToken to get the change token that you provide in the `ChangeToken` parameter of a `CreateRule` request.
 * 3. Submit a `CreateRateBasedRule` request.
 * 4. Use `GetChangeToken` to get the change token that you provide in the `ChangeToken` parameter of an UpdateRule request.
 * 5. Submit an `UpdateRateBasedRule` request to specify the predicates that you want to include in the rule.
 * 6. Create and update a `WebACL` that contains the `RateBasedRule`. For more information, see CreateWebACL.
 *
 * For more information about how to use the AWS WAF API to allow or block HTTP requests, see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, CreateRateBasedRuleCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, CreateRateBasedRuleCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // CreateRateBasedRuleRequest
 *   Name: "STRING_VALUE", // required
 *   MetricName: "STRING_VALUE", // required
 *   RateKey: "IP", // required
 *   RateLimit: Number("long"), // required
 *   ChangeToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateRateBasedRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateRateBasedRuleResponse
 * //   Rule: { // RateBasedRule
 * //     RuleId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     MetricName: "STRING_VALUE",
 * //     MatchPredicates: [ // Predicates // required
 * //       { // Predicate
 * //         Negated: true || false, // required
 * //         Type: "IPMatch" || "ByteMatch" || "SqlInjectionMatch" || "GeoMatch" || "SizeConstraint" || "XssMatch" || "RegexMatch", // required
 * //         DataId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     RateKey: "IP", // required
 * //     RateLimit: Number("long"), // required
 * //   },
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateRateBasedRuleCommandInput - {@link CreateRateBasedRuleCommandInput}
 * @returns {@link CreateRateBasedRuleCommandOutput}
 * @see {@link CreateRateBasedRuleCommandInput} for command's `input` shape.
 * @see {@link CreateRateBasedRuleCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFBadRequestException} (client fault)
 *
 * @throws {@link WAFDisallowedNameException} (client fault)
 *
 * The name specified is invalid.
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
 * @throws {@link WAFLimitsExceededException} (client fault)
 *
 * The operation exceeds a resource limit, for example, the maximum number of `WebACL` objects that you can create for an AWS account. For more information, see [Limits](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *AWS WAF Developer Guide*.
 *
 * @throws {@link WAFStaleDataException} (client fault)
 *
 * The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.
 *
 * @throws {@link WAFTagOperationException} (client fault)
 *
 * @throws {@link WAFTagOperationInternalErrorException} (server fault)
 *
 * @throws {@link WAFServiceException}
 *
 * Base exception class for all service exceptions from WAF service.
 *
 * @public
 */
export class CreateRateBasedRuleCommand extends command<CreateRateBasedRuleCommandInput, CreateRateBasedRuleCommandOutput>(
  _ep0,
  _mw0,
  "CreateRateBasedRule",
  CreateRateBasedRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRateBasedRuleRequest;
      output: CreateRateBasedRuleResponse;
    };
    sdk: {
      input: CreateRateBasedRuleCommandInput;
      output: CreateRateBasedRuleCommandOutput;
    };
  };
}
