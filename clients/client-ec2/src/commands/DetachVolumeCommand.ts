// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { VolumeAttachment } from "../models/models_0";
import type { DetachVolumeRequest } from "../models/models_5";
import { DetachVolume } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Detaches an EBS volume from an instance. Make sure to unmount any file systems on the
 *       device within your operating system before detaching the volume. Failure to do so can result
 *       in the volume becoming stuck in the <code>busy</code> state while detaching. If this happens,
 *       detachment can be delayed indefinitely until you unmount the volume, force detachment, reboot
 *       the instance, or all three. If an EBS volume is the root device of an instance, it can't be
 *       detached while the instance is running. To detach the root volume, stop the instance
 *       first.</p>
 *          <p>When a volume with an Amazon Web Services Marketplace product code is detached from an instance, the
 *       product code is no longer associated with the instance.</p>
 *          <p>You can't detach or force detach volumes that are attached to Amazon Web Services-managed resources.
 *       Attempting to do this results in the <code>UnsupportedOperationException</code>
 *       exception.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-detaching-volume.html">Detach an Amazon EBS volume</a> in the
 *         <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
 * //   DeleteOnTermination: true || false,
 * //   AssociatedResource: "STRING_VALUE",
 * //   InstanceOwningService: "STRING_VALUE",
 * //   VolumeId: "STRING_VALUE",
 * //   InstanceId: "STRING_VALUE",
 * //   Device: "STRING_VALUE",
 * //   State: "attaching" || "attached" || "detaching" || "detached" || "busy",
 * //   AttachTime: new Date("TIMESTAMP"),
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
 *
 * @example To detach a volume from an instance
 * ```javascript
 * // This example detaches the volume (``vol-049df61146c4d7901``) from the instance it is attached to.
 * const input = {
 *   VolumeId: "vol-1234567890abcdef0"
 * };
 * const command = new DetachVolumeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AttachTime: "2014-02-27T19:23:06.000Z",
 *   Device: "/dev/sdb",
 *   InstanceId: "i-1234567890abcdef0",
 *   State: "detaching",
 *   VolumeId: "vol-049df61146c4d7901"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DetachVolumeCommand extends $Command
  .classBuilder<
    DetachVolumeCommandInput,
    DetachVolumeCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DetachVolume", {})
  .n("EC2Client", "DetachVolumeCommand")
  .sc(DetachVolume)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachVolumeRequest;
      output: VolumeAttachment;
    };
    sdk: {
      input: DetachVolumeCommandInput;
      output: DetachVolumeCommandOutput;
    };
  };
}
