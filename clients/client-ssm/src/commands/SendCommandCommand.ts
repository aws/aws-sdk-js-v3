// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  SendCommandRequest,
  SendCommandRequestFilterSensitiveLog,
  SendCommandResult,
  SendCommandResultFilterSensitiveLog,
} from "../models/models_1";
import { de_SendCommandCommand, se_SendCommandCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Runs commands on one or more managed nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, SendCommandCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, SendCommandCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
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
 *  <p>You can't specify a managed node ID in more than one association.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidDocumentVersion} (client fault)
 *  <p>The document version isn't valid or doesn't exist.</p>
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *  <p>The following problems can cause this exception:</p>
 *          <ul>
 *             <li>
 *                <p>You don't have permission to access the managed node.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Systems Manager Agent (SSM Agent) isn't running. Verify that SSM Agent is
 *      running.</p>
 *             </li>
 *             <li>
 *                <p>SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.</p>
 *             </li>
 *             <li>
 *                <p>The managed node isn't in a valid state. Valid states are: <code>Running</code>,
 *       <code>Pending</code>, <code>Stopped</code>, and <code>Stopping</code>. Invalid states are:
 *       <code>Shutting-down</code> and <code>Terminated</code>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidNotificationConfig} (client fault)
 *  <p>One or more configuration items isn't valid. Verify that a valid Amazon Resource Name (ARN)
 *    was provided for an Amazon Simple Notification Service topic.</p>
 *
 * @throws {@link InvalidOutputFolder} (client fault)
 *  <p>The S3 bucket doesn't exist.</p>
 *
 * @throws {@link InvalidParameters} (client fault)
 *  <p>You must specify values for all required parameters in the Amazon Web Services Systems Manager document (SSM
 *    document). You can only supply values to parameters defined in the SSM document.</p>
 *
 * @throws {@link InvalidRole} (client fault)
 *  <p>The role name can't contain invalid characters. Also verify that you specified an IAM role for notifications that includes the required trust policy. For information about
 *    configuring the IAM role for Run Command notifications, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-sns-notifications.html">Monitoring Systems Manager status changes using Amazon SNS notifications</a> in
 *    the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *
 * @throws {@link MaxDocumentSizeExceeded} (client fault)
 *  <p>The size limit of a document is 64 KB.</p>
 *
 * @throws {@link UnsupportedPlatformType} (client fault)
 *  <p>The document doesn't support the platform type of the given managed node IDs. For example,
 *    you sent an document for a Windows managed node to a Linux node.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class SendCommandCommand extends $Command
  .classBuilder<
    SendCommandCommandInput,
    SendCommandCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "SendCommand", {})
  .n("SSMClient", "SendCommandCommand")
  .f(SendCommandRequestFilterSensitiveLog, SendCommandResultFilterSensitiveLog)
  .ser(se_SendCommandCommand)
  .de(de_SendCommandCommand)
  .build() {}
