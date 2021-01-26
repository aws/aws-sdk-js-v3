import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { DeleteManagedEndpointRequest, DeleteManagedEndpointResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteManagedEndpointCommand,
  serializeAws_restJson1DeleteManagedEndpointCommand,
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

export type DeleteManagedEndpointCommandInput = DeleteManagedEndpointRequest;
export type DeleteManagedEndpointCommandOutput = DeleteManagedEndpointResponse & __MetadataBearer;

/**
 * <p>Deletes a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
 */
export class DeleteManagedEndpointCommand extends $Command<
  DeleteManagedEndpointCommandInput,
  DeleteManagedEndpointCommandOutput,
  EMRContainersClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteManagedEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRContainersClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteManagedEndpointCommandInput, DeleteManagedEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "DeleteManagedEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteManagedEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteManagedEndpointResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteManagedEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteManagedEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteManagedEndpointCommandOutput> {
    return deserializeAws_restJson1DeleteManagedEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
