// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ChangeMessageVisibilityRequest, ChangeMessageVisibilityRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryChangeMessageVisibilityCommand,
  serializeAws_queryChangeMessageVisibilityCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

export interface ChangeMessageVisibilityCommandInput extends ChangeMessageVisibilityRequest {}
export interface ChangeMessageVisibilityCommandOutput extends __MetadataBearer {}

/**
 * <p>Changes the visibility timeout of a specified message in a queue to a new value. The
 *             default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The
 *             maximum is 12 hours. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p>
 *          <p>For example, you have a message with a visibility timeout of 5 minutes. After 3
 *             minutes, you call <code>ChangeMessageVisibility</code> with a timeout of 10 minutes. You
 *             can continue to call <code>ChangeMessageVisibility</code> to extend the visibility
 *             timeout to the maximum allowed time. If you try to extend the visibility timeout beyond
 *             the maximum, your request is rejected.</p>
 *         <p>An Amazon SQS message has three basic states:</p>
 *          <ol>
 *             <li>
 *                <p>Sent to a queue by a producer.</p>
 *             </li>
 *             <li>
 *                <p>Received from the queue by a consumer.</p>
 *             </li>
 *             <li>
 *                <p>Deleted from the queue.</p>
 *             </li>
 *          </ol>
 *          <p>A message is considered to be <i>stored</i> after it is sent to a queue by a producer, but not yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of stored messages.
 *     A message is considered to be <i>in flight</i> after it is received from a queue by a consumer, but not yet deleted from the queue (that is, between states 2 and 3). There is a limit to the number of inflight messages.</p>
 *          <p>Limits that apply to inflight messages are unrelated to the <i>unlimited</i> number of stored messages.</p>
 *          <p>For most standard queues (depending on queue traffic and message backlog), there can be a maximum of approximately 120,000 inflight messages (received from a queue by a consumer, but not yet deleted from the queue).
 *     If you reach this limit, Amazon SQS returns the <code>OverLimit</code> error message.
 *     To avoid reaching the limit, you should delete messages from the queue after they're processed. You can also increase the number of queues you use to process your messages.
 *     To request a limit increase, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-sqs">file a support request</a>.</p>
 *          <p>For FIFO queues, there can be a maximum of 20,000 inflight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns no error messages.</p>
 *
 *          <important>
 *             <p>If you attempt to set the <code>VisibilityTimeout</code> to a value greater than the maximum time left, Amazon SQS returns an error. Amazon SQS doesn't automatically recalculate and increase the timeout to the maximum remaining time.</p>
 *             <p>Unlike with a queue, when you change the visibility timeout for a specific message the timeout value is applied immediately but isn't saved in memory for that message. If you don't delete a message after it is received, the visibility timeout
 *               for the message reverts to the original timeout value (not to the value you set using the <code>ChangeMessageVisibility</code> action) the next time the message is received.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ChangeMessageVisibilityCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ChangeMessageVisibilityCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new ChangeMessageVisibilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ChangeMessageVisibilityCommandInput} for command's `input` shape.
 * @see {@link ChangeMessageVisibilityCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 */
export class ChangeMessageVisibilityCommand extends $Command<
  ChangeMessageVisibilityCommandInput,
  ChangeMessageVisibilityCommandOutput,
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

  constructor(readonly input: ChangeMessageVisibilityCommandInput) {
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
  ): Handler<ChangeMessageVisibilityCommandInput, ChangeMessageVisibilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ChangeMessageVisibilityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "ChangeMessageVisibilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ChangeMessageVisibilityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ChangeMessageVisibilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryChangeMessageVisibilityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ChangeMessageVisibilityCommandOutput> {
    return deserializeAws_queryChangeMessageVisibilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
