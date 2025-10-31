// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVolumeRequest, ModifyVolumeResult } from "../models/models_8";
import { de_ModifyVolumeCommand, se_ModifyVolumeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>You can modify several parameters of an existing EBS volume, including volume size, volume
 *       type, and IOPS capacity. If your EBS volume is attached to a current-generation EC2 instance
 *       type, you might be able to apply these changes without stopping the instance or detaching the
 *       volume from it. For more information about modifying EBS volumes, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-modify-volume.html">Amazon EBS Elastic Volumes</a>
 *       in the <i>Amazon EBS User Guide</i>.</p>
 *          <p>When you complete a resize operation on your volume, you need to extend the volume's
 *       file-system size to take advantage of the new storage capacity. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/recognize-expanded-volume-linux.html">Extend the file system</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/monitoring-volume-modifications.html">Monitor the progress of volume modifications</a> in the <i>Amazon EBS User Guide</i>.</p>
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
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
 *
 * @public
 */
export class ModifyVolumeCommand extends $Command
  .classBuilder<
    ModifyVolumeCommandInput,
    ModifyVolumeCommandOutput,
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
  .s("AmazonEC2", "ModifyVolume", {})
  .n("EC2Client", "ModifyVolumeCommand")
  .f(void 0, void 0)
  .ser(se_ModifyVolumeCommand)
  .de(de_ModifyVolumeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVolumeRequest;
      output: ModifyVolumeResult;
    };
    sdk: {
      input: ModifyVolumeCommandInput;
      output: ModifyVolumeCommandOutput;
    };
  };
}
