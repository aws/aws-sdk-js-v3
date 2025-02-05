// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetCommandInvocationRequest, GetCommandInvocationResult } from "../models/models_1";
import { de_GetCommandInvocationCommand, se_GetCommandInvocationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCommandInvocationCommand}.
 */
export interface GetCommandInvocationCommandInput extends GetCommandInvocationRequest {}
/**
 * @public
 *
 * The output of {@link GetCommandInvocationCommand}.
 */
export interface GetCommandInvocationCommandOutput extends GetCommandInvocationResult, __MetadataBearer {}

/**
 * <p>Returns detailed information about command execution for an invocation or plugin. The Run
 *    Command API follows an eventual consistency model, due to the distributed nature of the system
 *    supporting the API. This means that the result of an API command you run that affects your
 *    resources might not be immediately visible to all subsequent commands you run. You should keep
 *    this in mind when you carry out an API command that immediately follows a previous API
 *    command.</p>
 *          <p>
 *             <code>GetCommandInvocation</code> only gives the execution status of a plugin in a document.
 *    To get the command execution status on a specific managed node, use <a>ListCommandInvocations</a>. To get the command execution status across managed nodes,
 *    use <a>ListCommands</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetCommandInvocationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetCommandInvocationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMClient(config);
 * const input = { // GetCommandInvocationRequest
 *   CommandId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   PluginName: "STRING_VALUE",
 * };
 * const command = new GetCommandInvocationCommand(input);
 * const response = await client.send(command);
 * // { // GetCommandInvocationResult
 * //   CommandId: "STRING_VALUE",
 * //   InstanceId: "STRING_VALUE",
 * //   Comment: "STRING_VALUE",
 * //   DocumentName: "STRING_VALUE",
 * //   DocumentVersion: "STRING_VALUE",
 * //   PluginName: "STRING_VALUE",
 * //   ResponseCode: Number("int"),
 * //   ExecutionStartDateTime: "STRING_VALUE",
 * //   ExecutionElapsedTime: "STRING_VALUE",
 * //   ExecutionEndDateTime: "STRING_VALUE",
 * //   Status: "Pending" || "InProgress" || "Delayed" || "Success" || "Cancelled" || "TimedOut" || "Failed" || "Cancelling",
 * //   StatusDetails: "STRING_VALUE",
 * //   StandardOutputContent: "STRING_VALUE",
 * //   StandardOutputUrl: "STRING_VALUE",
 * //   StandardErrorContent: "STRING_VALUE",
 * //   StandardErrorUrl: "STRING_VALUE",
 * //   CloudWatchOutputConfig: { // CloudWatchOutputConfig
 * //     CloudWatchLogGroupName: "STRING_VALUE",
 * //     CloudWatchOutputEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCommandInvocationCommandInput - {@link GetCommandInvocationCommandInput}
 * @returns {@link GetCommandInvocationCommandOutput}
 * @see {@link GetCommandInvocationCommandInput} for command's `input` shape.
 * @see {@link GetCommandInvocationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidCommandId} (client fault)
 *  <p>The specified command ID isn't valid. Verify the ID and try again.</p>
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
 * @throws {@link InvalidPluginName} (client fault)
 *  <p>The plugin name isn't valid.</p>
 *
 * @throws {@link InvocationDoesNotExist} (client fault)
 *  <p>The command ID and managed node ID you specified didn't match any invocations. Verify the
 *    command ID and the managed node ID and try again. </p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class GetCommandInvocationCommand extends $Command
  .classBuilder<
    GetCommandInvocationCommandInput,
    GetCommandInvocationCommandOutput,
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
  .s("AmazonSSM", "GetCommandInvocation", {})
  .n("SSMClient", "GetCommandInvocationCommand")
  .f(void 0, void 0)
  .ser(se_GetCommandInvocationCommand)
  .de(de_GetCommandInvocationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCommandInvocationRequest;
      output: GetCommandInvocationResult;
    };
    sdk: {
      input: GetCommandInvocationCommandInput;
      output: GetCommandInvocationCommandOutput;
    };
  };
}
