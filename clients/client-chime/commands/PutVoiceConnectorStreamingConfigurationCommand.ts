import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  PutVoiceConnectorStreamingConfigurationRequest,
  PutVoiceConnectorStreamingConfigurationResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1PutVoiceConnectorStreamingConfigurationCommand,
  serializeAws_restJson1PutVoiceConnectorStreamingConfigurationCommand,
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

export type PutVoiceConnectorStreamingConfigurationCommandInput = PutVoiceConnectorStreamingConfigurationRequest;
export type PutVoiceConnectorStreamingConfigurationCommandOutput = PutVoiceConnectorStreamingConfigurationResponse &
  __MetadataBearer;

/**
 * <p>Adds a streaming configuration for the specified Amazon Chime Voice Connector. The
 *       streaming configuration specifies whether media streaming is enabled for sending to Amazon
 *       Kinesis. It also sets the retention period, in hours, for the Amazon Kinesis data.</p>
 */
export class PutVoiceConnectorStreamingConfigurationCommand extends $Command<
  PutVoiceConnectorStreamingConfigurationCommandInput,
  PutVoiceConnectorStreamingConfigurationCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutVoiceConnectorStreamingConfigurationCommandInput) {
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
    PutVoiceConnectorStreamingConfigurationCommandInput,
    PutVoiceConnectorStreamingConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "PutVoiceConnectorStreamingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutVoiceConnectorStreamingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutVoiceConnectorStreamingConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutVoiceConnectorStreamingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutVoiceConnectorStreamingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutVoiceConnectorStreamingConfigurationCommandOutput> {
    return deserializeAws_restJson1PutVoiceConnectorStreamingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
