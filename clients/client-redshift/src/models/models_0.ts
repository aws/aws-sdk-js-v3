import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export interface AcceptReservedNodeExchangeInputMessage {
  /**
   * <p>A string representing the node identifier of the DC1 Reserved Node to be
   *             exchanged.</p>
   */
  ReservedNodeId: string | undefined;

  /**
   * <p>The unique identifier of the DC2 Reserved Node offering to be used for the exchange.
   *             You can obtain the value for the parameter by calling <a>GetReservedNodeExchangeOfferings</a>
   *          </p>
   */
  TargetReservedNodeOfferingId: string | undefined;
}

export namespace AcceptReservedNodeExchangeInputMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptReservedNodeExchangeInputMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a recurring charge.</p>
 */
export interface RecurringCharge {
  /**
   * <p>The amount charged per the period of time specified by the recurring charge
   *             frequency.</p>
   */
  RecurringChargeAmount?: number;

  /**
   * <p>The frequency at which the recurring charge amount is applied.</p>
   */
  RecurringChargeFrequency?: string;
}

export namespace RecurringCharge {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecurringCharge): any => ({
    ...obj,
  });
}

export type ReservedNodeOfferingType = "Regular" | "Upgradable";

/**
 * <p>Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node
 *             offerings. </p>
 */
export interface ReservedNode {
  /**
   * <p>The unique identifier for the reservation.</p>
   */
  ReservedNodeId?: string;

  /**
   * <p>The identifier for the reserved node offering.</p>
   */
  ReservedNodeOfferingId?: string;

  /**
   * <p>The node type of the reserved node.</p>
   */
  NodeType?: string;

  /**
   * <p>The time the reservation started. You purchase a reserved node offering for a
   *             duration. This is the start time of that duration.</p>
   */
  StartTime?: Date;

  /**
   * <p>The duration of the node reservation in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The fixed cost Amazon Redshift charges you for this reserved node.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The hourly rate Amazon Redshift charges you for this reserved node.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency code for the reserved cluster.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The number of reserved compute nodes.</p>
   */
  NodeCount?: number;

  /**
   * <p>The state of the reserved compute node.</p>
   *         <p>Possible Values:</p>
   *         <ul>
   *             <li>
   *                 <p>pending-payment-This reserved node has recently been purchased, and the
   *                     sale has been approved, but payment has not yet been confirmed.</p>
   *             </li>
   *             <li>
   *                 <p>active-This reserved node is owned by the caller and is available for
   *                     use.</p>
   *             </li>
   *             <li>
   *                 <p>payment-failed-Payment failed for the purchase attempt.</p>
   *             </li>
   *             <li>
   *                 <p>retired-The reserved node is no longer available. </p>
   *             </li>
   *             <li>
   *                 <p>exchanging-The owner is exchanging the reserved node for another reserved
   *                     node.</p>
   *             </li>
   *          </ul>
   */
  State?: string;

  /**
   * <p>The anticipated utilization of the reserved node, as defined in the reserved node
   *             offering.</p>
   */
  OfferingType?: string;

  /**
   * <p>The recurring charges for the reserved node.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p></p>
   */
  ReservedNodeOfferingType?: ReservedNodeOfferingType | string;
}

export namespace ReservedNode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedNode): any => ({
    ...obj,
  });
}

export interface AcceptReservedNodeExchangeOutputMessage {
  /**
   * <p></p>
   */
  ExchangedReservedNode?: ReservedNode;
}

export namespace AcceptReservedNodeExchangeOutputMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptReservedNodeExchangeOutputMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 */
export interface DependentServiceUnavailableFault extends __SmithyException, $MetadataBearer {
  name: "DependentServiceUnavailableFault";
  $fault: "client";
  message?: string;
}

export namespace DependentServiceUnavailableFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DependentServiceUnavailableFault): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates that the Reserved Node being exchanged is not in an active state.</p>
 */
export interface InvalidReservedNodeStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidReservedNodeStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidReservedNodeStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidReservedNodeStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>User already has a reservation with the given identifier.</p>
 */
export interface ReservedNodeAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "ReservedNodeAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedNodeAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedNodeAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates that the reserved node has already been exchanged.</p>
 */
export interface ReservedNodeAlreadyMigratedFault extends __SmithyException, $MetadataBearer {
  name: "ReservedNodeAlreadyMigratedFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedNodeAlreadyMigratedFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedNodeAlreadyMigratedFault): any => ({
    ...obj,
  });
}

/**
 * <p>The specified reserved compute node not found.</p>
 */
export interface ReservedNodeNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ReservedNodeNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedNodeNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedNodeNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>Specified offering does not exist.</p>
 */
export interface ReservedNodeOfferingNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ReservedNodeOfferingNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedNodeOfferingNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedNodeOfferingNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The requested operation isn't supported.</p>
 */
export interface UnsupportedOperationFault extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOperationFault";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedOperationFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedOperationFault): any => ({
    ...obj,
  });
}

/**
 * <p>You are not authorized to access the cluster.</p>
 */
export interface AccessToClusterDeniedFault extends __SmithyException, $MetadataBearer {
  name: "AccessToClusterDeniedFault";
  $fault: "client";
  message?: string;
}

export namespace AccessToClusterDeniedFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessToClusterDeniedFault): any => ({
    ...obj,
  });
}

/**
 * <p>The owner of the specified snapshot has not authorized your account to access the
 *             snapshot.</p>
 */
export interface AccessToSnapshotDeniedFault extends __SmithyException, $MetadataBearer {
  name: "AccessToSnapshotDeniedFault";
  $fault: "client";
  message?: string;
}

export namespace AccessToSnapshotDeniedFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessToSnapshotDeniedFault): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an attribute value.</p>
 */
export interface AttributeValueTarget {
  /**
   * <p>The value of the attribute.</p>
   */
  AttributeValue?: string;
}

export namespace AttributeValueTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttributeValueTarget): any => ({
    ...obj,
  });
}

/**
 * <p>A name value pair that describes an aspect of an account. </p>
 */
export interface AccountAttribute {
  /**
   * <p>The name of the attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>A list of attribute values.</p>
   */
  AttributeValues?: AttributeValueTarget[];
}

export namespace AccountAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountAttribute): any => ({
    ...obj,
  });
}

export interface AccountAttributeList {
  /**
   * <p>A list of attributes assigned to an account.</p>
   */
  AccountAttributes?: AccountAttribute[];
}

export namespace AccountAttributeList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountAttributeList): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon Web Services account authorized to restore a snapshot.</p>
 */
export interface AccountWithRestoreAccess {
  /**
   * <p>The identifier of an Amazon Web Services account authorized to restore a
   *             snapshot.</p>
   */
  AccountId?: string;

  /**
   * <p>The identifier of an Amazon Web Services support account authorized to restore a
   *             snapshot. For Amazon Web Services Support, the identifier is <code>amazon-redshift-support</code>. </p>
   */
  AccountAlias?: string;
}

export namespace AccountWithRestoreAccess {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountWithRestoreAccess): any => ({
    ...obj,
  });
}

export enum ActionType {
  RECOMMEND_NODE_CONFIG = "recommend-node-config",
  RESIZE_CLUSTER = "resize-cluster",
  RESTORE_CLUSTER = "restore-cluster",
}

/**
 * <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 */
export interface ClusterNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ClusterNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterNotFoundFault): any => ({
    ...obj,
  });
}

export interface PartnerIntegrationInputMessage {
  /**
   * <p>The Amazon Web Services account ID that owns the cluster.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The cluster identifier of the cluster that receives data from the partner.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the database that receives data from the partner.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partner that is authorized to send data.</p>
   */
  PartnerName: string | undefined;
}

export namespace PartnerIntegrationInputMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartnerIntegrationInputMessage): any => ({
    ...obj,
  });
}

export interface PartnerIntegrationOutputMessage {
  /**
   * <p>The name of the database that receives data from the partner.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The name of the partner that is authorized to send data.</p>
   */
  PartnerName?: string;
}

export namespace PartnerIntegrationOutputMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartnerIntegrationOutputMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The name of the partner was not found.</p>
 */
export interface PartnerNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "PartnerNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace PartnerNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartnerNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The partner integration is not authorized.</p>
 */
export interface UnauthorizedPartnerIntegrationFault extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedPartnerIntegrationFault";
  $fault: "client";
  message?: string;
}

export namespace UnauthorizedPartnerIntegrationFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnauthorizedPartnerIntegrationFault): any => ({
    ...obj,
  });
}

export enum AquaConfigurationStatus {
  AUTO = "auto",
  DISABLED = "disabled",
  ENABLED = "enabled",
}

export enum AquaStatus {
  APPLYING = "applying",
  DISABLED = "disabled",
  ENABLED = "enabled",
}

/**
 * <p>The AQUA (Advanced Query Accelerator) configuration of the cluster.</p>
 */
export interface AquaConfiguration {
  /**
   * <p>The value indicates the status of AQUA on the cluster. Possible values include the following.</p>
   *         <ul>
   *             <li>
   *                <p>enabled - AQUA is enabled.</p>
   *             </li>
   *             <li>
   *                <p>disabled - AQUA is not enabled. </p>
   *             </li>
   *             <li>
   *                <p>applying - AQUA status is being applied. </p>
   *             </li>
   *          </ul>
   */
  AquaStatus?: AquaStatus | string;

  /**
   * <p>The value represents how the cluster is configured to use AQUA. Possible values include the following.</p>
   *         <ul>
   *             <li>
   *                <p>enabled - Use AQUA if it is available for the current Amazon Web Services Region and Amazon Redshift node type.</p>
   *             </li>
   *             <li>
   *                <p>disabled - Don't use AQUA. </p>
   *             </li>
   *             <li>
   *                <p>auto - Amazon Redshift determines whether to use AQUA.</p>
   *             </li>
   *          </ul>
   */
  AquaConfigurationStatus?: AquaConfigurationStatus | string;
}

export namespace AquaConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AquaConfiguration): any => ({
    ...obj,
  });
}

export interface AssociateDataShareConsumerMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare that the consumer is to use with the account or the namespace.</p>
   */
  DataShareArn: string | undefined;

  /**
   * <p>A value that specifies whether the datashare is associated with the entire account.</p>
   */
  AssociateEntireAccount?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the consumer that is associated with the
   *             datashare.</p>
   */
  ConsumerArn?: string;
}

export namespace AssociateDataShareConsumerMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateDataShareConsumerMessage): any => ({
    ...obj,
  });
}

export enum DataShareStatus {
  ACTIVE = "ACTIVE",
  AUTHORIZED = "AUTHORIZED",
  AVAILABLE = "AVAILABLE",
  DEAUTHORIZED = "DEAUTHORIZED",
  PENDING_AUTHORIZATION = "PENDING_AUTHORIZATION",
  REJECTED = "REJECTED",
}

/**
 * <p>The association of a datashare from a producer account with a data consumer.
 *         </p>
 */
export interface DataShareAssociation {
  /**
   * <p>The name of the consumer accounts that have an association with a producer
   *             datashare.</p>
   */
  ConsumerIdentifier?: string;

  /**
   * <p>The status of the datashare that is associated.</p>
   */
  Status?: DataShareStatus | string;

  /**
   * <p>The creation date of the datashare that is associated.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The status change data of the datashare that is associated.</p>
   */
  StatusChangeDate?: Date;
}

export namespace DataShareAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataShareAssociation): any => ({
    ...obj,
  });
}

export interface DataShare {
  /**
   * <p>An Amazon Resource Name (ARN) that references the datashare that is owned by a specific namespace of the producer cluster. A datashare ARN is in the <code>arn:aws:redshift:{region}:{account-id}:{datashare}:{namespace-guid}/{datashare-name}</code> format.</p>
   */
  DataShareArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the producer.</p>
   */
  ProducerArn?: string;

  /**
   * <p>A value that specifies whether the datashare can be shared to a publicly accessible  cluster.</p>
   */
  AllowPubliclyAccessibleConsumers?: boolean;

  /**
   * <p>A value that specifies when the datashare has an association between a producer and data consumers.</p>
   */
  DataShareAssociations?: DataShareAssociation[];
}

export namespace DataShare {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataShare): any => ({
    ...obj,
  });
}

/**
 * <p>There is an error with the datashare.</p>
 */
export interface InvalidDataShareFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDataShareFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDataShareFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDataShareFault): any => ({
    ...obj,
  });
}

/**
 * <p>The namespace isn't valid because the namespace doesn't exist. Provide a valid namespace.</p>
 */
export interface InvalidNamespaceFault extends __SmithyException, $MetadataBearer {
  name: "InvalidNamespaceFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidNamespaceFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidNamespaceFault): any => ({
    ...obj,
  });
}

export type ScheduleState = "ACTIVE" | "FAILED" | "MODIFYING";

/**
 * <p></p>
 */
export interface ClusterAssociatedToSchedule {
  /**
   * <p></p>
   */
  ClusterIdentifier?: string;

  /**
   * <p></p>
   */
  ScheduleAssociationState?: ScheduleState | string;
}

export namespace ClusterAssociatedToSchedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterAssociatedToSchedule): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an authentication profile.</p>
 */
export interface AuthenticationProfile {
  /**
   * <p>The name of the authentication profile.</p>
   */
  AuthenticationProfileName?: string;

  /**
   * <p>The content of the authentication profile in JSON format.
   *             The maximum length of the JSON string is determined by a quota for your account.</p>
   */
  AuthenticationProfileContent?: string;
}

export namespace AuthenticationProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthenticationProfile): any => ({
    ...obj,
  });
}

/**
 * <p>The authentication profile already exists.</p>
 */
export interface AuthenticationProfileAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "AuthenticationProfileAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace AuthenticationProfileAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthenticationProfileAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>The authentication profile can't be found.</p>
 */
export interface AuthenticationProfileNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "AuthenticationProfileNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace AuthenticationProfileNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthenticationProfileNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The size or number of authentication profiles has exceeded the quota.
 *             The maximum length of the JSON string and maximum number of authentication profiles is determined by a quota for your account.</p>
 */
export interface AuthenticationProfileQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "AuthenticationProfileQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace AuthenticationProfileQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthenticationProfileQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>The specified CIDR block or EC2 security group is already authorized for the
 *             specified cluster security group.</p>
 */
export interface AuthorizationAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "AuthorizationAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace AuthorizationAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizationAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>The specified CIDR IP range or EC2 security group is not authorized for the
 *             specified cluster security group.</p>
 */
export interface AuthorizationNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "AuthorizationNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace AuthorizationNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizationNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The authorization quota for the cluster security group has been reached.</p>
 */
export interface AuthorizationQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "AuthorizationQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace AuthorizationQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizationQuotaExceededFault): any => ({
    ...obj,
  });
}

export enum AuthorizationStatus {
  AUTHORIZED = "Authorized",
  REVOKING = "Revoking",
}

/**
 * <p></p>
 */
export interface AuthorizeClusterSecurityGroupIngressMessage {
  /**
   * <p>The name of the security group to which the ingress rule is added.</p>
   */
  ClusterSecurityGroupName: string | undefined;

  /**
   * <p>The IP range to be added the Amazon Redshift security group.</p>
   */
  CIDRIP?: string;

  /**
   * <p>The EC2 security group to be added the Amazon Redshift security group.</p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>The Amazon Web Services account number of the owner of the security group specified by the
   *             <i>EC2SecurityGroupName</i> parameter. The Amazon Web Services Access Key ID is not an
   *             acceptable value. </p>
   *         <p>Example: <code>111122223333</code>
   *         </p>
   */
  EC2SecurityGroupOwnerId?: string;
}

export namespace AuthorizeClusterSecurityGroupIngressMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizeClusterSecurityGroupIngressMessage): any => ({
    ...obj,
  });
}

/**
 * <p>A tag consisting of a name/value pair for a resource.</p>
 */
export interface Tag {
  /**
   * <p>The key, or name, for the resource tag.</p>
   */
  Key?: string;

  /**
   * <p>The value for the resource tag.</p>
   */
  Value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon EC2 security group.</p>
 */
export interface EC2SecurityGroup {
  /**
   * <p>The status of the EC2 security group.</p>
   */
  Status?: string;

  /**
   * <p>The name of the EC2 Security Group.</p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>The Amazon Web Services account ID of the owner of the EC2 security group specified in the
   *                 <code>EC2SecurityGroupName</code> field. </p>
   */
  EC2SecurityGroupOwnerId?: string;

  /**
   * <p>The list of tags for the EC2 security group.</p>
   */
  Tags?: Tag[];
}

export namespace EC2SecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EC2SecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IP range used in a security group.</p>
 */
export interface IPRange {
  /**
   * <p>The status of the IP range, for example, "authorized".</p>
   */
  Status?: string;

  /**
   * <p>The IP range in Classless Inter-Domain Routing (CIDR) notation.</p>
   */
  CIDRIP?: string;

  /**
   * <p>The list of tags for the IP range.</p>
   */
  Tags?: Tag[];
}

export namespace IPRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IPRange): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a security group.</p>
 */
export interface ClusterSecurityGroup {
  /**
   * <p>The name of the cluster security group to which the operation was
   *             applied.</p>
   */
  ClusterSecurityGroupName?: string;

  /**
   * <p>A description of the security group.</p>
   */
  Description?: string;

  /**
   * <p>A list of EC2 security groups that are permitted to access clusters associated with
   *             this cluster security group.</p>
   */
  EC2SecurityGroups?: EC2SecurityGroup[];

  /**
   * <p>A list of IP ranges (CIDR blocks) that are permitted to access clusters associated
   *             with this cluster security group.</p>
   */
  IPRanges?: IPRange[];

  /**
   * <p>The list of tags for the cluster security group.</p>
   */
  Tags?: Tag[];
}

export namespace ClusterSecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSecurityGroup): any => ({
    ...obj,
  });
}

export interface AuthorizeClusterSecurityGroupIngressResult {
  /**
   * <p>Describes a security group.</p>
   */
  ClusterSecurityGroup?: ClusterSecurityGroup;
}

export namespace AuthorizeClusterSecurityGroupIngressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizeClusterSecurityGroupIngressResult): any => ({
    ...obj,
  });
}

/**
 * <p>The cluster security group name does not refer to an existing cluster security
 *             group.</p>
 */
export interface ClusterSecurityGroupNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ClusterSecurityGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSecurityGroupNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSecurityGroupNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The state of the cluster security group is not <code>available</code>. </p>
 */
export interface InvalidClusterSecurityGroupStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidClusterSecurityGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterSecurityGroupStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidClusterSecurityGroupStateFault): any => ({
    ...obj,
  });
}

