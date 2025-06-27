// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCommandInvocationsRequest, ListCommandInvocationsResult } from "../models/models_1";
import { de_ListCommandInvocationsCommand, se_ListCommandInvocationsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>An invocation is copy of a command sent to a specific managed node. A command can apply to
 *    one or more managed nodes. A command invocation applies to one managed node. For example, if a
 *    user runs <code>SendCommand</code> against three managed nodes, then a command invocation is
 *    created for each requested managed node ID. <code>ListCommandInvocations</code> provide status
 *    about command execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListCommandInvocationsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListCommandInvocationsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
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
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidCommandId} (client fault)
 *  <p>The specified command ID isn't valid. Verify the ID and try again.</p>
 *
 * @throws {@link InvalidFilterKey} (client fault)
 *  <p>The specified key isn't valid.</p>
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
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class ListCommandInvocationsCommand extends $Command
  .classBuilder<
    ListCommandInvocationsCommandInput,
    ListCommandInvocationsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "ListCommandInvocations", {})
  .n("SSMClient", "ListCommandInvocationsCommand")
  .f(void 0, void 0)
  .ser(se_ListCommandInvocationsCommand)
  .de(de_ListCommandInvocationsCommand)
  .build() {
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
