import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateReplicationGroupMessage, CreateReplicationGroupResult } from "../models/models_0";
import {
  deserializeAws_queryCreateReplicationGroupCommand,
  serializeAws_queryCreateReplicationGroupCommand,
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

export type CreateReplicationGroupCommandInput = CreateReplicationGroupMessage;
export type CreateReplicationGroupCommandOutput = CreateReplicationGroupResult & __MetadataBearer;

/**
 * <p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p>
 *         <p>This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global Datastore.</p>
 *         <p>A Redis (cluster mode disabled) replication group is a collection of clusters,
 *             where one of the clusters is a read/write primary and the others are read-only replicas.
 *             Writes to the primary are asynchronously propagated to the replicas.</p>
 *         <p>A Redis (cluster mode enabled) replication group is a collection of 1 to 90 node groups (shards).
 *             Each node group (shard) has one read/write primary node and up to 5 read-only replica nodes.
 *             Writes to the primary are asynchronously propagated to the replicas.
 *             Redis (cluster mode enabled) replication groups partition the data across node groups (shards).</p>
 *         <p>When a Redis (cluster mode disabled) replication group has been successfully created,
 *             you can add one or more read replicas to it, up to a total of 5 read replicas.
 *             If you need to increase or decrease the number of node groups (console: shards),
 *             you can avail yourself of ElastiCache for Redis' scaling. For more information,
 *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Scaling.html">Scaling ElastiCache for Redis Clusters</a> in the <i>ElastiCache User Guide</i>.</p>
 *
 *
 *         <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 */
export class CreateReplicationGroupCommand extends $Command<
  CreateReplicationGroupCommandInput,
  CreateReplicationGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateReplicationGroupCommandInput) {
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
  ): Handler<CreateReplicationGroupCommandInput, CreateReplicationGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CreateReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReplicationGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateReplicationGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateReplicationGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateReplicationGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateReplicationGroupCommandOutput> {
    return deserializeAws_queryCreateReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
