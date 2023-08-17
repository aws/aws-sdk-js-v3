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
import { VolumeAttachment } from "../models/models_0";
import { DetachVolumeRequest } from "../models/models_5";
import { de_DetachVolumeCommand, se_DetachVolumeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DetachVolumeCommand}.
 */
export interface DetachVolumeCommandInput extends DetachVolumeRequest {}
/**
 * @public
 *
 * The output of {@link DetachVolumeCommand}.
 */
export interface DetachVolumeCommandOutput extends VolumeAttachment, __MetadataBearer {}

/**
 * @public
 * <p>Detaches an EBS volume from an instance. Make sure to unmount any file systems on the
 *       device within your operating system before detaching the volume. Failure to do so can result
 *       in the volume becoming stuck in the <code>busy</code> state while detaching. If this happens,
 *       detachment can be delayed indefinitely until you unmount the volume, force detachment, reboot
 *       the instance, or all three. If an EBS volume is the root device of an instance, it can't be
 *       detached while the instance is running. To detach the root volume, stop the instance
 *       first.</p>
 *          <p>When a volume with an Amazon Web Services Marketplace product code is detached from an instance, the
 *       product code is no longer associated with the instance.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-detaching-volume.html">Detach an Amazon EBS volume</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DetachVolumeRequest
 *   Device: "STRING_VALUE",
 *   Force: true || false,
 *   InstanceId: "STRING_VALUE",
 *   VolumeId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DetachVolumeCommand(input);
 * const response = await client.send(command);
 * // { // VolumeAttachment
 * //   AttachTime: new Date("TIMESTAMP"),
 * //   Device: "STRING_VALUE",
 * //   InstanceId: "STRING_VALUE",
 * //   State: "attaching" || "attached" || "detaching" || "detached" || "busy",
 * //   VolumeId: "STRING_VALUE",
 * //   DeleteOnTermination: true || false,
 * // };
 *
 * ```
 *
 * @param DetachVolumeCommandInput - {@link DetachVolumeCommandInput}
 * @returns {@link DetachVolumeCommandOutput}
 * @see {@link DetachVolumeCommandInput} for command's `input` shape.
 * @see {@link DetachVolumeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To detach a volume from an instance
 * ```javascript
 * // This example detaches the volume (``vol-049df61146c4d7901``) from the instance it is attached to.
 * const input = {
 *   "VolumeId": "vol-1234567890abcdef0"
 * };
 * const command = new DetachVolumeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AttachTime": "2014-02-27T19:23:06.000Z",
 *   "Device": "/dev/sdb",
 *   "InstanceId": "i-1234567890abcdef0",
 *   "State": "detaching",
 *   "VolumeId": "vol-049df61146c4d7901"
 * }
 * *\/
 * // example id: to-detach-a-volume-from-an-instance-1472507977694
 * ```
 *
 */
export class DetachVolumeCommand extends $Command<
  DetachVolumeCommandInput,
  DetachVolumeCommandOutput,
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
  constructor(readonly input: DetachVolumeCommandInput) {
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
  ): Handler<DetachVolumeCommandInput, DetachVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DetachVolumeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DetachVolumeCommand";
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
  private serialize(input: DetachVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DetachVolumeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachVolumeCommandOutput> {
    return de_DetachVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
