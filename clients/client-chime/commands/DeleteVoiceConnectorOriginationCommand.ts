import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { DeleteVoiceConnectorOriginationRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteVoiceConnectorOriginationCommand,
  serializeAws_restJson1DeleteVoiceConnectorOriginationCommand,
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

export type DeleteVoiceConnectorOriginationCommandInput = DeleteVoiceConnectorOriginationRequest;
export type DeleteVoiceConnectorOriginationCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the origination settings for the specified Amazon Chime Voice Connector.</p>
 *          <note>
 *             <p>If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the origination settings.</p>
 *          </note>
 */
export class DeleteVoiceConnectorOriginationCommand extends $Command<
  DeleteVoiceConnectorOriginationCommandInput,
  DeleteVoiceConnectorOriginationCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVoiceConnectorOriginationCommandInput) {
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
  ): Handler<DeleteVoiceConnectorOriginationCommandInput, DeleteVoiceConnectorOriginationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DeleteVoiceConnectorOriginationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVoiceConnectorOriginationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteVoiceConnectorOriginationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteVoiceConnectorOriginationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVoiceConnectorOriginationCommandOutput> {
    return deserializeAws_restJson1DeleteVoiceConnectorOriginationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
