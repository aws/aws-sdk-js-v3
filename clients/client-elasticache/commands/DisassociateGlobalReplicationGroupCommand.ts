import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  DisassociateGlobalReplicationGroupMessage,
  DisassociateGlobalReplicationGroupResult,
} from "../models/models_0";
import {
  deserializeAws_queryDisassociateGlobalReplicationGroupCommand,
  serializeAws_queryDisassociateGlobalReplicationGroupCommand,
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

export type DisassociateGlobalReplicationGroupCommandInput = DisassociateGlobalReplicationGroupMessage;
export type DisassociateGlobalReplicationGroupCommandOutput = DisassociateGlobalReplicationGroupResult &
  __MetadataBearer;

/**
 * <p>Remove a secondary cluster from the Global Datastore using the Global Datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that AWS region.</p>
 */
export class DisassociateGlobalReplicationGroupCommand extends $Command<
  DisassociateGlobalReplicationGroupCommandInput,
  DisassociateGlobalReplicationGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateGlobalReplicationGroupCommandInput) {
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
  ): Handler<DisassociateGlobalReplicationGroupCommandInput, DisassociateGlobalReplicationGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DisassociateGlobalReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateGlobalReplicationGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateGlobalReplicationGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateGlobalReplicationGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDisassociateGlobalReplicationGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateGlobalReplicationGroupCommandOutput> {
    return deserializeAws_queryDisassociateGlobalReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
