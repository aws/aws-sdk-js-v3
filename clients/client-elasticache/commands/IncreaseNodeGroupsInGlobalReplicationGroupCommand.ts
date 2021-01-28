import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  IncreaseNodeGroupsInGlobalReplicationGroupMessage,
  IncreaseNodeGroupsInGlobalReplicationGroupResult,
} from "../models/models_0";
import {
  deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand,
  serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand,
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

export type IncreaseNodeGroupsInGlobalReplicationGroupCommandInput = IncreaseNodeGroupsInGlobalReplicationGroupMessage;
export type IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput = IncreaseNodeGroupsInGlobalReplicationGroupResult &
  __MetadataBearer;

/**
 * <p>Increase the number of node groups in the Global Datastore</p>
 */
export class IncreaseNodeGroupsInGlobalReplicationGroupCommand extends $Command<
  IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput) {
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
    IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "IncreaseNodeGroupsInGlobalReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: IncreaseNodeGroupsInGlobalReplicationGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: IncreaseNodeGroupsInGlobalReplicationGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput> {
    return deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
