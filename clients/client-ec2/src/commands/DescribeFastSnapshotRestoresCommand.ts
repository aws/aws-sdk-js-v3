// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFastSnapshotRestoresRequest, DescribeFastSnapshotRestoresResult } from "../models/models_4";
import { de_DescribeFastSnapshotRestoresCommand, se_DescribeFastSnapshotRestoresCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFastSnapshotRestoresCommand}.
 */
export interface DescribeFastSnapshotRestoresCommandInput extends DescribeFastSnapshotRestoresRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFastSnapshotRestoresCommand}.
 */
export interface DescribeFastSnapshotRestoresCommandOutput
  extends DescribeFastSnapshotRestoresResult,
    __MetadataBearer {}

/**
 * <p>Describes the state of fast snapshot restores for your snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFastSnapshotRestoresCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFastSnapshotRestoresCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeFastSnapshotRestoresRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DescribeFastSnapshotRestoresCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFastSnapshotRestoresResult
 * //   FastSnapshotRestores: [ // DescribeFastSnapshotRestoreSuccessSet
 * //     { // DescribeFastSnapshotRestoreSuccessItem
 * //       SnapshotId: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
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
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFastSnapshotRestoresCommandInput - {@link DescribeFastSnapshotRestoresCommandInput}
 * @returns {@link DescribeFastSnapshotRestoresCommandOutput}
 * @see {@link DescribeFastSnapshotRestoresCommandInput} for command's `input` shape.
 * @see {@link DescribeFastSnapshotRestoresCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeFastSnapshotRestoresCommand extends $Command
  .classBuilder<
    DescribeFastSnapshotRestoresCommandInput,
    DescribeFastSnapshotRestoresCommandOutput,
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
  .s("AmazonEC2", "DescribeFastSnapshotRestores", {})
  .n("EC2Client", "DescribeFastSnapshotRestoresCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFastSnapshotRestoresCommand)
  .de(de_DescribeFastSnapshotRestoresCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFastSnapshotRestoresRequest;
      output: DescribeFastSnapshotRestoresResult;
    };
    sdk: {
      input: DescribeFastSnapshotRestoresCommandInput;
      output: DescribeFastSnapshotRestoresCommandOutput;
    };
  };
}
