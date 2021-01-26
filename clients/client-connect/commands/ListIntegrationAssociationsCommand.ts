import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListIntegrationAssociationsRequest, ListIntegrationAssociationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListIntegrationAssociationsCommand,
  serializeAws_restJson1ListIntegrationAssociationsCommand,
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

export type ListIntegrationAssociationsCommandInput = ListIntegrationAssociationsRequest;
export type ListIntegrationAssociationsCommandOutput = ListIntegrationAssociationsResponse & __MetadataBearer;

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Provides summary information about the AppIntegration associations for the specified Amazon Connect
 *    instance.</p>
 */
export class ListIntegrationAssociationsCommand extends $Command<
  ListIntegrationAssociationsCommandInput,
  ListIntegrationAssociationsCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListIntegrationAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListIntegrationAssociationsCommandInput, ListIntegrationAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListIntegrationAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListIntegrationAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListIntegrationAssociationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListIntegrationAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListIntegrationAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListIntegrationAssociationsCommandOutput> {
    return deserializeAws_restJson1ListIntegrationAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
