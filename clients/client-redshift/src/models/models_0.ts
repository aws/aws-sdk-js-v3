// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  AccountAttribute,
  ActionType,
  AquaConfiguration,
  AquaConfigurationStatus,
  AuthenticationProfile,
  AuthorizationStatus,
  Cluster,
  ClusterAssociatedToSchedule,
  ClusterDbRevision,
  ClusterParameterGroup,
  ClusterSecurityGroup,
  ClusterSubnetGroup,
  ClusterVersion,
  DataShareAssociation,
  DataShareStatusForConsumer,
  DataShareStatusForProducer,
  DefaultClusterParameters,
  Event,
  EventCategoriesMap,
  EventSubscription,
  HsmClientCertificate,
  HsmConfiguration,
  LogDestinationType,
  MaintenanceTrack,
  NodeConfigurationOption,
  NodeConfigurationOptionsFilter,
  OrderableClusterOption,
  Parameter,
  PartnerIntegrationInfo,
  PartnerIntegrationStatus,
  ReservedNode,
  ReservedNodeConfigurationOption,
  ReservedNodeExchangeActionType,
  ReservedNodeExchangeStatus,
  ReservedNodeOffering,
  ScheduledActionFilter,
  ScheduledActionState,
  ScheduledActionType,
  ScheduledActionTypeValues,
  Snapshot,
  SnapshotCopyGrant,
  SnapshotErrorMessage,
  SnapshotSortingEntity,
  SourceType,
  TableRestoreStatus,
  Tag,
  TaggedResource,
  UsageLimitBreachAction,
  UsageLimitFeatureType,
  UsageLimitLimitType,
  UsageLimitPeriod,
  VpcEndpoint,
  VpcSecurityGroupMembership,
} from "./models_1";
import { RedshiftServiceException as __BaseException } from "./RedshiftServiceException";

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
 * <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
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

  /**
   * <p>From a datashare consumer account, associates a datashare with all existing and future namespaces in the specified Amazon Web Services Region.</p>
   */
  ConsumerRegion?: string;
}

export namespace AssociateDataShareConsumerMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateDataShareConsumerMessage): any => ({
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
   * <p>A value that specifies when the datashare has an association between producer and data
   *             consumers.</p>
   */
  DataShareAssociations?: DataShareAssociation[];

  /**
   * <p>The identifier of a datashare to show its managing entity.</p>
   */
  ManagedBy?: string;
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
 * <p>The authentication profile already exists.</p>
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
 * <p>The authorization quota for the cluster security group has been reached.</p>
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

export interface AuthorizeDataShareMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare that producers are to authorize
   *             sharing for.</p>
   */
  DataShareArn: string | undefined;

  /**
   * <p>The identifier of the data consumer that is authorized to access the datashare. This identifier is an Amazon Web Services account ID or a keyword, such as ADX.</p>
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
 * <p>The account already has a cluster with the given identifier.</p>
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
 */
export interface ClusterCredentials {
  /**
   * <p>A database user name that is authorized to log on to the database <code>DbName</code>
   *             using the password <code>DbPassword</code>. If the specified DbUser exists in the
   *             database, the new user name has the same database permissions as the the user named in
   *             DbUser. By default, the user is added to PUBLIC. If the <code>DbGroups</code> parameter
   *             is specifed, <code>DbUser</code> is added to the listed groups for any sessions created
   *             using these credentials.</p>
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

export interface ClusterExtendedCredentials {
  /**
   * <p>A database user name that you provide when you connect to a database. The database user is mapped 1:1 to the source IAM identity. </p>
   */
  DbUser?: string;

  /**
   * <p>A temporary password that you provide when you connect to a database.</p>
   */
  DbPassword?: string;

  /**
   * <p>The time (UTC) when the temporary password expires. After this timestamp, a log in with the temporary password fails.</p>
   */
  Expiration?: Date;

  /**
   * <p>Reserved for future use.</p>
   */
  NextRefreshTime?: Date;
}

export namespace ClusterExtendedCredentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterExtendedCredentials): any => ({
    ...obj,
    ...(obj.DbPassword && { DbPassword: SENSITIVE_STRING }),
  });
}

/**
 * <p>A cluster parameter group with the same name already exists.</p>
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
 * <p>A <i>ClusterSubnetGroupName</i> is already used by an existing
 *             cluster subnet group. </p>
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
   *                 <p>Can be any printable ASCII character (ASCII code 33-126) except <code>'</code>
   *                     (single quote), <code>"</code> (double quote), <code>\</code>, <code>/</code>, or <code>@</code>.</p>
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
   *             Resource Name (ARN) format. </p>
   *         <p>The maximum number of IAM roles that you can associate is subject to a quota.
   *             For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a>
   *             in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
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

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was created. </p>
   */
  DefaultIamRoleArn?: string;

  /**
   * <p>A flag that specifies whether to load sample data once the cluster is created.</p>
   */
  LoadSampleData?: string;
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
 * <p>The operation would exceed the number of nodes allowed for a cluster.</p>
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
 * <p>We could not find the specified snapshot schedule. </p>
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

  /**
   * <p>The identifier of the reserved node.</p>
   */
  ReservedNodeId?: string;

  /**
   * <p>The identifier of the target reserved node offering.</p>
   */
  TargetReservedNodeOfferingId?: string;
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
   * <p>The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift
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

