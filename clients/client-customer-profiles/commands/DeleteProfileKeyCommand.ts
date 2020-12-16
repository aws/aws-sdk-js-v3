import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { DeleteProfileKeyRequest, DeleteProfileKeyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteProfileKeyCommand,
  serializeAws_restJson1DeleteProfileKeyCommand,
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

export type DeleteProfileKeyCommandInput = DeleteProfileKeyRequest;
export type DeleteProfileKeyCommandOutput = DeleteProfileKeyResponse & __MetadataBearer;

/**
 * <p>Removes a searchable key from a customer profile.</p>
 */
export class DeleteProfileKeyCommand extends $Command<
  DeleteProfileKeyCommandInput,
  DeleteProfileKeyCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteProfileKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteProfileKeyCommandInput, DeleteProfileKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "DeleteProfileKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteProfileKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteProfileKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteProfileKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteProfileKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteProfileKeyCommandOutput> {
    return deserializeAws_restJson1DeleteProfileKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
