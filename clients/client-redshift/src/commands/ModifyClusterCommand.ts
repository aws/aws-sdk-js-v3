// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyClusterMessage, ModifyClusterResult } from "../models/models_0";
import { ModifyCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyClusterCommand}.
 */
export interface ModifyClusterCommandInput extends ModifyClusterMessage {}
/**
 * @public
 *
 * The output of {@link ModifyClusterCommand}.
 */
export interface ModifyClusterCommandOutput extends ModifyClusterResult, __MetadataBearer {}

/**
 * Modifies the settings for a cluster.
 *
 * You can also change node type and the number of nodes to scale up or down the cluster. When resizing a cluster, you must specify both the number of nodes and the node type even if one of the parameters does not change.
 *
 * You can add another security or parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect. For more information about managing clusters, go to [Amazon Redshift Clusters](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html) in the *Amazon Redshift Cluster Management Guide*.
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // ModifyClusterMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   ClusterType: "STRING_VALUE",
 *   NodeType: "STRING_VALUE",
 *   NumberOfNodes: Number("int"),
 *   ClusterSecurityGroups: [ // ClusterSecurityGroupNameList
 *     "STRING_VALUE",
 *   ],
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   MasterUserPassword: "STRING_VALUE",
 *   ClusterParameterGroupName: "STRING_VALUE",
 *   AutomatedSnapshotRetentionPeriod: Number("int"),
 *   ManualSnapshotRetentionPeriod: Number("int"),
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   ClusterVersion: "STRING_VALUE",
 *   AllowVersionUpgrade: true || false,
 *   HsmClientCertificateIdentifier: "STRING_VALUE",
 *   HsmConfigurationIdentifier: "STRING_VALUE",
 *   NewClusterIdentifier: "STRING_VALUE",
 *   PubliclyAccessible: true || false,
 *   ElasticIp: "STRING_VALUE",
 *   EnhancedVpcRouting: true || false,
 *   MaintenanceTrackName: "STRING_VALUE",
 *   Encrypted: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   AvailabilityZoneRelocation: true || false,
 *   AvailabilityZone: "STRING_VALUE",
 *   Port: Number("int"),
 *   ManageMasterPassword: true || false,
 *   MasterPasswordSecretKmsKeyId: "STRING_VALUE",
 *   IpAddressType: "STRING_VALUE",
 *   MultiAZ: true || false,
 *   ExtraComputeForAutomaticOptimization: true || false,
 * };
 * const command = new ModifyClusterCommand(input);
 * const response = await client.send(command);
 * // { // ModifyClusterResult
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
 * @param ModifyClusterCommandInput - {@link ModifyClusterCommandInput}
 * @returns {@link ModifyClusterCommandOutput}
 * @see {@link ModifyClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterAlreadyExistsFault} (client fault)
 *
 * The account already has a cluster with the given identifier.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *
 * The `ClusterIdentifier` parameter does not refer to an existing cluster.
 *
 * @throws {@link ClusterParameterGroupNotFoundFault} (client fault)
 *
 * The parameter group name does not refer to an existing parameter group.
 *
 * @throws {@link ClusterSecurityGroupNotFoundFault} (client fault)
 *
 * The cluster security group name does not refer to an existing cluster security group.
 *
 * @throws {@link CustomCnameAssociationFault} (client fault)
 *
 * An error occurred when an attempt was made to change the custom domain association.
 *
 * @throws {@link DependentServiceRequestThrottlingFault} (client fault)
 *
 * The request cannot be completed because a dependent service is throttling requests made by Amazon Redshift on your behalf. Wait and retry the request.
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
 * @throws {@link InvalidClusterSecurityGroupStateFault} (client fault)
 *
 * The state of the cluster security group is not `available`.
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *
 * The specified cluster is not in the `available` state.
 *
 * @throws {@link InvalidClusterTrackFault} (client fault)
 *
 * The provided cluster track name is not valid.
 *
 * @throws {@link InvalidElasticIpFault} (client fault)
 *
 * The Elastic IP (EIP) is invalid or cannot be found.
 *
 * @throws {@link InvalidRetentionPeriodFault} (client fault)
 *
 * The retention period specified is either in the past or is not a valid value.
 *
 * The value must be either -1 or an integer between 1 and 3,653.
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
 * @throws {@link TableLimitExceededFault} (client fault)
 *
 * The number of tables in the cluster exceeds the limit for the requested new cluster node type.
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *
 * Your account is not authorized to perform the requested operation.
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *
 * The requested operation isn't supported.
 *
 * @throws {@link UnsupportedOptionFault} (client fault)
 *
 * A request option was specified that is not supported.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class ModifyClusterCommand extends command<ModifyClusterCommandInput, ModifyClusterCommandOutput>(
  _ep0,
  _mw0,
  "ModifyCluster",
  ModifyCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyClusterMessage;
      output: ModifyClusterResult;
    };
    sdk: {
      input: ModifyClusterCommandInput;
      output: ModifyClusterCommandOutput;
    };
  };
}
