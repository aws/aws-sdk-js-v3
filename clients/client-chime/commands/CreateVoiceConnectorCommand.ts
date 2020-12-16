import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { CreateVoiceConnectorRequest, CreateVoiceConnectorResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateVoiceConnectorCommand,
  serializeAws_restJson1CreateVoiceConnectorCommand,
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

export type CreateVoiceConnectorCommandInput = CreateVoiceConnectorRequest;
export type CreateVoiceConnectorCommandOutput = CreateVoiceConnectorResponse & __MetadataBearer;

/**
 * <p>Creates an Amazon Chime Voice Connector under the administrator's AWS account. You can choose to create an Amazon Chime Voice Connector in a specific AWS Region.</p>
 *          <p>Enabling <a>CreateVoiceConnectorRequest$RequireEncryption</a> configures your Amazon Chime Voice Connector to use TLS transport for SIP signaling and Secure RTP (SRTP) for media.
 *       Inbound calls use TLS transport, and unencrypted outbound calls are blocked.</p>
 */
export class CreateVoiceConnectorCommand extends $Command<
  CreateVoiceConnectorCommandInput,
  CreateVoiceConnectorCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVoiceConnectorCommandInput) {
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
  ): Handler<CreateVoiceConnectorCommandInput, CreateVoiceConnectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateVoiceConnectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVoiceConnectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVoiceConnectorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVoiceConnectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateVoiceConnectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVoiceConnectorCommandOutput> {
    return deserializeAws_restJson1CreateVoiceConnectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
