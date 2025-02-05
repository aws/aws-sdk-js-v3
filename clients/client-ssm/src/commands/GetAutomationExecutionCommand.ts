// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAutomationExecutionRequest, GetAutomationExecutionResult } from "../models/models_1";
import { de_GetAutomationExecutionCommand, se_GetAutomationExecutionCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAutomationExecutionCommand}.
 */
export interface GetAutomationExecutionCommandInput extends GetAutomationExecutionRequest {}
/**
 * @public
 *
 * The output of {@link GetAutomationExecutionCommand}.
 */
export interface GetAutomationExecutionCommandOutput extends GetAutomationExecutionResult, __MetadataBearer {}

/**
 * <p>Get detailed information about a particular Automation execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetAutomationExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetAutomationExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMClient(config);
 * const input = { // GetAutomationExecutionRequest
 *   AutomationExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetAutomationExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetAutomationExecutionResult
 * //   AutomationExecution: { // AutomationExecution
 * //     AutomationExecutionId: "STRING_VALUE",
 * //     DocumentName: "STRING_VALUE",
 * //     DocumentVersion: "STRING_VALUE",
 * //     ExecutionStartTime: new Date("TIMESTAMP"),
 * //     ExecutionEndTime: new Date("TIMESTAMP"),
 * //     AutomationExecutionStatus: "Pending" || "InProgress" || "Waiting" || "Success" || "TimedOut" || "Cancelling" || "Cancelled" || "Failed" || "PendingApproval" || "Approved" || "Rejected" || "Scheduled" || "RunbookInProgress" || "PendingChangeCalendarOverride" || "ChangeCalendarOverrideApproved" || "ChangeCalendarOverrideRejected" || "CompletedWithSuccess" || "CompletedWithFailure" || "Exited",
 * //     StepExecutions: [ // StepExecutionList
 * //       { // StepExecution
 * //         StepName: "STRING_VALUE",
 * //         Action: "STRING_VALUE",
 * //         TimeoutSeconds: Number("long"),
 * //         OnFailure: "STRING_VALUE",
 * //         MaxAttempts: Number("int"),
 * //         ExecutionStartTime: new Date("TIMESTAMP"),
 * //         ExecutionEndTime: new Date("TIMESTAMP"),
 * //         StepStatus: "Pending" || "InProgress" || "Waiting" || "Success" || "TimedOut" || "Cancelling" || "Cancelled" || "Failed" || "PendingApproval" || "Approved" || "Rejected" || "Scheduled" || "RunbookInProgress" || "PendingChangeCalendarOverride" || "ChangeCalendarOverrideApproved" || "ChangeCalendarOverrideRejected" || "CompletedWithSuccess" || "CompletedWithFailure" || "Exited",
 * //         ResponseCode: "STRING_VALUE",
 * //         Inputs: { // NormalStringMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         Outputs: { // AutomationParameterMap
 * //           "<keys>": [ // AutomationParameterValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Response: "STRING_VALUE",
 * //         FailureMessage: "STRING_VALUE",
 * //         FailureDetails: { // FailureDetails
 * //           FailureStage: "STRING_VALUE",
 * //           FailureType: "STRING_VALUE",
 * //           Details: {
 * //             "<keys>": [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         StepExecutionId: "STRING_VALUE",
 * //         OverriddenParameters: {
 * //           "<keys>": [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         IsEnd: true || false,
 * //         NextStep: "STRING_VALUE",
 * //         IsCritical: true || false,
 * //         ValidNextSteps: [ // ValidNextStepList
 * //           "STRING_VALUE",
 * //         ],
 * //         Targets: [ // Targets
 * //           { // Target
 * //             Key: "STRING_VALUE",
 * //             Values: [ // TargetValues
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         TargetLocation: { // TargetLocation
 * //           Accounts: [ // Accounts
 * //             "STRING_VALUE",
 * //           ],
 * //           Regions: [ // Regions
 * //             "STRING_VALUE",
 * //           ],
 * //           TargetLocationMaxConcurrency: "STRING_VALUE",
 * //           TargetLocationMaxErrors: "STRING_VALUE",
 * //           ExecutionRoleName: "STRING_VALUE",
 * //           TargetLocationAlarmConfiguration: { // AlarmConfiguration
 * //             IgnorePollAlarmFailure: true || false,
 * //             Alarms: [ // AlarmList // required
 * //               { // Alarm
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //           IncludeChildOrganizationUnits: true || false,
 * //           ExcludeAccounts: [ // ExcludeAccounts
 * //             "STRING_VALUE",
 * //           ],
 * //           Targets: [
 * //             {
 * //               Key: "STRING_VALUE",
 * //               Values: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //           TargetsMaxConcurrency: "STRING_VALUE",
 * //           TargetsMaxErrors: "STRING_VALUE",
 * //         },
 * //         TriggeredAlarms: [ // AlarmStateInformationList
 * //           { // AlarmStateInformation
 * //             Name: "STRING_VALUE", // required
 * //             State: "UNKNOWN" || "ALARM", // required
 * //           },
 * //         ],
 * //         ParentStepDetails: { // ParentStepDetails
 * //           StepExecutionId: "STRING_VALUE",
 * //           StepName: "STRING_VALUE",
 * //           Action: "STRING_VALUE",
 * //           Iteration: Number("int"),
 * //           IteratorValue: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     StepExecutionsTruncated: true || false,
 * //     Parameters: "<AutomationParameterMap>",
 * //     Outputs: "<AutomationParameterMap>",
 * //     FailureMessage: "STRING_VALUE",
 * //     Mode: "Auto" || "Interactive",
 * //     ParentAutomationExecutionId: "STRING_VALUE",
 * //     ExecutedBy: "STRING_VALUE",
 * //     CurrentStepName: "STRING_VALUE",
 * //     CurrentAction: "STRING_VALUE",
 * //     TargetParameterName: "STRING_VALUE",
 * //     Targets: "<Targets>",
 * //     TargetMaps: [ // TargetMaps
 * //       { // TargetMap
 * //         "<keys>": [ // TargetMapValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     ResolvedTargets: { // ResolvedTargets
 * //       ParameterValues: [ // TargetParameterList
 * //         "STRING_VALUE",
 * //       ],
 * //       Truncated: true || false,
 * //     },
 * //     MaxConcurrency: "STRING_VALUE",
 * //     MaxErrors: "STRING_VALUE",
 * //     Target: "STRING_VALUE",
 * //     TargetLocations: [ // TargetLocations
 * //       {
 * //         Accounts: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Regions: [
 * //           "STRING_VALUE",
 * //         ],
 * //         TargetLocationMaxConcurrency: "STRING_VALUE",
 * //         TargetLocationMaxErrors: "STRING_VALUE",
 * //         ExecutionRoleName: "STRING_VALUE",
 * //         TargetLocationAlarmConfiguration: {
 * //           IgnorePollAlarmFailure: true || false,
 * //           Alarms: [ // required
 * //             {
 * //               Name: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         IncludeChildOrganizationUnits: true || false,
 * //         ExcludeAccounts: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Targets: "<Targets>",
 * //         TargetsMaxConcurrency: "STRING_VALUE",
 * //         TargetsMaxErrors: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ProgressCounters: { // ProgressCounters
 * //       TotalSteps: Number("int"),
 * //       SuccessSteps: Number("int"),
 * //       FailedSteps: Number("int"),
 * //       CancelledSteps: Number("int"),
 * //       TimedOutSteps: Number("int"),
 * //     },
 * //     AlarmConfiguration: "<AlarmConfiguration>",
 * //     TriggeredAlarms: [
 * //       {
 * //         Name: "STRING_VALUE", // required
 * //         State: "UNKNOWN" || "ALARM", // required
 * //       },
 * //     ],
 * //     TargetLocationsURL: "STRING_VALUE",
 * //     AutomationSubtype: "ChangeRequest",
 * //     ScheduledTime: new Date("TIMESTAMP"),
 * //     Runbooks: [ // Runbooks
 * //       { // Runbook
 * //         DocumentName: "STRING_VALUE", // required
 * //         DocumentVersion: "STRING_VALUE",
 * //         Parameters: "<AutomationParameterMap>",
 * //         TargetParameterName: "STRING_VALUE",
 * //         Targets: "<Targets>",
 * //         TargetMaps: [
 * //           {
 * //             "<keys>": [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         MaxConcurrency: "STRING_VALUE",
 * //         MaxErrors: "STRING_VALUE",
 * //         TargetLocations: [
 * //           "<TargetLocation>",
 * //         ],
 * //       },
 * //     ],
 * //     OpsItemId: "STRING_VALUE",
 * //     AssociationId: "STRING_VALUE",
 * //     ChangeRequestName: "STRING_VALUE",
 * //     Variables: "<AutomationParameterMap>",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAutomationExecutionCommandInput - {@link GetAutomationExecutionCommandInput}
 * @returns {@link GetAutomationExecutionCommandOutput}
 * @see {@link GetAutomationExecutionCommandInput} for command's `input` shape.
 * @see {@link GetAutomationExecutionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AutomationExecutionNotFoundException} (client fault)
 *  <p>There is no automation execution information for the requested automation execution
 *    ID.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class GetAutomationExecutionCommand extends $Command
  .classBuilder<
    GetAutomationExecutionCommandInput,
    GetAutomationExecutionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "GetAutomationExecution", {})
  .n("SSMClient", "GetAutomationExecutionCommand")
  .f(void 0, void 0)
  .ser(se_GetAutomationExecutionCommand)
  .de(de_GetAutomationExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAutomationExecutionRequest;
      output: GetAutomationExecutionResult;
    };
    sdk: {
      input: GetAutomationExecutionCommandInput;
      output: GetAutomationExecutionCommandOutput;
    };
  };
}