export interface CreateSnapshotCopyGrantResult {
  /**
   * <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied
   *             snapshots with the specified encrypted symmetric key from Amazon Web Services KMS in the destination
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
   *             If <code>FeatureType</code> is <code>cross-region-datasharing</code>, then <code>LimitType</code> must be <code>data-scanned</code>.
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

export interface DeauthorizeDataShareMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare to remove authorization from.</p>
   */
  DataShareArn: string | undefined;

  /**
   * <p>The identifier of the data consumer that is to have authorization removed from the datashare.
   *             This identifier is an Amazon Web Services account ID or a keyword, such as ADX.</p>
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
   * <p>An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeDataShares</a> request exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. </p>
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
   * <p>An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeDataShares</a> request exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. </p>
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
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
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
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
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
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
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
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
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

/**
 * <p>Describes the status of logging for a cluster.</p>
 */
export interface LoggingStatus {
  /**
   * <p>
   *             <code>true</code> if logging is on, <code>false</code> if logging is off.</p>
   */
  LoggingEnabled?: boolean;

  /**
   * <p>The name of the S3 bucket where the log files are stored.</p>
   */
  BucketName?: string;

  /**
   * <p>The prefix applied to the log file names.</p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>The last time that logs were delivered.</p>
   */
  LastSuccessfulDeliveryTime?: Date;

  /**
   * <p>The last time when logs failed to be delivered.</p>
   */
  LastFailureTime?: Date;

  /**
   * <p>The message indicating that logs failed to be delivered.</p>
   */
  LastFailureMessage?: string;

  /**
   * <p>The log destination type. An enum with possible values of <code>s3</code> and <code>cloudwatch</code>.</p>
   */
  LogDestinationType?: LogDestinationType | string;

  /**
   * <p>The collection of exported log types. Log types include the connection log, user log and user activity log.</p>
   */
  LogExports?: string[];
}

export namespace LoggingStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoggingStatus): any => ({
    ...obj,
  });
}

export interface DescribeNodeConfigurationOptionsMessage {
  /**
   * <p>The action type to evaluate for possible node configurations.
   *             Specify "restore-cluster" to get configuration combinations based on an existing snapshot.
   *             Specify "recommend-node-config" to get configuration recommendations based on an existing cluster or snapshot.
   *             Specify "resize-cluster" to get configuration combinations for elastic resize based on an existing cluster.
   *         </p>
   */
  ActionType: ActionType | string | undefined;

  /**
   * <p>The identifier of the cluster to evaluate for possible node configurations.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The identifier of the snapshot to evaluate for possible node configurations.</p>
   */
  SnapshotIdentifier?: string;

  /**
   * <p>The Amazon Web Services account used to create or copy the snapshot.
   *             Required if you are restoring a snapshot you do not own,
   *             optional if you own the snapshot.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>A set of name, operator, and value items to filter the results.</p>
   */
  Filters?: NodeConfigurationOptionsFilter[];

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeNodeConfigurationOptions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>500</code>
   *         </p>
   *         <p>Constraints: minimum 100, maximum 500.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeNodeConfigurationOptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNodeConfigurationOptionsMessage): any => ({
    ...obj,
  });
}

export interface NodeConfigurationOptionsMessage {
  /**
   * <p>A list of valid node configurations.</p>
   */
  NodeConfigurationOptionList?: NodeConfigurationOption[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;
}

export namespace NodeConfigurationOptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeConfigurationOptionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeOrderableClusterOptionsMessage {
  /**
   * <p>The version filter value. Specify this parameter to show only the available
   *             offerings matching the specified version.</p>
   *         <p>Default: All versions.</p>
   *         <p>Constraints: Must be one of the version returned from <a>DescribeClusterVersions</a>.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The node type filter value. Specify this parameter to show only the available
   *             offerings matching the specified node type.</p>
   */
  NodeType?: string;

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
   *             records. When the results of a <a>DescribeOrderableClusterOptions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;
}

export namespace DescribeOrderableClusterOptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrderableClusterOptionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output from the <a>DescribeOrderableClusterOptions</a>
 *             action. </p>
 */
export interface OrderableClusterOptionsMessage {
  /**
   * <p>An <code>OrderableClusterOption</code> structure containing information about
   *             orderable options for the cluster.</p>
   */
  OrderableClusterOptions?: OrderableClusterOption[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;
}

export namespace OrderableClusterOptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrderableClusterOptionsMessage): any => ({
    ...obj,
  });
}

export interface DescribePartnersInputMessage {
  /**
   * <p>The Amazon Web Services account ID that owns the cluster.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The cluster identifier of the cluster whose partner integration is being described.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the database whose partner integration is being described. If database name is not specified, then all databases in the cluster are described.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The name of the partner that is being described. If partner name is not specified, then all partner integrations are described.</p>
   */
  PartnerName?: string;
}

export namespace DescribePartnersInputMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePartnersInputMessage): any => ({
    ...obj,
  });
}

export interface DescribePartnersOutputMessage {
  /**
   * <p>A list of partner integrations.</p>
   */
  PartnerIntegrationInfoList?: PartnerIntegrationInfo[];
}

