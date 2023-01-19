// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { OpenSearchServiceException as __BaseException } from "./OpenSearchServiceException";

/**
 * <p>Container for the parameters to the <code>AcceptInboundConnection</code> operation.</p>
 */
export interface AcceptInboundConnectionRequest {
  /**
   * <p>The ID of the inbound connection to accept.</p>
   */
  ConnectionId: string | undefined;
}

export enum InboundConnectionStatusCode {
  ACTIVE = "ACTIVE",
  APPROVED = "APPROVED",
  DELETED = "DELETED",
  DELETING = "DELETING",
  PENDING_ACCEPTANCE = "PENDING_ACCEPTANCE",
  PROVISIONING = "PROVISIONING",
  REJECTED = "REJECTED",
  REJECTING = "REJECTING",
}

/**
 * <p>The status of an inbound cross-cluster connection for OpenSearch Service.</p>
 */
export interface InboundConnectionStatus {
  /**
   * <p>The status code for the connection. Can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>PENDING_ACCEPTANCE</b> - Inbound connection is not yet
   *      accepted by the remote domain owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>APPROVED</b>: Inbound connection is pending acceptance by the
   *      remote domain owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PROVISIONING</b>: Inbound connection is being
   *      provisioned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b>: Inbound connection is active and ready to
   *      use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>REJECTING</b>: Inbound connection rejection is in
   *      process.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>REJECTED</b>: Inbound connection is rejected.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETING</b>: Inbound connection deletion is in
   *      progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETED</b>: Inbound connection is deleted and can no longer
   *      be used.</p>
   *             </li>
   *          </ul>
   */
  StatusCode?: InboundConnectionStatusCode | string;

  /**
   * <p>Information about the connection.</p>
   */
  Message?: string;
}

/**
 * <p>Information about an Amazon OpenSearch Service domain.</p>
 */
export interface AWSDomainInformation {
  /**
   * <p>The Amazon Web Services account ID of the domain owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>Name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the domain is located.</p>
   */
  Region?: string;
}

/**
 * <p>Container for information about an OpenSearch Service domain.</p>
 */
export interface DomainInformationContainer {
  /**
   * <p>Information about an Amazon OpenSearch Service domain.</p>
   */
  AWSDomainInformation?: AWSDomainInformation;
}

/**
 * <p>Describes an inbound cross-cluster connection for Amazon OpenSearch Service. For more
 *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search
 *     for Amazon OpenSearch Service</a>.</p>
 */
export interface InboundConnection {
  /**
   * <p>Information about the source (local) domain.</p>
   */
  LocalDomainInfo?: DomainInformationContainer;

  /**
   * <p>Information about the destination (remote) domain.</p>
   */
  RemoteDomainInfo?: DomainInformationContainer;

  /**
   * <p>The unique identifier of the connection.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The current status of the connection.</p>
   */
  ConnectionStatus?: InboundConnectionStatus;
}

/**
 * <p>Contains details about the accepted inbound connection.</p>
 */
export interface AcceptInboundConnectionResponse {
  /**
   * <p>Information about the accepted inbound connection.</p>
   */
  Connection?: InboundConnection;
}

/**
 * <p>An error occured because the client wanted to access a not supported operation. Gives http status code of
 *    409.</p>
 */
export class DisabledOperationException extends __BaseException {
  readonly name: "DisabledOperationException" = "DisabledOperationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DisabledOperationException, __BaseException>) {
    super({
      name: "DisabledOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DisabledOperationException.prototype);
  }
}

/**
 * <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of
 *    409.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>An error occurred because user does not have permissions to access the resource. Returns HTTP status code
 *    403.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

export enum OptionState {
  Active = "Active",
  Processing = "Processing",
  RequiresIndexDocuments = "RequiresIndexDocuments",
}

/**
 * <p>Provides the current status of an entity.</p>
 */
export interface OptionStatus {
  /**
   * <p>The timestamp when the entity was created.</p>
   */
  CreationDate: Date | undefined;

  /**
   * <p>The timestamp of the last time the entity was updated.</p>
   */
  UpdateDate: Date | undefined;

  /**
   * <p>The latest version of the entity.</p>
   */
  UpdateVersion?: number;

  /**
   * <p>The state of the entity.</p>
   */
  State: OptionState | string | undefined;

  /**
   * <p>Indicates whether the entity is being deleted.</p>
   */
  PendingDeletion?: boolean;
}

/**
 * <p>The configured access rules for the domain's search endpoint, and the current status of
 *    those rules.</p>
 */
export interface AccessPoliciesStatus {
  /**
   * <p>The access policy configured for the domain. Access policies can be resource-based,
   *    IP-based, or IAM-based. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-access-policies">Configuring access policies</a>.</p>
   */
  Options: string | undefined;

  /**
   * <p>The status of the access policy for the domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p> List of limits that are specific to a given instance type.</p>
 */
export interface AdditionalLimit {
  /**
   * <ul>
   *             <li>
   *                <p>
   *                   <code>MaximumNumberOfDataNodesSupported</code> - This attribute only applies to master
   *      nodes and specifies the maximum number of data nodes of a given instance type a master node can
   *      support.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaximumNumberOfDataNodesWithoutMasterNode</code> - This attribute only applies to
   *      data nodes and specifies the maximum number of data nodes of a given instance type can exist
   *      without a master node governing them.</p>
   *             </li>
   *          </ul>
   */
  LimitName?: string;

  /**
   * <p> The values of the additional instance type limits.</p>
   */
  LimitValues?: string[];
}

/**
 * <p>A tag (key-value pair) for an Amazon OpenSearch Service resource.</p>
 */
export interface Tag {
  /**
   * <p>The tag key. Tag keys must be unique for the domain to which they are attached.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value assigned to the corresponding tag key. Tag values can be null and don't have to be
   *    unique in a tag set. For example, you can have a key value pair in a tag set of <code>project :
   *     Trinity</code> and <code>cost-center : Trinity</code>
   *          </p>
   */
  Value: string | undefined;
}

/**
 * <p>Container for the parameters to the <code>AddTags</code> operation. Specifies the tags to
 *    attach to the domain.</p>
 */
export interface AddTagsRequest {
  /**
   * <p>Amazon Resource Name (ARN) for the OpenSearch Service domain to which you want to attach
   *    resource tags.</p>
   */
  ARN: string | undefined;

  /**
   * <p>List of resource tags.</p>
   */
  TagList: Tag[] | undefined;
}

/**
 * <p>An error occurred while processing the request.</p>
 */
export class BaseException extends __BaseException {
  readonly name: "BaseException" = "BaseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BaseException, __BaseException>) {
    super({
      name: "BaseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BaseException.prototype);
  }
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to
 *    the service) . Gives http status code of 500.</p>
 */
export class InternalException extends __BaseException {
  readonly name: "InternalException" = "InternalException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalException, __BaseException>) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalException.prototype);
  }
}

/**
 * <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * <p>Status of the advanced options for the specified domain. The following options are
 *    available: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>"rest.action.multi.allow_explicit_index": "true" | "false"</code> - Note the use of
 *      a string rather than a boolean. Specifies whether explicit references to indexes are allowed
 *      inside the body of HTTP requests. If you want to configure access policies for domain
 *      sub-resources, such as specific indexes and domain APIs, you must disable this property.
 *      Default is true.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>"indices.fielddata.cache.size": "80" </code> - Note the use of a string rather than
 *      a boolean. Specifies the percentage of heap space allocated to field data. Default is
 *      unbounded.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>"indices.query.bool.max_clause_count": "1024"</code> - Note the use of a string
 *      rather than a boolean. Specifies the maximum number of clauses allowed in a Lucene boolean
 *      query. Default is 1,024. Queries with more than the permitted number of clauses result in a
 *      <code>TooManyClauses</code> error.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>"override_main_response_version": "true" | "false"</code> - Note the use of a string
 *      rather than a boolean. Specifies whether the domain reports its version as 7.10 to allow
 *      Elasticsearch OSS clients and plugins to continue working with it. Default is false when
 *      creating a domain and true when upgrading a domain.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced cluster parameters</a>.</p>
 */
export interface AdvancedOptionsStatus {
  /**
   * <p>The status of advanced options for the specified domain.</p>
   */
  Options: Record<string, string> | undefined;

  /**
   * <p>The status of advanced options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The SAML identity povider information.</p>
 */
export interface SAMLIdp {
  /**
   * <p>The metadata of the SAML application, in XML format.</p>
   */
  MetadataContent: string | undefined;

  /**
   * <p>The unique entity ID of the application in the SAML identity provider.</p>
   */
  EntityId: string | undefined;
}

/**
 * <p>Describes the SAML application configured for the domain.</p>
 */
export interface SAMLOptionsOutput {
  /**
   * <p>True if SAML is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Describes the SAML identity provider's information.</p>
   */
  Idp?: SAMLIdp;

  /**
   * <p>The key used for matching the SAML subject attribute.</p>
   */
  SubjectKey?: string;

  /**
   * <p>The key used for matching the SAML roles attribute.</p>
   */
  RolesKey?: string;

  /**
   * <p>The duration, in minutes, after which a user session becomes inactive.</p>
   */
  SessionTimeoutMinutes?: number;
}

/**
 * <p>Container for fine-grained access control settings.</p>
 */
export interface AdvancedSecurityOptions {
  /**
   * <p>True if fine-grained access control is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>True if the internal user database is enabled.</p>
   */
  InternalUserDatabaseEnabled?: boolean;

  /**
   * <p>Container for information about the SAML configuration for OpenSearch Dashboards.</p>
   */
  SAMLOptions?: SAMLOptionsOutput;

  /**
   * <p>Date and time when the migration period will be disabled. Only necessary when <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-enabling-existing">enabling
   *     fine-grained access control on an existing domain</a>.</p>
   */
  AnonymousAuthDisableDate?: Date;

  /**
   * <p>True if a 30-day migration period is enabled, during which administrators can create role
   *    mappings. Only necessary when <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-enabling-existing">enabling
   *     fine-grained access control on an existing domain</a>.</p>
   */
  AnonymousAuthEnabled?: boolean;
}

/**
 * <p>Credentials for the master user for a domain.</p>
 */
export interface MasterUserOptions {
  /**
   * <p>Amazon Resource Name (ARN) for the master user. Only specify if
   *     <code>InternalUserDatabaseEnabled</code> is <code>false</code>.</p>
   */
  MasterUserARN?: string;

  /**
   * <p>User name for the master user. Only specify if <code>InternalUserDatabaseEnabled</code> is
   *     <code>true</code>.</p>
   */
  MasterUserName?: string;

  /**
   * <p>Password for the master user. Only specify if <code>InternalUserDatabaseEnabled</code> is
   *     <code>true</code>.</p>
   */
  MasterUserPassword?: string;
}

/**
 * <p>The SAML authentication configuration for an Amazon OpenSearch Service domain.</p>
 */
export interface SAMLOptionsInput {
  /**
   * <p>True to enable SAML authentication for a domain.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The SAML Identity Provider's information.</p>
   */
  Idp?: SAMLIdp;

  /**
   * <p>The SAML master user name, which is stored in the domain's internal user database.</p>
   */
  MasterUserName?: string;

  /**
   * <p>The backend role that the SAML master user is mapped to.</p>
   */
  MasterBackendRole?: string;

  /**
   * <p>Element of the SAML assertion to use for the user name. Default is
   *    <code>NameID</code>.</p>
   */
  SubjectKey?: string;

  /**
   * <p>Element of the SAML assertion to use for backend roles. Default is
   *    <code>roles</code>.</p>
   */
  RolesKey?: string;

  /**
   * <p>The duration, in minutes, after which a user session becomes inactive. Acceptable values are between 1 and 1440,
   *    and the default value is 60.</p>
   */
  SessionTimeoutMinutes?: number;
}

/**
 * <p>Options for enabling and configuring fine-grained access control. For more information, see
 *     <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html">Fine-grained access control in Amazon OpenSearch Service</a>.</p>
 */
export interface AdvancedSecurityOptionsInput {
  /**
   * <p>True to enable fine-grained access control.</p>
   */
  Enabled?: boolean;

  /**
   * <p>True to enable the internal user database.</p>
   */
  InternalUserDatabaseEnabled?: boolean;

  /**
   * <p>Container for information about the master user.</p>
   */
  MasterUserOptions?: MasterUserOptions;

  /**
   * <p>Container for information about the SAML configuration for OpenSearch Dashboards.</p>
   */
  SAMLOptions?: SAMLOptionsInput;

  /**
   * <p>True to enable a 30-day migration period during which administrators can create role
   *    mappings. Only necessary when <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-enabling-existing">enabling
   *     fine-grained access control on an existing domain</a>.</p>
   */
  AnonymousAuthEnabled?: boolean;
}

/**
 * <p>The status of fine-grained access control settings for a domain.</p>
 */
export interface AdvancedSecurityOptionsStatus {
  /**
   * <p>Container for fine-grained access control settings.</p>
   */
  Options: AdvancedSecurityOptions | undefined;

  /**
   * <p>Status of the fine-grained access control settings for a domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>Container for the request parameters to the <code>AssociatePackage</code> operation.</p>
 */
export interface AssociatePackageRequest {
  /**
   * <p>Internal ID of the package to associate with a domain. Use <code>DescribePackages</code> to find this value.
   *   </p>
   */
  PackageID: string | undefined;

  /**
   * <p>Name of the domain to associate the package with.</p>
   */
  DomainName: string | undefined;
}

export enum DomainPackageStatus {
  ACTIVE = "ACTIVE",
  ASSOCIATING = "ASSOCIATING",
  ASSOCIATION_FAILED = "ASSOCIATION_FAILED",
  DISSOCIATING = "DISSOCIATING",
  DISSOCIATION_FAILED = "DISSOCIATION_FAILED",
}

/**
 * <p>Additional information if the package is in an error state. Null otherwise.</p>
 */
export interface ErrorDetails {
  /**
   * <p>The type of error that occurred.</p>
   */
  ErrorType?: string;

  /**
   * <p>A message describing the error.</p>
   */
  ErrorMessage?: string;
}

export enum PackageType {
  TXT_DICTIONARY = "TXT-DICTIONARY",
}

/**
 * <p>Information about a package that is associated with a domain. For more information, see
 *     <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>.</p>
 */
export interface DomainPackageDetails {
  /**
   * <p>Internal ID of the package.</p>
   */
  PackageID?: string;

  /**
   * <p>User-specified name of the package.</p>
   */
  PackageName?: string;

  /**
   * <p>The type of package.</p>
   */
  PackageType?: PackageType | string;

  /**
   * <p>Timestamp of the most recent update to the package association status.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>Name of the domain that the package is associated with.</p>
   */
  DomainName?: string;

  /**
   * <p>State of the association.</p>
   */
  DomainPackageStatus?: DomainPackageStatus | string;

  /**
   * <p>The current version of the package.</p>
   */
  PackageVersion?: string;

  /**
   * <p>Denotes the location of the package on the OpenSearch Service cluster nodes. It's the same
   *    as <code>synonym_path</code> for dictionary files.</p>
   */
  ReferencePath?: string;

