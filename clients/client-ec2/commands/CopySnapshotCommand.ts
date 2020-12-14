import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CopySnapshotRequest, CopySnapshotResult } from "../models/models_0";
import { deserializeAws_ec2CopySnapshotCommand, serializeAws_ec2CopySnapshotCommand } from "../protocols/Aws_ec2";
import { getCopySnapshotPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-ec2";
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

export type CopySnapshotCommandInput = CopySnapshotRequest;
export type CopySnapshotCommandOutput = CopySnapshotResult & __MetadataBearer;

/**
 * <p>Copies a point-in-time snapshot of an EBS volume and stores it in Amazon S3. You can copy the
 *       snapshot within the same Region or from one Region to another. You can use the snapshot to
 *       create EBS volumes or Amazon Machine Images (AMIs).</p>
 *          <p>Copies of encrypted EBS snapshots remain encrypted. Copies of unencrypted snapshots remain
 *       unencrypted, unless you enable encryption for the snapshot copy operation. By default, encrypted
 *       snapshot copies use the default AWS Key Management Service (AWS KMS) customer master key (CMK); however, you can specify a
 *       different CMK.</p>
 *          <p>To copy an encrypted snapshot that has been shared from another account, you must have
 *       permissions for the CMK used to encrypt the snapshot.</p>
 *          <p>Snapshots created by copying another snapshot have an arbitrary volume ID that should not
 *       be used for any purpose.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-copy-snapshot.html">Copying an Amazon EBS snapshot</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class CopySnapshotCommand extends $Command<
  CopySnapshotCommandInput,
  CopySnapshotCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CopySnapshotCommandInput) {
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
  ): Handler<CopySnapshotCommandInput, CopySnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getCopySnapshotPresignedUrlPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CopySnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopySnapshotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CopySnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopySnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CopySnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopySnapshotCommandOutput> {
    return deserializeAws_ec2CopySnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
