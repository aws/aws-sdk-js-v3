// smithy-typescript generated code
import type {
  ActionType,
  ApplicationType,
  AquaConfigurationStatus,
  AquaStatus,
  AuthorizationStatus,
  DataShareStatus,
  DataShareStatusForConsumer,
  DataShareStatusForProducer,
  DataShareType,
  DescribeIntegrationsFilterName,
  ImpactRankingType,
  LogDestinationType,
  Mode,
  NamespaceRegistrationStatus,
  NodeConfigurationOptionsFilterName,
  OperatorType,
  ParameterApplyType,
  PartnerIntegrationStatus,
  RecommendedActionType,
  ReservedNodeExchangeActionType,
  ReservedNodeExchangeStatusType,
  ReservedNodeOfferingType,
  ScheduledActionFilterName,
  ScheduledActionState,
  ScheduledActionTypeValues,
  ScheduleState,
  ServiceAuthorization,
  SnapshotAttributeToSortBy,
  SortByOrder,
  SourceType,
  TableRestoreStatusType,
  UsageLimitBreachAction,
  UsageLimitFeatureType,
  UsageLimitLimitType,
  UsageLimitPeriod,
  ZeroETLIntegrationStatus,
} from "./enums";

/**
 * @public
 */
export interface AcceptReservedNodeExchangeInputMessage {
  /**
   * A string representing the node identifier of the DC1 Reserved Node to be exchanged.
   *
   * @public
   */
  ReservedNodeId: string | undefined;

  /**
   * The unique identifier of the DC2 Reserved Node offering to be used for the exchange. You can obtain the value for the parameter by calling GetReservedNodeExchangeOfferings
   *
   * @public
   */
  TargetReservedNodeOfferingId: string | undefined;
}

/**
 * Describes a recurring charge.
 *
 * @public
 */
export interface RecurringCharge {
  /**
   * The amount charged per the period of time specified by the recurring charge frequency.
   *
   * @public
   */
  RecurringChargeAmount?: number | undefined;

  /**
   * The frequency at which the recurring charge amount is applied.
   *
   * @public
   */
  RecurringChargeFrequency?: string | undefined;
}

/**
 * Describes a reserved node. You can call the DescribeReservedNodeOfferings API to obtain the available reserved node offerings.
 *
 * @public
 */
export interface ReservedNode {
  /**
   * The unique identifier for the reservation.
   *
   * @public
   */
  ReservedNodeId?: string | undefined;

  /**
   * The identifier for the reserved node offering.
   *
   * @public
   */
  ReservedNodeOfferingId?: string | undefined;

  /**
   * The node type of the reserved node.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The time the reservation started. You purchase a reserved node offering for a duration. This is the start time of that duration.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The duration of the node reservation in seconds.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The fixed cost Amazon Redshift charges you for this reserved node.
   *
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * The hourly rate Amazon Redshift charges you for this reserved node.
   *
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * The currency code for the reserved cluster.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * The number of reserved compute nodes.
   *
   * @public
   */
  NodeCount?: number | undefined;

  /**
   * The state of the reserved compute node.
   *
   * Possible Values:
   *
   * - pending-payment-This reserved node has recently been purchased, and the sale has been approved, but payment has not yet been confirmed.
   * - active-This reserved node is owned by the caller and is available for use.
   * - payment-failed-Payment failed for the purchase attempt.
   * - retired-The reserved node is no longer available.
   * - exchanging-The owner is exchanging the reserved node for another reserved node.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The anticipated utilization of the reserved node, as defined in the reserved node offering.
   *
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * The recurring charges for the reserved node.
   *
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;

  /**
   * @public
   */
  ReservedNodeOfferingType?: ReservedNodeOfferingType | undefined;
}

/**
 * @public
 */
export interface AcceptReservedNodeExchangeOutputMessage {
  /**
   * @public
   */
  ExchangedReservedNode?: ReservedNode | undefined;
}

/**
 * Describes an attribute value.
 *
 * @public
 */
export interface AttributeValueTarget {
  /**
   * The value of the attribute.
   *
   * @public
   */
  AttributeValue?: string | undefined;
}

/**
 * A name value pair that describes an aspect of an account.
 *
 * @public
 */
export interface AccountAttribute {
  /**
   * The name of the attribute.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * A list of attribute values.
   *
   * @public
   */
  AttributeValues?: AttributeValueTarget[] | undefined;
}

/**
 * @public
 */
export interface AccountAttributeList {
  /**
   * A list of attributes assigned to an account.
   *
   * @public
   */
  AccountAttributes?: AccountAttribute[] | undefined;
}

/**
 * Describes an Amazon Web Services account authorized to restore a snapshot.
 *
 * @public
 */
export interface AccountWithRestoreAccess {
  /**
   * The identifier of an Amazon Web Services account authorized to restore a snapshot.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The identifier of an Amazon Web Services support account authorized to restore a snapshot. For Amazon Web Services Support, the identifier is `amazon-redshift-support`.
   *
   * @public
   */
  AccountAlias?: string | undefined;
}

/**
 * @public
 */
export interface PartnerIntegrationInputMessage {
  /**
   * The Amazon Web Services account ID that owns the cluster.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The cluster identifier of the cluster that receives data from the partner.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * The name of the database that receives data from the partner.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the partner that is authorized to send data.
   *
   * @public
   */
  PartnerName: string | undefined;
}

/**
 * @public
 */
export interface PartnerIntegrationOutputMessage {
  /**
   * The name of the database that receives data from the partner.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The name of the partner that is authorized to send data.
   *
   * @public
   */
  PartnerName?: string | undefined;
}

/**
 * The operation that uses this structure is retired. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
 *
 * @public
 */
export interface AquaConfiguration {
  /**
   * This field is retired. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
   *
   * @public
   */
  AquaStatus?: AquaStatus | undefined;

  /**
   * This field is retired. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
   *
   * @public
   */
  AquaConfigurationStatus?: AquaConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface AssociateDataShareConsumerMessage {
  /**
   * The Amazon Resource Name (ARN) of the datashare that the consumer is to use.
   *
   * @public
   */
  DataShareArn: string | undefined;

  /**
   * A value that specifies whether the datashare is associated with the entire account.
   *
   * @public
   */
  AssociateEntireAccount?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the consumer namespace associated with the datashare.
   *
   * @public
   */
  ConsumerArn?: string | undefined;

  /**
   * From a datashare consumer account, associates a datashare with all existing and future namespaces in the specified Amazon Web Services Region.
   *
   * @public
   */
  ConsumerRegion?: string | undefined;

  /**
   * If set to true, allows write operations for a datashare.
   *
   * @public
   */
  AllowWrites?: boolean | undefined;
}

/**
 * The association of a datashare from a producer account with a data consumer.
 *
 * @public
 */
export interface DataShareAssociation {
  /**
   * The name of the consumer accounts that have an association with a producer datashare.
   *
   * @public
   */
  ConsumerIdentifier?: string | undefined;

  /**
   * The status of the datashare that is associated.
   *
   * @public
   */
  Status?: DataShareStatus | undefined;

  /**
   * The Amazon Web Services Region of the consumer accounts that have an association with a producer datashare.
   *
   * @public
   */
  ConsumerRegion?: string | undefined;

  /**
   * The creation date of the datashare that is associated.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The status change data of the datashare that is associated.
   *
   * @public
   */
  StatusChangeDate?: Date | undefined;

  /**
   * Specifies whether write operations were allowed during data share authorization.
   *
   * @public
   */
  ProducerAllowedWrites?: boolean | undefined;

  /**
   * Specifies whether write operations were allowed during data share association.
   *
   * @public
   */
  ConsumerAcceptedWrites?: boolean | undefined;
}

/**
 * @public
 */
export interface DataShare {
  /**
   * The Amazon Resource Name (ARN) of the datashare that the consumer is to use.
   *
   * @public
   */
  DataShareArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the producer namespace.
   *
   * @public
   */
  ProducerArn?: string | undefined;

  /**
   * A value that specifies whether the datashare can be shared to a publicly accessible cluster.
   *
   * @public
   */
  AllowPubliclyAccessibleConsumers?: boolean | undefined;

  /**
   * A value that specifies when the datashare has an association between producer and data consumers.
   *
   * @public
   */
  DataShareAssociations?: DataShareAssociation[] | undefined;

  /**
   * The identifier of a datashare to show its managing entity.
   *
   * @public
   */
  ManagedBy?: string | undefined;

  /**
   * The type of the datashare created by RegisterNamespace.
   *
   * @public
   */
  DataShareType?: DataShareType | undefined;
}

/**
 * @public
 */
export interface ClusterAssociatedToSchedule {
  /**
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * @public
   */
  ScheduleAssociationState?: ScheduleState | undefined;
}

/**
 * A cluster ID and custom domain name tied to a specific certificate. These are typically returned in a list.
 *
 * @public
 */
export interface CertificateAssociation {
  /**
   * The custom domain name for the certificate association.
   *
   * @public
   */
  CustomDomainName?: string | undefined;

  /**
   * The cluster identifier for the certificate association.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;
}

/**
 * Contains information about the custom domain name association.
 *
 * @public
 */
export interface Association {
  /**
   * The Amazon Resource Name (ARN) for the certificate associated with the custom domain.
   *
   * @public
   */
  CustomDomainCertificateArn?: string | undefined;

  /**
   * The expiration date for the certificate.
   *
   * @public
   */
  CustomDomainCertificateExpiryDate?: Date | undefined;

  /**
   * A list of all associated clusters and domain names tied to a specific certificate.
   *
   * @public
   */
  CertificateAssociations?: CertificateAssociation[] | undefined;
}

/**
 * Describes an authentication profile.
 *
 * @public
 */
export interface AuthenticationProfile {
  /**
   * The name of the authentication profile.
   *
   * @public
   */
  AuthenticationProfileName?: string | undefined;

  /**
   * The content of the authentication profile in JSON format. The maximum length of the JSON string is determined by a quota for your account.
   *
   * @public
   */
  AuthenticationProfileContent?: string | undefined;
}

/**
 * @public
 */
export interface AuthorizeClusterSecurityGroupIngressMessage {
  /**
   * The name of the security group to which the ingress rule is added.
   *
   * @public
   */
  ClusterSecurityGroupName: string | undefined;

  /**
   * The IP range to be added the Amazon Redshift security group.
   *
   * @public
   */
  CIDRIP?: string | undefined;

  /**
   * The EC2 security group to be added the Amazon Redshift security group.
   *
   * @public
   */
  EC2SecurityGroupName?: string | undefined;

  /**
   * The Amazon Web Services account number of the owner of the security group specified by the *EC2SecurityGroupName* parameter. The Amazon Web Services Access Key ID is not an acceptable value.
   *
   * Example: `111122223333`
   *
   * @public
   */
  EC2SecurityGroupOwnerId?: string | undefined;
}

/**
 * A tag consisting of a name/value pair for a resource.
 *
 * @public
 */
export interface Tag {
  /**
   * The key, or name, for the resource tag.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value for the resource tag.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Describes an Amazon EC2 security group.
 *
 * @public
 */
export interface EC2SecurityGroup {
  /**
   * The status of the EC2 security group.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The name of the EC2 Security Group.
   *
   * @public
   */
  EC2SecurityGroupName?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the EC2 security group specified in the `EC2SecurityGroupName` field.
   *
   * @public
   */
  EC2SecurityGroupOwnerId?: string | undefined;

  /**
   * The list of tags for the EC2 security group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes an IP range used in a security group.
 *
 * @public
 */
export interface IPRange {
  /**
   * The status of the IP range, for example, "authorized".
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The IP range in Classless Inter-Domain Routing (CIDR) notation.
   *
   * @public
   */
  CIDRIP?: string | undefined;

  /**
   * The list of tags for the IP range.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes a security group.
 *
 * @public
 */
export interface ClusterSecurityGroup {
  /**
   * The name of the cluster security group to which the operation was applied.
   *
   * @public
   */
  ClusterSecurityGroupName?: string | undefined;

  /**
   * A description of the security group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of EC2 security groups that are permitted to access clusters associated with this cluster security group.
   *
   * @public
   */
  EC2SecurityGroups?: EC2SecurityGroup[] | undefined;

  /**
   * A list of IP ranges (CIDR blocks) that are permitted to access clusters associated with this cluster security group.
   *
   * @public
   */
  IPRanges?: IPRange[] | undefined;

  /**
   * The list of tags for the cluster security group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AuthorizeClusterSecurityGroupIngressResult {
  /**
   * Describes a security group.
   *
   * @public
   */
  ClusterSecurityGroup?: ClusterSecurityGroup | undefined;
}

/**
 * @public
 */
export interface AuthorizeDataShareMessage {
  /**
   * The Amazon Resource Name (ARN) of the datashare namespace that producers are to authorize sharing for.
   *
   * @public
   */
  DataShareArn: string | undefined;

  /**
   * The identifier of the data consumer that is authorized to access the datashare. This identifier is an Amazon Web Services account ID or a keyword, such as ADX.
   *
   * @public
   */
  ConsumerIdentifier: string | undefined;

  /**
   * If set to true, allows write operations for a datashare.
   *
   * @public
   */
  AllowWrites?: boolean | undefined;
}

/**
 * The authorized token issuer for the Amazon Redshift IAM Identity Center application.
 *
 * @public
 */
export interface AuthorizedTokenIssuer {
  /**
   * The ARN for the authorized token issuer for integrating Amazon Redshift with IDC Identity Center.
   *
   * @public
   */
  TrustedTokenIssuerArn?: string | undefined;

  /**
   * The list of audiences for the authorized token issuer for integrating Amazon Redshift with IDC Identity Center.
   *
   * @public
   */
  AuthorizedAudiencesList?: string[] | undefined;
}

/**
 * @public
 */
export interface AuthorizeEndpointAccessMessage {
  /**
   * The cluster identifier of the cluster to grant access to.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The Amazon Web Services account ID to grant access to.
   *
   * @public
   */
  Account: string | undefined;

  /**
   * The virtual private cloud (VPC) identifiers to grant access to.
   *
   * @public
   */
  VpcIds?: string[] | undefined;
}

/**
 * Describes an endpoint authorization for authorizing Redshift-managed VPC endpoint access to a cluster across Amazon Web Services accounts.
 *
 * @public
 */
export interface EndpointAuthorization {
  /**
   * The Amazon Web Services account ID of the cluster owner.
   *
   * @public
   */
  Grantor?: string | undefined;

  /**
   * The Amazon Web Services account ID of the grantee of the cluster.
   *
   * @public
   */
  Grantee?: string | undefined;

  /**
   * The cluster identifier.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The time (UTC) when the authorization was created.
   *
   * @public
   */
  AuthorizeTime?: Date | undefined;

  /**
   * The status of the cluster.
   *
   * @public
   */
  ClusterStatus?: string | undefined;

  /**
   * The status of the authorization action.
   *
   * @public
   */
  Status?: AuthorizationStatus | undefined;

  /**
   * Indicates whether all VPCs in the grantee account are allowed access to the cluster.
   *
   * @public
   */
  AllowedAllVPCs?: boolean | undefined;

  /**
   * The VPCs allowed access to the cluster.
   *
   * @public
   */
  AllowedVPCs?: string[] | undefined;

  /**
   * The number of Redshift-managed VPC endpoints created for the authorization.
   *
   * @public
   */
  EndpointCount?: number | undefined;
}

/**
 * @public
 */
export interface AuthorizeSnapshotAccessMessage {
  /**
   * The identifier of the snapshot the account is authorized to restore.
   *
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the snapshot to authorize access to.
   *
   * @public
   */
  SnapshotArn?: string | undefined;

  /**
   * The identifier of the cluster the snapshot was created from.
   *
   * - *If the snapshot to access doesn't exist and the associated IAM policy doesn't allow access to all (*) snapshots* - This parameter is required. Otherwise, permissions aren't available to check if the snapshot exists.
   * - *If the snapshot to access exists* - This parameter isn't required. Redshift can retrieve the cluster identifier and use it to validate snapshot authorization.
   *
   * @public
   */
  SnapshotClusterIdentifier?: string | undefined;

  /**
   * The identifier of the Amazon Web Services account authorized to restore the specified snapshot.
   *
   * To share a snapshot with Amazon Web Services Support, specify amazon-redshift-support.
   *
   * @public
   */
  AccountWithRestoreAccess: string | undefined;
}

/**
 * Describes a snapshot.
 *
 * @public
 */
export interface Snapshot {
  /**
   * The snapshot identifier that is provided in the request.
   *
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * The identifier of the cluster for which the snapshot was taken.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The time (in UTC format) when Amazon Redshift began the snapshot. A snapshot contains a copy of the cluster data as of this exact time.
   *
   * @public
   */
  SnapshotCreateTime?: Date | undefined;

  /**
   * The snapshot status. The value of the status depends on the API operation used:
   *
   * - CreateClusterSnapshot and CopyClusterSnapshot returns status as "creating".
   * - DescribeClusterSnapshots returns status as "creating", "available", "final snapshot", or "failed".
   * - DeleteClusterSnapshot returns status as "deleted".
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The port that the cluster is listening on.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The Availability Zone in which the cluster was created.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The time (UTC) when the cluster was originally created.
   *
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * The admin user name for the cluster.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The version ID of the Amazon Redshift engine that is running on the cluster.
   *
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * The cluster version of the cluster used to create the snapshot. For example, 1.0.15503.
   *
   * @public
   */
  EngineFullVersion?: string | undefined;

  /**
   * The snapshot type. Snapshots created using CreateClusterSnapshot and CopyClusterSnapshot are of type "manual".
   *
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * The node type of the nodes in the cluster.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The number of nodes in the cluster.
   *
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * The name of the database that was created when the cluster was created.
   *
   * @public
   */
  DBName?: string | undefined;

  /**
   * The VPC identifier of the cluster if the snapshot is from a cluster in a VPC. Otherwise, this field is not in the output.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * If `true`, the data in the snapshot is encrypted at rest.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The Key Management Service (KMS) key ID of the encryption key that was used to encrypt data in the cluster from which the snapshot was taken.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A boolean that indicates whether the snapshot data is encrypted using the HSM keys of the source cluster. `true` indicates that the data is encrypted using HSM keys.
   *
   * @public
   */
  EncryptedWithHSM?: boolean | undefined;

  /**
   * A list of the Amazon Web Services accounts authorized to restore the snapshot. Returns `null` if no accounts are authorized. Visible only to the snapshot owner.
   *
   * @public
   */
  AccountsWithRestoreAccess?: AccountWithRestoreAccess[] | undefined;

  /**
   * For manual snapshots, the Amazon Web Services account used to create or copy the snapshot. For automatic snapshots, the owner of the cluster. The owner can perform all snapshot actions, such as sharing a manual snapshot.
   *
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * The size of the complete set of backup data that would be used to restore the cluster.
   *
   * @public
   */
  TotalBackupSizeInMegaBytes?: number | undefined;

  /**
   * The size of the incremental backup.
   *
   * @public
   */
  ActualIncrementalBackupSizeInMegaBytes?: number | undefined;

  /**
   * The number of megabytes that have been transferred to the snapshot backup.
   *
   * @public
   */
  BackupProgressInMegaBytes?: number | undefined;

  /**
   * The number of megabytes per second being transferred to the snapshot backup. Returns `0` for a completed backup.
   *
   * @public
   */
  CurrentBackupRateInMegaBytesPerSecond?: number | undefined;

  /**
   * The estimate of the time remaining before the snapshot backup will complete. Returns `0` for a completed backup.
   *
   * @public
   */
  EstimatedSecondsToCompletion?: number | undefined;

  /**
   * The amount of time an in-progress snapshot backup has been running, or the amount of time it took a completed backup to finish.
   *
   * @public
   */
  ElapsedTimeInSeconds?: number | undefined;

  /**
   * The source region from which the snapshot was copied.
   *
   * @public
   */
  SourceRegion?: string | undefined;

  /**
   * The list of tags for the cluster snapshot.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The list of node types that this cluster snapshot is able to restore into.
   *
   * @public
   */
  RestorableNodeTypes?: string[] | undefined;

  /**
   * An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see [Enhanced VPC Routing](https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html) in the Amazon Redshift Cluster Management Guide.
   *
   * If this option is `true`, enhanced VPC routing is enabled.
   *
   * Default: false
   *
   * @public
   */
  EnhancedVpcRouting?: boolean | undefined;

  /**
   * The name of the maintenance track for the snapshot.
   *
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely.
   *
   * The value must be either -1 or an integer between 1 and 3,653.
   *
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * The number of days until a manual snapshot will pass its retention period.
   *
   * @public
   */
  ManualSnapshotRemainingDays?: number | undefined;

  /**
   * A timestamp representing the start of the retention period for the snapshot.
   *
   * @public
   */
  SnapshotRetentionStartTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) for the cluster's admin user credentials secret.
   *
   * @public
   */
  MasterPasswordSecretArn?: string | undefined;

  /**
   * The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin credentials secret.
   *
   * @public
   */
  MasterPasswordSecretKmsKeyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the snapshot.
   *
   * @public
   */
  SnapshotArn?: string | undefined;
}

/**
 * @public
 */
export interface AuthorizeSnapshotAccessResult {
  /**
   * Describes a snapshot.
   *
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * A list of supported platforms for orderable clusters.
 *
 * @public
 */
export interface SupportedPlatform {
  /**
   * @public
   */
  Name?: string | undefined;
}

/**
 * Describes an availability zone.
 *
 * @public
 */
export interface AvailabilityZone {
  /**
   * The name of the availability zone.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * @public
   */
  SupportedPlatforms?: SupportedPlatform[] | undefined;
}

/**
 * @public
 */
export interface DeleteClusterSnapshotMessage {
  /**
   * The unique identifier of the manual snapshot to be deleted.
   *
   * Constraints: Must be the name of an existing snapshot that is in the `available`, `failed`, or `cancelled` state.
   *
   * @public
   */
  SnapshotIdentifier: string | undefined;

  /**
   * The unique identifier of the cluster the snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.
   *
   * Constraints: Must be the name of valid cluster.
   *
   * @public
   */
  SnapshotClusterIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteClusterSnapshotsRequest {
  /**
   * A list of identifiers for the snapshots that you want to delete.
   *
   * @public
   */
  Identifiers: DeleteClusterSnapshotMessage[] | undefined;
}

/**
 * Describes the errors returned by a snapshot.
 *
 * @public
 */
export interface SnapshotErrorMessage {
  /**
   * A unique identifier for the snapshot returning the error.
   *
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * A unique identifier for the cluster.
   *
   * @public
   */
  SnapshotClusterIdentifier?: string | undefined;

  /**
   * The failure code for the error.
   *
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * The text message describing the error.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteClusterSnapshotsResult {
  /**
   * A list of the snapshot identifiers that were deleted.
   *
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * A list of any errors returned.
   *
   * @public
   */
  Errors?: SnapshotErrorMessage[] | undefined;
}

/**
 * @public
 */
export interface BatchModifyClusterSnapshotsMessage {
  /**
   * A list of snapshot identifiers you want to modify.
   *
   * @public
   */
  SnapshotIdentifierList: string[] | undefined;

