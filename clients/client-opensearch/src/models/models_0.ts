// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { OpenSearchServiceException as __BaseException } from "./OpenSearchServiceException";

/**
 * @public
 * <p>Container for the parameters to the <code>AcceptInboundConnection</code> operation.</p>
 */
export interface AcceptInboundConnectionRequest {
  /**
   * @public
   * <p>The ID of the inbound connection to accept.</p>
   */
  ConnectionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectionMode = {
  DIRECT: "DIRECT",
  VPC_ENDPOINT: "VPC_ENDPOINT",
} as const;

/**
 * @public
 */
export type ConnectionMode = (typeof ConnectionMode)[keyof typeof ConnectionMode];

/**
 * @public
 * @enum
 */
export const InboundConnectionStatusCode = {
  ACTIVE: "ACTIVE",
  APPROVED: "APPROVED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  PENDING_ACCEPTANCE: "PENDING_ACCEPTANCE",
  PROVISIONING: "PROVISIONING",
  REJECTED: "REJECTED",
  REJECTING: "REJECTING",
} as const;

/**
 * @public
 */
export type InboundConnectionStatusCode =
  (typeof InboundConnectionStatusCode)[keyof typeof InboundConnectionStatusCode];

/**
 * @public
 * <p>The status of an inbound cross-cluster connection for OpenSearch Service.</p>
 */
export interface InboundConnectionStatus {
  /**
   * @public
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
   * @public
   * <p>Information about the connection.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Information about an Amazon OpenSearch Service domain.</p>
 */
export interface AWSDomainInformation {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the domain owner.</p>
   */
  OwnerId?: string;

  /**
   * @public
   * <p>Name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region in which the domain is located.</p>
   */
  Region?: string;
}

/**
 * @public
 * <p>Container for information about an OpenSearch Service domain.</p>
 */
export interface DomainInformationContainer {
  /**
   * @public
   * <p>Information about an Amazon OpenSearch Service domain.</p>
   */
  AWSDomainInformation?: AWSDomainInformation;
}

/**
 * @public
 * <p>Describes an inbound cross-cluster connection for Amazon OpenSearch Service. For more
 *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search
 *     for Amazon OpenSearch Service</a>.</p>
 */
export interface InboundConnection {
  /**
   * @public
   * <p>Information about the source (local) domain.</p>
   */
  LocalDomainInfo?: DomainInformationContainer;

  /**
   * @public
   * <p>Information about the destination (remote) domain.</p>
   */
  RemoteDomainInfo?: DomainInformationContainer;

  /**
   * @public
   * <p>The unique identifier of the connection.</p>
   */
  ConnectionId?: string;

  /**
   * @public
   * <p>The current status of the connection.</p>
   */
  ConnectionStatus?: InboundConnectionStatus;

  /**
   * @public
   * <p>The connection mode.</p>
   */
  ConnectionMode?: ConnectionMode | string;
}

/**
 * @public
 * <p>Contains details about the accepted inbound connection.</p>
 */
export interface AcceptInboundConnectionResponse {
  /**
   * @public
   * <p>Information about the accepted inbound connection.</p>
   */
  Connection?: InboundConnection;
}

/**
 * @public
 * <p>An error occured because the client wanted to access an unsupported operation.</p>
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
 * @public
 * <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
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
 * @public
 * <p>An exception for accessing or deleting a resource that doesn't exist.</p>
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
 * @public
 * <p>An error occurred because you don't have permissions to access the resource.</p>
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

/**
 * @public
 * @enum
 */
export const OptionState = {
  Active: "Active",
  Processing: "Processing",
  RequiresIndexDocuments: "RequiresIndexDocuments",
} as const;

/**
 * @public
 */
export type OptionState = (typeof OptionState)[keyof typeof OptionState];

/**
 * @public
 * <p>Provides the current status of an entity.</p>
 */
export interface OptionStatus {
  /**
   * @public
   * <p>The timestamp when the entity was created.</p>
   */
  CreationDate: Date | undefined;

  /**
   * @public
   * <p>The timestamp of the last time the entity was updated.</p>
   */
  UpdateDate: Date | undefined;

  /**
   * @public
   * <p>The latest version of the entity.</p>
   */
  UpdateVersion?: number;

  /**
   * @public
   * <p>The state of the entity.</p>
   */
  State: OptionState | string | undefined;

  /**
   * @public
   * <p>Indicates whether the entity is being deleted.</p>
   */
  PendingDeletion?: boolean;
}

/**
 * @public
 * <p>The configured access rules for the domain's search endpoint, and the current status of
 *    those rules.</p>
 */
export interface AccessPoliciesStatus {
  /**
   * @public
   * <p>The access policy configured for the domain. Access policies can be resource-based,
   *    IP-based, or IAM-based. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-access-policies">Configuring access policies</a>.</p>
   */
  Options: string | undefined;

  /**
   * @public
   * <p>The status of the access policy for the domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const ActionSeverity = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type ActionSeverity = (typeof ActionSeverity)[keyof typeof ActionSeverity];

/**
 * @public
 * @enum
 */
export const ActionStatus = {
  COMPLETED: "COMPLETED",
  ELIGIBLE: "ELIGIBLE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_ELIGIBLE: "NOT_ELIGIBLE",
  PENDING_UPDATE: "PENDING_UPDATE",
} as const;

/**
 * @public
 */
export type ActionStatus = (typeof ActionStatus)[keyof typeof ActionStatus];

/**
 * @public
 * @enum
 */
export const ActionType = {
  JVM_HEAP_SIZE_TUNING: "JVM_HEAP_SIZE_TUNING",
  JVM_YOUNG_GEN_TUNING: "JVM_YOUNG_GEN_TUNING",
  SERVICE_SOFTWARE_UPDATE: "SERVICE_SOFTWARE_UPDATE",
} as const;

/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * @public
 * <p> List of limits that are specific to a given instance type.</p>
 */
export interface AdditionalLimit {
  /**
   * @public
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
   * @public
   * <p> The values of the additional instance type limits.</p>
   */
  LimitValues?: string[];
}

/**
 * @public
 * <p>A tag (key-value pair) for an Amazon OpenSearch Service resource.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The tag key. Tag keys must be unique for the domain to which they are attached.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value assigned to the corresponding tag key. Tag values can be null and don't have to be
   *    unique in a tag set. For example, you can have a key value pair in a tag set of <code>project :
   *     Trinity</code> and <code>cost-center : Trinity</code>
   *          </p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>Container for the parameters to the <code>AddTags</code> operation. Specifies the tags to
 *    attach to the domain.</p>
 */
export interface AddTagsRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) for the OpenSearch Service domain to which you want to attach
   *    resource tags.</p>
   */
  ARN: string | undefined;

  /**
   * @public
   * <p>List of resource tags.</p>
   */
  TagList: Tag[] | undefined;
}

/**
 * @public
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
 * @public
 * <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
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
 * @public
 * <p>An exception for accessing or deleting a resource that doesn't exist.</p>
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
 * @public
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
   * @public
   * <p>The status of advanced options for the specified domain.</p>
   */
  Options: Record<string, string> | undefined;

  /**
   * @public
   * <p>The status of advanced options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p>The SAML identity povider information.</p>
 */
export interface SAMLIdp {
  /**
   * @public
   * <p>The metadata of the SAML application, in XML format.</p>
   */
  MetadataContent: string | undefined;

  /**
   * @public
   * <p>The unique entity ID of the application in the SAML identity provider.</p>
   */
  EntityId: string | undefined;
}

/**
 * @public
 * <p>Describes the SAML application configured for the domain.</p>
 */
export interface SAMLOptionsOutput {
  /**
   * @public
   * <p>True if SAML is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>Describes the SAML identity provider's information.</p>
   */
  Idp?: SAMLIdp;

  /**
   * @public
   * <p>The key used for matching the SAML subject attribute.</p>
   */
  SubjectKey?: string;

  /**
   * @public
   * <p>The key used for matching the SAML roles attribute.</p>
   */
  RolesKey?: string;

  /**
   * @public
   * <p>The duration, in minutes, after which a user session becomes inactive.</p>
   */
  SessionTimeoutMinutes?: number;
}

/**
 * @public
 * <p>Container for fine-grained access control settings.</p>
 */
export interface AdvancedSecurityOptions {
  /**
   * @public
   * <p>True if fine-grained access control is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>True if the internal user database is enabled.</p>
   */
  InternalUserDatabaseEnabled?: boolean;

  /**
   * @public
   * <p>Container for information about the SAML configuration for OpenSearch Dashboards.</p>
   */
  SAMLOptions?: SAMLOptionsOutput;

  /**
   * @public
   * <p>Date and time when the migration period will be disabled. Only necessary when <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-enabling-existing">enabling
   *     fine-grained access control on an existing domain</a>.</p>
   */
  AnonymousAuthDisableDate?: Date;

  /**
   * @public
   * <p>True if a 30-day migration period is enabled, during which administrators can create role
   *    mappings. Only necessary when <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-enabling-existing">enabling
   *     fine-grained access control on an existing domain</a>.</p>
   */
  AnonymousAuthEnabled?: boolean;
}

/**
 * @public
 * <p>Credentials for the master user for a domain.</p>
 */
export interface MasterUserOptions {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) for the master user. Only specify if
   *     <code>InternalUserDatabaseEnabled</code> is <code>false</code>.</p>
   */
  MasterUserARN?: string;

  /**
   * @public
   * <p>User name for the master user. Only specify if <code>InternalUserDatabaseEnabled</code> is
   *     <code>true</code>.</p>
   */
  MasterUserName?: string;

  /**
   * @public
   * <p>Password for the master user. Only specify if <code>InternalUserDatabaseEnabled</code> is
   *     <code>true</code>.</p>
   */
  MasterUserPassword?: string;
}

/**
 * @public
 * <p>The SAML authentication configuration for an Amazon OpenSearch Service domain.</p>
 */
export interface SAMLOptionsInput {
  /**
   * @public
   * <p>True to enable SAML authentication for a domain.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The SAML Identity Provider's information.</p>
   */
  Idp?: SAMLIdp;

  /**
   * @public
   * <p>The SAML master user name, which is stored in the domain's internal user database.</p>
   */
  MasterUserName?: string;

  /**
   * @public
   * <p>The backend role that the SAML master user is mapped to.</p>
   */
  MasterBackendRole?: string;

  /**
   * @public
   * <p>Element of the SAML assertion to use for the user name. Default is
   *    <code>NameID</code>.</p>
   */
  SubjectKey?: string;

  /**
   * @public
   * <p>Element of the SAML assertion to use for backend roles. Default is
   *    <code>roles</code>.</p>
   */
  RolesKey?: string;

  /**
   * @public
   * <p>The duration, in minutes, after which a user session becomes inactive. Acceptable values are between 1 and 1440,
   *    and the default value is 60.</p>
   */
  SessionTimeoutMinutes?: number;
}

/**
 * @public
 * <p>Options for enabling and configuring fine-grained access control. For more information, see
 *     <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html">Fine-grained access control in Amazon OpenSearch Service</a>.</p>
 */
export interface AdvancedSecurityOptionsInput {
  /**
   * @public
   * <p>True to enable fine-grained access control.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>True to enable the internal user database.</p>
   */
  InternalUserDatabaseEnabled?: boolean;

  /**
   * @public
   * <p>Container for information about the master user.</p>
   */
  MasterUserOptions?: MasterUserOptions;

  /**
   * @public
   * <p>Container for information about the SAML configuration for OpenSearch Dashboards.</p>
   */
  SAMLOptions?: SAMLOptionsInput;

  /**
   * @public
   * <p>True to enable a 30-day migration period during which administrators can create role
   *    mappings. Only necessary when <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-enabling-existing">enabling
   *     fine-grained access control on an existing domain</a>.</p>
   */
  AnonymousAuthEnabled?: boolean;
}

/**
 * @public
 * <p>The status of fine-grained access control settings for a domain.</p>
 */
export interface AdvancedSecurityOptionsStatus {
  /**
   * @public
   * <p>Container for fine-grained access control settings.</p>
   */
  Options: AdvancedSecurityOptions | undefined;

  /**
   * @public
   * <p>Status of the fine-grained access control settings for a domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p>Container for the request parameters to the <code>AssociatePackage</code> operation.</p>
 */
export interface AssociatePackageRequest {
  /**
   * @public
   * <p>Internal ID of the package to associate with a domain. Use <code>DescribePackages</code> to find this value.
   *   </p>
   */
  PackageID: string | undefined;

  /**
   * @public
   * <p>Name of the domain to associate the package with.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DomainPackageStatus = {
  ACTIVE: "ACTIVE",
  ASSOCIATING: "ASSOCIATING",
  ASSOCIATION_FAILED: "ASSOCIATION_FAILED",
  DISSOCIATING: "DISSOCIATING",
  DISSOCIATION_FAILED: "DISSOCIATION_FAILED",
} as const;

/**
 * @public
 */
export type DomainPackageStatus = (typeof DomainPackageStatus)[keyof typeof DomainPackageStatus];

/**
 * @public
 * <p>Additional information if the package is in an error state. Null otherwise.</p>
 */
export interface ErrorDetails {
  /**
   * @public
   * <p>The type of error that occurred.</p>
   */
  ErrorType?: string;

  /**
   * @public
   * <p>A message describing the error.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * @enum
 */
export const PackageType = {
  TXT_DICTIONARY: "TXT-DICTIONARY",
} as const;

/**
 * @public
 */
export type PackageType = (typeof PackageType)[keyof typeof PackageType];

/**
 * @public
 * <p>Information about a package that is associated with a domain. For more information, see
 *     <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>.</p>
 */
export interface DomainPackageDetails {
  /**
   * @public
   * <p>Internal ID of the package.</p>
   */
  PackageID?: string;

  /**
   * @public
   * <p>User-specified name of the package.</p>
   */
  PackageName?: string;

  /**
   * @public
   * <p>The type of package.</p>
   */
  PackageType?: PackageType | string;

  /**
   * @public
   * <p>Timestamp of the most recent update to the package association status.</p>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>Name of the domain that the package is associated with.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>State of the association.</p>
   */
  DomainPackageStatus?: DomainPackageStatus | string;

  /**
   * @public
   * <p>The current version of the package.</p>
   */
  PackageVersion?: string;

  /**
   * @public
   * <p>The relative path of the package on the OpenSearch Service cluster nodes. This is <code>synonym_path</code>
   *    when the package is for synonym files.</p>
   */
  ReferencePath?: string;

  /**
   * @public
   * <p>Additional information if the package is in an error state. Null otherwise.</p>
   */
  ErrorDetails?: ErrorDetails;
}

/**
 * @public
 * <p>Container for the response returned by the <code>AssociatePackage</code> operation.</p>
 */
export interface AssociatePackageResponse {
  /**
   * @public
   * <p>Information about a package that is associated with a domain.</p>
   */
  DomainPackageDetails?: DomainPackageDetails;
}

/**
 * @public
 * <p>An error occurred because the client attempts to remove a resource that is currently in use.</p>
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

/**
 * @public
 */
export interface AuthorizeVpcEndpointAccessRequest {
  /**
   * @public
   * <p>The name of the OpenSearch Service domain to provide access to.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID to grant access to.</p>
   */
  Account: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PrincipalType = {
  AWS_ACCOUNT: "AWS_ACCOUNT",
  AWS_SERVICE: "AWS_SERVICE",
} as const;

/**
 * @public
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

/**
 * @public
 * <p>Information about an Amazon Web Services account or service that has access to an Amazon
 *    OpenSearch Service domain through the use of an interface VPC endpoint.</p>
 */
export interface AuthorizedPrincipal {
  /**
   * @public
   * <p>The type of principal.</p>
   */
  PrincipalType?: PrincipalType | string;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM principal</a> that is allowed access to the domain.</p>
   */
  Principal?: string;
}

/**
 * @public
 */
export interface AuthorizeVpcEndpointAccessResponse {
  /**
   * @public
   * <p>Information about the Amazon Web Services account or service that was provided access to the
   *    domain.</p>
   */
  AuthorizedPrincipal: AuthorizedPrincipal | undefined;
}

/**
 * @public
 * <p>Container for the request parameters to cancel a service software update.</p>
 */
export interface CancelServiceSoftwareUpdateRequest {
  /**
   * @public
   * <p>Name of the OpenSearch Service domain that you want to cancel the service software update
   *    on.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  COMPLETED: "COMPLETED",
  ELIGIBLE: "ELIGIBLE",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_ELIGIBLE: "NOT_ELIGIBLE",
  PENDING_UPDATE: "PENDING_UPDATE",
} as const;

/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 * <p>The current status of the service software for an Amazon OpenSearch Service domain. For more
 *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">Service software updates in
 *     Amazon OpenSearch Service</a>.</p>
 */
export interface ServiceSoftwareOptions {
  /**
   * @public
   * <p>The current service software version present on the domain.</p>
   */
  CurrentVersion?: string;

