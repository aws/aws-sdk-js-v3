import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DecreaseReplicaCountMessage, DecreaseReplicaCountResult } from "../models/models_0";
import {
  deserializeAws_queryDecreaseReplicaCountCommand,
  serializeAws_queryDecreaseReplicaCountCommand,
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

export type DecreaseReplicaCountCommandInput = DecreaseReplicaCountMessage;
export type DecreaseReplicaCountCommandOutput = DecreaseReplicaCountResult & __MetadataBearer;

/**
 * <p>Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of
 *             replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation
 *             is performed with no cluster down time.</p>
 */
export class DecreaseReplicaCountCommand extends $Command<
  DecreaseReplicaCountCommandInput,
  DecreaseReplicaCountCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DecreaseReplicaCountCommandInput) {
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
  ): Handler<DecreaseReplicaCountCommandInput, DecreaseReplicaCountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DecreaseReplicaCountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DecreaseReplicaCountMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DecreaseReplicaCountResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DecreaseReplicaCountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDecreaseReplicaCountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DecreaseReplicaCountCommandOutput> {
    return deserializeAws_queryDecreaseReplicaCountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
