import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteDomainConfigurationRequest, DeleteDomainConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDomainConfigurationCommand,
  serializeAws_restJson1DeleteDomainConfigurationCommand,
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

export type DeleteDomainConfigurationCommandInput = DeleteDomainConfigurationRequest;
export type DeleteDomainConfigurationCommandOutput = DeleteDomainConfigurationResponse & __MetadataBearer;

/**
 * <p>Deletes the specified domain configuration.</p>
 *          <note>
 *             <p>The domain configuration feature is in public preview and is subject to change.</p>
 *          </note>
 */
export class DeleteDomainConfigurationCommand extends $Command<
  DeleteDomainConfigurationCommandInput,
  DeleteDomainConfigurationCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDomainConfigurationCommandInput) {
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
  ): Handler<DeleteDomainConfigurationCommandInput, DeleteDomainConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeleteDomainConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDomainConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDomainConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDomainConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteDomainConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDomainConfigurationCommandOutput> {
    return deserializeAws_restJson1DeleteDomainConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
