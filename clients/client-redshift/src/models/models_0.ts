// smithy-typescript generated code
import {
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
   * <p>A string representing the node identifier of the DC1 Reserved Node to be
   *             exchanged.</p>
   * @public
   */
  ReservedNodeId: string | undefined;

  /**
   * <p>The unique identifier of the DC2 Reserved Node offering to be used for the exchange.
   *             You can obtain the value for the parameter by calling <a>GetReservedNodeExchangeOfferings</a>
   *          </p>
   * @public
   */
  TargetReservedNodeOfferingId: string | undefined;
}

/**
 * <p>Describes a recurring charge.</p>
 * @public
 */
export interface RecurringCharge {
  /**
   * <p>The amount charged per the period of time specified by the recurring charge
   *             frequency.</p>
   * @public
   */
  RecurringChargeAmount?: number | undefined;

  /**
   * <p>The frequency at which the recurring charge amount is applied.</p>
   * @public
   */
  RecurringChargeFrequency?: string | undefined;
}

/**
 * <p>Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node
 *             offerings. </p>
 * @public
 */
export interface ReservedNode {
  /**
   * <p>The unique identifier for the reservation.</p>
   * @public
   */
  ReservedNodeId?: string | undefined;

  /**
   * <p>The identifier for the reserved node offering.</p>
   * @public
   */
  ReservedNodeOfferingId?: string | undefined;

  /**
   * <p>The node type of the reserved node.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The time the reservation started. You purchase a reserved node offering for a
   *             duration. This is the start time of that duration.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The duration of the node reservation in seconds.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The fixed cost Amazon Redshift charges you for this reserved node.</p>
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * <p>The hourly rate Amazon Redshift charges you for this reserved node.</p>
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * <p>The currency code for the reserved cluster.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>The number of reserved compute nodes.</p>
   * @public
   */
  NodeCount?: number | undefined;

  /**
   * <p>The state of the reserved compute node.</p>
   *          <p>Possible Values:</p>
   *          <ul>
   *             <li>
   *                <p>pending-payment-This reserved node has recently been purchased, and the
   *                     sale has been approved, but payment has not yet been confirmed.</p>
   *             </li>
   *             <li>
   *                <p>active-This reserved node is owned by the caller and is available for
   *                     use.</p>
   *             </li>
   *             <li>
   *                <p>payment-failed-Payment failed for the purchase attempt.</p>
   *             </li>
   *             <li>
   *                <p>retired-The reserved node is no longer available. </p>
   *             </li>
   *             <li>
   *                <p>exchanging-The owner is exchanging the reserved node for another reserved
   *                     node.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The anticipated utilization of the reserved node, as defined in the reserved node
   *             offering.</p>
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * <p>The recurring charges for the reserved node.</p>
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;

  /**
   * <p></p>
   * @public
   */
  ReservedNodeOfferingType?: ReservedNodeOfferingType | undefined;
}

/**
 * @public
 */
export interface AcceptReservedNodeExchangeOutputMessage {
  /**
   * <p></p>
   * @public
   */
  ExchangedReservedNode?: ReservedNode | undefined;
}

/**
 * <p>Describes an attribute value.</p>
 * @public
 */
export interface AttributeValueTarget {
  /**
   * <p>The value of the attribute.</p>
   * @public
   */
  AttributeValue?: string | undefined;
}

/**
 * <p>A name value pair that describes an aspect of an account. </p>
 * @public
 */
export interface AccountAttribute {
  /**
   * <p>The name of the attribute.</p>
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * <p>A list of attribute values.</p>
   * @public
   */
  AttributeValues?: AttributeValueTarget[] | undefined;
}

/**
 * @public
 */
export interface AccountAttributeList {
  /**
   * <p>A list of attributes assigned to an account.</p>
   * @public
   */
  AccountAttributes?: AccountAttribute[] | undefined;
}

/**
 * <p>Describes an Amazon Web Services account authorized to restore a snapshot.</p>
 * @public
 */
export interface AccountWithRestoreAccess {
  /**
   * <p>The identifier of an Amazon Web Services account authorized to restore a
   *             snapshot.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The identifier of an Amazon Web Services support account authorized to restore a
   *             snapshot. For Amazon Web Services Support, the identifier is <code>amazon-redshift-support</code>. </p>
   * @public
   */
  AccountAlias?: string | undefined;
}

/**
 * @public
 */
export interface PartnerIntegrationInputMessage {
  /**
   * <p>The Amazon Web Services account ID that owns the cluster.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The cluster identifier of the cluster that receives data from the partner.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the database that receives data from the partner.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partner that is authorized to send data.</p>
   * @public
   */
  PartnerName: string | undefined;
}

/**
 * @public
 */
export interface PartnerIntegrationOutputMessage {
  /**
   * <p>The name of the database that receives data from the partner.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the partner that is authorized to send data.</p>
   * @public
   */
  PartnerName?: string | undefined;
}

/**
 * <p>The operation that uses this structure is retired. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).</p>
 * @public
 */
export interface AquaConfiguration {
  /**
   * <p>This field is retired. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).</p>
   * @public
   */
  AquaStatus?: AquaStatus | undefined;

  /**
   * <p>This field is retired. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).</p>
   * @public
   */
  AquaConfigurationStatus?: AquaConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface AssociateDataShareConsumerMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare that the consumer is to use.</p>
   * @public
   */
  DataShareArn: string | undefined;

  /**
   * <p>A value that specifies whether the datashare is associated with the entire account.</p>
   * @public
   */
  AssociateEntireAccount?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the consumer namespace associated with the
   *             datashare.</p>
   * @public
   */
  ConsumerArn?: string | undefined;

  /**
   * <p>From a datashare consumer account, associates a datashare with all existing and future namespaces in the specified Amazon Web Services Region.</p>
   * @public
   */
  ConsumerRegion?: string | undefined;

  /**
   * <p>If set to true, allows write operations for a datashare.</p>
   * @public
   */
  AllowWrites?: boolean | undefined;
}

/**
 * <p>The association of a datashare from a producer account with a data consumer.
 * </p>
 * @public
 */
export interface DataShareAssociation {
  /**
   * <p>The name of the consumer accounts that have an association with a producer
   *             datashare.</p>
   * @public
   */
  ConsumerIdentifier?: string | undefined;

  /**
   * <p>The status of the datashare that is associated.</p>
   * @public
   */
  Status?: DataShareStatus | undefined;

  /**
   * <p>The Amazon Web Services Region of the consumer accounts that have an association with a producer datashare.</p>
   * @public
   */
  ConsumerRegion?: string | undefined;

  /**
   * <p>The creation date of the datashare that is associated.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The status change data of the datashare that is associated.</p>
   * @public
   */
  StatusChangeDate?: Date | undefined;

  /**
   * <p>Specifies whether write operations were allowed during data share authorization.</p>
   * @public
   */
  ProducerAllowedWrites?: boolean | undefined;

  /**
   * <p>Specifies whether write operations were allowed during data share association.</p>
   * @public
   */
  ConsumerAcceptedWrites?: boolean | undefined;
}

/**
 * @public
 */
export interface DataShare {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare that the consumer is to use.</p>
   * @public
   */
  DataShareArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the producer namespace.</p>
   * @public
   */
  ProducerArn?: string | undefined;

  /**
   * <p>A value that specifies whether the datashare can be shared to a publicly accessible  cluster.</p>
   * @public
   */
  AllowPubliclyAccessibleConsumers?: boolean | undefined;

  /**
   * <p>A value that specifies when the datashare has an association between producer and data
   *             consumers.</p>
   * @public
   */
  DataShareAssociations?: DataShareAssociation[] | undefined;

  /**
   * <p>The identifier of a datashare to show its managing entity.</p>
   * @public
   */
  ManagedBy?: string | undefined;

