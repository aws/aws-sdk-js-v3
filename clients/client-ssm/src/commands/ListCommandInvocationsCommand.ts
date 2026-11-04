// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCommandInvocationsRequest, ListCommandInvocationsResult } from "../models/models_1";
import { ListCommandInvocations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCommandInvocationsCommand}.
 */
export interface ListCommandInvocationsCommandInput extends ListCommandInvocationsRequest {}
/**
 * @public
 *
 * The output of {@link ListCommandInvocationsCommand}.
 */
export interface ListCommandInvocationsCommandOutput extends ListCommandInvocationsResult, __MetadataBearer {}

/**
 * An invocation is copy of a command sent to a specific managed node. A command can apply to one or more managed nodes. A command invocation applies to one managed node. For example, if a user runs `SendCommand` against three managed nodes, then a command invocation is created for each requested managed node ID. `ListCommandInvocations` provide status about command execution.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListCommandInvocationsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListCommandInvocationsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ListCommandInvocationsRequest
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
 *   Details: true || false,
 * };
 * const command = new ListCommandInvocationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCommandInvocationsResult
 * //   CommandInvocations: [ // CommandInvocationList
 * //     { // CommandInvocation
 * //       CommandId: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       InstanceName: "STRING_VALUE",
 * //       Comment: "STRING_VALUE",
 * //       DocumentName: "STRING_VALUE",
 * //       DocumentVersion: "STRING_VALUE",
 * //       RequestedDateTime: new Date("TIMESTAMP"),
 * //       Status: "Pending" || "InProgress" || "Delayed" || "Success" || "Cancelled" || "TimedOut" || "Failed" || "Cancelling",
 * //       StatusDetails: "STRING_VALUE",
 * //       TraceOutput: "STRING_VALUE",
 * //       StandardOutputUrl: "STRING_VALUE",
 * //       StandardErrorUrl: "STRING_VALUE",
 * //       CommandPlugins: [ // CommandPluginList
 * //         { // CommandPlugin
 * //           Name: "STRING_VALUE",
 * //           Status: "Pending" || "InProgress" || "Success" || "TimedOut" || "Cancelled" || "Failed",
 * //           StatusDetails: "STRING_VALUE",
 * //           ResponseCode: Number("int"),
 * //           ResponseStartDateTime: new Date("TIMESTAMP"),
 * //           ResponseFinishDateTime: new Date("TIMESTAMP"),
 * //           Output: "STRING_VALUE",
 * //           StandardOutputUrl: "STRING_VALUE",
 * //           StandardErrorUrl: "STRING_VALUE",
 * //           OutputS3Region: "STRING_VALUE",
 * //           OutputS3BucketName: "STRING_VALUE",
 * //           OutputS3KeyPrefix: "STRING_VALUE",
 * //         },
 * //       ],
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
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCommandInvocationsCommandInput - {@link ListCommandInvocationsCommandInput}
 * @returns {@link ListCommandInvocationsCommandOutput}
 * @see {@link ListCommandInvocationsCommandInput} for command's `input` shape.
 * @see {@link ListCommandInvocationsCommandOutput} for command's `response` shape.
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
export class ListCommandInvocationsCommand extends command<ListCommandInvocationsCommandInput, ListCommandInvocationsCommandOutput>(
  _ep0,
  _mw0,
  "ListCommandInvocations",
  ListCommandInvocations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCommandInvocationsRequest;
      output: ListCommandInvocationsResult;
    };
    sdk: {
      input: ListCommandInvocationsCommandInput;
      output: ListCommandInvocationsCommandOutput;
    };
  };
}
