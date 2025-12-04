// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateMaintenanceWindowTaskRequest, UpdateMaintenanceWindowTaskResult } from "../models/models_1";
import { UpdateMaintenanceWindowTask } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Modifies a task assigned to a maintenance window. You can't change the task type, but you
 *    can change the following values:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>TaskARN</code>. For example, you can change a <code>RUN_COMMAND</code> task from
 *       <code>AWS-RunPowerShellScript</code> to <code>AWS-RunShellScript</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ServiceRoleArn</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TaskInvocationParameters</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Priority</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MaxConcurrency</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MaxErrors</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>One or more targets must be specified for maintenance window Run Command-type tasks.
 *     Depending on the task, targets are optional for other maintenance window task types (Automation,
 *      Lambda, and Step Functions). For more information about running tasks
 *     that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering
 *      maintenance window tasks without targets</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *          </note>
 *          <p>If the value for a parameter in <code>UpdateMaintenanceWindowTask</code> is null, then the
 *    corresponding field isn't modified. If you set <code>Replace</code> to true, then all fields
 *    required by the <a>RegisterTaskWithMaintenanceWindow</a> operation are required for
 *    this request. Optional fields that aren't specified are set to null.</p>
 *          <important>
 *             <p>When you update a maintenance window task that has options specified in
 *      <code>TaskInvocationParameters</code>, you must provide again all the
 *      <code>TaskInvocationParameters</code> values that you want to retain. The values you don't
 *     specify again are removed. For example, suppose that when you registered a Run Command task, you
 *     specified <code>TaskInvocationParameters</code> values for <code>Comment</code>,
 *      <code>NotificationConfig</code>, and <code>OutputS3BucketName</code>. If you update the
 *     maintenance window task and specify only a different <code>OutputS3BucketName</code> value, the
 *     values for <code>Comment</code> and <code>NotificationConfig</code> are removed.</p>
 *          </important>
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
 *  <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class UpdateMaintenanceWindowTaskCommand extends $Command
  .classBuilder<
    UpdateMaintenanceWindowTaskCommandInput,
    UpdateMaintenanceWindowTaskCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "UpdateMaintenanceWindowTask", {})
  .n("SSMClient", "UpdateMaintenanceWindowTaskCommand")
  .sc(UpdateMaintenanceWindowTask)
  .build() {
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
