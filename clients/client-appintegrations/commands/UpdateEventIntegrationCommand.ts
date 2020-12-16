import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import { UpdateEventIntegrationRequest, UpdateEventIntegrationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateEventIntegrationCommand,
  serializeAws_restJson1UpdateEventIntegrationCommand,
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

export type UpdateEventIntegrationCommandInput = UpdateEventIntegrationRequest;
export type UpdateEventIntegrationCommandOutput = UpdateEventIntegrationResponse & __MetadataBearer;

/**
 * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
 *          <p>Updates the description of an event integration.</p>
 */
export class UpdateEventIntegrationCommand extends $Command<
  UpdateEventIntegrationCommandInput,
  UpdateEventIntegrationCommandOutput,
  AppIntegrationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateEventIntegrationCommandInput) {
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
  ): Handler<UpdateEventIntegrationCommandInput, UpdateEventIntegrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppIntegrationsClient";
    const commandName = "UpdateEventIntegrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEventIntegrationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateEventIntegrationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateEventIntegrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateEventIntegrationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEventIntegrationCommandOutput> {
    return deserializeAws_restJson1UpdateEventIntegrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
