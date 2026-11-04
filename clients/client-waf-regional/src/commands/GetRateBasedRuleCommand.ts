// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRateBasedRuleRequest, GetRateBasedRuleResponse } from "../models/models_0";
import { GetRateBasedRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRateBasedRuleCommand}.
 */
export interface GetRateBasedRuleCommandInput extends GetRateBasedRuleRequest {}
/**
 * @public
 *
 * The output of {@link GetRateBasedRuleCommand}.
 */
export interface GetRateBasedRuleCommandOutput extends GetRateBasedRuleResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Returns the RateBasedRule that is specified by the `RuleId` that you included in the `GetRateBasedRule` request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, GetRateBasedRuleCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetRateBasedRuleCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // GetRateBasedRuleRequest
 *   RuleId: "STRING_VALUE", // required
 * };
 * const command = new GetRateBasedRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetRateBasedRuleResponse
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
 * // };
 *
 * ```
 *
 * @param GetRateBasedRuleCommandInput - {@link GetRateBasedRuleCommandInput}
 * @returns {@link GetRateBasedRuleCommandOutput}
 * @see {@link GetRateBasedRuleCommandInput} for command's `input` shape.
 * @see {@link GetRateBasedRuleCommandOutput} for command's `response` shape.
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
export class GetRateBasedRuleCommand extends command<GetRateBasedRuleCommandInput, GetRateBasedRuleCommandOutput>(
  _ep0,
  _mw0,
  "GetRateBasedRule",
  GetRateBasedRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRateBasedRuleRequest;
      output: GetRateBasedRuleResponse;
    };
    sdk: {
      input: GetRateBasedRuleCommandInput;
      output: GetRateBasedRuleCommandOutput;
    };
  };
}
