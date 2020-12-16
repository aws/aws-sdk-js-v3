import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DeleteDBClusterMessage, DeleteDBClusterResult } from "../models/models_0";
import {
  deserializeAws_queryDeleteDBClusterCommand,
  serializeAws_queryDeleteDBClusterCommand,
} from "../protocols/Aws_query";
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

export type DeleteDBClusterCommandInput = DeleteDBClusterMessage;
export type DeleteDBClusterCommandOutput = DeleteDBClusterResult & __MetadataBearer;

/**
 * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a
 *       DB cluster, all automated backups for that DB cluster are deleted and can't be recovered.
 *       Manual DB cluster snapshots of the specified DB cluster are not deleted.</p>
 *
 *          <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled.  To
 *       delete it, you must first set its <code>DeletionProtection</code> field to
 *       <code>False</code>.</p>
 */
export class DeleteDBClusterCommand extends $Command<
  DeleteDBClusterCommandInput,
  DeleteDBClusterCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDBClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDBClusterCommandInput, DeleteDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DeleteDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDBClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDBClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteDBClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDBClusterCommandOutput> {
    return deserializeAws_queryDeleteDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