  /**
   * @public
   * <p>The new service software version, if one is available.</p>
   */
  NewVersion?: string;

  /**
   * @public
   * <p>True if you're able to update your service software version. False if you can't update your
   *    service software version.</p>
   */
  UpdateAvailable?: boolean;

  /**
   * @public
   * <p> True if you're able to cancel your service software version update. False if you can't
   *    cancel your service software update.</p>
   */
  Cancellable?: boolean;

  /**
   * @public
   * <p>The status of your service software update.</p>
   */
  UpdateStatus?: DeploymentStatus | string;

  /**
   * @public
   * <p>A description of the service software update status.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The timestamp, in Epoch time, until which you can manually request a service software update. After this date,
   *    we automatically update your service software.</p>
   */
  AutomatedUpdateDate?: Date;

  /**
   * @public
   * <p>True if a service software is never automatically updated. False if a service software is
   *    automatically updated after the automated update date.</p>
   */
  OptionalDeployment?: boolean;
}

/**
 * @public
 * <p>Container for the response to a <code>CancelServiceSoftwareUpdate</code> operation. Contains
 *    the status of the update.</p>
 */
export interface CancelServiceSoftwareUpdateResponse {
  /**
   * @public
   * <p>Container for the state of your domain relative to the latest service software.</p>
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}

/**
 * @public
 * @enum
 */
export const AutoTuneDesiredState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AutoTuneDesiredState = (typeof AutoTuneDesiredState)[keyof typeof AutoTuneDesiredState];

/**
 * @public
 * @enum
 */
export const TimeUnit = {
  HOURS: "HOURS",
} as const;

/**
 * @public
 */
export type TimeUnit = (typeof TimeUnit)[keyof typeof TimeUnit];

/**
 * @public
 * <p>The duration of a maintenance schedule. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for
 *     Amazon OpenSearch Service</a>.</p>
 */
export interface Duration {
  /**
   * @public
   * <p>Integer to specify the value of a maintenance schedule duration.</p>
   */
  Value?: number;

  /**
   * @public
   * <p>The unit of measurement for the duration of a maintenance schedule.</p>
   */
  Unit?: TimeUnit | string;
}

/**
 * @public
 * <note>
 *             <p>This object is deprecated. Use the domain's <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html">off-peak window</a> to
 *     schedule Auto-Tune optimizations. For migration instructions, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html#off-peak-migrate">Migrating from Auto-Tune
 *      maintenance windows</a>.</p>
 *          </note>
 *          <p>The Auto-Tune maintenance schedule.
 *    For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch
 *     Service</a>.</p>
 */
export interface AutoTuneMaintenanceSchedule {
  /**
   * @public
   * <p>The Epoch timestamp at which the Auto-Tune maintenance schedule starts.</p>
   */
  StartAt?: Date;

  /**
   * @public
   * <p>The duration of the maintenance schedule. For example, <code>"Duration": \{"Value": 2,
   *     "Unit": "HOURS"\}</code>.</p>
   */
  Duration?: Duration;

  /**
   * @public
   * <p>A cron expression for a recurring maintenance schedule during which Auto-Tune can deploy
   *    changes.</p>
   */
  CronExpressionForRecurrence?: string;
}

/**
 * @public
 * <p>Options for configuring Auto-Tune. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch
 *     Service</a>
 *          </p>
 */
export interface AutoTuneOptionsInput {
  /**
   * @public
   * <p>Whether Auto-Tune is enabled or disabled.</p>
   */
  DesiredState?: AutoTuneDesiredState | string;

  /**
   * @public
   * <p>A list of maintenance schedules during which Auto-Tune can deploy changes. Maintenance windows are deprecated and have been replaced with <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html">off-peak windows</a>.</p>
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[];

  /**
   * @public
   * <p>Whether to schedule Auto-Tune optimizations that require blue/green deployments during the domain's configured daily off-peak window.</p>
   */
  UseOffPeakWindow?: boolean;
}

/**
 * @public
 * <p>Container for the parameters required to enable cold storage for an OpenSearch Service
 *    domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cold-storage.html">Cold storage for Amazon
 *     OpenSearch Service</a>.</p>
 */
export interface ColdStorageOptions {
  /**
   * @public
   * <p>Whether to enable or disable cold storage on the domain.</p>
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const OpenSearchPartitionInstanceType = {
  c4_2xlarge_search: "c4.2xlarge.search",
  c4_4xlarge_search: "c4.4xlarge.search",
  c4_8xlarge_search: "c4.8xlarge.search",
  c4_large_search: "c4.large.search",
  c4_xlarge_search: "c4.xlarge.search",
  c5_18xlarge_search: "c5.18xlarge.search",
  c5_2xlarge_search: "c5.2xlarge.search",
  c5_4xlarge_search: "c5.4xlarge.search",
  c5_9xlarge_search: "c5.9xlarge.search",
  c5_large_search: "c5.large.search",
  c5_xlarge_search: "c5.xlarge.search",
  c6g_12xlarge_search: "c6g.12xlarge.search",
  c6g_2xlarge_search: "c6g.2xlarge.search",
  c6g_4xlarge_search: "c6g.4xlarge.search",
  c6g_8xlarge_search: "c6g.8xlarge.search",
  c6g_large_search: "c6g.large.search",
  c6g_xlarge_search: "c6g.xlarge.search",
  d2_2xlarge_search: "d2.2xlarge.search",
  d2_4xlarge_search: "d2.4xlarge.search",
  d2_8xlarge_search: "d2.8xlarge.search",
  d2_xlarge_search: "d2.xlarge.search",
  i2_2xlarge_search: "i2.2xlarge.search",
  i2_xlarge_search: "i2.xlarge.search",
  i3_16xlarge_search: "i3.16xlarge.search",
  i3_2xlarge_search: "i3.2xlarge.search",
  i3_4xlarge_search: "i3.4xlarge.search",
  i3_8xlarge_search: "i3.8xlarge.search",
  i3_large_search: "i3.large.search",
  i3_xlarge_search: "i3.xlarge.search",
  m3_2xlarge_search: "m3.2xlarge.search",
  m3_large_search: "m3.large.search",
  m3_medium_search: "m3.medium.search",
  m3_xlarge_search: "m3.xlarge.search",
  m4_10xlarge_search: "m4.10xlarge.search",
  m4_2xlarge_search: "m4.2xlarge.search",
  m4_4xlarge_search: "m4.4xlarge.search",
  m4_large_search: "m4.large.search",
  m4_xlarge_search: "m4.xlarge.search",
  m5_12xlarge_search: "m5.12xlarge.search",
  m5_24xlarge_search: "m5.24xlarge.search",
  m5_2xlarge_search: "m5.2xlarge.search",
  m5_4xlarge_search: "m5.4xlarge.search",
  m5_large_search: "m5.large.search",
  m5_xlarge_search: "m5.xlarge.search",
  m6g_12xlarge_search: "m6g.12xlarge.search",
  m6g_2xlarge_search: "m6g.2xlarge.search",
  m6g_4xlarge_search: "m6g.4xlarge.search",
  m6g_8xlarge_search: "m6g.8xlarge.search",
  m6g_large_search: "m6g.large.search",
  m6g_xlarge_search: "m6g.xlarge.search",
  r3_2xlarge_search: "r3.2xlarge.search",
  r3_4xlarge_search: "r3.4xlarge.search",
  r3_8xlarge_search: "r3.8xlarge.search",
  r3_large_search: "r3.large.search",
  r3_xlarge_search: "r3.xlarge.search",
  r4_16xlarge_search: "r4.16xlarge.search",
  r4_2xlarge_search: "r4.2xlarge.search",
  r4_4xlarge_search: "r4.4xlarge.search",
  r4_8xlarge_search: "r4.8xlarge.search",
  r4_large_search: "r4.large.search",
  r4_xlarge_search: "r4.xlarge.search",
  r5_12xlarge_search: "r5.12xlarge.search",
  r5_24xlarge_search: "r5.24xlarge.search",
  r5_2xlarge_search: "r5.2xlarge.search",
  r5_4xlarge_search: "r5.4xlarge.search",
  r5_large_search: "r5.large.search",
  r5_xlarge_search: "r5.xlarge.search",
  r6g_12xlarge_search: "r6g.12xlarge.search",
  r6g_2xlarge_search: "r6g.2xlarge.search",
  r6g_4xlarge_search: "r6g.4xlarge.search",
  r6g_8xlarge_search: "r6g.8xlarge.search",
  r6g_large_search: "r6g.large.search",
  r6g_xlarge_search: "r6g.xlarge.search",
  r6gd_12xlarge_search: "r6gd.12xlarge.search",
  r6gd_16xlarge_search: "r6gd.16xlarge.search",
  r6gd_2xlarge_search: "r6gd.2xlarge.search",
  r6gd_4xlarge_search: "r6gd.4xlarge.search",
  r6gd_8xlarge_search: "r6gd.8xlarge.search",
  r6gd_large_search: "r6gd.large.search",
  r6gd_xlarge_search: "r6gd.xlarge.search",
  t2_medium_search: "t2.medium.search",
  t2_micro_search: "t2.micro.search",
  t2_small_search: "t2.small.search",
  t3_2xlarge_search: "t3.2xlarge.search",
  t3_large_search: "t3.large.search",
  t3_medium_search: "t3.medium.search",
  t3_micro_search: "t3.micro.search",
  t3_nano_search: "t3.nano.search",
  t3_small_search: "t3.small.search",
  t3_xlarge_search: "t3.xlarge.search",
  t4g_medium_search: "t4g.medium.search",
  t4g_small_search: "t4g.small.search",
  ultrawarm1_large_search: "ultrawarm1.large.search",
  ultrawarm1_medium_search: "ultrawarm1.medium.search",
  ultrawarm1_xlarge_search: "ultrawarm1.xlarge.search",
} as const;

/**
 * @public
 */
export type OpenSearchPartitionInstanceType =
  (typeof OpenSearchPartitionInstanceType)[keyof typeof OpenSearchPartitionInstanceType];

/**
 * @public
 * @enum
 */
export const OpenSearchWarmPartitionInstanceType = {
  ultrawarm1_large_search: "ultrawarm1.large.search",
  ultrawarm1_medium_search: "ultrawarm1.medium.search",
  ultrawarm1_xlarge_search: "ultrawarm1.xlarge.search",
} as const;

/**
 * @public
 */
export type OpenSearchWarmPartitionInstanceType =
  (typeof OpenSearchWarmPartitionInstanceType)[keyof typeof OpenSearchWarmPartitionInstanceType];

/**
 * @public
 * <p>The zone awareness configuration for an Amazon OpenSearch Service domain.</p>
 */
export interface ZoneAwarenessConfig {
  /**
   * @public
   * <p>If you enabled multiple Availability Zones, this value is the number of zones that you want
   *    the domain to use. Valid values are <code>2</code> and <code>3</code>. If your domain is
   *    provisioned within a VPC, this value be equal to number of subnets.</p>
   */
  AvailabilityZoneCount?: number;
}

/**
 * @public
 * <p>Container for the cluster configuration of an OpenSearch Service domain. For more
 *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html">Creating and managing Amazon OpenSearch Service domains</a>.</p>
 */
export interface ClusterConfig {
  /**
   * @public
   * <p>Instance type of data nodes in the cluster.</p>
   */
  InstanceType?: OpenSearchPartitionInstanceType | string;

  /**
   * @public
   * <p>Number of dedicated master nodes in the cluster. This number must be greater than 1,
   *    otherwise you receive a validation exception.</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>Indicates whether dedicated master nodes are enabled for the cluster.<code>True</code> if
   *    the cluster will use a dedicated master node.<code>False</code> if the cluster will not.</p>
   */
  DedicatedMasterEnabled?: boolean;

  /**
   * @public
   * <p>Indicates whether multiple Availability Zones are enabled. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-multiaz.html">Configuring a multi-AZ domain in Amazon OpenSearch Service</a>.</p>
   */
  ZoneAwarenessEnabled?: boolean;

  /**
   * @public
   * <p>Container for zone awareness configuration options. Only required if
   *     <code>ZoneAwarenessEnabled</code> is <code>true</code>.</p>
   */
  ZoneAwarenessConfig?: ZoneAwarenessConfig;

  /**
   * @public
   * <p>OpenSearch Service instance type of the dedicated master nodes in the cluster.</p>
   */
  DedicatedMasterType?: OpenSearchPartitionInstanceType | string;

  /**
   * @public
   * <p>Number of dedicated master nodes in the cluster. This number must be greater than 2 and not 4,
   *    otherwise you receive a validation exception.</p>
   */
  DedicatedMasterCount?: number;

  /**
   * @public
   * <p>Whether to enable warm storage for the cluster.</p>
   */
  WarmEnabled?: boolean;

  /**
   * @public
   * <p>The instance type for the cluster's warm nodes.</p>
   */
  WarmType?: OpenSearchWarmPartitionInstanceType | string;

  /**
   * @public
   * <p>The number of warm nodes in the cluster.</p>
   */
  WarmCount?: number;

  /**
   * @public
   * <p>Container for cold storage configuration options.</p>
   */
  ColdStorageOptions?: ColdStorageOptions;

  /**
   * @public
   * <p>A boolean that indicates whether a multi-AZ domain is turned on with a standby AZ. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-multiaz.html">Configuring a multi-AZ domain in Amazon OpenSearch Service</a>. </p>
   */
  MultiAZWithStandbyEnabled?: boolean;
}

/**
 * @public
 * <p>Container for the parameters required to enable Cognito authentication for an OpenSearch
 *    Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html">Configuring Amazon Cognito
 *     authentication for OpenSearch Dashboards</a>.</p>
 */
export interface CognitoOptions {
  /**
   * @public
   * <p>Whether to enable or disable Amazon Cognito authentication for OpenSearch Dashboards.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The Amazon Cognito user pool ID that you want OpenSearch Service to use for OpenSearch
   *    Dashboards authentication.</p>
   */
  UserPoolId?: string;

  /**
   * @public
   * <p>The Amazon Cognito identity pool ID that you want OpenSearch Service to use for OpenSearch
   *    Dashboards authentication.</p>
   */
  IdentityPoolId?: string;

  /**
   * @public
   * <p>The <code>AmazonOpenSearchServiceCognitoAccess</code> role that allows OpenSearch Service to
   *    configure your user pool and identity pool.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 * @enum
 */
export const TLSSecurityPolicy = {
  POLICY_MIN_TLS_1_0_2019_07: "Policy-Min-TLS-1-0-2019-07",
  POLICY_MIN_TLS_1_2_2019_07: "Policy-Min-TLS-1-2-2019-07",
} as const;

/**
 * @public
 */
export type TLSSecurityPolicy = (typeof TLSSecurityPolicy)[keyof typeof TLSSecurityPolicy];

/**
 * @public
 * <p>Options to configure a custom endpoint for an OpenSearch Service domain.</p>
 */
export interface DomainEndpointOptions {
  /**
   * @public
   * <p>True to require that all traffic to the domain arrive over HTTPS.</p>
   */
  EnforceHTTPS?: boolean;

  /**
   * @public
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
   * @public
   * <p>Whether to enable a custom endpoint for the domain.</p>
   */
  CustomEndpointEnabled?: boolean;

  /**
   * @public
   * <p>The fully qualified URL for the custom endpoint.</p>
   */
  CustomEndpoint?: string;

