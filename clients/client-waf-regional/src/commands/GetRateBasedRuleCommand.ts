// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRateBasedRuleRequest, GetRateBasedRuleResponse } from "../models/models_0";
import { de_GetRateBasedRuleCommand, se_GetRateBasedRuleCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Returns the <a>RateBasedRule</a> that is specified by the
 *             <code>RuleId</code> that you included in the <code>GetRateBasedRule</code>
 *          request.</p>
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
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 *
 * @public
 */
export class GetRateBasedRuleCommand extends $Command
  .classBuilder<
    GetRateBasedRuleCommandInput,
    GetRateBasedRuleCommandOutput,
    WAFRegionalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFRegionalClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_Regional_20161128", "GetRateBasedRule", {})
  .n("WAFRegionalClient", "GetRateBasedRuleCommand")
  .f(void 0, void 0)
  .ser(se_GetRateBasedRuleCommand)
  .de(de_GetRateBasedRuleCommand)
  .build() {
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
