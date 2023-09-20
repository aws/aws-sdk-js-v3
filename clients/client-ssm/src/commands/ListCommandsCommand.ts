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

import { ListCommandsRequest, ListCommandsResult, ListCommandsResultFilterSensitiveLog } from "../models/models_1";
import { de_ListCommandsCommand, se_ListCommandsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Lists the commands requested by users of the Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListCommandsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListCommandsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
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
export class ListCommandsCommand extends $Command<
  ListCommandsCommandInput,
  ListCommandsCommandOutput,
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
  constructor(readonly input: ListCommandsCommandInput) {
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
  ): Handler<ListCommandsCommandInput, ListCommandsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListCommandsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListCommandsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListCommandsResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "ListCommands",
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
  private serialize(input: ListCommandsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCommandsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCommandsCommandOutput> {
    return de_ListCommandsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