  /**
   * @public
   * <p>The ARN for your security certificate, managed in Amazon Web Services Certificate Manager
   *    (ACM).</p>
   */
  CustomEndpointCertificateArn?: string;
}

/**
 * @public
 * @enum
 */
export const VolumeType = {
  gp2: "gp2",
  gp3: "gp3",
  io1: "io1",
  standard: "standard",
} as const;

/**
 * @public
 */
export type VolumeType = (typeof VolumeType)[keyof typeof VolumeType];

/**
 * @public
 * <p>Container for the parameters required to enable EBS-based storage for an OpenSearch Service
 *    domain.</p>
 */
export interface EBSOptions {
  /**
   * @public
   * <p>Indicates whether EBS volumes are attached to data nodes in an OpenSearch Service
   *    domain.</p>
   */
  EBSEnabled?: boolean;

  /**
   * @public
   * <p>Specifies the type of EBS volumes attached to data nodes.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * @public
   * <p>Specifies the size (in GiB) of EBS volumes attached to data nodes.</p>
   */
  VolumeSize?: number;

  /**
   * @public
   * <p>Specifies the baseline input/output (I/O) performance of EBS volumes attached to data nodes.
   *    Applicable only for the <code>gp3</code> and provisioned IOPS EBS volume types.</p>
   */
  Iops?: number;

  /**
   * @public
   * <p>Specifies the throughput (in MiB/s) of the EBS volumes attached to data nodes. Applicable
   *    only for the <code>gp3</code> volume type.</p>
   */
  Throughput?: number;
}

/**
 * @public
 * <p>Specifies whether the domain should encrypt data at rest, and if so, the Key Management
 *    Service (KMS) key to use. Can be used only to create a new domain, not update an existing
 *    one.</p>
 */
export interface EncryptionAtRestOptions {
  /**
   * @public
   * <p>True to enable encryption at rest.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The KMS key ID. Takes the form <code>1a2a3a4-1a2a-3a4a-5a6a-1a2a3a4a5a6a</code>.</p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 * @enum
 */
export const LogType = {
  AUDIT_LOGS: "AUDIT_LOGS",
  ES_APPLICATION_LOGS: "ES_APPLICATION_LOGS",
  INDEX_SLOW_LOGS: "INDEX_SLOW_LOGS",
  SEARCH_SLOW_LOGS: "SEARCH_SLOW_LOGS",
} as const;

/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * @public
 * <p>Specifies whether the Amazon OpenSearch Service domain publishes the OpenSearch application
 *    and slow logs to Amazon CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createdomain-configure-slow-logs.html">Monitoring OpenSearch logs with Amazon CloudWatch Logs</a>.</p>
 *          <note>
 *             <p>After you enable log publishing, you still have to enable the collection of slow logs using
 *     the OpenSearch REST API.</p>
 *          </note>
 */
export interface LogPublishingOption {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the CloudWatch Logs group to publish logs to.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * @public
   * <p>Whether the log should be published.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Enables or disables node-to-node encryption. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ntn.html">Node-to-node encryption for Amazon OpenSearch Service</a>.</p>
 */
export interface NodeToNodeEncryptionOptions {
  /**
   * @public
   * <p>True to enable node-to-node encryption.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>The desired start time for an <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html">off-peak maintenance
 *     window</a>.</p>
 */
export interface WindowStartTime {
  /**
   * @public
   * <p>The start hour of the window in Coordinated Universal Time (UTC), using 24-hour time. For example, <code>17</code> refers to
   *    5:00 P.M. UTC.</p>
   */
  Hours: number | undefined;

  /**
   * @public
   * <p>The start minute of the window, in UTC.</p>
   */
  Minutes: number | undefined;
}

/**
 * @public
 * <p>A custom 10-hour, low-traffic window during which OpenSearch Service can perform mandatory
 *    configuration changes on the domain. These actions can include scheduled service software updates
 *    and blue/green Auto-Tune enhancements. OpenSearch Service will schedule these
 *    actions during the window that you specify.</p>
 *          <p>If you don't specify a window start time, it defaults to 10:00 P.M. local time.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html">Defining off-peak maintenance
 *     windows for Amazon OpenSearch Service</a>.</p>
 */
export interface OffPeakWindow {
  /**
   * @public
   * <p>A custom start time for the off-peak window, in Coordinated Universal Time (UTC). The window
   *    length will always be 10 hours, so you can't specify an end time. For example, if you specify
   *    11:00 P.M. UTC as a start time, the end time will automatically be set to 9:00 A.M.</p>
   */
  WindowStartTime?: WindowStartTime;
}

/**
 * @public
 * <p>Options for a domain's <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html">off-peak window</a>,
 *    during which OpenSearch Service can perform mandatory configuration changes on the domain.</p>
 */
export interface OffPeakWindowOptions {
  /**
   * @public
   * <p>Whether to enable an off-peak window.</p>
   *          <p>This option is only available when modifying a domain created prior to February 16, 2023,
   *    not when creating a new domain. All domains created after this date have the off-peak window
   *    enabled by default. You can't disable the off-peak window after it's enabled for a domain.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>Off-peak window settings for the domain.</p>
   */
  OffPeakWindow?: OffPeakWindow;
}

/**
 * @public
 * <p>The time, in UTC format, when OpenSearch Service takes a daily automated snapshot of the
 *    specified domain. Default is <code>0</code> hours.</p>
 */
export interface SnapshotOptions {
  /**
   * @public
   * <p>The time, in UTC format, when OpenSearch Service takes a daily automated snapshot of the
   *    specified domain. Default is <code>0</code> hours.</p>
   */
  AutomatedSnapshotStartHour?: number;
}

/**
 * @public
 * <p>Options for configuring service software updates for a domain.</p>
 */
export interface SoftwareUpdateOptions {
  /**
   * @public
   * <p>Whether automatic service software updates are enabled for the domain.</p>
   */
  AutoSoftwareUpdateEnabled?: boolean;
}

/**
 * @public
 * <p>Options to specify the subnets and security groups for an Amazon OpenSearch Service VPC
 *    endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching your Amazon OpenSearch Service
 *     domains using a VPC</a>.</p>
 */
export interface VPCOptions {
  /**
   * @public
   * <p>A list of subnet IDs associated with the VPC endpoints for the domain. If your domain uses
   *    multiple Availability Zones, you need to provide two subnet IDs, one per zone. Otherwise, provide
   *    only one.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>The list of security group IDs associated with the VPC endpoints for the domain. If you do
   *    not provide a security group ID, OpenSearch Service uses the default security group for the VPC.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * @public
 */
export interface CreateDomainRequest {
  /**
   * @public
   * <p>Name of the OpenSearch Service domain to create. Domain names are unique across the domains
   *    owned by an account within an Amazon Web Services Region.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>String of format Elasticsearch_X.Y or OpenSearch_X.Y to specify the engine version for the
   *    OpenSearch Service domain. For example, <code>OpenSearch_1.0</code> or
   *     <code>Elasticsearch_7.9</code>. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomains">Creating
   *     and managing Amazon OpenSearch Service domains</a>.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>Container for the cluster configuration of a domain.</p>
   */
  ClusterConfig?: ClusterConfig;

  /**
   * @public
   * <p>Container for the parameters required to enable EBS-based storage for an OpenSearch Service
   *    domain.</p>
   */
  EBSOptions?: EBSOptions;

  /**
   * @public
   * <p>Identity and Access Management (IAM) policy document specifying the access policies for the
   *    new domain.</p>
   */
  AccessPolicies?: string;

  /**
   * @public
   * <p>DEPRECATED. Container for the parameters required to configure automated snapshots of domain
   *    indexes.</p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * @public
   * <p>Container for the values required to configure VPC access domains. If you don't specify
   *    these values, OpenSearch Service creates the domain with a public endpoint. For more information,
   *    see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching
   *     your Amazon OpenSearch Service domains using a VPC</a>.</p>
   */
  VPCOptions?: VPCOptions;

  /**
   * @public
   * <p>Key-value pairs to configure Amazon Cognito authentication. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html">Configuring Amazon Cognito authentication for OpenSearch Dashboards</a>.</p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * @public
   * <p>Key-value pairs to enable encryption at rest.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * @public
   * <p>Enables node-to-node encryption.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * @public
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
   * @public
   * <p>Key-value pairs to configure log publishing.</p>
   */
  LogPublishingOptions?: Record<string, LogPublishingOption>;

  /**
   * @public
   * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
   *    traffic.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * @public
   * <p>Options for fine-grained access control.</p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;

  /**
   * @public
   * <p>List of tags to add to the domain upon creation.</p>
   */
  TagList?: Tag[];

  /**
   * @public
   * <p>Options for Auto-Tune.</p>
   */
  AutoTuneOptions?: AutoTuneOptionsInput;

  /**
   * @public
   * <p>Specifies a daily 10-hour time block during which OpenSearch Service can perform
   *    configuration changes on the domain, including service software updates and Auto-Tune
   *    enhancements that require a blue/green deployment. If no options are specified, the default start
   *    time of 10:00 P.M. local time (for the Region that the domain is created in) is used.</p>
   */
  OffPeakWindowOptions?: OffPeakWindowOptions;

  /**
   * @public
   * <p>Software update options for the domain.</p>
   */
  SoftwareUpdateOptions?: SoftwareUpdateOptions;
}

/**
 * @public
 * @enum
 */
export const AutoTuneState = {
  DISABLED: "DISABLED",
  DISABLED_AND_ROLLBACK_COMPLETE: "DISABLED_AND_ROLLBACK_COMPLETE",
  DISABLED_AND_ROLLBACK_ERROR: "DISABLED_AND_ROLLBACK_ERROR",
  DISABLED_AND_ROLLBACK_IN_PROGRESS: "DISABLED_AND_ROLLBACK_IN_PROGRESS",
  DISABLED_AND_ROLLBACK_SCHEDULED: "DISABLED_AND_ROLLBACK_SCHEDULED",
  DISABLE_IN_PROGRESS: "DISABLE_IN_PROGRESS",
  ENABLED: "ENABLED",
  ENABLE_IN_PROGRESS: "ENABLE_IN_PROGRESS",
  ERROR: "ERROR",
} as const;

/**
 * @public
 */
export type AutoTuneState = (typeof AutoTuneState)[keyof typeof AutoTuneState];

/**
 * @public
 * <p>The Auto-Tune settings for a domain, displayed when enabling or disabling Auto-Tune.</p>
 */
export interface AutoTuneOptionsOutput {
  /**
   * @public
   * <p>The current state of Auto-Tune on the domain.</p>
   */
  State?: AutoTuneState | string;

  /**
   * @public
   * <p>Any errors that occurred while enabling or disabling Auto-Tune.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>Whether the domain's off-peak window will be used to deploy Auto-Tune changes rather
   *    than a maintenance schedule.</p>
   */
  UseOffPeakWindow?: boolean;
}

/**
 * @public
 * <p>Container for information about a configuration change happening on a domain.</p>
 */
export interface ChangeProgressDetails {
  /**
   * @public
   * <p>The ID of the configuration change.</p>
   */
  ChangeId?: string;

  /**
   * @public
   * <p>A message corresponding to the status of the configuration change.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Information about the subnets and security groups for an Amazon OpenSearch Service domain
 *    provisioned within a virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching your
 *     Amazon OpenSearch Service domains using a VPC</a>. This information only exists if the
 *    domain was created with <code>VPCOptions</code>.</p>
 */
export interface VPCDerivedInfo {
  /**
   * @public
   * <p>The ID for your VPC. Amazon VPC generates this value when you create a VPC.</p>
   */
  VPCId?: string;

  /**
   * @public
   * <p>A list of subnet IDs associated with the VPC endpoints for the domain.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>The list of Availability Zones associated with the VPC subnets.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>The list of security group IDs associated with the VPC endpoints for the domain.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * @public
 * <p>The current status of an OpenSearch Service domain.</p>
 */
export interface DomainStatus {
  /**
   * @public
   * <p>Unique identifier for the domain.</p>
   */
  DomainId: string | undefined;

  /**
   * @public
   * <p>Name of the domain. Domain names are unique across all domains owned by the same account
   *    within an Amazon Web Services Region.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the domain. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM identifiers
   *    </a> in the <i>AWS Identity and Access Management User Guide</i>.</p>
   */
  ARN: string | undefined;

  /**
   * @public
   * <p>Creation status of an OpenSearch Service domain. True if domain creation is complete. False
   *    if domain creation is still in progress.</p>
   */
  Created?: boolean;

  /**
   * @public
   * <p>Deletion status of an OpenSearch Service domain. True if domain deletion is complete. False
   *    if domain deletion is still in progress. Once deletion is complete, the status of the domain is
   *    no longer returned.</p>
   */
  Deleted?: boolean;

  /**
   * @public
   * <p>Domain-specific endpoint used to submit index, search, and data upload requests to the
   *    domain.</p>
   */
  Endpoint?: string;

  /**
   * @public
   * <p>The key-value pair that exists if the OpenSearch Service domain uses VPC endpoints.. Example
   *     <code>key, value</code>:
   *     <code>'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com'</code>.</p>
   */
  Endpoints?: Record<string, string>;

  /**
   * @public
   * <p>The status of the domain configuration. True if OpenSearch Service is processing
   *    configuration changes. False if the configuration is active.</p>
   */
  Processing?: boolean;

  /**
   * @public
   * <p>The status of a domain version upgrade to a new version of OpenSearch or Elasticsearch. True
   *    if OpenSearch Service is in the process of a version upgrade. False if the configuration is
   *    active.</p>
   */
  UpgradeProcessing?: boolean;

  /**
   * @public
   * <p>Version of OpenSearch or Elasticsearch that the domain is running, in the format
   *     <code>Elasticsearch_X.Y</code> or <code>OpenSearch_X.Y</code>.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>Container for the cluster configuration of the domain.</p>
   */
  ClusterConfig: ClusterConfig | undefined;

  /**
   * @public
   * <p>Container for EBS-based storage settings for the domain.</p>
   */
  EBSOptions?: EBSOptions;

  /**
   * @public
   * <p>Identity and Access Management (IAM) policy document specifying the access policies for the
   *    domain.</p>
   */
  AccessPolicies?: string;

  /**
   * @public
   * <p>DEPRECATED. Container for parameters required to configure automated snapshots of domain
   *    indexes.</p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * @public
   * <p>The VPC configuration for the domain.</p>
   */
  VPCOptions?: VPCDerivedInfo;

  /**
   * @public
   * <p>Key-value pairs to configure Amazon Cognito authentication for OpenSearch Dashboards.</p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * @public
   * <p>Encryption at rest settings for the domain.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * @public
   * <p>Whether node-to-node encryption is enabled or disabled.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * @public
   * <p>Key-value pairs that specify advanced configuration options.</p>
   */
  AdvancedOptions?: Record<string, string>;

  /**
   * @public
   * <p>Log publishing options for the domain.</p>
   */
  LogPublishingOptions?: Record<string, LogPublishingOption>;

  /**
   * @public
   * <p>The current status of the domain's service software.</p>
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;

  /**
   * @public
   * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
   *    traffic.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * @public
   * <p>Settings for fine-grained access control.</p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptions;

  /**
   * @public
   * <p>Auto-Tune settings for the domain.</p>
   */
  AutoTuneOptions?: AutoTuneOptionsOutput;

  /**
   * @public
   * <p>Information about a configuration change happening on the domain.</p>
   */
  ChangeProgressDetails?: ChangeProgressDetails;

  /**
   * @public
   * <p>Options that specify a custom 10-hour window during which OpenSearch Service can perform
   *    configuration changes on the domain.</p>
   */
  OffPeakWindowOptions?: OffPeakWindowOptions;

  /**
   * @public
   * <p>Service software update options for the domain.</p>
   */
  SoftwareUpdateOptions?: SoftwareUpdateOptions;
}

/**
 * @public
 * <p>The result of a <code>CreateDomain</code> operation. Contains the status of the newly
 *    created domain.</p>
 */
export interface CreateDomainResponse {
  /**
   * @public
   * <p>The status of the newly created domain.</p>
   */
  DomainStatus?: DomainStatus;
}

/**
 * @public
 * <p>An exception for trying to create or access a sub-resource that's either invalid or not supported.</p>
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
 * @public
 * <p>An exception for creating a resource that already exists.</p>
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
 * @public
 * @enum
 */
export const SkipUnavailableStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type SkipUnavailableStatus = (typeof SkipUnavailableStatus)[keyof typeof SkipUnavailableStatus];

/**
 * @public
 * <p>Cross cluster search specific connection properties.</p>
 */
export interface CrossClusterSearchConnectionProperties {
  /**
   * @public
   * <p>Status of SkipUnavailable param for outbound connection.</p>
   */
  SkipUnavailable?: SkipUnavailableStatus | string;
}

/**
 * @public
 * <p>The connection properties of an outbound connection.</p>
 */
export interface ConnectionProperties {
  /**
   * @public
   * <important>
   *             <p>The Endpoint attribute cannot be modified. </p>
   *          </important>
   *          <p>The endpoint of the remote domain. Applicable for VPC_ENDPOINT connection mode.</p>
   */
  Endpoint?: string;

