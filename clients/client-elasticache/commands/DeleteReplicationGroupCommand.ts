import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteReplicationGroupMessage, DeleteReplicationGroupResult } from "../models/models_0";
import {
  deserializeAws_queryDeleteReplicationGroupCommand,
  serializeAws_queryDeleteReplicationGroupCommand,
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

export type DeleteReplicationGroupCommandInput = DeleteReplicationGroupMessage;
export type DeleteReplicationGroupCommandOutput = DeleteReplicationGroupResult & __MetadataBearer;

/**
 * <p>Deletes an existing replication group.
 *             By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas.
 *             If the replication group has only one primary,
 *             you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p>
 *         <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources;
 *             you cannot cancel or revert this operation.</p>
 *         <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 */
export class DeleteReplicationGroupCommand extends $Command<
  DeleteReplicationGroupCommandInput,
  DeleteReplicationGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteReplicationGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteReplicationGroupCommandInput, DeleteReplicationGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DeleteReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteReplicationGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteReplicationGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteReplicationGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteReplicationGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteReplicationGroupCommandOutput> {
    return deserializeAws_queryDeleteReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
