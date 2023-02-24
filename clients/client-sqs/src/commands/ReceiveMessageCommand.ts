// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getReceiveMessagePlugin } from "@aws-sdk/middleware-sdk-sqs";
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

import {
  ReceiveMessageRequest,
  ReceiveMessageRequestFilterSensitiveLog,
  ReceiveMessageResult,
  ReceiveMessageResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryReceiveMessageCommand,
  serializeAws_queryReceiveMessageCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

export interface ReceiveMessageCommandInput extends ReceiveMessageRequest {}
export interface ReceiveMessageCommandOutput extends ReceiveMessageResult, __MetadataBearer {}

/**
 * <p>Retrieves one or more messages (up to 10), from the specified queue. Using the <code>WaitTimeSeconds</code> parameter enables long-poll support.
 *          For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html">Amazon SQS Long Polling</a> in the <i>Amazon SQS Developer Guide</i>.
 *     </p>
 *          <p>Short poll is the default behavior where a weighted random set of machines is sampled on a <code>ReceiveMessage</code> call. Thus, only the messages on the sampled machines are returned.
 *           If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per <code>ReceiveMessage</code> call. If the number of messages in the queue is extremely small,
 *           you might not receive any messages in a particular <code>ReceiveMessage</code> response. If this happens, repeat the request.
 *     </p>
 *          <p>For each message returned, the response includes the following:</p>
 *          <ul>
 *             <li>
 *                <p>The message body.</p>
 *             </li>
 *             <li>
 *                <p>An MD5 digest of the message body. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p>
 *             </li>
 *             <li>
 *                <p>The <code>MessageId</code> you received when you sent the message to the queue.</p>
 *             </li>
 *             <li>
 *                <p>The receipt handle.</p>
 *             </li>
 *             <li>
 *                <p>The message attributes.</p>
 *             </li>
 *             <li>
 *                <p>An MD5 digest of the message attributes.</p>
 *             </li>
 *          </ul>
 *          <p>The receipt handle is the identifier you must provide when deleting the message. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html">Queue
 *           and Message Identifiers</a> in the <i>Amazon SQS Developer Guide</i>.</p>
 *          <p>You can provide the <code>VisibilityTimeout</code> parameter in your request. The parameter is applied to the messages that Amazon SQS returns in the response. If you don't include the parameter, the overall visibility timeout for the queue
 *           is used for the returned messages. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p>
 *          <p>A message that isn't deleted or a message whose visibility isn't extended before the visibility timeout expires counts as a failed receive. Depending on the configuration of the queue, the message might be sent to the dead-letter queue.</p>
 *          <note>
 *             <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ReceiveMessageCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ReceiveMessageCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new ReceiveMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReceiveMessageCommandInput} for command's `input` shape.
 * @see {@link ReceiveMessageCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 */
export class ReceiveMessageCommand extends $Command<
  ReceiveMessageCommandInput,
  ReceiveMessageCommandOutput,
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

  constructor(readonly input: ReceiveMessageCommandInput) {
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
  ): Handler<ReceiveMessageCommandInput, ReceiveMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReceiveMessageCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getReceiveMessagePlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "ReceiveMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReceiveMessageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ReceiveMessageResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReceiveMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryReceiveMessageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReceiveMessageCommandOutput> {
    return deserializeAws_queryReceiveMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
