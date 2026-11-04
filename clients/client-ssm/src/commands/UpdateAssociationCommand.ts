// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAssociationRequest, UpdateAssociationResult } from "../models/models_1";
import { UpdateAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAssociationCommand}.
 */
export interface UpdateAssociationCommandInput extends UpdateAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssociationCommand}.
 */
export interface UpdateAssociationCommandOutput extends UpdateAssociationResult, __MetadataBearer {}

/**
 * Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon Simple Storage Service (Amazon S3) output. When you call `UpdateAssociation`, the system removes all optional parameters from the request and overwrites the association with null values for those parameters. This is by design. You must specify all optional parameters in the call, even if you are not changing the parameters. This includes the `Name` parameter. Before calling this API action, we recommend that you call the DescribeAssociation API operation and make a note of all optional parameters required for your `UpdateAssociation` call.
 *
 * In order to call this API operation, a user, group, or role must be granted permission to call the DescribeAssociation API operation. If you don't have permission to call `DescribeAssociation`, then you receive the following error: `An error occurred (AccessDeniedException) when calling the UpdateAssociation operation: User: <user_arn> isn't authorized to perform: ssm:DescribeAssociation on resource: <resource_arn>`
 *
 * > **Important:** When you update an association, the association immediately runs against the specified targets. You can add the `ApplyOnlyAtCronInterval` parameter to run the association during the next schedule run.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateAssociationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateAssociationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // UpdateAssociationRequest
 *   AssociationId: "STRING_VALUE", // required
 *   Parameters: { // Parameters
 *     "<keys>": [ // ParameterValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   DocumentVersion: "STRING_VALUE",
 *   ScheduleExpression: "STRING_VALUE",
 *   OutputLocation: { // InstanceAssociationOutputLocation
 *     S3Location: { // S3OutputLocation
 *       OutputS3Region: "STRING_VALUE",
 *       OutputS3BucketName: "STRING_VALUE",
 *       OutputS3KeyPrefix: "STRING_VALUE",
 *     },
 *   },
 *   Name: "STRING_VALUE",
 *   Targets: [ // Targets
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   AssociationName: "STRING_VALUE",
 *   AssociationVersion: "STRING_VALUE",
 *   AutomationTargetParameterName: "STRING_VALUE",
 *   MaxErrors: "STRING_VALUE",
 *   MaxConcurrency: "STRING_VALUE",
 *   ComplianceSeverity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "UNSPECIFIED",
 *   SyncCompliance: "AUTO" || "MANUAL",
 *   ApplyOnlyAtCronInterval: true || false,
 *   CalendarNames: [ // CalendarNameOrARNList
 *     "STRING_VALUE",
 *   ],
 *   TargetLocations: [ // TargetLocations
 *     { // TargetLocation
 *       Accounts: [ // Accounts
 *         "STRING_VALUE",
 *       ],
 *       Regions: [ // Regions
 *         "STRING_VALUE",
 *       ],
 *       TargetLocationMaxConcurrency: "STRING_VALUE",
 *       TargetLocationMaxErrors: "STRING_VALUE",
 *       ExecutionRoleName: "STRING_VALUE",
 *       TargetLocationAlarmConfiguration: { // AlarmConfiguration
 *         IgnorePollAlarmFailure: true || false,
 *         Alarms: [ // AlarmList // required
 *           { // Alarm
 *             Name: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       IncludeChildOrganizationUnits: true || false,
 *       ExcludeAccounts: [ // ExcludeAccounts
 *         "STRING_VALUE",
 *       ],
 *       Targets: [ // AutomationTargets
 *         {
 *           Key: "STRING_VALUE",
 *           Values: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       TargetsMaxConcurrency: "STRING_VALUE",
 *       TargetsMaxErrors: "STRING_VALUE",
 *     },
 *   ],
 *   ScheduleOffset: Number("int"),
 *   Duration: Number("int"),
 *   TargetMaps: [ // TargetMaps
 *     { // TargetMap
 *       "<keys>": [ // TargetMapValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   AlarmConfiguration: {
 *     IgnorePollAlarmFailure: true || false,
 *     Alarms: [ // required
 *       {
 *         Name: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   AssociationDispatchAssumeRole: "STRING_VALUE",
 * };
 * const command = new UpdateAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssociationResult
 * //   AssociationDescription: { // AssociationDescription
 * //     Name: "STRING_VALUE",
 * //     InstanceId: "STRING_VALUE",
 * //     AssociationVersion: "STRING_VALUE",
 * //     Date: new Date("TIMESTAMP"),
 * //     LastUpdateAssociationDate: new Date("TIMESTAMP"),
 * //     Status: { // AssociationStatus
 * //       Date: new Date("TIMESTAMP"), // required
 * //       Name: "Pending" || "Success" || "Failed", // required
 * //       Message: "STRING_VALUE", // required
 * //       AdditionalInfo: "STRING_VALUE",
 * //     },
 * //     Overview: { // AssociationOverview
 * //       Status: "STRING_VALUE",
 * //       DetailedStatus: "STRING_VALUE",
 * //       AssociationStatusAggregatedCount: { // AssociationStatusAggregatedCount
 * //         "<keys>": Number("int"),
 * //       },
 * //     },
 * //     DocumentVersion: "STRING_VALUE",
 * //     AutomationTargetParameterName: "STRING_VALUE",
 * //     Parameters: { // Parameters
 * //       "<keys>": [ // ParameterValueList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     AssociationId: "STRING_VALUE",
 * //     Targets: [ // Targets
 * //       { // Target
 * //         Key: "STRING_VALUE",
 * //         Values: [ // TargetValues
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     ScheduleExpression: "STRING_VALUE",
 * //     OutputLocation: { // InstanceAssociationOutputLocation
 * //       S3Location: { // S3OutputLocation
 * //         OutputS3Region: "STRING_VALUE",
 * //         OutputS3BucketName: "STRING_VALUE",
 * //         OutputS3KeyPrefix: "STRING_VALUE",
 * //       },
 * //     },
 * //     LastExecutionDate: new Date("TIMESTAMP"),
 * //     LastSuccessfulExecutionDate: new Date("TIMESTAMP"),
 * //     AssociationName: "STRING_VALUE",
 * //     MaxErrors: "STRING_VALUE",
 * //     MaxConcurrency: "STRING_VALUE",
 * //     ComplianceSeverity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "UNSPECIFIED",
 * //     SyncCompliance: "AUTO" || "MANUAL",
 * //     ApplyOnlyAtCronInterval: true || false,
 * //     CalendarNames: [ // CalendarNameOrARNList
 * //       "STRING_VALUE",
 * //     ],
 * //     TargetLocations: [ // TargetLocations
 * //       { // TargetLocation
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
 * //         Targets: [ // AutomationTargets
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
 * //     ],
 * //     ScheduleOffset: Number("int"),
 * //     Duration: Number("int"),
 * //     TargetMaps: [ // TargetMaps
 * //       { // TargetMap
 * //         "<keys>": [ // TargetMapValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     AlarmConfiguration: {
 * //       IgnorePollAlarmFailure: true || false,
 * //       Alarms: [ // required
 * //         {
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     TriggeredAlarms: [ // AlarmStateInformationList
 * //       { // AlarmStateInformation
 * //         Name: "STRING_VALUE", // required
 * //         State: "UNKNOWN" || "ALARM", // required
 * //       },
 * //     ],
 * //     AssociationDispatchAssumeRole: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAssociationCommandInput - {@link UpdateAssociationCommandInput}
 * @returns {@link UpdateAssociationCommandOutput}
 * @see {@link UpdateAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateAssociationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AssociationDoesNotExist} (client fault)
 *
 * The specified association doesn't exist.
 *
 * @throws {@link AssociationVersionLimitExceeded} (client fault)
 *
 * You have reached the maximum number versions allowed for an association. Each association has a limit of 1,000 versions.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidAssociationVersion} (client fault)
 *
 * The version you specified isn't valid. Use ListAssociationVersions to view all versions of an association according to the association ID. Or, use the `$LATEST` parameter to view the latest version of the association.
 *
 * @throws {@link InvalidDocument} (client fault)
 *
 * The specified SSM document doesn't exist.
 *
 * @throws {@link InvalidDocumentVersion} (client fault)
 *
 * The document version isn't valid or doesn't exist.
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
 * @throws {@link InvalidUpdate} (client fault)
 *
 * The update isn't valid.
 *
 * @throws {@link TooManyUpdates} (client fault)
 *
 * There are concurrent updates for a resource that supports one update at a time.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class UpdateAssociationCommand extends command<UpdateAssociationCommandInput, UpdateAssociationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAssociation",
  UpdateAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAssociationRequest;
      output: UpdateAssociationResult;
    };
    sdk: {
      input: UpdateAssociationCommandInput;
      output: UpdateAssociationCommandOutput;
    };
  };
}
