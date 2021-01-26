import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DeleteClusterRequest, DeleteClusterResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteClusterCommand,
  serializeAws_json1_1DeleteClusterCommand,
} from "../protocols/Aws_json1_1";
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

export type DeleteClusterCommandInput = DeleteClusterRequest;
export type DeleteClusterCommandOutput = DeleteClusterResponse & __MetadataBearer;

/**
 * <p>Deletes a previously provisioned DAX cluster.
 *                 <i>DeleteCluster</i> deletes all associated nodes, node endpoints
 *             and the DAX cluster itself. When you receive a successful response from this action,
 *             DAX immediately begins deleting the cluster; you cannot cancel or revert this
 *             action.</p>
 */
export class DeleteClusterCommand extends $Command<
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
  DAXClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DAXClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteClusterCommandInput, DeleteClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DAXClient";
    const commandName = "DeleteClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteClusterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteClusterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteClusterCommandOutput> {
    return deserializeAws_json1_1DeleteClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
