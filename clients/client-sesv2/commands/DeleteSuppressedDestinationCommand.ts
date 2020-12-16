import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { DeleteSuppressedDestinationRequest, DeleteSuppressedDestinationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteSuppressedDestinationCommand,
  serializeAws_restJson1DeleteSuppressedDestinationCommand,
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

export type DeleteSuppressedDestinationCommandInput = DeleteSuppressedDestinationRequest;
export type DeleteSuppressedDestinationCommandOutput = DeleteSuppressedDestinationResponse & __MetadataBearer;

/**
 * <p>Removes an email address from the suppression list for your account.</p>
 */
export class DeleteSuppressedDestinationCommand extends $Command<
  DeleteSuppressedDestinationCommandInput,
  DeleteSuppressedDestinationCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSuppressedDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSuppressedDestinationCommandInput, DeleteSuppressedDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "DeleteSuppressedDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSuppressedDestinationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSuppressedDestinationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSuppressedDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSuppressedDestinationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteSuppressedDestinationCommandOutput> {
    return deserializeAws_restJson1DeleteSuppressedDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
