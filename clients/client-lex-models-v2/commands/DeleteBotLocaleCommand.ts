import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteBotLocaleRequest, DeleteBotLocaleResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBotLocaleCommand,
  serializeAws_restJson1DeleteBotLocaleCommand,
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

export type DeleteBotLocaleCommandInput = DeleteBotLocaleRequest;
export type DeleteBotLocaleCommandOutput = DeleteBotLocaleResponse & __MetadataBearer;

/**
 * <p>Removes a locale from a bot.</p>
 *          <p>When you delete a locale, all intents, slots, and slot types defined
 *          for the locale are also deleted.</p>
 */
export class DeleteBotLocaleCommand extends $Command<
  DeleteBotLocaleCommandInput,
  DeleteBotLocaleCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBotLocaleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBotLocaleCommandInput, DeleteBotLocaleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "DeleteBotLocaleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBotLocaleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBotLocaleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBotLocaleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteBotLocaleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBotLocaleCommandOutput> {
    return deserializeAws_restJson1DeleteBotLocaleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
