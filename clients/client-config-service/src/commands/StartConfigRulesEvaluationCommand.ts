// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartConfigRulesEvaluationRequest, StartConfigRulesEvaluationResponse } from "../models/models_1";
import { StartConfigRulesEvaluation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartConfigRulesEvaluationCommand}.
 */
export interface StartConfigRulesEvaluationCommandInput extends StartConfigRulesEvaluationRequest {}
/**
 * @public
 *
 * The output of {@link StartConfigRulesEvaluationCommand}.
 */
export interface StartConfigRulesEvaluationCommandOutput extends StartConfigRulesEvaluationResponse, __MetadataBearer {}

/**
 * <p>Runs an on-demand evaluation for the specified Config rules
 * 			against the last known configuration state of the resources. Use
 * 				<code>StartConfigRulesEvaluation</code> when you want to test
 * 			that a rule you updated is working as expected.
 * 				<code>StartConfigRulesEvaluation</code> does not re-record the
 * 			latest configuration state for your resources. It re-runs an
 * 			evaluation against the last known state of your resources. </p>
 *          <p>You can specify up to 25 Config rules per request. </p>
 *          <p>An existing <code>StartConfigRulesEvaluation</code> call for
 * 			the specified rules must complete before you can call the API again.
 * 			If you chose to have Config stream to an Amazon SNS topic, you
 * 			will receive a <code>ConfigRuleEvaluationStarted</code> notification
 * 			when the evaluation starts.</p>
 *          <note>
 *             <p>You don't need to call the
 * 					<code>StartConfigRulesEvaluation</code> API to run an
 * 				evaluation for a new rule. When you create a rule, Config
 * 				evaluates your resources against the rule automatically.
 * 			</p>
 *          </note>
 *          <p>The <code>StartConfigRulesEvaluation</code> API is useful if
 * 			you want to run on-demand evaluations, such as the following
 * 			example:</p>
 *          <ol>
 *             <li>
 *                <p>You have a custom rule that evaluates your IAM
 * 					resources every 24 hours.</p>
 *             </li>
 *             <li>
 *                <p>You update your Lambda function to add additional
 * 					conditions to your rule.</p>
 *             </li>
 *             <li>
 *                <p>Instead of waiting for the next periodic evaluation,
 * 					you call the <code>StartConfigRulesEvaluation</code>
 * 					API.</p>
 *             </li>
 *             <li>
 *                <p>Config invokes your Lambda function and evaluates
 * 					your IAM resources.</p>
 *             </li>
 *             <li>
 *                <p>Your custom rule will still run periodic evaluations
 * 					every 24 hours.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, StartConfigRulesEvaluationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, StartConfigRulesEvaluationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // StartConfigRulesEvaluationRequest
 *   ConfigRuleNames: [ // ReevaluateConfigRuleNames
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StartConfigRulesEvaluationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartConfigRulesEvaluationCommandInput - {@link StartConfigRulesEvaluationCommandInput}
 * @returns {@link StartConfigRulesEvaluationCommandOutput}
 * @see {@link StartConfigRulesEvaluationCommandInput} for command's `input` shape.
 * @see {@link StartConfigRulesEvaluationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>For <code>PutServiceLinkedConfigurationRecorder</code> API, this exception
 * 			is thrown if the number of service-linked roles in the account exceeds the limit.</p>
 *          <p>For <code>StartConfigRulesEvaluation</code> API, this exception
 * 			is thrown if an evaluation is in progress or if you call the <a>StartConfigRulesEvaluation</a> API more than once per
 * 			minute.</p>
 *          <p>For <code>PutConfigurationAggregator</code> API, this exception
 * 			is thrown if the number of accounts and aggregators exceeds the
 * 			limit.</p>
 *
 * @throws {@link NoSuchConfigRuleException} (client fault)
 *  <p>The Config rule in the request is not valid. Verify that the rule is an Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>You see this exception in the following cases: </p>
 *          <ul>
 *             <li>
 *                <p>For DeleteConfigRule, Config is deleting this rule. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, the rule is deleting your evaluation results. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, a remediation action is associated with the rule and Config cannot delete this rule. Delete the remediation action associated with the rule before deleting the rule and try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConfigOrganizationRule, organization Config rule deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteOrganizationConfigRule, organization Config rule creation is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConformancePack and PutOrganizationConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class StartConfigRulesEvaluationCommand extends $Command
  .classBuilder<
    StartConfigRulesEvaluationCommandInput,
    StartConfigRulesEvaluationCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "StartConfigRulesEvaluation", {})
  .n("ConfigServiceClient", "StartConfigRulesEvaluationCommand")
  .sc(StartConfigRulesEvaluation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartConfigRulesEvaluationRequest;
      output: {};
    };
    sdk: {
      input: StartConfigRulesEvaluationCommandInput;
      output: StartConfigRulesEvaluationCommandOutput;
    };
  };
}