export interface AuthorizeDataShareMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare that producers are to authorize
   *             sharing for.</p>
   */
  DataShareArn: string | undefined;

  /**
   * <p>The identifier of the data consumer that is authorized to access the datashare. This identifier is an AWS account ID.</p>
   */
  ConsumerIdentifier: string | undefined;
}

export namespace AuthorizeDataShareMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizeDataShareMessage): any => ({
    ...obj,
  });
}

export interface AuthorizeEndpointAccessMessage {
  /**
   * <p>The cluster identifier of the cluster to grant access to.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The Amazon Web Services account ID to grant access to.</p>
   */
  Account: string | undefined;

  /**
   * <p>The virtual private cloud (VPC) identifiers to grant access to.</p>
   */
  VpcIds?: string[];
}

export namespace AuthorizeEndpointAccessMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizeEndpointAccessMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an endpoint authorization for authorizing Redshift-managed VPC endpoint access to a cluster across Amazon Web Services accounts.</p>
 */
export interface EndpointAuthorization {
  /**
   * <p>The Amazon Web Services account ID of the cluster owner.</p>
   */
  Grantor?: string;

  /**
   * <p>The Amazon Web Services account ID of the grantee of the cluster.</p>
   */
  Grantee?: string;

  /**
   * <p>The cluster identifier.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The time (UTC) when the authorization was created.</p>
   */
  AuthorizeTime?: Date;

  /**
   * <p>The status of the cluster.</p>
   */
  ClusterStatus?: string;

  /**
   * <p>The status of the authorization action.</p>
   */
  Status?: AuthorizationStatus | string;

  /**
   * <p>Indicates whether all VPCs in the grantee account are allowed access to the cluster.</p>
   */
  AllowedAllVPCs?: boolean;

  /**
   * <p>The VPCs allowed access to the cluster.</p>
   */
  AllowedVPCs?: string[];

  /**
   * <p>The number of Redshift-managed VPC endpoints created for the authorization.</p>
   */
  EndpointCount?: number;
}

export namespace EndpointAuthorization {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointAuthorization): any => ({
    ...obj,
  });
}

/**
 * <p>The authorization already exists for this endpoint.</p>
 */
export interface EndpointAuthorizationAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "EndpointAuthorizationAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace EndpointAuthorizationAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointAuthorizationAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>The number of endpoint authorizations per cluster has exceeded its limit.</p>
 */
export interface EndpointAuthorizationsPerClusterLimitExceededFault extends __SmithyException, $MetadataBearer {
  name: "EndpointAuthorizationsPerClusterLimitExceededFault";
  $fault: "client";
  message?: string;
}

export namespace EndpointAuthorizationsPerClusterLimitExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointAuthorizationsPerClusterLimitExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>The status of the authorization is not valid.</p>
 */
export interface InvalidAuthorizationStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidAuthorizationStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidAuthorizationStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidAuthorizationStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>The specified cluster is not in the <code>available</code> state. </p>
 */
export interface InvalidClusterStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidClusterStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidClusterStateFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface AuthorizeSnapshotAccessMessage {
  /**
   * <p>The identifier of the snapshot the account is authorized to restore.</p>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier of the cluster the snapshot was created from. This parameter is
   *             required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   */
  SnapshotClusterIdentifier?: string;

  /**
   * <p>The identifier of the Amazon Web Services account authorized to restore the specified
   *             snapshot.</p>
   *         <p>To share a snapshot with Amazon Web Services Support, specify amazon-redshift-support.</p>
   */
  AccountWithRestoreAccess: string | undefined;
}

export namespace AuthorizeSnapshotAccessMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizeSnapshotAccessMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a snapshot.</p>
 */
export interface Snapshot {
  /**
   * <p>The snapshot identifier that is provided in the request.</p>
   */
  SnapshotIdentifier?: string;

  /**
   * <p>The identifier of the cluster for which the snapshot was taken.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The time (in UTC format) when Amazon Redshift began the snapshot. A snapshot contains a
   *             copy of the cluster data as of this exact time.</p>
   */
  SnapshotCreateTime?: Date;

  /**
   * <p>The snapshot status. The value of the status depends on the API operation used: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <a>CreateClusterSnapshot</a> and <a>CopyClusterSnapshot</a> returns status as "creating". </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <a>DescribeClusterSnapshots</a> returns status as "creating",
   *                     "available", "final snapshot", or "failed".</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <a>DeleteClusterSnapshot</a> returns status as "deleted".</p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>The port that the cluster is listening on.</p>
   */
  Port?: number;

  /**
   * <p>The Availability Zone in which the cluster was created.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The time (UTC) when the cluster was originally created.</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>The admin user name for the cluster.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The version ID of the Amazon Redshift engine that is running on the cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The cluster version of the cluster used to create the snapshot. For example, 1.0.15503. </p>
   */
  EngineFullVersion?: string;

  /**
   * <p>The snapshot type. Snapshots created using <a>CreateClusterSnapshot</a>
   *             and <a>CopyClusterSnapshot</a> are of type "manual". </p>
   */
  SnapshotType?: string;

  /**
   * <p>The node type of the nodes in the cluster.</p>
   */
  NodeType?: string;

  /**
   * <p>The number of nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The name of the database that was created when the cluster was created.</p>
   */
  DBName?: string;

  /**
   * <p>The VPC identifier of the cluster if the snapshot is from a cluster in a VPC.
   *             Otherwise, this field is not in the output.</p>
   */
  VpcId?: string;

  /**
   * <p>If <code>true</code>, the data in the snapshot is encrypted at rest.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The Key Management Service (KMS) key ID of the encryption key that was used to
   *             encrypt data in the cluster from which the snapshot was taken.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A boolean that indicates whether the snapshot data is encrypted using the HSM keys
   *             of the source cluster. <code>true</code> indicates that the data is encrypted using HSM
   *             keys.</p>
   */
  EncryptedWithHSM?: boolean;

  /**
   * <p>A list of the Amazon Web Services accounts authorized to restore the snapshot. Returns
   *                 <code>null</code> if no accounts are authorized. Visible only to the snapshot owner.
   *         </p>
   */
  AccountsWithRestoreAccess?: AccountWithRestoreAccess[];

  /**
   * <p>For manual snapshots, the Amazon Web Services account used to create or copy the snapshot.
   *             For automatic snapshots, the owner of the cluster. The owner can perform all snapshot
   *             actions, such as sharing a manual snapshot.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>The size of the complete set of backup data that would be used to restore the
   *             cluster.</p>
   */
  TotalBackupSizeInMegaBytes?: number;

  /**
   * <p>The size of the incremental backup.</p>
   */
  ActualIncrementalBackupSizeInMegaBytes?: number;

  /**
   * <p>The number of megabytes that have been transferred to the snapshot
   *             backup.</p>
   */
  BackupProgressInMegaBytes?: number;

  /**
   * <p>The number of megabytes per second being transferred to the snapshot backup.
   *             Returns <code>0</code> for a completed backup. </p>
   */
  CurrentBackupRateInMegaBytesPerSecond?: number;

  /**
   * <p>The estimate of the time remaining before the snapshot backup will complete.
   *             Returns <code>0</code> for a completed backup. </p>
   */
  EstimatedSecondsToCompletion?: number;

  /**
   * <p>The amount of time an in-progress snapshot backup has been running, or the amount
   *             of time it took a completed backup to finish.</p>
   */
  ElapsedTimeInSeconds?: number;

  /**
   * <p>The source region from which the snapshot was copied.</p>
   */
  SourceRegion?: string;

  /**
   * <p>The list of tags for the cluster snapshot.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The list of node types that this cluster snapshot is able to restore
   *             into.</p>
   */
  RestorableNodeTypes?: string[];

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
   * <p>The name of the maintenance track for the snapshot.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely. </p>
   *
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The number of days until a manual snapshot will pass its retention period.</p>
   */
  ManualSnapshotRemainingDays?: number;

  /**
   * <p>A timestamp representing the start of the retention period for the snapshot.</p>
   */
  SnapshotRetentionStartTime?: Date;
}

export namespace Snapshot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Snapshot): any => ({
    ...obj,
  });
}

export interface AuthorizeSnapshotAccessResult {
  /**
   * <p>Describes a snapshot.</p>
   */
  Snapshot?: Snapshot;
}

export namespace AuthorizeSnapshotAccessResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthorizeSnapshotAccessResult): any => ({
    ...obj,
  });
}

/**
 * <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
 */
export interface ClusterSnapshotNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ClusterSnapshotNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSnapshotNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSnapshotNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The request cannot be completed because a dependent service is throttling requests
 *             made by Amazon Redshift on your behalf. Wait and retry the request.</p>
 */
export interface DependentServiceRequestThrottlingFault extends __SmithyException, $MetadataBearer {
  name: "DependentServiceRequestThrottlingFault";
  $fault: "client";
  message?: string;
}

export namespace DependentServiceRequestThrottlingFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DependentServiceRequestThrottlingFault): any => ({
    ...obj,
  });
}

/**
 * <p>The specified cluster snapshot is not in the <code>available</code> state, or other
 *             accounts are authorized to access the snapshot. </p>
 */
export interface InvalidClusterSnapshotStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidClusterSnapshotStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterSnapshotStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidClusterSnapshotStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>The encryption key has exceeded its grant limit in Amazon Web Services KMS.</p>
 */
export interface LimitExceededFault extends __SmithyException, $MetadataBearer {
  name: "LimitExceededFault";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>A list of supported platforms for orderable clusters.</p>
 */
export interface SupportedPlatform {
  /**
   * <p></p>
   */
  Name?: string;
}

export namespace SupportedPlatform {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SupportedPlatform): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an availability zone.</p>
 */
export interface AvailabilityZone {
  /**
   * <p>The name of the availability zone.</p>
   */
  Name?: string;

  /**
   * <p></p>
   */
  SupportedPlatforms?: SupportedPlatform[];
}

export namespace AvailabilityZone {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteClusterSnapshotMessage {
  /**
   * <p>The unique identifier of the manual snapshot to be deleted.</p>
   *         <p>Constraints: Must be the name of an existing snapshot that is in the
   *                 <code>available</code>, <code>failed</code>, or <code>cancelled</code>
   *             state.</p>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the cluster the snapshot was created from. This parameter
   *             is required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   *         <p>Constraints: Must be the name of valid cluster.</p>
   */
  SnapshotClusterIdentifier?: string;
}

export namespace DeleteClusterSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClusterSnapshotMessage): any => ({
    ...obj,
  });
}

export interface BatchDeleteClusterSnapshotsRequest {
  /**
   * <p>A list of identifiers for the snapshots that you want to delete.</p>
   */
  Identifiers: DeleteClusterSnapshotMessage[] | undefined;
}

export namespace BatchDeleteClusterSnapshotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteClusterSnapshotsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the errors returned by a snapshot.</p>
 */
export interface SnapshotErrorMessage {
  /**
   * <p>A unique identifier for the snapshot returning the error.</p>
   */
  SnapshotIdentifier?: string;

  /**
   * <p>A unique identifier for the cluster.</p>
   */
  SnapshotClusterIdentifier?: string;

  /**
   * <p>The failure code for the error.</p>
   */
  FailureCode?: string;

  /**
   * <p>The text message describing the error.</p>
   */
  FailureReason?: string;
}

export namespace SnapshotErrorMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotErrorMessage): any => ({
    ...obj,
  });
}

export interface BatchDeleteClusterSnapshotsResult {
  /**
   * <p>A list of the snapshot identifiers that were deleted. </p>
   */
  Resources?: string[];

  /**
   * <p>A list of any errors returned.</p>
   */
  Errors?: SnapshotErrorMessage[];
}

export namespace BatchDeleteClusterSnapshotsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteClusterSnapshotsResult): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number for a batch delete of snapshots has been reached. The limit is
 *             100. </p>
 */
export interface BatchDeleteRequestSizeExceededFault extends __SmithyException, $MetadataBearer {
  name: "BatchDeleteRequestSizeExceededFault";
  $fault: "client";
  message?: string;
}

export namespace BatchDeleteRequestSizeExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteRequestSizeExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number for snapshot identifiers has been reached. The limit is 100.
 *         </p>
 */
export interface BatchModifyClusterSnapshotsLimitExceededFault extends __SmithyException, $MetadataBearer {
  name: "BatchModifyClusterSnapshotsLimitExceededFault";
  $fault: "client";
  message?: string;
}

export namespace BatchModifyClusterSnapshotsLimitExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchModifyClusterSnapshotsLimitExceededFault): any => ({
    ...obj,
  });
}

export interface BatchModifyClusterSnapshotsMessage {
  /**
   * <p>A list of snapshot identifiers you want to modify.</p>
   */
  SnapshotIdentifierList: string[] | undefined;

  /**
   * <p>The number of days that a manual snapshot is retained. If you specify the value -1,
   *             the manual snapshot is retained indefinitely.</p>
   *         <p>The number must be either -1 or an integer between 1 and 3,653.</p>
   *         <p>If you decrease the manual snapshot retention period from its current value, existing
   *             manual snapshots that fall outside of the new retention period will return an error. If
   *             you want to suppress the errors and delete the snapshots, use the force option. </p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>A boolean value indicating whether to override an exception if the retention period
   *             has passed. </p>
   */
  Force?: boolean;
}

export namespace BatchModifyClusterSnapshotsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchModifyClusterSnapshotsMessage): any => ({
    ...obj,
  });
}

export interface BatchModifyClusterSnapshotsOutputMessage {
  /**
   * <p>A list of the snapshots that were modified.</p>
   */
  Resources?: string[];

  /**
   * <p>A list of any errors returned.</p>
   */
  Errors?: SnapshotErrorMessage[];
}

export namespace BatchModifyClusterSnapshotsOutputMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchModifyClusterSnapshotsOutputMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The retention period specified is either in the past or is not a valid value.</p>
 *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
 */
export interface InvalidRetentionPeriodFault extends __SmithyException, $MetadataBearer {
  name: "InvalidRetentionPeriodFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidRetentionPeriodFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRetentionPeriodFault): any => ({
    ...obj,
  });
}

/**
 * <p>Could not find the specified S3 bucket.</p>
 */
export interface BucketNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "BucketNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace BucketNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BucketNotFoundFault): any => ({
    ...obj,
  });
}

export interface CancelResizeMessage {
  /**
   * <p>The unique identifier for the cluster that you want to cancel a resize operation
   *             for.</p>
   */
  ClusterIdentifier: string | undefined;
}

export namespace CancelResizeMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelResizeMessage): any => ({
    ...obj,
  });
}

/**
 * <p>A resize operation for the specified cluster is not found.</p>
 */
export interface ResizeNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ResizeNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ResizeNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResizeNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the result of a cluster resize operation.</p>
 */
export interface ResizeProgressMessage {
  /**
   * <p>The node type that the cluster will have after the resize operation is
   *             complete.</p>
   */
  TargetNodeType?: string;

  /**
   * <p>The number of nodes that the cluster will have after the resize operation is
   *             complete.</p>
   */
  TargetNumberOfNodes?: number;

  /**
   * <p>The cluster type after the resize operation is complete.</p>
   *         <p>Valid Values: <code>multi-node</code> | <code>single-node</code>
   *         </p>
   */
  TargetClusterType?: string;

  /**
   * <p>The status of the resize operation.</p>
   *         <p>Valid Values: <code>NONE</code> | <code>IN_PROGRESS</code> | <code>FAILED</code> |
   *                 <code>SUCCEEDED</code> | <code>CANCELLING</code>
   *         </p>
   */
  Status?: string;

  /**
   * <p>The names of tables that have been completely imported .</p>
   *         <p>Valid Values: List of table names.</p>
   */
  ImportTablesCompleted?: string[];

  /**
   * <p>The names of tables that are being currently imported.</p>
   *         <p>Valid Values: List of table names.</p>
   */
  ImportTablesInProgress?: string[];

  /**
   * <p>The names of tables that have not been yet imported.</p>
   *         <p>Valid Values: List of table names</p>
   */
  ImportTablesNotStarted?: string[];

  /**
   * <p>The average rate of the resize operation over the last few minutes, measured in
   *             megabytes per second. After the resize operation completes, this value shows the average
   *             rate of the entire resize operation.</p>
   */
  AvgResizeRateInMegaBytesPerSecond?: number;

  /**
   * <p>The estimated total amount of data, in megabytes, on the cluster before the resize
   *             operation began.</p>
   */
  TotalResizeDataInMegaBytes?: number;

  /**
   * <p>While the resize operation is in progress, this value shows the current amount of
   *             data, in megabytes, that has been processed so far. When the resize operation is
   *             complete, this value shows the total amount of data, in megabytes, on the cluster, which
   *             may be more or less than TotalResizeDataInMegaBytes (the estimated total amount of data
   *             before resize).</p>
   */
  ProgressInMegaBytes?: number;

  /**
   * <p>The amount of seconds that have elapsed since the resize operation began. After the
   *             resize operation completes, this value shows the total actual time, in seconds, for the
   *             resize operation.</p>
   */
  ElapsedTimeInSeconds?: number;

  /**
   * <p>The estimated time remaining, in seconds, until the resize operation is complete.
   *             This value is calculated based on the average resize rate and the estimated amount of
   *             data remaining to be processed. Once the resize operation is complete, this value will
   *             be 0.</p>
   */
  EstimatedTimeToCompletionInSeconds?: number;

  /**
   * <p>An enum with possible values of <code>ClassicResize</code> and
   *                 <code>ElasticResize</code>. These values describe the type of resize operation being
   *             performed. </p>
   */
  ResizeType?: string;

  /**
   * <p>An optional string to provide additional details about the resize action.</p>
   */
  Message?: string;

  /**
   * <p>The type of encryption for the cluster after the resize is complete.</p>
   *         <p>Possible values are <code>KMS</code> and <code>None</code>. </p>
   */
  TargetEncryptionType?: string;

  /**
   * <p>The percent of data transferred from source cluster to target cluster.</p>
   */
  DataTransferProgressPercent?: number;
}

export namespace ResizeProgressMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResizeProgressMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The identifier of a node in a cluster.</p>
 */
export interface ClusterNode {
  /**
   * <p>Whether the node is a leader node or a compute node.</p>
   */
  NodeRole?: string;

  /**
   * <p>The private IP address of a node within a cluster.</p>
   */
  PrivateIPAddress?: string;

  /**
   * <p>The public IP address of a node within a cluster.</p>
   */
  PublicIPAddress?: string;
}

export namespace ClusterNode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterNode): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of a parameter group.</p>
 */