  /**
   * @public
   * <p>The connection properties for cross cluster search.</p>
   */
  CrossClusterSearch?: CrossClusterSearchConnectionProperties;
}

/**
 * @public
 * <p>Container for the parameters to the <code>CreateOutboundConnection</code> operation.</p>
 */
export interface CreateOutboundConnectionRequest {
  /**
   * @public
   * <p>Name and Region of the source (local) domain.</p>
   */
  LocalDomainInfo: DomainInformationContainer | undefined;

  /**
   * @public
   * <p>Name and Region of the destination (remote) domain.</p>
   */
  RemoteDomainInfo: DomainInformationContainer | undefined;

  /**
   * @public
   * <p>Name of the connection.</p>
   */
  ConnectionAlias: string | undefined;

  /**
   * @public
   * <p>The connection mode.</p>
   */
  ConnectionMode?: ConnectionMode | string;

  /**
   * @public
   * <p>The <code>ConnectionProperties</code> for the outbound connection.</p>
   */
  ConnectionProperties?: ConnectionProperties;
}

/**
 * @public
 * @enum
 */
export const OutboundConnectionStatusCode = {
  ACTIVE: "ACTIVE",
  APPROVED: "APPROVED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  PENDING_ACCEPTANCE: "PENDING_ACCEPTANCE",
  PROVISIONING: "PROVISIONING",
  REJECTED: "REJECTED",
  REJECTING: "REJECTING",
  VALIDATING: "VALIDATING",
  VALIDATION_FAILED: "VALIDATION_FAILED",
} as const;

/**
 * @public
 */
export type OutboundConnectionStatusCode =
  (typeof OutboundConnectionStatusCode)[keyof typeof OutboundConnectionStatusCode];

/**
 * @public
 * <p>The status of an outbound cross-cluster connection.</p>
 */
export interface OutboundConnectionStatus {
  /**
   * @public
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
   * @public
   * <p>Verbose information for the outbound connection.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The result of a <code>CreateOutboundConnection</code> request. Contains details about the
 *    newly created cross-cluster connection.</p>
 */
export interface CreateOutboundConnectionResponse {
  /**
   * @public
   * <p>Information about the source (local) domain.</p>
   */
  LocalDomainInfo?: DomainInformationContainer;

  /**
   * @public
   * <p>Information about the destination (remote) domain.</p>
   */
  RemoteDomainInfo?: DomainInformationContainer;

  /**
   * @public
   * <p>Name of the connection.</p>
   */
  ConnectionAlias?: string;

  /**
   * @public
   * <p>The status of the connection.</p>
   */
  ConnectionStatus?: OutboundConnectionStatus;

  /**
   * @public
   * <p>The unique identifier for the created outbound connection, which is used for subsequent
   *    operations on the connection.</p>
   */
  ConnectionId?: string;

  /**
   * @public
   * <p>The connection mode.</p>
   */
  ConnectionMode?: ConnectionMode | string;

  /**
   * @public
   * <p>The <code>ConnectionProperties</code> for the newly created connection.</p>
   */
  ConnectionProperties?: ConnectionProperties;
}

/**
 * @public
 * <p>The Amazon S3 location to import the package from.</p>
 */
export interface PackageSource {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket containing the package.</p>
   */
  S3BucketName?: string;

  /**
   * @public
   * <p>Key (file name) of the package.</p>
   */
  S3Key?: string;
}

/**
 * @public
 * <p>Container for request parameters to the <code>CreatePackage</code> operation.</p>
 */
export interface CreatePackageRequest {
  /**
   * @public
   * <p>Unique name for the package.</p>
   */
  PackageName: string | undefined;

  /**
   * @public
   * <p>The type of package.</p>
   */
  PackageType: PackageType | string | undefined;

  /**
   * @public
   * <p>Description of the package.</p>
   */
  PackageDescription?: string;

  /**
   * @public
   * <p>The Amazon S3 location from which to import the package.</p>
   */
  PackageSource: PackageSource | undefined;
}

/**
 * @public
 * @enum
 */
export const PackageStatus = {
  AVAILABLE: "AVAILABLE",
  COPYING: "COPYING",
  COPY_FAILED: "COPY_FAILED",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  VALIDATING: "VALIDATING",
  VALIDATION_FAILED: "VALIDATION_FAILED",
} as const;

/**
 * @public
 */
export type PackageStatus = (typeof PackageStatus)[keyof typeof PackageStatus];

/**
 * @public
 * <p>Basic information about a package.</p>
 */
export interface PackageDetails {
  /**
   * @public
   * <p>The unique identifier of the package.</p>
   */
  PackageID?: string;

  /**
   * @public
   * <p>The user-specified name of the package.</p>
   */
  PackageName?: string;

  /**
   * @public
   * <p>The type of package.</p>
   */
  PackageType?: PackageType | string;

  /**
   * @public
   * <p>User-specified description of the package.</p>
   */
  PackageDescription?: string;

  /**
   * @public
   * <p>The current status of the package. The available options are <code>AVAILABLE</code>, <code>COPYING</code>, <code>COPY_FAILED</code>, <code>VALIDATNG</code>, <code>VALIDATION_FAILED</code>, <code>DELETING</code>, and <code>DELETE_FAILED</code>.</p>
   */
  PackageStatus?: PackageStatus | string;

  /**
   * @public
   * <p>The timestamp when the package was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>Date and time when the package was last updated.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * @public
   * <p>The package version.</p>
   */
  AvailablePackageVersion?: string;

  /**
   * @public
   * <p>Additional information if the package is in an error state. Null otherwise.</p>
   */
  ErrorDetails?: ErrorDetails;
}

/**
 * @public
 * <p>Container for the response returned by the <code>CreatePackage</code> operation.</p>
 */
export interface CreatePackageResponse {
  /**
   * @public
   * <p>Basic information about an OpenSearch Service package.</p>
   */
  PackageDetails?: PackageDetails;
}

/**
 * @public
 */
export interface CreateVpcEndpointRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the domain to create the endpoint for.</p>
   */
  DomainArn: string | undefined;

  /**
   * @public
   * <p>Options to specify the subnets and security groups for the endpoint.</p>
   */
  VpcOptions: VPCOptions | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * @enum
 */
export const VpcEndpointStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type VpcEndpointStatus = (typeof VpcEndpointStatus)[keyof typeof VpcEndpointStatus];

/**
 * @public
 * <p>The connection endpoint for connecting to an Amazon OpenSearch Service domain through a
 *    proxy.</p>
 */
export interface VpcEndpoint {
  /**
   * @public
   * <p>The unique identifier of the endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * @public
   * <p>The creator of the endpoint.</p>
   */
  VpcEndpointOwner?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the domain associated with the endpoint.</p>
   */
  DomainArn?: string;

  /**
   * @public
   * <p>Options to specify the subnets and security groups for an Amazon OpenSearch Service VPC
   *    endpoint.</p>
   */
  VpcOptions?: VPCDerivedInfo;

  /**
   * @public
   * <p>The current status of the endpoint.</p>
   */
  Status?: VpcEndpointStatus | string;

  /**
   * @public
   * <p>The connection endpoint ID for connecting to the domain.</p>
   */
  Endpoint?: string;
}

/**
 * @public
 */
export interface CreateVpcEndpointResponse {
  /**
   * @public
   * <p>Information about the newly created VPC endpoint.</p>
   */
  VpcEndpoint: VpcEndpoint | undefined;
}

/**
 * @public
 * <p>Container for the parameters to the <code>DeleteDomain</code> operation.</p>
 */
export interface DeleteDomainRequest {
  /**
   * @public
   * <p>The name of the domain you want to permanently delete.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * <p>The results of a <code>DeleteDomain</code> request. Contains the status of the pending
 *    deletion, or a "domain not found" error if the domain and all of its resources have been deleted.</p>
 */
export interface DeleteDomainResponse {
  /**
   * @public
   * <p>The status of the domain being deleted.</p>
   */
  DomainStatus?: DomainStatus;
}

/**
 * @public
 * <p>Container for the parameters to the <code>DeleteInboundConnection</code> operation.</p>
 */
export interface DeleteInboundConnectionRequest {
  /**
   * @public
   * <p>The ID of the inbound connection to permanently delete.</p>
   */
  ConnectionId: string | undefined;
}

/**
 * @public
 * <p>The results of a <code>DeleteInboundConnection</code> operation. Contains details about the
 *    deleted inbound connection.</p>
 */
export interface DeleteInboundConnectionResponse {
  /**
   * @public
   * <p>The deleted inbound connection.</p>
   */
  Connection?: InboundConnection;
}

/**
 * @public
 * <p>Container for the parameters to the <code>DeleteOutboundConnection</code> operation.</p>
 */
export interface DeleteOutboundConnectionRequest {
  /**
   * @public
   * <p>The ID of the outbound connection you want to permanently delete.</p>
   */
  ConnectionId: string | undefined;
}

/**
 * @public
 * <p>Specifies details about an outbound cross-cluster connection.</p>
 */
export interface OutboundConnection {
  /**
   * @public
   * <p>Information about the source (local) domain.</p>
   */
  LocalDomainInfo?: DomainInformationContainer;

  /**
   * @public
   * <p>Information about the destination (remote) domain.</p>
   */
  RemoteDomainInfo?: DomainInformationContainer;

  /**
   * @public
   * <p>Unique identifier of the connection.</p>
   */
  ConnectionId?: string;

  /**
   * @public
   * <p>Name of the connection.</p>
   */
  ConnectionAlias?: string;

  /**
   * @public
   * <p>Status of the connection.</p>
   */
  ConnectionStatus?: OutboundConnectionStatus;

  /**
   * @public
   * <p>The connection mode.</p>
   */
  ConnectionMode?: ConnectionMode | string;

  /**
   * @public
   * <p>Properties for the outbound connection.</p>
   */
  ConnectionProperties?: ConnectionProperties;
}

/**
 * @public
 * <p>Details about the deleted outbound connection.</p>
 */
export interface DeleteOutboundConnectionResponse {
  /**
   * @public
   * <p>The deleted inbound connection.</p>
   */
  Connection?: OutboundConnection;
}

/**
 * @public
 * <p>Deletes a package from OpenSearch Service. The package can't be associated with any
 *    OpenSearch Service domain.</p>
 */
export interface DeletePackageRequest {
  /**
   * @public
   * <p>The internal ID of the package you want to delete. Use <code>DescribePackages</code> to find this value.</p>
   */
  PackageID: string | undefined;
}

/**
 * @public
 * <p>Container for the response parameters to the <code>DeletePackage</code> operation.</p>
 */
export interface DeletePackageResponse {
  /**
   * @public
   * <p> Information about the deleted package.</p>
   */
  PackageDetails?: PackageDetails;
}

/**
 * @public
 */
export interface DeleteVpcEndpointRequest {
  /**
   * @public
   * <p>The unique identifier of the endpoint.</p>
   */
  VpcEndpointId: string | undefined;
}

/**
 * @public
 * <p>Summary information for an Amazon OpenSearch Service-managed VPC endpoint.</p>
 */
export interface VpcEndpointSummary {
  /**
   * @public
   * <p>The unique identifier of the endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * @public
   * <p>The creator of the endpoint.</p>
   */
  VpcEndpointOwner?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the domain associated with the endpoint.</p>
   */
  DomainArn?: string;

  /**
   * @public
   * <p>The current status of the endpoint.</p>
   */
  Status?: VpcEndpointStatus | string;
}

/**
 * @public
 */
export interface DeleteVpcEndpointResponse {
  /**
   * @public
   * <p>Information about the deleted endpoint, including its current status (<code>DELETING</code>
   *    or <code>DELETE_FAILED</code>).</p>
   */
  VpcEndpointSummary: VpcEndpointSummary | undefined;
}

/**
 * @public
 * <p>Container for the parameters to the <code>DescribeDomain</code> operation.</p>
 */
export interface DescribeDomainRequest {
  /**
   * @public
   * <p>The name of the domain that you want information about.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * <p>Contains the status of the domain specified in the request.</p>
 */
export interface DescribeDomainResponse {
  /**
   * @public
   * <p>List that contains the status of each specified OpenSearch Service domain.</p>
   */
  DomainStatus: DomainStatus | undefined;
}

/**
 * @public
 * <p>Container for the parameters to the <code>DescribeDomainAutoTunes</code> operation.</p>
 */
export interface DescribeDomainAutoTunesRequest {
  /**
   * @public
   * <p>Name of the domain that you want Auto-Tune details about.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If your initial <code>DescribeDomainAutoTunes</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribeDomainAutoTunes</code> operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ScheduledAutoTuneActionType = {
  JVM_HEAP_SIZE_TUNING: "JVM_HEAP_SIZE_TUNING",
  JVM_YOUNG_GEN_TUNING: "JVM_YOUNG_GEN_TUNING",
} as const;

/**
 * @public
 */
export type ScheduledAutoTuneActionType =
  (typeof ScheduledAutoTuneActionType)[keyof typeof ScheduledAutoTuneActionType];

/**
 * @public
 * @enum
 */
export const ScheduledAutoTuneSeverityType = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type ScheduledAutoTuneSeverityType =
  (typeof ScheduledAutoTuneSeverityType)[keyof typeof ScheduledAutoTuneSeverityType];

/**
 * @public
 * <p>Specifies details about a scheduled Auto-Tune action. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for
 *     Amazon OpenSearch Service</a>.</p>
 */
export interface ScheduledAutoTuneDetails {
  /**
   * @public
   * <p>The date and time when the Auto-Tune action is scheduled for the domain.</p>
   */
  Date?: Date;

  /**
   * @public
   * <p>The type of Auto-Tune action.</p>
   */
  ActionType?: ScheduledAutoTuneActionType | string;

  /**
   * @public
   * <p>A description of the Auto-Tune action.</p>
   */
  Action?: string;

  /**
   * @public
   * <p>The severity of the Auto-Tune action. Valid values are <code>LOW</code>,
   *    <code>MEDIUM</code>, and <code>HIGH</code>.</p>
   */
  Severity?: ScheduledAutoTuneSeverityType | string;
}

/**
 * @public
 * <p>Specifies details about a scheduled Auto-Tune action. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for
 *     Amazon OpenSearch Service</a>.</p>
 */
export interface AutoTuneDetails {
  /**
   * @public
   * <p>Container for details about a scheduled Auto-Tune action.</p>
   */
  ScheduledAutoTuneDetails?: ScheduledAutoTuneDetails;
}

/**
 * @public
 * @enum
 */
export const AutoTuneType = {
  SCHEDULED_ACTION: "SCHEDULED_ACTION",
} as const;

/**
 * @public
 */
export type AutoTuneType = (typeof AutoTuneType)[keyof typeof AutoTuneType];

/**
 * @public
 * <p>Information about an Auto-Tune action. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch
 *     Service</a>.</p>
 */
export interface AutoTune {
  /**
   * @public
   * <p>The type of Auto-Tune action.</p>
   */
  AutoTuneType?: AutoTuneType | string;

  /**
   * @public
   * <p>Details about an Auto-Tune action.</p>
   */
  AutoTuneDetails?: AutoTuneDetails;
}

/**
 * @public
 * <p>The result of a <code>DescribeDomainAutoTunes</code> request.</p>
 */
export interface DescribeDomainAutoTunesResponse {
  /**
   * @public
   * <p>The list of setting adjustments that Auto-Tune has made to the domain.</p>
   */
  AutoTunes?: AutoTune[];

  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Container for the parameters to the <code>DescribeDomainChangeProgress</code>
 *    operation.</p>
 */
export interface DescribeDomainChangeProgressRequest {
  /**
   * @public
   * <p>The name of the domain to get progress information for.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The specific change ID for which you want to get progress information. If omitted, the
   *    request returns information about the most recent configuration change.</p>
   */
  ChangeId?: string;
}

/**
 * @public
 * <p>Progress details for each stage of a domain update.</p>
 */
export interface ChangeProgressStage {
  /**
   * @public
   * <p>The name of the stage.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The status of the stage.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The most recent updated timestamp of the stage.</p>
   */
  LastUpdated?: Date;
}

/**
 * @public
 * @enum
 */
export const OverallChangeStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  PROCESSING: "PROCESSING",
} as const;

/**
 * @public
 */
export type OverallChangeStatus = (typeof OverallChangeStatus)[keyof typeof OverallChangeStatus];

/**
 * @public
 * <p>The progress details of a specific domain configuration change.</p>
 */
export interface ChangeProgressStatusDetails {
  /**
   * @public
   * <p>The unique change identifier associated with a specific domain configuration change.</p>
   */
  ChangeId?: string;

