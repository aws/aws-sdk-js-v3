import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateSlotRequest, CreateSlotResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateSlotCommand,
  serializeAws_restJson1CreateSlotCommand,
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

export type CreateSlotCommandInput = CreateSlotRequest;
export type CreateSlotCommandOutput = CreateSlotResponse & __MetadataBearer;

/**
 * <p>Creates a slot in an intent. A slot is a variable needed to fulfill
 *          an intent. For example, an <code>OrderPizza</code> intent might need
 *          slots for size, crust, and number of pizzas. For each slot, you define
 *          one or more utterances that Amazon Lex uses to elicit a response from the
 *          user. </p>
 */
export class CreateSlotCommand extends $Command<
  CreateSlotCommandInput,
  CreateSlotCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSlotCommandInput) {
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
  ): Handler<CreateSlotCommandInput, CreateSlotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "CreateSlotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSlotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSlotResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSlotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSlotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSlotCommandOutput> {
    return deserializeAws_restJson1CreateSlotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