  /**
   * <p> The type of the datashare created by RegisterNamespace.</p>
   * @public
   */
  DataShareType?: DataShareType | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ClusterAssociatedToSchedule {
  /**
   * <p></p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  ScheduleAssociationState?: ScheduleState | undefined;
}

/**
 * <p>A cluster ID and custom domain name tied to a specific certificate. These are typically
 *             returned in a list.</p>
 * @public
 */
export interface CertificateAssociation {
  /**
   * <p>The custom domain name for the certificate association.</p>
   * @public
   */
  CustomDomainName?: string | undefined;

  /**
   * <p>The cluster identifier for the certificate association.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;
}

/**
 * <p>Contains information about the custom domain name association.</p>
 * @public
 */
export interface Association {
  /**
   * <p>The Amazon Resource Name (ARN) for the certificate associated with the custom domain.</p>
   * @public
   */
  CustomDomainCertificateArn?: string | undefined;

  /**
   * <p>The expiration date for the certificate.</p>
   * @public
   */
  CustomDomainCertificateExpiryDate?: Date | undefined;

  /**
   * <p>A list of all associated clusters and domain names tied to a specific certificate.</p>
   * @public
   */
  CertificateAssociations?: CertificateAssociation[] | undefined;
}

/**
 * <p>Describes an authentication profile.</p>
 * @public
 */
export interface AuthenticationProfile {
  /**
   * <p>The name of the authentication profile.</p>
   * @public
   */
  AuthenticationProfileName?: string | undefined;

  /**
   * <p>The content of the authentication profile in JSON format.
   *             The maximum length of the JSON string is determined by a quota for your account.</p>
   * @public
   */
  AuthenticationProfileContent?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface AuthorizeClusterSecurityGroupIngressMessage {
  /**
   * <p>The name of the security group to which the ingress rule is added.</p>
   * @public
   */
  ClusterSecurityGroupName: string | undefined;

  /**
   * <p>The IP range to be added the Amazon Redshift security group.</p>
   * @public
   */
  CIDRIP?: string | undefined;

  /**
   * <p>The EC2 security group to be added the Amazon Redshift security group.</p>
   * @public
   */
  EC2SecurityGroupName?: string | undefined;

  /**
   * <p>The Amazon Web Services account number of the owner of the security group specified by the
   *             <i>EC2SecurityGroupName</i> parameter. The Amazon Web Services Access Key ID is not an
   *             acceptable value. </p>
   *          <p>Example: <code>111122223333</code>
   *          </p>
   * @public
   */
  EC2SecurityGroupOwnerId?: string | undefined;
}

/**
 * <p>A tag consisting of a name/value pair for a resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key, or name, for the resource tag.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value for the resource tag.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Describes an Amazon EC2 security group.</p>
 * @public
 */
export interface EC2SecurityGroup {
  /**
   * <p>The status of the EC2 security group.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The name of the EC2 Security Group.</p>
   * @public
   */
  EC2SecurityGroupName?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the EC2 security group specified in the
   *                 <code>EC2SecurityGroupName</code> field. </p>
   * @public
   */
  EC2SecurityGroupOwnerId?: string | undefined;

  /**
   * <p>The list of tags for the EC2 security group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Describes an IP range used in a security group.</p>
 * @public
 */
export interface IPRange {
  /**
   * <p>The status of the IP range, for example, "authorized".</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The IP range in Classless Inter-Domain Routing (CIDR) notation.</p>
   * @public
   */
  CIDRIP?: string | undefined;

  /**
   * <p>The list of tags for the IP range.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Describes a security group.</p>
 * @public
 */
export interface ClusterSecurityGroup {
  /**
   * <p>The name of the cluster security group to which the operation was
   *             applied.</p>
   * @public
   */
  ClusterSecurityGroupName?: string | undefined;

  /**
   * <p>A description of the security group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of EC2 security groups that are permitted to access clusters associated with
   *             this cluster security group.</p>
   * @public
   */
  EC2SecurityGroups?: EC2SecurityGroup[] | undefined;

  /**
   * <p>A list of IP ranges (CIDR blocks) that are permitted to access clusters associated
   *             with this cluster security group.</p>
   * @public
   */
  IPRanges?: IPRange[] | undefined;

  /**
   * <p>The list of tags for the cluster security group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AuthorizeClusterSecurityGroupIngressResult {
  /**
   * <p>Describes a security group.</p>
   * @public
   */
  ClusterSecurityGroup?: ClusterSecurityGroup | undefined;
}

/**
 * @public
 */
export interface AuthorizeDataShareMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare namespace that producers are to authorize
   *             sharing for.</p>
   * @public
   */
  DataShareArn: string | undefined;

  /**
   * <p>The identifier of the data consumer that is authorized to access the datashare. This identifier is an Amazon Web Services account ID or a keyword, such as ADX.</p>
   * @public
   */
  ConsumerIdentifier: string | undefined;

  /**
   * <p>If set to true, allows write operations for a datashare.</p>
   * @public
   */
  AllowWrites?: boolean | undefined;
}

/**
 * <p>The authorized token issuer for the Amazon Redshift IAM Identity Center application.</p>
 * @public
 */
export interface AuthorizedTokenIssuer {
  /**
   * <p>The ARN for the authorized token issuer for integrating Amazon Redshift with IDC Identity Center.</p>
   * @public
   */
  TrustedTokenIssuerArn?: string | undefined;

  /**
   * <p>The list of audiences for the authorized token issuer for integrating Amazon Redshift
   *             with IDC Identity Center.</p>
   * @public
   */
  AuthorizedAudiencesList?: string[] | undefined;
}

/**
 * @public
 */
export interface AuthorizeEndpointAccessMessage {
  /**
   * <p>The cluster identifier of the cluster to grant access to.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID to grant access to.</p>
   * @public
   */
  Account: string | undefined;

  /**
   * <p>The virtual private cloud (VPC) identifiers to grant access to.</p>
   * @public
   */
  VpcIds?: string[] | undefined;
}

/**
 * <p>Describes an endpoint authorization for authorizing Redshift-managed VPC endpoint access to a cluster across Amazon Web Services accounts.</p>
 * @public
 */
export interface EndpointAuthorization {
  /**
   * <p>The Amazon Web Services account ID of the cluster owner.</p>
   * @public
   */
  Grantor?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the grantee of the cluster.</p>
   * @public
   */
  Grantee?: string | undefined;

  /**
   * <p>The cluster identifier.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The time (UTC) when the authorization was created.</p>
   * @public
   */
  AuthorizeTime?: Date | undefined;

  /**
   * <p>The status of the cluster.</p>
   * @public
   */
  ClusterStatus?: string | undefined;

  /**
   * <p>The status of the authorization action.</p>
   * @public
   */
  Status?: AuthorizationStatus | undefined;

  /**
   * <p>Indicates whether all VPCs in the grantee account are allowed access to the cluster.</p>
   * @public
   */
  AllowedAllVPCs?: boolean | undefined;

  /**
   * <p>The VPCs allowed access to the cluster.</p>
   * @public
   */
  AllowedVPCs?: string[] | undefined;

  /**
   * <p>The number of Redshift-managed VPC endpoints created for the authorization.</p>
   * @public
   */
  EndpointCount?: number | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface AuthorizeSnapshotAccessMessage {
  /**
   * <p>The identifier of the snapshot the account is authorized to restore.</p>
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot to authorize access to.</p>
   * @public
   */
  SnapshotArn?: string | undefined;

  /**
   * <p>The identifier of the cluster the snapshot was created from.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>If the snapshot to access doesn't exist and the associated IAM policy doesn't allow access to all (*) snapshots</i> -  This parameter is required. Otherwise, permissions
   *                 aren't available to check if the snapshot exists.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>If the snapshot to access exists</i> - This parameter isn't required. Redshift can retrieve the cluster identifier and use it to
   *                 validate snapshot authorization.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SnapshotClusterIdentifier?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account authorized to restore the specified
   *             snapshot.</p>
   *          <p>To share a snapshot with Amazon Web Services Support, specify amazon-redshift-support.</p>
   * @public
   */
  AccountWithRestoreAccess: string | undefined;
}

/**
 * <p>Describes a snapshot.</p>
 * @public
 */
export interface Snapshot {
  /**
   * <p>The snapshot identifier that is provided in the request.</p>
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * <p>The identifier of the cluster for which the snapshot was taken.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The time (in UTC format) when Amazon Redshift began the snapshot. A snapshot contains a
   *             copy of the cluster data as of this exact time.</p>
   * @public
   */
  SnapshotCreateTime?: Date | undefined;

  /**
   * <p>The snapshot status. The value of the status depends on the API operation used: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateClusterSnapshot</a> and <a>CopyClusterSnapshot</a> returns status as "creating". </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeClusterSnapshots</a> returns status as "creating",
   *                     "available", "final snapshot", or "failed".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteClusterSnapshot</a> returns status as "deleted".</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The port that the cluster is listening on.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The Availability Zone in which the cluster was created.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The time (UTC) when the cluster was originally created.</p>
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * <p>The admin user name for the cluster.</p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>The version ID of the Amazon Redshift engine that is running on the cluster.</p>
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * <p>The cluster version of the cluster used to create the snapshot. For example, 1.0.15503. </p>
   * @public
   */
  EngineFullVersion?: string | undefined;

  /**
   * <p>The snapshot type. Snapshots created using <a>CreateClusterSnapshot</a>
   *             and <a>CopyClusterSnapshot</a> are of type "manual". </p>
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * <p>The node type of the nodes in the cluster.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The number of nodes in the cluster.</p>
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * <p>The name of the database that was created when the cluster was created.</p>
   * @public
   */
  DBName?: string | undefined;

  /**
   * <p>The VPC identifier of the cluster if the snapshot is from a cluster in a VPC.
   *             Otherwise, this field is not in the output.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>If <code>true</code>, the data in the snapshot is encrypted at rest.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The Key Management Service (KMS) key ID of the encryption key that was used to
   *             encrypt data in the cluster from which the snapshot was taken.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>A boolean that indicates whether the snapshot data is encrypted using the HSM keys
   *             of the source cluster. <code>true</code> indicates that the data is encrypted using HSM
   *             keys.</p>
   * @public
   */
  EncryptedWithHSM?: boolean | undefined;

  /**
   * <p>A list of the Amazon Web Services accounts authorized to restore the snapshot. Returns
   *                 <code>null</code> if no accounts are authorized. Visible only to the snapshot owner.
   *         </p>
   * @public
   */
  AccountsWithRestoreAccess?: AccountWithRestoreAccess[] | undefined;

  /**
   * <p>For manual snapshots, the Amazon Web Services account used to create or copy the snapshot.
   *             For automatic snapshots, the owner of the cluster. The owner can perform all snapshot
   *             actions, such as sharing a manual snapshot.</p>
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * <p>The size of the complete set of backup data that would be used to restore the
   *             cluster.</p>
   * @public
   */
  TotalBackupSizeInMegaBytes?: number | undefined;

  /**
   * <p>The size of the incremental backup.</p>
   * @public
   */
  ActualIncrementalBackupSizeInMegaBytes?: number | undefined;

  /**
   * <p>The number of megabytes that have been transferred to the snapshot
   *             backup.</p>
   * @public
   */
  BackupProgressInMegaBytes?: number | undefined;

  /**
   * <p>The number of megabytes per second being transferred to the snapshot backup.
   *             Returns <code>0</code> for a completed backup. </p>
   * @public
   */
  CurrentBackupRateInMegaBytesPerSecond?: number | undefined;

  /**
   * <p>The estimate of the time remaining before the snapshot backup will complete.
   *             Returns <code>0</code> for a completed backup. </p>
   * @public
   */
  EstimatedSecondsToCompletion?: number | undefined;

  /**
   * <p>The amount of time an in-progress snapshot backup has been running, or the amount
   *             of time it took a completed backup to finish.</p>
   * @public
   */
  ElapsedTimeInSeconds?: number | undefined;

  /**
   * <p>The source region from which the snapshot was copied.</p>
   * @public
   */
  SourceRegion?: string | undefined;

  /**
   * <p>The list of tags for the cluster snapshot.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The list of node types that this cluster snapshot is able to restore
   *             into.</p>
   * @public
   */
  RestorableNodeTypes?: string[] | undefined;

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
   * <p>The name of the maintenance track for the snapshot.</p>
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely. </p>
   *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>The number of days until a manual snapshot will pass its retention period.</p>
   * @public
   */
  ManualSnapshotRemainingDays?: number | undefined;

  /**
   * <p>A timestamp representing the start of the retention period for the snapshot.</p>
   * @public
   */
  SnapshotRetentionStartTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the cluster's admin user credentials secret.</p>
   * @public
   */
  MasterPasswordSecretArn?: string | undefined;

  /**
   * <p>The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin credentials secret.</p>
   * @public
   */
  MasterPasswordSecretKmsKeyId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot.</p>
   * @public
   */
  SnapshotArn?: string | undefined;
}

/**
 * @public
 */
export interface AuthorizeSnapshotAccessResult {
  /**
   * <p>Describes a snapshot.</p>
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * <p>A list of supported platforms for orderable clusters.</p>
 * @public
 */
export interface SupportedPlatform {
  /**
   * <p></p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Describes an availability zone.</p>
 * @public
 */
export interface AvailabilityZone {
  /**
   * <p>The name of the availability zone.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  SupportedPlatforms?: SupportedPlatform[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteClusterSnapshotMessage {
  /**
   * <p>The unique identifier of the manual snapshot to be deleted.</p>
   *          <p>Constraints: Must be the name of an existing snapshot that is in the
   *                 <code>available</code>, <code>failed</code>, or <code>cancelled</code>
   *             state.</p>
   * @public
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the cluster the snapshot was created from. This parameter
   *             is required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   *          <p>Constraints: Must be the name of valid cluster.</p>
   * @public
   */
  SnapshotClusterIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteClusterSnapshotsRequest {
  /**
   * <p>A list of identifiers for the snapshots that you want to delete.</p>
   * @public
   */
  Identifiers: DeleteClusterSnapshotMessage[] | undefined;
}

/**
 * <p>Describes the errors returned by a snapshot.</p>
 * @public
 */
export interface SnapshotErrorMessage {
  /**
   * <p>A unique identifier for the snapshot returning the error.</p>
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * <p>A unique identifier for the cluster.</p>
   * @public
   */
  SnapshotClusterIdentifier?: string | undefined;

  /**
   * <p>The failure code for the error.</p>
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * <p>The text message describing the error.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteClusterSnapshotsResult {
  /**
   * <p>A list of the snapshot identifiers that were deleted. </p>
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * <p>A list of any errors returned.</p>
   * @public
   */
  Errors?: SnapshotErrorMessage[] | undefined;
}

/**
 * @public
 */
export interface BatchModifyClusterSnapshotsMessage {
  /**
   * <p>A list of snapshot identifiers you want to modify.</p>
   * @public
   */
  SnapshotIdentifierList: string[] | undefined;

  /**
   * <p>The number of days that a manual snapshot is retained. If you specify the value -1,
   *             the manual snapshot is retained indefinitely.</p>
   *          <p>The number must be either -1 or an integer between 1 and 3,653.</p>
   *          <p>If you decrease the manual snapshot retention period from its current value, existing
   *             manual snapshots that fall outside of the new retention period will return an error. If
   *             you want to suppress the errors and delete the snapshots, use the force option. </p>
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>A boolean value indicating whether to override an exception if the retention period
   *             has passed. </p>
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface BatchModifyClusterSnapshotsOutputMessage {
  /**
   * <p>A list of the snapshots that were modified.</p>
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * <p>A list of any errors returned.</p>
   * @public
   */
  Errors?: SnapshotErrorMessage[] | undefined;
}

/**
 * @public
 */
export interface CancelResizeMessage {
  /**
   * <p>The unique identifier for the cluster that you want to cancel a resize operation
   *             for.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * <p>Describes the result of a cluster resize operation.</p>
 * @public
 */
export interface ResizeProgressMessage {
  /**
   * <p>The node type that the cluster will have after the resize operation is
   *             complete.</p>
   * @public
   */
  TargetNodeType?: string | undefined;

  /**
   * <p>The number of nodes that the cluster will have after the resize operation is
   *             complete.</p>
   * @public
   */
  TargetNumberOfNodes?: number | undefined;

  /**
   * <p>The cluster type after the resize operation is complete.</p>
   *          <p>Valid Values: <code>multi-node</code> | <code>single-node</code>
   *          </p>
   * @public
   */
  TargetClusterType?: string | undefined;

  /**
   * <p>The status of the resize operation.</p>
   *          <p>Valid Values: <code>NONE</code> | <code>IN_PROGRESS</code> | <code>FAILED</code> |
   *                 <code>SUCCEEDED</code> | <code>CANCELLING</code>
   *          </p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The names of tables that have been completely imported .</p>
   *          <p>Valid Values: List of table names.</p>
   * @public
   */
  ImportTablesCompleted?: string[] | undefined;

  /**
   * <p>The names of tables that are being currently imported.</p>
   *          <p>Valid Values: List of table names.</p>
   * @public
   */
  ImportTablesInProgress?: string[] | undefined;

  /**
   * <p>The names of tables that have not been yet imported.</p>
   *          <p>Valid Values: List of table names</p>
   * @public
   */
  ImportTablesNotStarted?: string[] | undefined;

  /**
   * <p>The average rate of the resize operation over the last few minutes, measured in
   *             megabytes per second. After the resize operation completes, this value shows the average
   *             rate of the entire resize operation.</p>
   * @public
   */
  AvgResizeRateInMegaBytesPerSecond?: number | undefined;

  /**
   * <p>The estimated total amount of data, in megabytes, on the cluster before the resize
   *             operation began.</p>
   * @public
   */
  TotalResizeDataInMegaBytes?: number | undefined;

  /**
   * <p>While the resize operation is in progress, this value shows the current amount of
   *             data, in megabytes, that has been processed so far. When the resize operation is
   *             complete, this value shows the total amount of data, in megabytes, on the cluster, which
   *             may be more or less than TotalResizeDataInMegaBytes (the estimated total amount of data
   *             before resize).</p>
   * @public
   */
  ProgressInMegaBytes?: number | undefined;

  /**
   * <p>The amount of seconds that have elapsed since the resize operation began. After the
   *             resize operation completes, this value shows the total actual time, in seconds, for the
   *             resize operation.</p>
   * @public
   */
  ElapsedTimeInSeconds?: number | undefined;

  /**
   * <p>The estimated time remaining, in seconds, until the resize operation is complete.
   *             This value is calculated based on the average resize rate and the estimated amount of
   *             data remaining to be processed. Once the resize operation is complete, this value will
   *             be 0.</p>
   * @public
   */
  EstimatedTimeToCompletionInSeconds?: number | undefined;

  /**
   * <p>An enum with possible values of <code>ClassicResize</code> and
   *                 <code>ElasticResize</code>. These values describe the type of resize operation being
   *             performed. </p>
   * @public
   */
  ResizeType?: string | undefined;

  /**
   * <p>An optional string to provide additional details about the resize action.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The type of encryption for the cluster after the resize is complete.</p>
   *          <p>Possible values are <code>KMS</code> and <code>None</code>. </p>
   * @public
   */
  TargetEncryptionType?: string | undefined;

  /**
   * <p>The percent of data transferred from source cluster to target cluster.</p>
   * @public
   */
  DataTransferProgressPercent?: number | undefined;
}

/**
 * <p>The identifier of a node in a cluster.</p>
 * @public
 */
export interface ClusterNode {
  /**
   * <p>Whether the node is a leader node or a compute node.</p>
   * @public
   */
  NodeRole?: string | undefined;

  /**
   * <p>The private IP address of a node within a cluster.</p>
   * @public
   */
  PrivateIPAddress?: string | undefined;

  /**
   * <p>The public IP address of a node within a cluster.</p>
   * @public
   */
  PublicIPAddress?: string | undefined;
}

/**
 * <p>Describes the status of a parameter group.</p>
 * @public
 */
export interface ClusterParameterStatus {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * <p>The status of the parameter that indicates whether the parameter is in sync with
   *             the database, waiting for a cluster reboot, or encountered an error when being
   *             applied.</p>
   *          <p>The following are possible statuses and descriptions.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>in-sync</code>: The parameter value is in sync with the
   *                     database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending-reboot</code>: The parameter value will be applied after the
   *                     cluster reboots.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>applying</code>: The parameter value is being applied to the
   *                     database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>invalid-parameter</code>: Cannot apply the parameter value because it has
   *                     an invalid value or syntax.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>apply-deferred</code>: The parameter contains static property changes. The
   *                     changes are deferred until the cluster reboots.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>apply-error</code>: Cannot connect to the cluster. The parameter change
   *                     will be applied after the cluster reboots.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unknown-error</code>: Cannot apply the parameter change right now. The
   *                     change will be applied after the cluster reboots.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ParameterApplyStatus?: string | undefined;

  /**
   * <p>The error that prevented the parameter from being applied to the
   *             database.</p>
   * @public
   */
  ParameterApplyErrorDescription?: string | undefined;
}

/**
 * <p>Describes the status of a parameter group.</p>
 * @public
 */
export interface ClusterParameterGroupStatus {
  /**
   * <p>The name of the cluster parameter group.</p>
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * <p>The status of parameter updates.</p>
   * @public
   */
  ParameterApplyStatus?: string | undefined;

  /**
   * <p>The list of parameter statuses.</p>
   *          <p>
   * For more information about parameters and parameter groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   * @public
   */
  ClusterParameterStatusList?: ClusterParameterStatus[] | undefined;
}

/**
 * <p>Describes a cluster security group.</p>
 * @public
 */
export interface ClusterSecurityGroupMembership {
  /**
   * <p>The name of the cluster security group.</p>
   * @public
   */
  ClusterSecurityGroupName?: string | undefined;

  /**
   * <p>The status of the cluster security group.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Returns the destination region and retention period that are configured for
 *             cross-region snapshot copy.</p>
 * @public
 */
export interface ClusterSnapshotCopyStatus {
  /**
   * <p>The destination region that snapshots are automatically copied to when cross-region
   *             snapshot copy is enabled.</p>
   * @public
   */
  DestinationRegion?: string | undefined;

  /**
   * <p>The number of days that automated snapshots are retained in the destination region
   *             after they are copied from a source region.</p>
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * <p>The number of days that automated snapshots are retained in the destination region
   *             after they are copied from a source region. If the value is -1, the manual snapshot is
   *             retained indefinitely. </p>
   *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>The name of the snapshot copy grant.</p>
   * @public
   */
  SnapshotCopyGrantName?: string | undefined;
}

/**
 * <p>Describes the status of a cluster while it is in the process of resizing with an
 *             incremental resize.</p>
 * @public
 */
export interface DataTransferProgress {
  /**
   * <p>Describes the status of the cluster. While the transfer is in progress the status is
   *                 <code>transferringdata</code>.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Describes the data transfer rate in MB's per second.</p>
   * @public
   */
  CurrentRateInMegaBytesPerSecond?: number | undefined;

  /**
   * <p>Describes the total amount of data to be transfered in megabytes.</p>
   * @public
   */
  TotalDataInMegaBytes?: number | undefined;

  /**
   * <p>Describes the total amount of data that has been transfered in MB's.</p>
   * @public
   */
  DataTransferredInMegaBytes?: number | undefined;

  /**
   * <p>Describes the estimated number of seconds remaining to complete the transfer.</p>
   * @public
   */
  EstimatedTimeToCompletionInSeconds?: number | undefined;

  /**
   * <p>Describes the number of seconds that have elapsed during the data transfer.</p>
   * @public
   */
  ElapsedTimeInSeconds?: number | undefined;
}

/**
 * <p>Describes a deferred maintenance window</p>
 * @public
 */
export interface DeferredMaintenanceWindow {
  /**
   * <p>A unique identifier for the maintenance window.</p>
   * @public
   */
  DeferMaintenanceIdentifier?: string | undefined;

  /**
   * <p> A timestamp for the beginning of the time period when we defer maintenance.</p>
   * @public
   */
  DeferMaintenanceStartTime?: Date | undefined;

  /**
   * <p> A timestamp for the end of the time period when we defer maintenance.</p>
   * @public
   */
  DeferMaintenanceEndTime?: Date | undefined;
}

/**
 * <p>Describes the status of the elastic IP (EIP) address.</p>
 * @public
 */
export interface ElasticIpStatus {
  /**
   * <p>The elastic IP (EIP) address for the cluster.</p>
   * @public
   */
  ElasticIp?: string | undefined;

  /**
   * <p>The status of the elastic IP (EIP) address.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Describes a network interface. </p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>The network interface identifier. </p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The subnet identifier. </p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The IPv4 address of the network interface within the subnet. </p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>The Availability Zone. </p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The IPv6 address of the network interface within the subnet. </p>
   * @public
   */
  Ipv6Address?: string | undefined;
}

/**
 * <p>The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.</p>
 * @public
 */
export interface VpcEndpoint {
  /**
   * <p>The connection endpoint ID for connecting an Amazon Redshift cluster through the proxy.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>The VPC identifier that the endpoint is associated. </p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>One or more network interfaces of the endpoint. Also known as an interface endpoint. </p>
   * @public
   */
  NetworkInterfaces?: NetworkInterface[] | undefined;
}

/**
 * <p>Describes a connection endpoint.</p>
 * @public
 */
export interface Endpoint {
  /**
   * <p>The DNS address of the Cluster.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>The port that the database engine is listening on.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Describes a connection endpoint.</p>
   * @public
   */
  VpcEndpoints?: VpcEndpoint[] | undefined;
}

/**
 * <p>Describes the status of changes to HSM settings.</p>
 * @public
 */
export interface HsmStatus {
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
   * <p>Reports whether the Amazon Redshift cluster has finished applying any HSM settings
   *             changes specified in a modify cluster command.</p>
   *          <p>Values: active, applying</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>An Identity and Access Management (IAM) role that can be used by the associated
 *             Amazon Redshift cluster to access other Amazon Web Services services.</p>
 * @public
 */
export interface ClusterIamRole {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role, for example,
   *                 <code>arn:aws:iam::123456789012:role/RedshiftCopyUnload</code>. </p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>A value that describes the status of the IAM role's association with an Amazon
   *             Redshift cluster.</p>
   *          <p>The following are possible statuses and descriptions.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>in-sync</code>: The role is available for use by the cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>adding</code>: The role is in the process of being associated with the
   *                     cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>removing</code>: The role is in the process of being disassociated with
   *                     the cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ApplyStatus?: string | undefined;
}

/**
 * <p>The AvailabilityZone and ClusterNodes information of the secondary compute unit.</p>
 * @public
 */
export interface SecondaryClusterInfo {
  /**
   * <p>The name of the Availability Zone in which the secondary compute unit of the cluster is located.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The nodes in the secondary compute unit.</p>
   * @public
   */
  ClusterNodes?: ClusterNode[] | undefined;
}

/**
 * <p>Describes cluster attributes that are in a pending state. A change to one or more
 *             the attributes was requested and is in progress or will be applied.</p>
 * @public
 */
export interface PendingModifiedValues {
  /**
   * <p>The pending or in-progress change of the admin user password for the
   *             cluster.</p>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>The pending or in-progress change of the cluster's node type.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The pending or in-progress change of the number of nodes in the cluster.</p>
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * <p>The pending or in-progress change of the cluster type.</p>
   * @public
   */
  ClusterType?: string | undefined;

  /**
   * <p>The pending or in-progress change of the service version.</p>
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * <p>The pending or in-progress change of the automated snapshot retention
   *             period.</p>
   * @public
   */
  AutomatedSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>The pending or in-progress change of the new identifier for the cluster.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The pending or in-progress change of the ability to connect to the cluster from the
   *             public network.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

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
   * <p>The name of the maintenance track that the cluster will change to during the next
   *             maintenance window.</p>
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * <p>The encryption type for a cluster. Possible values are: KMS and None. </p>
   * @public
   */
  EncryptionType?: string | undefined;
}

/**
 * <p>Reserved-node status details, such as the source reserved-node
 *             identifier, the target reserved-node identifier, the node type, the node count, and
 *             other details.</p>
 * @public
 */
export interface ReservedNodeExchangeStatus {
  /**
   * <p>The identifier of the reserved-node exchange request.</p>
   * @public
   */
  ReservedNodeExchangeRequestId?: string | undefined;

  /**
   * <p>The status of the reserved-node exchange request. Statuses include in-progress and requested.</p>
   * @public
   */
  Status?: ReservedNodeExchangeStatusType | undefined;

  /**
   * <p>A date and time that indicate when the reserved-node exchange was requested.</p>
   * @public
   */
  RequestTime?: Date | undefined;

  /**
   * <p>The identifier of the source reserved node.</p>
   * @public
   */
  SourceReservedNodeId?: string | undefined;

  /**
   * <p>The source reserved-node type, for example ra3.4xlarge.</p>
   * @public
   */
  SourceReservedNodeType?: string | undefined;

  /**
   * <p>The source reserved-node count in the cluster.</p>
   * @public
   */
  SourceReservedNodeCount?: number | undefined;

  /**
   * <p>The identifier of the target reserved node offering.</p>
   * @public
   */
  TargetReservedNodeOfferingId?: string | undefined;

  /**
   * <p>The node type of the target reserved node, for example ra3.4xlarge.</p>
   * @public
   */
  TargetReservedNodeType?: string | undefined;

  /**
   * <p>The count of target reserved nodes in the cluster.</p>
   * @public
   */
  TargetReservedNodeCount?: number | undefined;
}

/**
 * <p>Describes a resize operation.</p>
 * @public
 */
export interface ResizeInfo {
  /**
   * <p>Returns the value <code>ClassicResize</code>.</p>
   * @public
   */
  ResizeType?: string | undefined;

  /**
   * <p>A boolean value indicating if the resize operation can be cancelled.</p>
   * @public
   */
  AllowCancelResize?: boolean | undefined;
}

/**
 * <p>Describes the status of a cluster restore action. Returns null if the cluster was
 *             not created by restoring a snapshot.</p>
 * @public
 */
export interface RestoreStatus {
  /**
   * <p>The status of the restore action. Returns starting, restoring, completed, or
   *             failed.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The number of megabytes per second being transferred from the backup storage.
   *             Returns the average rate for a completed backup.
   *             This field is only updated when you restore to DC2 node types. </p>
   * @public
   */
  CurrentRestoreRateInMegaBytesPerSecond?: number | undefined;

  /**
   * <p>The size of the set of snapshot data used to restore the cluster.
   *             This field is only updated when you restore to DC2 node types. </p>
   * @public
   */
  SnapshotSizeInMegaBytes?: number | undefined;

  /**
   * <p>The number of megabytes that have been transferred from snapshot storage.
   *             This field is only updated when you restore to DC2 node types. </p>
   * @public
   */
  ProgressInMegaBytes?: number | undefined;

  /**
   * <p>The amount of time an in-progress restore has been running, or the amount of time
   *             it took a completed restore to finish.
   *             This field is only updated when you restore to DC2 node types. </p>
   * @public
   */
  ElapsedTimeInSeconds?: number | undefined;

  /**
   * <p>The estimate of the time remaining before the restore will complete. Returns 0 for
   *             a completed restore.
   *             This field is only updated when you restore to DC2 node types. </p>
   * @public
   */
  EstimatedTimeToCompletionInSeconds?: number | undefined;
}

/**
 * <p>Describes the members of a VPC security group.</p>
 * @public
 */
export interface VpcSecurityGroupMembership {
  /**
   * <p>The identifier of the VPC security group.</p>
   * @public
   */
  VpcSecurityGroupId?: string | undefined;

  /**
   * <p>The status of the VPC security group.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Describes a cluster.</p>
 * @public
 */
export interface Cluster {
  /**
   * <p>The unique identifier of the cluster.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The node type for the nodes in the cluster.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p> The current state of the cluster. Possible values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>available</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available, prep-for-resize</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available, resize-cleanup</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cancelling-resize</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>creating</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>final-snapshot</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>hardware-failure</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>incompatible-hsm</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>incompatible-network</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>incompatible-parameters</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>incompatible-restore</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>modifying</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>paused</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rebooting</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>renaming</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resizing</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>rotating-keys</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>storage-full</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>updating-hsm</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ClusterStatus?: string | undefined;

  /**
   * <p>The availability status of the cluster for queries. Possible values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>Available - The cluster is available for queries. </p>
   *             </li>
   *             <li>
   *                <p>Unavailable - The cluster is not available for queries.</p>
   *             </li>
   *             <li>
   *                <p>Maintenance - The cluster is intermittently available for queries due to maintenance activities.</p>
   *             </li>
   *             <li>
   *                <p>Modifying - The cluster is intermittently available for queries due to changes that modify the cluster.</p>
   *             </li>
   *             <li>
   *                <p>Failed - The cluster failed and is not available for queries.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ClusterAvailabilityStatus?: string | undefined;

  /**
   * <p>The status of a modify operation, if any, initiated for the cluster.</p>
   * @public
   */
  ModifyStatus?: string | undefined;

  /**
   * <p>The admin user name for the cluster. This name is used to connect to the database
   *             that is specified in the <b>DBName</b> parameter. </p>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>The name of the initial database that was created when the cluster was created.
   *             This same name is returned for the life of the cluster. If an initial database was not
   *             specified, a database named <code>dev</code>dev was created by default. </p>
   * @public
   */
  DBName?: string | undefined;

  /**
   * <p>The connection endpoint.</p>
   * @public
   */
  Endpoint?: Endpoint | undefined;

  /**
   * <p>The date and time that the cluster was created.</p>
   * @public
   */
  ClusterCreateTime?: Date | undefined;

  /**
   * <p>The number of days that automatic cluster snapshots are retained.</p>
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
   * <p>A list of cluster security group that are associated with the cluster. Each
   *             security group is represented by an element that contains
   *                 <code>ClusterSecurityGroup.Name</code> and <code>ClusterSecurityGroup.Status</code>
   *             subelements. </p>
   *          <p>Cluster security groups are used when the cluster is not created in an Amazon
   *             Virtual Private Cloud (VPC). Clusters that are created in a VPC use VPC security groups,
   *             which are listed by the <b>VpcSecurityGroups</b> parameter.
   *         </p>
   * @public
   */
  ClusterSecurityGroups?: ClusterSecurityGroupMembership[] | undefined;

  /**
   * <p>A list of Amazon Virtual Private Cloud (Amazon VPC) security groups that are
   *             associated with the cluster. This parameter is returned only if the cluster is in a
   *             VPC.</p>
   * @public
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * <p>The list of cluster parameter groups that are associated with this cluster. Each
   *             parameter group in the list is returned with its status.</p>
   * @public
   */
  ClusterParameterGroups?: ClusterParameterGroupStatus[] | undefined;

  /**
   * <p>The name of the subnet group that is associated with the cluster. This parameter is
   *             valid only when the cluster is in a VPC.</p>
   * @public
   */
  ClusterSubnetGroupName?: string | undefined;

  /**
   * <p>The identifier of the VPC the cluster is in, if the cluster is in a VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The name of the Availability Zone in which the cluster is located.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The weekly time range, in Universal Coordinated Time (UTC), during which system
   *             maintenance can occur.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>A value that, if present, indicates that changes to the cluster are pending.
   *             Specific pending changes are identified by subelements.</p>
   * @public
   */
  PendingModifiedValues?: PendingModifiedValues | undefined;

  /**
   * <p>The version ID of the Amazon Redshift engine that is running on the cluster.</p>
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * <p>A boolean value that, if <code>true</code>, indicates that major version upgrades
   *             will be applied automatically to the cluster during the maintenance window. </p>
   * @public
   */
  AllowVersionUpgrade?: boolean | undefined;

  /**
   * <p>The number of compute nodes in the cluster.</p>
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * <p>A boolean value that, if <code>true</code>, indicates that the cluster can be
   *             accessed from a public network.</p>
   *          <p>Default: false</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>A boolean value that, if <code>true</code>, indicates that data in the cluster is
   *             encrypted at rest.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>A value that describes the status of a cluster restore action. This parameter
   *             returns null if the cluster was not created by restoring a snapshot.</p>
   * @public
   */
  RestoreStatus?: RestoreStatus | undefined;

  /**
   * <p></p>
   * @public
   */
  DataTransferProgress?: DataTransferProgress | undefined;

  /**
   * <p>A value that reports whether the Amazon Redshift cluster has finished applying any
   *             hardware security module (HSM) settings changes specified in a modify cluster
   *             command.</p>
   *          <p>Values: active, applying</p>
   * @public
   */
  HsmStatus?: HsmStatus | undefined;

  /**
   * <p>A value that returns the destination region and retention period that are
   *             configured for cross-region snapshot copy.</p>
   * @public
   */
  ClusterSnapshotCopyStatus?: ClusterSnapshotCopyStatus | undefined;

  /**
   * <p>The public key for the cluster.</p>
   * @public
   */
  ClusterPublicKey?: string | undefined;

  /**
   * <p>The nodes in the cluster.</p>
   * @public
   */
  ClusterNodes?: ClusterNode[] | undefined;

  /**
   * <p>The status of the elastic IP (EIP) address.</p>
   * @public
   */
  ElasticIpStatus?: ElasticIpStatus | undefined;

  /**
   * <p>The specific revision number of the database in the cluster.</p>
   * @public
   */
  ClusterRevisionNumber?: string | undefined;

  /**
   * <p>The list of tags for the cluster.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Key Management Service (KMS) key ID of the encryption key used to
   *             encrypt data in the cluster.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

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
   * <p>A list of Identity and Access Management (IAM) roles that can be used by the
   *             cluster to access other Amazon Web Services services.</p>
   * @public
   */
  IamRoles?: ClusterIamRole[] | undefined;

  /**
   * <p>Cluster operations that are waiting to be started.</p>
   * @public
   */
  PendingActions?: string[] | undefined;

  /**
   * <p>The name of the maintenance track for the cluster.</p>
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * <p>The number of nodes that you can resize the cluster to with the elastic resize method.
   *         </p>
   * @public
   */
  ElasticResizeNumberOfNodeOptions?: string | undefined;

  /**
   * <p>Describes a group of <code>DeferredMaintenanceWindow</code> objects.</p>
   * @public
   */
  DeferredMaintenanceWindows?: DeferredMaintenanceWindow[] | undefined;

  /**
   * <p>A unique identifier for the cluster snapshot schedule.</p>
   * @public
   */
  SnapshotScheduleIdentifier?: string | undefined;

  /**
   * <p>The current state of the cluster snapshot schedule.</p>
   * @public
   */
  SnapshotScheduleState?: ScheduleState | undefined;

  /**
   * <p>The date and time when the next snapshot is expected to be taken for clusters with a valid snapshot schedule and backups enabled. </p>
   * @public
   */
  ExpectedNextSnapshotScheduleTime?: Date | undefined;

  /**
   * <p> The status of next expected snapshot for clusters having a valid snapshot schedule and backups enabled.  Possible values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>OnTrack - The next snapshot is expected to be taken on time. </p>
   *             </li>
   *             <li>
   *                <p>Pending - The next snapshot is pending to be taken. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ExpectedNextSnapshotScheduleTimeStatus?: string | undefined;

  /**
   * <p>The date and time in UTC when system maintenance can begin.</p>
   * @public
   */
  NextMaintenanceWindowStartTime?: Date | undefined;

  /**
   * <p>Returns the following:</p>
   *          <ul>
   *             <li>
   *                <p>AllowCancelResize: a boolean value indicating if the resize operation can be
   *                     cancelled.</p>
   *             </li>
   *             <li>
   *                <p>ResizeType: Returns ClassicResize</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResizeInfo?: ResizeInfo | undefined;

  /**
   * <p>Describes the status of the Availability Zone relocation operation.</p>
   * @public
   */
  AvailabilityZoneRelocationStatus?: string | undefined;

  /**
   * <p>The namespace Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterNamespaceArn?: string | undefined;

  /**
   * <p>The total storage capacity of the cluster in megabytes. </p>
   * @public
   */
  TotalStorageCapacityInMegaBytes?: number | undefined;

  /**
   * <p>This field is retired. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).</p>
   * @public
   */
  AquaConfiguration?: AquaConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role set as default for the cluster.</p>
   * @public
   */
  DefaultIamRoleArn?: string | undefined;

  /**
   * <p>The status of the reserved-node exchange request. Statuses include in-progress and requested.</p>
   * @public
   */
  ReservedNodeExchangeStatus?: ReservedNodeExchangeStatus | undefined;

  /**
   * <p>The custom domain name associated with the cluster.</p>
   * @public
   */
  CustomDomainName?: string | undefined;

  /**
   * <p>The certificate Amazon Resource Name (ARN) for the custom domain name.</p>
   * @public
   */
  CustomDomainCertificateArn?: string | undefined;

  /**
   * <p>The expiration date for the certificate associated with the custom domain name.</p>
   * @public
   */
  CustomDomainCertificateExpiryDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the cluster's admin user credentials secret.</p>
   * @public
   */
  MasterPasswordSecretArn?: string | undefined;

  /**
   * <p>The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin credentials secret.</p>
   * @public
   */
  MasterPasswordSecretKmsKeyId?: string | undefined;

  /**
   * <p>The IP address type for the cluster. Possible values are <code>ipv4</code> and <code>dualstack</code>.</p>
   * @public
   */
  IpAddressType?: string | undefined;

  /**
   * <p>A boolean value that, if true, indicates that the cluster is deployed in two Availability Zones.</p>
   * @public
   */
  MultiAZ?: string | undefined;

  /**
   * <p>The secondary compute unit of a cluster, if Multi-AZ deployment is turned on.</p>
   * @public
   */
  MultiAZSecondary?: SecondaryClusterInfo | undefined;

  /**
   * <p>The status of the lakehouse registration for the cluster. Indicates whether the cluster is successfully registered with Amazon Redshift federated permissions.</p>
   * @public
   */
  LakehouseRegistrationStatus?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Glue data catalog associated with the cluster enabled with Amazon Redshift federated permissions.</p>
   * @public
   */
  CatalogArn?: string | undefined;
}

/**
 * <p>Temporary credentials with authorization to log on to an Amazon Redshift database.
 *         </p>
 * @public
 */
export interface ClusterCredentials {
  /**
   * <p>A database user name that is authorized to log on to the database <code>DbName</code>
   *             using the password <code>DbPassword</code>. If the specified DbUser exists in the
   *             database, the new user name has the same database permissions as the the user named in
   *             DbUser. By default, the user is added to PUBLIC. If the <code>DbGroups</code> parameter
   *             is specifed, <code>DbUser</code> is added to the listed groups for any sessions created
   *             using these credentials.</p>
   * @public
   */
  DbUser?: string | undefined;

  /**
   * <p>A temporary password that authorizes the user name returned by <code>DbUser</code>
   *             to log on to the database <code>DbName</code>. </p>
   * @public
   */
  DbPassword?: string | undefined;

  /**
   * <p>The date and time the password in <code>DbPassword</code> expires.</p>
   * @public
   */
  Expiration?: Date | undefined;
}

/**
 * <p>Describes a <code>RevisionTarget</code>.</p>
 * @public
 */
export interface RevisionTarget {
  /**
   * <p>A unique string that identifies the version to update the cluster to. You can use this
   *             value in <a>ModifyClusterDbRevision</a>.</p>
   * @public
   */
  DatabaseRevision?: string | undefined;

  /**
   * <p>A string that describes the changes and features that will be applied to the cluster
   *             when it is updated to the corresponding <a>ClusterDbRevision</a>.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date on which the database revision was released.</p>
   * @public
   */
  DatabaseRevisionReleaseDate?: Date | undefined;
}

/**
 * <p>Describes a <code>ClusterDbRevision</code>.</p>
 * @public
 */
export interface ClusterDbRevision {
  /**
   * <p>The unique identifier of the cluster.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>A string representing the current cluster version.</p>
   * @public
   */
  CurrentDatabaseRevision?: string | undefined;

  /**
   * <p>The date on which the database revision was released.</p>
   * @public
   */
  DatabaseRevisionReleaseDate?: Date | undefined;

  /**
   * <p>A list of <code>RevisionTarget</code> objects, where each object describes the
   *             database revision that a cluster can be updated to.</p>
   * @public
   */
  RevisionTargets?: RevisionTarget[] | undefined;
}

/**
 * @public
 */
export interface ClusterDbRevisionsMessage {
  /**
   * <p>A string representing the starting point for the next set of revisions. If a value is
   *             returned in a response, you can retrieve the next set of revisions by providing the
   *             value in the <code>marker</code> parameter and retrying the command. If the
   *                 <code>marker</code> field is empty, all revisions have already been returned.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of revisions.</p>
   * @public
   */
  ClusterDbRevisions?: ClusterDbRevision[] | undefined;
}

/**
 * @public
 */
export interface ClusterExtendedCredentials {
  /**
   * <p>A database user name that you provide when you connect to a database. The database user is mapped 1:1 to the source IAM identity. </p>
   * @public
   */
  DbUser?: string | undefined;

  /**
   * <p>A temporary password that you provide when you connect to a database.</p>
   * @public
   */
  DbPassword?: string | undefined;

  /**
   * <p>The time (UTC) when the temporary password expires. After this timestamp, a log in with the temporary password fails.</p>
   * @public
   */
  Expiration?: Date | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  NextRefreshTime?: Date | undefined;
}

/**
 * <p>Describes a parameter group.</p>
 * @public
 */
export interface ClusterParameterGroup {
  /**
   * <p>The name of the cluster parameter group.</p>
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * <p>The name of the cluster parameter group family that this cluster parameter group is
   *             compatible with.</p>
   * @public
   */
  ParameterGroupFamily?: string | undefined;

  /**
   * <p>The description of the parameter group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The list of tags for the cluster parameter group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Describes a parameter in a cluster parameter group.</p>
 * @public
 */
export interface Parameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * <p>The value of the parameter. If <code>ParameterName</code> is <code>wlm_json_configuration</code>,
   *             then the maximum size of <code>ParameterValue</code> is 8000 characters.</p>
   * @public
   */
  ParameterValue?: string | undefined;

  /**
   * <p>A description of the parameter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The source of the parameter value, such as "engine-default" or "user".</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The data type of the parameter.</p>
   * @public
   */
  DataType?: string | undefined;

  /**
   * <p>The valid range of values for the parameter.</p>
   * @public
   */
  AllowedValues?: string | undefined;

  /**
   * <p>Specifies how to apply the WLM configuration parameter. Some properties can be
   *             applied dynamically, while other properties require that any associated clusters be
   *             rebooted for the configuration changes to be applied.
   * For more information about parameters and parameter groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   * @public
   */
  ApplyType?: ParameterApplyType | undefined;

  /**
   * <p>If <code>true</code>, the parameter can be modified. Some parameters have security
   *             or operational implications that prevent them from being changed. </p>
   * @public
   */
  IsModifiable?: boolean | undefined;

  /**
   * <p>The earliest engine version to which the parameter can apply.</p>
   * @public
   */
  MinimumEngineVersion?: string | undefined;
}

/**
 * <p>Contains the output from the <a>DescribeClusterParameters</a> action.
 *         </p>
 * @public
 */
export interface ClusterParameterGroupDetails {
  /**
   * <p>A list of <a>Parameter</a> instances. Each instance lists the parameters
   *             of one cluster parameter group. </p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ClusterParameterGroupNameMessage {
  /**
   * <p>The name of the cluster parameter group.</p>
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * <p>The status of the parameter group. For example, if you made a change to a parameter
   *             group name-value pair, then the change could be pending a reboot of an associated
   *             cluster.</p>
   * @public
   */
  ParameterGroupStatus?: string | undefined;
}

/**
 * <p>Contains the output from the <a>DescribeClusterParameterGroups</a>
 *             action. </p>
 * @public
 */
export interface ClusterParameterGroupsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of <a>ClusterParameterGroup</a> instances. Each instance
   *             describes one cluster parameter group. </p>
   * @public
   */
  ParameterGroups?: ClusterParameterGroup[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ClusterSecurityGroupMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of <a>ClusterSecurityGroup</a> instances. </p>
   * @public
   */
  ClusterSecurityGroups?: ClusterSecurityGroup[] | undefined;
}

/**
 * <p>Contains the output from the <a>DescribeClusters</a> action. </p>
 * @public
 */
export interface ClustersMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of <code>Cluster</code> objects, where each object describes one cluster.
   *         </p>
   * @public
   */
  Clusters?: Cluster[] | undefined;
}

/**
 * <p>Describes a subnet.</p>
 * @public
 */
export interface Subnet {
  /**
   * <p>The identifier of the subnet.</p>
   * @public
   */
  SubnetIdentifier?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  SubnetAvailabilityZone?: AvailabilityZone | undefined;

  /**
   * <p>The status of the subnet.</p>
   * @public
   */
  SubnetStatus?: string | undefined;
}

/**
 * <p>Describes a subnet group.</p>
 * @public
 */
export interface ClusterSubnetGroup {
  /**
   * <p>The name of the cluster subnet group.</p>
   * @public
   */
  ClusterSubnetGroupName?: string | undefined;

  /**
   * <p>The description of the cluster subnet group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The VPC ID of the cluster subnet group.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The status of the cluster subnet group. Possible values are <code>Complete</code>,
   *                 <code>Incomplete</code> and <code>Invalid</code>. </p>
   * @public
   */
  SubnetGroupStatus?: string | undefined;

  /**
   * <p>A list of the VPC <a>Subnet</a> elements. </p>
   * @public
   */
  Subnets?: Subnet[] | undefined;

  /**
   * <p>The list of tags for the cluster subnet group.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The IP address types supported by this cluster subnet group. Possible values are <code>ipv4</code> and <code>dualstack</code>.</p>
   * @public
   */
  SupportedClusterIpAddressTypes?: string[] | undefined;
}

/**
 * <p>Contains the output from the <a>DescribeClusterSubnetGroups</a> action.
 *         </p>
 * @public
 */
export interface ClusterSubnetGroupMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of <a>ClusterSubnetGroup</a> instances. </p>
   * @public
   */
  ClusterSubnetGroups?: ClusterSubnetGroup[] | undefined;
}

/**
 * <p>Describes a cluster version, including the parameter group family and description
 *             of the version.</p>
 * @public
 */
export interface ClusterVersion {
  /**
   * <p>The version number used by the cluster.</p>
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * <p>The name of the cluster parameter group family for the cluster.</p>
   * @public
   */
  ClusterParameterGroupFamily?: string | undefined;

  /**
   * <p>The description of the cluster version.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Contains the output from the <a>DescribeClusterVersions</a> action.
 *         </p>
 * @public
 */
export interface ClusterVersionsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of <code>Version</code> elements. </p>
   * @public
   */
  ClusterVersions?: ClusterVersion[] | undefined;
}

/**
 * <p>A structure that defines the Amazon Redshift connect service integration scope.</p>
 * @public
 */
export interface Connect {
  /**
   * <p>Determines whether the Amazon Redshift connect integration is enabled or disabled for the application.</p>
   * @public
   */
  Authorization: ServiceAuthorization | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CopyClusterSnapshotMessage {
  /**
   * <p>The identifier for the source snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be the identifier for a valid automated snapshot whose state is
   *                         <code>available</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceSnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier of the cluster the source snapshot was created from. This parameter
   *             is required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be the identifier for a valid cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceSnapshotClusterIdentifier?: string | undefined;

  /**
   * <p>The identifier given to the new manual snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Cannot be null, empty, or blank.</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Must be unique for the Amazon Web Services account that is making the request.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetSnapshotIdentifier: string | undefined;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely. </p>
   *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *          <p>The default value is -1.</p>
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;
}

/**
 * @public
 */
export interface CopyClusterSnapshotResult {
  /**
   * <p>Describes a snapshot.</p>
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface CreateAuthenticationProfileMessage {
  /**
   * <p>The name of the authentication profile to be created.</p>
   * @public
   */
  AuthenticationProfileName: string | undefined;

  /**
   * <p>The content of the authentication profile in JSON format.
   *             The maximum length of the JSON string is determined by a quota for your account.</p>
   * @public
   */
  AuthenticationProfileContent: string | undefined;
}

/**
 * @public
 */
export interface CreateAuthenticationProfileResult {
  /**
   * <p>The name of the authentication profile that was created.</p>
   * @public
   */
  AuthenticationProfileName?: string | undefined;

  /**
   * <p>The content of the authentication profile in JSON format.</p>
   * @public
   */
  AuthenticationProfileContent?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateClusterMessage {
  /**
   * <p>The name of the first database to be created when the cluster is created.</p>
   *          <p>To create additional databases after the cluster is created, connect to the cluster
   *             with a SQL client and use SQL commands to create a database. For more information, go to
   *                 <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_creating_database.html">Create
   *                 a Database</a> in the Amazon Redshift Database Developer Guide. </p>
   *          <p>Default: <code>dev</code>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1 to 64 alphanumeric characters.</p>
   *             </li>
   *             <li>
   *                <p>Must contain only lowercase letters.</p>
   *             </li>
   *             <li>
   *                <p>Cannot be a word that is reserved by the service. A list of reserved words
   *                     can be found in <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the
   *                     Amazon Redshift Database Developer Guide. </p>
   *             </li>
   *          </ul>
   * @public
   */
  DBName?: string | undefined;

  /**
   * <p>A unique identifier for the cluster. You use this identifier to refer to the
   *             cluster for any subsequent cluster operations such as deleting or modifying. The
   *             identifier also appears in the Amazon Redshift console.</p>
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
   *          <p>Example: <code>myexamplecluster</code>
   *          </p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The type of the cluster. When cluster type is specified as</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>single-node</code>, the <b>NumberOfNodes</b>
   *                     parameter is not required.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>multi-node</code>, the <b>NumberOfNodes</b>
   *                     parameter is required.</p>
   *             </li>
   *          </ul>
   *          <p>Valid Values: <code>multi-node</code> | <code>single-node</code>
   *          </p>
   *          <p>Default: <code>multi-node</code>
   *          </p>
   * @public
   */
  ClusterType?: string | undefined;

  /**
   * <p>The node type to be provisioned for the cluster. For information about node types,
   *             go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes"> Working with
   *                 Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *          <p>Valid Values:
   *             <code>dc2.large</code> | <code>dc2.8xlarge</code> |
   *             <code>ra3.large</code> |  <code>ra3.xlplus</code> |  <code>ra3.4xlarge</code> | <code>ra3.16xlarge</code>
   *          </p>
   * @public
   */
  NodeType: string | undefined;

  /**
   * <p>The user name associated with the admin user account for the cluster that is being
   *             created.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 - 128 alphanumeric characters or hyphens. The user name can't be
   *                         <code>PUBLIC</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must contain only lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Must not contain a colon (:) or a slash (/).</p>
   *             </li>
   *             <li>
   *                <p>Cannot be a reserved word. A list of reserved words can be found in <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved
   *                         Words</a> in the Amazon Redshift Database Developer Guide. </p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUsername: string | undefined;

  /**
   * <p>The password associated with the admin user account for the cluster that is being
   *             created.</p>
   *          <p>You can't use <code>MasterUserPassword</code> if <code>ManageMasterPassword</code> is <code>true</code>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be between 8 and 64 characters in length.</p>
   *             </li>
   *             <li>
   *                <p>Must contain at least one uppercase letter.</p>
   *             </li>
   *             <li>
   *                <p>Must contain at least one lowercase letter.</p>
   *             </li>
   *             <li>
   *                <p>Must contain one number.</p>
   *             </li>
   *             <li>
   *                <p>Can be any printable ASCII character (ASCII code 33-126) except <code>'</code>
   *                     (single quote), <code>"</code> (double quote), <code>\</code>, <code>/</code>, or <code>@</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>A list of security groups to be associated with this cluster.</p>
   *          <p>Default: The default cluster security group for Amazon Redshift.</p>
   * @public
   */
  ClusterSecurityGroups?: string[] | undefined;

  /**
   * <p>A list of Virtual Private Cloud (VPC) security groups to be associated with the
   *             cluster.</p>
   *          <p>Default: The default VPC security group is associated with the cluster.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The name of a cluster subnet group to be associated with this cluster.</p>
   *          <p>If this parameter is not provided the resulting cluster will be deployed outside
   *             virtual private cloud (VPC).</p>
   * @public
   */
  ClusterSubnetGroupName?: string | undefined;

  /**
   * <p>The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the
   *             cluster. For example, if you have several EC2 instances running in a specific
   *             Availability Zone, then you might want the cluster to be provisioned in the same zone in
   *             order to decrease network latency.</p>
   *          <p>Default: A random, system-chosen Availability Zone in the region that is specified
   *             by the endpoint.</p>
   *          <p>Example: <code>us-east-2d</code>
   *          </p>
   *          <p>Constraint: The specified Availability Zone must be in the same region as the
   *             current endpoint.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The weekly time range (in UTC) during which automated cluster maintenance can
   *             occur.</p>
   *          <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p> Default: A 30-minute window selected at random from an 8-hour block of time per
   *             region, occurring on a random day of the week. For more information about the time
   *             blocks for each region, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows">Maintenance Windows</a> in Amazon Redshift Cluster Management Guide.</p>
   *          <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The name of the parameter group to be associated with this cluster.</p>
   *          <p>Default: The default Amazon Redshift cluster parameter group. For information about the
   *             default parameter group, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Working with Amazon
   *                 Redshift Parameter Groups</a>
   *          </p>
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
   * <p>The number of days that automated snapshots are retained. If the value is 0,
   *             automated snapshots are disabled. Even if automated snapshots are disabled, you can
   *             still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p>
   *          <p>You can't disable automated snapshots for RA3 node types. Set the automated retention period from 1-35 days.</p>
   *          <p>Default: <code>1</code>
   *          </p>
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
   * <p>The port number on which the cluster accepts incoming connections.</p>
   *          <p>The cluster is accessible only via the JDBC and ODBC connection strings. Part of
   *             the connection string requires the port on which the cluster will listen for incoming
   *             connections.</p>
   *          <p>Default: <code>5439</code>
   *          </p>
   *          <p>Valid Values:
   *         </p>
   *          <ul>
   *             <li>
   *                <p>For clusters with ra3 nodes - Select a port within the ranges <code>5431-5455</code> or <code>8191-8215</code>. (If you have an existing cluster
   *                 with ra3 nodes, it isn't required that you change the port to these ranges.)</p>
   *             </li>
   *             <li>
   *                <p>For clusters with dc2 nodes - Select a port within the range <code>1150-65535</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The version of the Amazon Redshift engine software that you want to deploy on the
   *             cluster.</p>
   *          <p>The version selected runs on all the nodes in the cluster.</p>
   *          <p>Constraints: Only version 1.0 is currently available.</p>
   *          <p>Example: <code>1.0</code>
   *          </p>
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * <p>If <code>true</code>, major version upgrades can be applied during the maintenance
   *             window to the Amazon Redshift engine that is running on the cluster.</p>
   *          <p>When a new major version of the Amazon Redshift engine is released, you can request that
   *             the service automatically apply upgrades during the maintenance window to the Amazon Redshift
   *             engine that is running on your cluster.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   * @public
   */
  AllowVersionUpgrade?: boolean | undefined;

  /**
   * <p>The number of compute nodes in the cluster. This parameter is required when the
   *                 <b>ClusterType</b> parameter is specified as
   *                 <code>multi-node</code>. </p>
   *          <p>For information about determining how many nodes you need, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes"> Working with
   *                 Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *          <p>If you don't specify this parameter, you get a single-node cluster. When requesting
   *             a multi-node cluster, you must specify the number of nodes that you want in the
   *             cluster.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   *          <p>Constraints: Value must be at least 1 and no more than 100.</p>
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * <p>If <code>true</code>, the cluster can be accessed from a public network. </p>
   *          <p>Default: false</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>If <code>true</code>, the data in the cluster is encrypted at rest.
   *             If you set the value on this parameter to <code>false</code>, the request will fail.</p>
   *          <p>Default: true</p>
   * @public
   */
  Encrypted?: boolean | undefined;

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
   * <p>The Elastic IP (EIP) address for the cluster.</p>
   *          <p>Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible
   *             through an Internet gateway. Don't specify the Elastic IP address for a publicly accessible
   *             cluster with availability zone relocation turned on. For more information about provisioning clusters in
   *             EC2-VPC, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms">Supported
   *                 Platforms to Launch Your Cluster</a> in the Amazon Redshift Cluster Management Guide.</p>
   * @public
   */
  ElasticIp?: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Key Management Service (KMS) key ID of the encryption key that you want to
   *             use to encrypt data in the cluster.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

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
   * <p>An optional parameter for the name of the maintenance track for the cluster. If you
   *             don't provide a maintenance track name, the cluster is assigned to the
   *                 <code>current</code> track.</p>
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * <p>A unique identifier for the snapshot schedule.</p>
   * @public
   */
  SnapshotScheduleIdentifier?: string | undefined;

  /**
   * <p>The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster is created.</p>
   * @public
   */
  AvailabilityZoneRelocation?: boolean | undefined;

  /**
   * <p>This parameter is retired. It does not set the AQUA configuration status. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).</p>
   * @public
   */
  AquaConfigurationStatus?: AquaConfigurationStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was created. </p>
   * @public
   */
  DefaultIamRoleArn?: string | undefined;

  /**
   * <p>A flag that specifies whether to load sample data once the cluster is created.</p>
   * @public
   */
  LoadSampleData?: string | undefined;

  /**
   * <p>If <code>true</code>, Amazon Redshift uses Secrets Manager to manage this cluster's admin credentials.
   *             You can't use <code>MasterUserPassword</code> if <code>ManageMasterPassword</code> is true.
   *             If <code>ManageMasterPassword</code> is false or not set, Amazon Redshift uses
   *             <code>MasterUserPassword</code> for the admin user account's password.
   *         </p>
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
   * <p>The IP address types that the cluster supports. Possible values are <code>ipv4</code> and <code>dualstack</code>.</p>
   * @public
   */
  IpAddressType?: string | undefined;

  /**
   * <p>If true, Amazon Redshift will deploy the cluster in two Availability Zones (AZ).</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>The Amazon resource name (ARN) of the Amazon Redshift IAM Identity Center application.</p>
   * @public
   */
  RedshiftIdcApplicationArn?: string | undefined;

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
}

/**
 * @public
 */
export interface CreateClusterResult {
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
export interface CreateClusterParameterGroupMessage {
  /**
   * <p>The name of the cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Must be unique withing your Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This value is stored as a lower-case string.</p>
   *          </note>
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>The Amazon Redshift engine version to which the cluster parameter group applies. The
   *             cluster engine version determines the set of parameters.</p>
   *          <p>To get a list of valid parameter group family names, you can call <a>DescribeClusterParameterGroups</a>. By default, Amazon Redshift returns a list of
   *             all the parameter groups that are owned by your Amazon Web Services account, including the default
   *             parameter groups for each Amazon Redshift engine version. The parameter group family names
   *             associated with the default parameter groups provide you the valid values. For example,
   *             a valid family name is "redshift-1.0". </p>
   * @public
   */
  ParameterGroupFamily: string | undefined;

  /**
   * <p>A description of the parameter group.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateClusterParameterGroupResult {
  /**
   * <p>Describes a parameter group.</p>
   * @public
   */
  ClusterParameterGroup?: ClusterParameterGroup | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateClusterSecurityGroupMessage {
  /**
   * <p>The name for the security group. Amazon Redshift stores the value as a lowercase
   *             string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain no more than 255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Must not be "Default".</p>
   *             </li>
   *             <li>
   *                <p>Must be unique for all security groups that are created by your Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>examplesecuritygroup</code>
   *          </p>
   * @public
   */
  ClusterSecurityGroupName: string | undefined;

  /**
   * <p>A description for the security group.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateClusterSecurityGroupResult {
  /**
   * <p>Describes a security group.</p>
   * @public
   */
  ClusterSecurityGroup?: ClusterSecurityGroup | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateClusterSnapshotMessage {
  /**
   * <p>A unique identifier for the snapshot that you are requesting. This identifier must
   *             be unique for all snapshots within the Amazon Web Services account.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Cannot be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-snapshot-id</code>
   *          </p>
   * @public
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The cluster identifier for which you want a snapshot.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely. </p>
   *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *          <p>The default value is -1.</p>
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>A list of tag instances.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateClusterSnapshotResult {
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
export interface CreateClusterSubnetGroupMessage {
  /**
   * <p>The name for the subnet group. Amazon Redshift stores the value as a lowercase
   *             string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain no more than 255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Must not be "Default".</p>
   *             </li>
   *             <li>
   *                <p>Must be unique for all subnet groups that are created by your Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>examplesubnetgroup</code>
   *          </p>
   * @public
   */
  ClusterSubnetGroupName: string | undefined;

  /**
   * <p>A description for the subnet group.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>An array of VPC subnet IDs. A maximum of 20 subnets can be modified in a single
   *             request.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of tag instances.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateClusterSubnetGroupResult {
  /**
   * <p>Describes a subnet group.</p>
   * @public
   */
  ClusterSubnetGroup?: ClusterSubnetGroup | undefined;
}

/**
 * @public
 */
export interface CreateCustomDomainAssociationMessage {
  /**
   * <p>The custom domain name for a custom domain association.</p>
   * @public
   */
  CustomDomainName: string | undefined;

  /**
   * <p>The certificate Amazon Resource Name (ARN) for the custom domain name association.</p>
   * @public
   */
  CustomDomainCertificateArn: string | undefined;

  /**
   * <p>The cluster identifier that the custom domain is associated with.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomDomainAssociationResult {
  /**
   * <p>The custom domain name for the association result.</p>
   * @public
   */
  CustomDomainName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the certificate associated with the custom domain name.</p>
   * @public
   */
  CustomDomainCertificateArn?: string | undefined;

  /**
   * <p>The identifier of the cluster that the custom domain is associated with.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The expiration time for the certificate for the custom domain.</p>
   * @public
   */
  CustomDomainCertExpiryTime?: string | undefined;
}

/**
 * @public
 */
export interface CreateEndpointAccessMessage {
  /**
   * <p>The cluster identifier of the cluster to access.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the cluster. This is only required if the cluster is in another Amazon Web Services account.</p>
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * <p>The Redshift-managed VPC endpoint name.</p>
   *          <p>An endpoint name must contain 1-30 characters.
   *           Valid characters are A-Z, a-z, 0-9, and hyphen(-).
   *           The first character must be a letter.
   *           The name can't contain two consecutive hyphens or end with a hyphen.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The subnet group from which Amazon Redshift chooses the subnet to deploy the endpoint.</p>
   * @public
   */
  SubnetGroupName: string | undefined;

  /**
   * <p>The security group that defines the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;
}

/**
 * <p>Describes a Redshift-managed VPC endpoint.</p>
 * @public
 */
export interface EndpointAccess {
  /**
   * <p>The cluster identifier of the cluster associated with the endpoint.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the cluster.</p>
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * <p>The subnet group name where Amazon Redshift chooses to deploy the endpoint.</p>
   * @public
   */
  SubnetGroupName?: string | undefined;

  /**
   * <p>The status of the endpoint.</p>
   * @public
   */
  EndpointStatus?: string | undefined;

  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>The time (UTC) that the endpoint was created.</p>
   * @public
   */
  EndpointCreateTime?: Date | undefined;

  /**
   * <p>The port number on which the cluster accepts incoming connections.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The DNS address of the endpoint.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>The security groups associated with the endpoint.</p>
   * @public
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * <p>The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.</p>
   * @public
   */
  VpcEndpoint?: VpcEndpoint | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateEventSubscriptionMessage {
  /**
   * <p>The name of the event subscription to be created.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Cannot be null, empty, or blank.</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 alphanumeric characters or hyphens.</p>
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
  SubscriptionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event
   *             notifications. The ARN is created by Amazon SNS when you create a topic and subscribe to
   *             it.</p>
   * @public
   */
  SnsTopicArn: string | undefined;

  /**
   * <p>The type of source that will be generating the events. For example, if you want to
   *             be notified of events generated by a cluster, you would set this parameter to cluster.
   *             If this value is not specified, events are returned for all Amazon Redshift objects in your
   *             Amazon Web Services account. You must specify a source type in order to specify source IDs.</p>
   *          <p>Valid values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot, and scheduled-action.</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>A list of one or more identifiers of Amazon Redshift source objects. All of the objects
   *             must be of the same type as was specified in the source type parameter. The event
   *             subscription will return only events generated by the specified objects. If not
   *             specified, then events are returned for all objects within the source type
   *             specified.</p>
   *          <p>Example: my-cluster-1, my-cluster-2</p>
   *          <p>Example: my-snapshot-20131010</p>
   * @public
   */
  SourceIds?: string[] | undefined;

  /**
   * <p>Specifies the Amazon Redshift event categories to be published by the event notification
   *             subscription.</p>
   *          <p>Values: configuration, management, monitoring, security, pending</p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p>Specifies the Amazon Redshift event severity to be published by the event notification
   *             subscription.</p>
   *          <p>Values: ERROR, INFO</p>
   * @public
   */
  Severity?: string | undefined;

  /**
   * <p>A boolean value; set to <code>true</code> to activate the subscription, and set to
   *                 <code>false</code> to create the subscription but not activate it. </p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>A list of tag instances.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Describes event subscriptions.</p>
 * @public
 */
export interface EventSubscription {
  /**
   * <p>The Amazon Web Services account associated with the Amazon Redshift event notification
   *             subscription.</p>
   * @public
   */
  CustomerAwsId?: string | undefined;

  /**
   * <p>The name of the Amazon Redshift event notification subscription.</p>
   * @public
   */
  CustSubscriptionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic used by the event
   *             notification subscription.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>The status of the Amazon Redshift event notification subscription.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can be one of the following: active | no-permission |
   *                     topic-not-exist</p>
   *             </li>
   *             <li>
   *                <p>The status "no-permission" indicates that Amazon Redshift no longer has
   *                     permission to post to the Amazon SNS topic. The status "topic-not-exist"
   *                     indicates that the topic was deleted after the subscription was
   *                     created.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The date and time the Amazon Redshift event notification subscription was
   *             created.</p>
   * @public
   */
  SubscriptionCreationTime?: Date | undefined;

  /**
   * <p>The source type of the events returned by the Amazon Redshift event notification, such as
   *             cluster, cluster-snapshot, cluster-parameter-group, cluster-security-group, or scheduled-action. </p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>A list of the sources that publish events to the Amazon Redshift event notification
   *             subscription.</p>
   * @public
   */
  SourceIdsList?: string[] | undefined;

  /**
   * <p>The list of Amazon Redshift event categories specified in the event notification
   *             subscription.</p>
   *          <p>Values: Configuration, Management, Monitoring, Security, Pending</p>
   * @public
   */
  EventCategoriesList?: string[] | undefined;

  /**
   * <p>The event severity specified in the Amazon Redshift event notification
   *             subscription.</p>
   *          <p>Values: ERROR, INFO</p>
   * @public
   */
  Severity?: string | undefined;

  /**
   * <p>A boolean value indicating whether the subscription is enabled; <code>true</code>
   *             indicates that the subscription is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The list of tags for the event subscription.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateEventSubscriptionResult {
  /**
   * <p>Describes event subscriptions.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateHsmClientCertificateMessage {
  /**
   * <p>The identifier to be assigned to the new HSM client certificate that the cluster
   *             will use to connect to the HSM to use the database encryption keys.</p>
   * @public
   */
  HsmClientCertificateIdentifier: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Returns information about an HSM client certificate. The certificate is stored in a
 *             secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data
 *             files.</p>
 * @public
 */
export interface HsmClientCertificate {
  /**
   * <p>The identifier of the HSM client certificate.</p>
   * @public
   */
  HsmClientCertificateIdentifier?: string | undefined;

  /**
   * <p>The public key that the Amazon Redshift cluster will use to connect to the HSM. You must
   *             register the public key in the HSM.</p>
   * @public
   */
  HsmClientCertificatePublicKey?: string | undefined;

  /**
   * <p>The list of tags for the HSM client certificate.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateHsmClientCertificateResult {
  /**
   * <p>Returns information about an HSM client certificate. The certificate is stored in a
   *             secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data
   *             files.</p>
   * @public
   */
  HsmClientCertificate?: HsmClientCertificate | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface CreateHsmConfigurationMessage {
  /**
   * <p>The identifier to be assigned to the new Amazon Redshift HSM configuration.</p>
   * @public
   */
  HsmConfigurationIdentifier: string | undefined;

  /**
   * <p>A text description of the HSM configuration to be created.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The IP address that the Amazon Redshift cluster must use to access the HSM.</p>
   * @public
   */
  HsmIpAddress: string | undefined;

  /**
   * <p>The name of the partition in the HSM where the Amazon Redshift clusters will store their
   *             database encryption keys.</p>
   * @public
   */
  HsmPartitionName: string | undefined;

  /**
   * <p>The password required to access the HSM partition.</p>
   * @public
   */
  HsmPartitionPassword: string | undefined;

  /**
   * <p>The HSMs public certificate file. When using Cloud HSM, the file name is
   *             server.pem.</p>
   * @public
   */
  HsmServerPublicCertificate: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Returns information about an HSM configuration, which is an object that describes
 *             to Amazon Redshift clusters the information they require to connect to an HSM where they can
 *             store database encryption keys.</p>
 * @public
 */
export interface HsmConfiguration {
  /**
   * <p>The name of the Amazon Redshift HSM configuration.</p>
   * @public
   */
  HsmConfigurationIdentifier?: string | undefined;

  /**
   * <p>A text description of the HSM configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The IP address that the Amazon Redshift cluster must use to access the HSM.</p>
   * @public
   */
  HsmIpAddress?: string | undefined;

  /**
   * <p>The name of the partition in the HSM where the Amazon Redshift clusters will store their
   *             database encryption keys.</p>
   * @public
   */
  HsmPartitionName?: string | undefined;

  /**
   * <p>The list of tags for the HSM configuration.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateHsmConfigurationResult {
  /**
   * <p>Returns information about an HSM configuration, which is an object that describes
   *             to Amazon Redshift clusters the information they require to connect to an HSM where they can
   *             store database encryption keys.</p>
   * @public
   */
  HsmConfiguration?: HsmConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the database to use as the source for replication.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Redshift data warehouse to use as the target for replication.</p>
   * @public
   */
  TargetArn: string | undefined;

  /**
   * <p>The name of the integration.</p>
   * @public
   */
  IntegrationName: string | undefined;

  /**
   * <p>An Key Management Service (KMS) key identifier for the key to use to
   *             encrypt the integration. If you don't specify an encryption key, the default
   *             Amazon Web Services owned key is used.</p>
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * <p>A list of tags.</p>
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * <p>An optional set of non-secret key–value pairs that contains additional contextual
   *             information about the data. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption
   *                 context</a> in the <i>Amazon Web Services Key Management Service Developer
   *                     Guide</i>.</p>
   *          <p>You can only include this parameter if you specify the <code>KMSKeyId</code> parameter.</p>
   * @public
   */
  AdditionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>A description of the integration.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>The error of an inbound integration.</p>
 * @public
 */
export interface IntegrationError {
  /**
   * <p>The error code of an inbound integration error.</p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message of an inbound integration error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface Integration {
  /**
   * <p>The Amazon Resource Name (ARN) of the integration.</p>
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * <p>The name of the integration.</p>
   * @public
   */
  IntegrationName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the database used as the source for
   *             replication.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Redshift data warehouse to use as the target for replication.</p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The current status of the integration.</p>
   * @public
   */
  Status?: ZeroETLIntegrationStatus | undefined;

  /**
   * <p>Any errors associated with the integration.</p>
   * @public
   */
  Errors?: IntegrationError[] | undefined;

  /**
   * <p>The time (UTC) when the integration was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The description of the integration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Key Management Service (KMS) key identifier for the key used to
   *             encrypt the integration.</p>
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * <p>The encryption context for the integration. For more information,
   *             see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption context</a> in the <i>Amazon Web Services Key Management Service Developer
   *                 Guide</i>.</p>
   * @public
   */
  AdditionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>The list of tags associated with the integration.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The Lake Formation scope.</p>
 * @public
 */
export interface LakeFormationQuery {
  /**
   * <p>Determines whether the query scope is enabled or disabled.</p>
   * @public
   */
  Authorization: ServiceAuthorization | undefined;
}

/**
 * <p>A list of scopes set up for Lake Formation integration.</p>
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
   * <p>The Lake Formation scope.</p>
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
 * <p>A union structure that defines the scope of Amazon Redshift service integrations. Contains configuration for different integration types such as Amazon Redshift.</p>
 * @public
 */
export type RedshiftScopeUnion = RedshiftScopeUnion.ConnectMember | RedshiftScopeUnion.$UnknownMember;

/**
 * @public
 */
export namespace RedshiftScopeUnion {
  /**
   * <p>The Amazon Redshift connect integration scope configuration. Defines authorization settings for Amazon Redshift connect service integration.</p>
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
 * <p>The S3 Access Grants scope.</p>
 * @public
 */
export interface ReadWriteAccess {
  /**
   * <p>Determines whether the read/write scope is enabled or disabled.</p>
   * @public
   */
  Authorization: ServiceAuthorization | undefined;
}

/**
 * <p>A list of scopes set up for S3 Access Grants integration.</p>
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
   * <p>The S3 Access Grants scope.</p>
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
 * <p>A list of service integrations.</p>
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
   * <p>A list of scopes set up for Lake Formation integration.</p>
   * @public
   */
  export interface LakeFormationMember {
    LakeFormation: LakeFormationScopeUnion[];
    S3AccessGrants?: never;
    Redshift?: never;
    $unknown?: never;
  }

  /**
   * <p>A list of scopes set up for S3 Access Grants integration.</p>
   * @public
   */
  export interface S3AccessGrantsMember {
    LakeFormation?: never;
    S3AccessGrants: S3AccessGrantsScopeUnion[];
    Redshift?: never;
    $unknown?: never;
  }

  /**
   * <p>A list of scopes set up for Amazon Redshift integration.</p>
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
   * <p>The Amazon resource name (ARN) of the IAM Identity Center instance where Amazon Redshift creates a new managed application.</p>
   * @public
   */
  IdcInstanceArn: string | undefined;

  /**
   * <p>The name of the Redshift application in IAM Identity Center.</p>
   * @public
   */
  RedshiftIdcApplicationName: string | undefined;

  /**
   * <p>The namespace for the Amazon Redshift IAM Identity Center application instance. It determines which managed application
   *             verifies the connection token.</p>
   * @public
   */
  IdentityNamespace?: string | undefined;

  /**
   * <p>The display name for the Amazon Redshift IAM Identity Center application instance. It appears in the console.</p>
   * @public
   */
  IdcDisplayName: string | undefined;

  /**
   * <p>The IAM role ARN for the Amazon Redshift IAM Identity Center application instance. It has the required permissions
   *             to be assumed and invoke the IDC Identity Center API.</p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The token issuer list for the Amazon Redshift IAM Identity Center application instance.</p>
   * @public
   */
  AuthorizedTokenIssuerList?: AuthorizedTokenIssuer[] | undefined;

  /**
   * <p>A collection of service integrations for the Redshift IAM Identity Center application.</p>
   * @public
   */
  ServiceIntegrations?: ServiceIntegrationsUnion[] | undefined;

  /**
   * <p>The type of application being created. Valid values are <code>None</code> or <code>Lakehouse</code>. Use <code>Lakehouse</code> to enable Amazon Redshift federated permissions on cluster.</p>
   * @public
   */
  ApplicationType?: ApplicationType | undefined;

  /**
   * <p>A list of tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A list of tags keys that Redshift Identity Center applications copy to IAM Identity
   *             Center. For each input key, the tag corresponding to the key-value pair is
   *             propagated.</p>
   * @public
   */
  SsoTagKeys?: string[] | undefined;
}

/**
 * <p>Contains properties for the Redshift IDC application.</p>
 * @public
 */
export interface RedshiftIdcApplication {
  /**
   * <p>The ARN for the IAM Identity Center instance that Redshift integrates with.</p>
   * @public
   */
  IdcInstanceArn?: string | undefined;

  /**
   * <p>The name of the Redshift application in IAM Identity Center.</p>
   * @public
   */
  RedshiftIdcApplicationName?: string | undefined;

  /**
   * <p>The ARN for the Redshift application that integrates with IAM Identity Center.</p>
   * @public
   */
  RedshiftIdcApplicationArn?: string | undefined;

  /**
   * <p>The identity namespace for the Amazon Redshift IAM Identity Center application. It determines which managed application verifies the connection token.</p>
   * @public
   */
  IdentityNamespace?: string | undefined;

  /**
   * <p>The display name for the Amazon Redshift IAM Identity Center application. It appears on the console.</p>
   * @public
   */
  IdcDisplayName?: string | undefined;

  /**
   * <p>The ARN for the Amazon Redshift IAM Identity Center application. It has the required permissions to be assumed and invoke the IDC Identity Center API.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>The ARN for the Amazon Redshift IAM Identity Center application.</p>
   * @public
   */
  IdcManagedApplicationArn?: string | undefined;

  /**
   * <p>The onboarding status for the Amazon Redshift IAM Identity Center application.</p>
   * @public
   */
  IdcOnboardStatus?: string | undefined;

  /**
   * <p>The authorized token issuer list for the Amazon Redshift IAM Identity Center application.</p>
   * @public
   */
  AuthorizedTokenIssuerList?: AuthorizedTokenIssuer[] | undefined;

  /**
   * <p>A list of service integrations for the Redshift IAM Identity Center application.</p>
   * @public
   */
  ServiceIntegrations?: ServiceIntegrationsUnion[] | undefined;

  /**
   * <p>The type of application being created. Valid values are <code>None</code> or <code>Lakehouse</code>. Use <code>Lakehouse</code> to enable Amazon Redshift federated permissions on cluster.</p>
   * @public
   */
  ApplicationType?: ApplicationType | undefined;

  /**
   * <p>A list of tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A list of tags keys that Redshift Identity Center applications copy to IAM Identity
   *             Center. For each input key, the tag corresponding to the key-value pair is
   *             propagated.</p>
   * @public
   */
  SsoTagKeys?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateRedshiftIdcApplicationResult {
  /**
   * <p>Contains properties for the Redshift IDC application.</p>
   * @public
   */
  RedshiftIdcApplication?: RedshiftIdcApplication | undefined;
}

/**
 * <p>Describes a pause cluster operation. For example, a scheduled action to run the <code>PauseCluster</code> API operation. </p>
 * @public
 */
export interface PauseClusterMessage {
  /**
   * <p>The identifier of the cluster to be paused.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * <p>Describes a resize cluster operation. For example, a scheduled action to run the <code>ResizeCluster</code> API operation. </p>
 * @public
 */
export interface ResizeClusterMessage {
  /**
   * <p>The unique identifier for the cluster to resize.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The new cluster type for the specified cluster.</p>
   * @public
   */
  ClusterType?: string | undefined;

  /**
   * <p>The new node type for the nodes you are adding. If not specified, the cluster's current node type is used.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The new number of nodes for the cluster. If not specified, the cluster's current number of nodes is used.</p>
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * <p>A boolean value indicating whether the resize operation is using the classic resize
   *             process. If you don't provide this parameter or set the value to
   *             <code>false</code>, the resize type is elastic. </p>
   * @public
   */
  Classic?: boolean | undefined;

  /**
   * <p>The identifier of the reserved node.</p>
   * @public
   */
  ReservedNodeId?: string | undefined;

  /**
   * <p>The identifier of the target reserved node offering.</p>
   * @public
   */
  TargetReservedNodeOfferingId?: string | undefined;
}

/**
 * <p>Describes a resume cluster operation. For example, a scheduled action to run the <code>ResumeCluster</code> API operation. </p>
 * @public
 */
export interface ResumeClusterMessage {
  /**
   * <p>The identifier of the cluster to be resumed.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * <p>The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler. </p>
 * @public
 */
export interface ScheduledActionType {
  /**
   * <p>An action that runs a <code>ResizeCluster</code> API operation. </p>
   * @public
   */
  ResizeCluster?: ResizeClusterMessage | undefined;

  /**
   * <p>An action that runs a <code>PauseCluster</code> API operation. </p>
   * @public
   */
  PauseCluster?: PauseClusterMessage | undefined;

  /**
   * <p>An action that runs a <code>ResumeCluster</code> API operation. </p>
   * @public
   */
  ResumeCluster?: ResumeClusterMessage | undefined;
}

/**
 * @public
 */
export interface CreateScheduledActionMessage {
  /**
   * <p>The name of the scheduled action. The name must be unique within an account.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   * @public
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>A JSON format string of the Amazon Redshift API operation with input parameters.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   * @public
   */
  TargetAction: ScheduledActionType | undefined;

  /**
   * <p>The schedule in <code>at( )</code> or <code>cron( )</code> format.
   *             For more information about this parameter, see <a>ScheduledAction</a>.</p>
   * @public
   */
  Schedule: string | undefined;

  /**
   * <p>The IAM role to assume to run the target action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   * @public
   */
  IamRole: string | undefined;

  /**
   * <p>The description of the scheduled action.
   *             </p>
   * @public
   */
  ScheduledActionDescription?: string | undefined;

  /**
   * <p>The start time in UTC of the scheduled action.
   *             Before this time, the scheduled action does not trigger.
   *             For more information about this parameter, see <a>ScheduledAction</a>.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>If true, the schedule is enabled. If false, the scheduled action does not trigger.
   *             For more information about <code>state</code> of the scheduled action, see <a>ScheduledAction</a>. </p>
   * @public
   */
  Enable?: boolean | undefined;
}

/**
 * <p>Describes a scheduled action. You can use a scheduled action to trigger some Amazon Redshift API operations on a schedule.
 *             For information about which API operations can be scheduled, see  <a>ScheduledActionType</a>. </p>
 * @public
 */
export interface ScheduledAction {
  /**
   * <p>The name of the scheduled action. </p>
   * @public
   */
  ScheduledActionName?: string | undefined;

  /**
   * <p>A JSON format string of the Amazon Redshift API operation with input parameters. </p>
   *          <p>"<code>\{\"ResizeCluster\":\{\"NodeType\":\"ra3.4xlarge\",\"ClusterIdentifier\":\"my-test-cluster\",\"NumberOfNodes\":3\}\}</code>". </p>
   * @public
   */
  TargetAction?: ScheduledActionType | undefined;

  /**
   * <p>The schedule for a one-time (at format) or recurring (cron format) scheduled action.
   *             Schedule invocations must be separated by at least one hour.</p>
   *          <p>Format of at expressions is "<code>at(yyyy-mm-ddThh:mm:ss)</code>". For example, "<code>at(2016-03-04T17:27:00)</code>".</p>
   *          <p>Format of cron expressions is "<code>cron(Minutes Hours Day-of-month Month Day-of-week Year)</code>".
   *             For example, "<code>cron(0 10 ? * MON *)</code>". For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions">Cron Expressions</a>
   *             in the <i>Amazon CloudWatch Events User Guide</i>.</p>
   * @public
   */
  Schedule?: string | undefined;

  /**
   * <p>The IAM role to assume to run the scheduled action.
   *             This IAM role must have permission to run the Amazon Redshift API operation in the scheduled action.
   *             This IAM role must allow the Amazon Redshift scheduler (Principal scheduler.redshift.amazonaws.com) to assume permissions on your behalf.
   *
   * For more information about the IAM role to use with the Amazon Redshift scheduler, see
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using Identity-Based Policies for Amazon Redshift</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.
   * </p>
   * @public
   */
  IamRole?: string | undefined;

  /**
   * <p>The description of the scheduled action. </p>
   * @public
   */
  ScheduledActionDescription?: string | undefined;

  /**
   * <p>The state of the scheduled action. For example, <code>DISABLED</code>. </p>
   * @public
   */
  State?: ScheduledActionState | undefined;

  /**
   * <p>List of times when the scheduled action will run. </p>
   * @public
   */
  NextInvocations?: Date[] | undefined;

  /**
   * <p>The start time in UTC when the schedule is active. Before this time, the scheduled action does not trigger. </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time in UTC when the schedule is no longer active. After this time, the scheduled action does not trigger. </p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * <p>The result of the <code>CreateSnapshotCopyGrant</code> action.</p>
 * @public
 */
export interface CreateSnapshotCopyGrantMessage {
  /**
   * <p>The name of the snapshot copy grant. This name must be unique in the region for the
   *             Amazon Web Services account.</p>
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
  SnapshotCopyGrantName: string | undefined;

  /**
   * <p>The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift
   *             permission. If no key is specified, the default key is used.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied
 *             snapshots with the specified encrypted symmetric key from Amazon Web Services KMS in the destination
 *             region.</p>
 *          <p>
 * For more information about managing snapshot copy grants, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export interface SnapshotCopyGrant {
  /**
   * <p>The name of the snapshot copy grant.</p>
   * @public
   */
  SnapshotCopyGrantName?: string | undefined;

  /**
   * <p>The unique identifier of the encrypted symmetric key in Amazon Web Services KMS to which
   *             Amazon Redshift is granted permission.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotCopyGrantResult {
  /**
   * <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied
   *             snapshots with the specified encrypted symmetric key from Amazon Web Services KMS in the destination
   *             region.</p>
   *          <p>
   * For more information about managing snapshot copy grants, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.
   * </p>
   * @public
   */
  SnapshotCopyGrant?: SnapshotCopyGrant | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotScheduleMessage {
  /**
   * <p>The definition of the snapshot schedule. The definition is made up of schedule
   *             expressions, for example "cron(30 12 *)" or "rate(12 hours)". </p>
   * @public
   */
  ScheduleDefinitions?: string[] | undefined;

  /**
   * <p>A unique identifier for a snapshot schedule. Only alphanumeric characters are allowed
   *             for the identifier.</p>
   * @public
   */
  ScheduleIdentifier?: string | undefined;

  /**
   * <p>The description of the snapshot schedule.</p>
   * @public
   */
  ScheduleDescription?: string | undefined;

  /**
   * <p>An optional set of tags you can use to search for the schedule.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p></p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p></p>
   * @public
   */
  NextInvocations?: number | undefined;
}

/**
 * <p>Describes a snapshot schedule. You can set a regular interval for creating
 *             snapshots of a cluster. You can also schedule snapshots for specific dates. </p>
 * @public
 */
export interface SnapshotSchedule {
  /**
   * <p>A list of ScheduleDefinitions.</p>
   * @public
   */
  ScheduleDefinitions?: string[] | undefined;

  /**
   * <p>A unique identifier for the schedule.</p>
   * @public
   */
  ScheduleIdentifier?: string | undefined;

  /**
   * <p>The description of the schedule.</p>
   * @public
   */
  ScheduleDescription?: string | undefined;

  /**
   * <p>An optional set of tags describing the schedule.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p></p>
   * @public
   */
  NextInvocations?: Date[] | undefined;

  /**
   * <p>The number of clusters associated with the schedule.</p>
   * @public
   */
  AssociatedClusterCount?: number | undefined;

  /**
   * <p>A list of clusters associated with the schedule. A maximum of 100 clusters is returned.</p>
   * @public
   */
  AssociatedClusters?: ClusterAssociatedToSchedule[] | undefined;
}

/**
 * <p>Contains the output from the <code>CreateTags</code> action. </p>
 * @public
 */
export interface CreateTagsMessage {
  /**
   * <p>The Amazon Resource Name (ARN) to which you want to add the tag or tags. For
   *             example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>. </p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>One or more name/value pairs to add as tags to the specified resource. Each tag
   *             name is passed in with the parameter <code>Key</code> and the corresponding value is
   *             passed in with the parameter <code>Value</code>. The <code>Key</code> and
   *                 <code>Value</code> parameters are separated by a comma (,). Separate multiple tags
   *             with a space. For example, <code>--tags "Key"="owner","Value"="admin"
   *                 "Key"="environment","Value"="test" "Key"="version","Value"="1.0"</code>. </p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateUsageLimitMessage {
  /**
   * <p>The identifier of the cluster that you want to limit usage.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Redshift feature that you want to limit.</p>
   * @public
   */
  FeatureType: UsageLimitFeatureType | undefined;

  /**
   * <p>The type of limit. Depending on the feature type, this can be based on a time duration or data size.
   *             If <code>FeatureType</code> is <code>spectrum</code>, then <code>LimitType</code> must be <code>data-scanned</code>.
   *             If <code>FeatureType</code> is <code>concurrency-scaling</code>, then <code>LimitType</code> must be <code>time</code>.
   *             If <code>FeatureType</code> is <code>cross-region-datasharing</code>, then <code>LimitType</code> must be <code>data-scanned</code>.
   *            </p>
   * @public
   */
  LimitType: UsageLimitLimitType | undefined;

  /**
   * <p>The limit amount. If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB).
   *             The value must be a positive number.
   *             </p>
   * @public
   */
  Amount: number | undefined;

  /**
   * <p>The time period that the amount applies to. A <code>weekly</code> period begins on Sunday. The default is <code>monthly</code>.
   *             </p>
   * @public
   */
  Period?: UsageLimitPeriod | undefined;

  /**
   * <p>The action that Amazon Redshift takes when the limit is reached. The default is log.
   *             For more information about this parameter, see <a>UsageLimit</a>.</p>
   * @public
   */
  BreachAction?: UsageLimitBreachAction | undefined;

  /**
   * <p>A list of tag instances.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Describes a usage limit object for a cluster. </p>
 * @public
 */
export interface UsageLimit {
  /**
   * <p>The identifier of the usage limit.</p>
   * @public
   */
  UsageLimitId?: string | undefined;

  /**
   * <p>The identifier of the cluster with a usage limit.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Redshift feature to which the limit applies.</p>
   * @public
   */
  FeatureType?: UsageLimitFeatureType | undefined;

  /**
   * <p>The type of limit. Depending on the feature type, this can be based on a time duration or data size.</p>
   * @public
   */
  LimitType?: UsageLimitLimitType | undefined;

  /**
   * <p>The limit amount. If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB).</p>
   * @public
   */
  Amount?: number | undefined;

  /**
   * <p>The time period that the amount applies to. A <code>weekly</code> period begins on Sunday. The default is <code>monthly</code>. </p>
   * @public
   */
  Period?: UsageLimitPeriod | undefined;

  /**
   * <p>The action that Amazon Redshift takes when the limit is reached. Possible values are: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>log</b> - To log an event in a system table. The default is log.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>emit-metric</b> - To emit CloudWatch metrics.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>disable</b> - To disable the feature until the next usage period begins.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BreachAction?: UsageLimitBreachAction | undefined;

  /**
   * <p>A list of tag instances.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CustomDomainAssociationsMessage {
  /**
   * <p>The marker for the custom domain association.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The associations for the custom domain.</p>
   * @public
   */
  Associations?: Association[] | undefined;
}

/**
 * @public
 */
export interface CustomerStorageMessage {
  /**
   * <p>The total amount of storage currently used for snapshots.</p>
   * @public
   */
  TotalBackupSizeInMegaBytes?: number | undefined;

  /**
   * <p>The total amount of storage currently provisioned.</p>
   * @public
   */
  TotalProvisionedStorageInMegaBytes?: number | undefined;
}

/**
 * @public
 */
export interface DeauthorizeDataShareMessage {
  /**
   * <p>The namespace Amazon Resource Name (ARN) of the datashare to remove authorization from.</p>
   * @public
   */
  DataShareArn: string | undefined;

  /**
   * <p>The identifier of the data consumer that is to have authorization removed from the datashare.
   *             This identifier is an Amazon Web Services account ID or a keyword, such as ADX.</p>
   * @public
   */
  ConsumerIdentifier: string | undefined;
}

/**
 * <p>Describes the default cluster parameters for a parameter group family.</p>
 * @public
 */
export interface DefaultClusterParameters {
  /**
   * <p>The name of the cluster parameter group family to which the engine default
   *             parameters apply.</p>
   * @public
   */
  ParameterGroupFamily?: string | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The list of cluster default parameters.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface DeleteAuthenticationProfileMessage {
  /**
   * <p>The name of the authentication profile to delete.</p>
   * @public
   */
  AuthenticationProfileName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAuthenticationProfileResult {
  /**
   * <p>The name of the authentication profile that was deleted.</p>
   * @public
   */
  AuthenticationProfileName?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteClusterMessage {
  /**
   * <p>The identifier of the cluster to be deleted.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain lowercase characters.</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
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
  ClusterIdentifier: string | undefined;

  /**
   * <p>Determines whether a final snapshot of the cluster is created before Amazon Redshift
   *             deletes the cluster. If <code>true</code>, a final cluster snapshot is not created. If
   *                 <code>false</code>, a final cluster snapshot is created before the cluster is
   *             deleted. </p>
   *          <note>
   *             <p>The <i>FinalClusterSnapshotIdentifier</i> parameter must be
   *                 specified if <i>SkipFinalClusterSnapshot</i> is
   *                 <code>false</code>.</p>
   *          </note>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  SkipFinalClusterSnapshot?: boolean | undefined;

  /**
   * <p>The identifier of the final snapshot that is to be created immediately before
   *             deleting the cluster. If this parameter is provided,
   *                 <i>SkipFinalClusterSnapshot</i> must be <code>false</code>. </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 alphanumeric characters.</p>
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
  FinalClusterSnapshotIdentifier?: string | undefined;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely.</p>
   *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *          <p>The default value is -1.</p>
   * @public
   */
  FinalClusterSnapshotRetentionPeriod?: number | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResult {
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
export interface DeleteClusterParameterGroupMessage {
  /**
   * <p>The name of the parameter group to be deleted.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be the name of an existing cluster parameter group.</p>
   *             </li>
   *             <li>
   *                <p>Cannot delete a default cluster parameter group.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ParameterGroupName: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteClusterSecurityGroupMessage {
  /**
   * <p>The name of the cluster security group to be deleted.</p>
   * @public
   */
  ClusterSecurityGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterSnapshotResult {
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
export interface DeleteClusterSubnetGroupMessage {
  /**
   * <p>The name of the cluster subnet group name to be deleted.</p>
   * @public
   */
  ClusterSubnetGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomDomainAssociationMessage {
  /**
   * <p>The identifier of the cluster to delete a custom domain association for.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The custom domain name for the custom domain association.</p>
   * @public
   */
  CustomDomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointAccessMessage {
  /**
   * <p>The Redshift-managed VPC endpoint to delete.</p>
   * @public
   */
  EndpointName: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteEventSubscriptionMessage {
  /**
   * <p>The name of the Amazon Redshift event notification subscription to be deleted.</p>
   * @public
   */
  SubscriptionName: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteHsmClientCertificateMessage {
  /**
   * <p>The identifier of the HSM client certificate to be deleted.</p>
   * @public
   */
  HsmClientCertificateIdentifier: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteHsmConfigurationMessage {
  /**
   * <p>The identifier of the Amazon Redshift HSM configuration to be deleted.</p>
   * @public
   */
  HsmConfigurationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationMessage {
  /**
   * <p>The unique identifier of the integration to delete.</p>
   * @public
   */
  IntegrationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRedshiftIdcApplicationMessage {
  /**
   * <p>The ARN for a deleted Amazon Redshift IAM Identity Center application.</p>
   * @public
   */
  RedshiftIdcApplicationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource of which its resource policy is deleted.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduledActionMessage {
  /**
   * <p>The name of the scheduled action to delete. </p>
   * @public
   */
  ScheduledActionName: string | undefined;
}

/**
 * <p>The result of the <code>DeleteSnapshotCopyGrant</code> action.</p>
 * @public
 */
export interface DeleteSnapshotCopyGrantMessage {
  /**
   * <p>The name of the snapshot copy grant to delete.</p>
   * @public
   */
  SnapshotCopyGrantName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotScheduleMessage {
  /**
   * <p>A unique identifier of the snapshot schedule to delete.</p>
   * @public
   */
  ScheduleIdentifier: string | undefined;
}

/**
 * <p>Contains the output from the <code>DeleteTags</code> action. </p>
 * @public
 */
export interface DeleteTagsMessage {
  /**
   * <p>The Amazon Resource Name (ARN) from which you want to remove the tag or tags. For
   *             example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>. </p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>The tag key that you want to delete.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteUsageLimitMessage {
  /**
   * <p>The identifier of the usage limit to delete.</p>
   * @public
   */
  UsageLimitId: string | undefined;
}

/**
 * <p>The identifier for a provisioned cluster.</p>
 * @public
 */
export interface ProvisionedIdentifier {
  /**
   * <p>The unique identifier for the provisioned cluster.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * <p>The identifier for a serverless namespace.</p>
 * @public
 */
export interface ServerlessIdentifier {
  /**
   * <p>The unique identifier for the serverless namespace.</p>
   * @public
   */
  NamespaceIdentifier: string | undefined;

  /**
   * <p>The unique identifier for the workgroup
   *             associated with the serverless namespace.</p>
   * @public
   */
  WorkgroupIdentifier: string | undefined;
}

/**
 * <p>Object to store union of values for a
 *             provisioned cluster or serverless namespace’s identifier.</p>
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
   * <p>The identifier for a serverless namespace.</p>
   * @public
   */
  export interface ServerlessIdentifierMember {
    ServerlessIdentifier: ServerlessIdentifier;
    ProvisionedIdentifier?: never;
    $unknown?: never;
  }

  /**
   * <p>The identifier for a provisioned cluster.</p>
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
   * <p>The unique identifier of the cluster or
   *             serverless namespace that you want to deregister.</p>
   * @public
   */
  NamespaceIdentifier: NamespaceIdentifierUnion | undefined;

  /**
   * <p>An array containing the ID of the consumer account
   *             that you want to deregister the cluster or serverless namespace from.</p>
   * @public
   */
  ConsumerIdentifiers: string[] | undefined;
}

/**
 * @public
 */
export interface DeregisterNamespaceOutputMessage {
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
export interface DescribeAccountAttributesMessage {
  /**
   * <p>A list of attribute names.</p>
   * @public
   */
  AttributeNames?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAuthenticationProfilesMessage {
  /**
   * <p>The name of the authentication profile to describe. If not specified then all authentication profiles owned by the account are listed.</p>
   * @public
   */
  AuthenticationProfileName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAuthenticationProfilesResult {
  /**
   * <p>The list of authentication profiles.</p>
   * @public
   */
  AuthenticationProfiles?: AuthenticationProfile[] | undefined;
}

/**
 * @public
 */
export interface DescribeClusterDbRevisionsMessage {
  /**
   * <p>A unique identifier for a cluster whose <code>ClusterDbRevisions</code> you are
   *             requesting. This parameter is case sensitive. All clusters defined for an account are
   *             returned by default.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified MaxRecords value, a value is returned
   *             in the <code>marker</code> field of the response. You can retrieve the next set of
   *             response records by providing the returned <code>marker</code> value in the
   *                 <code>marker</code> parameter and retrying the request. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point for returning a set of
   *             response records. When the results of a <code>DescribeClusterDbRevisions</code> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Redshift returns a value
   *             in the <code>marker</code> field of the response. You can retrieve the next set of
   *             response records by providing the returned <code>marker</code> value in the
   *                 <code>marker</code> parameter and retrying the request. </p>
   *          <p>Constraints: You can specify either the <code>ClusterIdentifier</code> parameter, or
   *             the <code>marker</code> parameter, but not both.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeClusterParameterGroupsMessage {
  /**
   * <p>The name of a specific parameter group for which to return details. By default,
   *             details about all parameter groups and the default parameter group are
   *             returned.</p>
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterParameterGroups</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching cluster parameter
   *             groups that are associated with the specified key or keys. For example, suppose that you
   *             have parameter groups that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the parameter groups that have either or both of these
   *             tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching cluster parameter
   *             groups that are associated with the specified tag value or values. For example, suppose
   *             that you have parameter groups that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the parameter groups that have either or both of these tag
   *             values associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeClusterParametersMessage {
  /**
   * <p>The name of a cluster parameter group for which to return details.</p>
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>The parameter types to return. Specify <code>user</code> to show parameters that
   *             are different form the default. Similarly, specify <code>engine-default</code> to show
   *             parameters that are the same as the default parameter group. </p>
   *          <p>Default: All parameter types returned.</p>
   *          <p>Valid Values: <code>user</code> | <code>engine-default</code>
   *          </p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterParameters</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeClustersMessage {
  /**
   * <p>The unique identifier of a cluster whose properties you are requesting. This
   *             parameter is case sensitive.</p>
   *          <p>The default is that all clusters defined for an account are returned.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusters</a> request exceed the
   *             value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *          <p>Constraints: You can specify either the <b>ClusterIdentifier</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching clusters that are
   *             associated with the specified key or keys. For example, suppose that you have clusters
   *             that are tagged with keys called <code>owner</code> and <code>environment</code>. If you
   *             specify both of these tag keys in the request, Amazon Redshift returns a response with the
   *             clusters that have either or both of these tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching clusters that are
   *             associated with the specified tag value or values. For example, suppose that you have
   *             clusters that are tagged with values called <code>admin</code> and <code>test</code>. If
   *             you specify both of these tag values in the request, Amazon Redshift returns a response with
   *             the clusters that have either or both of these tag values associated with
   *             them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeClusterSecurityGroupsMessage {
  /**
   * <p>The name of a cluster security group for which you are requesting details. You must
   *             specify either the <b>Marker</b> parameter or a <b>ClusterSecurityGroupName</b> parameter, but not both. </p>
   *          <p> Example: <code>securitygroup1</code>
   *          </p>
   * @public
   */
  ClusterSecurityGroupName?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterSecurityGroups</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *          <p>Constraints: You must specify either the <b>ClusterSecurityGroupName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching cluster security groups
   *             that are associated with the specified key or keys. For example, suppose that you have
   *             security groups that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the security groups that have either or both of these
   *             tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching cluster security
   *             groups that are associated with the specified tag value or values. For example, suppose
   *             that you have security groups that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the security groups that have either or both of these tag values
   *             associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * <p>Describes a sorting entity</p>
 * @public
 */
export interface SnapshotSortingEntity {
  /**
   * <p>The category for sorting the snapshots.</p>
   * @public
   */
  Attribute: SnapshotAttributeToSortBy | undefined;

  /**
   * <p>The order for listing the attributes.</p>
   * @public
   */
  SortOrder?: SortByOrder | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeClusterSnapshotsMessage {
  /**
   * <p>The identifier of the cluster which generated the requested snapshots.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The snapshot identifier of the snapshot about which to return
   *             information.</p>
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot associated with the message to describe cluster snapshots.</p>
   * @public
   */
  SnapshotArn?: string | undefined;

  /**
   * <p>The type of snapshots for which you are requesting information. By default,
   *             snapshots of all types are returned.</p>
   *          <p>Valid Values: <code>automated</code> | <code>manual</code>
   *          </p>
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * <p>A value that requests only snapshots created at or after the specified time. The
   *             time value is specified in ISO 8601 format. For more information about ISO 8601, go to
   *             the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: <code>2012-07-16T18:00:00Z</code>
   *          </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>A time value that requests only snapshots created at or before the specified time.
   *             The time value is specified in ISO 8601 format. For more information about ISO 8601, go
   *             to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia
   *                 page.</a>
   *          </p>
   *          <p>Example: <code>2012-07-16T18:00:00Z</code>
   *          </p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterSnapshots</a> request exceed
   *             the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The Amazon Web Services account used to create or copy the snapshot. Use this field to
   *             filter the results to snapshots owned by a particular account. To describe snapshots you
   *             own, either specify your Amazon Web Services account, or do not specify the
   *             parameter.</p>
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching cluster snapshots that
   *             are associated with the specified key or keys. For example, suppose that you have
   *             snapshots that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the snapshots that have either or both of these tag
   *             keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching cluster snapshots
   *             that are associated with the specified tag value or values. For example, suppose that
   *             you have snapshots that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the snapshots that have either or both of these tag values
   *             associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;

  /**
   * <p>A value that indicates whether to return snapshots only for an existing cluster.
   *             You can perform table-level restore only by using a snapshot of an existing cluster,
   *             that is, a cluster that has not been deleted. Values for this parameter work as follows: </p>
   *          <ul>
   *             <li>
   *                <p>If <code>ClusterExists</code> is set to <code>true</code>,
   *                         <code>ClusterIdentifier</code> is required.</p>
   *             </li>
   *             <li>
   *                <p>If <code>ClusterExists</code> is set to <code>false</code> and
   *                         <code>ClusterIdentifier</code> isn't specified, all snapshots
   *                     associated with deleted clusters (orphaned snapshots) are returned. </p>
   *             </li>
   *             <li>
   *                <p>If <code>ClusterExists</code> is set to <code>false</code> and
   *                         <code>ClusterIdentifier</code> is specified for a deleted cluster, snapshots
   *                     associated with that cluster are returned.</p>
   *             </li>
   *             <li>
   *                <p>If <code>ClusterExists</code> is set to <code>false</code> and
   *                         <code>ClusterIdentifier</code> is specified for an existing cluster, no
   *                     snapshots are returned. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ClusterExists?: boolean | undefined;

  /**
   * <p></p>
   * @public
   */
  SortingEntities?: SnapshotSortingEntity[] | undefined;
}

/**
 * <p>Contains the output from the <a>DescribeClusterSnapshots</a> action.
 *         </p>
 * @public
 */
export interface SnapshotMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of <a>Snapshot</a> instances. </p>
   * @public
   */
  Snapshots?: Snapshot[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeClusterSubnetGroupsMessage {
  /**
   * <p>The name of the cluster subnet group for which information is requested.</p>
   * @public
   */
  ClusterSubnetGroupName?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterSubnetGroups</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching cluster subnet groups
   *             that are associated with the specified key or keys. For example, suppose that you have
   *             subnet groups that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the subnet groups that have either or both of these
   *             tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching cluster subnet
   *             groups that are associated with the specified tag value or values. For example, suppose
   *             that you have subnet groups that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the subnet groups that have either or both of these tag values
   *             associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeClusterTracksMessage {
  /**
   * <p>The name of the maintenance track. </p>
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * <p>An integer value for the maximum number of maintenance tracks to return.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <code>DescribeClusterTracks</code> request exceed the
   *             value specified in <code>MaxRecords</code>, Amazon Redshift returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Describes the operations that are allowed on a maintenance track.</p>
 * @public
 */
export interface SupportedOperation {
  /**
   * <p>A list of the supported operations.</p>
   * @public
   */
  OperationName?: string | undefined;
}

/**
 * <p>A maintenance track that you can switch the current track to.</p>
 * @public
 */
export interface UpdateTarget {
  /**
   * <p>The name of the new maintenance track.</p>
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * <p>The cluster version for the new maintenance track.</p>
   * @public
   */
  DatabaseVersion?: string | undefined;

  /**
   * <p>A list of operations supported by the maintenance track.</p>
   * @public
   */
  SupportedOperations?: SupportedOperation[] | undefined;
}

/**
 * <p>Defines a maintenance track that determines which Amazon Redshift version to apply
 *             during a maintenance window. If the value for <code>MaintenanceTrack</code> is
 *                 <code>current</code>, the cluster is updated to the most recently certified
 *             maintenance release. If the value is <code>trailing</code>, the cluster is updated to
 *             the previously certified maintenance release. </p>
 * @public
 */
export interface MaintenanceTrack {
  /**
   * <p>The name of the maintenance track. Possible values are <code>current</code> and
   *                 <code>trailing</code>.</p>
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * <p>The version number for the cluster release.</p>
   * @public
   */
  DatabaseVersion?: string | undefined;

  /**
   * <p>An array of <a>UpdateTarget</a> objects to update with the maintenance
   *             track. </p>
   * @public
   */
  UpdateTargets?: UpdateTarget[] | undefined;
}

/**
 * @public
 */
export interface TrackListMessage {
  /**
   * <p>A list of maintenance tracks output by the <code>DescribeClusterTracks</code>
   *             operation. </p>
   * @public
   */
  MaintenanceTracks?: MaintenanceTrack[] | undefined;

  /**
   * <p>The starting point to return a set of response tracklist records. You can retrieve the
   *             next set of response records by providing the returned marker value in the
   *                 <code>Marker</code> parameter and retrying the request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeClusterVersionsMessage {
  /**
   * <p>The specific cluster version to return.</p>
   *          <p>Example: <code>1.0</code>
   *          </p>
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * <p>The name of a specific cluster parameter group family to return details
   *             for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 alphanumeric characters</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   * @public
   */
  ClusterParameterGroupFamily?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterVersions</a> request exceed
   *             the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomDomainAssociationsMessage {
  /**
   * <p>The custom domain name for the custom domain association.</p>
   * @public
   */
  CustomDomainName?: string | undefined;

  /**
   * <p>The certificate Amazon Resource Name (ARN) for the custom domain association.</p>
   * @public
   */
  CustomDomainCertificateArn?: string | undefined;

  /**
   * <p>The maximum records setting for the associated custom domain.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>The marker for the custom domain association.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesMessage {
  /**
   * <p>The Amazon resource name (ARN) of the datashare to describe details of.</p>
   * @public
   */
  DataShareArn?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeDataShares</a> request exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesResult {
  /**
   * <p>The results returned from describing datashares.</p>
   * @public
   */
  DataShares?: DataShare[] | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeDataShares</a> request exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesForConsumerMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the consumer namespace that returns in the list of datashares.</p>
   * @public
   */
  ConsumerArn?: string | undefined;

  /**
   * <p>An identifier giving the status of a datashare in the consumer cluster. If this field is specified, Amazon
   *             Redshift returns the list of datashares that have the specified status.</p>
   * @public
   */
  Status?: DataShareStatusForConsumer | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeDataSharesForConsumer</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesForConsumerResult {
  /**
   * <p>Shows the results of datashares available for consumers.</p>
   * @public
   */
  DataShares?: DataShare[] | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeDataSharesForConsumer</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesForProducerMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the producer namespace that returns in the list of datashares.</p>
   * @public
   */
  ProducerArn?: string | undefined;

  /**
   * <p>An identifier giving the status of a datashare in the producer. If this field is specified, Amazon
   *             Redshift returns the list of datashares that have the specified status.</p>
   * @public
   */
  Status?: DataShareStatusForProducer | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeDataSharesForProducer</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesForProducerResult {
  /**
   * <p>Shows the results of datashares available for producers.</p>
   * @public
   */
  DataShares?: DataShare[] | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeDataSharesForProducer</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeDefaultClusterParametersMessage {
  /**
   * <p>The name of the cluster parameter group family.</p>
   * @public
   */
  ParameterGroupFamily: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeDefaultClusterParameters</a>
   *             request exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in
   *             the <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultClusterParametersResult {
  /**
   * <p>Describes the default cluster parameters for a parameter group family.</p>
   * @public
   */
  DefaultClusterParameters?: DefaultClusterParameters | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointAccessMessage {
  /**
   * <p>The cluster identifier associated with the described endpoint.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the cluster.</p>
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * <p>The name of the endpoint to be described.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>The virtual private cloud (VPC) identifier with access to the cluster.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *             than the specified <code>MaxRecords</code> value, a pagination token called a <code>Marker</code> is
   *             included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeEndpointAccess</code> request. If this parameter is specified, the
   *             response includes only records beyond the marker, up to the value specified by the
   *             <code>MaxRecords</code> parameter.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface EndpointAccessList {
  /**
   * <p>The list of endpoints with access to the cluster.</p>
   * @public
   */
  EndpointAccessList?: EndpointAccess[] | undefined;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeEndpointAccess</code> request. If this parameter is specified, the
   *             response includes only records beyond the marker, up to the value specified by the
   *             <code>MaxRecords</code> parameter.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointAuthorizationMessage {
  /**
   * <p>The cluster identifier of the cluster to access.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of either the cluster owner (grantor) or grantee.
   *        If <code>Grantee</code> parameter is true, then the <code>Account</code> value is of the grantor.</p>
   * @public
   */
  Account?: string | undefined;

  /**
   * <p>Indicates whether to check authorization from a grantor or grantee point of view.
   *            If true, Amazon Redshift returns endpoint authorizations that you've been granted.
   *            If false (default), checks authorization from a grantor point of view.</p>
   * @public
   */
  Grantee?: boolean | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *             than the specified <code>MaxRecords</code> value, a pagination token called a <code>Marker</code> is
   *             included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeEndpointAuthorization</code> request. If this parameter is specified, the
   *             response includes only records beyond the marker, up to the value specified by the
   *             <code>MaxRecords</code> parameter.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface EndpointAuthorizationList {
  /**
   * <p>The authorizations to an endpoint.</p>
   * @public
   */
  EndpointAuthorizationList?: EndpointAuthorization[] | undefined;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeEndpointAuthorization</code> request. If this parameter is specified, the
   *             response includes only records beyond the marker, up to the value specified by the
   *             <code>MaxRecords</code> parameter.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeEventCategoriesMessage {
  /**
   * <p>The source type, such as cluster or parameter group, to which the described event
   *             categories apply.</p>
   *          <p>Valid values: cluster, cluster-snapshot, cluster-parameter-group, cluster-security-group, and scheduled-action.</p>
   * @public
   */
  SourceType?: string | undefined;
}

/**
 * <p>Describes event information.</p>
 * @public
 */
export interface EventInfoMap {
  /**
   * <p>The identifier of an Amazon Redshift event.</p>
   * @public
   */
  EventId?: string | undefined;

  /**
   * <p>The category of an Amazon Redshift event.</p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p>The description of an Amazon Redshift event.</p>
   * @public
   */
  EventDescription?: string | undefined;

  /**
   * <p>The severity of the event.</p>
   *          <p>Values: ERROR, INFO</p>
   * @public
   */
  Severity?: string | undefined;
}

/**
 * <p>Describes event categories.</p>
 * @public
 */
export interface EventCategoriesMap {
  /**
   * <p>The source type, such as cluster or cluster-snapshot, that the returned categories
   *             belong to.</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>The events in the event category.</p>
   * @public
   */
  Events?: EventInfoMap[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface EventCategoriesMessage {
  /**
   * <p>A list of event categories descriptions.</p>
   * @public
   */
  EventCategoriesMapList?: EventCategoriesMap[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeEventsMessage {
  /**
   * <p>The identifier of the event source for which events will be returned. If this
   *             parameter is not specified, then all sources are included in the response.</p>
   *          <p>Constraints:</p>
   *          <p>If <i>SourceIdentifier</i> is supplied,
   *                 <i>SourceType</i> must also be provided.</p>
   *          <ul>
   *             <li>
   *                <p>Specify a cluster identifier when <i>SourceType</i> is
   *                         <code>cluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specify a cluster security group name when <i>SourceType</i>
   *                     is <code>cluster-security-group</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specify a cluster parameter group name when <i>SourceType</i>
   *                     is <code>cluster-parameter-group</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specify a cluster snapshot identifier when <i>SourceType</i>
   *                     is <code>cluster-snapshot</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are
   *             returned.</p>
   *          <p>Constraints:</p>
   *          <p>If <i>SourceType</i> is supplied,
   *                 <i>SourceIdentifier</i> must also be provided.</p>
   *          <ul>
   *             <li>
   *                <p>Specify <code>cluster</code> when <i>SourceIdentifier</i> is
   *                     a cluster identifier.</p>
   *             </li>
   *             <li>
   *                <p>Specify <code>cluster-security-group</code> when
   *                         <i>SourceIdentifier</i> is a cluster security group
   *                     name.</p>
   *             </li>
   *             <li>
   *                <p>Specify <code>cluster-parameter-group</code> when
   *                         <i>SourceIdentifier</i> is a cluster parameter group
   *                     name.</p>
   *             </li>
   *             <li>
   *                <p>Specify <code>cluster-snapshot</code> when
   *                         <i>SourceIdentifier</i> is a cluster snapshot
   *                     identifier.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * <p>The beginning of the time interval to retrieve events for, specified in ISO 8601
   *             format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: <code>2009-07-08T18:00Z</code>
   *          </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end of the time interval for which to retrieve events, specified in ISO 8601
   *             format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: <code>2009-07-08T18:00Z</code>
   *          </p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The number of minutes prior to the time of the request for which to retrieve
   *             events. For example, if the request is sent at 18:00 and you specify a duration of 60,
   *             then only events which have occurred after 17:00 will be returned.</p>
   *          <p>Default: <code>60</code>
   *          </p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeEvents</a> request exceed the value
   *             specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the <code>Marker</code>
   *             field of the response. You can retrieve the next set of response records by providing
   *             the returned marker value in the <code>Marker</code> parameter and retrying the request.
   *         </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Describes an event.</p>
 * @public
 */
export interface Event {
  /**
   * <p>The identifier for the source of the event.</p>
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * <p>The source type for this event.</p>
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * <p>The text of this event.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>A list of the event categories.</p>
   *          <p>Values: Configuration, Management, Monitoring, Security, Pending</p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p>The severity of the event.</p>
   *          <p>Values: ERROR, INFO</p>
   * @public
   */
  Severity?: string | undefined;

  /**
   * <p>The date and time of the event.</p>
   * @public
   */
  Date?: Date | undefined;

  /**
   * <p>The identifier of the event.</p>
   * @public
   */
  EventId?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface EventsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of <code>Event</code> instances. </p>
   * @public
   */
  Events?: Event[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * <p>The name of the Amazon Redshift event notification subscription to be
   *             described.</p>
   * @public
   */
  SubscriptionName?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a DescribeEventSubscriptions request exceed the value
   *             specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the <code>Marker</code>
   *             field of the response. You can retrieve the next set of response records by providing
   *             the returned marker value in the <code>Marker</code> parameter and retrying the request.
   *         </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching event notification
   *             subscriptions that are associated with the specified key or keys. For example, suppose
   *             that you have subscriptions that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the subscriptions that have either or both of these
   *             tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching event notification
   *             subscriptions that are associated with the specified tag value or values. For example,
   *             suppose that you have subscriptions that are tagged with values called
   *                 <code>admin</code> and <code>test</code>. If you specify both of these tag values in
   *             the request, Amazon Redshift returns a response with the subscriptions that have either or
   *             both of these tag values associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface EventSubscriptionsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of event subscriptions.</p>
   * @public
   */
  EventSubscriptionsList?: EventSubscription[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeHsmClientCertificatesMessage {
  /**
   * <p>The identifier of a specific HSM client certificate for which you want information.
   *             If no identifier is specified, information is returned for all HSM client certificates
   *             owned by your Amazon Web Services account.</p>
   * @public
   */
  HsmClientCertificateIdentifier?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeHsmClientCertificates</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching HSM client certificates
   *             that are associated with the specified key or keys. For example, suppose that you have
   *             HSM client certificates that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the HSM client certificates that have either or both
   *             of these tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching HSM client
   *             certificates that are associated with the specified tag value or values. For example,
   *             suppose that you have HSM client certificates that are tagged with values called
   *                 <code>admin</code> and <code>test</code>. If you specify both of these tag values in
   *             the request, Amazon Redshift returns a response with the HSM client certificates that have
   *             either or both of these tag values associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface HsmClientCertificateMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of the identifiers for one or more HSM client certificates used by Amazon Redshift
   *             clusters to store and retrieve database encryption keys in an HSM.</p>
   * @public
   */
  HsmClientCertificates?: HsmClientCertificate[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeHsmConfigurationsMessage {
  /**
   * <p>The identifier of a specific Amazon Redshift HSM configuration to be described. If no
   *             identifier is specified, information is returned for all HSM configurations owned by
   *             your Amazon Web Services account.</p>
   * @public
   */
  HsmConfigurationIdentifier?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeHsmConfigurations</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching HSM configurations that
   *             are associated with the specified key or keys. For example, suppose that you have HSM
   *             configurations that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the HSM configurations that have either or both of
   *             these tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching HSM configurations
   *             that are associated with the specified tag value or values. For example, suppose that
   *             you have HSM configurations that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the HSM configurations that have either or both of these tag
   *             values associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface HsmConfigurationMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of <code>HsmConfiguration</code> objects.</p>
   * @public
   */
  HsmConfigurations?: HsmConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DescribeInboundIntegrationsMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the inbound integration.</p>
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target of an inbound integration.</p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeInboundIntegrations</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>The content of an inbound integration.</p>
 * @public
 */
export interface InboundIntegration {
  /**
   * <p>The Amazon Resource Name (ARN) of an inbound integration.</p>
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source of an inbound integration.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target of an inbound integration.</p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The status of an inbound integration.</p>
   * @public
   */
  Status?: ZeroETLIntegrationStatus | undefined;

  /**
   * <p>The outstanding errors of an inbound  integration. Each item is an "IntegrationError". This is null if there is no error.</p>
   * @public
   */
  Errors?: IntegrationError[] | undefined;

  /**
   * <p>The creation time of an inbound integration.</p>
   * @public
   */
  CreateTime?: Date | undefined;
}

/**
 * @public
 */
export interface InboundIntegrationsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of <a>InboundIntegration</a> instances.</p>
   * @public
   */
  InboundIntegrations?: InboundIntegration[] | undefined;
}

/**
 * <p>A set of elements to filter the returned integrations.</p>
 * @public
 */
export interface DescribeIntegrationsFilter {
  /**
   * <p>Specifies the type of integration filter.</p>
   * @public
   */
  Name: DescribeIntegrationsFilterName | undefined;

  /**
   * <p>Specifies the values to filter on.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIntegrationsMessage {
  /**
   * <p>The unique identifier of the integration.</p>
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous <code>DescribeIntegrations</code>
   *             request. If this parameter is specified, the response includes only records beyond the
   *             marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A filter that specifies one or more resources to return.</p>
   * @public
   */
  Filters?: DescribeIntegrationsFilter[] | undefined;
}

/**
 * @public
 */
export interface IntegrationsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request.
   *             If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the <code>Marker</code> parameter and retrying the command.
   *             If the <code>Marker</code> field is empty, all response records have been retrieved for the request.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>List of integrations that are described.</p>
   * @public
   */
  Integrations?: Integration[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeLoggingStatusMessage {
  /**
   * <p>The identifier of the cluster from which to get the logging status.</p>
   *          <p>Example: <code>examplecluster</code>
   *          </p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * <p>Describes the status of logging for a cluster.</p>
 * @public
 */
export interface LoggingStatus {
  /**
   * <p>
   *             <code>true</code> if logging is on, <code>false</code> if logging is off.</p>
   * @public
   */
  LoggingEnabled?: boolean | undefined;

  /**
   * <p>The name of the S3 bucket where the log files are stored.</p>
   * @public
   */
  BucketName?: string | undefined;

  /**
   * <p>The prefix applied to the log file names.</p>
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * <p>The last time that logs were delivered.</p>
   * @public
   */
  LastSuccessfulDeliveryTime?: Date | undefined;

  /**
   * <p>The last time when logs failed to be delivered.</p>
   * @public
   */
  LastFailureTime?: Date | undefined;

  /**
   * <p>The message indicating that logs failed to be delivered.</p>
   * @public
   */
  LastFailureMessage?: string | undefined;

  /**
   * <p>The log destination type. An enum with possible values of <code>s3</code> and <code>cloudwatch</code>.</p>
   * @public
   */
  LogDestinationType?: LogDestinationType | undefined;

  /**
   * <p>The collection of exported log types. Possible values are <code>connectionlog</code>, <code>useractivitylog</code>, and
   *             <code>userlog</code>.</p>
   * @public
   */
  LogExports?: string[] | undefined;
}

/**
 * <p>A set of elements to filter the returned node configurations.</p>
 * @public
 */
export interface NodeConfigurationOptionsFilter {
  /**
   * <p>The name of the element to filter.</p>
   * @public
   */
  Name?: NodeConfigurationOptionsFilterName | undefined;

  /**
   * <p>The filter operator.
   *             If filter Name is NodeType only the 'in' operator is supported.
   *             Provide one value to evaluate for 'eq', 'lt', 'le', 'gt', and 'ge'.
   *             Provide two values to evaluate for 'between'.
   *             Provide a list of values for 'in'.</p>
   * @public
   */
  Operator?: OperatorType | undefined;

  /**
   * <p>List of values. Compare Name using Operator to Values.
   *             If filter Name is NumberOfNodes, then values can range from 0 to 200.
   *             If filter Name is EstimatedDiskUtilizationPercent, then values can range from 0 to 100.
   *             For example, filter NumberOfNodes (name) GT (operator) 3 (values).</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeNodeConfigurationOptionsMessage {
  /**
   * <p>The action type to evaluate for possible node configurations.
   *             Specify "restore-cluster" to get configuration combinations based on an existing snapshot.
   *             Specify "recommend-node-config" to get configuration recommendations based on an existing cluster or snapshot.
   *             Specify "resize-cluster" to get configuration combinations for elastic resize based on an existing cluster.
   *         </p>
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * <p>The identifier of the cluster to evaluate for possible node configurations.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The identifier of the snapshot to evaluate for possible node configurations.</p>
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot associated with the message to describe node configuration.</p>
   * @public
   */
  SnapshotArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account used to create or copy the snapshot.
   *             Required if you are restoring a snapshot you do not own,
   *             optional if you own the snapshot.</p>
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * <p>A set of name, operator, and value items to filter the results.</p>
   * @public
   */
  Filters?: NodeConfigurationOptionsFilter[] | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeNodeConfigurationOptions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>500</code>
   *          </p>
   *          <p>Constraints: minimum 100, maximum 500.</p>
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * <p>A list of node configurations.</p>
 * @public
 */
export interface NodeConfigurationOption {
  /**
   * <p>The node type, such as, "ra3.4xlarge".</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The number of nodes.</p>
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * <p>The estimated disk utilizaton percentage.</p>
   * @public
   */
  EstimatedDiskUtilizationPercent?: number | undefined;

  /**
   * <p>The category of the node configuration recommendation.</p>
   * @public
   */
  Mode?: Mode | undefined;
}

/**
 * @public
 */
export interface NodeConfigurationOptionsMessage {
  /**
   * <p>A list of valid node configurations.</p>
   * @public
   */
  NodeConfigurationOptionList?: NodeConfigurationOption[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeOrderableClusterOptionsMessage {
  /**
   * <p>The version filter value. Specify this parameter to show only the available
   *             offerings matching the specified version.</p>
   *          <p>Default: All versions.</p>
   *          <p>Constraints: Must be one of the version returned from <a>DescribeClusterVersions</a>.</p>
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * <p>The node type filter value. Specify this parameter to show only the available
   *             offerings matching the specified node type.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeOrderableClusterOptions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Describes an orderable cluster option.</p>
 * @public
 */
export interface OrderableClusterOption {
  /**
   * <p>The version of the orderable cluster.</p>
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * <p>The cluster type, for example <code>multi-node</code>. </p>
   * @public
   */
  ClusterType?: string | undefined;

  /**
   * <p>The node type for the orderable cluster.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>A list of availability zones for the orderable cluster.</p>
   * @public
   */
  AvailabilityZones?: AvailabilityZone[] | undefined;
}

/**
 * <p>Contains the output from the <a>DescribeOrderableClusterOptions</a>
 *             action. </p>
 * @public
 */
export interface OrderableClusterOptionsMessage {
  /**
   * <p>An <code>OrderableClusterOption</code> structure containing information about
   *             orderable options for the cluster.</p>
   * @public
   */
  OrderableClusterOptions?: OrderableClusterOption[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribePartnersInputMessage {
  /**
   * <p>The Amazon Web Services account ID that owns the cluster.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The cluster identifier of the cluster whose partner integration is being described.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the database whose partner integration is being described. If database name is not specified, then all databases in the cluster are described.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the partner that is being described. If partner name is not specified, then all partner integrations are described.</p>
   * @public
   */
  PartnerName?: string | undefined;
}

/**
 * <p>Describes a partner integration.</p>
 * @public
 */
export interface PartnerIntegrationInfo {
  /**
   * <p>The name of the database that receives data from a partner.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the partner.</p>
   * @public
   */
  PartnerName?: string | undefined;

  /**
   * <p>The partner integration status.</p>
   * @public
   */
  Status?: PartnerIntegrationStatus | undefined;

  /**
   * <p>The status message provided by the partner.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The date (UTC) that the partner integration was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date (UTC) that the partner integration status was last updated by the partner.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribePartnersOutputMessage {
  /**
   * <p>A list of partner integrations.</p>
   * @public
   */
  PartnerIntegrationInfoList?: PartnerIntegrationInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeRedshiftIdcApplicationsMessage {
  /**
   * <p>The ARN for the Redshift application that integrates with IAM Identity Center.</p>
   * @public
   */
  RedshiftIdcApplicationArn?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of remaining response records
   *             exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve
   *             the next set of records by retrying the command with the returned marker value.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a
   *             value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the Marker parameter
   *             and retrying the command. If the Marker field is empty, all response
   *             records have been retrieved for the request.
   *         </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRedshiftIdcApplicationsResult {
  /**
   * <p>The list of Amazon Redshift IAM Identity Center applications.</p>
   * @public
   */
  RedshiftIdcApplications?: RedshiftIdcApplication[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent
   *             request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the Marker parameter
   *             and retrying the command. If the Marker field is empty, all response
   *             records have been retrieved for the request.
   *         </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReservedNodeExchangeStatusInputMessage {
  /**
   * <p>The identifier of the source reserved node in a reserved-node exchange request.</p>
   * @public
   */
  ReservedNodeId?: string | undefined;

  /**
   * <p>The identifier of the reserved-node exchange request.</p>
   * @public
   */
  ReservedNodeExchangeRequestId?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>Marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous <code>DescribeReservedNodeExchangeStatus</code> request. If this
   *             parameter is specified, the response includes only records beyond the marker, up to the value
   *             specified by the <code>MaxRecords</code> parameter. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReservedNodeExchangeStatusOutputMessage {
  /**
   * <p>The details of the reserved-node exchange request, including the status, request
   *             time, source reserved-node identifier, and additional details.</p>
   * @public
   */
  ReservedNodeExchangeStatusDetails?: ReservedNodeExchangeStatus[] | undefined;

  /**
   * <p>A pagination token provided by a previous <code>DescribeReservedNodeExchangeStatus</code> request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeReservedNodeOfferingsMessage {
  /**
   * <p>The unique identifier for the offering.</p>
   * @public
   */
  ReservedNodeOfferingId?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeReservedNodeOfferings</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Describes a reserved node offering.</p>
 * @public
 */
export interface ReservedNodeOffering {
  /**
   * <p>The offering identifier.</p>
   * @public
   */
  ReservedNodeOfferingId?: string | undefined;

  /**
   * <p>The node type offered by the reserved node offering.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The duration, in seconds, for which the offering will reserve the node.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The upfront fixed charge you will pay to purchase the specific reserved node
   *             offering.</p>
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * <p>The rate you are charged for each hour the cluster that is using the offering is
   *             running.</p>
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * <p>The currency code for the compute nodes offering.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>The anticipated utilization of the reserved node, as defined in the reserved node
   *             offering.</p>
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * <p>The charge to your account regardless of whether you are creating any clusters
   *             using the node offering. Recurring charges are only in effect for heavy-utilization
   *             reserved nodes.</p>
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;

  /**
   * <p></p>
   * @public
   */
  ReservedNodeOfferingType?: ReservedNodeOfferingType | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ReservedNodeOfferingsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of <code>ReservedNodeOffering</code> objects.</p>
   * @public
   */
  ReservedNodeOfferings?: ReservedNodeOffering[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeReservedNodesMessage {
  /**
   * <p>Identifier for the node reservation.</p>
   * @public
   */
  ReservedNodeId?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeReservedNodes</a> request exceed
   *             the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ReservedNodesMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The list of <code>ReservedNode</code> objects.</p>
   * @public
   */
  ReservedNodes?: ReservedNode[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeResizeMessage {
  /**
   * <p>The unique identifier of a cluster whose resize progress you are requesting. This
   *             parameter is case-sensitive.</p>
   *          <p>By default, resize operations for all clusters defined for an Amazon Web Services account are
   *             returned.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * <p>A set of elements to filter the returned scheduled actions. </p>
 * @public
 */
export interface ScheduledActionFilter {
  /**
   * <p>The type of element to filter. </p>
   * @public
   */
  Name: ScheduledActionFilterName | undefined;

  /**
   * <p>List of values. Compare if the value (of type defined by <code>Name</code>) equals an item in the list of scheduled actions. </p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeScheduledActionsMessage {
  /**
   * <p>The name of the scheduled action to retrieve. </p>
   * @public
   */
  ScheduledActionName?: string | undefined;

  /**
   * <p>The type of the scheduled actions to retrieve. </p>
   * @public
   */
  TargetActionType?: ScheduledActionTypeValues | undefined;

  /**
   * <p>The start time in UTC of the scheduled actions to retrieve.
   *             Only active scheduled actions that have invocations after this time are retrieved.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time in UTC of the scheduled action to retrieve.
   *             Only active scheduled actions that have invocations before this time are retrieved.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>If true, retrieve only active scheduled actions.
   *            If false, retrieve only disabled scheduled actions. </p>
   * @public
   */
  Active?: boolean | undefined;

  /**
   * <p>List of scheduled action filters. </p>
   * @public
   */
  Filters?: ScheduledActionFilter[] | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeScheduledActions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface ScheduledActionsMessage {
  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeScheduledActions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>List of retrieved scheduled actions. </p>
   * @public
   */
  ScheduledActions?: ScheduledAction[] | undefined;
}

/**
 * <p>The result of the <code>DescribeSnapshotCopyGrants</code> action.</p>
 * @public
 */
export interface DescribeSnapshotCopyGrantsMessage {
  /**
   * <p>The name of the snapshot copy grant.</p>
   * @public
   */
  SnapshotCopyGrantName?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <code>DescribeSnapshotCopyGrant</code> request exceed the
   *             value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *          <p>Constraints: You can specify either the <b>SnapshotCopyGrantName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching resources that are
   *             associated with the specified key or keys. For example, suppose that you have resources
   *             tagged with keys called <code>owner</code> and <code>environment</code>. If you specify
   *             both of these tag keys in the request, Amazon Redshift returns a response with all resources
   *             that have either or both of these tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching resources that are
   *             associated with the specified value or values. For example, suppose that you have
   *             resources tagged with values called <code>admin</code> and <code>test</code>. If you
   *             specify both of these tag values in the request, Amazon Redshift returns a response with all
   *             resources that have either or both of these tag values associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface SnapshotCopyGrantMessage {
  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <code>DescribeSnapshotCopyGrant</code> request exceed the
   *             value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *          <p>Constraints: You can specify either the <b>SnapshotCopyGrantName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The list of <code>SnapshotCopyGrant</code> objects.</p>
   * @public
   */
  SnapshotCopyGrants?: SnapshotCopyGrant[] | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotSchedulesMessage {
  /**
   * <p>The unique identifier for the cluster whose snapshot schedules you want to
   *             view.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>A unique identifier for a snapshot schedule.</p>
   * @public
   */
  ScheduleIdentifier?: string | undefined;

  /**
   * <p>The key value for a snapshot schedule tag.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>The value corresponding to the key of the snapshot schedule tag.</p>
   * @public
   */
  TagValues?: string[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>marker</code> parameter
   *             and retrying the command. If the <code>marker</code> field is empty, all response
   *             records have been retrieved for the request.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number or response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned <code>marker</code>
   *             value.</p>
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotSchedulesOutputMessage {
  /**
   * <p>A list of SnapshotSchedules.</p>
   * @public
   */
  SnapshotSchedules?: SnapshotSchedule[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>marker</code> parameter
   *             and retrying the command. If the <code>marker</code> field is empty, all response
   *             records have been retrieved for the request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeTableRestoreStatusMessage {
  /**
   * <p>The Amazon Redshift cluster that the table is being restored to.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The identifier of the table restore request to return status for. If you don't
   *             specify a <code>TableRestoreRequestId</code> value, then
   *                 <code>DescribeTableRestoreStatus</code> returns the status of all in-progress table
   *             restore requests.</p>
   * @public
   */
  TableRestoreRequestId?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *             than the specified <code>MaxRecords</code> value, a pagination token called a marker is
   *             included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous
   *                 <code>DescribeTableRestoreStatus</code> request. If this parameter is specified, the
   *             response includes only records beyond the marker, up to the value specified by the
   *                 <code>MaxRecords</code> parameter.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Describes the status of a <a>RestoreTableFromClusterSnapshot</a>
 *             operation.</p>
 * @public
 */
export interface TableRestoreStatus {
  /**
   * <p>The unique identifier for the table restore request.</p>
   * @public
   */
  TableRestoreRequestId?: string | undefined;

  /**
   * <p>A value that describes the current state of the table restore request.</p>
   *          <p>Valid Values: <code>SUCCEEDED</code>, <code>FAILED</code>, <code>CANCELED</code>,
   *                 <code>PENDING</code>, <code>IN_PROGRESS</code>
   *          </p>
   * @public
   */
  Status?: TableRestoreStatusType | undefined;

  /**
   * <p>A description of the status of the table restore request. Status values include
   *                 <code>SUCCEEDED</code>, <code>FAILED</code>, <code>CANCELED</code>,
   *                 <code>PENDING</code>, <code>IN_PROGRESS</code>.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The time that the table restore request was made, in Universal Coordinated Time
   *             (UTC).</p>
   * @public
   */
  RequestTime?: Date | undefined;

  /**
   * <p>The amount of data restored to the new table so far, in megabytes (MB).</p>
   * @public
   */
  ProgressInMegaBytes?: number | undefined;

  /**
   * <p>The total amount of data to restore to the new table, in megabytes (MB).</p>
   * @public
   */
  TotalDataInMegaBytes?: number | undefined;

  /**
   * <p>The identifier of the Amazon Redshift cluster that the table is being restored
   *             to.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The identifier of the snapshot that the table is being restored from.</p>
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * <p>The name of the source database that contains the table being restored.</p>
   * @public
   */
  SourceDatabaseName?: string | undefined;

  /**
   * <p>The name of the source schema that contains the table being restored.</p>
   * @public
   */
  SourceSchemaName?: string | undefined;

  /**
   * <p>The name of the source table being restored.</p>
   * @public
   */
  SourceTableName?: string | undefined;

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
   * <p>The name of the table to create as a result of the table restore request.</p>
   * @public
   */
  NewTableName?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface TableRestoreStatusMessage {
  /**
   * <p>A list of status details for one or more table restore requests.</p>
   * @public
   */
  TableRestoreStatusDetails?: TableRestoreStatus[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent <a>DescribeTableRestoreStatus</a> request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeTagsMessage {
  /**
   * <p>The Amazon Resource Name (ARN) for which you want to describe the tag or tags. For
   *             example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>. </p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The type of resource with which you want to view tags. Valid resource types are: </p>
   *          <ul>
   *             <li>
   *                <p>Cluster</p>
   *             </li>
   *             <li>
   *                <p>CIDR/IP</p>
   *             </li>
   *             <li>
   *                <p>EC2 security group</p>
   *             </li>
   *             <li>
   *                <p>Snapshot</p>
   *             </li>
   *             <li>
   *                <p>Cluster security group</p>
   *             </li>
   *             <li>
   *                <p>Subnet group</p>
   *             </li>
   *             <li>
   *                <p>HSM connection</p>
   *             </li>
   *             <li>
   *                <p>HSM certificate</p>
   *             </li>
   *             <li>
   *                <p>Parameter group</p>
   *             </li>
   *             <li>
   *                <p>Snapshot copy grant</p>
   *             </li>
   *             <li>
   *                <p>Integration (zero-ETL integration or S3 event integration)</p>
   *                <note>
   *                   <p>To describe the tags associated with an <code>integration</code>, don't specify <code>ResourceType</code>,
   *                     instead specify the <code>ResourceName</code> of the integration.</p>
   *                </note>
   *             </li>
   *          </ul>
   *          <p>For more information about Amazon Redshift resource types and constructing ARNs, go to
   *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-iam-access-control-specify-actions">Specifying Policy Elements: Actions, Effects, Resources, and Principals</a> in
   *             the Amazon Redshift Cluster Management Guide. </p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The maximum number or response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned <code>marker</code> value.
   *         </p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>marker</code> parameter
   *             and retrying the command. If the <code>marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching resources that are
   *             associated with the specified key or keys. For example, suppose that you have resources
   *             tagged with keys called <code>owner</code> and <code>environment</code>. If you specify
   *             both of these tag keys in the request, Amazon Redshift returns a response with all resources
   *             that have either or both of these tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching resources that are
   *             associated with the specified value or values. For example, suppose that you have
   *             resources tagged with values called <code>admin</code> and <code>test</code>. If you
   *             specify both of these tag values in the request, Amazon Redshift returns a response with all
   *             resources that have either or both of these tag values associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * <p>A tag and its associated resource.</p>
 * @public
 */
export interface TaggedResource {
  /**
   * <p>The tag for the resource.</p>
   * @public
   */
  Tag?: Tag | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) with which the tag is associated, for example:
   *                 <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The type of resource with which the tag is associated. Valid resource types are: </p>
   *          <ul>
   *             <li>
   *                <p>Cluster</p>
   *             </li>
   *             <li>
   *                <p>CIDR/IP</p>
   *             </li>
   *             <li>
   *                <p>EC2 security group</p>
   *             </li>
   *             <li>
   *                <p>Snapshot</p>
   *             </li>
   *             <li>
   *                <p>Cluster security group</p>
   *             </li>
   *             <li>
   *                <p>Subnet group</p>
   *             </li>
   *             <li>
   *                <p>HSM connection</p>
   *             </li>
   *             <li>
   *                <p>HSM certificate</p>
   *             </li>
   *             <li>
   *                <p>Parameter group</p>
   *             </li>
   *          </ul>
   *          <p>For more information about Amazon Redshift resource types and constructing ARNs, go to
   *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-iam-access-control-specify-actions">Constructing an Amazon Redshift Amazon Resource Name (ARN)</a> in the
   *             Amazon Redshift Cluster Management Guide. </p>
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface TaggedResourceListMessage {
  /**
   * <p>A list of tags with their associated resources.</p>
   * @public
   */
  TaggedResources?: TaggedResource[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUsageLimitsMessage {
  /**
   * <p>The identifier of the usage limit to describe.</p>
   * @public
   */
  UsageLimitId?: string | undefined;

  /**
   * <p>The identifier of the cluster for which you want to describe usage limits.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The feature type for which you want to describe usage limits.</p>
   * @public
   */
  FeatureType?: UsageLimitFeatureType | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeUsageLimits</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching usage limit objects
   *             that are associated with the specified key or keys. For example, suppose that you
   *             have parameter groups that are tagged with keys called <code>owner</code> and
   *             <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the usage limit objects have either or both of these
   *             tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching usage limit objects
   *             that are associated with the specified tag value or values. For example, suppose
   *             that you have parameter groups that are tagged with values called <code>admin</code> and
   *             <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the usage limit objects that have either or both of these tag
   *             values associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * @public
 */
export interface UsageLimitList {
  /**
   * <p>Contains the output from the <a>DescribeUsageLimits</a>
   *             action. </p>
   * @public
   */
  UsageLimits?: UsageLimit[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DisableLoggingMessage {
  /**
   * <p>The identifier of the cluster on which logging is to be stopped.</p>
   *          <p>Example: <code>examplecluster</code>
   *          </p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DisableSnapshotCopyMessage {
  /**
   * <p>The unique identifier of the source cluster that you want to disable copying of
   *             snapshots to a destination region.</p>
   *          <p>Constraints: Must be the valid name of an existing cluster that has cross-region
   *             snapshot copy enabled.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DisableSnapshotCopyResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DisassociateDataShareConsumerMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare to remove association for.</p>
   * @public
   */
  DataShareArn: string | undefined;

  /**
   * <p>A value that specifies whether association for the datashare is removed from the
   *             entire account.</p>
   * @public
   */
  DisassociateEntireAccount?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the consumer namespace that association for
   *             the datashare is removed from.</p>
   * @public
   */
  ConsumerArn?: string | undefined;

  /**
   * <p>From a datashare consumer account, removes association of a datashare from all the existing and future namespaces in the specified Amazon Web Services Region.</p>
   * @public
   */
  ConsumerRegion?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface EnableLoggingMessage {
  /**
   * <p>The identifier of the cluster on which logging is to be started.</p>
   *          <p>Example: <code>examplecluster</code>
   *          </p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of an existing S3 bucket where the log files are to be stored.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the same region as the cluster</p>
   *             </li>
   *             <li>
   *                <p>The cluster must have read bucket and put object permissions</p>
   *             </li>
   *          </ul>
   * @public
   */
  BucketName?: string | undefined;

  /**
   * <p>The prefix applied to the log file names.</p>
   *          <p>Valid characters are any letter from any language, any whitespace character, any numeric character, and the following characters:
   *             underscore (<code>_</code>), period (<code>.</code>), colon (<code>:</code>), slash (<code>/</code>), equal (<code>=</code>), plus (<code>+</code>), backslash (<code>\</code>),
   *             hyphen (<code>-</code>), at symbol (<code>@</code>).</p>
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * <p>The log destination type. An enum with possible values of <code>s3</code> and <code>cloudwatch</code>.</p>
   * @public
   */
  LogDestinationType?: LogDestinationType | undefined;

  /**
   * <p>The collection of exported log types. Possible values are <code>connectionlog</code>, <code>useractivitylog</code>, and <code>userlog</code>.</p>
   * @public
   */
  LogExports?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface EnableSnapshotCopyMessage {
  /**
   * <p>The unique identifier of the source cluster to copy snapshots from.</p>
   *          <p>Constraints: Must be the valid name of an existing cluster that does not already
   *             have cross-region snapshot copy enabled.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The destination Amazon Web Services Region that you want to copy snapshots to.</p>
   *          <p>Constraints: Must be the name of a valid Amazon Web Services Region. For more information, see
   *                 <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region">Regions and Endpoints</a> in the Amazon Web Services General Reference.
   *         </p>
   * @public
   */
  DestinationRegion: string | undefined;

  /**
   * <p>The number of days to retain automated snapshots in the destination region after
   *             they are copied from the source region.</p>
   *          <p>Default: 7.</p>
   *          <p>Constraints: Must be at least 1 and no more than 35.</p>
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * <p>The name of the snapshot copy grant to use when snapshots of an Amazon Web Services KMS-encrypted
   *             cluster are copied to the destination region.</p>
   * @public
   */
  SnapshotCopyGrantName?: string | undefined;

  /**
   * <p>The number of days to retain newly copied snapshots in the destination Amazon Web Services Region
   *             after they are copied from the source Amazon Web Services Region. If the value is -1, the manual
   *             snapshot is retained indefinitely. </p>
   *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;
}

/**
 * @public
 */
export interface EnableSnapshotCopyResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface FailoverPrimaryComputeInputMessage {
  /**
   * <p>The unique identifier of the cluster for which the primary compute unit will be failed over to another Availability Zone.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface FailoverPrimaryComputeResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p>The request parameters to get cluster credentials.</p>
 * @public
 */
export interface GetClusterCredentialsMessage {
  /**
   * <p>The name of a database user. If a user name matching <code>DbUser</code> exists in
   *             the database, the temporary user credentials have the same permissions as the existing
   *             user. If <code>DbUser</code> doesn't exist in the database and <code>Autocreate</code>
   *             is <code>True</code>, a new user is created using the value for <code>DbUser</code> with
   *             PUBLIC permissions. If a database user matching the value for <code>DbUser</code>
   *             doesn't exist and <code>Autocreate</code> is <code>False</code>, then the command
   *             succeeds but the connection attempt will fail because the user doesn't exist in the
   *             database.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">CREATE USER</a> in the Amazon
   *             Redshift Database Developer Guide. </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 64 alphanumeric characters or hyphens. The user name can't be
   *                         <code>PUBLIC</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must contain uppercase or lowercase letters, numbers, underscore, plus sign, period
   *                     (dot), at symbol (@), or hyphen.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Must not contain a colon ( : ) or slash ( / ). </p>
   *             </li>
   *             <li>
   *                <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon
   *                     Redshift Database Developer Guide.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DbUser: string | undefined;

  /**
   * <p>The name of a database that <code>DbUser</code> is authorized to log on to. If
   *                 <code>DbName</code> is not specified, <code>DbUser</code> can log on to any existing
   *             database.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 64 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                <p>Must contain uppercase or lowercase letters, numbers, underscore, plus sign, period
   *                     (dot), at symbol (@), or hyphen.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Must not contain a colon ( : ) or slash ( / ). </p>
   *             </li>
   *             <li>
   *                <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon
   *                     Redshift Database Developer Guide.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DbName?: string | undefined;

  /**
   * <p>The unique identifier of the cluster that contains the database for which you are
   *             requesting credentials. This parameter is case sensitive.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The number of seconds until the returned temporary password expires.</p>
   *          <p>Constraint: minimum 900, maximum 3600.</p>
   *          <p>Default: 900</p>
   * @public
   */
  DurationSeconds?: number | undefined;

  /**
   * <p>Create a database user with the name specified for the user named in
   *                 <code>DbUser</code> if one does not exist.</p>
   * @public
   */
  AutoCreate?: boolean | undefined;

  /**
   * <p>A list of the names of existing database groups that the user named in
   *                 <code>DbUser</code> will join for the current session, in addition to any group
   *             memberships for an existing user. If not specified, a new user is added only to
   *             PUBLIC.</p>
   *          <p>Database group name constraints</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 64 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                <p>Must contain only lowercase letters, numbers, underscore, plus sign, period
   *                     (dot), at symbol (@), or hyphen.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Must not contain a colon ( : ) or slash ( / ). </p>
   *             </li>
   *             <li>
   *                <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon
   *                     Redshift Database Developer Guide.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DbGroups?: string[] | undefined;

  /**
   * <p>The custom domain name for the cluster credentials.</p>
   * @public
   */
  CustomDomainName?: string | undefined;
}

/**
 * @public
 */
export interface GetClusterCredentialsWithIAMMessage {
  /**
   * <p>The name of the database for which you are requesting credentials.
   *             If the database name is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name.
   *             If the database name is not specified, access to all databases is allowed.</p>
   * @public
   */
  DbName?: string | undefined;

  /**
   * <p>The unique identifier of the cluster that contains the database for which you are
   *             requesting credentials. </p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The number of seconds until the returned temporary password expires.</p>
   *          <p>Range: 900-3600. Default: 900.</p>
   * @public
   */
  DurationSeconds?: number | undefined;

  /**
   * <p>The custom domain name for the IAM message cluster credentials.</p>
   * @public
   */
  CustomDomainName?: string | undefined;
}

/**
 * <p>The request parameters for <code>GetIdentityCenterAuthToken</code>.</p>
 * @public
 */
export interface GetIdentityCenterAuthTokenRequest {
  /**
   * <p>A list of cluster identifiers that the generated token can be used with.
   *             The token will be scoped to only allow authentication to the specified clusters.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ClusterIds</code> must contain at least 1 cluster identifier.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ClusterIds</code> can hold a maximum of 20 cluster identifiers.</p>
   *             </li>
   *             <li>
   *                <p>Cluster identifiers must be 1 to 63 characters in length.</p>
   *             </li>
   *             <li>
   *                <p>The characters accepted for cluster identifiers are the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>Alphanumeric characters</p>
   *                   </li>
   *                   <li>
   *                      <p>Hyphens</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Cluster identifiers must start with a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cluster identifiers can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ClusterIds: string[] | undefined;
}

/**
 * <p>The response from GetIdentityCenterAuthToken containing the encrypted authentication token and expiration time.</p>
 * @public
 */
export interface GetIdentityCenterAuthTokenResponse {
  /**
   * <p>The encrypted authentication token containing the caller's Amazon Web Services IAM Identity Center identity information.
   *             This token is encrypted using Key Management Service and can only be decrypted by the specified Amazon Redshift clusters.
   *             Use this token with Amazon Redshift drivers to authenticate using your Amazon Web Services IAM Identity Center identity.</p>
   * @public
   */
  Token?: string | undefined;

  /**
   * <p>The time (UTC) when the token expires. After this timestamp,
   *             the token will no longer be valid for authentication.</p>
   * @public
   */
  ExpirationTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetReservedNodeExchangeConfigurationOptionsInputMessage {
  /**
   * <p>The action type of the reserved-node configuration. The action type can be an exchange initiated from either a snapshot or a resize.</p>
   * @public
   */
  ActionType: ReservedNodeExchangeActionType | undefined;

  /**
   * <p>The identifier for the cluster that is the source for a reserved-node exchange.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The identifier for the snapshot that is the source for the reserved-node exchange.</p>
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>Marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous <code>GetReservedNodeExchangeConfigurationOptions</code> request. If this
   *             parameter is specified, the response includes only records beyond the marker, up to the value
   *             specified by the <code>MaxRecords</code> parameter. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Details for a reserved-node exchange. Examples include the node type for a
 *             reserved node, the price for a node, the node's state, and other details.</p>
 * @public
 */
export interface ReservedNodeConfigurationOption {
  /**
   * <p>Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node
   *             offerings. </p>
   * @public
   */
  SourceReservedNode?: ReservedNode | undefined;

  /**
   * <p>The target reserved-node count.</p>
   * @public
   */
  TargetReservedNodeCount?: number | undefined;

  /**
   * <p>Describes a reserved node offering.</p>
   * @public
   */
  TargetReservedNodeOffering?: ReservedNodeOffering | undefined;
}

/**
 * @public
 */
export interface GetReservedNodeExchangeConfigurationOptionsOutputMessage {
  /**
   * <p>A pagination token provided by a previous <code>GetReservedNodeExchangeConfigurationOptions</code> request.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>the configuration options for the reserved-node
   *             exchange. These options include information about the source reserved node and target reserved
   *             node. Details include the node type, the price, the node count, and the offering
   *             type.</p>
   * @public
   */
  ReservedNodeConfigurationOptionList?: ReservedNodeConfigurationOption[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface GetReservedNodeExchangeOfferingsInputMessage {
  /**
   * <p>A string representing the node identifier for the DC1 Reserved Node to be
   *             exchanged.</p>
   * @public
   */
  ReservedNodeId: string | undefined;

  /**
   * <p>An integer setting the maximum number of ReservedNodeOfferings to
   *             retrieve.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of
   *             ReservedNodeOfferings.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface GetReservedNodeExchangeOfferingsOutputMessage {
  /**
   * <p>An optional parameter that specifies the starting point for returning a set of
   *             response records. When the results of a <code>GetReservedNodeExchangeOfferings</code>
   *             request exceed the value specified in MaxRecords, Amazon Redshift returns a value in the
   *             marker field of the response. You can retrieve the next set of response records by
   *             providing the returned marker value in the marker parameter and retrying the request.
   *         </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Returns an array of <a>ReservedNodeOffering</a> objects.</p>
   * @public
   */
  ReservedNodeOfferings?: ReservedNodeOffering[] | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource of which its resource policy is fetched.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * <p>The policy that is attached to a resource.</p>
 * @public
 */
export interface ResourcePolicy {
  /**
   * <p>The resources that a policy is attached to.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The content of a resource policy.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResult {
  /**
   * <p>The content of the resource policy.</p>
   * @public
   */
  ResourcePolicy?: ResourcePolicy | undefined;
}

/**
 * <p>Contains configuration information for lakehouse integration, including the cluster identifier, catalog ARN, and registration status.</p>
 * @public
 */
export interface LakehouseConfiguration {
  /**
   * <p>The unique identifier of the cluster associated with this lakehouse configuration.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM Identity Center application used for enabling Amazon Web Services IAM Identity Center trusted identity propagation on a cluster enabled with Amazon Redshift federated permissions.</p>
   * @public
   */
  LakehouseIdcApplicationArn?: string | undefined;

  /**
   * <p>The current status of the lakehouse registration. Indicates whether the cluster is successfully registered with the lakehouse.</p>
   * @public
   */
  LakehouseRegistrationStatus?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Glue data catalog associated with the lakehouse configuration.</p>
   * @public
   */
  CatalogArn?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsMessage {
  /**
   * <p>The unique identifier of the Amazon Redshift cluster for which the list of Advisor recommendations is returned.
   *           If the neither the cluster identifier and the cluster namespace ARN parameters are specified, then recommendations for all clusters in the account are returned.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Redshift cluster namespace Amazon Resource Name (ARN) for which the list of Advisor recommendations is returned.
   *             If the neither the cluster identifier and the cluster namespace ARN parameters are specified, then recommendations for all clusters in the account are returned.</p>
   * @public
   */
  NamespaceArn?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of remaining response records
   *             exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve
   *             the next set of records by retrying the command with the returned marker value.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a
   *             value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the Marker parameter
   *             and retrying the command. If the Marker field is empty, all response
   *             records have been retrieved for the request.
   *         </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>The recommended action from the Amazon Redshift Advisor recommendation.</p>
 * @public
 */
export interface RecommendedAction {
  /**
   * <p>The specific instruction about the command.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>The database name to perform the action on. Only applicable if the type of command is SQL.</p>
   * @public
   */
  Database?: string | undefined;

  /**
   * <p>The command to run.</p>
   * @public
   */
  Command?: string | undefined;

  /**
   * <p>The type of command.</p>
   * @public
   */
  Type?: RecommendedActionType | undefined;
}

/**
 * <p>A link to an Amazon Redshift Advisor reference for more information about a recommendation.</p>
 * @public
 */
export interface ReferenceLink {
  /**
   * <p>The hyperlink text that describes the link to more information.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>The URL address to find more information.</p>
   * @public
   */
  Link?: string | undefined;
}

/**
 * <p>An Amazon Redshift Advisor recommended action on the Amazon Redshift cluster.</p>
 * @public
 */
export interface Recommendation {
  /**
   * <p>A unique identifier of the Advisor recommendation.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The unique identifier of the cluster for which the recommendation is returned.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Redshift cluster namespace ARN for which the recommendations is returned.</p>
   * @public
   */
  NamespaceArn?: string | undefined;

  /**
   * <p>The date and time (UTC) that the recommendation was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The type of Advisor recommendation.</p>
   * @public
   */
  RecommendationType?: string | undefined;

  /**
   * <p>The title of the recommendation.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The description of the recommendation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The description of what was observed about your cluster.</p>
   * @public
   */
  Observation?: string | undefined;

  /**
   * <p>The scale of the impact that the Advisor recommendation has to the performance and cost of the cluster.</p>
   * @public
   */
  ImpactRanking?: ImpactRankingType | undefined;

  /**
   * <p>The description of the recommendation.</p>
   * @public
   */
  RecommendationText?: string | undefined;

  /**
   * <p>List of Amazon Redshift recommended actions.</p>
   * @public
   */
  RecommendedActions?: RecommendedAction[] | undefined;

  /**
   * <p>List of helpful links for more information about the Advisor recommendation.</p>
   * @public
   */
  ReferenceLinks?: ReferenceLink[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsResult {
  /**
   * <p>The Advisor recommendations for action on the Amazon Redshift cluster.</p>
   * @public
   */
  Recommendations?: Recommendation[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent
   *             request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the Marker parameter
   *             and retrying the command. If the Marker field is empty, all response
   *             records have been retrieved for the request.
   *         </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ModifyAquaInputMessage {
  /**
   * <p>The identifier of the cluster to be modified.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>This parameter is retired. Amazon Redshift automatically  determines whether to use AQUA (Advanced Query Accelerator).</p>
   * @public
   */
  AquaConfigurationStatus?: AquaConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface ModifyAquaOutputMessage {
  /**
   * <p>This parameter is retired. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator). </p>
   * @public
   */
  AquaConfiguration?: AquaConfiguration | undefined;
}

/**
 * @public
 */
export interface ModifyAuthenticationProfileMessage {
  /**
   * <p>The name of the authentication profile to replace.</p>
   * @public
   */
  AuthenticationProfileName: string | undefined;

  /**
   * <p>The new content of the authentication profile in JSON format.
   *             The maximum length of the JSON string is determined by a quota for your account.</p>
   * @public
   */
  AuthenticationProfileContent: string | undefined;
}

/**
 * @public
 */
export interface ModifyAuthenticationProfileResult {
  /**
   * <p>The name of the authentication profile that was replaced.</p>
   * @public
   */
  AuthenticationProfileName?: string | undefined;

  /**
   * <p>The updated content of the authentication profile in JSON format.</p>
   * @public
   */
  AuthenticationProfileContent?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyClusterMessage {
  /**
   * <p>The unique identifier of the cluster to be modified.</p>
   *          <p>Example: <code>examplecluster</code>
   *          </p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The new cluster type.</p>
   *          <p>When you submit your cluster resize request, your existing cluster goes into a
   *             read-only mode. After Amazon Redshift provisions a new cluster based on your resize
   *             requirements, there will be outage for a period while the old cluster is deleted and
   *             your connection is switched to the new cluster. You can use <a>DescribeResize</a> to track the progress of the resize request. </p>
   *          <p>Valid Values: <code> multi-node | single-node </code>
   *          </p>
   * @public
   */
  ClusterType?: string | undefined;

  /**
   * <p>The new node type of the cluster. If you specify a new node type, you must also
   *             specify the number of nodes parameter.</p>
   *          <p>
   * For more information about resizing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/rs-resize-tutorial.html">Resizing Clusters in Amazon Redshift</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *          <p>Valid Values:
   *             <code>dc2.large</code> | <code>dc2.8xlarge</code> |
   *             <code>ra3.large</code> |  <code>ra3.xlplus</code> |  <code>ra3.4xlarge</code> | <code>ra3.16xlarge</code>
   *          </p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The new number of nodes of the cluster. If you specify a new number of nodes, you
   *             must also specify the node type parameter.</p>
   *          <p>
   * For more information about resizing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/rs-resize-tutorial.html">Resizing Clusters in Amazon Redshift</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *          <p>Valid Values: Integer greater than <code>0</code>.</p>
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * <p>A list of cluster security groups to be authorized on this cluster. This change is
   *             asynchronously applied as soon as possible.</p>
   *          <p>Security groups currently associated with the cluster, and not in the list of
   *             groups to apply, will be revoked from the cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   * @public
   */
  ClusterSecurityGroups?: string[] | undefined;

  /**
   * <p>A list of virtual private cloud (VPC) security groups to be associated with the
   *             cluster. This change is asynchronously applied as soon as possible.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The new password for the cluster admin user. This change is asynchronously applied
   *             as soon as possible. Between the time of the request and the completion of the request,
   *             the <code>MasterUserPassword</code> element exists in the
   *                 <code>PendingModifiedValues</code> element of the operation response. </p>
   *          <p>You can't use <code>MasterUserPassword</code> if <code>ManageMasterPassword</code> is <code>true</code>.</p>
   *          <note>
   *             <p>Operations never return the password, so this operation provides a way to
   *                 regain access to the admin user account for a cluster if the password is
   *                 lost.</p>
   *          </note>
   *          <p>Default: Uses existing setting.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be between 8 and 64 characters in length.</p>
   *             </li>
   *             <li>
   *                <p>Must contain at least one uppercase letter.</p>
   *             </li>
   *             <li>
   *                <p>Must contain at least one lowercase letter.</p>
   *             </li>
   *             <li>
   *                <p>Must contain one number.</p>
   *             </li>
   *             <li>
   *                <p>Can be any printable ASCII character (ASCII code 33-126) except <code>'</code>
   *                     (single quote), <code>"</code> (double quote), <code>\</code>, <code>/</code>, or <code>@</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>The name of the cluster parameter group to apply to this cluster. This change is
   *             applied only after the cluster is rebooted. To reboot a cluster use <a>RebootCluster</a>. </p>
   *          <p>Default: Uses existing setting.</p>
   *          <p>Constraints: The cluster parameter group must be in the same parameter group family
   *             that matches the cluster version.</p>
   * @public
   */
  ClusterParameterGroupName?: string | undefined;

  /**
   * <p>The number of days that automated snapshots are retained. If the value is 0,
   *             automated snapshots are disabled. Even if automated snapshots are disabled, you can
   *             still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p>
   *          <p>If you decrease the automated snapshot retention period from its current value,
   *             existing automated snapshots that fall outside of the new retention period will be
   *             immediately deleted.</p>
   *          <p>You can't disable automated snapshots for RA3 node types. Set the automated retention period from 1-35 days.</p>
   *          <p>Default: Uses existing setting.</p>
   *          <p>Constraints: Must be a value from 0 to 35.</p>
   * @public
   */
  AutomatedSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>The default for number of days that a newly created manual snapshot is retained. If
   *             the value is -1, the manual snapshot is retained indefinitely. This value doesn't
   *             retroactively change the retention periods of existing manual snapshots.</p>
   *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *          <p>The default value is -1.</p>
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>The weekly time range (in UTC) during which system maintenance can occur, if
   *             necessary. If system maintenance is necessary during the window, it may result in an
   *             outage.</p>
   *          <p>This maintenance window change is made immediately. If the new maintenance window
   *             indicates the current time, there must be at least 120 minutes between the current time
   *             and end of the window in order to ensure that pending changes are applied.</p>
   *          <p>Default: Uses existing setting.</p>
   *          <p>Format: ddd:hh24:mi-ddd:hh24:mi, for example
   *             <code>wed:07:30-wed:08:00</code>.</p>
   *          <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *          <p>Constraints: Must be at least 30 minutes.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The new version number of the Amazon Redshift engine to upgrade to.</p>
   *          <p>For major version upgrades, if a non-default cluster parameter group is currently
   *             in use, a new cluster parameter group in the cluster parameter group family for the new
   *             version must be specified. The new cluster parameter group can be the default for that
   *             cluster parameter group family.
   * For more information about parameters and parameter groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *          <p>Example: <code>1.0</code>
   *          </p>
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * <p>If <code>true</code>, major version upgrades will be applied automatically to the
   *             cluster during the maintenance window. </p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  AllowVersionUpgrade?: boolean | undefined;

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
   *                <p>Must be unique for all clusters within an Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>examplecluster</code>
   *          </p>
   * @public
   */
  NewClusterIdentifier?: string | undefined;

  /**
   * <p>If <code>true</code>, the cluster can be accessed from a public network. Only
   *             clusters in VPCs can be set to be publicly available.</p>
   *          <p>Default: false</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>The Elastic IP (EIP) address for the cluster.</p>
   *          <p>Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible
   *             through an Internet gateway. For more information about provisioning clusters in
   *             EC2-VPC, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms">Supported
   *                 Platforms to Launch Your Cluster</a> in the Amazon Redshift Cluster Management Guide.</p>
   * @public
   */
  ElasticIp?: string | undefined;

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
   * <p>The name for the maintenance track that you want to assign for the cluster. This name
   *             change is asynchronous. The new track name stays in the
   *                 <code>PendingModifiedValues</code> for the cluster until the next maintenance
   *             window. When the maintenance track changes, the cluster is switched to the latest
   *             cluster release available for the maintenance track. At this point, the maintenance
   *             track name is applied.</p>
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * <p>Indicates whether the cluster is encrypted. If the value is encrypted (true) and you
   *             provide a value for the <code>KmsKeyId</code> parameter, we encrypt the cluster
   *             with the provided <code>KmsKeyId</code>. If you don't provide a <code>KmsKeyId</code>,
   *             we encrypt with the default key. </p>
   *          <p>If the value is not encrypted (false), then the cluster is decrypted. </p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The Key Management Service (KMS) key ID of the encryption key that you want to use
   *             to encrypt data in the cluster.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete.</p>
   * @public
   */
  AvailabilityZoneRelocation?: boolean | undefined;

  /**
   * <p>The option to initiate relocation for an Amazon Redshift cluster to the target Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The option to change the port of an Amazon Redshift cluster.</p>
   *          <p>Valid Values:
   *         </p>
   *          <ul>
   *             <li>
   *                <p>For clusters with ra3 nodes - Select a port within the ranges <code>5431-5455</code> or <code>8191-8215</code>. (If you have an existing cluster
   *                 with ra3 nodes, it isn't required that you change the port to these ranges.)</p>
   *             </li>
   *             <li>
   *                <p>For clusters with dc2 nodes - Select a port within the range <code>1150-65535</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>If <code>true</code>, Amazon Redshift uses Secrets Manager to manage this cluster's admin credentials.
   *             You can't use <code>MasterUserPassword</code> if <code>ManageMasterPassword</code> is true.
   *             If <code>ManageMasterPassword</code> is false or not set, Amazon Redshift uses
   *             <code>MasterUserPassword</code> for the admin user account's password.
   *         </p>
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
   * <p>The IP address types that the cluster supports. Possible values are <code>ipv4</code> and <code>dualstack</code>.</p>
   * @public
   */
  IpAddressType?: string | undefined;

  /**
   * <p>If true and the cluster is currently only deployed in a single Availability Zone, the cluster will be modified to be deployed in two Availability Zones.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyClusterResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface ModifyClusterDbRevisionMessage {
  /**
   * <p>The unique identifier of a cluster whose database revision you want to modify. </p>
   *          <p>Example: <code>examplecluster</code>
   *          </p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the database revision. You can retrieve this value from the
   *             response to the <a>DescribeClusterDbRevisions</a> request.</p>
   * @public
   */
  RevisionTarget: string | undefined;
}

/**
 * @public
 */
export interface ModifyClusterDbRevisionResult {
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
export interface ModifyClusterIamRolesMessage {
  /**
   * <p>The unique identifier of the cluster for which you want to associate or
   *             disassociate IAM roles.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>Zero or more IAM roles to associate with the cluster. The roles must be in their
   *             Amazon Resource Name (ARN) format. </p>
   * @public
   */
  AddIamRoles?: string[] | undefined;

  /**
   * <p>Zero or more IAM roles in ARN format to disassociate from the cluster. </p>
   * @public
   */
  RemoveIamRoles?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was last modified.</p>
   * @public
   */
  DefaultIamRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface ModifyClusterIamRolesResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface ModifyClusterMaintenanceMessage {
  /**
   * <p>A unique identifier for the cluster.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>A boolean indicating whether to enable the deferred maintenance window. </p>
   * @public
   */
  DeferMaintenance?: boolean | undefined;

  /**
   * <p>A unique identifier for the deferred maintenance window.</p>
   * @public
   */
  DeferMaintenanceIdentifier?: string | undefined;

  /**
   * <p>A timestamp indicating the start time for the deferred maintenance window.</p>
   * @public
   */
  DeferMaintenanceStartTime?: Date | undefined;

  /**
   * <p>A timestamp indicating end time for the deferred maintenance window. If you specify an
   *             end time, you can't specify a duration.</p>
   * @public
   */
  DeferMaintenanceEndTime?: Date | undefined;

  /**
   * <p>An integer indicating the duration of the maintenance window in days. If you specify a
   *             duration, you can't specify an end time. The duration must be 45 days or less.</p>
   * @public
   */
  DeferMaintenanceDuration?: number | undefined;
}

/**
 * @public
 */
export interface ModifyClusterMaintenanceResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p>Describes a modify cluster parameter group operation. </p>
 * @public
 */
export interface ModifyClusterParameterGroupMessage {
  /**
   * <p>The name of the parameter group to be modified.</p>
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>An array of parameters to be modified. A maximum of 20 parameters can be modified
   *             in a single request.</p>
   *          <p>For each parameter to be modified, you must supply at least the parameter name and
   *             parameter value; other name-value pairs of the parameter are optional.</p>
   *          <p>For the workload management (WLM) configuration, you must supply all the name-value
   *             pairs in the wlm_json_configuration parameter.</p>
   * @public
   */
  Parameters: Parameter[] | undefined;
}

/**
 * @public
 */
export interface ModifyClusterSnapshotMessage {
  /**
   * <p>The identifier of the snapshot whose setting you want to modify.</p>
   * @public
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely.</p>
   *          <p>If the manual snapshot falls outside of the new retention period, you can specify the
   *             force option to immediately delete the snapshot.</p>
   *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>A Boolean option to override an exception if the retention period has already
   *             passed.</p>
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyClusterSnapshotResult {
  /**
   * <p>Describes a snapshot.</p>
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface ModifyClusterSnapshotScheduleMessage {
  /**
   * <p>A unique identifier for the cluster whose snapshot schedule you want to modify.
   *         </p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>A unique alphanumeric identifier for the schedule that you want to associate with the
   *             cluster.</p>
   * @public
   */
  ScheduleIdentifier?: string | undefined;

  /**
   * <p>A boolean to indicate whether to remove the assoiciation between the cluster and the
   *             schedule.</p>
   * @public
   */
  DisassociateSchedule?: boolean | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyClusterSubnetGroupMessage {
  /**
   * <p>The name of the subnet group to be modified.</p>
   * @public
   */
  ClusterSubnetGroupName: string | undefined;

  /**
   * <p>A text description of the subnet group to be modified.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>An array of VPC subnet IDs. A maximum of 20 subnets can be modified in a single
   *             request.</p>
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyClusterSubnetGroupResult {
  /**
   * <p>Describes a subnet group.</p>
   * @public
   */
  ClusterSubnetGroup?: ClusterSubnetGroup | undefined;
}

/**
 * @public
 */
export interface ModifyCustomDomainAssociationMessage {
  /**
   * <p>The custom domain name for a changed custom domain association.</p>
   * @public
   */
  CustomDomainName: string | undefined;

  /**
   * <p>The certificate Amazon Resource Name (ARN) for the changed custom domain association.</p>
   * @public
   */
  CustomDomainCertificateArn: string | undefined;

  /**
   * <p>The identifier of the cluster to change a custom domain association for.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ModifyCustomDomainAssociationResult {
  /**
   * <p>The custom domain name associated with the result for the changed custom domain association.</p>
   * @public
   */
  CustomDomainName?: string | undefined;

  /**
   * <p>The certificate Amazon Resource Name (ARN) associated with the result for the changed custom domain association.</p>
   * @public
   */
  CustomDomainCertificateArn?: string | undefined;

  /**
   * <p>The identifier of the cluster associated with the result for the changed custom domain association.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The certificate expiration time associated with the result for the changed custom domain association.</p>
   * @public
   */
  CustomDomainCertExpiryTime?: string | undefined;
}

/**
 * @public
 */
export interface ModifyEndpointAccessMessage {
  /**
   * <p>The endpoint to be modified.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The complete list of VPC security groups associated with the endpoint after the endpoint is modified.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * <p>The name of the modified Amazon Redshift event notification subscription.</p>
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic to be used by the event
   *             notification subscription.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>The type of source that will be generating the events. For example, if you want to
   *             be notified of events generated by a cluster, you would set this parameter to cluster.
   *             If this value is not specified, events are returned for all Amazon Redshift objects in your
   *             Amazon Web Services account. You must specify a source type in order to specify source IDs.</p>
   *          <p>Valid values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot, and scheduled-action.</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>A list of one or more identifiers of Amazon Redshift source objects. All of the objects
   *             must be of the same type as was specified in the source type parameter. The event
   *             subscription will return only events generated by the specified objects. If not
   *             specified, then events are returned for all objects within the source type
   *             specified.</p>
   *          <p>Example: my-cluster-1, my-cluster-2</p>
   *          <p>Example: my-snapshot-20131010</p>
   * @public
   */
  SourceIds?: string[] | undefined;

  /**
   * <p>Specifies the Amazon Redshift event categories to be published by the event notification
   *             subscription.</p>
   *          <p>Values: configuration, management, monitoring, security, pending</p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p>Specifies the Amazon Redshift event severity to be published by the event notification
   *             subscription.</p>
   *          <p>Values: ERROR, INFO</p>
   * @public
   */
  Severity?: string | undefined;

  /**
   * <p>A Boolean value indicating if the subscription is enabled. <code>true</code>
   *             indicates the subscription is enabled </p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyEventSubscriptionResult {
  /**
   * <p>Describes event subscriptions.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * @public
 */
export interface ModifyIntegrationMessage {
  /**
   * <p>The unique identifier of the integration to modify.</p>
   * @public
   */
  IntegrationArn: string | undefined;

  /**
   * <p>A new description for the integration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A new name for the integration.</p>
   * @public
   */
  IntegrationName?: string | undefined;
}
