// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAssociationRequest, CreateAssociationResult } from "../models/models_0";
import { CreateAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAssociationCommand}.
 */
export interface CreateAssociationCommandInput extends CreateAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateAssociationCommand}.
 */
export interface CreateAssociationCommandOutput extends CreateAssociationResult, __MetadataBearer {}

/**
 * A State Manager association defines the state that you want to maintain on your managed nodes. For example, an association can specify that anti-virus software must be installed and running on your managed nodes, or that certain ports must be closed. For static targets, the association specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an Amazon Web Services resource group or an Amazon Web Services autoscaling group, State Manager, a tool in Amazon Web Services Systems Manager applies the configuration when new managed nodes are added to the group. The association also specifies actions to take when applying the configuration. For example, an association for anti-virus software might run once a day. If the software isn't installed, then State Manager installs it. If the software is installed, but the service isn't running, then the association might instruct State Manager to start the service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateAssociationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateAssociationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // CreateAssociationRequest
 *   Name: "STRING_VALUE", // required
 *   DocumentVersion: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 *   Parameters: { // Parameters
 *     "<keys>": [ // ParameterValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Targets: [ // Targets
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ScheduleExpression: "STRING_VALUE",
 *   OutputLocation: { // InstanceAssociationOutputLocation
 *     S3Location: { // S3OutputLocation
 *       OutputS3Region: "STRING_VALUE",
 *       OutputS3BucketName: "STRING_VALUE",
 *       OutputS3KeyPrefix: "STRING_VALUE",
 *     },
 *   },
 *   AssociationName: "STRING_VALUE",
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
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
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
 * const command = new CreateAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssociationResult
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
 * @param CreateAssociationCommandInput - {@link CreateAssociationCommandInput}
 * @returns {@link CreateAssociationCommandOutput}
 * @see {@link CreateAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateAssociationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AssociationAlreadyExists} (client fault)
 *
 * The specified association already exists.
 *
 * @throws {@link AssociationLimitExceeded} (client fault)
 *
 * You can have at most 2,000 active associations.
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
 * @throws {@link InvalidTag} (client fault)
 *
 * The specified tag key or value isn't valid.
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
export class CreateAssociationCommand extends command<CreateAssociationCommandInput, CreateAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateAssociation",
  CreateAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAssociationRequest;
      output: CreateAssociationResult;
    };
    sdk: {
      input: CreateAssociationCommandInput;
      output: CreateAssociationCommandOutput;
    };
  };
}
