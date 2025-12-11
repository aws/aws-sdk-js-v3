// smithy-typescript generated code
import {
  AquaConfigurationStatus,
  LakehouseIdcRegistration,
  LakehouseRegistration,
  NamespaceRegistrationStatus,
  PartnerIntegrationStatus,
  UsageLimitBreachAction,
} from "./enums";

import {
  type Cluster,
  type ClusterSecurityGroup,
  type NamespaceIdentifierUnion,
  type RedshiftIdcApplication,
  type ReservedNode,
  type ResourcePolicy,
  type ScheduledActionType,
  type Snapshot,
  type TableRestoreStatus,
  AuthorizedTokenIssuer,
  Parameter,
  ServiceIntegrationsUnion,
} from "./models_0";

/**
 * @public
 */
export interface ModifyLakehouseConfigurationMessage {
  /**
   * <p>The unique identifier of the cluster whose lakehouse configuration you want to modify.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>Specifies whether to register or deregister the cluster with Amazon Redshift federated permissions. Valid values are <code>Register</code> or <code>Deregister</code>.</p>
   * @public
   */
  LakehouseRegistration?: LakehouseRegistration | undefined;

  /**
   * <p>The name of the Glue data catalog that will be associated with the cluster enabled with Amazon Redshift federated permissions.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain at least one lowercase letter.</p>
   *             </li>
   *             <li>
   *                <p>Can only contain lowercase letters (a-z), numbers (0-9), underscores (_), and hyphens (-).</p>
   *             </li>
   *          </ul>
   *          <p>Pattern: <code>^[a-z0-9_-]*[a-z]+[a-z0-9_-]*$</code>
   *          </p>
   *          <p>Example: <code>my-catalog_01</code>
   *          </p>
   * @public
   */
  CatalogName?: string | undefined;

  /**
   * <p>Modifies the Amazon Web Services IAM Identity Center trusted identity propagation on a cluster enabled with Amazon Redshift federated permissions. Valid values are <code>Associate</code> or <code>Disassociate</code>.</p>
   * @public
   */
  LakehouseIdcRegistration?: LakehouseIdcRegistration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM Identity Center application used for enabling Amazon Web Services IAM Identity Center trusted identity propagation on a cluster enabled with Amazon Redshift federated permissions.</p>
   * @public
   */
  LakehouseIdcApplicationArn?: string | undefined;

  /**
   * <p>A boolean value that, if <code>true</code>, validates the request without actually modifying the lakehouse configuration. Use this to check for errors before making changes.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyRedshiftIdcApplicationMessage {
  /**
   * <p>The ARN for the Redshift application that integrates with IAM Identity Center.</p>
   * @public
   */
  RedshiftIdcApplicationArn: string | undefined;

  /**
   * <p>The namespace for the Amazon Redshift IAM Identity Center application to change. It determines which managed application
   *             verifies the connection token.</p>
   * @public
   */
  IdentityNamespace?: string | undefined;

  /**
   * <p>The IAM role ARN associated with the Amazon Redshift IAM Identity Center application to change. It has the required permissions
   *             to be assumed and invoke the IDC Identity Center API.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>The display name for the Amazon Redshift IAM Identity Center application to change. It appears on the console.</p>
   * @public
   */
  IdcDisplayName?: string | undefined;

  /**
   * <p>The authorized token issuer list for the Amazon Redshift IAM Identity Center application to change.</p>
   * @public
   */
  AuthorizedTokenIssuerList?: AuthorizedTokenIssuer[] | undefined;

  /**
   * <p>A collection of service integrations associated with the application.</p>
   * @public
   */
  ServiceIntegrations?: ServiceIntegrationsUnion[] | undefined;
}

/**
 * @public
 */
export interface ModifyRedshiftIdcApplicationResult {
  /**
   * <p>Contains properties for the Redshift IDC application.</p>
   * @public
   */
  RedshiftIdcApplication?: RedshiftIdcApplication | undefined;
}

/**
 * @public
 */
export interface ModifyScheduledActionMessage {
  /**
   * <p>The name of the scheduled action to modify. </p>
   * @public
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>A modified JSON format of the scheduled action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   * @public
   */
  TargetAction?: ScheduledActionType | undefined;

