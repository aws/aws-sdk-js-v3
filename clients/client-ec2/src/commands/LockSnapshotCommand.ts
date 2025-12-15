// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { LockSnapshotRequest, LockSnapshotResult } from "../models/models_6";
import { LockSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link LockSnapshotCommand}.
 */
export interface LockSnapshotCommandInput extends LockSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link LockSnapshotCommand}.
 */
export interface LockSnapshotCommandOutput extends LockSnapshotResult, __MetadataBearer {}

/**
 * <p>Locks an Amazon EBS snapshot in either <i>governance</i> or <i>compliance</i>
 *       mode to protect it against accidental or malicious deletions for a specific duration. A locked snapshot
 *       can't be deleted.</p>
 *          <p>You can also use this action to modify the lock settings for a snapshot that is already locked. The
 *       allowed modifications depend on the lock mode and lock state:</p>
 *          <ul>
 *             <li>
 *                <p>If the snapshot is locked in governance mode, you can modify the lock mode and the lock duration
 *             or lock expiration date.</p>
 *             </li>
 *             <li>
 *                <p>If the snapshot is locked in compliance mode and it is in the cooling-off period, you can modify
 *             the lock mode and the lock duration or lock expiration date.</p>
 *             </li>
 *             <li>
 *                <p>If the snapshot is locked in compliance mode and the cooling-off period has lapsed, you can
 *             only increase the lock duration or extend the lock expiration date.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, LockSnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, LockSnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // LockSnapshotRequest
 *   SnapshotId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   LockMode: "compliance" || "governance", // required
 *   CoolOffPeriod: Number("int"),
 *   LockDuration: Number("int"),
 *   ExpirationDate: new Date("TIMESTAMP"),
 * };
 * const command = new LockSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // LockSnapshotResult
 * //   SnapshotId: "STRING_VALUE",
 * //   LockState: "compliance" || "governance" || "compliance-cooloff" || "expired",
 * //   LockDuration: Number("int"),
 * //   CoolOffPeriod: Number("int"),
 * //   CoolOffPeriodExpiresOn: new Date("TIMESTAMP"),
 * //   LockCreatedOn: new Date("TIMESTAMP"),
 * //   LockExpiresOn: new Date("TIMESTAMP"),
 * //   LockDurationStartTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param LockSnapshotCommandInput - {@link LockSnapshotCommandInput}
 * @returns {@link LockSnapshotCommandOutput}
 * @see {@link LockSnapshotCommandInput} for command's `input` shape.
 * @see {@link LockSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class LockSnapshotCommand extends $Command
  .classBuilder<
    LockSnapshotCommandInput,
    LockSnapshotCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "LockSnapshot", {})
  .n("EC2Client", "LockSnapshotCommand")
  .sc(LockSnapshot$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: LockSnapshotRequest;
      output: LockSnapshotResult;
    };
    sdk: {
      input: LockSnapshotCommandInput;
      output: LockSnapshotCommandOutput;
    };
  };
}
