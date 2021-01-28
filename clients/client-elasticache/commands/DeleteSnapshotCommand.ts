import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteSnapshotMessage, DeleteSnapshotResult } from "../models/models_0";
import {
  deserializeAws_queryDeleteSnapshotCommand,
  serializeAws_queryDeleteSnapshotCommand,
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

export type DeleteSnapshotCommandInput = DeleteSnapshotMessage;
export type DeleteSnapshotCommandOutput = DeleteSnapshotResult & __MetadataBearer;

/**
 * <p>Deletes an existing snapshot. When you receive a
 *             successful response from this operation, ElastiCache immediately begins deleting the snapshot;
 *             you cannot cancel or revert this operation.</p>
 *
 *         <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 */
export class DeleteSnapshotCommand extends $Command<
  DeleteSnapshotCommandInput,
  DeleteSnapshotCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSnapshotCommandInput) {
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
  ): Handler<DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DeleteSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSnapshotMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSnapshotCommandOutput> {
    return deserializeAws_queryDeleteSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
