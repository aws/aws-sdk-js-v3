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

import { ListCommandInvocationsRequest, ListCommandInvocationsResult } from "../models/models_1";
import { de_ListCommandInvocationsCommand, se_ListCommandInvocationsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class ListCommandInvocationsCommand extends $Command<
  ListCommandInvocationsCommandInput,
  ListCommandInvocationsCommandOutput,
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
  constructor(readonly input: ListCommandInvocationsCommandInput) {
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
  ): Handler<ListCommandInvocationsCommandInput, ListCommandInvocationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCommandInvocationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListCommandInvocationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "ListCommandInvocations",
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
  private serialize(input: ListCommandInvocationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCommandInvocationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCommandInvocationsCommandOutput> {
    return de_ListCommandInvocationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
