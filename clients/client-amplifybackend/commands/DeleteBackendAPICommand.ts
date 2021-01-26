import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { DeleteBackendAPIRequest, DeleteBackendAPIResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBackendAPICommand,
  serializeAws_restJson1DeleteBackendAPICommand,
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

export type DeleteBackendAPICommandInput = DeleteBackendAPIRequest;
export type DeleteBackendAPICommandOutput = DeleteBackendAPIResponse & __MetadataBearer;

/**
 * <p>Deletes an existing backend API resource.</p>
 */
export class DeleteBackendAPICommand extends $Command<
  DeleteBackendAPICommandInput,
  DeleteBackendAPICommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBackendAPICommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBackendAPICommandInput, DeleteBackendAPICommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "DeleteBackendAPICommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBackendAPIRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBackendAPIResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBackendAPICommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteBackendAPICommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBackendAPICommandOutput> {
    return deserializeAws_restJson1DeleteBackendAPICommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