  /**
   * <p>A modified schedule in either <code>at( )</code> or <code>cron( )</code> format.
   *             For more information about this parameter, see <a>ScheduledAction</a>.</p>
   * @public
   */
  Schedule?: string | undefined;

  /**
   * <p>A different IAM role to assume to run the target action.
   *             For more information about this parameter, see <a>ScheduledAction</a>.</p>
   * @public
   */
  IamRole?: string | undefined;

  /**
   * <p>A modified description of the scheduled action. </p>
   * @public
   */
  ScheduledActionDescription?: string | undefined;

  /**
   * <p>A modified start time of the scheduled action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>A modified end time of the scheduled action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>A modified enable flag of the scheduled action. If true, the scheduled action is active. If false, the scheduled action is disabled. </p>
   * @public
   */
  Enable?: boolean | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifySnapshotCopyRetentionPeriodMessage {
  /**
   * <p>The unique identifier of the cluster for which you want to change the retention
   *             period for either automated or manual snapshots that are copied to a destination Amazon Web Services Region.</p>
   *          <p>Constraints: Must be the valid name of an existing cluster that has cross-region
   *             snapshot copy enabled.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The number of days to retain automated snapshots in the destination Amazon Web Services Region
   *             after they are copied from the source Amazon Web Services Region.</p>
   *          <p>By default, this only changes the retention period of copied automated snapshots. </p>
   *          <p>If you decrease the retention period for automated snapshots that are copied to a
   *             destination Amazon Web Services Region, Amazon Redshift deletes any existing automated snapshots that were
   *             copied to the destination Amazon Web Services Region and that fall outside of the new retention
   *             period.</p>
   *          <p>Constraints: Must be at least 1 and no more than 35 for automated snapshots. </p>
   *          <p>If you specify the <code>manual</code> option, only newly copied manual snapshots will
   *             have the new retention period. </p>
   *          <p>If you specify the value of -1 newly copied manual snapshots are retained
   *             indefinitely.</p>
   *          <p>Constraints: The number of days must be either -1 or an integer between 1 and 3,653
   *             for manual snapshots.</p>
   * @public
   */
  RetentionPeriod: number | undefined;

  /**
   * <p>Indicates whether to apply the snapshot retention period to newly copied manual
   *             snapshots instead of automated snapshots.</p>
   * @public
   */
  Manual?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifySnapshotCopyRetentionPeriodResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface ModifySnapshotScheduleMessage {
  /**
   * <p>A unique alphanumeric identifier of the schedule to modify.</p>
   * @public
   */
  ScheduleIdentifier: string | undefined;

  /**
   * <p>An updated list of schedule definitions. A schedule definition is made up of schedule
   *             expressions, for example, "cron(30 12 *)" or "rate(12 hours)".</p>
   * @public
   */
  ScheduleDefinitions: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyUsageLimitMessage {
  /**
   * <p>The identifier of the usage limit to modify.</p>
   * @public
   */
  UsageLimitId: string | undefined;

  /**
   * <p>The new limit amount.
   *             For more information about this parameter, see <a>UsageLimit</a>. </p>
   * @public
   */
  Amount?: number | undefined;

  /**
   * <p>The new action that Amazon Redshift takes when the limit is reached.
   *             For more information about this parameter, see <a>UsageLimit</a>. </p>
   * @public
   */
  BreachAction?: UsageLimitBreachAction | undefined;
}

/**
 * @public
 */
export interface PauseClusterResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface PurchaseReservedNodeOfferingMessage {
  /**
   * <p>The unique identifier of the reserved node offering you want to purchase.</p>
   * @public
   */
  ReservedNodeOfferingId: string | undefined;

  /**
   * <p>The number of reserved nodes that you want to purchase.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   * @public
   */
  NodeCount?: number | undefined;
}

/**
 * @public
 */
export interface PurchaseReservedNodeOfferingResult {
  /**
   * <p>Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node
   *             offerings. </p>
   * @public
   */
  ReservedNode?: ReservedNode | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource of which its resource policy is updated.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The content of the resource policy being updated.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResult {
  /**
   * <p>The content of the updated resource policy.</p>
   * @public
   */
  ResourcePolicy?: ResourcePolicy | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RebootClusterMessage {
  /**
   * <p>The cluster identifier.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RebootClusterResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface RegisterNamespaceInputMessage {
  /**
   * <p>The unique identifier of the cluster or
   *             serverless namespace that you want to register. </p>
   * @public
   */
  NamespaceIdentifier: NamespaceIdentifierUnion | undefined;

  /**
   * <p>An array containing the ID of the consumer account
   *             that you want to register the namespace to.</p>
   * @public
   */
  ConsumerIdentifiers: string[] | undefined;
}

/**
 * @public
 */
export interface RegisterNamespaceOutputMessage {
  /**
   * <p>The registration status of the cluster or
   *             serverless namespace.</p>
   * @public
   */
  Status?: NamespaceRegistrationStatus | undefined;
}

/**
 * @public
 */
export interface RejectDataShareMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare to reject.</p>
   * @public
   */
  DataShareArn: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ResetClusterParameterGroupMessage {
  /**
   * <p>The name of the cluster parameter group to be reset.</p>
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>If <code>true</code>, all parameters in the specified parameter group will be reset
   *             to their default values. </p>
   *          <p>Default: <code>true</code>
   *          </p>
   * @public
   */
  ResetAllParameters?: boolean | undefined;

  /**
   * <p>An array of names of parameters to be reset. If
   *                 <i>ResetAllParameters</i> option is not used, then at least one
   *             parameter name must be supplied. </p>
   *          <p>Constraints: A maximum of 20 parameters can be reset in a single request.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface ResizeClusterResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RestoreFromClusterSnapshotMessage {
  /**
   * <p>The identifier of the cluster that will be created from restoring the
   *             snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Alphabetic characters must be lowercase.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Must be unique for all clusters within an Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the snapshot from which to create the new cluster. This parameter isn't
   *             case sensitive. You must specify this parameter or <code>snapshotArn</code>, but not both.</p>
   *          <p>Example: <code>my-snapshot-id</code>
   *          </p>
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot associated with the message to restore from a cluster. You must specify
   *             this parameter or <code>snapshotIdentifier</code>, but not both.</p>
   * @public
   */
  SnapshotArn?: string | undefined;

  /**
   * <p>The name of the cluster the source snapshot was created from. This parameter is
   *             required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   * @public
   */
  SnapshotClusterIdentifier?: string | undefined;

  /**
   * <p>The port number on which the cluster accepts connections.</p>
   *          <p>Default: The same port as the original cluster.</p>
   *          <p>Valid values: For clusters with DC2 nodes, must be within the range <code>1150</code>-<code>65535</code>. For clusters with ra3 nodes, must be
   *             within the ranges <code>5431</code>-<code>5455</code> or <code>8191</code>-<code>8215</code>.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The Amazon EC2 Availability Zone in which to restore the cluster.</p>
   *          <p>Default: A random, system-chosen Availability Zone.</p>
   *          <p>Example: <code>us-east-2a</code>
   *          </p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>If <code>true</code>, major version upgrades can be applied during the maintenance
   *             window to the Amazon Redshift engine that is running on the cluster. </p>
   *          <p>Default: <code>true</code>
   *          </p>
   * @public
   */
  AllowVersionUpgrade?: boolean | undefined;

  /**
   * <p>The name of the subnet group where you want to cluster restored.</p>
   *          <p>A snapshot of cluster in VPC can be restored only in VPC. Therefore, you must
   *             provide subnet group name where you want the cluster restored.</p>
   * @public
   */
  ClusterSubnetGroupName?: string | undefined;

  /**
   * <p>If <code>true</code>, the cluster can be accessed from a public network. </p>
   *          <p>Default: false</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>The Amazon Web Services account used to create or copy the snapshot. Required if you are
   *             restoring a snapshot you do not own, optional if you own the snapshot.</p>
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * <p>Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to
   *             retrieve the data encryption keys stored in an HSM.</p>
   * @public
   */
  HsmClientCertificateIdentifier?: string | undefined;

  /**
   * <p>Specifies the name of the HSM configuration that contains the information the
   *             Amazon Redshift cluster can use to retrieve and store keys in an HSM.</p>
   * @public
   */
  HsmConfigurationIdentifier?: string | undefined;

  /**
   * <p>The Elastic IP (EIP) address for the cluster. Don't specify the Elastic IP address for a publicly
   *             accessible cluster with availability zone relocation turned on.</p>
   * @public
   */
  ElasticIp?: string | undefined;

  /**
   * <p>The name of the parameter group to be associated with this cluster.</p>
   *          <p>Default: The default Amazon Redshift cluster parameter group. For information about the
   *             default parameter group, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Working with Amazon
   *                 Redshift Parameter Groups</a>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ClusterParameterGroupName?: string | undefined;

  /**
   * <p>A list of security groups to be associated with this cluster.</p>
   *          <p>Default: The default cluster security group for Amazon Redshift.</p>
   *          <p>Cluster security groups only apply to clusters outside of VPCs.</p>
   * @public
   */
  ClusterSecurityGroups?: string[] | undefined;

  /**
   * <p>A list of Virtual Private Cloud (VPC) security groups to be associated with the
   *             cluster.</p>
   *          <p>Default: The default VPC security group is associated with the cluster.</p>
   *          <p>VPC security groups only apply to clusters in VPCs.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The weekly time range (in UTC) during which automated cluster maintenance can
   *             occur.</p>
   *          <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p> Default: The value selected for the cluster from which the snapshot was taken. For
   *             more information about the time blocks for each region, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows">Maintenance Windows</a> in Amazon Redshift Cluster Management Guide. </p>
   *          <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The number of days that automated snapshots are retained. If the value is 0,
   *             automated snapshots are disabled. Even if automated snapshots are disabled, you can
   *             still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p>
   *          <p>You can't disable automated snapshots for RA3 node types. Set the automated retention period from 1-35 days.</p>
   *          <p>Default: The value selected for the cluster from which the snapshot was
   *             taken.</p>
   *          <p>Constraints: Must be a value from 0 to 35.</p>
   * @public
   */
  AutomatedSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>The default number of days to retain a manual snapshot. If the value is -1, the
   *             snapshot is retained indefinitely. This setting doesn't change the retention period
   *             of existing snapshots.</p>
   *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>The Key Management Service (KMS) key ID of the encryption key that encrypts data in the cluster
   *             restored from a shared snapshot. You can also provide
   *             the key ID when you restore from an unencrypted snapshot to an encrypted cluster in
   *             the same account. Additionally, you can specify a new KMS key ID when you restore from an encrypted
   *             snapshot in the same account in order to change it. In that case, the restored cluster is encrypted
   *             with the new KMS key ID.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The node type that the restored cluster will be provisioned with.</p>
   *          <p>If you have a DC instance type, you
   *             must restore into that same instance type and size. In other words, you can only restore
   *             a dc2.large node type into another dc2 type. For more information about node types, see
   *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-about-clusters-and-nodes">
   *                 About Clusters and Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>An option that specifies whether to create the cluster with enhanced VPC routing
   *             enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a
   *             VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in
   *             the Amazon Redshift Cluster Management Guide.</p>
   *          <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p>
   *          <p>Default: false</p>
   * @public
   */
  EnhancedVpcRouting?: boolean | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * <p>A list of Identity and Access Management (IAM) roles that can be used by the
   *             cluster to access other Amazon Web Services services. You must supply the IAM roles in their Amazon
   *             Resource Name (ARN) format. </p>
   *          <p>The maximum number of IAM roles that you can associate is subject to a quota.
   *             For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a>
   *             in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   * @public
   */
  IamRoles?: string[] | undefined;

  /**
   * <p>The name of the maintenance track for the restored cluster. When you take a snapshot,
   *             the snapshot inherits the <code>MaintenanceTrack</code> value from the cluster. The
   *             snapshot might be on a different track than the cluster that was the source for the
   *             snapshot. For example, suppose that you take a snapshot of a cluster that is on the
   *             current track and then change the cluster to be on the trailing track. In this case, the
   *             snapshot and the source cluster are on different tracks.</p>
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * <p>A unique identifier for the snapshot schedule.</p>
   * @public
   */
  SnapshotScheduleIdentifier?: string | undefined;

  /**
   * <p>The number of nodes specified when provisioning the restored cluster.</p>
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * <p>The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster is restored.</p>
   * @public
   */
  AvailabilityZoneRelocation?: boolean | undefined;

  /**
   * <p>This parameter is retired. It does not set the AQUA configuration status. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).</p>
   * @public
   */
  AquaConfigurationStatus?: AquaConfigurationStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was last modified while it was restored from a snapshot.</p>
   * @public
   */
  DefaultIamRoleArn?: string | undefined;

  /**
   * <p>The identifier of the target reserved node offering.</p>
   * @public
   */
  ReservedNodeId?: string | undefined;

  /**
   * <p>The identifier of the target reserved node offering.</p>
   * @public
   */
  TargetReservedNodeOfferingId?: string | undefined;

  /**
   * <p>Enables support for restoring an unencrypted snapshot to a cluster encrypted
   *             with Key Management Service (KMS) and a customer managed key.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>If <code>true</code>, Amazon Redshift uses Secrets Manager to manage the restored
   *             cluster's admin credentials. If <code>ManageMasterPassword</code> is false or not set,
   *             Amazon Redshift uses the admin credentials the cluster had at the time the snapshot was taken.</p>
   * @public
   */
  ManageMasterPassword?: boolean | undefined;

  /**
   * <p>The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin credentials secret.
   *             You can only use this parameter if <code>ManageMasterPassword</code> is true.</p>
   * @public
   */
  MasterPasswordSecretKmsKeyId?: string | undefined;

  /**
   * <p>The IP address type for the cluster. Possible values are <code>ipv4</code> and <code>dualstack</code>.</p>
   * @public
   */
  IpAddressType?: string | undefined;

  /**
   * <p>If true, the snapshot will be restored to a cluster deployed in two Availability Zones.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>The name of the Glue Data Catalog that will be associated with the cluster enabled with Amazon Redshift federated permissions.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain at least one lowercase letter.</p>
   *             </li>
   *             <li>
   *                <p>Can only contain lowercase letters (a-z), numbers (0-9), underscores (_), and hyphens (-).</p>
   *             </li>
   *          </ul>
   *          <p>Pattern: <code>^[a-z0-9_-]*[a-z]+[a-z0-9_-]*$</code>
   *          </p>
   *          <p>Example: <code>my-catalog_01</code>
   *          </p>
   * @public
   */
  CatalogName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM Identity Center application used for enabling Amazon Web Services IAM Identity Center trusted identity propagation on a cluster enabled with Amazon Redshift federated permissions.</p>
   * @public
   */
  RedshiftIdcApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface RestoreFromClusterSnapshotResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RestoreTableFromClusterSnapshotMessage {
  /**
   * <p>The identifier of the Amazon Redshift cluster to restore the table to.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the snapshot to restore the table from. This snapshot must have
   *             been created from the Amazon Redshift cluster specified by the
   *                 <code>ClusterIdentifier</code> parameter.</p>
   * @public
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The name of the source database that contains the table to restore from.</p>
   * @public
   */
  SourceDatabaseName: string | undefined;

  /**
   * <p>The name of the source schema that contains the table to restore from. If you do
   *             not specify a <code>SourceSchemaName</code> value, the default is
   *             <code>public</code>.</p>
   * @public
   */
  SourceSchemaName?: string | undefined;

  /**
   * <p>The name of the source table to restore from.</p>
   * @public
   */
  SourceTableName: string | undefined;

  /**
   * <p>The name of the database to restore the table to.</p>
   * @public
   */
  TargetDatabaseName?: string | undefined;

  /**
   * <p>The name of the schema to restore the table to.</p>
   * @public
   */
  TargetSchemaName?: string | undefined;

  /**
   * <p>The name of the table to create as a result of the current request.</p>
   * @public
   */
  NewTableName: string | undefined;

  /**
   * <p>Indicates whether name identifiers for database, schema, and table are case sensitive.
   *             If <code>true</code>, the names are case sensitive.
   *             If <code>false</code> (default), the names are not case sensitive.</p>
   * @public
   */
  EnableCaseSensitiveIdentifier?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreTableFromClusterSnapshotResult {
  /**
   * <p>Describes the status of a <a>RestoreTableFromClusterSnapshot</a>
   *             operation.</p>
   * @public
   */
  TableRestoreStatus?: TableRestoreStatus | undefined;
}

/**
 * @public
 */
export interface ResumeClusterResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RevokeClusterSecurityGroupIngressMessage {
  /**
   * <p>The name of the security Group from which to revoke the ingress rule.</p>
   * @public
   */
  ClusterSecurityGroupName: string | undefined;

  /**
   * <p>The IP range for which to revoke access. This range must be a valid Classless
   *             Inter-Domain Routing (CIDR) block of IP addresses. If <code>CIDRIP</code> is specified,
   *                 <code>EC2SecurityGroupName</code> and <code>EC2SecurityGroupOwnerId</code> cannot be
   *             provided. </p>
   * @public
   */
  CIDRIP?: string | undefined;

  /**
   * <p>The name of the EC2 Security Group whose access is to be revoked. If
   *                 <code>EC2SecurityGroupName</code> is specified, <code>EC2SecurityGroupOwnerId</code>
   *             must also be provided and <code>CIDRIP</code> cannot be provided. </p>
   * @public
   */
  EC2SecurityGroupName?: string | undefined;

  /**
   * <p>The Amazon Web Services account number of the owner of the security group specified in the
   *                 <code>EC2SecurityGroupName</code> parameter. The Amazon Web Services access key ID is not an
   *             acceptable value. If <code>EC2SecurityGroupOwnerId</code> is specified,
   *                 <code>EC2SecurityGroupName</code> must also be provided. and <code>CIDRIP</code>
   *             cannot be provided. </p>
   *          <p>Example: <code>111122223333</code>
   *          </p>
   * @public
   */
  EC2SecurityGroupOwnerId?: string | undefined;
}

/**
 * @public
 */
export interface RevokeClusterSecurityGroupIngressResult {
  /**
   * <p>Describes a security group.</p>
   * @public
   */
  ClusterSecurityGroup?: ClusterSecurityGroup | undefined;
}

/**
 * @public
 */
export interface RevokeEndpointAccessMessage {
  /**
   * <p>The cluster to revoke access from.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID whose access is to be revoked.</p>
   * @public
   */
  Account?: string | undefined;

  /**
   * <p>The virtual private cloud (VPC) identifiers for which access is to be revoked.</p>
   * @public
   */
  VpcIds?: string[] | undefined;

  /**
   * <p>Indicates whether to force the revoke action.
   *            If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.</p>
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RevokeSnapshotAccessMessage {
  /**
   * <p>The identifier of the snapshot that the account can no longer access.</p>
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot associated with the message to revoke access.</p>
   * @public
   */
  SnapshotArn?: string | undefined;

  /**
   * <p>The identifier of the cluster the snapshot was created from. This parameter is
   *             required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   * @public
   */
  SnapshotClusterIdentifier?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account that can no longer restore the specified
   *             snapshot.</p>
   * @public
   */
  AccountWithRestoreAccess: string | undefined;
}

/**
 * @public
 */
export interface RevokeSnapshotAccessResult {
  /**
   * <p>Describes a snapshot.</p>
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RotateEncryptionKeyMessage {
  /**
   * <p>The unique identifier of the cluster that you want to rotate the encryption keys
   *             for.</p>
   *          <p>Constraints: Must be the name of valid cluster that has encryption
   *             enabled.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RotateEncryptionKeyResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface UpdatePartnerStatusInputMessage {
  /**
   * <p>The Amazon Web Services account ID that owns the cluster.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The cluster identifier of the cluster whose partner integration status is being updated.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the database whose partner integration status is being updated.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partner whose integration status is being updated.</p>
   * @public
   */
  PartnerName: string | undefined;

  /**
   * <p>The value of the updated status.</p>
   * @public
   */
  Status: PartnerIntegrationStatus | undefined;

  /**
   * <p>The status message provided by the partner.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}
