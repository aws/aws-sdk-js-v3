import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteSnapshotRequest } from "../models/models_2";
import { deserializeAws_ec2DeleteSnapshotCommand, serializeAws_ec2DeleteSnapshotCommand } from "../protocols/Aws_ec2";
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

export type DeleteSnapshotCommandInput = DeleteSnapshotRequest;
export type DeleteSnapshotCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the specified snapshot.</p>
 *          <p>When you make periodic snapshots of a volume, the snapshots are incremental, and only the
 *       blocks on the device that have changed since your last snapshot are saved in the new snapshot.
 *       When you delete a snapshot, only the data not needed for any other snapshot is removed. So
 *       regardless of which prior snapshots have been deleted, all active snapshots will have access
 *       to all the information needed to restore the volume.</p>
 *          <p>You cannot delete a snapshot of the root device of an EBS volume used by a registered AMI.
 *       You must first de-register the AMI before you can delete the snapshot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-deleting-snapshot.html">Deleting an Amazon EBS snapshot</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class DeleteSnapshotCommand extends $Command<
  DeleteSnapshotCommandInput,
  DeleteSnapshotCommandOutput,
  EC2ClientResolvedConfig
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
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSnapshotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSnapshotCommandOutput> {
    return deserializeAws_ec2DeleteSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