  /**
   * <p>Additional information if the package is in an error state. Null otherwise.</p>
   */
  ErrorDetails?: ErrorDetails;
}

/**
 * <p>Container for the response returned by the <code>AssociatePackage</code> operation.</p>
 */
export interface AssociatePackageResponse {
  /**
   * <p>Information about a package that is associated with a domain.</p>
   */
  DomainPackageDetails?: DomainPackageDetails;
}

/**
 * <p>An error occurred because the client attempts to remove a resource that is currently in use. Returns HTTP status
 *    code 409.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

export interface AuthorizeVpcEndpointAccessRequest {
  /**
   * <p>The name of the OpenSearch Service domain to provide access to.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The Amazon Web Services account ID to grant access to.</p>
   */
  Account: string | undefined;
}

export enum PrincipalType {
  AWS_ACCOUNT = "AWS_ACCOUNT",
  AWS_SERVICE = "AWS_SERVICE",
}

/**
 * <p>Information about an Amazon Web Services account or service that has access to an Amazon
 *    OpenSearch Service domain through the use of an interface VPC endpoint.</p>
 */
export interface AuthorizedPrincipal {
  /**
   * <p>The type of principal.</p>
   */
  PrincipalType?: PrincipalType | string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM principal</a> that is allowed access to the domain.</p>
   */
  Principal?: string;
}

export interface AuthorizeVpcEndpointAccessResponse {
  /**
   * <p>Information about the Amazon Web Services account or service that was provided access to the
   *    domain.</p>
   */
  AuthorizedPrincipal: AuthorizedPrincipal | undefined;
}

/**
 * <p>Container for the request parameters to cancel a service software update.</p>
 */
export interface CancelServiceSoftwareUpdateRequest {
  /**
   * <p>Name of the OpenSearch Service domain that you want to cancel the service software update
   *    on.</p>
   */
  DomainName: string | undefined;
}

export enum DeploymentStatus {
  COMPLETED = "COMPLETED",
  ELIGIBLE = "ELIGIBLE",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_ELIGIBLE = "NOT_ELIGIBLE",
  PENDING_UPDATE = "PENDING_UPDATE",
}

/**
 * <p>The current status of the service software for an Amazon OpenSearch Service domain. For more
 *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">Service software updates in
 *     Amazon OpenSearch Service</a>.</p>
 */
export interface ServiceSoftwareOptions {
  /**
   * <p>The current service software version present on the domain.</p>
   */
  CurrentVersion?: string;

  /**
   * <p>The new service software version, if one is available.</p>
   */
  NewVersion?: string;

  /**
   * <p>True if you're able to update your service software version. False if you can't update your
   *    service software version.</p>
   */
  UpdateAvailable?: boolean;

  /**
   * <p> True if you're able to cancel your service software version update. False if you can't
   *    cancel your service software update.</p>
   */
  Cancellable?: boolean;

  /**
   * <p>The status of your service software update.</p>
   */
  UpdateStatus?: DeploymentStatus | string;

  /**
   * <p>A description of the service software update status.</p>
   */
  Description?: string;

  /**
   * <p>The timestamp, in Epoch time, until which you can manually request a service software update. After this date,
   *    we automatically update your service software.</p>
   */
  AutomatedUpdateDate?: Date;

  /**
   * <p>True if a service software is never automatically updated. False if a service software is
   *    automatically updated after the automated update date.</p>
   */
  OptionalDeployment?: boolean;
}

/**
 * <p>Container for the response to a <code>CancelServiceSoftwareUpdate</code> operation. Contains
 *    the status of the update.</p>
 */
export interface CancelServiceSoftwareUpdateResponse {
  /**
   * <p>Container for the state of your domain relative to the latest service software.</p>
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}

export enum AutoTuneDesiredState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum TimeUnit {
  HOURS = "HOURS",
}

/**
 * <p>The duration of a maintenance schedule. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for
 *     Amazon OpenSearch Service</a>.</p>
 */
export interface Duration {
  /**
   * <p>Integer to specify the value of a maintenance schedule duration.</p>
   */
  Value?: number;

  /**
   * <p>The unit of measurement for the duration of a maintenance schedule.</p>
   */
  Unit?: TimeUnit | string;
}

/**
 * <p>The Auto-Tune maintenance schedule.
 *    For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch
 *     Service</a>.</p>
 */
export interface AutoTuneMaintenanceSchedule {
  /**
   * <p>The Epoch timestamp at which the Auto-Tune maintenance schedule starts.</p>
   */
  StartAt?: Date;

  /**
   * <p>The duration of the maintenance schedule. For example, <code>"Duration": {"Value": 2,
   *     "Unit": "HOURS"}</code>.</p>
   */
  Duration?: Duration;

  /**
   * <p>A cron expression for a recurring maintenance schedule during which Auto-Tune can deploy
   *    changes.</p>
   */
  CronExpressionForRecurrence?: string;
}

/**
 * <p>Options for configuring Auto-Tune. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch
 *     Service</a>.</p>
 */
export interface AutoTuneOptionsInput {
  /**
   * <p>Whether Auto-Tune is enabled or disabled.</p>
   */
  DesiredState?: AutoTuneDesiredState | string;

  /**
   * <p>A list of maintenance schedules during which Auto-Tune can deploy changes. Maintenance
   *    schedules are overwrite, not append. If your request includes no schedules, the request deletes
   *    all existing schedules. To preserve existing schedules, make a call to
   *     <code>DescribeDomainConfig</code> first and use the <code>MaintenanceSchedules</code> portion of
   *    the response as the basis for this section.</p>
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[];
}

/**
 * <p>Container for the parameters required to enable cold storage for an OpenSearch Service
 *    domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cold-storage.html">Cold storage for Amazon
 *     OpenSearch Service</a>.</p>
 */
export interface ColdStorageOptions {
  /**
   * <p>Whether to enable or disable cold storage on the domain.</p>
   */
  Enabled: boolean | undefined;
}

export enum OpenSearchPartitionInstanceType {
  c4_2xlarge_search = "c4.2xlarge.search",
  c4_4xlarge_search = "c4.4xlarge.search",
  c4_8xlarge_search = "c4.8xlarge.search",
  c4_large_search = "c4.large.search",
  c4_xlarge_search = "c4.xlarge.search",
  c5_18xlarge_search = "c5.18xlarge.search",
  c5_2xlarge_search = "c5.2xlarge.search",
  c5_4xlarge_search = "c5.4xlarge.search",
  c5_9xlarge_search = "c5.9xlarge.search",
  c5_large_search = "c5.large.search",
  c5_xlarge_search = "c5.xlarge.search",
  c6g_12xlarge_search = "c6g.12xlarge.search",
  c6g_2xlarge_search = "c6g.2xlarge.search",
  c6g_4xlarge_search = "c6g.4xlarge.search",
  c6g_8xlarge_search = "c6g.8xlarge.search",
  c6g_large_search = "c6g.large.search",
  c6g_xlarge_search = "c6g.xlarge.search",
  d2_2xlarge_search = "d2.2xlarge.search",
  d2_4xlarge_search = "d2.4xlarge.search",
  d2_8xlarge_search = "d2.8xlarge.search",
  d2_xlarge_search = "d2.xlarge.search",
  i2_2xlarge_search = "i2.2xlarge.search",
  i2_xlarge_search = "i2.xlarge.search",
  i3_16xlarge_search = "i3.16xlarge.search",
  i3_2xlarge_search = "i3.2xlarge.search",
  i3_4xlarge_search = "i3.4xlarge.search",
  i3_8xlarge_search = "i3.8xlarge.search",
  i3_large_search = "i3.large.search",
  i3_xlarge_search = "i3.xlarge.search",
  m3_2xlarge_search = "m3.2xlarge.search",
  m3_large_search = "m3.large.search",
  m3_medium_search = "m3.medium.search",
  m3_xlarge_search = "m3.xlarge.search",
  m4_10xlarge_search = "m4.10xlarge.search",
  m4_2xlarge_search = "m4.2xlarge.search",
  m4_4xlarge_search = "m4.4xlarge.search",
  m4_large_search = "m4.large.search",
  m4_xlarge_search = "m4.xlarge.search",
  m5_12xlarge_search = "m5.12xlarge.search",
  m5_24xlarge_search = "m5.24xlarge.search",
  m5_2xlarge_search = "m5.2xlarge.search",
  m5_4xlarge_search = "m5.4xlarge.search",
  m5_large_search = "m5.large.search",
  m5_xlarge_search = "m5.xlarge.search",
  m6g_12xlarge_search = "m6g.12xlarge.search",
  m6g_2xlarge_search = "m6g.2xlarge.search",
  m6g_4xlarge_search = "m6g.4xlarge.search",
  m6g_8xlarge_search = "m6g.8xlarge.search",
  m6g_large_search = "m6g.large.search",
  m6g_xlarge_search = "m6g.xlarge.search",
  r3_2xlarge_search = "r3.2xlarge.search",
  r3_4xlarge_search = "r3.4xlarge.search",
  r3_8xlarge_search = "r3.8xlarge.search",
  r3_large_search = "r3.large.search",
  r3_xlarge_search = "r3.xlarge.search",
  r4_16xlarge_search = "r4.16xlarge.search",
  r4_2xlarge_search = "r4.2xlarge.search",
  r4_4xlarge_search = "r4.4xlarge.search",
  r4_8xlarge_search = "r4.8xlarge.search",
  r4_large_search = "r4.large.search",
  r4_xlarge_search = "r4.xlarge.search",
  r5_12xlarge_search = "r5.12xlarge.search",
  r5_24xlarge_search = "r5.24xlarge.search",
  r5_2xlarge_search = "r5.2xlarge.search",
  r5_4xlarge_search = "r5.4xlarge.search",
  r5_large_search = "r5.large.search",
  r5_xlarge_search = "r5.xlarge.search",
  r6g_12xlarge_search = "r6g.12xlarge.search",
  r6g_2xlarge_search = "r6g.2xlarge.search",
  r6g_4xlarge_search = "r6g.4xlarge.search",
  r6g_8xlarge_search = "r6g.8xlarge.search",
  r6g_large_search = "r6g.large.search",
  r6g_xlarge_search = "r6g.xlarge.search",
  r6gd_12xlarge_search = "r6gd.12xlarge.search",
  r6gd_16xlarge_search = "r6gd.16xlarge.search",
  r6gd_2xlarge_search = "r6gd.2xlarge.search",
  r6gd_4xlarge_search = "r6gd.4xlarge.search",
  r6gd_8xlarge_search = "r6gd.8xlarge.search",
  r6gd_large_search = "r6gd.large.search",
  r6gd_xlarge_search = "r6gd.xlarge.search",
  t2_medium_search = "t2.medium.search",
  t2_micro_search = "t2.micro.search",
  t2_small_search = "t2.small.search",
  t3_2xlarge_search = "t3.2xlarge.search",
  t3_large_search = "t3.large.search",
  t3_medium_search = "t3.medium.search",
  t3_micro_search = "t3.micro.search",
  t3_nano_search = "t3.nano.search",
  t3_small_search = "t3.small.search",
  t3_xlarge_search = "t3.xlarge.search",
  t4g_medium_search = "t4g.medium.search",
  t4g_small_search = "t4g.small.search",
  ultrawarm1_large_search = "ultrawarm1.large.search",
  ultrawarm1_medium_search = "ultrawarm1.medium.search",
  ultrawarm1_xlarge_search = "ultrawarm1.xlarge.search",
}

export enum OpenSearchWarmPartitionInstanceType {
  ultrawarm1_large_search = "ultrawarm1.large.search",
  ultrawarm1_medium_search = "ultrawarm1.medium.search",
  ultrawarm1_xlarge_search = "ultrawarm1.xlarge.search",
}

/**
 * <p>The zone awareness configuration for an Amazon OpenSearch Service domain.</p>
 */
export interface ZoneAwarenessConfig {
  /**
   * <p>If you enabled multiple Availability Zones, this value is the number of zones that you want
   *    the domain to use. Valid values are <code>2</code> and <code>3</code>. If your domain is
   *    provisioned within a VPC, this value be equal to number of subnets.</p>
   */
  AvailabilityZoneCount?: number;
}

/**
 * <p>Container for the cluster configuration of an OpenSearch Service domain. For more
 *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html">Creating and managing Amazon OpenSearch Service domains</a>.</p>
 */
export interface ClusterConfig {
  /**
   * <p>Instance type of data nodes in the cluster.</p>
   */
  InstanceType?: OpenSearchPartitionInstanceType | string;

  /**
   * <p>Number of dedicated master nodes in the cluster. This number must be greater than 1,
   *    otherwise you receive a validation exception.</p>
   */
  InstanceCount?: number;

  /**
   * <p>Indicates whether dedicated master nodes are enabled for the cluster.<code>True</code> if
   *    the cluster will use a dedicated master node.<code>False</code> if the cluster will not.</p>
   */
  DedicatedMasterEnabled?: boolean;

  /**
   * <p>Indicates whether multiple Availability Zones are enabled. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-multiaz.html">Configuring a multi-AZ domain in Amazon OpenSearch Service</a>.</p>
   */
  ZoneAwarenessEnabled?: boolean;

  /**
   * <p>Container for zone awareness configuration options. Only required if
   *     <code>ZoneAwarenessEnabled</code> is <code>true</code>.</p>
   */
  ZoneAwarenessConfig?: ZoneAwarenessConfig;

  /**
   * <p>OpenSearch Service instance type of the dedicated master nodes in the cluster.</p>
   */
  DedicatedMasterType?: OpenSearchPartitionInstanceType | string;

  /**
   * <p>Number of dedicated master nodes in the cluster. This number must be greater than 1,
   *    otherwise you receive a validation exception.</p>
   */
  DedicatedMasterCount?: number;

  /**
   * <p>Whether to enable warm storage for the cluster.</p>
   */
  WarmEnabled?: boolean;

  /**
   * <p>The instance type for the cluster's warm nodes.</p>
   */
  WarmType?: OpenSearchWarmPartitionInstanceType | string;

  /**
   * <p>The number of warm nodes in the cluster.</p>
   */
  WarmCount?: number;

  /**
   * <p>Container for cold storage configuration options.</p>
   */
  ColdStorageOptions?: ColdStorageOptions;
}

/**
 * <p>Container for the parameters required to enable Cognito authentication for an OpenSearch
 *    Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html">Configuring Amazon Cognito
 *     authentication for OpenSearch Dashboards</a>.</p>
 */
export interface CognitoOptions {
  /**
   * <p>Whether to enable or disable Amazon Cognito authentication for OpenSearch Dashboards.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The Amazon Cognito user pool ID that you want OpenSearch Service to use for OpenSearch
   *    Dashboards authentication.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The Amazon Cognito identity pool ID that you want OpenSearch Service to use for OpenSearch
   *    Dashboards authentication.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>The <code>AmazonOpenSearchServiceCognitoAccess</code> role that allows OpenSearch Service to
   *    configure your user pool and identity pool.</p>
   */
  RoleArn?: string;
}

export enum TLSSecurityPolicy {
  POLICY_MIN_TLS_1_0_2019_07 = "Policy-Min-TLS-1-0-2019-07",
  POLICY_MIN_TLS_1_2_2019_07 = "Policy-Min-TLS-1-2-2019-07",
}

/**
 * <p>Options to configure a custom endpoint for an OpenSearch Service domain.</p>
 */
export interface DomainEndpointOptions {
  /**
   * <p>True to require that all traffic to the domain arrive over HTTPS.</p>
   */
  EnforceHTTPS?: boolean;

  /**
   * <p>Specify the TLS security policy to apply to the HTTPS endpoint of the domain.</p>
   *          <p> Can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Policy-Min-TLS-1-0-2019-07:</b> TLS security policy which supports
   *      TLS version 1.0 and higher.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Policy-Min-TLS-1-2-2019-07:</b> TLS security policy which supports
   *      only TLS version 1.2 </p>
   *             </li>
   *          </ul>
   */
  TLSSecurityPolicy?: TLSSecurityPolicy | string;