  /**
   * The number of days that a manual snapshot is retained. If you specify the value -1, the manual snapshot is retained indefinitely.
   *
   * The number must be either -1 or an integer between 1 and 3,653.
   *
   * If you decrease the manual snapshot retention period from its current value, existing manual snapshots that fall outside of the new retention period will return an error. If you want to suppress the errors and delete the snapshots, use the force option.
   *
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * A boolean value indicating whether to override an exception if the retention period has passed.
   *
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface BatchModifyClusterSnapshotsOutputMessage {
  /**
   * A list of the snapshots that were modified.
   *
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * A list of any errors returned.
   *
   * @public
   */
  Errors?: SnapshotErrorMessage[] | undefined;
}

/**
 * @public
 */
export interface CancelResizeMessage {
  /**
   * The unique identifier for the cluster that you want to cancel a resize operation for.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * Describes the result of a cluster resize operation.
 *
 * @public
 */
export interface ResizeProgressMessage {
  /**
   * The node type that the cluster will have after the resize operation is complete.
   *
   * @public
   */
  TargetNodeType?: string | undefined;

  /**
   * The number of nodes that the cluster will have after the resize operation is complete.
   *
   * @public
   */
  TargetNumberOfNodes?: number | undefined;

  /**
   * The cluster type after the resize operation is complete.
   *
   * Valid Values: `multi-node` | `single-node`
   *
   * @public
   */
  TargetClusterType?: string | undefined;

  /**
   * The status of the resize operation.
   *
   * Valid Values: `NONE` | `IN_PROGRESS` | `FAILED` | `SUCCEEDED` | `CANCELLING`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The names of tables that have been completely imported .
   *
   * Valid Values: List of table names.
   *
   * @public
   */
  ImportTablesCompleted?: string[] | undefined;

  /**
   * The names of tables that are being currently imported.
   *
   * Valid Values: List of table names.
   *
   * @public
   */
  ImportTablesInProgress?: string[] | undefined;

  /**
   * The names of tables that have not been yet imported.
   *
   * Valid Values: List of table names
   *
   * @public
   */
  ImportTablesNotStarted?: string[] | undefined;

  /**
   * The average rate of the resize operation over the last few minutes, measured in megabytes per second. After the resize operation completes, this value shows the average rate of the entire resize operation.
   *
   * @public
   */
  AvgResizeRateInMegaBytesPerSecond?: number | undefined;

  /**
   * The estimated total amount of data, in megabytes, on the cluster before the resize operation began.
   *
   * @public
   */
  TotalResizeDataInMegaBytes?: number | undefined;

  /**
   * While the resize operation is in progress, this value shows the current amount of data, in megabytes, that has been processed so far. When the resize operation is complete, this value shows the total amount of data, in megabytes, on the cluster, which may be more or less than TotalResizeDataInMegaBytes (the estimated total amount of data before resize).
   *
   * @public
   */
  ProgressInMegaBytes?: number | undefined;

  /**
   * The amount of seconds that have elapsed since the resize operation began. After the resize operation completes, this value shows the total actual time, in seconds, for the resize operation.
   *
   * @public
   */
  ElapsedTimeInSeconds?: number | undefined;

  /**
   * The estimated time remaining, in seconds, until the resize operation is complete. This value is calculated based on the average resize rate and the estimated amount of data remaining to be processed. Once the resize operation is complete, this value will be 0.
   *
   * @public
   */
  EstimatedTimeToCompletionInSeconds?: number | undefined;

  /**
   * An enum with possible values of `ClassicResize` and `ElasticResize`. These values describe the type of resize operation being performed.
   *
   * @public
   */
  ResizeType?: string | undefined;

  /**
   * An optional string to provide additional details about the resize action.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The type of encryption for the cluster after the resize is complete.
   *
   * Possible values are `KMS` and `None`.
   *
   * @public
   */
  TargetEncryptionType?: string | undefined;

  /**
   * The percent of data transferred from source cluster to target cluster.
   *
   * @public
   */
  DataTransferProgressPercent?: number | undefined;
}

/**
 * The identifier of a node in a cluster.
 *
 * @public
 */
export interface ClusterNode {
  /**
   * Whether the node is a leader node or a compute node.
   *
   * @public
   */
  NodeRole?: string | undefined;

  /**
   * The private IP address of a node within a cluster.
   *
   * @public
   */
  PrivateIPAddress?: string | undefined;

  /**
   * The public IP address of a node within a cluster.
   *
   * @public
   */
  PublicIPAddress?: string | undefined;
}

/**
 * Describes the status of a parameter group.
 *
 * @public
 */
export interface ClusterParameterStatus {
  /**
   * The name of the parameter.
   *
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * The status of the parameter that indicates whether the parameter is in sync with the database, waiting for a cluster reboot, or encountered an error when being applied.
   *
   * The following are possible statuses and descriptions.
   *
   * - `in-sync`: The parameter value is in sync with the database.
   * - `pending-reboot`: The parameter value will be applied after the cluster reboots.
   * - `applying`: The parameter value is being applied to the database.
   * - `invalid-parameter`: Cannot apply the parameter value because it has an invalid value or syntax.
   * - `apply-deferred`: The parameter contains static property changes. The changes are deferred until the cluster reboots.
   * - `apply-error`: Cannot connect to the cluster. The parameter change will be applied after the cluster reboots.
   * - `unknown-error`: Cannot apply the parameter change right now. The change will be applied after the cluster reboots.
   *
   * @public
   */
  ParameterApplyStatus?: string | undefined;

  /**
   * The error that prevented the parameter from being applied to the database.
   *
   * @public
   */
  ParameterApplyErrorDescription?: string | undefined;
}

/**
 * Describes the status of a parameter group.
 *
 * @public
 */
export interface ClusterParameterGroupStatus {
  /**
   * The name of the cluster parameter group.
   *
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * The status of parameter updates.
   *
   * @public
   */
  ParameterApplyStatus?: string | undefined;

  /**
   * The list of parameter statuses.
   *
   * For more information about parameters and parameter groups, go to [Amazon Redshift Parameter Groups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html) in the *Amazon Redshift Cluster Management Guide*.
   *
   * @public
   */
  ClusterParameterStatusList?: ClusterParameterStatus[] | undefined;
}

/**
 * Describes a cluster security group.
 *
 * @public
 */
export interface ClusterSecurityGroupMembership {
  /**
   * The name of the cluster security group.
   *
   * @public
   */
  ClusterSecurityGroupName?: string | undefined;

  /**
   * The status of the cluster security group.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Returns the destination region and retention period that are configured for cross-region snapshot copy.
 *
 * @public
 */
export interface ClusterSnapshotCopyStatus {
  /**
   * The destination region that snapshots are automatically copied to when cross-region snapshot copy is enabled.
   *
   * @public
   */
  DestinationRegion?: string | undefined;

  /**
   * The number of days that automated snapshots are retained in the destination region after they are copied from a source region.
   *
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * The number of days that automated snapshots are retained in the destination region after they are copied from a source region. If the value is -1, the manual snapshot is retained indefinitely.
   *
   * The value must be either -1 or an integer between 1 and 3,653.
   *
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * The name of the snapshot copy grant.
   *
   * @public
   */
  SnapshotCopyGrantName?: string | undefined;
}

/**
 * Describes the status of a cluster while it is in the process of resizing with an incremental resize.
 *
 * @public
 */
export interface DataTransferProgress {
  /**
   * Describes the status of the cluster. While the transfer is in progress the status is `transferringdata`.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Describes the data transfer rate in MB's per second.
   *
   * @public
   */
  CurrentRateInMegaBytesPerSecond?: number | undefined;

  /**
   * Describes the total amount of data to be transfered in megabytes.
   *
   * @public
   */
  TotalDataInMegaBytes?: number | undefined;

  /**
   * Describes the total amount of data that has been transfered in MB's.
   *
   * @public
   */
  DataTransferredInMegaBytes?: number | undefined;

  /**
   * Describes the estimated number of seconds remaining to complete the transfer.
   *
   * @public
   */
  EstimatedTimeToCompletionInSeconds?: number | undefined;

  /**
   * Describes the number of seconds that have elapsed during the data transfer.
   *
   * @public
   */
  ElapsedTimeInSeconds?: number | undefined;
}

/**
 * Describes a deferred maintenance window
 *
 * @public
 */
export interface DeferredMaintenanceWindow {
  /**
   * A unique identifier for the maintenance window.
   *
   * @public
   */
  DeferMaintenanceIdentifier?: string | undefined;

  /**
   * A timestamp for the beginning of the time period when we defer maintenance.
   *
   * @public
   */
  DeferMaintenanceStartTime?: Date | undefined;

  /**
   * A timestamp for the end of the time period when we defer maintenance.
   *
   * @public
   */
  DeferMaintenanceEndTime?: Date | undefined;
}

/**
 * Describes the status of the elastic IP (EIP) address.
 *
 * @public
 */
export interface ElasticIpStatus {
  /**
   * The elastic IP (EIP) address for the cluster.
   *
   * @public
   */
  ElasticIp?: string | undefined;

  /**
   * The status of the elastic IP (EIP) address.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Describes a network interface.
 *
 * @public
 */
export interface NetworkInterface {
  /**
   * The network interface identifier.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The subnet identifier.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The IPv4 address of the network interface within the subnet.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * The Availability Zone.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The IPv6 address of the network interface within the subnet.
   *
   * @public
   */
  Ipv6Address?: string | undefined;
}

/**
 * The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
 *
 * @public
 */
export interface VpcEndpoint {
  /**
   * The connection endpoint ID for connecting an Amazon Redshift cluster through the proxy.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * The VPC identifier that the endpoint is associated.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * One or more network interfaces of the endpoint. Also known as an interface endpoint.
   *
   * @public
   */
  NetworkInterfaces?: NetworkInterface[] | undefined;
}

/**
 * Describes a connection endpoint.
 *
 * @public
 */
export interface Endpoint {
  /**
   * The DNS address of the Cluster.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * The port that the database engine is listening on.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Describes a connection endpoint.
   *
   * @public
   */
  VpcEndpoints?: VpcEndpoint[] | undefined;
}

/**
 * Describes the status of changes to HSM settings.
 *
 * @public
 */
export interface HsmStatus {
  /**
   * Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.
   *
   * @public
   */
  HsmClientCertificateIdentifier?: string | undefined;

  /**
   * Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
   *
   * @public
   */
  HsmConfigurationIdentifier?: string | undefined;

  /**
   * Reports whether the Amazon Redshift cluster has finished applying any HSM settings changes specified in a modify cluster command.
   *
   * Values: active, applying
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * An Identity and Access Management (IAM) role that can be used by the associated Amazon Redshift cluster to access other Amazon Web Services services.
 *
 * @public
 */
export interface ClusterIamRole {
  /**
   * The Amazon Resource Name (ARN) of the IAM role, for example, `arn:aws:iam::123456789012:role/RedshiftCopyUnload`.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * A value that describes the status of the IAM role's association with an Amazon Redshift cluster.
   *
   * The following are possible statuses and descriptions.
   *
   * - `in-sync`: The role is available for use by the cluster.
   * - `adding`: The role is in the process of being associated with the cluster.
   * - `removing`: The role is in the process of being disassociated with the cluster.
   *
   * @public
   */
  ApplyStatus?: string | undefined;
}

/**
 * Describes the status of system table publishing to S3 Tables for a cluster.
 *
 * @public
 */
export interface S3TablePublishStatus {
  /**
   * The system tables currently being published.
   *
   * @public
   */
  S3Tables?: string[] | undefined;

  /**
   * The namespace in the S3 table bucket that holds the published tables.
   *
   * @public
   */
  S3TableNamespace?: string | undefined;

  /**
   * The scope of system table publishing in effect. Possible values are `cluster` and `account`.
   *
   * @public
   */
  S3TableGranularity?: string | undefined;

  /**
   * `true` if the cluster is enrolled in all current and future system tables rather than an explicit subset.
   *
   * @public
   */
  EnabledAll?: boolean | undefined;

  /**
   * A map whose keys are the names of the published system tables and whose values are the time each table last received data. Use this to judge data freshness.
   *
   * @public
   */
  LastIngestionTimes?: Record<string, string> | undefined;
}

/**
 * Describes the system table publishing status for a cluster.
 *
 * @public
 */
export interface LoggingPublishStatus {
  /**
   * The status of system table publishing to S3 Tables.
   *
   * @public
   */
  S3Tables?: S3TablePublishStatus | undefined;
}

/**
 * The AvailabilityZone and ClusterNodes information of the secondary compute unit.
 *
 * @public
 */
export interface SecondaryClusterInfo {
  /**
   * The name of the Availability Zone in which the secondary compute unit of the cluster is located.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The nodes in the secondary compute unit.
   *
   * @public
   */
  ClusterNodes?: ClusterNode[] | undefined;
}

/**
 * Describes cluster attributes that are in a pending state. A change to one or more the attributes was requested and is in progress or will be applied.
 *
 * @public
 */
export interface PendingModifiedValues {
  /**
   * The pending or in-progress change of the admin user password for the cluster.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * The pending or in-progress change of the cluster's node type.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The pending or in-progress change of the number of nodes in the cluster.
   *
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * The pending or in-progress change of the cluster type.
   *
   * @public
   */
  ClusterType?: string | undefined;

  /**
   * The pending or in-progress change of the service version.
   *
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * The pending or in-progress change of the automated snapshot retention period.
   *
   * @public
   */
  AutomatedSnapshotRetentionPeriod?: number | undefined;

  /**
   * The pending or in-progress change of the new identifier for the cluster.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The pending or in-progress change of the ability to connect to the cluster from the public network.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see [Enhanced VPC Routing](https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html) in the Amazon Redshift Cluster Management Guide.
   *
   * If this option is `true`, enhanced VPC routing is enabled.
   *
   * Default: false
   *
   * @public
   */
  EnhancedVpcRouting?: boolean | undefined;

  /**
   * The name of the maintenance track that the cluster will change to during the next maintenance window.
   *
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * The encryption type for a cluster. Possible values are: KMS and None.
   *
   * @public
   */
  EncryptionType?: string | undefined;
}

/**
 * Reserved-node status details, such as the source reserved-node identifier, the target reserved-node identifier, the node type, the node count, and other details.
 *
 * @public
 */
export interface ReservedNodeExchangeStatus {
  /**
   * The identifier of the reserved-node exchange request.
   *
   * @public
   */
  ReservedNodeExchangeRequestId?: string | undefined;

  /**
   * The status of the reserved-node exchange request. Statuses include in-progress and requested.
   *
   * @public
   */
  Status?: ReservedNodeExchangeStatusType | undefined;

  /**
   * A date and time that indicate when the reserved-node exchange was requested.
   *
   * @public
   */
  RequestTime?: Date | undefined;

  /**
   * The identifier of the source reserved node.
   *
   * @public
   */
  SourceReservedNodeId?: string | undefined;

  /**
   * The source reserved-node type, for example ra3.4xlarge.
   *
   * @public
   */
  SourceReservedNodeType?: string | undefined;

  /**
   * The source reserved-node count in the cluster.
   *
   * @public
   */
  SourceReservedNodeCount?: number | undefined;

  /**
   * The identifier of the target reserved node offering.
   *
   * @public
   */
  TargetReservedNodeOfferingId?: string | undefined;

  /**
   * The node type of the target reserved node, for example ra3.4xlarge.
   *
   * @public
   */
  TargetReservedNodeType?: string | undefined;

  /**
   * The count of target reserved nodes in the cluster.
   *
   * @public
   */
  TargetReservedNodeCount?: number | undefined;
}

/**
 * Describes a resize operation.
 *
 * @public
 */
export interface ResizeInfo {
  /**
   * Returns the value `ClassicResize`.
   *
   * @public
   */
  ResizeType?: string | undefined;

  /**
   * A boolean value indicating if the resize operation can be cancelled.
   *
   * @public
   */
  AllowCancelResize?: boolean | undefined;
}

/**
 * Describes the status of a cluster restore action. Returns null if the cluster was not created by restoring a snapshot.
 *
 * @public
 */
export interface RestoreStatus {
  /**
   * The status of the restore action. Returns starting, restoring, completed, or failed.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The number of megabytes per second being transferred from the backup storage. Returns the average rate for a completed backup. This field is only updated when you restore to DC2 node types.
   *
   * @public
   */
  CurrentRestoreRateInMegaBytesPerSecond?: number | undefined;

  /**
   * The size of the set of snapshot data used to restore the cluster. This field is only updated when you restore to DC2 node types.
   *
   * @public
   */
  SnapshotSizeInMegaBytes?: number | undefined;

  /**
   * The number of megabytes that have been transferred from snapshot storage. This field is only updated when you restore to DC2 node types.
   *
   * @public
   */
  ProgressInMegaBytes?: number | undefined;

  /**
   * The amount of time an in-progress restore has been running, or the amount of time it took a completed restore to finish. This field is only updated when you restore to DC2 node types.
   *
   * @public
   */
  ElapsedTimeInSeconds?: number | undefined;

  /**
   * The estimate of the time remaining before the restore will complete. Returns 0 for a completed restore. This field is only updated when you restore to DC2 node types.
   *
   * @public
   */
  EstimatedTimeToCompletionInSeconds?: number | undefined;
}

/**
 * Describes the members of a VPC security group.
 *
 * @public
 */
export interface VpcSecurityGroupMembership {
  /**
   * The identifier of the VPC security group.
   *
   * @public
   */
  VpcSecurityGroupId?: string | undefined;

  /**
   * The status of the VPC security group.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Describes a cluster.
 *
 * @public
 */
export interface Cluster {
  /**
   * The unique identifier of the cluster.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The node type for the nodes in the cluster.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The current state of the cluster. Possible values are the following:
   *
   * - `available`
   * - `available, prep-for-resize`
   * - `available, resize-cleanup`
   * - `cancelling-resize`
   * - `creating`
   * - `deleting`
   * - `final-snapshot`
   * - `hardware-failure`
   * - `incompatible-hsm`
   * - `incompatible-network`
   * - `incompatible-parameters`
   * - `incompatible-restore`
   * - `modifying`
   * - `paused`
   * - `rebooting`
   * - `renaming`
   * - `resizing`
   * - `rotating-keys`
   * - `storage-full`
   * - `updating-hsm`
   *
   * @public
   */
  ClusterStatus?: string | undefined;

  /**
   * The availability status of the cluster for queries. Possible values are the following:
   *
   * - Available - The cluster is available for queries.
   * - Unavailable - The cluster is not available for queries.
   * - Maintenance - The cluster is intermittently available for queries due to maintenance activities.
   * - Modifying - The cluster is intermittently available for queries due to changes that modify the cluster.
   * - Failed - The cluster failed and is not available for queries.
   *
   * @public
   */
  ClusterAvailabilityStatus?: string | undefined;

  /**
   * The status of a modify operation, if any, initiated for the cluster.
   *
   * @public
   */
  ModifyStatus?: string | undefined;

  /**
   * The admin user name for the cluster. This name is used to connect to the database that is specified in the **DBName** parameter.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The name of the initial database that was created when the cluster was created. This same name is returned for the life of the cluster. If an initial database was not specified, a database named `dev`dev was created by default.
   *
   * @public
   */
  DBName?: string | undefined;

  /**
   * The connection endpoint.
   *
   * @public
   */
  Endpoint?: Endpoint | undefined;

  /**
   * The date and time that the cluster was created.
   *
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * The number of days that automatic cluster snapshots are retained.
   *
   * @public
   */
  AutomatedSnapshotRetentionPeriod?: number | undefined;

  /**
   * The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots.
   *
   * The value must be either -1 or an integer between 1 and 3,653.
   *
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * A list of cluster security group that are associated with the cluster. Each security group is represented by an element that contains `ClusterSecurityGroup.Name` and `ClusterSecurityGroup.Status` subelements.
   *
   * Cluster security groups are used when the cluster is not created in an Amazon Virtual Private Cloud (VPC). Clusters that are created in a VPC use VPC security groups, which are listed by the **VpcSecurityGroups** parameter.
   *
   * @public
   */
  ClusterSecurityGroups?: ClusterSecurityGroupMembership[] | undefined;

  /**
   * A list of Amazon Virtual Private Cloud (Amazon VPC) security groups that are associated with the cluster. This parameter is returned only if the cluster is in a VPC.
   *
   * @public
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * The list of cluster parameter groups that are associated with this cluster. Each parameter group in the list is returned with its status.
   *
   * @public
   */
  ClusterParameterGroups?: ClusterParameterGroupStatus[] | undefined;

  /**
   * The name of the subnet group that is associated with the cluster. This parameter is valid only when the cluster is in a VPC.
   *
   * @public
   */
  ClusterSubnetGroupName?: string | undefined;

  /**
   * The identifier of the VPC the cluster is in, if the cluster is in a VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The name of the Availability Zone in which the cluster is located.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The weekly time range, in Universal Coordinated Time (UTC), during which system maintenance can occur.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * A value that, if present, indicates that changes to the cluster are pending. Specific pending changes are identified by subelements.
   *
   * @public
   */
  PendingModifiedValues?: PendingModifiedValues | undefined;

  /**
   * The version ID of the Amazon Redshift engine that is running on the cluster.
   *
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * A boolean value that, if `true`, indicates that major version upgrades will be applied automatically to the cluster during the maintenance window.
   *
   * @public
   */
  AllowVersionUpgrade?: boolean | undefined;

  /**
   * The number of compute nodes in the cluster.
   *
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * A boolean value that, if `true`, indicates that the cluster can be accessed from a public network.
   *
   * Default: false
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * A boolean value that, if `true`, indicates that data in the cluster is encrypted at rest.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * A value that describes the status of a cluster restore action. This parameter returns null if the cluster was not created by restoring a snapshot.
   *
   * @public
   */
  RestoreStatus?: RestoreStatus | undefined;

  /**
   * @public
   */
  DataTransferProgress?: DataTransferProgress | undefined;

  /**
   * A value that reports whether the Amazon Redshift cluster has finished applying any hardware security module (HSM) settings changes specified in a modify cluster command.
   *
   * Values: active, applying
   *
   * @public
   */
  HsmStatus?: HsmStatus | undefined;

  /**
   * A value that returns the destination region and retention period that are configured for cross-region snapshot copy.
   *
   * @public
   */
  ClusterSnapshotCopyStatus?: ClusterSnapshotCopyStatus | undefined;

  /**
   * The public key for the cluster.
   *
   * @public
   */
  ClusterPublicKey?: string | undefined;

  /**
   * The nodes in the cluster.
   *
   * @public
   */
  ClusterNodes?: ClusterNode[] | undefined;

  /**
   * The status of the elastic IP (EIP) address.
   *
   * @public
   */
  ElasticIpStatus?: ElasticIpStatus | undefined;

  /**
   * The specific revision number of the database in the cluster.
   *
   * @public
   */
  ClusterRevisionNumber?: string | undefined;

  /**
   * The list of tags for the cluster.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Key Management Service (KMS) key ID of the encryption key used to encrypt data in the cluster.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see [Enhanced VPC Routing](https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html) in the Amazon Redshift Cluster Management Guide.
   *
   * If this option is `true`, enhanced VPC routing is enabled.
   *
   * Default: false
   *
   * @public
   */
  EnhancedVpcRouting?: boolean | undefined;

  /**
   * A list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services.
   *
   * @public
   */
  IamRoles?: ClusterIamRole[] | undefined;

  /**
   * Cluster operations that are waiting to be started.
   *
   * @public
   */
  PendingActions?: string[] | undefined;

  /**
   * The name of the maintenance track for the cluster.
   *
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * The number of nodes that you can resize the cluster to with the elastic resize method.
   *
   * @public
   */
  ElasticResizeNumberOfNodeOptions?: string | undefined;

