// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInsightRulesInput, DescribeInsightRulesOutput } from "../models/models_0";
import { de_DescribeInsightRulesCommand, se_DescribeInsightRulesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInsightRulesCommand}.
 */
export interface DescribeInsightRulesCommandInput extends DescribeInsightRulesInput {}
/**
 * @public
 *
 * The output of {@link DescribeInsightRulesCommand}.
 */
export interface DescribeInsightRulesCommandOutput extends DescribeInsightRulesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of all the Contributor Insights rules in your account.</p>
 *          <p>For more information about Contributor Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor
 *             Insights to Analyze High-Cardinality Data</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // DescribeInsightRulesInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeInsightRulesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInsightRulesOutput
 * //   NextToken: "STRING_VALUE",
 * //   InsightRules: [ // InsightRules
 * //     { // InsightRule
 * //       Name: "STRING_VALUE", // required
 * //       State: "STRING_VALUE", // required
 * //       Schema: "STRING_VALUE", // required
 * //       Definition: "STRING_VALUE", // required
 * //       ManagedRule: true || false,
 * //       ApplyOnTransformedLogs: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeInsightRulesCommandInput - {@link DescribeInsightRulesCommandInput}
 * @returns {@link DescribeInsightRulesCommandOutput}
 * @see {@link DescribeInsightRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The next token specified is invalid.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class DescribeInsightRulesCommand extends $Command
  .classBuilder<
    DescribeInsightRulesCommandInput,
    DescribeInsightRulesCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GraniteServiceVersion20100801", "DescribeInsightRules", {})
  .n("CloudWatchClient", "DescribeInsightRulesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInsightRulesCommand)
  .de(de_DescribeInsightRulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInsightRulesInput;
      output: DescribeInsightRulesOutput;
    };
    sdk: {
      input: DescribeInsightRulesCommandInput;
      output: DescribeInsightRulesCommandOutput;
    };
  };
}