  /**
   * <p>Whether to enable a custom endpoint for the domain.</p>
   */
  CustomEndpointEnabled?: boolean;

  /**
   * <p>The fully qualified URL for the custom endpoint.</p>
   */
  CustomEndpoint?: string;

  /**
   * <p>The ARN for your security certificate, managed in Amazon Web Services Certificate Manager
   *    (ACM).</p>
   */
  CustomEndpointCertificateArn?: string;
}

export enum VolumeType {
  gp2 = "gp2",
  gp3 = "gp3",
  io1 = "io1",
  standard = "standard",
}

/**
 * <p>Container for the parameters required to enable EBS-based storage for an OpenSearch Service
 *    domain.</p>
 */
export interface EBSOptions {
  /**
   * <p>Indicates whether EBS volumes are attached to data nodes in an OpenSearch Service
   *    domain.</p>
   */
  EBSEnabled?: boolean;

  /**
   * <p>Specifies the type of EBS volumes attached to data nodes.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>Specifies the size (in GiB) of EBS volumes attached to data nodes.</p>
   */
  VolumeSize?: number;

  /**
   * <p>Specifies the baseline input/output (I/O) performance of EBS volumes attached to data nodes.
   *    Applicable only for the <code>gp3</code> and provisioned IOPS EBS volume types.</p>
   */
  Iops?: number;

  /**
   * <p>Specifies the throughput (in MiB/s) of the EBS volumes attached to data nodes. Applicable
   *    only for the <code>gp3</code> volume type.</p>
   */
  Throughput?: number;
}

/**
 * <p>Specifies whether the domain should encrypt data at rest, and if so, the Key Management
 *    Service (KMS) key to use. Can be used only to create a new domain, not update an existing
 *    one.</p>
 */
export interface EncryptionAtRestOptions {
  /**
   * <p>True to enable encryption at rest.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The KMS key ID. Takes the form <code>1a2a3a4-1a2a-3a4a-5a6a-1a2a3a4a5a6a</code>.</p>
   */
  KmsKeyId?: string;
}

export enum LogType {
  AUDIT_LOGS = "AUDIT_LOGS",
  ES_APPLICATION_LOGS = "ES_APPLICATION_LOGS",
  INDEX_SLOW_LOGS = "INDEX_SLOW_LOGS",
  SEARCH_SLOW_LOGS = "SEARCH_SLOW_LOGS",
}

/**
 * <p>Specifies whether the Amazon OpenSearch Service domain publishes the OpenSearch application
 *    and slow logs to Amazon CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createdomain-configure-slow-logs.html">Monitoring OpenSearch logs with Amazon CloudWatch Logs</a>.</p>
 *          <note>
 *             <p>After you enable log publishing, you still have to enable the collection of slow logs using
 *     the OpenSearch REST API.</p>
 *          </note>
 */
export interface LogPublishingOption {
  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch Logs group to publish logs to.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Whether the log should be published.</p>
   */
  Enabled?: boolean;
}

/**
 * <p>Enables or disables node-to-node encryption. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ntn.html">Node-to-node encryption for Amazon OpenSearch Service</a>.</p>
 */
export interface NodeToNodeEncryptionOptions {
  /**
   * <p>True to enable node-to-node encryption.</p>
   */
  Enabled?: boolean;
}

/**
 * <p>The time, in UTC format, when OpenSearch Service takes a daily automated snapshot of the
 *    specified domain. Default is <code>0</code> hours.</p>
 */
export interface SnapshotOptions {
  /**
   * <p>The time, in UTC format, when OpenSearch Service takes a daily automated snapshot of the
   *    specified domain. Default is <code>0</code> hours.</p>
   */
  AutomatedSnapshotStartHour?: number;
}

/**
 * <p>Options to specify the subnets and security groups for an Amazon OpenSearch Service VPC
 *    endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching your Amazon OpenSearch Service
 *     domains using a VPC</a>.</p>
 */
export interface VPCOptions {
  /**
   * <p>A list of subnet IDs associated with the VPC endpoints for the domain. If your domain uses
   *    multiple Availability Zones, you need to provide two subnet IDs, one per zone. Otherwise, provide
   *    only one.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The list of security group IDs associated with the VPC endpoints for the domain. If you do
   *    not provide a security group ID, OpenSearch Service uses the default security group for the VPC.</p>
   */
  SecurityGroupIds?: string[];
}

export interface CreateDomainRequest {
  /**
   * <p>Name of the OpenSearch Service domain to create. Domain names are unique across the domains
   *    owned by an account within an Amazon Web Services Region.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>String of format Elasticsearch_X.Y or OpenSearch_X.Y to specify the engine version for the
   *    OpenSearch Service domain. For example, <code>OpenSearch_1.0</code> or
   *     <code>Elasticsearch_7.9</code>. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomains">Creating
   *     and managing Amazon OpenSearch Service domains</a>.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Container for the cluster configuration of a domain.</p>
   */
  ClusterConfig?: ClusterConfig;

  /**
   * <p>Container for the parameters required to enable EBS-based storage for an OpenSearch Service
   *    domain.</p>
   */
  EBSOptions?: EBSOptions;

  /**
   * <p>Identity and Access Management (IAM) policy document specifying the access policies for the
   *    new domain.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>DEPRECATED. Container for the parameters required to configure automated snapshots of domain
   *    indexes.</p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * <p>Container for the values required to configure VPC access domains. If you don't specify
   *    these values, OpenSearch Service creates the domain with a public endpoint. For more information,
   *    see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching
   *     your Amazon OpenSearch Service domains using a VPC</a>.</p>
   */
  VPCOptions?: VPCOptions;

  /**
   * <p>Key-value pairs to configure Amazon Cognito authentication. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html">Configuring Amazon Cognito authentication for OpenSearch Dashboards</a>.</p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * <p>Key-value pairs to enable encryption at rest.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * <p>Enables node-to-node encryption.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * <p>Key-value pairs to specify advanced configuration options. The following key-value pairs are
   *    supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"rest.action.multi.allow_explicit_index": "true" | "false"</code> - Note the use of
   *      a string rather than a boolean. Specifies whether explicit references to indexes are allowed
   *      inside the body of HTTP requests. If you want to configure access policies for domain
   *      sub-resources, such as specific indexes and domain APIs, you must disable this property.
   *      Default is true.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"indices.fielddata.cache.size": "80" </code> - Note the use of a string rather than
   *      a boolean. Specifies the percentage of heap space allocated to field data. Default is
   *      unbounded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"indices.query.bool.max_clause_count": "1024"</code> - Note the use of a string
   *      rather than a boolean. Specifies the maximum number of clauses allowed in a Lucene boolean
   *      query. Default is 1,024. Queries with more than the permitted number of clauses result in a
   *       <code>TooManyClauses</code> error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"override_main_response_version": "true" | "false"</code> - Note the use of a string
   *      rather than a boolean. Specifies whether the domain reports its version as 7.10 to allow
   *      Elasticsearch OSS clients and plugins to continue working with it. Default is false when
   *      creating a domain and true when upgrading a domain.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced cluster parameters</a>.</p>
   */
  AdvancedOptions?: Record<string, string>;

  /**
   * <p>Key-value pairs to configure slow log publishing.</p>
   */
  LogPublishingOptions?: Record<string, LogPublishingOption>;

  /**
   * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
   *    traffic.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * <p>Options for fine-grained access control.</p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;

  /**
   * <p>List of tags to add to the domain upon creation.</p>
   */
  TagList?: Tag[];

  /**
   * <p>Options for Auto-Tune.</p>
   */
  AutoTuneOptions?: AutoTuneOptionsInput;
}

export enum AutoTuneState {
  DISABLED = "DISABLED",
  DISABLED_AND_ROLLBACK_COMPLETE = "DISABLED_AND_ROLLBACK_COMPLETE",
  DISABLED_AND_ROLLBACK_ERROR = "DISABLED_AND_ROLLBACK_ERROR",
  DISABLED_AND_ROLLBACK_IN_PROGRESS = "DISABLED_AND_ROLLBACK_IN_PROGRESS",
  DISABLED_AND_ROLLBACK_SCHEDULED = "DISABLED_AND_ROLLBACK_SCHEDULED",
  DISABLE_IN_PROGRESS = "DISABLE_IN_PROGRESS",
  ENABLED = "ENABLED",
  ENABLE_IN_PROGRESS = "ENABLE_IN_PROGRESS",
  ERROR = "ERROR",
}

/**
 * <p>The Auto-Tune settings for a domain, displayed when enabling or disabling Auto-Tune.</p>
 */
export interface AutoTuneOptionsOutput {
  /**
   * <p>The current state of Auto-Tune on the domain.</p>
   */
  State?: AutoTuneState | string;

  /**
   * <p>Any errors that occurred while enabling or disabling Auto-Tune.</p>
   */
  ErrorMessage?: string;
}

/**
 * <p>Container for information about a configuration change happening on a domain.</p>
 */
export interface ChangeProgressDetails {
  /**
   * <p>The ID of the configuration change.</p>
   */
  ChangeId?: string;

  /**
   * <p>A message corresponding to the status of the configuration change.</p>
   */
  Message?: string;
}

/**
 * <p>Information about the subnets and security groups for an Amazon OpenSearch Service domain
 *    provisioned within a virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching your
 *     Amazon OpenSearch Service domains using a VPC</a>. This information only exists if the
 *    domain was created with <code>VPCOptions</code>.</p>
 */
export interface VPCDerivedInfo {
  /**
   * <p>The ID for your VPC. Amazon VPC generates this value when you create a VPC.</p>
   */
  VPCId?: string;

  /**
   * <p>A list of subnet IDs associated with the VPC endpoints for the domain.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The list of Availability Zones associated with the VPC subnets.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The list of security group IDs associated with the VPC endpoints for the domain.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * <p>The current status of an OpenSearch Service domain.</p>
 */
export interface DomainStatus {
  /**
   * <p>Unique identifier for the domain.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>Name of the domain. Domain names are unique across all domains owned by the same account
   *    within an Amazon Web Services Region.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM identifiers
   *    </a> in the <i>AWS Identity and Access Management User Guide</i>.</p>
   */
  ARN: string | undefined;

  /**
   * <p>Creation status of an OpenSearch Service domain. True if domain creation is complete. False
   *    if domain creation is still in progress.</p>
   */
  Created?: boolean;

  /**
   * <p>Deletion status of an OpenSearch Service domain. True if domain deletion is complete. False
   *    if domain deletion is still in progress. Once deletion is complete, the status of the domain is
   *    no longer returned.</p>
   */
  Deleted?: boolean;

  /**
   * <p>Domain-specific endpoint used to submit index, search, and data upload requests to the
   *    domain.</p>
   */
  Endpoint?: string;

  /**
   * <p>The key-value pair that exists if the OpenSearch Service domain uses VPC endpoints.. Example
   *     <code>key, value</code>:
   *     <code>'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com'</code>.</p>
   */
  Endpoints?: Record<string, string>;

  /**
   * <p>The status of the domain configuration. True if OpenSearch Service is processing
   *    configuration changes. False if the configuration is active.</p>
   */
  Processing?: boolean;

  /**
   * <p>The status of a domain version upgrade to a new version of OpenSearch or Elasticsearch. True
   *    if OpenSearch Service is in the process of a version upgrade. False if the configuration is
   *    active.</p>
   */
  UpgradeProcessing?: boolean;

  /**
   * <p>Version of OpenSearch or Elasticsearch that the domain is running, in the format
   *     <code>Elasticsearch_X.Y</code> or <code>OpenSearch_X.Y</code>.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Container for the cluster configuration of the domain.</p>
   */
  ClusterConfig: ClusterConfig | undefined;

  /**
   * <p>Container for EBS-based storage settings for the domain.</p>
   */
  EBSOptions?: EBSOptions;

  /**
   * <p>Identity and Access Management (IAM) policy document specifying the access policies for the
   *    domain.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>DEPRECATED. Container for parameters required to configure automated snapshots of domain
   *    indexes.</p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * <p>The VPC configuration for the domain.</p>
   */
  VPCOptions?: VPCDerivedInfo;

  /**
   * <p>Key-value pairs to configure Amazon Cognito authentication for OpenSearch Dashboards.</p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * <p>Encryption at rest settings for the domain.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * <p>Whether node-to-node encryption is enabled or disabled.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * <p>Key-value pairs that specify advanced configuration options.</p>
   */
  AdvancedOptions?: Record<string, string>;

  /**
   * <p>Log publishing options for the domain.</p>
   */
  LogPublishingOptions?: Record<string, LogPublishingOption>;

  /**
   * <p>The current status of the domain's service software.</p>
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;

  /**
   * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
   *    traffic.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * <p>Settings for fine-grained access control.</p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptions;

  /**
   * <p>Auto-Tune settings for the domain.</p>
   */
  AutoTuneOptions?: AutoTuneOptionsOutput;

  /**
   * <p>Information about a configuration change happening on the domain.</p>
   */
  ChangeProgressDetails?: ChangeProgressDetails;
}

/**
 * <p>The result of a <code>CreateDomain</code> operation. Contains the status of the newly
 *    created domain.</p>
 */
export interface CreateDomainResponse {
  /**
   * <p>The status of the newly created domain.</p>
   */
  DomainStatus?: DomainStatus;
}

/**
 * <p>An exception for trying to create or access sub-resource that is either invalid or not supported. Gives http
 *    status code of 409.</p>
 */
export class InvalidTypeException extends __BaseException {
  readonly name: "InvalidTypeException" = "InvalidTypeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTypeException, __BaseException>) {
    super({
      name: "InvalidTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTypeException.prototype);
  }
}

/**
 * <p>An exception for creating a resource that already exists. Gives http status code of 400.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
  }
}

/**
 * <p>Container for the parameters to the <code>CreateOutboundConnection</code> operation.</p>
 */
export interface CreateOutboundConnectionRequest {
  /**
   * <p>Name and Region of the source (local) domain.</p>
   */
  LocalDomainInfo: DomainInformationContainer | undefined;

  /**
   * <p>Name and Region of the destination (remote) domain.</p>
   */
  RemoteDomainInfo: DomainInformationContainer | undefined;

  /**
   * <p>Name of the connection.</p>
   */
  ConnectionAlias: string | undefined;
}

export enum OutboundConnectionStatusCode {
  ACTIVE = "ACTIVE",
  APPROVED = "APPROVED",
  DELETED = "DELETED",
  DELETING = "DELETING",
  PENDING_ACCEPTANCE = "PENDING_ACCEPTANCE",
  PROVISIONING = "PROVISIONING",
  REJECTED = "REJECTED",
  REJECTING = "REJECTING",
  VALIDATING = "VALIDATING",
  VALIDATION_FAILED = "VALIDATION_FAILED",
}

/**
 * <p>The status of an outbound cross-cluster connection.</p>
 */
export interface OutboundConnectionStatus {
  /**
   * <p>The status code for the outbound connection. Can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>VALIDATING</b> - The outbound connection request is being
   *      validated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>VALIDATION_FAILED</b> - Validation failed for the connection
   *      request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PENDING_ACCEPTANCE</b>: Outbound connection request is validated and is
   *      not yet accepted by the remote domain owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>APPROVED</b> - Outbound connection has been approved by the remote domain
   *      owner for getting provisioned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PROVISIONING</b> - Outbound connection request is in process.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> - Outbound connection is active and ready to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>REJECTING</b> - Outbound connection rejection by remote domain owner is in
   *      progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>REJECTED</b> - Outbound connection request is rejected by remote domain
   *      owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETING</b> - Outbound connection deletion is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETED</b> - Outbound connection is deleted and can no longer be
   *      used.</p>
   *             </li>
   *          </ul>
   */
  StatusCode?: OutboundConnectionStatusCode | string;

