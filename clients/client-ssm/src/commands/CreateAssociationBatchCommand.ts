// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAssociationBatchRequest, CreateAssociationBatchResult } from "../models/models_0";
import { CreateAssociationBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAssociationBatchCommand}.
 */
export interface CreateAssociationBatchCommandInput extends CreateAssociationBatchRequest {}
/**
 * @public
 *
 * The output of {@link CreateAssociationBatchCommand}.
 */
export interface CreateAssociationBatchCommandOutput extends CreateAssociationBatchResult, __MetadataBearer {}

/**
 * Associates the specified Amazon Web Services Systems Manager document (SSM document) with the specified managed nodes or targets.
 *
 * When you associate a document with one or more managed nodes using IDs or tags, Amazon Web Services Systems Manager Agent (SSM Agent) running on the managed node processes the document and configures the node as specified.
 *
 * If you associate a document with a managed node that already has an associated document, the system returns the AssociationAlreadyExists exception.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateAssociationBatchCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateAssociationBatchCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // CreateAssociationBatchRequest
 *   Entries: [ // CreateAssociationBatchRequestEntries // required
 *     { // CreateAssociationBatchRequestEntry
 *       Name: "STRING_VALUE", // required
 *       InstanceId: "STRING_VALUE",
 *       Parameters: { // Parameters
 *         "<keys>": [ // ParameterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       AutomationTargetParameterName: "STRING_VALUE",
 *       DocumentVersion: "STRING_VALUE",
 *       Targets: [ // Targets
 *         { // Target
 *           Key: "STRING_VALUE",
 *           Values: [ // TargetValues
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       ScheduleExpression: "STRING_VALUE",
 *       OutputLocation: { // InstanceAssociationOutputLocation
 *         S3Location: { // S3OutputLocation
 *           OutputS3Region: "STRING_VALUE",
 *           OutputS3BucketName: "STRING_VALUE",
 *           OutputS3KeyPrefix: "STRING_VALUE",
 *         },
 *       },
 *       AssociationName: "STRING_VALUE",
 *       MaxErrors: "STRING_VALUE",
 *       MaxConcurrency: "STRING_VALUE",
 *       ComplianceSeverity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "UNSPECIFIED",
 *       SyncCompliance: "AUTO" || "MANUAL",
 *       ApplyOnlyAtCronInterval: true || false,
 *       CalendarNames: [ // CalendarNameOrARNList
 *         "STRING_VALUE",
 *       ],
 *       TargetLocations: [ // TargetLocations
 *         { // TargetLocation
 *           Accounts: [ // Accounts
 *             "STRING_VALUE",
 *           ],
 *           Regions: [ // Regions
 *             "STRING_VALUE",
 *           ],
 *           TargetLocationMaxConcurrency: "STRING_VALUE",
 *           TargetLocationMaxErrors: "STRING_VALUE",
 *           ExecutionRoleName: "STRING_VALUE",
 *           TargetLocationAlarmConfiguration: { // AlarmConfiguration
 *             IgnorePollAlarmFailure: true || false,
 *             Alarms: [ // AlarmList // required
 *               { // Alarm
 *                 Name: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *           IncludeChildOrganizationUnits: true || false,
 *           ExcludeAccounts: [ // ExcludeAccounts
 *             "STRING_VALUE",
 *           ],
 *           Targets: [ // AutomationTargets
 *             {
 *               Key: "STRING_VALUE",
 *               Values: [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           ],
 *           TargetsMaxConcurrency: "STRING_VALUE",
 *           TargetsMaxErrors: "STRING_VALUE",
 *         },
 *       ],
 *       ScheduleOffset: Number("int"),
 *       Duration: Number("int"),
 *       TargetMaps: [ // TargetMaps
 *         { // TargetMap
 *           "<keys>": [ // TargetMapValueList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       AlarmConfiguration: {
 *         IgnorePollAlarmFailure: true || false,
 *         Alarms: [ // required
 *           {
 *             Name: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   ],
 *   AssociationDispatchAssumeRole: "STRING_VALUE",
 * };
 * const command = new CreateAssociationBatchCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssociationBatchResult
 * //   Successful: [ // AssociationDescriptionList
 * //     { // AssociationDescription
 * //       Name: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       AssociationVersion: "STRING_VALUE",
 * //       Date: new Date("TIMESTAMP"),
 * //       LastUpdateAssociationDate: new Date("TIMESTAMP"),
 * //       Status: { // AssociationStatus
 * //         Date: new Date("TIMESTAMP"), // required
 * //         Name: "Pending" || "Success" || "Failed", // required
 * //         Message: "STRING_VALUE", // required
 * //         AdditionalInfo: "STRING_VALUE",
 * //       },
 * //       Overview: { // AssociationOverview
 * //         Status: "STRING_VALUE",
 * //         DetailedStatus: "STRING_VALUE",
 * //         AssociationStatusAggregatedCount: { // AssociationStatusAggregatedCount
 * //           "<keys>": Number("int"),
 * //         },
 * //       },
 * //       DocumentVersion: "STRING_VALUE",
 * //       AutomationTargetParameterName: "STRING_VALUE",
 * //       Parameters: { // Parameters
 * //         "<keys>": [ // ParameterValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       AssociationId: "STRING_VALUE",
 * //       Targets: [ // Targets
 * //         { // Target
 * //           Key: "STRING_VALUE",
 * //           Values: [ // TargetValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       ScheduleExpression: "STRING_VALUE",
 * //       OutputLocation: { // InstanceAssociationOutputLocation
 * //         S3Location: { // S3OutputLocation
 * //           OutputS3Region: "STRING_VALUE",
 * //           OutputS3BucketName: "STRING_VALUE",
 * //           OutputS3KeyPrefix: "STRING_VALUE",
 * //         },
 * //       },
 * //       LastExecutionDate: new Date("TIMESTAMP"),
 * //       LastSuccessfulExecutionDate: new Date("TIMESTAMP"),
 * //       AssociationName: "STRING_VALUE",
 * //       MaxErrors: "STRING_VALUE",
 * //       MaxConcurrency: "STRING_VALUE",
 * //       ComplianceSeverity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "UNSPECIFIED",
 * //       SyncCompliance: "AUTO" || "MANUAL",
 * //       ApplyOnlyAtCronInterval: true || false,
 * //       CalendarNames: [ // CalendarNameOrARNList
 * //         "STRING_VALUE",
 * //       ],
 * //       TargetLocations: [ // TargetLocations
 * //         { // TargetLocation
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
 * //           Targets: [ // AutomationTargets
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
 * //       ],
 * //       ScheduleOffset: Number("int"),
 * //       Duration: Number("int"),
 * //       TargetMaps: [ // TargetMaps
 * //         { // TargetMap
 * //           "<keys>": [ // TargetMapValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       AlarmConfiguration: {
 * //         IgnorePollAlarmFailure: true || false,
 * //         Alarms: [ // required
 * //           {
 * //             Name: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       TriggeredAlarms: [ // AlarmStateInformationList
 * //         { // AlarmStateInformation
 * //           Name: "STRING_VALUE", // required
 * //           State: "UNKNOWN" || "ALARM", // required
 * //         },
 * //       ],
 * //       AssociationDispatchAssumeRole: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Failed: [ // FailedCreateAssociationList
 * //     { // FailedCreateAssociation
 * //       Entry: { // CreateAssociationBatchRequestEntry
 * //         Name: "STRING_VALUE", // required
 * //         InstanceId: "STRING_VALUE",
 * //         Parameters: {
 * //           "<keys>": [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         AutomationTargetParameterName: "STRING_VALUE",
 * //         DocumentVersion: "STRING_VALUE",
 * //         Targets: [
 * //           "<Target>",
 * //         ],
 * //         ScheduleExpression: "STRING_VALUE",
 * //         OutputLocation: {
 * //           S3Location: {
 * //             OutputS3Region: "STRING_VALUE",
 * //             OutputS3BucketName: "STRING_VALUE",
 * //             OutputS3KeyPrefix: "STRING_VALUE",
 * //           },
 * //         },
 * //         AssociationName: "STRING_VALUE",
 * //         MaxErrors: "STRING_VALUE",
 * //         MaxConcurrency: "STRING_VALUE",
 * //         ComplianceSeverity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "UNSPECIFIED",
 * //         SyncCompliance: "AUTO" || "MANUAL",
 * //         ApplyOnlyAtCronInterval: true || false,
 * //         CalendarNames: [
 * //           "STRING_VALUE",
 * //         ],
 * //         TargetLocations: [
 * //           {
 * //             Accounts: [
 * //               "STRING_VALUE",
 * //             ],
 * //             Regions: [
 * //               "STRING_VALUE",
 * //             ],
 * //             TargetLocationMaxConcurrency: "STRING_VALUE",
 * //             TargetLocationMaxErrors: "STRING_VALUE",
 * //             ExecutionRoleName: "STRING_VALUE",
 * //             TargetLocationAlarmConfiguration: "<AlarmConfiguration>",
 * //             IncludeChildOrganizationUnits: true || false,
 * //             ExcludeAccounts: [
 * //               "STRING_VALUE",
 * //             ],
 * //             Targets: [
 * //               "<Target>",
 * //             ],
 * //             TargetsMaxConcurrency: "STRING_VALUE",
 * //             TargetsMaxErrors: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ScheduleOffset: Number("int"),
 * //         Duration: Number("int"),
 * //         TargetMaps: [
 * //           {
 * //             "<keys>": [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         AlarmConfiguration: "<AlarmConfiguration>",
 * //       },
 * //       Message: "STRING_VALUE",
 * //       Fault: "Client" || "Server" || "Unknown",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateAssociationBatchCommandInput - {@link CreateAssociationBatchCommandInput}
 * @returns {@link CreateAssociationBatchCommandOutput}
 * @see {@link CreateAssociationBatchCommandInput} for command's `input` shape.
 * @see {@link CreateAssociationBatchCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AssociationLimitExceeded} (client fault)
 *
 * You can have at most 2,000 active associations.
 *
 * @throws {@link DuplicateInstanceId} (client fault)
 *
 * You can't specify a managed node ID in more than one association.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidDocument} (client fault)
 *
 * The specified SSM document doesn't exist.
 *
 * @throws {@link InvalidDocumentVersion} (client fault)
 *
 * The document version isn't valid or doesn't exist.
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *
 * The following problems can cause this exception:
 *
 * - You don't have permission to access the managed node.
 * - Amazon Web Services Systems Manager Agent (SSM Agent) isn't running. Verify that SSM Agent is running.
 * - SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.
 * - The managed node isn't in a valid state. Valid states are: `Running`, `Pending`, `Stopped`, and `Stopping`. Invalid states are: `Shutting-down` and `Terminated`.
 *
 * @throws {@link InvalidOutputLocation} (client fault)
 *
 * The output location isn't valid or doesn't exist.
 *
 * @throws {@link InvalidParameters} (client fault)
 *
 * You must specify values for all required parameters in the Amazon Web Services Systems Manager document (SSM document). You can only supply values to parameters defined in the SSM document.
 *
 * @throws {@link InvalidSchedule} (client fault)
 *
 * The schedule is invalid. Verify your cron or rate expression and try again.
 *
 * @throws {@link InvalidTarget} (client fault)
 *
 * The target isn't valid or doesn't exist. It might not be configured for Systems Manager or you might not have permission to perform the operation.
 *
 * @throws {@link InvalidTargetMaps} (client fault)
 *
 * TargetMap parameter isn't valid.
 *
 * @throws {@link UnsupportedPlatformType} (client fault)
 *
 * The document doesn't support the platform type of the given managed node IDs. For example, you sent an document for a Windows managed node to a Linux node.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class CreateAssociationBatchCommand extends command<CreateAssociationBatchCommandInput, CreateAssociationBatchCommandOutput>(
  _ep0,
  _mw0,
  "CreateAssociationBatch",
  CreateAssociationBatch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAssociationBatchRequest;
      output: CreateAssociationBatchResult;
    };
    sdk: {
      input: CreateAssociationBatchCommandInput;
      output: CreateAssociationBatchCommandOutput;
    };
  };
}
