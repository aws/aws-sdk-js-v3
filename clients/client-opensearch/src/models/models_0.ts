// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { OpenSearchServiceException as __BaseException } from "./OpenSearchServiceException";

/**
 * <p>Container for the parameters to the <code>AcceptInboundConnection</code> operation.</p>
 * @public
 */
export interface AcceptInboundConnectionRequest {
  /**
   * <p>The ID of the inbound connection to accept.</p>
   * @public
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
 * <p>The status of an inbound cross-cluster connection for OpenSearch Service.</p>
 * @public
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
   * @public
   */
  StatusCode?: InboundConnectionStatusCode | undefined;

  /**
   * <p>Information about the connection.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Information about an Amazon OpenSearch Service domain.</p>
 * @public
 */
export interface AWSDomainInformation {
  /**
   * <p>The Amazon Web Services account ID of the domain owner.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>Name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the domain is located.</p>
   * @public
   */
  Region?: string | undefined;
}

/**
 * <p>Container for information about an OpenSearch Service domain.</p>
 * @public
 */
export interface DomainInformationContainer {
  /**
   * <p>Information about an Amazon OpenSearch Service domain.</p>
   * @public
   */
  AWSDomainInformation?: AWSDomainInformation | undefined;
}

/**
 * <p>Describes an inbound cross-cluster connection for Amazon OpenSearch Service. For more
 *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search
 *     for Amazon OpenSearch Service</a>.</p>
 * @public
 */
export interface InboundConnection {
  /**
   * <p>Information about the source (local) domain.</p>
   * @public
   */
  LocalDomainInfo?: DomainInformationContainer | undefined;

  /**
   * <p>Information about the destination (remote) domain.</p>
   * @public
   */
  RemoteDomainInfo?: DomainInformationContainer | undefined;

  /**
   * <p>The unique identifier of the connection.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The current status of the connection.</p>
   * @public
   */
  ConnectionStatus?: InboundConnectionStatus | undefined;

  /**
   * <p>The connection mode.</p>
   * @public
   */
  ConnectionMode?: ConnectionMode | undefined;
}

/**
 * <p>Contains details about the accepted inbound connection.</p>
 * @public
 */
export interface AcceptInboundConnectionResponse {
  /**
   * <p>Information about the accepted inbound connection.</p>
   * @public
   */
  Connection?: InboundConnection | undefined;
}

/**
 * <p>An error occured because the client wanted to access an unsupported operation.</p>
 * @public
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
 * <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 * @public
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
 * <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 * @public
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
 * <p>An error occurred because you don't have permissions to access the resource.</p>
 * @public
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
 * <p>Provides the current status of an entity.</p>
 * @public
 */
export interface OptionStatus {
  /**
   * <p>The timestamp when the entity was created.</p>
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * <p>The timestamp of the last time the entity was updated.</p>
   * @public
   */
  UpdateDate: Date | undefined;

  /**
   * <p>The latest version of the entity.</p>
   * @public
   */
  UpdateVersion?: number | undefined;

  /**
   * <p>The state of the entity.</p>
   * @public
   */
  State: OptionState | undefined;

  /**
   * <p>Indicates whether the entity is being deleted.</p>
   * @public
   */
  PendingDeletion?: boolean | undefined;
}

/**
 * <p>The configured access rules for the domain's search endpoint, and the current status of
 *    those rules.</p>
 * @public
 */
export interface AccessPoliciesStatus {
  /**
   * <p>The access policy configured for the domain. Access policies can be resource-based,
   *    IP-based, or IAM-based. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-access-policies">Configuring access policies</a>.</p>
   * @public
   */
  Options: string | undefined;

