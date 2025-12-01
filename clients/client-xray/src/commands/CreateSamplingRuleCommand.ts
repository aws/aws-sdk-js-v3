// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateSamplingRuleRequest, CreateSamplingRuleResult } from "../models/models_0";
import { CreateSamplingRule } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSamplingRuleCommand}.
 */
export interface CreateSamplingRuleCommandInput extends CreateSamplingRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateSamplingRuleCommand}.
 */
export interface CreateSamplingRuleCommandOutput extends CreateSamplingRuleResult, __MetadataBearer {}

/**
 * <p>Creates a rule to control sampling behavior for instrumented applications. Services
 *          retrieve rules with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a>, and evaluate each rule in ascending
 *          order of <i>priority</i> for each request. If a rule matches, the service
 *          records a trace, borrowing it from the reservoir size. After 10 seconds, the service
 *          reports back to X-Ray with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> to get updated versions of
 *          each in-use rule. The updated rule contains a trace quota that the service can use instead
 *          of borrowing from the reservoir.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, CreateSamplingRuleCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, CreateSamplingRuleCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = { // CreateSamplingRuleRequest
 *   SamplingRule: { // SamplingRule
 *     RuleName: "STRING_VALUE",
 *     RuleARN: "STRING_VALUE",
 *     ResourceARN: "STRING_VALUE", // required
 *     Priority: Number("int"), // required
 *     FixedRate: Number("double"), // required
 *     ReservoirSize: Number("int"), // required
 *     ServiceName: "STRING_VALUE", // required
 *     ServiceType: "STRING_VALUE", // required
 *     Host: "STRING_VALUE", // required
 *     HTTPMethod: "STRING_VALUE", // required
 *     URLPath: "STRING_VALUE", // required
 *     Version: Number("int"), // required
 *     Attributes: { // AttributeMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     SamplingRateBoost: { // SamplingRateBoost
 *       MaxRate: Number("double"), // required
 *       CooldownWindowMinutes: Number("int"), // required
 *     },
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSamplingRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateSamplingRuleResult
 * //   SamplingRuleRecord: { // SamplingRuleRecord
 * //     SamplingRule: { // SamplingRule
 * //       RuleName: "STRING_VALUE",
 * //       RuleARN: "STRING_VALUE",
 * //       ResourceARN: "STRING_VALUE", // required
 * //       Priority: Number("int"), // required
 * //       FixedRate: Number("double"), // required
 * //       ReservoirSize: Number("int"), // required
 * //       ServiceName: "STRING_VALUE", // required
 * //       ServiceType: "STRING_VALUE", // required
 * //       Host: "STRING_VALUE", // required
 * //       HTTPMethod: "STRING_VALUE", // required
 * //       URLPath: "STRING_VALUE", // required
 * //       Version: Number("int"), // required
 * //       Attributes: { // AttributeMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       SamplingRateBoost: { // SamplingRateBoost
 * //         MaxRate: Number("double"), // required
 * //         CooldownWindowMinutes: Number("int"), // required
 * //       },
 * //     },
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     ModifiedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSamplingRuleCommandInput - {@link CreateSamplingRuleCommandInput}
 * @returns {@link CreateSamplingRuleCommandOutput}
 * @see {@link CreateSamplingRuleCommandInput} for command's `input` shape.
 * @see {@link CreateSamplingRuleCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link RuleLimitExceededException} (client fault)
 *  <p>You have reached the maximum number of sampling rules.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 *
 * @public
 */
export class CreateSamplingRuleCommand extends $Command
  .classBuilder<
    CreateSamplingRuleCommandInput,
    CreateSamplingRuleCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSXRay", "CreateSamplingRule", {})
  .n("XRayClient", "CreateSamplingRuleCommand")
  .sc(CreateSamplingRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSamplingRuleRequest;
      output: CreateSamplingRuleResult;
    };
    sdk: {
      input: CreateSamplingRuleCommandInput;
      output: CreateSamplingRuleCommandOutput;
    };
  };
}
