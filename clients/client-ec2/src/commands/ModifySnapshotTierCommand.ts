// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifySnapshotTierRequest, ModifySnapshotTierResult } from "../models/models_7";
import { de_ModifySnapshotTierCommand, se_ModifySnapshotTierCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifySnapshotTierCommand}.
 */
export interface ModifySnapshotTierCommandInput extends ModifySnapshotTierRequest {}
/**
 * @public
 *
 * The output of {@link ModifySnapshotTierCommand}.
 */
export interface ModifySnapshotTierCommandOutput extends ModifySnapshotTierResult, __MetadataBearer {}

/**
 * <p>Archives an Amazon EBS snapshot. When you archive a snapshot, it is converted to a full
 *       snapshot that includes all of the blocks of data that were written to the volume at the
 *       time the snapshot was created, and moved from the standard tier to the archive
 *       tier. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/snapshot-archive.html">Archive Amazon EBS snapshots</a>
 *       in the <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifySnapshotTierCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifySnapshotTierCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifySnapshotTierRequest
 *   SnapshotId: "STRING_VALUE", // required
 *   StorageTier: "archive",
 *   DryRun: true || false,
 * };
 * const command = new ModifySnapshotTierCommand(input);
 * const response = await client.send(command);
 * // { // ModifySnapshotTierResult
 * //   SnapshotId: "STRING_VALUE",
 * //   TieringStartTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param ModifySnapshotTierCommandInput - {@link ModifySnapshotTierCommandInput}
 * @returns {@link ModifySnapshotTierCommandOutput}
 * @see {@link ModifySnapshotTierCommandInput} for command's `input` shape.
 * @see {@link ModifySnapshotTierCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifySnapshotTierCommand extends $Command
  .classBuilder<
    ModifySnapshotTierCommandInput,
    ModifySnapshotTierCommandOutput,
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
  .s("AmazonEC2", "ModifySnapshotTier", {})
  .n("EC2Client", "ModifySnapshotTierCommand")
  .f(void 0, void 0)
  .ser(se_ModifySnapshotTierCommand)
  .de(de_ModifySnapshotTierCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifySnapshotTierRequest;
      output: ModifySnapshotTierResult;
    };
    sdk: {
      input: ModifySnapshotTierCommandInput;
      output: ModifySnapshotTierCommandOutput;
    };
  };
}