export namespace DescribePartnersOutputMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePartnersOutputMessage): any => ({
    ...obj,
  });
}

export interface DescribeReservedNodeExchangeStatusInputMessage {
  /**
   * <p>The identifier of the source reserved node in a reserved-node exchange request.</p>
   */
  ReservedNodeId?: string;

  /**
   * <p>The identifier of the reserved-node exchange request.</p>
   */
  ReservedNodeExchangeRequestId?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>Marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous <code>DescribeReservedNodeExchangeStatus</code> request. If this
   *             parameter is specified, the response includes only records beyond the marker, up to the value
   *             specified by the <code>MaxRecords</code> parameter. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request.</p>
   */
  Marker?: string;
}

export namespace DescribeReservedNodeExchangeStatusInputMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservedNodeExchangeStatusInputMessage): any => ({
    ...obj,
  });
}

export interface DescribeReservedNodeExchangeStatusOutputMessage {
  /**
   * <p>The details of the reserved-node exchange request, including the status, request
   *             time, source reserved-node identifier, and additional details.</p>
   */
  ReservedNodeExchangeStatusDetails?: ReservedNodeExchangeStatus[];

  /**
   * <p>A pagination token provided by a previous <code>DescribeReservedNodeExchangeStatus</code> request.</p>
   */
  Marker?: string;
}

export namespace DescribeReservedNodeExchangeStatusOutputMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservedNodeExchangeStatusOutputMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReservedNodeOfferingsMessage {
  /**
   * <p>The unique identifier for the offering.</p>
   */
  ReservedNodeOfferingId?: string;

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
   *             records. When the results of a <a>DescribeReservedNodeOfferings</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;
}

export namespace DescribeReservedNodeOfferingsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservedNodeOfferingsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ReservedNodeOfferingsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of <code>ReservedNodeOffering</code> objects.</p>
   */
  ReservedNodeOfferings?: ReservedNodeOffering[];
}

export namespace ReservedNodeOfferingsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedNodeOfferingsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReservedNodesMessage {
  /**
   * <p>Identifier for the node reservation.</p>
   */
  ReservedNodeId?: string;

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
   *             records. When the results of a <a>DescribeReservedNodes</a> request exceed
   *             the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;
}

export namespace DescribeReservedNodesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservedNodesMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ReservedNodesMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>The list of <code>ReservedNode</code> objects.</p>
   */
  ReservedNodes?: ReservedNode[];
}

export namespace ReservedNodesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedNodesMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeResizeMessage {
  /**
   * <p>The unique identifier of a cluster whose resize progress you are requesting. This
   *             parameter is case-sensitive.</p>
   *         <p>By default, resize operations for all clusters defined for an Amazon Web Services account are
   *             returned.</p>
   */
  ClusterIdentifier: string | undefined;
}

export namespace DescribeResizeMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeResizeMessage): any => ({
    ...obj,
  });
}

export interface DescribeScheduledActionsMessage {
  /**
   * <p>The name of the scheduled action to retrieve. </p>
   */
  ScheduledActionName?: string;

  /**
   * <p>The type of the scheduled actions to retrieve. </p>
   */
  TargetActionType?: ScheduledActionTypeValues | string;

  /**
   * <p>The start time in UTC of the scheduled actions to retrieve.
   *             Only active scheduled actions that have invocations after this time are retrieved.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end time in UTC of the scheduled action to retrieve.
   *             Only active scheduled actions that have invocations before this time are retrieved.</p>
   */
  EndTime?: Date;

  /**
   * <p>If true, retrieve only active scheduled actions.
   *            If false, retrieve only disabled scheduled actions. </p>
   */
  Active?: boolean;

  /**
   * <p>List of scheduled action filters. </p>
   */
  Filters?: ScheduledActionFilter[];

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeScheduledActions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *             <p>Default: <code>100</code>
   *             </p>
   *             <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeScheduledActionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeScheduledActionsMessage): any => ({
    ...obj,
  });
}

export interface ScheduledActionsMessage {
  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeScheduledActions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>List of retrieved scheduled actions. </p>
   */
  ScheduledActions?: ScheduledAction[];
}

export namespace ScheduledActionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledActionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The result of the <code>DescribeSnapshotCopyGrants</code> action.</p>
 */
export interface DescribeSnapshotCopyGrantsMessage {
  /**
   * <p>The name of the snapshot copy grant.</p>
   */
  SnapshotCopyGrantName?: string;

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
   *             records. When the results of a <code>DescribeSnapshotCopyGrant</code> request exceed the
   *             value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *         <p>Constraints: You can specify either the <b>SnapshotCopyGrantName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   */
  Marker?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching resources that are
   *             associated with the specified key or keys. For example, suppose that you have resources
   *             tagged with keys called <code>owner</code> and <code>environment</code>. If you specify
   *             both of these tag keys in the request, Amazon Redshift returns a response with all resources
   *             that have either or both of these tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching resources that are
   *             associated with the specified value or values. For example, suppose that you have
   *             resources tagged with values called <code>admin</code> and <code>test</code>. If you
   *             specify both of these tag values in the request, Amazon Redshift returns a response with all
   *             resources that have either or both of these tag values associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeSnapshotCopyGrantsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSnapshotCopyGrantsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface SnapshotCopyGrantMessage {
  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <code>DescribeSnapshotCopyGrant</code> request exceed the
   *             value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *         <p>Constraints: You can specify either the <b>SnapshotCopyGrantName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   */
  Marker?: string;

  /**
   * <p>The list of <code>SnapshotCopyGrant</code> objects.</p>
   */
  SnapshotCopyGrants?: SnapshotCopyGrant[];
}

export namespace SnapshotCopyGrantMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotCopyGrantMessage): any => ({
    ...obj,
  });
}

