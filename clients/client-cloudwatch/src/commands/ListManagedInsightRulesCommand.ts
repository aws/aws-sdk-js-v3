// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListManagedInsightRulesInput, ListManagedInsightRulesOutput } from "../models/models_0";
import { de_ListManagedInsightRulesCommand, se_ListManagedInsightRulesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedInsightRulesCommand}.
 */
export interface ListManagedInsightRulesCommandInput extends ListManagedInsightRulesInput {}
/**
 * @public
 *
 * The output of {@link ListManagedInsightRulesCommand}.
 */
export interface ListManagedInsightRulesCommandOutput extends ListManagedInsightRulesOutput, __MetadataBearer {}

/**
 * <p> Returns a list that contains the number of managed Contributor Insights rules in your
 *             account.
 *
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, ListManagedInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, ListManagedInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // ListManagedInsightRulesInput
 *   ResourceARN: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListManagedInsightRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedInsightRulesOutput
 * //   ManagedRules: [ // ManagedRuleDescriptions
 * //     { // ManagedRuleDescription
 * //       TemplateName: "STRING_VALUE",
 * //       ResourceARN: "STRING_VALUE",
 * //       RuleState: { // ManagedRuleState
 * //         RuleName: "STRING_VALUE", // required
 * //         State: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListManagedInsightRulesCommandInput - {@link ListManagedInsightRulesCommandInput}
 * @returns {@link ListManagedInsightRulesCommandOutput}
 * @see {@link ListManagedInsightRulesCommandInput} for command's `input` shape.
 * @see {@link ListManagedInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The next token specified is invalid.</p>
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
export class ListManagedInsightRulesCommand extends $Command
  .classBuilder<
    ListManagedInsightRulesCommandInput,
    ListManagedInsightRulesCommandOutput,
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
  .s("GraniteServiceVersion20100801", "ListManagedInsightRules", {})
  .n("CloudWatchClient", "ListManagedInsightRulesCommand")
  .f(void 0, void 0)
  .ser(se_ListManagedInsightRulesCommand)
  .de(de_ListManagedInsightRulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedInsightRulesInput;
      output: ListManagedInsightRulesOutput;
    };
    sdk: {
      input: ListManagedInsightRulesCommandInput;
      output: ListManagedInsightRulesCommandOutput;
    };
  };
}
