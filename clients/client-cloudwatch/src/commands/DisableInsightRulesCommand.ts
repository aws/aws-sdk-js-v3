// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableInsightRulesInput, DisableInsightRulesOutput } from "../models/models_0";
import { DisableInsightRules } from "../schemas/schemas_9_Insight";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableInsightRulesCommand}.
 */
export interface DisableInsightRulesCommandInput extends DisableInsightRulesInput {}
/**
 * @public
 *
 * The output of {@link DisableInsightRulesCommand}.
 */
export interface DisableInsightRulesCommandOutput extends DisableInsightRulesOutput, __MetadataBearer {}

/**
 * <p>Disables the specified Contributor Insights rules. When rules are disabled, they do
 *             not analyze log groups and do not incur costs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DisableInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DisableInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // DisableInsightRulesInput
 *   RuleNames: [ // InsightRuleNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisableInsightRulesCommand(input);
 * const response = await client.send(command);
 * // { // DisableInsightRulesOutput
 * //   Failures: [ // BatchFailures
 * //     { // PartialFailure
 * //       FailureResource: "STRING_VALUE",
 * //       ExceptionType: "STRING_VALUE",
 * //       FailureCode: "STRING_VALUE",
 * //       FailureDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisableInsightRulesCommandInput - {@link DisableInsightRulesCommandInput}
 * @returns {@link DisableInsightRulesCommandOutput}
 * @see {@link DisableInsightRulesCommandInput} for command's `input` shape.
 * @see {@link DisableInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>An input parameter that is required is missing.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class DisableInsightRulesCommand extends $Command
  .classBuilder<
    DisableInsightRulesCommandInput,
    DisableInsightRulesCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "DisableInsightRules", {})
  .n("CloudWatchClient", "DisableInsightRulesCommand")
  .sc(DisableInsightRules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableInsightRulesInput;
      output: DisableInsightRulesOutput;
    };
    sdk: {
      input: DisableInsightRulesCommandInput;
      output: DisableInsightRulesCommandOutput;
    };
  };
}
