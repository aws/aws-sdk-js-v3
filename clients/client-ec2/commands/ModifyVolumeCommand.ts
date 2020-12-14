import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVolumeRequest, ModifyVolumeResult } from "../models/models_4";
import { deserializeAws_ec2ModifyVolumeCommand, serializeAws_ec2ModifyVolumeCommand } from "../protocols/Aws_ec2";
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

export type ModifyVolumeCommandInput = ModifyVolumeRequest;
export type ModifyVolumeCommandOutput = ModifyVolumeResult & __MetadataBearer;

/**
 * <p>You can modify several parameters of an existing EBS volume, including volume size, volume
 *       type, and IOPS capacity. If your EBS volume is attached to a current-generation EC2 instance
 *       type, you might be able to apply these changes without stopping the instance or detaching the
 *       volume from it. For more information about modifying an EBS volume running Linux, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html">Modifying the size, IOPS, or
 *         type of an EBS volume on Linux</a>. For more information about modifying an EBS volume
 *       running Windows, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-expand-volume.html">Modifying the size, IOPS, or type of an EBS volume on Windows</a>.</p>
 *          <p> When you complete a resize operation on your volume, you need to extend the volume's
 *       file-system size to take advantage of the new storage capacity. For information about
 *       extending a Linux file system, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html#recognize-expanded-volume-linux">Extending a Linux
 *         file system</a>. For information about extending a Windows file system, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-expand-volume.html#recognize-expanded-volume-windows">Extending a
 *         Windows file system</a>. </p>
 *          <p> You can use CloudWatch Events to check the status of a modification to an EBS volume. For
 *       information about CloudWatch Events, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/">Amazon CloudWatch Events User Guide</a>. You can also track the status of a
 *       modification using <a>DescribeVolumesModifications</a>. For information
 *       about tracking status changes using either method, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html#monitoring_mods">Monitoring volume
 *         modifications</a>. </p>
 *          <p>With previous-generation instance types, resizing an EBS volume might require detaching and
 *       reattaching the volume or stopping and restarting the instance. For more information, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modify-volume.html">Amazon EBS Elastic
 *           Volumes</a> (Linux) or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-modify-volume.html">Amazon EBS Elastic Volumes</a> (Windows).</p>
 *          <p>If you reach the maximum volume modification rate per volume limit, you will need to wait
 *       at least six hours before applying further modifications to the affected EBS volume.</p>
 */
export class ModifyVolumeCommand extends $Command<
  ModifyVolumeCommandInput,
  ModifyVolumeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyVolumeCommandInput) {
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
  ): Handler<ModifyVolumeCommandInput, ModifyVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVolumeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyVolumeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVolumeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyVolumeCommandOutput> {
    return deserializeAws_ec2ModifyVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
