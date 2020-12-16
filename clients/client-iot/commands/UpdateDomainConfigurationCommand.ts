import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateDomainConfigurationRequest, UpdateDomainConfigurationResponse } from "../models/models_2";
import {
  deserializeAws_restJson1UpdateDomainConfigurationCommand,
  serializeAws_restJson1UpdateDomainConfigurationCommand,
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

export type UpdateDomainConfigurationCommandInput = UpdateDomainConfigurationRequest;
export type UpdateDomainConfigurationCommandOutput = UpdateDomainConfigurationResponse & __MetadataBearer;

/**
 * <p>Updates values stored in the domain configuration. Domain configurations for default endpoints can't be updated.</p>
 *          <note>
 *             <p>The domain configuration feature is in public preview and is subject to change.</p>
 *          </note>
 */
export class UpdateDomainConfigurationCommand extends $Command<
  UpdateDomainConfigurationCommandInput,
  UpdateDomainConfigurationCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDomainConfigurationCommandInput) {
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
  ): Handler<UpdateDomainConfigurationCommandInput, UpdateDomainConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateDomainConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDomainConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDomainConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDomainConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDomainConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDomainConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateDomainConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
