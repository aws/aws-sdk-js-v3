// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutInsightRuleInput, PutInsightRuleOutput } from "../models/models_0";
import { PutInsightRule } from "../schemas/schemas_1_Put";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutInsightRuleCommand}.
 */
export interface PutInsightRuleCommandInput extends PutInsightRuleInput {}
/**
 * @public
 *
 * The output of {@link PutInsightRuleCommand}.
 */
export interface PutInsightRuleCommandOutput extends PutInsightRuleOutput, __MetadataBearer {}

/**
 * <p>Creates a Contributor Insights rule. Rules evaluate log events in a CloudWatch Logs
 *             log group, enabling you to find contributor data for the log events in that log group.
 *             For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor
 *                 Insights to Analyze High-Cardinality Data</a>.</p>
 *          <p>If you create a rule, delete it, and then re-create it with the same name, historical
 *             data from the first time the rule was created might not be available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutInsightRuleCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutInsightRuleCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // PutInsightRuleInput
 *   RuleName: "STRING_VALUE", // required
 *   RuleState: "STRING_VALUE",
 *   RuleDefinition: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ApplyOnTransformedLogs: true || false,
 * };
 * const command = new PutInsightRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutInsightRuleCommandInput - {@link PutInsightRuleCommandInput}
 * @returns {@link PutInsightRuleCommandOutput}
 * @see {@link PutInsightRuleCommandInput} for command's `input` shape.
 * @see {@link PutInsightRuleCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation exceeded one or more limits.</p>
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
export class PutInsightRuleCommand extends $Command
  .classBuilder<
    PutInsightRuleCommandInput,
    PutInsightRuleCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "PutInsightRule", {})
  .n("CloudWatchClient", "PutInsightRuleCommand")
  .sc(PutInsightRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutInsightRuleInput;
      output: {};
    };
    sdk: {
      input: PutInsightRuleCommandInput;
      output: PutInsightRuleCommandOutput;
    };
  };
}
