// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateClusterMessage, CreateClusterResult } from "../models/models_0";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateCluster } from "../schemas/schemas_4_Cluster";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandInput extends CreateClusterMessage {}
/**
 * @public
 *
 * The output of {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandOutput extends CreateClusterResult, __MetadataBearer {}

/**
 * <p>Creates a new cluster with the specified parameters.</p>
 *          <p>To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster
 *             subnet group name. The cluster subnet group identifies the subnets of your VPC that
 *             Amazon Redshift uses when creating the cluster.
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 *          <p>VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that
 *             you own in a Region from reaching or being reached from the internet through internet
 *             gateways and egress-only internet gateways. If a subnet group for a
 *             provisioned cluster is in an account with VPC BPA turned on, the following capabilities
 *             are blocked:</p>
 *          <ul>
 *             <li>
 *                <p>Creating a public cluster</p>
 *             </li>
 *             <li>
 *                <p>Restoring a public cluster</p>
 *             </li>
 *             <li>
 *                <p>Modifying a private cluster to be public</p>
 *             </li>
 *             <li>
 *                <p>Adding a subnet with VPC BPA turned on to the subnet group when there's at
 *                     least one public cluster within the group</p>
 *             </li>
 *          </ul>
 *          <p>For more information about VPC BPA, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/security-vpc-bpa.html">Block public access to VPCs and
 *             subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateClusterCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // CreateClusterMessage
 *   DBName: "STRING_VALUE",
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   ClusterType: "STRING_VALUE",
 *   NodeType: "STRING_VALUE", // required
 *   MasterUsername: "STRING_VALUE", // required
 *   MasterUserPassword: "STRING_VALUE",
 *   ClusterSecurityGroups: [ // ClusterSecurityGroupNameList
 *     "STRING_VALUE",
 *   ],
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   ClusterSubnetGroupName: "STRING_VALUE",
 *   AvailabilityZone: "STRING_VALUE",
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   ClusterParameterGroupName: "STRING_VALUE",
 *   AutomatedSnapshotRetentionPeriod: Number("int"),
 *   ManualSnapshotRetentionPeriod: Number("int"),
 *   Port: Number("int"),
 *   ClusterVersion: "STRING_VALUE",
 *   AllowVersionUpgrade: true || false,
 *   NumberOfNodes: Number("int"),
 *   PubliclyAccessible: true || false,
 *   Encrypted: true || false,
 *   HsmClientCertificateIdentifier: "STRING_VALUE",
 *   HsmConfigurationIdentifier: "STRING_VALUE",
 *   ElasticIp: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   KmsKeyId: "STRING_VALUE",
 *   EnhancedVpcRouting: true || false,
 *   AdditionalInfo: "STRING_VALUE",
 *   IamRoles: [ // IamRoleArnList
 *     "STRING_VALUE",
 *   ],
 *   MaintenanceTrackName: "STRING_VALUE",
 *   SnapshotScheduleIdentifier: "STRING_VALUE",
 *   AvailabilityZoneRelocation: true || false,
 *   AquaConfigurationStatus: "enabled" || "disabled" || "auto",
 *   DefaultIamRoleArn: "STRING_VALUE",
 *   LoadSampleData: "STRING_VALUE",
 *   ManageMasterPassword: true || false,
 *   MasterPasswordSecretKmsKeyId: "STRING_VALUE",
 *   IpAddressType: "STRING_VALUE",
 *   MultiAZ: true || false,
 *   RedshiftIdcApplicationArn: "STRING_VALUE",
 * };
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterResult
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
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateClusterCommandInput - {@link CreateClusterCommandInput}
 * @returns {@link CreateClusterCommandOutput}
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterAlreadyExistsFault} (client fault)
 *  <p>The account already has a cluster with the given identifier.</p>
 *
 * @throws {@link ClusterParameterGroupNotFoundFault} (client fault)
 *  <p>The parameter group name does not refer to an existing parameter group.</p>
 *
 * @throws {@link ClusterQuotaExceededFault} (client fault)
 *  <p>The request would exceed the allowed number of cluster instances for this account.
 *
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 *
 * @throws {@link ClusterSecurityGroupNotFoundFault} (client fault)
 *  <p>The cluster security group name does not refer to an existing cluster security
 *             group.</p>
 *
 * @throws {@link ClusterSubnetGroupNotFoundFault} (client fault)
 *  <p>The cluster subnet group name does not refer to an existing cluster subnet
 *             group.</p>
 *
 * @throws {@link DependentServiceRequestThrottlingFault} (client fault)
 *  <p>The request cannot be completed because a dependent service is throttling requests
 *             made by Amazon Redshift on your behalf. Wait and retry the request.</p>
 *
 * @throws {@link HsmClientCertificateNotFoundFault} (client fault)
 *  <p>There is no Amazon Redshift HSM client certificate with the specified
 *             identifier.</p>
 *
 * @throws {@link HsmConfigurationNotFoundFault} (client fault)
 *  <p>There is no Amazon Redshift HSM configuration with the specified identifier.</p>
 *
 * @throws {@link InsufficientClusterCapacityFault} (client fault)
 *  <p>The number of nodes specified exceeds the allotted capacity of the
 *             cluster.</p>
 *
 * @throws {@link InvalidClusterSubnetGroupStateFault} (client fault)
 *  <p>The cluster subnet group cannot be deleted because it is in use.</p>
 *
 * @throws {@link InvalidClusterTrackFault} (client fault)
 *  <p>The provided cluster track name is not valid.</p>
 *
 * @throws {@link InvalidElasticIpFault} (client fault)
 *  <p>The Elastic IP (EIP) is invalid or cannot be found.</p>
 *
 * @throws {@link InvalidRetentionPeriodFault} (client fault)
 *  <p>The retention period specified is either in the past or is not a valid value.</p>
 *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is not valid, or not all of the subnets are in the same
 *             VPC.</p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>The cluster subnet group does not cover all Availability Zones.</p>
 *
 * @throws {@link Ipv6CidrBlockNotFoundFault} (client fault)
 *  <p>There are no subnets in your VPC with associated IPv6 CIDR blocks. To use dual-stack mode,
 *             associate an IPv6 CIDR block with each subnet in your VPC.</p>
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>The encryption key has exceeded its grant limit in Amazon Web Services KMS.</p>
 *
 * @throws {@link NumberOfNodesPerClusterLimitExceededFault} (client fault)
 *  <p>The operation would exceed the number of nodes allowed for a cluster.</p>
 *
 * @throws {@link NumberOfNodesQuotaExceededFault} (client fault)
 *  <p>The operation would exceed the number of nodes allotted to the account.
 *
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 *
 * @throws {@link RedshiftIdcApplicationNotExistsFault} (client fault)
 *  <p>The application you attempted to find doesn't exist.</p>
 *
 * @throws {@link SnapshotScheduleNotFoundFault} (client fault)
 *  <p>We could not find the specified snapshot schedule. </p>
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *  <p>You have exceeded the number of tags allowed.</p>
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Your account is not authorized to perform the requested operation.</p>
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
export class CreateClusterCommand extends $Command
  .classBuilder<
    CreateClusterCommandInput,
    CreateClusterCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "CreateCluster", {})
  .n("RedshiftClient", "CreateClusterCommand")
  .sc(CreateCluster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClusterMessage;
      output: CreateClusterResult;
    };
    sdk: {
      input: CreateClusterCommandInput;
      output: CreateClusterCommandOutput;
    };
  };
}
