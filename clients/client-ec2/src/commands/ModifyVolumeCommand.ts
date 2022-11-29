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
  ModifyVolumeRequest,
  ModifyVolumeRequestFilterSensitiveLog,
  ModifyVolumeResult,
  ModifyVolumeResultFilterSensitiveLog,
} from "../models/models_6";
import { deserializeAws_ec2ModifyVolumeCommand, serializeAws_ec2ModifyVolumeCommand } from "../protocols/Aws_ec2";

export interface ModifyVolumeCommandInput extends ModifyVolumeRequest {}
export interface ModifyVolumeCommandOutput extends ModifyVolumeResult, __MetadataBearer {}

/**
 * <p>You can modify several parameters of an existing EBS volume, including volume size, volume
 *       type, and IOPS capacity. If your EBS volume is attached to a current-generation EC2 instance
 *       type, you might be able to apply these changes without stopping the instance or detaching the
 *       volume from it. For more information about modifying EBS volumes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modify-volume.html">Amazon EBS Elastic Volumes</a> (Linux instances)
 *       or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-modify-volume.html">Amazon EBS Elastic Volumes</a> (Windows instances).</p>
 *          <p>When you complete a resize operation on your volume, you need to extend the volume's
 *       file-system size to take advantage of the new storage capacity. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html#recognize-expanded-volume-linux">Extend a Linux file system</a> or
 *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-expand-volume.html#recognize-expanded-volume-windows">Extend a Windows file system</a>.</p>
 *          <p> You can use CloudWatch Events to check the status of a modification to an EBS volume. For
 *       information about CloudWatch Events, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/">Amazon CloudWatch Events User Guide</a>. You can also track the status of a
 *       modification using <a>DescribeVolumesModifications</a>. For information
 *       about tracking status changes using either method, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-volume-modifications.html">Monitor the progress of volume modifications</a>.</p>
 *          <p>With previous-generation instance types, resizing an EBS volume might require detaching and
 *       reattaching the volume or stopping and restarting the instance.</p>
 *          <p>After modifying a volume, you must wait at least six hours and ensure that the volume
 *       is in the <code>in-use</code> or <code>available</code> state before you can modify the same
 *       volume. This is sometimes referred to as a cooldown period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVolumeCommandInput} for command's `input` shape.
 * @see {@link ModifyVolumeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifyVolumeCommand extends $Command<
  ModifyVolumeCommandInput,
  ModifyVolumeCommandOutput,
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
    this.middlewareStack.use(getEndpointPlugin(configuration, ModifyVolumeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVolumeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyVolumeResultFilterSensitiveLog,
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
