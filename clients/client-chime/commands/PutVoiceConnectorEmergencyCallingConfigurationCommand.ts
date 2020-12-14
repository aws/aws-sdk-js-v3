import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  PutVoiceConnectorEmergencyCallingConfigurationRequest,
  PutVoiceConnectorEmergencyCallingConfigurationResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1PutVoiceConnectorEmergencyCallingConfigurationCommand,
  serializeAws_restJson1PutVoiceConnectorEmergencyCallingConfigurationCommand,
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

export type PutVoiceConnectorEmergencyCallingConfigurationCommandInput = PutVoiceConnectorEmergencyCallingConfigurationRequest;
export type PutVoiceConnectorEmergencyCallingConfigurationCommandOutput = PutVoiceConnectorEmergencyCallingConfigurationResponse &
  __MetadataBearer;

/**
 * <p>Puts emergency calling configuration details to the specified Amazon Chime Voice Connector, such as emergency phone numbers and calling countries. Origination and termination settings must be enabled for the Amazon Chime Voice Connector before emergency calling can be configured.</p>
 */
export class PutVoiceConnectorEmergencyCallingConfigurationCommand extends $Command<
  PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
  PutVoiceConnectorEmergencyCallingConfigurationCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutVoiceConnectorEmergencyCallingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    PutVoiceConnectorEmergencyCallingConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "PutVoiceConnectorEmergencyCallingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutVoiceConnectorEmergencyCallingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutVoiceConnectorEmergencyCallingConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutVoiceConnectorEmergencyCallingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutVoiceConnectorEmergencyCallingConfigurationCommandOutput> {
    return deserializeAws_restJson1PutVoiceConnectorEmergencyCallingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
