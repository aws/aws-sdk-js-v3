import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  PutVoiceConnectorLoggingConfigurationRequest,
  PutVoiceConnectorLoggingConfigurationResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1PutVoiceConnectorLoggingConfigurationCommand,
  serializeAws_restJson1PutVoiceConnectorLoggingConfigurationCommand,
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

export interface PutVoiceConnectorLoggingConfigurationCommandInput
  extends PutVoiceConnectorLoggingConfigurationRequest {}
export interface PutVoiceConnectorLoggingConfigurationCommandOutput
  extends PutVoiceConnectorLoggingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Adds a logging configuration for the specified Amazon Chime Voice Connector. The logging configuration specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutVoiceConnectorLoggingConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutVoiceConnectorLoggingConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutVoiceConnectorLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutVoiceConnectorLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutVoiceConnectorLoggingConfigurationCommand extends $Command<
  PutVoiceConnectorLoggingConfigurationCommandInput,
  PutVoiceConnectorLoggingConfigurationCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutVoiceConnectorLoggingConfigurationCommandInput) {
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
  ): Handler<PutVoiceConnectorLoggingConfigurationCommandInput, PutVoiceConnectorLoggingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "PutVoiceConnectorLoggingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutVoiceConnectorLoggingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutVoiceConnectorLoggingConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutVoiceConnectorLoggingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutVoiceConnectorLoggingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutVoiceConnectorLoggingConfigurationCommandOutput> {
    return deserializeAws_restJson1PutVoiceConnectorLoggingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
