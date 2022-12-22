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

import {
  PublishBatchInput,
  PublishBatchInputFilterSensitiveLog,
  PublishBatchResponse,
  PublishBatchResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_queryPublishBatchCommand, serializeAws_queryPublishBatchCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

export interface PublishBatchCommandInput extends PublishBatchInput {}
export interface PublishBatchCommandOutput extends PublishBatchResponse, __MetadataBearer {}

/**
 * <p>Publishes up to ten messages to the specified topic. This is a batch version of
 *                 <code>Publish</code>. For FIFO topics, multiple messages within a single batch are
 *             published in the order they are sent, and messages are deduplicated within the batch and
 *             across batches for 5 minutes.</p>
 *         <p>The result of publishing each message is reported individually in the response.
 *             Because the batch request can result in a combination of successful and unsuccessful
 *             actions, you should check for batch errors even when the call returns an HTTP status
 *             code of <code>200</code>.</p>
 *         <p>The maximum allowed individual message size and the maximum total payload size (the
 *             sum of the individual lengths of all of the batched messages) are both 256 KB (262,144
 *             bytes). </p>
 *         <p>Some actions take lists of parameters. These lists are specified using the
 *                 <code>param.n</code> notation. Values of <code>n</code> are integers starting from
 *             1. For example, a parameter list with two elements looks like this: </p>
 *         <p>&AttributeName.1=first</p>
 *         <p>&AttributeName.2=second</p>
 *         <p>If you send a batch message to a topic, Amazon SNS publishes the batch message to each
 *             endpoint that is subscribed to the topic. The format of the batch message depends on the
 *             notification protocol for each subscribed endpoint.</p>
 *         <p>When a <code>messageId</code> is returned, the batch message is saved and Amazon SNS
 *             immediately delivers the message to subscribers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, PublishBatchCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, PublishBatchCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new PublishBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishBatchCommandInput} for command's `input` shape.
 * @see {@link PublishBatchCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 */
export class PublishBatchCommand extends $Command<
  PublishBatchCommandInput,
  PublishBatchCommandOutput,
  SNSClientResolvedConfig
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

  constructor(readonly input: PublishBatchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishBatchCommandInput, PublishBatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PublishBatchCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "PublishBatchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PublishBatchInputFilterSensitiveLog,
      outputFilterSensitiveLog: PublishBatchResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PublishBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPublishBatchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishBatchCommandOutput> {
    return deserializeAws_queryPublishBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
