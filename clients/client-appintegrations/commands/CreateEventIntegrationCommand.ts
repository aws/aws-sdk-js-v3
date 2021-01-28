import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import { CreateEventIntegrationRequest, CreateEventIntegrationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateEventIntegrationCommand,
  serializeAws_restJson1CreateEventIntegrationCommand,
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

export type CreateEventIntegrationCommandInput = CreateEventIntegrationRequest;
export type CreateEventIntegrationCommandOutput = CreateEventIntegrationResponse & __MetadataBearer;

/**
 * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
 *          <p>Creates an EventIntegration, given a specified name, description, and a reference to an
 *       Amazon Eventbridge bus in your account and a partner event source that will push events to that bus. No
 *       objects are created in the your account, only metadata that is persisted on the EventIntegration
 *       control plane.</p>
 */
export class CreateEventIntegrationCommand extends $Command<
  CreateEventIntegrationCommandInput,
  CreateEventIntegrationCommandOutput,
  AppIntegrationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateEventIntegrationCommandInput) {
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
  ): Handler<CreateEventIntegrationCommandInput, CreateEventIntegrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppIntegrationsClient";
    const commandName = "CreateEventIntegrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEventIntegrationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateEventIntegrationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEventIntegrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateEventIntegrationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEventIntegrationCommandOutput> {
    return deserializeAws_restJson1CreateEventIntegrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
