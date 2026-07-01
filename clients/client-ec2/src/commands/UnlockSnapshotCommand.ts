// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UnlockSnapshotRequest, UnlockSnapshotResult } from "../models/models_7";
import { UnlockSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UnlockSnapshotCommand}.
 */
export interface UnlockSnapshotCommandInput extends UnlockSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link UnlockSnapshotCommand}.
 */
export interface UnlockSnapshotCommandOutput extends UnlockSnapshotResult, __MetadataBearer {}

/**
 * <p>Unlocks a snapshot that is locked in governance mode or that is locked in compliance mode
 *       but still in the cooling-off period. You can't unlock a snapshot that is locked in compliance
 *       mode after the cooling-off period has expired.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnlockSnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnlockSnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // UnlockSnapshotRequest
 *   SnapshotId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new UnlockSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // UnlockSnapshotResult
 * //   SnapshotId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UnlockSnapshotCommandInput - {@link UnlockSnapshotCommandInput}
 * @returns {@link UnlockSnapshotCommandOutput}
 * @see {@link UnlockSnapshotCommandInput} for command's `input` shape.
 * @see {@link UnlockSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class UnlockSnapshotCommand extends command<UnlockSnapshotCommandInput, UnlockSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "UnlockSnapshot",
  UnlockSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnlockSnapshotRequest;
      output: UnlockSnapshotResult;
    };
    sdk: {
      input: UnlockSnapshotCommandInput;
      output: UnlockSnapshotCommandOutput;
    };
  };
}
