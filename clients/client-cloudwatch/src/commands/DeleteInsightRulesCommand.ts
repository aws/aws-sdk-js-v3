// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteInsightRulesInput, DeleteInsightRulesOutput } from "../models/models_0";
import { de_DeleteInsightRulesCommand, se_DeleteInsightRulesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInsightRulesCommand}.
 */
export interface DeleteInsightRulesCommandInput extends DeleteInsightRulesInput {}
/**
 * @public
 *
 * The output of {@link DeleteInsightRulesCommand}.
 */
export interface DeleteInsightRulesCommandOutput extends DeleteInsightRulesOutput, __MetadataBearer {}

/**
 * <p>Permanently deletes the specified Contributor Insights rules.</p>
 *          <p>If you create a rule, delete it, and then re-create it with the same name, historical
 *             data from the first time the rule was created might not be available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // DeleteInsightRulesInput
 *   RuleNames: [ // InsightRuleNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteInsightRulesCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInsightRulesOutput
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
 * @param DeleteInsightRulesCommandInput - {@link DeleteInsightRulesCommandInput}
 * @returns {@link DeleteInsightRulesCommandOutput}
 * @see {@link DeleteInsightRulesCommandInput} for command's `input` shape.
 * @see {@link DeleteInsightRulesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteInsightRulesCommand extends $Command
  .classBuilder<
    DeleteInsightRulesCommandInput,
    DeleteInsightRulesCommandOutput,
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
  .s("GraniteServiceVersion20100801", "DeleteInsightRules", {})
  .n("CloudWatchClient", "DeleteInsightRulesCommand")
  .f(void 0, void 0)
  .ser(se_DeleteInsightRulesCommand)
  .de(de_DeleteInsightRulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInsightRulesInput;
      output: DeleteInsightRulesOutput;
    };
    sdk: {
      input: DeleteInsightRulesCommandInput;
      output: DeleteInsightRulesCommandOutput;
    };
  };
}
