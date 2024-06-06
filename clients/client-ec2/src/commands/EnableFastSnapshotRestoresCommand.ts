// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableFastSnapshotRestoresRequest, EnableFastSnapshotRestoresResult } from "../models/models_5";
import { de_EnableFastSnapshotRestoresCommand, se_EnableFastSnapshotRestoresCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableFastSnapshotRestoresCommand}.
 */
export interface EnableFastSnapshotRestoresCommandInput extends EnableFastSnapshotRestoresRequest {}
/**
 * @public
 *
 * The output of {@link EnableFastSnapshotRestoresCommand}.
 */
export interface EnableFastSnapshotRestoresCommandOutput extends EnableFastSnapshotRestoresResult, __MetadataBearer {}

/**
 * <p>Enables fast snapshot restores for the specified snapshots in the specified Availability Zones.</p>
 *          <p>You get the full benefit of fast snapshot restores after they enter the <code>enabled</code> state.
 *       To get the current state of fast snapshot restores, use <a>DescribeFastSnapshotRestores</a>.
 *       To disable fast snapshot restores, use <a>DisableFastSnapshotRestores</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-fast-snapshot-restore.html">Amazon EBS fast snapshot
 *       restore</a> in the <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableFastSnapshotRestoresCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableFastSnapshotRestoresCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableFastSnapshotRestoresRequest
 *   AvailabilityZones: [ // AvailabilityZoneStringList // required
 *     "STRING_VALUE",
 *   ],
 *   SourceSnapshotIds: [ // SnapshotIdStringList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new EnableFastSnapshotRestoresCommand(input);
 * const response = await client.send(command);
 * // { // EnableFastSnapshotRestoresResult
 * //   Successful: [ // EnableFastSnapshotRestoreSuccessSet
 * //     { // EnableFastSnapshotRestoreSuccessItem
 * //       SnapshotId: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       State: "enabling" || "optimizing" || "enabled" || "disabling" || "disabled",
 * //       StateTransitionReason: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       OwnerAlias: "STRING_VALUE",
 * //       EnablingTime: new Date("TIMESTAMP"),
 * //       OptimizingTime: new Date("TIMESTAMP"),
 * //       EnabledTime: new Date("TIMESTAMP"),
 * //       DisablingTime: new Date("TIMESTAMP"),
 * //       DisabledTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   Unsuccessful: [ // EnableFastSnapshotRestoreErrorSet
 * //     { // EnableFastSnapshotRestoreErrorItem
 * //       SnapshotId: "STRING_VALUE",
 * //       FastSnapshotRestoreStateErrors: [ // EnableFastSnapshotRestoreStateErrorSet
 * //         { // EnableFastSnapshotRestoreStateErrorItem
 * //           AvailabilityZone: "STRING_VALUE",
 * //           Error: { // EnableFastSnapshotRestoreStateError
 * //             Code: "STRING_VALUE",
 * //             Message: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param EnableFastSnapshotRestoresCommandInput - {@link EnableFastSnapshotRestoresCommandInput}
 * @returns {@link EnableFastSnapshotRestoresCommandOutput}
 * @see {@link EnableFastSnapshotRestoresCommandInput} for command's `input` shape.
 * @see {@link EnableFastSnapshotRestoresCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class EnableFastSnapshotRestoresCommand extends $Command
  .classBuilder<
    EnableFastSnapshotRestoresCommandInput,
    EnableFastSnapshotRestoresCommandOutput,
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
  .s("AmazonEC2", "EnableFastSnapshotRestores", {})
  .n("EC2Client", "EnableFastSnapshotRestoresCommand")
  .f(void 0, void 0)
  .ser(se_EnableFastSnapshotRestoresCommand)
  .de(de_EnableFastSnapshotRestoresCommand)
  .build() {}