  /**
   * <p>The status of the access policy for the domain.</p>
   * @public
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
 * <p>Information about the Amazon S3 Glue Data Catalog.</p>
 * @public
 */
export interface S3GlueDataCatalog {
  /**
   * <p>>The Amazon Resource Name (ARN) for the S3 Glue Data Catalog.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * <p>The type of data source.</p>
 * @public
 */
export type DataSourceType = DataSourceType.S3GlueDataCatalogMember | DataSourceType.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceType {
  /**
   * <p>An Amazon S3 data source.</p>
   * @public
   */
  export interface S3GlueDataCatalogMember {
    S3GlueDataCatalog: S3GlueDataCatalog;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S3GlueDataCatalog?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    S3GlueDataCatalog: (value: S3GlueDataCatalog) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataSourceType, visitor: Visitor<T>): T => {
    if (value.S3GlueDataCatalog !== undefined) return visitor.S3GlueDataCatalog(value.S3GlueDataCatalog);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Container for the parameters to the <code>AddDataSource</code> operation.</p>
 * @public
 */
export interface AddDataSourceRequest {
  /**
   * <p>The name of the domain to add the data source to.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>A name for the data source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of data source.</p>
   * @public
   */
  DataSourceType: DataSourceType | undefined;

  /**
   * <p>A description of the data source.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>The result of an <code>AddDataSource</code> operation.</p>
 * @public
 */
export interface AddDataSourceResponse {
  /**
   * <p>A message associated with creation of the data source.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>An error occurred while processing the request.</p>
 * @public
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
 * <p>An exception for when a failure in one of the dependencies results in the service being unable to fetch details about the resource.</p>
 * @public
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
 * <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 * @public
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
 * <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 * @public
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
 * <p> Configuration details for a CloudWatch Logs data source that can be used for direct
 *    queries. </p>
 * @public
 */
export interface CloudWatchDirectQueryDataSource {
  /**
   * <p> The unique identifier of the IAM role that grants OpenSearch Service permission to access
   *    the specified data source. </p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * <p> Configuration details for a Security Lake data source that can be used for direct queries.
 *   </p>
 * @public
 */
export interface SecurityLakeDirectQueryDataSource {
  /**
   * <p> The unique identifier of the IAM role that grants OpenSearch Service permission to access
   *    the specified data source. </p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * <p> The type of data source that is used for direct queries. This is a supported Amazon Web Services service, such as CloudWatch Logs or Security Lake. </p>
 * @public
 */
export type DirectQueryDataSourceType =
  | DirectQueryDataSourceType.CloudWatchLogMember
  | DirectQueryDataSourceType.SecurityLakeMember
  | DirectQueryDataSourceType.$UnknownMember;

/**
 * @public
 */
export namespace DirectQueryDataSourceType {
  /**
   * <p> Specifies CloudWatch Logs as a type of data source for direct queries. </p>
   * @public
   */
  export interface CloudWatchLogMember {
    CloudWatchLog: CloudWatchDirectQueryDataSource;
    SecurityLake?: never;
    $unknown?: never;
  }

  /**
   * <p> Specifies Security Lake as a type of data source for direct queries. </p>
   * @public
   */
  export interface SecurityLakeMember {
    CloudWatchLog?: never;
    SecurityLake: SecurityLakeDirectQueryDataSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    CloudWatchLog?: never;
    SecurityLake?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    CloudWatchLog: (value: CloudWatchDirectQueryDataSource) => T;
    SecurityLake: (value: SecurityLakeDirectQueryDataSource) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DirectQueryDataSourceType, visitor: Visitor<T>): T => {
    if (value.CloudWatchLog !== undefined) return visitor.CloudWatchLog(value.CloudWatchLog);
    if (value.SecurityLake !== undefined) return visitor.SecurityLake(value.SecurityLake);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A tag (key-value pair) for an Amazon OpenSearch Service resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag key. Tag keys must be unique for the domain to which they are attached.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value assigned to the corresponding tag key. Tag values can be null and don't have to be
   *    unique in a tag set. For example, you can have a key value pair in a tag set of <code>project :
   *     Trinity</code> and <code>cost-center : Trinity</code>
   *          </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AddDirectQueryDataSourceRequest {
  /**
   * <p> A unique, user-defined label to identify the data source within your OpenSearch Service
   *    environment. </p>
   * @public
   */
  DataSourceName: string | undefined;

  /**
   * <p> The supported Amazon Web Services service that you want to use as the source for direct
   *    queries in OpenSearch Service. </p>
   * @public
   */
  DataSourceType: DirectQueryDataSourceType | undefined;

  /**
   * <p> An optional text field for providing additional context and details about the data source.
   *   </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> A list of Amazon Resource Names (ARNs) for the OpenSearch collections that are associated
   *    with the direct query data source. </p>
   * @public
   */
  OpenSearchArns: string[] | undefined;

  /**
   * <p>A list of tags attached to a domain.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface AddDirectQueryDataSourceResponse {
  /**
   * <p> The unique, system-generated identifier that represents the data source. </p>
   * @public
   */
  DataSourceArn?: string | undefined;
}

/**
 * <p> List of limits that are specific to a given instance type.</p>
 * @public
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
   * @public
   */
  LimitName?: string | undefined;

  /**
   * <p> The values of the additional instance type limits.</p>
   * @public
   */
  LimitValues?: string[] | undefined;
}

/**
 * <p>Container for the parameters to the <code>AddTags</code> operation. Specifies the tags to
 *    attach to the domain, data source, or application.</p>
 * @public
 */
export interface AddTagsRequest {
  /**
   * <p>Amazon Resource Name (ARN) for the OpenSearch Service domain, data source, or application to
   *    which you want to attach resource tags.</p>
   * @public
   */
  ARN: string | undefined;

  /**
   * <p>List of resource tags.</p>
   * @public
   */
  TagList: Tag[] | undefined;
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
 * @public
 */
export interface AdvancedOptionsStatus {
  /**
   * <p>The status of advanced options for the specified domain.</p>
   * @public
   */
  Options: Record<string, string> | undefined;

  /**
   * <p>The status of advanced options for the specified domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>Describes the JWT options configured for the domain.</p>
 * @public
 */
export interface JWTOptionsOutput {
  /**
   * <p>True if JWT use is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The key used for matching the JWT subject attribute.</p>
   * @public
   */
  SubjectKey?: string | undefined;

  /**
   * <p>The key used for matching the JWT roles attribute.</p>
   * @public
   */
  RolesKey?: string | undefined;

  /**
   * <p>The key used to verify the signature of incoming JWT requests.</p>
   * @public
   */
  PublicKey?: string | undefined;
}

/**
 * <p>The SAML identity povider information.</p>
 * @public
 */
export interface SAMLIdp {
  /**
   * <p>The metadata of the SAML application, in XML format.</p>
   * @public
   */
  MetadataContent: string | undefined;

  /**
   * <p>The unique entity ID of the application in the SAML identity provider.</p>
   * @public
   */
  EntityId: string | undefined;
}

/**
 * <p>Describes the SAML application configured for the domain.</p>
 * @public
 */
export interface SAMLOptionsOutput {
  /**
   * <p>True if SAML is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Describes the SAML identity provider's information.</p>
   * @public
   */
  Idp?: SAMLIdp | undefined;

  /**
   * <p>The key used for matching the SAML subject attribute.</p>
   * @public
   */
  SubjectKey?: string | undefined;

  /**
   * <p>The key used for matching the SAML roles attribute.</p>
   * @public
   */
  RolesKey?: string | undefined;

  /**
   * <p>The duration, in minutes, after which a user session becomes inactive.</p>
   * @public
   */
  SessionTimeoutMinutes?: number | undefined;
}

/**
 * <p>Container for fine-grained access control settings.</p>
 * @public
 */
export interface AdvancedSecurityOptions {
  /**
   * <p>True if fine-grained access control is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>True if the internal user database is enabled.</p>
   * @public
   */
  InternalUserDatabaseEnabled?: boolean | undefined;

  /**
   * <p>Container for information about the SAML configuration for OpenSearch Dashboards.</p>
   * @public
   */
  SAMLOptions?: SAMLOptionsOutput | undefined;

  /**
   * <p>Container for information about the JWT configuration of the Amazon OpenSearch
   *    Service.</p>
   * @public
   */
  JWTOptions?: JWTOptionsOutput | undefined;

  /**
   * <p>Date and time when the migration period will be disabled. Only necessary when <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-enabling-existing">enabling
   *     fine-grained access control on an existing domain</a>.</p>
   * @public
   */
  AnonymousAuthDisableDate?: Date | undefined;

  /**
   * <p>True if a 30-day migration period is enabled, during which administrators can create role
   *    mappings. Only necessary when <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-enabling-existing">enabling
   *     fine-grained access control on an existing domain</a>.</p>
   * @public
   */
  AnonymousAuthEnabled?: boolean | undefined;
}

/**
 * <p>The JWT authentication and authorization configuration for an Amazon OpenSearch Service
 *    domain.</p>
 * @public
 */
export interface JWTOptionsInput {
  /**
   * <p>True to enable JWT authentication and authorization for a domain.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Element of the JWT assertion to use for the user name.</p>
   * @public
   */
  SubjectKey?: string | undefined;

  /**
   * <p>Element of the JWT assertion to use for roles.</p>
   * @public
   */
  RolesKey?: string | undefined;

  /**
   * <p>Element of the JWT assertion used by the cluster to verify JWT signatures.</p>
   * @public
   */
  PublicKey?: string | undefined;
}

/**
 * <p>Credentials for the master user for a domain.</p>
 * @public
 */
export interface MasterUserOptions {
  /**
   * <p>Amazon Resource Name (ARN) for the master user. Only specify if
   *     <code>InternalUserDatabaseEnabled</code> is <code>false</code>.</p>
   * @public
   */
  MasterUserARN?: string | undefined;

  /**
   * <p>User name for the master user. Only specify if <code>InternalUserDatabaseEnabled</code> is
   *     <code>true</code>.</p>
   * @public
   */
  MasterUserName?: string | undefined;

  /**
   * <p>Password for the master user. Only specify if <code>InternalUserDatabaseEnabled</code> is
   *     <code>true</code>.</p>
   * @public
   */
  MasterUserPassword?: string | undefined;
}

/**
 * <p>The SAML authentication configuration for an Amazon OpenSearch Service domain.</p>
 * @public
 */
export interface SAMLOptionsInput {
  /**
   * <p>True to enable SAML authentication for a domain.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The SAML Identity Provider's information.</p>
   * @public
   */
  Idp?: SAMLIdp | undefined;

  /**
   * <p>The SAML master user name, which is stored in the domain's internal user database.</p>
   * @public
   */
  MasterUserName?: string | undefined;

  /**
   * <p>The backend role that the SAML master user is mapped to.</p>
   * @public
   */
  MasterBackendRole?: string | undefined;

  /**
   * <p>Element of the SAML assertion to use for the user name. Default is
   *    <code>NameID</code>.</p>
   * @public
   */
  SubjectKey?: string | undefined;

  /**
   * <p>Element of the SAML assertion to use for backend roles. Default is
   *    <code>roles</code>.</p>
   * @public
   */
  RolesKey?: string | undefined;

  /**
   * <p>The duration, in minutes, after which a user session becomes inactive. Acceptable values are
   *    between 1 and 1440, and the default value is 60.</p>
   * @public
   */
  SessionTimeoutMinutes?: number | undefined;
}

/**
 * <p>Options for enabling and configuring fine-grained access control. For more information, see
 *     <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html">Fine-grained access control in Amazon OpenSearch Service</a>.</p>
 * @public
 */
export interface AdvancedSecurityOptionsInput {
  /**
   * <p>True to enable fine-grained access control.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>True to enable the internal user database.</p>
   * @public
   */
  InternalUserDatabaseEnabled?: boolean | undefined;

  /**
   * <p>Container for information about the master user.</p>
   * @public
   */
  MasterUserOptions?: MasterUserOptions | undefined;

  /**
   * <p>Container for information about the SAML configuration for OpenSearch Dashboards.</p>
   * @public
   */
  SAMLOptions?: SAMLOptionsInput | undefined;

  /**
   * <p>Container for information about the JWT configuration of the Amazon OpenSearch Service.
   *   </p>
   * @public
   */
  JWTOptions?: JWTOptionsInput | undefined;

  /**
   * <p>True to enable a 30-day migration period during which administrators can create role
   *    mappings. Only necessary when <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-enabling-existing">enabling
   *     fine-grained access control on an existing domain</a>.</p>
   * @public
   */
  AnonymousAuthEnabled?: boolean | undefined;
}

/**
 * <p>The status of fine-grained access control settings for a domain.</p>
 * @public
 */
export interface AdvancedSecurityOptionsStatus {
  /**
   * <p>Container for fine-grained access control settings.</p>
   * @public
   */
  Options: AdvancedSecurityOptions | undefined;

  /**
   * <p>Status of the fine-grained access control settings for a domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const NaturalLanguageQueryGenerationDesiredState = {
  Disabled: "DISABLED",
  Enabled: "ENABLED",
} as const;

/**
 * @public
 */
export type NaturalLanguageQueryGenerationDesiredState =
  (typeof NaturalLanguageQueryGenerationDesiredState)[keyof typeof NaturalLanguageQueryGenerationDesiredState];

/**
 * <p>Container for parameters required to enable the natural language query generation
 *    feature.</p>
 * @public
 */
export interface NaturalLanguageQueryGenerationOptionsInput {
  /**
   * <p>The desired state of the natural language query generation feature. Valid values are ENABLED
   *    and DISABLED.</p>
   * @public
   */
  DesiredState?: NaturalLanguageQueryGenerationDesiredState | undefined;
}

/**
 * <p>Options for enabling S3 vectors engine features on the specified domain.</p>
 * @public
 */
export interface S3VectorsEngine {
  /**
   * <p>Enables S3 vectors engine features.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Container for parameters required to enable all machine learning features.</p>
 * @public
 */
export interface AIMLOptionsInput {
  /**
   * <p>Container for parameters required for natural language query generation on the specified
   *    domain.</p>
   * @public
   */
  NaturalLanguageQueryGenerationOptions?: NaturalLanguageQueryGenerationOptionsInput | undefined;

  /**
   * <p>Container for parameters required to enable S3 vectors engine features on the specified domain.</p>
   * @public
   */
  S3VectorsEngine?: S3VectorsEngine | undefined;
}

/**
 * @public
 * @enum
 */
export const NaturalLanguageQueryGenerationCurrentState = {
  DisableComplete: "DISABLE_COMPLETE",
  DisableFailed: "DISABLE_FAILED",
  DisableInProgress: "DISABLE_IN_PROGRESS",
  EnableComplete: "ENABLE_COMPLETE",
  EnableFailed: "ENABLE_FAILED",
  EnableInProgress: "ENABLE_IN_PROGRESS",
  NotEnabled: "NOT_ENABLED",
} as const;

/**
 * @public
 */
export type NaturalLanguageQueryGenerationCurrentState =
  (typeof NaturalLanguageQueryGenerationCurrentState)[keyof typeof NaturalLanguageQueryGenerationCurrentState];

/**
 * <p>Container for parameters representing the state of the natural language query generation
 *    feature on the specified domain.</p>
 * @public
 */
export interface NaturalLanguageQueryGenerationOptionsOutput {
  /**
   * <p>The desired state of the natural language query generation feature. Valid values are ENABLED
   *    and DISABLED.</p>
   * @public
   */
  DesiredState?: NaturalLanguageQueryGenerationDesiredState | undefined;

  /**
   * <p>The current state of the natural language query generation feature, indicating completion,
   *    in progress, or failure.</p>
   * @public
   */
  CurrentState?: NaturalLanguageQueryGenerationCurrentState | undefined;
}

/**
 * <p>Container for parameters representing the state of machine learning features on the
 *    specified domain.</p>
 * @public
 */
export interface AIMLOptionsOutput {
  /**
   * <p>Container for parameters required for natural language query generation on the specified
   *    domain.</p>
   * @public
   */
  NaturalLanguageQueryGenerationOptions?: NaturalLanguageQueryGenerationOptionsOutput | undefined;

  /**
   * <p>Container for parameters representing the state of S3 vectors engine features on the specified domain.</p>
   * @public
   */
  S3VectorsEngine?: S3VectorsEngine | undefined;
}

/**
 * <p>The status of machine learning options on the specified domain.</p>
 * @public
 */
export interface AIMLOptionsStatus {
  /**
   * <p>Machine learning options on the specified domain.</p>
   * @public
   */
  Options?: AIMLOptionsOutput | undefined;

  /**
   * <p>Provides the current status of an entity.</p>
   * @public
   */
  Status?: OptionStatus | undefined;
}

/**
 * <p>The configuration parameters to enable access to the key store required by the
 *    package.</p>
 * @public
 */
export interface KeyStoreAccessOption {
  /**
   * <p>Role ARN to access the KeyStore Key</p>
   * @public
   */
  KeyAccessRoleArn?: string | undefined;

  /**
   * <p>This indicates whether Key Store access is enabled </p>
   * @public
   */
  KeyStoreAccessEnabled: boolean | undefined;
}

/**
 * <p>The configuration for associating a package with a domain.</p>
 * @public
 */
export interface PackageAssociationConfiguration {
  /**
   * <p>The configuration parameters to enable accessing the key store required by the
   *    package.</p>
   * @public
   */
  KeyStoreAccessOption?: KeyStoreAccessOption | undefined;
}

/**
 * <p>Container for the request parameters to the <code>AssociatePackage</code> operation.</p>
 * @public
 */
export interface AssociatePackageRequest {
  /**
   * <p>Internal ID of the package to associate with a domain. Use <code>DescribePackages</code> to
   *    find this value. </p>
   * @public
   */
  PackageID: string | undefined;

  /**
   * <p>Name of the domain to associate the package with.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>A list of package IDs that must be associated with the domain before the package specified
   *    in the request can be associated.</p>
   * @public
   */
  PrerequisitePackageIDList?: string[] | undefined;

  /**
   * <p>The configuration for associating a package with an Amazon OpenSearch Service domain.</p>
   * @public
   */
  AssociationConfiguration?: PackageAssociationConfiguration | undefined;
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
 * <p>Additional information if the package is in an error state. Null otherwise.</p>
 * @public
 */
export interface ErrorDetails {
  /**
   * <p>The type of error that occurred.</p>
   * @public
   */
  ErrorType?: string | undefined;

  /**
   * <p>A message describing the error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PackageType = {
  PACKAGE_CONFIG: "PACKAGE-CONFIG",
  PACKAGE_LICENSE: "PACKAGE-LICENSE",
  TXT_DICTIONARY: "TXT-DICTIONARY",
  ZIP_PLUGIN: "ZIP-PLUGIN",
} as const;

/**
 * @public
 */
export type PackageType = (typeof PackageType)[keyof typeof PackageType];

/**
 * <p>Information about a package that is associated with a domain. For more information, see
 *     <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>.</p>
 * @public
 */
export interface DomainPackageDetails {
  /**
   * <p>Internal ID of the package.</p>
   * @public
   */
  PackageID?: string | undefined;

  /**
   * <p>User-specified name of the package.</p>
   * @public
   */
  PackageName?: string | undefined;

  /**
   * <p>The type of package.</p>
   * @public
   */
  PackageType?: PackageType | undefined;

  /**
   * <p>Timestamp of the most recent update to the package association status.</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>Name of the domain that the package is associated with.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>State of the association.</p>
   * @public
   */
  DomainPackageStatus?: DomainPackageStatus | undefined;

  /**
   * <p>The current version of the package.</p>
   * @public
   */
  PackageVersion?: string | undefined;

  /**
   * <p>A list of package IDs that must be associated with the domain before or with the package can
   *    be associated.</p>
   * @public
   */
  PrerequisitePackageIDList?: string[] | undefined;

  /**
   * <p>The relative path of the package on the OpenSearch Service cluster nodes. This is
   *     <code>synonym_path</code> when the package is for synonym files.</p>
   * @public
   */
  ReferencePath?: string | undefined;

  /**
   * <p>Additional information if the package is in an error state. Null otherwise.</p>
   * @public
   */
  ErrorDetails?: ErrorDetails | undefined;

  /**
   * <p>The configuration for associating a package with an Amazon OpenSearch Service domain.</p>
   * @public
   */
  AssociationConfiguration?: PackageAssociationConfiguration | undefined;
}

/**
 * <p>Container for the response returned by the <code>AssociatePackage</code> operation.</p>
 * @public
 */
export interface AssociatePackageResponse {
  /**
   * <p>Information about a package that is associated with a domain.</p>
   * @public
   */
  DomainPackageDetails?: DomainPackageDetails | undefined;
}

/**
 * <p>An error occurred because the client attempts to remove a resource that is currently in use.</p>
 * @public
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
 * <p> Details of a package that is associated with a domain.</p>
 * @public
 */
export interface PackageDetailsForAssociation {
  /**
   * <p>Internal ID of the package that you want to associate with a domain.</p>
   * @public
   */
  PackageID: string | undefined;

  /**
   * <p>List of package IDs that must be linked to the domain before or simultaneously with the
   *    package association.</p>
   * @public
   */
  PrerequisitePackageIDList?: string[] | undefined;

  /**
   * <p>The configuration parameters for associating the package with a domain.</p>
   * @public
   */
  AssociationConfiguration?: PackageAssociationConfiguration | undefined;
}

/**
 * @public
 */
export interface AssociatePackagesRequest {
  /**
   * <p>A list of packages and their prerequisites to be associated with a domain.</p>
   * @public
   */
  PackageList: PackageDetailsForAssociation[] | undefined;

  /**
   * <p>The name of an OpenSearch Service domain. Domain names are unique across the domains owned
   *    by an account within an Amazon Web Services Region.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface AssociatePackagesResponse {
  /**
   * <p>List of information about packages that are associated with a domain. </p>
   * @public
   */
  DomainPackageDetailsList?: DomainPackageDetails[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AWSServicePrincipal = {
  application_opensearchservice_amazonaws_com: "application.opensearchservice.amazonaws.com",
} as const;

/**
 * @public
 */
export type AWSServicePrincipal = (typeof AWSServicePrincipal)[keyof typeof AWSServicePrincipal];

/**
 * @public
 */
export interface AuthorizeVpcEndpointAccessRequest {
  /**
   * <p>The name of the OpenSearch Service domain to provide access to.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The Amazon Web Services account ID to grant access to.</p>
   * @public
   */
  Account?: string | undefined;

  /**
   * <p>The Amazon Web Services service SP to grant access to.</p>
   * @public
   */
  Service?: AWSServicePrincipal | undefined;
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
 * <p>Information about an Amazon Web Services account or service that has access to an Amazon
 *    OpenSearch Service domain through the use of an interface VPC endpoint.</p>
 * @public
 */
export interface AuthorizedPrincipal {
  /**
   * <p>The type of principal.</p>
   * @public
   */
  PrincipalType?: PrincipalType | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM principal</a> that
   *    is allowed access to the domain.</p>
   * @public
   */
  Principal?: string | undefined;
}

/**
 * @public
 */
export interface AuthorizeVpcEndpointAccessResponse {
  /**
   * <p>Information about the Amazon Web Services account or service that was provided access to the
   *    domain.</p>
   * @public
   */
  AuthorizedPrincipal: AuthorizedPrincipal | undefined;
}

/**
 * @public
 */
export interface CancelDomainConfigChangeRequest {
  /**
   * <p>The name of an OpenSearch Service domain. Domain names are unique across the domains owned
   *    by an account within an Amazon Web Services Region.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>When set to <code>True</code>, returns the list of change IDs and properties that will be
   *    cancelled without actually cancelling the change.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>A property change that was cancelled for an Amazon OpenSearch Service domain.</p>
 * @public
 */
export interface CancelledChangeProperty {
  /**
   * <p>The name of the property whose change was cancelled.</p>
   * @public
   */
  PropertyName?: string | undefined;

  /**
   * <p>The pending value of the property that was cancelled. This would have been the eventual
   *    value of the property if the chance had not been cancelled.</p>
   * @public
   */
  CancelledValue?: string | undefined;

  /**
   * <p>The current value of the property, after the change was cancelled.</p>
   * @public
   */
  ActiveValue?: string | undefined;
}

/**
 * @public
 */
export interface CancelDomainConfigChangeResponse {
  /**
   * <p>The unique identifiers of the changes that were cancelled.</p>
   * @public
   */
  CancelledChangeIds?: string[] | undefined;

  /**
   * <p>The domain change properties that were cancelled.</p>
   * @public
   */
  CancelledChangeProperties?: CancelledChangeProperty[] | undefined;

  /**
   * <p>Whether or not the request was a dry run. If <code>True</code>, the changes were not
   *    actually cancelled. </p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * <p>Container for the request parameters to cancel a service software update.</p>
 * @public
 */
export interface CancelServiceSoftwareUpdateRequest {
  /**
   * <p>Name of the OpenSearch Service domain that you want to cancel the service software update
   *    on.</p>
   * @public
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
 * <p>The current status of the service software for an Amazon OpenSearch Service domain. For more
 *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">Service software updates in
 *     Amazon OpenSearch Service</a>.</p>
 * @public
 */
export interface ServiceSoftwareOptions {
  /**
   * <p>The current service software version present on the domain.</p>
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * <p>The new service software version, if one is available.</p>
   * @public
   */
  NewVersion?: string | undefined;

  /**
   * <p>True if you're able to update your service software version. False if you can't update your
   *    service software version.</p>
   * @public
   */
  UpdateAvailable?: boolean | undefined;

  /**
   * <p> True if you're able to cancel your service software version update. False if you can't
   *    cancel your service software update.</p>
   * @public
   */
  Cancellable?: boolean | undefined;

  /**
   * <p>The status of your service software update.</p>
   * @public
   */
  UpdateStatus?: DeploymentStatus | undefined;

  /**
   * <p>A description of the service software update status.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The timestamp, in Epoch time, until which you can manually request a service software
   *    update. After this date, we automatically update your service software.</p>
   * @public
   */
  AutomatedUpdateDate?: Date | undefined;

  /**
   * <p>True if a service software is never automatically updated. False if a service software is
   *    automatically updated after the automated update date.</p>
   * @public
   */
  OptionalDeployment?: boolean | undefined;
}

/**
 * <p>Container for the response to a <code>CancelServiceSoftwareUpdate</code> operation. Contains
 *    the status of the update.</p>
 * @public
 */
export interface CancelServiceSoftwareUpdateResponse {
  /**
   * <p>Container for the state of your domain relative to the latest service software.</p>
   * @public
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions | undefined;
}

/**
 * @public
 * @enum
 */
export const AppConfigType = {
  OpensearchDashboardAdminGroups: "opensearchDashboards.dashboardAdmin.groups",
  OpensearchDashboardAdminUsers: "opensearchDashboards.dashboardAdmin.users",
} as const;

/**
 * @public
 */
export type AppConfigType = (typeof AppConfigType)[keyof typeof AppConfigType];

/**
 * <p>Configuration settings for an OpenSearch application. For more information, see see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/application.html">Using the
 *     OpenSearch user interface in Amazon OpenSearch Service</a>.</p>
 * @public
 */
export interface AppConfig {
  /**
   * <p>The configuration item to set, such as the admin role for the OpenSearch application.</p>
   * @public
   */
  key?: AppConfigType | undefined;

  /**
   * <p>The value assigned to the configuration key, such as an IAM user ARN.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Data sources that are associated with an OpenSearch application. </p>
 * @public
 */
export interface DataSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the domain. See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html">Identifiers for IAM Entities </a> in <i>Using
   *      Amazon Web Services Identity and Access Management</i> for more information. </p>
   * @public
   */
  dataSourceArn?: string | undefined;

  /**
   * <p>Detailed description of a data source.</p>
   * @public
   */
  dataSourceDescription?: string | undefined;
}

/**
 * <p>Configuration settings for enabling and managing IAM Identity Center.</p>
 * @public
 */
export interface IamIdentityCenterOptionsInput {
  /**
   * <p>Specifies whether IAM Identity Center is enabled or disabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain. See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html">Identifiers for IAM Entities </a> in <i>Using
   *      Amazon Web Services Identity and Access Management</i> for more information. </p>
   * @public
   */
  iamIdentityCenterInstanceArn?: string | undefined;

  /**
   * <p>The ARN of the IAM role associated with the IAM Identity Center application.</p>
   * @public
   */
  iamRoleForIdentityCenterApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique name of the OpenSearch application. Names must be unique within an Amazon Web Services Region for each account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The data sources to link to the OpenSearch application.</p>
   * @public
   */
  dataSources?: DataSource[] | undefined;

  /**
   * <p>Configuration settings for integrating Amazon Web Services IAM Identity Center with the
   *    OpenSearch application.</p>
   * @public
   */
  iamIdentityCenterOptions?: IamIdentityCenterOptionsInput | undefined;

  /**
   * <p>Configuration settings for the OpenSearch application, including administrative
   *    options.</p>
   * @public
   */
  appConfigs?: AppConfig[] | undefined;

  /**
   * <p>A list of tags attached to a domain.</p>
   * @public
   */
  tagList?: Tag[] | undefined;
}

/**
 * <p>Configuration settings for IAM Identity Center in an OpenSearch application.</p>
 * @public
 */
export interface IamIdentityCenterOptions {
  /**
   * <p>Indicates whether IAM Identity Center is enabled for the OpenSearch application.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain. See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html">Identifiers for IAM Entities </a> in <i>Using
   *      Amazon Web Services Identity and Access Management</i> for more information. </p>
   * @public
   */
  iamIdentityCenterInstanceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role assigned to the IAM Identity Center
   *    application for the OpenSearch application.</p>
   * @public
   */
  iamRoleForIdentityCenterApplicationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain. See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html">Identifiers for IAM Entities </a> in <i>Using
   *      Amazon Web Services Identity and Access Management</i> for more information. </p>
   * @public
   */
  iamIdentityCenterApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>The unique identifier assigned to the OpenSearch application.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the OpenSearch application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain. See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html">Identifiers for IAM Entities </a> in <i>Using
   *      Amazon Web Services Identity and Access Management</i> for more information. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The data sources linked to the OpenSearch application.</p>
   * @public
   */
  dataSources?: DataSource[] | undefined;

  /**
   * <p>The IAM Identity Center settings configured for the OpenSearch application.</p>
   * @public
   */
  iamIdentityCenterOptions?: IamIdentityCenterOptions | undefined;

  /**
   * <p>Configuration settings for the OpenSearch application, including administrative
   *    options.</p>
   * @public
   */
  appConfigs?: AppConfig[] | undefined;

  /**
   * <p>A list of tags attached to a domain.</p>
   * @public
   */
  tagList?: Tag[] | undefined;

  /**
   * <p>The timestamp indicating when the OpenSearch application was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
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
 * <p>The duration of a maintenance schedule. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for
 *     Amazon OpenSearch Service</a>.</p>
 * @public
 */
export interface Duration {
  /**
   * <p>Integer to specify the value of a maintenance schedule duration.</p>
   * @public
   */
  Value?: number | undefined;

  /**
   * <p>The unit of measurement for the duration of a maintenance schedule.</p>
   * @public
   */
  Unit?: TimeUnit | undefined;
}

/**
 * <note>
 *             <p>This object is deprecated. Use the domain's <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html">off-peak window</a> to
 *     schedule Auto-Tune optimizations. For migration instructions, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html#off-peak-migrate">Migrating from
 *      Auto-Tune maintenance windows</a>.</p>
 *          </note>
 *          <p>The Auto-Tune maintenance schedule. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch
 *     Service</a>.</p>
 * @public
 */
export interface AutoTuneMaintenanceSchedule {
  /**
   * <p>The Epoch timestamp at which the Auto-Tune maintenance schedule starts.</p>
   * @public
   */
  StartAt?: Date | undefined;

  /**
   * <p>The duration of the maintenance schedule. For example, <code>"Duration": \{"Value": 2,
   *     "Unit": "HOURS"\}</code>.</p>
   * @public
   */
  Duration?: Duration | undefined;

  /**
   * <p>A cron expression for a recurring maintenance schedule during which Auto-Tune can deploy
   *    changes.</p>
   * @public
   */
  CronExpressionForRecurrence?: string | undefined;
}

/**
 * <p>Options for configuring Auto-Tune. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch
 *     Service</a>
 *          </p>
 * @public
 */
export interface AutoTuneOptionsInput {
  /**
   * <p>Whether Auto-Tune is enabled or disabled.</p>
   * @public
   */
  DesiredState?: AutoTuneDesiredState | undefined;

  /**
   * <p>A list of maintenance schedules during which Auto-Tune can deploy changes. Maintenance
   *    windows are deprecated and have been replaced with <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html">off-peak windows</a>.</p>
   * @public
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[] | undefined;

  /**
   * <p>Whether to schedule Auto-Tune optimizations that require blue/green deployments during the
   *    domain's configured daily off-peak window.</p>
   * @public
   */
  UseOffPeakWindow?: boolean | undefined;
}

/**
 * <p>Container for the parameters required to enable cold storage for an OpenSearch Service
 *    domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cold-storage.html">Cold storage for Amazon
 *     OpenSearch Service</a>.</p>
 * @public
 */
export interface ColdStorageOptions {
  /**
   * <p>Whether to enable or disable cold storage on the domain. You must enable UltraWarm storage
   *    to enable cold storage.</p>
   * @public
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
  or1_12xlarge_search: "or1.12xlarge.search",
  or1_16xlarge_search: "or1.16xlarge.search",
  or1_2xlarge_search: "or1.2xlarge.search",
  or1_4xlarge_search: "or1.4xlarge.search",
  or1_8xlarge_search: "or1.8xlarge.search",
  or1_large_search: "or1.large.search",
  or1_medium_search: "or1.medium.search",
  or1_xlarge_search: "or1.xlarge.search",
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
 * <p>Configuration options for defining the setup of any node type within the cluster.</p>
 * @public
 */
export interface NodeConfig {
  /**
   * <p>A boolean value indicating whether a specific node type is active or inactive.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The instance type of a particular node within the cluster.</p>
   * @public
   */
  Type?: OpenSearchPartitionInstanceType | undefined;

  /**
   * <p>The number of nodes of a specific type within the cluster.</p>
   * @public
   */
  Count?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const NodeOptionsNodeType = {
  COORDINATOR: "coordinator",
} as const;

/**
 * @public
 */
export type NodeOptionsNodeType = (typeof NodeOptionsNodeType)[keyof typeof NodeOptionsNodeType];

/**
 * <p>Configuration settings for defining the node type within a cluster.</p>
 * @public
 */
export interface NodeOption {
  /**
   * <p>Defines the type of node, such as coordinating nodes.</p>
   * @public
   */
  NodeType?: NodeOptionsNodeType | undefined;

  /**
   * <p>Configuration options for defining the setup of any node type.</p>
   * @public
   */
  NodeConfig?: NodeConfig | undefined;
}

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
 * <p>The zone awareness configuration for an Amazon OpenSearch Service domain.</p>
 * @public
 */
export interface ZoneAwarenessConfig {
  /**
   * <p>If you enabled multiple Availability Zones, this value is the number of zones that you want
   *    the domain to use. Valid values are <code>2</code> and <code>3</code>. If your domain is
   *    provisioned within a VPC, this value be equal to number of subnets.</p>
   * @public
   */
  AvailabilityZoneCount?: number | undefined;
}

/**
 * <p>Container for the cluster configuration of an OpenSearch Service domain. For more
 *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html">Creating and managing
 *     Amazon OpenSearch Service domains</a>.</p>
 * @public
 */
export interface ClusterConfig {
  /**
   * <p>Instance type of data nodes in the cluster.</p>
   * @public
   */
  InstanceType?: OpenSearchPartitionInstanceType | undefined;

  /**
   * <p>Number of data nodes in the cluster. This number must be greater than 1, otherwise you
   *    receive a validation exception.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>Indicates whether dedicated master nodes are enabled for the cluster.<code>True</code> if
   *    the cluster will use a dedicated master node.<code>False</code> if the cluster will not.</p>
   * @public
   */
  DedicatedMasterEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether multiple Availability Zones are enabled. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-multiaz.html">Configuring a multi-AZ domain in Amazon OpenSearch Service</a>.</p>
   * @public
   */
  ZoneAwarenessEnabled?: boolean | undefined;

  /**
   * <p>Container for zone awareness configuration options. Only required if
   *     <code>ZoneAwarenessEnabled</code> is <code>true</code>.</p>
   * @public
   */
  ZoneAwarenessConfig?: ZoneAwarenessConfig | undefined;

  /**
   * <p>OpenSearch Service instance type of the dedicated master nodes in the cluster.</p>
   * @public
   */
  DedicatedMasterType?: OpenSearchPartitionInstanceType | undefined;

  /**
   * <p>Number of dedicated master nodes in the cluster. This number must be greater than 2 and not
   *    4, otherwise you receive a validation exception.</p>
   * @public
   */
  DedicatedMasterCount?: number | undefined;

  /**
   * <p>Whether to enable warm storage for the cluster.</p>
   * @public
   */
  WarmEnabled?: boolean | undefined;

  /**
   * <p>The instance type for the cluster's warm nodes.</p>
   * @public
   */
  WarmType?: OpenSearchWarmPartitionInstanceType | undefined;

  /**
   * <p>The number of warm nodes in the cluster.</p>
   * @public
   */
  WarmCount?: number | undefined;

  /**
   * <p>Container for cold storage configuration options.</p>
   * @public
   */
  ColdStorageOptions?: ColdStorageOptions | undefined;

  /**
   * <p>A boolean that indicates whether a multi-AZ domain is turned on with a standby AZ. For more
   *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-multiaz.html">Configuring a multi-AZ
   *     domain in Amazon OpenSearch Service</a>. </p>
   * @public
   */
  MultiAZWithStandbyEnabled?: boolean | undefined;

  /**
   * <p>List of node options for the domain.</p>
   * @public
   */
  NodeOptions?: NodeOption[] | undefined;
}

/**
 * <p>Container for the parameters required to enable Cognito authentication for an OpenSearch
 *    Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html">Configuring Amazon Cognito
 *     authentication for OpenSearch Dashboards</a>.</p>
 * @public
 */
export interface CognitoOptions {
  /**
   * <p>Whether to enable or disable Amazon Cognito authentication for OpenSearch Dashboards.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The Amazon Cognito user pool ID that you want OpenSearch Service to use for OpenSearch
   *    Dashboards authentication.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>The Amazon Cognito identity pool ID that you want OpenSearch Service to use for OpenSearch
   *    Dashboards authentication.</p>
   * @public
   */
  IdentityPoolId?: string | undefined;

  /**
   * <p>The <code>AmazonOpenSearchServiceCognitoAccess</code> role that allows OpenSearch Service to
   *    configure your user pool and identity pool.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TLSSecurityPolicy = {
  POLICY_MIN_TLS_1_0_2019_07: "Policy-Min-TLS-1-0-2019-07",
  POLICY_MIN_TLS_1_2_2019_07: "Policy-Min-TLS-1-2-2019-07",
  POLICY_MIN_TLS_1_2_PFS_2023_10: "Policy-Min-TLS-1-2-PFS-2023-10",
} as const;

/**
 * @public
 */
export type TLSSecurityPolicy = (typeof TLSSecurityPolicy)[keyof typeof TLSSecurityPolicy];

/**
 * <p>Options to configure a custom endpoint for an OpenSearch Service domain.</p>
 * @public
 */
export interface DomainEndpointOptions {
  /**
   * <p>True to require that all traffic to the domain arrive over HTTPS.</p>
   * @public
   */
  EnforceHTTPS?: boolean | undefined;

  /**
   * <p>Specify the TLS security policy to apply to the HTTPS endpoint of the domain. The policy can
   *    be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Policy-Min-TLS-1-0-2019-07:</b> TLS security policy that
   *      supports TLS version 1.0 to TLS version 1.2</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Policy-Min-TLS-1-2-2019-07:</b> TLS security policy that
   *      supports only TLS version 1.2</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Policy-Min-TLS-1-2-PFS-2023-10:</b> TLS security policy that
   *      supports TLS version 1.2 to TLS version 1.3 with perfect forward secrecy cipher suites</p>
   *             </li>
   *          </ul>
   * @public
   */
  TLSSecurityPolicy?: TLSSecurityPolicy | undefined;

  /**
   * <p>Whether to enable a custom endpoint for the domain.</p>
   * @public
   */
  CustomEndpointEnabled?: boolean | undefined;

  /**
   * <p>The fully qualified URL for the custom endpoint.</p>
   * @public
   */
  CustomEndpoint?: string | undefined;

  /**
   * <p>The ARN for your security certificate, managed in Amazon Web Services Certificate Manager
   *    (ACM).</p>
   * @public
   */
  CustomEndpointCertificateArn?: string | undefined;
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
 * <p>Container for the parameters required to enable EBS-based storage for an OpenSearch Service
 *    domain.</p>
 * @public
 */
export interface EBSOptions {
  /**
   * <p>Indicates whether EBS volumes are attached to data nodes in an OpenSearch Service
   *    domain.</p>
   * @public
   */
  EBSEnabled?: boolean | undefined;

  /**
   * <p>Specifies the type of EBS volumes attached to data nodes.</p>
   * @public
   */
  VolumeType?: VolumeType | undefined;

  /**
   * <p>Specifies the size (in GiB) of EBS volumes attached to data nodes.</p>
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * <p>Specifies the baseline input/output (I/O) performance of EBS volumes attached to data nodes.
   *    Applicable only for the <code>gp3</code> and provisioned IOPS EBS volume types.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>Specifies the throughput (in MiB/s) of the EBS volumes attached to data nodes. Applicable
   *    only for the <code>gp3</code> volume type.</p>
   * @public
   */
  Throughput?: number | undefined;
}

/**
 * <p>Specifies whether the domain should encrypt data at rest, and if so, the Key Management
 *    Service (KMS) key to use. Can only be used when creating a new domain or enabling encryption at
 *    rest for the first time on an existing domain. You can't modify this parameter after it's already
 *    been specified.</p>
 * @public
 */
export interface EncryptionAtRestOptions {
  /**
   * <p>True to enable encryption at rest.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The KMS key ID. Takes the form <code>1a2a3a4-1a2a-3a4a-5a6a-1a2a3a4a5a6a</code>.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RolesKeyIdCOption = {
  GroupId: "GroupId",
  GroupName: "GroupName",
} as const;

/**
 * @public
 */
export type RolesKeyIdCOption = (typeof RolesKeyIdCOption)[keyof typeof RolesKeyIdCOption];

/**
 * @public
 * @enum
 */
export const SubjectKeyIdCOption = {
  Email: "Email",
  UserId: "UserId",
  UserName: "UserName",
} as const;

/**
 * @public
 */
export type SubjectKeyIdCOption = (typeof SubjectKeyIdCOption)[keyof typeof SubjectKeyIdCOption];

/**
 * <p>Configuration settings for enabling and managing IAM Identity Center.</p>
 * @public
 */
export interface IdentityCenterOptionsInput {
  /**
   * <p>Indicates whether IAM Identity Center is enabled for API access in Amazon OpenSearch
   *    Service.</p>
   * @public
   */
  EnabledAPIAccess?: boolean | undefined;

  /**
   * <p>The ARN of the IAM Identity Center instance used to create an OpenSearch UI application that
   *    uses IAM Identity Center for authentication.</p>
   * @public
   */
  IdentityCenterInstanceARN?: string | undefined;

  /**
   * <p>Specifies the attribute that contains the subject identifier (such as username, user ID, or
   *    email) in IAM Identity Center.</p>
   * @public
   */
  SubjectKey?: SubjectKeyIdCOption | undefined;

  /**
   * <p>Specifies the attribute that contains the backend role identifier (such as group name or
   *    group ID) in IAM Identity Center.</p>
   * @public
   */
  RolesKey?: RolesKeyIdCOption | undefined;
}

/**
 * @public
 * @enum
 */
export const IPAddressType = {
  DUALSTACK: "dualstack",
  IPV4: "ipv4",
} as const;

/**
 * @public
 */
export type IPAddressType = (typeof IPAddressType)[keyof typeof IPAddressType];

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
 * <p>Specifies whether the Amazon OpenSearch Service domain publishes the OpenSearch application
 *    and slow logs to Amazon CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createdomain-configure-slow-logs.html">Monitoring
 *     OpenSearch logs with Amazon CloudWatch Logs</a>.</p>
 *          <note>
 *             <p>After you enable log publishing, you still have to enable the collection of slow logs using
 *     the OpenSearch REST API.</p>
 *          </note>
 * @public
 */
export interface LogPublishingOption {
  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch Logs group to publish logs to.</p>
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * <p>Whether the log should be published.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Enables or disables node-to-node encryption. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ntn.html">Node-to-node
 *     encryption for Amazon OpenSearch Service</a>.</p>
 * @public
 */
export interface NodeToNodeEncryptionOptions {
  /**
   * <p>True to enable node-to-node encryption.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>The desired start time for an <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html">off-peak maintenance
 *     window</a>.</p>
 * @public
 */
export interface WindowStartTime {
  /**
   * <p>The start hour of the window in Coordinated Universal Time (UTC), using 24-hour time. For
   *    example, <code>17</code> refers to 5:00 P.M. UTC.</p>
   * @public
   */
  Hours: number | undefined;

  /**
   * <p>The start minute of the window, in UTC.</p>
   * @public
   */
  Minutes: number | undefined;
}

/**
 * <p>A custom 10-hour, low-traffic window during which OpenSearch Service can perform mandatory
 *    configuration changes on the domain. These actions can include scheduled service software updates
 *    and blue/green Auto-Tune enhancements. OpenSearch Service will schedule these actions during the
 *    window that you specify.</p>
 *          <p>If you don't specify a window start time, it defaults to 10:00 P.M. local time.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html">Defining off-peak maintenance
 *     windows for Amazon OpenSearch Service</a>.</p>
 * @public
 */
export interface OffPeakWindow {
  /**
   * <p>A custom start time for the off-peak window, in Coordinated Universal Time (UTC). The window
   *    length will always be 10 hours, so you can't specify an end time. For example, if you specify
   *    11:00 P.M. UTC as a start time, the end time will automatically be set to 9:00 A.M.</p>
   * @public
   */
  WindowStartTime?: WindowStartTime | undefined;
}

/**
 * <p>Options for a domain's <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html">off-peak window</a>,
 *    during which OpenSearch Service can perform mandatory configuration changes on the domain.</p>
 * @public
 */
export interface OffPeakWindowOptions {
  /**
   * <p>Whether to enable an off-peak window.</p>
   *          <p>This option is only available when modifying a domain created prior to February 16, 2023,
   *    not when creating a new domain. All domains created after this date have the off-peak window
   *    enabled by default. You can't disable the off-peak window after it's enabled for a domain.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Off-peak window settings for the domain.</p>
   * @public
   */
  OffPeakWindow?: OffPeakWindow | undefined;
}

/**
 * <p>The time, in UTC format, when OpenSearch Service takes a daily automated snapshot of the
 *    specified domain. Default is <code>0</code> hours.</p>
 * @public
 */
export interface SnapshotOptions {
  /**
   * <p>The time, in UTC format, when OpenSearch Service takes a daily automated snapshot of the
   *    specified domain. Default is <code>0</code> hours.</p>
   * @public
   */
  AutomatedSnapshotStartHour?: number | undefined;
}

/**
 * <p>Options for configuring service software updates for a domain.</p>
 * @public
 */
export interface SoftwareUpdateOptions {
  /**
   * <p>Whether automatic service software updates are enabled for the domain.</p>
   * @public
   */
  AutoSoftwareUpdateEnabled?: boolean | undefined;
}

/**
 * <p>Options to specify the subnets and security groups for an Amazon OpenSearch Service VPC
 *    endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching your Amazon OpenSearch Service
 *     domains using a VPC</a>.</p>
 * @public
 */
export interface VPCOptions {
  /**
   * <p>A list of subnet IDs associated with the VPC endpoints for the domain. If your domain uses
   *    multiple Availability Zones, you need to provide two subnet IDs, one per zone. Otherwise, provide
   *    only one.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The list of security group IDs associated with the VPC endpoints for the domain. If you do
   *    not provide a security group ID, OpenSearch Service uses the default security group for the
   *    VPC.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDomainRequest {
  /**
   * <p>Name of the OpenSearch Service domain to create. Domain names are unique across the domains
   *    owned by an account within an Amazon Web Services Region.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>String of format Elasticsearch_X.Y or OpenSearch_X.Y to specify the engine version for the
   *    OpenSearch Service domain. For example, <code>OpenSearch_1.0</code> or
   *     <code>Elasticsearch_7.9</code>. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomains">Creating
   *     and managing Amazon OpenSearch Service domains</a>.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Container for the cluster configuration of a domain.</p>
   * @public
   */
  ClusterConfig?: ClusterConfig | undefined;

  /**
   * <p>Container for the parameters required to enable EBS-based storage for an OpenSearch Service
   *    domain.</p>
   * @public
   */
  EBSOptions?: EBSOptions | undefined;

  /**
   * <p>Identity and Access Management (IAM) policy document specifying the access policies for the
   *    new domain.</p>
   * @public
   */
  AccessPolicies?: string | undefined;

  /**
   * <p>Specify either dual stack or IPv4 as your IP address type. Dual stack allows you to share
   *    domain resources across IPv4 and IPv6 address types, and is the recommended option. If you set
   *    your IP address type to dual stack, you can't change your address type later.</p>
   * @public
   */
  IPAddressType?: IPAddressType | undefined;

  /**
   * <p>DEPRECATED. Container for the parameters required to configure automated snapshots of domain
   *    indexes.</p>
   * @public
   */
  SnapshotOptions?: SnapshotOptions | undefined;

  /**
   * <p>Container for the values required to configure VPC access domains. If you don't specify
   *    these values, OpenSearch Service creates the domain with a public endpoint. For more information,
   *    see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching
   *     your Amazon OpenSearch Service domains using a VPC</a>.</p>
   * @public
   */
  VPCOptions?: VPCOptions | undefined;

  /**
   * <p>Key-value pairs to configure Amazon Cognito authentication. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html">Configuring Amazon Cognito authentication for OpenSearch Dashboards</a>.</p>
   * @public
   */
  CognitoOptions?: CognitoOptions | undefined;

  /**
   * <p>Key-value pairs to enable encryption at rest.</p>
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * <p>Enables node-to-node encryption.</p>
   * @public
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions | undefined;

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
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;

  /**
   * <p>Key-value pairs to configure log publishing.</p>
   * @public
   */
  LogPublishingOptions?: Partial<Record<LogType, LogPublishingOption>> | undefined;

  /**
   * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
   *    traffic.</p>
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptions | undefined;

  /**
   * <p>Options for fine-grained access control.</p>
   * @public
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput | undefined;

  /**
   * <p>Configuration options for enabling and managing IAM Identity Center integration within a
   *    domain.</p>
   * @public
   */
  IdentityCenterOptions?: IdentityCenterOptionsInput | undefined;

  /**
   * <p>List of tags to add to the domain upon creation.</p>
   * @public
   */
  TagList?: Tag[] | undefined;

  /**
   * <p>Options for Auto-Tune.</p>
   * @public
   */
  AutoTuneOptions?: AutoTuneOptionsInput | undefined;

  /**
   * <p>Specifies a daily 10-hour time block during which OpenSearch Service can perform
   *    configuration changes on the domain, including service software updates and Auto-Tune
   *    enhancements that require a blue/green deployment. If no options are specified, the default start
   *    time of 10:00 P.M. local time (for the Region that the domain is created in) is used.</p>
   * @public
   */
  OffPeakWindowOptions?: OffPeakWindowOptions | undefined;

  /**
   * <p>Software update options for the domain.</p>
   * @public
   */
  SoftwareUpdateOptions?: SoftwareUpdateOptions | undefined;

  /**
   * <p>Options for all machine learning features for the specified domain.</p>
   * @public
   */
  AIMLOptions?: AIMLOptionsInput | undefined;
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
 * <p>The Auto-Tune settings for a domain, displayed when enabling or disabling Auto-Tune.</p>
 * @public
 */
export interface AutoTuneOptionsOutput {
  /**
   * <p>The current state of Auto-Tune on the domain.</p>
   * @public
   */
  State?: AutoTuneState | undefined;

  /**
   * <p>Any errors that occurred while enabling or disabling Auto-Tune.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>Whether the domain's off-peak window will be used to deploy Auto-Tune changes rather than a
   *    maintenance schedule.</p>
   * @public
   */
  UseOffPeakWindow?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ConfigChangeStatus = {
  APPLYING_CHANGES: "ApplyingChanges",
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
  INITIALIZING: "Initializing",
  PENDING: "Pending",
  PENDING_USER_INPUT: "PendingUserInput",
  VALIDATING: "Validating",
  VALIDATION_FAILED: "ValidationFailed",
} as const;

/**
 * @public
 */
export type ConfigChangeStatus = (typeof ConfigChangeStatus)[keyof typeof ConfigChangeStatus];

/**
 * @public
 * @enum
 */
export const InitiatedBy = {
  CUSTOMER: "CUSTOMER",
  SERVICE: "SERVICE",
} as const;

/**
 * @public
 */
export type InitiatedBy = (typeof InitiatedBy)[keyof typeof InitiatedBy];

/**
 * <p>Container for information about a configuration change happening on a domain.</p>
 * @public
 */
export interface ChangeProgressDetails {
  /**
   * <p>The ID of the configuration change.</p>
   * @public
   */
  ChangeId?: string | undefined;

  /**
   * <p>A message corresponding to the status of the configuration change.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The current status of the configuration change.</p>
   * @public
   */
  ConfigChangeStatus?: ConfigChangeStatus | undefined;

  /**
   * <p>The IAM principal who initiated the configuration change.</p>
   * @public
   */
  InitiatedBy?: InitiatedBy | undefined;

  /**
   * <p>The time that the configuration change was initiated, in Universal Coordinated Time
   *    (UTC).</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The last time that the configuration change was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const DomainProcessingStatusType = {
  ACTIVE: "Active",
  CREATING: "Creating",
  DELETING: "Deleting",
  ISOLATED: "Isolated",
  MODIFYING: "Modifying",
  UPDATING: "UpdatingServiceSoftware",
  UPGRADING: "UpgradingEngineVersion",
} as const;

/**
 * @public
 */
export type DomainProcessingStatusType = (typeof DomainProcessingStatusType)[keyof typeof DomainProcessingStatusType];

/**
 * <p>Settings container for integrating IAM Identity Center with OpenSearch UI applications,
 *    which enables enabling secure user authentication and access control across multiple data
 *    sources. This setup supports single sign-on (SSO) through IAM Identity Center, allowing
 *    centralized user management.</p>
 * @public
 */
export interface IdentityCenterOptions {
  /**
   * <p>Indicates whether IAM Identity Center is enabled for the application.</p>
   * @public
   */
  EnabledAPIAccess?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM Identity Center instance.</p>
   * @public
   */
  IdentityCenterInstanceARN?: string | undefined;

  /**
   * <p>Specifies the attribute that contains the subject identifier (such as username, user ID, or
   *    email) in IAM Identity Center.</p>
   * @public
   */
  SubjectKey?: SubjectKeyIdCOption | undefined;

  /**
   * <p>Specifies the attribute that contains the backend role identifier (such as group name or
   *    group ID) in IAM Identity Center.</p>
   * @public
   */
  RolesKey?: RolesKeyIdCOption | undefined;

  /**
   * <p>The ARN of the IAM Identity Center application that integrates with Amazon OpenSearch
   *    Service.</p>
   * @public
   */
  IdentityCenterApplicationARN?: string | undefined;

  /**
   * <p>The identifier of the IAM Identity Store.</p>
   * @public
   */
  IdentityStoreId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PropertyValueType = {
  PLAIN_TEXT: "PLAIN_TEXT",
  STRINGIFIED_JSON: "STRINGIFIED_JSON",
} as const;

/**
 * @public
 */
export type PropertyValueType = (typeof PropertyValueType)[keyof typeof PropertyValueType];

/**
 * <p>Information about the domain properties that are currently being modified.</p>
 * @public
 */
export interface ModifyingProperties {
  /**
   * <p>The name of the property that is currently being modified.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The current value of the domain property that is being modified.</p>
   * @public
   */
  ActiveValue?: string | undefined;

  /**
   * <p>The value that the property that is currently being modified will eventually have.</p>
   * @public
   */
  PendingValue?: string | undefined;

  /**
   * <p>The type of value that is currently being modified. Properties can have two types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PLAIN_TEXT</code>: Contain direct values such as "1", "True", or
   *      "c5.large.search".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STRINGIFIED_JSON</code>: Contain content in JSON format, such as
   *      \{"Enabled":"True"\}".</p>
   *             </li>
   *          </ul>
   * @public
   */
  ValueType?: PropertyValueType | undefined;
}

/**
 * <p>Information about the subnets and security groups for an Amazon OpenSearch Service domain
 *    provisioned within a virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html">Launching your
 *     Amazon OpenSearch Service domains using a VPC</a>. This information only exists if the
 *    domain was created with <code>VPCOptions</code>.</p>
 * @public
 */
export interface VPCDerivedInfo {
  /**
   * <p>The ID for your VPC. Amazon VPC generates this value when you create a VPC.</p>
   * @public
   */
  VPCId?: string | undefined;

  /**
   * <p>A list of subnet IDs associated with the VPC endpoints for the domain.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The list of Availability Zones associated with the VPC subnets.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The list of security group IDs associated with the VPC endpoints for the domain.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * <p>The current status of an OpenSearch Service domain.</p>
 * @public
 */
export interface DomainStatus {
  /**
   * <p>Unique identifier for the domain.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>Name of the domain. Domain names are unique across all domains owned by the same account
   *    within an Amazon Web Services Region.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM identifiers
   *    </a> in the <i>AWS Identity and Access Management User Guide</i>.</p>
   * @public
   */
  ARN: string | undefined;

  /**
   * <p>Creation status of an OpenSearch Service domain. True if domain creation is complete. False
   *    if domain creation is still in progress.</p>
   * @public
   */
  Created?: boolean | undefined;

  /**
   * <p>Deletion status of an OpenSearch Service domain. True if domain deletion is complete. False
   *    if domain deletion is still in progress. Once deletion is complete, the status of the domain is
   *    no longer returned.</p>
   * @public
   */
  Deleted?: boolean | undefined;

  /**
   * <p>Domain-specific endpoint used to submit index, search, and data upload requests to the
   *    domain.</p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>If <code>IPAddressType</code> to set to <code>dualstack</code>, a version 2 domain endpoint
   *    is provisioned. This endpoint functions like a normal endpoint, except that it works with both
   *    IPv4 and IPv6 IP addresses. Normal endpoints work only with IPv4 IP addresses. </p>
   * @public
   */
  EndpointV2?: string | undefined;

  /**
   * <p>The key-value pair that exists if the OpenSearch Service domain uses VPC endpoints. For
   *    example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>IPv4 IP addresses</b> -
   *       <code>'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com'</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Dual stack IP addresses</b> -
   *       <code>'vpcv2':'vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.aos.us-east-1.on.aws'</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Endpoints?: Record<string, string> | undefined;

  /**
   * <p>The dual stack hosted zone ID for the domain. </p>
   * @public
   */
  DomainEndpointV2HostedZoneId?: string | undefined;

  /**
   * <p>The status of the domain configuration. True if OpenSearch Service is processing
   *    configuration changes. False if the configuration is active.</p>
   * @public
   */
  Processing?: boolean | undefined;

  /**
   * <p>The status of a domain version upgrade to a new version of OpenSearch or Elasticsearch. True
   *    if OpenSearch Service is in the process of a version upgrade. False if the configuration is
   *    active.</p>
   * @public
   */
  UpgradeProcessing?: boolean | undefined;

  /**
   * <p>Version of OpenSearch or Elasticsearch that the domain is running, in the format
   *     <code>Elasticsearch_X.Y</code> or <code>OpenSearch_X.Y</code>.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Container for the cluster configuration of the domain.</p>
   * @public
   */
  ClusterConfig: ClusterConfig | undefined;

  /**
   * <p>Container for EBS-based storage settings for the domain.</p>
   * @public
   */
  EBSOptions?: EBSOptions | undefined;

  /**
   * <p>Identity and Access Management (IAM) policy document specifying the access policies for the
   *    domain.</p>
   * @public
   */
  AccessPolicies?: string | undefined;

  /**
   * <p>The type of IP addresses supported by the endpoint for the domain.</p>
   * @public
   */
  IPAddressType?: IPAddressType | undefined;

  /**
   * <p>DEPRECATED. Container for parameters required to configure automated snapshots of domain
   *    indexes.</p>
   * @public
   */
  SnapshotOptions?: SnapshotOptions | undefined;

  /**
   * <p>The VPC configuration for the domain.</p>
   * @public
   */
  VPCOptions?: VPCDerivedInfo | undefined;

  /**
   * <p>Key-value pairs to configure Amazon Cognito authentication for OpenSearch Dashboards.</p>
   * @public
   */
  CognitoOptions?: CognitoOptions | undefined;

  /**
   * <p>Encryption at rest settings for the domain.</p>
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * <p>Whether node-to-node encryption is enabled or disabled.</p>
   * @public
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions | undefined;

  /**
   * <p>Key-value pairs that specify advanced configuration options.</p>
   * @public
   */
  AdvancedOptions?: Record<string, string> | undefined;

  /**
   * <p>Log publishing options for the domain.</p>
   * @public
   */
  LogPublishingOptions?: Partial<Record<LogType, LogPublishingOption>> | undefined;

  /**
   * <p>The current status of the domain's service software.</p>
   * @public
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions | undefined;

  /**
   * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
   *    traffic.</p>
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptions | undefined;

  /**
   * <p>Settings for fine-grained access control.</p>
   * @public
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptions | undefined;

  /**
   * <p>Configuration options for controlling IAM Identity Center integration within a
   *    domain.</p>
   * @public
   */
  IdentityCenterOptions?: IdentityCenterOptions | undefined;

  /**
   * <p>Auto-Tune settings for the domain.</p>
   * @public
   */
  AutoTuneOptions?: AutoTuneOptionsOutput | undefined;

  /**
   * <p>Information about a configuration change happening on the domain.</p>
   * @public
   */
  ChangeProgressDetails?: ChangeProgressDetails | undefined;

  /**
   * <p>Options that specify a custom 10-hour window during which OpenSearch Service can perform
   *    configuration changes on the domain.</p>
   * @public
   */
  OffPeakWindowOptions?: OffPeakWindowOptions | undefined;

  /**
   * <p>Service software update options for the domain.</p>
   * @public
   */
  SoftwareUpdateOptions?: SoftwareUpdateOptions | undefined;

  /**
   * <p>The status of any changes that are currently in progress for the domain.</p>
   * @public
   */
  DomainProcessingStatus?: DomainProcessingStatusType | undefined;

  /**
   * <p>Information about the domain properties that are currently being modified.</p>
   * @public
   */
  ModifyingProperties?: ModifyingProperties[] | undefined;

  /**
   * <p>Container for parameters required to enable all machine learning features.</p>
   * @public
   */
  AIMLOptions?: AIMLOptionsOutput | undefined;
}

/**
 * <p>The result of a <code>CreateDomain</code> operation. Contains the status of the newly
 *    created domain.</p>
 * @public
 */
export interface CreateDomainResponse {
  /**
   * <p>The status of the newly created domain.</p>
   * @public
   */
  DomainStatus?: DomainStatus | undefined;
}

/**
 * <p>An exception for trying to create or access a sub-resource that's either invalid or not supported.</p>
 * @public
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
 * <p>An exception for creating a resource that already exists.</p>
 * @public
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
 * <p>Cross-cluster search specific connection properties.</p>
 * @public
 */
export interface CrossClusterSearchConnectionProperties {
  /**
   * <p>The status of the <code>SkipUnavailable</code> setting for the outbound connection. This
   *    feature allows you to specify some clusters as optional and ensure that your cross-cluster
   *    queries return partial results despite failures on one or more remote clusters.</p>
   * @public
   */
  SkipUnavailable?: SkipUnavailableStatus | undefined;
}

/**
 * <p>The connection properties of an outbound connection.</p>
 * @public
 */
export interface ConnectionProperties {
  /**
   * <important>
   *             <p>The Endpoint attribute cannot be modified. </p>
   *          </important>
   *          <p>The endpoint of the remote domain. Applicable for VPC_ENDPOINT connection mode.</p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>The connection properties for cross cluster search.</p>
   * @public
   */
  CrossClusterSearch?: CrossClusterSearchConnectionProperties | undefined;
}

/**
 * <p>Container for the parameters to the <code>CreateOutboundConnection</code> operation.</p>
 * @public
 */
export interface CreateOutboundConnectionRequest {
  /**
   * <p>Name and Region of the source (local) domain.</p>
   * @public
   */
  LocalDomainInfo: DomainInformationContainer | undefined;

  /**
   * <p>Name and Region of the destination (remote) domain.</p>
   * @public
   */
  RemoteDomainInfo: DomainInformationContainer | undefined;

  /**
   * <p>Name of the connection.</p>
   * @public
   */
  ConnectionAlias: string | undefined;

  /**
   * <p>The connection mode.</p>
   * @public
   */
  ConnectionMode?: ConnectionMode | undefined;

  /**
   * <p>The <code>ConnectionProperties</code> for the outbound connection.</p>
   * @public
   */
  ConnectionProperties?: ConnectionProperties | undefined;
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
 * <p>The status of an outbound cross-cluster connection.</p>
 * @public
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
   *                   <b>PENDING_ACCEPTANCE</b>: Outbound connection request is
   *      validated and is not yet accepted by the remote domain owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>APPROVED</b> - Outbound connection has been approved by the
   *      remote domain owner for getting provisioned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PROVISIONING</b> - Outbound connection request is in
   *      process.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> - Outbound connection is active and ready to
   *      use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>REJECTING</b> - Outbound connection rejection by remote
   *      domain owner is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>REJECTED</b> - Outbound connection request is rejected by
   *      remote domain owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETING</b> - Outbound connection deletion is in
   *      progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETED</b> - Outbound connection is deleted and can no
   *      longer be used.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StatusCode?: OutboundConnectionStatusCode | undefined;

  /**
   * <p>Verbose information for the outbound connection.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The result of a <code>CreateOutboundConnection</code> request. Contains details about the
 *    newly created cross-cluster connection.</p>
 * @public
 */
export interface CreateOutboundConnectionResponse {
  /**
   * <p>Information about the source (local) domain.</p>
   * @public
   */
  LocalDomainInfo?: DomainInformationContainer | undefined;

  /**
   * <p>Information about the destination (remote) domain.</p>
   * @public
   */
  RemoteDomainInfo?: DomainInformationContainer | undefined;

  /**
   * <p>Name of the connection.</p>
   * @public
   */
  ConnectionAlias?: string | undefined;

  /**
   * <p>The status of the connection.</p>
   * @public
   */
  ConnectionStatus?: OutboundConnectionStatus | undefined;

  /**
   * <p>The unique identifier for the created outbound connection, which is used for subsequent
   *    operations on the connection.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>The connection mode.</p>
   * @public
   */
  ConnectionMode?: ConnectionMode | undefined;

  /**
   * <p>The <code>ConnectionProperties</code> for the newly created connection.</p>
   * @public
   */
  ConnectionProperties?: ConnectionProperties | undefined;
}

/**
 * @public
 * @enum
 */
export const RequirementLevel = {
  NONE: "NONE",
  OPTIONAL: "OPTIONAL",
  REQUIRED: "REQUIRED",
} as const;

/**
 * @public
 */
export type RequirementLevel = (typeof RequirementLevel)[keyof typeof RequirementLevel];

/**
 * <p> The configuration parameters for a package.</p>
 * @public
 */
export interface PackageConfiguration {
  /**
   * <p>The license requirements for the package.</p>
   * @public
   */
  LicenseRequirement: RequirementLevel | undefined;

  /**
   * <p>The relative file path for the license associated with the package.</p>
   * @public
   */
  LicenseFilepath?: string | undefined;

  /**
   * <p>The configuration requirements for the package.</p>
   * @public
   */
  ConfigurationRequirement: RequirementLevel | undefined;

  /**
   * <p>This indicates whether a B/G deployment is required for updating the configuration that the
   *    plugin is prerequisite for.</p>
   * @public
   */
  RequiresRestartForConfigurationUpdate?: boolean | undefined;
}

/**
 * <p>Encryption options for a package.</p>
 * @public
 */
export interface PackageEncryptionOptions {
  /**
   * <p>KMS key ID for encrypting the package.</p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;

  /**
   * <p>Whether encryption is enabled for the package.</p>
   * @public
   */
  EncryptionEnabled: boolean | undefined;
}

/**
 * <p>The Amazon S3 location to import the package from.</p>
 * @public
 */
export interface PackageSource {
  /**
   * <p>The name of the Amazon S3 bucket containing the package.</p>
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * <p>Key (file name) of the package.</p>
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * <p>Configuration options for determining whether a package can be made available for use by
 *    other users.</p>
 * @public
 */
export interface PackageVendingOptions {
  /**
   * <p>Indicates whether the package vending feature is enabled, allowing the package to be used by
   *    other users.</p>
   * @public
   */
  VendingEnabled: boolean | undefined;
}

/**
 * <p>Container for request parameters to the <code>CreatePackage</code> operation.</p>
 * @public
 */
export interface CreatePackageRequest {
  /**
   * <p>Unique name for the package.</p>
   * @public
   */
  PackageName: string | undefined;

  /**
   * <p>The type of package.</p>
   * @public
   */
  PackageType: PackageType | undefined;

  /**
   * <p>Description of the package.</p>
   * @public
   */
  PackageDescription?: string | undefined;

  /**
   * <p>The Amazon S3 location from which to import the package.</p>
   * @public
   */
  PackageSource: PackageSource | undefined;

  /**
   * <p> The configuration parameters for the package being created.</p>
   * @public
   */
  PackageConfiguration?: PackageConfiguration | undefined;

  /**
   * <p>The version of the Amazon OpenSearch Service engine for which is compatible with the
   *    package. This can only be specified for package type <code>ZIP-PLUGIN</code>
   *          </p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p> The vending options for the package being created. They determine if the package can be
   *    vended to other users.</p>
   * @public
   */
  PackageVendingOptions?: PackageVendingOptions | undefined;

  /**
   * <p>The encryption parameters for the package being created.</p>
   * @public
   */
  PackageEncryptionOptions?: PackageEncryptionOptions | undefined;
}

/**
 * <p>Basic information about the plugin.</p>
 * @public
 */
export interface PluginProperties {
  /**
   * <p>The name of the plugin.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the plugin.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The version of the plugin.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The name of the class to load.</p>
   * @public
   */
  ClassName?: string | undefined;

  /**
   * <p>The uncompressed size of the plugin.</p>
   * @public
   */
  UncompressedSizeInBytes?: number | undefined;
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
 * <p>Basic information about a package.</p>
 * @public
 */
export interface PackageDetails {
  /**
   * <p>The unique identifier of the package.</p>
   * @public
   */
  PackageID?: string | undefined;

  /**
   * <p>The user-specified name of the package.</p>
   * @public
   */
  PackageName?: string | undefined;

  /**
   * <p>The type of package.</p>
   * @public
   */
  PackageType?: PackageType | undefined;

  /**
   * <p>User-specified description of the package.</p>
   * @public
   */
  PackageDescription?: string | undefined;

  /**
   * <p>The current status of the package. The available options are <code>AVAILABLE</code>,
   *     <code>COPYING</code>, <code>COPY_FAILED</code>, <code>VALIDATNG</code>,
   *     <code>VALIDATION_FAILED</code>, <code>DELETING</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  PackageStatus?: PackageStatus | undefined;

  /**
   * <p>The timestamp when the package was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>Date and time when the package was last updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The package version.</p>
   * @public
   */
  AvailablePackageVersion?: string | undefined;

  /**
   * <p>Additional information if the package is in an error state. Null otherwise.</p>
   * @public
   */
  ErrorDetails?: ErrorDetails | undefined;

  /**
   * <p>Version of OpenSearch or Elasticsearch, in the format Elasticsearch_X.Y or OpenSearch_X.Y.
   *    Defaults to the latest version of OpenSearch.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>If the package is a <code>ZIP-PLUGIN</code> package, additional information about plugin
   *    properties.</p>
   * @public
   */
  AvailablePluginProperties?: PluginProperties | undefined;

  /**
   * <p>This represents the available configuration parameters for the package.</p>
   * @public
   */
  AvailablePackageConfiguration?: PackageConfiguration | undefined;

  /**
   * <p> A list of users who are allowed to view and associate the package. This field is only
   *    visible to the owner of a package.</p>
   * @public
   */
  AllowListedUserList?: string[] | undefined;

  /**
   * <p>The owner of the package who is allowed to create and update a package and add users to the
   *    package scope.</p>
   * @public
   */
  PackageOwner?: string | undefined;

  /**
   * <p>Package Vending Options for a package.</p>
   * @public
   */
  PackageVendingOptions?: PackageVendingOptions | undefined;

  /**
   * <p>Encryption options for a package.</p>
   * @public
   */
  PackageEncryptionOptions?: PackageEncryptionOptions | undefined;
}

/**
 * <p>Container for the response returned by the <code>CreatePackage</code> operation.</p>
 * @public
 */
export interface CreatePackageResponse {
  /**
   * <p>Basic information about an OpenSearch Service package.</p>
   * @public
   */
  PackageDetails?: PackageDetails | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the domain to create the endpoint for.</p>
   * @public
   */
  DomainArn: string | undefined;

  /**
   * <p>Options to specify the subnets and security groups for the endpoint.</p>
   * @public
   */
  VpcOptions: VPCOptions | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;
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
 * <p>The connection endpoint for connecting to an Amazon OpenSearch Service domain through a
 *    proxy.</p>
 * @public
 */
export interface VpcEndpoint {
  /**
   * <p>The unique identifier of the endpoint.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>The creator of the endpoint.</p>
   * @public
   */
  VpcEndpointOwner?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain associated with the endpoint.</p>
   * @public
   */
  DomainArn?: string | undefined;

  /**
   * <p>Options to specify the subnets and security groups for an Amazon OpenSearch Service VPC
   *    endpoint.</p>
   * @public
   */
  VpcOptions?: VPCDerivedInfo | undefined;

  /**
   * <p>The current status of the endpoint.</p>
   * @public
   */
  Status?: VpcEndpointStatus | undefined;

  /**
   * <p>The connection endpoint ID for connecting to the domain.</p>
   * @public
   */
  Endpoint?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcEndpointResponse {
  /**
   * <p>Information about the newly created VPC endpoint.</p>
   * @public
   */
  VpcEndpoint: VpcEndpoint | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>The unique identifier of the OpenSearch application to delete.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * <p>Container for the parameters to the <code>DeleteDataSource</code> operation.</p>
 * @public
 */
export interface DeleteDataSourceRequest {
  /**
   * <p>The name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the data source to delete.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>The result of a <code>GetDataSource</code> operation.</p>
 * @public
 */
export interface DeleteDataSourceResponse {
  /**
   * <p>A message associated with deletion of the data source.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectQueryDataSourceRequest {
  /**
   * <p> A unique, user-defined label to identify the data source within your OpenSearch Service
   *    environment. </p>
   * @public
   */
  DataSourceName: string | undefined;
}

/**
 * <p>Container for the parameters to the <code>DeleteDomain</code> operation.</p>
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * <p>The name of the domain you want to permanently delete.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>The results of a <code>DeleteDomain</code> request. Contains the status of the pending
 *    deletion, or a "domain not found" error if the domain and all of its resources have been
 *    deleted.</p>
 * @public
 */
export interface DeleteDomainResponse {
  /**
   * <p>The status of the domain being deleted.</p>
   * @public
   */
  DomainStatus?: DomainStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code>DeleteInboundConnection</code> operation.</p>
 * @public
 */
export interface DeleteInboundConnectionRequest {
  /**
   * <p>The ID of the inbound connection to permanently delete.</p>
   * @public
   */
  ConnectionId: string | undefined;
}

/**
 * <p>The results of a <code>DeleteInboundConnection</code> operation. Contains details about the
 *    deleted inbound connection.</p>
 * @public
 */
export interface DeleteInboundConnectionResponse {
  /**
   * <p>The deleted inbound connection.</p>
   * @public
   */
  Connection?: InboundConnection | undefined;
}

/**
 * <p>Container for the parameters to the <code>DeleteOutboundConnection</code> operation.</p>
 * @public
 */
export interface DeleteOutboundConnectionRequest {
  /**
   * <p>The ID of the outbound connection you want to permanently delete.</p>
   * @public
   */
  ConnectionId: string | undefined;
}

/**
 * <p>Specifies details about an outbound cross-cluster connection.</p>
 * @public
 */
export interface OutboundConnection {
  /**
   * <p>Information about the source (local) domain.</p>
   * @public
   */
  LocalDomainInfo?: DomainInformationContainer | undefined;

  /**
   * <p>Information about the destination (remote) domain.</p>
   * @public
   */
  RemoteDomainInfo?: DomainInformationContainer | undefined;

  /**
   * <p>Unique identifier of the connection.</p>
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * <p>Name of the connection.</p>
   * @public
   */
  ConnectionAlias?: string | undefined;

  /**
   * <p>Status of the connection.</p>
   * @public
   */
  ConnectionStatus?: OutboundConnectionStatus | undefined;

  /**
   * <p>The connection mode.</p>
   * @public
   */
  ConnectionMode?: ConnectionMode | undefined;

  /**
   * <p>Properties for the outbound connection.</p>
   * @public
   */
  ConnectionProperties?: ConnectionProperties | undefined;
}

/**
 * <p>Details about the deleted outbound connection.</p>
 * @public
 */
export interface DeleteOutboundConnectionResponse {
  /**
   * <p>The deleted inbound connection.</p>
   * @public
   */
  Connection?: OutboundConnection | undefined;
}

/**
 * <p>Deletes a package from OpenSearch Service. The package can't be associated with any
 *    OpenSearch Service domain.</p>
 * @public
 */
export interface DeletePackageRequest {
  /**
   * <p>The internal ID of the package you want to delete. Use <code>DescribePackages</code> to find
   *    this value.</p>
   * @public
   */
  PackageID: string | undefined;
}

/**
 * <p>Container for the response parameters to the <code>DeletePackage</code> operation.</p>
 * @public
 */
export interface DeletePackageResponse {
  /**
   * <p> Information about the deleted package.</p>
   * @public
   */
  PackageDetails?: PackageDetails | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointRequest {
  /**
   * <p>The unique identifier of the endpoint.</p>
   * @public
   */
  VpcEndpointId: string | undefined;
}

/**
 * <p>Summary information for an Amazon OpenSearch Service-managed VPC endpoint.</p>
 * @public
 */
export interface VpcEndpointSummary {
  /**
   * <p>The unique identifier of the endpoint.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>The creator of the endpoint.</p>
   * @public
   */
  VpcEndpointOwner?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain associated with the endpoint.</p>
   * @public
   */
  DomainArn?: string | undefined;

  /**
   * <p>The current status of the endpoint.</p>
   * @public
   */
  Status?: VpcEndpointStatus | undefined;
}

/**
 * @public
 */
export interface DeleteVpcEndpointResponse {
  /**
   * <p>Information about the deleted endpoint, including its current status (<code>DELETING</code>
   *    or <code>DELETE_FAILED</code>).</p>
   * @public
   */
  VpcEndpointSummary: VpcEndpointSummary | undefined;
}

/**
 * <p>Container for the parameters to the <code>DescribeDomain</code> operation.</p>
 * @public
 */
export interface DescribeDomainRequest {
  /**
   * <p>The name of the domain that you want information about.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>Contains the status of the domain specified in the request.</p>
 * @public
 */
export interface DescribeDomainResponse {
  /**
   * <p>List that contains the status of each specified OpenSearch Service domain.</p>
   * @public
   */
  DomainStatus: DomainStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code>DescribeDomainAutoTunes</code> operation.</p>
 * @public
 */
export interface DescribeDomainAutoTunesRequest {
  /**
   * <p>Name of the domain that you want Auto-Tune details about.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If your initial <code>DescribeDomainAutoTunes</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribeDomainAutoTunes</code> operations, which returns results in the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
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
 * <p>Specifies details about a scheduled Auto-Tune action. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for
 *     Amazon OpenSearch Service</a>.</p>
 * @public
 */
export interface ScheduledAutoTuneDetails {
  /**
   * <p>The date and time when the Auto-Tune action is scheduled for the domain.</p>
   * @public
   */
  Date?: Date | undefined;

  /**
   * <p>The type of Auto-Tune action.</p>
   * @public
   */
  ActionType?: ScheduledAutoTuneActionType | undefined;

  /**
   * <p>A description of the Auto-Tune action.</p>
   * @public
   */
  Action?: string | undefined;

  /**
   * <p>The severity of the Auto-Tune action. Valid values are <code>LOW</code>,
   *    <code>MEDIUM</code>, and <code>HIGH</code>.</p>
   * @public
   */
  Severity?: ScheduledAutoTuneSeverityType | undefined;
}

/**
 * <p>Specifies details about a scheduled Auto-Tune action. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for
 *     Amazon OpenSearch Service</a>.</p>
 * @public
 */
export interface AutoTuneDetails {
  /**
   * <p>Container for details about a scheduled Auto-Tune action.</p>
   * @public
   */
  ScheduledAutoTuneDetails?: ScheduledAutoTuneDetails | undefined;
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
 * <p>Information about an Auto-Tune action. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for Amazon OpenSearch
 *     Service</a>.</p>
 * @public
 */
export interface AutoTune {
  /**
   * <p>The type of Auto-Tune action.</p>
   * @public
   */
  AutoTuneType?: AutoTuneType | undefined;

  /**
   * <p>Details about an Auto-Tune action.</p>
   * @public
   */
  AutoTuneDetails?: AutoTuneDetails | undefined;
}

/**
 * <p>The result of a <code>DescribeDomainAutoTunes</code> request.</p>
 * @public
 */
export interface DescribeDomainAutoTunesResponse {
  /**
   * <p>The list of setting adjustments that Auto-Tune has made to the domain.</p>
   * @public
   */
  AutoTunes?: AutoTune[] | undefined;

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Send the request again using
   *    the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Container for the parameters to the <code>DescribeDomainChangeProgress</code>
 *    operation.</p>
 * @public
 */
export interface DescribeDomainChangeProgressRequest {
  /**
   * <p>The name of the domain to get progress information for.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The specific change ID for which you want to get progress information. If omitted, the
   *    request returns information about the most recent configuration change.</p>
   * @public
   */
  ChangeId?: string | undefined;
}

/**
 * <p>Progress details for each stage of a domain update.</p>
 * @public
 */
export interface ChangeProgressStage {
  /**
   * <p>The name of the stage.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of the stage.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The description of the stage.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The most recent updated timestamp of the stage.</p>
   * @public
   */
  LastUpdated?: Date | undefined;
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
 * <p>The progress details of a specific domain configuration change.</p>
 * @public
 */
export interface ChangeProgressStatusDetails {
  /**
   * <p>The unique change identifier associated with a specific domain configuration change.</p>
   * @public
   */
  ChangeId?: string | undefined;

  /**
   * <p>The time at which the configuration change is made on the domain.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The overall status of the domain configuration change.</p>
   * @public
   */
  Status?: OverallChangeStatus | undefined;

  /**
   * <p>The list of properties in the domain configuration change that are still pending.</p>
   * @public
   */
  PendingProperties?: string[] | undefined;

  /**
   * <p>The list of properties in the domain configuration change that have completed.</p>
   * @public
   */
  CompletedProperties?: string[] | undefined;

  /**
   * <p>The total number of stages required for the configuration change.</p>
   * @public
   */
  TotalNumberOfStages?: number | undefined;

  /**
   * <p>The specific stages that the domain is going through to perform the configuration
   *    change.</p>
   * @public
   */
  ChangeProgressStages?: ChangeProgressStage[] | undefined;

  /**
   * <p>The last time that the status of the configuration change was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The current status of the configuration change.</p>
   * @public
   */
  ConfigChangeStatus?: ConfigChangeStatus | undefined;

  /**
   * <p>The IAM principal who initiated the configuration change.</p>
   * @public
   */
  InitiatedBy?: InitiatedBy | undefined;
}

/**
 * <p>The result of a <code>DescribeDomainChangeProgress</code> request. Contains progress
 *    information for the requested domain change.</p>
 * @public
 */
export interface DescribeDomainChangeProgressResponse {
  /**
   * <p>Container for information about the stages of a configuration change happening on a
   *    domain.</p>
   * @public
   */
  ChangeProgressStatus?: ChangeProgressStatusDetails | undefined;
}

/**
 * <p>Container for the parameters to the <code>DescribeDomainConfig</code> operation.</p>
 * @public
 */
export interface DescribeDomainConfigRequest {
  /**
   * <p>Name of the OpenSearch Service domain configuration that you want to describe.</p>
   * @public
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
 * <p>Auto-Tune settings when updating a domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for
 *     Amazon OpenSearch Service</a>.</p>
 * @public
 */
export interface AutoTuneOptions {
  /**
   * <p>Whether Auto-Tune is enabled or disabled.</p>
   * @public
   */
  DesiredState?: AutoTuneDesiredState | undefined;

  /**
   * <p>When disabling Auto-Tune, specify <code>NO_ROLLBACK</code> to retain all prior Auto-Tune
   *    settings or <code>DEFAULT_ROLLBACK</code> to revert to the OpenSearch Service defaults. If you
   *    specify <code>DEFAULT_ROLLBACK</code>, you must include a <code>MaintenanceSchedule</code> in the
   *    request. Otherwise, OpenSearch Service is unable to perform the rollback.</p>
   * @public
   */
  RollbackOnDisable?: RollbackOnDisable | undefined;

  /**
   * <p>DEPRECATED. Use <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html">off-peak window</a>
   *    instead.</p>
   *          <p>A list of maintenance schedules during which Auto-Tune can deploy changes.</p>
   * @public
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[] | undefined;

  /**
   * <p>Whether to use the domain's <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html">off-peak window</a> to
   *    deploy configuration changes on the domain rather than a maintenance schedule.</p>
   * @public
   */
  UseOffPeakWindow?: boolean | undefined;
}

/**
 * <p>The current status of Auto-Tune for the domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html">Auto-Tune for
 *     Amazon OpenSearch Service</a>.</p>
 * @public
 */
export interface AutoTuneStatus {
  /**
   * <p>Date and time when Auto-Tune was enabled for the domain.</p>
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * <p>Date and time when the Auto-Tune options were last updated for the domain.</p>
   * @public
   */
  UpdateDate: Date | undefined;

  /**
   * <p>The latest version of the Auto-Tune options.</p>
   * @public
   */
  UpdateVersion?: number | undefined;

  /**
   * <p>The current state of Auto-Tune on the domain.</p>
   * @public
   */
  State: AutoTuneState | undefined;

  /**
   * <p>Any errors that occurred while enabling or disabling Auto-Tune.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>Indicates whether the domain is being deleted.</p>
   * @public
   */
  PendingDeletion?: boolean | undefined;
}

/**
 * <p>The Auto-Tune status for the domain.</p>
 * @public
 */
export interface AutoTuneOptionsStatus {
  /**
   * <p>Auto-Tune settings for updating a domain.</p>
   * @public
   */
  Options?: AutoTuneOptions | undefined;

  /**
   * <p>The current status of Auto-Tune for a domain.</p>
   * @public
   */
  Status?: AutoTuneStatus | undefined;
}

/**
 * <p>The cluster configuration status for a domain.</p>
 * @public
 */
export interface ClusterConfigStatus {
  /**
   * <p>Cluster configuration options for the specified domain.</p>
   * @public
   */
  Options: ClusterConfig | undefined;

  /**
   * <p>The status of cluster configuration options for the specified domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The status of the Cognito options for the specified domain.</p>
 * @public
 */
export interface CognitoOptionsStatus {
  /**
   * <p>Cognito options for the specified domain.</p>
   * @public
   */
  Options: CognitoOptions | undefined;

  /**
   * <p>The status of the Cognito options for the specified domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The configured endpoint options for a domain and their current status.</p>
 * @public
 */
export interface DomainEndpointOptionsStatus {
  /**
   * <p>Options to configure the endpoint for a domain.</p>
   * @public
   */
  Options: DomainEndpointOptions | undefined;

  /**
   * <p>The status of the endpoint options for a domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The status of the EBS options for the specified OpenSearch Service domain.</p>
 * @public
 */
export interface EBSOptionsStatus {
  /**
   * <p>The configured EBS options for the specified domain.</p>
   * @public
   */
  Options: EBSOptions | undefined;

  /**
   * <p>The status of the EBS options for the specified domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>Status of the encryption at rest options for the specified OpenSearch Service domain.</p>
 * @public
 */
export interface EncryptionAtRestOptionsStatus {
  /**
   * <p>Encryption at rest options for the specified domain.</p>
   * @public
   */
  Options: EncryptionAtRestOptions | undefined;

  /**
   * <p>The status of the encryption at rest options for the specified domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The status of the the OpenSearch or Elasticsearch version options for the specified Amazon
 *    OpenSearch Service domain.</p>
 * @public
 */
export interface VersionStatus {
  /**
   * <p>The OpenSearch or Elasticsearch version for the specified domain.</p>
   * @public
   */
  Options: string | undefined;

  /**
   * <p>The status of the version options for the specified domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The status of IAM Identity Center configuration settings for a domain.</p>
 * @public
 */
export interface IdentityCenterOptionsStatus {
  /**
   * <p>Configuration settings for IAM Identity Center integration.</p>
   * @public
   */
  Options: IdentityCenterOptions | undefined;

  /**
   * <p>The status of IAM Identity Center configuration settings for a domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The IP address type status for the domain.</p>
 * @public
 */
export interface IPAddressTypeStatus {
  /**
   * <p>The IP address options for the domain.</p>
   * @public
   */
  Options: IPAddressType | undefined;

  /**
   * <p>Provides the current status of an entity.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The configured log publishing options for the domain and their current status.</p>
 * @public
 */
export interface LogPublishingOptionsStatus {
  /**
   * <p>The log publishing options configured for the domain.</p>
   * @public
   */
  Options?: Partial<Record<LogType, LogPublishingOption>> | undefined;

  /**
   * <p>The status of the log publishing options for the domain.</p>
   * @public
   */
  Status?: OptionStatus | undefined;
}

/**
 * <p>Status of the node-to-node encryption options for the specified domain.</p>
 * @public
 */
export interface NodeToNodeEncryptionOptionsStatus {
  /**
   * <p>The node-to-node encryption options for the specified domain.</p>
   * @public
   */
  Options: NodeToNodeEncryptionOptions | undefined;

  /**
   * <p>The status of the node-to-node encryption options for the specified domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The status of <a href="https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html">off-peak window</a>
 *    options for a domain.</p>
 * @public
 */
export interface OffPeakWindowOptionsStatus {
  /**
   * <p>The domain's off-peak window configuration.</p>
   * @public
   */
  Options?: OffPeakWindowOptions | undefined;

  /**
   * <p>The current status of off-peak window options.</p>
   * @public
   */
  Status?: OptionStatus | undefined;
}

/**
 * <p>Container for information about a daily automated snapshot for an OpenSearch Service
 *    domain.</p>
 * @public
 */
export interface SnapshotOptionsStatus {
  /**
   * <p>The daily snapshot options specified for the domain.</p>
   * @public
   */
  Options: SnapshotOptions | undefined;

  /**
   * <p>The status of a daily automated snapshot.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The status of the service software options for a domain.</p>
 * @public
 */
export interface SoftwareUpdateOptionsStatus {
  /**
   * <p>The service software update options for a domain.</p>
   * @public
   */
  Options?: SoftwareUpdateOptions | undefined;

  /**
   * <p>The status of service software update options, including creation date and last updated
   *    date.</p>
   * @public
   */
  Status?: OptionStatus | undefined;
}

/**
 * <p>Status of the VPC options for a specified domain.</p>
 * @public
 */
export interface VPCDerivedInfoStatus {
  /**
   * <p>The VPC options for the specified domain.</p>
   * @public
   */
  Options: VPCDerivedInfo | undefined;

  /**
   * <p>The status of the VPC options for the specified domain.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>Container for the configuration of an OpenSearch Service domain.</p>
 * @public
 */
export interface DomainConfig {
  /**
   * <p>The OpenSearch or Elasticsearch version that the domain is running.</p>
   * @public
   */
  EngineVersion?: VersionStatus | undefined;

  /**
   * <p>Container for the cluster configuration of a the domain.</p>
   * @public
   */
  ClusterConfig?: ClusterConfigStatus | undefined;

  /**
   * <p>Container for EBS options configured for the domain.</p>
   * @public
   */
  EBSOptions?: EBSOptionsStatus | undefined;

  /**
   * <p>Specifies the access policies for the domain.</p>
   * @public
   */
  AccessPolicies?: AccessPoliciesStatus | undefined;

  /**
   * <p>Choose either dual stack or IPv4 as your IP address type. Dual stack allows you to share
   *    domain resources across IPv4 and IPv6 address types, and is the recommended option. If you set
   *    your IP address type to dual stack, you can't change your address type later.</p>
   * @public
   */
  IPAddressType?: IPAddressTypeStatus | undefined;

  /**
   * <p>DEPRECATED. Container for parameters required to configure automated snapshots of domain
   *    indexes.</p>
   * @public
   */
  SnapshotOptions?: SnapshotOptionsStatus | undefined;

  /**
   * <p>The current VPC options for the domain and the status of any updates to their
   *    configuration.</p>
   * @public
   */
  VPCOptions?: VPCDerivedInfoStatus | undefined;

  /**
   * <p>Container for Amazon Cognito options for the domain.</p>
   * @public
   */
  CognitoOptions?: CognitoOptionsStatus | undefined;

  /**
   * <p>Key-value pairs to enable encryption at rest.</p>
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus | undefined;

  /**
   * <p>Whether node-to-node encryption is enabled or disabled.</p>
   * @public
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus | undefined;

  /**
   * <p>Key-value pairs to specify advanced configuration options. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">Advanced options</a>.</p>
   * @public
   */
  AdvancedOptions?: AdvancedOptionsStatus | undefined;

  /**
   * <p>Key-value pairs to configure log publishing.</p>
   * @public
   */
  LogPublishingOptions?: LogPublishingOptionsStatus | undefined;

  /**
   * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
   *    traffic.</p>
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus | undefined;

  /**
   * <p>Container for fine-grained access control settings for the domain.</p>
   * @public
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsStatus | undefined;

  /**
   * <p>Configuration options for enabling and managing IAM Identity Center integration within a
   *    domain.</p>
   * @public
   */
  IdentityCenterOptions?: IdentityCenterOptionsStatus | undefined;

  /**
   * <p>Container for Auto-Tune settings for the domain.</p>
   * @public
   */
  AutoTuneOptions?: AutoTuneOptionsStatus | undefined;

  /**
   * <p>Container for information about the progress of an existing configuration change.</p>
   * @public
   */
  ChangeProgressDetails?: ChangeProgressDetails | undefined;

  /**
   * <p>Container for off-peak window options for the domain.</p>
   * @public
   */
  OffPeakWindowOptions?: OffPeakWindowOptionsStatus | undefined;

  /**
   * <p>Software update options for the domain.</p>
   * @public
   */
  SoftwareUpdateOptions?: SoftwareUpdateOptionsStatus | undefined;

  /**
   * <p>Information about the domain properties that are currently being modified.</p>
   * @public
   */
  ModifyingProperties?: ModifyingProperties[] | undefined;

  /**
   * <p>Container for parameters required to enable all machine learning features.</p>
   * @public
   */
  AIMLOptions?: AIMLOptionsStatus | undefined;
}

/**
 * <p>Contains the configuration information of the requested domain.</p>
 * @public
 */
export interface DescribeDomainConfigResponse {
  /**
   * <p>Container for the configuration of the OpenSearch Service domain.</p>
   * @public
   */
  DomainConfig: DomainConfig | undefined;
}

/**
 * <p>Container for the parameters to the <code>DescribeDomainHealth</code> operation.</p>
 * @public
 */
export interface DescribeDomainHealthRequest {
  /**
   * <p>The name of the domain.</p>
   * @public
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
 * <p>Information about an Availability Zone on a domain.</p>
 * @public
 */
export interface AvailabilityZoneInfo {
  /**
   * <p>The name of the Availability Zone.</p>
   * @public
   */
  AvailabilityZoneName?: string | undefined;

  /**
   * <p>The current state of the Availability Zone. Current options are <code>Active</code> and
   *     <code>StandBy</code>.</p>
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
   * @public
   */
  ZoneStatus?: ZoneStatus | undefined;

  /**
   * <p>The total number of data nodes configured in the Availability Zone.</p>
   * @public
   */
  ConfiguredDataNodeCount?: string | undefined;

  /**
   * <p>The number of data nodes active in the Availability Zone.</p>
   * @public
   */
  AvailableDataNodeCount?: string | undefined;

  /**
   * <p>The total number of primary and replica shards in the Availability Zone.</p>
   * @public
   */
  TotalShards?: string | undefined;

  /**
   * <p>The total number of primary and replica shards that aren't allocated to any of the nodes in
   *    the Availability Zone.</p>
   * @public
   */
  TotalUnAssignedShards?: string | undefined;
}

/**
 * <p>Information about the active domain environment.</p>
 * @public
 */
export interface EnvironmentInfo {
  /**
   * <p> A list of <code>AvailabilityZoneInfo</code> for the domain.</p>
   * @public
   */
  AvailabilityZoneInformation?: AvailabilityZoneInfo[] | undefined;
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
 * <p>The result of a <code>DescribeDomainHealth</code> request. Contains health information for
 *    the requested domain.</p>
 * @public
 */
export interface DescribeDomainHealthResponse {
  /**
   * <p>The current state of the domain.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Processing</code> - The domain has updates in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Active</code> - Requested changes have been processed and deployed to the
   *      domain.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DomainState?: DomainState | undefined;

  /**
   * <p>The number of Availability Zones configured for the domain. If the service is unable to
   *    fetch this information, it will return <code>NotAvailable</code>.</p>
   * @public
   */
  AvailabilityZoneCount?: string | undefined;

  /**
   * <p>The number of active Availability Zones configured for the domain. If the service is unable
   *    to fetch this information, it will return <code>NotAvailable</code>.</p>
   * @public
   */
  ActiveAvailabilityZoneCount?: string | undefined;

  /**
   * <p>The number of standby Availability Zones configured for the domain. If the service is unable
   *    to fetch this information, it will return <code>NotAvailable</code>.</p>
   * @public
   */
  StandByAvailabilityZoneCount?: string | undefined;

  /**
   * <p>The number of data nodes configured for the domain. If the service is unable to fetch this
   *    information, it will return <code>NotAvailable</code>.</p>
   * @public
   */
  DataNodeCount?: string | undefined;

  /**
   * <p>A boolean that indicates if dedicated master nodes are activated for the domain.</p>
   * @public
   */
  DedicatedMaster?: boolean | undefined;

  /**
   * <p>The number of nodes that can be elected as a master node. If dedicated master nodes is
   *    turned on, this value is the number of dedicated master nodes configured for the domain. If the
   *    service is unable to fetch this information, it will return <code>NotAvailable</code>.</p>
   * @public
   */
  MasterEligibleNodeCount?: string | undefined;

  /**
   * <p>The number of warm nodes configured for the domain.</p>
   * @public
   */
  WarmNodeCount?: string | undefined;

  /**
   * <p>Indicates whether the domain has an elected master node.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Available</b> - The domain has an elected master node.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UnAvailable</b> - The master node hasn't yet been elected,
   *      and a quorum to elect a new master node hasn't been reached.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterNode?: MasterNodeStatus | undefined;

  /**
   * <p>The current health status of your cluster.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Red</code> - At least one primary shard is not allocated to any node.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Yellow</code> - All primary shards are allocated to nodes, but some replicas
   *      aren’t.</p>
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
   * @public
   */
  ClusterHealth?: DomainHealth | undefined;

  /**
   * <p>The total number of primary and replica shards for the domain.</p>
   * @public
   */
  TotalShards?: string | undefined;

  /**
   * <p>The total number of primary and replica shards not allocated to any of the nodes for the
   *    cluster.</p>
   * @public
   */
  TotalUnAssignedShards?: string | undefined;

  /**
   * <p>A list of <code>EnvironmentInfo</code> for the domain. </p>
   * @public
   */
  EnvironmentInformation?: EnvironmentInfo[] | undefined;
}

/**
 * <p>Container for the parameters to the <code>DescribeDomainNodes</code> operation.</p>
 * @public
 */
export interface DescribeDomainNodesRequest {
  /**
   * <p>The name of the domain.</p>
   * @public
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
 * <p>Container for information about nodes on the domain.</p>
 * @public
 */
export interface DomainNodesStatus {
  /**
   * <p>The ID of the node.</p>
   * @public
   */
  NodeId?: string | undefined;

  /**
   * <p>Indicates whether the nodes is a data, master, or UltraWarm node.</p>
   * @public
   */
  NodeType?: NodeType | undefined;

  /**
   * <p>The Availability Zone of the node.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The instance type information of the node.</p>
   * @public
   */
  InstanceType?: OpenSearchPartitionInstanceType | undefined;

  /**
   * <p>Indicates if the node is active or in standby.</p>
   * @public
   */
  NodeStatus?: NodeStatus | undefined;

  /**
   * <p>Indicates if the node has EBS or instance storage. </p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>If the nodes has EBS storage, indicates if the volume type is gp2 or gp3. Only applicable
   *    for data nodes. </p>
   * @public
   */
  StorageVolumeType?: VolumeType | undefined;

  /**
   * <p>The storage size of the node, in GiB.</p>
   * @public
   */
  StorageSize?: string | undefined;
}

/**
 * <p>The result of a <code>DescribeDomainNodes</code> request. Contains information about the
 *    nodes on the requested domain. </p>
 * @public
 */
export interface DescribeDomainNodesResponse {
  /**
   * <p>Contains nodes information list <code>DomainNodesStatusList</code> with details about the
   *    all nodes on the requested domain.</p>
   * @public
   */
  DomainNodesStatusList?: DomainNodesStatus[] | undefined;
}

/**
 * <p>Container for the parameters to the <code>DescribeDomains</code> operation.</p>
 * @public
 */
export interface DescribeDomainsRequest {
  /**
   * <p>Array of OpenSearch Service domain names that you want information about. You must specify
   *    at least one domain name.</p>
   * @public
   */
  DomainNames: string[] | undefined;
}

/**
 * <p>Contains the status of the specified domains or all domains owned by the account.</p>
 * @public
 */
export interface DescribeDomainsResponse {
  /**
   * <p>The status of the requested domains.</p>
   * @public
   */
  DomainStatusList: DomainStatus[] | undefined;
}

/**
 * @public
 */
export interface DescribeDryRunProgressRequest {
  /**
   * <p>The name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique identifier of the dry run.</p>
   * @public
   */
  DryRunId?: string | undefined;

  /**
   * <p>Whether to include the configuration of the dry run in the response. The configuration
   *    specifies the updates that you're planning to make on the domain.</p>
   * @public
   */
  LoadDryRunConfig?: boolean | undefined;
}

/**
 * <p>A validation failure that occurred as the result of a pre-update validation check (verbose
 *    dry run) on a domain.</p>
 * @public
 */
export interface ValidationFailure {
  /**
   * <p>The error code of the failure.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>A message corresponding to the failure.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Information about the progress of a pre-upgrade dry run analysis.</p>
 * @public
 */
export interface DryRunProgressStatus {
  /**
   * <p>The unique identifier of the dry run.</p>
   * @public
   */
  DryRunId: string | undefined;

  /**
   * <p>The current status of the dry run.</p>
   * @public
   */
  DryRunStatus: string | undefined;

  /**
   * <p>The timestamp when the dry run was initiated.</p>
   * @public
   */
  CreationDate: string | undefined;

  /**
   * <p>The timestamp when the dry run was last updated.</p>
   * @public
   */
  UpdateDate: string | undefined;

  /**
   * <p>Any validation failures that occurred as a result of the dry run.</p>
   * @public
   */
  ValidationFailures?: ValidationFailure[] | undefined;
}

/**
 * <p>Results of a dry run performed in an update domain request.</p>
 * @public
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
   * @public
   */
  DeploymentType?: string | undefined;

  /**
   * <p>A message corresponding to the deployment type.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDryRunProgressResponse {
  /**
   * <p>The current status of the dry run, including any validation errors.</p>
   * @public
   */
  DryRunProgressStatus?: DryRunProgressStatus | undefined;

  /**
   * <p>Details about the changes you're planning to make on the domain.</p>
   * @public
   */
  DryRunConfig?: DomainStatus | undefined;

  /**
   * <p>The results of the dry run. </p>
   * @public
   */
  DryRunResults?: DryRunResults | undefined;
}

/**
 * <p>A filter used to limit results when describing inbound or outbound cross-cluster
 *    connections. You can specify multiple values per filter. A cross-cluster connection must match at
 *    least one of the specified values for it to be returned from an operation.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>One or more values for the filter.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * <p>Container for the parameters to the <code>DescribeInboundConnections</code>
 *    operation.</p>
 * @public
 */
export interface DescribeInboundConnectionsRequest {
  /**
   * <p> A list of filters used to match properties for inbound cross-cluster connections.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If your initial <code>DescribeInboundConnections</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribeInboundConnections</code> operations, which returns results in the next
   *    page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains a list of connections matching the filter criteria.</p>
 * @public
 */
export interface DescribeInboundConnectionsResponse {
  /**
   * <p>List of inbound connections.</p>
   * @public
   */
  Connections?: InboundConnection[] | undefined;

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Send the request again using
   *    the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Request processing failed because you provided an invalid pagination token.</p>
 * @public
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
 * <p>Container for the parameters to the <code>DescribeInstanceTypeLimits</code>
 *    operation.</p>
 * @public
 */
export interface DescribeInstanceTypeLimitsRequest {
  /**
   * <p>The name of the domain. Only specify if you need the limits for an existing domain.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>The OpenSearch Service instance type for which you need limit information.</p>
   * @public
   */
  InstanceType: OpenSearchPartitionInstanceType | undefined;

  /**
   * <p>Version of OpenSearch or Elasticsearch, in the format Elasticsearch_X.Y or OpenSearch_X.Y.
   *    Defaults to the latest version of OpenSearch.</p>
   * @public
   */
  EngineVersion: string | undefined;
}

/**
 * <p>Limits on the number of instances that can be created in OpenSearch Service for a given
 *    instance type.</p>
 * @public
 */
export interface InstanceCountLimits {
  /**
   * <p>The maximum allowed number of instances.</p>
   * @public
   */
  MinimumInstanceCount?: number | undefined;

  /**
   * <p>The minimum allowed number of instances.</p>
   * @public
   */
  MaximumInstanceCount?: number | undefined;
}

/**
 * <p>Instance-related attributes that are available for a given instance type.</p>
 * @public
 */
export interface InstanceLimits {
  /**
   * <p>Limits on the number of instances that can be created for a given instance type.</p>
   * @public
   */
  InstanceCountLimits?: InstanceCountLimits | undefined;
}

/**
 * <p>Limits that are applicable for the given Amazon OpenSearch Service storage type.</p>
 * @public
 */
export interface StorageTypeLimit {
  /**
   * <p> Name of storage limits that are applicable for the given storage type. If
   *     <code>StorageType</code> is <code>ebs</code>, the following options are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>MinimumVolumeSize</b> - Minimum volume size that is available
   *      for the given storage type. Can be empty if not applicable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MaximumVolumeSize</b> - Maximum volume size that is available
   *      for the given storage type. Can be empty if not applicable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MaximumIops</b> - Maximum amount of IOPS that is available
   *      for the given the storage type. Can be empty if not applicable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MinimumIops</b> - Minimum amount of IOPS that is available
   *      for the given the storage type. Can be empty if not applicable.</p>
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
   * @public
   */
  LimitName?: string | undefined;

  /**
   * <p>The limit values.</p>
   * @public
   */
  LimitValues?: string[] | undefined;
}

/**
 * <p>A list of storage types for an Amazon OpenSearch Service domain that are available for a
 *    given intance type.</p>
 * @public
 */
export interface StorageType {
  /**
   * <p>The name of the storage type.</p>
   * @public
   */
  StorageTypeName?: string | undefined;

  /**
   * <p>The storage sub-type, such as <code>gp3</code> or <code>io1</code>.</p>
   * @public
   */
  StorageSubTypeName?: string | undefined;

  /**
   * <p>Limits that are applicable for the given storage type.</p>
   * @public
   */
  StorageTypeLimits?: StorageTypeLimit[] | undefined;
}

/**
 * <p>Limits for a given instance type and for each of its roles.</p>
 * @public
 */
export interface Limits {
  /**
   * <p>Storage-related attributes that are available for a given instance type.</p>
   * @public
   */
  StorageTypes?: StorageType[] | undefined;

  /**
   * <p>The limits for a given instance type.</p>
   * @public
   */
  InstanceLimits?: InstanceLimits | undefined;

  /**
   * <p>List of additional limits that are specific to a given instance type for each of its
   *    instance roles.</p>
   * @public
   */
  AdditionalLimits?: AdditionalLimit[] | undefined;
}

/**
 * <p>Container for the parameters received from the <code>DescribeInstanceTypeLimits</code>
 *    operation.</p>
 * @public
 */
export interface DescribeInstanceTypeLimitsResponse {
  /**
   * <p>Map that contains all applicable instance type limits.<code>data</code> refers to data
   *     nodes.<code>master</code> refers to dedicated master nodes.</p>
   * @public
   */
  LimitsByRole?: Record<string, Limits> | undefined;
}

/**
 * <p>Container for the parameters to the <code>DescribeOutboundConnections</code>
 *    operation.</p>
 * @public
 */
export interface DescribeOutboundConnectionsRequest {
  /**
   * <p>List of filter names and values that you can use for requests.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If your initial <code>DescribeOutboundConnections</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribeOutboundConnections</code> operations, which returns results in the next
   *    page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains a list of connections matching the filter criteria.</p>
 * @public
 */
export interface DescribeOutboundConnectionsResponse {
  /**
   * <p>List of outbound connections that match the filter criteria.</p>
   * @public
   */
  Connections?: OutboundConnection[] | undefined;

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Send the request again using
   *    the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DescribePackagesFilterName = {
  EngineVersion: "EngineVersion",
  PackageID: "PackageID",
  PackageName: "PackageName",
  PackageOwner: "PackageOwner",
  PackageStatus: "PackageStatus",
  PackageType: "PackageType",
} as const;

/**
 * @public
 */
export type DescribePackagesFilterName = (typeof DescribePackagesFilterName)[keyof typeof DescribePackagesFilterName];

/**
 * <p>A filter to apply to the <code>DescribePackage</code> response.</p>
 * @public
 */
export interface DescribePackagesFilter {
  /**
   * <p>Any field from <code>PackageDetails</code>.</p>
   * @public
   */
  Name?: DescribePackagesFilterName | undefined;

  /**
   * <p>A non-empty list of values for the specified filter field.</p>
   * @public
   */
  Value?: string[] | undefined;
}

/**
 * <p>Container for the request parameters to the <code>DescribePackage</code> operation.</p>
 * @public
 */
export interface DescribePackagesRequest {
  /**
   * <p>Only returns packages that match the <code>DescribePackagesFilterList</code> values.</p>
   * @public
   */
  Filters?: DescribePackagesFilter[] | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If your initial <code>DescribePackageFilters</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribePackageFilters</code> operations, which returns results in the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Container for the response returned by the <code>DescribePackages</code> operation.</p>
 * @public
 */
export interface DescribePackagesResponse {
  /**
   * <p>Basic information about a package.</p>
   * @public
   */
  PackageDetailsList?: PackageDetails[] | undefined;

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Send the request again using
   *    the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Container for the request parameters to a <code>DescribeReservedInstanceOfferings</code>
 *    operation.</p>
 * @public
 */
export interface DescribeReservedInstanceOfferingsRequest {
  /**
   * <p>The Reserved Instance identifier filter value. Use this parameter to show only the available
   *    instance types that match the specified reservation identifier.</p>
   * @public
   */
  ReservedInstanceOfferingId?: string | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If your initial <code>DescribeReservedInstanceOfferings</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribeReservedInstanceOfferings</code> operations, which returns results in the next
   *    page.</p>
   * @public
   */
  NextToken?: string | undefined;
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
 * <p>Contains the specific price and frequency of a recurring charges for an OpenSearch Reserved
 *    Instance, or for a Reserved Instance offering.</p>
 * @public
 */
export interface RecurringCharge {
  /**
   * <p>The monetary amount of the recurring charge.</p>
   * @public
   */
  RecurringChargeAmount?: number | undefined;

  /**
   * <p>The frequency of the recurring charge.</p>
   * @public
   */
  RecurringChargeFrequency?: string | undefined;
}

/**
 * <p>Details of an OpenSearch Reserved Instance offering.</p>
 * @public
 */
export interface ReservedInstanceOffering {
  /**
   * <p>The unique identifier of the Reserved Instance offering.</p>
   * @public
   */
  ReservedInstanceOfferingId?: string | undefined;

  /**
   * <p>The OpenSearch instance type offered by the Reserved Instance offering.</p>
   * @public
   */
  InstanceType?: OpenSearchPartitionInstanceType | undefined;

  /**
   * <p>The duration, in seconds, for which the offering will reserve the OpenSearch
   *    instance.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The upfront fixed charge you will pay to purchase the specific Reserved Instance
   *    offering.</p>
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * <p>The hourly rate at which you're charged for the domain using this Reserved Instance.</p>
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * <p>The currency code for the Reserved Instance offering.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>Payment option for the Reserved Instance offering</p>
   * @public
   */
  PaymentOption?: ReservedInstancePaymentOption | undefined;

  /**
   * <p>The recurring charge to your account, regardless of whether you creates any domains using
   *    the offering.</p>
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;
}

/**
 * <p>Container for results of a <code>DescribeReservedInstanceOfferings</code> request.</p>
 * @public
 */
export interface DescribeReservedInstanceOfferingsResponse {
  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Send the request again using
   *    the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>List of Reserved Instance offerings.</p>
   * @public
   */
  ReservedInstanceOfferings?: ReservedInstanceOffering[] | undefined;
}

/**
 * <p>Container for the request parameters to the <code>DescribeReservedInstances</code>
 *    operation.</p>
 * @public
 */
export interface DescribeReservedInstancesRequest {
  /**
   * <p>The reserved instance identifier filter value. Use this parameter to show only the
   *    reservation that matches the specified reserved OpenSearch instance ID.</p>
   * @public
   */
  ReservedInstanceId?: string | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If your initial <code>DescribeReservedInstances</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>DescribeReservedInstances</code> operations, which returns results in the next
   *    page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Details of an OpenSearch Reserved Instance.</p>
 * @public
 */
export interface ReservedInstance {
  /**
   * <p>The customer-specified identifier to track this reservation.</p>
   * @public
   */
  ReservationName?: string | undefined;

  /**
   * <p>The unique identifier for the reservation.</p>
   * @public
   */
  ReservedInstanceId?: string | undefined;

  /**
   * <p>The unique identifier of the billing subscription.</p>
   * @public
   */
  BillingSubscriptionId?: number | undefined;

  /**
   * <p>The unique identifier of the Reserved Instance offering.</p>
   * @public
   */
  ReservedInstanceOfferingId?: string | undefined;

  /**
   * <p>The OpenSearch instance type offered by theReserved Instance offering.</p>
   * @public
   */
  InstanceType?: OpenSearchPartitionInstanceType | undefined;

  /**
   * <p>The date and time when the reservation was purchased.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The duration, in seconds, for which the OpenSearch instance is reserved.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The upfront fixed charge you will paid to purchase the specific Reserved Instance
   *    offering.</p>
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * <p>The hourly rate at which you're charged for the domain using this Reserved Instance.</p>
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * <p>The currency code for the offering.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>The number of OpenSearch instances that have been reserved.</p>
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * <p>The state of the Reserved Instance.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The payment option as defined in the Reserved Instance offering.</p>
   * @public
   */
  PaymentOption?: ReservedInstancePaymentOption | undefined;

  /**
   * <p>The recurring charge to your account, regardless of whether you create any domains using the
   *    Reserved Instance offering.</p>
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;
}

/**
 * <p>Container for results from <code>DescribeReservedInstances</code>
 *          </p>
 * @public
 */
export interface DescribeReservedInstancesResponse {
  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Send the request again using
   *    the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>List of Reserved Instances in the current Region.</p>
   * @public
   */
  ReservedInstances?: ReservedInstance[] | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointsRequest {
  /**
   * <p>The unique identifiers of the endpoints to get information about.</p>
   * @public
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
 * <p>Error information when attempting to describe an Amazon OpenSearch Service-managed VPC
 *    endpoint.</p>
 * @public
 */
export interface VpcEndpointError {
  /**
   * <p>The unique identifier of the endpoint.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * <p>The code associated with the error.</p>
   * @public
   */
  ErrorCode?: VpcEndpointErrorCode | undefined;

  /**
   * <p>A message describing the error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcEndpointsResponse {
  /**
   * <p>Information about each requested VPC endpoint.</p>
   * @public
   */
  VpcEndpoints: VpcEndpoint[] | undefined;

  /**
   * <p>Any errors associated with the request.</p>
   * @public
   */
  VpcEndpointErrors: VpcEndpointError[] | undefined;
}

/**
 * <p>Container for the request parameters to the <code>DissociatePackage</code> operation.</p>
 * @public
 */
export interface DissociatePackageRequest {
  /**
   * <p>Internal ID of the package to dissociate from the domain. Use
   *     <code>ListPackagesForDomain</code> to find this value.</p>
   * @public
   */
  PackageID: string | undefined;

  /**
   * <p>Name of the domain to dissociate the package from.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>Container for the response returned by an <code>DissociatePackage</code> operation.</p>
 * @public
 */
export interface DissociatePackageResponse {
  /**
   * <p> Information about a package that has been dissociated from the domain.</p>
   * @public
   */
  DomainPackageDetails?: DomainPackageDetails | undefined;
}

/**
 * @public
 */
export interface DissociatePackagesRequest {
  /**
   * <p>A list of package IDs to be dissociated from a domain.</p>
   * @public
   */
  PackageList: string[] | undefined;

  /**
   * <p>The name of an OpenSearch Service domain. Domain names are unique across the domains owned
   *    by an account within an Amazon Web Services Region.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DissociatePackagesResponse {
  /**
   * <p>A list of package details for the packages that were dissociated from the domain.</p>
   * @public
   */
  DomainPackageDetailsList?: DomainPackageDetails[] | undefined;
}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * <p>The unique identifier of the OpenSearch application to retrieve.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ApplicationStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * <p>The unique identifier of the OpenSearch application.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain. See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html">Identifiers for IAM Entities </a> in <i>Using
   *      Amazon Web Services Identity and Access Management</i> for more information. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the OpenSearch application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The endpoint URL of the OpenSearch application.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>The current status of the OpenSearch application. Possible values: <code>CREATING</code>,
   *     <code>UPDATING</code>, <code>DELETING</code>, <code>FAILED</code>, <code>ACTIVE</code>, and
   *     <code>DELETED</code>.</p>
   * @public
   */
  status?: ApplicationStatus | undefined;

  /**
   * <p>The IAM Identity Center settings configured for the OpenSearch application.</p>
   * @public
   */
  iamIdentityCenterOptions?: IamIdentityCenterOptions | undefined;

  /**
   * <p>The data sources associated with the OpenSearch application.</p>
   * @public
   */
  dataSources?: DataSource[] | undefined;

  /**
   * <p>The configuration settings of the OpenSearch application.</p>
   * @public
   */
  appConfigs?: AppConfig[] | undefined;

  /**
   * <p>The timestamp when the OpenSearch application was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of the last update to the OpenSearch application.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * <p>Container for the request parameters to <code>GetCompatibleVersions</code> operation.</p>
 * @public
 */
export interface GetCompatibleVersionsRequest {
  /**
   * <p>The name of an existing domain. Provide this parameter to limit the results to a single
   *    domain.</p>
   * @public
   */
  DomainName?: string | undefined;
}

/**
 * <p>A map of OpenSearch or Elasticsearch versions and the versions you can upgrade them
 *    to.</p>
 * @public
 */
export interface CompatibleVersionsMap {
  /**
   * <p>The current version that the OpenSearch Service domain is running.</p>
   * @public
   */
  SourceVersion?: string | undefined;

  /**
   * <p>The possible versions that you can upgrade the domain to.</p>
   * @public
   */
  TargetVersions?: string[] | undefined;
}

/**
 * <p>Container for the response returned by the <code>GetCompatibleVersions</code>
 *    operation.</p>
 * @public
 */
export interface GetCompatibleVersionsResponse {
  /**
   * <p>A map of OpenSearch or Elasticsearch versions and the versions you can upgrade them
   *    to.</p>
   * @public
   */
  CompatibleVersions?: CompatibleVersionsMap[] | undefined;
}

/**
 * <p>Container for the parameters to the <code>GetDataSource</code> operation.</p>
 * @public
 */
export interface GetDataSourceRequest {
  /**
   * <p>The name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the data source to get information about.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSourceStatus = {
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
} as const;

/**
 * @public
 */
export type DataSourceStatus = (typeof DataSourceStatus)[keyof typeof DataSourceStatus];

/**
 * <p>The result of a <code>GetDataSource</code> operation.</p>
 * @public
 */
export interface GetDataSourceResponse {
  /**
   * <p>The type of data source.</p>
   * @public
   */
  DataSourceType?: DataSourceType | undefined;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the data source.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the data source.</p>
   * @public
   */
  Status?: DataSourceStatus | undefined;
}

/**
 * @public
 */
export interface GetDirectQueryDataSourceRequest {
  /**
   * <p> A unique, user-defined label that identifies the data source within your OpenSearch Service
   *    environment. </p>
   * @public
   */
  DataSourceName: string | undefined;
}

/**
 * @public
 */
export interface GetDirectQueryDataSourceResponse {
  /**
   * <p> A unique, user-defined label to identify the data source within your OpenSearch Service
   *    environment. </p>
   * @public
   */
  DataSourceName?: string | undefined;

  /**
   * <p> The supported Amazon Web Services service that is used as the source for direct queries in
   *    OpenSearch Service. </p>
   * @public
   */
  DataSourceType?: DirectQueryDataSourceType | undefined;

  /**
   * <p> A description that provides additional context and details about the data source. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> A list of Amazon Resource Names (ARNs) for the OpenSearch collections that are associated
   *    with the direct query data source. </p>
   * @public
   */
  OpenSearchArns?: string[] | undefined;

  /**
   * <p> The unique, system-generated identifier that represents the data source. </p>
   * @public
   */
  DataSourceArn?: string | undefined;
}

/**
 * <p>Container for the parameters to the <code>GetDomainMaintenanceStatus</code>
 *    operation.</p>
 * @public
 */
export interface GetDomainMaintenanceStatusRequest {
  /**
   * <p>The name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The request ID of the maintenance action.</p>
   * @public
   */
  MaintenanceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MaintenanceType = {
  REBOOT_NODE: "REBOOT_NODE",
  RESTART_DASHBOARD: "RESTART_DASHBOARD",
  RESTART_SEARCH_PROCESS: "RESTART_SEARCH_PROCESS",
} as const;

/**
 * @public
 */
export type MaintenanceType = (typeof MaintenanceType)[keyof typeof MaintenanceType];

/**
 * @public
 * @enum
 */
export const MaintenanceStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type MaintenanceStatus = (typeof MaintenanceStatus)[keyof typeof MaintenanceStatus];

/**
 * <p>The result of a <code>GetDomainMaintenanceStatus</code> request that information about the
 *    requested action.</p>
 * @public
 */
export interface GetDomainMaintenanceStatusResponse {
  /**
   * <p>The status of the maintenance action.</p>
   * @public
   */
  Status?: MaintenanceStatus | undefined;

  /**
   * <p>The status message of the maintenance action.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The node ID of the maintenance action.</p>
   * @public
   */
  NodeId?: string | undefined;

  /**
   * <p>The action name.</p>
   * @public
   */
  Action?: MaintenanceType | undefined;

  /**
   * <p>The time at which the action was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The time at which the action was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>Container for the request parameters to the <code>GetPackageVersionHistory</code>
 *    operation.</p>
 * @public
 */
export interface GetPackageVersionHistoryRequest {
  /**
   * <p>The unique identifier of the package.</p>
   * @public
   */
  PackageID: string | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If your initial <code>GetPackageVersionHistory</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>GetPackageVersionHistory</code> operations, which returns results in the next page.
   *   </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Details about a package version.</p>
 * @public
 */
export interface PackageVersionHistory {
  /**
   * <p>The package version.</p>
   * @public
   */
  PackageVersion?: string | undefined;

  /**
   * <p>A message associated with the package version when it was uploaded.</p>
   * @public
   */
  CommitMessage?: string | undefined;

  /**
   * <p>The date and time when the package was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>Additional information about plugin properties if the package is a <code>ZIP-PLUGIN</code>
   *    package.</p>
   * @public
   */
  PluginProperties?: PluginProperties | undefined;

  /**
   * <p>The configuration details for a specific version of a package.</p>
   * @public
   */
  PackageConfiguration?: PackageConfiguration | undefined;
}

/**
 * <p>Container for response returned by <code>GetPackageVersionHistory</code> operation.</p>
 * @public
 */
export interface GetPackageVersionHistoryResponse {
  /**
   * <p>The unique identifier of the package.</p>
   * @public
   */
  PackageID?: string | undefined;

  /**
   * <p>A list of package versions, along with their creation time and commit message.</p>
   * @public
   */
  PackageVersionHistoryList?: PackageVersionHistory[] | undefined;

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Send the request again using
   *    the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Container for the request parameters to the <code>GetUpgradeHistory</code> operation.</p>
 * @public
 */
export interface GetUpgradeHistoryRequest {
  /**
   * <p>The name of an existing domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If your initial <code>GetUpgradeHistory</code> operation returns a <code>nextToken</code>,
   *    you can include the returned <code>nextToken</code> in subsequent <code>GetUpgradeHistory</code>
   *    operations, which returns results in the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
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
 * <p>Represents a single step of an upgrade or upgrade eligibility check workflow.</p>
 * @public
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
   * @public
   */
  UpgradeStep?: UpgradeStep | undefined;

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
   * @public
   */
  UpgradeStepStatus?: UpgradeStatus | undefined;

  /**
   * <p>A list of strings containing detailed information about the errors encountered in a
   *    particular step.</p>
   * @public
   */
  Issues?: string[] | undefined;

  /**
   * <p>The floating point value representing the progress percentage of a particular step.</p>
   * @public
   */
  ProgressPercent?: number | undefined;
}

/**
 * <p>History of the last 10 upgrades and upgrade eligibility checks for an Amazon OpenSearch
 *    Service domain.</p>
 * @public
 */
export interface UpgradeHistory {
  /**
   * <p>A string that describes the upgrade.</p>
   * @public
   */
  UpgradeName?: string | undefined;

  /**
   * <p>UTC timestamp at which the upgrade API call was made, in the format
   *     <code>yyyy-MM-ddTHH:mm:ssZ</code>.</p>
   * @public
   */
  StartTimestamp?: Date | undefined;

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
   * @public
   */
  UpgradeStatus?: UpgradeStatus | undefined;

  /**
   * <p>A list of each step performed as part of a specific upgrade or upgrade eligibility
   *    check.</p>
   * @public
   */
  StepsList?: UpgradeStepItem[] | undefined;
}

/**
 * <p>Container for the response returned by the <code>GetUpgradeHistory</code> operation.</p>
 * @public
 */
export interface GetUpgradeHistoryResponse {
  /**
   * <p>A list of objects corresponding to each upgrade or upgrade eligibility check performed on a
   *    domain.</p>
   * @public
   */
  UpgradeHistories?: UpgradeHistory[] | undefined;

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Send the request again using
   *    the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Container for the request parameters to the <code>GetUpgradeStatus</code> operation.</p>
 * @public
 */
export interface GetUpgradeStatusRequest {
  /**
   * <p>The domain of the domain to get upgrade status information for.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>Container for the response returned by the <code>GetUpgradeStatus</code> operation.</p>
 * @public
 */
export interface GetUpgradeStatusResponse {
  /**
   * <p>One of three steps that an upgrade or upgrade eligibility check goes through.</p>
   * @public
   */
  UpgradeStep?: UpgradeStep | undefined;

  /**
   * <p>The status of the current step that an upgrade is on.</p>
   * @public
   */
  StepStatus?: UpgradeStatus | undefined;

  /**
   * <p>A string that describes the update.</p>
   * @public
   */
  UpgradeName?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Send the request again using
   *    the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filters the list of OpenSearch applications by status. Possible values:
   *     <code>CREATING</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>FAILED</code>,
   *     <code>ACTIVE</code>, and <code>DELETED</code>.</p>
   * @public
   */
  statuses?: ApplicationStatus[] | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return for a given
   *    request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Basic details of an OpenSearch application.</p>
 * @public
 */
export interface ApplicationSummary {
  /**
   * <p>The unique identifier of an OpenSearch application.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain. See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html">Identifiers for IAM Entities </a> in <i>Using
   *      Amazon Web Services Identity and Access Management</i> for more information. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of an OpenSearch application.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The endpoint URL of an OpenSearch application.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>The current status of an OpenSearch application. Possible values: <code>CREATING</code>,
   *     <code>UPDATING</code>, <code>DELETING</code>, <code>FAILED</code>, <code>ACTIVE</code>, and
   *     <code>DELETED</code>.</p>
   * @public
   */
  status?: ApplicationStatus | undefined;

  /**
   * <p>The timestamp when an OpenSearch application was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of the last update to an OpenSearch application.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>Summarizes OpenSearch applications, including ID, ARN, name, endpoint, status, creation
   *    time, and last update time.</p>
   * @public
   */
  ApplicationSummaries?: ApplicationSummary[] | undefined;

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Send the request again using
   *    the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Container for the parameters to the <code>ListDataSources</code> operation.</p>
 * @public
 */
export interface ListDataSourcesRequest {
  /**
   * <p>The name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>Details about a direct-query data source.</p>
 * @public
 */
export interface DataSourceDetails {
  /**
   * <p>The type of data source.</p>
   * @public
   */
  DataSourceType?: DataSourceType | undefined;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the data source.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the data source.</p>
   * @public
   */
  Status?: DataSourceStatus | undefined;
}

/**
 * <p>The result of a <code>ListDataSources</code> operation.</p>
 * @public
 */
export interface ListDataSourcesResponse {
  /**
   * <p>A list of data sources associated with specified domain.</p>
   * @public
   */
  DataSources?: DataSourceDetails[] | undefined;
}

/**
 * @public
 */
export interface ListDirectQueryDataSourcesRequest {
  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Send the request again using
   *    the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> The configuration details for a data source that can be directly queried. </p>
 * @public
 */
export interface DirectQueryDataSource {
  /**
   * <p> A unique, user-defined label to identify the data source within your OpenSearch Service
   *    environment. </p>
   * @public
   */
  DataSourceName?: string | undefined;

  /**
   * <p> The supported Amazon Web Services service that is used as the source for direct queries in
   *    OpenSearch Service. </p>
   * @public
   */
  DataSourceType?: DirectQueryDataSourceType | undefined;

  /**
   * <p> A description that provides additional context and details about the data source.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> A list of Amazon Resource Names (ARNs) for the OpenSearch collections that are associated
   *    with the direct query data source. </p>
   * @public
   */
  OpenSearchArns?: string[] | undefined;

  /**
   * <p> The unique, system-generated identifier that represents the data source.</p>
   * @public
   */
  DataSourceArn?: string | undefined;

  /**
   * <p> A list of tags attached to a direct query data source.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListDirectQueryDataSourcesResponse {
  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Send the request again using
   *    the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> A list of the direct query data sources that are returned by the
   *     <code>ListDirectQueryDataSources</code> API operation. </p>
   * @public
   */
  DirectQueryDataSources?: DirectQueryDataSource[] | undefined;
}

/**
 * <p>Container for the parameters to the <code>ListDomainMaintenances</code> operation.</p>
 * @public
 */
export interface ListDomainMaintenancesRequest {
  /**
   * <p>The name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the action.</p>
   * @public
   */
  Action?: MaintenanceType | undefined;

  /**
   * <p>The status of the action.</p>
   * @public
   */
  Status?: MaintenanceStatus | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If your initial <code>ListDomainMaintenances</code> operation returns a
   *     <code>nextToken</code>, include the returned <code>nextToken</code> in subsequent
   *     <code>ListDomainMaintenances</code> operations, which returns results in the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Container for the domain maintenance details.</p>
 * @public
 */
export interface DomainMaintenanceDetails {
  /**
   * <p>The ID of the requested action.</p>
   * @public
   */
  MaintenanceId?: string | undefined;

  /**
   * <p>The name of the domain.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>The name of the action.</p>
   * @public
   */
  Action?: MaintenanceType | undefined;

  /**
   * <p>The ID of the data node.</p>
   * @public
   */
  NodeId?: string | undefined;

  /**
   * <p>The status of the action.</p>
   * @public
   */
  Status?: MaintenanceStatus | undefined;

  /**
   * <p>The status message for the action.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The time at which the action was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The time at which the action was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>The result of a <code>ListDomainMaintenances</code> request that contains information about
 *    the requested actions. </p>
 * @public
 */
export interface ListDomainMaintenancesResponse {
  /**
   * <p>A list of the submitted maintenance actions.</p>
   * @public
   */
  DomainMaintenances?: DomainMaintenanceDetails[] | undefined;

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Send the request again using
   *    the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
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
 * <p>Container for the parameters to the <code>ListDomainNames</code> operation.</p>
 * @public
 */
export interface ListDomainNamesRequest {
  /**
   * <p>Filters the output by domain engine type.</p>
   * @public
   */
  EngineType?: EngineType | undefined;
}

/**
 * <p>Information about an OpenSearch Service domain.</p>
 * @public
 */
export interface DomainInfo {
  /**
   * <p>Name of the domain.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>The type of search engine that the domain is running.<code>OpenSearch</code> for an
   *    OpenSearch engine, or <code>Elasticsearch</code> for a legacy Elasticsearch OSS engine.</p>
   * @public
   */
  EngineType?: EngineType | undefined;
}

/**
 * <p>The results of a <code>ListDomainNames</code> operation. Contains the names of all domains
 *    owned by this account and their respective engine types.</p>
 * @public
 */
export interface ListDomainNamesResponse {
  /**
   * <p>The names of all OpenSearch Service domains owned by the current user and their respective
   *    engine types.</p>
   * @public
   */
  DomainNames?: DomainInfo[] | undefined;
}

/**
 * <p>Container for the request parameters to the <code>ListDomainsForPackage</code>
 *    operation.</p>
 * @public
 */
export interface ListDomainsForPackageRequest {
  /**
   * <p>The unique identifier of the package for which to list associated domains.</p>
   * @public
   */
  PackageID: string | undefined;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If your initial <code>ListDomainsForPackage</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>ListDomainsForPackage</code> operations, which returns results in the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
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
