import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ListSubscriptionsInput, ListSubscriptionsResponse } from "../models/models_0";
import {
  deserializeAws_queryListSubscriptionsCommand,
  serializeAws_queryListSubscriptionsCommand,
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

export type ListSubscriptionsCommandInput = ListSubscriptionsInput;
export type ListSubscriptionsCommandOutput = ListSubscriptionsResponse & __MetadataBearer;

/**
 * <p>Returns a list of the requester's subscriptions. Each call returns a limited list of
 *             subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is
 *             also returned. Use the <code>NextToken</code> parameter in a new
 *                 <code>ListSubscriptions</code> call to get further results.</p>
 *         <p>This action is throttled at 30 transactions per second (TPS).</p>
 */
export class ListSubscriptionsCommand extends $Command<
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSubscriptionsCommandInput) {
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
  ): Handler<ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "ListSubscriptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSubscriptionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListSubscriptionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSubscriptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListSubscriptionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSubscriptionsCommandOutput> {
    return deserializeAws_queryListSubscriptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
