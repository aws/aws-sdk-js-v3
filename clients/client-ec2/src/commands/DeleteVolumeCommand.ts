// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVolumeRequest } from "../models/models_3";
import { de_DeleteVolumeCommand, se_DeleteVolumeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVolumeCommand}.
 */
export interface DeleteVolumeCommandInput extends DeleteVolumeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVolumeCommand}.
 */
export interface DeleteVolumeCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified EBS volume. The volume must be in the <code>available</code> state
 *       (not attached to an instance).</p>
 *          <p>The volume can remain in the <code>deleting</code> state for several minutes.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-deleting-volume.html">Delete an Amazon EBS volume</a> in the
 *         <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteVolumeRequest
 *   VolumeId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteVolumeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVolumeCommandInput - {@link DeleteVolumeCommandInput}
 * @returns {@link DeleteVolumeCommandOutput}
 * @see {@link DeleteVolumeCommandInput} for command's `input` shape.
 * @see {@link DeleteVolumeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To delete a volume
 * ```javascript
 * // This example deletes an available volume with the volume ID of ``vol-049df61146c4d7901``. If the command succeeds, no output is returned.
 * const input = {
 *   "VolumeId": "vol-049df61146c4d7901"
 * };
 * const command = new DeleteVolumeCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-volume-1472503111160
 * ```
 *
 */
export class DeleteVolumeCommand extends $Command
  .classBuilder<
    DeleteVolumeCommandInput,
    DeleteVolumeCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DeleteVolume", {})
  .n("EC2Client", "DeleteVolumeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVolumeCommand)
  .de(de_DeleteVolumeCommand)
  .build() {}
