// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMaintenanceWindowTaskRequest, UpdateMaintenanceWindowTaskResult } from "../models/models_1";
import { UpdateMaintenanceWindowTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMaintenanceWindowTaskCommand}.
 */
export interface UpdateMaintenanceWindowTaskCommandInput extends UpdateMaintenanceWindowTaskRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMaintenanceWindowTaskCommand}.
 */
export interface UpdateMaintenanceWindowTaskCommandOutput extends UpdateMaintenanceWindowTaskResult, __MetadataBearer {}

/**
 * Modifies a task assigned to a maintenance window. You can't change the task type, but you can change the following values:
 *
 * - `TaskARN`. For example, you can change a `RUN_COMMAND` task from `AWS-RunPowerShellScript` to `AWS-RunShellScript`.
 * - `ServiceRoleArn`
 * - `TaskInvocationParameters`
 * - `Priority`
 * - `MaxConcurrency`
 * - `MaxErrors`
 *
 * > **Note:** One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see [Registering maintenance window tasks without targets](https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html) in the *Amazon Web Services Systems Manager User Guide*.
 *
 * If the value for a parameter in `UpdateMaintenanceWindowTask` is null, then the corresponding field isn't modified. If you set `Replace` to true, then all fields required by the RegisterTaskWithMaintenanceWindow operation are required for this request. Optional fields that aren't specified are set to null.
 *
 * > **Important:** When you update a maintenance window task that has options specified in `TaskInvocationParameters`, you must provide again all the `TaskInvocationParameters` values that you want to retain. The values you don't specify again are removed. For example, suppose that when you registered a Run Command task, you specified `TaskInvocationParameters` values for `Comment`, `NotificationConfig`, and `OutputS3BucketName`. If you update the maintenance window task and specify only a different `OutputS3BucketName` value, the values for `Comment` and `NotificationConfig` are removed.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateMaintenanceWindowTaskCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateMaintenanceWindowTaskCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // UpdateMaintenanceWindowTaskRequest
 *   WindowId: "STRING_VALUE", // required
 *   WindowTaskId: "STRING_VALUE", // required
 *   Targets: [ // Targets
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   TaskArn: "STRING_VALUE",
 *   ServiceRoleArn: "STRING_VALUE",
 *   TaskParameters: { // MaintenanceWindowTaskParameters
 *     "<keys>": { // MaintenanceWindowTaskParameterValueExpression
 *       Values: [ // MaintenanceWindowTaskParameterValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   TaskInvocationParameters: { // MaintenanceWindowTaskInvocationParameters
 *     RunCommand: { // MaintenanceWindowRunCommandParameters
 *       Comment: "STRING_VALUE",
 *       CloudWatchOutputConfig: { // CloudWatchOutputConfig
 *         CloudWatchLogGroupName: "STRING_VALUE",
 *         CloudWatchOutputEnabled: true || false,
 *       },
 *       DocumentHash: "STRING_VALUE",
 *       DocumentHashType: "Sha256" || "Sha1",
 *       DocumentVersion: "STRING_VALUE",
 *       NotificationConfig: { // NotificationConfig
 *         NotificationArn: "STRING_VALUE",
 *         NotificationEvents: [ // NotificationEventList
 *           "All" || "InProgress" || "Success" || "TimedOut" || "Cancelled" || "Failed",
 *         ],
 *         NotificationType: "Command" || "Invocation",
 *       },
 *       OutputS3BucketName: "STRING_VALUE",
 *       OutputS3KeyPrefix: "STRING_VALUE",
 *       Parameters: { // Parameters
 *         "<keys>": [ // ParameterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       ServiceRoleArn: "STRING_VALUE",
 *       TimeoutSeconds: Number("int"),
 *     },
 *     Automation: { // MaintenanceWindowAutomationParameters
 *       DocumentVersion: "STRING_VALUE",
 *       Parameters: { // AutomationParameterMap
 *         "<keys>": [ // AutomationParameterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     StepFunctions: { // MaintenanceWindowStepFunctionsParameters
 *       Input: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *     },
 *     Lambda: { // MaintenanceWindowLambdaParameters
 *       ClientContext: "STRING_VALUE",
 *       Qualifier: "STRING_VALUE",
 *       Payload: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     },
 *   },
 *   Priority: Number("int"),
 *   MaxConcurrency: "STRING_VALUE",
 *   MaxErrors: "STRING_VALUE",
 *   LoggingInfo: { // LoggingInfo
 *     S3BucketName: "STRING_VALUE", // required
 *     S3KeyPrefix: "STRING_VALUE",
 *     S3Region: "STRING_VALUE", // required
 *   },
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Replace: true || false,
 *   CutoffBehavior: "CONTINUE_TASK" || "CANCEL_TASK",
 *   AlarmConfiguration: { // AlarmConfiguration
 *     IgnorePollAlarmFailure: true || false,
 *     Alarms: [ // AlarmList // required
 *       { // Alarm
 *         Name: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateMaintenanceWindowTaskCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMaintenanceWindowTaskResult
 * //   WindowId: "STRING_VALUE",
 * //   WindowTaskId: "STRING_VALUE",
 * //   Targets: [ // Targets
 * //     { // Target
 * //       Key: "STRING_VALUE",
 * //       Values: [ // TargetValues
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   TaskArn: "STRING_VALUE",
 * //   ServiceRoleArn: "STRING_VALUE",
 * //   TaskParameters: { // MaintenanceWindowTaskParameters
 * //     "<keys>": { // MaintenanceWindowTaskParameterValueExpression
 * //       Values: [ // MaintenanceWindowTaskParameterValueList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   TaskInvocationParameters: { // MaintenanceWindowTaskInvocationParameters
 * //     RunCommand: { // MaintenanceWindowRunCommandParameters
 * //       Comment: "STRING_VALUE",
 * //       CloudWatchOutputConfig: { // CloudWatchOutputConfig
 * //         CloudWatchLogGroupName: "STRING_VALUE",
 * //         CloudWatchOutputEnabled: true || false,
 * //       },
 * //       DocumentHash: "STRING_VALUE",
 * //       DocumentHashType: "Sha256" || "Sha1",
 * //       DocumentVersion: "STRING_VALUE",
 * //       NotificationConfig: { // NotificationConfig
 * //         NotificationArn: "STRING_VALUE",
 * //         NotificationEvents: [ // NotificationEventList
 * //           "All" || "InProgress" || "Success" || "TimedOut" || "Cancelled" || "Failed",
 * //         ],
 * //         NotificationType: "Command" || "Invocation",
 * //       },
 * //       OutputS3BucketName: "STRING_VALUE",
 * //       OutputS3KeyPrefix: "STRING_VALUE",
 * //       Parameters: { // Parameters
 * //         "<keys>": [ // ParameterValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ServiceRoleArn: "STRING_VALUE",
 * //       TimeoutSeconds: Number("int"),
 * //     },
 * //     Automation: { // MaintenanceWindowAutomationParameters
 * //       DocumentVersion: "STRING_VALUE",
 * //       Parameters: { // AutomationParameterMap
 * //         "<keys>": [ // AutomationParameterValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     StepFunctions: { // MaintenanceWindowStepFunctionsParameters
 * //       Input: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //     Lambda: { // MaintenanceWindowLambdaParameters
 * //       ClientContext: "STRING_VALUE",
 * //       Qualifier: "STRING_VALUE",
 * //       Payload: new Uint8Array(),
 * //     },
 * //   },
 * //   Priority: Number("int"),
 * //   MaxConcurrency: "STRING_VALUE",
 * //   MaxErrors: "STRING_VALUE",
 * //   LoggingInfo: { // LoggingInfo
 * //     S3BucketName: "STRING_VALUE", // required
 * //     S3KeyPrefix: "STRING_VALUE",
 * //     S3Region: "STRING_VALUE", // required
 * //   },
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CutoffBehavior: "CONTINUE_TASK" || "CANCEL_TASK",
 * //   AlarmConfiguration: { // AlarmConfiguration
 * //     IgnorePollAlarmFailure: true || false,
 * //     Alarms: [ // AlarmList // required
 * //       { // Alarm
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateMaintenanceWindowTaskCommandInput - {@link UpdateMaintenanceWindowTaskCommandInput}
 * @returns {@link UpdateMaintenanceWindowTaskCommandOutput}
 * @see {@link UpdateMaintenanceWindowTaskCommandInput} for command's `input` shape.
 * @see {@link UpdateMaintenanceWindowTaskCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *
 * Error returned when the ID specified for a resource, such as a maintenance window or patch baseline, doesn't exist.
 *
 * For information about resource quotas in Amazon Web Services Systems Manager, see [Systems Manager service quotas](https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm) in the *Amazon Web Services General Reference*.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class UpdateMaintenanceWindowTaskCommand extends command<UpdateMaintenanceWindowTaskCommandInput, UpdateMaintenanceWindowTaskCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMaintenanceWindowTask",
  UpdateMaintenanceWindowTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMaintenanceWindowTaskRequest;
      output: UpdateMaintenanceWindowTaskResult;
    };
    sdk: {
      input: UpdateMaintenanceWindowTaskCommandInput;
      output: UpdateMaintenanceWindowTaskCommandOutput;
    };
  };
}
