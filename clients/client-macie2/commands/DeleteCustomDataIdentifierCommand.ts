import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { DeleteCustomDataIdentifierRequest, DeleteCustomDataIdentifierResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteCustomDataIdentifierCommand,
  serializeAws_restJson1DeleteCustomDataIdentifierCommand,
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

export type DeleteCustomDataIdentifierCommandInput = DeleteCustomDataIdentifierRequest;
export type DeleteCustomDataIdentifierCommandOutput = DeleteCustomDataIdentifierResponse & __MetadataBearer;

/**
 * <p>Soft deletes a custom data identifier.</p>
 */
export class DeleteCustomDataIdentifierCommand extends $Command<
  DeleteCustomDataIdentifierCommandInput,
  DeleteCustomDataIdentifierCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCustomDataIdentifierCommandInput) {
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
  ): Handler<DeleteCustomDataIdentifierCommandInput, DeleteCustomDataIdentifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "DeleteCustomDataIdentifierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCustomDataIdentifierRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteCustomDataIdentifierResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCustomDataIdentifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteCustomDataIdentifierCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteCustomDataIdentifierCommandOutput> {
    return deserializeAws_restJson1DeleteCustomDataIdentifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