export interface DescribeSnapshotSchedulesMessage {
  /**
   * <p>The unique identifier for the cluster whose snapshot schedules you want to
   *             view.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>A unique identifier for a snapshot schedule.</p>
   */
  ScheduleIdentifier?: string;

  /**
   * <p>The key value for a snapshot schedule tag.</p>
   */
  TagKeys?: string[];

  /**
   * <p>The value corresponding to the key of the snapshot schedule tag.</p>
   */
  TagValues?: string[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>marker</code> parameter
   *             and retrying the command. If the <code>marker</code> field is empty, all response
   *             records have been retrieved for the request.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number or response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned <code>marker</code>
   *             value.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeSnapshotSchedulesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSnapshotSchedulesMessage): any => ({
    ...obj,
  });
}

export interface DescribeSnapshotSchedulesOutputMessage {
  /**
   * <p>A list of SnapshotSchedules.</p>
   */
  SnapshotSchedules?: SnapshotSchedule[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>marker</code> parameter
   *             and retrying the command. If the <code>marker</code> field is empty, all response
   *             records have been retrieved for the request.</p>
   */
  Marker?: string;
}

export namespace DescribeSnapshotSchedulesOutputMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSnapshotSchedulesOutputMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeTableRestoreStatusMessage {
  /**
   * <p>The Amazon Redshift cluster that the table is being restored to.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The identifier of the table restore request to return status for. If you don't
   *             specify a <code>TableRestoreRequestId</code> value, then
   *                 <code>DescribeTableRestoreStatus</code> returns the status of all in-progress table
   *             restore requests.</p>
   */
  TableRestoreRequestId?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *             than the specified <code>MaxRecords</code> value, a pagination token called a marker is
   *             included in the response so that the remaining results can be retrieved.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *                 <code>DescribeTableRestoreStatus</code> request. If this parameter is specified, the
   *             response includes only records beyond the marker, up to the value specified by the
   *                 <code>MaxRecords</code> parameter.</p>
   */
  Marker?: string;
}

export namespace DescribeTableRestoreStatusMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTableRestoreStatusMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface TableRestoreStatusMessage {
  /**
   * <p>A list of status details for one or more table restore requests.</p>
   */
  TableRestoreStatusDetails?: TableRestoreStatus[];

  /**
   * <p>A pagination token that can be used in a subsequent <a>DescribeTableRestoreStatus</a> request.</p>
   */
  Marker?: string;
}

export namespace TableRestoreStatusMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TableRestoreStatusMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeTagsMessage {
  /**
   * <p>The Amazon Resource Name (ARN) for which you want to describe the tag or tags. For
   *             example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>. </p>
   */
  ResourceName?: string;

  /**
   * <p>The type of resource with which you want to view tags. Valid resource types are: </p>
   *         <ul>
   *             <li>
   *                 <p>Cluster</p>
   *             </li>
   *             <li>
   *                 <p>CIDR/IP</p>
   *             </li>
   *             <li>
   *                 <p>EC2 security group</p>
   *             </li>
   *             <li>
   *                 <p>Snapshot</p>
   *             </li>
   *             <li>
   *                 <p>Cluster security group</p>
   *             </li>
   *             <li>
   *                 <p>Subnet group</p>
   *             </li>
   *             <li>
   *                 <p>HSM connection</p>
   *             </li>
   *             <li>
   *                 <p>HSM certificate</p>
   *             </li>
   *             <li>
   *                 <p>Parameter group</p>
   *             </li>
   *             <li>
   *                 <p>Snapshot copy grant</p>
   *             </li>
   *          </ul>
   *         <p>For more information about Amazon Redshift resource types and constructing ARNs, go to
   *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-iam-access-control-specify-actions">Specifying Policy Elements: Actions, Effects, Resources, and Principals</a> in
   *             the Amazon Redshift Cluster Management Guide. </p>
   */
  ResourceType?: string;

  /**
   * <p>The maximum number or response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned <code>marker</code> value.
   *         </p>
   */
  MaxRecords?: number;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>marker</code> parameter
   *             and retrying the command. If the <code>marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching resources that are
   *             associated with the specified key or keys. For example, suppose that you have resources
   *             tagged with keys called <code>owner</code> and <code>environment</code>. If you specify
   *             both of these tag keys in the request, Amazon Redshift returns a response with all resources
   *             that have either or both of these tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching resources that are
   *             associated with the specified value or values. For example, suppose that you have
   *             resources tagged with values called <code>admin</code> and <code>test</code>. If you
   *             specify both of these tag values in the request, Amazon Redshift returns a response with all
   *             resources that have either or both of these tag values associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeTagsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTagsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface TaggedResourceListMessage {
  /**
   * <p>A list of tags with their associated resources.</p>
   */
  TaggedResources?: TaggedResource[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;
}

export namespace TaggedResourceListMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaggedResourceListMessage): any => ({
    ...obj,
  });
}

export interface DescribeUsageLimitsMessage {
  /**
   * <p>The identifier of the usage limit to describe.</p>
   */
  UsageLimitId?: string;

