import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteDiskSnapshotRequest, DeleteDiskSnapshotResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDiskSnapshotCommand,
  serializeAws_json1_1DeleteDiskSnapshotCommand,
} from "../protocols/Aws_json1_1";
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

export type DeleteDiskSnapshotCommandInput = DeleteDiskSnapshotRequest;
export type DeleteDiskSnapshotCommandOutput = DeleteDiskSnapshotResult & __MetadataBearer;

/**
 * <p>Deletes the specified disk snapshot.</p>
 *          <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the
 *       blocks on the device that have changed since your last snapshot are saved in the new snapshot.
 *       When you delete a snapshot, only the data not needed for any other snapshot is removed. So
 *       regardless of which prior snapshots have been deleted, all active snapshots will have access
 *       to all the information needed to restore the disk.</p>
 *          <p>The <code>delete disk snapshot</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>disk snapshot name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class DeleteDiskSnapshotCommand extends $Command<
  DeleteDiskSnapshotCommandInput,
  DeleteDiskSnapshotCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDiskSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDiskSnapshotCommandInput, DeleteDiskSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteDiskSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDiskSnapshotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDiskSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDiskSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDiskSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDiskSnapshotCommandOutput> {
    return deserializeAws_json1_1DeleteDiskSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
