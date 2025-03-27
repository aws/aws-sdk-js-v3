// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AttachVolumeRequest, VolumeAttachment } from "../models/models_0";
import { de_AttachVolumeCommand, se_AttachVolumeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachVolumeCommand}.
 */
export interface AttachVolumeCommandInput extends AttachVolumeRequest {}
/**
 * @public
 *
 * The output of {@link AttachVolumeCommand}.
 */
export interface AttachVolumeCommandOutput extends VolumeAttachment, __MetadataBearer {}

/**
 * <p>Attaches an EBS volume to a running or stopped instance and exposes it to the instance
 *       with the specified device name.</p>
 *          <p>Encrypted EBS volumes must be attached to instances that support Amazon EBS encryption. For
 *       more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html">Amazon EBS encryption</a> in the <i>Amazon EBS User Guide</i>.</p>
 *          <p>After you attach an EBS volume, you must make it available. For more information, see
 *       <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-using-volumes.html">Make an EBS volume available for use</a>.</p>
 *          <p>If a volume has an Amazon Web Services Marketplace product code:</p>
 *          <ul>
 *             <li>
 *                <p>The volume can be attached only to a stopped instance.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Marketplace product codes are copied from the volume to the instance.</p>
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
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-attaching-volume.html">Attach an Amazon EBS volume to an instance</a> in the
 *         <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AttachVolumeRequest
 *   Device: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   VolumeId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new AttachVolumeCommand(input);
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
 * @param AttachVolumeCommandInput - {@link AttachVolumeCommandInput}
 * @returns {@link AttachVolumeCommandOutput}
 * @see {@link AttachVolumeCommandInput} for command's `input` shape.
 * @see {@link AttachVolumeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To attach a volume to an instance
 * ```javascript
 * // This example attaches a volume (``vol-1234567890abcdef0``) to an instance (``i-01474ef662b89480``) as ``/dev/sdf``.
 * const input = {
 *   Device: "/dev/sdf",
 *   InstanceId: "i-01474ef662b89480",
 *   VolumeId: "vol-1234567890abcdef0"
 * };
 * const command = new AttachVolumeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AttachTime: "2016-08-29T18:52:32.724Z",
 *   Device: "/dev/sdf",
 *   InstanceId: "i-01474ef662b89480",
 *   State: "attaching",
 *   VolumeId: "vol-1234567890abcdef0"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AttachVolumeCommand extends $Command
  .classBuilder<
    AttachVolumeCommandInput,
    AttachVolumeCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "AttachVolume", {})
  .n("EC2Client", "AttachVolumeCommand")
  .f(void 0, void 0)
  .ser(se_AttachVolumeCommand)
  .de(de_AttachVolumeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachVolumeRequest;
      output: VolumeAttachment;
    };
    sdk: {
      input: AttachVolumeCommandInput;
      output: AttachVolumeCommandOutput;
    };
  };
}