  /**
   * <p>The identifier of the cluster for which you want to describe usage limits.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The feature type for which you want to describe usage limits.</p>
   */
  FeatureType?: UsageLimitFeatureType | string;

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
   *             records. When the results of a <a>DescribeUsageLimits</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching usage limit objects
   *             that are associated with the specified key or keys. For example, suppose that you
   *             have parameter groups that are tagged with keys called <code>owner</code> and
   *             <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the usage limit objects have either or both of these
   *             tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching usage limit objects
   *             that are associated with the specified tag value or values. For example, suppose
   *             that you have parameter groups that are tagged with values called <code>admin</code> and
   *             <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the usage limit objects that have either or both of these tag
   *             values associated with them.</p>
   */
  TagValues?: string[];
}

export namespace DescribeUsageLimitsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUsageLimitsMessage): any => ({
    ...obj,
  });
}

export interface UsageLimitList {
  /**
   * <p>Contains the output from the <a>DescribeUsageLimits</a>
   *             action. </p>
   */
  UsageLimits?: UsageLimit[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;
}

export namespace UsageLimitList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsageLimitList): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DisableLoggingMessage {
  /**
   * <p>The identifier of the cluster on which logging is to be stopped.</p>
   *         <p>Example: <code>examplecluster</code>
   *         </p>
   */
  ClusterIdentifier: string | undefined;
}

export namespace DisableLoggingMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableLoggingMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DisableSnapshotCopyMessage {
  /**
   * <p>The unique identifier of the source cluster that you want to disable copying of
   *             snapshots to a destination region.</p>
   *         <p>Constraints: Must be the valid name of an existing cluster that has cross-region
   *             snapshot copy enabled.</p>
   */
  ClusterIdentifier: string | undefined;
}

export namespace DisableSnapshotCopyMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableSnapshotCopyMessage): any => ({
    ...obj,
  });
}

export interface DisableSnapshotCopyResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace DisableSnapshotCopyResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableSnapshotCopyResult): any => ({
    ...obj,
  });
}

export interface DisassociateDataShareConsumerMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare to remove association for. </p>
   */
  DataShareArn: string | undefined;

  /**
   * <p>A value that specifies whether association for the datashare is removed from the
   *             entire account.</p>
   */
  DisassociateEntireAccount?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the consumer that association for
   *             the datashare is removed from.</p>
   */
  ConsumerArn?: string;

  /**
   * <p>From a datashare consumer account, removes association of a datashare from all the existing and future namespaces in the specified Amazon Web Services Region.</p>
   */
  ConsumerRegion?: string;
}

export namespace DisassociateDataShareConsumerMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateDataShareConsumerMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface EnableLoggingMessage {
  /**
   * <p>The identifier of the cluster on which logging is to be started.</p>
   *         <p>Example: <code>examplecluster</code>
   *         </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of an existing S3 bucket where the log files are to be stored.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be in the same region as the cluster</p>
   *             </li>
   *             <li>
   *                 <p>The cluster must have read bucket and put object permissions</p>
   *             </li>
   *          </ul>
   */
  BucketName?: string;

  /**
   * <p>The prefix applied to the log file names.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Cannot exceed 512 characters</p>
   *             </li>
   *             <li>
   *                 <p>Cannot contain spaces( ), double quotes ("), single quotes ('), a backslash
   *                     (\), or control characters. The hexadecimal codes for invalid characters are: </p>
   *                 <ul>
   *                   <li>
   *                         <p>x00 to x20</p>
   *                     </li>
   *                   <li>
   *                         <p>x22</p>
   *                     </li>
   *                   <li>
   *                         <p>x27</p>
   *                     </li>
   *                   <li>
   *                         <p>x5c</p>
   *                     </li>
   *                   <li>
   *                         <p>x7f or larger</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  S3KeyPrefix?: string;

  /**
   * <p>The log destination type. An enum with possible values of <code>s3</code> and <code>cloudwatch</code>.</p>
   */
  LogDestinationType?: LogDestinationType | string;

  /**
   * <p>The collection of exported log types. Log types include the connection log, user log and user activity log.</p>
   */
  LogExports?: string[];
}

export namespace EnableLoggingMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableLoggingMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface EnableSnapshotCopyMessage {
  /**
   * <p>The unique identifier of the source cluster to copy snapshots from.</p>
   *         <p>Constraints: Must be the valid name of an existing cluster that does not already
   *             have cross-region snapshot copy enabled.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The destination Amazon Web Services Region that you want to copy snapshots to.</p>
   *         <p>Constraints: Must be the name of a valid Amazon Web Services Region. For more information, see
   *                 <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region">Regions and Endpoints</a> in the Amazon Web Services General Reference.
   *         </p>
   */
  DestinationRegion: string | undefined;

