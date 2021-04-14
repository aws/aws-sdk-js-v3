import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateBotVersionRequest, CreateBotVersionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateBotVersionCommand,
  serializeAws_restJson1CreateBotVersionCommand,
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

export type CreateBotVersionCommandInput = CreateBotVersionRequest;
export type CreateBotVersionCommandOutput = CreateBotVersionResponse & __MetadataBearer;

/**
 * <p>Creates a new version of the bot based on the <code>DRAFT</code>
 *          version. If the <code>DRAFT</code> version of this resource hasn't
 *          changed since you created the last version, Amazon Lex doesn't create a new
 *          version, it returns the last created version.</p>
 *          <p>When you create the first version of a bot, Amazon Lex sets the version
 *          to 1. Subsequent versions increment by 1.</p>
 */
export class CreateBotVersionCommand extends $Command<
  CreateBotVersionCommandInput,
  CreateBotVersionCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateBotVersionCommandInput) {
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
  ): Handler<CreateBotVersionCommandInput, CreateBotVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "CreateBotVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBotVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBotVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBotVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateBotVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBotVersionCommandOutput> {
    return deserializeAws_restJson1CreateBotVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
