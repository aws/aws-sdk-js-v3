// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCommandsRequest, ListCommandsResult } from "../models/models_1";
import { ListCommands$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCommandsCommand}.
 */
export interface ListCommandsCommandInput extends ListCommandsRequest {}
/**
 * @public
 *
 * The output of {@link ListCommandsCommand}.
 */
export interface ListCommandsCommandOutput extends ListCommandsResult, __MetadataBearer {}

/**
 * Lists the commands requested by users of the Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListCommandsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListCommandsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ListCommandsRequest
 *   CommandId: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // CommandFilterList
 *     { // CommandFilter
 *       key: "InvokedAfter" || "InvokedBefore" || "Status" || "ExecutionStage" || "DocumentName", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new ListCommandsCommand(input);
 * const response = await client.send(command);
 * // { // ListCommandsResult
 * //   Commands: [ // CommandList
 * //     { // Command
 * //       CommandId: "STRING_VALUE",
 * //       DocumentName: "STRING_VALUE",
 * //       DocumentVersion: "STRING_VALUE",
 * //       Comment: "STRING_VALUE",
 * //       ExpiresAfter: new Date("TIMESTAMP"),
 * //       Parameters: { // Parameters
 * //         "<keys>": [ // ParameterValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       InstanceIds: [ // InstanceIdList
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
 * //       RequestedDateTime: new Date("TIMESTAMP"),
 * //       Status: "Pending" || "InProgress" || "Success" || "Cancelled" || "Failed" || "TimedOut" || "Cancelling",
 * //       StatusDetails: "STRING_VALUE",
 * //       OutputS3Region: "STRING_VALUE",
 * //       OutputS3BucketName: "STRING_VALUE",
 * //       OutputS3KeyPrefix: "STRING_VALUE",
 * //       MaxConcurrency: "STRING_VALUE",
 * //       MaxErrors: "STRING_VALUE",
 * //       TargetCount: Number("int"),
 * //       CompletedCount: Number("int"),
 * //       ErrorCount: Number("int"),
 * //       DeliveryTimedOutCount: Number("int"),
 * //       ServiceRole: "STRING_VALUE",
 * //       NotificationConfig: { // NotificationConfig
 * //         NotificationArn: "STRING_VALUE",
 * //         NotificationEvents: [ // NotificationEventList
 * //           "All" || "InProgress" || "Success" || "TimedOut" || "Cancelled" || "Failed",
 * //         ],
 * //         NotificationType: "Command" || "Invocation",
 * //       },
 * //       CloudWatchOutputConfig: { // CloudWatchOutputConfig
 * //         CloudWatchLogGroupName: "STRING_VALUE",
 * //         CloudWatchOutputEnabled: true || false,
 * //       },
 * //       TimeoutSeconds: Number("int"),
 * //       AlarmConfiguration: { // AlarmConfiguration
 * //         IgnorePollAlarmFailure: true || false,
 * //         Alarms: [ // AlarmList // required
 * //           { // Alarm
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
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCommandsCommandInput - {@link ListCommandsCommandInput}
 * @returns {@link ListCommandsCommandOutput}
 * @see {@link ListCommandsCommandInput} for command's `input` shape.
 * @see {@link ListCommandsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidCommandId} (client fault)
 *
 * The specified command ID isn't valid. Verify the ID and try again.
 *
 * @throws {@link InvalidFilterKey} (client fault)
 *
 * The specified key isn't valid.
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
 * @throws {@link InvalidNextToken} (client fault)
 *
 * The specified token isn't valid.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class ListCommandsCommand extends command<ListCommandsCommandInput, ListCommandsCommandOutput>(
  _ep0,
  _mw0,
  "ListCommands",
  ListCommands$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCommandsRequest;
      output: ListCommandsResult;
    };
    sdk: {
      input: ListCommandsCommandInput;
      output: ListCommandsCommandOutput;
    };
  };
}