  /**
   * <p>The number of days to retain automated snapshots in the destination region after
   *             they are copied from the source region.</p>
   *         <p>Default: 7.</p>
   *         <p>Constraints: Must be at least 1 and no more than 35.</p>
   */
  RetentionPeriod?: number;

  /**
   * <p>The name of the snapshot copy grant to use when snapshots of an Amazon Web Services KMS-encrypted
   *             cluster are copied to the destination region.</p>
   */
  SnapshotCopyGrantName?: string;

  /**
   * <p>The number of days to retain newly copied snapshots in the destination Amazon Web Services Region
   *             after they are copied from the source Amazon Web Services Region. If the value is -1, the manual
   *             snapshot is retained indefinitely. </p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;
}

export namespace EnableSnapshotCopyMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableSnapshotCopyMessage): any => ({
    ...obj,
  });
}

export interface EnableSnapshotCopyResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace EnableSnapshotCopyResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableSnapshotCopyResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request parameters to get cluster credentials.</p>
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
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">CREATE USER</a> in the Amazon
   *             Redshift Database Developer Guide. </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 64 alphanumeric characters or hyphens. The user name can't be
   *                         <code>PUBLIC</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain only lowercase letters, numbers, underscore, plus sign, period
   *                     (dot), at symbol (@), or hyphen.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Must not contain a colon ( : ) or slash ( / ). </p>
   *             </li>
   *             <li>
   *                 <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon
   *                     Redshift Database Developer Guide.</p>
   *             </li>
   *          </ul>
   */
  DbUser: string | undefined;

  /**
   * <p>The name of a database that <code>DbUser</code> is authorized to log on to. If
   *                 <code>DbName</code> is not specified, <code>DbUser</code> can log on to any existing
   *             database.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 64 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>Must contain only lowercase letters, numbers, underscore, plus sign, period
   *                     (dot), at symbol (@), or hyphen.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Must not contain a colon ( : ) or slash ( / ). </p>
   *             </li>
   *             <li>
   *                 <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon
   *                     Redshift Database Developer Guide.</p>
   *             </li>
   *          </ul>
   */
  DbName?: string;

  /**
   * <p>The unique identifier of the cluster that contains the database for which you are
   *             requesting credentials. This parameter is case sensitive.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The number of seconds until the returned temporary password expires.</p>
   *         <p>Constraint: minimum 900, maximum 3600.</p>
   *         <p>Default: 900</p>
   */
  DurationSeconds?: number;

  /**
   * <p>Create a database user with the name specified for the user named in
   *                 <code>DbUser</code> if one does not exist.</p>
   */
  AutoCreate?: boolean;

  /**
   * <p>A list of the names of existing database groups that the user named in
   *                 <code>DbUser</code> will join for the current session, in addition to any group
   *             memberships for an existing user. If not specified, a new user is added only to
   *             PUBLIC.</p>
   *         <p>Database group name constraints</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 64 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>Must contain only lowercase letters, numbers, underscore, plus sign, period
   *                     (dot), at symbol (@), or hyphen.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Must not contain a colon ( : ) or slash ( / ). </p>
   *             </li>
   *             <li>
   *                 <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon
   *                     Redshift Database Developer Guide.</p>
   *             </li>
   *          </ul>
   */
  DbGroups?: string[];
}

export namespace GetClusterCredentialsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetClusterCredentialsMessage): any => ({
    ...obj,
  });
}

export interface GetClusterCredentialsWithIAMMessage {
  /**
   * <p>The name of the database for which you are requesting credentials.
   *             If the database name is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name.
   *             If the database name is not specified, access to all databases is allowed.</p>
   */
  DbName?: string;

  /**
   * <p>The unique identifier of the cluster that contains the database for which you are
   *             requesting credentials. </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The number of seconds until the returned temporary password expires.</p>
   *         <p>Range: 900-3600. Default: 900.</p>
   */
  DurationSeconds?: number;
}

export namespace GetClusterCredentialsWithIAMMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetClusterCredentialsWithIAMMessage): any => ({
    ...obj,
  });
}

export interface GetReservedNodeExchangeConfigurationOptionsInputMessage {
  /**
   * <p>The action type of the reserved-node configuration. The action type can be an exchange initiated from either a snapshot or a resize.</p>
   */
  ActionType: ReservedNodeExchangeActionType | string | undefined;

  /**
   * <p>The identifier for the cluster that is the source for a reserved-node exchange.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The identifier for the snapshot that is the source for the reserved-node exchange.</p>
   */
  SnapshotIdentifier?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>Marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous <code>GetReservedNodeExchangeConfigurationOptions</code> request. If this
   *             parameter is specified, the response includes only records beyond the marker, up to the value
   *             specified by the <code>MaxRecords</code> parameter. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request.</p>
   */
  Marker?: string;
}

export namespace GetReservedNodeExchangeConfigurationOptionsInputMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReservedNodeExchangeConfigurationOptionsInputMessage): any => ({
    ...obj,
  });
}

export interface GetReservedNodeExchangeConfigurationOptionsOutputMessage {
  /**
   * <p>A pagination token provided by a previous <code>GetReservedNodeExchangeConfigurationOptions</code> request.</p>
   */
  Marker?: string;

