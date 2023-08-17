// smithy-typescript generated code
import { getSendMessageBatchPlugin } from "@aws-sdk/middleware-sdk-sqs";
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

import { SendMessageBatchRequest, SendMessageBatchResult } from "../models/models_0";
import { de_SendMessageBatchCommand, se_SendMessageBatchCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendMessageBatchCommand}.
 */
export interface SendMessageBatchCommandInput extends SendMessageBatchRequest {}
/**
 * @public
 *
 * The output of {@link SendMessageBatchCommand}.
 */
export interface SendMessageBatchCommandOutput extends SendMessageBatchResult, __MetadataBearer {}

/**
 * @public
 * <p>You can use <code>SendMessageBatch</code> to send up to 10 messages to the specified
 *             queue by assigning either identical or different values to each message (or by not
 *             assigning values at all). This is a batch version of <code>
 *                <a>SendMessage</a>.</code> For a FIFO queue, multiple messages within a single batch are enqueued
 *             in the order they are sent.</p>
 *          <p>The result of sending each message is reported individually in the response.
 *             Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>
 *          <p>The maximum allowed individual message size and the maximum total payload size (the
 *             sum of the individual lengths of all of the batched messages) are both 256 KiB (262,144
 *             bytes).</p>
 *          <important>
 *             <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p>
 *             <p>
 *                <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code>
 *             </p>
 *             <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p>
 *          </important>
 *          <p>If you don't specify the <code>DelaySeconds</code> parameter for an entry, Amazon SQS uses
 *             the default value for the queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, SendMessageBatchCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, SendMessageBatchCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const input = { // SendMessageBatchRequest
 *   QueueUrl: "STRING_VALUE", // required
 *   Entries: [ // SendMessageBatchRequestEntryList // required
 *     { // SendMessageBatchRequestEntry
 *       Id: "STRING_VALUE", // required
 *       MessageBody: "STRING_VALUE", // required
 *       DelaySeconds: Number("int"),
 *       MessageAttributes: { // MessageBodyAttributeMap
 *         "<keys>": { // MessageAttributeValue
 *           StringValue: "STRING_VALUE",
 *           BinaryValue: "BLOB_VALUE",
 *           StringListValues: [ // StringList
 *             "STRING_VALUE",
 *           ],
 *           BinaryListValues: [ // BinaryList
 *             "BLOB_VALUE",
 *           ],
 *           DataType: "STRING_VALUE", // required
 *         },
 *       },
 *       MessageSystemAttributes: { // MessageBodySystemAttributeMap
 *         "<keys>": { // MessageSystemAttributeValue
 *           StringValue: "STRING_VALUE",
 *           BinaryValue: "BLOB_VALUE",
 *           StringListValues: [
 *             "STRING_VALUE",
 *           ],
 *           BinaryListValues: [
 *             "BLOB_VALUE",
 *           ],
 *           DataType: "STRING_VALUE", // required
 *         },
 *       },
 *       MessageDeduplicationId: "STRING_VALUE",
 *       MessageGroupId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new SendMessageBatchCommand(input);
 * const response = await client.send(command);
 * // { // SendMessageBatchResult
 * //   Successful: [ // SendMessageBatchResultEntryList // required
 * //     { // SendMessageBatchResultEntry
 * //       Id: "STRING_VALUE", // required
 * //       MessageId: "STRING_VALUE", // required
 * //       MD5OfMessageBody: "STRING_VALUE", // required
 * //       MD5OfMessageAttributes: "STRING_VALUE",
 * //       MD5OfMessageSystemAttributes: "STRING_VALUE",
 * //       SequenceNumber: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Failed: [ // BatchResultErrorEntryList // required
 * //     { // BatchResultErrorEntry
 * //       Id: "STRING_VALUE", // required
 * //       SenderFault: true || false, // required
 * //       Code: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SendMessageBatchCommandInput - {@link SendMessageBatchCommandInput}
 * @returns {@link SendMessageBatchCommandOutput}
 * @see {@link SendMessageBatchCommandInput} for command's `input` shape.
 * @see {@link SendMessageBatchCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link BatchEntryIdsNotDistinct} (client fault)
 *  <p>Two or more batch entries in the request have the same <code>Id</code>.</p>
 *
 * @throws {@link BatchRequestTooLong} (client fault)
 *  <p>The length of all the messages put together is more than the limit.</p>
 *
 * @throws {@link EmptyBatchRequest} (client fault)
 *  <p>The batch request doesn't contain any entries.</p>
 *
 * @throws {@link InvalidBatchEntryId} (client fault)
 *  <p>The <code>Id</code> of a batch entry in a batch request doesn't abide by the
 *             specification.</p>
 *
 * @throws {@link TooManyEntriesInBatchRequest} (client fault)
 *  <p>The batch request contains more entries than permissible.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>Error code 400. Unsupported operation.</p>
 *
 * @throws {@link SQSServiceException}
 * <p>Base exception class for all service exceptions from SQS service.</p>
 *
 */
export class SendMessageBatchCommand extends $Command<
  SendMessageBatchCommandInput,
  SendMessageBatchCommandOutput,
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
  constructor(readonly input: SendMessageBatchCommandInput) {
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
  ): Handler<SendMessageBatchCommandInput, SendMessageBatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendMessageBatchCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getSendMessageBatchPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "SendMessageBatchCommand";
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
  private serialize(input: SendMessageBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendMessageBatchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendMessageBatchCommandOutput> {
    return de_SendMessageBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
