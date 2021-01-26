import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  GetVoiceConnectorLoggingConfigurationRequest,
  GetVoiceConnectorLoggingConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetVoiceConnectorLoggingConfigurationCommand,
  serializeAws_restJson1GetVoiceConnectorLoggingConfigurationCommand,
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

export type GetVoiceConnectorLoggingConfigurationCommandInput = GetVoiceConnectorLoggingConfigurationRequest;
export type GetVoiceConnectorLoggingConfigurationCommandOutput = GetVoiceConnectorLoggingConfigurationResponse &
  __MetadataBearer;

/**
 * <p>Retrieves the logging configuration details for the specified Amazon Chime Voice
 *       Connector. Shows whether SIP message logs are enabled for sending to Amazon CloudWatch.</p>
 */
export class GetVoiceConnectorLoggingConfigurationCommand extends $Command<
  GetVoiceConnectorLoggingConfigurationCommandInput,
  GetVoiceConnectorLoggingConfigurationCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetVoiceConnectorLoggingConfigurationCommandInput) {
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
  ): Handler<GetVoiceConnectorLoggingConfigurationCommandInput, GetVoiceConnectorLoggingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetVoiceConnectorLoggingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetVoiceConnectorLoggingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetVoiceConnectorLoggingConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetVoiceConnectorLoggingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetVoiceConnectorLoggingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetVoiceConnectorLoggingConfigurationCommandOutput> {
    return deserializeAws_restJson1GetVoiceConnectorLoggingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
