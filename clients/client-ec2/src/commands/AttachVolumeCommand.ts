// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AttachVolumeRequest, VolumeAttachment } from "../models/models_0";
import { AttachVolume$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Attaches an Amazon EBS volume to a `running` or `stopped` instance, and exposes it to the instance with the specified device name.
 *
 * > **Note:** The maximum number of Amazon EBS volumes that you can attach to an instance depends on the instance type. If you exceed the volume attachment limit for an instance type, the attachment request fails with the `AttachmentLimitExceeded` error. For more information, see [Instance volume limits](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/volume_limits.html).
 *
 * After you attach an EBS volume, you must make it available for use. For more information, see [Make an EBS volume available for use](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-using-volumes.html).
 *
 * If a volume has an Amazon Web Services Marketplace product code:
 *
 * - The volume can be attached only to a stopped instance.
 * - Amazon Web Services Marketplace product codes are copied from the volume to the instance.
 * - You must be subscribed to the product.
 * - The instance type and operating system of the instance must support the product. For example, you can't detach a volume from a Windows instance and attach it to a Linux instance.
 *
 * For more information, see [Attach an Amazon EBS volume to an instance](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-attaching-volume.html) in the *Amazon EBS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AttachVolumeRequest
 *   Device: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   VolumeId: "STRING_VALUE", // required
 *   EbsCardIndex: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new AttachVolumeCommand(input);
 * const response = await client.send(command);
 * // { // VolumeAttachment
 * //   DeleteOnTermination: true || false,
 * //   AssociatedResource: "STRING_VALUE",
 * //   InstanceOwningService: "STRING_VALUE",
 * //   EbsCardIndex: Number("int"),
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
 *
 * Base exception class for all service exceptions from EC2 service.
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
export class AttachVolumeCommand extends command<AttachVolumeCommandInput, AttachVolumeCommandOutput>(
  _ep0,
  _mw0,
  "AttachVolume",
  AttachVolume$
) {
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
