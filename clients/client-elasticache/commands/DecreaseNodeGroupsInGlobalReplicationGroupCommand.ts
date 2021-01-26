import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  DecreaseNodeGroupsInGlobalReplicationGroupMessage,
  DecreaseNodeGroupsInGlobalReplicationGroupResult,
} from "../models/models_0";
import {
  deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand,
  serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand,
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

export type DecreaseNodeGroupsInGlobalReplicationGroupCommandInput = DecreaseNodeGroupsInGlobalReplicationGroupMessage;
export type DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput = DecreaseNodeGroupsInGlobalReplicationGroupResult &
  __MetadataBearer;

/**
 * <p>Decreases the number of node groups in a Global Datastore</p>
 */
export class DecreaseNodeGroupsInGlobalReplicationGroupCommand extends $Command<
  DecreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DecreaseNodeGroupsInGlobalReplicationGroupCommandInput) {
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
    DecreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DecreaseNodeGroupsInGlobalReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DecreaseNodeGroupsInGlobalReplicationGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DecreaseNodeGroupsInGlobalReplicationGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DecreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput> {
    return deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
