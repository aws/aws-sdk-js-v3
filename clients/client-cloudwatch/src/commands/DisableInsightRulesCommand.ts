// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableInsightRulesInput, DisableInsightRulesOutput } from "../models/models_0";
import { DisableInsightRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do not incur costs.
 *
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
 *
 * The value of an input parameter is bad or out-of-range.
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
export class DisableInsightRulesCommand extends command<DisableInsightRulesCommandInput, DisableInsightRulesCommandOutput>(
  _ep0,
  _mw0,
  "DisableInsightRules",
  DisableInsightRules$
) {
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