  /**
   * @public
   * <p>The time at which the configuration change is made on the domain.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The overall status of the domain configuration change.</p>
   */
  Status?: OverallChangeStatus | string;

  /**
   * @public
   * <p>The list of properties in the domain configuration change that are still pending.</p>
   */
  PendingProperties?: string[];

  /**
   * @public
   * <p>The list of properties in the domain configuration change that have completed.</p>
   */
  CompletedProperties?: string[];

  /**
   * @public
   * <p>The total number of stages required for the configuration change.</p>
   */
  TotalNumberOfStages?: number;

  /**
   * @public
   * <p>The specific stages that the domain is going through to perform the configuration change.</p>
   */
  ChangeProgressStages?: ChangeProgressStage[];
}

/**
 * @public
 * <p>The result of a <code>DescribeDomainChangeProgress</code> request. Contains progress
 *    information for the requested domain change.</p>
 */
export interface DescribeDomainChangeProgressResponse {
  /**
   * @public
   * <p>Container for information about the stages of a configuration change happening on a domain.</p>
   */
  ChangeProgressStatus?: ChangeProgressStatusDetails;
}

/**
 * @public
 * <p>Container for the parameters to the <code>DescribeDomainConfig</code> operation.</p>
 */
export interface DescribeDomainConfigRequest {
  /**
   * @public
   * <p>Name of the OpenSearch Service domain configuration that you want to describe.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RollbackOnDisable = {
  DEFAULT_ROLLBACK: "DEFAULT_ROLLBACK",
  NO_ROLLBACK: "NO_ROLLBACK",
} as const;

/**
 * @public
 */
export type RollbackOnDisable = (typeof RollbackOnDisable)[keyof typeof RollbackOnDisable];

/**
 * @public
 * <p>Auto-Tune settings when updating a domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for
 *     Amazon OpenSearch Service</a>.</p>
 */
export interface AutoTuneOptions {
  /**
   * @public
   * <p>Whether Auto-Tune is enabled or disabled.</p>
   */
  DesiredState?: AutoTuneDesiredState | string;

  /**
   * @public
   * <p>When disabling Auto-Tune, specify <code>NO_ROLLBACK</code> to retain all prior Auto-Tune
   *    settings or <code>DEFAULT_ROLLBACK</code> to revert to the OpenSearch Service defaults. If you
   *    specify <code>DEFAULT_ROLLBACK</code>, you must include a <code>MaintenanceSchedule</code> in the
   *    request. Otherwise, OpenSearch Service is unable to perform the rollback.</p>
   */
  RollbackOnDisable?: RollbackOnDisable | string;

  /**
   * @public
   * <p>DEPRECATED. Use <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html">off-peak window</a>
   *    instead.</p>
   *          <p>A list of maintenance schedules during which Auto-Tune can deploy changes.</p>
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[];

  /**
   * @public
   * <p>Whether to use the domain's <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html">off-peak window</a> to
   *    deploy configuration changes on the domain rather than a maintenance schedule.</p>
   */
  UseOffPeakWindow?: boolean;
}

/**
 * @public
 * <p>The current status of Auto-Tune for the domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for
 *     Amazon OpenSearch Service</a>.</p>
 */
export interface AutoTuneStatus {
  /**
   * @public
   * <p>Date and time when Auto-Tune was enabled for the domain.</p>
   */
  CreationDate: Date | undefined;

  /**
   * @public
   * <p>Date and time when the Auto-Tune options were last updated for the domain.</p>
   */
  UpdateDate: Date | undefined;

  /**
   * @public
   * <p>The latest version of the Auto-Tune options.</p>
   */
  UpdateVersion?: number;

  /**
   * @public
   * <p>The current state of Auto-Tune on the domain.</p>
   */
  State: AutoTuneState | string | undefined;

  /**
   * @public
   * <p>Any errors that occurred while enabling or disabling Auto-Tune.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>Indicates whether the domain is being deleted.</p>
   */
  PendingDeletion?: boolean;
}

/**
 * @public
 * <p>The Auto-Tune status for the domain.</p>
 */
export interface AutoTuneOptionsStatus {
  /**
   * @public
   * <p>Auto-Tune settings for updating a domain.</p>
   */
  Options?: AutoTuneOptions;

  /**
   * @public
   * <p>The current status of Auto-Tune for a domain.</p>
   */
  Status?: AutoTuneStatus;
}

/**
 * @public
 * <p>The cluster configuration status for a domain.</p>
 */
export interface ClusterConfigStatus {
  /**
   * @public
   * <p>Cluster configuration options for the specified domain.</p>
   */
  Options: ClusterConfig | undefined;

  /**
   * @public
   * <p>The status of cluster configuration options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p>The status of the Cognito options for the specified domain.</p>
 */
export interface CognitoOptionsStatus {
  /**
   * @public
   * <p>Cognito options for the specified domain.</p>
   */
  Options: CognitoOptions | undefined;

  /**
   * @public
   * <p>The status of the Cognito options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p>The configured endpoint options for a domain and their current status.</p>
 */
export interface DomainEndpointOptionsStatus {
  /**
   * @public
   * <p>Options to configure the endpoint for a domain.</p>
   */
  Options: DomainEndpointOptions | undefined;

  /**
   * @public
   * <p>The status of the endpoint options for a domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p>The status of the EBS options for the specified OpenSearch Service domain.</p>
 */
export interface EBSOptionsStatus {
  /**
   * @public
   * <p>The configured EBS options for the specified domain.</p>
   */
  Options: EBSOptions | undefined;

  /**
   * @public
   * <p>The status of the EBS options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p>Status of the encryption at rest options for the specified OpenSearch Service domain.</p>
 */
export interface EncryptionAtRestOptionsStatus {
  /**
   * @public
   * <p>Encryption at rest options for the specified domain.</p>
   */
  Options: EncryptionAtRestOptions | undefined;

  /**
   * @public
   * <p>The status of the encryption at rest options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p>The status of the the OpenSearch or Elasticsearch version options for the specified Amazon
 *    OpenSearch Service domain.</p>
 */
export interface VersionStatus {
  /**
   * @public
   * <p>The OpenSearch or Elasticsearch version for the specified domain.</p>
   */
  Options: string | undefined;

  /**
   * @public
   * <p>The status of the version options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p>The configured log publishing options for the domain and their current status.</p>
 */
export interface LogPublishingOptionsStatus {
  /**
   * @public
   * <p>The log publishing options configured for the domain.</p>
   */
  Options?: Record<string, LogPublishingOption>;

  /**
   * @public
   * <p>The status of the log publishing options for the domain.</p>
   */
  Status?: OptionStatus;
}

/**
 * @public
 * <p>Status of the node-to-node encryption options for the specified domain.</p>
 */
export interface NodeToNodeEncryptionOptionsStatus {
  /**
   * @public
   * <p>The node-to-node encryption options for the specified domain.</p>
   */
  Options: NodeToNodeEncryptionOptions | undefined;

  /**
   * @public
   * <p>The status of the node-to-node encryption options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p>The status of <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html">off-peak window</a>
 *    options for a domain.</p>
 */
export interface OffPeakWindowOptionsStatus {
  /**
   * @public
   * <p>The domain's off-peak window configuration.</p>
   */
  Options?: OffPeakWindowOptions;

  /**
   * @public
   * <p>The current status of off-peak window options.</p>
   */
  Status?: OptionStatus;
}

/**
 * @public
 * <p>Container for information about a daily automated snapshot for an OpenSearch Service
 *    domain.</p>
 */
export interface SnapshotOptionsStatus {
  /**
   * @public
   * <p>The daily snapshot options specified for the domain.</p>
   */
  Options: SnapshotOptions | undefined;

  /**
   * @public
   * <p>The status of a daily automated snapshot.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p>The status of the service software options for a domain.</p>
 */
export interface SoftwareUpdateOptionsStatus {
  /**
   * @public
   * <p>The service software update options for a domain.</p>
   */
  Options?: SoftwareUpdateOptions;

  /**
   * @public
   * <p>The status of service software update options, including creation date and last updated date.</p>
   */
  Status?: OptionStatus;
}

/**
 * @public
 * <p>Status of the VPC options for a specified domain.</p>
 */
export interface VPCDerivedInfoStatus {
  /**
   * @public
   * <p>The VPC options for the specified domain.</p>
   */
  Options: VPCDerivedInfo | undefined;

  /**
   * @public
   * <p>The status of the VPC options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p>Container for the configuration of an OpenSearch Service domain.</p>
 */
export interface DomainConfig {
  /**
   * @public
   * <p>The OpenSearch or Elasticsearch version that the domain is running.</p>
   */
  EngineVersion?: VersionStatus;

  /**
   * @public
   * <p>Container for the cluster configuration of a the domain.</p>
   */
  ClusterConfig?: ClusterConfigStatus;

  /**
   * @public
   * <p>Container for EBS options configured for the domain.</p>
   */
  EBSOptions?: EBSOptionsStatus;

  /**
   * @public
   * <p>Specifies the access policies for the domain.</p>
   */
  AccessPolicies?: AccessPoliciesStatus;

  /**
   * @public
   * <p>DEPRECATED. Container for parameters required to configure automated snapshots of domain
   *    indexes.</p>
   */
  SnapshotOptions?: SnapshotOptionsStatus;

  /**
   * @public
   * <p>The current VPC options for the domain and the status of any updates to their
   *    configuration.</p>
   */
  VPCOptions?: VPCDerivedInfoStatus;

  /**
   * @public
   * <p>Container for Amazon Cognito options for the domain.</p>
   */
  CognitoOptions?: CognitoOptionsStatus;

  /**
   * @public
   * <p>Key-value pairs to enable encryption at rest.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus;

  /**
   * @public
   * <p>Whether node-to-node encryption is enabled or disabled.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus;

  /**
   * @public
   * <p>Key-value pairs to specify advanced configuration options. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced options</a>.</p>
   */
  AdvancedOptions?: AdvancedOptionsStatus;

  /**
   * @public
   * <p>Key-value pairs to configure log publishing.</p>
   */
  LogPublishingOptions?: LogPublishingOptionsStatus;

  /**
   * @public
   * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
   *    traffic.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus;

  /**
   * @public
   * <p>Container for fine-grained access control settings for the domain.</p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsStatus;

  /**
   * @public
   * <p>Container for Auto-Tune settings for the domain.</p>
   */
  AutoTuneOptions?: AutoTuneOptionsStatus;

  /**
   * @public
   * <p>Container for information about the progress of an existing configuration change.</p>
   */
  ChangeProgressDetails?: ChangeProgressDetails;

  /**
   * @public
   * <p>Container for off-peak window options for the domain.</p>
   */
  OffPeakWindowOptions?: OffPeakWindowOptionsStatus;

  /**
   * @public
   * <p>Software update options for the domain.</p>
   */
  SoftwareUpdateOptions?: SoftwareUpdateOptionsStatus;
}

/**
 * @public
 * <p>Contains the configuration information of the requested domain.</p>
 */
export interface DescribeDomainConfigResponse {
  /**
   * @public
   * <p>Container for the configuration of the OpenSearch Service domain.</p>
   */
  DomainConfig: DomainConfig | undefined;
}

/**
 * @public
 * <p>Container for the parameters to the <code>DescribeDomainHealth</code> operation.</p>
 */
export interface DescribeDomainHealthRequest {
  /**
   * @public
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DomainHealth = {
  Green: "Green",
  NotAvailable: "NotAvailable",
  Red: "Red",
  Yellow: "Yellow",
} as const;

/**
 * @public
 */
export type DomainHealth = (typeof DomainHealth)[keyof typeof DomainHealth];

/**
 * @public
 * @enum
 */
export const DomainState = {
  Active: "Active",
  NotAvailable: "NotAvailable",
  Processing: "Processing",
} as const;

/**
 * @public
 */
export type DomainState = (typeof DomainState)[keyof typeof DomainState];

/**
 * @public
 * @enum
 */
export const ZoneStatus = {
  Active: "Active",
  NotAvailable: "NotAvailable",
  StandBy: "StandBy",
} as const;

/**
 * @public
 */
export type ZoneStatus = (typeof ZoneStatus)[keyof typeof ZoneStatus];

/**
 * @public
 * <p>Information about an Availability Zone on a domain.</p>
 */
export interface AvailabilityZoneInfo {
  /**
   * @public
   * <p>The name of the Availability Zone.</p>
   */
  AvailabilityZoneName?: string;

  /**
   * @public
   * <p>The current state of the Availability Zone. Current options are <code>Active</code> and <code>StandBy</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Active</code> - Data nodes in the Availability Zone are in use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>StandBy</code> - Data nodes in the Availability Zone are in a standby state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NotAvailable</code> - Unable to retrieve information.</p>
   *             </li>
   *          </ul>
   */
  ZoneStatus?: ZoneStatus | string;

  /**
   * @public
   * <p>The total number of data nodes configured in the Availability Zone.</p>
   */
  ConfiguredDataNodeCount?: string;

  /**
   * @public
   * <p>The number of data nodes active in the Availability Zone.</p>
   */
  AvailableDataNodeCount?: string;

  /**
   * @public
   * <p>The total number of primary and replica shards in the Availability Zone.</p>
   */
  TotalShards?: string;

  /**
   * @public
   * <p>The total number of primary and replica shards that aren't allocated to any of the nodes in the Availability Zone.</p>
   */
  TotalUnAssignedShards?: string;
}

/**
 * @public
 * <p>Information about the active domain environment.</p>
 */
export interface EnvironmentInfo {
  /**
   * @public
   * <p> A list of <code>AvailabilityZoneInfo</code> for the domain.</p>
   */
  AvailabilityZoneInformation?: AvailabilityZoneInfo[];
}

/**
 * @public
 * @enum
 */
export const MasterNodeStatus = {
  Available: "Available",
  UnAvailable: "UnAvailable",
} as const;

/**
 * @public
 */
export type MasterNodeStatus = (typeof MasterNodeStatus)[keyof typeof MasterNodeStatus];

/**
 * @public
 * <p>The result of a <code>DescribeDomainHealth</code> request. Contains health information for the requested domain.</p>
 */
export interface DescribeDomainHealthResponse {
  /**
   * @public
   * <p>The current state of the domain.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Processing</code> - The domain has updates in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Active</code> - Requested changes have been processed and deployed to the domain.</p>
   *             </li>
   *          </ul>
   */
  DomainState?: DomainState | string;

  /**
   * @public
   * <p>The number of Availability Zones configured for the domain. If the service is unable to fetch this information, it will return <code>NotAvailable</code>.</p>
   */
  AvailabilityZoneCount?: string;

  /**
   * @public
   * <p>The number of active Availability Zones configured for the domain. If the service is unable to fetch this information, it will return <code>NotAvailable</code>.</p>
   */
  ActiveAvailabilityZoneCount?: string;

  /**
   * @public
   * <p>The number of standby Availability Zones configured for the domain. If the service is unable to fetch this information, it will return <code>NotAvailable</code>.</p>
   */
  StandByAvailabilityZoneCount?: string;

  /**
   * @public
   * <p>The number of data nodes configured for the domain. If the service is unable to fetch this information, it will return <code>NotAvailable</code>.</p>
   */
  DataNodeCount?: string;

  /**
   * @public
   * <p>A boolean that indicates if dedicated master nodes are activated for the domain.</p>
   */
  DedicatedMaster?: boolean;

  /**
   * @public
   * <p>The number of nodes that can be elected as a master node. If dedicated master nodes is turned on, this value is the number of dedicated master nodes configured for the domain.
   *    If the service is unable to fetch this information, it will return <code>NotAvailable</code>.</p>
   */
  MasterEligibleNodeCount?: string;

