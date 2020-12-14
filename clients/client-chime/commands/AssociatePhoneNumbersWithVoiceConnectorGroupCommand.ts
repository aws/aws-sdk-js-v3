import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  AssociatePhoneNumbersWithVoiceConnectorGroupRequest,
  AssociatePhoneNumbersWithVoiceConnectorGroupResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorGroupCommand,
  serializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorGroupCommand,
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

export type AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput = AssociatePhoneNumbersWithVoiceConnectorGroupRequest;
export type AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput = AssociatePhoneNumbersWithVoiceConnectorGroupResponse &
  __MetadataBearer;

/**
 * <p>Associates phone numbers with the specified Amazon Chime Voice Connector group.</p>
 */
export class AssociatePhoneNumbersWithVoiceConnectorGroupCommand extends $Command<
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput) {
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
    AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "AssociatePhoneNumbersWithVoiceConnectorGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociatePhoneNumbersWithVoiceConnectorGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociatePhoneNumbersWithVoiceConnectorGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput> {
    return deserializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