  /**
   * <p>Verbose information for the outbound connection.</p>
   */
  Message?: string;
}

/**
 * <p>The result of a <code>CreateOutboundConnection</code> request. Contains details about the
 *    newly created cross-cluster connection.</p>
 */
export interface CreateOutboundConnectionResponse {
  /**
   * <p>Information about the source (local) domain.</p>
   */
  LocalDomainInfo?: DomainInformationContainer;

  /**
   * <p>Information about the destination (remote) domain.</p>
   */
  RemoteDomainInfo?: DomainInformationContainer;

  /**
   * <p>Name of the connection.</p>
   */
  ConnectionAlias?: string;

  /**
   * <p>The status of the connection.</p>
   */
  ConnectionStatus?: OutboundConnectionStatus;

  /**
   * <p>The unique identifier for the created outbound connection, which is used for subsequent
   *    operations on the connection.</p>
   */
  ConnectionId?: string;
}

/**
 * <p>The Amazon S3 location to import the package from.</p>
 */
export interface PackageSource {
  /**
   * <p>The name of the Amazon S3 bucket containing the package.</p>
   */
  S3BucketName?: string;

  /**
   * <p>Key (file name) of the package.</p>
   */
  S3Key?: string;
}

/**
 * <p>Container for request parameters to the <code>CreatePackage</code> operation.</p>
 */
export interface CreatePackageRequest {
  /**
   * <p>Unique name for the package.</p>
   */
  PackageName: string | undefined;

  /**
   * <p>Type of package.</p>
   */
  PackageType: PackageType | string | undefined;

  /**
   * <p>Description of the package.</p>
   */
  PackageDescription?: string;

  /**
   * <p>The Amazon S3 location from which to import the package.</p>
   */
  PackageSource: PackageSource | undefined;
}

export enum PackageStatus {
  AVAILABLE = "AVAILABLE",
  COPYING = "COPYING",
  COPY_FAILED = "COPY_FAILED",
  DELETED = "DELETED",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
  VALIDATING = "VALIDATING",
  VALIDATION_FAILED = "VALIDATION_FAILED",
}

/**
 * <p>Basic information about a package.</p>
 */
export interface PackageDetails {
  /**
   * <p>The unique identifier of the package.</p>
   */
  PackageID?: string;

  /**
   * <p>User-specified name of the package.</p>
   */
  PackageName?: string;

  /**
   * <p>The type of package.</p>
   */
  PackageType?: PackageType | string;

  /**
   * <p>User-specified description of the package.</p>
   */
  PackageDescription?: string;

  /**
   * <p>Current status of the package.</p>
   */
  PackageStatus?: PackageStatus | string;

  /**
   * <p>The timestamp when the package was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>Date and time when the package was last updated.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The package version.</p>
   */
  AvailablePackageVersion?: string;

  /**
   * <p>Additional information if the package is in an error state. Null otherwise.</p>
   */
  ErrorDetails?: ErrorDetails;
}

/**
 * <p>Container for the response returned by the <code>CreatePackage</code> operation.</p>
 */
export interface CreatePackageResponse {
  /**
   * <p>Basic information about an OpenSearch Service package.</p>
   */
  PackageDetails?: PackageDetails;
}

export interface CreateVpcEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the domain to create the endpoint for.</p>
   */
  DomainArn: string | undefined;

  /**
   * <p>Options to specify the subnets and security groups for the endpoint.</p>
   */
  VpcOptions: VPCOptions | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   */
  ClientToken?: string;
}

export enum VpcEndpointStatus {
  ACTIVE = "ACTIVE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

/**
 * <p>The connection endpoint for connecting to an Amazon OpenSearch Service domain through a
 *    proxy.</p>
 */
export interface VpcEndpoint {
  /**
   * <p>The unique identifier of the endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The creator of the endpoint.</p>
   */
  VpcEndpointOwner?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain associated with the endpoint.</p>
   */
  DomainArn?: string;

  /**
   * <p>Options to specify the subnets and security groups for an Amazon OpenSearch Service VPC
   *    endpoint.</p>
   */
  VpcOptions?: VPCDerivedInfo;

  /**
   * <p>The current status of the endpoint.</p>
   */
  Status?: VpcEndpointStatus | string;

  /**
   * <p>The connection endpoint ID for connecting to the domain.</p>
   */
  Endpoint?: string;
}

export interface CreateVpcEndpointResponse {
  /**
   * <p>Information about the newly created VPC endpoint.</p>
   */
  VpcEndpoint: VpcEndpoint | undefined;
}

/**
 * <p>Container for the parameters to the <code>DeleteDomain</code> operation.</p>
 */
export interface DeleteDomainRequest {
  /**
   * <p>The name of the domain you want to permanently delete.</p>
   */
  DomainName: string | undefined;
}

/**
 * <p>The results of a <code>DeleteDomain</code> request. Contains the status of the pending
 *    deletion, or a "domain not found" error if the domain and all of its resources have been deleted.</p>
 */
export interface DeleteDomainResponse {
  /**
   * <p>The status of the domain being deleted.</p>
   */
  DomainStatus?: DomainStatus;
}

/**
 * <p>Container for the parameters to the <code>DeleteInboundConnection</code> operation.</p>
 */
export interface DeleteInboundConnectionRequest {
  /**
   * <p>The ID of the inbound connection to permanently delete.</p>
   */
  ConnectionId: string | undefined;
}

/**
 * <p>The results of a <code>DeleteInboundConnection</code> operation. Contains details about the
 *    deleted inbound connection.</p>
 */
export interface DeleteInboundConnectionResponse {
  /**
   * <p>The deleted inbound connection.</p>
   */
  Connection?: InboundConnection;
}

/**
 * <p>Container for the parameters to the <code>DeleteOutboundConnection</code> operation.</p>
 */
export interface DeleteOutboundConnectionRequest {
  /**
   * <p>The ID of the outbound connection you want to permanently delete.</p>
   */
  ConnectionId: string | undefined;
}

/**
 * <p>Specifies details about an outbound cross-cluster connection.</p>
 */
export interface OutboundConnection {
  /**
   * <p>Information about the source (local) domain.</p>
   */
  LocalDomainInfo?: DomainInformationContainer;

  /**
   * <p>Information about the destination (remote) domain.</p>
   */
  RemoteDomainInfo?: DomainInformationContainer;

  /**
   * <p>Unique identifier of the connection.</p>
   */
  ConnectionId?: string;

  /**
   * <p>Name of the connection.</p>
   */
  ConnectionAlias?: string;

  /**
   * <p>Status of the connection.</p>
   */
  ConnectionStatus?: OutboundConnectionStatus;
}

/**
 * <p>Details about the deleted outbound connection.</p>
 */
export interface DeleteOutboundConnectionResponse {
  /**
   * <p>The deleted inbound connection.</p>
   */
  Connection?: OutboundConnection;
}

/**
 * <p>Deletes a package from OpenSearch Service. The package can't be associated with any
 *    OpenSearch Service domain.</p>
 */
export interface DeletePackageRequest {
  /**
   * <p>The internal ID of the package you want to delete. Use <code>DescribePackages</code> to find this value.</p>
   */
  PackageID: string | undefined;
}

/**
 * <p>Container for the response parameters to the <code>DeletePackage</code> operation.</p>
 */
export interface DeletePackageResponse {
  /**
   * <p> Information about the deleted package.</p>
   */
  PackageDetails?: PackageDetails;
}

export interface DeleteVpcEndpointRequest {
  /**
   * <p>The unique identifier of the endpoint.</p>
   */
  VpcEndpointId: string | undefined;
}

/**
 * <p>Summary information for an Amazon OpenSearch Service-managed VPC endpoint.</p>
 */
export interface VpcEndpointSummary {
  /**
   * <p>The unique identifier of the endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The creator of the endpoint.</p>
   */
  VpcEndpointOwner?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain associated with the endpoint.</p>
   */
  DomainArn?: string;

  /**
   * <p>The current status of the endpoint.</p>
   */
  Status?: VpcEndpointStatus | string;
}

export interface DeleteVpcEndpointResponse {
  /**
   * <p>Information about the deleted endpoint, including its current status (<code>DELETING</code>
   *    or <code>DELETE_FAILED</code>).</p>
   */
  VpcEndpointSummary: VpcEndpointSummary | undefined;
}

/**
 * <p>Container for the parameters to the <code>DescribeDomain</code> operation.</p>
 */
export interface DescribeDomainRequest {
  /**
   * <p>The name of the domain that you want information about.</p>
   */
  DomainName: string | undefined;
}

/**
 * <p>Contains the status of the domain specified in the request.</p>
 */
export interface DescribeDomainResponse {
  /**
   * <p>List that contains the status of each specified OpenSearch Service domain.</p>
   */
  DomainStatus: DomainStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code>DescribeDomainAutoTunes</code> operation.</p>
 */
export interface DescribeDomainAutoTunesRequest {
  /**
   * <p>Name of the domain that you want Auto-Tune details about.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If your initial <code>DescribeDomainAutoTunes</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribeDomainAutoTunes</code> operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

export enum ScheduledAutoTuneActionType {
  JVM_HEAP_SIZE_TUNING = "JVM_HEAP_SIZE_TUNING",
  JVM_YOUNG_GEN_TUNING = "JVM_YOUNG_GEN_TUNING",
}

export enum ScheduledAutoTuneSeverityType {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

/**
 * <p>Specifies details about a scheduled Auto-Tune action. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for
 *     Amazon OpenSearch Service</a>.</p>
 */
export interface ScheduledAutoTuneDetails {
  /**
   * <p>The date and time when the Auto-Tune action is scheduled for the domain.</p>
   */
  Date?: Date;

  /**
   * <p>The type of Auto-Tune action.</p>
   */
  ActionType?: ScheduledAutoTuneActionType | string;

  /**
   * <p>A description of the Auto-Tune action.</p>
   */
  Action?: string;

  /**
   * <p>The severity of the Auto-Tune action. Valid values are <code>LOW</code>,
   *    <code>MEDIUM</code>, and <code>HIGH</code>.</p>
   */
  Severity?: ScheduledAutoTuneSeverityType | string;
}

/**
 * <p>Specifies details about a scheduled Auto-Tune action. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for
 *     Amazon OpenSearch Service</a>.</p>
 */
export interface AutoTuneDetails {
  /**
   * <p>Container for details about a scheduled Auto-Tune action.</p>
   */
  ScheduledAutoTuneDetails?: ScheduledAutoTuneDetails;
}

export enum AutoTuneType {
  SCHEDULED_ACTION = "SCHEDULED_ACTION",
}

/**
 * <p>Information about an Auto-Tune action. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch
 *     Service</a>.</p>
 */
export interface AutoTune {
  /**
   * <p>The type of Auto-Tune action.</p>
   */
  AutoTuneType?: AutoTuneType | string;

  /**
   * <p>Details about an Auto-Tune action.</p>
   */
  AutoTuneDetails?: AutoTuneDetails;
}

/**
 * <p>The result of a <code>DescribeDomainAutoTunes</code> request.</p>
 */
export interface DescribeDomainAutoTunesResponse {
  /**
   * <p>The list of setting adjustments that Auto-Tune has made to the domain.</p>
   */
  AutoTunes?: AutoTune[];

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * <p>Container for the parameters to the <code>DescribeDomainChangeProgress</code>
 *    operation.</p>
 */
export interface DescribeDomainChangeProgressRequest {
  /**
   * <p>The name of the domain to get progress information for.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The specific change ID for which you want to get progress information. If omitted, the
   *    request returns information about the most recent configuration change.</p>
   */
  ChangeId?: string;
}

/**
 * <p>Progress details for each stage of a domain update.</p>
 */
export interface ChangeProgressStage {
  /**
   * <p>The name of the stage.</p>
   */
  Name?: string;

  /**
   * <p>The status of the stage.</p>
   */
  Status?: string;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * <p>The most recent updated timestamp of the stage.</p>
   */
  LastUpdated?: Date;
}

export enum OverallChangeStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
}

/**
 * <p>The progress details of a specific domain configuration change.</p>
 */
export interface ChangeProgressStatusDetails {
  /**
   * <p>The unique change identifier associated with a specific domain configuration change.</p>
   */
  ChangeId?: string;

  /**
   * <p>The time at which the configuration change is made on the domain.</p>
   */
  StartTime?: Date;

  /**
   * <p>The overall status of the domain configuration change.</p>
   */
  Status?: OverallChangeStatus | string;

  /**
   * <p>The list of properties in the domain configuration change that are still pending.</p>
   */
  PendingProperties?: string[];

  /**
   * <p>The list of properties in the domain configuration change that have completed.</p>
   */
  CompletedProperties?: string[];

  /**
   * <p>The total number of stages required for the configuration change.</p>
   */
  TotalNumberOfStages?: number;

  /**
   * <p>The specific stages that the domain is going through to perform the configuration change.</p>
   */
  ChangeProgressStages?: ChangeProgressStage[];
}

/**
 * <p>The result of a <code>DescribeDomainChangeProgress</code> request. Contains progress
 *    information for the requested domain change.</p>
 */
export interface DescribeDomainChangeProgressResponse {
  /**
   * <p>Container for information about the stages of a configuration change happening on a domain.</p>
   */
  ChangeProgressStatus?: ChangeProgressStatusDetails;
}

/**
 * <p>Container for the parameters to the <code>DescribeDomainConfig</code> operation.</p>
 */
export interface DescribeDomainConfigRequest {
  /**
   * <p>Name of the OpenSearch Service domain configuration that you want to describe.</p>
   */
  DomainName: string | undefined;
}

export enum RollbackOnDisable {
  DEFAULT_ROLLBACK = "DEFAULT_ROLLBACK",
  NO_ROLLBACK = "NO_ROLLBACK",
}

/**
 * <p>Auto-Tune settings when updating a domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for
 *     Amazon OpenSearch Service</a>.</p>
 */
export interface AutoTuneOptions {
  /**
   * <p>Whether Auto-Tune is enabled or disabled.</p>
   */
  DesiredState?: AutoTuneDesiredState | string;

  /**
   * <p>When disabling Auto-Tune, specify <code>NO_ROLLBACK</code> to retain all prior Auto-Tune
   *    settings or <code>DEFAULT_ROLLBACK</code> to revert to the OpenSearch Service defaults. If you
   *    specify <code>DEFAULT_ROLLBACK</code>, you must include a <code>MaintenanceSchedule</code> in the
   *    request. Otherwise, OpenSearch Service is unable to perform the rollback.</p>
   */
  RollbackOnDisable?: RollbackOnDisable | string;

  /**
   * <p>A list of maintenance schedules during which Auto-Tune can deploy changes.</p>
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[];
}

/**
 * <p>The current status of Auto-Tune for the domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for
 *     Amazon OpenSearch Service</a>.</p>
 */
export interface AutoTuneStatus {
  /**
   * <p>Date and time when Auto-Tune was enabled for the domain.</p>
   */
  CreationDate: Date | undefined;

  /**
   * <p>Date and time when the Auto-Tune options were last updated for the domain.</p>
   */
  UpdateDate: Date | undefined;

  /**
   * <p>The latest version of the Auto-Tune options.</p>
   */
  UpdateVersion?: number;

