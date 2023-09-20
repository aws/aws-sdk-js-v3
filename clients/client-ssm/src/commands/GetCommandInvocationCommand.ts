// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GetCommandInvocationRequest, GetCommandInvocationResult } from "../models/models_1";
import { de_GetCommandInvocationCommand, se_GetCommandInvocationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Returns detailed information about command execution for an invocation or plugin.</p>
 *          <p>
 *             <code>GetCommandInvocation</code> only gives the execution status of a plugin in a document.
 *    To get the command execution status on a specific managed node, use <a>ListCommandInvocations</a>. To get the command execution status across managed nodes,
 *    use <a>ListCommands</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetCommandInvocationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetCommandInvocationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
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
 *                <p>Amazon Web Services Systems Manager Agent(SSM Agent) isn't running. Verify that SSM Agent is
 *      running.</p>
 *             </li>
 *             <li>
 *                <p>SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.</p>
 *             </li>
 *             <li>
 *                <p>The managed node isn't in valid state. Valid states are: <code>Running</code>,
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
 */
export class GetCommandInvocationCommand extends $Command<
  GetCommandInvocationCommandInput,
  GetCommandInvocationCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetCommandInvocationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCommandInvocationCommandInput, GetCommandInvocationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCommandInvocationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetCommandInvocationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "GetCommandInvocation",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetCommandInvocationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCommandInvocationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCommandInvocationCommandOutput> {
    return de_GetCommandInvocationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
