// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSendMessageBatchPlugin } from "@aws-sdk/middleware-sdk-sqs";
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
  SendMessageBatchRequest,
  SendMessageBatchRequestFilterSensitiveLog,
  SendMessageBatchResult,
  SendMessageBatchResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_querySendMessageBatchCommand,
  serializeAws_querySendMessageBatchCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

export interface SendMessageBatchCommandInput extends SendMessageBatchRequest {}
export interface SendMessageBatchCommandOutput extends SendMessageBatchResult, __MetadataBearer {}

/**
 * <p>Delivers up to ten messages to the specified queue. This is a batch version of <code>
 *                <a>SendMessage</a>.</code> For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent.</p>
 *          <p>The result of sending each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>
 *          <p>The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KB (262,144 bytes).</p>
 *          <important>
 *            <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p>
 *            <p>
 *                <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code>
 *             </p>
 * 	           <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p>
 *          </important>
 *          <p>If you don't specify the <code>DelaySeconds</code> parameter for an entry, Amazon SQS uses the default value for the queue.</p>
 *          <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p>
 *          <p>
 *             <code>&AttributeName.1=first</code>
 *          </p>
 *          <p>
 *             <code>&AttributeName.2=second</code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, SendMessageBatchCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, SendMessageBatchCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new SendMessageBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendMessageBatchCommandInput} for command's `input` shape.
 * @see {@link SendMessageBatchCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
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
      inputFilterSensitiveLog: SendMessageBatchRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SendMessageBatchResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendMessageBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySendMessageBatchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendMessageBatchCommandOutput> {
    return deserializeAws_querySendMessageBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
