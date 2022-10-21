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
  ListDeadLetterSourceQueuesRequest,
  ListDeadLetterSourceQueuesRequestFilterSensitiveLog,
  ListDeadLetterSourceQueuesResult,
  ListDeadLetterSourceQueuesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListDeadLetterSourceQueuesCommand,
  serializeAws_queryListDeadLetterSourceQueuesCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

export interface ListDeadLetterSourceQueuesCommandInput extends ListDeadLetterSourceQueuesRequest {}
export interface ListDeadLetterSourceQueuesCommandOutput extends ListDeadLetterSourceQueuesResult, __MetadataBearer {}

/**
 * <p>Returns a list of your queues that have the <code>RedrivePolicy</code> queue attribute configured with a dead-letter queue.</p>
 *          <p> The <code>ListDeadLetterSourceQueues</code> methods supports
 *           pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of
 *           results to be returned in the response. If you do not set <code>MaxResults</code>,
 *           the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to
 *           display, the response includes a value for <code>NextToken</code>. Use
 *           <code>NextToken</code> as a parameter in your next request to
 *           <code>ListDeadLetterSourceQueues</code> to receive the next page of results.   </p>
 *
 *          <p>For more information about using dead-letter queues, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Using Amazon SQS Dead-Letter Queues</a>
 *           in the <i>Amazon SQS Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ListDeadLetterSourceQueuesCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ListDeadLetterSourceQueuesCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new ListDeadLetterSourceQueuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeadLetterSourceQueuesCommandInput} for command's `input` shape.
 * @see {@link ListDeadLetterSourceQueuesCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 */
export class ListDeadLetterSourceQueuesCommand extends $Command<
  ListDeadLetterSourceQueuesCommandInput,
  ListDeadLetterSourceQueuesCommandOutput,
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

  constructor(readonly input: ListDeadLetterSourceQueuesCommandInput) {
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
  ): Handler<ListDeadLetterSourceQueuesCommandInput, ListDeadLetterSourceQueuesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDeadLetterSourceQueuesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "ListDeadLetterSourceQueuesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeadLetterSourceQueuesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDeadLetterSourceQueuesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeadLetterSourceQueuesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListDeadLetterSourceQueuesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDeadLetterSourceQueuesCommandOutput> {
    return deserializeAws_queryListDeadLetterSourceQueuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
