import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  ModifyReplicationGroupShardConfigurationMessage,
  ModifyReplicationGroupShardConfigurationResult,
} from "../models/models_0";
import {
  deserializeAws_queryModifyReplicationGroupShardConfigurationCommand,
  serializeAws_queryModifyReplicationGroupShardConfigurationCommand,
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

export type ModifyReplicationGroupShardConfigurationCommandInput = ModifyReplicationGroupShardConfigurationMessage;
export type ModifyReplicationGroupShardConfigurationCommandOutput = ModifyReplicationGroupShardConfigurationResult &
  __MetadataBearer;

/**
 * <p>Modifies a replication group's shards (node groups) by allowing you to
 *             add shards, remove shards, or rebalance the keyspaces among exisiting shards.</p>
 */
export class ModifyReplicationGroupShardConfigurationCommand extends $Command<
  ModifyReplicationGroupShardConfigurationCommandInput,
  ModifyReplicationGroupShardConfigurationCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyReplicationGroupShardConfigurationCommandInput) {
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
  ): Handler<
    ModifyReplicationGroupShardConfigurationCommandInput,
    ModifyReplicationGroupShardConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ModifyReplicationGroupShardConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyReplicationGroupShardConfigurationMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyReplicationGroupShardConfigurationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyReplicationGroupShardConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryModifyReplicationGroupShardConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyReplicationGroupShardConfigurationCommandOutput> {
    return deserializeAws_queryModifyReplicationGroupShardConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
