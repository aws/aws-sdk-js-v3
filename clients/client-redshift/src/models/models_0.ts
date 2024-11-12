// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { RedshiftServiceException as __BaseException } from "./RedshiftServiceException";

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
 * @public
 * @enum
 */
export const ReservedNodeOfferingType = {
  Regular: "Regular",
  Upgradable: "Upgradable",
} as const;

/**
 * @public
 */
export type ReservedNodeOfferingType = (typeof ReservedNodeOfferingType)[keyof typeof ReservedNodeOfferingType];

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
 * <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 * @public
 */
export class DependentServiceUnavailableFault extends __BaseException {
  readonly name: "DependentServiceUnavailableFault" = "DependentServiceUnavailableFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependentServiceUnavailableFault, __BaseException>) {
    super({
      name: "DependentServiceUnavailableFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependentServiceUnavailableFault.prototype);
  }
}

/**
 * <p>Indicates that the Reserved Node being exchanged is not in an active state.</p>
 * @public
 */
export class InvalidReservedNodeStateFault extends __BaseException {
  readonly name: "InvalidReservedNodeStateFault" = "InvalidReservedNodeStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidReservedNodeStateFault, __BaseException>) {
    super({
      name: "InvalidReservedNodeStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidReservedNodeStateFault.prototype);
  }
}

/**
 * <p>User already has a reservation with the given identifier.</p>
 * @public
 */
export class ReservedNodeAlreadyExistsFault extends __BaseException {
  readonly name: "ReservedNodeAlreadyExistsFault" = "ReservedNodeAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodeAlreadyExistsFault, __BaseException>) {
    super({
      name: "ReservedNodeAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodeAlreadyExistsFault.prototype);
  }
}

/**
 * <p>Indicates that the reserved node has already been exchanged.</p>
 * @public
 */
export class ReservedNodeAlreadyMigratedFault extends __BaseException {
  readonly name: "ReservedNodeAlreadyMigratedFault" = "ReservedNodeAlreadyMigratedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodeAlreadyMigratedFault, __BaseException>) {
    super({
      name: "ReservedNodeAlreadyMigratedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodeAlreadyMigratedFault.prototype);
  }
}

/**
 * <p>The specified reserved compute node not found.</p>
 * @public
 */
export class ReservedNodeNotFoundFault extends __BaseException {
  readonly name: "ReservedNodeNotFoundFault" = "ReservedNodeNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodeNotFoundFault, __BaseException>) {
    super({
      name: "ReservedNodeNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodeNotFoundFault.prototype);
  }
}

/**
 * <p>Specified offering does not exist.</p>
 * @public
 */
export class ReservedNodeOfferingNotFoundFault extends __BaseException {
  readonly name: "ReservedNodeOfferingNotFoundFault" = "ReservedNodeOfferingNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodeOfferingNotFoundFault, __BaseException>) {
    super({
      name: "ReservedNodeOfferingNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodeOfferingNotFoundFault.prototype);
  }
}

/**
 * <p>The requested operation isn't supported.</p>
 * @public
 */
export class UnsupportedOperationFault extends __BaseException {
  readonly name: "UnsupportedOperationFault" = "UnsupportedOperationFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationFault, __BaseException>) {
    super({
      name: "UnsupportedOperationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationFault.prototype);
  }
}

/**
 * <p>You are not authorized to access the cluster.</p>
 * @public
 */
export class AccessToClusterDeniedFault extends __BaseException {
  readonly name: "AccessToClusterDeniedFault" = "AccessToClusterDeniedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessToClusterDeniedFault, __BaseException>) {
    super({
      name: "AccessToClusterDeniedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessToClusterDeniedFault.prototype);
  }
}

/**
 * <p>The owner of the specified snapshot has not authorized your account to access the
 *             snapshot.</p>
 * @public
 */
export class AccessToSnapshotDeniedFault extends __BaseException {
  readonly name: "AccessToSnapshotDeniedFault" = "AccessToSnapshotDeniedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessToSnapshotDeniedFault, __BaseException>) {
    super({
      name: "AccessToSnapshotDeniedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessToSnapshotDeniedFault.prototype);
  }
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
 * @enum
 */
export const ActionType = {
  RECOMMEND_NODE_CONFIG: "recommend-node-config",
  RESIZE_CLUSTER: "resize-cluster",
  RESTORE_CLUSTER: "restore-cluster",
} as const;

/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 * @public
 */
export class ClusterNotFoundFault extends __BaseException {
  readonly name: "ClusterNotFoundFault" = "ClusterNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterNotFoundFault, __BaseException>) {
    super({
      name: "ClusterNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterNotFoundFault.prototype);
  }
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
 * <p>The name of the partner was not found.</p>
 * @public
 */
export class PartnerNotFoundFault extends __BaseException {
  readonly name: "PartnerNotFoundFault" = "PartnerNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PartnerNotFoundFault, __BaseException>) {
    super({
      name: "PartnerNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PartnerNotFoundFault.prototype);
  }
}

/**
 * <p>The partner integration is not authorized.</p>
 * @public
 */
export class UnauthorizedPartnerIntegrationFault extends __BaseException {
  readonly name: "UnauthorizedPartnerIntegrationFault" = "UnauthorizedPartnerIntegrationFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedPartnerIntegrationFault, __BaseException>) {
    super({
      name: "UnauthorizedPartnerIntegrationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedPartnerIntegrationFault.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const AquaConfigurationStatus = {
  AUTO: "auto",
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;

/**
 * @public
 */
export type AquaConfigurationStatus = (typeof AquaConfigurationStatus)[keyof typeof AquaConfigurationStatus];

/**
 * @public
 * @enum
 */
export const AquaStatus = {
  APPLYING: "applying",
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;

/**
 * @public
 */
export type AquaStatus = (typeof AquaStatus)[keyof typeof AquaStatus];

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
 * @public
 * @enum
 */
export const DataShareStatus = {
  ACTIVE: "ACTIVE",
  AUTHORIZED: "AUTHORIZED",
  AVAILABLE: "AVAILABLE",
  DEAUTHORIZED: "DEAUTHORIZED",
  PENDING_AUTHORIZATION: "PENDING_AUTHORIZATION",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type DataShareStatus = (typeof DataShareStatus)[keyof typeof DataShareStatus];

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
}

/**
 * <p>There is an error with the datashare.</p>
 * @public
 */
export class InvalidDataShareFault extends __BaseException {
  readonly name: "InvalidDataShareFault" = "InvalidDataShareFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDataShareFault, __BaseException>) {
    super({
      name: "InvalidDataShareFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDataShareFault.prototype);
  }
}

/**
 * <p>The namespace isn't valid because the namespace doesn't exist. Provide a valid namespace.</p>
 * @public
 */
export class InvalidNamespaceFault extends __BaseException {
  readonly name: "InvalidNamespaceFault" = "InvalidNamespaceFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNamespaceFault, __BaseException>) {
    super({
      name: "InvalidNamespaceFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNamespaceFault.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ScheduleState = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  MODIFYING: "MODIFYING",
} as const;

/**
 * @public
 */
export type ScheduleState = (typeof ScheduleState)[keyof typeof ScheduleState];

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
 * <p>The authentication profile already exists.</p>
 * @public
 */
export class AuthenticationProfileAlreadyExistsFault extends __BaseException {
  readonly name: "AuthenticationProfileAlreadyExistsFault" = "AuthenticationProfileAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthenticationProfileAlreadyExistsFault, __BaseException>) {
    super({
      name: "AuthenticationProfileAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthenticationProfileAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The authentication profile can't be found.</p>
 * @public
 */
export class AuthenticationProfileNotFoundFault extends __BaseException {
  readonly name: "AuthenticationProfileNotFoundFault" = "AuthenticationProfileNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthenticationProfileNotFoundFault, __BaseException>) {
    super({
      name: "AuthenticationProfileNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthenticationProfileNotFoundFault.prototype);
  }
}

/**
 * <p>The size or number of authentication profiles has exceeded the quota.
 *             The maximum length of the JSON string and maximum number of authentication profiles is determined by a quota for your account.</p>
 * @public
 */
export class AuthenticationProfileQuotaExceededFault extends __BaseException {
  readonly name: "AuthenticationProfileQuotaExceededFault" = "AuthenticationProfileQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthenticationProfileQuotaExceededFault, __BaseException>) {
    super({
      name: "AuthenticationProfileQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthenticationProfileQuotaExceededFault.prototype);
  }
}

/**
 * <p>The specified CIDR block or EC2 security group is already authorized for the
 *             specified cluster security group.</p>
 * @public
 */
export class AuthorizationAlreadyExistsFault extends __BaseException {
  readonly name: "AuthorizationAlreadyExistsFault" = "AuthorizationAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationAlreadyExistsFault, __BaseException>) {
    super({
      name: "AuthorizationAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The specified CIDR IP range or EC2 security group is not authorized for the
 *             specified cluster security group.</p>
 * @public
 */
export class AuthorizationNotFoundFault extends __BaseException {
  readonly name: "AuthorizationNotFoundFault" = "AuthorizationNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationNotFoundFault, __BaseException>) {
    super({
      name: "AuthorizationNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationNotFoundFault.prototype);
  }
}

/**
 * <p>The authorization quota for the cluster security group has been reached.</p>
 * @public
 */
export class AuthorizationQuotaExceededFault extends __BaseException {
  readonly name: "AuthorizationQuotaExceededFault" = "AuthorizationQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationQuotaExceededFault, __BaseException>) {
    super({
      name: "AuthorizationQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationQuotaExceededFault.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const AuthorizationStatus = {
  AUTHORIZED: "Authorized",
  REVOKING: "Revoking",
} as const;

/**
 * @public
 */
export type AuthorizationStatus = (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];

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
 * <p>The cluster security group name does not refer to an existing cluster security
 *             group.</p>
 * @public
 */
export class ClusterSecurityGroupNotFoundFault extends __BaseException {
  readonly name: "ClusterSecurityGroupNotFoundFault" = "ClusterSecurityGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSecurityGroupNotFoundFault, __BaseException>) {
    super({
      name: "ClusterSecurityGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSecurityGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The state of the cluster security group is not <code>available</code>. </p>
 * @public
 */
export class InvalidClusterSecurityGroupStateFault extends __BaseException {
  readonly name: "InvalidClusterSecurityGroupStateFault" = "InvalidClusterSecurityGroupStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterSecurityGroupStateFault, __BaseException>) {
    super({
      name: "InvalidClusterSecurityGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterSecurityGroupStateFault.prototype);
  }
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
 * <p>The authorization already exists for this endpoint.</p>
 * @public
 */
export class EndpointAuthorizationAlreadyExistsFault extends __BaseException {
  readonly name: "EndpointAuthorizationAlreadyExistsFault" = "EndpointAuthorizationAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointAuthorizationAlreadyExistsFault, __BaseException>) {
    super({
      name: "EndpointAuthorizationAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointAuthorizationAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The number of endpoint authorizations per cluster has exceeded its limit.</p>
 * @public
 */
export class EndpointAuthorizationsPerClusterLimitExceededFault extends __BaseException {
  readonly name: "EndpointAuthorizationsPerClusterLimitExceededFault" =
    "EndpointAuthorizationsPerClusterLimitExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointAuthorizationsPerClusterLimitExceededFault, __BaseException>) {
    super({
      name: "EndpointAuthorizationsPerClusterLimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointAuthorizationsPerClusterLimitExceededFault.prototype);
  }
}

/**
 * <p>The status of the authorization is not valid.</p>
 * @public
 */
export class InvalidAuthorizationStateFault extends __BaseException {
  readonly name: "InvalidAuthorizationStateFault" = "InvalidAuthorizationStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAuthorizationStateFault, __BaseException>) {
    super({
      name: "InvalidAuthorizationStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAuthorizationStateFault.prototype);
  }
}

/**
 * <p>The specified cluster is not in the <code>available</code> state. </p>
 * @public
 */
export class InvalidClusterStateFault extends __BaseException {
  readonly name: "InvalidClusterStateFault" = "InvalidClusterStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterStateFault, __BaseException>) {
    super({
      name: "InvalidClusterStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterStateFault.prototype);
  }
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
 * <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
 * @public
 */
export class ClusterSnapshotNotFoundFault extends __BaseException {
  readonly name: "ClusterSnapshotNotFoundFault" = "ClusterSnapshotNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSnapshotNotFoundFault, __BaseException>) {
    super({
      name: "ClusterSnapshotNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSnapshotNotFoundFault.prototype);
  }
}

/**
 * <p>The request cannot be completed because a dependent service is throttling requests
 *             made by Amazon Redshift on your behalf. Wait and retry the request.</p>
 * @public
 */
export class DependentServiceRequestThrottlingFault extends __BaseException {
  readonly name: "DependentServiceRequestThrottlingFault" = "DependentServiceRequestThrottlingFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependentServiceRequestThrottlingFault, __BaseException>) {
    super({
      name: "DependentServiceRequestThrottlingFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependentServiceRequestThrottlingFault.prototype);
  }
}

/**
 * <p>The specified cluster snapshot is not in the <code>available</code> state, or other
 *             accounts are authorized to access the snapshot. </p>
 * @public
 */
export class InvalidClusterSnapshotStateFault extends __BaseException {
  readonly name: "InvalidClusterSnapshotStateFault" = "InvalidClusterSnapshotStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterSnapshotStateFault, __BaseException>) {
    super({
      name: "InvalidClusterSnapshotStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterSnapshotStateFault.prototype);
  }
}

/**
 * <p>The encryption key has exceeded its grant limit in Amazon Web Services KMS.</p>
 * @public
 */
export class LimitExceededFault extends __BaseException {
  readonly name: "LimitExceededFault" = "LimitExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededFault, __BaseException>) {
    super({
      name: "LimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededFault.prototype);
  }
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
 * <p>The maximum number for a batch delete of snapshots has been reached. The limit is
 *             100. </p>
 * @public
 */
export class BatchDeleteRequestSizeExceededFault extends __BaseException {
  readonly name: "BatchDeleteRequestSizeExceededFault" = "BatchDeleteRequestSizeExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchDeleteRequestSizeExceededFault, __BaseException>) {
    super({
      name: "BatchDeleteRequestSizeExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchDeleteRequestSizeExceededFault.prototype);
  }
}

/**
 * <p>The maximum number for snapshot identifiers has been reached. The limit is 100.
 *         </p>
 * @public
 */
export class BatchModifyClusterSnapshotsLimitExceededFault extends __BaseException {
  readonly name: "BatchModifyClusterSnapshotsLimitExceededFault" = "BatchModifyClusterSnapshotsLimitExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchModifyClusterSnapshotsLimitExceededFault, __BaseException>) {
    super({
      name: "BatchModifyClusterSnapshotsLimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchModifyClusterSnapshotsLimitExceededFault.prototype);
  }
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
 * <p>The retention period specified is either in the past or is not a valid value.</p>
 *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
 * @public
 */
export class InvalidRetentionPeriodFault extends __BaseException {
  readonly name: "InvalidRetentionPeriodFault" = "InvalidRetentionPeriodFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRetentionPeriodFault, __BaseException>) {
    super({
      name: "InvalidRetentionPeriodFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRetentionPeriodFault.prototype);
  }
}

/**
 * <p>Could not find the specified S3 bucket.</p>
 * @public
 */
export class BucketNotFoundFault extends __BaseException {
  readonly name: "BucketNotFoundFault" = "BucketNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BucketNotFoundFault, __BaseException>) {
    super({
      name: "BucketNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BucketNotFoundFault.prototype);
  }
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
 * <p>A resize operation for the specified cluster is not found.</p>
 * @public
 */
export class ResizeNotFoundFault extends __BaseException {
  readonly name: "ResizeNotFoundFault" = "ResizeNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResizeNotFoundFault, __BaseException>) {
    super({
      name: "ResizeNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResizeNotFoundFault.prototype);
  }
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
 * @public
 * @enum
 */
export const ReservedNodeExchangeStatusType = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  REQUESTED: "REQUESTED",
  RETRYING: "RETRYING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ReservedNodeExchangeStatusType =
  (typeof ReservedNodeExchangeStatusType)[keyof typeof ReservedNodeExchangeStatusType];

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
}

/**
 * <p>The account already has a cluster with the given identifier.</p>
 * @public
 */
export class ClusterAlreadyExistsFault extends __BaseException {
  readonly name: "ClusterAlreadyExistsFault" = "ClusterAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterAlreadyExistsFault, __BaseException>) {
    super({
      name: "ClusterAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterAlreadyExistsFault.prototype);
  }
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
 * <p>Cluster is already on the latest database revision.</p>
 * @public
 */
export class ClusterOnLatestRevisionFault extends __BaseException {
  readonly name: "ClusterOnLatestRevisionFault" = "ClusterOnLatestRevisionFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterOnLatestRevisionFault, __BaseException>) {
    super({
      name: "ClusterOnLatestRevisionFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterOnLatestRevisionFault.prototype);
  }
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
 * <p>A cluster parameter group with the same name already exists.</p>
 * @public
 */
export class ClusterParameterGroupAlreadyExistsFault extends __BaseException {
  readonly name: "ClusterParameterGroupAlreadyExistsFault" = "ClusterParameterGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterParameterGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "ClusterParameterGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterParameterGroupAlreadyExistsFault.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ParameterApplyType = {
  dynamic: "dynamic",
  static: "static",
} as const;

/**
 * @public
 */
export type ParameterApplyType = (typeof ParameterApplyType)[keyof typeof ParameterApplyType];

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
 * <p>The parameter group name does not refer to an existing parameter group.</p>
 * @public
 */
export class ClusterParameterGroupNotFoundFault extends __BaseException {
  readonly name: "ClusterParameterGroupNotFoundFault" = "ClusterParameterGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterParameterGroupNotFoundFault, __BaseException>) {
    super({
      name: "ClusterParameterGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterParameterGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The request would result in the user exceeding the allowed number of cluster
 *             parameter groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export class ClusterParameterGroupQuotaExceededFault extends __BaseException {
  readonly name: "ClusterParameterGroupQuotaExceededFault" = "ClusterParameterGroupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterParameterGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "ClusterParameterGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterParameterGroupQuotaExceededFault.prototype);
  }
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
 * <p>The request would exceed the allowed number of cluster instances for this account.
 *
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export class ClusterQuotaExceededFault extends __BaseException {
  readonly name: "ClusterQuotaExceededFault" = "ClusterQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterQuotaExceededFault, __BaseException>) {
    super({
      name: "ClusterQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterQuotaExceededFault.prototype);
  }
}

/**
 * <p>A cluster security group with the same name already exists.</p>
 * @public
 */
export class ClusterSecurityGroupAlreadyExistsFault extends __BaseException {
  readonly name: "ClusterSecurityGroupAlreadyExistsFault" = "ClusterSecurityGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSecurityGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "ClusterSecurityGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSecurityGroupAlreadyExistsFault.prototype);
  }
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
 * <p>The request would result in the user exceeding the allowed number of cluster
 *             security groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export class ClusterSecurityGroupQuotaExceededFault extends __BaseException {
  readonly name: "ClusterSecurityGroupQuotaExceededFault" = "ClusterSecurityGroupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSecurityGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "ClusterSecurityGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSecurityGroupQuotaExceededFault.prototype);
  }
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
 * <p>The value specified as a snapshot identifier is already used by an existing
 *             snapshot.</p>
 * @public
 */
export class ClusterSnapshotAlreadyExistsFault extends __BaseException {
  readonly name: "ClusterSnapshotAlreadyExistsFault" = "ClusterSnapshotAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSnapshotAlreadyExistsFault, __BaseException>) {
    super({
      name: "ClusterSnapshotAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSnapshotAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The request would result in the user exceeding the allowed number of cluster
 *             snapshots.</p>
 * @public
 */
export class ClusterSnapshotQuotaExceededFault extends __BaseException {
  readonly name: "ClusterSnapshotQuotaExceededFault" = "ClusterSnapshotQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSnapshotQuotaExceededFault, __BaseException>) {
    super({
      name: "ClusterSnapshotQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSnapshotQuotaExceededFault.prototype);
  }
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
 * <p>A <i>ClusterSubnetGroupName</i> is already used by an existing
 *             cluster subnet group. </p>
 * @public
 */
export class ClusterSubnetGroupAlreadyExistsFault extends __BaseException {
  readonly name: "ClusterSubnetGroupAlreadyExistsFault" = "ClusterSubnetGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSubnetGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "ClusterSubnetGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSubnetGroupAlreadyExistsFault.prototype);
  }
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
 * <p>The cluster subnet group name does not refer to an existing cluster subnet
 *             group.</p>
 * @public
 */
export class ClusterSubnetGroupNotFoundFault extends __BaseException {
  readonly name: "ClusterSubnetGroupNotFoundFault" = "ClusterSubnetGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSubnetGroupNotFoundFault, __BaseException>) {
    super({
      name: "ClusterSubnetGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSubnetGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The request would result in user exceeding the allowed number of cluster subnet
 *             groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export class ClusterSubnetGroupQuotaExceededFault extends __BaseException {
  readonly name: "ClusterSubnetGroupQuotaExceededFault" = "ClusterSubnetGroupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSubnetGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "ClusterSubnetGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSubnetGroupQuotaExceededFault.prototype);
  }
}

/**
 * <p>The request would result in user exceeding the allowed number of subnets in a
 *             cluster subnet groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export class ClusterSubnetQuotaExceededFault extends __BaseException {
  readonly name: "ClusterSubnetQuotaExceededFault" = "ClusterSubnetQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSubnetQuotaExceededFault, __BaseException>) {
    super({
      name: "ClusterSubnetQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSubnetQuotaExceededFault.prototype);
  }
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
 * <p>There is a conflict while updating the resource policy.</p>
 * @public
 */
export class ConflictPolicyUpdateFault extends __BaseException {
  readonly name: "ConflictPolicyUpdateFault" = "ConflictPolicyUpdateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictPolicyUpdateFault, __BaseException>) {
    super({
      name: "ConflictPolicyUpdateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictPolicyUpdateFault.prototype);
  }
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
 * <p>Cross-region snapshot copy was temporarily disabled. Try your request
 *             again.</p>
 * @public
 */
export class CopyToRegionDisabledFault extends __BaseException {
  readonly name: "CopyToRegionDisabledFault" = "CopyToRegionDisabledFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CopyToRegionDisabledFault, __BaseException>) {
    super({
      name: "CopyToRegionDisabledFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CopyToRegionDisabledFault.prototype);
  }
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
 * <p>The authentication profile request is not valid. The profile name can't be null or empty.
 *             The authentication profile API operation must be available in the Amazon Web Services Region.</p>
 * @public
 */
export class InvalidAuthenticationProfileRequestFault extends __BaseException {
  readonly name: "InvalidAuthenticationProfileRequestFault" = "InvalidAuthenticationProfileRequestFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAuthenticationProfileRequestFault, __BaseException>) {
    super({
      name: "InvalidAuthenticationProfileRequestFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAuthenticationProfileRequestFault.prototype);
  }
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
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>If <code>true</code>, the data in the cluster is encrypted at rest. </p>
   *          <p>Default: false</p>
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
 * <p>There is no Amazon Redshift HSM client certificate with the specified
 *             identifier.</p>
 * @public
 */
export class HsmClientCertificateNotFoundFault extends __BaseException {
  readonly name: "HsmClientCertificateNotFoundFault" = "HsmClientCertificateNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HsmClientCertificateNotFoundFault, __BaseException>) {
    super({
      name: "HsmClientCertificateNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HsmClientCertificateNotFoundFault.prototype);
  }
}

/**
 * <p>There is no Amazon Redshift HSM configuration with the specified identifier.</p>
 * @public
 */
export class HsmConfigurationNotFoundFault extends __BaseException {
  readonly name: "HsmConfigurationNotFoundFault" = "HsmConfigurationNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HsmConfigurationNotFoundFault, __BaseException>) {
    super({
      name: "HsmConfigurationNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HsmConfigurationNotFoundFault.prototype);
  }
}

/**
 * <p>The number of nodes specified exceeds the allotted capacity of the
 *             cluster.</p>
 * @public
 */
export class InsufficientClusterCapacityFault extends __BaseException {
  readonly name: "InsufficientClusterCapacityFault" = "InsufficientClusterCapacityFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientClusterCapacityFault, __BaseException>) {
    super({
      name: "InsufficientClusterCapacityFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientClusterCapacityFault.prototype);
  }
}

/**
 * <p>The cluster subnet group cannot be deleted because it is in use.</p>
 * @public
 */
export class InvalidClusterSubnetGroupStateFault extends __BaseException {
  readonly name: "InvalidClusterSubnetGroupStateFault" = "InvalidClusterSubnetGroupStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterSubnetGroupStateFault, __BaseException>) {
    super({
      name: "InvalidClusterSubnetGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterSubnetGroupStateFault.prototype);
  }
}

/**
 * <p>The provided cluster track name is not valid.</p>
 * @public
 */
export class InvalidClusterTrackFault extends __BaseException {
  readonly name: "InvalidClusterTrackFault" = "InvalidClusterTrackFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterTrackFault, __BaseException>) {
    super({
      name: "InvalidClusterTrackFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterTrackFault.prototype);
  }
}

/**
 * <p>The Elastic IP (EIP) is invalid or cannot be found.</p>
 * @public
 */
export class InvalidElasticIpFault extends __BaseException {
  readonly name: "InvalidElasticIpFault" = "InvalidElasticIpFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidElasticIpFault, __BaseException>) {
    super({
      name: "InvalidElasticIpFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidElasticIpFault.prototype);
  }
}

/**
 * <p>The requested subnet is not valid, or not all of the subnets are in the same
 *             VPC.</p>
 * @public
 */
export class InvalidSubnet extends __BaseException {
  readonly name: "InvalidSubnet" = "InvalidSubnet";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSubnet, __BaseException>) {
    super({
      name: "InvalidSubnet",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSubnet.prototype);
  }
}

/**
 * <p>The tag is invalid.</p>
 * @public
 */
export class InvalidTagFault extends __BaseException {
  readonly name: "InvalidTagFault" = "InvalidTagFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagFault, __BaseException>) {
    super({
      name: "InvalidTagFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagFault.prototype);
  }
}

/**
 * <p>The cluster subnet group does not cover all Availability Zones.</p>
 * @public
 */
export class InvalidVPCNetworkStateFault extends __BaseException {
  readonly name: "InvalidVPCNetworkStateFault" = "InvalidVPCNetworkStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidVPCNetworkStateFault, __BaseException>) {
    super({
      name: "InvalidVPCNetworkStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidVPCNetworkStateFault.prototype);
  }
}

/**
 * <p>There are no subnets in your VPC with associated IPv6 CIDR blocks. To use dual-stack mode,
 *             associate an IPv6 CIDR block with each subnet in your VPC.</p>
 * @public
 */
export class Ipv6CidrBlockNotFoundFault extends __BaseException {
  readonly name: "Ipv6CidrBlockNotFoundFault" = "Ipv6CidrBlockNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<Ipv6CidrBlockNotFoundFault, __BaseException>) {
    super({
      name: "Ipv6CidrBlockNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, Ipv6CidrBlockNotFoundFault.prototype);
  }
}

/**
 * <p>The operation would exceed the number of nodes allowed for a cluster.</p>
 * @public
 */
export class NumberOfNodesPerClusterLimitExceededFault extends __BaseException {
  readonly name: "NumberOfNodesPerClusterLimitExceededFault" = "NumberOfNodesPerClusterLimitExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NumberOfNodesPerClusterLimitExceededFault, __BaseException>) {
    super({
      name: "NumberOfNodesPerClusterLimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NumberOfNodesPerClusterLimitExceededFault.prototype);
  }
}

/**
 * <p>The operation would exceed the number of nodes allotted to the account.
 *
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export class NumberOfNodesQuotaExceededFault extends __BaseException {
  readonly name: "NumberOfNodesQuotaExceededFault" = "NumberOfNodesQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NumberOfNodesQuotaExceededFault, __BaseException>) {
    super({
      name: "NumberOfNodesQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NumberOfNodesQuotaExceededFault.prototype);
  }
}

/**
 * <p>The application you attempted to find doesn't exist.</p>
 * @public
 */
export class RedshiftIdcApplicationNotExistsFault extends __BaseException {
  readonly name: "RedshiftIdcApplicationNotExistsFault" = "RedshiftIdcApplicationNotExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RedshiftIdcApplicationNotExistsFault, __BaseException>) {
    super({
      name: "RedshiftIdcApplicationNotExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RedshiftIdcApplicationNotExistsFault.prototype);
  }
}

/**
 * <p>We could not find the specified snapshot schedule. </p>
 * @public
 */
export class SnapshotScheduleNotFoundFault extends __BaseException {
  readonly name: "SnapshotScheduleNotFoundFault" = "SnapshotScheduleNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotScheduleNotFoundFault, __BaseException>) {
    super({
      name: "SnapshotScheduleNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotScheduleNotFoundFault.prototype);
  }
}

/**
 * <p>You have exceeded the number of tags allowed.</p>
 * @public
 */
export class TagLimitExceededFault extends __BaseException {
  readonly name: "TagLimitExceededFault" = "TagLimitExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagLimitExceededFault, __BaseException>) {
    super({
      name: "TagLimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagLimitExceededFault.prototype);
  }
}

/**
 * <p>Your account is not authorized to perform the requested operation.</p>
 * @public
 */
export class UnauthorizedOperation extends __BaseException {
  readonly name: "UnauthorizedOperation" = "UnauthorizedOperation";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedOperation, __BaseException>) {
    super({
      name: "UnauthorizedOperation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedOperation.prototype);
  }
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
 * <p>An error occurred when an attempt was made to change the custom domain association.</p>
 * @public
 */
export class CustomCnameAssociationFault extends __BaseException {
  readonly name: "CustomCnameAssociationFault" = "CustomCnameAssociationFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomCnameAssociationFault, __BaseException>) {
    super({
      name: "CustomCnameAssociationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomCnameAssociationFault.prototype);
  }
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
 * <p>The account already has a Redshift-managed VPC endpoint with the given identifier.</p>
 * @public
 */
export class EndpointAlreadyExistsFault extends __BaseException {
  readonly name: "EndpointAlreadyExistsFault" = "EndpointAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointAlreadyExistsFault, __BaseException>) {
    super({
      name: "EndpointAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The number of Redshift-managed VPC endpoints per authorization has exceeded its limit.</p>
 * @public
 */
export class EndpointsPerAuthorizationLimitExceededFault extends __BaseException {
  readonly name: "EndpointsPerAuthorizationLimitExceededFault" = "EndpointsPerAuthorizationLimitExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointsPerAuthorizationLimitExceededFault, __BaseException>) {
    super({
      name: "EndpointsPerAuthorizationLimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointsPerAuthorizationLimitExceededFault.prototype);
  }
}

/**
 * <p>The number of Redshift-managed VPC endpoints per cluster has exceeded its limit.</p>
 * @public
 */
export class EndpointsPerClusterLimitExceededFault extends __BaseException {
  readonly name: "EndpointsPerClusterLimitExceededFault" = "EndpointsPerClusterLimitExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointsPerClusterLimitExceededFault, __BaseException>) {
    super({
      name: "EndpointsPerClusterLimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointsPerClusterLimitExceededFault.prototype);
  }
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
 * <p>The request would exceed the allowed number of event subscriptions for this
 *             account.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export class EventSubscriptionQuotaExceededFault extends __BaseException {
  readonly name: "EventSubscriptionQuotaExceededFault" = "EventSubscriptionQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EventSubscriptionQuotaExceededFault, __BaseException>) {
    super({
      name: "EventSubscriptionQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EventSubscriptionQuotaExceededFault.prototype);
  }
}

/**
 * <p>Amazon SNS has responded that there is a problem with the specified Amazon SNS
 *             topic.</p>
 * @public
 */
export class SNSInvalidTopicFault extends __BaseException {
  readonly name: "SNSInvalidTopicFault" = "SNSInvalidTopicFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SNSInvalidTopicFault, __BaseException>) {
    super({
      name: "SNSInvalidTopicFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SNSInvalidTopicFault.prototype);
  }
}

/**
 * <p>You do not have permission to publish to the specified Amazon SNS topic.</p>
 * @public
 */
export class SNSNoAuthorizationFault extends __BaseException {
  readonly name: "SNSNoAuthorizationFault" = "SNSNoAuthorizationFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SNSNoAuthorizationFault, __BaseException>) {
    super({
      name: "SNSNoAuthorizationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SNSNoAuthorizationFault.prototype);
  }
}

/**
 * <p>An Amazon SNS topic with the specified Amazon Resource Name (ARN) does not
 *             exist.</p>
 * @public
 */
export class SNSTopicArnNotFoundFault extends __BaseException {
  readonly name: "SNSTopicArnNotFoundFault" = "SNSTopicArnNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SNSTopicArnNotFoundFault, __BaseException>) {
    super({
      name: "SNSTopicArnNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SNSTopicArnNotFoundFault.prototype);
  }
}

/**
 * <p>The specified Amazon Redshift event source could not be found.</p>
 * @public
 */
export class SourceNotFoundFault extends __BaseException {
  readonly name: "SourceNotFoundFault" = "SourceNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SourceNotFoundFault, __BaseException>) {
    super({
      name: "SourceNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SourceNotFoundFault.prototype);
  }
}

/**
 * <p>There is already an existing event notification subscription with the specified
 *             name.</p>
 * @public
 */
export class SubscriptionAlreadyExistFault extends __BaseException {
  readonly name: "SubscriptionAlreadyExistFault" = "SubscriptionAlreadyExistFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubscriptionAlreadyExistFault, __BaseException>) {
    super({
      name: "SubscriptionAlreadyExistFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubscriptionAlreadyExistFault.prototype);
  }
}

/**
 * <p>The value specified for the event category was not one of the allowed values, or it
 *             specified a category that does not apply to the specified source type. The allowed
 *             values are Configuration, Management, Monitoring, and Security.</p>
 * @public
 */
export class SubscriptionCategoryNotFoundFault extends __BaseException {
  readonly name: "SubscriptionCategoryNotFoundFault" = "SubscriptionCategoryNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubscriptionCategoryNotFoundFault, __BaseException>) {
    super({
      name: "SubscriptionCategoryNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubscriptionCategoryNotFoundFault.prototype);
  }
}

/**
 * <p>An Amazon Redshift event with the specified event ID does not exist.</p>
 * @public
 */
export class SubscriptionEventIdNotFoundFault extends __BaseException {
  readonly name: "SubscriptionEventIdNotFoundFault" = "SubscriptionEventIdNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubscriptionEventIdNotFoundFault, __BaseException>) {
    super({
      name: "SubscriptionEventIdNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubscriptionEventIdNotFoundFault.prototype);
  }
}

/**
 * <p>The value specified for the event severity was not one of the allowed values, or it
 *             specified a severity that does not apply to the specified source type. The allowed
 *             values are ERROR and INFO.</p>
 * @public
 */
export class SubscriptionSeverityNotFoundFault extends __BaseException {
  readonly name: "SubscriptionSeverityNotFoundFault" = "SubscriptionSeverityNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubscriptionSeverityNotFoundFault, __BaseException>) {
    super({
      name: "SubscriptionSeverityNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubscriptionSeverityNotFoundFault.prototype);
  }
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
 * <p>There is already an existing Amazon Redshift HSM client certificate with the specified
 *             identifier.</p>
 * @public
 */
export class HsmClientCertificateAlreadyExistsFault extends __BaseException {
  readonly name: "HsmClientCertificateAlreadyExistsFault" = "HsmClientCertificateAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HsmClientCertificateAlreadyExistsFault, __BaseException>) {
    super({
      name: "HsmClientCertificateAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HsmClientCertificateAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The quota for HSM client certificates has been reached.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export class HsmClientCertificateQuotaExceededFault extends __BaseException {
  readonly name: "HsmClientCertificateQuotaExceededFault" = "HsmClientCertificateQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HsmClientCertificateQuotaExceededFault, __BaseException>) {
    super({
      name: "HsmClientCertificateQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HsmClientCertificateQuotaExceededFault.prototype);
  }
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
 * <p>There is already an existing Amazon Redshift HSM configuration with the specified
 *             identifier.</p>
 * @public
 */
export class HsmConfigurationAlreadyExistsFault extends __BaseException {
  readonly name: "HsmConfigurationAlreadyExistsFault" = "HsmConfigurationAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HsmConfigurationAlreadyExistsFault, __BaseException>) {
    super({
      name: "HsmConfigurationAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HsmConfigurationAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The quota for HSM configurations has been reached.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export class HsmConfigurationQuotaExceededFault extends __BaseException {
  readonly name: "HsmConfigurationQuotaExceededFault" = "HsmConfigurationQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HsmConfigurationQuotaExceededFault, __BaseException>) {
    super({
      name: "HsmConfigurationQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HsmConfigurationQuotaExceededFault.prototype);
  }
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
 * @enum
 */
export const ZeroETLIntegrationStatus = {
  ACTIVE: "active",
  CREATING: "creating",
  DELETING: "deleting",
  FAILED: "failed",
  MODIFYING: "modifying",
  NEEDS_ATTENTION: "needs_attention",
  SYNCING: "syncing",
} as const;

/**
 * @public
 */
export type ZeroETLIntegrationStatus = (typeof ZeroETLIntegrationStatus)[keyof typeof ZeroETLIntegrationStatus];

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
 * <p>The integration you are trying to create already exists.</p>
 * @public
 */
export class IntegrationAlreadyExistsFault extends __BaseException {
  readonly name: "IntegrationAlreadyExistsFault" = "IntegrationAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationAlreadyExistsFault, __BaseException>) {
    super({
      name: "IntegrationAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationAlreadyExistsFault.prototype);
  }
}

/**
 * <p>A conflicting conditional operation is currently in progress against this resource.
 *             This typically occurs when there are multiple requests being made to the same resource at the same time,
 *             and these requests conflict with each other.</p>
 * @public
 */
export class IntegrationConflictOperationFault extends __BaseException {
  readonly name: "IntegrationConflictOperationFault" = "IntegrationConflictOperationFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationConflictOperationFault, __BaseException>) {
    super({
      name: "IntegrationConflictOperationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationConflictOperationFault.prototype);
  }
}

/**
 * <p>You can't create any more zero-ETL or S3 event integrations because the quota has been reached.</p>
 * @public
 */
export class IntegrationQuotaExceededFault extends __BaseException {
  readonly name: "IntegrationQuotaExceededFault" = "IntegrationQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationQuotaExceededFault, __BaseException>) {
    super({
      name: "IntegrationQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationQuotaExceededFault.prototype);
  }
}

/**
 * <p>The specified integration source can't be found.</p>
 * @public
 */
export class IntegrationSourceNotFoundFault extends __BaseException {
  readonly name: "IntegrationSourceNotFoundFault" = "IntegrationSourceNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationSourceNotFoundFault, __BaseException>) {
    super({
      name: "IntegrationSourceNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationSourceNotFoundFault.prototype);
  }
}

/**
 * <p>The specified integration target can't be found.</p>
 * @public
 */
export class IntegrationTargetNotFoundFault extends __BaseException {
  readonly name: "IntegrationTargetNotFoundFault" = "IntegrationTargetNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationTargetNotFoundFault, __BaseException>) {
    super({
      name: "IntegrationTargetNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationTargetNotFoundFault.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ServiceAuthorization = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;

/**
 * @public
 */
export type ServiceAuthorization = (typeof ServiceAuthorization)[keyof typeof ServiceAuthorization];

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

  export interface Visitor<T> {
    LakeFormationQuery: (value: LakeFormationQuery) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: LakeFormationScopeUnion, visitor: Visitor<T>): T => {
    if (value.LakeFormationQuery !== undefined) return visitor.LakeFormationQuery(value.LakeFormationQuery);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A list of service integrations.</p>
 * @public
 */
export type ServiceIntegrationsUnion =
  | ServiceIntegrationsUnion.LakeFormationMember
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
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    LakeFormation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    LakeFormation: (value: LakeFormationScopeUnion[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ServiceIntegrationsUnion, visitor: Visitor<T>): T => {
    if (value.LakeFormation !== undefined) return visitor.LakeFormation(value.LakeFormation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
 * <p>A dependent service denied access for the integration.</p>
 * @public
 */
export class DependentServiceAccessDeniedFault extends __BaseException {
  readonly name: "DependentServiceAccessDeniedFault" = "DependentServiceAccessDeniedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependentServiceAccessDeniedFault, __BaseException>) {
    super({
      name: "DependentServiceAccessDeniedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependentServiceAccessDeniedFault.prototype);
  }
}

/**
 * <p>The application you attempted to add already exists.</p>
 * @public
 */
export class RedshiftIdcApplicationAlreadyExistsFault extends __BaseException {
  readonly name: "RedshiftIdcApplicationAlreadyExistsFault" = "RedshiftIdcApplicationAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RedshiftIdcApplicationAlreadyExistsFault, __BaseException>) {
    super({
      name: "RedshiftIdcApplicationAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RedshiftIdcApplicationAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The maximum number of Redshift IAM Identity Center applications was exceeded.</p>
 * @public
 */
export class RedshiftIdcApplicationQuotaExceededFault extends __BaseException {
  readonly name: "RedshiftIdcApplicationQuotaExceededFault" = "RedshiftIdcApplicationQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RedshiftIdcApplicationQuotaExceededFault, __BaseException>) {
    super({
      name: "RedshiftIdcApplicationQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RedshiftIdcApplicationQuotaExceededFault.prototype);
  }
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
 * <p>The scheduled action is not valid. </p>
 * @public
 */
export class InvalidScheduledActionFault extends __BaseException {
  readonly name: "InvalidScheduledActionFault" = "InvalidScheduledActionFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidScheduledActionFault, __BaseException>) {
    super({
      name: "InvalidScheduledActionFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidScheduledActionFault.prototype);
  }
}

/**
 * <p>The schedule you submitted isn't valid.</p>
 * @public
 */
export class InvalidScheduleFault extends __BaseException {
  readonly name: "InvalidScheduleFault" = "InvalidScheduleFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidScheduleFault, __BaseException>) {
    super({
      name: "InvalidScheduleFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidScheduleFault.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ScheduledActionState = {
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
} as const;

/**
 * @public
 */
export type ScheduledActionState = (typeof ScheduledActionState)[keyof typeof ScheduledActionState];

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
 * <p>The scheduled action already exists. </p>
 * @public
 */
export class ScheduledActionAlreadyExistsFault extends __BaseException {
  readonly name: "ScheduledActionAlreadyExistsFault" = "ScheduledActionAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ScheduledActionAlreadyExistsFault, __BaseException>) {
    super({
      name: "ScheduledActionAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ScheduledActionAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The quota for scheduled actions exceeded. </p>
 * @public
 */
export class ScheduledActionQuotaExceededFault extends __BaseException {
  readonly name: "ScheduledActionQuotaExceededFault" = "ScheduledActionQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ScheduledActionQuotaExceededFault, __BaseException>) {
    super({
      name: "ScheduledActionQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ScheduledActionQuotaExceededFault.prototype);
  }
}

/**
 * <p>The action type specified for a scheduled action is not supported. </p>
 * @public
 */
export class ScheduledActionTypeUnsupportedFault extends __BaseException {
  readonly name: "ScheduledActionTypeUnsupportedFault" = "ScheduledActionTypeUnsupportedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ScheduledActionTypeUnsupportedFault, __BaseException>) {
    super({
      name: "ScheduledActionTypeUnsupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ScheduledActionTypeUnsupportedFault.prototype);
  }
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
 * <p>The snapshot copy grant can't be created because a grant with the same name already
 *             exists.</p>
 * @public
 */
export class SnapshotCopyGrantAlreadyExistsFault extends __BaseException {
  readonly name: "SnapshotCopyGrantAlreadyExistsFault" = "SnapshotCopyGrantAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotCopyGrantAlreadyExistsFault, __BaseException>) {
    super({
      name: "SnapshotCopyGrantAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotCopyGrantAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The Amazon Web Services account has exceeded the maximum number of snapshot copy grants in this
 *             region.</p>
 * @public
 */
export class SnapshotCopyGrantQuotaExceededFault extends __BaseException {
  readonly name: "SnapshotCopyGrantQuotaExceededFault" = "SnapshotCopyGrantQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotCopyGrantQuotaExceededFault, __BaseException>) {
    super({
      name: "SnapshotCopyGrantQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotCopyGrantQuotaExceededFault.prototype);
  }
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
 * <p>The definition you submitted is not supported.</p>
 * @public
 */
export class ScheduleDefinitionTypeUnsupportedFault extends __BaseException {
  readonly name: "ScheduleDefinitionTypeUnsupportedFault" = "ScheduleDefinitionTypeUnsupportedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ScheduleDefinitionTypeUnsupportedFault, __BaseException>) {
    super({
      name: "ScheduleDefinitionTypeUnsupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ScheduleDefinitionTypeUnsupportedFault.prototype);
  }
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
 * <p>The specified snapshot schedule already exists. </p>
 * @public
 */
export class SnapshotScheduleAlreadyExistsFault extends __BaseException {
  readonly name: "SnapshotScheduleAlreadyExistsFault" = "SnapshotScheduleAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotScheduleAlreadyExistsFault, __BaseException>) {
    super({
      name: "SnapshotScheduleAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotScheduleAlreadyExistsFault.prototype);
  }
}

/**
 * <p>You have exceeded the quota of snapshot schedules. </p>
 * @public
 */
export class SnapshotScheduleQuotaExceededFault extends __BaseException {
  readonly name: "SnapshotScheduleQuotaExceededFault" = "SnapshotScheduleQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotScheduleQuotaExceededFault, __BaseException>) {
    super({
      name: "SnapshotScheduleQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotScheduleQuotaExceededFault.prototype);
  }
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
 * <p>The resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundFault extends __BaseException {
  readonly name: "ResourceNotFoundFault" = "ResourceNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundFault, __BaseException>) {
    super({
      name: "ResourceNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundFault.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const UsageLimitBreachAction = {
  DISABLE: "disable",
  EMIT_METRIC: "emit-metric",
  LOG: "log",
} as const;

/**
 * @public
 */
export type UsageLimitBreachAction = (typeof UsageLimitBreachAction)[keyof typeof UsageLimitBreachAction];

/**
 * @public
 * @enum
 */
export const UsageLimitFeatureType = {
  CONCURRENCY_SCALING: "concurrency-scaling",
  CROSS_REGION_DATASHARING: "cross-region-datasharing",
  SPECTRUM: "spectrum",
} as const;

/**
 * @public
 */
export type UsageLimitFeatureType = (typeof UsageLimitFeatureType)[keyof typeof UsageLimitFeatureType];

/**
 * @public
 * @enum
 */
export const UsageLimitLimitType = {
  DATA_SCANNED: "data-scanned",
  TIME: "time",
} as const;

/**
 * @public
 */
export type UsageLimitLimitType = (typeof UsageLimitLimitType)[keyof typeof UsageLimitLimitType];

/**
 * @public
 * @enum
 */
export const UsageLimitPeriod = {
  DAILY: "daily",
  MONTHLY: "monthly",
  WEEKLY: "weekly",
} as const;

/**
 * @public
 */
export type UsageLimitPeriod = (typeof UsageLimitPeriod)[keyof typeof UsageLimitPeriod];

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
 * <p>The usage limit is not valid.</p>
 * @public
 */
export class InvalidUsageLimitFault extends __BaseException {
  readonly name: "InvalidUsageLimitFault" = "InvalidUsageLimitFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUsageLimitFault, __BaseException>) {
    super({
      name: "InvalidUsageLimitFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUsageLimitFault.prototype);
  }
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
 * <p>The usage limit already exists. </p>
 * @public
 */
export class UsageLimitAlreadyExistsFault extends __BaseException {
  readonly name: "UsageLimitAlreadyExistsFault" = "UsageLimitAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UsageLimitAlreadyExistsFault, __BaseException>) {
    super({
      name: "UsageLimitAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UsageLimitAlreadyExistsFault.prototype);
  }
}

/**
 * <p>An error occurred. The custom domain name couldn't be found.</p>
 * @public
 */
export class CustomDomainAssociationNotFoundFault extends __BaseException {
  readonly name: "CustomDomainAssociationNotFoundFault" = "CustomDomainAssociationNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomDomainAssociationNotFoundFault, __BaseException>) {
    super({
      name: "CustomDomainAssociationNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomDomainAssociationNotFoundFault.prototype);
  }
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
 * @enum
 */
export const DataShareStatusForConsumer = {
  ACTIVE: "ACTIVE",
  AVAILABLE: "AVAILABLE",
} as const;

/**
 * @public
 */
export type DataShareStatusForConsumer = (typeof DataShareStatusForConsumer)[keyof typeof DataShareStatusForConsumer];

/**
 * @public
 * @enum
 */
export const DataShareStatusForProducer = {
  ACTIVE: "ACTIVE",
  AUTHORIZED: "AUTHORIZED",
  DEAUTHORIZED: "DEAUTHORIZED",
  PENDING_AUTHORIZATION: "PENDING_AUTHORIZATION",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type DataShareStatusForProducer = (typeof DataShareStatusForProducer)[keyof typeof DataShareStatusForProducer];

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
 * <p>The cluster parameter group action can not be completed because another task is in
 *             progress that involves the parameter group. Wait a few moments and try the operation
 *             again.</p>
 * @public
 */
export class InvalidClusterParameterGroupStateFault extends __BaseException {
  readonly name: "InvalidClusterParameterGroupStateFault" = "InvalidClusterParameterGroupStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterParameterGroupStateFault, __BaseException>) {
    super({
      name: "InvalidClusterParameterGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterParameterGroupStateFault.prototype);
  }
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
 * <p>The state of the subnet is invalid.</p>
 * @public
 */
export class InvalidClusterSubnetStateFault extends __BaseException {
  readonly name: "InvalidClusterSubnetStateFault" = "InvalidClusterSubnetStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterSubnetStateFault, __BaseException>) {
    super({
      name: "InvalidClusterSubnetStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterSubnetStateFault.prototype);
  }
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
 * <p>The endpoint name doesn't refer to an existing endpoint.</p>
 * @public
 */
export class EndpointNotFoundFault extends __BaseException {
  readonly name: "EndpointNotFoundFault" = "EndpointNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointNotFoundFault, __BaseException>) {
    super({
      name: "EndpointNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointNotFoundFault.prototype);
  }
}

/**
 * <p>The status of the endpoint is not valid.</p>
 * @public
 */
export class InvalidEndpointStateFault extends __BaseException {
  readonly name: "InvalidEndpointStateFault" = "InvalidEndpointStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEndpointStateFault, __BaseException>) {
    super({
      name: "InvalidEndpointStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEndpointStateFault.prototype);
  }
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
 * <p>The subscription request is invalid because it is a duplicate request. This
 *             subscription request is already in progress.</p>
 * @public
 */
export class InvalidSubscriptionStateFault extends __BaseException {
  readonly name: "InvalidSubscriptionStateFault" = "InvalidSubscriptionStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSubscriptionStateFault, __BaseException>) {
    super({
      name: "InvalidSubscriptionStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSubscriptionStateFault.prototype);
  }
}

/**
 * <p>An Amazon Redshift event notification subscription with the specified name does not
 *             exist.</p>
 * @public
 */
export class SubscriptionNotFoundFault extends __BaseException {
  readonly name: "SubscriptionNotFoundFault" = "SubscriptionNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubscriptionNotFoundFault, __BaseException>) {
    super({
      name: "SubscriptionNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubscriptionNotFoundFault.prototype);
  }
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
 * <p>The specified HSM client certificate is not in the <code>available</code> state, or
 *             it is still in use by one or more Amazon Redshift clusters.</p>
 * @public
 */
export class InvalidHsmClientCertificateStateFault extends __BaseException {
  readonly name: "InvalidHsmClientCertificateStateFault" = "InvalidHsmClientCertificateStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidHsmClientCertificateStateFault, __BaseException>) {
    super({
      name: "InvalidHsmClientCertificateStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidHsmClientCertificateStateFault.prototype);
  }
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
 * <p>The specified HSM configuration is not in the <code>available</code> state, or it
 *             is still in use by one or more Amazon Redshift clusters.</p>
 * @public
 */
export class InvalidHsmConfigurationStateFault extends __BaseException {
  readonly name: "InvalidHsmConfigurationStateFault" = "InvalidHsmConfigurationStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidHsmConfigurationStateFault, __BaseException>) {
    super({
      name: "InvalidHsmConfigurationStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidHsmConfigurationStateFault.prototype);
  }
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
 * <p>The integration is in an invalid state and can't perform the requested operation.</p>
 * @public
 */
export class IntegrationConflictStateFault extends __BaseException {
  readonly name: "IntegrationConflictStateFault" = "IntegrationConflictStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationConflictStateFault, __BaseException>) {
    super({
      name: "IntegrationConflictStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationConflictStateFault.prototype);
  }
}

/**
 * <p>The integration can't be found.</p>
 * @public
 */
export class IntegrationNotFoundFault extends __BaseException {
  readonly name: "IntegrationNotFoundFault" = "IntegrationNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationNotFoundFault, __BaseException>) {
    super({
      name: "IntegrationNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationNotFoundFault.prototype);
  }
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
 * <p>The scheduled action cannot be found. </p>
 * @public
 */
export class ScheduledActionNotFoundFault extends __BaseException {
  readonly name: "ScheduledActionNotFoundFault" = "ScheduledActionNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ScheduledActionNotFoundFault, __BaseException>) {
    super({
      name: "ScheduledActionNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ScheduledActionNotFoundFault.prototype);
  }
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
 * <p>The snapshot copy grant can't be deleted because it is used by one or more
 *             clusters.</p>
 * @public
 */
export class InvalidSnapshotCopyGrantStateFault extends __BaseException {
  readonly name: "InvalidSnapshotCopyGrantStateFault" = "InvalidSnapshotCopyGrantStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSnapshotCopyGrantStateFault, __BaseException>) {
    super({
      name: "InvalidSnapshotCopyGrantStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSnapshotCopyGrantStateFault.prototype);
  }
}

/**
 * <p>The specified snapshot copy grant can't be found. Make sure that the name is typed
 *             correctly and that the grant exists in the destination region.</p>
 * @public
 */
export class SnapshotCopyGrantNotFoundFault extends __BaseException {
  readonly name: "SnapshotCopyGrantNotFoundFault" = "SnapshotCopyGrantNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotCopyGrantNotFoundFault, __BaseException>) {
    super({
      name: "SnapshotCopyGrantNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotCopyGrantNotFoundFault.prototype);
  }
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
 * <p>The cluster snapshot schedule state is not valid.</p>
 * @public
 */
export class InvalidClusterSnapshotScheduleStateFault extends __BaseException {
  readonly name: "InvalidClusterSnapshotScheduleStateFault" = "InvalidClusterSnapshotScheduleStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterSnapshotScheduleStateFault, __BaseException>) {
    super({
      name: "InvalidClusterSnapshotScheduleStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterSnapshotScheduleStateFault.prototype);
  }
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
 * <p>The usage limit identifier can't be found.</p>
 * @public
 */
export class UsageLimitNotFoundFault extends __BaseException {
  readonly name: "UsageLimitNotFoundFault" = "UsageLimitNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UsageLimitNotFoundFault, __BaseException>) {
    super({
      name: "UsageLimitNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UsageLimitNotFoundFault.prototype);
  }
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
 * @internal
 */
export const PendingModifiedValuesFilterSensitiveLog = (obj: PendingModifiedValues): any => ({
  ...obj,
  ...(obj.MasterUserPassword && { MasterUserPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ClusterFilterSensitiveLog = (obj: Cluster): any => ({
  ...obj,
  ...(obj.PendingModifiedValues && {
    PendingModifiedValues: PendingModifiedValuesFilterSensitiveLog(obj.PendingModifiedValues),
  }),
});

/**
 * @internal
 */
export const ClusterCredentialsFilterSensitiveLog = (obj: ClusterCredentials): any => ({
  ...obj,
  ...(obj.DbPassword && { DbPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ClusterExtendedCredentialsFilterSensitiveLog = (obj: ClusterExtendedCredentials): any => ({
  ...obj,
  ...(obj.DbPassword && { DbPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ClustersMessageFilterSensitiveLog = (obj: ClustersMessage): any => ({
  ...obj,
  ...(obj.Clusters && { Clusters: obj.Clusters.map((item) => ClusterFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateClusterMessageFilterSensitiveLog = (obj: CreateClusterMessage): any => ({
  ...obj,
  ...(obj.MasterUserPassword && { MasterUserPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateClusterResultFilterSensitiveLog = (obj: CreateClusterResult): any => ({
  ...obj,
  ...(obj.Cluster && { Cluster: ClusterFilterSensitiveLog(obj.Cluster) }),
});

/**
 * @internal
 */
export const DeleteClusterResultFilterSensitiveLog = (obj: DeleteClusterResult): any => ({
  ...obj,
  ...(obj.Cluster && { Cluster: ClusterFilterSensitiveLog(obj.Cluster) }),
});
