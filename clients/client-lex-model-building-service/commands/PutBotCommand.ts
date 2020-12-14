import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { PutBotRequest, PutBotResponse } from "../models/models_0";
import { deserializeAws_restJson1PutBotCommand, serializeAws_restJson1PutBotCommand } from "../protocols/Aws_restJson1";
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

export type PutBotCommandInput = PutBotRequest;
export type PutBotCommandOutput = PutBotResponse & __MetadataBearer;

/**
 * <p>Creates an Amazon Lex conversational bot or replaces an existing bot.
 *       When you create or update a bot you are only required to specify a name, a
 *       locale, and whether the bot is directed toward children under age 13. You
 *       can use this to add intents later, or to remove intents from an existing
 *       bot. When you create a bot with the minimum information, the bot is
 *       created or updated but Amazon Lex returns the <code></code> response
 *         <code>FAILED</code>. You can build the bot after you add one or more
 *       intents. For more information about Amazon Lex bots, see <a>how-it-works</a>. </p>
 *          <p>If you specify the name of an existing bot, the fields in the
 *       request replace the existing values in the <code>$LATEST</code> version of
 *       the bot. Amazon Lex removes any fields that you don't provide values for in the
 *       request, except for the <code>idleTTLInSeconds</code> and
 *         <code>privacySettings</code> fields, which are set to their default
 *       values. If you don't specify values for required fields, Amazon Lex throws an
 *       exception.</p>
 *
 *          <p>This operation requires permissions for the <code>lex:PutBot</code>
 *       action. For more information, see <a>security-iam</a>.</p>
 */
export class PutBotCommand extends $Command<
  PutBotCommandInput,
  PutBotCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutBotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBotCommandInput, PutBotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "PutBotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutBotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutBotResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutBotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutBotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutBotCommandOutput> {
    return deserializeAws_restJson1PutBotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
