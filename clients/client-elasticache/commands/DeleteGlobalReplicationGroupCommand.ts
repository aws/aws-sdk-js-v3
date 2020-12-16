import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteGlobalReplicationGroupMessage, DeleteGlobalReplicationGroupResult } from "../models/models_0";
import {
  deserializeAws_queryDeleteGlobalReplicationGroupCommand,
  serializeAws_queryDeleteGlobalReplicationGroupCommand,
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

export type DeleteGlobalReplicationGroupCommandInput = DeleteGlobalReplicationGroupMessage;
export type DeleteGlobalReplicationGroupCommandOutput = DeleteGlobalReplicationGroupResult & __MetadataBearer;

/**
 * <p>Deleting a Global Datastore is a two-step process: </p>
 *             <ul>
 *             <li>
 *                <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global Datastore.</p>
 *             </li>
 *             <li>
 *                <p>Once the Global Datastore contains only the primary cluster, you can use DeleteGlobalReplicationGroup API to delete the Global Datastore while retainining the primary cluster using Retain…= true.</p>
 *             </li>
 *          </ul>
 *
 *           <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore
 *              while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p>
 *         <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources;
 *             you cannot cancel or revert this operation.</p>
 */
export class DeleteGlobalReplicationGroupCommand extends $Command<
  DeleteGlobalReplicationGroupCommandInput,
  DeleteGlobalReplicationGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteGlobalReplicationGroupCommandInput) {
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
  ): Handler<DeleteGlobalReplicationGroupCommandInput, DeleteGlobalReplicationGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DeleteGlobalReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteGlobalReplicationGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteGlobalReplicationGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteGlobalReplicationGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteGlobalReplicationGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteGlobalReplicationGroupCommandOutput> {
    return deserializeAws_queryDeleteGlobalReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
