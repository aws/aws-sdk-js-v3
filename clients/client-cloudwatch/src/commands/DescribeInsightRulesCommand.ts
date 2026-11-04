// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeInsightRulesInput, DescribeInsightRulesOutput } from "../models/models_0";
import { DescribeInsightRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of all the Contributor Insights rules in your account.
 *
 * For more information about Contributor Insights, see [Using Contributor Insights to Analyze High-Cardinality Data](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
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
 *
 * The next token specified is invalid.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
 *
 * @public
 */
export class DescribeInsightRulesCommand extends command<DescribeInsightRulesCommandInput, DescribeInsightRulesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeInsightRules",
  DescribeInsightRules$
) {
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
