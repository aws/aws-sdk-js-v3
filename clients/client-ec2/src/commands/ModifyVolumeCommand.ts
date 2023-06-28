// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVolumeRequest, ModifyVolumeResult } from "../models/models_6";
import { de_ModifyVolumeCommand, se_ModifyVolumeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyVolumeCommand}.
 */
export interface ModifyVolumeCommandInput extends ModifyVolumeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVolumeCommand}.
 */
export interface ModifyVolumeCommandOutput extends ModifyVolumeResult, __MetadataBearer {}

/**
 * @public
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
 * const input = { // ModifyVolumeRequest
 *   DryRun: true || false,
 *   VolumeId: "STRING_VALUE", // required
 *   Size: Number("int"),
 *   VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 *   Iops: Number("int"),
 *   Throughput: Number("int"),
 *   MultiAttachEnabled: true || false,
 * };
 * const command = new ModifyVolumeCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVolumeResult
 * //   VolumeModification: { // VolumeModification
 * //     VolumeId: "STRING_VALUE",
 * //     ModificationState: "modifying" || "optimizing" || "completed" || "failed",
 * //     StatusMessage: "STRING_VALUE",
 * //     TargetSize: Number("int"),
 * //     TargetIops: Number("int"),
 * //     TargetVolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 * //     TargetThroughput: Number("int"),
 * //     TargetMultiAttachEnabled: true || false,
 * //     OriginalSize: Number("int"),
 * //     OriginalIops: Number("int"),
 * //     OriginalVolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 * //     OriginalThroughput: Number("int"),
 * //     OriginalMultiAttachEnabled: true || false,
 * //     Progress: Number("long"),
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyVolumeCommandInput - {@link ModifyVolumeCommandInput}
 * @returns {@link ModifyVolumeCommandOutput}
 * @see {@link ModifyVolumeCommandInput} for command's `input` shape.
 * @see {@link ModifyVolumeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ModifyVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyVolumeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyVolumeCommandOutput> {
    return de_ModifyVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
