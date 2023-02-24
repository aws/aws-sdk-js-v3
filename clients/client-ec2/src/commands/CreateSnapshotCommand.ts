// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  CreateSnapshotRequest,
  CreateSnapshotRequestFilterSensitiveLog,
  Snapshot,
  SnapshotFilterSensitiveLog,
} from "../models/models_2";
import { deserializeAws_ec2CreateSnapshotCommand, serializeAws_ec2CreateSnapshotCommand } from "../protocols/Aws_ec2";

export interface CreateSnapshotCommandInput extends CreateSnapshotRequest {}
export interface CreateSnapshotCommandOutput extends Snapshot, __MetadataBearer {}

/**
 * <p>Creates a snapshot of an EBS volume and stores it in Amazon S3. You can use snapshots for
 *   	backups, to make copies of EBS volumes, and to save data before shutting down an
 *   	instance.</p>
 *          <p>You can create snapshots of volumes in a Region and volumes on an Outpost. If you
 *     	create a snapshot of a volume in a Region, the snapshot must be stored in the same
 *     	Region as the volume. If you create a snapshot of a volume on an Outpost, the snapshot
 *     	can be stored on the same Outpost as the volume, or in the Region for that Outpost.</p>
 *          <p>When a snapshot is created, any Amazon Web Services Marketplace product codes that are associated with the
 *       source volume are propagated to the snapshot.</p>
 *          <p>You can take a snapshot of an attached volume that is in use. However, snapshots only
 *       capture data that has been written to your Amazon EBS volume at the time the snapshot command is
 *       issued; this might exclude any data that has been cached by any applications or the operating
 *       system. If you can pause any file systems on the volume long enough to take a snapshot, your
 *       snapshot should be complete. However, if you cannot pause all file writes to the volume, you
 *       should unmount the volume from within the instance, issue the snapshot command, and then
 *       remount the volume to ensure a consistent and complete snapshot. You may remount and use your
 *       volume while the snapshot status is <code>pending</code>.</p>
 *          <p>To create a snapshot for Amazon EBS volumes that serve as root devices, you should stop the
 *       instance before taking the snapshot.</p>
 *          <p>Snapshots that are taken from encrypted volumes are automatically encrypted. Volumes that
 *       are created from encrypted snapshots are also automatically encrypted. Your encrypted volumes
 *       and any associated snapshots always remain protected.</p>
 *          <p>You can tag your snapshots during creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tag your Amazon EC2
 *         resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html">Amazon Elastic Block Store</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateSnapshotCommand extends $Command<
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: CreateSnapshotCommandInput) {
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
  ): Handler<CreateSnapshotCommandInput, CreateSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SnapshotFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSnapshotCommandOutput> {
    return deserializeAws_ec2CreateSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