  /**
   * <p>The current state of Auto-Tune on the domain.</p>
   */
  State: AutoTuneState | string | undefined;

  /**
   * <p>Any errors that occurred while enabling or disabling Auto-Tune.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>Indicates whether the domain is being deleted.</p>
   */
  PendingDeletion?: boolean;
}

/**
 * <p>The Auto-Tune status for the domain.</p>
 */
export interface AutoTuneOptionsStatus {
  /**
   * <p>Auto-Tune settings for updating a domain.</p>
   */
  Options?: AutoTuneOptions;

  /**
   * <p>The current status of Auto-Tune for a domain.</p>
   */
  Status?: AutoTuneStatus;
}

/**
 * <p>The cluster configuration status for a domain.</p>
 */
export interface ClusterConfigStatus {
  /**
   * <p>Cluster configuration options for the specified domain.</p>
   */
  Options: ClusterConfig | undefined;

  /**
   * <p>The status of cluster configuration options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The status of the Cognito options for the specified domain.</p>
 */
export interface CognitoOptionsStatus {
  /**
   * <p>Cognito options for the specified domain.</p>
   */
  Options: CognitoOptions | undefined;

  /**
   * <p>The status of the Cognito options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The configured endpoint options for a domain and their current status.</p>
 */
export interface DomainEndpointOptionsStatus {
  /**
   * <p>Options to configure the endpoint for a domain.</p>
   */
  Options: DomainEndpointOptions | undefined;

  /**
   * <p>The status of the endpoint options for a domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The status of the EBS options for the specified OpenSearch Service domain.</p>
 */
export interface EBSOptionsStatus {
  /**
   * <p>The configured EBS options for the specified domain.</p>
   */
  Options: EBSOptions | undefined;

  /**
   * <p>The status of the EBS options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>Status of the encryption at rest options for the specified OpenSearch Service domain.</p>
 */
export interface EncryptionAtRestOptionsStatus {
  /**
   * <p>Encryption at rest options for the specified domain.</p>
   */
  Options: EncryptionAtRestOptions | undefined;

  /**
   * <p>The status of the encryption at rest options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The status of the the OpenSearch or Elasticsearch version options for the specified Amazon
 *    OpenSearch Service domain.</p>
 */
export interface VersionStatus {
  /**
   * <p>The OpenSearch or Elasticsearch version for the specified domain.</p>
   */
  Options: string | undefined;

  /**
   * <p>The status of the version options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The configured log publishing options for the domain and their current status.</p>
 */
export interface LogPublishingOptionsStatus {
  /**
   * <p>The log publishing options configured for the domain.</p>
   */
  Options?: Record<string, LogPublishingOption>;

  /**
   * <p>The status of the log publishing options for the domain.</p>
   */
  Status?: OptionStatus;
}

/**
 * <p>Status of the node-to-node encryption options for the specified domain.</p>
 */
export interface NodeToNodeEncryptionOptionsStatus {
  /**
   * <p>The node-to-node encryption options for the specified domain.</p>
   */
  Options: NodeToNodeEncryptionOptions | undefined;

  /**
   * <p>The status of the node-to-node encryption options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>Container for information about a daily automated snapshot for an OpenSearch Service
 *    domain.</p>
 */
export interface SnapshotOptionsStatus {
  /**
   * <p>The daily snapshot options specified for the domain.</p>
   */
  Options: SnapshotOptions | undefined;

  /**
   * <p>The status of a daily automated snapshot.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>Status of the VPC options for a specified domain.</p>
 */
export interface VPCDerivedInfoStatus {
  /**
   * <p>The VPC options for the specified domain.</p>
   */
  Options: VPCDerivedInfo | undefined;

  /**
   * <p>The status of the VPC options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>Container for the configuration of an OpenSearch Service domain.</p>
 */
export interface DomainConfig {
  /**
   * <p>The OpenSearch or Elasticsearch version that the domain is running.</p>
   */
  EngineVersion?: VersionStatus;

  /**
   * <p>Container for the cluster configuration of a the domain.</p>
   */
  ClusterConfig?: ClusterConfigStatus;

  /**
   * <p>Container for EBS options configured for an OpenSearch Service domain.</p>
   */
  EBSOptions?: EBSOptionsStatus;

  /**
   * <p>Specifies the access policies for the domain.</p>
   */
  AccessPolicies?: AccessPoliciesStatus;

  /**
   * <p>DEPRECATED. Container for parameters required to configure automated snapshots of domain
   *    indexes.</p>
   */
  SnapshotOptions?: SnapshotOptionsStatus;

  /**
   * <p>The current VPC options for the domain and the status of any updates to their
   *    configuration.</p>
   */
  VPCOptions?: VPCDerivedInfoStatus;

  /**
   * <p>Container for Amazon Cognito options for the domain.</p>
   */
  CognitoOptions?: CognitoOptionsStatus;

  /**
   * <p>Key-value pairs to enable encryption at rest.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus;

  /**
   * <p>Whether node-to-node encryption is enabled or disabled.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus;

  /**
   * <p>Key-value pairs to specify advanced configuration options. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced options</a>.</p>
   */
  AdvancedOptions?: AdvancedOptionsStatus;

  /**
   * <p>Key-value pairs to configure slow log publishing.</p>
   */
  LogPublishingOptions?: LogPublishingOptionsStatus;

  /**
   * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
   *    traffic.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus;

  /**
   * <p>Container for fine-grained access control settings for the domain.</p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsStatus;

  /**
   * <p>Container for Auto-Tune settings for the domain.</p>
   */
  AutoTuneOptions?: AutoTuneOptionsStatus;

  /**
   * <p>Container for information about the progress of an existing configuration change.</p>
   */
  ChangeProgressDetails?: ChangeProgressDetails;
}

/**
 * <p>Contains the configuration information of the requested domain.</p>
 */
export interface DescribeDomainConfigResponse {
  /**
   * <p>Container for the configuration of the OpenSearch Service domain.</p>
   */
  DomainConfig: DomainConfig | undefined;
}

/**
 * <p>Container for the parameters to the <code>DescribeDomains</code> operation.</p>
 */
export interface DescribeDomainsRequest {
  /**
   * <p>Array of OpenSearch Service domain names that you want information about. If you don't
   *    specify any domains, OpenSearch Service returns information about all domains owned by the
   *    account.</p>
   */
  DomainNames: string[] | undefined;
}

/**
 * <p>Contains the status of the specified domains or all domains owned by the account.</p>
 */
export interface DescribeDomainsResponse {
  /**
   * <p>The status of the requested domains.</p>
   */
  DomainStatusList: DomainStatus[] | undefined;
}

export interface DescribeDryRunProgressRequest {
  /**
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The unique identifier of the dry run.</p>
   */
  DryRunId?: string;

  /**
   * <p>Whether to include the configuration of the dry run in the response. The configuration
   *    specifies the updates that you're planning to make on the domain.</p>
   */
  LoadDryRunConfig?: boolean;
}

/**
 * <p>A validation failure that occurred as the result of a pre-update validation check (verbose
 *    dry run) on a domain.</p>
 */
export interface ValidationFailure {
  /**
   * <p>The error code of the failure.</p>
   */
  Code?: string;

  /**
   * <p>A message corresponding to the failure.</p>
   */
  Message?: string;
}

/**
 * <p>Information about the progress of a pre-upgrade dry run analysis.</p>
 */
export interface DryRunProgressStatus {
  /**
   * <p>The unique identifier of the dry run.</p>
   */
  DryRunId: string | undefined;

  /**
   * <p>The current status of the dry run.</p>
   */
  DryRunStatus: string | undefined;

  /**
   * <p>The timestamp when the dry run was initiated.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The timestamp when the dry run was last updated.</p>
   */
  UpdateDate: string | undefined;

  /**
   * <p>Any validation failures that occurred as a result of the dry run.</p>
   */
  ValidationFailures?: ValidationFailure[];
}

/**
 * <p>Results of a dry run performed in an update domain request.</p>
 */
export interface DryRunResults {
  /**
   * <p> Specifies the way in which OpenSearch Service will apply an update. Possible values
   *    are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Blue/Green</b> - The update requires a blue/green
   *      deployment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DynamicUpdate</b> - No blue/green deployment required</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Undetermined</b> - The domain is in the middle of an update
   *      and can't predict the deployment type. Try again after the update is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>None</b> - The request doesn't include any configuration
   *      changes.</p>
   *             </li>
   *          </ul>
   */
  DeploymentType?: string;

  /**
   * <p>A message corresponding to the deployment type.</p>
   */
  Message?: string;
}

export interface DescribeDryRunProgressResponse {
  /**
   * <p>The current status of the dry run, including any validation errors.</p>
   */
  DryRunProgressStatus?: DryRunProgressStatus;

  /**
   * <p>Details about the changes you're planning to make on the domain.</p>
   */
  DryRunConfig?: DomainStatus;

  /**
   * <p>The results of the dry run. </p>
   */
  DryRunResults?: DryRunResults;
}

/**
 * <p>A filter used to limit results when describing inbound or outbound cross-cluster
 *    connections. You can specify multiple values per filter. A cross-cluster connection must match at
 *    least one of the specified values for it to be returned from an operation.</p>
 */
export interface Filter {
  /**
   * <p>The name of the filter.</p>
   */
  Name?: string;

  /**
   * <p>One or more values for the filter.</p>
   */
  Values?: string[];
}

/**
 * <p>Container for the parameters to the <code>DescribeInboundConnections</code> operation.</p>
 */
export interface DescribeInboundConnectionsRequest {
  /**
   * <p> A list of filters used to match properties for inbound cross-cluster connections.</p>
   */
  Filters?: Filter[];

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If your initial <code>DescribeInboundConnections</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribeInboundConnections</code> operations, which returns results in the next
   *    page.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains a list of connections matching the filter criteria.</p>
 */
export interface DescribeInboundConnectionsResponse {
  /**
   * <p>List of inbound connections.</p>
   */
  Connections?: InboundConnection[];

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * <p>The request processing has failed because of invalid pagination token provided by customer. Returns an HTTP
 *    status code of 400. </p>
 */
export class InvalidPaginationTokenException extends __BaseException {
  readonly name: "InvalidPaginationTokenException" = "InvalidPaginationTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPaginationTokenException, __BaseException>) {
    super({
      name: "InvalidPaginationTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPaginationTokenException.prototype);
  }
}

/**
 * <p>Container for the parameters to the <code>DescribeInstanceTypeLimits</code> operation.</p>
 */
export interface DescribeInstanceTypeLimitsRequest {
  /**
   * <p>The name of the domain. Only specify if you need the limits for an existing domain.</p>
   */
  DomainName?: string;

  /**
   * <p>The OpenSearch Service instance type for which you need limit information.</p>
   */
  InstanceType: OpenSearchPartitionInstanceType | string | undefined;

  /**
   * <p>Version of OpenSearch or Elasticsearch, in the format Elasticsearch_X.Y or OpenSearch_X.Y.
   *    Defaults to the latest version of OpenSearch.</p>
   */
  EngineVersion: string | undefined;
}

/**
 * <p>Limits on the number of instances that can be created in OpenSearch Service for a given
 *    instance type.</p>
 */
export interface InstanceCountLimits {
  /**
   * <p>The maximum allowed number of instances.</p>
   */
  MinimumInstanceCount?: number;

  /**
   * <p>The minimum allowed number of instances.</p>
   */
  MaximumInstanceCount?: number;
}

/**
 * <p>Instance-related attributes that are available for a given instance type.</p>
 */
export interface InstanceLimits {
  /**
   * <p>Limits on the number of instances that can be created for a given instance type.</p>
   */
  InstanceCountLimits?: InstanceCountLimits;
}

/**
 * <p>Limits that are applicable for the given Amazon OpenSearch Service storage type.</p>
 */
export interface StorageTypeLimit {
  /**
   * <p> Name of storage limits that are applicable for the given storage type. If
   *     <code>StorageType</code> is <code>ebs</code>, the following options are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>MinimumVolumeSize</b> - Minimum volume size that is available for the
   *      given storage type. Can be empty if not applicable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MaximumVolumeSize</b> - Maximum volume size that is available for the
   *      given storage type. Can be empty if not applicable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MaximumIops</b> - Maximum amount of IOPS that is available for the given
   *      the storage type. Can be empty if not applicable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MinimumIops</b> - Minimum amount of IOPS that is available for the given
   *      the storage type. Can be empty if not applicable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MaximumThroughput</b> - Maximum amount of throughput that is
   *      available for the given the storage type. Can be empty if not applicable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MinimumThroughput</b> - Minimum amount of throughput that is
   *      available for the given the storage type. Can be empty if not applicable.</p>
   *             </li>
   *          </ul>
   */
  LimitName?: string;

  /**
   * <p>The limit values.</p>
   */
  LimitValues?: string[];
}

/**
 * <p>A list of storage types for an Amazon OpenSearch Service domain that are available for a
 *    given intance type.</p>
 */
export interface StorageType {
  /**
   * <p>The name of the storage type.</p>
   */
  StorageTypeName?: string;

  /**
   * <p>The storage sub-type, such as <code>gp3</code> or <code>io1</code>.</p>
   */
  StorageSubTypeName?: string;

  /**
   * <p>Limits that are applicable for the given storage type.</p>
   */
  StorageTypeLimits?: StorageTypeLimit[];
}

/**
 * <p>Limits for a given instance type and for each of its roles.</p>
 */
export interface Limits {
  /**
   * <p>Storage-related attributes that are available for a given instance type.</p>
   */
  StorageTypes?: StorageType[];

  /**
   * <p>The limits for a given instance type.</p>
   */
  InstanceLimits?: InstanceLimits;

  /**
   * <p>List of additional limits that are specific to a given instance type for each of its
   *    instance roles.</p>
   */
  AdditionalLimits?: AdditionalLimit[];
}

/**
 * <p>Container for the parameters received from the <code>DescribeInstanceTypeLimits</code>
 *    operation.</p>
 */
export interface DescribeInstanceTypeLimitsResponse {
  /**
   * <p>Map that contains all applicable instance type limits.<code>data</code> refers to data
   *    nodes.<code>master</code> refers to dedicated master nodes.</p>
   */
  LimitsByRole?: Record<string, Limits>;
}

/**
 * <p>Container for the parameters to the <code>DescribeOutboundConnections</code> operation.</p>
 */
export interface DescribeOutboundConnectionsRequest {
  /**
   * <p>List of filter names and values that you can use for requests.</p>
   */
  Filters?: Filter[];

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If your initial <code>DescribeOutboundConnections</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribeOutboundConnections</code> operations, which returns results in the next
   *    page.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains a list of connections matching the filter criteria.</p>
 */
export interface DescribeOutboundConnectionsResponse {
  /**
   * <p>List of outbound connections that match the filter criteria.</p>
   */
  Connections?: OutboundConnection[];

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

export enum DescribePackagesFilterName {
  PackageID = "PackageID",
  PackageName = "PackageName",
  PackageStatus = "PackageStatus",
}

/**
 * <p>A filter to apply to the <code>DescribePackage</code> response.</p>
 */
export interface DescribePackagesFilter {
  /**
   * <p>Any field from <code>PackageDetails</code>.</p>
   */
  Name?: DescribePackagesFilterName | string;