export interface ClusterParameterStatus {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>The status of the parameter that indicates whether the parameter is in sync with
   *             the database, waiting for a cluster reboot, or encountered an error when being
   *             applied.</p>
   *         <p>The following are possible statuses and descriptions.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>in-sync</code>: The parameter value is in sync with the
   *                     database.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>pending-reboot</code>: The parameter value will be applied after the
   *                     cluster reboots.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>applying</code>: The parameter value is being applied to the
   *                     database.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>invalid-parameter</code>: Cannot apply the parameter value because it has
   *                     an invalid value or syntax.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>apply-deferred</code>: The parameter contains static property changes. The
   *                     changes are deferred until the cluster reboots.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>apply-error</code>: Cannot connect to the cluster. The parameter change
   *                     will be applied after the cluster reboots.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>unknown-error</code>: Cannot apply the parameter change right now. The
   *                     change will be applied after the cluster reboots.</p>
   *             </li>
   *          </ul>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>The error that prevented the parameter from being applied to the
   *             database.</p>
   */
  ParameterApplyErrorDescription?: string;
}

export namespace ClusterParameterStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterParameterStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of a parameter group.</p>
 */
export interface ClusterParameterGroupStatus {
  /**
   * <p>The name of the cluster parameter group.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>The status of parameter updates.</p>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>The list of parameter statuses.</p>
   *         <p>
   * For more information about parameters and parameter groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  ClusterParameterStatusList?: ClusterParameterStatus[];
}

export namespace ClusterParameterGroupStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterParameterGroupStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a cluster security group.</p>
 */
export interface ClusterSecurityGroupMembership {
  /**
   * <p>The name of the cluster security group.</p>
   */
  ClusterSecurityGroupName?: string;

  /**
   * <p>The status of the cluster security group.</p>
   */
  Status?: string;
}

export namespace ClusterSecurityGroupMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSecurityGroupMembership): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the destination region and retention period that are configured for
 *             cross-region snapshot copy.</p>
 */
export interface ClusterSnapshotCopyStatus {
  /**
   * <p>The destination region that snapshots are automatically copied to when cross-region
   *             snapshot copy is enabled.</p>
   */
  DestinationRegion?: string;

  /**
   * <p>The number of days that automated snapshots are retained in the destination region
   *             after they are copied from a source region.</p>
   */
  RetentionPeriod?: number;

  /**
   * <p>The number of days that automated snapshots are retained in the destination region
   *             after they are copied from a source region. If the value is -1, the manual snapshot is
   *             retained indefinitely. </p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The name of the snapshot copy grant.</p>
   */
  SnapshotCopyGrantName?: string;
}

export namespace ClusterSnapshotCopyStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSnapshotCopyStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of a cluster while it is in the process of resizing with an
 *             incremental resize.</p>
 */
export interface DataTransferProgress {
  /**
   * <p>Describes the status of the cluster. While the transfer is in progress the status is
   *                 <code>transferringdata</code>.</p>
   */
  Status?: string;

  /**
   * <p>Describes the data transfer rate in MB's per second.</p>
   */
  CurrentRateInMegaBytesPerSecond?: number;

  /**
   * <p>Describes the total amount of data to be transfered in megabytes.</p>
   */
  TotalDataInMegaBytes?: number;

  /**
   * <p>Describes the total amount of data that has been transfered in MB's.</p>
   */
  DataTransferredInMegaBytes?: number;

  /**
   * <p>Describes the estimated number of seconds remaining to complete the transfer.</p>
   */
  EstimatedTimeToCompletionInSeconds?: number;

  /**
   * <p>Describes the number of seconds that have elapsed during the data transfer.</p>
   */
  ElapsedTimeInSeconds?: number;
}

export namespace DataTransferProgress {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataTransferProgress): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a deferred maintenance window</p>
 */
export interface DeferredMaintenanceWindow {
  /**
   * <p>A unique identifier for the maintenance window.</p>
   */
  DeferMaintenanceIdentifier?: string;

  /**
   * <p> A timestamp for the beginning of the time period when we defer maintenance.</p>
   */
  DeferMaintenanceStartTime?: Date;

  /**
   * <p> A timestamp for the end of the time period when we defer maintenance.</p>
   */
  DeferMaintenanceEndTime?: Date;
}

export namespace DeferredMaintenanceWindow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeferredMaintenanceWindow): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of the elastic IP (EIP) address.</p>
 */
export interface ElasticIpStatus {
  /**
   * <p>The elastic IP (EIP) address for the cluster.</p>
   */
  ElasticIp?: string;

  /**
   * <p>The status of the elastic IP (EIP) address.</p>
   */
  Status?: string;
}

export namespace ElasticIpStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticIpStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface. </p>
 */
export interface NetworkInterface {
  /**
   * <p>The network interface identifier. </p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The subnet identifier. </p>
   */
  SubnetId?: string;

  /**
   * <p>The IPv4 address of the network interface within the subnet. </p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The Availability Zone. </p>
   */
  AvailabilityZone?: string;
}

export namespace NetworkInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterface): any => ({
    ...obj,
  });
}

/**
 * <p>The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.</p>
 */
export interface VpcEndpoint {
  /**
   * <p>The connection endpoint ID for connecting an Amazon Redshift cluster through the proxy.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The VPC identifier that the endpoint is associated. </p>
   */
  VpcId?: string;

  /**
   * <p>One or more network interfaces of the endpoint. Also known as an interface endpoint. </p>
   */
  NetworkInterfaces?: NetworkInterface[];
}

export namespace VpcEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcEndpoint): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a connection endpoint.</p>
 */
export interface Endpoint {
  /**
   * <p>The DNS address of the Cluster.</p>
   */
  Address?: string;

  /**
   * <p>The port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * <p>Describes a connection endpoint.</p>
   */
  VpcEndpoints?: VpcEndpoint[];
}

export namespace Endpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of changes to HSM settings.</p>
 */
export interface HsmStatus {
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
   * <p>Reports whether the Amazon Redshift cluster has finished applying any HSM settings
   *             changes specified in a modify cluster command.</p>
   *         <p>Values: active, applying</p>
   */
  Status?: string;
}

export namespace HsmStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HsmStatus): any => ({
    ...obj,
  });
}

/**
 * <p>An Identity and Access Management (IAM) role that can be used by the associated
 *             Amazon Redshift cluster to access other Amazon Web Services services.</p>
 */
export interface ClusterIamRole {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role, for example,
   *                 <code>arn:aws:iam::123456789012:role/RedshiftCopyUnload</code>. </p>
   */
  IamRoleArn?: string;

  /**
   * <p>A value that describes the status of the IAM role's association with an Amazon
   *             Redshift cluster.</p>
   *         <p>The following are possible statuses and descriptions.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>in-sync</code>: The role is available for use by the cluster.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>adding</code>: The role is in the process of being associated with the
   *                     cluster.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>removing</code>: The role is in the process of being disassociated with
   *                     the cluster.</p>
   *             </li>
   *          </ul>
   */
  ApplyStatus?: string;
}

export namespace ClusterIamRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterIamRole): any => ({
    ...obj,
  });
}

/**
 * <p>Describes cluster attributes that are in a pending state. A change to one or more
 *             the attributes was requested and is in progress or will be applied.</p>
 */
export interface PendingModifiedValues {
  /**
   * <p>The pending or in-progress change of the admin user password for the
   *             cluster.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The pending or in-progress change of the cluster's node type.</p>
   */
  NodeType?: string;

  /**
   * <p>The pending or in-progress change of the number of nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The pending or in-progress change of the cluster type.</p>
   */
  ClusterType?: string;

  /**
   * <p>The pending or in-progress change of the service version.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The pending or in-progress change of the automated snapshot retention
   *             period.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The pending or in-progress change of the new identifier for the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The pending or in-progress change of the ability to connect to the cluster from the
   *             public network.</p>
   */
  PubliclyAccessible?: boolean;

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
   * <p>The name of the maintenance track that the cluster will change to during the next
   *             maintenance window.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The encryption type for a cluster. Possible values are: KMS and None. </p>
   */
  EncryptionType?: string;
}

export namespace PendingModifiedValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingModifiedValues): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a resize operation.</p>
 */
export interface ResizeInfo {
  /**
   * <p>Returns the value <code>ClassicResize</code>.</p>
   */
  ResizeType?: string;

  /**
   * <p>A boolean value indicating if the resize operation can be cancelled.</p>
   */
  AllowCancelResize?: boolean;
}

export namespace ResizeInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResizeInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of a cluster restore action. Returns null if the cluster was
 *             not created by restoring a snapshot.</p>
 */
export interface RestoreStatus {
  /**
   * <p>The status of the restore action. Returns starting, restoring, completed, or
   *             failed.</p>
   */
  Status?: string;

  /**
   * <p>The number of megabytes per second being transferred from the backup storage.
   *             Returns the average rate for a completed backup.
   *             This field is only updated when you restore to DC2 and DS2 node types. </p>
   */
  CurrentRestoreRateInMegaBytesPerSecond?: number;

  /**
   * <p>The size of the set of snapshot data used to restore the cluster.
   *             This field is only updated when you restore to DC2 and DS2 node types. </p>
   */
  SnapshotSizeInMegaBytes?: number;

  /**
   * <p>The number of megabytes that have been transferred from snapshot storage.
   *             This field is only updated when you restore to DC2 and DS2 node types. </p>
   */
  ProgressInMegaBytes?: number;

  /**
   * <p>The amount of time an in-progress restore has been running, or the amount of time
   *             it took a completed restore to finish.
   *             This field is only updated when you restore to DC2 and DS2 node types. </p>
   */
  ElapsedTimeInSeconds?: number;

  /**
   * <p>The estimate of the time remaining before the restore will complete. Returns 0 for
   *             a completed restore.
   *             This field is only updated when you restore to DC2 and DS2 node types. </p>
   */
  EstimatedTimeToCompletionInSeconds?: number;
}

export namespace RestoreStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the members of a VPC security group.</p>
 */
export interface VpcSecurityGroupMembership {
  /**
   * <p>The identifier of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;

  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;
}

export namespace VpcSecurityGroupMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcSecurityGroupMembership): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a cluster.</p>
 */
export interface Cluster {
  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The node type for the nodes in the cluster.</p>
   */
  NodeType?: string;

  /**
   * <p> The current state of the cluster. Possible values are the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>available</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>available, prep-for-resize</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>available, resize-cleanup</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>cancelling-resize</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>creating</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>deleting</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>final-snapshot</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>hardware-failure</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>incompatible-hsm</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>incompatible-network</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>incompatible-parameters</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>incompatible-restore</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>modifying</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>paused</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>rebooting</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>renaming</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>resizing</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>rotating-keys</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>storage-full</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>updating-hsm</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  ClusterStatus?: string;

  /**
   * <p>The availability status of the cluster for queries. Possible values are the following:</p>
   *         <ul>
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
   */
  ClusterAvailabilityStatus?: string;

  /**
   * <p>The status of a modify operation, if any, initiated for the cluster.</p>
   */
  ModifyStatus?: string;

  /**
   * <p>The admin user name for the cluster. This name is used to connect to the database
   *             that is specified in the <b>DBName</b> parameter. </p>
   */
  MasterUsername?: string;

  /**
   * <p>The name of the initial database that was created when the cluster was created.
   *             This same name is returned for the life of the cluster. If an initial database was not
   *             specified, a database named <code>dev</code>dev was created by default. </p>
   */
  DBName?: string;

  /**
   * <p>The connection endpoint.</p>
   */
  Endpoint?: Endpoint;

  /**
   * <p>The date and time that the cluster was created.</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>The number of days that automatic cluster snapshots are retained.</p>
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
   * <p>A list of cluster security group that are associated with the cluster. Each
   *             security group is represented by an element that contains
   *                 <code>ClusterSecurityGroup.Name</code> and <code>ClusterSecurityGroup.Status</code>
   *             subelements. </p>
   *         <p>Cluster security groups are used when the cluster is not created in an Amazon
   *             Virtual Private Cloud (VPC). Clusters that are created in a VPC use VPC security groups,
   *             which are listed by the <b>VpcSecurityGroups</b> parameter.
   *         </p>
   */
  ClusterSecurityGroups?: ClusterSecurityGroupMembership[];

  /**
   * <p>A list of Amazon Virtual Private Cloud (Amazon VPC) security groups that are
   *             associated with the cluster. This parameter is returned only if the cluster is in a
   *             VPC.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * <p>The list of cluster parameter groups that are associated with this cluster. Each
   *             parameter group in the list is returned with its status.</p>
   */
  ClusterParameterGroups?: ClusterParameterGroupStatus[];

  /**
   * <p>The name of the subnet group that is associated with the cluster. This parameter is
   *             valid only when the cluster is in a VPC.</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>The identifier of the VPC the cluster is in, if the cluster is in a VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The name of the Availability Zone in which the cluster is located.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The weekly time range, in Universal Coordinated Time (UTC), during which system
   *             maintenance can occur.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A value that, if present, indicates that changes to the cluster are pending.
   *             Specific pending changes are identified by subelements.</p>
   */
  PendingModifiedValues?: PendingModifiedValues;

  /**
   * <p>The version ID of the Amazon Redshift engine that is running on the cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>A boolean value that, if <code>true</code>, indicates that major version upgrades
   *             will be applied automatically to the cluster during the maintenance window. </p>
   */
  AllowVersionUpgrade?: boolean;

  /**
   * <p>The number of compute nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>A boolean value that, if <code>true</code>, indicates that the cluster can be
   *             accessed from a public network.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A boolean value that, if <code>true</code>, indicates that data in the cluster is
   *             encrypted at rest.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>A value that describes the status of a cluster restore action. This parameter
   *             returns null if the cluster was not created by restoring a snapshot.</p>
   */
  RestoreStatus?: RestoreStatus;

  /**
   * <p></p>
   */
  DataTransferProgress?: DataTransferProgress;

  /**
   * <p>A value that reports whether the Amazon Redshift cluster has finished applying any
   *             hardware security module (HSM) settings changes specified in a modify cluster
   *             command.</p>
   *         <p>Values: active, applying</p>
   */
  HsmStatus?: HsmStatus;

  /**
   * <p>A value that returns the destination region and retention period that are
   *             configured for cross-region snapshot copy.</p>
   */
  ClusterSnapshotCopyStatus?: ClusterSnapshotCopyStatus;

  /**
   * <p>The public key for the cluster.</p>
   */
  ClusterPublicKey?: string;

  /**
   * <p>The nodes in the cluster.</p>
   */
  ClusterNodes?: ClusterNode[];

  /**
   * <p>The status of the elastic IP (EIP) address.</p>
   */
  ElasticIpStatus?: ElasticIpStatus;

  /**
   * <p>The specific revision number of the database in the cluster.</p>
   */
  ClusterRevisionNumber?: string;

  /**
   * <p>The list of tags for the cluster.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Key Management Service (KMS) key ID of the encryption key used to
   *             encrypt data in the cluster.</p>
   */
  KmsKeyId?: string;

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
   * <p>A list of Identity and Access Management (IAM) roles that can be used by the
   *             cluster to access other Amazon Web Services services.</p>
   */
  IamRoles?: ClusterIamRole[];

  /**
   * <p>Cluster operations that are waiting to be started.</p>
   */
  PendingActions?: string[];

  /**
   * <p>The name of the maintenance track for the cluster.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The number of nodes that you can resize the cluster to with the elastic resize method.
   *         </p>
   */
  ElasticResizeNumberOfNodeOptions?: string;

  /**
   * <p>Describes a group of <code>DeferredMaintenanceWindow</code> objects.</p>
   */
  DeferredMaintenanceWindows?: DeferredMaintenanceWindow[];

  /**
   * <p>A unique identifier for the cluster snapshot schedule.</p>
   */
  SnapshotScheduleIdentifier?: string;

  /**
   * <p>The current state of the cluster snapshot schedule.</p>
   */
  SnapshotScheduleState?: ScheduleState | string;

  /**
   * <p>The date and time when the next snapshot is expected to be taken for clusters with a valid snapshot schedule and backups enabled. </p>
   */
  ExpectedNextSnapshotScheduleTime?: Date;

  /**
   * <p> The status of next expected snapshot for clusters having a valid snapshot schedule and backups enabled.  Possible values are the following:</p>
   *         <ul>
   *             <li>
   *                <p>OnTrack - The next snapshot is expected to be taken on time. </p>
   *             </li>
   *             <li>
   *                <p>Pending - The next snapshot is pending to be taken. </p>
   *             </li>
   *          </ul>
   */
  ExpectedNextSnapshotScheduleTimeStatus?: string;

  /**
   * <p>The date and time in UTC when system maintenance can begin.</p>
   */
  NextMaintenanceWindowStartTime?: Date;

  /**
   * <p>Returns the following:</p>
   *         <ul>
   *             <li>
   *                 <p>AllowCancelResize: a boolean value indicating if the resize operation can be
   *                     cancelled.</p>
   *             </li>
   *             <li>
   *                 <p>ResizeType: Returns ClassicResize</p>
   *             </li>
   *          </ul>
   */
  ResizeInfo?: ResizeInfo;

  /**
   * <p>Describes the status of the Availability Zone relocation operation.</p>
   */
  AvailabilityZoneRelocationStatus?: string;

  /**
   * <p>The namespace Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterNamespaceArn?: string;

  /**
   * <p>The total storage capacity of the cluster in megabytes. </p>
   */
  TotalStorageCapacityInMegaBytes?: number;

  /**
   * <p>The AQUA (Advanced Query Accelerator) configuration of the cluster.</p>
   */
  AquaConfiguration?: AquaConfiguration;
}

export namespace Cluster {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Cluster): any => ({
    ...obj,
  });
}

/**
 * <p>The account already has a cluster with the given identifier.</p>
 */
export interface ClusterAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "ClusterAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>Temporary credentials with authorization to log on to an Amazon Redshift database.
 *         </p>
 */
export interface ClusterCredentials {
  /**
   * <p>A database user name that is authorized to log on to the database
   *                 <code>DbName</code> using the password <code>DbPassword</code>. If the specified
   *             DbUser exists in the database, the new user name has the same database privileges as the
   *             the user named in DbUser. By default, the user is added to PUBLIC. If the
   *                 <code>DbGroups</code> parameter is specifed, <code>DbUser</code> is added to the
   *             listed groups for any sessions created using these credentials.</p>
   */
  DbUser?: string;

  /**
   * <p>A temporary password that authorizes the user name returned by <code>DbUser</code>
   *             to log on to the database <code>DbName</code>. </p>
   */
  DbPassword?: string;

  /**
   * <p>The date and time the password in <code>DbPassword</code> expires.</p>
   */
  Expiration?: Date;
}

