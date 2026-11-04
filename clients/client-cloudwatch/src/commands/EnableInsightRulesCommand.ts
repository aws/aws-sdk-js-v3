// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EnableInsightRulesInput, EnableInsightRulesOutput } from "../models/models_0";
import { EnableInsightRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableInsightRulesCommand}.
 */
export interface EnableInsightRulesCommandInput extends EnableInsightRulesInput {}
/**
 * @public
 *
 * The output of {@link EnableInsightRulesCommand}.
 */
export interface EnableInsightRulesCommandOutput extends EnableInsightRulesOutput, __MetadataBearer {}

/**
 * Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, EnableInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, EnableInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // EnableInsightRulesInput
 *   RuleNames: [ // InsightRuleNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new EnableInsightRulesCommand(input);
 * const response = await client.send(command);
 * // { // EnableInsightRulesOutput
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
 * @param EnableInsightRulesCommandInput - {@link EnableInsightRulesCommandInput}
 * @returns {@link EnableInsightRulesCommandOutput}
 * @see {@link EnableInsightRulesCommandInput} for command's `input` shape.
 * @see {@link EnableInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value of an input parameter is bad or out-of-range.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The operation exceeded one or more limits.
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *
 * An input parameter that is required is missing.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
 *
 * @public
 */
export class EnableInsightRulesCommand extends command<EnableInsightRulesCommandInput, EnableInsightRulesCommandOutput>(
  _ep0,
  _mw0,
  "EnableInsightRules",
  EnableInsightRules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableInsightRulesInput;
      output: EnableInsightRulesOutput;
    };
    sdk: {
      input: EnableInsightRulesCommandInput;
      output: EnableInsightRulesCommandOutput;
    };
  };
}
