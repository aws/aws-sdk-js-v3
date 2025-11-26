// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSnapshotsRequest, DescribeSnapshotsResult } from "../models/models_4";
import { DescribeSnapshots } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSnapshotsCommand}.
 */
export interface DescribeSnapshotsCommandInput extends DescribeSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotsCommand}.
 */
export interface DescribeSnapshotsCommandOutput extends DescribeSnapshotsResult, __MetadataBearer {}

/**
 * <p>Describes the specified EBS snapshots available to you or all of the EBS snapshots
 *       available to you.</p>
 *          <p>The snapshots available to you include public snapshots, private snapshots that you own,
 *       and private snapshots owned by other Amazon Web Services accounts for which you have explicit create volume
 *       permissions.</p>
 *          <p>The create volume permissions fall into the following categories:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>public</i>: The owner of the snapshot granted create volume
 *           permissions for the snapshot to the <code>all</code> group. All Amazon Web Services accounts have create
 *           volume permissions for these snapshots.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>explicit</i>: The owner of the snapshot granted create volume
 *           permissions to a specific Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>implicit</i>: An Amazon Web Services account has implicit create volume permissions
 *           for all snapshots it owns.</p>
 *             </li>
 *          </ul>
 *          <p>The list of snapshots returned can be filtered by specifying snapshot IDs, snapshot
 *       owners, or Amazon Web Services accounts with create volume permissions. If no options are specified,
 *       Amazon EC2 returns all snapshots for which you have create volume permissions.</p>
 *          <p>If you specify one or more snapshot IDs, only snapshots that have the specified IDs are
 *       returned. If you specify an invalid snapshot ID, an error is returned. If you specify a
 *       snapshot ID for which you do not have access, it is not included in the returned
 *       results.</p>
 *          <p>If you specify one or more snapshot owners using the <code>OwnerIds</code> option, only
 *       snapshots from the specified owners and for which you have access are returned. The results
 *       can include the Amazon Web Services account IDs of the specified owners, <code>amazon</code> for snapshots
 *       owned by Amazon, or <code>self</code> for snapshots that you own.</p>
 *          <p>If you specify a list of restorable users, only snapshots with create snapshot permissions
 *       for those users are returned. You can specify Amazon Web Services account IDs (if you own the snapshots),
 *         <code>self</code> for snapshots for which you own or have explicit permissions, or
 *         <code>all</code> for public snapshots.</p>
 *          <p>If you are describing a long list of snapshots, we recommend that you paginate the output to make the
 *       list more manageable. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p>
 *          <p>For more information about EBS snapshots, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-snapshots.html">Amazon EBS snapshots</a> in the <i>Amazon EBS User Guide</i>.</p>
 *          <important>
 *             <p>We strongly recommend using only paginated requests. Unpaginated requests are
 *         susceptible to throttling and timeouts.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSnapshotsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSnapshotsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeSnapshotsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   OwnerIds: [ // OwnerStringList
 *     "STRING_VALUE",
 *   ],
 *   RestorableByUserIds: [ // RestorableByStringList
 *     "STRING_VALUE",
 *   ],
 *   SnapshotIds: [ // SnapshotIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapshotsResult
 * //   NextToken: "STRING_VALUE",
 * //   Snapshots: [ // SnapshotList
 * //     { // Snapshot
 * //       OwnerAlias: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       StorageTier: "archive" || "standard",
 * //       RestoreExpiryTime: new Date("TIMESTAMP"),
 * //       SseType: "sse-ebs" || "sse-kms" || "none",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       TransferType: "time-based" || "standard",
 * //       CompletionDurationMinutes: Number("int"),
 * //       CompletionTime: new Date("TIMESTAMP"),
 * //       FullSnapshotSizeInBytes: Number("long"),
 * //       SnapshotId: "STRING_VALUE",
 * //       VolumeId: "STRING_VALUE",
 * //       State: "pending" || "completed" || "error" || "recoverable" || "recovering",
 * //       StateMessage: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       Progress: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       VolumeSize: Number("int"),
 * //       Encrypted: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       DataEncryptionKeyId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotsCommandInput - {@link DescribeSnapshotsCommandInput}
 * @returns {@link DescribeSnapshotsCommandOutput}
 * @see {@link DescribeSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe a snapshot
 * ```javascript
 * // This example describes a snapshot with the snapshot ID of ``snap-1234567890abcdef0``.
 * const input = {
 *   SnapshotIds: [
 *     "snap-1234567890abcdef0"
 *   ]
 * };
 * const command = new DescribeSnapshotsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NextToken: "",
 *   Snapshots: [
 *     {
 *       Description: "This is my snapshot.",
 *       OwnerId: "012345678910",
 *       Progress: "100%",
 *       SnapshotId: "snap-1234567890abcdef0",
 *       StartTime: "2014-02-28T21:28:32.000Z",
 *       State: "completed",
 *       VolumeId: "vol-049df61146c4d7901",
 *       VolumeSize: 8
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To describe snapshots using filters
 * ```javascript
 * // This example describes all snapshots owned by the ID 012345678910 that are in the ``pending`` status.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "status",
 *       Values: [
 *         "pending"
 *       ]
 *     }
 *   ],
 *   OwnerIds: [
 *     "012345678910"
 *   ]
 * };
 * const command = new DescribeSnapshotsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NextToken: "",
 *   Snapshots: [
 *     {
 *       Description: "This is my copied snapshot.",
 *       OwnerId: "012345678910",
 *       Progress: "87%",
 *       SnapshotId: "snap-066877671789bd71b",
 *       StartTime: "2014-02-28T21:37:27.000Z",
 *       State: "pending",
 *       VolumeId: "vol-1234567890abcdef0",
 *       VolumeSize: 8
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeSnapshotsCommand extends $Command
  .classBuilder<
    DescribeSnapshotsCommandInput,
    DescribeSnapshotsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeSnapshots", {})
  .n("EC2Client", "DescribeSnapshotsCommand")
  .sc(DescribeSnapshots)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSnapshotsRequest;
      output: DescribeSnapshotsResult;
    };
    sdk: {
      input: DescribeSnapshotsCommandInput;
      output: DescribeSnapshotsCommandOutput;
    };
  };
}