  /**
   * <p>A list of values for the specified filter field.</p>
   */
  Value?: string[];
}

/**
 * <p>Container for the request parameters to the <code>DescribePackage</code> operation.</p>
 */
export interface DescribePackagesRequest {
  /**
   * <p>Only returns packages that match the <code>DescribePackagesFilterList</code> values.</p>
   */
  Filters?: DescribePackagesFilter[];

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If your initial <code>DescribePackageFilters</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribePackageFilters</code> operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

/**
 * <p>Container for the response returned by the <code>DescribePackages</code> operation.</p>
 */
export interface DescribePackagesResponse {
  /**
   * <p>Basic information about a package.</p>
   */
  PackageDetailsList?: PackageDetails[];

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * <p>Container for the request parameters to a <code>DescribeReservedInstanceOfferings</code>
 *    operation.</p>
 */
export interface DescribeReservedInstanceOfferingsRequest {
  /**
   * <p>The Reserved Instance identifier filter value. Use this parameter to show only the available
   *    instance types that match the specified reservation identifier.</p>
   */
  ReservedInstanceOfferingId?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If your initial <code>DescribeReservedInstanceOfferings</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribeReservedInstanceOfferings</code> operations, which returns results in the next
   *    page.</p>
   */
  NextToken?: string;
}

export enum ReservedInstancePaymentOption {
  ALL_UPFRONT = "ALL_UPFRONT",
  NO_UPFRONT = "NO_UPFRONT",
  PARTIAL_UPFRONT = "PARTIAL_UPFRONT",
}

/**
 * <p>Contains the specific price and frequency of a recurring charges for an OpenSearch Reserved
 *    Instance, or for a Reserved Instance offering.</p>
 */
export interface RecurringCharge {
  /**
   * <p>The monetary amount of the recurring charge.</p>
   */
  RecurringChargeAmount?: number;

  /**
   * <p>The frequency of the recurring charge.</p>
   */
  RecurringChargeFrequency?: string;
}

/**
 * <p>Details of an OpenSearch Reserved Instance offering.</p>
 */
export interface ReservedInstanceOffering {
  /**
   * <p>The unique identifier of the Reserved Instance offering.</p>
   */
  ReservedInstanceOfferingId?: string;

  /**
   * <p>The OpenSearch instance type offered by the Reserved Instance offering.</p>
   */
  InstanceType?: OpenSearchPartitionInstanceType | string;

  /**
   * <p>The duration, in seconds, for which the offering will reserve the OpenSearch instance.</p>
   */
  Duration?: number;

  /**
   * <p>The upfront fixed charge you will pay to purchase the specific Reserved Instance
   *    offering.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The hourly rate at which you're charged for the domain using this Reserved Instance.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency code for the Reserved Instance offering.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>Payment option for the Reserved Instance offering</p>
   */
  PaymentOption?: ReservedInstancePaymentOption | string;

  /**
   * <p>The recurring charge to your account, regardless of whether you creates any domains using
   *    the offering.</p>
   */
  RecurringCharges?: RecurringCharge[];
}

/**
 * <p>Container for results of a <code>DescribeReservedInstanceOfferings</code> request.</p>
 */
export interface DescribeReservedInstanceOfferingsResponse {
  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;

  /**
   * <p>List of Reserved Instance offerings.</p>
   */
  ReservedInstanceOfferings?: ReservedInstanceOffering[];
}

/**
 * <p>Container for the request parameters to the <code>DescribeReservedInstances</code>
 *    operation.</p>
 */
export interface DescribeReservedInstancesRequest {
  /**
   * <p>The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the
   *    specified reserved OpenSearch instance ID.</p>
   */
  ReservedInstanceId?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If your initial <code>DescribeReservedInstances</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribeReservedInstances</code> operations, which returns results in the next
   *    page.</p>
   */
  NextToken?: string;
}

/**
 * <p>Details of an OpenSearch Reserved Instance.</p>
 */
export interface ReservedInstance {
  /**
   * <p>The customer-specified identifier to track this reservation.</p>
   */
  ReservationName?: string;

  /**
   * <p>The unique identifier for the reservation.</p>
   */
  ReservedInstanceId?: string;

  /**
   * <p>The unique identifier of the billing subscription.</p>
   */
  BillingSubscriptionId?: number;

  /**
   * <p>The unique identifier of the Reserved Instance offering.</p>
   */
  ReservedInstanceOfferingId?: string;

  /**
   * <p>The OpenSearch instance type offered by theReserved Instance offering.</p>
   */
  InstanceType?: OpenSearchPartitionInstanceType | string;

  /**
   * <p>The date and time when the reservation was purchased.</p>
   */
  StartTime?: Date;

  /**
   * <p>The duration, in seconds, for which the OpenSearch instance is reserved.</p>
   */
  Duration?: number;

  /**
   * <p>The upfront fixed charge you will paid to purchase the specific Reserved Instance
   *    offering.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The hourly rate at which you're charged for the domain using this Reserved Instance.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency code for the offering.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The number of OpenSearch instances that have been reserved.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The state of the Reserved Instance.</p>
   */
  State?: string;

  /**
   * <p>The payment option as defined in the Reserved Instance offering.</p>
   */
  PaymentOption?: ReservedInstancePaymentOption | string;

  /**
   * <p>The recurring charge to your account, regardless of whether you create any domains using the
   *    Reserved Instance offering.</p>
   */
  RecurringCharges?: RecurringCharge[];
}

/**
 * <p>Container for results from <code>DescribeReservedInstances</code>
 *          </p>
 */
export interface DescribeReservedInstancesResponse {
  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;

  /**
   * <p>List of Reserved Instances in the current Region.</p>
   */
  ReservedInstances?: ReservedInstance[];
}

export interface DescribeVpcEndpointsRequest {
  /**
   * <p>The unique identifiers of the endpoints to get information about.</p>
   */
  VpcEndpointIds: string[] | undefined;
}

export enum VpcEndpointErrorCode {
  ENDPOINT_NOT_FOUND = "ENDPOINT_NOT_FOUND",
  SERVER_ERROR = "SERVER_ERROR",
}

/**
 * <p>Error information when attempting to describe an Amazon OpenSearch Service-managed VPC
 *    endpoint.</p>
 */
export interface VpcEndpointError {
  /**
   * <p>The unique identifier of the endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The code associated with the error.</p>
   */
  ErrorCode?: VpcEndpointErrorCode | string;

  /**
   * <p>A message describing the error.</p>
   */
  ErrorMessage?: string;
}

export interface DescribeVpcEndpointsResponse {
  /**
   * <p>Information about each requested VPC endpoint.</p>
   */
  VpcEndpoints: VpcEndpoint[] | undefined;

  /**
   * <p>Any errors associated with the request.</p>
   */
  VpcEndpointErrors: VpcEndpointError[] | undefined;
}

/**
 * <p>Container for the request parameters to the <code>DissociatePackage</code> operation.</p>
 */
export interface DissociatePackageRequest {
  /**
   * <p>Internal ID of the package to dissociate from the domain. Use
   *     <code>ListPackagesForDomain</code> to find this value.</p>
   */
  PackageID: string | undefined;

  /**
   * <p>Name of the domain to dissociate the package from.</p>
   */
  DomainName: string | undefined;
}

/**
 * <p>Container for the response returned by an <code>DissociatePackage</code> operation.</p>
 */
export interface DissociatePackageResponse {
  /**
   * <p> Information about a package that has been dissociated from the domain.</p>
   */
  DomainPackageDetails?: DomainPackageDetails;
}

/**
 * <p>Container for the request parameters to <code>GetCompatibleVersions</code> operation.</p>
 */
export interface GetCompatibleVersionsRequest {
  /**
   * <p>The name of an existing domain. Provide this parameter to limit the results to a single
   *    domain.</p>
   */
  DomainName?: string;
}

/**
 * <p>A map of OpenSearch or Elasticsearch versions and the versions you can upgrade them
 *    to.</p>
 */
export interface CompatibleVersionsMap {
  /**
   * <p>The current version that the OpenSearch Service domain is running.</p>
   */
  SourceVersion?: string;

  /**
   * <p>The possible versions that you can upgrade the domain to.</p>
   */
  TargetVersions?: string[];
}

/**
 * <p>Container for the response returned by the <code>GetCompatibleVersions</code> operation.</p>
 */
export interface GetCompatibleVersionsResponse {
  /**
   * <p>A map of OpenSearch or Elasticsearch versions and the versions you can upgrade them
   *    to.</p>
   */
  CompatibleVersions?: CompatibleVersionsMap[];
}

/**
 * <p>Container for the request parameters to the <code>GetPackageVersionHistory</code> operation.</p>
 */
export interface GetPackageVersionHistoryRequest {
  /**
   * <p>The unique identifier of the package.</p>
   */
  PackageID: string | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If your initial <code>GetPackageVersionHistory</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>GetPackageVersionHistory</code> operations, which returns results in the next page.
   *   </p>
   */
  NextToken?: string;
}

/**
 * <p>Details about a package version.</p>
 */
export interface PackageVersionHistory {
  /**
   * <p>The package version.</p>
   */
  PackageVersion?: string;

  /**
   * <p>A message associated with the package version when it was uploaded.</p>
   */
  CommitMessage?: string;

  /**
   * <p>The date and time when the package was created.</p>
   */
  CreatedAt?: Date;
}

/**
 * <p>Container for response returned by <code>GetPackageVersionHistory</code>  operation.</p>
 */
export interface GetPackageVersionHistoryResponse {
  /**
   * <p>The unique identifier of the package.</p>
   */
  PackageID?: string;

  /**
   * <p>A list of package versions, along with their creation time and commit message.</p>
   */
  PackageVersionHistoryList?: PackageVersionHistory[];

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * <p>Container for the request parameters to the <code>GetUpgradeHistory</code> operation.</p>
 */
export interface GetUpgradeHistoryRequest {
  /**
   * <p>The name of an existing domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If your initial <code>GetUpgradeHistory</code> operation returns a <code>nextToken</code>,
   *    you can include the returned <code>nextToken</code> in subsequent <code>GetUpgradeHistory</code>
   *    operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

export enum UpgradeStep {
  PRE_UPGRADE_CHECK = "PRE_UPGRADE_CHECK",
  SNAPSHOT = "SNAPSHOT",
  UPGRADE = "UPGRADE",
}

export enum UpgradeStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED",
  SUCCEEDED_WITH_ISSUES = "SUCCEEDED_WITH_ISSUES",
}

/**
 * <p>Represents a single step of an upgrade or upgrade eligibility check workflow.</p>
 */
export interface UpgradeStepItem {
  /**
   * <p> One of three steps that an upgrade or upgrade eligibility check goes through: </p>
   *          <ul>
   *             <li>
   *                <p>PreUpgradeCheck</p>
   *             </li>
   *             <li>
   *                <p>Snapshot</p>
   *             </li>
   *             <li>
   *                <p>Upgrade</p>
   *             </li>
   *          </ul>
   */
  UpgradeStep?: UpgradeStep | string;

  /**
   * <p> The current status of the upgrade. The status can take one of the following values: </p>
   *          <ul>
   *             <li>
   *                <p>In Progress</p>
   *             </li>
   *             <li>
   *                <p>Succeeded</p>
   *             </li>
   *             <li>
   *                <p>Succeeded with Issues</p>
   *             </li>
   *             <li>
   *                <p>Failed</p>
   *             </li>
   *          </ul>
   */
  UpgradeStepStatus?: UpgradeStatus | string;

  /**
   * <p>A list of strings containing detailed information about the errors encountered in a particular step.</p>
   */
  Issues?: string[];

  /**
   * <p>The floating point value representing the progress percentage of a particular step.</p>
   */
  ProgressPercent?: number;
}

/**
 * <p>History of the last 10 upgrades and upgrade eligibility checks for an Amazon OpenSearch
 *    Service domain.</p>
 */
export interface UpgradeHistory {
  /**
   * <p>A string that describes the upgrade.</p>
   */
  UpgradeName?: string;

  /**
   * <p>UTC timestamp at which the upgrade API call was made, in the format
   *     <code>yyyy-MM-ddTHH:mm:ssZ</code>.</p>
   */
  StartTimestamp?: Date;

  /**
   * <p> The current status of the upgrade. The status can take one of the following values: </p>
   *          <ul>
   *             <li>
   *                <p>In Progress</p>
   *             </li>
   *             <li>
   *                <p>Succeeded</p>
   *             </li>
   *             <li>
   *                <p>Succeeded with Issues</p>
   *             </li>
   *             <li>
   *                <p>Failed</p>
   *             </li>
   *          </ul>
   */
  UpgradeStatus?: UpgradeStatus | string;

  /**
   * <p>A list of each step performed as part of a specific upgrade or upgrade eligibility check.</p>
   */
  StepsList?: UpgradeStepItem[];
}

/**
 * <p>Container for the response returned by the <code>GetUpgradeHistory</code> operation.</p>
 */
export interface GetUpgradeHistoryResponse {
  /**
   * <p>A list of objects corresponding to each upgrade or upgrade eligibility check performed on a
   *    domain.</p>
   */
  UpgradeHistories?: UpgradeHistory[];

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * <p>Container for the request parameters to the <code>GetUpgradeStatus</code> operation.</p>
 */
export interface GetUpgradeStatusRequest {
  /**
   * <p>The domain of the domain to get upgrade status information for.</p>
   */
  DomainName: string | undefined;
}

/**
 * <p>Container for the response returned by the <code>GetUpgradeStatus</code> operation.</p>
 */
export interface GetUpgradeStatusResponse {
  /**
   * <p>One of three steps that an upgrade or upgrade eligibility check goes through.</p>
   */
  UpgradeStep?: UpgradeStep | string;

  /**
   * <p>The status of the current step that an upgrade is on.</p>
   */
  StepStatus?: UpgradeStatus | string;

  /**
   * <p>A string that describes the update.</p>
   */
  UpgradeName?: string;
}

export enum EngineType {
  Elasticsearch = "Elasticsearch",
  OpenSearch = "OpenSearch",
}

/**
 * <p>Container for the parameters to the <code>ListDomainNames</code> operation.</p>
 */
export interface ListDomainNamesRequest {
  /**
   * <p>Filters the output by domain engine type.</p>
   */
  EngineType?: EngineType | string;
}

/**
 * <p>Information about an OpenSearch Service domain.</p>
 */
export interface DomainInfo {
  /**
   * <p>Name of the domain.</p>
   */
  DomainName?: string;

  /**
   * <p>The type of search engine that the domain is running.<code>OpenSearch</code> for an
   *    OpenSearch engine, or <code>Elasticsearch</code> for a legacy Elasticsearch OSS engine.</p>
   */
  EngineType?: EngineType | string;
}

/**
 * <p>The results of a <code>ListDomainNames</code> operation. Contains the names of all domains
 *    owned by this account and their respective engine types.</p>
 */
export interface ListDomainNamesResponse {
  /**
   * <p>The names of all OpenSearch Service domains owned by the current user and their respective
   *    engine types.</p>
   */
  DomainNames?: DomainInfo[];
}

/**
 * <p>Container for the request parameters to the <code>ListDomainsForPackage</code> operation.</p>
 */
export interface ListDomainsForPackageRequest {
  /**
   * <p>The unique identifier of the package for which to list associated domains.</p>
   */
  PackageID: string | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If your initial <code>ListDomainsForPackage</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>ListDomainsForPackage</code> operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

/**
 * <p>Container for the response parameters to the <code>ListDomainsForPackage</code> operation.</p>
 */
export interface ListDomainsForPackageResponse {
  /**
   * <p>Information about all domains associated with a package.</p>
   */
  DomainPackageDetailsList?: DomainPackageDetails[];

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

export interface ListInstanceTypeDetailsRequest {
  /**
   * <p>Version of OpenSearch or Elasticsearch, in the format Elasticsearch_X.Y or OpenSearch_X.Y.
   *    Defaults to the latest version of OpenSearch.</p>
   */
  EngineVersion: string | undefined;

