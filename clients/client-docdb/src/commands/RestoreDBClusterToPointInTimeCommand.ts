// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreDBClusterToPointInTimeMessage, RestoreDBClusterToPointInTimeResult } from "../models/models_0";
import {
  de_RestoreDBClusterToPointInTimeCommand,
  se_RestoreDBClusterToPointInTimeCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RestoreDBClusterToPointInTimeCommand}.
 */
export interface RestoreDBClusterToPointInTimeCommandInput extends RestoreDBClusterToPointInTimeMessage {}
/**
 * @public
 *
 * The output of {@link RestoreDBClusterToPointInTimeCommand}.
 */
export interface RestoreDBClusterToPointInTimeCommandOutput
  extends RestoreDBClusterToPointInTimeResult,
    __MetadataBearer {}

/**
 * <p>Restores a cluster to an arbitrary point in time. Users can restore to any point in
 *             time before <code>LatestRestorableTime</code> for up to
 *                 <code>BackupRetentionPeriod</code> days. The target cluster is created from the
 *             source cluster with the same configuration as the original cluster, except that
 *             the new cluster is created with the default security group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, RestoreDBClusterToPointInTimeCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, RestoreDBClusterToPointInTimeCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
 * const input = { // RestoreDBClusterToPointInTimeMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   RestoreType: "STRING_VALUE",
 *   SourceDBClusterIdentifier: "STRING_VALUE", // required
 *   RestoreToTime: new Date("TIMESTAMP"),
 *   UseLatestRestorableTime: true || false,
 *   Port: Number("int"),
 *   DBSubnetGroupName: "STRING_VALUE",
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   KmsKeyId: "STRING_VALUE",
 *   EnableCloudwatchLogsExports: [ // LogTypeList
 *     "STRING_VALUE",
 *   ],
 *   DeletionProtection: true || false,
 *   ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfiguration
 *     MinCapacity: Number("double"),
 *     MaxCapacity: Number("double"),
 *   },
 *   StorageType: "STRING_VALUE",
 * };
 * const command = new RestoreDBClusterToPointInTimeCommand(input);
 * const response = await client.send(command);
 * // { // RestoreDBClusterToPointInTimeResult
 * //   DBCluster: { // DBCluster
 * //     AvailabilityZones: [ // AvailabilityZones
 * //       "STRING_VALUE",
 * //     ],
 * //     BackupRetentionPeriod: Number("int"),
 * //     DBClusterIdentifier: "STRING_VALUE",
 * //     DBClusterParameterGroup: "STRING_VALUE",
 * //     DBSubnetGroup: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     PercentProgress: "STRING_VALUE",
 * //     EarliestRestorableTime: new Date("TIMESTAMP"),
 * //     Endpoint: "STRING_VALUE",
 * //     ReaderEndpoint: "STRING_VALUE",
 * //     MultiAZ: true || false,
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     LatestRestorableTime: new Date("TIMESTAMP"),
 * //     Port: Number("int"),
 * //     MasterUsername: "STRING_VALUE",
 * //     PreferredBackupWindow: "STRING_VALUE",
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     ReplicationSourceIdentifier: "STRING_VALUE",
 * //     ReadReplicaIdentifiers: [ // ReadReplicaIdentifierList
 * //       "STRING_VALUE",
 * //     ],
 * //     DBClusterMembers: [ // DBClusterMemberList
 * //       { // DBClusterMember
 * //         DBInstanceIdentifier: "STRING_VALUE",
 * //         IsClusterWriter: true || false,
 * //         DBClusterParameterGroupStatus: "STRING_VALUE",
 * //         PromotionTier: Number("int"),
 * //       },
 * //     ],
 * //     VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //       { // VpcSecurityGroupMembership
 * //         VpcSecurityGroupId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     HostedZoneId: "STRING_VALUE",
 * //     StorageEncrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     DbClusterResourceId: "STRING_VALUE",
 * //     DBClusterArn: "STRING_VALUE",
 * //     AssociatedRoles: [ // DBClusterRoles
 * //       { // DBClusterRole
 * //         RoleArn: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CloneGroupId: "STRING_VALUE",
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     EnabledCloudwatchLogsExports: [ // LogTypeList
 * //       "STRING_VALUE",
 * //     ],
 * //     DeletionProtection: true || false,
 * //     StorageType: "STRING_VALUE",
 * //     ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfigurationInfo
 * //       MinCapacity: Number("double"),
 * //       MaxCapacity: Number("double"),
 * //     },
 * //     MasterUserSecret: { // ClusterMasterUserSecret
 * //       SecretArn: "STRING_VALUE",
 * //       SecretStatus: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RestoreDBClusterToPointInTimeCommandInput - {@link RestoreDBClusterToPointInTimeCommandInput}
 * @returns {@link RestoreDBClusterToPointInTimeCommandOutput}
 * @see {@link RestoreDBClusterToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBClusterAlreadyExistsFault} (client fault)
 *  <p>You already have a cluster with the given identifier.</p>
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing cluster. </p>
 *
 * @throws {@link DBClusterQuotaExceededFault} (client fault)
 *  <p>The cluster can't be created because you have reached the maximum allowed quota of clusters.</p>
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing cluster snapshot. </p>
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing subnet group. </p>
 *
 * @throws {@link InsufficientDBClusterCapacityFault} (client fault)
 *  <p>The cluster doesn't have enough capacity for the current operation.</p>
 *
 * @throws {@link InsufficientStorageClusterCapacityFault} (client fault)
 *  <p>There is not enough storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available. </p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The provided value isn't a valid cluster snapshot state.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The cluster isn't in a valid state.</p>
 *
 * @throws {@link InvalidDBSnapshotStateFault} (client fault)
 *  <p>The state of the snapshot doesn't allow deletion.</p>
 *
 * @throws {@link InvalidRestoreFault} (client fault)
 *  <p>You cannot restore from a virtual private cloud (VPC) backup to a non-VPC DB
 *             instance.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is not valid, or multiple subnets were requested that are not all
 *             in a common virtual private cloud (VPC).</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>The subnet group doesn't cover all Availability Zones after it is created
 *             because of changes that were made.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred when accessing an KMS key.</p>
 *
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *  <p>The request would cause you to exceed the allowed amount of storage available across
 *             all instances.</p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 *
 * @public
 */
export class RestoreDBClusterToPointInTimeCommand extends $Command
  .classBuilder<
    RestoreDBClusterToPointInTimeCommandInput,
    RestoreDBClusterToPointInTimeCommandOutput,
    DocDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "RestoreDBClusterToPointInTime", {})
  .n("DocDBClient", "RestoreDBClusterToPointInTimeCommand")
  .f(void 0, void 0)
  .ser(se_RestoreDBClusterToPointInTimeCommand)
  .de(de_RestoreDBClusterToPointInTimeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreDBClusterToPointInTimeMessage;
      output: RestoreDBClusterToPointInTimeResult;
    };
    sdk: {
      input: RestoreDBClusterToPointInTimeCommandInput;
      output: RestoreDBClusterToPointInTimeCommandOutput;
    };
  };
}
