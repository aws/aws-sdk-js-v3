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
  ListQueueTagsRequest,
  ListQueueTagsRequestFilterSensitiveLog,
  ListQueueTagsResult,
  ListQueueTagsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListQueueTagsCommand,
  serializeAws_queryListQueueTagsCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

export interface ListQueueTagsCommandInput extends ListQueueTagsRequest {}
export interface ListQueueTagsCommandOutput extends ListQueueTagsResult, __MetadataBearer {}

/**
 * <p>List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging
 * Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p>
 *         <note>
 *             <p>Cross-account permissions don't apply to this action. For more information,
 * see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant
 * cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ListQueueTagsCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ListQueueTagsCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new ListQueueTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQueueTagsCommandInput} for command's `input` shape.
 * @see {@link ListQueueTagsCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 */
export class ListQueueTagsCommand extends $Command<
  ListQueueTagsCommandInput,
  ListQueueTagsCommandOutput,
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

  constructor(readonly input: ListQueueTagsCommandInput) {
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
  ): Handler<ListQueueTagsCommandInput, ListQueueTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListQueueTagsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "ListQueueTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListQueueTagsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListQueueTagsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListQueueTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListQueueTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListQueueTagsCommandOutput> {
    return deserializeAws_queryListQueueTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
