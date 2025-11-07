// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRuleRequest, GetRuleResponse } from "../models/models_0";
import { GetRule } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRuleCommand}.
 */
export interface GetRuleCommandInput extends GetRuleRequest {}
/**
 * @public
 *
 * The output of {@link GetRuleCommand}.
 */
export interface GetRuleCommandOutput extends GetRuleResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns the <a>Rule</a> that is specified by the <code>RuleId</code> that you included in the <code>GetRule</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetRuleCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetRuleCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // GetRuleRequest
 *   RuleId: "STRING_VALUE", // required
 * };
 * const command = new GetRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetRuleResponse
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
 * // };
 *
 * ```
 *
 * @param GetRuleCommandInput - {@link GetRuleCommandInput}
 * @returns {@link GetRuleCommandOutput}
 * @see {@link GetRuleCommandInput} for command's `input` shape.
 * @see {@link GetRuleCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
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
 * @throws {@link WAFServiceException}
 * <p>Base exception class for all service exceptions from WAF service.</p>
 *
 *
 * @example To get a rule
 * ```javascript
 * // The following example returns the details of a rule with the ID example1ds3t-46da-4fdb-b8d5-abc321j569j5.
 * const input = {
 *   RuleId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 * };
 * const command = new GetRuleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
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
 *     RuleId: "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetRuleCommand extends $Command
  .classBuilder<
    GetRuleCommandInput,
    GetRuleCommandOutput,
    WAFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20150824", "GetRule", {})
  .n("WAFClient", "GetRuleCommand")
  .sc(GetRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRuleRequest;
      output: GetRuleResponse;
    };
    sdk: {
      input: GetRuleCommandInput;
      output: GetRuleCommandOutput;
    };
  };
}