export namespace ClusterCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterCredentials): any => ({
    ...obj,
    ...(obj.DbPassword && { DbPassword: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes a <code>RevisionTarget</code>.</p>
 */
export interface RevisionTarget {
  /**
   * <p>A unique string that identifies the version to update the cluster to. You can use this
   *             value in <a>ModifyClusterDbRevision</a>.</p>
   */
  DatabaseRevision?: string;

  /**
   * <p>A string that describes the changes and features that will be applied to the cluster
   *             when it is updated to the corresponding <a>ClusterDbRevision</a>.</p>
   */
  Description?: string;

  /**
   * <p>The date on which the database revision was released.</p>
   */
  DatabaseRevisionReleaseDate?: Date;
}

export namespace RevisionTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevisionTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a <code>ClusterDbRevision</code>.</p>
 */
export interface ClusterDbRevision {
  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>A string representing the current cluster version.</p>
   */
  CurrentDatabaseRevision?: string;

  /**
   * <p>The date on which the database revision was released.</p>
   */
  DatabaseRevisionReleaseDate?: Date;

  /**
   * <p>A list of <code>RevisionTarget</code> objects, where each object describes the
   *             database revision that a cluster can be updated to.</p>
   */
  RevisionTargets?: RevisionTarget[];
}

export namespace ClusterDbRevision {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterDbRevision): any => ({
    ...obj,
  });
}

export interface ClusterDbRevisionsMessage {
  /**
   * <p>A string representing the starting point for the next set of revisions. If a value is
   *             returned in a response, you can retrieve the next set of revisions by providing the
   *             value in the <code>marker</code> parameter and retrying the command. If the
   *                 <code>marker</code> field is empty, all revisions have already been returned.</p>
   */
  Marker?: string;

  /**
   * <p>A list of revisions.</p>
   */
  ClusterDbRevisions?: ClusterDbRevision[];
}

export namespace ClusterDbRevisionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterDbRevisionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Cluster is already on the latest database revision.</p>
 */
export interface ClusterOnLatestRevisionFault extends __SmithyException, $MetadataBearer {
  name: "ClusterOnLatestRevisionFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterOnLatestRevisionFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterOnLatestRevisionFault): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a parameter group.</p>
 */
export interface ClusterParameterGroup {
  /**
   * <p>The name of the cluster parameter group.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>The name of the cluster parameter group family that this cluster parameter group is
   *             compatible with.</p>
   */
  ParameterGroupFamily?: string;

  /**
   * <p>The description of the parameter group.</p>
   */
  Description?: string;

  /**
   * <p>The list of tags for the cluster parameter group.</p>
   */
  Tags?: Tag[];
}

export namespace ClusterParameterGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterParameterGroup): any => ({
    ...obj,
  });
}

/**
 * <p>A cluster parameter group with the same name already exists.</p>
 */
export interface ClusterParameterGroupAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "ClusterParameterGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterParameterGroupAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterParameterGroupAlreadyExistsFault): any => ({
    ...obj,
  });
}

export type ParameterApplyType = "dynamic" | "static";

/**
 * <p>Describes a parameter in a cluster parameter group.</p>
 */
export interface Parameter {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>The value of the parameter. If <code>ParameterName</code> is <code>wlm_json_configuration</code>,
   *             then the maximum size of <code>ParameterValue</code> is 8000 characters.</p>
   */
  ParameterValue?: string;

  /**
   * <p>A description of the parameter.</p>
   */
  Description?: string;

  /**
   * <p>The source of the parameter value, such as "engine-default" or "user".</p>
   */
  Source?: string;

  /**
   * <p>The data type of the parameter.</p>
   */
  DataType?: string;

  /**
   * <p>The valid range of values for the parameter.</p>
   */
  AllowedValues?: string;

  /**
   * <p>Specifies how to apply the WLM configuration parameter. Some properties can be
   *             applied dynamically, while other properties require that any associated clusters be
   *             rebooted for the configuration changes to be applied.
   * For more information about parameters and parameter groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  ApplyType?: ParameterApplyType | string;

  /**
   * <p>If <code>true</code>, the parameter can be modified. Some parameters have security
   *             or operational implications that prevent them from being changed. </p>
   */
  IsModifiable?: boolean;

  /**
   * <p>The earliest engine version to which the parameter can apply.</p>
   */
  MinimumEngineVersion?: string;
}

export namespace Parameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Parameter): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output from the <a>DescribeClusterParameters</a> action.
 *         </p>
 */
export interface ClusterParameterGroupDetails {
  /**
   * <p>A list of <a>Parameter</a> instances. Each instance lists the parameters
   *             of one cluster parameter group. </p>
   */
  Parameters?: Parameter[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;
}

export namespace ClusterParameterGroupDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterParameterGroupDetails): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ClusterParameterGroupNameMessage {
  /**
   * <p>The name of the cluster parameter group.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>The status of the parameter group. For example, if you made a change to a parameter
   *             group name-value pair, then the change could be pending a reboot of an associated
   *             cluster.</p>
   */
  ParameterGroupStatus?: string;
}

export namespace ClusterParameterGroupNameMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterParameterGroupNameMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The parameter group name does not refer to an existing parameter group.</p>
 */
export interface ClusterParameterGroupNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ClusterParameterGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterParameterGroupNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterParameterGroupNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The request would result in the user exceeding the allowed number of cluster
 *             parameter groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface ClusterParameterGroupQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "ClusterParameterGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterParameterGroupQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterParameterGroupQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output from the <a>DescribeClusterParameterGroups</a>
 *             action. </p>
 */
export interface ClusterParameterGroupsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of <a>ClusterParameterGroup</a> instances. Each instance
   *             describes one cluster parameter group. </p>
   */
  ParameterGroups?: ClusterParameterGroup[];
}

export namespace ClusterParameterGroupsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterParameterGroupsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The request would exceed the allowed number of cluster instances for this account.
 *
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface ClusterQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "ClusterQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>A cluster security group with the same name already exists.</p>
 */
export interface ClusterSecurityGroupAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "ClusterSecurityGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSecurityGroupAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSecurityGroupAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ClusterSecurityGroupMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of <a>ClusterSecurityGroup</a> instances. </p>
   */
  ClusterSecurityGroups?: ClusterSecurityGroup[];
}

export namespace ClusterSecurityGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSecurityGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The request would result in the user exceeding the allowed number of cluster
 *             security groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface ClusterSecurityGroupQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "ClusterSecurityGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSecurityGroupQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSecurityGroupQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output from the <a>DescribeClusters</a> action. </p>
 */
export interface ClustersMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of <code>Cluster</code> objects, where each object describes one cluster.
   *         </p>
   */
  Clusters?: Cluster[];
}

export namespace ClustersMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClustersMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The value specified as a snapshot identifier is already used by an existing
 *             snapshot.</p>
 */
export interface ClusterSnapshotAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "ClusterSnapshotAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSnapshotAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSnapshotAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>The request would result in the user exceeding the allowed number of cluster
 *             snapshots.</p>
 */
export interface ClusterSnapshotQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "ClusterSnapshotQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSnapshotQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSnapshotQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a subnet.</p>
 */
export interface Subnet {
  /**
   * <p>The identifier of the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p></p>
   */
  SubnetAvailabilityZone?: AvailabilityZone;

  /**
   * <p>The status of the subnet.</p>
   */
  SubnetStatus?: string;
}

export namespace Subnet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Subnet): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a subnet group.</p>
 */
export interface ClusterSubnetGroup {
  /**
   * <p>The name of the cluster subnet group.</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>The description of the cluster subnet group.</p>
   */
  Description?: string;

  /**
   * <p>The VPC ID of the cluster subnet group.</p>
   */
  VpcId?: string;

  /**
   * <p>The status of the cluster subnet group. Possible values are <code>Complete</code>,
   *                 <code>Incomplete</code> and <code>Invalid</code>. </p>
   */
  SubnetGroupStatus?: string;

  /**
   * <p>A list of the VPC <a>Subnet</a> elements. </p>
   */
  Subnets?: Subnet[];

  /**
   * <p>The list of tags for the cluster subnet group.</p>
   */
  Tags?: Tag[];
}

export namespace ClusterSubnetGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSubnetGroup): any => ({
    ...obj,
  });
}

/**
 * <p>A <i>ClusterSubnetGroupName</i> is already used by an existing
 *             cluster subnet group. </p>
 */
export interface ClusterSubnetGroupAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "ClusterSubnetGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSubnetGroupAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSubnetGroupAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output from the <a>DescribeClusterSubnetGroups</a> action.
 *         </p>
 */
export interface ClusterSubnetGroupMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of <a>ClusterSubnetGroup</a> instances. </p>
   */
  ClusterSubnetGroups?: ClusterSubnetGroup[];
}

export namespace ClusterSubnetGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSubnetGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The cluster subnet group name does not refer to an existing cluster subnet
 *             group.</p>
 */
export interface ClusterSubnetGroupNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ClusterSubnetGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSubnetGroupNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSubnetGroupNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The request would result in user exceeding the allowed number of cluster subnet
 *             groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface ClusterSubnetGroupQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "ClusterSubnetGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSubnetGroupQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSubnetGroupQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>The request would result in user exceeding the allowed number of subnets in a
 *             cluster subnet groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface ClusterSubnetQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "ClusterSubnetQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterSubnetQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterSubnetQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a cluster version, including the parameter group family and description
 *             of the version.</p>
 */
export interface ClusterVersion {
  /**
   * <p>The version number used by the cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The name of the cluster parameter group family for the cluster.</p>
   */
  ClusterParameterGroupFamily?: string;

  /**
   * <p>The description of the cluster version.</p>
   */
  Description?: string;
}

export namespace ClusterVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterVersion): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output from the <a>DescribeClusterVersions</a> action.
 *         </p>
 */
export interface ClusterVersionsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of <code>Version</code> elements. </p>
   */
  ClusterVersions?: ClusterVersion[];
}

export namespace ClusterVersionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterVersionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CopyClusterSnapshotMessage {
  /**
   * <p>The identifier for the source snapshot.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be the identifier for a valid automated snapshot whose state is
   *                         <code>available</code>.</p>
   *             </li>
   *          </ul>
   */
  SourceSnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier of the cluster the source snapshot was created from. This parameter
   *             is required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be the identifier for a valid cluster.</p>
   *             </li>
   *          </ul>
   */
  SourceSnapshotClusterIdentifier?: string;

  /**
   * <p>The identifier given to the new manual snapshot.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Cannot be null, empty, or blank.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain from 1 to 255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>Must be unique for the Amazon Web Services account that is making the request.</p>
   *             </li>
   *          </ul>
   */
  TargetSnapshotIdentifier: string | undefined;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely. </p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *         <p>The default value is -1.</p>
   */
  ManualSnapshotRetentionPeriod?: number;
}

export namespace CopyClusterSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyClusterSnapshotMessage): any => ({
    ...obj,
  });
}

export interface CopyClusterSnapshotResult {
  /**
   * <p>Describes a snapshot.</p>
   */
  Snapshot?: Snapshot;
}

export namespace CopyClusterSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyClusterSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p>Cross-region snapshot copy was temporarily disabled. Try your request
 *             again.</p>
 */
export interface CopyToRegionDisabledFault extends __SmithyException, $MetadataBearer {
  name: "CopyToRegionDisabledFault";
  $fault: "client";
  message?: string;
}

export namespace CopyToRegionDisabledFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyToRegionDisabledFault): any => ({
    ...obj,
  });
}

export interface CreateAuthenticationProfileMessage {
  /**
   * <p>The name of the authentication profile to be created.</p>
   */
  AuthenticationProfileName: string | undefined;

  /**
   * <p>The content of the authentication profile in JSON format.
   *             The maximum length of the JSON string is determined by a quota for your account.</p>
   */
  AuthenticationProfileContent: string | undefined;
}

export namespace CreateAuthenticationProfileMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAuthenticationProfileMessage): any => ({
    ...obj,
  });
}

export interface CreateAuthenticationProfileResult {
  /**
   * <p>The name of the authentication profile that was created.</p>
   */
  AuthenticationProfileName?: string;

  /**
   * <p>The content of the authentication profile in JSON format.</p>
   */
  AuthenticationProfileContent?: string;
}

export namespace CreateAuthenticationProfileResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAuthenticationProfileResult): any => ({
    ...obj,
  });
}

/**
 * <p>The authentication profile request is not valid. The profile name can't be null or empty.
 *             The authentication profile API operation must be available in the Amazon Web Services Region.</p>
 */
export interface InvalidAuthenticationProfileRequestFault extends __SmithyException, $MetadataBearer {
  name: "InvalidAuthenticationProfileRequestFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidAuthenticationProfileRequestFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidAuthenticationProfileRequestFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateClusterMessage {
  /**
   * <p>The name of the first database to be created when the cluster is created.</p>
   *         <p>To create additional databases after the cluster is created, connect to the cluster
   *             with a SQL client and use SQL commands to create a database. For more information, go to
   *                 <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_creating_database.html">Create
   *                 a Database</a> in the Amazon Redshift Database Developer Guide. </p>
   *         <p>Default: <code>dev</code>
   *         </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain 1 to 64 alphanumeric characters.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain only lowercase letters.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot be a word that is reserved by the service. A list of reserved words
   *                     can be found in <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the
   *                     Amazon Redshift Database Developer Guide. </p>
   *             </li>
   *          </ul>
   */
  DBName?: string;

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
   *
   *             <p>Example: <code>myexamplecluster</code>
   *         </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The type of the cluster. When cluster type is specified as</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>single-node</code>, the <b>NumberOfNodes</b>
   *                     parameter is not required.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>multi-node</code>, the <b>NumberOfNodes</b>
   *                     parameter is required.</p>
   *             </li>
   *          </ul>
   *         <p>Valid Values: <code>multi-node</code> | <code>single-node</code>
   *         </p>
   *         <p>Default: <code>multi-node</code>
   *         </p>
   */
  ClusterType?: string;

  /**
   * <p>The node type to be provisioned for the cluster. For information about node types,
   *             go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes"> Working with
   *                 Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *         <p>Valid Values: <code>ds2.xlarge</code> | <code>ds2.8xlarge</code> |
   *                 <code>dc1.large</code> | <code>dc1.8xlarge</code> |
   *                 <code>dc2.large</code> | <code>dc2.8xlarge</code> |
   *                 <code>ra3.xlplus</code> |  <code>ra3.4xlarge</code> | <code>ra3.16xlarge</code>
   *          </p>
   */
  NodeType: string | undefined;

  /**
   * <p>The user name associated with the admin user account for the cluster that is being
   *             created.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 - 128 alphanumeric characters. The user name can't be
   *                         <code>PUBLIC</code>.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *
   *                 <p>Cannot be a reserved word. A list of reserved words can be found in <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved
   *                         Words</a> in the Amazon Redshift Database Developer Guide. </p>
   *             </li>
   *          </ul>
   */
  MasterUsername: string | undefined;

  /**
   * <p>The password associated with the admin user account for the cluster that is being
   *             created.</p>
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
  MasterUserPassword: string | undefined;

  /**
   * <p>A list of security groups to be associated with this cluster.</p>
   *         <p>Default: The default cluster security group for Amazon Redshift.</p>
   */
  ClusterSecurityGroups?: string[];

  /**
   * <p>A list of Virtual Private Cloud (VPC) security groups to be associated with the
   *             cluster.</p>
   *         <p>Default: The default VPC security group is associated with the cluster.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The name of a cluster subnet group to be associated with this cluster.</p>
   *         <p>If this parameter is not provided the resulting cluster will be deployed outside
   *             virtual private cloud (VPC).</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the
   *             cluster. For example, if you have several EC2 instances running in a specific
   *             Availability Zone, then you might want the cluster to be provisioned in the same zone in
   *             order to decrease network latency.</p>
   *         <p>Default: A random, system-chosen Availability Zone in the region that is specified
   *             by the endpoint.</p>
   *         <p>Example: <code>us-east-2d</code>
   *         </p>
   *         <p>Constraint: The specified Availability Zone must be in the same region as the
   *             current endpoint.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The weekly time range (in UTC) during which automated cluster maintenance can
   *             occur.</p>
   *         <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *         </p>
   *         <p> Default: A 30-minute window selected at random from an 8-hour block of time per
   *             region, occurring on a random day of the week. For more information about the time
   *             blocks for each region, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows">Maintenance Windows</a> in Amazon Redshift Cluster Management Guide.</p>
   *         <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *         <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The name of the parameter group to be associated with this cluster.</p>
   *         <p>Default: The default Amazon Redshift cluster parameter group. For information about the
   *             default parameter group, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Working with Amazon
   *                 Redshift Parameter Groups</a>
   *         </p>
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
   * <p>The number of days that automated snapshots are retained. If the value is 0,
   *             automated snapshots are disabled. Even if automated snapshots are disabled, you can
   *             still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p>
   *
   *         <p>You can't disable automated snapshots for RA3 node types. Set the automated retention period from 1-35 days.</p>
   *         <p>Default: <code>1</code>
   *         </p>
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
   * <p>The port number on which the cluster accepts incoming connections.</p>
   *         <p>The cluster is accessible only via the JDBC and ODBC connection strings. Part of
   *             the connection string requires the port on which the cluster will listen for incoming
   *             connections.</p>
   *         <p>Default: <code>5439</code>
   *         </p>
   *         <p>Valid Values: <code>1150-65535</code>
   *         </p>
   */
  Port?: number;

  /**
   * <p>The version of the Amazon Redshift engine software that you want to deploy on the
   *             cluster.</p>
   *         <p>The version selected runs on all the nodes in the cluster.</p>
   *         <p>Constraints: Only version 1.0 is currently available.</p>
   *         <p>Example: <code>1.0</code>
   *         </p>
   */
  ClusterVersion?: string;

  /**
   * <p>If <code>true</code>, major version upgrades can be applied during the maintenance
   *             window to the Amazon Redshift engine that is running on the cluster.</p>
   *         <p>When a new major version of the Amazon Redshift engine is released, you can request that
   *             the service automatically apply upgrades during the maintenance window to the Amazon Redshift
   *             engine that is running on your cluster.</p>
   *         <p>Default: <code>true</code>
   *         </p>
   */
  AllowVersionUpgrade?: boolean;