  /**
   * <p>the configuration options for the reserved-node
   *             exchange. These options include information about the source reserved node and target reserved
   *             node. Details include the node type, the price, the node count, and the offering
   *             type.</p>
   */
  ReservedNodeConfigurationOptionList?: ReservedNodeConfigurationOption[];
}

export namespace GetReservedNodeExchangeConfigurationOptionsOutputMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReservedNodeExchangeConfigurationOptionsOutputMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface GetReservedNodeExchangeOfferingsInputMessage {
  /**
   * <p>A string representing the node identifier for the DC1 Reserved Node to be
   *             exchanged.</p>
   */
  ReservedNodeId: string | undefined;

  /**
   * <p>An integer setting the maximum number of ReservedNodeOfferings to
   *             retrieve.</p>
   */
  MaxRecords?: number;

  /**
   * <p>A value that indicates the starting point for the next set of
   *             ReservedNodeOfferings.</p>
   */
  Marker?: string;
}

export namespace GetReservedNodeExchangeOfferingsInputMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReservedNodeExchangeOfferingsInputMessage): any => ({
    ...obj,
  });
}

export interface GetReservedNodeExchangeOfferingsOutputMessage {
  /**
   * <p>An optional parameter that specifies the starting point for returning a set of
   *             response records. When the results of a <code>GetReservedNodeExchangeOfferings</code>
   *             request exceed the value specified in MaxRecords, Amazon Redshift returns a value in the
   *             marker field of the response. You can retrieve the next set of response records by
   *             providing the returned marker value in the marker parameter and retrying the request.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>Returns an array of <a>ReservedNodeOffering</a> objects.</p>
   */
  ReservedNodeOfferings?: ReservedNodeOffering[];
}

export namespace GetReservedNodeExchangeOfferingsOutputMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReservedNodeExchangeOfferingsOutputMessage): any => ({
    ...obj,
  });
}

export interface ModifyAquaInputMessage {
  /**
   * <p>The identifier of the cluster to be modified.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The new value of AQUA configuration status. Possible values include the following.</p>
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

export namespace ModifyAquaInputMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyAquaInputMessage): any => ({
    ...obj,
  });
}

export interface ModifyAquaOutputMessage {
  /**
   * <p>The updated AQUA configuration of the cluster. </p>
   */
  AquaConfiguration?: AquaConfiguration;
}

export namespace ModifyAquaOutputMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyAquaOutputMessage): any => ({
    ...obj,
  });
}

export interface ModifyAuthenticationProfileMessage {
  /**
   * <p>The name of the authentication profile to replace.</p>
   */
  AuthenticationProfileName: string | undefined;

  /**
   * <p>The new content of the authentication profile in JSON format.
   *             The maximum length of the JSON string is determined by a quota for your account.</p>
   */
  AuthenticationProfileContent: string | undefined;
}

export namespace ModifyAuthenticationProfileMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyAuthenticationProfileMessage): any => ({
    ...obj,
  });
}

export interface ModifyAuthenticationProfileResult {
  /**
   * <p>The name of the authentication profile that was replaced.</p>
   */
  AuthenticationProfileName?: string;

  /**
   * <p>The updated content of the authentication profile in JSON format.</p>
   */
  AuthenticationProfileContent?: string;
}

export namespace ModifyAuthenticationProfileResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyAuthenticationProfileResult): any => ({
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
   * <p>The new password for the cluster admin user. This change is asynchronously applied
   *             as soon as possible. Between the time of the request and the completion of the request,
   *             the <code>MasterUserPassword</code> element exists in the
   *                 <code>PendingModifiedValues</code> element of the operation response. </p>
   *         <note>
   *             <p>Operations never return the password, so this operation provides a way to
   *                 regain access to the admin user account for a cluster if the password is
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
   *                 <p>Can be any printable ASCII character (ASCII code 33-126) except <code>'</code>
   *                     (single quote), <code>"</code> (double quote), <code>\</code>, <code>/</code>, or <code>@</code>.</p>
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
   *
   *         <p>You can't disable automated snapshots for RA3 node types. Set the automated retention period from 1-35 days.</p>
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
   *                <p>Must be unique for all clusters within an Amazon Web Services account.</p>
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
   * <p>The Key Management Service (KMS) key ID of the encryption key that you want to use
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyClusterResult): any => ({
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   *             Amazon Resource Name (ARN) format. </p>
   */
  AddIamRoles?: string[];

  /**
   * <p>Zero or more IAM roles in ARN format to disassociate from the cluster. </p>
   */
  RemoveIamRoles?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was last modified.</p>
   */
  DefaultIamRoleArn?: string;
}

export namespace ModifyClusterIamRolesMessage {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyClusterSubnetGroupResult): any => ({
    ...obj,
  });
}

export interface ModifyEndpointAccessMessage {
  /**
   * <p>The endpoint to be modified.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The complete list of VPC security groups associated with the endpoint after the endpoint is modified.</p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace ModifyEndpointAccessMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyEndpointAccessMessage): any => ({
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
   * <p>A Boolean value indicating if the subscription is enabled. <code>true</code>
   *             indicates the subscription is enabled </p>
   */
  Enabled?: boolean;
}

export namespace ModifyEventSubscriptionMessage {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   *             period for either automated or manual snapshots that are copied to a destination Amazon Web Services Region.</p>
   *         <p>Constraints: Must be the valid name of an existing cluster that has cross-region
   *             snapshot copy enabled.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The number of days to retain automated snapshots in the destination Amazon Web Services Region
   *             after they are copied from the source Amazon Web Services Region.</p>
   *         <p>By default, this only changes the retention period of copied automated snapshots. </p>
   *         <p>If you decrease the retention period for automated snapshots that are copied to a
   *             destination Amazon Web Services Region, Amazon Redshift deletes any existing automated snapshots that were
   *             copied to the destination Amazon Web Services Region and that fall outside of the new retention
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifySnapshotCopyRetentionPeriodResult): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifySnapshotScheduleMessage): any => ({
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PurchaseReservedNodeOfferingResult): any => ({
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootClusterResult): any => ({
    ...obj,
  });
}

export interface RejectDataShareMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare to reject.</p>
   */
  DataShareArn: string | undefined;
}

