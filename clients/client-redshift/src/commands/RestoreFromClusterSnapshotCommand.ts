// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreFromClusterSnapshotMessage, RestoreFromClusterSnapshotResult } from "../models/models_1";
import { RestoreFromClusterSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestoreFromClusterSnapshotCommand}.
 */
export interface RestoreFromClusterSnapshotCommandInput extends RestoreFromClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link RestoreFromClusterSnapshotCommand}.
 */
export interface RestoreFromClusterSnapshotCommandOutput extends RestoreFromClusterSnapshotResult, __MetadataBearer {}

/**
 * Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting cluster with the same configuration as the original cluster from which the snapshot was created, except that the new cluster is created with the default cluster security and parameter groups. After Amazon Redshift creates the cluster, you can use the ModifyCluster API to associate a different security group and different parameter group with the restored cluster. If you are using a DS node type, you can also choose to change to another DS node type of the same size during restore.
 *
 * If you restore a cluster into a VPC, you must provide a cluster subnet group where you want the cluster restored.
 *
 * VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. If a subnet group for a provisioned cluster is in an account with VPC BPA turned on, the following capabilities are blocked:
 *
 * - Creating a public cluster
 * - Restoring a public cluster
 * - Modifying a private cluster to be public
 * - Adding a subnet with VPC BPA turned on to the subnet group when there's at least one public cluster within the group
 *
 * For more information about VPC BPA, see [Block public access to VPCs and subnets](https://docs.aws.amazon.com/vpc/latest/userguide/security-vpc-bpa.html) in the *Amazon VPC User Guide*.
 *
 * For more information about working with snapshots, go to [Amazon Redshift Snapshots](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RestoreFromClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RestoreFromClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // RestoreFromClusterSnapshotMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   SnapshotIdentifier: "STRING_VALUE",
 *   SnapshotArn: "STRING_VALUE",
 *   SnapshotClusterIdentifier: "STRING_VALUE",
 *   Port: Number("int"),
 *   AvailabilityZone: "STRING_VALUE",
 *   AllowVersionUpgrade: true || false,
 *   ClusterSubnetGroupName: "STRING_VALUE",
 *   PubliclyAccessible: true || false,
 *   OwnerAccount: "STRING_VALUE",
 *   HsmClientCertificateIdentifier: "STRING_VALUE",
 *   HsmConfigurationIdentifier: "STRING_VALUE",
 *   ElasticIp: "STRING_VALUE",
 *   ClusterParameterGroupName: "STRING_VALUE",
 *   ClusterSecurityGroups: [ // ClusterSecurityGroupNameList
 *     "STRING_VALUE",
 *   ],
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   AutomatedSnapshotRetentionPeriod: Number("int"),
 *   ManualSnapshotRetentionPeriod: Number("int"),
 *   KmsKeyId: "STRING_VALUE",
 *   NodeType: "STRING_VALUE",
 *   EnhancedVpcRouting: true || false,
 *   AdditionalInfo: "STRING_VALUE",
 *   IamRoles: [ // IamRoleArnList
 *     "STRING_VALUE",
 *   ],
 *   MaintenanceTrackName: "STRING_VALUE",
 *   SnapshotScheduleIdentifier: "STRING_VALUE",
 *   NumberOfNodes: Number("int"),
 *   AvailabilityZoneRelocation: true || false,
 *   AquaConfigurationStatus: "enabled" || "disabled" || "auto",
 *   DefaultIamRoleArn: "STRING_VALUE",
 *   ReservedNodeId: "STRING_VALUE",
 *   TargetReservedNodeOfferingId: "STRING_VALUE",
 *   Encrypted: true || false,
 *   ManageMasterPassword: true || false,
 *   MasterPasswordSecretKmsKeyId: "STRING_VALUE",
 *   IpAddressType: "STRING_VALUE",
 *   MultiAZ: true || false,
 *   CatalogName: "STRING_VALUE",
 *   RedshiftIdcApplicationArn: "STRING_VALUE",
 * };
 * const command = new RestoreFromClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // RestoreFromClusterSnapshotResult
 * //   Cluster: { // Cluster
 * //     ClusterIdentifier: "STRING_VALUE",
 * //     NodeType: "STRING_VALUE",
 * //     ClusterStatus: "STRING_VALUE",
 * //     ClusterAvailabilityStatus: "STRING_VALUE",
 * //     ModifyStatus: "STRING_VALUE",
 * //     MasterUsername: "STRING_VALUE",
 * //     DBName: "STRING_VALUE",
 * //     Endpoint: { // Endpoint
 * //       Address: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       VpcEndpoints: [ // VpcEndpointsList
 * //         { // VpcEndpoint
 * //           VpcEndpointId: "STRING_VALUE",
 * //           VpcId: "STRING_VALUE",
 * //           NetworkInterfaces: [ // NetworkInterfaceList
 * //             { // NetworkInterface
 * //               NetworkInterfaceId: "STRING_VALUE",
 * //               SubnetId: "STRING_VALUE",
 * //               PrivateIpAddress: "STRING_VALUE",
 * //               AvailabilityZone: "STRING_VALUE",
 * //               Ipv6Address: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     AutomatedSnapshotRetentionPeriod: Number("int"),
 * //     ManualSnapshotRetentionPeriod: Number("int"),
 * //     ClusterSecurityGroups: [ // ClusterSecurityGroupMembershipList
 * //       { // ClusterSecurityGroupMembership
 * //         ClusterSecurityGroupName: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //       { // VpcSecurityGroupMembership
 * //         VpcSecurityGroupId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ClusterParameterGroups: [ // ClusterParameterGroupStatusList
 * //       { // ClusterParameterGroupStatus
 * //         ParameterGroupName: "STRING_VALUE",
 * //         ParameterApplyStatus: "STRING_VALUE",
 * //         ClusterParameterStatusList: [ // ClusterParameterStatusList
 * //           { // ClusterParameterStatus
 * //             ParameterName: "STRING_VALUE",
 * //             ParameterApplyStatus: "STRING_VALUE",
 * //             ParameterApplyErrorDescription: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     ClusterSubnetGroupName: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     PendingModifiedValues: { // PendingModifiedValues
 * //       MasterUserPassword: "STRING_VALUE",
 * //       NodeType: "STRING_VALUE",
 * //       NumberOfNodes: Number("int"),
 * //       ClusterType: "STRING_VALUE",
 * //       ClusterVersion: "STRING_VALUE",
 * //       AutomatedSnapshotRetentionPeriod: Number("int"),
 * //       ClusterIdentifier: "STRING_VALUE",
 * //       PubliclyAccessible: true || false,
 * //       EnhancedVpcRouting: true || false,
 * //       MaintenanceTrackName: "STRING_VALUE",
 * //       EncryptionType: "STRING_VALUE",
 * //     },
 * //     ClusterVersion: "STRING_VALUE",
 * //     AllowVersionUpgrade: true || false,
 * //     NumberOfNodes: Number("int"),
 * //     PubliclyAccessible: true || false,
 * //     Encrypted: true || false,
 * //     RestoreStatus: { // RestoreStatus
 * //       Status: "STRING_VALUE",
 * //       CurrentRestoreRateInMegaBytesPerSecond: Number("double"),
 * //       SnapshotSizeInMegaBytes: Number("long"),
 * //       ProgressInMegaBytes: Number("long"),
 * //       ElapsedTimeInSeconds: Number("long"),
 * //       EstimatedTimeToCompletionInSeconds: Number("long"),
 * //     },
 * //     DataTransferProgress: { // DataTransferProgress
 * //       Status: "STRING_VALUE",
 * //       CurrentRateInMegaBytesPerSecond: Number("double"),
 * //       TotalDataInMegaBytes: Number("long"),
 * //       DataTransferredInMegaBytes: Number("long"),
 * //       EstimatedTimeToCompletionInSeconds: Number("long"),
 * //       ElapsedTimeInSeconds: Number("long"),
 * //     },
 * //     HsmStatus: { // HsmStatus
 * //       HsmClientCertificateIdentifier: "STRING_VALUE",
 * //       HsmConfigurationIdentifier: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //     },
 * //     ClusterSnapshotCopyStatus: { // ClusterSnapshotCopyStatus
 * //       DestinationRegion: "STRING_VALUE",
 * //       RetentionPeriod: Number("long"),
 * //       ManualSnapshotRetentionPeriod: Number("int"),
 * //       SnapshotCopyGrantName: "STRING_VALUE",
 * //     },
 * //     ClusterPublicKey: "STRING_VALUE",
 * //     ClusterNodes: [ // ClusterNodesList
 * //       { // ClusterNode
 * //         NodeRole: "STRING_VALUE",
 * //         PrivateIPAddress: "STRING_VALUE",
 * //         PublicIPAddress: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ElasticIpStatus: { // ElasticIpStatus
 * //       ElasticIp: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //     },
 * //     ClusterRevisionNumber: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     KmsKeyId: "STRING_VALUE",
 * //     EnhancedVpcRouting: true || false,
 * //     IamRoles: [ // ClusterIamRoleList
 * //       { // ClusterIamRole
 * //         IamRoleArn: "STRING_VALUE",
 * //         ApplyStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PendingActions: [ // PendingActionsList
 * //       "STRING_VALUE",
 * //     ],
 * //     MaintenanceTrackName: "STRING_VALUE",
 * //     ElasticResizeNumberOfNodeOptions: "STRING_VALUE",
 * //     DeferredMaintenanceWindows: [ // DeferredMaintenanceWindowsList
 * //       { // DeferredMaintenanceWindow
 * //         DeferMaintenanceIdentifier: "STRING_VALUE",
 * //         DeferMaintenanceStartTime: new Date("TIMESTAMP"),
 * //         DeferMaintenanceEndTime: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     SnapshotScheduleIdentifier: "STRING_VALUE",
 * //     SnapshotScheduleState: "MODIFYING" || "ACTIVE" || "FAILED",
 * //     ExpectedNextSnapshotScheduleTime: new Date("TIMESTAMP"),
 * //     ExpectedNextSnapshotScheduleTimeStatus: "STRING_VALUE",
 * //     NextMaintenanceWindowStartTime: new Date("TIMESTAMP"),
 * //     ResizeInfo: { // ResizeInfo
 * //       ResizeType: "STRING_VALUE",
 * //       AllowCancelResize: true || false,
 * //     },
 * //     AvailabilityZoneRelocationStatus: "STRING_VALUE",
 * //     ClusterNamespaceArn: "STRING_VALUE",
 * //     TotalStorageCapacityInMegaBytes: Number("long"),
 * //     AquaConfiguration: { // AquaConfiguration
 * //       AquaStatus: "enabled" || "disabled" || "applying",
 * //       AquaConfigurationStatus: "enabled" || "disabled" || "auto",
 * //     },
 * //     DefaultIamRoleArn: "STRING_VALUE",
 * //     ReservedNodeExchangeStatus: { // ReservedNodeExchangeStatus
 * //       ReservedNodeExchangeRequestId: "STRING_VALUE",
 * //       Status: "REQUESTED" || "PENDING" || "IN_PROGRESS" || "RETRYING" || "SUCCEEDED" || "FAILED",
 * //       RequestTime: new Date("TIMESTAMP"),
 * //       SourceReservedNodeId: "STRING_VALUE",
 * //       SourceReservedNodeType: "STRING_VALUE",
 * //       SourceReservedNodeCount: Number("int"),
 * //       TargetReservedNodeOfferingId: "STRING_VALUE",
 * //       TargetReservedNodeType: "STRING_VALUE",
 * //       TargetReservedNodeCount: Number("int"),
 * //     },
 * //     CustomDomainName: "STRING_VALUE",
 * //     CustomDomainCertificateArn: "STRING_VALUE",
 * //     CustomDomainCertificateExpiryDate: new Date("TIMESTAMP"),
 * //     MasterPasswordSecretArn: "STRING_VALUE",
 * //     MasterPasswordSecretKmsKeyId: "STRING_VALUE",
 * //     IpAddressType: "STRING_VALUE",
 * //     MultiAZ: "STRING_VALUE",
 * //     MultiAZSecondary: { // SecondaryClusterInfo
 * //       AvailabilityZone: "STRING_VALUE",
 * //       ClusterNodes: [
 * //         {
 * //           NodeRole: "STRING_VALUE",
 * //           PrivateIPAddress: "STRING_VALUE",
 * //           PublicIPAddress: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     LakehouseRegistrationStatus: "STRING_VALUE",
 * //     CatalogArn: "STRING_VALUE",
 * //     ExtraComputeForAutomaticOptimization: "STRING_VALUE",
 * //     LoggingPublishStatus: { // LoggingPublishStatus
 * //       S3Tables: { // S3TablePublishStatus
 * //         S3Tables: [ // LogTypeList
 * //           "STRING_VALUE",
 * //         ],
 * //         S3TableNamespace: "STRING_VALUE",
 * //         S3TableGranularity: "STRING_VALUE",
 * //         EnabledAll: true || false,
 * //         LastIngestionTimes: { // S3TableLastIngestionTimeMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RestoreFromClusterSnapshotCommandInput - {@link RestoreFromClusterSnapshotCommandInput}
 * @returns {@link RestoreFromClusterSnapshotCommandOutput}
 * @see {@link RestoreFromClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreFromClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link AccessToSnapshotDeniedFault} (client fault)
 *
 * The owner of the specified snapshot has not authorized your account to access the snapshot.
 *
 * @throws {@link ClusterAlreadyExistsFault} (client fault)
 *
 * The account already has a cluster with the given identifier.
 *
 * @throws {@link ClusterParameterGroupNotFoundFault} (client fault)
 *
 * The parameter group name does not refer to an existing parameter group.
 *
 * @throws {@link ClusterQuotaExceededFault} (client fault)
 *
 * The request would exceed the allowed number of cluster instances for this account. For information about increasing your quota, go to [Limits in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @throws {@link ClusterSecurityGroupNotFoundFault} (client fault)
 *
 * The cluster security group name does not refer to an existing cluster security group.
 *
 * @throws {@link ClusterSnapshotNotFoundFault} (client fault)
 *
 * The snapshot identifier does not refer to an existing cluster snapshot.
 *
 * @throws {@link ClusterSubnetGroupNotFoundFault} (client fault)
 *
 * The cluster subnet group name does not refer to an existing cluster subnet group.
 *
 * @throws {@link DependentServiceAccessDeniedFault} (client fault)
 *
 * A dependent service denied access for the integration.
 *
 * @throws {@link DependentServiceRequestThrottlingFault} (client fault)
 *
 * The request cannot be completed because a dependent service is throttling requests made by Amazon Redshift on your behalf. Wait and retry the request.
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *
 * Your request cannot be completed because a dependent internal service is temporarily unavailable. Wait 30 to 60 seconds and try again.
 *
 * @throws {@link HsmClientCertificateNotFoundFault} (client fault)
 *
 * There is no Amazon Redshift HSM client certificate with the specified identifier.
 *
 * @throws {@link HsmConfigurationNotFoundFault} (client fault)
 *
 * There is no Amazon Redshift HSM configuration with the specified identifier.
 *
 * @throws {@link InsufficientClusterCapacityFault} (client fault)
 *
 * The number of nodes specified exceeds the allotted capacity of the cluster.
 *
 * @throws {@link InvalidClusterSnapshotStateFault} (client fault)
 *
 * The specified cluster snapshot is not in the `available` state, or other accounts are authorized to access the snapshot.
 *
 * @throws {@link InvalidClusterSubnetGroupStateFault} (client fault)
 *
 * The cluster subnet group cannot be deleted because it is in use.
 *
 * @throws {@link InvalidClusterTrackFault} (client fault)
 *
 * The provided cluster track name is not valid.
 *
 * @throws {@link InvalidElasticIpFault} (client fault)
 *
 * The Elastic IP (EIP) is invalid or cannot be found.
 *
 * @throws {@link InvalidReservedNodeStateFault} (client fault)
 *
 * Indicates that the Reserved Node being exchanged is not in an active state.
 *
 * @throws {@link InvalidRestoreFault} (client fault)
 *
 * The restore is invalid.
 *
 * @throws {@link InvalidSubnet} (client fault)
 *
 * The requested subnet is not valid, or not all of the subnets are in the same VPC.
 *
 * @throws {@link InvalidTagFault} (client fault)
 *
 * The tag is invalid.
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *
 * The cluster subnet group does not cover all Availability Zones.
 *
 * @throws {@link Ipv6CidrBlockNotFoundFault} (client fault)
 *
 * There are no subnets in your VPC with associated IPv6 CIDR blocks. To use dual-stack mode, associate an IPv6 CIDR block with each subnet in your VPC.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *
 * The encryption key has exceeded its grant limit in Amazon Web Services KMS.
 *
 * @throws {@link NumberOfNodesPerClusterLimitExceededFault} (client fault)
 *
 * The operation would exceed the number of nodes allowed for a cluster.
 *
 * @throws {@link NumberOfNodesQuotaExceededFault} (client fault)
 *
 * The operation would exceed the number of nodes allotted to the account. For information about increasing your quota, go to [Limits in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @throws {@link RedshiftIdcApplicationNotExistsFault} (client fault)
 *
 * The application you attempted to find doesn't exist.
 *
 * @throws {@link ReservedNodeAlreadyExistsFault} (client fault)
 *
 * User already has a reservation with the given identifier.
 *
 * @throws {@link ReservedNodeAlreadyMigratedFault} (client fault)
 *
 * Indicates that the reserved node has already been exchanged.
 *
 * @throws {@link ReservedNodeNotFoundFault} (client fault)
 *
 * The specified reserved compute node not found.
 *
 * @throws {@link ReservedNodeOfferingNotFoundFault} (client fault)
 *
 * Specified offering does not exist.
 *
 * @throws {@link SnapshotScheduleNotFoundFault} (client fault)
 *
 * We could not find the specified snapshot schedule.
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *
 * You have exceeded the number of tags allowed.
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *
 * Your account is not authorized to perform the requested operation.
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *
 * The requested operation isn't supported.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class RestoreFromClusterSnapshotCommand extends command<RestoreFromClusterSnapshotCommandInput, RestoreFromClusterSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "RestoreFromClusterSnapshot",
  RestoreFromClusterSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreFromClusterSnapshotMessage;
      output: RestoreFromClusterSnapshotResult;
    };
    sdk: {
      input: RestoreFromClusterSnapshotCommandInput;
      output: RestoreFromClusterSnapshotCommandOutput;
    };
  };
}