  /**
   * <p>The number of compute nodes in the cluster. This parameter is required when the
   *                 <b>ClusterType</b> parameter is specified as
   *                 <code>multi-node</code>. </p>
   *         <p>For information about determining how many nodes you need, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes"> Working with
   *                 Clusters</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   *         <p>If you don't specify this parameter, you get a single-node cluster. When requesting
   *             a multi-node cluster, you must specify the number of nodes that you want in the
   *             cluster.</p>
   *         <p>Default: <code>1</code>
   *         </p>
   *         <p>Constraints: Value must be at least 1 and no more than 100.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>If <code>true</code>, the cluster can be accessed from a public network. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>If <code>true</code>, the data in the cluster is encrypted at rest. </p>
   *         <p>Default: false</p>
   */
  Encrypted?: boolean;

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
   * <p>The Elastic IP (EIP) address for the cluster.</p>
   *         <p>Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible
   *             through an Internet gateway. For more information about provisioning clusters in
   *             EC2-VPC, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms">Supported
   *                 Platforms to Launch Your Cluster</a> in the Amazon Redshift Cluster Management Guide.</p>
   */
  ElasticIp?: string;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Key Management Service (KMS) key ID of the encryption key that you want to
   *             use to encrypt data in the cluster.</p>
   */
  KmsKeyId?: string;

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
   * <p>A list of Identity and Access Management (IAM) roles that can be used by the
   *             cluster to access other Amazon Web Services services. You must supply the IAM roles in their Amazon
   *             Resource Name (ARN) format. You can supply up to 10 IAM roles in a single
   *             request.</p>
   *         <p>A cluster can have up to 10 IAM roles associated with it at any time.</p>
   */
  IamRoles?: string[];

  /**
   * <p>An optional parameter for the name of the maintenance track for the cluster. If you
   *             don't provide a maintenance track name, the cluster is assigned to the
   *                 <code>current</code> track.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>A unique identifier for the snapshot schedule.</p>
   */
  SnapshotScheduleIdentifier?: string;

  /**
   * <p>The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster is created.</p>
   */
  AvailabilityZoneRelocation?: boolean;

  /**
   * <p>The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) when it is created. Possible values include the following.</p>
   *         <ul>
   *             <li>
   *                <p>enabled - Use AQUA if it is available for the current Amazon Web Services Region and Amazon Redshift node type.</p>
   *             </li>
   *             <li>
   *                <p>disabled - Don't use AQUA. </p>
   *             </li>
   *             <li>
   *                <p>auto - Amazon Redshift determines whether to use AQUA.</p>
   *             </li>
   *          </ul>
   */
  AquaConfigurationStatus?: AquaConfigurationStatus | string;
}

export namespace CreateClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterMessage): any => ({
    ...obj,
  });
}

export interface CreateClusterResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace CreateClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p>There is no Amazon Redshift HSM client certificate with the specified
 *             identifier.</p>
 */
export interface HsmClientCertificateNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "HsmClientCertificateNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace HsmClientCertificateNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HsmClientCertificateNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>There is no Amazon Redshift HSM configuration with the specified identifier.</p>
 */
export interface HsmConfigurationNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "HsmConfigurationNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace HsmConfigurationNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HsmConfigurationNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The number of nodes specified exceeds the allotted capacity of the
 *             cluster.</p>
 */
export interface InsufficientClusterCapacityFault extends __SmithyException, $MetadataBearer {
  name: "InsufficientClusterCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientClusterCapacityFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsufficientClusterCapacityFault): any => ({
    ...obj,
  });
}

/**
 * <p>The cluster subnet group cannot be deleted because it is in use.</p>
 */
export interface InvalidClusterSubnetGroupStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidClusterSubnetGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterSubnetGroupStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidClusterSubnetGroupStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>The provided cluster track name is not valid.</p>
 */
export interface InvalidClusterTrackFault extends __SmithyException, $MetadataBearer {
  name: "InvalidClusterTrackFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterTrackFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidClusterTrackFault): any => ({
    ...obj,
  });
}

/**
 * <p>The Elastic IP (EIP) is invalid or cannot be found.</p>
 */
export interface InvalidElasticIpFault extends __SmithyException, $MetadataBearer {
  name: "InvalidElasticIpFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidElasticIpFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidElasticIpFault): any => ({
    ...obj,
  });
}

/**
 * <p>The requested subnet is not valid, or not all of the subnets are in the same
 *             VPC.</p>
 */
export interface InvalidSubnet extends __SmithyException, $MetadataBearer {
  name: "InvalidSubnet";
  $fault: "client";
  message?: string;
}

export namespace InvalidSubnet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidSubnet): any => ({
    ...obj,
  });
}

/**
 * <p>The tag is invalid.</p>
 */
export interface InvalidTagFault extends __SmithyException, $MetadataBearer {
  name: "InvalidTagFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidTagFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidTagFault): any => ({
    ...obj,
  });
}

/**
 * <p>The cluster subnet group does not cover all Availability Zones.</p>
 */
export interface InvalidVPCNetworkStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidVPCNetworkStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidVPCNetworkStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidVPCNetworkStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>The operation would exceed the number of nodes allowed for a cluster.</p>
 */
export interface NumberOfNodesPerClusterLimitExceededFault extends __SmithyException, $MetadataBearer {
  name: "NumberOfNodesPerClusterLimitExceededFault";
  $fault: "client";
  message?: string;
}

export namespace NumberOfNodesPerClusterLimitExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NumberOfNodesPerClusterLimitExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>The operation would exceed the number of nodes allotted to the account.
 *
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface NumberOfNodesQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "NumberOfNodesQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace NumberOfNodesQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NumberOfNodesQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>We could not find the specified snapshot schedule. </p>
 */
export interface SnapshotScheduleNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "SnapshotScheduleNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotScheduleNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotScheduleNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the number of tags allowed.</p>
 */
export interface TagLimitExceededFault extends __SmithyException, $MetadataBearer {
  name: "TagLimitExceededFault";
  $fault: "client";
  message?: string;
}

export namespace TagLimitExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagLimitExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>Your account is not authorized to perform the requested operation.</p>
 */
export interface UnauthorizedOperation extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedOperation";
  $fault: "client";
  message?: string;
}

export namespace UnauthorizedOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnauthorizedOperation): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateClusterParameterGroupMessage {
  /**
   * <p>The name of the cluster parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>Must be unique withing your Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>This value is stored as a lower-case string.</p>
   *         </note>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>The Amazon Redshift engine version to which the cluster parameter group applies. The
   *             cluster engine version determines the set of parameters.</p>
   *         <p>To get a list of valid parameter group family names, you can call <a>DescribeClusterParameterGroups</a>. By default, Amazon Redshift returns a list of
   *             all the parameter groups that are owned by your Amazon Web Services account, including the default
   *             parameter groups for each Amazon Redshift engine version. The parameter group family names
   *             associated with the default parameter groups provide you the valid values. For example,
   *             a valid family name is "redshift-1.0". </p>
   */
  ParameterGroupFamily: string | undefined;

  /**
   * <p>A description of the parameter group.</p>
   */
  Description: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace CreateClusterParameterGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterParameterGroupMessage): any => ({
    ...obj,
  });
}

export interface CreateClusterParameterGroupResult {
  /**
   * <p>Describes a parameter group.</p>
   */
  ClusterParameterGroup?: ClusterParameterGroup;
}

export namespace CreateClusterParameterGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterParameterGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateClusterSecurityGroupMessage {
  /**
   * <p>The name for the security group. Amazon Redshift stores the value as a lowercase
   *             string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain no more than 255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>Must not be "Default".</p>
   *             </li>
   *             <li>
   *                 <p>Must be unique for all security groups that are created by your Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>examplesecuritygroup</code>
   *         </p>
   */
  ClusterSecurityGroupName: string | undefined;

  /**
   * <p>A description for the security group.</p>
   */
  Description: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace CreateClusterSecurityGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterSecurityGroupMessage): any => ({
    ...obj,
  });
}

export interface CreateClusterSecurityGroupResult {
  /**
   * <p>Describes a security group.</p>
   */
  ClusterSecurityGroup?: ClusterSecurityGroup;
}

export namespace CreateClusterSecurityGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterSecurityGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateClusterSnapshotMessage {
  /**
   * <p>A unique identifier for the snapshot that you are requesting. This identifier must
   *             be unique for all snapshots within the Amazon Web Services account.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Cannot be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                 <p>Must contain from 1 to 255 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-snapshot-id</code>
   *         </p>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The cluster identifier for which you want a snapshot.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely. </p>
   *
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *
   *         <p>The default value is -1.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace CreateClusterSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterSnapshotMessage): any => ({
    ...obj,
  });
}

export interface CreateClusterSnapshotResult {
  /**
   * <p>Describes a snapshot.</p>
   */
  Snapshot?: Snapshot;
}

export namespace CreateClusterSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateClusterSubnetGroupMessage {
  /**
   * <p>The name for the subnet group. Amazon Redshift stores the value as a lowercase
   *             string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain no more than 255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>Must not be "Default".</p>
   *             </li>
   *             <li>
   *                 <p>Must be unique for all subnet groups that are created by your Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>examplesubnetgroup</code>
   *         </p>
   */
  ClusterSubnetGroupName: string | undefined;

  /**
   * <p>A description for the subnet group.</p>
   */
  Description: string | undefined;

  /**
   * <p>An array of VPC subnet IDs. A maximum of 20 subnets can be modified in a single
   *             request.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace CreateClusterSubnetGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterSubnetGroupMessage): any => ({
    ...obj,
  });
}

export interface CreateClusterSubnetGroupResult {
  /**
   * <p>Describes a subnet group.</p>
   */
  ClusterSubnetGroup?: ClusterSubnetGroup;
}

export namespace CreateClusterSubnetGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterSubnetGroupResult): any => ({
    ...obj,
  });
}

export interface CreateEndpointAccessMessage {
  /**
   * <p>The cluster identifier of the cluster to access.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The Amazon Web Services account ID of the owner of the cluster. This is only required if the cluster is in another Amazon Web Services account.</p>
   */
  ResourceOwner?: string;

  /**
   * <p>The Redshift-managed VPC endpoint name.</p>
   *          <p>An endpoint name must contain 1-30 characters.
   *           Valid characters are A-Z, a-z, 0-9, and hyphen(-).
   *           The first character must be a letter.
   *           The name can't contain two consecutive hyphens or end with a hyphen.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The subnet group from which Amazon Redshift chooses the subnet to deploy the endpoint.</p>
   */
  SubnetGroupName: string | undefined;

  /**
   * <p>The security group that defines the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.</p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace CreateEndpointAccessMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEndpointAccessMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Redshift-managed VPC endpoint.</p>
 */
export interface EndpointAccess {
  /**
   * <p>The cluster identifier of the cluster associated with the endpoint.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The Amazon Web Services account ID of the owner of the cluster.</p>
   */
  ResourceOwner?: string;

  /**
   * <p>The subnet group name where Amazon Redshift chooses to deploy the endpoint.</p>
   */
  SubnetGroupName?: string;

  /**
   * <p>The status of the endpoint.</p>
   */
  EndpointStatus?: string;

  /**
   * <p>The name of the endpoint.</p>
   */
  EndpointName?: string;

  /**
   * <p>The time (UTC) that the endpoint was created.</p>
   */
  EndpointCreateTime?: Date;

  /**
   * <p>The port number on which the cluster accepts incoming connections.</p>
   */
  Port?: number;

  /**
   * <p>The DNS address of the endpoint.</p>
   */
  Address?: string;

  /**
   * <p>The security groups associated with the endpoint.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * <p>The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.</p>
   */
  VpcEndpoint?: VpcEndpoint;
}

export namespace EndpointAccess {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointAccess): any => ({
    ...obj,
  });
}

/**
 * <p>The account already has a Redshift-managed VPC endpoint with the given identifier.</p>
 */
export interface EndpointAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "EndpointAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace EndpointAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>The number of Redshift-managed VPC endpoints per authorization has exceeded its limit.</p>
 */
export interface EndpointsPerAuthorizationLimitExceededFault extends __SmithyException, $MetadataBearer {
  name: "EndpointsPerAuthorizationLimitExceededFault";
  $fault: "client";
  message?: string;
}

export namespace EndpointsPerAuthorizationLimitExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointsPerAuthorizationLimitExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>The number of Redshift-managed VPC endpoints per cluster has exceeded its limit.</p>
 */
export interface EndpointsPerClusterLimitExceededFault extends __SmithyException, $MetadataBearer {
  name: "EndpointsPerClusterLimitExceededFault";
  $fault: "client";
  message?: string;
}

export namespace EndpointsPerClusterLimitExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointsPerClusterLimitExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateEventSubscriptionMessage {
  /**
   * <p>The name of the event subscription to be created.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Cannot be null, empty, or blank.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain from 1 to 255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event
   *             notifications. The ARN is created by Amazon SNS when you create a topic and subscribe to
   *             it.</p>
   */
  SnsTopicArn: string | undefined;

  /**
   * <p>The type of source that will be generating the events. For example, if you want to
   *             be notified of events generated by a cluster, you would set this parameter to cluster.
   *             If this value is not specified, events are returned for all Amazon Redshift objects in your
   *             Amazon Web Services account. You must specify a source type in order to specify source IDs.</p>
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
   *         <p>Values: configuration, management, monitoring, security, pending</p>
   */
  EventCategories?: string[];

  /**
   * <p>Specifies the Amazon Redshift event severity to be published by the event notification
   *             subscription.</p>
   *         <p>Values: ERROR, INFO</p>
   */
  Severity?: string;

  /**
   * <p>A boolean value; set to <code>true</code> to activate the subscription, and set to
   *                 <code>false</code> to create the subscription but not activate it. </p>
   */
  Enabled?: boolean;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace CreateEventSubscriptionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEventSubscriptionMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes event subscriptions.</p>
 */
export interface EventSubscription {
  /**
   * <p>The Amazon Web Services account associated with the Amazon Redshift event notification
   *             subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * <p>The name of the Amazon Redshift event notification subscription.</p>
   */
  CustSubscriptionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic used by the event
   *             notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The status of the Amazon Redshift event notification subscription.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Can be one of the following: active | no-permission |
   *                     topic-not-exist</p>
   *             </li>
   *             <li>
   *                 <p>The status "no-permission" indicates that Amazon Redshift no longer has
   *                     permission to post to the Amazon SNS topic. The status "topic-not-exist"
   *                     indicates that the topic was deleted after the subscription was
   *                     created.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>The date and time the Amazon Redshift event notification subscription was
   *             created.</p>
   */
  SubscriptionCreationTime?: Date;

  /**
   * <p>The source type of the events returned by the Amazon Redshift event notification, such as
   *             cluster, cluster-snapshot, cluster-parameter-group, cluster-security-group, or scheduled-action. </p>
   */
  SourceType?: string;

  /**
   * <p>A list of the sources that publish events to the Amazon Redshift event notification
   *             subscription.</p>
   */
  SourceIdsList?: string[];

  /**
   * <p>The list of Amazon Redshift event categories specified in the event notification
   *             subscription.</p>
   *         <p>Values: Configuration, Management, Monitoring, Security, Pending</p>
   */
  EventCategoriesList?: string[];

  /**
   * <p>The event severity specified in the Amazon Redshift event notification
   *             subscription.</p>
   *         <p>Values: ERROR, INFO</p>
   */
  Severity?: string;

  /**
   * <p>A boolean value indicating whether the subscription is enabled; <code>true</code>
   *             indicates that the subscription is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The list of tags for the event subscription.</p>
   */
  Tags?: Tag[];
}

export namespace EventSubscription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventSubscription): any => ({
    ...obj,
  });
}

export interface CreateEventSubscriptionResult {
  /**
   * <p>Describes event subscriptions.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace CreateEventSubscriptionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEventSubscriptionResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request would exceed the allowed number of event subscriptions for this
 *             account.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface EventSubscriptionQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "EventSubscriptionQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace EventSubscriptionQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventSubscriptionQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon SNS has responded that there is a problem with the specified Amazon SNS
 *             topic.</p>
 */
export interface SNSInvalidTopicFault extends __SmithyException, $MetadataBearer {
  name: "SNSInvalidTopicFault";
  $fault: "client";
  message?: string;
}

export namespace SNSInvalidTopicFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SNSInvalidTopicFault): any => ({
    ...obj,
  });
}

/**
 * <p>You do not have permission to publish to the specified Amazon SNS topic.</p>
 */
export interface SNSNoAuthorizationFault extends __SmithyException, $MetadataBearer {
  name: "SNSNoAuthorizationFault";
  $fault: "client";
  message?: string;
}

export namespace SNSNoAuthorizationFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SNSNoAuthorizationFault): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon SNS topic with the specified Amazon Resource Name (ARN) does not
 *             exist.</p>
 */
export interface SNSTopicArnNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "SNSTopicArnNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SNSTopicArnNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SNSTopicArnNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The specified Amazon Redshift event source could not be found.</p>
 */
export interface SourceNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "SourceNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SourceNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>There is already an existing event notification subscription with the specified
 *             name.</p>
 */
export interface SubscriptionAlreadyExistFault extends __SmithyException, $MetadataBearer {
  name: "SubscriptionAlreadyExistFault";
  $fault: "client";
  message?: string;
}

export namespace SubscriptionAlreadyExistFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubscriptionAlreadyExistFault): any => ({
    ...obj,
  });
}

/**
 * <p>The value specified for the event category was not one of the allowed values, or it
 *             specified a category that does not apply to the specified source type. The allowed
 *             values are Configuration, Management, Monitoring, and Security.</p>
 */
export interface SubscriptionCategoryNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "SubscriptionCategoryNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SubscriptionCategoryNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubscriptionCategoryNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon Redshift event with the specified event ID does not exist.</p>
 */
export interface SubscriptionEventIdNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "SubscriptionEventIdNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SubscriptionEventIdNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubscriptionEventIdNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The value specified for the event severity was not one of the allowed values, or it
 *             specified a severity that does not apply to the specified source type. The allowed
 *             values are ERROR and INFO.</p>
 */
export interface SubscriptionSeverityNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "SubscriptionSeverityNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SubscriptionSeverityNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubscriptionSeverityNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateHsmClientCertificateMessage {
  /**
   * <p>The identifier to be assigned to the new HSM client certificate that the cluster
   *             will use to connect to the HSM to use the database encryption keys.</p>
   */
  HsmClientCertificateIdentifier: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace CreateHsmClientCertificateMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateHsmClientCertificateMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an HSM client certificate. The certificate is stored in a
 *             secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data
 *             files.</p>
 */
export interface HsmClientCertificate {
  /**
   * <p>The identifier of the HSM client certificate.</p>
   */
  HsmClientCertificateIdentifier?: string;

  /**
   * <p>The public key that the Amazon Redshift cluster will use to connect to the HSM. You must
   *             register the public key in the HSM.</p>
   */
  HsmClientCertificatePublicKey?: string;

  /**
   * <p>The list of tags for the HSM client certificate.</p>
   */
  Tags?: Tag[];
}

export namespace HsmClientCertificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HsmClientCertificate): any => ({
    ...obj,
  });
}

