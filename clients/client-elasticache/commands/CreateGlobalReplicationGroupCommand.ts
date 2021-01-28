import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateGlobalReplicationGroupMessage, CreateGlobalReplicationGroupResult } from "../models/models_0";
import {
  deserializeAws_queryCreateGlobalReplicationGroupCommand,
  serializeAws_queryCreateGlobalReplicationGroupCommand,
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

export type CreateGlobalReplicationGroupCommandInput = CreateGlobalReplicationGroupMessage;
export type CreateGlobalReplicationGroupCommandOutput = CreateGlobalReplicationGroupResult & __MetadataBearer;

/**
 * <p>Global Datastore for Redis offers fully managed, fast,
 *             reliable and secure cross-region replication.
 *             Using Global Datastore for Redis, you can create cross-region
 *             read replica clusters for ElastiCache for Redis to enable low-latency reads
 *             and disaster recovery across regions. For more information,
 *             see <a href="/AmazonElastiCache/latest/red-ug/Redis-Global-Clusters.html">Replication Across Regions Using Global Datastore</a>. </p>
 *          <ul>
 *             <li>
 *                <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global Datastore.</p>
 *             </li>
 *             <li>
 *                <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p>
 *             </li>
 *          </ul>
 */
export class CreateGlobalReplicationGroupCommand extends $Command<
  CreateGlobalReplicationGroupCommandInput,
  CreateGlobalReplicationGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateGlobalReplicationGroupCommandInput) {
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
  ): Handler<CreateGlobalReplicationGroupCommandInput, CreateGlobalReplicationGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CreateGlobalReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGlobalReplicationGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateGlobalReplicationGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGlobalReplicationGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateGlobalReplicationGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateGlobalReplicationGroupCommandOutput> {
    return deserializeAws_queryCreateGlobalReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
