// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAutomationStepExecutionsRequest, DescribeAutomationStepExecutionsResult } from "../models/models_0";
import { DescribeAutomationStepExecutions } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAutomationStepExecutionsCommand}.
 */
export interface DescribeAutomationStepExecutionsCommandInput extends DescribeAutomationStepExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAutomationStepExecutionsCommand}.
 */
export interface DescribeAutomationStepExecutionsCommandOutput
  extends DescribeAutomationStepExecutionsResult,
    __MetadataBearer {}

/**
 * <p>Information about all active and terminated step executions in an Automation
 *    workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAutomationStepExecutionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeAutomationStepExecutionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribeAutomationStepExecutionsRequest
 *   AutomationExecutionId: "STRING_VALUE", // required
 *   Filters: [ // StepExecutionFilterList
 *     { // StepExecutionFilter
 *       Key: "StartTimeBefore" || "StartTimeAfter" || "StepExecutionStatus" || "StepExecutionId" || "StepName" || "Action" || "ParentStepExecutionId" || "ParentStepIteration" || "ParentStepIteratorValue", // required
 *       Values: [ // StepExecutionFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ReverseOrder: true || false,
 * };
 * const command = new DescribeAutomationStepExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAutomationStepExecutionsResult
 * //   StepExecutions: [ // StepExecutionList
 * //     { // StepExecution
 * //       StepName: "STRING_VALUE",
 * //       Action: "STRING_VALUE",
 * //       TimeoutSeconds: Number("long"),
 * //       OnFailure: "STRING_VALUE",
 * //       MaxAttempts: Number("int"),
 * //       ExecutionStartTime: new Date("TIMESTAMP"),
 * //       ExecutionEndTime: new Date("TIMESTAMP"),
 * //       StepStatus: "Pending" || "InProgress" || "Waiting" || "Success" || "TimedOut" || "Cancelling" || "Cancelled" || "Failed" || "PendingApproval" || "Approved" || "Rejected" || "Scheduled" || "RunbookInProgress" || "PendingChangeCalendarOverride" || "ChangeCalendarOverrideApproved" || "ChangeCalendarOverrideRejected" || "CompletedWithSuccess" || "CompletedWithFailure" || "Exited",
 * //       ResponseCode: "STRING_VALUE",
 * //       Inputs: { // NormalStringMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Outputs: { // AutomationParameterMap
 * //         "<keys>": [ // AutomationParameterValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Response: "STRING_VALUE",
 * //       FailureMessage: "STRING_VALUE",
 * //       FailureDetails: { // FailureDetails
 * //         FailureStage: "STRING_VALUE",
 * //         FailureType: "STRING_VALUE",
 * //         Details: {
 * //           "<keys>": [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       StepExecutionId: "STRING_VALUE",
 * //       OverriddenParameters: {
 * //         "<keys>": [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       IsEnd: true || false,
 * //       NextStep: "STRING_VALUE",
 * //       IsCritical: true || false,
 * //       ValidNextSteps: [ // ValidNextStepList
 * //         "STRING_VALUE",
 * //       ],
 * //       Targets: [ // Targets
 * //         { // Target
 * //           Key: "STRING_VALUE",
 * //           Values: [ // TargetValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       TargetLocation: { // TargetLocation
 * //         Accounts: [ // Accounts
 * //           "STRING_VALUE",
 * //         ],
 * //         Regions: [ // Regions
 * //           "STRING_VALUE",
 * //         ],
 * //         TargetLocationMaxConcurrency: "STRING_VALUE",
 * //         TargetLocationMaxErrors: "STRING_VALUE",
 * //         ExecutionRoleName: "STRING_VALUE",
 * //         TargetLocationAlarmConfiguration: { // AlarmConfiguration
 * //           IgnorePollAlarmFailure: true || false,
 * //           Alarms: [ // AlarmList // required
 * //             { // Alarm
 * //               Name: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         IncludeChildOrganizationUnits: true || false,
 * //         ExcludeAccounts: [ // ExcludeAccounts
 * //           "STRING_VALUE",
 * //         ],
 * //         Targets: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Values: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         TargetsMaxConcurrency: "STRING_VALUE",
 * //         TargetsMaxErrors: "STRING_VALUE",
 * //       },
 * //       TriggeredAlarms: [ // AlarmStateInformationList
 * //         { // AlarmStateInformation
 * //           Name: "STRING_VALUE", // required
 * //           State: "UNKNOWN" || "ALARM", // required
 * //         },
 * //       ],
 * //       ParentStepDetails: { // ParentStepDetails
 * //         StepExecutionId: "STRING_VALUE",
 * //         StepName: "STRING_VALUE",
 * //         Action: "STRING_VALUE",
 * //         Iteration: Number("int"),
 * //         IteratorValue: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAutomationStepExecutionsCommandInput - {@link DescribeAutomationStepExecutionsCommandInput}
 * @returns {@link DescribeAutomationStepExecutionsCommandOutput}
 * @see {@link DescribeAutomationStepExecutionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAutomationStepExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AutomationExecutionNotFoundException} (client fault)
 *  <p>There is no automation execution information for the requested automation execution
 *    ID.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilterKey} (client fault)
 *  <p>The specified key isn't valid.</p>
 *
 * @throws {@link InvalidFilterValue} (client fault)
 *  <p>The filter value isn't valid. Verify the value and try again.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DescribeAutomationStepExecutionsCommand extends $Command
  .classBuilder<
    DescribeAutomationStepExecutionsCommandInput,
    DescribeAutomationStepExecutionsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DescribeAutomationStepExecutions", {})
  .n("SSMClient", "DescribeAutomationStepExecutionsCommand")
  .sc(DescribeAutomationStepExecutions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAutomationStepExecutionsRequest;
      output: DescribeAutomationStepExecutionsResult;
    };
    sdk: {
      input: DescribeAutomationStepExecutionsCommandInput;
      output: DescribeAutomationStepExecutionsCommandOutput;
    };
  };
}
