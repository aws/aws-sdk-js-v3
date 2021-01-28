import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ListSubscriptionsByTopicInput, ListSubscriptionsByTopicResponse } from "../models/models_0";
import {
  deserializeAws_queryListSubscriptionsByTopicCommand,
  serializeAws_queryListSubscriptionsByTopicCommand,
} from "../protocols/Aws_query";
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

export type ListSubscriptionsByTopicCommandInput = ListSubscriptionsByTopicInput;
export type ListSubscriptionsByTopicCommandOutput = ListSubscriptionsByTopicResponse & __MetadataBearer;

/**
 * <p>Returns a list of the subscriptions to a specific topic. Each call returns a limited
 *             list of subscriptions, up to 100. If there are more subscriptions, a
 *                 <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in
 *             a new <code>ListSubscriptionsByTopic</code> call to get further results.</p>
 *         <p>This action is throttled at 30 transactions per second (TPS).</p>
 */
export class ListSubscriptionsByTopicCommand extends $Command<
  ListSubscriptionsByTopicCommandInput,
  ListSubscriptionsByTopicCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSubscriptionsByTopicCommandInput) {
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
  ): Handler<ListSubscriptionsByTopicCommandInput, ListSubscriptionsByTopicCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "ListSubscriptionsByTopicCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSubscriptionsByTopicInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListSubscriptionsByTopicResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSubscriptionsByTopicCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListSubscriptionsByTopicCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSubscriptionsByTopicCommandOutput> {
    return deserializeAws_queryListSubscriptionsByTopicCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
