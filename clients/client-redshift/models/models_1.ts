import {
  Cluster,
  ClusterSecurityGroup,
  ClusterSubnetGroup,
  EventSubscription,
  Parameter,
  ReservedNode,
  ScheduledActionType,
  Snapshot,
  TableRestoreStatus,
  UsageLimitBreachAction,
} from "./models_0";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The value specified for the <code>sourceDatabaseName</code>,
 *                 <code>sourceSchemaName</code>, or <code>sourceTableName</code> parameter, or a
 *             combination of these, doesn't exist in the snapshot.</p>
 */
export interface InvalidTableRestoreArgumentFault extends __SmithyException, $MetadataBearer {
  name: "InvalidTableRestoreArgumentFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidTableRestoreArgumentFault {
  export const filterSensitiveLog = (obj: InvalidTableRestoreArgumentFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyClusterMessage {
  /**
   * <p>The unique identifier of the cluster to be modified.</p>
   *         <p>Example: <code>examplecluster</code>
   *         </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The new cluster type.</p>
   *         <p>When you submit your cluster resize request, your existing cluster goes into a
   *             read-only mode. After Amazon Redshift provisions a new cluster based on your resize
   *             requirements, there will be outage for a period while the old cluster is deleted and
   *             your connection is switched to the new cluster. You can use <a>DescribeResize</a> to track the progress of the resize request. </p>
   *         <p>Valid Values: <code> multi-node | single-node </code>
   *         </p>
   */
  ClusterType?: string;

  /**
   * <p>The new node type of the cluster. If you specify a new node type, you must also
   *             specify the number of nodes parameter.</p>
   *         <p>
   * For more information about resizing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/rs-resize-tutorial.html">Resizing Clusters in Amazon Redshift</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   *         <p>Valid Values: <code>ds2.xlarge</code> | <code>ds2.8xlarge</code> |
   *             <code>dc1.large</code> | <code>dc1.8xlarge</code> |
   *             <code>dc2.large</code> | <code>dc2.8xlarge</code> |
   *             <code>ra3.xlplus</code> |  <code>ra3.4xlarge</code> | <code>ra3.16xlarge</code>
   *          </p>
   */
  NodeType?: string;

  /**
   * <p>The new number of nodes of the cluster. If you specify a new number of nodes, you
   *             must also specify the node type parameter.</p>
   *         <p>
   * For more information about resizing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/rs-resize-tutorial.html">Resizing Clusters in Amazon Redshift</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   *         <p>Valid Values: Integer greater than <code>0</code>.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>A list of cluster security groups to be authorized on this cluster. This change is
   *             asynchronously applied as soon as possible.</p>
   *         <p>Security groups currently associated with the cluster, and not in the list of
   *             groups to apply, will be revoked from the cluster.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  ClusterSecurityGroups?: string[];

  /**
   * <p>A list of virtual private cloud (VPC) security groups to be associated with the
   *             cluster. This change is asynchronously applied as soon as possible.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The new password for the cluster master user. This change is asynchronously applied
   *             as soon as possible. Between the time of the request and the completion of the request,
   *             the <code>MasterUserPassword</code> element exists in the
   *                 <code>PendingModifiedValues</code> element of the operation response. </p>
   *         <note>
   *             <p>Operations never return the password, so this operation provides a way to
   *                 regain access to the master user account for a cluster if the password is
   *                 lost.</p>
   *         </note>
   *         <p>Default: Uses existing setting.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be between 8 and 64 characters in length.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain at least one uppercase letter.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain at least one lowercase letter.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain one number.</p>
   *             </li>
   *             <li>
   *                 <p>Can be any printable ASCII character (ASCII code 33 to 126) except '
   *                     (single quote), " (double quote), \, /, @, or space.</p>
   *             </li>
   *          </ul>
   */
  MasterUserPassword?: string;

  /**
   * <p>The name of the cluster parameter group to apply to this cluster. This change is
   *             applied only after the cluster is rebooted. To reboot a cluster use <a>RebootCluster</a>. </p>
   *         <p>Default: Uses existing setting.</p>
   *         <p>Constraints: The cluster parameter group must be in the same parameter group family
   *             that matches the cluster version.</p>
   */
  ClusterParameterGroupName?: string;

  /**
   * <p>The number of days that automated snapshots are retained. If the value is 0,
   *             automated snapshots are disabled. Even if automated snapshots are disabled, you can
   *             still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p>
   *         <p>If you decrease the automated snapshot retention period from its current value,
   *             existing automated snapshots that fall outside of the new retention period will be
   *             immediately deleted.</p>
   *         <p>Default: Uses existing setting.</p>
   *         <p>Constraints: Must be a value from 0 to 35.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The default for number of days that a newly created manual snapshot is retained. If
   *             the value is -1, the manual snapshot is retained indefinitely. This value doesn't
   *             retroactively change the retention periods of existing manual snapshots.</p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *         <p>The default value is -1.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The weekly time range (in UTC) during which system maintenance can occur, if
   *             necessary. If system maintenance is necessary during the window, it may result in an
   *             outage.</p>
   *         <p>This maintenance window change is made immediately. If the new maintenance window
   *             indicates the current time, there must be at least 120 minutes between the current time
   *             and end of the window in order to ensure that pending changes are applied.</p>
   *         <p>Default: Uses existing setting.</p>
   *         <p>Format: ddd:hh24:mi-ddd:hh24:mi, for example
   *             <code>wed:07:30-wed:08:00</code>.</p>
   *         <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *         <p>Constraints: Must be at least 30 minutes.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The new version number of the Amazon Redshift engine to upgrade to.</p>
   *         <p>For major version upgrades, if a non-default cluster parameter group is currently
   *             in use, a new cluster parameter group in the cluster parameter group family for the new
   *             version must be specified. The new cluster parameter group can be the default for that
   *             cluster parameter group family.
   * For more information about parameters and parameter groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *         <p>Example: <code>1.0</code>
   *         </p>
   */
  ClusterVersion?: string;

  /**
   * <p>If <code>true</code>, major version upgrades will be applied automatically to the
   *             cluster during the maintenance window. </p>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  AllowVersionUpgrade?: boolean;

  /**
   * <p>Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to
   *             retrieve the data encryption keys stored in an HSM.</p>
   */
  HsmClientCertificateIdentifier?: string;

  /**
   * <p>Specifies the name of the HSM configuration that contains the information the
   *             Amazon Redshift cluster can use to retrieve and store keys in an HSM.</p>
   */
  HsmConfigurationIdentifier?: string;

  /**
   * <p>The new identifier for the cluster.</p>
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
   *                <p>Must be unique for all clusters within an AWS account.</p>
   *             </li>
   *          </ul>
   *
   *             <p>Example: <code>examplecluster</code>
   *         </p>
   */
  NewClusterIdentifier?: string;

  /**
   * <p>If <code>true</code>, the cluster can be accessed from a public network. Only
   *             clusters in VPCs can be set to be publicly available.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The Elastic IP (EIP) address for the cluster.</p>
   *         <p>Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible
   *             through an Internet gateway. For more information about provisioning clusters in
   *             EC2-VPC, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms">Supported
   *                 Platforms to Launch Your Cluster</a> in the Amazon Redshift Cluster Management Guide.</p>
   */
  ElasticIp?: string;

  /**
   * <p>An option that specifies whether to create the cluster with enhanced VPC routing
   *             enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a
   *             VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in
   *             the Amazon Redshift Cluster Management Guide.</p>
   *         <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p>
   *         <p>Default: false</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * <p>The name for the maintenance track that you want to assign for the cluster. This name
   *             change is asynchronous. The new track name stays in the
   *                 <code>PendingModifiedValues</code> for the cluster until the next maintenance
   *             window. When the maintenance track changes, the cluster is switched to the latest
   *             cluster release available for the maintenance track. At this point, the maintenance
   *             track name is applied.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>Indicates whether the cluster is encrypted. If the value is encrypted (true) and you
   *             provide a value for the <code>KmsKeyId</code> parameter, we encrypt the cluster
   *             with the provided <code>KmsKeyId</code>. If you don't provide a <code>KmsKeyId</code>,
   *             we encrypt with the default key. </p>
   *             <p>If the value is not encrypted (false), then the cluster is decrypted. </p>
   */
  Encrypted?: boolean;

  /**
   * <p>The AWS Key Management Service (KMS) key ID of the encryption key that you want to use
   *             to encrypt data in the cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete.</p>
   */
  AvailabilityZoneRelocation?: boolean;

  /**
   * <p>The option to initiate relocation for an Amazon Redshift cluster to the target Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The option to change the port of an Amazon Redshift cluster.</p>
   */
  Port?: number;
}

export namespace ModifyClusterMessage {
  export const filterSensitiveLog = (obj: ModifyClusterMessage): any => ({
    ...obj,
  });
}

export interface ModifyClusterResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ModifyClusterResult {
  export const filterSensitiveLog = (obj: ModifyClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p>The number of tables in the cluster exceeds the limit for the requested new cluster
 *             node type. </p>
 */
export interface TableLimitExceededFault extends __SmithyException, $MetadataBearer {
  name: "TableLimitExceededFault";
  $fault: "client";
  message?: string;
}

export namespace TableLimitExceededFault {
  export const filterSensitiveLog = (obj: TableLimitExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>A request option was specified that is not supported.</p>
 */
export interface UnsupportedOptionFault extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOptionFault";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedOptionFault {
  export const filterSensitiveLog = (obj: UnsupportedOptionFault): any => ({
    ...obj,
  });
}

export interface ModifyClusterDbRevisionMessage {
  /**
   * <p>The unique identifier of a cluster whose database revision you want to modify. </p>
   *         <p>Example: <code>examplecluster</code>
   *         </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the database revision. You can retrieve this value from the
   *             response to the <a>DescribeClusterDbRevisions</a> request.</p>
   */
  RevisionTarget: string | undefined;
}

export namespace ModifyClusterDbRevisionMessage {
  export const filterSensitiveLog = (obj: ModifyClusterDbRevisionMessage): any => ({
    ...obj,
  });
}

export interface ModifyClusterDbRevisionResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ModifyClusterDbRevisionResult {
  export const filterSensitiveLog = (obj: ModifyClusterDbRevisionResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyClusterIamRolesMessage {
  /**
   * <p>The unique identifier of the cluster for which you want to associate or
   *             disassociate IAM roles.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>Zero or more IAM roles to associate with the cluster. The roles must be in their
   *             Amazon Resource Name (ARN) format. You can associate up to 10 IAM roles with a single
   *             cluster in a single request.</p>
   */
  AddIamRoles?: string[];

  /**
   * <p>Zero or more IAM roles in ARN format to disassociate from the cluster. You can
   *             disassociate up to 10 IAM roles from a single cluster in a single request.</p>
   */
  RemoveIamRoles?: string[];
}

export namespace ModifyClusterIamRolesMessage {
  export const filterSensitiveLog = (obj: ModifyClusterIamRolesMessage): any => ({
    ...obj,
  });
}

export interface ModifyClusterIamRolesResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ModifyClusterIamRolesResult {
  export const filterSensitiveLog = (obj: ModifyClusterIamRolesResult): any => ({
    ...obj,
  });
}

export interface ModifyClusterMaintenanceMessage {
  /**
   * <p>A unique identifier for the cluster.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>A boolean indicating whether to enable the deferred maintenance window. </p>
   */
  DeferMaintenance?: boolean;

  /**
   * <p>A unique identifier for the deferred maintenance window.</p>
   */
  DeferMaintenanceIdentifier?: string;

  /**
   * <p>A timestamp indicating the start time for the deferred maintenance window.</p>
   */
  DeferMaintenanceStartTime?: Date;

  /**
   * <p>A timestamp indicating end time for the deferred maintenance window. If you specify an
   *             end time, you can't specify a duration.</p>
   */
  DeferMaintenanceEndTime?: Date;

  /**
   * <p>An integer indicating the duration of the maintenance window in days. If you specify a
   *             duration, you can't specify an end time. The duration must be 45 days or less.</p>
   */
  DeferMaintenanceDuration?: number;
}

export namespace ModifyClusterMaintenanceMessage {
  export const filterSensitiveLog = (obj: ModifyClusterMaintenanceMessage): any => ({
    ...obj,
  });
}

export interface ModifyClusterMaintenanceResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ModifyClusterMaintenanceResult {
  export const filterSensitiveLog = (obj: ModifyClusterMaintenanceResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a modify cluster parameter group operation. </p>
 */
export interface ModifyClusterParameterGroupMessage {
  /**
   * <p>The name of the parameter group to be modified.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>An array of parameters to be modified. A maximum of 20 parameters can be modified
   *             in a single request.</p>
   *         <p>For each parameter to be modified, you must supply at least the parameter name and
   *             parameter value; other name-value pairs of the parameter are optional.</p>
   *         <p>For the workload management (WLM) configuration, you must supply all the name-value
   *             pairs in the wlm_json_configuration parameter.</p>
   */
  Parameters: Parameter[] | undefined;
}

export namespace ModifyClusterParameterGroupMessage {
  export const filterSensitiveLog = (obj: ModifyClusterParameterGroupMessage): any => ({
    ...obj,
  });
}

export interface ModifyClusterSnapshotMessage {
  /**
   * <p>The identifier of the snapshot whose setting you want to modify.</p>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely.</p>
   *         <p>If the manual snapshot falls outside of the new retention period, you can specify the
   *             force option to immediately delete the snapshot.</p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>A Boolean option to override an exception if the retention period has already
   *             passed.</p>
   */
  Force?: boolean;
}

export namespace ModifyClusterSnapshotMessage {
  export const filterSensitiveLog = (obj: ModifyClusterSnapshotMessage): any => ({
    ...obj,
  });
}

export interface ModifyClusterSnapshotResult {
  /**
   * <p>Describes a snapshot.</p>
   */
  Snapshot?: Snapshot;
}

export namespace ModifyClusterSnapshotResult {
  export const filterSensitiveLog = (obj: ModifyClusterSnapshotResult): any => ({
    ...obj,
  });
}

export interface ModifyClusterSnapshotScheduleMessage {
  /**
   * <p>A unique identifier for the cluster whose snapshot schedule you want to modify.
   *         </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>A unique alphanumeric identifier for the schedule that you want to associate with the
   *             cluster.</p>
   */
  ScheduleIdentifier?: string;

  /**
   * <p>A boolean to indicate whether to remove the assoiciation between the cluster and the
   *             schedule.</p>
   */
  DisassociateSchedule?: boolean;
}

export namespace ModifyClusterSnapshotScheduleMessage {
  export const filterSensitiveLog = (obj: ModifyClusterSnapshotScheduleMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyClusterSubnetGroupMessage {
  /**
   * <p>The name of the subnet group to be modified.</p>
   */
  ClusterSubnetGroupName: string | undefined;

  /**
   * <p>A text description of the subnet group to be modified.</p>
   */
  Description?: string;

  /**
   * <p>An array of VPC subnet IDs. A maximum of 20 subnets can be modified in a single
   *             request.</p>
   */
  SubnetIds: string[] | undefined;
}

export namespace ModifyClusterSubnetGroupMessage {
  export const filterSensitiveLog = (obj: ModifyClusterSubnetGroupMessage): any => ({
    ...obj,
  });
}

export interface ModifyClusterSubnetGroupResult {
  /**
   * <p>Describes a subnet group.</p>
   */
  ClusterSubnetGroup?: ClusterSubnetGroup;
}

export namespace ModifyClusterSubnetGroupResult {
  export const filterSensitiveLog = (obj: ModifyClusterSubnetGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p>A specified subnet is already in use by another cluster.</p>
 */
export interface SubnetAlreadyInUse extends __SmithyException, $MetadataBearer {
  name: "SubnetAlreadyInUse";
  $fault: "client";
  message?: string;
}

export namespace SubnetAlreadyInUse {
  export const filterSensitiveLog = (obj: SubnetAlreadyInUse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * <p>The name of the modified Amazon Redshift event notification subscription.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic to be used by the event
   *             notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The type of source that will be generating the events. For example, if you want to
   *             be notified of events generated by a cluster, you would set this parameter to cluster.
   *             If this value is not specified, events are returned for all Amazon Redshift objects in your
   *             AWS account. You must specify a source type in order to specify source IDs.</p>
   *         <p>Valid values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot, and scheduled-action.</p>
   */
  SourceType?: string;

  /**
   * <p>A list of one or more identifiers of Amazon Redshift source objects. All of the objects
   *             must be of the same type as was specified in the source type parameter. The event
   *             subscription will return only events generated by the specified objects. If not
   *             specified, then events are returned for all objects within the source type
   *             specified.</p>
   *         <p>Example: my-cluster-1, my-cluster-2</p>
   *         <p>Example: my-snapshot-20131010</p>
   */
  SourceIds?: string[];

  /**
   * <p>Specifies the Amazon Redshift event categories to be published by the event notification
   *             subscription.</p>
   *         <p>Values: configuration, management, monitoring, security</p>
   */
  EventCategories?: string[];

  /**
   * <p>Specifies the Amazon Redshift event severity to be published by the event notification
   *             subscription.</p>
   *         <p>Values: ERROR, INFO</p>
   */
  Severity?: string;

  /**
   * <p>A Boolean value indicating if the subscription is enabled. <code>true</code>
   *             indicates the subscription is enabled </p>
   */
  Enabled?: boolean;
}

export namespace ModifyEventSubscriptionMessage {
  export const filterSensitiveLog = (obj: ModifyEventSubscriptionMessage): any => ({
    ...obj,
  });
}

export interface ModifyEventSubscriptionResult {
  /**
   * <p>Describes event subscriptions.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace ModifyEventSubscriptionResult {
  export const filterSensitiveLog = (obj: ModifyEventSubscriptionResult): any => ({
    ...obj,
  });
}

export interface ModifyScheduledActionMessage {
  /**
   * <p>The name of the scheduled action to modify. </p>
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>A modified JSON format of the scheduled action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   */
  TargetAction?: ScheduledActionType;

  /**
   * <p>A modified schedule in either <code>at( )</code> or <code>cron( )</code> format.
   *             For more information about this parameter, see <a>ScheduledAction</a>.</p>
   */
  Schedule?: string;

  /**
   * <p>A different IAM role to assume to run the target action.
   *             For more information about this parameter, see <a>ScheduledAction</a>.</p>
   */
  IamRole?: string;

  /**
   * <p>A modified description of the scheduled action. </p>
   */
  ScheduledActionDescription?: string;

  /**
   * <p>A modified start time of the scheduled action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   */
  StartTime?: Date;

  /**
   * <p>A modified end time of the scheduled action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   */
  EndTime?: Date;

  /**
   * <p>A modified enable flag of the scheduled action. If true, the scheduled action is active. If false, the scheduled action is disabled. </p>
   */
  Enable?: boolean;
}

export namespace ModifyScheduledActionMessage {
  export const filterSensitiveLog = (obj: ModifyScheduledActionMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifySnapshotCopyRetentionPeriodMessage {
  /**
   * <p>The unique identifier of the cluster for which you want to change the retention
   *             period for either automated or manual snapshots that are copied to a destination AWS
   *             Region.</p>
   *         <p>Constraints: Must be the valid name of an existing cluster that has cross-region
   *             snapshot copy enabled.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The number of days to retain automated snapshots in the destination AWS Region
   *             after they are copied from the source AWS Region.</p>
   *         <p>By default, this only changes the retention period of copied automated snapshots. </p>
   *         <p>If you decrease the retention period for automated snapshots that are copied to a
   *             destination AWS Region, Amazon Redshift deletes any existing automated snapshots that were
   *             copied to the destination AWS Region and that fall outside of the new retention
   *             period.</p>
   *         <p>Constraints: Must be at least 1 and no more than 35 for automated snapshots. </p>
   *         <p>If you specify the <code>manual</code> option, only newly copied manual snapshots will
   *             have the new retention period. </p>
   *         <p>If you specify the value of -1 newly copied manual snapshots are retained
   *             indefinitely.</p>
   *         <p>Constraints: The number of days must be either -1 or an integer between 1 and 3,653
   *             for manual snapshots.</p>
   */
  RetentionPeriod: number | undefined;

  /**
   * <p>Indicates whether to apply the snapshot retention period to newly copied manual
   *             snapshots instead of automated snapshots.</p>
   */
  Manual?: boolean;
}

export namespace ModifySnapshotCopyRetentionPeriodMessage {
  export const filterSensitiveLog = (obj: ModifySnapshotCopyRetentionPeriodMessage): any => ({
    ...obj,
  });
}

export interface ModifySnapshotCopyRetentionPeriodResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ModifySnapshotCopyRetentionPeriodResult {
  export const filterSensitiveLog = (obj: ModifySnapshotCopyRetentionPeriodResult): any => ({
    ...obj,
  });
}

/**
 * <p>Cross-region snapshot copy was temporarily disabled. Try your request
 *             again.</p>
 */
export interface SnapshotCopyDisabledFault extends __SmithyException, $MetadataBearer {
  name: "SnapshotCopyDisabledFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotCopyDisabledFault {
  export const filterSensitiveLog = (obj: SnapshotCopyDisabledFault): any => ({
    ...obj,
  });
}

export interface ModifySnapshotScheduleMessage {
  /**
   * <p>A unique alphanumeric identifier of the schedule to modify.</p>
   */
  ScheduleIdentifier: string | undefined;

  /**
   * <p>An updated list of schedule definitions. A schedule definition is made up of schedule
   *             expressions, for example, "cron(30 12 *)" or "rate(12 hours)".</p>
   */
  ScheduleDefinitions: string[] | undefined;
}

export namespace ModifySnapshotScheduleMessage {
  export const filterSensitiveLog = (obj: ModifySnapshotScheduleMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The specified snapshot schedule is already being updated.</p>
 */
export interface SnapshotScheduleUpdateInProgressFault extends __SmithyException, $MetadataBearer {
  name: "SnapshotScheduleUpdateInProgressFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotScheduleUpdateInProgressFault {
  export const filterSensitiveLog = (obj: SnapshotScheduleUpdateInProgressFault): any => ({
    ...obj,
  });
}

export interface ModifyUsageLimitMessage {
  /**
   * <p>The identifier of the usage limit to modify.</p>
   */
  UsageLimitId: string | undefined;

  /**
   * <p>The new limit amount.
   *             For more information about this parameter, see <a>UsageLimit</a>. </p>
   */
  Amount?: number;

  /**
   * <p>The new action that Amazon Redshift takes when the limit is reached.
   *             For more information about this parameter, see <a>UsageLimit</a>. </p>
   */
  BreachAction?: UsageLimitBreachAction | string;
}

export namespace ModifyUsageLimitMessage {
  export const filterSensitiveLog = (obj: ModifyUsageLimitMessage): any => ({
    ...obj,
  });
}

export interface PauseClusterResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace PauseClusterResult {
  export const filterSensitiveLog = (obj: PauseClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface PurchaseReservedNodeOfferingMessage {
  /**
   * <p>The unique identifier of the reserved node offering you want to purchase.</p>
   */
  ReservedNodeOfferingId: string | undefined;

  /**
   * <p>The number of reserved nodes that you want to purchase.</p>
   *         <p>Default: <code>1</code>
   *         </p>
   */
  NodeCount?: number;
}

export namespace PurchaseReservedNodeOfferingMessage {
  export const filterSensitiveLog = (obj: PurchaseReservedNodeOfferingMessage): any => ({
    ...obj,
  });
}

export interface PurchaseReservedNodeOfferingResult {
  /**
   * <p>Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node
   *             offerings. </p>
   */
  ReservedNode?: ReservedNode;
}

export namespace PurchaseReservedNodeOfferingResult {
  export const filterSensitiveLog = (obj: PurchaseReservedNodeOfferingResult): any => ({
    ...obj,
  });
}

/**
 * <p>Request would exceed the user's compute node quota.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface ReservedNodeQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "ReservedNodeQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedNodeQuotaExceededFault {
  export const filterSensitiveLog = (obj: ReservedNodeQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RebootClusterMessage {
  /**
   * <p>The cluster identifier.</p>
   */
  ClusterIdentifier: string | undefined;
}

export namespace RebootClusterMessage {
  export const filterSensitiveLog = (obj: RebootClusterMessage): any => ({
    ...obj,
  });
}

export interface RebootClusterResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace RebootClusterResult {
  export const filterSensitiveLog = (obj: RebootClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ResetClusterParameterGroupMessage {
  /**
   * <p>The name of the cluster parameter group to be reset.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>If <code>true</code>, all parameters in the specified parameter group will be reset
   *             to their default values. </p>
   *         <p>Default: <code>true</code>
   *         </p>
   */
  ResetAllParameters?: boolean;

  /**
   * <p>An array of names of parameters to be reset. If
   *                 <i>ResetAllParameters</i> option is not used, then at least one
   *             parameter name must be supplied. </p>
   *         <p>Constraints: A maximum of 20 parameters can be reset in a single request.</p>
   */
  Parameters?: Parameter[];
}

export namespace ResetClusterParameterGroupMessage {
  export const filterSensitiveLog = (obj: ResetClusterParameterGroupMessage): any => ({
    ...obj,
  });
}

export interface ResizeClusterResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ResizeClusterResult {
  export const filterSensitiveLog = (obj: ResizeClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
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
   *                <p>Must be unique for all clusters within an AWS account.</p>
   *             </li>
   *          </ul>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the snapshot from which to create the new cluster. This parameter isn't
   *             case sensitive.</p>
   *         <p>Example: <code>my-snapshot-id</code>
   *         </p>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The name of the cluster the source snapshot was created from. This parameter is
   *             required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   */
  SnapshotClusterIdentifier?: string;

  /**
   * <p>The port number on which the cluster accepts connections.</p>
   *         <p>Default: The same port as the original cluster.</p>
   *         <p>Constraints: Must be between <code>1115</code> and <code>65535</code>.</p>
   */
  Port?: number;

  /**
   * <p>The Amazon EC2 Availability Zone in which to restore the cluster.</p>
   *         <p>Default: A random, system-chosen Availability Zone.</p>
   *         <p>Example: <code>us-east-2a</code>
   *         </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>If <code>true</code>, major version upgrades can be applied during the maintenance
   *             window to the Amazon Redshift engine that is running on the cluster. </p>
   *         <p>Default: <code>true</code>
   *         </p>
   */
  AllowVersionUpgrade?: boolean;

  /**
   * <p>The name of the subnet group where you want to cluster restored.</p>
   *         <p>A snapshot of cluster in VPC can be restored only in VPC. Therefore, you must
   *             provide subnet group name where you want the cluster restored.</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>If <code>true</code>, the cluster can be accessed from a public network. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The AWS customer account used to create or copy the snapshot. Required if you are
   *             restoring a snapshot you do not own, optional if you own the snapshot.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to
   *             retrieve the data encryption keys stored in an HSM.</p>
   */
  HsmClientCertificateIdentifier?: string;

  /**
   * <p>Specifies the name of the HSM configuration that contains the information the
   *             Amazon Redshift cluster can use to retrieve and store keys in an HSM.</p>
   */
  HsmConfigurationIdentifier?: string;

  /**
   * <p>The elastic IP (EIP) address for the cluster.</p>
   */
  ElasticIp?: string;

  /**
   * <p>The name of the parameter group to be associated with this cluster.</p>
   *         <p>Default: The default Amazon Redshift cluster parameter group. For information about the
   *             default parameter group, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Working with Amazon
   *                 Redshift Parameter Groups</a>.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  ClusterParameterGroupName?: string;

  /**
   * <p>A list of security groups to be associated with this cluster.</p>
   *         <p>Default: The default cluster security group for Amazon Redshift.</p>
   *         <p>Cluster security groups only apply to clusters outside of VPCs.</p>
   */
  ClusterSecurityGroups?: string[];

  /**
   * <p>A list of Virtual Private Cloud (VPC) security groups to be associated with the
   *             cluster.</p>
   *         <p>Default: The default VPC security group is associated with the cluster.</p>
   *         <p>VPC security groups only apply to clusters in VPCs.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The weekly time range (in UTC) during which automated cluster maintenance can
   *             occur.</p>
   *         <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *         </p>
   *         <p> Default: The value selected for the cluster from which the snapshot was taken. For
   *             more information about the time blocks for each region, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows">Maintenance Windows</a> in Amazon Redshift Cluster Management Guide. </p>
   *         <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *         <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The number of days that automated snapshots are retained. If the value is 0,
   *             automated snapshots are disabled. Even if automated snapshots are disabled, you can
   *             still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p>
   *         <p>Default: The value selected for the cluster from which the snapshot was
   *             taken.</p>
   *         <p>Constraints: Must be a value from 0 to 35.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The default number of days to retain a manual snapshot. If the value is -1, the
   *             snapshot is retained indefinitely. This setting doesn't change the retention period
   *             of existing snapshots.</p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The AWS Key Management Service (KMS) key ID of the encryption key that you want to
   *             use to encrypt data in the cluster that you restore from a shared snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The node type that the restored cluster will be provisioned with.</p>
   *         <p>Default: The node type of the cluster from which the snapshot was taken. You can
   *             modify this if you are using any DS node type. In that case, you can choose to restore
   *             into another DS node type of the same size. For example, you can restore ds1.8xlarge
   *             into ds2.8xlarge, or ds1.xlarge into ds2.xlarge. If you have a DC instance type, you
   *             must restore into that same instance type and size. In other words, you can only restore
   *             a dc1.large instance type into another dc1.large instance type or dc2.large instance
   *             type. You can't restore dc1.8xlarge to dc2.8xlarge. First restore to a dc1.8xlarge
   *             cluster, then resize to a dc2.8large cluster. For more information about node types, see
   *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-about-clusters-and-nodes">
   *                 About Clusters and Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   */
  NodeType?: string;

  /**
   * <p>An option that specifies whether to create the cluster with enhanced VPC routing
   *             enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a
   *             VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in
   *             the Amazon Redshift Cluster Management Guide.</p>
   *         <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p>
   *         <p>Default: false</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * <p>Reserved.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>A list of AWS Identity and Access Management (IAM) roles that can be used by the
   *             cluster to access other AWS services. You must supply the IAM roles in their Amazon
   *             Resource Name (ARN) format. You can supply up to 10 IAM roles in a single
   *             request.</p>
   *         <p>A cluster can have up to 10 IAM roles associated at any time.</p>
   */
  IamRoles?: string[];

  /**
   * <p>The name of the maintenance track for the restored cluster. When you take a snapshot,
   *             the snapshot inherits the <code>MaintenanceTrack</code> value from the cluster. The
   *             snapshot might be on a different track than the cluster that was the source for the
   *             snapshot. For example, suppose that you take a snapshot of a cluster that is on the
   *             current track and then change the cluster to be on the trailing track. In this case, the
   *             snapshot and the source cluster are on different tracks.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>A unique identifier for the snapshot schedule.</p>
   */
  SnapshotScheduleIdentifier?: string;

  /**
   * <p>The number of nodes specified when provisioning the restored cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster is restored.</p>
   */
  AvailabilityZoneRelocation?: boolean;
}

export namespace RestoreFromClusterSnapshotMessage {
  export const filterSensitiveLog = (obj: RestoreFromClusterSnapshotMessage): any => ({
    ...obj,
  });
}

export interface RestoreFromClusterSnapshotResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace RestoreFromClusterSnapshotResult {
  export const filterSensitiveLog = (obj: RestoreFromClusterSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RestoreTableFromClusterSnapshotMessage {
  /**
   * <p>The identifier of the Amazon Redshift cluster to restore the table to.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the snapshot to restore the table from. This snapshot must have
   *             been created from the Amazon Redshift cluster specified by the
   *                 <code>ClusterIdentifier</code> parameter.</p>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The name of the source database that contains the table to restore from.</p>
   */
  SourceDatabaseName: string | undefined;

  /**
   * <p>The name of the source schema that contains the table to restore from. If you do
   *             not specify a <code>SourceSchemaName</code> value, the default is
   *             <code>public</code>.</p>
   */
  SourceSchemaName?: string;

  /**
   * <p>The name of the source table to restore from.</p>
   */
  SourceTableName: string | undefined;

  /**
   * <p>The name of the database to restore the table to.</p>
   */
  TargetDatabaseName?: string;

  /**
   * <p>The name of the schema to restore the table to.</p>
   */
  TargetSchemaName?: string;

  /**
   * <p>The name of the table to create as a result of the current request.</p>
   */
  NewTableName: string | undefined;
}

export namespace RestoreTableFromClusterSnapshotMessage {
  export const filterSensitiveLog = (obj: RestoreTableFromClusterSnapshotMessage): any => ({
    ...obj,
  });
}

export interface RestoreTableFromClusterSnapshotResult {
  /**
   * <p>Describes the status of a <a>RestoreTableFromClusterSnapshot</a>
   *             operation.</p>
   */
  TableRestoreStatus?: TableRestoreStatus;
}

export namespace RestoreTableFromClusterSnapshotResult {
  export const filterSensitiveLog = (obj: RestoreTableFromClusterSnapshotResult): any => ({
    ...obj,
  });
}

export interface ResumeClusterResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ResumeClusterResult {
  export const filterSensitiveLog = (obj: ResumeClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RevokeClusterSecurityGroupIngressMessage {
  /**
   * <p>The name of the security Group from which to revoke the ingress rule.</p>
   */
  ClusterSecurityGroupName: string | undefined;

  /**
   * <p>The IP range for which to revoke access. This range must be a valid Classless
   *             Inter-Domain Routing (CIDR) block of IP addresses. If <code>CIDRIP</code> is specified,
   *                 <code>EC2SecurityGroupName</code> and <code>EC2SecurityGroupOwnerId</code> cannot be
   *             provided. </p>
   */
  CIDRIP?: string;

  /**
   * <p>The name of the EC2 Security Group whose access is to be revoked. If
   *                 <code>EC2SecurityGroupName</code> is specified, <code>EC2SecurityGroupOwnerId</code>
   *             must also be provided and <code>CIDRIP</code> cannot be provided. </p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>The AWS account number of the owner of the security group specified in the
   *                 <code>EC2SecurityGroupName</code> parameter. The AWS access key ID is not an
   *             acceptable value. If <code>EC2SecurityGroupOwnerId</code> is specified,
   *                 <code>EC2SecurityGroupName</code> must also be provided. and <code>CIDRIP</code>
   *             cannot be provided. </p>
   *         <p>Example: <code>111122223333</code>
   *         </p>
   */
  EC2SecurityGroupOwnerId?: string;
}

export namespace RevokeClusterSecurityGroupIngressMessage {
  export const filterSensitiveLog = (obj: RevokeClusterSecurityGroupIngressMessage): any => ({
    ...obj,
  });
}

export interface RevokeClusterSecurityGroupIngressResult {
  /**
   * <p>Describes a security group.</p>
   */
  ClusterSecurityGroup?: ClusterSecurityGroup;
}

export namespace RevokeClusterSecurityGroupIngressResult {
  export const filterSensitiveLog = (obj: RevokeClusterSecurityGroupIngressResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RevokeSnapshotAccessMessage {
  /**
   * <p>The identifier of the snapshot that the account can no longer access.</p>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier of the cluster the snapshot was created from. This parameter is
   *             required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   */
  SnapshotClusterIdentifier?: string;

  /**
   * <p>The identifier of the AWS customer account that can no longer restore the specified
   *             snapshot.</p>
   */
  AccountWithRestoreAccess: string | undefined;
}

export namespace RevokeSnapshotAccessMessage {
  export const filterSensitiveLog = (obj: RevokeSnapshotAccessMessage): any => ({
    ...obj,
  });
}

export interface RevokeSnapshotAccessResult {
  /**
   * <p>Describes a snapshot.</p>
   */
  Snapshot?: Snapshot;
}

export namespace RevokeSnapshotAccessResult {
  export const filterSensitiveLog = (obj: RevokeSnapshotAccessResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RotateEncryptionKeyMessage {
  /**
   * <p>The unique identifier of the cluster that you want to rotate the encryption keys
   *             for.</p>
   *         <p>Constraints: Must be the name of valid cluster that has encryption
   *             enabled.</p>
   */
  ClusterIdentifier: string | undefined;
}

export namespace RotateEncryptionKeyMessage {
  export const filterSensitiveLog = (obj: RotateEncryptionKeyMessage): any => ({
    ...obj,
  });
}

export interface RotateEncryptionKeyResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace RotateEncryptionKeyResult {
  export const filterSensitiveLog = (obj: RotateEncryptionKeyResult): any => ({
    ...obj,
  });
}
