import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { DeleteProfileObjectTypeRequest, DeleteProfileObjectTypeResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteProfileObjectTypeCommand,
  serializeAws_restJson1DeleteProfileObjectTypeCommand,
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

export type DeleteProfileObjectTypeCommandInput = DeleteProfileObjectTypeRequest;
export type DeleteProfileObjectTypeCommandOutput = DeleteProfileObjectTypeResponse & __MetadataBearer;

/**
 * <p>Removes a ProfileObjectType from a specific domain as well as removes all the
 *          ProfileObjects of that type. It also disables integrations from this specific
 *          ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that
 *          were populated from this ProfileObjectType.</p>
 */
export class DeleteProfileObjectTypeCommand extends $Command<
  DeleteProfileObjectTypeCommandInput,
  DeleteProfileObjectTypeCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteProfileObjectTypeCommandInput) {
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
  ): Handler<DeleteProfileObjectTypeCommandInput, DeleteProfileObjectTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "DeleteProfileObjectTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteProfileObjectTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteProfileObjectTypeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteProfileObjectTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteProfileObjectTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteProfileObjectTypeCommandOutput> {
    return deserializeAws_restJson1DeleteProfileObjectTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