export interface CreateHsmClientCertificateResult {
  /**
   * <p>Returns information about an HSM client certificate. The certificate is stored in a
   *             secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data
   *             files.</p>
   */
  HsmClientCertificate?: HsmClientCertificate;
}

export namespace CreateHsmClientCertificateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateHsmClientCertificateResult): any => ({
    ...obj,
  });
}

/**
 * <p>There is already an existing Amazon Redshift HSM client certificate with the specified
 *             identifier.</p>
 */
export interface HsmClientCertificateAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "HsmClientCertificateAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace HsmClientCertificateAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HsmClientCertificateAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>The quota for HSM client certificates has been reached.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface HsmClientCertificateQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "HsmClientCertificateQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace HsmClientCertificateQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HsmClientCertificateQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateHsmConfigurationMessage {
  /**
   * <p>The identifier to be assigned to the new Amazon Redshift HSM configuration.</p>
   */
  HsmConfigurationIdentifier: string | undefined;

  /**
   * <p>A text description of the HSM configuration to be created.</p>
   */
  Description: string | undefined;

  /**
   * <p>The IP address that the Amazon Redshift cluster must use to access the HSM.</p>
   */
  HsmIpAddress: string | undefined;

  /**
   * <p>The name of the partition in the HSM where the Amazon Redshift clusters will store their
   *             database encryption keys.</p>
   */
  HsmPartitionName: string | undefined;

  /**
   * <p>The password required to access the HSM partition.</p>
   */
  HsmPartitionPassword: string | undefined;

  /**
   * <p>The HSMs public certificate file. When using Cloud HSM, the file name is
   *             server.pem.</p>
   */
  HsmServerPublicCertificate: string | undefined;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace CreateHsmConfigurationMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateHsmConfigurationMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an HSM configuration, which is an object that describes
 *             to Amazon Redshift clusters the information they require to connect to an HSM where they can
 *             store database encryption keys.</p>
 */
export interface HsmConfiguration {
  /**
   * <p>The name of the Amazon Redshift HSM configuration.</p>
   */
  HsmConfigurationIdentifier?: string;

  /**
   * <p>A text description of the HSM configuration.</p>
   */
  Description?: string;

  /**
   * <p>The IP address that the Amazon Redshift cluster must use to access the HSM.</p>
   */
  HsmIpAddress?: string;

  /**
   * <p>The name of the partition in the HSM where the Amazon Redshift clusters will store their
   *             database encryption keys.</p>
   */
  HsmPartitionName?: string;

  /**
   * <p>The list of tags for the HSM configuration.</p>
   */
  Tags?: Tag[];
}

export namespace HsmConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HsmConfiguration): any => ({
    ...obj,
  });
}

export interface CreateHsmConfigurationResult {
  /**
   * <p>Returns information about an HSM configuration, which is an object that describes
   *             to Amazon Redshift clusters the information they require to connect to an HSM where they can
   *             store database encryption keys.</p>
   */
  HsmConfiguration?: HsmConfiguration;
}

export namespace CreateHsmConfigurationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateHsmConfigurationResult): any => ({
    ...obj,
  });
}

/**
 * <p>There is already an existing Amazon Redshift HSM configuration with the specified
 *             identifier.</p>
 */
export interface HsmConfigurationAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "HsmConfigurationAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace HsmConfigurationAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HsmConfigurationAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>The quota for HSM configurations has been reached.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface HsmConfigurationQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "HsmConfigurationQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace HsmConfigurationQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HsmConfigurationQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a pause cluster operation. For example, a scheduled action to run the <code>PauseCluster</code> API operation. </p>
 */
export interface PauseClusterMessage {
  /**
   * <p>The identifier of the cluster to be paused.</p>
   */
  ClusterIdentifier: string | undefined;
}

export namespace PauseClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PauseClusterMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a resize cluster operation. For example, a scheduled action to run the <code>ResizeCluster</code> API operation. </p>
 */
export interface ResizeClusterMessage {
  /**
   * <p>The unique identifier for the cluster to resize.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The new cluster type for the specified cluster.</p>
   */
  ClusterType?: string;

  /**
   * <p>The new node type for the nodes you are adding. If not specified, the cluster's current node type is used.</p>
   */
  NodeType?: string;

  /**
   * <p>The new number of nodes for the cluster. If not specified, the cluster's current number of nodes is used.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>A boolean value indicating whether the resize operation is using the classic resize
   *             process. If you don't provide this parameter or set the value to
   *             <code>false</code>, the resize type is elastic. </p>
   */
  Classic?: boolean;
}

export namespace ResizeClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResizeClusterMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a resume cluster operation. For example, a scheduled action to run the <code>ResumeCluster</code> API operation. </p>
 */
export interface ResumeClusterMessage {
  /**
   * <p>The identifier of the cluster to be resumed.</p>
   */
  ClusterIdentifier: string | undefined;
}

export namespace ResumeClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResumeClusterMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler. </p>
 */
export interface ScheduledActionType {
  /**
   * <p>An action that runs a <code>ResizeCluster</code> API operation. </p>
   */
  ResizeCluster?: ResizeClusterMessage;

  /**
   * <p>An action that runs a <code>PauseCluster</code> API operation. </p>
   */
  PauseCluster?: PauseClusterMessage;

  /**
   * <p>An action that runs a <code>ResumeCluster</code> API operation. </p>
   */
  ResumeCluster?: ResumeClusterMessage;
}

export namespace ScheduledActionType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledActionType): any => ({
    ...obj,
  });
}

export interface CreateScheduledActionMessage {
  /**
   * <p>The name of the scheduled action. The name must be unique within an account.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>A JSON format string of the Amazon Redshift API operation with input parameters.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   */
  TargetAction: ScheduledActionType | undefined;

  /**
   * <p>The schedule in <code>at( )</code> or <code>cron( )</code> format.
   *             For more information about this parameter, see <a>ScheduledAction</a>.</p>
   */
  Schedule: string | undefined;

  /**
   * <p>The IAM role to assume to run the target action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   */
  IamRole: string | undefined;

  /**
   * <p>The description of the scheduled action.
   *             </p>
   */
  ScheduledActionDescription?: string;

  /**
   * <p>The start time in UTC of the scheduled action.
   *             Before this time, the scheduled action does not trigger.
   *             For more information about this parameter, see <a>ScheduledAction</a>.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   */
  EndTime?: Date;

  /**
   * <p>If true, the schedule is enabled. If false, the scheduled action does not trigger.
   *             For more information about <code>state</code> of the scheduled action, see <a>ScheduledAction</a>. </p>
   */
  Enable?: boolean;
}

export namespace CreateScheduledActionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateScheduledActionMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The scheduled action is not valid. </p>
 */
export interface InvalidScheduledActionFault extends __SmithyException, $MetadataBearer {
  name: "InvalidScheduledActionFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidScheduledActionFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidScheduledActionFault): any => ({
    ...obj,
  });
}

/**
 * <p>The schedule you submitted isn't valid.</p>
 */
export interface InvalidScheduleFault extends __SmithyException, $MetadataBearer {
  name: "InvalidScheduleFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidScheduleFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidScheduleFault): any => ({
    ...obj,
  });
}

export enum ScheduledActionState {
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED",
}

/**
 * <p>Describes a scheduled action. You can use a scheduled action to trigger some Amazon Redshift API operations on a schedule.
 *             For information about which API operations can be scheduled, see  <a>ScheduledActionType</a>. </p>
 */
export interface ScheduledAction {
  /**
   * <p>The name of the scheduled action. </p>
   */
  ScheduledActionName?: string;

  /**
   * <p>A JSON format string of the Amazon Redshift API operation with input parameters. </p>
   *         <p>"<code>{\"ResizeCluster\":{\"NodeType\":\"ds2.8xlarge\",\"ClusterIdentifier\":\"my-test-cluster\",\"NumberOfNodes\":3}}</code>". </p>
   */
  TargetAction?: ScheduledActionType;

  /**
   * <p>The schedule for a one-time (at format) or recurring (cron format) scheduled action.
   *             Schedule invocations must be separated by at least one hour.</p>
   *         <p>Format of at expressions is "<code>at(yyyy-mm-ddThh:mm:ss)</code>". For example, "<code>at(2016-03-04T17:27:00)</code>".</p>
   *         <p>Format of cron expressions is "<code>cron(Minutes Hours Day-of-month Month Day-of-week Year)</code>".
   *             For example, "<code>cron(0 10 ? * MON *)</code>". For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions">Cron Expressions</a>
   *             in the <i>Amazon CloudWatch Events User Guide</i>.</p>
   */
  Schedule?: string;

  /**
   * <p>The IAM role to assume to run the scheduled action.
   *             This IAM role must have permission to run the Amazon Redshift API operation in the scheduled action.
   *             This IAM role must allow the Amazon Redshift scheduler (Principal scheduler.redshift.amazonaws.com) to assume permissions on your behalf.
   *
   * For more information about the IAM role to use with the Amazon Redshift scheduler, see
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using Identity-Based Policies for Amazon Redshift</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.
   * </p>
   */
  IamRole?: string;

  /**
   * <p>The description of the scheduled action. </p>
   */
  ScheduledActionDescription?: string;

  /**
   * <p>The state of the scheduled action. For example, <code>DISABLED</code>. </p>
   */
  State?: ScheduledActionState | string;

  /**
   * <p>List of times when the scheduled action will run. </p>
   */
  NextInvocations?: Date[];

  /**
   * <p>The start time in UTC when the schedule is active. Before this time, the scheduled action does not trigger. </p>
   */
  StartTime?: Date;

  /**
   * <p>The end time in UTC when the schedule is no longer active. After this time, the scheduled action does not trigger. </p>
   */
  EndTime?: Date;
}

export namespace ScheduledAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledAction): any => ({
    ...obj,
  });
}

/**
 * <p>The scheduled action already exists. </p>
 */
export interface ScheduledActionAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "ScheduledActionAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ScheduledActionAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledActionAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>The quota for scheduled actions exceeded. </p>
 */
export interface ScheduledActionQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "ScheduledActionQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ScheduledActionQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledActionQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>The action type specified for a scheduled action is not supported. </p>
 */
export interface ScheduledActionTypeUnsupportedFault extends __SmithyException, $MetadataBearer {
  name: "ScheduledActionTypeUnsupportedFault";
  $fault: "client";
  message?: string;
}

export namespace ScheduledActionTypeUnsupportedFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledActionTypeUnsupportedFault): any => ({
    ...obj,
  });
}

/**
 * <p>The result of the <code>CreateSnapshotCopyGrant</code> action.</p>
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
   */
  SnapshotCopyGrantName: string | undefined;

  /**
   * <p>The unique identifier of the customer master key (CMK) to which to grant Amazon Redshift
   *             permission. If no key is specified, the default key is used.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace CreateSnapshotCopyGrantMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSnapshotCopyGrantMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied
 *             snapshots with the specified customer master key (CMK) from Amazon Web Services KMS in the destination
 *             region.</p>
 *         <p>
 * For more information about managing snapshot copy grants, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface SnapshotCopyGrant {
  /**
   * <p>The name of the snapshot copy grant.</p>
   */
  SnapshotCopyGrantName?: string;

  /**
   * <p>The unique identifier of the customer master key (CMK) in Amazon Web Services KMS to which
   *             Amazon Redshift is granted permission.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace SnapshotCopyGrant {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotCopyGrant): any => ({
    ...obj,
  });
}

export interface CreateSnapshotCopyGrantResult {
  /**
   * <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied
   *             snapshots with the specified customer master key (CMK) from Amazon Web Services KMS in the destination
   *             region.</p>
   *         <p>
   * For more information about managing snapshot copy grants, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.
   * </p>
   */
  SnapshotCopyGrant?: SnapshotCopyGrant;
}

export namespace CreateSnapshotCopyGrantResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSnapshotCopyGrantResult): any => ({
    ...obj,
  });
}

/**
 * <p>The snapshot copy grant can't be created because a grant with the same name already
 *             exists.</p>
 */
export interface SnapshotCopyGrantAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "SnapshotCopyGrantAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotCopyGrantAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotCopyGrantAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Web Services account has exceeded the maximum number of snapshot copy grants in this
 *             region.</p>
 */
export interface SnapshotCopyGrantQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "SnapshotCopyGrantQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotCopyGrantQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotCopyGrantQuotaExceededFault): any => ({
    ...obj,
  });
}

export interface CreateSnapshotScheduleMessage {
  /**
   * <p>The definition of the snapshot schedule. The definition is made up of schedule
   *             expressions, for example "cron(30 12 *)" or "rate(12 hours)". </p>
   */
  ScheduleDefinitions?: string[];

  /**
   * <p>A unique identifier for a snapshot schedule. Only alphanumeric characters are allowed
   *             for the identifier.</p>
   */
  ScheduleIdentifier?: string;

  /**
   * <p>The description of the snapshot schedule.</p>
   */
  ScheduleDescription?: string;

  /**
   * <p>An optional set of tags you can use to search for the schedule.</p>
   */
  Tags?: Tag[];

  /**
   * <p></p>
   */
  DryRun?: boolean;

  /**
   * <p></p>
   */
  NextInvocations?: number;
}

export namespace CreateSnapshotScheduleMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSnapshotScheduleMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The definition you submitted is not supported.</p>
 */
export interface ScheduleDefinitionTypeUnsupportedFault extends __SmithyException, $MetadataBearer {
  name: "ScheduleDefinitionTypeUnsupportedFault";
  $fault: "client";
  message?: string;
}

export namespace ScheduleDefinitionTypeUnsupportedFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduleDefinitionTypeUnsupportedFault): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a snapshot schedule. You can set a regular interval for creating
 *             snapshots of a cluster. You can also schedule snapshots for specific dates. </p>
 */
export interface SnapshotSchedule {
  /**
   * <p>A list of ScheduleDefinitions.</p>
   */
  ScheduleDefinitions?: string[];

  /**
   * <p>A unique identifier for the schedule.</p>
   */
  ScheduleIdentifier?: string;

  /**
   * <p>The description of the schedule.</p>
   */
  ScheduleDescription?: string;

  /**
   * <p>An optional set of tags describing the schedule.</p>
   */
  Tags?: Tag[];

  /**
   * <p></p>
   */
  NextInvocations?: Date[];

  /**
   * <p>The number of clusters associated with the schedule.</p>
   */
  AssociatedClusterCount?: number;

  /**
   * <p>A list of clusters associated with the schedule. A maximum of 100 clusters is returned.</p>
   */
  AssociatedClusters?: ClusterAssociatedToSchedule[];
}

export namespace SnapshotSchedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotSchedule): any => ({
    ...obj,
  });
}

/**
 * <p>The specified snapshot schedule already exists. </p>
 */
export interface SnapshotScheduleAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "SnapshotScheduleAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotScheduleAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotScheduleAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the quota of snapshot schedules. </p>
 */
export interface SnapshotScheduleQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "SnapshotScheduleQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotScheduleQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotScheduleQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output from the <code>CreateTags</code> action. </p>
 */
export interface CreateTagsMessage {
  /**
   * <p>The Amazon Resource Name (ARN) to which you want to add the tag or tags. For
   *             example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>. </p>
   */
  ResourceName: string | undefined;

  /**
   * <p>One or more name/value pairs to add as tags to the specified resource. Each tag
   *             name is passed in with the parameter <code>Key</code> and the corresponding value is
   *             passed in with the parameter <code>Value</code>. The <code>Key</code> and
   *                 <code>Value</code> parameters are separated by a comma (,). Separate multiple tags
   *             with a space. For example, <code>--tags "Key"="owner","Value"="admin"
   *                 "Key"="environment","Value"="test" "Key"="version","Value"="1.0"</code>. </p>
   */
  Tags: Tag[] | undefined;
}

export namespace CreateTagsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTagsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The resource could not be found.</p>
 */
export interface ResourceNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundFault): any => ({
    ...obj,
  });
}

export enum UsageLimitBreachAction {
  DISABLE = "disable",
  EMIT_METRIC = "emit-metric",
  LOG = "log",
}

export enum UsageLimitFeatureType {
  CONCURRENCY_SCALING = "concurrency-scaling",
  SPECTRUM = "spectrum",
}

export enum UsageLimitLimitType {
  DATA_SCANNED = "data-scanned",
  TIME = "time",
}

export enum UsageLimitPeriod {
  DAILY = "daily",
  MONTHLY = "monthly",
  WEEKLY = "weekly",
}

export interface CreateUsageLimitMessage {
  /**
   * <p>The identifier of the cluster that you want to limit usage.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Redshift feature that you want to limit.</p>
   */
  FeatureType: UsageLimitFeatureType | string | undefined;

  /**
   * <p>The type of limit. Depending on the feature type, this can be based on a time duration or data size.
   *             If <code>FeatureType</code> is <code>spectrum</code>, then <code>LimitType</code> must be <code>data-scanned</code>.
   *             If <code>FeatureType</code> is <code>concurrency-scaling</code>, then <code>LimitType</code> must be <code>time</code>.
   *            </p>
   */
  LimitType: UsageLimitLimitType | string | undefined;

  /**
   * <p>The limit amount. If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB).
   *             The value must be a positive number.
   *             </p>
   */
  Amount: number | undefined;

  /**
   * <p>The time period that the amount applies to. A <code>weekly</code> period begins on Sunday. The default is <code>monthly</code>.
   *             </p>
   */
  Period?: UsageLimitPeriod | string;

  /**
   * <p>The action that Amazon Redshift takes when the limit is reached. The default is log.
   *             For more information about this parameter, see <a>UsageLimit</a>.</p>
   */
  BreachAction?: UsageLimitBreachAction | string;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace CreateUsageLimitMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUsageLimitMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The usage limit is not valid.</p>
 */
export interface InvalidUsageLimitFault extends __SmithyException, $MetadataBearer {
  name: "InvalidUsageLimitFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidUsageLimitFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidUsageLimitFault): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a usage limit object for a cluster. </p>
 */
export interface UsageLimit {
  /**
   * <p>The identifier of the usage limit.</p>
   */
  UsageLimitId?: string;

  /**
   * <p>The identifier of the cluster with a usage limit.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The Amazon Redshift feature to which the limit applies.</p>
   */
  FeatureType?: UsageLimitFeatureType | string;

  /**
   * <p>The type of limit. Depending on the feature type, this can be based on a time duration or data size.</p>
   */
  LimitType?: UsageLimitLimitType | string;

  /**
   * <p>The limit amount. If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB).</p>
   */
  Amount?: number;

