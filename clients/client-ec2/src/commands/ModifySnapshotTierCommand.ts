// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifySnapshotTierRequest, ModifySnapshotTierResult } from "../models/models_7";
import { ModifySnapshotTier$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
export class ModifySnapshotTierCommand extends command<ModifySnapshotTierCommandInput, ModifySnapshotTierCommandOutput>(
  _ep0,
  _mw0,
  "ModifySnapshotTier",
  ModifySnapshotTier$
) {
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