  /**
   * Describes a group of `DeferredMaintenanceWindow` objects.
   *
   * @public
   */
  DeferredMaintenanceWindows?: DeferredMaintenanceWindow[] | undefined;

  /**
   * A unique identifier for the cluster snapshot schedule.
   *
   * @public
   */
  SnapshotScheduleIdentifier?: string | undefined;

  /**
   * The current state of the cluster snapshot schedule.
   *
   * @public
   */
  SnapshotScheduleState?: ScheduleState | undefined;

  /**
   * The date and time when the next snapshot is expected to be taken for clusters with a valid snapshot schedule and backups enabled.
   *
   * @public
   */
  ExpectedNextSnapshotScheduleTime?: Date | undefined;

  /**
   * The status of next expected snapshot for clusters having a valid snapshot schedule and backups enabled. Possible values are the following:
   *
   * - OnTrack - The next snapshot is expected to be taken on time.
   * - Pending - The next snapshot is pending to be taken.
   *
   * @public
   */
  ExpectedNextSnapshotScheduleTimeStatus?: string | undefined;

  /**
   * The date and time in UTC when system maintenance can begin.
   *
   * @public
   */
  NextMaintenanceWindowStartTime?: Date | undefined;

  /**
   * Returns the following:
   *
   * - AllowCancelResize: a boolean value indicating if the resize operation can be cancelled.
   * - ResizeType: Returns ClassicResize
   *
   * @public
   */
  ResizeInfo?: ResizeInfo | undefined;

  /**
   * Describes the status of the Availability Zone relocation operation.
   *
   * @public
   */
  AvailabilityZoneRelocationStatus?: string | undefined;

  /**
   * The namespace Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterNamespaceArn?: string | undefined;

  /**
   * The total storage capacity of the cluster in megabytes.
   *
   * @public
   */
  TotalStorageCapacityInMegaBytes?: number | undefined;

  /**
   * This field is retired. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
   *
   * @public
   */
  AquaConfiguration?: AquaConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM role set as default for the cluster.
   *
   * @public
   */
  DefaultIamRoleArn?: string | undefined;

  /**
   * The status of the reserved-node exchange request. Statuses include in-progress and requested.
   *
   * @public
   */
  ReservedNodeExchangeStatus?: ReservedNodeExchangeStatus | undefined;

  /**
   * The custom domain name associated with the cluster.
   *
   * @public
   */
  CustomDomainName?: string | undefined;

  /**
   * The certificate Amazon Resource Name (ARN) for the custom domain name.
   *
   * @public
   */
  CustomDomainCertificateArn?: string | undefined;

  /**
   * The expiration date for the certificate associated with the custom domain name.
   *
   * @public
   */
  CustomDomainCertificateExpiryDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) for the cluster's admin user credentials secret.
   *
   * @public
   */
  MasterPasswordSecretArn?: string | undefined;

  /**
   * The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin credentials secret.
   *
   * @public
   */
  MasterPasswordSecretKmsKeyId?: string | undefined;

  /**
   * The IP address type for the cluster. Possible values are `ipv4` and `dualstack`.
   *
   * @public
   */
  IpAddressType?: string | undefined;

  /**
   * A boolean value that, if true, indicates that the cluster is deployed in two Availability Zones.
   *
   * @public
   */
  MultiAZ?: string | undefined;

  /**
   * The secondary compute unit of a cluster, if Multi-AZ deployment is turned on.
   *
   * @public
   */
  MultiAZSecondary?: SecondaryClusterInfo | undefined;

  /**
   * The status of the lakehouse registration for the cluster. Indicates whether the cluster is successfully registered with Amazon Redshift federated permissions.
   *
   * @public
   */
  LakehouseRegistrationStatus?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Glue data catalog associated with the cluster enabled with Amazon Redshift federated permissions.
   *
   * @public
   */
  CatalogArn?: string | undefined;

  /**
   * A boolean value that, if `true`, indicates that the cluster allocates additional compute resources to run automatic optimization operations.
   *
   * Default: false
   *
   * @public
   */
  ExtraComputeForAutomaticOptimization?: string | undefined;

  /**
   * The status of system table publishing for the cluster. This field is present only when system table publishing is configured.
   *
   * @public
   */
  LoggingPublishStatus?: LoggingPublishStatus | undefined;
}

/**
 * Temporary credentials with authorization to log on to an Amazon Redshift database.
 *
 * @public
 */
export interface ClusterCredentials {
  /**
   * A database user name that is authorized to log on to the database `DbName` using the password `DbPassword`. If the specified DbUser exists in the database, the new user name has the same database permissions as the the user named in DbUser. By default, the user is added to PUBLIC. If the `DbGroups` parameter is specifed, `DbUser` is added to the listed groups for any sessions created using these credentials.
   *
   * @public
   */
  DbUser?: string | undefined;

  /**
   * A temporary password that authorizes the user name returned by `DbUser` to log on to the database `DbName`.
   *
   * @public
   */
  DbPassword?: string | undefined;

  /**
   * The date and time the password in `DbPassword` expires.
   *
   * @public
   */
  Expiration?: Date | undefined;
}

/**
 * Describes a `RevisionTarget`.
 *
 * @public
 */
export interface RevisionTarget {
  /**
   * A unique string that identifies the version to update the cluster to. You can use this value in ModifyClusterDbRevision.
   *
   * @public
   */
  DatabaseRevision?: string | undefined;

  /**
   * A string that describes the changes and features that will be applied to the cluster when it is updated to the corresponding ClusterDbRevision.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date on which the database revision was released.
   *
   * @public
   */
  DatabaseRevisionReleaseDate?: Date | undefined;
}

/**
 * Describes a `ClusterDbRevision`.
 *
 * @public
 */
export interface ClusterDbRevision {
  /**
   * The unique identifier of the cluster.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * A string representing the current cluster version.
   *
   * @public
   */
  CurrentDatabaseRevision?: string | undefined;

  /**
   * The date on which the database revision was released.
   *
   * @public
   */
  DatabaseRevisionReleaseDate?: Date | undefined;

  /**
   * A list of `RevisionTarget` objects, where each object describes the database revision that a cluster can be updated to.
   *
   * @public
   */
  RevisionTargets?: RevisionTarget[] | undefined;
}

/**
 * @public
 */
export interface ClusterDbRevisionsMessage {
  /**
   * A string representing the starting point for the next set of revisions. If a value is returned in a response, you can retrieve the next set of revisions by providing the value in the `marker` parameter and retrying the command. If the `marker` field is empty, all revisions have already been returned.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of revisions.
   *
   * @public
   */
  ClusterDbRevisions?: ClusterDbRevision[] | undefined;
}

/**
 * @public
 */
export interface ClusterExtendedCredentials {
  /**
   * A database user name that you provide when you connect to a database. The database user is mapped 1:1 to the source IAM identity.
   *
   * @public
   */
  DbUser?: string | undefined;

  /**
   * A temporary password that you provide when you connect to a database.
   *
   * @public
   */
  DbPassword?: string | undefined;

  /**
   * The time (UTC) when the temporary password expires. After this timestamp, a log in with the temporary password fails.
   *
   * @public
   */
  Expiration?: Date | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  NextRefreshTime?: Date | undefined;
}

/**
 * Describes a parameter group.
 *
 * @public
 */
export interface ClusterParameterGroup {
  /**
   * The name of the cluster parameter group.
   *
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * The name of the cluster parameter group family that this cluster parameter group is compatible with.
   *
   * @public
   */
  ParameterGroupFamily?: string | undefined;

  /**
   * The description of the parameter group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The list of tags for the cluster parameter group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes a parameter in a cluster parameter group.
 *
 * @public
 */
export interface Parameter {
  /**
   * The name of the parameter.
   *
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * The value of the parameter. If `ParameterName` is `wlm_json_configuration`, then the maximum size of `ParameterValue` is 8000 characters.
   *
   * @public
   */
  ParameterValue?: string | undefined;

  /**
   * A description of the parameter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The source of the parameter value, such as "engine-default" or "user".
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The data type of the parameter.
   *
   * @public
   */
  DataType?: string | undefined;

  /**
   * The valid range of values for the parameter.
   *
   * @public
   */
  AllowedValues?: string | undefined;

  /**
   * Specifies how to apply the WLM configuration parameter. Some properties can be applied dynamically, while other properties require that any associated clusters be rebooted for the configuration changes to be applied. For more information about parameters and parameter groups, go to [Amazon Redshift Parameter Groups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html) in the *Amazon Redshift Cluster Management Guide*.
   *
   * @public
   */
  ApplyType?: ParameterApplyType | undefined;

  /**
   * If `true`, the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.
   *
   * @public
   */
  IsModifiable?: boolean | undefined;

  /**
   * The earliest engine version to which the parameter can apply.
   *
   * @public
   */
  MinimumEngineVersion?: string | undefined;
}

/**
 * Contains the output from the DescribeClusterParameters action.
 *
 * @public
 */
export interface ClusterParameterGroupDetails {
  /**
   * A list of Parameter instances. Each instance lists the parameters of one cluster parameter group.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ClusterParameterGroupNameMessage {
  /**
   * The name of the cluster parameter group.
   *
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * The status of the parameter group. For example, if you made a change to a parameter group name-value pair, then the change could be pending a reboot of an associated cluster.
   *
   * @public
   */
  ParameterGroupStatus?: string | undefined;
}

/**
 * Contains the output from the DescribeClusterParameterGroups action.
 *
 * @public
 */
export interface ClusterParameterGroupsMessage {
  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of ClusterParameterGroup instances. Each instance describes one cluster parameter group.
   *
   * @public
   */
  ParameterGroups?: ClusterParameterGroup[] | undefined;
}

/**
 * @public
 */
export interface ClusterSecurityGroupMessage {
  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of ClusterSecurityGroup instances.
   *
   * @public
   */
  ClusterSecurityGroups?: ClusterSecurityGroup[] | undefined;
}

/**
 * Contains the output from the DescribeClusters action.
 *
 * @public
 */
export interface ClustersMessage {
  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of `Cluster` objects, where each object describes one cluster.
   *
   * @public
   */
  Clusters?: Cluster[] | undefined;
}

/**
 * Describes a subnet.
 *
 * @public
 */
export interface Subnet {
  /**
   * The identifier of the subnet.
   *
   * @public
   */
  SubnetIdentifier?: string | undefined;

  /**
   * @public
   */
  SubnetAvailabilityZone?: AvailabilityZone | undefined;

  /**
   * The status of the subnet.
   *
   * @public
   */
  SubnetStatus?: string | undefined;
}

/**
 * Describes a subnet group.
 *
 * @public
 */
export interface ClusterSubnetGroup {
  /**
   * The name of the cluster subnet group.
   *
   * @public
   */
  ClusterSubnetGroupName?: string | undefined;

  /**
   * The description of the cluster subnet group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The VPC ID of the cluster subnet group.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The status of the cluster subnet group. Possible values are `Complete`, `Incomplete` and `Invalid`.
   *
   * @public
   */
  SubnetGroupStatus?: string | undefined;

  /**
   * A list of the VPC Subnet elements.
   *
   * @public
   */
  Subnets?: Subnet[] | undefined;

  /**
   * The list of tags for the cluster subnet group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The IP address types supported by this cluster subnet group. Possible values are `ipv4` and `dualstack`.
   *
   * @public
   */
  SupportedClusterIpAddressTypes?: string[] | undefined;
}

/**
 * Contains the output from the DescribeClusterSubnetGroups action.
 *
 * @public
 */
export interface ClusterSubnetGroupMessage {
  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of ClusterSubnetGroup instances.
   *
   * @public
   */
  ClusterSubnetGroups?: ClusterSubnetGroup[] | undefined;
}

/**
 * Describes a cluster version, including the parameter group family and description of the version.
 *
 * @public
 */
export interface ClusterVersion {
  /**
   * The version number used by the cluster.
   *
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * The name of the cluster parameter group family for the cluster.
   *
   * @public
   */
  ClusterParameterGroupFamily?: string | undefined;

  /**
   * The description of the cluster version.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Contains the output from the DescribeClusterVersions action.
 *
 * @public
 */
export interface ClusterVersionsMessage {
  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of `Version` elements.
   *
   * @public
   */
  ClusterVersions?: ClusterVersion[] | undefined;
}

/**
 * A structure that defines the Amazon Redshift connect service integration scope.
 *
 * @public
 */
export interface Connect {
  /**
   * Determines whether the Amazon Redshift connect integration is enabled or disabled for the application.
   *
   * @public
   */
  Authorization: ServiceAuthorization | undefined;
}

/**
 * @public
 */
export interface CopyClusterSnapshotMessage {
  /**
   * The identifier for the source snapshot.
   *
   * Constraints:
   *
   * - Must be the identifier for a valid automated snapshot whose state is `available`.
   *
   * @public
   */
  SourceSnapshotIdentifier: string | undefined;

  /**
   * The identifier of the cluster the source snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.
   *
   * Constraints:
   *
   * - Must be the identifier for a valid cluster.
   *
   * @public
   */
  SourceSnapshotClusterIdentifier?: string | undefined;

  /**
   * The identifier given to the new manual snapshot.
   *
   * Constraints:
   *
   * - Cannot be null, empty, or blank.
   * - Must contain from 1 to 255 alphanumeric characters or hyphens.
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   * - Must be unique for the Amazon Web Services account that is making the request.
   *
   * @public
   */
  TargetSnapshotIdentifier: string | undefined;

  /**
   * The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely.
   *
   * The value must be either -1 or an integer between 1 and 3,653.
   *
   * The default value is -1.
   *
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;
}

/**
 * @public
 */
export interface CopyClusterSnapshotResult {
  /**
   * Describes a snapshot.
   *
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface CreateAuthenticationProfileMessage {
  /**
   * The name of the authentication profile to be created.
   *
   * @public
   */
  AuthenticationProfileName: string | undefined;

  /**
   * The content of the authentication profile in JSON format. The maximum length of the JSON string is determined by a quota for your account.
   *
   * @public
   */
  AuthenticationProfileContent: string | undefined;
}

/**
 * @public
 */
export interface CreateAuthenticationProfileResult {
  /**
   * The name of the authentication profile that was created.
   *
   * @public
   */
  AuthenticationProfileName?: string | undefined;

  /**
   * The content of the authentication profile in JSON format.
   *
   * @public
   */
  AuthenticationProfileContent?: string | undefined;
}

/**
 * @public
 */
export interface CreateClusterMessage {
  /**
   * The name of the first database to be created when the cluster is created.
   *
   * To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database. For more information, go to [Create a Database](https://docs.aws.amazon.com/redshift/latest/dg/t_creating_database.html) in the Amazon Redshift Database Developer Guide.
   *
   * Default: `dev`
   *
   * Constraints:
   *
   * - Must contain 1 to 64 alphanumeric characters.
   * - Must contain only lowercase letters.
   * - Cannot be a word that is reserved by the service. A list of reserved words can be found in [Reserved Words](https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html) in the Amazon Redshift Database Developer Guide.
   *
   * @public
   */
  DBName?: string | undefined;

  /**
   * A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. The identifier also appears in the Amazon Redshift console.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 alphanumeric characters or hyphens.
   * - Alphabetic characters must be lowercase.
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   * - Must be unique for all clusters within an Amazon Web Services account.
   *
   * Example: `myexamplecluster`
   *
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * The type of the cluster. When cluster type is specified as
   *
   * - `single-node`, the **NumberOfNodes** parameter is not required.
   * - `multi-node`, the **NumberOfNodes** parameter is required.
   *
   * Valid Values: `multi-node` | `single-node`
   *
   * Default: `multi-node`
   *
   * @public
   */
  ClusterType?: string | undefined;

  /**
   * The node type to be provisioned for the cluster. For information about node types, go to [Working with Clusters](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes) in the *Amazon Redshift Cluster Management Guide*.
   *
   * Valid Values: `dc2.large` | `dc2.8xlarge` | `rg.large` | `rg.xlarge` | `rg.4xlarge` | `rg.12xlarge` | `ra3.large` | `ra3.xlplus` | `ra3.4xlarge` | `ra3.16xlarge`
   *
   * @public
   */
  NodeType: string | undefined;

  /**
   * The user name associated with the admin user account for the cluster that is being created.
   *
   * Constraints:
   *
   * - Must be 1 - 128 alphanumeric characters or hyphens. The user name can't be `PUBLIC`.
   * - Must contain only lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen.
   * - The first character must be a letter.
   * - Must not contain a colon (:) or a slash (/).
   * - Cannot be a reserved word. A list of reserved words can be found in [Reserved Words](https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html) in the Amazon Redshift Database Developer Guide.
   *
   * @public
   */
  MasterUsername: string | undefined;

  /**
   * The password associated with the admin user account for the cluster that is being created.
   *
   * You can't use `MasterUserPassword` if `ManageMasterPassword` is `true`.
   *
   * Constraints:
   *
   * - Must be between 8 and 64 characters in length.
   * - Must contain at least one uppercase letter.
   * - Must contain at least one lowercase letter.
   * - Must contain one number.
   * - Can be any printable ASCII character (ASCII code 33-126) except `'` (single quote), `"` (double quote), `\`, `/`, or `@`.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * A list of security groups to be associated with this cluster.
   *
   * Default: The default cluster security group for Amazon Redshift.
   *
   * @public
   */
  ClusterSecurityGroups?: string[] | undefined;

  /**
   * A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.
   *
   * Default: The default VPC security group is associated with the cluster.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The name of a cluster subnet group to be associated with this cluster.
   *
   * If this parameter is not provided the resulting cluster will be deployed outside virtual private cloud (VPC).
   *
   * @public
   */
  ClusterSubnetGroupName?: string | undefined;

  /**
   * The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. For example, if you have several EC2 instances running in a specific Availability Zone, then you might want the cluster to be provisioned in the same zone in order to decrease network latency.
   *
   * Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint.
   *
   * Example: `us-east-2d`
   *
   * Constraint: The specified Availability Zone must be in the same region as the current endpoint.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The weekly time range (in UTC) during which automated cluster maintenance can occur.
   *
   * Format: `ddd:hh24:mi-ddd:hh24:mi`
   *
   * Default: A 30-minute window selected at random from an 8-hour block of time per region, occurring on a random day of the week. For more information about the time blocks for each region, see [Maintenance Windows](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows) in Amazon Redshift Cluster Management Guide.
   *
   * Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun
   *
   * Constraints: Minimum 30-minute window.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The name of the parameter group to be associated with this cluster.
   *
   * Default: The default Amazon Redshift cluster parameter group. For information about the default parameter group, go to [Working with Amazon Redshift Parameter Groups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html)
   *
   * Constraints:
   *
   * - Must be 1 to 255 alphanumeric characters or hyphens.
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  ClusterParameterGroupName?: string | undefined;

  /**
   * The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with CreateClusterSnapshot.
   *
   * You can't disable automated snapshots for RG or RA3 node types. Set the automated retention period from 1-35 days.
   *
   * Default: `1`
   *
   * Constraints: Must be a value from 0 to 35.
   *
   * @public
   */
  AutomatedSnapshotRetentionPeriod?: number | undefined;

  /**
   * The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots.
   *
   * The value must be either -1 or an integer between 1 and 3,653.
   *
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * The port number on which the cluster accepts incoming connections.
   *
   * The cluster is accessible only via the JDBC and ODBC connection strings. Part of the connection string requires the port on which the cluster will listen for incoming connections.
   *
   * Default: `5439`
   *
   * Valid Values:
   *
   * - For clusters with RG or RA3 nodes - Select a port within the ranges `5431-5455` or `8191-8215`. (If you have an existing cluster with RG or RA3 nodes, it isn't required that you change the port to these ranges.)
   * - For clusters with dc2 nodes - Select a port within the range `1150-65535`.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The version of the Amazon Redshift engine software that you want to deploy on the cluster.
   *
   * The version selected runs on all the nodes in the cluster.
   *
   * Constraints: Only version 1.0 is currently available.
   *
   * Example: `1.0`
   *
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * If `true`, major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster.
   *
   * When a new major version of the Amazon Redshift engine is released, you can request that the service automatically apply upgrades during the maintenance window to the Amazon Redshift engine that is running on your cluster.
   *
   * Default: `true`
   *
   * @public
   */
  AllowVersionUpgrade?: boolean | undefined;

  /**
   * The number of compute nodes in the cluster. This parameter is required when the **ClusterType** parameter is specified as `multi-node`.
   *
   * For information about determining how many nodes you need, go to [Working with Clusters](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes) in the *Amazon Redshift Cluster Management Guide*.
   *
   * If you don't specify this parameter, you get a single-node cluster. When requesting a multi-node cluster, you must specify the number of nodes that you want in the cluster.
   *
   * Default: `1`
   *
   * Constraints: Value must be at least 1 and no more than 100.
   *
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * If `true`, the cluster can be accessed from a public network.
   *
   * Default: false
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * If `true`, the data in the cluster is encrypted at rest. If you set the value on this parameter to `false`, the request will fail.
   *
   * Default: true
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.
   *
   * @public
   */
  HsmClientCertificateIdentifier?: string | undefined;

  /**
   * Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
   *
   * @public
   */
  HsmConfigurationIdentifier?: string | undefined;

  /**
   * The Elastic IP (EIP) address for the cluster.
   *
   * Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible through an Internet gateway. Don't specify the Elastic IP address for a publicly accessible cluster with availability zone relocation turned on. For more information about provisioning clusters in EC2-VPC, go to [Supported Platforms to Launch Your Cluster](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms) in the Amazon Redshift Cluster Management Guide.
   *
   * @public
   */
  ElasticIp?: string | undefined;

