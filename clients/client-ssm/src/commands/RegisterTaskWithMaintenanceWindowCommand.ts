// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterTaskWithMaintenanceWindowRequest, RegisterTaskWithMaintenanceWindowResult } from "../models/models_2";
import { RegisterTaskWithMaintenanceWindow } from "../schemas/schemas_24_Maintenance";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterTaskWithMaintenanceWindowCommand}.
 */
export interface RegisterTaskWithMaintenanceWindowCommandInput extends RegisterTaskWithMaintenanceWindowRequest {}
/**
 * @public
 *
 * The output of {@link RegisterTaskWithMaintenanceWindowCommand}.
 */
export interface RegisterTaskWithMaintenanceWindowCommandOutput
  extends RegisterTaskWithMaintenanceWindowResult,
    __MetadataBearer {}

/**
 * <p>Adds a new task to a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, RegisterTaskWithMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, RegisterTaskWithMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // RegisterTaskWithMaintenanceWindowRequest
 *   WindowId: "STRING_VALUE", // required
 *   Targets: [ // Targets
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   TaskArn: "STRING_VALUE", // required
 *   ServiceRoleArn: "STRING_VALUE",
 *   TaskType: "RUN_COMMAND" || "AUTOMATION" || "STEP_FUNCTIONS" || "LAMBDA", // required
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
 *   ClientToken: "STRING_VALUE",
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
 * const command = new RegisterTaskWithMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * // { // RegisterTaskWithMaintenanceWindowResult
 * //   WindowTaskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterTaskWithMaintenanceWindowCommandInput - {@link RegisterTaskWithMaintenanceWindowCommandInput}
 * @returns {@link RegisterTaskWithMaintenanceWindowCommandOutput}
 * @see {@link RegisterTaskWithMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link RegisterTaskWithMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *  <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link FeatureNotAvailableException} (client fault)
 *  <p>You attempted to register a <code>LAMBDA</code> or <code>STEP_FUNCTIONS</code> task in a
 *    region where the corresponding service isn't available. </p>
 *
 * @throws {@link IdempotentParameterMismatch} (client fault)
 *  <p>Error returned when an idempotent operation is retried and the parameters don't match the
 *    original call to the API with the same idempotency token. </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Error returned when the caller has exceeded the default resource quotas. For example, too
 *    many maintenance windows or patch baselines have been created.</p>
 *          <p>For information about resource quotas in Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class RegisterTaskWithMaintenanceWindowCommand extends $Command
  .classBuilder<
    RegisterTaskWithMaintenanceWindowCommandInput,
    RegisterTaskWithMaintenanceWindowCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "RegisterTaskWithMaintenanceWindow", {})
  .n("SSMClient", "RegisterTaskWithMaintenanceWindowCommand")
  .sc(RegisterTaskWithMaintenanceWindow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterTaskWithMaintenanceWindowRequest;
      output: RegisterTaskWithMaintenanceWindowResult;
    };
    sdk: {
      input: RegisterTaskWithMaintenanceWindowCommandInput;
      output: RegisterTaskWithMaintenanceWindowCommandOutput;
    };
  };
}
