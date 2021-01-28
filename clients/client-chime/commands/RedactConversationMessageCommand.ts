import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { RedactConversationMessageRequest, RedactConversationMessageResponse } from "../models/models_1";
import {
  deserializeAws_restJson1RedactConversationMessageCommand,
  serializeAws_restJson1RedactConversationMessageCommand,
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

export type RedactConversationMessageCommandInput = RedactConversationMessageRequest;
export type RedactConversationMessageCommandOutput = RedactConversationMessageResponse & __MetadataBearer;

/**
 * <p>Redacts the specified message from the specified Amazon Chime conversation.</p>
 */
export class RedactConversationMessageCommand extends $Command<
  RedactConversationMessageCommandInput,
  RedactConversationMessageCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RedactConversationMessageCommandInput) {
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
  ): Handler<RedactConversationMessageCommandInput, RedactConversationMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "RedactConversationMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RedactConversationMessageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RedactConversationMessageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RedactConversationMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RedactConversationMessageCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RedactConversationMessageCommandOutput> {
    return deserializeAws_restJson1RedactConversationMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
