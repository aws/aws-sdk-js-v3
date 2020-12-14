import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListTopicRuleDestinationsRequest, ListTopicRuleDestinationsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListTopicRuleDestinationsCommand,
  serializeAws_restJson1ListTopicRuleDestinationsCommand,
} from "../protocols/Aws_restJson1";
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

export type ListTopicRuleDestinationsCommandInput = ListTopicRuleDestinationsRequest;
export type ListTopicRuleDestinationsCommandOutput = ListTopicRuleDestinationsResponse & __MetadataBearer;

/**
 * <p>Lists all the topic rule destinations in your AWS account.</p>
 */
export class ListTopicRuleDestinationsCommand extends $Command<
  ListTopicRuleDestinationsCommandInput,
  ListTopicRuleDestinationsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTopicRuleDestinationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTopicRuleDestinationsCommandInput, ListTopicRuleDestinationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListTopicRuleDestinationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTopicRuleDestinationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTopicRuleDestinationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTopicRuleDestinationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTopicRuleDestinationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTopicRuleDestinationsCommandOutput> {
    return deserializeAws_restJson1ListTopicRuleDestinationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
