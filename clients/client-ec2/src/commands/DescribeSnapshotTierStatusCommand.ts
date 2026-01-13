// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSnapshotTierStatusRequest, DescribeSnapshotTierStatusResult } from "../models/models_4";
import { DescribeSnapshotTierStatus$ } from "../schemas/schemas_0";

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
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeSnapshotTierStatus", {})
  .n("EC2Client", "DescribeSnapshotTierStatusCommand")
  .sc(DescribeSnapshotTierStatus$)
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
