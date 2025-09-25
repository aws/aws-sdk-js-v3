// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateClusterSnapshotMessage, CreateClusterSnapshotResult } from "../models/models_0";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateClusterSnapshot } from "../schemas/schemas_9_Cluster";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateClusterSnapshotCommand}.
 */
export interface CreateClusterSnapshotCommandInput extends CreateClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link CreateClusterSnapshotCommand}.
 */
export interface CreateClusterSnapshotCommandOutput extends CreateClusterSnapshotResult, __MetadataBearer {}

/**
 * <p>Creates a manual snapshot of the specified cluster. The cluster must be in the
 *                 <code>available</code> state. </p>
 *          <p>
 * For more information about working with snapshots, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // CreateClusterSnapshotMessage
 *   SnapshotIdentifier: "STRING_VALUE", // required
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   ManualSnapshotRetentionPeriod: Number("int"),
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterSnapshotResult
 * //   Snapshot: { // Snapshot
 * //     SnapshotIdentifier: "STRING_VALUE",
 * //     ClusterIdentifier: "STRING_VALUE",
 * //     SnapshotCreateTime: new Date("TIMESTAMP"),
 * //     Status: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     AvailabilityZone: "STRING_VALUE",
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     MasterUsername: "STRING_VALUE",
 * //     ClusterVersion: "STRING_VALUE",
 * //     EngineFullVersion: "STRING_VALUE",
 * //     SnapshotType: "STRING_VALUE",
 * //     NodeType: "STRING_VALUE",
 * //     NumberOfNodes: Number("int"),
 * //     DBName: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     Encrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     EncryptedWithHSM: true || false,
 * //     AccountsWithRestoreAccess: [ // AccountsWithRestoreAccessList
 * //       { // AccountWithRestoreAccess
 * //         AccountId: "STRING_VALUE",
 * //         AccountAlias: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OwnerAccount: "STRING_VALUE",
 * //     TotalBackupSizeInMegaBytes: Number("double"),
 * //     ActualIncrementalBackupSizeInMegaBytes: Number("double"),
 * //     BackupProgressInMegaBytes: Number("double"),
 * //     CurrentBackupRateInMegaBytesPerSecond: Number("double"),
 * //     EstimatedSecondsToCompletion: Number("long"),
 * //     ElapsedTimeInSeconds: Number("long"),
 * //     SourceRegion: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RestorableNodeTypes: [ // RestorableNodeTypeList
 * //       "STRING_VALUE",
 * //     ],
 * //     EnhancedVpcRouting: true || false,
 * //     MaintenanceTrackName: "STRING_VALUE",
 * //     ManualSnapshotRetentionPeriod: Number("int"),
 * //     ManualSnapshotRemainingDays: Number("int"),
 * //     SnapshotRetentionStartTime: new Date("TIMESTAMP"),
 * //     MasterPasswordSecretArn: "STRING_VALUE",
 * //     MasterPasswordSecretKmsKeyId: "STRING_VALUE",
 * //     SnapshotArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateClusterSnapshotCommandInput - {@link CreateClusterSnapshotCommandInput}
 * @returns {@link CreateClusterSnapshotCommandOutput}
 * @see {@link CreateClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link ClusterSnapshotAlreadyExistsFault} (client fault)
 *  <p>The value specified as a snapshot identifier is already used by an existing
 *             snapshot.</p>
 *
 * @throws {@link ClusterSnapshotQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of cluster
 *             snapshots.</p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link InvalidRetentionPeriodFault} (client fault)
 *  <p>The retention period specified is either in the past or is not a valid value.</p>
 *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *  <p>You have exceeded the number of tags allowed.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class CreateClusterSnapshotCommand extends $Command
  .classBuilder<
    CreateClusterSnapshotCommandInput,
    CreateClusterSnapshotCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "CreateClusterSnapshot", {})
  .n("RedshiftClient", "CreateClusterSnapshotCommand")
  .sc(CreateClusterSnapshot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClusterSnapshotMessage;
      output: CreateClusterSnapshotResult;
    };
    sdk: {
      input: CreateClusterSnapshotCommandInput;
      output: CreateClusterSnapshotCommandOutput;
    };
  };
}
