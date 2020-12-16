import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { IncreaseReplicaCountMessage, IncreaseReplicaCountResult } from "../models/models_0";
import {
  deserializeAws_queryIncreaseReplicaCountCommand,
  serializeAws_queryIncreaseReplicaCountCommand,
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

export type IncreaseReplicaCountCommandInput = IncreaseReplicaCountMessage;
export type IncreaseReplicaCountCommandOutput = IncreaseReplicaCountResult & __MetadataBearer;

/**
 * <p>Dynamically increases the number of replics in a Redis (cluster mode disabled) replication group or the number of
 *             replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation
 *             is performed with no cluster down time.</p>
 */
export class IncreaseReplicaCountCommand extends $Command<
  IncreaseReplicaCountCommandInput,
  IncreaseReplicaCountCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: IncreaseReplicaCountCommandInput) {
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
  ): Handler<IncreaseReplicaCountCommandInput, IncreaseReplicaCountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "IncreaseReplicaCountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: IncreaseReplicaCountMessage.filterSensitiveLog,
      outputFilterSensitiveLog: IncreaseReplicaCountResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: IncreaseReplicaCountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryIncreaseReplicaCountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<IncreaseReplicaCountCommandOutput> {
    return deserializeAws_queryIncreaseReplicaCountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