  /**
   * <p>The time period that the amount applies to. A <code>weekly</code> period begins on Sunday. The default is <code>monthly</code>. </p>
   */
  Period?: UsageLimitPeriod | string;

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
   */
  BreachAction?: UsageLimitBreachAction | string;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Tag[];
}

export namespace UsageLimit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsageLimit): any => ({
    ...obj,
  });
}

/**
 * <p>The usage limit already exists. </p>
 */
export interface UsageLimitAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "UsageLimitAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace UsageLimitAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsageLimitAlreadyExistsFault): any => ({
    ...obj,
  });
}

export interface CustomerStorageMessage {
  /**
   * <p>The total amount of storage currently used for snapshots.</p>
   */
  TotalBackupSizeInMegaBytes?: number;

  /**
   * <p>The total amount of storage currently provisioned.</p>
   */
  TotalProvisionedStorageInMegaBytes?: number;
}

export namespace CustomerStorageMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomerStorageMessage): any => ({
    ...obj,
  });
}

export enum DataShareStatusForConsumer {
  ACTIVE = "ACTIVE",
  AVAILABLE = "AVAILABLE",
}

export enum DataShareStatusForProducer {
  ACTIVE = "ACTIVE",
  AUTHORIZED = "AUTHORIZED",
  DEAUTHORIZED = "DEAUTHORIZED",
  PENDING_AUTHORIZATION = "PENDING_AUTHORIZATION",
  REJECTED = "REJECTED",
}

export interface DeauthorizeDataShareMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare to remove authorization from.</p>
   */
  DataShareArn: string | undefined;

  /**
   * <p>The identifier of the data consumer that is to have authorization removed from the datashare.
   *             This identifier is an AWS account ID.</p>
   */
  ConsumerIdentifier: string | undefined;
}

export namespace DeauthorizeDataShareMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeauthorizeDataShareMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the default cluster parameters for a parameter group family.</p>
 */
export interface DefaultClusterParameters {
  /**
   * <p>The name of the cluster parameter group family to which the engine default
   *             parameters apply.</p>
   */
  ParameterGroupFamily?: string;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>The list of cluster default parameters.</p>
   */
  Parameters?: Parameter[];
}

export namespace DefaultClusterParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DefaultClusterParameters): any => ({
    ...obj,
  });
}

export interface DeleteAuthenticationProfileMessage {
  /**
   * <p>The name of the authentication profile to delete.</p>
   */
  AuthenticationProfileName: string | undefined;
}

export namespace DeleteAuthenticationProfileMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAuthenticationProfileMessage): any => ({
    ...obj,
  });
}

export interface DeleteAuthenticationProfileResult {
  /**
   * <p>The name of the authentication profile that was deleted.</p>
   */
  AuthenticationProfileName?: string;
}

export namespace DeleteAuthenticationProfileResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAuthenticationProfileResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteClusterMessage {
  /**
   * <p>The identifier of the cluster to be deleted.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain lowercase characters.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>Determines whether a final snapshot of the cluster is created before Amazon Redshift
   *             deletes the cluster. If <code>true</code>, a final cluster snapshot is not created. If
   *                 <code>false</code>, a final cluster snapshot is created before the cluster is
   *             deleted. </p>
   *         <note>
   *             <p>The <i>FinalClusterSnapshotIdentifier</i> parameter must be
   *                 specified if <i>SkipFinalClusterSnapshot</i> is
   *                 <code>false</code>.</p>
   *         </note>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  SkipFinalClusterSnapshot?: boolean;

  /**
   * <p>The identifier of the final snapshot that is to be created immediately before
   *             deleting the cluster. If this parameter is provided,
   *                 <i>SkipFinalClusterSnapshot</i> must be <code>false</code>. </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 alphanumeric characters.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  FinalClusterSnapshotIdentifier?: string;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely.</p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *         <p>The default value is -1.</p>
   */
  FinalClusterSnapshotRetentionPeriod?: number;
}

export namespace DeleteClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClusterMessage): any => ({
    ...obj,
  });
}

export interface DeleteClusterResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace DeleteClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteClusterParameterGroupMessage {
  /**
   * <p>The name of the parameter group to be deleted.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be the name of an existing cluster parameter group.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot delete a default cluster parameter group.</p>
   *             </li>
   *          </ul>
   */
  ParameterGroupName: string | undefined;
}

export namespace DeleteClusterParameterGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClusterParameterGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The cluster parameter group action can not be completed because another task is in
 *             progress that involves the parameter group. Wait a few moments and try the operation
 *             again.</p>
 */
export interface InvalidClusterParameterGroupStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidClusterParameterGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterParameterGroupStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidClusterParameterGroupStateFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteClusterSecurityGroupMessage {
  /**
   * <p>The name of the cluster security group to be deleted.</p>
   */
  ClusterSecurityGroupName: string | undefined;
}

export namespace DeleteClusterSecurityGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClusterSecurityGroupMessage): any => ({
    ...obj,
  });
}

export interface DeleteClusterSnapshotResult {
  /**
   * <p>Describes a snapshot.</p>
   */
  Snapshot?: Snapshot;
}

export namespace DeleteClusterSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClusterSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteClusterSubnetGroupMessage {
  /**
   * <p>The name of the cluster subnet group name to be deleted.</p>
   */
  ClusterSubnetGroupName: string | undefined;
}

export namespace DeleteClusterSubnetGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClusterSubnetGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The state of the subnet is invalid.</p>
 */
export interface InvalidClusterSubnetStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidClusterSubnetStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterSubnetStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidClusterSubnetStateFault): any => ({
    ...obj,
  });
}

export interface DeleteEndpointAccessMessage {
  /**
   * <p>The Redshift-managed VPC endpoint to delete.</p>
   */
  EndpointName: string | undefined;
}

export namespace DeleteEndpointAccessMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEndpointAccessMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The endpoint name doesn't refer to an existing endpoint.</p>
 */
export interface EndpointNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "EndpointNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace EndpointNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The status of the endpoint is not valid.</p>
 */
export interface InvalidEndpointStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidEndpointStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidEndpointStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidEndpointStateFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteEventSubscriptionMessage {
  /**
   * <p>The name of the Amazon Redshift event notification subscription to be deleted.</p>
   */
  SubscriptionName: string | undefined;
}

export namespace DeleteEventSubscriptionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventSubscriptionMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The subscription request is invalid because it is a duplicate request. This
 *             subscription request is already in progress.</p>
 */
export interface InvalidSubscriptionStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidSubscriptionStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidSubscriptionStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidSubscriptionStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon Redshift event notification subscription with the specified name does not
 *             exist.</p>
 */
export interface SubscriptionNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "SubscriptionNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SubscriptionNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubscriptionNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteHsmClientCertificateMessage {
  /**
   * <p>The identifier of the HSM client certificate to be deleted.</p>
   */
  HsmClientCertificateIdentifier: string | undefined;
}

export namespace DeleteHsmClientCertificateMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteHsmClientCertificateMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The specified HSM client certificate is not in the <code>available</code> state, or
 *             it is still in use by one or more Amazon Redshift clusters.</p>
 */
export interface InvalidHsmClientCertificateStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidHsmClientCertificateStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidHsmClientCertificateStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidHsmClientCertificateStateFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteHsmConfigurationMessage {
  /**
   * <p>The identifier of the Amazon Redshift HSM configuration to be deleted.</p>
   */
  HsmConfigurationIdentifier: string | undefined;
}

export namespace DeleteHsmConfigurationMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteHsmConfigurationMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The specified HSM configuration is not in the <code>available</code> state, or it
 *             is still in use by one or more Amazon Redshift clusters.</p>
 */
export interface InvalidHsmConfigurationStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidHsmConfigurationStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidHsmConfigurationStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidHsmConfigurationStateFault): any => ({
    ...obj,
  });
}

export interface DeleteScheduledActionMessage {
  /**
   * <p>The name of the scheduled action to delete. </p>
   */
  ScheduledActionName: string | undefined;
}

export namespace DeleteScheduledActionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteScheduledActionMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The scheduled action cannot be found. </p>
 */
export interface ScheduledActionNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ScheduledActionNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ScheduledActionNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledActionNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The result of the <code>DeleteSnapshotCopyGrant</code> action.</p>
 */
export interface DeleteSnapshotCopyGrantMessage {
  /**
   * <p>The name of the snapshot copy grant to delete.</p>
   */
  SnapshotCopyGrantName: string | undefined;
}

export namespace DeleteSnapshotCopyGrantMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSnapshotCopyGrantMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The snapshot copy grant can't be deleted because it is used by one or more
 *             clusters.</p>
 */
export interface InvalidSnapshotCopyGrantStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidSnapshotCopyGrantStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidSnapshotCopyGrantStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidSnapshotCopyGrantStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>The specified snapshot copy grant can't be found. Make sure that the name is typed
 *             correctly and that the grant exists in the destination region.</p>
 */
export interface SnapshotCopyGrantNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "SnapshotCopyGrantNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotCopyGrantNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotCopyGrantNotFoundFault): any => ({
    ...obj,
  });
}

export interface DeleteSnapshotScheduleMessage {
  /**
   * <p>A unique identifier of the snapshot schedule to delete.</p>
   */
  ScheduleIdentifier: string | undefined;
}

export namespace DeleteSnapshotScheduleMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSnapshotScheduleMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The cluster snapshot schedule state is not valid.</p>
 */
export interface InvalidClusterSnapshotScheduleStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidClusterSnapshotScheduleStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterSnapshotScheduleStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidClusterSnapshotScheduleStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output from the <code>DeleteTags</code> action. </p>
 */
export interface DeleteTagsMessage {
  /**
   * <p>The Amazon Resource Name (ARN) from which you want to remove the tag or tags. For
   *             example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>. </p>
   */
  ResourceName: string | undefined;

  /**
   * <p>The tag key that you want to delete.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace DeleteTagsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTagsMessage): any => ({
    ...obj,
  });
}

export interface DeleteUsageLimitMessage {
  /**
   * <p>The identifier of the usage limit to delete.</p>
   */
  UsageLimitId: string | undefined;
}

export namespace DeleteUsageLimitMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUsageLimitMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The usage limit identifier can't be found.</p>
 */
export interface UsageLimitNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "UsageLimitNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace UsageLimitNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsageLimitNotFoundFault): any => ({
    ...obj,
  });
}

export interface DescribeAccountAttributesMessage {
  /**
   * <p>A list of attribute names.</p>
   */
  AttributeNames?: string[];
}

export namespace DescribeAccountAttributesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountAttributesMessage): any => ({
    ...obj,
  });
}

export interface DescribeAuthenticationProfilesMessage {
  /**
   * <p>The name of the authentication profile to describe. If not specified then all authentication profiles owned by the account are listed.</p>
   */
  AuthenticationProfileName?: string;
}

export namespace DescribeAuthenticationProfilesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAuthenticationProfilesMessage): any => ({
    ...obj,
  });
}

export interface DescribeAuthenticationProfilesResult {
  /**
   * <p>The list of authentication profiles.</p>
   */
  AuthenticationProfiles?: AuthenticationProfile[];
}

export namespace DescribeAuthenticationProfilesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAuthenticationProfilesResult): any => ({
    ...obj,
  });
}

export interface DescribeClusterDbRevisionsMessage {
  /**
   * <p>A unique identifier for a cluster whose <code>ClusterDbRevisions</code> you are
   *             requesting. This parameter is case sensitive. All clusters defined for an account are
   *             returned by default.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified MaxRecords value, a value is returned
   *             in the <code>marker</code> field of the response. You can retrieve the next set of
   *             response records by providing the returned <code>marker</code> value in the
   *                 <code>marker</code> parameter and retrying the request. </p>
   *         <p>Default: 100</p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point for returning a set of
   *             response records. When the results of a <code>DescribeClusterDbRevisions</code> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Redshift returns a value
   *             in the <code>marker</code> field of the response. You can retrieve the next set of
   *             response records by providing the returned <code>marker</code> value in the
   *                 <code>marker</code> parameter and retrying the request. </p>
   *         <p>Constraints: You can specify either the <code>ClusterIdentifier</code> parameter, or
   *             the <code>marker</code> parameter, but not both.</p>
   */
  Marker?: string;
}

export namespace DescribeClusterDbRevisionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClusterDbRevisionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeClusterParameterGroupsMessage {
  /**
   * <p>The name of a specific parameter group for which to return details. By default,
   *             details about all parameter groups and the default parameter group are
   *             returned.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterParameterGroups</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching cluster parameter
   *             groups that are associated with the specified key or keys. For example, suppose that you
   *             have parameter groups that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the parameter groups that have either or both of these
   *             tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching cluster parameter
   *             groups that are associated with the specified tag value or values. For example, suppose
   *             that you have parameter groups that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the parameter groups that have either or both of these tag
   *             values associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeClusterParameterGroupsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClusterParameterGroupsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeClusterParametersMessage {
  /**
   * <p>The name of a cluster parameter group for which to return details.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>The parameter types to return. Specify <code>user</code> to show parameters that
   *             are different form the default. Similarly, specify <code>engine-default</code> to show
   *             parameters that are the same as the default parameter group. </p>
   *         <p>Default: All parameter types returned.</p>
   *         <p>Valid Values: <code>user</code> | <code>engine-default</code>
   *         </p>
   */
  Source?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterParameters</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;
}

export namespace DescribeClusterParametersMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClusterParametersMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeClustersMessage {
  /**
   * <p>The unique identifier of a cluster whose properties you are requesting. This
   *             parameter is case sensitive.</p>
   *         <p>The default is that all clusters defined for an account are returned.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusters</a> request exceed the
   *             value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *         <p>Constraints: You can specify either the <b>ClusterIdentifier</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   */
  Marker?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching clusters that are
   *             associated with the specified key or keys. For example, suppose that you have clusters
   *             that are tagged with keys called <code>owner</code> and <code>environment</code>. If you
   *             specify both of these tag keys in the request, Amazon Redshift returns a response with the
   *             clusters that have either or both of these tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching clusters that are
   *             associated with the specified tag value or values. For example, suppose that you have
   *             clusters that are tagged with values called <code>admin</code> and <code>test</code>. If
   *             you specify both of these tag values in the request, Amazon Redshift returns a response with
   *             the clusters that have either or both of these tag values associated with
   *             them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeClustersMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClustersMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeClusterSecurityGroupsMessage {
  /**
   * <p>The name of a cluster security group for which you are requesting details. You can
   *             specify either the <b>Marker</b> parameter or a <b>ClusterSecurityGroupName</b> parameter, but not both. </p>
   *         <p> Example: <code>securitygroup1</code>
   *         </p>
   */
  ClusterSecurityGroupName?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterSecurityGroups</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *         <p>Constraints: You can specify either the <b>ClusterSecurityGroupName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   */
  Marker?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching cluster security groups
   *             that are associated with the specified key or keys. For example, suppose that you have
   *             security groups that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the security groups that have either or both of these
   *             tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching cluster security
   *             groups that are associated with the specified tag value or values. For example, suppose
   *             that you have security groups that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the security groups that have either or both of these tag values
   *             associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeClusterSecurityGroupsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClusterSecurityGroupsMessage): any => ({
    ...obj,
  });
}

export enum SnapshotAttributeToSortBy {
  CREATE_TIME = "CREATE_TIME",
  SOURCE_TYPE = "SOURCE_TYPE",
  TOTAL_SIZE = "TOTAL_SIZE",
}

export enum SortByOrder {
  ASCENDING = "ASC",
  DESCENDING = "DESC",
}

/**
 * <p>Describes a sorting entity</p>
 */
export interface SnapshotSortingEntity {
  /**
   * <p>The category for sorting the snapshots.</p>
   */
  Attribute: SnapshotAttributeToSortBy | string | undefined;

  /**
   * <p>The order for listing the attributes.</p>
   */
  SortOrder?: SortByOrder | string;
}

export namespace SnapshotSortingEntity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotSortingEntity): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeClusterSnapshotsMessage {
  /**
   * <p>The identifier of the cluster which generated the requested snapshots.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The snapshot identifier of the snapshot about which to return
   *             information.</p>
   */
  SnapshotIdentifier?: string;

  /**
   * <p>The type of snapshots for which you are requesting information. By default,
   *             snapshots of all types are returned.</p>
   *         <p>Valid Values: <code>automated</code> | <code>manual</code>
   *         </p>
   */
  SnapshotType?: string;

  /**
   * <p>A value that requests only snapshots created at or after the specified time. The
   *             time value is specified in ISO 8601 format. For more information about ISO 8601, go to
   *             the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *         </p>
   *         <p>Example: <code>2012-07-16T18:00:00Z</code>
   *         </p>
   */
  StartTime?: Date;

  /**
   * <p>A time value that requests only snapshots created at or before the specified time.
   *             The time value is specified in ISO 8601 format. For more information about ISO 8601, go
   *             to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia
   *                 page.</a>
   *         </p>
   *         <p>Example: <code>2012-07-16T18:00:00Z</code>
   *         </p>
   */
  EndTime?: Date;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterSnapshots</a> request exceed
   *             the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The Amazon Web Services account used to create or copy the snapshot. Use this field to
   *             filter the results to snapshots owned by a particular account. To describe snapshots you
   *             own, either specify your Amazon Web Services account, or do not specify the
   *             parameter.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching cluster snapshots that
   *             are associated with the specified key or keys. For example, suppose that you have
   *             snapshots that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the snapshots that have either or both of these tag
   *             keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching cluster snapshots
   *             that are associated with the specified tag value or values. For example, suppose that
   *             you have snapshots that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the snapshots that have either or both of these tag values
   *             associated with them.</p>
   */
  TagValues?: string[];

  /**
   * <p>A value that indicates whether to return snapshots only for an existing cluster.
   *             You can perform table-level restore only by using a snapshot of an existing cluster,
   *             that is, a cluster that has not been deleted. Values for this parameter work as follows: </p>
   *         <ul>
   *             <li>
   *                 <p>If <code>ClusterExists</code> is set to <code>true</code>,
   *                         <code>ClusterIdentifier</code> is required.</p>
   *             </li>
   *             <li>
   *                 <p>If <code>ClusterExists</code> is set to <code>false</code> and
   *                         <code>ClusterIdentifier</code> isn't specified, all snapshots
   *                     associated with deleted clusters (orphaned snapshots) are returned. </p>
   *             </li>
   *             <li>
   *                 <p>If <code>ClusterExists</code> is set to <code>false</code> and
   *                         <code>ClusterIdentifier</code> is specified for a deleted cluster, snapshots
   *                     associated with that cluster are returned.</p>
   *             </li>
   *             <li>
   *                 <p>If <code>ClusterExists</code> is set to <code>false</code> and
   *                         <code>ClusterIdentifier</code> is specified for an existing cluster, no
   *                     snapshots are returned. </p>
   *             </li>
   *          </ul>
   */
  ClusterExists?: boolean;

