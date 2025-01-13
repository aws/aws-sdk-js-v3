// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSnapshotRequest } from "../models/models_3";
import { de_DeleteSnapshotCommand, se_DeleteSnapshotCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSnapshotCommand}.
 */
export interface DeleteSnapshotCommandInput extends DeleteSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSnapshotCommand}.
 */
export interface DeleteSnapshotCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified snapshot.</p>
 *          <p>When you make periodic snapshots of a volume, the snapshots are incremental, and only the
 *       blocks on the device that have changed since your last snapshot are saved in the new snapshot.
 *       When you delete a snapshot, only the data not needed for any other snapshot is removed. So
 *       regardless of which prior snapshots have been deleted, all active snapshots will have access
 *       to all the information needed to restore the volume.</p>
 *          <p>You cannot delete a snapshot of the root device of an EBS volume used by a registered AMI.
 *       You must first deregister the AMI before you can delete the snapshot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-deleting-snapshot.html">Delete an Amazon EBS snapshot</a> in the
 *         <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteSnapshotRequest
 *   SnapshotId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteSnapshotCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSnapshotCommandInput - {@link DeleteSnapshotCommandInput}
 * @returns {@link DeleteSnapshotCommandOutput}
 * @see {@link DeleteSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To delete a snapshot
 * ```javascript
 * // This example deletes a snapshot with the snapshot ID of ``snap-1234567890abcdef0``. If the command succeeds, no output is returned.
 * const input = {
 *   "SnapshotId": "snap-1234567890abcdef0"
 * };
 * const command = new DeleteSnapshotCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-snapshot-1472503042567
 * ```
 *
 */
export class DeleteSnapshotCommand extends $Command
  .classBuilder<
    DeleteSnapshotCommandInput,
    DeleteSnapshotCommandOutput,
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
  .s("AmazonEC2", "DeleteSnapshot", {})
  .n("EC2Client", "DeleteSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSnapshotCommand)
  .de(de_DeleteSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSnapshotRequest;
      output: {};
    };
    sdk: {
      input: DeleteSnapshotCommandInput;
      output: DeleteSnapshotCommandOutput;
    };
  };
}
