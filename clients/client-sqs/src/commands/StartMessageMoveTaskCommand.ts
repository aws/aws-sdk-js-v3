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
} from "@smithy/types";

import { StartMessageMoveTaskRequest, StartMessageMoveTaskResult } from "../models/models_0";
import { de_StartMessageMoveTaskCommand, se_StartMessageMoveTaskCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartMessageMoveTaskCommand}.
 */
export interface StartMessageMoveTaskCommandInput extends StartMessageMoveTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartMessageMoveTaskCommand}.
 */
export interface StartMessageMoveTaskCommandOutput extends StartMessageMoveTaskResult, __MetadataBearer {}

/**
 * @public
 * <p>Starts an asynchronous task to move messages from a specified source queue to a
 *             specified destination queue.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This action is currently limited to supporting message redrive from
 *                         dead-letter queues (DLQs) only. In this context, the source queue is the
 *                         dead-letter queue (DLQ), while the destination queue can be the original
 *                         source queue (from which the messages were driven to the dead-letter-queue),
 *                         or a custom destination queue. </p>
 *                </li>
 *                <li>
 *                   <p>Currently, only standard queues are supported.</p>
 *                </li>
 *                <li>
 *                   <p>Only one active message movement task is supported per queue at any given
 *                         time.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, StartMessageMoveTaskCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, StartMessageMoveTaskCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const input = { // StartMessageMoveTaskRequest
 *   SourceArn: "STRING_VALUE", // required
 *   DestinationArn: "STRING_VALUE",
 *   MaxNumberOfMessagesPerSecond: Number("int"),
 * };
 * const command = new StartMessageMoveTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartMessageMoveTaskResult
 * //   TaskHandle: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMessageMoveTaskCommandInput - {@link StartMessageMoveTaskCommandInput}
 * @returns {@link StartMessageMoveTaskCommandOutput}
 * @see {@link StartMessageMoveTaskCommandInput} for command's `input` shape.
 * @see {@link StartMessageMoveTaskCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more specified resources don't exist.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>Error code 400. Unsupported operation.</p>
 *
 * @throws {@link SQSServiceException}
 * <p>Base exception class for all service exceptions from SQS service.</p>
 *
 */
export class StartMessageMoveTaskCommand extends $Command<
  StartMessageMoveTaskCommandInput,
  StartMessageMoveTaskCommandOutput,
  SQSClientResolvedConfig
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
  constructor(readonly input: StartMessageMoveTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SQSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMessageMoveTaskCommandInput, StartMessageMoveTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMessageMoveTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "StartMessageMoveTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: StartMessageMoveTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartMessageMoveTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMessageMoveTaskCommandOutput> {
    return de_StartMessageMoveTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
