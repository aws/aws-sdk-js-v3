// smithy-typescript generated code
import { getReceiveMessagePlugin } from "@aws-sdk/middleware-sdk-sqs";
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

import { ReceiveMessageRequest, ReceiveMessageResult } from "../models/models_0";
import { de_ReceiveMessageCommand, se_ReceiveMessageCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReceiveMessageCommand}.
 */
export interface ReceiveMessageCommandInput extends ReceiveMessageRequest {}
/**
 * @public
 *
 * The output of {@link ReceiveMessageCommand}.
 */
export interface ReceiveMessageCommandOutput extends ReceiveMessageResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves one or more messages (up to 10), from the specified queue. Using the
 *                 <code>WaitTimeSeconds</code> parameter enables long-poll support. For more
 *             information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html">Amazon SQS
 *                 Long Polling</a> in the <i>Amazon SQS Developer Guide</i>. </p>
 *          <p>Short poll is the default behavior where a weighted random set of machines is sampled
 *             on a <code>ReceiveMessage</code> call. Thus, only the messages on the sampled machines
 *             are returned. If the number of messages in the queue is small (fewer than 1,000), you
 *             most likely get fewer messages than you requested per <code>ReceiveMessage</code> call.
 *             If the number of messages in the queue is extremely small, you might not receive any
 *             messages in a particular <code>ReceiveMessage</code> response. If this happens, repeat
 *             the request. </p>
 *          <p>For each message returned, the response includes the following:</p>
 *          <ul>
 *             <li>
 *                <p>The message body.</p>
 *             </li>
 *             <li>
 *                <p>An MD5 digest of the message body. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p>
 *             </li>
 *             <li>
 *                <p>The <code>MessageId</code> you received when you sent the message to the
 *                     queue.</p>
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
 *          <p>The receipt handle is the identifier you must provide when deleting the message. For
 *             more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html">Queue and Message Identifiers</a> in the <i>Amazon SQS Developer
 *                 Guide</i>.</p>
 *          <p>You can provide the <code>VisibilityTimeout</code> parameter in your request. The
 *             parameter is applied to the messages that Amazon SQS returns in the response. If you don't
 *             include the parameter, the overall visibility timeout for the queue is used for the
 *             returned messages. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer
 *             Guide</i>.</p>
 *          <p>A message that isn't deleted or a message whose visibility isn't extended before the
 *             visibility timeout expires counts as a failed receive. Depending on the configuration of
 *             the queue, the message might be sent to the dead-letter queue.</p>
 *          <note>
 *             <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ReceiveMessageCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ReceiveMessageCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const input = { // ReceiveMessageRequest
 *   QueueUrl: "STRING_VALUE", // required
 *   AttributeNames: [ // AttributeNameList
 *     "All" || "Policy" || "VisibilityTimeout" || "MaximumMessageSize" || "MessageRetentionPeriod" || "ApproximateNumberOfMessages" || "ApproximateNumberOfMessagesNotVisible" || "CreatedTimestamp" || "LastModifiedTimestamp" || "QueueArn" || "ApproximateNumberOfMessagesDelayed" || "DelaySeconds" || "ReceiveMessageWaitTimeSeconds" || "RedrivePolicy" || "FifoQueue" || "ContentBasedDeduplication" || "KmsMasterKeyId" || "KmsDataKeyReusePeriodSeconds" || "DeduplicationScope" || "FifoThroughputLimit" || "RedriveAllowPolicy" || "SqsManagedSseEnabled",
 *   ],
 *   MessageAttributeNames: [ // MessageAttributeNameList
 *     "STRING_VALUE",
 *   ],
 *   MaxNumberOfMessages: Number("int"),
 *   VisibilityTimeout: Number("int"),
 *   WaitTimeSeconds: Number("int"),
 *   ReceiveRequestAttemptId: "STRING_VALUE",
 * };
 * const command = new ReceiveMessageCommand(input);
 * const response = await client.send(command);
 * // { // ReceiveMessageResult
 * //   Messages: [ // MessageList
 * //     { // Message
 * //       MessageId: "STRING_VALUE",
 * //       ReceiptHandle: "STRING_VALUE",
 * //       MD5OfBody: "STRING_VALUE",
 * //       Body: "STRING_VALUE",
 * //       Attributes: { // MessageSystemAttributeMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       MD5OfMessageAttributes: "STRING_VALUE",
 * //       MessageAttributes: { // MessageBodyAttributeMap
 * //         "<keys>": { // MessageAttributeValue
 * //           StringValue: "STRING_VALUE",
 * //           BinaryValue: "BLOB_VALUE",
 * //           StringListValues: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           BinaryListValues: [ // BinaryList
 * //             "BLOB_VALUE",
 * //           ],
 * //           DataType: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ReceiveMessageCommandInput - {@link ReceiveMessageCommandInput}
 * @returns {@link ReceiveMessageCommandOutput}
 * @see {@link ReceiveMessageCommandInput} for command's `input` shape.
 * @see {@link ReceiveMessageCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link OverLimit} (client fault)
 *  <p>The specified action violates a limit. For example, <code>ReceiveMessage</code>
 *             returns this error if the maximum number of in flight messages is reached and
 *                 <code>AddPermission</code> returns this error if the maximum number of permissions
 *             for the queue is reached.</p>
 *
 * @throws {@link SQSServiceException}
 * <p>Base exception class for all service exceptions from SQS service.</p>
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

  /**
   * @public
   */
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
  private serialize(input: ReceiveMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReceiveMessageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReceiveMessageCommandOutput> {
    return de_ReceiveMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