  /**
   * @public
   * <p>The number of warm nodes configured for the domain.</p>
   */
  WarmNodeCount?: string;

  /**
   * @public
   * <p>Indicates whether the domain has an elected master node.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Available</b> - The domain has an elected master node.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UnAvailable</b> - The master node hasn't yet been elected, and a quorum to elect a new master node hasn't been reached.</p>
   *             </li>
   *          </ul>
   */
  MasterNode?: MasterNodeStatus | string;

  /**
   * @public
   * <p>The current health status of your cluster.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Red</code> - At least one primary shard is not allocated to any node.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Yellow</code> - All primary shards are allocated to nodes, but some replicas aren’t.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Green</code> - All primary shards and their replicas are allocated to nodes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NotAvailable</code> - Unable to retrieve cluster health.</p>
   *             </li>
   *          </ul>
   */
  ClusterHealth?: DomainHealth | string;

  /**
   * @public
   * <p>The total number of primary and replica shards for the domain.</p>
   */
  TotalShards?: string;

  /**
   * @public
   * <p>The total number of primary and replica shards not allocated to any of the nodes for the cluster.</p>
   */
  TotalUnAssignedShards?: string;

  /**
   * @public
   * <p>A list of <code>EnvironmentInfo</code> for the domain. </p>
   */
  EnvironmentInformation?: EnvironmentInfo[];
}

/**
 * @public
 * <p>An exception for when a failure in one of the dependencies results in the service being unable to fetch details about the resource.</p>
 */
export class DependencyFailureException extends __BaseException {
  readonly name: "DependencyFailureException" = "DependencyFailureException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyFailureException, __BaseException>) {
    super({
      name: "DependencyFailureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyFailureException.prototype);
  }
}

/**
 * @public
 * <p>Container for the parameters to the <code>DescribeDomainNodes</code>
 *    operation.</p>
 */
export interface DescribeDomainNodesRequest {
  /**
   * @public
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NodeStatus = {
  Active: "Active",
  NotAvailable: "NotAvailable",
  StandBy: "StandBy",
} as const;

/**
 * @public
 */
export type NodeStatus = (typeof NodeStatus)[keyof typeof NodeStatus];

/**
 * @public
 * @enum
 */
export const NodeType = {
  Data: "Data",
  Master: "Master",
  Ultrawarm: "Ultrawarm",
} as const;

/**
 * @public
 */
export type NodeType = (typeof NodeType)[keyof typeof NodeType];

/**
 * @public
 * <p>Container for information about nodes on the domain.</p>
 */
export interface DomainNodesStatus {
  /**
   * @public
   * <p>The ID of the node.</p>
   */
  NodeId?: string;

  /**
   * @public
   * <p>Indicates whether the nodes is a data, master, or ultrawarm node.</p>
   */
  NodeType?: NodeType | string;

  /**
   * @public
   * <p>The Availability Zone of the node.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The instance type information of the node.</p>
   */
  InstanceType?: OpenSearchPartitionInstanceType | string;

  /**
   * @public
   * <p>Indicates if the node is active or in standby.</p>
   */
  NodeStatus?: NodeStatus | string;

  /**
   * @public
   * <p>Indicates if the node has EBS or instance storage. </p>
   */
  StorageType?: string;

  /**
   * @public
   * <p>If the nodes has EBS storage, indicates if the volume type is GP2 or GP3. Only applicable
   *    for data nodes. </p>
   */
  StorageVolumeType?: VolumeType | string;

  /**
   * @public
   * <p>The storage size of the node, in GiB.</p>
   */
  StorageSize?: string;
}

/**
 * @public
 * <p>The result of a <code>DescribeDomainNodes</code> request. Contains information about the nodes on the requested domain. </p>
 */
export interface DescribeDomainNodesResponse {
  /**
   * @public
   * <p>Contains nodes information list <code>DomainNodesStatusList</code> with
   *    details about the all nodes on the requested domain.</p>
   */
  DomainNodesStatusList?: DomainNodesStatus[];
}

/**
 * @public
 * <p>Container for the parameters to the <code>DescribeDomains</code> operation.</p>
 */
export interface DescribeDomainsRequest {
  /**
   * @public
   * <p>Array of OpenSearch Service domain names that you want information about. If you don't
   *    specify any domains, OpenSearch Service returns information about all domains owned by the
   *    account.</p>
   */
  DomainNames: string[] | undefined;
}

/**
 * @public
 * <p>Contains the status of the specified domains or all domains owned by the account.</p>
 */
export interface DescribeDomainsResponse {
  /**
   * @public
   * <p>The status of the requested domains.</p>
   */
  DomainStatusList: DomainStatus[] | undefined;
}

/**
 * @public
 */
export interface DescribeDryRunProgressRequest {
  /**
   * @public
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the dry run.</p>
   */
  DryRunId?: string;

  /**
   * @public
   * <p>Whether to include the configuration of the dry run in the response. The configuration
   *    specifies the updates that you're planning to make on the domain.</p>
   */
  LoadDryRunConfig?: boolean;
}

/**
 * @public
 * <p>A validation failure that occurred as the result of a pre-update validation check (verbose
 *    dry run) on a domain.</p>
 */
export interface ValidationFailure {
  /**
   * @public
   * <p>The error code of the failure.</p>
   */
  Code?: string;

  /**
   * @public
   * <p>A message corresponding to the failure.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Information about the progress of a pre-upgrade dry run analysis.</p>
 */
export interface DryRunProgressStatus {
  /**
   * @public
   * <p>The unique identifier of the dry run.</p>
   */
  DryRunId: string | undefined;

  /**
   * @public
   * <p>The current status of the dry run.</p>
   */
  DryRunStatus: string | undefined;

  /**
   * @public
   * <p>The timestamp when the dry run was initiated.</p>
   */
  CreationDate: string | undefined;

  /**
   * @public
   * <p>The timestamp when the dry run was last updated.</p>
   */
  UpdateDate: string | undefined;

  /**
   * @public
   * <p>Any validation failures that occurred as a result of the dry run.</p>
   */
  ValidationFailures?: ValidationFailure[];
}

/**
 * @public
 * <p>Results of a dry run performed in an update domain request.</p>
 */
export interface DryRunResults {
  /**
   * @public
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
   * @public
   * <p>A message corresponding to the deployment type.</p>
   */
  Message?: string;
}

/**
 * @public
 */
export interface DescribeDryRunProgressResponse {
  /**
   * @public
   * <p>The current status of the dry run, including any validation errors.</p>
   */
  DryRunProgressStatus?: DryRunProgressStatus;

  /**
   * @public
   * <p>Details about the changes you're planning to make on the domain.</p>
   */
  DryRunConfig?: DomainStatus;

  /**
   * @public
   * <p>The results of the dry run. </p>
   */
  DryRunResults?: DryRunResults;
}

/**
 * @public
 * <p>A filter used to limit results when describing inbound or outbound cross-cluster
 *    connections. You can specify multiple values per filter. A cross-cluster connection must match at
 *    least one of the specified values for it to be returned from an operation.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>The name of the filter.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>One or more values for the filter.</p>
   */
  Values?: string[];
}

/**
 * @public
 * <p>Container for the parameters to the <code>DescribeInboundConnections</code> operation.</p>
 */
export interface DescribeInboundConnectionsRequest {
  /**
   * @public
   * <p> A list of filters used to match properties for inbound cross-cluster connections.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If your initial <code>DescribeInboundConnections</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribeInboundConnections</code> operations, which returns results in the next
   *    page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains a list of connections matching the filter criteria.</p>
 */
export interface DescribeInboundConnectionsResponse {
  /**
   * @public
   * <p>List of inbound connections.</p>
   */
  Connections?: InboundConnection[];

  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Request processing failed because you provided an invalid pagination token.</p>
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
 * @public
 * <p>Container for the parameters to the <code>DescribeInstanceTypeLimits</code> operation.</p>
 */
export interface DescribeInstanceTypeLimitsRequest {
  /**
   * @public
   * <p>The name of the domain. Only specify if you need the limits for an existing domain.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>The OpenSearch Service instance type for which you need limit information.</p>
   */
  InstanceType: OpenSearchPartitionInstanceType | string | undefined;

  /**
   * @public
   * <p>Version of OpenSearch or Elasticsearch, in the format Elasticsearch_X.Y or OpenSearch_X.Y.
   *    Defaults to the latest version of OpenSearch.</p>
   */
  EngineVersion: string | undefined;
}

/**
 * @public
 * <p>Limits on the number of instances that can be created in OpenSearch Service for a given
 *    instance type.</p>
 */
export interface InstanceCountLimits {
  /**
   * @public
   * <p>The maximum allowed number of instances.</p>
   */
  MinimumInstanceCount?: number;

  /**
   * @public
   * <p>The minimum allowed number of instances.</p>
   */
  MaximumInstanceCount?: number;
}

/**
 * @public
 * <p>Instance-related attributes that are available for a given instance type.</p>
 */
export interface InstanceLimits {
  /**
   * @public
   * <p>Limits on the number of instances that can be created for a given instance type.</p>
   */
  InstanceCountLimits?: InstanceCountLimits;
}

/**
 * @public
 * <p>Limits that are applicable for the given Amazon OpenSearch Service storage type.</p>
 */
export interface StorageTypeLimit {
  /**
   * @public
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
   * @public
   * <p>The limit values.</p>
   */
  LimitValues?: string[];
}

/**
 * @public
 * <p>A list of storage types for an Amazon OpenSearch Service domain that are available for a
 *    given intance type.</p>
 */
export interface StorageType {
  /**
   * @public
   * <p>The name of the storage type.</p>
   */
  StorageTypeName?: string;

  /**
   * @public
   * <p>The storage sub-type, such as <code>gp3</code> or <code>io1</code>.</p>
   */
  StorageSubTypeName?: string;

  /**
   * @public
   * <p>Limits that are applicable for the given storage type.</p>
   */
  StorageTypeLimits?: StorageTypeLimit[];
}

/**
 * @public
 * <p>Limits for a given instance type and for each of its roles.</p>
 */
export interface Limits {
  /**
   * @public
   * <p>Storage-related attributes that are available for a given instance type.</p>
   */
  StorageTypes?: StorageType[];

  /**
   * @public
   * <p>The limits for a given instance type.</p>
   */
  InstanceLimits?: InstanceLimits;

  /**
   * @public
   * <p>List of additional limits that are specific to a given instance type for each of its
   *    instance roles.</p>
   */
  AdditionalLimits?: AdditionalLimit[];
}

/**
 * @public
 * <p>Container for the parameters received from the <code>DescribeInstanceTypeLimits</code>
 *    operation.</p>
 */
export interface DescribeInstanceTypeLimitsResponse {
  /**
   * @public
   * <p>Map that contains all applicable instance type limits.<code>data</code> refers to data
   *    nodes.<code>master</code> refers to dedicated master nodes.</p>
   */
  LimitsByRole?: Record<string, Limits>;
}

/**
 * @public
 * <p>Container for the parameters to the <code>DescribeOutboundConnections</code> operation.</p>
 */
export interface DescribeOutboundConnectionsRequest {
  /**
   * @public
   * <p>List of filter names and values that you can use for requests.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If your initial <code>DescribeOutboundConnections</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribeOutboundConnections</code> operations, which returns results in the next
   *    page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains a list of connections matching the filter criteria.</p>
 */
export interface DescribeOutboundConnectionsResponse {
  /**
   * @public
   * <p>List of outbound connections that match the filter criteria.</p>
   */
  Connections?: OutboundConnection[];

  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const DescribePackagesFilterName = {
  PackageID: "PackageID",
  PackageName: "PackageName",
  PackageStatus: "PackageStatus",
} as const;

/**
 * @public
 */
export type DescribePackagesFilterName = (typeof DescribePackagesFilterName)[keyof typeof DescribePackagesFilterName];

/**
 * @public
 * <p>A filter to apply to the <code>DescribePackage</code> response.</p>
 */
export interface DescribePackagesFilter {
  /**
   * @public
   * <p>Any field from <code>PackageDetails</code>.</p>
   */
  Name?: DescribePackagesFilterName | string;

  /**
   * @public
   * <p>A non-empty list of values for the specified filter field.</p>
   */
  Value?: string[];
}

/**
 * @public
 * <p>Container for the request parameters to the <code>DescribePackage</code> operation.</p>
 */
export interface DescribePackagesRequest {
  /**
   * @public
   * <p>Only returns packages that match the <code>DescribePackagesFilterList</code> values.</p>
   */
  Filters?: DescribePackagesFilter[];

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If your initial <code>DescribePackageFilters</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribePackageFilters</code> operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Container for the response returned by the <code>DescribePackages</code> operation.</p>
 */
export interface DescribePackagesResponse {
  /**
   * @public
   * <p>Basic information about a package.</p>
   */
  PackageDetailsList?: PackageDetails[];

  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Container for the request parameters to a <code>DescribeReservedInstanceOfferings</code>
 *    operation.</p>
 */
export interface DescribeReservedInstanceOfferingsRequest {
  /**
   * @public
   * <p>The Reserved Instance identifier filter value. Use this parameter to show only the available
   *    instance types that match the specified reservation identifier.</p>
   */
  ReservedInstanceOfferingId?: string;

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If your initial <code>DescribeReservedInstanceOfferings</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribeReservedInstanceOfferings</code> operations, which returns results in the next
   *    page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ReservedInstancePaymentOption = {
  ALL_UPFRONT: "ALL_UPFRONT",
  NO_UPFRONT: "NO_UPFRONT",
  PARTIAL_UPFRONT: "PARTIAL_UPFRONT",
} as const;

/**
 * @public
 */
export type ReservedInstancePaymentOption =
  (typeof ReservedInstancePaymentOption)[keyof typeof ReservedInstancePaymentOption];

/**
 * @public
 * <p>Contains the specific price and frequency of a recurring charges for an OpenSearch Reserved
 *    Instance, or for a Reserved Instance offering.</p>
 */
export interface RecurringCharge {
  /**
   * @public
   * <p>The monetary amount of the recurring charge.</p>
   */
  RecurringChargeAmount?: number;

  /**
   * @public
   * <p>The frequency of the recurring charge.</p>
   */
  RecurringChargeFrequency?: string;
}

/**
 * @public
 * <p>Details of an OpenSearch Reserved Instance offering.</p>
 */
export interface ReservedInstanceOffering {
  /**
   * @public
   * <p>The unique identifier of the Reserved Instance offering.</p>
   */
  ReservedInstanceOfferingId?: string;

  /**
   * @public
   * <p>The OpenSearch instance type offered by the Reserved Instance offering.</p>
   */
  InstanceType?: OpenSearchPartitionInstanceType | string;

  /**
   * @public
   * <p>The duration, in seconds, for which the offering will reserve the OpenSearch instance.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The upfront fixed charge you will pay to purchase the specific Reserved Instance
   *    offering.</p>
   */
  FixedPrice?: number;

  /**
   * @public
   * <p>The hourly rate at which you're charged for the domain using this Reserved Instance.</p>
   */
  UsagePrice?: number;

  /**
   * @public
   * <p>The currency code for the Reserved Instance offering.</p>
   */
  CurrencyCode?: string;

  /**
   * @public
   * <p>Payment option for the Reserved Instance offering</p>
   */
  PaymentOption?: ReservedInstancePaymentOption | string;

  /**
   * @public
   * <p>The recurring charge to your account, regardless of whether you creates any domains using
   *    the offering.</p>
   */
  RecurringCharges?: RecurringCharge[];
}

/**
 * @public
 * <p>Container for results of a <code>DescribeReservedInstanceOfferings</code> request.</p>
 */
export interface DescribeReservedInstanceOfferingsResponse {
  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>List of Reserved Instance offerings.</p>
   */
  ReservedInstanceOfferings?: ReservedInstanceOffering[];
}

/**
 * @public
 * <p>Container for the request parameters to the <code>DescribeReservedInstances</code>
 *    operation.</p>
 */
export interface DescribeReservedInstancesRequest {
  /**
   * @public
   * <p>The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the
   *    specified reserved OpenSearch instance ID.</p>
   */
  ReservedInstanceId?: string;

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If your initial <code>DescribeReservedInstances</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribeReservedInstances</code> operations, which returns results in the next
   *    page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Details of an OpenSearch Reserved Instance.</p>
 */
export interface ReservedInstance {
  /**
   * @public
   * <p>The customer-specified identifier to track this reservation.</p>
   */
  ReservationName?: string;

