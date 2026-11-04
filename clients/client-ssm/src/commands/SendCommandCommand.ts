// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendCommandRequest, SendCommandResult } from "../models/models_1";
import { SendCommand$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendCommandCommand}.
 */
export interface SendCommandCommandInput extends SendCommandRequest {}
/**
 * @public
 *
 * The output of {@link SendCommandCommand}.
 */
export interface SendCommandCommandOutput extends SendCommandResult, __MetadataBearer {}

/**
 * Runs commands on one or more managed nodes.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, SendCommandCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, SendCommandCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // SendCommandRequest
 *   InstanceIds: [ // InstanceIdList
 *     "STRING_VALUE",
 *   ],
 *   Targets: [ // Targets
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DocumentName: "STRING_VALUE", // required
 *   DocumentVersion: "STRING_VALUE",
 *   DocumentHash: "STRING_VALUE",
 *   DocumentHashType: "Sha256" || "Sha1",
 *   TimeoutSeconds: Number("int"),
 *   Comment: "STRING_VALUE",
 *   Parameters: { // Parameters
 *     "<keys>": [ // ParameterValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   OutputS3Region: "STRING_VALUE",
 *   OutputS3BucketName: "STRING_VALUE",
 *   OutputS3KeyPrefix: "STRING_VALUE",
 *   MaxConcurrency: "STRING_VALUE",
 *   MaxErrors: "STRING_VALUE",
 *   ServiceRoleArn: "STRING_VALUE",
 *   NotificationConfig: { // NotificationConfig
 *     NotificationArn: "STRING_VALUE",
 *     NotificationEvents: [ // NotificationEventList
 *       "All" || "InProgress" || "Success" || "TimedOut" || "Cancelled" || "Failed",
 *     ],
 *     NotificationType: "Command" || "Invocation",
 *   },
 *   CloudWatchOutputConfig: { // CloudWatchOutputConfig
 *     CloudWatchLogGroupName: "STRING_VALUE",
 *     CloudWatchOutputEnabled: true || false,
 *   },
 *   AlarmConfiguration: { // AlarmConfiguration
 *     IgnorePollAlarmFailure: true || false,
 *     Alarms: [ // AlarmList // required
 *       { // Alarm
 *         Name: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new SendCommandCommand(input);
 * const response = await client.send(command);
 * // { // SendCommandResult
 * //   Command: { // Command
 * //     CommandId: "STRING_VALUE",
 * //     DocumentName: "STRING_VALUE",
 * //     DocumentVersion: "STRING_VALUE",
 * //     Comment: "STRING_VALUE",
 * //     ExpiresAfter: new Date("TIMESTAMP"),
 * //     Parameters: { // Parameters
 * //       "<keys>": [ // ParameterValueList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     InstanceIds: [ // InstanceIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     Targets: [ // Targets
 * //       { // Target
 * //         Key: "STRING_VALUE",
 * //         Values: [ // TargetValues
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     RequestedDateTime: new Date("TIMESTAMP"),
 * //     Status: "Pending" || "InProgress" || "Success" || "Cancelled" || "Failed" || "TimedOut" || "Cancelling",
 * //     StatusDetails: "STRING_VALUE",
 * //     OutputS3Region: "STRING_VALUE",
 * //     OutputS3BucketName: "STRING_VALUE",
 * //     OutputS3KeyPrefix: "STRING_VALUE",
 * //     MaxConcurrency: "STRING_VALUE",
 * //     MaxErrors: "STRING_VALUE",
 * //     TargetCount: Number("int"),
 * //     CompletedCount: Number("int"),
 * //     ErrorCount: Number("int"),
 * //     DeliveryTimedOutCount: Number("int"),
 * //     ServiceRole: "STRING_VALUE",
 * //     NotificationConfig: { // NotificationConfig
 * //       NotificationArn: "STRING_VALUE",
 * //       NotificationEvents: [ // NotificationEventList
 * //         "All" || "InProgress" || "Success" || "TimedOut" || "Cancelled" || "Failed",
 * //       ],
 * //       NotificationType: "Command" || "Invocation",
 * //     },
 * //     CloudWatchOutputConfig: { // CloudWatchOutputConfig
 * //       CloudWatchLogGroupName: "STRING_VALUE",
 * //       CloudWatchOutputEnabled: true || false,
 * //     },
 * //     TimeoutSeconds: Number("int"),
 * //     AlarmConfiguration: { // AlarmConfiguration
 * //       IgnorePollAlarmFailure: true || false,
 * //       Alarms: [ // AlarmList // required
 * //         { // Alarm
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
 * //   },
 * // };
 *
 * ```
 *
 * @param SendCommandCommandInput - {@link SendCommandCommandInput}
 * @returns {@link SendCommandCommandOutput}
 * @see {@link SendCommandCommandInput} for command's `input` shape.
 * @see {@link SendCommandCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
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
 * @throws {@link InvalidNotificationConfig} (client fault)
 *
 * One or more configuration items isn't valid. Verify that a valid Amazon Resource Name (ARN) was provided for an Amazon Simple Notification Service topic.
 *
 * @throws {@link InvalidOutputFolder} (client fault)
 *
 * The S3 bucket doesn't exist.
 *
 * @throws {@link InvalidParameters} (client fault)
 *
 * You must specify values for all required parameters in the Amazon Web Services Systems Manager document (SSM document). You can only supply values to parameters defined in the SSM document.
 *
 * @throws {@link InvalidRole} (client fault)
 *
 * The role name can't contain invalid characters. Also verify that you specified an IAM role for notifications that includes the required trust policy. For information about configuring the IAM role for Run Command notifications, see [Monitoring Systems Manager status changes using Amazon SNS notifications](https://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-sns-notifications.html) in the *Amazon Web Services Systems Manager User Guide*.
 *
 * @throws {@link MaxDocumentSizeExceeded} (client fault)
 *
 * The size limit of a document is 64 KB.
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
export class SendCommandCommand extends command<SendCommandCommandInput, SendCommandCommandOutput>(
  _ep0,
  _mw0,
  "SendCommand",
  SendCommand$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendCommandRequest;
      output: SendCommandResult;
    };
    sdk: {
      input: SendCommandCommandInput;
      output: SendCommandCommandOutput;
    };
  };
}
