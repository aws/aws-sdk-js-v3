// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeClusterSnapshotsMessage, SnapshotMessage } from "../models/models_1";
import { de_DescribeClusterSnapshotsCommand, se_DescribeClusterSnapshotsCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterSnapshotsCommand}.
 */
export interface DescribeClusterSnapshotsCommandInput extends DescribeClusterSnapshotsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeClusterSnapshotsCommand}.
 */
export interface DescribeClusterSnapshotsCommandOutput extends SnapshotMessage, __MetadataBearer {}

/**
 * <p>Returns one or more snapshot objects, which contain metadata about your cluster
 *             snapshots. By default, this operation returns information about all snapshots of all
 *             clusters that are owned by your Amazon Web Services account. No information is returned for
 *             snapshots owned by inactive Amazon Web Services accounts.</p>
 *          <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all snapshots that match any combination of the specified keys and values. For example,
 *             if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all snapshots that have any
 *             combination of those values are returned. Only snapshots that you own are returned in
 *             the response; shared snapshots are not returned with the tag key and tag value request
 *             parameters.</p>
 *          <p>If both tag keys and values are omitted from the request, snapshots are returned
 *             regardless of whether they have tag keys or values associated with them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterSnapshotsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterSnapshotsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeClusterSnapshotsMessage
 *   ClusterIdentifier: "STRING_VALUE",
 *   SnapshotIdentifier: "STRING_VALUE",
 *   SnapshotArn: "STRING_VALUE",
 *   SnapshotType: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   OwnerAccount: "STRING_VALUE",
 *   TagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 *   TagValues: [ // TagValueList
 *     "STRING_VALUE",
 *   ],
 *   ClusterExists: true || false,
 *   SortingEntities: [ // SnapshotSortingEntityList
 *     { // SnapshotSortingEntity
 *       Attribute: "SOURCE_TYPE" || "TOTAL_SIZE" || "CREATE_TIME", // required
 *       SortOrder: "ASC" || "DESC",
 *     },
 *   ],
 * };
 * const command = new DescribeClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // SnapshotMessage
 * //   Marker: "STRING_VALUE",
 * //   Snapshots: [ // SnapshotList
 * //     { // Snapshot
 * //       SnapshotIdentifier: "STRING_VALUE",
 * //       ClusterIdentifier: "STRING_VALUE",
 * //       SnapshotCreateTime: new Date("TIMESTAMP"),
 * //       Status: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       AvailabilityZone: "STRING_VALUE",
 * //       ClusterCreateTime: new Date("TIMESTAMP"),
 * //       MasterUsername: "STRING_VALUE",
 * //       ClusterVersion: "STRING_VALUE",
 * //       EngineFullVersion: "STRING_VALUE",
 * //       SnapshotType: "STRING_VALUE",
 * //       NodeType: "STRING_VALUE",
 * //       NumberOfNodes: Number("int"),
 * //       DBName: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       Encrypted: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       EncryptedWithHSM: true || false,
 * //       AccountsWithRestoreAccess: [ // AccountsWithRestoreAccessList
 * //         { // AccountWithRestoreAccess
 * //           AccountId: "STRING_VALUE",
 * //           AccountAlias: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OwnerAccount: "STRING_VALUE",
 * //       TotalBackupSizeInMegaBytes: Number("double"),
 * //       ActualIncrementalBackupSizeInMegaBytes: Number("double"),
 * //       BackupProgressInMegaBytes: Number("double"),
 * //       CurrentBackupRateInMegaBytesPerSecond: Number("double"),
 * //       EstimatedSecondsToCompletion: Number("long"),
 * //       ElapsedTimeInSeconds: Number("long"),
 * //       SourceRegion: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       RestorableNodeTypes: [ // RestorableNodeTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       EnhancedVpcRouting: true || false,
 * //       MaintenanceTrackName: "STRING_VALUE",
 * //       ManualSnapshotRetentionPeriod: Number("int"),
 * //       ManualSnapshotRemainingDays: Number("int"),
 * //       SnapshotRetentionStartTime: new Date("TIMESTAMP"),
 * //       MasterPasswordSecretArn: "STRING_VALUE",
 * //       MasterPasswordSecretKmsKeyId: "STRING_VALUE",
 * //       SnapshotArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeClusterSnapshotsCommandInput - {@link DescribeClusterSnapshotsCommandInput}
 * @returns {@link DescribeClusterSnapshotsCommandOutput}
 * @see {@link DescribeClusterSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link ClusterSnapshotNotFoundFault} (client fault)
 *  <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DescribeClusterSnapshotsCommand extends $Command
  .classBuilder<
    DescribeClusterSnapshotsCommandInput,
    DescribeClusterSnapshotsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "DescribeClusterSnapshots", {})
  .n("RedshiftClient", "DescribeClusterSnapshotsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeClusterSnapshotsCommand)
  .de(de_DescribeClusterSnapshotsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterSnapshotsMessage;
      output: SnapshotMessage;
    };
    sdk: {
      input: DescribeClusterSnapshotsCommandInput;
      output: DescribeClusterSnapshotsCommandOutput;
    };
  };
}
