// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSnapshotTierStatusRequest } from "../models/models_4";
import { DescribeSnapshotTierStatusResult } from "../models/models_5";
import { de_DescribeSnapshotTierStatusCommand, se_DescribeSnapshotTierStatusCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSnapshotTierStatusCommand}.
 */
export interface DescribeSnapshotTierStatusCommandInput extends DescribeSnapshotTierStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotTierStatusCommand}.
 */
export interface DescribeSnapshotTierStatusCommandOutput extends DescribeSnapshotTierStatusResult, __MetadataBearer {}

/**
 * <p>Describes the storage tier status of one or more Amazon EBS snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSnapshotTierStatusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSnapshotTierStatusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeSnapshotTierStatusRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeSnapshotTierStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapshotTierStatusResult
 * //   SnapshotTierStatuses: [ // snapshotTierStatusSet
 * //     { // SnapshotTierStatus
 * //       SnapshotId: "STRING_VALUE",
 * //       VolumeId: "STRING_VALUE",
 * //       Status: "pending" || "completed" || "error" || "recoverable" || "recovering",
 * //       OwnerId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       StorageTier: "archive" || "standard",
 * //       LastTieringStartTime: new Date("TIMESTAMP"),
 * //       LastTieringProgress: Number("int"),
 * //       LastTieringOperationStatus: "archival-in-progress" || "archival-completed" || "archival-failed" || "temporary-restore-in-progress" || "temporary-restore-completed" || "temporary-restore-failed" || "permanent-restore-in-progress" || "permanent-restore-completed" || "permanent-restore-failed",
 * //       LastTieringOperationStatusDetail: "STRING_VALUE",
 * //       ArchivalCompleteTime: new Date("TIMESTAMP"),
 * //       RestoreExpiryTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotTierStatusCommandInput - {@link DescribeSnapshotTierStatusCommandInput}
 * @returns {@link DescribeSnapshotTierStatusCommandOutput}
 * @see {@link DescribeSnapshotTierStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotTierStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeSnapshotTierStatusCommand extends $Command
  .classBuilder<
    DescribeSnapshotTierStatusCommandInput,
    DescribeSnapshotTierStatusCommandOutput,
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
  .s("AmazonEC2", "DescribeSnapshotTierStatus", {})
  .n("EC2Client", "DescribeSnapshotTierStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSnapshotTierStatusCommand)
  .de(de_DescribeSnapshotTierStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSnapshotTierStatusRequest;
      output: DescribeSnapshotTierStatusResult;
    };
    sdk: {
      input: DescribeSnapshotTierStatusCommandInput;
      output: DescribeSnapshotTierStatusCommandOutput;
    };
  };
}