export namespace RejectDataShareMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RejectDataShareMessage): any => ({
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   *                <p>Must be unique for all clusters within an Amazon Web Services account.</p>
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
   * <p>The Amazon Web Services account used to create or copy the snapshot. Required if you are
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
   *
   *         <p>You can't disable automated snapshots for RA3 node types. Set the automated retention period from 1-35 days.</p>
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
   * <p>The Key Management Service (KMS) key ID of the encryption key that encrypts data in the cluster
   *             restored from a shared snapshot. You can also provide
   *             the key ID when you restore from an unencrypted snapshot to an encrypted cluster in
   *             the same account. Additionally, you can specify a new KMS key ID when you restore from an encrypted
   *             snapshot in the same account in order to change it. In that case, the restored cluster is encrypted
   *             with the new KMS key ID.</p>
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
   * <p>A list of Identity and Access Management (IAM) roles that can be used by the
   *             cluster to access other Amazon Web Services services. You must supply the IAM roles in their Amazon
   *             Resource Name (ARN) format. </p>
   *         <p>The maximum number of IAM roles that you can associate is subject to a quota.
   *             For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a>
   *             in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
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

  /**
   * <p>The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored. Possible values include the following.</p>
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

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was last modified while it was restored from a snapshot.</p>
   */
  DefaultIamRoleArn?: string;

  /**
   * <p>The identifier of the target reserved node offering.</p>
   */
  ReservedNodeId?: string;

  /**
   * <p>The identifier of the target reserved node offering.</p>
   */
  TargetReservedNodeOfferingId?: string;

  /**
   * <p>Enables support for restoring an unencrypted snapshot to a cluster encrypted
   *             with Key Management Service (KMS) and a customer managed key.</p>
   */
  Encrypted?: boolean;
}

export namespace RestoreFromClusterSnapshotMessage {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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

  /**
   * <p>Indicates whether name identifiers for database, schema, and table are case sensitive.
   *             If <code>true</code>, the names are case sensitive.
   *             If <code>false</code> (default), the names are not case sensitive.</p>
   */
  EnableCaseSensitiveIdentifier?: boolean;
}

export namespace RestoreTableFromClusterSnapshotMessage {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>The Amazon Web Services account number of the owner of the security group specified in the
   *                 <code>EC2SecurityGroupName</code> parameter. The Amazon Web Services access key ID is not an
   *             acceptable value. If <code>EC2SecurityGroupOwnerId</code> is specified,
   *                 <code>EC2SecurityGroupName</code> must also be provided. and <code>CIDRIP</code>
   *             cannot be provided. </p>
   *         <p>Example: <code>111122223333</code>
   *         </p>
   */
  EC2SecurityGroupOwnerId?: string;
}

export namespace RevokeClusterSecurityGroupIngressMessage {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeClusterSecurityGroupIngressResult): any => ({
    ...obj,
  });
}

export interface RevokeEndpointAccessMessage {
  /**
   * <p>The cluster to revoke access from.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The Amazon Web Services account ID whose access is to be revoked.</p>
   */
  Account?: string;

  /**
   * <p>The virtual private cloud (VPC) identifiers for which access is to be revoked.</p>
   */
  VpcIds?: string[];

  /**
   * <p>Indicates whether to force the revoke action.
   *            If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.</p>
   */
  Force?: boolean;
}

export namespace RevokeEndpointAccessMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeEndpointAccessMessage): any => ({
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
   * <p>The identifier of the Amazon Web Services account that can no longer restore the specified
   *             snapshot.</p>
   */
  AccountWithRestoreAccess: string | undefined;
}

export namespace RevokeSnapshotAccessMessage {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RotateEncryptionKeyResult): any => ({
    ...obj,
  });
}

export interface UpdatePartnerStatusInputMessage {
  /**
   * <p>The Amazon Web Services account ID that owns the cluster.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The cluster identifier of the cluster whose partner integration status is being updated.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the database whose partner integration status is being updated.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partner whose integration status is being updated.</p>
   */
  PartnerName: string | undefined;

  /**
   * <p>The value of the updated status.</p>
   */
  Status: PartnerIntegrationStatus | string | undefined;

  /**
   * <p>The status message provided by the partner.</p>
   */
  StatusMessage?: string;
}

export namespace UpdatePartnerStatusInputMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePartnerStatusInputMessage): any => ({
    ...obj,
  });
}
