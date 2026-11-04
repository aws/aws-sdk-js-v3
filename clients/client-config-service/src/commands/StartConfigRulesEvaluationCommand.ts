// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartConfigRulesEvaluationRequest, StartConfigRulesEvaluationResponse } from "../models/models_0";
import { StartConfigRulesEvaluation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Runs an on-demand evaluation for the specified Config rules against the last known configuration state of the resources. Use `StartConfigRulesEvaluation` when you want to test that a rule you updated is working as expected. `StartConfigRulesEvaluation` does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources.
 *
 * You can specify up to 25 Config rules per request.
 *
 * An existing `StartConfigRulesEvaluation` call for the specified rules must complete before you can call the API again. If you chose to have Config stream to an Amazon SNS topic, you will receive a `ConfigRuleEvaluationStarted` notification when the evaluation starts.
 *
 * > **Note:** You don't need to call the `StartConfigRulesEvaluation` API to run an evaluation for a new rule. When you create a rule, Config evaluates your resources against the rule automatically.
 *
 * The `StartConfigRulesEvaluation` API is useful if you want to run on-demand evaluations, such as the following example:
 *
 * 1. You have a custom rule that evaluates your IAM resources every 24 hours.
 * 2. You update your Lambda function to add additional conditions to your rule.
 * 3. Instead of waiting for the next periodic evaluation, you call the `StartConfigRulesEvaluation` API.
 * 4. Config invokes your Lambda function and evaluates your IAM resources.
 * 5. Your custom rule will still run periodic evaluations every 24 hours.
 *
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
 *
 * One or more of the specified parameters are not valid. Verify that your parameters are valid and try again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * For `PutServiceLinkedConfigurationRecorder` API, this exception is thrown if the number of service-linked roles in the account exceeds the limit.
 *
 * For `StartConfigRulesEvaluation` API, this exception is thrown if an evaluation is in progress or if you call the StartConfigRulesEvaluation API more than once per minute.
 *
 * For `PutConfigurationAggregator` API, this exception is thrown if the number of accounts and aggregators exceeds the limit.
 *
 * @throws {@link NoSuchConfigRuleException} (client fault)
 *
 * The Config rule in the request is not valid. Verify that the rule is an Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * You see this exception in the following cases:
 *
 * - For DeleteConfigRule, Config is deleting this rule. Try your request again later.
 * - For DeleteConfigRule, the rule is deleting your evaluation results. Try your request again later.
 * - For DeleteConfigRule, a remediation action is associated with the rule and Config cannot delete this rule. Delete the remediation action associated with the rule before deleting the rule and try your request again later.
 * - For PutConfigOrganizationRule, organization Config rule deletion is in progress. Try your request again later.
 * - For DeleteOrganizationConfigRule, organization Config rule creation is in progress. Try your request again later.
 * - For PutConformancePack and PutOrganizationConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.
 * - For DeleteConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.
 *
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class StartConfigRulesEvaluationCommand extends command<StartConfigRulesEvaluationCommandInput, StartConfigRulesEvaluationCommandOutput>(
  _ep0,
  _mw0,
  "StartConfigRulesEvaluation",
  StartConfigRulesEvaluation$
) {
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
