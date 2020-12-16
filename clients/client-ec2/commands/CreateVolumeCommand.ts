import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVolumeRequest, Volume } from "../models/models_1";
import { deserializeAws_ec2CreateVolumeCommand, serializeAws_ec2CreateVolumeCommand } from "../protocols/Aws_ec2";
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

export type CreateVolumeCommandInput = CreateVolumeRequest;
export type CreateVolumeCommandOutput = Volume & __MetadataBearer;

/**
 * <p>Creates an EBS volume that can be attached to an instance in the same Availability Zone.</p>
 *          <p>You can create a new empty volume or restore a volume from an EBS snapshot.
 *       Any AWS Marketplace product codes from the snapshot are propagated to the volume.</p>
 *          <p>You can create encrypted volumes. Encrypted volumes must be attached to instances that
 *       support Amazon EBS encryption. Volumes that are created from encrypted snapshots are also automatically
 *       encrypted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>You can tag your volumes during creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2
 *         resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-volume.html">Creating an Amazon EBS volume</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class CreateVolumeCommand extends $Command<
  CreateVolumeCommandInput,
  CreateVolumeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVolumeCommandInput) {
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
  ): Handler<CreateVolumeCommandInput, CreateVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVolumeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Volume.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateVolumeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVolumeCommandOutput> {
    return deserializeAws_ec2CreateVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