  /**
   * @public
   * <p>The unique identifier for the reservation.</p>
   */
  ReservedInstanceId?: string;

  /**
   * @public
   * <p>The unique identifier of the billing subscription.</p>
   */
  BillingSubscriptionId?: number;

  /**
   * @public
   * <p>The unique identifier of the Reserved Instance offering.</p>
   */
  ReservedInstanceOfferingId?: string;

  /**
   * @public
   * <p>The OpenSearch instance type offered by theReserved Instance offering.</p>
   */
  InstanceType?: OpenSearchPartitionInstanceType | string;

  /**
   * @public
   * <p>The date and time when the reservation was purchased.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The duration, in seconds, for which the OpenSearch instance is reserved.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The upfront fixed charge you will paid to purchase the specific Reserved Instance
   *    offering.</p>
   */
  FixedPrice?: number;

  /**
   * @public
   * <p>The hourly rate at which you're charged for the domain using this Reserved Instance.</p>
   */
  UsagePrice?: number;

  /**
   * @public
   * <p>The currency code for the offering.</p>
   */
  CurrencyCode?: string;

  /**
   * @public
   * <p>The number of OpenSearch instances that have been reserved.</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>The state of the Reserved Instance.</p>
   */
  State?: string;

  /**
   * @public
   * <p>The payment option as defined in the Reserved Instance offering.</p>
   */
  PaymentOption?: ReservedInstancePaymentOption | string;

  /**
   * @public
   * <p>The recurring charge to your account, regardless of whether you create any domains using the
   *    Reserved Instance offering.</p>
   */
  RecurringCharges?: RecurringCharge[];
}

/**
 * @public
 * <p>Container for results from <code>DescribeReservedInstances</code>
 *          </p>
 */
export interface DescribeReservedInstancesResponse {
  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>List of Reserved Instances in the current Region.</p>
   */
  ReservedInstances?: ReservedInstance[];
}

/**
 * @public
 */
export interface DescribeVpcEndpointsRequest {
  /**
   * @public
   * <p>The unique identifiers of the endpoints to get information about.</p>
   */
  VpcEndpointIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const VpcEndpointErrorCode = {
  ENDPOINT_NOT_FOUND: "ENDPOINT_NOT_FOUND",
  SERVER_ERROR: "SERVER_ERROR",
} as const;

/**
 * @public
 */
export type VpcEndpointErrorCode = (typeof VpcEndpointErrorCode)[keyof typeof VpcEndpointErrorCode];

/**
 * @public
 * <p>Error information when attempting to describe an Amazon OpenSearch Service-managed VPC
 *    endpoint.</p>
 */
export interface VpcEndpointError {
  /**
   * @public
   * <p>The unique identifier of the endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * @public
   * <p>The code associated with the error.</p>
   */
  ErrorCode?: VpcEndpointErrorCode | string;

  /**
   * @public
   * <p>A message describing the error.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface DescribeVpcEndpointsResponse {
  /**
   * @public
   * <p>Information about each requested VPC endpoint.</p>
   */
  VpcEndpoints: VpcEndpoint[] | undefined;

  /**
   * @public
   * <p>Any errors associated with the request.</p>
   */
  VpcEndpointErrors: VpcEndpointError[] | undefined;
}

/**
 * @public
 * <p>Container for the request parameters to the <code>DissociatePackage</code> operation.</p>
 */
export interface DissociatePackageRequest {
  /**
   * @public
   * <p>Internal ID of the package to dissociate from the domain. Use
   *     <code>ListPackagesForDomain</code> to find this value.</p>
   */
  PackageID: string | undefined;

  /**
   * @public
   * <p>Name of the domain to dissociate the package from.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * <p>Container for the response returned by an <code>DissociatePackage</code> operation.</p>
 */
export interface DissociatePackageResponse {
  /**
   * @public
   * <p> Information about a package that has been dissociated from the domain.</p>
   */
  DomainPackageDetails?: DomainPackageDetails;
}

/**
 * @public
 * <p>Container for the request parameters to <code>GetCompatibleVersions</code> operation.</p>
 */
export interface GetCompatibleVersionsRequest {
  /**
   * @public
   * <p>The name of an existing domain. Provide this parameter to limit the results to a single
   *    domain.</p>
   */
  DomainName?: string;
}

/**
 * @public
 * <p>A map of OpenSearch or Elasticsearch versions and the versions you can upgrade them
 *    to.</p>
 */
export interface CompatibleVersionsMap {
  /**
   * @public
   * <p>The current version that the OpenSearch Service domain is running.</p>
   */
  SourceVersion?: string;

  /**
   * @public
   * <p>The possible versions that you can upgrade the domain to.</p>
   */
  TargetVersions?: string[];
}

/**
 * @public
 * <p>Container for the response returned by the <code>GetCompatibleVersions</code> operation.</p>
 */
export interface GetCompatibleVersionsResponse {
  /**
   * @public
   * <p>A map of OpenSearch or Elasticsearch versions and the versions you can upgrade them
   *    to.</p>
   */
  CompatibleVersions?: CompatibleVersionsMap[];
}

/**
 * @public
 * <p>Container for the request parameters to the <code>GetPackageVersionHistory</code> operation.</p>
 */
export interface GetPackageVersionHistoryRequest {
  /**
   * @public
   * <p>The unique identifier of the package.</p>
   */
  PackageID: string | undefined;

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If your initial <code>GetPackageVersionHistory</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>GetPackageVersionHistory</code> operations, which returns results in the next page.
   *   </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Details about a package version.</p>
 */
export interface PackageVersionHistory {
  /**
   * @public
   * <p>The package version.</p>
   */
  PackageVersion?: string;

  /**
   * @public
   * <p>A message associated with the package version when it was uploaded.</p>
   */
  CommitMessage?: string;

  /**
   * @public
   * <p>The date and time when the package was created.</p>
   */
  CreatedAt?: Date;
}

/**
 * @public
 * <p>Container for response returned by <code>GetPackageVersionHistory</code>  operation.</p>
 */
export interface GetPackageVersionHistoryResponse {
  /**
   * @public
   * <p>The unique identifier of the package.</p>
   */
  PackageID?: string;

  /**
   * @public
   * <p>A list of package versions, along with their creation time and commit message.</p>
   */
  PackageVersionHistoryList?: PackageVersionHistory[];

  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Container for the request parameters to the <code>GetUpgradeHistory</code> operation.</p>
 */
export interface GetUpgradeHistoryRequest {
  /**
   * @public
   * <p>The name of an existing domain.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If your initial <code>GetUpgradeHistory</code> operation returns a <code>nextToken</code>,
   *    you can include the returned <code>nextToken</code> in subsequent <code>GetUpgradeHistory</code>
   *    operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const UpgradeStep = {
  PRE_UPGRADE_CHECK: "PRE_UPGRADE_CHECK",
  SNAPSHOT: "SNAPSHOT",
  UPGRADE: "UPGRADE",
} as const;

/**
 * @public
 */
export type UpgradeStep = (typeof UpgradeStep)[keyof typeof UpgradeStep];

/**
 * @public
 * @enum
 */
export const UpgradeStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
  SUCCEEDED_WITH_ISSUES: "SUCCEEDED_WITH_ISSUES",
} as const;

/**
 * @public
 */
export type UpgradeStatus = (typeof UpgradeStatus)[keyof typeof UpgradeStatus];

/**
 * @public
 * <p>Represents a single step of an upgrade or upgrade eligibility check workflow.</p>
 */
export interface UpgradeStepItem {
  /**
   * @public
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
   * @public
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
   * @public
   * <p>A list of strings containing detailed information about the errors encountered in a particular step.</p>
   */
  Issues?: string[];

  /**
   * @public
   * <p>The floating point value representing the progress percentage of a particular step.</p>
   */
  ProgressPercent?: number;
}

/**
 * @public
 * <p>History of the last 10 upgrades and upgrade eligibility checks for an Amazon OpenSearch
 *    Service domain.</p>
 */
export interface UpgradeHistory {
  /**
   * @public
   * <p>A string that describes the upgrade.</p>
   */
  UpgradeName?: string;

  /**
   * @public
   * <p>UTC timestamp at which the upgrade API call was made, in the format
   *     <code>yyyy-MM-ddTHH:mm:ssZ</code>.</p>
   */
  StartTimestamp?: Date;

  /**
   * @public
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
   * @public
   * <p>A list of each step performed as part of a specific upgrade or upgrade eligibility check.</p>
   */
  StepsList?: UpgradeStepItem[];
}

/**
 * @public
 * <p>Container for the response returned by the <code>GetUpgradeHistory</code> operation.</p>
 */
export interface GetUpgradeHistoryResponse {
  /**
   * @public
   * <p>A list of objects corresponding to each upgrade or upgrade eligibility check performed on a
   *    domain.</p>
   */
  UpgradeHistories?: UpgradeHistory[];

  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Container for the request parameters to the <code>GetUpgradeStatus</code> operation.</p>
 */
export interface GetUpgradeStatusRequest {
  /**
   * @public
   * <p>The domain of the domain to get upgrade status information for.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * <p>Container for the response returned by the <code>GetUpgradeStatus</code> operation.</p>
 */
export interface GetUpgradeStatusResponse {
  /**
   * @public
   * <p>One of three steps that an upgrade or upgrade eligibility check goes through.</p>
   */
  UpgradeStep?: UpgradeStep | string;

  /**
   * @public
   * <p>The status of the current step that an upgrade is on.</p>
   */
  StepStatus?: UpgradeStatus | string;

  /**
   * @public
   * <p>A string that describes the update.</p>
   */
  UpgradeName?: string;
}

/**
 * @public
 * @enum
 */
export const EngineType = {
  Elasticsearch: "Elasticsearch",
  OpenSearch: "OpenSearch",
} as const;

/**
 * @public
 */
export type EngineType = (typeof EngineType)[keyof typeof EngineType];

/**
 * @public
 * <p>Container for the parameters to the <code>ListDomainNames</code> operation.</p>
 */
export interface ListDomainNamesRequest {
  /**
   * @public
   * <p>Filters the output by domain engine type.</p>
   */
  EngineType?: EngineType | string;
}

/**
 * @public
 * <p>Information about an OpenSearch Service domain.</p>
 */
export interface DomainInfo {
  /**
   * @public
   * <p>Name of the domain.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>The type of search engine that the domain is running.<code>OpenSearch</code> for an
   *    OpenSearch engine, or <code>Elasticsearch</code> for a legacy Elasticsearch OSS engine.</p>
   */
  EngineType?: EngineType | string;
}

/**
 * @public
 * <p>The results of a <code>ListDomainNames</code> operation. Contains the names of all domains
 *    owned by this account and their respective engine types.</p>
 */
export interface ListDomainNamesResponse {
  /**
   * @public
   * <p>The names of all OpenSearch Service domains owned by the current user and their respective
   *    engine types.</p>
   */
  DomainNames?: DomainInfo[];
}

/**
 * @public
 * <p>Container for the request parameters to the <code>ListDomainsForPackage</code> operation.</p>
 */
export interface ListDomainsForPackageRequest {
  /**
   * @public
   * <p>The unique identifier of the package for which to list associated domains.</p>
   */
  PackageID: string | undefined;

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If your initial <code>ListDomainsForPackage</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>ListDomainsForPackage</code> operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Container for the response parameters to the <code>ListDomainsForPackage</code> operation.</p>
 */
export interface ListDomainsForPackageResponse {
  /**
   * @public
   * <p>Information about all domains associated with a package.</p>
   */
  DomainPackageDetailsList?: DomainPackageDetails[];

  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInstanceTypeDetailsRequest {
  /**
   * @public
   * <p>The version of OpenSearch or Elasticsearch, in the format Elasticsearch_X.Y or OpenSearch_X.Y.
   *    Defaults to the latest version of OpenSearch.</p>
   */
  EngineVersion: string | undefined;

  /**
   * @public
   * <p>The name of the domain.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If your initial <code>ListInstanceTypeDetails</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>ListInstanceTypeDetails</code> operations, which returns results in the next page.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An optional parameter that specifies the Availability Zones for the domain.</p>
   */
  RetrieveAZs?: boolean;

  /**
   * @public
   * <p>An optional parameter that lists information for a given instance type.</p>
   */
  InstanceType?: string;
}

/**
 * @public
 * <p>Lists all instance types and available features for a given OpenSearch or Elasticsearch
 *    version.</p>
 */
export interface InstanceTypeDetails {
  /**
   * @public
   * <p>The instance type.</p>
   */
  InstanceType?: OpenSearchPartitionInstanceType | string;

  /**
   * @public
   * <p>Whether encryption at rest and node-to-node encryption are supported for the instance
   *    type.</p>
   */
  EncryptionEnabled?: boolean;

  /**
   * @public
   * <p>Whether Amazon Cognito access is supported for the instance type.</p>
   */
  CognitoEnabled?: boolean;

  /**
   * @public
   * <p>Whether logging is supported for the instance type.</p>
   */
  AppLogsEnabled?: boolean;

  /**
   * @public
   * <p>Whether fine-grained access control is supported for the instance type.</p>
   */
  AdvancedSecurityEnabled?: boolean;

  /**
   * @public
   * <p>Whether UltraWarm is supported for the instance type.</p>
   */
  WarmEnabled?: boolean;

  /**
   * @public
   * <p>Whether the instance acts as a data node, a dedicated master node, or an UltraWarm
   *    node.</p>
   */
  InstanceRole?: string[];

