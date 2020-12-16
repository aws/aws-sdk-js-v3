import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DeleteDBClusterSnapshotMessage, DeleteDBClusterSnapshotResult } from "../models/models_0";
import {
  deserializeAws_queryDeleteDBClusterSnapshotCommand,
  serializeAws_queryDeleteDBClusterSnapshotCommand,
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

export type DeleteDBClusterSnapshotCommandInput = DeleteDBClusterSnapshotMessage;
export type DeleteDBClusterSnapshotCommandOutput = DeleteDBClusterSnapshotResult & __MetadataBearer;

/**
 * <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is
 *       terminated.</p>
 *          <note>
 *             <p>The DB cluster snapshot must be in the <code>available</code> state to be
 *         deleted.</p>
 *          </note>
 */
export class DeleteDBClusterSnapshotCommand extends $Command<
  DeleteDBClusterSnapshotCommandInput,
  DeleteDBClusterSnapshotCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDBClusterSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDBClusterSnapshotCommandInput, DeleteDBClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DeleteDBClusterSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDBClusterSnapshotMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDBClusterSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDBClusterSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteDBClusterSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDBClusterSnapshotCommandOutput> {
    return deserializeAws_queryDeleteDBClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
