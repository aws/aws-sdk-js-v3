// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDBClusterMessage, DeleteDBClusterResult } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteDBCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBClusterCommand}.
 */
export interface DeleteDBClusterCommandInput extends DeleteDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBClusterCommand}.
 */
export interface DeleteDBClusterCommandOutput extends DeleteDBClusterResult, __MetadataBearer {}

/**
 * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster.
 *           When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered.
 *           Manual DB cluster snapshots of the specified DB cluster are not deleted.</p>
 *          <p>If you're deleting a Multi-AZ DB cluster with read replicas, all cluster members are
 *             terminated and read replicas are promoted to standalone instances.</p>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
 *                 cluster deployments</a> in the <i>Amazon RDS User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DeleteDBClusterMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   SkipFinalSnapshot: true || false,
 *   FinalDBSnapshotIdentifier: "STRING_VALUE",
 *   DeleteAutomatedBackups: true || false,
 * };
 * const command = new DeleteDBClusterCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDBClusterResult
 * //   DBCluster: { // DBCluster
 * //     AllocatedStorage: Number("int"),
 * //     AvailabilityZones: [ // AvailabilityZones
 * //       "STRING_VALUE",
 * //     ],
 * //     BackupRetentionPeriod: Number("int"),
 * //     CharacterSetName: "STRING_VALUE",
 * //     DatabaseName: "STRING_VALUE",
 * //     DBClusterIdentifier: "STRING_VALUE",
 * //     DBClusterParameterGroup: "STRING_VALUE",
 * //     DBSubnetGroup: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     PercentProgress: "STRING_VALUE",
 * //     EarliestRestorableTime: new Date("TIMESTAMP"),
 * //     Endpoint: "STRING_VALUE",
 * //     ReaderEndpoint: "STRING_VALUE",
 * //     CustomEndpoints: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     MultiAZ: true || false,
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     LatestRestorableTime: new Date("TIMESTAMP"),
 * //     Port: Number("int"),
 * //     MasterUsername: "STRING_VALUE",
 * //     DBClusterOptionGroupMemberships: [ // DBClusterOptionGroupMemberships
 * //       { // DBClusterOptionGroupStatus
 * //         DBClusterOptionGroupName: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PreferredBackupWindow: "STRING_VALUE",
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     UpgradeRolloutOrder: "first" || "second" || "last",
 * //     ReplicationSourceIdentifier: "STRING_VALUE",
 * //     ReadReplicaIdentifiers: [ // ReadReplicaIdentifierList
 * //       "STRING_VALUE",
 * //     ],
 * //     StatusInfos: [ // DBClusterStatusInfoList
 * //       { // DBClusterStatusInfo
 * //         StatusType: "STRING_VALUE",
 * //         Normal: true || false,
 * //         Status: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
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
 * //         FeatureName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //     CloneGroupId: "STRING_VALUE",
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     EarliestBacktrackTime: new Date("TIMESTAMP"),
 * //     BacktrackWindow: Number("long"),
 * //     BacktrackConsumedChangeRecords: Number("long"),
 * //     EnabledCloudwatchLogsExports: [ // LogTypeList
 * //       "STRING_VALUE",
 * //     ],
 * //     Capacity: Number("int"),
 * //     PendingModifiedValues: { // ClusterPendingModifiedValues
 * //       PendingCloudwatchLogsExports: { // PendingCloudwatchLogsExports
 * //         LogTypesToEnable: [
 * //           "STRING_VALUE",
 * //         ],
 * //         LogTypesToDisable: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       MasterUserPassword: "STRING_VALUE",
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       EngineVersion: "STRING_VALUE",
 * //       BackupRetentionPeriod: Number("int"),
 * //       StorageType: "STRING_VALUE",
 * //       AllocatedStorage: Number("int"),
 * //       RdsCustomClusterConfiguration: { // RdsCustomClusterConfiguration
 * //         InterconnectSubnetId: "STRING_VALUE",
 * //         TransitGatewayMulticastDomainId: "STRING_VALUE",
 * //         ReplicaMode: "open-read-only" || "mounted",
 * //       },
 * //       Iops: Number("int"),
 * //       CertificateDetails: { // CertificateDetails
 * //         CAIdentifier: "STRING_VALUE",
 * //         ValidTill: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     EngineMode: "STRING_VALUE",
 * //     ScalingConfigurationInfo: { // ScalingConfigurationInfo
 * //       MinCapacity: Number("int"),
 * //       MaxCapacity: Number("int"),
 * //       AutoPause: true || false,
 * //       SecondsUntilAutoPause: Number("int"),
 * //       TimeoutAction: "STRING_VALUE",
 * //       SecondsBeforeTimeout: Number("int"),
 * //     },
 * //     RdsCustomClusterConfiguration: {
 * //       InterconnectSubnetId: "STRING_VALUE",
 * //       TransitGatewayMulticastDomainId: "STRING_VALUE",
 * //       ReplicaMode: "open-read-only" || "mounted",
 * //     },
 * //     DBClusterInstanceClass: "STRING_VALUE",
 * //     StorageType: "STRING_VALUE",
 * //     Iops: Number("int"),
 * //     StorageThroughput: Number("int"),
 * //     IOOptimizedNextAllowedModificationTime: new Date("TIMESTAMP"),
 * //     PubliclyAccessible: true || false,
 * //     AutoMinorVersionUpgrade: true || false,
 * //     DeletionProtection: true || false,
 * //     HttpEndpointEnabled: true || false,
 * //     ActivityStreamMode: "sync" || "async",
 * //     ActivityStreamStatus: "stopped" || "starting" || "started" || "stopping",
 * //     ActivityStreamKmsKeyId: "STRING_VALUE",
 * //     ActivityStreamKinesisStreamName: "STRING_VALUE",
 * //     CopyTagsToSnapshot: true || false,
 * //     CrossAccountClone: true || false,
 * //     DomainMemberships: [ // DomainMembershipList
 * //       { // DomainMembership
 * //         Domain: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         FQDN: "STRING_VALUE",
 * //         IAMRoleName: "STRING_VALUE",
 * //         OU: "STRING_VALUE",
 * //         AuthSecretArn: "STRING_VALUE",
 * //         DnsIps: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     GlobalClusterIdentifier: "STRING_VALUE",
 * //     GlobalWriteForwardingStatus: "enabled" || "disabled" || "enabling" || "disabling" || "unknown",
 * //     GlobalWriteForwardingRequested: true || false,
 * //     NetworkType: "STRING_VALUE",
 * //     AutomaticRestartTime: new Date("TIMESTAMP"),
 * //     ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfigurationInfo
 * //       MinCapacity: Number("double"),
 * //       MaxCapacity: Number("double"),
 * //       SecondsUntilAutoPause: Number("int"),
 * //     },
 * //     ServerlessV2PlatformVersion: "STRING_VALUE",
 * //     MonitoringInterval: Number("int"),
 * //     MonitoringRoleArn: "STRING_VALUE",
 * //     DatabaseInsightsMode: "standard" || "advanced",
 * //     PerformanceInsightsEnabled: true || false,
 * //     PerformanceInsightsKMSKeyId: "STRING_VALUE",
 * //     PerformanceInsightsRetentionPeriod: Number("int"),
 * //     DBSystemId: "STRING_VALUE",
 * //     MasterUserSecret: { // MasterUserSecret
 * //       SecretArn: "STRING_VALUE",
 * //       SecretStatus: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //     LocalWriteForwardingStatus: "enabled" || "disabled" || "enabling" || "disabling" || "requested",
 * //     AwsBackupRecoveryPointArn: "STRING_VALUE",
 * //     LimitlessDatabase: { // LimitlessDatabase
 * //       Status: "active" || "not-in-use" || "enabled" || "disabled" || "enabling" || "disabling" || "modifying-max-capacity" || "error",
 * //       MinRequiredACU: Number("double"),
 * //     },
 * //     ClusterScalabilityType: "standard" || "limitless",
 * //     CertificateDetails: {
 * //       CAIdentifier: "STRING_VALUE",
 * //       ValidTill: new Date("TIMESTAMP"),
 * //     },
 * //     EngineLifecycleSupport: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteDBClusterCommandInput - {@link DeleteDBClusterCommandInput}
 * @returns {@link DeleteDBClusterCommandOutput}
 * @see {@link DeleteDBClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterAutomatedBackupQuotaExceededFault} (client fault)
 *  <p>The quota for retained automated backups was exceeded. This prevents you from retaining any additional automated
 *             backups. The retained automated backups quota is the same as your DB cluster quota.</p>
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBClusterSnapshotAlreadyExistsFault} (client fault)
 *  <p>The user already has a DB cluster snapshot with the given identifier.</p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The supplied value isn't a valid DB cluster snapshot state.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidGlobalClusterStateFault} (client fault)
 *  <p>The global cluster is in an invalid state and can't perform the requested operation.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB
 *             snapshots.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To delete a DB cluster
 * ```javascript
 * // The following example deletes the DB cluster named mycluster and takes a final snapshot named mycluster-final-snapshot. The status of the DB cluster is available while the snapshot is being taken.
 * const input = {
 *   DBClusterIdentifier: "mycluster",
 *   FinalDBSnapshotIdentifier: "mycluster-final-snapshot",
 *   SkipFinalSnapshot: false
 * };
 * const command = new DeleteDBClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBCluster: {
 *     AllocatedStorage: 20,
 *     AvailabilityZones: [
 *       "eu-central-1b",
 *       "eu-central-1c",
 *       "eu-central-1a"
 *     ],
 *     BackupRetentionPeriod: 7,
 *     DBClusterIdentifier: "mycluster",
 *     DBClusterParameterGroup: "default.aurora-postgresql10",
 *     DBSubnetGroup: "default-vpc-aa11bb22",
 *     Status: "available"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDBClusterCommand extends $Command
  .classBuilder<
    DeleteDBClusterCommandInput,
    DeleteDBClusterCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DeleteDBCluster", {})
  .n("RDSClient", "DeleteDBClusterCommand")
  .sc(DeleteDBCluster$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDBClusterMessage;
      output: DeleteDBClusterResult;
    };
    sdk: {
      input: DeleteDBClusterCommandInput;
      output: DeleteDBClusterCommandOutput;
    };
  };
}
