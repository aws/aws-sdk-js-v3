// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableFastSnapshotRestoresRequest, DisableFastSnapshotRestoresResult } from "../models/models_6";
import { DisableFastSnapshotRestores } from "../schemas/schemas_33_Snapshot";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableFastSnapshotRestoresCommand}.
 */
export interface DisableFastSnapshotRestoresCommandInput extends DisableFastSnapshotRestoresRequest {}
/**
 * @public
 *
 * The output of {@link DisableFastSnapshotRestoresCommand}.
 */
export interface DisableFastSnapshotRestoresCommandOutput extends DisableFastSnapshotRestoresResult, __MetadataBearer {}

/**
 * <p>Disables fast snapshot restores for the specified snapshots in the specified Availability Zones.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableFastSnapshotRestoresCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableFastSnapshotRestoresCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisableFastSnapshotRestoresRequest
 *   AvailabilityZones: [ // AvailabilityZoneStringList // required
 *     "STRING_VALUE",
 *   ],
 *   SourceSnapshotIds: [ // SnapshotIdStringList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DisableFastSnapshotRestoresCommand(input);
 * const response = await client.send(command);
 * // { // DisableFastSnapshotRestoresResult
 * //   Successful: [ // DisableFastSnapshotRestoreSuccessSet
 * //     { // DisableFastSnapshotRestoreSuccessItem
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
 * //   Unsuccessful: [ // DisableFastSnapshotRestoreErrorSet
 * //     { // DisableFastSnapshotRestoreErrorItem
 * //       SnapshotId: "STRING_VALUE",
 * //       FastSnapshotRestoreStateErrors: [ // DisableFastSnapshotRestoreStateErrorSet
 * //         { // DisableFastSnapshotRestoreStateErrorItem
 * //           AvailabilityZone: "STRING_VALUE",
 * //           Error: { // DisableFastSnapshotRestoreStateError
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
 * @param DisableFastSnapshotRestoresCommandInput - {@link DisableFastSnapshotRestoresCommandInput}
 * @returns {@link DisableFastSnapshotRestoresCommandOutput}
 * @see {@link DisableFastSnapshotRestoresCommandInput} for command's `input` shape.
 * @see {@link DisableFastSnapshotRestoresCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisableFastSnapshotRestoresCommand extends $Command
  .classBuilder<
    DisableFastSnapshotRestoresCommandInput,
    DisableFastSnapshotRestoresCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DisableFastSnapshotRestores", {})
  .n("EC2Client", "DisableFastSnapshotRestoresCommand")
  .sc(DisableFastSnapshotRestores)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableFastSnapshotRestoresRequest;
      output: DisableFastSnapshotRestoresResult;
    };
    sdk: {
      input: DisableFastSnapshotRestoresCommandInput;
      output: DisableFastSnapshotRestoresCommandOutput;
    };
  };
}
