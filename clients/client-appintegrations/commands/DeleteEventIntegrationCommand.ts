import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import { DeleteEventIntegrationRequest, DeleteEventIntegrationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteEventIntegrationCommand,
  serializeAws_restJson1DeleteEventIntegrationCommand,
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

export type DeleteEventIntegrationCommandInput = DeleteEventIntegrationRequest;
export type DeleteEventIntegrationCommandOutput = DeleteEventIntegrationResponse & __MetadataBearer;

/**
 * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
 *          <p>Deletes the specified existing event integration. If the event integration is associated
 *       with clients, the request is rejected.</p>
 */
export class DeleteEventIntegrationCommand extends $Command<
  DeleteEventIntegrationCommandInput,
  DeleteEventIntegrationCommandOutput,
  AppIntegrationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteEventIntegrationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppIntegrationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteEventIntegrationCommandInput, DeleteEventIntegrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppIntegrationsClient";
    const commandName = "DeleteEventIntegrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEventIntegrationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteEventIntegrationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEventIntegrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteEventIntegrationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEventIntegrationCommandOutput> {
    return deserializeAws_restJson1DeleteEventIntegrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