  /**
   * A list of tag instances.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see [Enhanced VPC Routing](https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html) in the Amazon Redshift Cluster Management Guide.
   *
   * If this option is `true`, enhanced VPC routing is enabled.
   *
   * Default: false
   *
   * @public
   */
  EnhancedVpcRouting?: boolean | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * A list of Identity and Access Management (IAM) roles that can be used by the cluster to access other Amazon Web Services services. You must supply the IAM roles in their Amazon Resource Name (ARN) format.
   *
   * The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to [Quotas and limits](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
   *
   * @public
   */
  IamRoles?: string[] | undefined;

  /**
   * An optional parameter for the name of the maintenance track for the cluster. If you don't provide a maintenance track name, the cluster is assigned to the `current` track.
   *
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * A unique identifier for the snapshot schedule.
   *
   * @public
   */
  SnapshotScheduleIdentifier?: string | undefined;

  /**
   * The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster is created.
   *
   * @public
   */
  AvailabilityZoneRelocation?: boolean | undefined;

  /**
   * This parameter is retired. It does not set the AQUA configuration status. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
   *
   * @public
   */
  AquaConfigurationStatus?: AquaConfigurationStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was created.
   *
   * @public
   */
  DefaultIamRoleArn?: string | undefined;

  /**
   * A flag that specifies whether to load sample data once the cluster is created.
   *
   * @public
   */
  LoadSampleData?: string | undefined;

  /**
   * If `true`, Amazon Redshift uses Secrets Manager to manage this cluster's admin credentials. You can't use `MasterUserPassword` if `ManageMasterPassword` is true. If `ManageMasterPassword` is false or not set, Amazon Redshift uses `MasterUserPassword` for the admin user account's password.
   *
   * @public
   */
  ManageMasterPassword?: boolean | undefined;

  /**
   * The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin credentials secret. You can only use this parameter if `ManageMasterPassword` is true.
   *
   * @public
   */
  MasterPasswordSecretKmsKeyId?: string | undefined;

  /**
   * The IP address types that the cluster supports. Possible values are `ipv4` and `dualstack`.
   *
   * @public
   */
  IpAddressType?: string | undefined;

  /**
   * If true, Amazon Redshift will deploy the cluster in two Availability Zones (AZ).
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The Amazon resource name (ARN) of the Amazon Redshift IAM Identity Center application.
   *
   * @public
   */
  RedshiftIdcApplicationArn?: string | undefined;

  /**
   * The name of the Glue data catalog that will be associated with the cluster enabled with Amazon Redshift federated permissions.
   *
   * Constraints:
   *
   * - Must contain at least one lowercase letter.
   * - Can only contain lowercase letters (a-z), numbers (0-9), underscores (_), and hyphens (-).
   *
   * Pattern: `^[a-z0-9_-]*[a-z]+[a-z0-9_-]*$`
   *
   * Example: `my-catalog_01`
   *
   * @public
   */
  CatalogName?: string | undefined;

  /**
   * If `true`, allocates additional compute resources for running automatic optimization operations.
   *
   * Default: false
   *
   * @public
   */
  ExtraComputeForAutomaticOptimization?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateClusterResult {
  /**
   * Describes a cluster.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface CreateClusterParameterGroupMessage {
  /**
   * The name of the cluster parameter group.
   *
   * Constraints:
   *
   * - Must be 1 to 255 alphanumeric characters or hyphens
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   * - Must be unique withing your Amazon Web Services account.
   *
   * > **Note:** This value is stored as a lower-case string.
   *
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * The Amazon Redshift engine version to which the cluster parameter group applies. The cluster engine version determines the set of parameters.
   *
   * To get a list of valid parameter group family names, you can call DescribeClusterParameterGroups. By default, Amazon Redshift returns a list of all the parameter groups that are owned by your Amazon Web Services account, including the default parameter groups for each Amazon Redshift engine version. The parameter group family names associated with the default parameter groups provide you the valid values. For example, a valid family name is "redshift-1.0".
   *
   * @public
   */
  ParameterGroupFamily: string | undefined;

  /**
   * A description of the parameter group.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * A list of tag instances.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateClusterParameterGroupResult {
  /**
   * Describes a parameter group.
   *
   * @public
   */
  ClusterParameterGroup?: ClusterParameterGroup | undefined;
}

/**
 * @public
 */
export interface CreateClusterSecurityGroupMessage {
  /**
   * The name for the security group. Amazon Redshift stores the value as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain no more than 255 alphanumeric characters or hyphens.
   * - Must not be "Default".
   * - Must be unique for all security groups that are created by your Amazon Web Services account.
   *
   * Example: `examplesecuritygroup`
   *
   * @public
   */
  ClusterSecurityGroupName: string | undefined;

  /**
   * A description for the security group.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * A list of tag instances.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateClusterSecurityGroupResult {
  /**
   * Describes a security group.
   *
   * @public
   */
  ClusterSecurityGroup?: ClusterSecurityGroup | undefined;
}

/**
 * @public
 */
export interface CreateClusterSnapshotMessage {
  /**
   * A unique identifier for the snapshot that you are requesting. This identifier must be unique for all snapshots within the Amazon Web Services account.
   *
   * Constraints:
   *
   * - Cannot be null, empty, or blank
   * - Must contain from 1 to 255 alphanumeric characters or hyphens
   * - First character must be a letter
   * - Cannot end with a hyphen or contain two consecutive hyphens
   *
   * Example: `my-snapshot-id`
   *
   * @public
   */
  SnapshotIdentifier: string | undefined;

  /**
   * The cluster identifier for which you want a snapshot.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely.
   *
   * The value must be either -1 or an integer between 1 and 3,653.
   *
   * The default value is -1.
   *
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * A list of tag instances.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateClusterSnapshotResult {
  /**
   * Describes a snapshot.
   *
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface CreateClusterSubnetGroupMessage {
  /**
   * The name for the subnet group. Amazon Redshift stores the value as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain no more than 255 alphanumeric characters or hyphens.
   * - Must not be "Default".
   * - Must be unique for all subnet groups that are created by your Amazon Web Services account.
   *
   * Example: `examplesubnetgroup`
   *
   * @public
   */
  ClusterSubnetGroupName: string | undefined;

  /**
   * A description for the subnet group.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * An array of VPC subnet IDs. A maximum of 20 subnets can be modified in a single request.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * A list of tag instances.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateClusterSubnetGroupResult {
  /**
   * Describes a subnet group.
   *
   * @public
   */
  ClusterSubnetGroup?: ClusterSubnetGroup | undefined;
}

/**
 * @public
 */
export interface CreateCustomDomainAssociationMessage {
  /**
   * The custom domain name for a custom domain association.
   *
   * @public
   */
  CustomDomainName: string | undefined;

  /**
   * The certificate Amazon Resource Name (ARN) for the custom domain name association.
   *
   * @public
   */
  CustomDomainCertificateArn: string | undefined;

  /**
   * The cluster identifier that the custom domain is associated with.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomDomainAssociationResult {
  /**
   * The custom domain name for the association result.
   *
   * @public
   */
  CustomDomainName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the certificate associated with the custom domain name.
   *
   * @public
   */
  CustomDomainCertificateArn?: string | undefined;

  /**
   * The identifier of the cluster that the custom domain is associated with.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The expiration time for the certificate for the custom domain.
   *
   * @public
   */
  CustomDomainCertExpiryTime?: string | undefined;
}

/**
 * @public
 */
export interface CreateEndpointAccessMessage {
  /**
   * The cluster identifier of the cluster to access.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the cluster. This is only required if the cluster is in another Amazon Web Services account.
   *
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * The Redshift-managed VPC endpoint name.
   *
   * An endpoint name must contain 1-30 characters. Valid characters are A-Z, a-z, 0-9, and hyphen(-). The first character must be a letter. The name can't contain two consecutive hyphens or end with a hyphen.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * The subnet group from which Amazon Redshift chooses the subnet to deploy the endpoint.
   *
   * @public
   */
  SubnetGroupName: string | undefined;

  /**
   * The security group that defines the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;
}

/**
 * Describes a Redshift-managed VPC endpoint.
 *
 * @public
 */
export interface EndpointAccess {
  /**
   * The cluster identifier of the cluster associated with the endpoint.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the cluster.
   *
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * The subnet group name where Amazon Redshift chooses to deploy the endpoint.
   *
   * @public
   */
  SubnetGroupName?: string | undefined;

  /**
   * The status of the endpoint.
   *
   * @public
   */
  EndpointStatus?: string | undefined;

  /**
   * The name of the endpoint.
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * The time (UTC) that the endpoint was created.
   *
   * @public
   */
  EndpointCreateTime?: Date | undefined;

  /**
   * The port number on which the cluster accepts incoming connections.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The DNS address of the endpoint.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * The security groups associated with the endpoint.
   *
   * @public
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
   *
   * @public
   */
  VpcEndpoint?: VpcEndpoint | undefined;
}

/**
 * @public
 */
export interface CreateEventSubscriptionMessage {
  /**
   * The name of the event subscription to be created.
   *
   * Constraints:
   *
   * - Cannot be null, empty, or blank.
   * - Must contain from 1 to 255 alphanumeric characters or hyphens.
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
   *
   * @public
   */
  SnsTopicArn: string | undefined;

  /**
   * The type of source that will be generating the events. For example, if you want to be notified of events generated by a cluster, you would set this parameter to cluster. If this value is not specified, events are returned for all Amazon Redshift objects in your Amazon Web Services account. You must specify a source type in order to specify source IDs.
   *
   * Valid values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot, and scheduled-action.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * A list of one or more identifiers of Amazon Redshift source objects. All of the objects must be of the same type as was specified in the source type parameter. The event subscription will return only events generated by the specified objects. If not specified, then events are returned for all objects within the source type specified.
   *
   * Example: my-cluster-1, my-cluster-2
   *
   * Example: my-snapshot-20131010
   *
   * @public
   */
  SourceIds?: string[] | undefined;

  /**
   * Specifies the Amazon Redshift event categories to be published by the event notification subscription.
   *
   * Values: configuration, management, monitoring, security, pending
   *
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * Specifies the Amazon Redshift event severity to be published by the event notification subscription.
   *
   * Values: ERROR, INFO
   *
   * @public
   */
  Severity?: string | undefined;

  /**
   * A boolean value; set to `true` to activate the subscription, and set to `false` to create the subscription but not activate it.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * A list of tag instances.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes event subscriptions.
 *
 * @public
 */
export interface EventSubscription {
  /**
   * The Amazon Web Services account associated with the Amazon Redshift event notification subscription.
   *
   * @public
   */
  CustomerAwsId?: string | undefined;

  /**
   * The name of the Amazon Redshift event notification subscription.
   *
   * @public
   */
  CustSubscriptionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic used by the event notification subscription.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * The status of the Amazon Redshift event notification subscription.
   *
   * Constraints:
   *
   * - Can be one of the following: active | no-permission | topic-not-exist
   * - The status "no-permission" indicates that Amazon Redshift no longer has permission to post to the Amazon SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The date and time the Amazon Redshift event notification subscription was created.
   *
   * @public
   */
  SubscriptionCreationTime?: Date | undefined;

  /**
   * The source type of the events returned by the Amazon Redshift event notification, such as cluster, cluster-snapshot, cluster-parameter-group, cluster-security-group, or scheduled-action.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * A list of the sources that publish events to the Amazon Redshift event notification subscription.
   *
   * @public
   */
  SourceIdsList?: string[] | undefined;

  /**
   * The list of Amazon Redshift event categories specified in the event notification subscription.
   *
   * Values: Configuration, Management, Monitoring, Security, Pending
   *
   * @public
   */
  EventCategoriesList?: string[] | undefined;

  /**
   * The event severity specified in the Amazon Redshift event notification subscription.
   *
   * Values: ERROR, INFO
   *
   * @public
   */
  Severity?: string | undefined;

  /**
   * A boolean value indicating whether the subscription is enabled; `true` indicates that the subscription is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The list of tags for the event subscription.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateEventSubscriptionResult {
  /**
   * Describes event subscriptions.
   *
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * @public
 */
export interface CreateHsmClientCertificateMessage {
  /**
   * The identifier to be assigned to the new HSM client certificate that the cluster will use to connect to the HSM to use the database encryption keys.
   *
   * @public
   */
  HsmClientCertificateIdentifier: string | undefined;

  /**
   * A list of tag instances.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files.
 *
 * @public
 */
export interface HsmClientCertificate {
  /**
   * The identifier of the HSM client certificate.
   *
   * @public
   */
  HsmClientCertificateIdentifier?: string | undefined;

  /**
   * The public key that the Amazon Redshift cluster will use to connect to the HSM. You must register the public key in the HSM.
   *
   * @public
   */
  HsmClientCertificatePublicKey?: string | undefined;

  /**
   * The list of tags for the HSM client certificate.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateHsmClientCertificateResult {
  /**
   * Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files.
   *
   * @public
   */
  HsmClientCertificate?: HsmClientCertificate | undefined;
}

/**
 * @public
 */
export interface CreateHsmConfigurationMessage {
  /**
   * The identifier to be assigned to the new Amazon Redshift HSM configuration.
   *
   * @public
   */
  HsmConfigurationIdentifier: string | undefined;

  /**
   * A text description of the HSM configuration to be created.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The IP address that the Amazon Redshift cluster must use to access the HSM.
   *
   * @public
   */
  HsmIpAddress: string | undefined;

  /**
   * The name of the partition in the HSM where the Amazon Redshift clusters will store their database encryption keys.
   *
   * @public
   */
  HsmPartitionName: string | undefined;

  /**
   * The password required to access the HSM partition.
   *
   * @public
   */
  HsmPartitionPassword: string | undefined;

  /**
   * The HSMs public certificate file. When using Cloud HSM, the file name is server.pem.
   *
   * @public
   */
  HsmServerPublicCertificate: string | undefined;

  /**
   * A list of tag instances.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys.
 *
 * @public
 */
export interface HsmConfiguration {
  /**
   * The name of the Amazon Redshift HSM configuration.
   *
   * @public
   */
  HsmConfigurationIdentifier?: string | undefined;

  /**
   * A text description of the HSM configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The IP address that the Amazon Redshift cluster must use to access the HSM.
   *
   * @public
   */
  HsmIpAddress?: string | undefined;

  /**
   * The name of the partition in the HSM where the Amazon Redshift clusters will store their database encryption keys.
   *
   * @public
   */
  HsmPartitionName?: string | undefined;

  /**
   * The list of tags for the HSM configuration.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateHsmConfigurationResult {
  /**
   * Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys.
   *
   * @public
   */
  HsmConfiguration?: HsmConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationMessage {
  /**
   * The Amazon Resource Name (ARN) of the database to use as the source for replication.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Redshift data warehouse to use as the target for replication.
   *
   * @public
   */
  TargetArn: string | undefined;

  /**
   * The name of the integration.
   *
   * @public
   */
  IntegrationName: string | undefined;

  /**
   * An Key Management Service (KMS) key identifier for the key to use to encrypt the integration. If you don't specify an encryption key, the default Amazon Web Services owned key is used.
   *
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * A list of tags.
   *
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * An optional set of non-secret key–value pairs that contains additional contextual information about the data. For more information, see [Encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context) in the *Amazon Web Services Key Management Service Developer Guide*.
   *
   * You can only include this parameter if you specify the `KMSKeyId` parameter.
   *
   * @public
   */
  AdditionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * A description of the integration.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * The error of an inbound integration.
 *
 * @public
 */
export interface IntegrationError {
  /**
   * The error code of an inbound integration error.
   *
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * The error message of an inbound integration error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface Integration {
  /**
   * The Amazon Resource Name (ARN) of the integration.
   *
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * The name of the integration.
   *
   * @public
   */
  IntegrationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the database used as the source for replication.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Redshift data warehouse to use as the target for replication.
   *
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * The current status of the integration.
   *
   * @public
   */
  Status?: ZeroETLIntegrationStatus | undefined;

  /**
   * Any errors associated with the integration.
   *
   * @public
   */
  Errors?: IntegrationError[] | undefined;

  /**
   * The time (UTC) when the integration was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The description of the integration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Key Management Service (KMS) key identifier for the key used to encrypt the integration.
   *
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * The encryption context for the integration. For more information, see [Encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context) in the *Amazon Web Services Key Management Service Developer Guide*.
   *
   * @public
   */
  AdditionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * The list of tags associated with the integration.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateQev2IdcApplicationMessage {
  /**
   * The Amazon Resource Name (ARN) of the IAM Identity Center instance used to create the Amazon Redshift Query Editor (QEV2) managed application.
   *
   * @public
   */
  IdcInstanceArn: string | undefined;

  /**
   * The name of the Amazon Redshift Query Editor (QEV2) application in IAM Identity Center.
   *
   * @public
   */
  Qev2IdcApplicationName: string | undefined;

  /**
   * The display name for the Amazon Redshift Query Editor (QEV2) IAM Identity Center application. It appears in the console.
   *
   * @public
   */
  IdcDisplayName: string | undefined;

  /**
   * A list of tags to associate with the application. Tags are key-value pairs that you can use to organize and identify your resources.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains configuration and status information for an Amazon Redshift Query Editor (QEV2) application that is registered with IAM Identity Center.
 *
 * @public
 */
export interface Qev2IdcApplication {
  /**
   * The Amazon Resource Name (ARN) for the IAM Identity Center instance that the Amazon Redshift Query Editor (QEV2) application integrates with.
   *
   * @public
   */
  IdcInstanceArn?: string | undefined;

  /**
   * The name of the Amazon Redshift Query Editor (QEV2) application in IAM Identity Center.
   *
   * @public
   */
  Qev2IdcApplicationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the Amazon Redshift Query Editor (QEV2) application that integrates with IAM Identity Center.
   *
   * @public
   */
  Qev2IdcApplicationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the Amazon Redshift Query Editor (QEV2) IAM Identity Center managed application.
   *
   * @public
   */
  IdcManagedApplicationArn?: string | undefined;

  /**
   * The onboarding status for the Amazon Redshift Query Editor (QEV2) IAM Identity Center application.
   *
   * @public
   */
  IdcOnboardStatus?: string | undefined;

  /**
   * The display name for the Amazon Redshift Query Editor (QEV2) IAM Identity Center application. It appears in the console.
   *
   * @public
   */
  IdcDisplayName?: string | undefined;

  /**
   * A list of tags associated with the application. Tags are key-value pairs that you can use to organize and identify your resources.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateQev2IdcApplicationResult {
  /**
   * Contains configuration and status information for an Amazon Redshift Query Editor (QEV2) application that is registered with IAM Identity Center.
   *
   * @public
   */
  Qev2IdcApplication?: Qev2IdcApplication | undefined;
}

/**
 * The Lake Formation scope.
 *
 * @public
 */
export interface LakeFormationQuery {
  /**
   * Determines whether the query scope is enabled or disabled.
   *
   * @public
   */
  Authorization: ServiceAuthorization | undefined;
}

/**
 * A list of scopes set up for Lake Formation integration.
 *
 * @public
 */
export type LakeFormationScopeUnion =
  | LakeFormationScopeUnion.LakeFormationQueryMember
  | LakeFormationScopeUnion.$UnknownMember;

/**
 * @public
 */
export namespace LakeFormationScopeUnion {
  /**
   * The Lake Formation scope.
   *
   * @public
   */
  export interface LakeFormationQueryMember {
    LakeFormationQuery: LakeFormationQuery;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    LakeFormationQuery?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    LakeFormationQuery: (value: LakeFormationQuery) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A union structure that defines the scope of Amazon Redshift service integrations. Contains configuration for different integration types such as Amazon Redshift.
 *
 * @public
 */
export type RedshiftScopeUnion =
  | RedshiftScopeUnion.ConnectMember
  | RedshiftScopeUnion.$UnknownMember;

/**
 * @public
 */
export namespace RedshiftScopeUnion {
  /**
   * The Amazon Redshift connect integration scope configuration. Defines authorization settings for Amazon Redshift connect service integration.
   *
   * @public
   */
  export interface ConnectMember {
    Connect: Connect;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Connect?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Connect: (value: Connect) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The S3 Access Grants scope.
 *
 * @public
 */
export interface ReadWriteAccess {
  /**
   * Determines whether the read/write scope is enabled or disabled.
   *
   * @public
   */
  Authorization: ServiceAuthorization | undefined;
}

/**
 * A list of scopes set up for S3 Access Grants integration.
 *
 * @public
 */
export type S3AccessGrantsScopeUnion =
  | S3AccessGrantsScopeUnion.ReadWriteAccessMember
  | S3AccessGrantsScopeUnion.$UnknownMember;

/**
 * @public
 */
export namespace S3AccessGrantsScopeUnion {
  /**
   * The S3 Access Grants scope.
   *
   * @public
   */
  export interface ReadWriteAccessMember {
    ReadWriteAccess: ReadWriteAccess;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ReadWriteAccess?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ReadWriteAccess: (value: ReadWriteAccess) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A list of service integrations.
 *
 * @public
 */
export type ServiceIntegrationsUnion =
  | ServiceIntegrationsUnion.LakeFormationMember
  | ServiceIntegrationsUnion.RedshiftMember
  | ServiceIntegrationsUnion.S3AccessGrantsMember
  | ServiceIntegrationsUnion.$UnknownMember;

/**
 * @public
 */
export namespace ServiceIntegrationsUnion {
  /**
   * A list of scopes set up for Lake Formation integration.
   *
   * @public
   */
  export interface LakeFormationMember {
    LakeFormation: LakeFormationScopeUnion[];
    S3AccessGrants?: never;
    Redshift?: never;
    $unknown?: never;
  }

  /**
   * A list of scopes set up for S3 Access Grants integration.
   *
   * @public
   */
  export interface S3AccessGrantsMember {
    LakeFormation?: never;
    S3AccessGrants: S3AccessGrantsScopeUnion[];
    Redshift?: never;
    $unknown?: never;
  }

  /**
   * A list of scopes set up for Amazon Redshift integration.
   *
   * @public
   */
  export interface RedshiftMember {
    LakeFormation?: never;
    S3AccessGrants?: never;
    Redshift: RedshiftScopeUnion[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    LakeFormation?: never;
    S3AccessGrants?: never;
    Redshift?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    LakeFormation: (value: LakeFormationScopeUnion[]) => T;
    S3AccessGrants: (value: S3AccessGrantsScopeUnion[]) => T;
    Redshift: (value: RedshiftScopeUnion[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateRedshiftIdcApplicationMessage {
  /**
   * The Amazon resource name (ARN) of the IAM Identity Center instance where Amazon Redshift creates a new managed application.
   *
   * @public
   */
  IdcInstanceArn: string | undefined;

  /**
   * The name of the Redshift application in IAM Identity Center.
   *
   * @public
   */
  RedshiftIdcApplicationName: string | undefined;

  /**
   * The namespace for the Amazon Redshift IAM Identity Center application instance. It determines which managed application verifies the connection token.
   *
   * @public
   */
  IdentityNamespace?: string | undefined;

  /**
   * The display name for the Amazon Redshift IAM Identity Center application instance. It appears in the console.
   *
   * @public
   */
  IdcDisplayName: string | undefined;

  /**
   * The IAM role ARN for the Amazon Redshift IAM Identity Center application instance. It has the required permissions to be assumed and invoke the IDC Identity Center API.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The token issuer list for the Amazon Redshift IAM Identity Center application instance.
   *
   * @public
   */
  AuthorizedTokenIssuerList?: AuthorizedTokenIssuer[] | undefined;

  /**
   * A collection of service integrations for the Redshift IAM Identity Center application.
   *
   * @public
   */
  ServiceIntegrations?: ServiceIntegrationsUnion[] | undefined;

  /**
   * The type of application being created. Valid values are `None` or `Lakehouse`. Use `Lakehouse` to enable Amazon Redshift federated permissions on cluster.
   *
   * @public
   */
  ApplicationType?: ApplicationType | undefined;

  /**
   * A list of tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A list of tags keys that Redshift Identity Center applications copy to IAM Identity Center. For each input key, the tag corresponding to the key-value pair is propagated.
   *
   * @public
   */
  SsoTagKeys?: string[] | undefined;
}

/**
 * Contains properties for the Redshift IDC application.
 *
 * @public
 */
export interface RedshiftIdcApplication {
  /**
   * The ARN for the IAM Identity Center instance that Redshift integrates with.
   *
   * @public
   */
  IdcInstanceArn?: string | undefined;

  /**
   * The name of the Redshift application in IAM Identity Center.
   *
   * @public
   */
  RedshiftIdcApplicationName?: string | undefined;

  /**
   * The ARN for the Redshift application that integrates with IAM Identity Center.
   *
   * @public
   */
  RedshiftIdcApplicationArn?: string | undefined;

  /**
   * The identity namespace for the Amazon Redshift IAM Identity Center application. It determines which managed application verifies the connection token.
   *
   * @public
   */
  IdentityNamespace?: string | undefined;

  /**
   * The display name for the Amazon Redshift IAM Identity Center application. It appears on the console.
   *
   * @public
   */
  IdcDisplayName?: string | undefined;

  /**
   * The ARN for the Amazon Redshift IAM Identity Center application. It has the required permissions to be assumed and invoke the IDC Identity Center API.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * The ARN for the Amazon Redshift IAM Identity Center application.
   *
   * @public
   */
  IdcManagedApplicationArn?: string | undefined;

  /**
   * The onboarding status for the Amazon Redshift IAM Identity Center application.
   *
   * @public
   */
  IdcOnboardStatus?: string | undefined;

  /**
   * The authorized token issuer list for the Amazon Redshift IAM Identity Center application.
   *
   * @public
   */
  AuthorizedTokenIssuerList?: AuthorizedTokenIssuer[] | undefined;

  /**
   * A list of service integrations for the Redshift IAM Identity Center application.
   *
   * @public
   */
  ServiceIntegrations?: ServiceIntegrationsUnion[] | undefined;

  /**
   * The type of application being created. Valid values are `None` or `Lakehouse`. Use `Lakehouse` to enable Amazon Redshift federated permissions on cluster.
   *
   * @public
   */
  ApplicationType?: ApplicationType | undefined;

  /**
   * A list of tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A list of tags keys that Redshift Identity Center applications copy to IAM Identity Center. For each input key, the tag corresponding to the key-value pair is propagated.
   *
   * @public
   */
  SsoTagKeys?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateRedshiftIdcApplicationResult {
  /**
   * Contains properties for the Redshift IDC application.
   *
   * @public
   */
  RedshiftIdcApplication?: RedshiftIdcApplication | undefined;
}

/**
 * Describes a pause cluster operation. For example, a scheduled action to run the `PauseCluster` API operation.
 *
 * @public
 */
export interface PauseClusterMessage {
  /**
   * The identifier of the cluster to be paused.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * Describes a resize cluster operation. For example, a scheduled action to run the `ResizeCluster` API operation.
 *
 * @public
 */
export interface ResizeClusterMessage {
  /**
   * The unique identifier for the cluster to resize.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * The new cluster type for the specified cluster.
   *
   * @public
   */
  ClusterType?: string | undefined;

  /**
   * The new node type for the nodes you are adding. If not specified, the cluster's current node type is used.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The new number of nodes for the cluster. If not specified, the cluster's current number of nodes is used.
   *
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * A boolean value indicating whether the resize operation is using the classic resize process. If you don't provide this parameter or set the value to `false`, the resize type is elastic.
   *
   * @public
   */
  Classic?: boolean | undefined;

  /**
   * The identifier of the reserved node.
   *
   * @public
   */
  ReservedNodeId?: string | undefined;

  /**
   * The identifier of the target reserved node offering.
   *
   * @public
   */
  TargetReservedNodeOfferingId?: string | undefined;
}

/**
 * Describes a resume cluster operation. For example, a scheduled action to run the `ResumeCluster` API operation.
 *
 * @public
 */
export interface ResumeClusterMessage {
  /**
   * The identifier of the cluster to be resumed.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler.
 *
 * @public
 */
export interface ScheduledActionType {
  /**
   * An action that runs a `ResizeCluster` API operation.
   *
   * @public
   */
  ResizeCluster?: ResizeClusterMessage | undefined;

  /**
   * An action that runs a `PauseCluster` API operation.
   *
   * @public
   */
  PauseCluster?: PauseClusterMessage | undefined;

  /**
   * An action that runs a `ResumeCluster` API operation.
   *
   * @public
   */
  ResumeCluster?: ResumeClusterMessage | undefined;
}

/**
 * @public
 */
export interface CreateScheduledActionMessage {
  /**
   * The name of the scheduled action. The name must be unique within an account. For more information about this parameter, see ScheduledAction.
   *
   * @public
   */
  ScheduledActionName: string | undefined;

  /**
   * A JSON format string of the Amazon Redshift API operation with input parameters. For more information about this parameter, see ScheduledAction.
   *
   * @public
   */
  TargetAction: ScheduledActionType | undefined;

  /**
   * The schedule in `at( )` or `cron( )` format. For more information about this parameter, see ScheduledAction.
   *
   * @public
   */
  Schedule: string | undefined;

  /**
   * The IAM role to assume to run the target action. For more information about this parameter, see ScheduledAction.
   *
   * @public
   */
  IamRole: string | undefined;

  /**
   * The description of the scheduled action.
   *
   * @public
   */
  ScheduledActionDescription?: string | undefined;

  /**
   * The start time in UTC of the scheduled action. Before this time, the scheduled action does not trigger. For more information about this parameter, see ScheduledAction.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger. For more information about this parameter, see ScheduledAction.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * If true, the schedule is enabled. If false, the scheduled action does not trigger. For more information about `state` of the scheduled action, see ScheduledAction.
   *
   * @public
   */
  Enable?: boolean | undefined;
}

/**
 * Describes a scheduled action. You can use a scheduled action to trigger some Amazon Redshift API operations on a schedule. For information about which API operations can be scheduled, see ScheduledActionType.
 *
 * @public
 */
export interface ScheduledAction {
  /**
   * The name of the scheduled action.
   *
   * @public
   */
  ScheduledActionName?: string | undefined;

  /**
   * A JSON format string of the Amazon Redshift API operation with input parameters.
   *
   * "`\{\"ResizeCluster\":\{\"NodeType\":\"ra3.4xlarge\",\"ClusterIdentifier\":\"my-test-cluster\",\"NumberOfNodes\":3\}\}`".
   *
   * @public
   */
  TargetAction?: ScheduledActionType | undefined;

  /**
   * The schedule for a one-time (at format) or recurring (cron format) scheduled action. Schedule invocations must be separated by at least one hour.
   *
   * Format of at expressions is "`at(yyyy-mm-ddThh:mm:ss)`". For example, "`at(2016-03-04T17:27:00)`".
   *
   * Format of cron expressions is "`cron(Minutes Hours Day-of-month Month Day-of-week Year)`". For example, "`cron(0 10 ? * MON *)`". For more information, see [Cron Expressions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions) in the *Amazon CloudWatch Events User Guide*.
   *
   * @public
   */
  Schedule?: string | undefined;

  /**
   * The IAM role to assume to run the scheduled action. This IAM role must have permission to run the Amazon Redshift API operation in the scheduled action. This IAM role must allow the Amazon Redshift scheduler (Principal scheduler.redshift.amazonaws.com) to assume permissions on your behalf. For more information about the IAM role to use with the Amazon Redshift scheduler, see [Using Identity-Based Policies for Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html) in the *Amazon Redshift Cluster Management Guide*.
   *
   * @public
   */
  IamRole?: string | undefined;

  /**
   * The description of the scheduled action.
   *
   * @public
   */
  ScheduledActionDescription?: string | undefined;

  /**
   * The state of the scheduled action. For example, `DISABLED`.
   *
   * @public
   */
  State?: ScheduledActionState | undefined;

  /**
   * List of times when the scheduled action will run.
   *
   * @public
   */
  NextInvocations?: Date[] | undefined;

  /**
   * The start time in UTC when the schedule is active. Before this time, the scheduled action does not trigger.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time in UTC when the schedule is no longer active. After this time, the scheduled action does not trigger.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * The result of the `CreateSnapshotCopyGrant` action.
 *
 * @public
 */
export interface CreateSnapshotCopyGrantMessage {
  /**
   * The name of the snapshot copy grant. This name must be unique in the region for the Amazon Web Services account.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 alphanumeric characters or hyphens.
   * - Alphabetic characters must be lowercase.
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   * - Must be unique for all clusters within an Amazon Web Services account.
   *
   * @public
   */
  SnapshotCopyGrantName: string | undefined;

  /**
   * The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission. If no key is specified, the default key is used.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A list of tag instances.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The snapshot copy grant that grants Amazon Redshift permission to encrypt copied snapshots with the specified encrypted symmetric key from Amazon Web Services KMS in the destination region.
 *
 * For more information about managing snapshot copy grants, go to [Amazon Redshift Database Encryption](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @public
 */
export interface SnapshotCopyGrant {
  /**
   * The name of the snapshot copy grant.
   *
   * @public
   */
  SnapshotCopyGrantName?: string | undefined;

  /**
   * The unique identifier of the encrypted symmetric key in Amazon Web Services KMS to which Amazon Redshift is granted permission.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A list of tag instances.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotCopyGrantResult {
  /**
   * The snapshot copy grant that grants Amazon Redshift permission to encrypt copied snapshots with the specified encrypted symmetric key from Amazon Web Services KMS in the destination region.
   *
   * For more information about managing snapshot copy grants, go to [Amazon Redshift Database Encryption](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html) in the *Amazon Redshift Cluster Management Guide*.
   *
   * @public
   */
  SnapshotCopyGrant?: SnapshotCopyGrant | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotScheduleMessage {
  /**
   * The definition of the snapshot schedule. The definition is made up of schedule expressions, for example "cron(30 12 *)" or "rate(12 hours)".
   *
   * @public
   */
  ScheduleDefinitions?: string[] | undefined;

  /**
   * A unique identifier for a snapshot schedule. Only alphanumeric characters are allowed for the identifier.
   *
   * @public
   */
  ScheduleIdentifier?: string | undefined;

  /**
   * The description of the snapshot schedule.
   *
   * @public
   */
  ScheduleDescription?: string | undefined;

  /**
   * An optional set of tags you can use to search for the schedule.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * @public
   */
  NextInvocations?: number | undefined;
}

/**
 * Describes a snapshot schedule. You can set a regular interval for creating snapshots of a cluster. You can also schedule snapshots for specific dates.
 *
 * @public
 */
export interface SnapshotSchedule {
  /**
   * A list of ScheduleDefinitions.
   *
   * @public
   */
  ScheduleDefinitions?: string[] | undefined;

  /**
   * A unique identifier for the schedule.
   *
   * @public
   */
  ScheduleIdentifier?: string | undefined;

  /**
   * The description of the schedule.
   *
   * @public
   */
  ScheduleDescription?: string | undefined;

  /**
   * An optional set of tags describing the schedule.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * @public
   */
  NextInvocations?: Date[] | undefined;

  /**
   * The number of clusters associated with the schedule.
   *
   * @public
   */
  AssociatedClusterCount?: number | undefined;

  /**
   * A list of clusters associated with the schedule. A maximum of 100 clusters is returned.
   *
   * @public
   */
  AssociatedClusters?: ClusterAssociatedToSchedule[] | undefined;
}

/**
 * Contains the output from the `CreateTags` action.
 *
 * @public
 */
export interface CreateTagsMessage {
  /**
   * The Amazon Resource Name (ARN) to which you want to add the tag or tags. For example, `arn:aws:redshift:us-east-2:123456789:cluster:t1`.
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * One or more name/value pairs to add as tags to the specified resource. Each tag name is passed in with the parameter `Key` and the corresponding value is passed in with the parameter `Value`. The `Key` and `Value` parameters are separated by a comma (,). Separate multiple tags with a space. For example, `--tags "Key"="owner","Value"="admin" "Key"="environment","Value"="test" "Key"="version","Value"="1.0"`.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateUsageLimitMessage {
  /**
   * The identifier of the cluster that you want to limit usage.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * The Amazon Redshift feature that you want to limit.
   *
   * @public
   */
  FeatureType: UsageLimitFeatureType | undefined;

  /**
   * The type of limit. Depending on the feature type, this can be based on a time duration or data size. If `FeatureType` is `spectrum`, then `LimitType` must be `data-scanned`. If `FeatureType` is `concurrency-scaling`, then `LimitType` must be `time`. If `FeatureType` is `cross-region-datasharing`, then `LimitType` must be `data-scanned`. If `FeatureType` is `extra-compute-for-automatic-optimization`, then `LimitType` must be `time`.
   *
   * @public
   */
  LimitType: UsageLimitLimitType | undefined;

  /**
   * The limit amount. If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB). The value must be a positive number.
   *
   * @public
   */
  Amount: number | undefined;

  /**
   * The time period that the amount applies to. A `weekly` period begins on Sunday. The default is `monthly`.
   *
   * @public
   */
  Period?: UsageLimitPeriod | undefined;

  /**
   * The action that Amazon Redshift takes when the limit is reached. The default is log. For more information about this parameter, see UsageLimit.
   *
   * @public
   */
  BreachAction?: UsageLimitBreachAction | undefined;

  /**
   * A list of tag instances.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes a usage limit object for a cluster.
 *
 * @public
 */
export interface UsageLimit {
  /**
   * The identifier of the usage limit.
   *
   * @public
   */
  UsageLimitId?: string | undefined;

  /**
   * The identifier of the cluster with a usage limit.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The Amazon Redshift feature to which the limit applies.
   *
   * @public
   */
  FeatureType?: UsageLimitFeatureType | undefined;

  /**
   * The type of limit. Depending on the feature type, this can be based on a time duration or data size.
   *
   * @public
   */
  LimitType?: UsageLimitLimitType | undefined;

  /**
   * The limit amount. If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB).
   *
   * @public
   */
  Amount?: number | undefined;

  /**
   * The time period that the amount applies to. A `weekly` period begins on Sunday. The default is `monthly`.
   *
   * @public
   */
  Period?: UsageLimitPeriod | undefined;

  /**
   * The action that Amazon Redshift takes when the limit is reached. Possible values are:
   *
   * - **log** - To log an event in a system table. The default is log.
   * - **emit-metric** - To emit CloudWatch metrics.
   * - **disable** - To disable the feature until the next usage period begins.
   *
   * @public
   */
  BreachAction?: UsageLimitBreachAction | undefined;

  /**
   * A list of tag instances.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CustomDomainAssociationsMessage {
  /**
   * The marker for the custom domain association.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The associations for the custom domain.
   *
   * @public
   */
  Associations?: Association[] | undefined;
}

/**
 * @public
 */
export interface CustomerStorageMessage {
  /**
   * The total amount of storage currently used for snapshots.
   *
   * @public
   */
  TotalBackupSizeInMegaBytes?: number | undefined;

  /**
   * The total amount of storage currently provisioned.
   *
   * @public
   */
  TotalProvisionedStorageInMegaBytes?: number | undefined;
}

/**
 * @public
 */
export interface DeauthorizeDataShareMessage {
  /**
   * The namespace Amazon Resource Name (ARN) of the datashare to remove authorization from.
   *
   * @public
   */
  DataShareArn: string | undefined;

  /**
   * The identifier of the data consumer that is to have authorization removed from the datashare. This identifier is an Amazon Web Services account ID or a keyword, such as ADX.
   *
   * @public
   */
  ConsumerIdentifier: string | undefined;
}

/**
 * Describes the default cluster parameters for a parameter group family.
 *
 * @public
 */
export interface DefaultClusterParameters {
  /**
   * The name of the cluster parameter group family to which the engine default parameters apply.
   *
   * @public
   */
  ParameterGroupFamily?: string | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The list of cluster default parameters.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface DeleteAuthenticationProfileMessage {
  /**
   * The name of the authentication profile to delete.
   *
   * @public
   */
  AuthenticationProfileName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAuthenticationProfileResult {
  /**
   * The name of the authentication profile that was deleted.
   *
   * @public
   */
  AuthenticationProfileName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterMessage {
  /**
   * The identifier of the cluster to be deleted.
   *
   * Constraints:
   *
   * - Must contain lowercase characters.
   * - Must contain from 1 to 63 alphanumeric characters or hyphens.
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * Determines whether a final snapshot of the cluster is created before Amazon Redshift deletes the cluster. If `true`, a final cluster snapshot is not created. If `false`, a final cluster snapshot is created before the cluster is deleted.
   *
   * > **Note:** The *FinalClusterSnapshotIdentifier* parameter must be specified if *SkipFinalClusterSnapshot* is `false`.
   *
   * Default: `false`
   *
   * @public
   */
  SkipFinalClusterSnapshot?: boolean | undefined;

  /**
   * The identifier of the final snapshot that is to be created immediately before deleting the cluster. If this parameter is provided, *SkipFinalClusterSnapshot* must be `false`.
   *
   * Constraints:
   *
   * - Must be 1 to 255 alphanumeric characters.
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  FinalClusterSnapshotIdentifier?: string | undefined;

  /**
   * The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely.
   *
   * The value must be either -1 or an integer between 1 and 3,653.
   *
   * The default value is -1.
   *
   * @public
   */
  FinalClusterSnapshotRetentionPeriod?: number | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResult {
  /**
   * Describes a cluster.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DeleteClusterParameterGroupMessage {
  /**
   * The name of the parameter group to be deleted.
   *
   * Constraints:
   *
   * - Must be the name of an existing cluster parameter group.
   * - Cannot delete a default cluster parameter group.
   *
   * @public
   */
  ParameterGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterSecurityGroupMessage {
  /**
   * The name of the cluster security group to be deleted.
   *
   * @public
   */
  ClusterSecurityGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterSnapshotResult {
  /**
   * Describes a snapshot.
   *
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface DeleteClusterSubnetGroupMessage {
  /**
   * The name of the cluster subnet group name to be deleted.
   *
   * @public
   */
  ClusterSubnetGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomDomainAssociationMessage {
  /**
   * The identifier of the cluster to delete a custom domain association for.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * The custom domain name for the custom domain association.
   *
   * @public
   */
  CustomDomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointAccessMessage {
  /**
   * The Redshift-managed VPC endpoint to delete.
   *
   * @public
   */
  EndpointName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventSubscriptionMessage {
  /**
   * The name of the Amazon Redshift event notification subscription to be deleted.
   *
   * @public
   */
  SubscriptionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteHsmClientCertificateMessage {
  /**
   * The identifier of the HSM client certificate to be deleted.
   *
   * @public
   */
  HsmClientCertificateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteHsmConfigurationMessage {
  /**
   * The identifier of the Amazon Redshift HSM configuration to be deleted.
   *
   * @public
   */
  HsmConfigurationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationMessage {
  /**
   * The unique identifier of the integration to delete.
   *
   * @public
   */
  IntegrationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteQev2IdcApplicationMessage {
  /**
   * The Amazon Resource Name (ARN) for the Amazon Redshift Query Editor (QEV2) IAM Identity Center application to delete.
   *
   * @public
   */
  Qev2IdcApplicationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRedshiftIdcApplicationMessage {
  /**
   * The ARN for a deleted Amazon Redshift IAM Identity Center application.
   *
   * @public
   */
  RedshiftIdcApplicationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyMessage {
  /**
   * The Amazon Resource Name (ARN) of the resource of which its resource policy is deleted.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduledActionMessage {
  /**
   * The name of the scheduled action to delete.
   *
   * @public
   */
  ScheduledActionName: string | undefined;
}

/**
 * The result of the `DeleteSnapshotCopyGrant` action.
 *
 * @public
 */
export interface DeleteSnapshotCopyGrantMessage {
  /**
   * The name of the snapshot copy grant to delete.
   *
   * @public
   */
  SnapshotCopyGrantName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotScheduleMessage {
  /**
   * A unique identifier of the snapshot schedule to delete.
   *
   * @public
   */
  ScheduleIdentifier: string | undefined;
}

/**
 * Contains the output from the `DeleteTags` action.
 *
 * @public
 */
export interface DeleteTagsMessage {
  /**
   * The Amazon Resource Name (ARN) from which you want to remove the tag or tags. For example, `arn:aws:redshift:us-east-2:123456789:cluster:t1`.
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * The tag key that you want to delete.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteUsageLimitMessage {
  /**
   * The identifier of the usage limit to delete.
   *
   * @public
   */
  UsageLimitId: string | undefined;
}

/**
 * The identifier for a provisioned cluster.
 *
 * @public
 */
export interface ProvisionedIdentifier {
  /**
   * The unique identifier for the provisioned cluster.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * The identifier for a serverless namespace.
 *
 * @public
 */
export interface ServerlessIdentifier {
  /**
   * The unique identifier for the serverless namespace.
   *
   * @public
   */
  NamespaceIdentifier: string | undefined;

  /**
   * The unique identifier for the workgroup associated with the serverless namespace.
   *
   * @public
   */
  WorkgroupIdentifier: string | undefined;
}

/**
 * Object to store union of values for a provisioned cluster or serverless namespace’s identifier.
 *
 * @public
 */
export type NamespaceIdentifierUnion =
  | NamespaceIdentifierUnion.ProvisionedIdentifierMember
  | NamespaceIdentifierUnion.ServerlessIdentifierMember
  | NamespaceIdentifierUnion.$UnknownMember;

/**
 * @public
 */
export namespace NamespaceIdentifierUnion {
  /**
   * The identifier for a serverless namespace.
   *
   * @public
   */
  export interface ServerlessIdentifierMember {
    ServerlessIdentifier: ServerlessIdentifier;
    ProvisionedIdentifier?: never;
    $unknown?: never;
  }

  /**
   * The identifier for a provisioned cluster.
   *
   * @public
   */
  export interface ProvisionedIdentifierMember {
    ServerlessIdentifier?: never;
    ProvisionedIdentifier: ProvisionedIdentifier;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ServerlessIdentifier?: never;
    ProvisionedIdentifier?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ServerlessIdentifier: (value: ServerlessIdentifier) => T;
    ProvisionedIdentifier: (value: ProvisionedIdentifier) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface DeregisterNamespaceInputMessage {
  /**
   * The unique identifier of the cluster or serverless namespace that you want to deregister.
   *
   * @public
   */
  NamespaceIdentifier: NamespaceIdentifierUnion | undefined;

  /**
   * An array containing the ID of the consumer account that you want to deregister the cluster or serverless namespace from.
   *
   * @public
   */
  ConsumerIdentifiers: string[] | undefined;
}

/**
 * @public
 */
export interface DeregisterNamespaceOutputMessage {
  /**
   * The registration status of the cluster or serverless namespace.
   *
   * @public
   */
  Status?: NamespaceRegistrationStatus | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAttributesMessage {
  /**
   * A list of attribute names.
   *
   * @public
   */
  AttributeNames?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAuthenticationProfilesMessage {
  /**
   * The name of the authentication profile to describe. If not specified then all authentication profiles owned by the account are listed.
   *
   * @public
   */
  AuthenticationProfileName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAuthenticationProfilesResult {
  /**
   * The list of authentication profiles.
   *
   * @public
   */
  AuthenticationProfiles?: AuthenticationProfile[] | undefined;
}

/**
 * @public
 */
export interface DescribeClusterDbRevisionsMessage {
  /**
   * A unique identifier for a cluster whose `ClusterDbRevisions` you are requesting. This parameter is case sensitive. All clusters defined for an account are returned by default.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in the `marker` field of the response. You can retrieve the next set of response records by providing the returned `marker` value in the `marker` parameter and retrying the request.
   *
   * Default: 100
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point for returning a set of response records. When the results of a `DescribeClusterDbRevisions` request exceed the value specified in `MaxRecords`, Amazon Redshift returns a value in the `marker` field of the response. You can retrieve the next set of response records by providing the returned `marker` value in the `marker` parameter and retrying the request.
   *
   * Constraints: You can specify either the `ClusterIdentifier` parameter, or the `marker` parameter, but not both.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterParameterGroupsMessage {
  /**
   * The name of a specific parameter group for which to return details. By default, details about all parameter groups and the default parameter group are returned.
   *
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeClusterParameterGroups request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A tag key or keys for which you want to return all matching cluster parameter groups that are associated with the specified key or keys. For example, suppose that you have parameter groups that are tagged with keys called `owner` and `environment`. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the parameter groups that have either or both of these tag keys associated with them.
   *
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * A tag value or values for which you want to return all matching cluster parameter groups that are associated with the specified tag value or values. For example, suppose that you have parameter groups that are tagged with values called `admin` and `test`. If you specify both of these tag values in the request, Amazon Redshift returns a response with the parameter groups that have either or both of these tag values associated with them.
   *
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeClusterParametersMessage {
  /**
   * The name of a cluster parameter group for which to return details.
   *
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * The parameter types to return. Specify `user` to show parameters that are different form the default. Similarly, specify `engine-default` to show parameters that are the same as the default parameter group.
   *
   * Default: All parameter types returned.
   *
   * Valid Values: `user` | `engine-default`
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeClusterParameters request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClustersMessage {
  /**
   * The unique identifier of a cluster whose properties you are requesting. This parameter is case sensitive.
   *
   * The default is that all clusters defined for an account are returned.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeClusters request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * Constraints: You can specify either the **ClusterIdentifier** parameter or the **Marker** parameter, but not both.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A tag key or keys for which you want to return all matching clusters that are associated with the specified key or keys. For example, suppose that you have clusters that are tagged with keys called `owner` and `environment`. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the clusters that have either or both of these tag keys associated with them.
   *
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * A tag value or values for which you want to return all matching clusters that are associated with the specified tag value or values. For example, suppose that you have clusters that are tagged with values called `admin` and `test`. If you specify both of these tag values in the request, Amazon Redshift returns a response with the clusters that have either or both of these tag values associated with them.
   *
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeClusterSecurityGroupsMessage {
  /**
   * The name of a cluster security group for which you are requesting details. You must specify either the **Marker** parameter or a **ClusterSecurityGroupName** parameter, but not both.
   *
   * Example: `securitygroup1`
   *
   * @public
   */
  ClusterSecurityGroupName?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeClusterSecurityGroups request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * Constraints: You must specify either the **ClusterSecurityGroupName** parameter or the **Marker** parameter, but not both.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A tag key or keys for which you want to return all matching cluster security groups that are associated with the specified key or keys. For example, suppose that you have security groups that are tagged with keys called `owner` and `environment`. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the security groups that have either or both of these tag keys associated with them.
   *
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * A tag value or values for which you want to return all matching cluster security groups that are associated with the specified tag value or values. For example, suppose that you have security groups that are tagged with values called `admin` and `test`. If you specify both of these tag values in the request, Amazon Redshift returns a response with the security groups that have either or both of these tag values associated with them.
   *
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * Describes a sorting entity
 *
 * @public
 */
export interface SnapshotSortingEntity {
  /**
   * The category for sorting the snapshots.
   *
   * @public
   */
  Attribute: SnapshotAttributeToSortBy | undefined;

  /**
   * The order for listing the attributes.
   *
   * @public
   */
  SortOrder?: SortByOrder | undefined;
}

/**
 * @public
 */
export interface DescribeClusterSnapshotsMessage {
  /**
   * The identifier of the cluster which generated the requested snapshots.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The snapshot identifier of the snapshot about which to return information.
   *
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the snapshot associated with the message to describe cluster snapshots.
   *
   * @public
   */
  SnapshotArn?: string | undefined;

  /**
   * The type of snapshots for which you are requesting information. By default, snapshots of all types are returned.
   *
   * Valid Values: `automated` | `manual`
   *
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * A value that requests only snapshots created at or after the specified time. The time value is specified in ISO 8601 format. For more information about ISO 8601, go to the [ISO8601 Wikipedia page.](http://en.wikipedia.org/wiki/ISO_8601)
   *
   * Example: `2012-07-16T18:00:00Z`
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * A time value that requests only snapshots created at or before the specified time. The time value is specified in ISO 8601 format. For more information about ISO 8601, go to the [ISO8601 Wikipedia page.](http://en.wikipedia.org/wiki/ISO_8601)
   *
   * Example: `2012-07-16T18:00:00Z`
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeClusterSnapshots request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The Amazon Web Services account used to create or copy the snapshot. Use this field to filter the results to snapshots owned by a particular account. To describe snapshots you own, either specify your Amazon Web Services account, or do not specify the parameter.
   *
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * A tag key or keys for which you want to return all matching cluster snapshots that are associated with the specified key or keys. For example, suppose that you have snapshots that are tagged with keys called `owner` and `environment`. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the snapshots that have either or both of these tag keys associated with them.
   *
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * A tag value or values for which you want to return all matching cluster snapshots that are associated with the specified tag value or values. For example, suppose that you have snapshots that are tagged with values called `admin` and `test`. If you specify both of these tag values in the request, Amazon Redshift returns a response with the snapshots that have either or both of these tag values associated with them.
   *
   * @public
   */
  TagValues?: string[] | undefined;

  /**
   * A value that indicates whether to return snapshots only for an existing cluster. You can perform table-level restore only by using a snapshot of an existing cluster, that is, a cluster that has not been deleted. Values for this parameter work as follows:
   *
   * - If `ClusterExists` is set to `true`, `ClusterIdentifier` is required.
   * - If `ClusterExists` is set to `false` and `ClusterIdentifier` isn't specified, all snapshots associated with deleted clusters (orphaned snapshots) are returned.
   * - If `ClusterExists` is set to `false` and `ClusterIdentifier` is specified for a deleted cluster, snapshots associated with that cluster are returned.
   * - If `ClusterExists` is set to `false` and `ClusterIdentifier` is specified for an existing cluster, no snapshots are returned.
   *
   * @public
   */
  ClusterExists?: boolean | undefined;

  /**
   * @public
   */
  SortingEntities?: SnapshotSortingEntity[] | undefined;
}

/**
 * Contains the output from the DescribeClusterSnapshots action.
 *
 * @public
 */
export interface SnapshotMessage {
  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of Snapshot instances.
   *
   * @public
   */
  Snapshots?: Snapshot[] | undefined;
}

/**
 * @public
 */
export interface DescribeClusterSubnetGroupsMessage {
  /**
   * The name of the cluster subnet group for which information is requested.
   *
   * @public
   */
  ClusterSubnetGroupName?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeClusterSubnetGroups request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A tag key or keys for which you want to return all matching cluster subnet groups that are associated with the specified key or keys. For example, suppose that you have subnet groups that are tagged with keys called `owner` and `environment`. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the subnet groups that have either or both of these tag keys associated with them.
   *
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * A tag value or values for which you want to return all matching cluster subnet groups that are associated with the specified tag value or values. For example, suppose that you have subnet groups that are tagged with values called `admin` and `test`. If you specify both of these tag values in the request, Amazon Redshift returns a response with the subnet groups that have either or both of these tag values associated with them.
   *
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeClusterTracksMessage {
  /**
   * The name of the maintenance track.
   *
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * An integer value for the maximum number of maintenance tracks to return.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a `DescribeClusterTracks` request exceed the value specified in `MaxRecords`, Amazon Redshift returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Describes the operations that are allowed on a maintenance track.
 *
 * @public
 */
export interface SupportedOperation {
  /**
   * A list of the supported operations.
   *
   * @public
   */
  OperationName?: string | undefined;
}

/**
 * A maintenance track that you can switch the current track to.
 *
 * @public
 */
export interface UpdateTarget {
  /**
   * The name of the new maintenance track.
   *
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * The cluster version for the new maintenance track.
   *
   * @public
   */
  DatabaseVersion?: string | undefined;

  /**
   * A list of operations supported by the maintenance track.
   *
   * @public
   */
  SupportedOperations?: SupportedOperation[] | undefined;
}

/**
 * Defines a maintenance track that determines which Amazon Redshift version to apply during a maintenance window. If the value for `MaintenanceTrack` is `current`, the cluster is updated to the most recently certified maintenance release. If the value is `trailing`, the cluster is updated to the previously certified maintenance release.
 *
 * @public
 */
export interface MaintenanceTrack {
  /**
   * The name of the maintenance track. Possible values are `current` and `trailing`.
   *
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * The version number for the cluster release.
   *
   * @public
   */
  DatabaseVersion?: string | undefined;

  /**
   * An array of UpdateTarget objects to update with the maintenance track.
   *
   * @public
   */
  UpdateTargets?: UpdateTarget[] | undefined;
}

/**
 * @public
 */
export interface TrackListMessage {
  /**
   * A list of maintenance tracks output by the `DescribeClusterTracks` operation.
   *
   * @public
   */
  MaintenanceTracks?: MaintenanceTrack[] | undefined;

  /**
   * The starting point to return a set of response tracklist records. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterVersionsMessage {
  /**
   * The specific cluster version to return.
   *
   * Example: `1.0`
   *
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * The name of a specific cluster parameter group family to return details for.
   *
   * Constraints:
   *
   * - Must be 1 to 255 alphanumeric characters
   * - First character must be a letter
   * - Cannot end with a hyphen or contain two consecutive hyphens
   *
   * @public
   */
  ClusterParameterGroupFamily?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeClusterVersions request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomDomainAssociationsMessage {
  /**
   * The custom domain name for the custom domain association.
   *
   * @public
   */
  CustomDomainName?: string | undefined;

  /**
   * The certificate Amazon Resource Name (ARN) for the custom domain association.
   *
   * @public
   */
  CustomDomainCertificateArn?: string | undefined;

  /**
   * The maximum records setting for the associated custom domain.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * The marker for the custom domain association.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesMessage {
  /**
   * The Amazon resource name (ARN) of the datashare to describe details of.
   *
   * @public
   */
  DataShareArn?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeDataShares request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesResult {
  /**
   * The results returned from describing datashares.
   *
   * @public
   */
  DataShares?: DataShare[] | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeDataShares request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesForConsumerMessage {
  /**
   * The Amazon Resource Name (ARN) of the consumer namespace that returns in the list of datashares.
   *
   * @public
   */
  ConsumerArn?: string | undefined;

  /**
   * An identifier giving the status of a datashare in the consumer cluster. If this field is specified, Amazon Redshift returns the list of datashares that have the specified status.
   *
   * @public
   */
  Status?: DataShareStatusForConsumer | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeDataSharesForConsumer request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesForConsumerResult {
  /**
   * Shows the results of datashares available for consumers.
   *
   * @public
   */
  DataShares?: DataShare[] | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeDataSharesForConsumer request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesForProducerMessage {
  /**
   * The Amazon Resource Name (ARN) of the producer namespace that returns in the list of datashares.
   *
   * @public
   */
  ProducerArn?: string | undefined;

  /**
   * An identifier giving the status of a datashare in the producer. If this field is specified, Amazon Redshift returns the list of datashares that have the specified status.
   *
   * @public
   */
  Status?: DataShareStatusForProducer | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeDataSharesForProducer request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesForProducerResult {
  /**
   * Shows the results of datashares available for producers.
   *
   * @public
   */
  DataShares?: DataShare[] | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeDataSharesForProducer request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultClusterParametersMessage {
  /**
   * The name of the cluster parameter group family.
   *
   * @public
   */
  ParameterGroupFamily: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeDefaultClusterParameters request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultClusterParametersResult {
  /**
   * Describes the default cluster parameters for a parameter group family.
   *
   * @public
   */
  DefaultClusterParameters?: DefaultClusterParameters | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointAccessMessage {
  /**
   * The cluster identifier associated with the described endpoint.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The Amazon Web Services account ID of the owner of the cluster.
   *
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * The name of the endpoint to be described.
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * The virtual private cloud (VPC) identifier with access to the cluster.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a `Marker` is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeEndpointAccess` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the `MaxRecords` parameter.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface EndpointAccessList {
  /**
   * The list of endpoints with access to the cluster.
   *
   * @public
   */
  EndpointAccessList?: EndpointAccess[] | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeEndpointAccess` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the `MaxRecords` parameter.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointAuthorizationMessage {
  /**
   * The cluster identifier of the cluster to access.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The Amazon Web Services account ID of either the cluster owner (grantor) or grantee. If `Grantee` parameter is true, then the `Account` value is of the grantor.
   *
   * @public
   */
  Account?: string | undefined;

  /**
   * Indicates whether to check authorization from a grantor or grantee point of view. If true, Amazon Redshift returns endpoint authorizations that you've been granted. If false (default), checks authorization from a grantor point of view.
   *
   * @public
   */
  Grantee?: boolean | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a `Marker` is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeEndpointAuthorization` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the `MaxRecords` parameter.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface EndpointAuthorizationList {
  /**
   * The authorizations to an endpoint.
   *
   * @public
   */
  EndpointAuthorizationList?: EndpointAuthorization[] | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeEndpointAuthorization` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the `MaxRecords` parameter.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventCategoriesMessage {
  /**
   * The source type, such as cluster or parameter group, to which the described event categories apply.
   *
   * Valid values: cluster, cluster-snapshot, cluster-parameter-group, cluster-security-group, and scheduled-action.
   *
   * @public
   */
  SourceType?: string | undefined;
}

/**
 * Describes event information.
 *
 * @public
 */
export interface EventInfoMap {
  /**
   * The identifier of an Amazon Redshift event.
   *
   * @public
   */
  EventId?: string | undefined;

  /**
   * The category of an Amazon Redshift event.
   *
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * The description of an Amazon Redshift event.
   *
   * @public
   */
  EventDescription?: string | undefined;

  /**
   * The severity of the event.
   *
   * Values: ERROR, INFO
   *
   * @public
   */
  Severity?: string | undefined;
}

/**
 * Describes event categories.
 *
 * @public
 */
export interface EventCategoriesMap {
  /**
   * The source type, such as cluster or cluster-snapshot, that the returned categories belong to.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * The events in the event category.
   *
   * @public
   */
  Events?: EventInfoMap[] | undefined;
}

/**
 * @public
 */
export interface EventCategoriesMessage {
  /**
   * A list of event categories descriptions.
   *
   * @public
   */
  EventCategoriesMapList?: EventCategoriesMap[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventsMessage {
  /**
   * The identifier of the event source for which events will be returned. If this parameter is not specified, then all sources are included in the response.
   *
   * Constraints:
   *
   * If *SourceIdentifier* is supplied, *SourceType* must also be provided.
   *
   * - Specify a cluster identifier when *SourceType* is `cluster`.
   * - Specify a cluster security group name when *SourceType* is `cluster-security-group`.
   * - Specify a cluster parameter group name when *SourceType* is `cluster-parameter-group`.
   * - Specify a cluster snapshot identifier when *SourceType* is `cluster-snapshot`.
   *
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * The event source to retrieve events for. If no value is specified, all events are returned.
   *
   * Constraints:
   *
   * If *SourceType* is supplied, *SourceIdentifier* must also be provided.
   *
   * - Specify `cluster` when *SourceIdentifier* is a cluster identifier.
   * - Specify `cluster-security-group` when *SourceIdentifier* is a cluster security group name.
   * - Specify `cluster-parameter-group` when *SourceIdentifier* is a cluster parameter group name.
   * - Specify `cluster-snapshot` when *SourceIdentifier* is a cluster snapshot identifier.
   *
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * The beginning of the time interval to retrieve events for, specified in ISO 8601 format. For more information about ISO 8601, go to the [ISO8601 Wikipedia page.](http://en.wikipedia.org/wiki/ISO_8601)
   *
   * Example: `2009-07-08T18:00Z`
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end of the time interval for which to retrieve events, specified in ISO 8601 format. For more information about ISO 8601, go to the [ISO8601 Wikipedia page.](http://en.wikipedia.org/wiki/ISO_8601)
   *
   * Example: `2009-07-08T18:00Z`
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The number of minutes prior to the time of the request for which to retrieve events. For example, if the request is sent at 18:00 and you specify a duration of 60, then only events which have occurred after 17:00 will be returned.
   *
   * Default: `60`
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeEvents request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Describes an event.
 *
 * @public
 */
export interface Event {
  /**
   * The identifier for the source of the event.
   *
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * The source type for this event.
   *
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * The text of this event.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * A list of the event categories.
   *
   * Values: Configuration, Management, Monitoring, Security, Pending
   *
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * The severity of the event.
   *
   * Values: ERROR, INFO
   *
   * @public
   */
  Severity?: string | undefined;

  /**
   * The date and time of the event.
   *
   * @public
   */
  Date?: Date | undefined;

  /**
   * The identifier of the event.
   *
   * @public
   */
  EventId?: string | undefined;
}

/**
 * @public
 */
export interface EventsMessage {
  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of `Event` instances.
   *
   * @public
   */
  Events?: Event[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * The name of the Amazon Redshift event notification subscription to be described.
   *
   * @public
   */
  SubscriptionName?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeEventSubscriptions request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A tag key or keys for which you want to return all matching event notification subscriptions that are associated with the specified key or keys. For example, suppose that you have subscriptions that are tagged with keys called `owner` and `environment`. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the subscriptions that have either or both of these tag keys associated with them.
   *
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * A tag value or values for which you want to return all matching event notification subscriptions that are associated with the specified tag value or values. For example, suppose that you have subscriptions that are tagged with values called `admin` and `test`. If you specify both of these tag values in the request, Amazon Redshift returns a response with the subscriptions that have either or both of these tag values associated with them.
   *
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * @public
 */
export interface EventSubscriptionsMessage {
  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of event subscriptions.
   *
   * @public
   */
  EventSubscriptionsList?: EventSubscription[] | undefined;
}

/**
 * @public
 */
export interface DescribeHsmClientCertificatesMessage {
  /**
   * The identifier of a specific HSM client certificate for which you want information. If no identifier is specified, information is returned for all HSM client certificates owned by your Amazon Web Services account.
   *
   * @public
   */
  HsmClientCertificateIdentifier?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeHsmClientCertificates request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A tag key or keys for which you want to return all matching HSM client certificates that are associated with the specified key or keys. For example, suppose that you have HSM client certificates that are tagged with keys called `owner` and `environment`. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the HSM client certificates that have either or both of these tag keys associated with them.
   *
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * A tag value or values for which you want to return all matching HSM client certificates that are associated with the specified tag value or values. For example, suppose that you have HSM client certificates that are tagged with values called `admin` and `test`. If you specify both of these tag values in the request, Amazon Redshift returns a response with the HSM client certificates that have either or both of these tag values associated with them.
   *
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * @public
 */
export interface HsmClientCertificateMessage {
  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of the identifiers for one or more HSM client certificates used by Amazon Redshift clusters to store and retrieve database encryption keys in an HSM.
   *
   * @public
   */
  HsmClientCertificates?: HsmClientCertificate[] | undefined;
}

/**
 * @public
 */
export interface DescribeHsmConfigurationsMessage {
  /**
   * The identifier of a specific Amazon Redshift HSM configuration to be described. If no identifier is specified, information is returned for all HSM configurations owned by your Amazon Web Services account.
   *
   * @public
   */
  HsmConfigurationIdentifier?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeHsmConfigurations request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A tag key or keys for which you want to return all matching HSM configurations that are associated with the specified key or keys. For example, suppose that you have HSM configurations that are tagged with keys called `owner` and `environment`. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the HSM configurations that have either or both of these tag keys associated with them.
   *
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * A tag value or values for which you want to return all matching HSM configurations that are associated with the specified tag value or values. For example, suppose that you have HSM configurations that are tagged with values called `admin` and `test`. If you specify both of these tag values in the request, Amazon Redshift returns a response with the HSM configurations that have either or both of these tag values associated with them.
   *
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * @public
 */
export interface HsmConfigurationMessage {
  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of `HsmConfiguration` objects.
   *
   * @public
   */
  HsmConfigurations?: HsmConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DescribeInboundIntegrationsMessage {
  /**
   * The Amazon Resource Name (ARN) of the inbound integration.
   *
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target of an inbound integration.
   *
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeInboundIntegrations request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * The content of an inbound integration.
 *
 * @public
 */
export interface InboundIntegration {
  /**
   * The Amazon Resource Name (ARN) of an inbound integration.
   *
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source of an inbound integration.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target of an inbound integration.
   *
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * The status of an inbound integration.
   *
   * @public
   */
  Status?: ZeroETLIntegrationStatus | undefined;

  /**
   * The outstanding errors of an inbound integration. Each item is an "IntegrationError". This is null if there is no error.
   *
   * @public
   */
  Errors?: IntegrationError[] | undefined;

  /**
   * The creation time of an inbound integration.
   *
   * @public
   */
  CreateTime?: Date | undefined;
}

/**
 * @public
 */
export interface InboundIntegrationsMessage {
  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of InboundIntegration instances.
   *
   * @public
   */
  InboundIntegrations?: InboundIntegration[] | undefined;
}

/**
 * A set of elements to filter the returned integrations.
 *
 * @public
 */
export interface DescribeIntegrationsFilter {
  /**
   * Specifies the type of integration filter.
   *
   * @public
   */
  Name: DescribeIntegrationsFilterName | undefined;

  /**
   * Specifies the values to filter on.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIntegrationsMessage {
  /**
   * The unique identifier of the integration.
   *
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeIntegrations` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A filter that specifies one or more resources to return.
   *
   * @public
   */
  Filters?: DescribeIntegrationsFilter[] | undefined;
}

/**
 * @public
 */
export interface IntegrationsMessage {
  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * List of integrations that are described.
   *
   * @public
   */
  Integrations?: Integration[] | undefined;
}

/**
 * @public
 */
export interface DescribeLoggingStatusMessage {
  /**
   * The identifier of the cluster from which to get the logging status.
   *
   * Example: `examplecluster`
   *
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * Describes the status of logging for a cluster.
 *
 * @public
 */
export interface LoggingStatus {
  /**
   * `true` if logging is on, `false` if logging is off.
   *
   * @public
   */
  LoggingEnabled?: boolean | undefined;

  /**
   * The name of the S3 bucket where the log files are stored.
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * The prefix applied to the log file names.
   *
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * The last time that logs were delivered.
   *
   * @public
   */
  LastSuccessfulDeliveryTime?: Date | undefined;

  /**
   * The last time when logs failed to be delivered.
   *
   * @public
   */
  LastFailureTime?: Date | undefined;

  /**
   * The message indicating that logs failed to be delivered.
   *
   * @public
   */
  LastFailureMessage?: string | undefined;

  /**
   * The log destination type. An enum with possible values of `s3`, `cloudwatch`, and `s3table`.
   *
   * @public
   */
  LogDestinationType?: LogDestinationType | undefined;

  /**
   * The collection of exported log types. When `LogDestinationType` is `s3` or `cloudwatch`, possible values are `connectionlog`, `useractivitylog`, and `userlog`. When `LogDestinationType` is `s3table`, the values are the names of the system tables being published.
   *
   * @public
   */
  LogExports?: string[] | undefined;

  /**
   * The status of system table publishing to S3 Tables. This field is populated only when system table publishing is active.
   *
   * @public
   */
  S3Tables?: S3TablePublishStatus | undefined;
}

/**
 * A set of elements to filter the returned node configurations.
 *
 * @public
 */
export interface NodeConfigurationOptionsFilter {
  /**
   * The name of the element to filter.
   *
   * @public
   */
  Name?: NodeConfigurationOptionsFilterName | undefined;

  /**
   * The filter operator. If filter Name is NodeType only the 'in' operator is supported. Provide one value to evaluate for 'eq', 'lt', 'le', 'gt', and 'ge'. Provide two values to evaluate for 'between'. Provide a list of values for 'in'.
   *
   * @public
   */
  Operator?: OperatorType | undefined;

  /**
   * List of values. Compare Name using Operator to Values. If filter Name is NumberOfNodes, then values can range from 0 to 200. If filter Name is EstimatedDiskUtilizationPercent, then values can range from 0 to 100. For example, filter NumberOfNodes (name) GT (operator) 3 (values).
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeNodeConfigurationOptionsMessage {
  /**
   * The action type to evaluate for possible node configurations. Specify "restore-cluster" to get configuration combinations based on an existing snapshot. Specify "recommend-node-config" to get configuration recommendations based on an existing cluster or snapshot. Specify "resize-cluster" to get configuration combinations for elastic resize based on an existing cluster.
   *
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * The identifier of the cluster to evaluate for possible node configurations.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The identifier of the snapshot to evaluate for possible node configurations.
   *
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the snapshot associated with the message to describe node configuration.
   *
   * @public
   */
  SnapshotArn?: string | undefined;

  /**
   * The Amazon Web Services account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot.
   *
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * A set of name, operator, and value items to filter the results.
   *
   * @public
   */
  Filters?: NodeConfigurationOptionsFilter[] | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeNodeConfigurationOptions request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `500`
   *
   * Constraints: minimum 100, maximum 500.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * A list of node configurations.
 *
 * @public
 */
export interface NodeConfigurationOption {
  /**
   * The node type, such as, "ra3.4xlarge".
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The number of nodes.
   *
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * The estimated disk utilizaton percentage.
   *
   * @public
   */
  EstimatedDiskUtilizationPercent?: number | undefined;

  /**
   * The category of the node configuration recommendation.
   *
   * @public
   */
  Mode?: Mode | undefined;
}

/**
 * @public
 */
export interface NodeConfigurationOptionsMessage {
  /**
   * A list of valid node configurations.
   *
   * @public
   */
  NodeConfigurationOptionList?: NodeConfigurationOption[] | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrderableClusterOptionsMessage {
  /**
   * The version filter value. Specify this parameter to show only the available offerings matching the specified version.
   *
   * Default: All versions.
   *
   * Constraints: Must be one of the version returned from DescribeClusterVersions.
   *
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * The node type filter value. Specify this parameter to show only the available offerings matching the specified node type.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeOrderableClusterOptions request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Describes an orderable cluster option.
 *
 * @public
 */
export interface OrderableClusterOption {
  /**
   * The version of the orderable cluster.
   *
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * The cluster type, for example `multi-node`.
   *
   * @public
   */
  ClusterType?: string | undefined;

  /**
   * The node type for the orderable cluster.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * A list of availability zones for the orderable cluster.
   *
   * @public
   */
  AvailabilityZones?: AvailabilityZone[] | undefined;
}

/**
 * Contains the output from the DescribeOrderableClusterOptions action.
 *
 * @public
 */
export interface OrderableClusterOptionsMessage {
  /**
   * An `OrderableClusterOption` structure containing information about orderable options for the cluster.
   *
   * @public
   */
  OrderableClusterOptions?: OrderableClusterOption[] | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribePartnersInputMessage {
  /**
   * The Amazon Web Services account ID that owns the cluster.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The cluster identifier of the cluster whose partner integration is being described.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * The name of the database whose partner integration is being described. If database name is not specified, then all databases in the cluster are described.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The name of the partner that is being described. If partner name is not specified, then all partner integrations are described.
   *
   * @public
   */
  PartnerName?: string | undefined;
}

/**
 * Describes a partner integration.
 *
 * @public
 */
export interface PartnerIntegrationInfo {
  /**
   * The name of the database that receives data from a partner.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The name of the partner.
   *
   * @public
   */
  PartnerName?: string | undefined;

  /**
   * The partner integration status.
   *
   * @public
   */
  Status?: PartnerIntegrationStatus | undefined;

  /**
   * The status message provided by the partner.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The date (UTC) that the partner integration was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date (UTC) that the partner integration status was last updated by the partner.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribePartnersOutputMessage {
  /**
   * A list of partner integrations.
   *
   * @public
   */
  PartnerIntegrationInfoList?: PartnerIntegrationInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeQev2IdcApplicationsMessage {
  /**
   * The Amazon Resource Name (ARN) for the Amazon Redshift Query Editor (QEV2) application that integrates with IAM Identity Center.
   *
   * @public
   */
  Qev2IdcApplicationArn?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the Marker parameter and retrying the command. If the Marker field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeQev2IdcApplicationsResult {
  /**
   * The list of Amazon Redshift Query Editor (QEV2) IAM Identity Center applications.
   *
   * @public
   */
  Qev2IdcApplications?: Qev2IdcApplication[] | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the Marker parameter and retrying the command. If the Marker field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRedshiftIdcApplicationsMessage {
  /**
   * The ARN for the Redshift application that integrates with IAM Identity Center.
   *
   * @public
   */
  RedshiftIdcApplicationArn?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the Marker parameter and retrying the command. If the Marker field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRedshiftIdcApplicationsResult {
  /**
   * The list of Amazon Redshift IAM Identity Center applications.
   *
   * @public
   */
  RedshiftIdcApplications?: RedshiftIdcApplication[] | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the Marker parameter and retrying the command. If the Marker field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReservedNodeExchangeStatusInputMessage {
  /**
   * The identifier of the source reserved node in a reserved-node exchange request.
   *
   * @public
   */
  ReservedNodeId?: string | undefined;

  /**
   * The identifier of the reserved-node exchange request.
   *
   * @public
   */
  ReservedNodeExchangeRequestId?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `Marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeReservedNodeExchangeStatus` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the `MaxRecords` parameter. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReservedNodeExchangeStatusOutputMessage {
  /**
   * The details of the reserved-node exchange request, including the status, request time, source reserved-node identifier, and additional details.
   *
   * @public
   */
  ReservedNodeExchangeStatusDetails?: ReservedNodeExchangeStatus[] | undefined;

  /**
   * A pagination token provided by a previous `DescribeReservedNodeExchangeStatus` request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReservedNodeOfferingsMessage {
  /**
   * The unique identifier for the offering.
   *
   * @public
   */
  ReservedNodeOfferingId?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeReservedNodeOfferings request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Describes a reserved node offering.
 *
 * @public
 */
export interface ReservedNodeOffering {
  /**
   * The offering identifier.
   *
   * @public
   */
  ReservedNodeOfferingId?: string | undefined;

  /**
   * The node type offered by the reserved node offering.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The duration, in seconds, for which the offering will reserve the node.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The upfront fixed charge you will pay to purchase the specific reserved node offering.
   *
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * The rate you are charged for each hour the cluster that is using the offering is running.
   *
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * The currency code for the compute nodes offering.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * The anticipated utilization of the reserved node, as defined in the reserved node offering.
   *
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * The charge to your account regardless of whether you are creating any clusters using the node offering. Recurring charges are only in effect for heavy-utilization reserved nodes.
   *
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;

  /**
   * @public
   */
  ReservedNodeOfferingType?: ReservedNodeOfferingType | undefined;
}

/**
 * @public
 */
export interface ReservedNodeOfferingsMessage {
  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of `ReservedNodeOffering` objects.
   *
   * @public
   */
  ReservedNodeOfferings?: ReservedNodeOffering[] | undefined;
}

/**
 * @public
 */
export interface DescribeReservedNodesMessage {
  /**
   * Identifier for the node reservation.
   *
   * @public
   */
  ReservedNodeId?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeReservedNodes request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ReservedNodesMessage {
  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The list of `ReservedNode` objects.
   *
   * @public
   */
  ReservedNodes?: ReservedNode[] | undefined;
}

/**
 * @public
 */
export interface DescribeResizeMessage {
  /**
   * The unique identifier of a cluster whose resize progress you are requesting. This parameter is case-sensitive.
   *
   * By default, resize operations for all clusters defined for an Amazon Web Services account are returned.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * A set of elements to filter the returned scheduled actions.
 *
 * @public
 */
export interface ScheduledActionFilter {
  /**
   * The type of element to filter.
   *
   * @public
   */
  Name: ScheduledActionFilterName | undefined;

  /**
   * List of values. Compare if the value (of type defined by `Name`) equals an item in the list of scheduled actions.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeScheduledActionsMessage {
  /**
   * The name of the scheduled action to retrieve.
   *
   * @public
   */
  ScheduledActionName?: string | undefined;

  /**
   * The type of the scheduled actions to retrieve.
   *
   * @public
   */
  TargetActionType?: ScheduledActionTypeValues | undefined;

  /**
   * The start time in UTC of the scheduled actions to retrieve. Only active scheduled actions that have invocations after this time are retrieved.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time in UTC of the scheduled action to retrieve. Only active scheduled actions that have invocations before this time are retrieved.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * If true, retrieve only active scheduled actions. If false, retrieve only disabled scheduled actions.
   *
   * @public
   */
  Active?: boolean | undefined;

  /**
   * List of scheduled action filters.
   *
   * @public
   */
  Filters?: ScheduledActionFilter[] | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeScheduledActions request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface ScheduledActionsMessage {
  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeScheduledActions request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * List of retrieved scheduled actions.
   *
   * @public
   */
  ScheduledActions?: ScheduledAction[] | undefined;
}

/**
 * The result of the `DescribeSnapshotCopyGrants` action.
 *
 * @public
 */
export interface DescribeSnapshotCopyGrantsMessage {
  /**
   * The name of the snapshot copy grant.
   *
   * @public
   */
  SnapshotCopyGrantName?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a `DescribeSnapshotCopyGrant` request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * Constraints: You can specify either the **SnapshotCopyGrantName** parameter or the **Marker** parameter, but not both.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A tag key or keys for which you want to return all matching resources that are associated with the specified key or keys. For example, suppose that you have resources tagged with keys called `owner` and `environment`. If you specify both of these tag keys in the request, Amazon Redshift returns a response with all resources that have either or both of these tag keys associated with them.
   *
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * A tag value or values for which you want to return all matching resources that are associated with the specified value or values. For example, suppose that you have resources tagged with values called `admin` and `test`. If you specify both of these tag values in the request, Amazon Redshift returns a response with all resources that have either or both of these tag values associated with them.
   *
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * @public
 */
export interface SnapshotCopyGrantMessage {
  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a `DescribeSnapshotCopyGrant` request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * Constraints: You can specify either the **SnapshotCopyGrantName** parameter or the **Marker** parameter, but not both.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The list of `SnapshotCopyGrant` objects.
   *
   * @public
   */
  SnapshotCopyGrants?: SnapshotCopyGrant[] | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotSchedulesMessage {
  /**
   * The unique identifier for the cluster whose snapshot schedules you want to view.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * A unique identifier for a snapshot schedule.
   *
   * @public
   */
  ScheduleIdentifier?: string | undefined;

  /**
   * The key value for a snapshot schedule tag.
   *
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * The value corresponding to the key of the snapshot schedule tag.
   *
   * @public
   */
  TagValues?: string[] | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `marker` parameter and retrying the command. If the `marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number or response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned `marker` value.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotSchedulesOutputMessage {
  /**
   * A list of SnapshotSchedules.
   *
   * @public
   */
  SnapshotSchedules?: SnapshotSchedule[] | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `marker` parameter and retrying the command. If the `marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTableRestoreStatusMessage {
  /**
   * The Amazon Redshift cluster that the table is being restored to.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The identifier of the table restore request to return status for. If you don't specify a `TableRestoreRequestId` value, then `DescribeTableRestoreStatus` returns the status of all in-progress table restore requests.
   *
   * @public
   */
  TableRestoreRequestId?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeTableRestoreStatus` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the `MaxRecords` parameter.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Describes the status of a RestoreTableFromClusterSnapshot operation.
 *
 * @public
 */
export interface TableRestoreStatus {
  /**
   * The unique identifier for the table restore request.
   *
   * @public
   */
  TableRestoreRequestId?: string | undefined;

  /**
   * A value that describes the current state of the table restore request.
   *
   * Valid Values: `SUCCEEDED`, `FAILED`, `CANCELED`, `PENDING`, `IN_PROGRESS`
   *
   * @public
   */
  Status?: TableRestoreStatusType | undefined;

  /**
   * A description of the status of the table restore request. Status values include `SUCCEEDED`, `FAILED`, `CANCELED`, `PENDING`, `IN_PROGRESS`.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The time that the table restore request was made, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  RequestTime?: Date | undefined;

  /**
   * The amount of data restored to the new table so far, in megabytes (MB).
   *
   * @public
   */
  ProgressInMegaBytes?: number | undefined;

  /**
   * The total amount of data to restore to the new table, in megabytes (MB).
   *
   * @public
   */
  TotalDataInMegaBytes?: number | undefined;

  /**
   * The identifier of the Amazon Redshift cluster that the table is being restored to.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The identifier of the snapshot that the table is being restored from.
   *
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * The name of the source database that contains the table being restored.
   *
   * @public
   */
  SourceDatabaseName?: string | undefined;

  /**
   * The name of the source schema that contains the table being restored.
   *
   * @public
   */
  SourceSchemaName?: string | undefined;

  /**
   * The name of the source table being restored.
   *
   * @public
   */
  SourceTableName?: string | undefined;

  /**
   * The name of the database to restore the table to.
   *
   * @public
   */
  TargetDatabaseName?: string | undefined;

  /**
   * The name of the schema to restore the table to.
   *
   * @public
   */
  TargetSchemaName?: string | undefined;

  /**
   * The name of the table to create as a result of the table restore request.
   *
   * @public
   */
  NewTableName?: string | undefined;
}

/**
 * @public
 */
export interface TableRestoreStatusMessage {
  /**
   * A list of status details for one or more table restore requests.
   *
   * @public
   */
  TableRestoreStatusDetails?: TableRestoreStatus[] | undefined;

  /**
   * A pagination token that can be used in a subsequent DescribeTableRestoreStatus request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTagsMessage {
  /**
   * The Amazon Resource Name (ARN) for which you want to describe the tag or tags. For example, `arn:aws:redshift:us-east-2:123456789:cluster:t1`.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The type of resource with which you want to view tags. Valid resource types are:
   *
   * - Cluster
   * - CIDR/IP
   * - EC2 security group
   * - Snapshot
   * - Cluster security group
   * - Subnet group
   * - HSM connection
   * - HSM certificate
   * - Parameter group
   * - Snapshot copy grant
   * - Integration (zero-ETL integration or S3 event integration)
   *
   *   > **Note:** To describe the tags associated with an `integration`, don't specify `ResourceType`, instead specify the `ResourceName` of the integration.
   *
   * For more information about Amazon Redshift resource types and constructing ARNs, go to [Specifying Policy Elements: Actions, Effects, Resources, and Principals](https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-iam-access-control-specify-actions) in the Amazon Redshift Cluster Management Guide.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The maximum number or response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned `marker` value.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `marker` parameter and retrying the command. If the `marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A tag key or keys for which you want to return all matching resources that are associated with the specified key or keys. For example, suppose that you have resources tagged with keys called `owner` and `environment`. If you specify both of these tag keys in the request, Amazon Redshift returns a response with all resources that have either or both of these tag keys associated with them.
   *
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * A tag value or values for which you want to return all matching resources that are associated with the specified value or values. For example, suppose that you have resources tagged with values called `admin` and `test`. If you specify both of these tag values in the request, Amazon Redshift returns a response with all resources that have either or both of these tag values associated with them.
   *
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * A tag and its associated resource.
 *
 * @public
 */
export interface TaggedResource {
  /**
   * The tag for the resource.
   *
   * @public
   */
  Tag?: Tag | undefined;

  /**
   * The Amazon Resource Name (ARN) with which the tag is associated, for example: `arn:aws:redshift:us-east-2:123456789:cluster:t1`.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The type of resource with which the tag is associated. Valid resource types are:
   *
   * - Cluster
   * - CIDR/IP
   * - EC2 security group
   * - Snapshot
   * - Cluster security group
   * - Subnet group
   * - HSM connection
   * - HSM certificate
   * - Parameter group
   *
   * For more information about Amazon Redshift resource types and constructing ARNs, go to [Constructing an Amazon Redshift Amazon Resource Name (ARN)](https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-iam-access-control-specify-actions) in the Amazon Redshift Cluster Management Guide.
   *
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * @public
 */
export interface TaggedResourceListMessage {
  /**
   * A list of tags with their associated resources.
   *
   * @public
   */
  TaggedResources?: TaggedResource[] | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUsageLimitsMessage {
  /**
   * The identifier of the usage limit to describe.
   *
   * @public
   */
  UsageLimitId?: string | undefined;

  /**
   * The identifier of the cluster for which you want to describe usage limits.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The feature type for which you want to describe usage limits.
   *
   * @public
   */
  FeatureType?: UsageLimitFeatureType | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * Default: `100`
   *
   * Constraints: minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeUsageLimits request exceed the value specified in `MaxRecords`, Amazon Web Services returns a value in the `Marker` field of the response. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A tag key or keys for which you want to return all matching usage limit objects that are associated with the specified key or keys. For example, suppose that you have parameter groups that are tagged with keys called `owner` and `environment`. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the usage limit objects have either or both of these tag keys associated with them.
   *
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * A tag value or values for which you want to return all matching usage limit objects that are associated with the specified tag value or values. For example, suppose that you have parameter groups that are tagged with values called `admin` and `test`. If you specify both of these tag values in the request, Amazon Redshift returns a response with the usage limit objects that have either or both of these tag values associated with them.
   *
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * @public
 */
export interface UsageLimitList {
  /**
   * Contains the output from the DescribeUsageLimits action.
   *
   * @public
   */
  UsageLimits?: UsageLimit[] | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the `Marker` parameter and retrying the command. If the `Marker` field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DisableLoggingMessage {
  /**
   * The identifier of the cluster on which logging is to be stopped.
   *
   * Example: `examplecluster`
   *
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * The log destination type. An enum with possible values of `s3`, `cloudwatch`, and `s3table`. When set to `s3table`, stops system table publishing. When omitted, the operation disables audit logging.
   *
   * @public
   */
  LogDestinationType?: LogDestinationType | undefined;

  /**
   * The collection of log types to stop exporting. When `LogDestinationType` is `s3table`, the values are the names of the system tables to stop publishing. Omitting this parameter or passing `all` stops publishing all system tables.
   *
   * @public
   */
  LogExports?: string[] | undefined;
}

/**
 * @public
 */
export interface DisableSnapshotCopyMessage {
  /**
   * The unique identifier of the source cluster that you want to disable copying of snapshots to a destination region.
   *
   * Constraints: Must be the valid name of an existing cluster that has cross-region snapshot copy enabled.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DisableSnapshotCopyResult {
  /**
   * Describes a cluster.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DisassociateDataShareConsumerMessage {
  /**
   * The Amazon Resource Name (ARN) of the datashare to remove association for.
   *
   * @public
   */
  DataShareArn: string | undefined;

  /**
   * A value that specifies whether association for the datashare is removed from the entire account.
   *
   * @public
   */
  DisassociateEntireAccount?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the consumer namespace that association for the datashare is removed from.
   *
   * @public
   */
  ConsumerArn?: string | undefined;

  /**
   * From a datashare consumer account, removes association of a datashare from all the existing and future namespaces in the specified Amazon Web Services Region.
   *
   * @public
   */
  ConsumerRegion?: string | undefined;
}

/**
 * @public
 */
export interface EnableLoggingMessage {
  /**
   * The identifier of the cluster on which logging is to be started.
   *
   * Example: `examplecluster`
   *
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * The name of an existing S3 bucket where the log files are to be stored.
   *
   * Constraints:
   *
   * - Must be in the same region as the cluster
   * - The cluster must have read bucket and put object permissions
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * The prefix applied to the log file names.
   *
   * Valid characters are any letter from any language, any whitespace character, any numeric character, and the following characters: underscore (`_`), period (`.`), colon (`:`), slash (`/`), equal (`=`), plus (`+`), backslash (`\`), hyphen (`-`), at symbol (`@`).
   *
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * The log destination type. An enum with possible values of `s3`, `cloudwatch`, and `s3table`.
   *
   * @public
   */
  LogDestinationType?: LogDestinationType | undefined;

  /**
   * The collection of exported log types. When `LogDestinationType` is `s3` or `cloudwatch`, possible values are `connectionlog`, `useractivitylog`, and `userlog`. When `LogDestinationType` is `s3table`, the values are the names of the system tables to publish. Omitting this parameter, passing an empty list, or including the value `all` publishes all current and future system tables.
   *
   * @public
   */
  LogExports?: string[] | undefined;

  /**
   * The identifier of a customer managed KMS key used to encrypt the S3 tables. This parameter is valid only when `LogDestinationType` is `s3table`.
   *
   * @public
   */
  S3TableKmsKeyId?: string | undefined;

  /**
   * The scope of system table publishing. Valid values are `cluster` and `account`. A value of `cluster` scopes publishing to the individual cluster. A value of `account` scopes publishing to the Amazon Web Services account. This parameter is valid only when `LogDestinationType` is `s3table`.
   *
   * @public
   */
  S3TableGranularity?: string | undefined;
}

/**
 * @public
 */
export interface EnableSnapshotCopyMessage {
  /**
   * The unique identifier of the source cluster to copy snapshots from.
   *
   * Constraints: Must be the valid name of an existing cluster that does not already have cross-region snapshot copy enabled.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * The destination Amazon Web Services Region that you want to copy snapshots to.
   *
   * Constraints: Must be the name of a valid Amazon Web Services Region. For more information, see [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region) in the Amazon Web Services General Reference.
   *
   * @public
   */
  DestinationRegion: string | undefined;

  /**
   * The number of days to retain automated snapshots in the destination region after they are copied from the source region.
   *
   * Default: 7.
   *
   * Constraints: Must be at least 1 and no more than 35.
   *
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * The name of the snapshot copy grant to use when snapshots of an Amazon Web Services KMS-encrypted cluster are copied to the destination region.
   *
   * @public
   */
  SnapshotCopyGrantName?: string | undefined;

  /**
   * The number of days to retain newly copied snapshots in the destination Amazon Web Services Region after they are copied from the source Amazon Web Services Region. If the value is -1, the manual snapshot is retained indefinitely.
   *
   * The value must be either -1 or an integer between 1 and 3,653.
   *
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;
}

/**
 * @public
 */
export interface EnableSnapshotCopyResult {
  /**
   * Describes a cluster.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface FailoverPrimaryComputeInputMessage {
  /**
   * The unique identifier of the cluster for which the primary compute unit will be failed over to another Availability Zone.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface FailoverPrimaryComputeResult {
  /**
   * Describes a cluster.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * The request parameters to get cluster credentials.
 *
 * @public
 */
export interface GetClusterCredentialsMessage {
  /**
   * The name of a database user. If a user name matching `DbUser` exists in the database, the temporary user credentials have the same permissions as the existing user. If `DbUser` doesn't exist in the database and `Autocreate` is `True`, a new user is created using the value for `DbUser` with PUBLIC permissions. If a database user matching the value for `DbUser` doesn't exist and `Autocreate` is `False`, then the command succeeds but the connection attempt will fail because the user doesn't exist in the database.
   *
   * For more information, see [CREATE USER](https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html) in the Amazon Redshift Database Developer Guide.
   *
   * Constraints:
   *
   * - Must be 1 to 64 alphanumeric characters or hyphens. The user name can't be `PUBLIC`.
   * - Must contain uppercase or lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen.
   * - First character must be a letter.
   * - Must not contain a colon ( : ) or slash ( / ).
   * - Cannot be a reserved word. A list of reserved words can be found in [Reserved Words](http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html) in the Amazon Redshift Database Developer Guide.
   *
   * @public
   */
  DbUser: string | undefined;

  /**
   * The name of a database that `DbUser` is authorized to log on to. If `DbName` is not specified, `DbUser` can log on to any existing database.
   *
   * Constraints:
   *
   * - Must be 1 to 64 alphanumeric characters or hyphens
   * - Must contain uppercase or lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen.
   * - First character must be a letter.
   * - Must not contain a colon ( : ) or slash ( / ).
   * - Cannot be a reserved word. A list of reserved words can be found in [Reserved Words](http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html) in the Amazon Redshift Database Developer Guide.
   *
   * @public
   */
  DbName?: string | undefined;

  /**
   * The unique identifier of the cluster that contains the database for which you are requesting credentials. This parameter is case sensitive.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The number of seconds until the returned temporary password expires.
   *
   * Constraint: minimum 900, maximum 3600.
   *
   * Default: 900
   *
   * @public
   */
  DurationSeconds?: number | undefined;

  /**
   * Create a database user with the name specified for the user named in `DbUser` if one does not exist.
   *
   * @public
   */
  AutoCreate?: boolean | undefined;

  /**
   * A list of the names of existing database groups that the user named in `DbUser` will join for the current session, in addition to any group memberships for an existing user. If not specified, a new user is added only to PUBLIC.
   *
   * Database group name constraints
   *
   * - Must be 1 to 64 alphanumeric characters or hyphens
   * - Must contain only lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen.
   * - First character must be a letter.
   * - Must not contain a colon ( : ) or slash ( / ).
   * - Cannot be a reserved word. A list of reserved words can be found in [Reserved Words](http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html) in the Amazon Redshift Database Developer Guide.
   *
   * @public
   */
  DbGroups?: string[] | undefined;

  /**
   * The custom domain name for the cluster credentials.
   *
   * @public
   */
  CustomDomainName?: string | undefined;
}

/**
 * @public
 */
export interface GetClusterCredentialsWithIAMMessage {
  /**
   * The name of the database for which you are requesting credentials. If the database name is specified, the IAM policy must allow access to the resource `dbname` for the specified database name. If the database name is not specified, access to all databases is allowed.
   *
   * @public
   */
  DbName?: string | undefined;

  /**
   * The unique identifier of the cluster that contains the database for which you are requesting credentials.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The number of seconds until the returned temporary password expires.
   *
   * Range: 900-3600. Default: 900.
   *
   * @public
   */
  DurationSeconds?: number | undefined;

  /**
   * The custom domain name for the IAM message cluster credentials.
   *
   * @public
   */
  CustomDomainName?: string | undefined;
}

/**
 * The request parameters for `GetIdentityCenterAuthToken`.
 *
 * @public
 */
export interface GetIdentityCenterAuthTokenRequest {
  /**
   * A list of cluster identifiers that the generated token can be used with. The token will be scoped to only allow authentication to the specified clusters.
   *
   * Constraints:
   *
   * - `ClusterIds` must contain at least 1 cluster identifier.
   * - `ClusterIds` can hold a maximum of 20 cluster identifiers.
   * - Cluster identifiers must be 1 to 63 characters in length.
   * - The characters accepted for cluster identifiers are the following:
   *
   *   - Alphanumeric characters
   *   - Hyphens
   * - Cluster identifiers must start with a letter.
   * - Cluster identifiers can't end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  ClusterIds: string[] | undefined;
}

/**
 * The response from GetIdentityCenterAuthToken containing the encrypted authentication token and expiration time.
 *
 * @public
 */
export interface GetIdentityCenterAuthTokenResponse {
  /**
   * The encrypted authentication token containing the caller's Amazon Web Services IAM Identity Center identity information. This token is encrypted using Key Management Service and can only be decrypted by the specified Amazon Redshift clusters. Use this token with Amazon Redshift drivers to authenticate using your Amazon Web Services IAM Identity Center identity.
   *
   * @public
   */
  Token?: string | undefined;

  /**
   * The time (UTC) when the token expires. After this timestamp, the token will no longer be valid for authentication.
   *
   * @public
   */
  ExpirationTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetReservedNodeExchangeConfigurationOptionsInputMessage {
  /**
   * The action type of the reserved-node configuration. The action type can be an exchange initiated from either a snapshot or a resize.
   *
   * @public
   */
  ActionType: ReservedNodeExchangeActionType | undefined;

  /**
   * The identifier for the cluster that is the source for a reserved-node exchange.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The identifier for the snapshot that is the source for the reserved-node exchange.
   *
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified `MaxRecords` value, a value is returned in a `Marker` field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `GetReservedNodeExchangeConfigurationOptions` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the `MaxRecords` parameter. You can retrieve the next set of response records by providing the returned marker value in the `Marker` parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Details for a reserved-node exchange. Examples include the node type for a reserved node, the price for a node, the node's state, and other details.
 *
 * @public
 */
export interface ReservedNodeConfigurationOption {
  /**
   * Describes a reserved node. You can call the DescribeReservedNodeOfferings API to obtain the available reserved node offerings.
   *
   * @public
   */
  SourceReservedNode?: ReservedNode | undefined;

  /**
   * The target reserved-node count.
   *
   * @public
   */
  TargetReservedNodeCount?: number | undefined;

  /**
   * Describes a reserved node offering.
   *
   * @public
   */
  TargetReservedNodeOffering?: ReservedNodeOffering | undefined;
}

/**
 * @public
 */
export interface GetReservedNodeExchangeConfigurationOptionsOutputMessage {
  /**
   * A pagination token provided by a previous `GetReservedNodeExchangeConfigurationOptions` request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * the configuration options for the reserved-node exchange. These options include information about the source reserved node and target reserved node. Details include the node type, the price, the node count, and the offering type.
   *
   * @public
   */
  ReservedNodeConfigurationOptionList?: ReservedNodeConfigurationOption[] | undefined;
}

/**
 * @public
 */
export interface GetReservedNodeExchangeOfferingsInputMessage {
  /**
   * A string representing the node identifier for the DC1 Reserved Node to be exchanged.
   *
   * @public
   */
  ReservedNodeId: string | undefined;

  /**
   * An integer setting the maximum number of ReservedNodeOfferings to retrieve.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * A value that indicates the starting point for the next set of ReservedNodeOfferings.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface GetReservedNodeExchangeOfferingsOutputMessage {
  /**
   * An optional parameter that specifies the starting point for returning a set of response records. When the results of a `GetReservedNodeExchangeOfferings` request exceed the value specified in MaxRecords, Amazon Redshift returns a value in the marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the marker parameter and retrying the request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Returns an array of ReservedNodeOffering objects.
   *
   * @public
   */
  ReservedNodeOfferings?: ReservedNodeOffering[] | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyMessage {
  /**
   * The Amazon Resource Name (ARN) of the resource of which its resource policy is fetched.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * The policy that is attached to a resource.
 *
 * @public
 */
export interface ResourcePolicy {
  /**
   * The resources that a policy is attached to.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The content of a resource policy.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResult {
  /**
   * The content of the resource policy.
   *
   * @public
   */
  ResourcePolicy?: ResourcePolicy | undefined;
}

/**
 * Contains configuration information for lakehouse integration, including the cluster identifier, catalog ARN, and registration status.
 *
 * @public
 */
export interface LakehouseConfiguration {
  /**
   * The unique identifier of the cluster associated with this lakehouse configuration.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM Identity Center application used for enabling Amazon Web Services IAM Identity Center trusted identity propagation on a cluster enabled with Amazon Redshift federated permissions.
   *
   * @public
   */
  LakehouseIdcApplicationArn?: string | undefined;

  /**
   * The current status of the lakehouse registration. Indicates whether the cluster is successfully registered with the lakehouse.
   *
   * @public
   */
  LakehouseRegistrationStatus?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Glue data catalog associated with the lakehouse configuration.
   *
   * @public
   */
  CatalogArn?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsMessage {
  /**
   * The unique identifier of the Amazon Redshift cluster for which the list of Advisor recommendations is returned. If the neither the cluster identifier and the cluster namespace ARN parameters are specified, then recommendations for all clusters in the account are returned.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The Amazon Redshift cluster namespace Amazon Resource Name (ARN) for which the list of Advisor recommendations is returned. If the neither the cluster identifier and the cluster namespace ARN parameters are specified, then recommendations for all clusters in the account are returned.
   *
   * @public
   */
  NamespaceArn?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the Marker parameter and retrying the command. If the Marker field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * The recommended action from the Amazon Redshift Advisor recommendation.
 *
 * @public
 */
export interface RecommendedAction {
  /**
   * The specific instruction about the command.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The database name to perform the action on. Only applicable if the type of command is SQL.
   *
   * @public
   */
  Database?: string | undefined;

  /**
   * The command to run.
   *
   * @public
   */
  Command?: string | undefined;

  /**
   * The type of command.
   *
   * @public
   */
  Type?: RecommendedActionType | undefined;
}

/**
 * A link to an Amazon Redshift Advisor reference for more information about a recommendation.
 *
 * @public
 */
export interface ReferenceLink {
  /**
   * The hyperlink text that describes the link to more information.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The URL address to find more information.
   *
   * @public
   */
  Link?: string | undefined;
}

/**
 * An Amazon Redshift Advisor recommended action on the Amazon Redshift cluster.
 *
 * @public
 */
export interface Recommendation {
  /**
   * A unique identifier of the Advisor recommendation.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The unique identifier of the cluster for which the recommendation is returned.
   *
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * The Amazon Redshift cluster namespace ARN for which the recommendations is returned.
   *
   * @public
   */
  NamespaceArn?: string | undefined;

  /**
   * The date and time (UTC) that the recommendation was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The type of Advisor recommendation.
   *
   * @public
   */
  RecommendationType?: string | undefined;

  /**
   * The title of the recommendation.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The description of the recommendation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The description of what was observed about your cluster.
   *
   * @public
   */
  Observation?: string | undefined;

  /**
   * The scale of the impact that the Advisor recommendation has to the performance and cost of the cluster.
   *
   * @public
   */
  ImpactRanking?: ImpactRankingType | undefined;

  /**
   * The description of the recommendation.
   *
   * @public
   */
  RecommendationText?: string | undefined;

  /**
   * List of Amazon Redshift recommended actions.
   *
   * @public
   */
  RecommendedActions?: RecommendedAction[] | undefined;

  /**
   * List of helpful links for more information about the Advisor recommendation.
   *
   * @public
   */
  ReferenceLinks?: ReferenceLink[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsResult {
  /**
   * The Advisor recommendations for action on the Amazon Redshift cluster.
   *
   * @public
   */
  Recommendations?: Recommendation[] | undefined;

  /**
   * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the Marker parameter and retrying the command. If the Marker field is empty, all response records have been retrieved for the request.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ModifyAquaInputMessage {
  /**
   * The identifier of the cluster to be modified.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * This parameter is retired. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
   *
   * @public
   */
  AquaConfigurationStatus?: AquaConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface ModifyAquaOutputMessage {
  /**
   * This parameter is retired. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
   *
   * @public
   */
  AquaConfiguration?: AquaConfiguration | undefined;
}

/**
 * @public
 */
export interface ModifyAuthenticationProfileMessage {
  /**
   * The name of the authentication profile to replace.
   *
   * @public
   */
  AuthenticationProfileName: string | undefined;

  /**
   * The new content of the authentication profile in JSON format. The maximum length of the JSON string is determined by a quota for your account.
   *
   * @public
   */
  AuthenticationProfileContent: string | undefined;
}

/**
 * @public
 */
export interface ModifyAuthenticationProfileResult {
  /**
   * The name of the authentication profile that was replaced.
   *
   * @public
   */
  AuthenticationProfileName?: string | undefined;

  /**
   * The updated content of the authentication profile in JSON format.
   *
   * @public
   */
  AuthenticationProfileContent?: string | undefined;
}

/**
 * @public
 */
export interface ModifyClusterMessage {
  /**
   * The unique identifier of the cluster to be modified.
   *
   * Example: `examplecluster`
   *
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * The new cluster type.
   *
   * When you submit your cluster resize request, your existing cluster goes into a read-only mode. After Amazon Redshift provisions a new cluster based on your resize requirements, there will be outage for a period while the old cluster is deleted and your connection is switched to the new cluster. You can use DescribeResize to track the progress of the resize request.
   *
   * Valid Values: `multi-node | single-node`
   *
   * @public
   */
  ClusterType?: string | undefined;

  /**
   * The new node type of the cluster. If you specify a new node type, you must also specify the number of nodes parameter.
   *
   * For more information about resizing clusters, go to [Resizing Clusters in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/rs-resize-tutorial.html) in the *Amazon Redshift Cluster Management Guide*.
   *
   * Valid Values: `dc2.large` | `dc2.8xlarge` | `rg.large` | `rg.xlarge` | `rg.4xlarge` | `rg.12xlarge` | `ra3.large` | `ra3.xlplus` | `ra3.4xlarge` | `ra3.16xlarge`
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The new number of nodes of the cluster. If you specify a new number of nodes, you must also specify the node type parameter.
   *
   * For more information about resizing clusters, go to [Resizing Clusters in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/rs-resize-tutorial.html) in the *Amazon Redshift Cluster Management Guide*.
   *
   * Valid Values: Integer greater than `0`.
   *
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * A list of cluster security groups to be authorized on this cluster. This change is asynchronously applied as soon as possible.
   *
   * Security groups currently associated with the cluster, and not in the list of groups to apply, will be revoked from the cluster.
   *
   * Constraints:
   *
   * - Must be 1 to 255 alphanumeric characters or hyphens
   * - First character must be a letter
   * - Cannot end with a hyphen or contain two consecutive hyphens
   *
   * @public
   */
  ClusterSecurityGroups?: string[] | undefined;

  /**
   * A list of virtual private cloud (VPC) security groups to be associated with the cluster. This change is asynchronously applied as soon as possible.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The new password for the cluster admin user. This change is asynchronously applied as soon as possible. Between the time of the request and the completion of the request, the `MasterUserPassword` element exists in the `PendingModifiedValues` element of the operation response.
   *
   * You can't use `MasterUserPassword` if `ManageMasterPassword` is `true`.
   *
   * > **Note:** Operations never return the password, so this operation provides a way to regain access to the admin user account for a cluster if the password is lost.
   *
   * Default: Uses existing setting.
   *
   * Constraints:
   *
   * - Must be between 8 and 64 characters in length.
   * - Must contain at least one uppercase letter.
   * - Must contain at least one lowercase letter.
   * - Must contain one number.
   * - Can be any printable ASCII character (ASCII code 33-126) except `'` (single quote), `"` (double quote), `\`, `/`, or `@`.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * The name of the cluster parameter group to apply to this cluster. This change is applied only after the cluster is rebooted. To reboot a cluster use RebootCluster.
   *
   * Default: Uses existing setting.
   *
   * Constraints: The cluster parameter group must be in the same parameter group family that matches the cluster version.
   *
   * @public
   */
  ClusterParameterGroupName?: string | undefined;

  /**
   * The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with CreateClusterSnapshot.
   *
   * If you decrease the automated snapshot retention period from its current value, existing automated snapshots that fall outside of the new retention period will be immediately deleted.
   *
   * You can't disable automated snapshots for RG or RA3 node types. Set the automated retention period from 1-35 days.
   *
   * Default: Uses existing setting.
   *
   * Constraints: Must be a value from 0 to 35.
   *
   * @public
   */
  AutomatedSnapshotRetentionPeriod?: number | undefined;

  /**
   * The default for number of days that a newly created manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely. This value doesn't retroactively change the retention periods of existing manual snapshots.
   *
   * The value must be either -1 or an integer between 1 and 3,653.
   *
   * The default value is -1.
   *
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * The weekly time range (in UTC) during which system maintenance can occur, if necessary. If system maintenance is necessary during the window, it may result in an outage.
   *
   * This maintenance window change is made immediately. If the new maintenance window indicates the current time, there must be at least 120 minutes between the current time and end of the window in order to ensure that pending changes are applied.
   *
   * Default: Uses existing setting.
   *
   * Format: ddd:hh24:mi-ddd:hh24:mi, for example `wed:07:30-wed:08:00`.
   *
   * Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun
   *
   * Constraints: Must be at least 30 minutes.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The new version number of the Amazon Redshift engine to upgrade to.
   *
   * For major version upgrades, if a non-default cluster parameter group is currently in use, a new cluster parameter group in the cluster parameter group family for the new version must be specified. The new cluster parameter group can be the default for that cluster parameter group family. For more information about parameters and parameter groups, go to [Amazon Redshift Parameter Groups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html) in the *Amazon Redshift Cluster Management Guide*.
   *
   * Example: `1.0`
   *
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * If `true`, major version upgrades will be applied automatically to the cluster during the maintenance window.
   *
   * Default: `false`
   *
   * @public
   */
  AllowVersionUpgrade?: boolean | undefined;

  /**
   * Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.
   *
   * @public
   */
  HsmClientCertificateIdentifier?: string | undefined;

  /**
   * Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
   *
   * @public
   */
  HsmConfigurationIdentifier?: string | undefined;

  /**
   * The new identifier for the cluster.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 alphanumeric characters or hyphens.
   * - Alphabetic characters must be lowercase.
   * - First character must be a letter.
   * - Cannot end with a hyphen or contain two consecutive hyphens.
   * - Must be unique for all clusters within an Amazon Web Services account.
   *
   * Example: `examplecluster`
   *
   * @public
   */
  NewClusterIdentifier?: string | undefined;

  /**
   * If `true`, the cluster can be accessed from a public network. Only clusters in VPCs can be set to be publicly available.
   *
   * Default: false
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * The Elastic IP (EIP) address for the cluster.
   *
   * Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible through an Internet gateway. For more information about provisioning clusters in EC2-VPC, go to [Supported Platforms to Launch Your Cluster](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms) in the Amazon Redshift Cluster Management Guide.
   *
   * @public
   */
  ElasticIp?: string | undefined;

  /**
   * An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see [Enhanced VPC Routing](https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html) in the Amazon Redshift Cluster Management Guide.
   *
   * If this option is `true`, enhanced VPC routing is enabled.
   *
   * Default: false
   *
   * @public
   */
  EnhancedVpcRouting?: boolean | undefined;

  /**
   * The name for the maintenance track that you want to assign for the cluster. This name change is asynchronous. The new track name stays in the `PendingModifiedValues` for the cluster until the next maintenance window. When the maintenance track changes, the cluster is switched to the latest cluster release available for the maintenance track. At this point, the maintenance track name is applied.
   *
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * Indicates whether the cluster is encrypted. If the value is encrypted (true) and you provide a value for the `KmsKeyId` parameter, we encrypt the cluster with the provided `KmsKeyId`. If you don't provide a `KmsKeyId`, we encrypt with the default key.
   *
   * If the value is not encrypted (false), then the cluster is decrypted.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete.
   *
   * @public
   */
  AvailabilityZoneRelocation?: boolean | undefined;

  /**
   * The option to initiate relocation for an Amazon Redshift cluster to the target Availability Zone.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The option to change the port of an Amazon Redshift cluster.
   *
   * Valid Values:
   *
   * - For clusters with RG or RA3 nodes - Select a port within the ranges `5431-5455` or `8191-8215`. (If you have an existing cluster with RG or RA3 nodes, it isn't required that you change the port to these ranges.)
   * - For clusters with dc2 nodes - Select a port within the range `1150-65535`.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * If `true`, Amazon Redshift uses Secrets Manager to manage this cluster's admin credentials. You can't use `MasterUserPassword` if `ManageMasterPassword` is true. If `ManageMasterPassword` is false or not set, Amazon Redshift uses `MasterUserPassword` for the admin user account's password.
   *
   * @public
   */
  ManageMasterPassword?: boolean | undefined;

  /**
   * The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin credentials secret. You can only use this parameter if `ManageMasterPassword` is true.
   *
   * @public
   */
  MasterPasswordSecretKmsKeyId?: string | undefined;

  /**
   * The IP address types that the cluster supports. Possible values are `ipv4` and `dualstack`.
   *
   * @public
   */
  IpAddressType?: string | undefined;

  /**
   * If true and the cluster is currently only deployed in a single Availability Zone, the cluster will be modified to be deployed in two Availability Zones.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * If `true`, allocates additional compute resources for running automatic optimization operations.
   *
   * Default: false
   *
   * @public
   */
  ExtraComputeForAutomaticOptimization?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyClusterResult {
  /**
   * Describes a cluster.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface ModifyClusterDbRevisionMessage {
  /**
   * The unique identifier of a cluster whose database revision you want to modify.
   *
   * Example: `examplecluster`
   *
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request.
   *
   * @public
   */
  RevisionTarget: string | undefined;
}

/**
 * @public
 */
export interface ModifyClusterDbRevisionResult {
  /**
   * Describes a cluster.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface ModifyClusterIamRolesMessage {
  /**
   * The unique identifier of the cluster for which you want to associate or disassociate IAM roles.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * Zero or more IAM roles to associate with the cluster. The roles must be in their Amazon Resource Name (ARN) format.
   *
   * @public
   */
  AddIamRoles?: string[] | undefined;

  /**
   * Zero or more IAM roles in ARN format to disassociate from the cluster.
   *
   * @public
   */
  RemoveIamRoles?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was last modified.
   *
   * @public
   */
  DefaultIamRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface ModifyClusterIamRolesResult {
  /**
   * Describes a cluster.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface ModifyClusterMaintenanceMessage {
  /**
   * A unique identifier for the cluster.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * A boolean indicating whether to enable the deferred maintenance window.
   *
   * @public
   */
  DeferMaintenance?: boolean | undefined;

  /**
   * A unique identifier for the deferred maintenance window.
   *
   * @public
   */
  DeferMaintenanceIdentifier?: string | undefined;

  /**
   * A timestamp indicating the start time for the deferred maintenance window.
   *
   * @public
   */
  DeferMaintenanceStartTime?: Date | undefined;

  /**
   * A timestamp indicating end time for the deferred maintenance window. If you specify an end time, you can't specify a duration.
   *
   * @public
   */
  DeferMaintenanceEndTime?: Date | undefined;

  /**
   * An integer indicating the duration of the maintenance window in days. If you specify a duration, you can't specify an end time. The duration must be 60 days or less.
   *
   * @public
   */
  DeferMaintenanceDuration?: number | undefined;
}

/**
 * @public
 */
export interface ModifyClusterMaintenanceResult {
  /**
   * Describes a cluster.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * Describes a modify cluster parameter group operation.
 *
 * @public
 */
export interface ModifyClusterParameterGroupMessage {
  /**
   * The name of the parameter group to be modified.
   *
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.
   *
   * For each parameter to be modified, you must supply at least the parameter name and parameter value; other name-value pairs of the parameter are optional.
   *
   * For the workload management (WLM) configuration, you must supply all the name-value pairs in the wlm_json_configuration parameter.
   *
   * @public
   */
  Parameters: Parameter[] | undefined;
}

/**
 * @public
 */
export interface ModifyClusterSnapshotMessage {
  /**
   * The identifier of the snapshot whose setting you want to modify.
   *
   * @public
   */
  SnapshotIdentifier: string | undefined;

  /**
   * The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely.
   *
   * If the manual snapshot falls outside of the new retention period, you can specify the force option to immediately delete the snapshot.
   *
   * The value must be either -1 or an integer between 1 and 3,653.
   *
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * A Boolean option to override an exception if the retention period has already passed.
   *
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyClusterSnapshotResult {
  /**
   * Describes a snapshot.
   *
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface ModifyClusterSnapshotScheduleMessage {
  /**
   * A unique identifier for the cluster whose snapshot schedule you want to modify.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * A unique alphanumeric identifier for the schedule that you want to associate with the cluster.
   *
   * @public
   */
  ScheduleIdentifier?: string | undefined;

  /**
   * A boolean to indicate whether to remove the assoiciation between the cluster and the schedule.
   *
   * @public
   */
  DisassociateSchedule?: boolean | undefined;
}
