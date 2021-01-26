import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListEventSourceMappingsRequest, ListEventSourceMappingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListEventSourceMappingsCommand,
  serializeAws_restJson1ListEventSourceMappingsCommand,
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

export type ListEventSourceMappingsCommandInput = ListEventSourceMappingsRequest;
export type ListEventSourceMappingsCommandOutput = ListEventSourceMappingsResponse & __MetadataBearer;

/**
 * <p>Lists event source mappings. Specify an <code>EventSourceArn</code> to only show event source mappings for a
 *       single event source.</p>
 */
export class ListEventSourceMappingsCommand extends $Command<
  ListEventSourceMappingsCommandInput,
  ListEventSourceMappingsCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEventSourceMappingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEventSourceMappingsCommandInput, ListEventSourceMappingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "ListEventSourceMappingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEventSourceMappingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEventSourceMappingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEventSourceMappingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEventSourceMappingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEventSourceMappingsCommandOutput> {
    return deserializeAws_restJson1ListEventSourceMappingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