  /**
   * <p></p>
   */
  SortingEntities?: SnapshotSortingEntity[];
}

export namespace DescribeClusterSnapshotsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClusterSnapshotsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output from the <a>DescribeClusterSnapshots</a> action.
 *         </p>
 */
export interface SnapshotMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of <a>Snapshot</a> instances. </p>
   */
  Snapshots?: Snapshot[];
}

export namespace SnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeClusterSubnetGroupsMessage {
  /**
   * <p>The name of the cluster subnet group for which information is requested.</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterSubnetGroups</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching cluster subnet groups
   *             that are associated with the specified key or keys. For example, suppose that you have
   *             subnet groups that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the subnet groups that have either or both of these
   *             tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching cluster subnet
   *             groups that are associated with the specified tag value or values. For example, suppose
   *             that you have subnet groups that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the subnet groups that have either or both of these tag values
   *             associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeClusterSubnetGroupsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClusterSubnetGroupsMessage): any => ({
    ...obj,
  });
}

export interface DescribeClusterTracksMessage {
  /**
   * <p>The name of the maintenance track. </p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>An integer value for the maximum number of maintenance tracks to return.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <code>DescribeClusterTracks</code> request exceed the
   *             value specified in <code>MaxRecords</code>, Amazon Redshift returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;
}

export namespace DescribeClusterTracksMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClusterTracksMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the operations that are allowed on a maintenance track.</p>
 */
export interface SupportedOperation {
  /**
   * <p>A list of the supported operations.</p>
   */
  OperationName?: string;
}

export namespace SupportedOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SupportedOperation): any => ({
    ...obj,
  });
}

/**
 * <p>A maintenance track that you can switch the current track to.</p>
 */
export interface UpdateTarget {
  /**
   * <p>The name of the new maintenance track.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The cluster version for the new maintenance track.</p>
   */
  DatabaseVersion?: string;

  /**
   * <p>A list of operations supported by the maintenance track.</p>
   */
  SupportedOperations?: SupportedOperation[];
}

export namespace UpdateTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a maintenance track that determines which Amazon Redshift version to apply
 *             during a maintenance window. If the value for <code>MaintenanceTrack</code> is
 *                 <code>current</code>, the cluster is updated to the most recently certified
 *             maintenance release. If the value is <code>trailing</code>, the cluster is updated to
 *             the previously certified maintenance release. </p>
 */
export interface MaintenanceTrack {
  /**
   * <p>The name of the maintenance track. Possible values are <code>current</code> and
   *                 <code>trailing</code>.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The version number for the cluster release.</p>
   */
  DatabaseVersion?: string;

  /**
   * <p>An array of <a>UpdateTarget</a> objects to update with the maintenance
   *             track. </p>
   */
  UpdateTargets?: UpdateTarget[];
}

export namespace MaintenanceTrack {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaintenanceTrack): any => ({
    ...obj,
  });
}

export interface TrackListMessage {
  /**
   * <p>A list of maintenance tracks output by the <code>DescribeClusterTracks</code>
   *             operation. </p>
   */
  MaintenanceTracks?: MaintenanceTrack[];

  /**
   * <p>The starting point to return a set of response tracklist records. You can retrieve the
   *             next set of response records by providing the returned marker value in the
   *                 <code>Marker</code> parameter and retrying the request.</p>
   */
  Marker?: string;
}

export namespace TrackListMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrackListMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeClusterVersionsMessage {
  /**
   * <p>The specific cluster version to return.</p>
   *         <p>Example: <code>1.0</code>
   *         </p>
   */
  ClusterVersion?: string;

  /**
   * <p>The name of a specific cluster parameter group family to return details
   *             for.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 alphanumeric characters</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  ClusterParameterGroupFamily?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterVersions</a> request exceed
   *             the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;
}

export namespace DescribeClusterVersionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClusterVersionsMessage): any => ({
    ...obj,
  });
}

export interface DescribeDataSharesMessage {
  /**
   * <p>The identifier of the datashare to describe details of.</p>
   */
  DataShareArn?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeDataShares</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. </p>
   */
  Marker?: string;
}

export namespace DescribeDataSharesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataSharesMessage): any => ({
    ...obj,
  });
}

export interface DescribeDataSharesResult {
  /**
   * <p>The results returned from describing datashares.</p>
   */
  DataShares?: DataShare[];

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeDataShares</a> request exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. </p>
   */
  Marker?: string;
}

export namespace DescribeDataSharesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataSharesResult): any => ({
    ...obj,
  });
}

export interface DescribeDataSharesForConsumerMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the consumer that returns in the list of datashares.</p>
   */
  ConsumerArn?: string;

  /**
   * <p>An identifier giving the status of a datashare in the consumer cluster. If this field is specified, Amazon
   *             Redshift returns the list of datashares that have the specified status.</p>
   */
  Status?: DataShareStatusForConsumer | string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeDataSharesForConsumer</a> request
   *             exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;
}

export namespace DescribeDataSharesForConsumerMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataSharesForConsumerMessage): any => ({
    ...obj,
  });
}

export interface DescribeDataSharesForConsumerResult {
  /**
   * <p>Shows the results of datashares available for consumers.</p>
   */
  DataShares?: DataShare[];

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeDataSharesForConsumer</a> request
   *             exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;
}

export namespace DescribeDataSharesForConsumerResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataSharesForConsumerResult): any => ({
    ...obj,
  });
}

export interface DescribeDataSharesForProducerMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the producer that returns in the list of datashares.</p>
   */
  ProducerArn?: string;

  /**
   * <p>An identifier giving the status of a datashare in the producer. If this field is specified, Amazon
   *             Redshift returns the list of datashares that have the specified status.</p>
   */
  Status?: DataShareStatusForProducer | string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeDataSharesForProducer</a> request
   *             exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;
}

export namespace DescribeDataSharesForProducerMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataSharesForProducerMessage): any => ({
    ...obj,
  });
}

export interface DescribeDataSharesForProducerResult {
  /**
   * <p>Shows the results of datashares available for producers.</p>
   */
  DataShares?: DataShare[];

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeDataSharesForProducer</a> request
   *             exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;
}

export namespace DescribeDataSharesForProducerResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataSharesForProducerResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDefaultClusterParametersMessage {
  /**
   * <p>The name of the cluster parameter group family.</p>
   */
  ParameterGroupFamily: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeDefaultClusterParameters</a>
   *             request exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in
   *             the <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;
}

export namespace DescribeDefaultClusterParametersMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDefaultClusterParametersMessage): any => ({
    ...obj,
  });
}

export interface DescribeDefaultClusterParametersResult {
  /**
   * <p>Describes the default cluster parameters for a parameter group family.</p>
   */
  DefaultClusterParameters?: DefaultClusterParameters;
}

export namespace DescribeDefaultClusterParametersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDefaultClusterParametersResult): any => ({
    ...obj,
  });
}

export interface DescribeEndpointAccessMessage {
  /**
   * <p>The cluster identifier associated with the described endpoint.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The Amazon Web Services account ID of the owner of the cluster.</p>
   */
  ResourceOwner?: string;

  /**
   * <p>The name of the endpoint to be described.</p>
   */
  EndpointName?: string;

  /**
   * <p>The virtual private cloud (VPC) identifier with access to the cluster.</p>
   */
  VpcId?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *             than the specified <code>MaxRecords</code> value, a pagination token called a <code>Marker</code> is
   *             included in the response so that the remaining results can be retrieved.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeEndpointAccess</code> request. If this parameter is specified, the
   *             response includes only records beyond the marker, up to the value specified by the
   *             <code>MaxRecords</code> parameter.</p>
   */
  Marker?: string;
}

export namespace DescribeEndpointAccessMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEndpointAccessMessage): any => ({
    ...obj,
  });
}

export interface EndpointAccessList {
  /**
   * <p>The list of endpoints with access to the cluster.</p>
   */
  EndpointAccessList?: EndpointAccess[];

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeEndpointAccess</code> request. If this parameter is specified, the
   *             response includes only records beyond the marker, up to the value specified by the
   *             <code>MaxRecords</code> parameter.</p>
   */
  Marker?: string;
}

export namespace EndpointAccessList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointAccessList): any => ({
    ...obj,
  });
}

export interface DescribeEndpointAuthorizationMessage {
  /**
   * <p>The cluster identifier of the cluster to access.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The AAmazon Web Services account ID of either the cluster owner (grantor) or grantee.
   *        If <code>Grantee</code> parameter is true, then the <code>Account</code> value is of the grantor.</p>
   */
  Account?: string;

  /**
   * <p>Indicates whether to check authorization from a grantor or grantee point of view.
   *            If true, Amazon Redshift returns endpoint authorizations that you've been granted.
   *            If false (default), checks authorization from a grantor point of view.</p>
   */
  Grantee?: boolean;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *             than the specified <code>MaxRecords</code> value, a pagination token called a <code>Marker</code> is
   *             included in the response so that the remaining results can be retrieved.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeEndpointAuthorization</code> request. If this parameter is specified, the
   *             response includes only records beyond the marker, up to the value specified by the
   *             <code>MaxRecords</code> parameter.</p>
   */
  Marker?: string;
}

export namespace DescribeEndpointAuthorizationMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEndpointAuthorizationMessage): any => ({
    ...obj,
  });
}

export interface EndpointAuthorizationList {
  /**
   * <p>The authorizations to an endpoint.</p>
   */
  EndpointAuthorizationList?: EndpointAuthorization[];

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeEndpointAuthorization</code> request. If this parameter is specified, the
   *             response includes only records beyond the marker, up to the value specified by the
   *             <code>MaxRecords</code> parameter.</p>
   */
  Marker?: string;
}

export namespace EndpointAuthorizationList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointAuthorizationList): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEventCategoriesMessage {
  /**
   * <p>The source type, such as cluster or parameter group, to which the described event
   *             categories apply.</p>
   *         <p>Valid values: cluster, cluster-snapshot, cluster-parameter-group, cluster-security-group, and scheduled-action.</p>
   */
  SourceType?: string;
}

export namespace DescribeEventCategoriesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventCategoriesMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes event information.</p>
 */
export interface EventInfoMap {
  /**
   * <p>The identifier of an Amazon Redshift event.</p>
   */
  EventId?: string;

  /**
   * <p>The category of an Amazon Redshift event.</p>
   */
  EventCategories?: string[];

  /**
   * <p>The description of an Amazon Redshift event.</p>
   */
  EventDescription?: string;

  /**
   * <p>The severity of the event.</p>
   *         <p>Values: ERROR, INFO</p>
   */
  Severity?: string;
}

export namespace EventInfoMap {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventInfoMap): any => ({
    ...obj,
  });
}

/**
 * <p>Describes event categories.</p>
 */
export interface EventCategoriesMap {
  /**
   * <p>The source type, such as cluster or cluster-snapshot, that the returned categories
   *             belong to.</p>
   */
  SourceType?: string;

  /**
   * <p>The events in the event category.</p>
   */
  Events?: EventInfoMap[];
}

export namespace EventCategoriesMap {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventCategoriesMap): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface EventCategoriesMessage {
  /**
   * <p>A list of event categories descriptions.</p>
   */
  EventCategoriesMapList?: EventCategoriesMap[];
}

export namespace EventCategoriesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventCategoriesMessage): any => ({
    ...obj,
  });
}

export type SourceType =
  | "cluster"
  | "cluster-parameter-group"
  | "cluster-security-group"
  | "cluster-snapshot"
  | "scheduled-action";

/**
 * <p></p>
 */
export interface DescribeEventsMessage {
  /**
   * <p>The identifier of the event source for which events will be returned. If this
   *             parameter is not specified, then all sources are included in the response.</p>
   *         <p>Constraints:</p>
   *         <p>If <i>SourceIdentifier</i> is supplied,
   *                 <i>SourceType</i> must also be provided.</p>
   *         <ul>
   *             <li>
   *                 <p>Specify a cluster identifier when <i>SourceType</i> is
   *                         <code>cluster</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Specify a cluster security group name when <i>SourceType</i>
   *                     is <code>cluster-security-group</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Specify a cluster parameter group name when <i>SourceType</i>
   *                     is <code>cluster-parameter-group</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Specify a cluster snapshot identifier when <i>SourceType</i>
   *                     is <code>cluster-snapshot</code>.</p>
   *             </li>
   *          </ul>
   */
  SourceIdentifier?: string;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are
   *             returned.</p>
   *         <p>Constraints:</p>
   *         <p>If <i>SourceType</i> is supplied,
   *                 <i>SourceIdentifier</i> must also be provided.</p>
   *         <ul>
   *             <li>
   *                 <p>Specify <code>cluster</code> when <i>SourceIdentifier</i> is
   *                     a cluster identifier.</p>
   *             </li>
   *             <li>
   *                 <p>Specify <code>cluster-security-group</code> when
   *                         <i>SourceIdentifier</i> is a cluster security group
   *                     name.</p>
   *             </li>
   *             <li>
   *                 <p>Specify <code>cluster-parameter-group</code> when
   *                         <i>SourceIdentifier</i> is a cluster parameter group
   *                     name.</p>
   *             </li>
   *             <li>
   *                 <p>Specify <code>cluster-snapshot</code> when
   *                         <i>SourceIdentifier</i> is a cluster snapshot
   *                     identifier.</p>
   *             </li>
   *          </ul>
   */
  SourceType?: SourceType | string;

  /**
   * <p>The beginning of the time interval to retrieve events for, specified in ISO 8601
   *             format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *         </p>
   *         <p>Example: <code>2009-07-08T18:00Z</code>
   *         </p>
   */
  StartTime?: Date;

  /**
   * <p>The end of the time interval for which to retrieve events, specified in ISO 8601
   *             format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *         </p>
   *         <p>Example: <code>2009-07-08T18:00Z</code>
   *         </p>
   */
  EndTime?: Date;

  /**
   * <p>The number of minutes prior to the time of the request for which to retrieve
   *             events. For example, if the request is sent at 18:00 and you specify a duration of 60,
   *             then only events which have occurred after 17:00 will be returned.</p>
   *         <p>Default: <code>60</code>
   *         </p>
   */
  Duration?: number;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeEvents</a> request exceed the value
   *             specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the <code>Marker</code>
   *             field of the response. You can retrieve the next set of response records by providing
   *             the returned marker value in the <code>Marker</code> parameter and retrying the request.
   *         </p>
   */
  Marker?: string;
}

export namespace DescribeEventsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an event.</p>
 */
export interface Event {
  /**
   * <p>The identifier for the source of the event.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>The source type for this event.</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p>The text of this event.</p>
   */
  Message?: string;

  /**
   * <p>A list of the event categories.</p>
   *         <p>Values: Configuration, Management, Monitoring, Security, Pending</p>
   */
  EventCategories?: string[];

  /**
   * <p>The severity of the event.</p>
   *         <p>Values: ERROR, INFO</p>
   */
  Severity?: string;

  /**
   * <p>The date and time of the event.</p>
   */
  Date?: Date;

  /**
   * <p>The identifier of the event.</p>
   */
  EventId?: string;
}

export namespace Event {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface EventsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of <code>Event</code> instances. </p>
   */
  Events?: Event[];
}

export namespace EventsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * <p>The name of the Amazon Redshift event notification subscription to be
   *             described.</p>
   */
  SubscriptionName?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a DescribeEventSubscriptions request exceed the value
   *             specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the <code>Marker</code>
   *             field of the response. You can retrieve the next set of response records by providing
   *             the returned marker value in the <code>Marker</code> parameter and retrying the request.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching event notification
   *             subscriptions that are associated with the specified key or keys. For example, suppose
   *             that you have subscriptions that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the subscriptions that have either or both of these
   *             tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching event notification
   *             subscriptions that are associated with the specified tag value or values. For example,
   *             suppose that you have subscriptions that are tagged with values called
   *                 <code>admin</code> and <code>test</code>. If you specify both of these tag values in
   *             the request, Amazon Redshift returns a response with the subscriptions that have either or
   *             both of these tag values associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeEventSubscriptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventSubscriptionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface EventSubscriptionsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of event subscriptions.</p>
   */
  EventSubscriptionsList?: EventSubscription[];
}

export namespace EventSubscriptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventSubscriptionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeHsmClientCertificatesMessage {
  /**
   * <p>The identifier of a specific HSM client certificate for which you want information.
   *             If no identifier is specified, information is returned for all HSM client certificates
   *             owned by your Amazon Web Services account.</p>
   */
  HsmClientCertificateIdentifier?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeHsmClientCertificates</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching HSM client certificates
   *             that are associated with the specified key or keys. For example, suppose that you have
   *             HSM client certificates that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the HSM client certificates that have either or both
   *             of these tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching HSM client
   *             certificates that are associated with the specified tag value or values. For example,
   *             suppose that you have HSM client certificates that are tagged with values called
   *                 <code>admin</code> and <code>test</code>. If you specify both of these tag values in
   *             the request, Amazon Redshift returns a response with the HSM client certificates that have
   *             either or both of these tag values associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeHsmClientCertificatesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHsmClientCertificatesMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface HsmClientCertificateMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of the identifiers for one or more HSM client certificates used by Amazon Redshift
   *             clusters to store and retrieve database encryption keys in an HSM.</p>
   */
  HsmClientCertificates?: HsmClientCertificate[];
}

export namespace HsmClientCertificateMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HsmClientCertificateMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeHsmConfigurationsMessage {
  /**
   * <p>The identifier of a specific Amazon Redshift HSM configuration to be described. If no
   *             identifier is specified, information is returned for all HSM configurations owned by
   *             your Amazon Web Services account.</p>
   */
  HsmConfigurationIdentifier?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeHsmConfigurations</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching HSM configurations that
   *             are associated with the specified key or keys. For example, suppose that you have HSM
   *             configurations that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the HSM configurations that have either or both of
   *             these tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching HSM configurations
   *             that are associated with the specified tag value or values. For example, suppose that
   *             you have HSM configurations that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the HSM configurations that have either or both of these tag
   *             values associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeHsmConfigurationsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHsmConfigurationsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface HsmConfigurationMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of <code>HsmConfiguration</code> objects.</p>
   */
  HsmConfigurations?: HsmConfiguration[];
}

export namespace HsmConfigurationMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HsmConfigurationMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeLoggingStatusMessage {
  /**
   * <p>The identifier of the cluster from which to get the logging status.</p>
   *         <p>Example: <code>examplecluster</code>
   *         </p>
   */
  ClusterIdentifier: string | undefined;
}

export namespace DescribeLoggingStatusMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLoggingStatusMessage): any => ({
    ...obj,
  });
}
