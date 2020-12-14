import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListEventSourcesRequest, ListEventSourcesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListEventSourcesCommand,
  serializeAws_json1_1ListEventSourcesCommand,
} from "../protocols/Aws_json1_1";
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

export type ListEventSourcesCommandInput = ListEventSourcesRequest;
export type ListEventSourcesCommandOutput = ListEventSourcesResponse & __MetadataBearer;

/**
 * <p>You can use this to see all the partner event sources that have been shared with your
 *             AWS account. For more information about partner event sources, see <a>CreateEventBus</a>.</p>
 */
export class ListEventSourcesCommand extends $Command<
  ListEventSourcesCommandInput,
  ListEventSourcesCommandOutput,
  EventBridgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEventSourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEventSourcesCommandInput, ListEventSourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "ListEventSourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEventSourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEventSourcesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEventSourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListEventSourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEventSourcesCommandOutput> {
    return deserializeAws_json1_1ListEventSourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
