import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { CreateCustomDataIdentifierRequest, CreateCustomDataIdentifierResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateCustomDataIdentifierCommand,
  serializeAws_restJson1CreateCustomDataIdentifierCommand,
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

export type CreateCustomDataIdentifierCommandInput = CreateCustomDataIdentifierRequest;
export type CreateCustomDataIdentifierCommandOutput = CreateCustomDataIdentifierResponse & __MetadataBearer;

/**
 * <p>Creates and defines the criteria and other settings for a custom data identifier.</p>
 */
export class CreateCustomDataIdentifierCommand extends $Command<
  CreateCustomDataIdentifierCommandInput,
  CreateCustomDataIdentifierCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCustomDataIdentifierCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCustomDataIdentifierCommandInput, CreateCustomDataIdentifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "CreateCustomDataIdentifierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomDataIdentifierRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCustomDataIdentifierResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCustomDataIdentifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateCustomDataIdentifierCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCustomDataIdentifierCommandOutput> {
    return deserializeAws_restJson1CreateCustomDataIdentifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
