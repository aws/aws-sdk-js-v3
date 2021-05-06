import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { ListQueuesRequest, ListQueuesResult } from "../models/models_0";
import { deserializeAws_queryListQueuesCommand, serializeAws_queryListQueuesCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListQueuesCommandInput extends ListQueuesRequest {}
export interface ListQueuesCommandOutput extends ListQueuesResult, __MetadataBearer {}

/**
 * <p>Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you specify a value for the optional
 *           <code>QueueNamePrefix</code> parameter, only queues with a name that begins with the specified value are returned.</p>
 *          <p> The <code>listQueues</code> methods supports
 *           pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of
 *           results to be returned in the response. If you do not set <code>MaxResults</code>,
 *           the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to
 *           display, the response includes a value for <code>NextToken</code>. Use
 *           <code>NextToken</code> as a parameter in your next request to
 *           <code>listQueues</code> to receive the next page of results.  </p>
 *          <note>
 *             <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ListQueuesCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ListQueuesCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new ListQueuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQueuesCommandInput} for command's `input` shape.
 * @see {@link ListQueuesCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListQueuesCommand extends $Command<
  ListQueuesCommandInput,
  ListQueuesCommandOutput,
  SQSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListQueuesCommandInput) {
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
  ): Handler<ListQueuesCommandInput, ListQueuesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "ListQueuesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListQueuesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListQueuesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListQueuesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListQueuesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListQueuesCommandOutput> {
    return deserializeAws_queryListQueuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
