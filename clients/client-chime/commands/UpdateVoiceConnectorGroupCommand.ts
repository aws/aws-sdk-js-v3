import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { UpdateVoiceConnectorGroupRequest, UpdateVoiceConnectorGroupResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateVoiceConnectorGroupCommand,
  serializeAws_restJson1UpdateVoiceConnectorGroupCommand,
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

export type UpdateVoiceConnectorGroupCommandInput = UpdateVoiceConnectorGroupRequest;
export type UpdateVoiceConnectorGroupCommandOutput = UpdateVoiceConnectorGroupResponse & __MetadataBearer;

/**
 * <p>Updates details for the specified Amazon Chime Voice Connector group, such as the name
 *       and Amazon Chime Voice Connector priority ranking.</p>
 */
export class UpdateVoiceConnectorGroupCommand extends $Command<
  UpdateVoiceConnectorGroupCommandInput,
  UpdateVoiceConnectorGroupCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateVoiceConnectorGroupCommandInput) {
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
  ): Handler<UpdateVoiceConnectorGroupCommandInput, UpdateVoiceConnectorGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "UpdateVoiceConnectorGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateVoiceConnectorGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateVoiceConnectorGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateVoiceConnectorGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateVoiceConnectorGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateVoiceConnectorGroupCommandOutput> {
    return deserializeAws_restJson1UpdateVoiceConnectorGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
