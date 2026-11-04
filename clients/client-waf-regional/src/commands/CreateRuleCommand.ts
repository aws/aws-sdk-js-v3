// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRuleRequest, CreateRuleResponse } from "../models/models_0";
import { CreateRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRuleCommand}.
 */
export interface CreateRuleCommandInput extends CreateRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateRuleCommand}.
 */
export interface CreateRuleCommandOutput extends CreateRuleResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Creates a `Rule`, which contains the `IPSet` objects, `ByteMatchSet` objects, and other predicates that identify the requests that you want to block. If you add more than one predicate to a `Rule`, a request must match all of the specifications to be allowed or blocked. For example, suppose that you add the following to a `Rule`:
 *
 * - An `IPSet` that matches the IP address `192.0.2.44/32`
 * - A `ByteMatchSet` that matches `BadBot` in the `User-Agent` header
 *
 * You then add the `Rule` to a `WebACL` and specify that you want to blocks requests that satisfy the `Rule`. For a request to be blocked, it must come from the IP address 192.0.2.44 *and* the `User-Agent` header in the request must contain the value `BadBot`.
 *
 * To create and configure a `Rule`, perform the following steps:
 *
 * 1. Create and update the predicates that you want to include in the `Rule`. For more information, see CreateByteMatchSet, CreateIPSet, and CreateSqlInjectionMatchSet.
 * 2. Use GetChangeToken to get the change token that you provide in the `ChangeToken` parameter of a `CreateRule` request.
 * 3. Submit a `CreateRule` request.
 * 4. Use `GetChangeToken` to get the change token that you provide in the `ChangeToken` parameter of an UpdateRule request.
 * 5. Submit an `UpdateRule` request to specify the predicates that you want to include in the `Rule`.
 * 6. Create and update a `WebACL` that contains the `Rule`. For more information, see CreateWebACL.
 *
 * For more information about how to use the AWS WAF API to allow or block HTTP requests, see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, CreateRuleCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, CreateRuleCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // CreateRuleRequest
 *   Name: "STRING_VALUE", // required
 *   MetricName: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateRuleResponse
 * //   Rule: { // Rule
 * //     RuleId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     MetricName: "STRING_VALUE",
 * //     Predicates: [ // Predicates // required
 * //       { // Predicate
 * //         Negated: true || false, // required
 * //         Type: "IPMatch" || "ByteMatch" || "SqlInjectionMatch" || "GeoMatch" || "SizeConstraint" || "XssMatch" || "RegexMatch", // required
 * //         DataId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateRuleCommandInput - {@link CreateRuleCommandInput}
 * @returns {@link CreateRuleCommandOutput}
 * @see {@link CreateRuleCommandInput} for command's `input` shape.
 * @see {@link CreateRuleCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
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
 * @throws {@link WAFRegionalServiceException}
 *
 * Base exception class for all service exceptions from WAFRegional service.
 *
 * @example To create a rule
 * ```javascript
 * // The following example creates a rule named WAFByteHeaderRule.
 * const input = {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   MetricName: "WAFByteHeaderRule",
 *   Name: "WAFByteHeaderRule"
 * };
 * const command = new CreateRuleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChangeToken: "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   Rule: {
 *     MetricName: "WAFByteHeaderRule",
 *     Name: "WAFByteHeaderRule",
 *     Predicates: [
 *       {
 *         DataId: "MyByteMatchSetID",
 *         Negated: false,
 *         Type: "ByteMatch"
 *       }
 *     ],
 *     RuleId: "WAFRule-1-Example"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateRuleCommand extends command<CreateRuleCommandInput, CreateRuleCommandOutput>(
  _ep0,
  _mw0,
  "CreateRule",
  CreateRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRuleRequest;
      output: CreateRuleResponse;
    };
    sdk: {
      input: CreateRuleCommandInput;
      output: CreateRuleCommandOutput;
    };
  };
}
