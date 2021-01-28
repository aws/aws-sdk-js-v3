import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  RebalanceSlotsInGlobalReplicationGroupMessage,
  RebalanceSlotsInGlobalReplicationGroupResult,
} from "../models/models_0";
import {
  deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand,
  serializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand,
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

export type RebalanceSlotsInGlobalReplicationGroupCommandInput = RebalanceSlotsInGlobalReplicationGroupMessage;
export type RebalanceSlotsInGlobalReplicationGroupCommandOutput = RebalanceSlotsInGlobalReplicationGroupResult &
  __MetadataBearer;

/**
 * <p>Redistribute slots to ensure uniform distribution across existing shards in the cluster.</p>
 */
export class RebalanceSlotsInGlobalReplicationGroupCommand extends $Command<
  RebalanceSlotsInGlobalReplicationGroupCommandInput,
  RebalanceSlotsInGlobalReplicationGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RebalanceSlotsInGlobalReplicationGroupCommandInput) {
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
  ): Handler<RebalanceSlotsInGlobalReplicationGroupCommandInput, RebalanceSlotsInGlobalReplicationGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "RebalanceSlotsInGlobalReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RebalanceSlotsInGlobalReplicationGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RebalanceSlotsInGlobalReplicationGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RebalanceSlotsInGlobalReplicationGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RebalanceSlotsInGlobalReplicationGroupCommandOutput> {
    return deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
