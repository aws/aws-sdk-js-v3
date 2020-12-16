import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { DeleteVirtualClusterRequest, DeleteVirtualClusterResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteVirtualClusterCommand,
  serializeAws_restJson1DeleteVirtualClusterCommand,
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

export type DeleteVirtualClusterCommandInput = DeleteVirtualClusterRequest;
export type DeleteVirtualClusterCommandOutput = DeleteVirtualClusterResponse & __MetadataBearer;

/**
 * <p>Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.</p>
 */
export class DeleteVirtualClusterCommand extends $Command<
  DeleteVirtualClusterCommandInput,
  DeleteVirtualClusterCommandOutput,
  EMRContainersClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVirtualClusterCommandInput) {
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
  ): Handler<DeleteVirtualClusterCommandInput, DeleteVirtualClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "DeleteVirtualClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVirtualClusterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVirtualClusterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVirtualClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteVirtualClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVirtualClusterCommandOutput> {
    return deserializeAws_restJson1DeleteVirtualClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
