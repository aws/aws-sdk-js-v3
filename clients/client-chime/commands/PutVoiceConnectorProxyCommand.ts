import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { PutVoiceConnectorProxyRequest, PutVoiceConnectorProxyResponse } from "../models/models_1";
import {
  deserializeAws_restJson1PutVoiceConnectorProxyCommand,
  serializeAws_restJson1PutVoiceConnectorProxyCommand,
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

export type PutVoiceConnectorProxyCommandInput = PutVoiceConnectorProxyRequest;
export type PutVoiceConnectorProxyCommandOutput = PutVoiceConnectorProxyResponse & __MetadataBearer;

/**
 * <p>Puts the specified proxy configuration to the specified Amazon Chime Voice Connector.</p>
 */
export class PutVoiceConnectorProxyCommand extends $Command<
  PutVoiceConnectorProxyCommandInput,
  PutVoiceConnectorProxyCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutVoiceConnectorProxyCommandInput) {
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
  ): Handler<PutVoiceConnectorProxyCommandInput, PutVoiceConnectorProxyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "PutVoiceConnectorProxyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutVoiceConnectorProxyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutVoiceConnectorProxyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutVoiceConnectorProxyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutVoiceConnectorProxyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutVoiceConnectorProxyCommandOutput> {
    return deserializeAws_restJson1PutVoiceConnectorProxyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