  /**
   * <p>Name of the domain to list instance type details for.</p>
   */
  DomainName?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If your initial <code>ListInstanceTypeDetails</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>ListInstanceTypeDetails</code> operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

/**
 * <p>Lists all instance types and available features for a given OpenSearch or Elasticsearch
 *    version.</p>
 */
export interface InstanceTypeDetails {
  /**
   * <p>The instance type.</p>
   */
  InstanceType?: OpenSearchPartitionInstanceType | string;

  /**
   * <p>Whether encryption at rest and node-to-node encryption are supported for the instance
   *    type.</p>
   */
  EncryptionEnabled?: boolean;

  /**
   * <p>Whether Amazon Cognito access is supported for the instance type.</p>
   */
  CognitoEnabled?: boolean;

  /**
   * <p>Whether logging is supported for the instance type.</p>
   */
  AppLogsEnabled?: boolean;

  /**
   * <p>Whether fine-grained access control is supported for the instance type.</p>
   */
  AdvancedSecurityEnabled?: boolean;

  /**
   * <p>Whether UltraWarm is supported for the instance type.</p>
   */
  WarmEnabled?: boolean;

  /**
   * <p>Whether the instance acts as a data node, a dedicated master node, or an UltraWarm
   *    node.</p>
   */
  InstanceRole?: string[];
}

export interface ListInstanceTypeDetailsResponse {
  /**
   * <p>Lists all supported instance types and features for the given OpenSearch or Elasticsearch
   *    version.</p>
   */
  InstanceTypeDetails?: InstanceTypeDetails[];

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * <p>Container for the request parameters to the <code>ListPackagesForDomain</code> operation.</p>
 */
export interface ListPackagesForDomainRequest {
  /**
   * <p>The name of the domain for which you want to list associated packages.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If your initial <code>ListPackagesForDomain</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>ListPackagesForDomain</code> operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

/**
 * <p>Container for the response parameters to the <code>ListPackagesForDomain</code> operation.</p>
 */
export interface ListPackagesForDomainResponse {
  /**
   * <p>List of all packages associated with a domain.</p>
   */
  DomainPackageDetailsList?: DomainPackageDetails[];

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * <p>Container for the parameters to the <code>ListTags</code> operation.</p>
 */
export interface ListTagsRequest {
  /**
   * <p>Amazon Resource Name (ARN) for the domain to view tags for.</p>
   */
  ARN: string | undefined;
}

/**
 * <p>The results of a <code>ListTags</code> operation.</p>
 */
export interface ListTagsResponse {
  /**
   * <p>List of resource tags associated with the specified domain.</p>
   */
  TagList?: Tag[];
}

/**
 * <p>Container for the request parameters to the <code>ListVersions</code> operation.</p>
 */
export interface ListVersionsRequest {
  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If your initial <code>ListVersions</code> operation returns a <code>nextToken</code>, you
   *    can include the returned <code>nextToken</code> in subsequent <code>ListVersions</code>
   *    operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

/**
 * <p>Container for the parameters for response received from the <code>ListVersions</code>
 *    operation.</p>
 */
export interface ListVersionsResponse {
  /**
   * <p>A list of all versions of OpenSearch and Elasticsearch that Amazon OpenSearch Service
   *    supports.</p>
   */
  Versions?: string[];

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

export interface ListVpcEndpointAccessRequest {
  /**
   * <p>The name of the OpenSearch Service domain to retrieve access information for.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>If your initial <code>ListVpcEndpointAccess</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>ListVpcEndpointAccess</code> operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

export interface ListVpcEndpointAccessResponse {
  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM principals</a>
   *    that can currently access the domain.</p>
   */
  AuthorizedPrincipalList: AuthorizedPrincipal[] | undefined;

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken: string | undefined;
}

export interface ListVpcEndpointsRequest {
  /**
   * <p>If your initial <code>ListVpcEndpoints</code> operation returns a <code>nextToken</code>,
   *    you can include the returned <code>nextToken</code> in subsequent <code>ListVpcEndpoints</code>
   *    operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

export interface ListVpcEndpointsResponse {
  /**
   * <p>Information about each endpoint.</p>
   */
  VpcEndpointSummaryList: VpcEndpointSummary[] | undefined;

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken: string | undefined;
}

export interface ListVpcEndpointsForDomainRequest {
  /**
   * <p>The name of the domain to list associated VPC endpoints for.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>If your initial <code>ListEndpointsForDomain</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>ListEndpointsForDomain</code> operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

export interface ListVpcEndpointsForDomainResponse {
  /**
   * <p>Information about each endpoint associated with the domain.</p>
   */
  VpcEndpointSummaryList: VpcEndpointSummary[] | undefined;

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken: string | undefined;
}

/**
 * <p>Container for request parameters to the <code>PurchaseReservedInstanceOffering</code>
 *    operation.</p>
 */
export interface PurchaseReservedInstanceOfferingRequest {
  /**
   * <p>The ID of the Reserved Instance offering to purchase.</p>
   */
  ReservedInstanceOfferingId: string | undefined;

  /**
   * <p>A customer-specified identifier to track this reservation.</p>
   */
  ReservationName: string | undefined;

  /**
   * <p>The number of OpenSearch instances to reserve.</p>
   */
  InstanceCount?: number;
}

/**
 * <p>Represents the output of a <code>PurchaseReservedInstanceOffering</code> operation.</p>
 */
export interface PurchaseReservedInstanceOfferingResponse {
  /**
   * <p>The ID of the Reserved Instance offering that was purchased.</p>
   */
  ReservedInstanceId?: string;

  /**
   * <p>The customer-specified identifier used to track this reservation.</p>
   */
  ReservationName?: string;
}

/**
 * <p>Container for the request parameters to the <code>RejectInboundConnection</code> operation.</p>
 */
export interface RejectInboundConnectionRequest {
  /**
   * <p>The unique identifier of the inbound connection to reject.</p>
   */
  ConnectionId: string | undefined;
}

/**
 * <p>Represents the output of a <code>RejectInboundConnection</code> operation.</p>
 */
export interface RejectInboundConnectionResponse {
  /**
   * <p>Contains details about the rejected inbound connection.</p>
   */
  Connection?: InboundConnection;
}

/**
 * <p>Container for the request parameters to the <code>RemoveTags</code> operation.</p>
 */
export interface RemoveTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the domain from which you want to delete the specified
   *    tags.</p>
   */
  ARN: string | undefined;

  /**
   * <p>The list of tag keys to remove from the domain.</p>
   */
  TagKeys: string[] | undefined;
}

export interface RevokeVpcEndpointAccessRequest {
  /**
   * <p>The name of the OpenSearch Service domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The account ID to revoke access from.</p>
   */
  Account: string | undefined;
}

export interface RevokeVpcEndpointAccessResponse {}

/**
 * <p>Container for the request parameters to the <code>StartServiceSoftwareUpdate</code>
 *    operation.</p>
 */
export interface StartServiceSoftwareUpdateRequest {
  /**
   * <p>The name of the domain that you want to update to the latest service software.</p>
   */
  DomainName: string | undefined;
}

/**
 * <p>Represents the output of a <code>StartServiceSoftwareUpdate</code> operation. Contains the
 *    status of the update.</p>
 */
export interface StartServiceSoftwareUpdateResponse {
  /**
   * <p>The current status of the OpenSearch Service software update.</p>
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}

export enum DryRunMode {
  Basic = "Basic",
  Verbose = "Verbose",
}

/**
 * <p>Container for the request parameters to the <code>UpdateDomain</code> operation.</p>
 */
export interface UpdateDomainConfigRequest {
  /**
   * <p>The name of the domain that you're updating.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Changes that you want to make to the cluster configuration, such as the instance type and
   *    number of EC2 instances.</p>
   */
  ClusterConfig?: ClusterConfig;

  /**
   * <p>The type and size of the EBS volume to attach to instances in the domain.</p>
   */
  EBSOptions?: EBSOptions;

  /**
   * <p>Option to set the time, in UTC format, for the daily automated snapshot. Default value is <code>0</code> hours.
   *   </p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * <p>Options to specify the subnets and security groups for a VPC endpoint. For more information,
   *    see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching
   *     your Amazon OpenSearch Service domains using a VPC</a>.</p>
   */
  VPCOptions?: VPCOptions;

  /**
   * <p>Key-value pairs to configure Amazon Cognito authentication for OpenSearch Dashboards.</p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * <p>Key-value pairs to specify advanced configuration options. The following key-value pairs are
   *    supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"rest.action.multi.allow_explicit_index": "true" | "false"</code> - Note the use of
   *      a string rather than a boolean. Specifies whether explicit references to indexes are allowed
   *      inside the body of HTTP requests. If you want to configure access policies for domain
   *      sub-resources, such as specific indexes and domain APIs, you must disable this property.
   *      Default is true.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"indices.fielddata.cache.size": "80" </code> - Note the use of a string rather than
   *      a boolean. Specifies the percentage of heap space allocated to field data. Default is
   *      unbounded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"indices.query.bool.max_clause_count": "1024"</code> - Note the use of a string
   *      rather than a boolean. Specifies the maximum number of clauses allowed in a Lucene boolean
   *      query. Default is 1,024. Queries with more than the permitted number of clauses result in a
   *      <code>TooManyClauses</code> error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"override_main_response_version": "true" | "false"</code> - Note the use of a string
   *      rather than a boolean. Specifies whether the domain reports its version as 7.10 to allow
   *      Elasticsearch OSS clients and plugins to continue working with it. Default is false when
   *      creating a domain and true when upgrading a domain.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced cluster parameters</a>.</p>
   */
  AdvancedOptions?: Record<string, string>;

  /**
   * <p>Identity and Access Management (IAM) access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>Options to publish OpenSearch lots to Amazon CloudWatch Logs.</p>
   */
  LogPublishingOptions?: Record<string, LogPublishingOption>;

  /**
   * <p>Encryption at rest options for the domain.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
   *    traffic.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * <p>Node-To-Node Encryption options for the domain.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * <p>Options for fine-grained access control.</p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;

  /**
   * <p>Options for Auto-Tune.</p>
   */
  AutoTuneOptions?: AutoTuneOptions;

  /**
   * <p>This flag, when set to True, specifies whether the <code>UpdateDomain</code> request should
   *    return the results of a dry run analysis without actually applying the change. A dry run
   *    determines what type of deployment the update will cause.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The type of dry run to perform.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Basic</code> only returns the type of deployment (blue/green or dynamic) that the update
   *      will cause.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Verbose</code> runs an additional check to validate the changes you're making. For
   *      more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-configuration-changes#validation-check">Validating a domain update</a>.</p>
   *             </li>
   *          </ul>
   */
  DryRunMode?: DryRunMode | string;
}

/**
 * <p>The results of an <code>UpdateDomain</code> request. Contains the status of the domain being
 *    updated.</p>
 */
export interface UpdateDomainConfigResponse {
  /**
   * <p>The status of the updated domain.</p>
   */
  DomainConfig: DomainConfig | undefined;

  /**
   * <p>Results of the dry run performed in the update domain request.</p>
   */
  DryRunResults?: DryRunResults;

  /**
   * <p>The status of the dry run being performed on the domain, if any.</p>
   */
  DryRunProgressStatus?: DryRunProgressStatus;
}

/**
 * <p>Container for request parameters to the <code>UpdatePackage</code> operation.</p>
 */
export interface UpdatePackageRequest {
  /**
   * <p>The unique identifier for the package.</p>
   */
  PackageID: string | undefined;

  /**
   * <p>Amazon S3 bucket and key for the package.</p>
   */
  PackageSource: PackageSource | undefined;

  /**
   * <p>A new description of the package.</p>
   */
  PackageDescription?: string;

  /**
   * <p>Commit message for the updated file, which is shown as part of
   *     <code>GetPackageVersionHistoryResponse</code>.</p>
   */
  CommitMessage?: string;
}

/**
 * <p>Container for the response returned by the <code>UpdatePackage</code> operation.</p>
 */
export interface UpdatePackageResponse {
  /**
   * <p>Information about a package.</p>
   */
  PackageDetails?: PackageDetails;
}

export interface UpdateVpcEndpointRequest {
  /**
   * <p>The unique identifier of the endpoint.</p>
   */
  VpcEndpointId: string | undefined;

  /**
   * <p>The security groups and/or subnets to add, remove, or modify.</p>
   */
  VpcOptions: VPCOptions | undefined;
}

export interface UpdateVpcEndpointResponse {
  /**
   * <p>The endpoint to be updated.</p>
   */
  VpcEndpoint: VpcEndpoint | undefined;
}

/**
 * <p>Container for the request parameters to the <code>UpgradeDomain</code> operation.</p>
 */
export interface UpgradeDomainRequest {
  /**
   * <p>Name of the OpenSearch Service domain that you want to upgrade.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>OpenSearch or Elasticsearch version to which you want to upgrade, in the format
   *    Opensearch_X.Y or Elasticsearch_X.Y.</p>
   */
  TargetVersion: string | undefined;

  /**
   * <p>When true, indicates that an upgrade eligibility check needs to be performed. Does not
   *    actually perform the upgrade.</p>
   */
  PerformCheckOnly?: boolean;

  /**
   * <p>Only supports the <code>override_main_response_version</code> parameter and not other
   *    advanced options. You can only include this option when upgrading to an OpenSearch version.
   *    Specifies whether the domain reports its version as 7.10 so that it continues to work with
   *    Elasticsearch OSS clients and plugins.</p>
   */
  AdvancedOptions?: Record<string, string>;
}

/**
 * <p>Container for the response returned by <code>UpgradeDomain</code> operation.</p>
 */
export interface UpgradeDomainResponse {
  /**
   * <p>The unique identifier of the domain upgrade.</p>
   */
  UpgradeId?: string;

  /**
   * <p>The name of the domain that was upgraded.</p>
   */
  DomainName?: string;

  /**
   * <p>OpenSearch or Elasticsearch version that the domain was upgraded to.</p>
   */
  TargetVersion?: string;

  /**
   * <p>When true, indicates that an upgrade eligibility check was performed.</p>
   */
  PerformCheckOnly?: boolean;

  /**
   * <p>The advanced options configuration for the domain.</p>
   */
  AdvancedOptions?: Record<string, string>;