  /**
   * @public
   * <p>The supported Availability Zones for the instance type.</p>
   */
  AvailabilityZones?: string[];
}

/**
 * @public
 */
export interface ListInstanceTypeDetailsResponse {
  /**
   * @public
   * <p>Lists all supported instance types and features for the given OpenSearch or Elasticsearch
   *    version.</p>
   */
  InstanceTypeDetails?: InstanceTypeDetails[];

  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Container for the request parameters to the <code>ListPackagesForDomain</code> operation.</p>
 */
export interface ListPackagesForDomainRequest {
  /**
   * @public
   * <p>The name of the domain for which you want to list associated packages.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If your initial <code>ListPackagesForDomain</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>ListPackagesForDomain</code> operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Container for the response parameters to the <code>ListPackagesForDomain</code> operation.</p>
 */
export interface ListPackagesForDomainResponse {
  /**
   * @public
   * <p>List of all packages associated with a domain.</p>
   */
  DomainPackageDetailsList?: DomainPackageDetails[];

  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListScheduledActionsRequest {
  /**
   * @public
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *    <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If your initial <code>ListScheduledActions</code> operation returns a <code>nextToken</code>, you
   *    can include the returned <code>nextToken</code> in subsequent <code>ListScheduledActions</code>
   *    operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ScheduledBy = {
  CUSTOMER: "CUSTOMER",
  SYSTEM: "SYSTEM",
} as const;

/**
 * @public
 */
export type ScheduledBy = (typeof ScheduledBy)[keyof typeof ScheduledBy];

/**
 * @public
 * <p>Information about a scheduled configuration change for an OpenSearch Service domain. This
 *    actions can be a <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">service software
 *     update</a> or a <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html#auto-tune-types">blue/green
 *     Auto-Tune enhancement</a>.</p>
 */
export interface ScheduledAction {
  /**
   * @public
   * <p>The unique identifier of the scheduled action.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The type of action that will be taken on the domain.</p>
   */
  Type: ActionType | string | undefined;

  /**
   * @public
   * <p>The severity of the action.</p>
   */
  Severity: ActionSeverity | string | undefined;

  /**
   * @public
   * <p>The time when the change is scheduled to happen.</p>
   */
  ScheduledTime: number | undefined;

  /**
   * @public
   * <p>A description of the action to be taken.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Whether the action was scheduled manually (<code>CUSTOMER</code>, or by OpenSearch Service automatically (<code>SYSTEM</code>).</p>
   */
  ScheduledBy?: ScheduledBy | string;

  /**
   * @public
   * <p>The current status of the scheduled action.</p>
   */
  Status?: ActionStatus | string;

  /**
   * @public
   * <p>Whether the action is required or optional.</p>
   */
  Mandatory?: boolean;

  /**
   * @public
   * <p>Whether or not the scheduled action is cancellable.</p>
   */
  Cancellable?: boolean;
}

/**
 * @public
 */
export interface ListScheduledActionsResponse {
  /**
   * @public
   * <p>A list of actions that are scheduled for the domain.</p>
   */
  ScheduledActions?: ScheduledAction[];

  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *    <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Container for the parameters to the <code>ListTags</code> operation.</p>
 */
export interface ListTagsRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) for the domain to view tags for.</p>
   */
  ARN: string | undefined;
}

/**
 * @public
 * <p>The results of a <code>ListTags</code> operation.</p>
 */
export interface ListTagsResponse {
  /**
   * @public
   * <p>List of resource tags associated with the specified domain.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 * <p>Container for the request parameters to the <code>ListVersions</code> operation.</p>
 */
export interface ListVersionsRequest {
  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If your initial <code>ListVersions</code> operation returns a <code>nextToken</code>, you
   *    can include the returned <code>nextToken</code> in subsequent <code>ListVersions</code>
   *    operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Container for the parameters for response received from the <code>ListVersions</code>
 *    operation.</p>
 */
export interface ListVersionsResponse {
  /**
   * @public
   * <p>A list of all versions of OpenSearch and Elasticsearch that Amazon OpenSearch Service
   *    supports.</p>
   */
  Versions?: string[];

  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVpcEndpointAccessRequest {
  /**
   * @public
   * <p>The name of the OpenSearch Service domain to retrieve access information for.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>If your initial <code>ListVpcEndpointAccess</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>ListVpcEndpointAccess</code> operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVpcEndpointAccessResponse {
  /**
   * @public
   * <p>A list of <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM principals</a>
   *    that can currently access the domain.</p>
   */
  AuthorizedPrincipalList: AuthorizedPrincipal[] | undefined;

  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken: string | undefined;
}

/**
 * @public
 */
export interface ListVpcEndpointsRequest {
  /**
   * @public
   * <p>If your initial <code>ListVpcEndpoints</code> operation returns a <code>nextToken</code>,
   *    you can include the returned <code>nextToken</code> in subsequent <code>ListVpcEndpoints</code>
   *    operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVpcEndpointsResponse {
  /**
   * @public
   * <p>Information about each endpoint.</p>
   */
  VpcEndpointSummaryList: VpcEndpointSummary[] | undefined;

  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken: string | undefined;
}

/**
 * @public
 */
export interface ListVpcEndpointsForDomainRequest {
  /**
   * @public
   * <p>The name of the domain to list associated VPC endpoints for.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>If your initial <code>ListEndpointsForDomain</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>ListEndpointsForDomain</code> operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVpcEndpointsForDomainResponse {
  /**
   * @public
   * <p>Information about each endpoint associated with the domain.</p>
   */
  VpcEndpointSummaryList: VpcEndpointSummary[] | undefined;

  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   */
  NextToken: string | undefined;
}

/**
 * @public
 * <p>Container for request parameters to the <code>PurchaseReservedInstanceOffering</code>
 *    operation.</p>
 */
export interface PurchaseReservedInstanceOfferingRequest {
  /**
   * @public
   * <p>The ID of the Reserved Instance offering to purchase.</p>
   */
  ReservedInstanceOfferingId: string | undefined;

  /**
   * @public
   * <p>A customer-specified identifier to track this reservation.</p>
   */
  ReservationName: string | undefined;

  /**
   * @public
   * <p>The number of OpenSearch instances to reserve.</p>
   */
  InstanceCount?: number;
}

/**
 * @public
 * <p>Represents the output of a <code>PurchaseReservedInstanceOffering</code> operation.</p>
 */
export interface PurchaseReservedInstanceOfferingResponse {
  /**
   * @public
   * <p>The ID of the Reserved Instance offering that was purchased.</p>
   */
  ReservedInstanceId?: string;

  /**
   * @public
   * <p>The customer-specified identifier used to track this reservation.</p>
   */
  ReservationName?: string;
}

/**
 * @public
 * <p>Container for the request parameters to the <code>RejectInboundConnection</code> operation.</p>
 */
export interface RejectInboundConnectionRequest {
  /**
   * @public
   * <p>The unique identifier of the inbound connection to reject.</p>
   */
  ConnectionId: string | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>RejectInboundConnection</code> operation.</p>
 */
export interface RejectInboundConnectionResponse {
  /**
   * @public
   * <p>Contains details about the rejected inbound connection.</p>
   */
  Connection?: InboundConnection;
}

/**
 * @public
 * <p>Container for the request parameters to the <code>RemoveTags</code> operation.</p>
 */
export interface RemoveTagsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the domain from which you want to delete the specified
   *    tags.</p>
   */
  ARN: string | undefined;

  /**
   * @public
   * <p>The list of tag keys to remove from the domain.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface RevokeVpcEndpointAccessRequest {
  /**
   * @public
   * <p>The name of the OpenSearch Service domain.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The account ID to revoke access from.</p>
   */
  Account: string | undefined;
}

/**
 * @public
 */
export interface RevokeVpcEndpointAccessResponse {}

/**
 * @public
 * @enum
 */
export const ScheduleAt = {
  NOW: "NOW",
  OFF_PEAK_WINDOW: "OFF_PEAK_WINDOW",
  TIMESTAMP: "TIMESTAMP",
} as const;

/**
 * @public
 */
export type ScheduleAt = (typeof ScheduleAt)[keyof typeof ScheduleAt];

/**
 * @public
 * <p>Container for the request parameters to the <code>StartServiceSoftwareUpdate</code>
 *    operation.</p>
 */
export interface StartServiceSoftwareUpdateRequest {
  /**
   * @public
   * <p>The name of the domain that you want to update to the latest service software.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>When to start the service software update.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NOW</code> - Immediately schedules the update to happen in the current hour if
   *      there's capacity available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TIMESTAMP</code> - Lets you specify a custom date and time to apply the update. If
   *      you specify this value, you must also provide a value for <code>DesiredStartTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OFF_PEAK_WINDOW</code> - Marks the update to be picked up during an upcoming
   *      off-peak window. There's no guarantee that the update will happen during the next immediate
   *      window. Depending on capacity, it might happen in subsequent days.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>NOW</code> if you don't specify a value for <code>DesiredStartTime</code>,
   *    and <code>TIMESTAMP</code> if you do.</p>
   */
  ScheduleAt?: ScheduleAt | string;

  /**
   * @public
   * <p>The Epoch timestamp when you want the service software update to start. You only need to
   *    specify this parameter if you set <code>ScheduleAt</code> to <code>TIMESTAMP</code>.</p>
   */
  DesiredStartTime?: number;
}

/**
 * @public
 * <p>Represents the output of a <code>StartServiceSoftwareUpdate</code> operation. Contains the
 *    status of the update.</p>
 */
export interface StartServiceSoftwareUpdateResponse {
  /**
   * @public
   * <p>The current status of the OpenSearch Service software update.</p>
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}

/**
 * @public
 * @enum
 */
export const DryRunMode = {
  Basic: "Basic",
  Verbose: "Verbose",
} as const;

/**
 * @public
 */
export type DryRunMode = (typeof DryRunMode)[keyof typeof DryRunMode];

/**
 * @public
 * <p>Container for the request parameters to the <code>UpdateDomain</code> operation.</p>
 */
export interface UpdateDomainConfigRequest {
  /**
   * @public
   * <p>The name of the domain that you're updating.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>Changes that you want to make to the cluster configuration, such as the instance type and
   *    number of EC2 instances.</p>
   */
  ClusterConfig?: ClusterConfig;

  /**
   * @public
   * <p>The type and size of the EBS volume to attach to instances in the domain.</p>
   */
  EBSOptions?: EBSOptions;

  /**
   * @public
   * <p>Option to set the time, in UTC format, for the daily automated snapshot. Default value is <code>0</code> hours.
   *   </p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * @public
   * <p>Options to specify the subnets and security groups for a VPC endpoint. For more information,
   *    see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching
   *     your Amazon OpenSearch Service domains using a VPC</a>.</p>
   */
  VPCOptions?: VPCOptions;

  /**
   * @public
   * <p>Key-value pairs to configure Amazon Cognito authentication for OpenSearch Dashboards.</p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * @public
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
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced cluster parameters</a>.</p>
   */
  AdvancedOptions?: Record<string, string>;

  /**
   * @public
   * <p>Identity and Access Management (IAM) access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: string;

  /**
   * @public
   * <p>Options to publish OpenSearch logs to Amazon CloudWatch Logs.</p>
   */
  LogPublishingOptions?: Record<string, LogPublishingOption>;

  /**
   * @public
   * <p>Encryption at rest options for the domain.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * @public
   * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
   *    traffic.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * @public
   * <p>Node-to-node encryption options for the domain.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * @public
   * <p>Options for fine-grained access control.</p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;

  /**
   * @public
   * <p>Options for Auto-Tune.</p>
   */
  AutoTuneOptions?: AutoTuneOptions;

  /**
   * @public
   * <p>This flag, when set to True, specifies whether the <code>UpdateDomain</code> request should
   *    return the results of a dry run analysis without actually applying the change. A dry run
   *    determines what type of deployment the update will cause.</p>
   */
  DryRun?: boolean;

  /**
   * @public
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

  /**
   * @public
   * <p>Off-peak window options for the domain.</p>
   */
  OffPeakWindowOptions?: OffPeakWindowOptions;

  /**
   * @public
   * <p>Service software update options for the domain.</p>
   */
  SoftwareUpdateOptions?: SoftwareUpdateOptions;
}

/**
 * @public
 * <p>The results of an <code>UpdateDomain</code> request. Contains the status of the domain being
 *    updated.</p>
 */
export interface UpdateDomainConfigResponse {
  /**
   * @public
   * <p>The status of the updated domain.</p>
   */
  DomainConfig: DomainConfig | undefined;

  /**
   * @public
   * <p>Results of the dry run performed in the update domain request.</p>
   */
  DryRunResults?: DryRunResults;

  /**
   * @public
   * <p>The status of the dry run being performed on the domain, if any.</p>
   */
  DryRunProgressStatus?: DryRunProgressStatus;
}

/**
 * @public
 * <p>Container for request parameters to the <code>UpdatePackage</code> operation.</p>
 */
export interface UpdatePackageRequest {
  /**
   * @public
   * <p>The unique identifier for the package.</p>
   */
  PackageID: string | undefined;

  /**
   * @public
   * <p>Amazon S3 bucket and key for the package.</p>
   */
  PackageSource: PackageSource | undefined;

  /**
   * @public
   * <p>A new description of the package.</p>
   */
  PackageDescription?: string;

  /**
   * @public
   * <p>Commit message for the updated file, which is shown as part of
   *     <code>GetPackageVersionHistoryResponse</code>.</p>
   */
  CommitMessage?: string;
}

/**
 * @public
 * <p>Container for the response returned by the <code>UpdatePackage</code> operation.</p>
 */
export interface UpdatePackageResponse {
  /**
   * @public
   * <p>Information about a package.</p>
   */
  PackageDetails?: PackageDetails;
}

/**
 * @public
 * <p>An exception for attempting to schedule a domain action during an unavailable time slot.</p>
 */
export class SlotNotAvailableException extends __BaseException {
  readonly name: "SlotNotAvailableException" = "SlotNotAvailableException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Alternate time slots during which OpenSearch Service has available capacity to schedule a domain action.</p>
   */
  SlotSuggestions?: number[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SlotNotAvailableException, __BaseException>) {
    super({
      name: "SlotNotAvailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SlotNotAvailableException.prototype);
    this.SlotSuggestions = opts.SlotSuggestions;
  }
}

/**
 * @public
 */
export interface UpdateScheduledActionRequest {
  /**
   * @public
   * <p>The name of the domain to reschedule an action for.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the action to reschedule. To retrieve this ID, send a <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListScheduledActions.html">ListScheduledActions</a> request.</p>
   */
  ActionID: string | undefined;

  /**
   * @public
   * <p>The type of action to reschedule. Can be one of <code>SERVICE_SOFTWARE_UPDATE</code>,
   *    <code>JVM_HEAP_SIZE_TUNING</code>, or <code>JVM_YOUNG_GEN_TUNING</code>. To retrieve this value, send a <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListScheduledActions.html">ListScheduledActions</a> request.</p>
   */
  ActionType: ActionType | string | undefined;

  /**
   * @public
   * <p>When to schedule the action.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NOW</code> - Immediately schedules the update to happen in the current hour if
   *      there's capacity available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TIMESTAMP</code> - Lets you specify a custom date and time to apply the update. If
   *      you specify this value, you must also provide a value for <code>DesiredStartTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OFF_PEAK_WINDOW</code> - Marks the action to be picked up during an upcoming
   *      off-peak window. There's no guarantee that the change will be implemented during the next
   *      immediate window. Depending on capacity, it might happen in subsequent days.</p>
   *             </li>
   *          </ul>
   */
  ScheduleAt: ScheduleAt | string | undefined;

  /**
   * @public
   * <p>The time to implement the change, in Coordinated Universal Time (UTC). Only specify this
   *    parameter if you set <code>ScheduleAt</code> to <code>TIMESTAMP</code>.</p>
   */
  DesiredStartTime?: number;
}

/**
 * @public
 */
export interface UpdateScheduledActionResponse {
  /**
   * @public
   * <p>Information about the rescheduled action.</p>
   */
  ScheduledAction?: ScheduledAction;
}

/**
 * @public
 */
export interface UpdateVpcEndpointRequest {
  /**
   * @public
   * <p>The unique identifier of the endpoint.</p>
   */
  VpcEndpointId: string | undefined;

  /**
   * @public
   * <p>The security groups and/or subnets to add, remove, or modify.</p>
   */
  VpcOptions: VPCOptions | undefined;
}

/**
 * @public
 */
export interface UpdateVpcEndpointResponse {
  /**
   * @public
   * <p>The endpoint to be updated.</p>
   */
  VpcEndpoint: VpcEndpoint | undefined;
}

/**
 * @public
 * <p>Container for the request parameters to the <code>UpgradeDomain</code> operation.</p>
 */
export interface UpgradeDomainRequest {
  /**
   * @public
   * <p>Name of the OpenSearch Service domain that you want to upgrade.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>OpenSearch or Elasticsearch version to which you want to upgrade, in the format
   *    Opensearch_X.Y or Elasticsearch_X.Y.</p>
   */
  TargetVersion: string | undefined;

  /**
   * @public
   * <p>When true, indicates that an upgrade eligibility check needs to be performed. Does not
   *    actually perform the upgrade.</p>
   */
  PerformCheckOnly?: boolean;

  /**
   * @public
   * <p>Only supports the <code>override_main_response_version</code> parameter and not other
   *    advanced options. You can only include this option when upgrading to an OpenSearch version.
   *    Specifies whether the domain reports its version as 7.10 so that it continues to work with
   *    Elasticsearch OSS clients and plugins.</p>
   */
  AdvancedOptions?: Record<string, string>;
}

/**
 * @public
 * <p>Container for the response returned by <code>UpgradeDomain</code> operation.</p>
 */
export interface UpgradeDomainResponse {
  /**
   * @public
   * <p>The unique identifier of the domain upgrade.</p>
   */
  UpgradeId?: string;

  /**
   * @public
   * <p>The name of the domain that was upgraded.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>OpenSearch or Elasticsearch version that the domain was upgraded to.</p>
   */
  TargetVersion?: string;

  /**
   * @public
   * <p>When true, indicates that an upgrade eligibility check was performed.</p>
   */
  PerformCheckOnly?: boolean;

  /**
   * @public
   * <p>The advanced options configuration for the domain.</p>
   */
  AdvancedOptions?: Record<string, string>;

  /**
   * @public
   * <p>Container for information about a configuration change happening on a domain.</p>
   */
  ChangeProgressDetails?: ChangeProgressDetails;
}

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
export const CreateDomainRequestFilterSensitiveLog = (obj: CreateDomainRequest): any => ({
  ...obj,
  ...(obj.AdvancedSecurityOptions && {
    AdvancedSecurityOptions: AdvancedSecurityOptionsInputFilterSensitiveLog(obj.AdvancedSecurityOptions),
  }),
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
