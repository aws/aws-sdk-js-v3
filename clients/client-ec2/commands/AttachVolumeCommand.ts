import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AttachVolumeRequest, VolumeAttachment } from "../models/models_0";
import { deserializeAws_ec2AttachVolumeCommand, serializeAws_ec2AttachVolumeCommand } from "../protocols/Aws_ec2";
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

export type AttachVolumeCommandInput = AttachVolumeRequest;
export type AttachVolumeCommandOutput = VolumeAttachment & __MetadataBearer;

/**
 * <p>Attaches an EBS volume to a running or stopped instance and exposes it to the instance
 *       with the specified device name.</p>
 *          <p>Encrypted EBS volumes must be attached to instances that support Amazon EBS encryption. For
 *       more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>After you attach an EBS volume, you must make it available. For more information, see
 *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html">Making an EBS volume available for use</a>.</p>
 *          <p>If a volume has an AWS Marketplace product code:</p>
 *          <ul>
 *             <li>
 *                <p>The volume can be attached only to a stopped instance.</p>
 *             </li>
 *             <li>
 *                <p>AWS Marketplace product codes are copied from the volume to the instance.</p>
 *             </li>
 *             <li>
 *                <p>You must be subscribed to the product.</p>
 *             </li>
 *             <li>
 *                <p>The instance type and operating system of the instance must support the product. For
 *           example, you can't detach a volume from a Windows instance and attach it to a Linux
 *           instance.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-attaching-volume.html">Attaching Amazon EBS volumes</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class AttachVolumeCommand extends $Command<
  AttachVolumeCommandInput,
  AttachVolumeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachVolumeCommandInput) {
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
  ): Handler<AttachVolumeCommandInput, AttachVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AttachVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachVolumeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: VolumeAttachment.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AttachVolumeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachVolumeCommandOutput> {
    return deserializeAws_ec2AttachVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