  /**
   * <p>Container for information about a configuration change happening on a domain.</p>
   */
  ChangeProgressDetails?: ChangeProgressDetails;
}

/**
 * @internal
 */
export const AcceptInboundConnectionRequestFilterSensitiveLog = (obj: AcceptInboundConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InboundConnectionStatusFilterSensitiveLog = (obj: InboundConnectionStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AWSDomainInformationFilterSensitiveLog = (obj: AWSDomainInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainInformationContainerFilterSensitiveLog = (obj: DomainInformationContainer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InboundConnectionFilterSensitiveLog = (obj: InboundConnection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptInboundConnectionResponseFilterSensitiveLog = (obj: AcceptInboundConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OptionStatusFilterSensitiveLog = (obj: OptionStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccessPoliciesStatusFilterSensitiveLog = (obj: AccessPoliciesStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdditionalLimitFilterSensitiveLog = (obj: AdditionalLimit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddTagsRequestFilterSensitiveLog = (obj: AddTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdvancedOptionsStatusFilterSensitiveLog = (obj: AdvancedOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SAMLIdpFilterSensitiveLog = (obj: SAMLIdp): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SAMLOptionsOutputFilterSensitiveLog = (obj: SAMLOptionsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdvancedSecurityOptionsFilterSensitiveLog = (obj: AdvancedSecurityOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MasterUserOptionsFilterSensitiveLog = (obj: MasterUserOptions): any => ({
  ...obj,
  ...(obj.MasterUserName && { MasterUserName: SENSITIVE_STRING }),
  ...(obj.MasterUserPassword && { MasterUserPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SAMLOptionsInputFilterSensitiveLog = (obj: SAMLOptionsInput): any => ({
  ...obj,
  ...(obj.MasterUserName && { MasterUserName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdvancedSecurityOptionsInputFilterSensitiveLog = (obj: AdvancedSecurityOptionsInput): any => ({
  ...obj,
  ...(obj.MasterUserOptions && { MasterUserOptions: MasterUserOptionsFilterSensitiveLog(obj.MasterUserOptions) }),
  ...(obj.SAMLOptions && { SAMLOptions: SAMLOptionsInputFilterSensitiveLog(obj.SAMLOptions) }),
});

/**
 * @internal
 */
export const AdvancedSecurityOptionsStatusFilterSensitiveLog = (obj: AdvancedSecurityOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociatePackageRequestFilterSensitiveLog = (obj: AssociatePackageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorDetailsFilterSensitiveLog = (obj: ErrorDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainPackageDetailsFilterSensitiveLog = (obj: DomainPackageDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociatePackageResponseFilterSensitiveLog = (obj: AssociatePackageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthorizeVpcEndpointAccessRequestFilterSensitiveLog = (obj: AuthorizeVpcEndpointAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthorizedPrincipalFilterSensitiveLog = (obj: AuthorizedPrincipal): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthorizeVpcEndpointAccessResponseFilterSensitiveLog = (obj: AuthorizeVpcEndpointAccessResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelServiceSoftwareUpdateRequestFilterSensitiveLog = (obj: CancelServiceSoftwareUpdateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceSoftwareOptionsFilterSensitiveLog = (obj: ServiceSoftwareOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelServiceSoftwareUpdateResponseFilterSensitiveLog = (
  obj: CancelServiceSoftwareUpdateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DurationFilterSensitiveLog = (obj: Duration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoTuneMaintenanceScheduleFilterSensitiveLog = (obj: AutoTuneMaintenanceSchedule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoTuneOptionsInputFilterSensitiveLog = (obj: AutoTuneOptionsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColdStorageOptionsFilterSensitiveLog = (obj: ColdStorageOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ZoneAwarenessConfigFilterSensitiveLog = (obj: ZoneAwarenessConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterConfigFilterSensitiveLog = (obj: ClusterConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CognitoOptionsFilterSensitiveLog = (obj: CognitoOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainEndpointOptionsFilterSensitiveLog = (obj: DomainEndpointOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EBSOptionsFilterSensitiveLog = (obj: EBSOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionAtRestOptionsFilterSensitiveLog = (obj: EncryptionAtRestOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogPublishingOptionFilterSensitiveLog = (obj: LogPublishingOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeToNodeEncryptionOptionsFilterSensitiveLog = (obj: NodeToNodeEncryptionOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotOptionsFilterSensitiveLog = (obj: SnapshotOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VPCOptionsFilterSensitiveLog = (obj: VPCOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDomainRequestFilterSensitiveLog = (obj: CreateDomainRequest): any => ({
  ...obj,
  ...(obj.AdvancedSecurityOptions && {
    AdvancedSecurityOptions: AdvancedSecurityOptionsInputFilterSensitiveLog(obj.AdvancedSecurityOptions),
  }),
});

/**
 * @internal
 */
export const AutoTuneOptionsOutputFilterSensitiveLog = (obj: AutoTuneOptionsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChangeProgressDetailsFilterSensitiveLog = (obj: ChangeProgressDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VPCDerivedInfoFilterSensitiveLog = (obj: VPCDerivedInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainStatusFilterSensitiveLog = (obj: DomainStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDomainResponseFilterSensitiveLog = (obj: CreateDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOutboundConnectionRequestFilterSensitiveLog = (obj: CreateOutboundConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutboundConnectionStatusFilterSensitiveLog = (obj: OutboundConnectionStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOutboundConnectionResponseFilterSensitiveLog = (obj: CreateOutboundConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageSourceFilterSensitiveLog = (obj: PackageSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePackageRequestFilterSensitiveLog = (obj: CreatePackageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageDetailsFilterSensitiveLog = (obj: PackageDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePackageResponseFilterSensitiveLog = (obj: CreatePackageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpcEndpointRequestFilterSensitiveLog = (obj: CreateVpcEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcEndpointFilterSensitiveLog = (obj: VpcEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVpcEndpointResponseFilterSensitiveLog = (obj: CreateVpcEndpointResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDomainRequestFilterSensitiveLog = (obj: DeleteDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDomainResponseFilterSensitiveLog = (obj: DeleteDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInboundConnectionRequestFilterSensitiveLog = (obj: DeleteInboundConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInboundConnectionResponseFilterSensitiveLog = (obj: DeleteInboundConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteOutboundConnectionRequestFilterSensitiveLog = (obj: DeleteOutboundConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutboundConnectionFilterSensitiveLog = (obj: OutboundConnection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteOutboundConnectionResponseFilterSensitiveLog = (obj: DeleteOutboundConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePackageRequestFilterSensitiveLog = (obj: DeletePackageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePackageResponseFilterSensitiveLog = (obj: DeletePackageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcEndpointRequestFilterSensitiveLog = (obj: DeleteVpcEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcEndpointSummaryFilterSensitiveLog = (obj: VpcEndpointSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVpcEndpointResponseFilterSensitiveLog = (obj: DeleteVpcEndpointResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainRequestFilterSensitiveLog = (obj: DescribeDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainResponseFilterSensitiveLog = (obj: DescribeDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainAutoTunesRequestFilterSensitiveLog = (obj: DescribeDomainAutoTunesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledAutoTuneDetailsFilterSensitiveLog = (obj: ScheduledAutoTuneDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoTuneDetailsFilterSensitiveLog = (obj: AutoTuneDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoTuneFilterSensitiveLog = (obj: AutoTune): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainAutoTunesResponseFilterSensitiveLog = (obj: DescribeDomainAutoTunesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainChangeProgressRequestFilterSensitiveLog = (
  obj: DescribeDomainChangeProgressRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChangeProgressStageFilterSensitiveLog = (obj: ChangeProgressStage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChangeProgressStatusDetailsFilterSensitiveLog = (obj: ChangeProgressStatusDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainChangeProgressResponseFilterSensitiveLog = (
  obj: DescribeDomainChangeProgressResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainConfigRequestFilterSensitiveLog = (obj: DescribeDomainConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoTuneOptionsFilterSensitiveLog = (obj: AutoTuneOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoTuneStatusFilterSensitiveLog = (obj: AutoTuneStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoTuneOptionsStatusFilterSensitiveLog = (obj: AutoTuneOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterConfigStatusFilterSensitiveLog = (obj: ClusterConfigStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CognitoOptionsStatusFilterSensitiveLog = (obj: CognitoOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainEndpointOptionsStatusFilterSensitiveLog = (obj: DomainEndpointOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EBSOptionsStatusFilterSensitiveLog = (obj: EBSOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionAtRestOptionsStatusFilterSensitiveLog = (obj: EncryptionAtRestOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VersionStatusFilterSensitiveLog = (obj: VersionStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogPublishingOptionsStatusFilterSensitiveLog = (obj: LogPublishingOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeToNodeEncryptionOptionsStatusFilterSensitiveLog = (obj: NodeToNodeEncryptionOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotOptionsStatusFilterSensitiveLog = (obj: SnapshotOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VPCDerivedInfoStatusFilterSensitiveLog = (obj: VPCDerivedInfoStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainConfigFilterSensitiveLog = (obj: DomainConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainConfigResponseFilterSensitiveLog = (obj: DescribeDomainConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainsRequestFilterSensitiveLog = (obj: DescribeDomainsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainsResponseFilterSensitiveLog = (obj: DescribeDomainsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDryRunProgressRequestFilterSensitiveLog = (obj: DescribeDryRunProgressRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationFailureFilterSensitiveLog = (obj: ValidationFailure): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DryRunProgressStatusFilterSensitiveLog = (obj: DryRunProgressStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DryRunResultsFilterSensitiveLog = (obj: DryRunResults): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDryRunProgressResponseFilterSensitiveLog = (obj: DescribeDryRunProgressResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInboundConnectionsRequestFilterSensitiveLog = (obj: DescribeInboundConnectionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInboundConnectionsResponseFilterSensitiveLog = (obj: DescribeInboundConnectionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceTypeLimitsRequestFilterSensitiveLog = (obj: DescribeInstanceTypeLimitsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceCountLimitsFilterSensitiveLog = (obj: InstanceCountLimits): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceLimitsFilterSensitiveLog = (obj: InstanceLimits): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StorageTypeLimitFilterSensitiveLog = (obj: StorageTypeLimit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StorageTypeFilterSensitiveLog = (obj: StorageType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LimitsFilterSensitiveLog = (obj: Limits): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceTypeLimitsResponseFilterSensitiveLog = (obj: DescribeInstanceTypeLimitsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOutboundConnectionsRequestFilterSensitiveLog = (obj: DescribeOutboundConnectionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOutboundConnectionsResponseFilterSensitiveLog = (
  obj: DescribeOutboundConnectionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePackagesFilterFilterSensitiveLog = (obj: DescribePackagesFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePackagesRequestFilterSensitiveLog = (obj: DescribePackagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePackagesResponseFilterSensitiveLog = (obj: DescribePackagesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedInstanceOfferingsRequestFilterSensitiveLog = (
  obj: DescribeReservedInstanceOfferingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecurringChargeFilterSensitiveLog = (obj: RecurringCharge): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedInstanceOfferingFilterSensitiveLog = (obj: ReservedInstanceOffering): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedInstanceOfferingsResponseFilterSensitiveLog = (
  obj: DescribeReservedInstanceOfferingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedInstancesRequestFilterSensitiveLog = (obj: DescribeReservedInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedInstanceFilterSensitiveLog = (obj: ReservedInstance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedInstancesResponseFilterSensitiveLog = (obj: DescribeReservedInstancesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointsRequestFilterSensitiveLog = (obj: DescribeVpcEndpointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcEndpointErrorFilterSensitiveLog = (obj: VpcEndpointError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVpcEndpointsResponseFilterSensitiveLog = (obj: DescribeVpcEndpointsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DissociatePackageRequestFilterSensitiveLog = (obj: DissociatePackageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DissociatePackageResponseFilterSensitiveLog = (obj: DissociatePackageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCompatibleVersionsRequestFilterSensitiveLog = (obj: GetCompatibleVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompatibleVersionsMapFilterSensitiveLog = (obj: CompatibleVersionsMap): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCompatibleVersionsResponseFilterSensitiveLog = (obj: GetCompatibleVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPackageVersionHistoryRequestFilterSensitiveLog = (obj: GetPackageVersionHistoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageVersionHistoryFilterSensitiveLog = (obj: PackageVersionHistory): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPackageVersionHistoryResponseFilterSensitiveLog = (obj: GetPackageVersionHistoryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUpgradeHistoryRequestFilterSensitiveLog = (obj: GetUpgradeHistoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpgradeStepItemFilterSensitiveLog = (obj: UpgradeStepItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpgradeHistoryFilterSensitiveLog = (obj: UpgradeHistory): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUpgradeHistoryResponseFilterSensitiveLog = (obj: GetUpgradeHistoryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUpgradeStatusRequestFilterSensitiveLog = (obj: GetUpgradeStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUpgradeStatusResponseFilterSensitiveLog = (obj: GetUpgradeStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainNamesRequestFilterSensitiveLog = (obj: ListDomainNamesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainInfoFilterSensitiveLog = (obj: DomainInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainNamesResponseFilterSensitiveLog = (obj: ListDomainNamesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainsForPackageRequestFilterSensitiveLog = (obj: ListDomainsForPackageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainsForPackageResponseFilterSensitiveLog = (obj: ListDomainsForPackageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInstanceTypeDetailsRequestFilterSensitiveLog = (obj: ListInstanceTypeDetailsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceTypeDetailsFilterSensitiveLog = (obj: InstanceTypeDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInstanceTypeDetailsResponseFilterSensitiveLog = (obj: ListInstanceTypeDetailsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPackagesForDomainRequestFilterSensitiveLog = (obj: ListPackagesForDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPackagesForDomainResponseFilterSensitiveLog = (obj: ListPackagesForDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsRequestFilterSensitiveLog = (obj: ListTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsResponseFilterSensitiveLog = (obj: ListTagsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVersionsRequestFilterSensitiveLog = (obj: ListVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVersionsResponseFilterSensitiveLog = (obj: ListVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVpcEndpointAccessRequestFilterSensitiveLog = (obj: ListVpcEndpointAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVpcEndpointAccessResponseFilterSensitiveLog = (obj: ListVpcEndpointAccessResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVpcEndpointsRequestFilterSensitiveLog = (obj: ListVpcEndpointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVpcEndpointsResponseFilterSensitiveLog = (obj: ListVpcEndpointsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVpcEndpointsForDomainRequestFilterSensitiveLog = (obj: ListVpcEndpointsForDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVpcEndpointsForDomainResponseFilterSensitiveLog = (obj: ListVpcEndpointsForDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseReservedInstanceOfferingRequestFilterSensitiveLog = (
  obj: PurchaseReservedInstanceOfferingRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseReservedInstanceOfferingResponseFilterSensitiveLog = (
  obj: PurchaseReservedInstanceOfferingResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectInboundConnectionRequestFilterSensitiveLog = (obj: RejectInboundConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectInboundConnectionResponseFilterSensitiveLog = (obj: RejectInboundConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveTagsRequestFilterSensitiveLog = (obj: RemoveTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeVpcEndpointAccessRequestFilterSensitiveLog = (obj: RevokeVpcEndpointAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeVpcEndpointAccessResponseFilterSensitiveLog = (obj: RevokeVpcEndpointAccessResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartServiceSoftwareUpdateRequestFilterSensitiveLog = (obj: StartServiceSoftwareUpdateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartServiceSoftwareUpdateResponseFilterSensitiveLog = (obj: StartServiceSoftwareUpdateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDomainConfigRequestFilterSensitiveLog = (obj: UpdateDomainConfigRequest): any => ({
  ...obj,
  ...(obj.AdvancedSecurityOptions && {
    AdvancedSecurityOptions: AdvancedSecurityOptionsInputFilterSensitiveLog(obj.AdvancedSecurityOptions),
  }),
});

/**
 * @internal
 */
export const UpdateDomainConfigResponseFilterSensitiveLog = (obj: UpdateDomainConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePackageRequestFilterSensitiveLog = (obj: UpdatePackageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePackageResponseFilterSensitiveLog = (obj: UpdatePackageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVpcEndpointRequestFilterSensitiveLog = (obj: UpdateVpcEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVpcEndpointResponseFilterSensitiveLog = (obj: UpdateVpcEndpointResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpgradeDomainRequestFilterSensitiveLog = (obj: UpgradeDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpgradeDomainResponseFilterSensitiveLog = (obj: UpgradeDomainResponse): any => ({
  ...obj,
});
