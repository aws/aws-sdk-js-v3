// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ElasticsearchServiceServiceException as __BaseException } from "./ElasticsearchServiceServiceException";

/**
 * @public
 * <p>Container for the parameters to the <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation.</p>
 */
export interface AcceptInboundCrossClusterSearchConnectionRequest {
  /**
   * @public
   * <p>The id of the inbound connection that you want to accept.</p>
   */
  CrossClusterSearchConnectionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InboundCrossClusterSearchConnectionStatusCode = {
  APPROVED: "APPROVED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  PENDING_ACCEPTANCE: "PENDING_ACCEPTANCE",
  REJECTED: "REJECTED",
  REJECTING: "REJECTING",
} as const;

/**
 * @public
 */
export type InboundCrossClusterSearchConnectionStatusCode =
  (typeof InboundCrossClusterSearchConnectionStatusCode)[keyof typeof InboundCrossClusterSearchConnectionStatusCode];

/**
 * @public
 * <p>Specifies the coonection status of an inbound cross-cluster search connection.</p>
 */
export interface InboundCrossClusterSearchConnectionStatus {
  /**
   * @public
   * <p>The state code for inbound connection. This can be one of the following:</p>
   *     <ul>
   *       <li>PENDING_ACCEPTANCE: Inbound connection is not yet accepted by destination domain owner.</li>
   *       <li>APPROVED: Inbound connection is pending acceptance by destination domain owner.</li>
   *       <li>REJECTING: Inbound connection rejection is in process.</li>
   *       <li>REJECTED: Inbound connection is rejected.</li>
   *       <li>DELETING: Inbound connection deletion is in progress.</li>
   *       <li>DELETED: Inbound connection is deleted and cannot be used further.</li>
   *     </ul>
   */
  StatusCode?: InboundCrossClusterSearchConnectionStatusCode;

  /**
   * @public
   * <p>Specifies verbose information for the inbound connection status.</p>
   */
  Message?: string;
}

/**
 * @public
 */
export interface DomainInformation {
  OwnerId?: string;
  /**
   * @public
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  Region?: string;
}

/**
 * @public
 * <p>Specifies details of an inbound connection.</p>
 */
export interface InboundCrossClusterSearchConnection {
  /**
   * @public
   * <p>Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.</p>
   */
  SourceDomainInfo?: DomainInformation;

  /**
   * @public
   * <p>Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.</p>
   */
  DestinationDomainInfo?: DomainInformation;

  /**
   * @public
   * <p>Specifies the connection id for the inbound cross-cluster search connection.</p>
   */
  CrossClusterSearchConnectionId?: string;

  /**
   * @public
   * <p>Specifies the <code><a>InboundCrossClusterSearchConnectionStatus</a></code> for the outbound connection.</p>
   */
  ConnectionStatus?: InboundCrossClusterSearchConnectionStatus;
}

/**
 * @public
 * <p>The result of a <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation. Contains details of accepted inbound connection.</p>
 */
export interface AcceptInboundCrossClusterSearchConnectionResponse {
  /**
   * @public
   * <p>Specifies the <code><a>InboundCrossClusterSearchConnection</a></code> of accepted inbound connection. </p>
   */
  CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
}

/**
 * @public
 * <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
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
 * <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
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
 * @public
 * <p>An error occurred because user does not have permissions to access the resource. Returns HTTP status code 403.</p>
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
 * <p>Provides the current status of the entity.</p>
 */
export interface OptionStatus {
  /**
   * @public
   * <p>Timestamp which tells the creation date for the entity.</p>
   */
  CreationDate: Date | undefined;

  /**
   * @public
   * <p>Timestamp which tells the last updated time for the entity.</p>
   */
  UpdateDate: Date | undefined;

  /**
   * @public
   * <p>Specifies the latest version for the entity.</p>
   */
  UpdateVersion?: number;

  /**
   * @public
   * <p>Provides the <code>OptionState</code> for the Elasticsearch domain.</p>
   */
  State: OptionState | undefined;

  /**
   * @public
   * <p>Indicates whether the Elasticsearch domain is being deleted.</p>
   */
  PendingDeletion?: boolean;
}

/**
 * @public
 * <p>The configured access rules for the domain's document and search endpoints, and the current status of those rules.</p>
 */
export interface AccessPoliciesStatus {
  /**
   * @public
   * <p>The access policy configured for the Elasticsearch domain.  Access policies may be resource-based, IP-based, or IAM-based.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">
   *            Configuring Access Policies</a>for more information.</p>
   */
  Options: string | undefined;

  /**
   * @public
   * <p>The status of the access policy for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p>
 *       List of limits that are specific to a given InstanceType and for each of it's
 *       <code>
 *         <a>InstanceRole</a>
 *       </code>
 *       .
 *     </p>
 */
export interface AdditionalLimit {
  /**
   * @public
   * <p>
   *       Name of Additional Limit is specific to a given InstanceType and for each of it's
   *       <code>
   *         <a>InstanceRole</a>
   *       </code>
   *       etc.
   *       <br></br>
   *       Attributes and their details:
   *       <br></br>
   *       <ul>
   *         <li>MaximumNumberOfDataNodesSupported</li>
   *         This attribute will be present in Master node only to specify how
   *         much data nodes upto which given
   *         <code>
   *           <a>ESPartitionInstanceType</a>
   *         </code>
   *         can support as master node.
   *         <li>MaximumNumberOfDataNodesWithoutMasterNode</li>
   *         This attribute will be present in Data node only to specify how much
   *         data nodes of given
   *         <code>
   *           <a>ESPartitionInstanceType</a>
   *         </code>
   *         upto which you don't need any master nodes to govern them.
   *       </ul>
   *     </p>
   */
  LimitName?: string;

  /**
   * @public
   * <p>
   *     Value for given
   *     <code>
   *       <a>AdditionalLimit$LimitName</a>
   *     </code>
   *     .
   *   </p>
   */
  LimitValues?: string[];
}

/**
 * @public
 * <p>Specifies a key value pair for a resource tag.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>Specifies the <code>TagKey</code>, the name of the tag.  Tag keys must be unique for the Elasticsearch domain to which they are attached.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Specifies the <code>TagValue</code>, the value assigned to the corresponding tag key.  Tag values can be null and do not have to be unique in a tag set.  For example, you can have a key value
   *        pair in a tag set of <code>project : Trinity</code> and <code>cost-center : Trinity</code></p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>Container for the parameters to the <code><a>AddTags</a></code> operation. Specify the tags that you want to attach to the Elasticsearch domain.</p>
 */
export interface AddTagsRequest {
  /**
   * @public
   * <p> Specify the <code>ARN</code> for which you want to add the tags.</p>
   */
  ARN: string | undefined;

  /**
   * @public
   * <p> List of <code>Tag</code> that need to be added for the Elasticsearch domain. </p>
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
 * <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
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
 * @public
 * <p> Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:</p>
 *        <ul>
 *            <li>Option to allow references to indices in an HTTP request body.  Must be <code>false</code> when configuring access to individual sub-resources.  By default, the value is <code>true</code>.
 *                See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li>
 *            <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li>
 *        </ul>
 *        <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>
 */
export interface AdvancedOptionsStatus {
  /**
   * @public
   * <p> Specifies the status of advanced options for the specified Elasticsearch domain.</p>
   */
  Options: Record<string, string> | undefined;

  /**
   * @public
   * <p> Specifies the status of <code>OptionStatus</code> for advanced options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p>Specifies the SAML Identity Provider's information.</p>
 */
export interface SAMLIdp {
  /**
   * @public
   * <p>The Metadata of the SAML application in xml format.</p>
   */
  MetadataContent: string | undefined;

  /**
   * @public
   * <p>The unique Entity ID of the application in SAML Identity Provider.</p>
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
   * <p>Describes the SAML Identity Provider's information.</p>
   */
  Idp?: SAMLIdp;

  /**
   * @public
   * <p>The key used for matching the SAML Subject attribute.</p>
   */
  SubjectKey?: string;

  /**
   * @public
   * <p>The key used for matching the SAML Roles attribute.</p>
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
 * <p>Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled.</p>
 */
export interface AdvancedSecurityOptions {
  /**
   * @public
   * <p>True if advanced security is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>True if the internal user database is enabled.</p>
   */
  InternalUserDatabaseEnabled?: boolean;

  /**
   * @public
   * <p>Describes the SAML application configured for a domain.</p>
   */
  SAMLOptions?: SAMLOptionsOutput;

  /**
   * @public
   * <p>Specifies the Anonymous Auth Disable Date when Anonymous Auth is enabled.</p>
   */
  AnonymousAuthDisableDate?: Date;

  /**
   * @public
   * <p>True if Anonymous auth is enabled. Anonymous auth can be enabled only when AdvancedSecurity is enabled on existing domains.</p>
   */
  AnonymousAuthEnabled?: boolean;
}

/**
 * @public
 * <p>Credentials for the master user: username and password, ARN, or both.</p>
 */
export interface MasterUserOptions {
  /**
   * @public
   * <p>ARN for the master user (if IAM is enabled).</p>
   */
  MasterUserARN?: string;

  /**
   * @public
   * <p>The master user's username, which is stored in the Amazon Elasticsearch Service domain's internal database.</p>
   */
  MasterUserName?: string;

  /**
   * @public
   * <p>The master user's password, which is stored in the Amazon Elasticsearch Service domain's internal database.</p>
   */
  MasterUserPassword?: string;
}

/**
 * @public
 * <p>Specifies the SAML application configuration for the domain.</p>
 */
export interface SAMLOptionsInput {
  /**
   * @public
   * <p>True if SAML is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>Specifies the SAML Identity Provider's information.</p>
   */
  Idp?: SAMLIdp;

  /**
   * @public
   * <p>The SAML master username, which is stored in the Amazon Elasticsearch Service domain's internal database.</p>
   */
  MasterUserName?: string;

  /**
   * @public
   * <p>The backend role to which the SAML master user is mapped to.</p>
   */
  MasterBackendRole?: string;

  /**
   * @public
   * <p>The key to use for matching the SAML Subject attribute.</p>
   */
  SubjectKey?: string;

  /**
   * @public
   * <p>The key to use for matching the SAML Roles attribute.</p>
   */
  RolesKey?: string;

  /**
   * @public
   * <p>The duration, in minutes, after which a user session becomes inactive. Acceptable values are between 1 and 1440, and the default value is 60.</p>
   */
  SessionTimeoutMinutes?: number;
}

/**
 * @public
 * <p>Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled).</p>
 */
export interface AdvancedSecurityOptionsInput {
  /**
   * @public
   * <p>True if advanced security is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>True if the internal user database is enabled.</p>
   */
  InternalUserDatabaseEnabled?: boolean;

  /**
   * @public
   * <p>Credentials for the master user: username and password, ARN, or both.</p>
   */
  MasterUserOptions?: MasterUserOptions;

  /**
   * @public
   * <p>Specifies the SAML application configuration for the domain.</p>
   */
  SAMLOptions?: SAMLOptionsInput;

  /**
   * @public
   * <p>True if Anonymous auth is enabled. Anonymous auth can be enabled only when AdvancedSecurity is enabled on existing domains.</p>
   */
  AnonymousAuthEnabled?: boolean;
}

/**
 * @public
 * <p> Specifies the status of advanced security options for the specified Elasticsearch domain.</p>
 */
export interface AdvancedSecurityOptionsStatus {
  /**
   * @public
   * <p> Specifies advanced security options for the specified Elasticsearch domain.</p>
   */
  Options: AdvancedSecurityOptions | undefined;

  /**
   * @public
   * <p> Status of the advanced security options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>AssociatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface AssociatePackageRequest {
  /**
   * @public
   * <p>Internal ID of the package that you want to associate with a domain. Use <code>DescribePackages</code> to find this value.</p>
   */
  PackageID: string | undefined;

  /**
   * @public
   * <p>Name of the domain that you want to associate the package with.</p>
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
 */
export interface ErrorDetails {
  ErrorType?: string;
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
 * <p>Information on a package that is associated with a domain.</p>
 */
export interface DomainPackageDetails {
  /**
   * @public
   * <p>Internal ID of the package.</p>
   */
  PackageID?: string;

  /**
   * @public
   * <p>User specified name of the package.</p>
   */
  PackageName?: string;

  /**
   * @public
   * <p>Currently supports only TXT-DICTIONARY.</p>
   */
  PackageType?: PackageType;

  /**
   * @public
   * <p>Timestamp of the most-recent update to the association status.</p>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>Name of the domain you've associated a package with.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>State of the association. Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.</p>
   */
  DomainPackageStatus?: DomainPackageStatus;

  PackageVersion?: string;
  /**
   * @public
   * <p>The relative path on Amazon ES nodes, which can be used as synonym_path when the package is synonym file.</p>
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
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>AssociatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface AssociatePackageResponse {
  /**
   * @public
   * <p><code>DomainPackageDetails</code></p>
   */
  DomainPackageDetails?: DomainPackageDetails;
}

/**
 * @public
 * <p>An error occurred because the client attempts to remove a resource that is currently in use. Returns HTTP status code 409.</p>
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
 * <p>Container for request parameters to the <code><a>AuthorizeVpcEndpointAccess</a></code> operation.
 *           Specifies the account to be permitted to manage VPC endpoints against the domain.</p>
 */
export interface AuthorizeVpcEndpointAccessRequest {
  /**
   * @public
   * <p>The name of the OpenSearch Service domain to provide access to.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The account ID to grant access to.</p>
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
 * <p>Information about an  account or service that has access to an Amazon
 *    OpenSearch Service domain through the use of an interface VPC endpoint.</p>
 */
export interface AuthorizedPrincipal {
  /**
   * @public
   * <p>The type of principal.</p>
   */
  PrincipalType?: PrincipalType;

  /**
   * @public
   * <p>The IAM principal that is allowed access to the domain.</p>
   */
  Principal?: string;
}

/**
 * @public
 * <p>Container for response parameters to the <code><a>AuthorizeVpcEndpointAccess</a></code> operation.
 *           Contains the account ID and the type of the account being authorized to access the VPC endpoint.</p>
 */
export interface AuthorizeVpcEndpointAccessResponse {
  /**
   * @public
   * <p>Information about the account or service that was provided access to the
   *    domain.</p>
   */
  AuthorizedPrincipal: AuthorizedPrincipal | undefined;
}

/**
 * @public
 * <p>Container for the parameters to the <code><a>CancelElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to cancel a service software update on.</p>
 */
export interface CancelElasticsearchServiceSoftwareUpdateRequest {
  /**
   * @public
   * <p>The name of the domain that you want to stop the latest service software update on.</p>
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
 * <p>The current options of an Elasticsearch domain service software options.</p>
 */
export interface ServiceSoftwareOptions {
  /**
   * @public
   * <p>The current service software version that is present on the domain.</p>
   */
  CurrentVersion?: string;

  /**
   * @public
   * <p>The new service software version if one is available.</p>
   */
  NewVersion?: string;

  /**
   * @public
   * <p><code>True</code> if you are able to update you service software version. <code>False</code> if you are not able to update your service software version. </p>
   */
  UpdateAvailable?: boolean;

  /**
   * @public
   * <p><code>True</code> if you are able to cancel your service software version update. <code>False</code> if you are not able to cancel your service software version. </p>
   */
  Cancellable?: boolean;

  /**
   * @public
   * <p>The status of your service software update. This field can take the following values: <code>ELIGIBLE</code>, <code>PENDING_UPDATE</code>, <code>IN_PROGRESS</code>, <code>COMPLETED</code>, and <code>NOT_ELIGIBLE</code>.</p>
   */
  UpdateStatus?: DeploymentStatus;

  /**
   * @public
   * <p>The description of the <code>UpdateStatus</code>.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software.</p>
   */
  AutomatedUpdateDate?: Date;

  /**
   * @public
   * <p><code>True</code> if a service software is never automatically updated. <code>False</code> if a service software is automatically updated after <code>AutomatedUpdateDate</code>.  </p>
   */
  OptionalDeployment?: boolean;
}

/**
 * @public
 * <p>The result of a <code>CancelElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update.</p>
 */
export interface CancelElasticsearchServiceSoftwareUpdateResponse {
  /**
   * @public
   * <p>The current status of the Elasticsearch service software update.</p>
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
 * <p>Specifies maintenance schedule duration: duration value and duration unit. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
 */
export interface Duration {
  /**
   * @public
   * <p> Integer to specify the value of a maintenance schedule duration. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   */
  Value?: number;

  /**
   * @public
   * <p>Specifies the unit of a maintenance schedule duration. Valid value is HOURS. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   */
  Unit?: TimeUnit;
}

/**
 * @public
 * <p>Specifies Auto-Tune maitenance schedule. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
 */
export interface AutoTuneMaintenanceSchedule {
  /**
   * @public
   * <p>Specifies timestamp at which Auto-Tune maintenance schedule start. </p>
   */
  StartAt?: Date;

  /**
   * @public
   * <p>Specifies maintenance schedule duration: duration value and duration unit. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   */
  Duration?: Duration;

  /**
   * @public
   * <p>Specifies cron expression for a recurring maintenance schedule. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   */
  CronExpressionForRecurrence?: string;
}

/**
 * @public
 * <p>Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.</p>
 */
export interface AutoTuneOptionsInput {
  /**
   * @public
   * <p>Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED. </p>
   */
  DesiredState?: AutoTuneDesiredState;

  /**
   * @public
   * <p>Specifies list of maitenance schedules. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[];
}

/**
 * @public
 * <p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
 */
export interface CognitoOptions {
  /**
   * @public
   * <p>Specifies the option to enable Cognito for Kibana authentication.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>Specifies the Cognito user pool ID for Kibana authentication.</p>
   */
  UserPoolId?: string;

  /**
   * @public
   * <p>Specifies the Cognito identity pool ID for Kibana authentication.</p>
   */
  IdentityPoolId?: string;

  /**
   * @public
   * <p>Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.</p>
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
 * <p>Options to configure endpoint for the Elasticsearch domain.</p>
 */
export interface DomainEndpointOptions {
  /**
   * @public
   * <p>Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.</p>
   */
  EnforceHTTPS?: boolean;

  /**
   * @public
   * <p>Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain.
   *         <br></br> It can be one of the following values:
   *         <ul>
   *             <li><b>Policy-Min-TLS-1-0-2019-07: </b> TLS security policy which supports TLSv1.0 and higher.</li>
   *             <li><b>Policy-Min-TLS-1-2-2019-07: </b> TLS security policy which supports only TLSv1.2</li>
   *         </ul>
   *     </p>
   */
  TLSSecurityPolicy?: TLSSecurityPolicy;

  /**
   * @public
   * <p>Specify if custom endpoint should be enabled for the Elasticsearch domain.</p>
   */
  CustomEndpointEnabled?: boolean;

  /**
   * @public
   * <p>Specify the fully qualified domain for your custom endpoint.</p>
   */
  CustomEndpoint?: string;

  /**
   * @public
   * <p>Specify ACM certificate ARN for your custom endpoint.</p>
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
 * <p>Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.</p>
 */
export interface EBSOptions {
  /**
   * @public
   * <p>Specifies whether EBS-based storage is enabled.</p>
   */
  EBSEnabled?: boolean;

  /**
   * @public
   * <p> Specifies the volume type for EBS-based storage.</p>
   */
  VolumeType?: VolumeType;

  /**
   * @public
   * <p> Integer to specify the size of an EBS volume.</p>
   */
  VolumeSize?: number;

  /**
   * @public
   * <p>Specifies the IOPS for Provisioned IOPS And GP3 EBS volume (SSD).</p>
   */
  Iops?: number;

  /**
   * @public
   * <p>Specifies the Throughput for GP3 EBS volume (SSD).</p>
   */
  Throughput?: number;
}

/**
 * @public
 * <p>Specifies the configuration for cold storage options such as enabled</p>
 */
export interface ColdStorageOptions {
  /**
   * @public
   * <p>Enable cold storage option. Accepted values true or false</p>
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ESPartitionInstanceType = {
  c4_2xlarge_elasticsearch: "c4.2xlarge.elasticsearch",
  c4_4xlarge_elasticsearch: "c4.4xlarge.elasticsearch",
  c4_8xlarge_elasticsearch: "c4.8xlarge.elasticsearch",
  c4_large_elasticsearch: "c4.large.elasticsearch",
  c4_xlarge_elasticsearch: "c4.xlarge.elasticsearch",
  c5_18xlarge_elasticsearch: "c5.18xlarge.elasticsearch",
  c5_2xlarge_elasticsearch: "c5.2xlarge.elasticsearch",
  c5_4xlarge_elasticsearch: "c5.4xlarge.elasticsearch",
  c5_9xlarge_elasticsearch: "c5.9xlarge.elasticsearch",
  c5_large_elasticsearch: "c5.large.elasticsearch",
  c5_xlarge_elasticsearch: "c5.xlarge.elasticsearch",
  d2_2xlarge_elasticsearch: "d2.2xlarge.elasticsearch",
  d2_4xlarge_elasticsearch: "d2.4xlarge.elasticsearch",
  d2_8xlarge_elasticsearch: "d2.8xlarge.elasticsearch",
  d2_xlarge_elasticsearch: "d2.xlarge.elasticsearch",
  i2_2xlarge_elasticsearch: "i2.2xlarge.elasticsearch",
  i2_xlarge_elasticsearch: "i2.xlarge.elasticsearch",
  i3_16xlarge_elasticsearch: "i3.16xlarge.elasticsearch",
  i3_2xlarge_elasticsearch: "i3.2xlarge.elasticsearch",
  i3_4xlarge_elasticsearch: "i3.4xlarge.elasticsearch",
  i3_8xlarge_elasticsearch: "i3.8xlarge.elasticsearch",
  i3_large_elasticsearch: "i3.large.elasticsearch",
  i3_xlarge_elasticsearch: "i3.xlarge.elasticsearch",
  m3_2xlarge_elasticsearch: "m3.2xlarge.elasticsearch",
  m3_large_elasticsearch: "m3.large.elasticsearch",
  m3_medium_elasticsearch: "m3.medium.elasticsearch",
  m3_xlarge_elasticsearch: "m3.xlarge.elasticsearch",
  m4_10xlarge_elasticsearch: "m4.10xlarge.elasticsearch",
  m4_2xlarge_elasticsearch: "m4.2xlarge.elasticsearch",
  m4_4xlarge_elasticsearch: "m4.4xlarge.elasticsearch",
  m4_large_elasticsearch: "m4.large.elasticsearch",
  m4_xlarge_elasticsearch: "m4.xlarge.elasticsearch",
  m5_12xlarge_elasticsearch: "m5.12xlarge.elasticsearch",
  m5_2xlarge_elasticsearch: "m5.2xlarge.elasticsearch",
  m5_4xlarge_elasticsearch: "m5.4xlarge.elasticsearch",
  m5_large_elasticsearch: "m5.large.elasticsearch",
  m5_xlarge_elasticsearch: "m5.xlarge.elasticsearch",
  r3_2xlarge_elasticsearch: "r3.2xlarge.elasticsearch",
  r3_4xlarge_elasticsearch: "r3.4xlarge.elasticsearch",
  r3_8xlarge_elasticsearch: "r3.8xlarge.elasticsearch",
  r3_large_elasticsearch: "r3.large.elasticsearch",
  r3_xlarge_elasticsearch: "r3.xlarge.elasticsearch",
  r4_16xlarge_elasticsearch: "r4.16xlarge.elasticsearch",
  r4_2xlarge_elasticsearch: "r4.2xlarge.elasticsearch",
  r4_4xlarge_elasticsearch: "r4.4xlarge.elasticsearch",
  r4_8xlarge_elasticsearch: "r4.8xlarge.elasticsearch",
  r4_large_elasticsearch: "r4.large.elasticsearch",
  r4_xlarge_elasticsearch: "r4.xlarge.elasticsearch",
  r5_12xlarge_elasticsearch: "r5.12xlarge.elasticsearch",
  r5_2xlarge_elasticsearch: "r5.2xlarge.elasticsearch",
  r5_4xlarge_elasticsearch: "r5.4xlarge.elasticsearch",
  r5_large_elasticsearch: "r5.large.elasticsearch",
  r5_xlarge_elasticsearch: "r5.xlarge.elasticsearch",
  t2_medium_elasticsearch: "t2.medium.elasticsearch",
  t2_micro_elasticsearch: "t2.micro.elasticsearch",
  t2_small_elasticsearch: "t2.small.elasticsearch",
  ultrawarm1_large_elasticsearch: "ultrawarm1.large.elasticsearch",
  ultrawarm1_medium_elasticsearch: "ultrawarm1.medium.elasticsearch",
} as const;

/**
 * @public
 */
export type ESPartitionInstanceType = (typeof ESPartitionInstanceType)[keyof typeof ESPartitionInstanceType];

/**
 * @public
 * @enum
 */
export const ESWarmPartitionInstanceType = {
  ultrawarm1_large_elasticsearch: "ultrawarm1.large.elasticsearch",
  ultrawarm1_medium_elasticsearch: "ultrawarm1.medium.elasticsearch",
} as const;

/**
 * @public
 */
export type ESWarmPartitionInstanceType =
  (typeof ESWarmPartitionInstanceType)[keyof typeof ESWarmPartitionInstanceType];

/**
 * @public
 * <p>Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones.</p>
 */
export interface ZoneAwarenessConfig {
  /**
   * @public
   * <p>An integer value to indicate the number of availability zones for a domain when zone awareness is enabled. This should be equal to number of subnets if VPC endpoints is enabled</p>
   */
  AvailabilityZoneCount?: number;
}

/**
 * @public
 * <p>Specifies the configuration for the domain cluster, such as the type and number of instances.</p>
 */
export interface ElasticsearchClusterConfig {
  /**
   * @public
   * <p>The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances.</p>
   */
  InstanceType?: ESPartitionInstanceType;

  /**
   * @public
   * <p>The number of instances in the specified domain cluster.</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>A boolean value to indicate whether a dedicated master node is enabled.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-dedicatedmasternodes" target="_blank">About Dedicated Master Nodes</a> for more information.</p>
   */
  DedicatedMasterEnabled?: boolean;

  /**
   * @public
   * <p>A boolean value to indicate whether zone awareness is enabled.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-zoneawareness" target="_blank">About Zone Awareness</a> for more information.</p>
   */
  ZoneAwarenessEnabled?: boolean;

  /**
   * @public
   * <p>Specifies the zone awareness configuration for a domain when zone awareness is enabled.</p>
   */
  ZoneAwarenessConfig?: ZoneAwarenessConfig;

  /**
   * @public
   * <p>The instance type for a dedicated master node.</p>
   */
  DedicatedMasterType?: ESPartitionInstanceType;

  /**
   * @public
   * <p>Total number of dedicated master nodes, active and on standby, for the cluster.</p>
   */
  DedicatedMasterCount?: number;

  /**
   * @public
   * <p>True to enable warm storage.</p>
   */
  WarmEnabled?: boolean;

  /**
   * @public
   * <p>The instance type for the Elasticsearch cluster's warm nodes.</p>
   */
  WarmType?: ESWarmPartitionInstanceType;

  /**
   * @public
   * <p>The number of warm nodes in the cluster.</p>
   */
  WarmCount?: number;

  /**
   * @public
   * <p>Specifies the <code>ColdStorageOptions</code> config for Elasticsearch Domain</p>
   */
  ColdStorageOptions?: ColdStorageOptions;
}

/**
 * @public
 * <p>Specifies the Encryption At Rest Options.</p>
 */
export interface EncryptionAtRestOptions {
  /**
   * @public
   * <p>Specifies the option to enable Encryption At Rest.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p> Specifies the KMS Key ID for Encryption At Rest options.</p>
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
 * <p>Log Publishing option that is set for given domain.
 *        <br></br>Attributes and their details:
 *      <ul>
 *        <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.</li>
 *        <li>Enabled: Whether the log publishing for given log type is enabled or not</li>
 *      </ul>
 *    </p>
 */
export interface LogPublishingOption {
  /**
   * @public
   * <p>ARN of the Cloudwatch log group to which log needs to be published.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * @public
   * <p> Specifies whether given log publishing option is enabled or not.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Specifies the node-to-node encryption options.</p>
 */
export interface NodeToNodeEncryptionOptions {
  /**
   * @public
   * <p>Specify true to enable node-to-node encryption.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.</p>
 */
export interface SnapshotOptions {
  /**
   * @public
   * <p>Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.</p>
   */
  AutomatedSnapshotStartHour?: number;
}

/**
 * @public
 * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
 */
export interface VPCOptions {
  /**
   * @public
   * <p>Specifies the subnets for VPC endpoint.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>Specifies the security groups for VPC endpoint.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * @public
 */
export interface CreateElasticsearchDomainRequest {
  /**
   * @public
   * <p>The name of the Elasticsearch domain that you are creating. Domain names are unique across the domains owned by an account within an AWS region. Domain names must start with a lowercase letter and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>String of format X.Y to specify version for the Elasticsearch domain eg. "1.5" or "2.3". For more information,
   *           see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.</p>
   */
  ElasticsearchVersion?: string;

  /**
   * @public
   * <p>Configuration options for an Elasticsearch domain. Specifies the instance type and number of instances in the domain cluster. </p>
   */
  ElasticsearchClusterConfig?: ElasticsearchClusterConfig;

  /**
   * @public
   * <p>Options to enable, disable and specify the type and size of EBS storage volumes. </p>
   */
  EBSOptions?: EBSOptions;

  /**
   * @public
   * <p> IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: string;

  /**
   * @public
   * <p>Option to set time, in UTC format, of the daily automated snapshot. Default value is 0 hours. </p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * @public
   * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-creating-vpc" target="_blank">Creating a VPC</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i></p>
   */
  VPCOptions?: VPCOptions;

  /**
   * @public
   * <p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * @public
   * <p>Specifies the Encryption At Rest Options.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * @public
   * <p>Specifies the NodeToNodeEncryptionOptions.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * @public
   * <p> Option to allow references to indices in an HTTP request body.  Must be <code>false</code> when configuring access to individual sub-resources.  By default, the value is <code>true</code>.
   *           See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</p>
   */
  AdvancedOptions?: Record<string, string>;

  /**
   * @public
   * <p>Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.</p>
   */
  LogPublishingOptions?: Record<LogType, LogPublishingOption>;

  /**
   * @public
   * <p>Options to specify configuration that will be applied to the domain endpoint.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * @public
   * <p>Specifies advanced security options.</p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;

  /**
   * @public
   * <p>Specifies Auto-Tune options.</p>
   */
  AutoTuneOptions?: AutoTuneOptionsInput;

  /**
   * @public
   * <p>A list of <code>Tag</code> added during domain creation.</p>
   */
  TagList?: Tag[];
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
 * <p>Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.</p>
 */
export interface AutoTuneOptionsOutput {
  /**
   * @public
   * <p>Specifies the <code>AutoTuneState</code> for the Elasticsearch domain.</p>
   */
  State?: AutoTuneState;

  /**
   * @public
   * <p>Specifies the error message while enabling or disabling the Auto-Tune.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * <p>Specifies change details of the domain configuration change.</p>
 */
export interface ChangeProgressDetails {
  /**
   * @public
   * <p>The unique change identifier associated with a specific domain configuration change.</p>
   */
  ChangeId?: string;

  /**
   * @public
   * <p>Contains an optional message associated with the domain configuration change.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
 */
export interface VPCDerivedInfo {
  /**
   * @public
   * <p>The VPC Id for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.</p>
   */
  VPCId?: string;

  /**
   * @public
   * <p>Specifies the subnets for VPC endpoint.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>The availability zones for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>Specifies the security groups for VPC endpoint.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * @public
 * <p>The current status of an Elasticsearch domain.</p>
 */
export interface ElasticsearchDomainStatus {
  /**
   * @public
   * <p>The unique identifier for the specified Elasticsearch domain.</p>
   */
  DomainId: string | undefined;

  /**
   * @public
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The Amazon resource name (ARN) of an Elasticsearch domain.  See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.</p>
   */
  ARN: string | undefined;

  /**
   * @public
   * <p>The domain creation status. <code>True</code> if the creation of an Elasticsearch domain is complete. <code>False</code> if domain creation is still in progress.</p>
   */
  Created?: boolean;

  /**
   * @public
   * <p>The domain deletion status. <code>True</code> if a delete request has been received for the domain but resource cleanup is still in progress. <code>False</code> if the domain has not been deleted. Once domain deletion is complete, the status of the domain is no longer returned.</p>
   */
  Deleted?: boolean;

  /**
   * @public
   * <p>The Elasticsearch domain endpoint that you use to submit index and search requests.</p>
   */
  Endpoint?: string;

  /**
   * @public
   * <p>Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example <code>key, value</code>: <code>'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com'</code>.</p>
   */
  Endpoints?: Record<string, string>;

  /**
   * @public
   * <p>The status of the Elasticsearch domain configuration. <code>True</code> if Amazon Elasticsearch Service is processing configuration changes. <code>False</code> if the configuration is active.</p>
   */
  Processing?: boolean;

  /**
   * @public
   * <p>The status of an Elasticsearch domain version upgrade. <code>True</code> if Amazon Elasticsearch Service is undergoing a version upgrade. <code>False</code> if the configuration is active.</p>
   */
  UpgradeProcessing?: boolean;

  ElasticsearchVersion?: string;
  /**
   * @public
   * <p>The type and number of instances in the domain cluster.</p>
   */
  ElasticsearchClusterConfig: ElasticsearchClusterConfig | undefined;

  /**
   * @public
   * <p>The <code>EBSOptions</code> for the specified domain.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a> for more information.</p>
   */
  EBSOptions?: EBSOptions;

  /**
   * @public
   * <p> IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: string;

  /**
   * @public
   * <p>Specifies the status of the <code>SnapshotOptions</code></p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * @public
   * <p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
   */
  VPCOptions?: VPCDerivedInfo;

  /**
   * @public
   * <p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * @public
   * <p> Specifies the status of the <code>EncryptionAtRestOptions</code>.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * @public
   * <p>Specifies the status of the <code>NodeToNodeEncryptionOptions</code>.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * @public
   * <p>Specifies the status of the <code>AdvancedOptions</code></p>
   */
  AdvancedOptions?: Record<string, string>;

  /**
   * @public
   * <p>Log publishing options for the given domain.</p>
   */
  LogPublishingOptions?: Record<LogType, LogPublishingOption>;

  /**
   * @public
   * <p>The current status of the Elasticsearch domain's service software.</p>
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;

  /**
   * @public
   * <p>The current status of the Elasticsearch domain's endpoint options.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * @public
   * <p>The current status of the Elasticsearch domain's advanced security options.</p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptions;

  /**
   * @public
   * <p>The current status of the Elasticsearch domain's Auto-Tune options.</p>
   */
  AutoTuneOptions?: AutoTuneOptionsOutput;

  /**
   * @public
   * <p>Specifies change details of the domain configuration change.</p>
   */
  ChangeProgressDetails?: ChangeProgressDetails;
}

/**
 * @public
 * <p>The result of a <code>CreateElasticsearchDomain</code> operation. Contains the status of the newly created Elasticsearch domain.</p>
 */
export interface CreateElasticsearchDomainResponse {
  /**
   * @public
   * <p>The status of the newly created Elasticsearch domain. </p>
   */
  DomainStatus?: ElasticsearchDomainStatus;
}

/**
 * @public
 * <p>An exception for trying to create or access sub-resource that is either invalid or not supported. Gives http status code of 409.</p>
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
 * @public
 * <p>Container for the parameters to the <code><a>CreateOutboundCrossClusterSearchConnection</a></code> operation.</p>
 */
export interface CreateOutboundCrossClusterSearchConnectionRequest {
  /**
   * @public
   * <p>Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.</p>
   */
  SourceDomainInfo: DomainInformation | undefined;

  /**
   * @public
   * <p>Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.</p>
   */
  DestinationDomainInfo: DomainInformation | undefined;

  /**
   * @public
   * <p>Specifies the connection alias that will be used by the customer for this connection.</p>
   */
  ConnectionAlias: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OutboundCrossClusterSearchConnectionStatusCode = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DELETING: "DELETING",
  PENDING_ACCEPTANCE: "PENDING_ACCEPTANCE",
  PROVISIONING: "PROVISIONING",
  REJECTED: "REJECTED",
  VALIDATING: "VALIDATING",
  VALIDATION_FAILED: "VALIDATION_FAILED",
} as const;

/**
 * @public
 */
export type OutboundCrossClusterSearchConnectionStatusCode =
  (typeof OutboundCrossClusterSearchConnectionStatusCode)[keyof typeof OutboundCrossClusterSearchConnectionStatusCode];

/**
 * @public
 * <p>Specifies the connection status of an outbound cross-cluster search connection.</p>
 */
export interface OutboundCrossClusterSearchConnectionStatus {
  /**
   * @public
   * <p>The state code for outbound connection. This can be one of the following:</p>
   *     <ul>
   *       <li>VALIDATING: The outbound connection request is being validated.</li>
   *       <li>VALIDATION_FAILED: Validation failed for the connection request.</li>
   *       <li>PENDING_ACCEPTANCE: Outbound connection request is validated and is not yet accepted by destination domain owner.</li>
   *       <li>PROVISIONING: Outbound connection request is in process.</li>
   *       <li>ACTIVE: Outbound connection is active and ready to use.</li>
   *       <li>REJECTED: Outbound connection request is rejected by destination domain owner.</li>
   *       <li>DELETING: Outbound connection deletion is in progress.</li>
   *       <li>DELETED: Outbound connection is deleted and cannot be used further.</li>
   *     </ul>
   */
  StatusCode?: OutboundCrossClusterSearchConnectionStatusCode;

  /**
   * @public
   * <p>Specifies verbose information for the outbound connection status.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The result of a <code><a>CreateOutboundCrossClusterSearchConnection</a></code> request. Contains the details of the newly created cross-cluster search connection.</p>
 */
export interface CreateOutboundCrossClusterSearchConnectionResponse {
  /**
   * @public
   * <p>Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.</p>
   */
  SourceDomainInfo?: DomainInformation;

  /**
   * @public
   * <p>Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.</p>
   */
  DestinationDomainInfo?: DomainInformation;

  /**
   * @public
   * <p>Specifies the connection alias provided during the create connection request.</p>
   */
  ConnectionAlias?: string;

  /**
   * @public
   * <p>Specifies the <code><a>OutboundCrossClusterSearchConnectionStatus</a></code> for the newly created connection.</p>
   */
  ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus;

  /**
   * @public
   * <p>Unique id for the created outbound connection, which is used for subsequent operations on connection.</p>
   */
  CrossClusterSearchConnectionId?: string;
}

/**
 * @public
 * <p>The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code></p>
 */
export interface PackageSource {
  /**
   * @public
   * <p>Name of the bucket containing the package.</p>
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
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>CreatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface CreatePackageRequest {
  /**
   * @public
   * <p>Unique identifier for the package.</p>
   */
  PackageName: string | undefined;

  /**
   * @public
   * <p>Type of package. Currently supports only TXT-DICTIONARY.</p>
   */
  PackageType: PackageType | undefined;

  /**
   * @public
   * <p>Description of the package.</p>
   */
  PackageDescription?: string;

  /**
   * @public
   * <p>The customer S3 location <code>PackageSource</code> for importing the package.</p>
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
   * <p>Internal ID of the package.</p>
   */
  PackageID?: string;

  /**
   * @public
   * <p>User specified name of the package.</p>
   */
  PackageName?: string;

  /**
   * @public
   * <p>Currently supports only TXT-DICTIONARY.</p>
   */
  PackageType?: PackageType;

  /**
   * @public
   * <p>User-specified description of the package.</p>
   */
  PackageDescription?: string;

  /**
   * @public
   * <p>Current state of the package. Values are COPYING/COPY_FAILED/AVAILABLE/DELETING/DELETE_FAILED</p>
   */
  PackageStatus?: PackageStatus;

  /**
   * @public
   * <p>Timestamp which tells creation date of the package.</p>
   */
  CreatedAt?: Date;

  LastUpdatedAt?: Date;
  AvailablePackageVersion?: string;
  /**
   * @public
   * <p>Additional information if the package is in an error state. Null otherwise.</p>
   */
  ErrorDetails?: ErrorDetails;
}

/**
 * @public
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>CreatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface CreatePackageResponse {
  /**
   * @public
   * <p>Information about the package <code>PackageDetails</code>.</p>
   */
  PackageDetails?: PackageDetails;
}

/**
 * @public
 * <p>Container for the parameters to the <code><a>CreateVpcEndpointRequest</a></code> operation.</p>
 */
export interface CreateVpcEndpointRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the domain to grant access to.</p>
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
  Status?: VpcEndpointStatus;

  /**
   * @public
   * <p>The connection endpoint ID for connecting to the domain.</p>
   */
  Endpoint?: string;
}

/**
 * @public
 * <p>Container for response parameters to the <code><a>CreateVpcEndpoint</a></code> operation. Contains the configuration and status of the VPC Endpoint being created.</p>
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
 * <p>Container for the parameters to the <code><a>DeleteElasticsearchDomain</a></code> operation. Specifies the name of the Elasticsearch domain that you want to delete.</p>
 */
export interface DeleteElasticsearchDomainRequest {
  /**
   * @public
   * <p>The name of the Elasticsearch domain that you want to permanently delete.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * <p>The result of a <code>DeleteElasticsearchDomain</code> request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted.</p>
 */
export interface DeleteElasticsearchDomainResponse {
  /**
   * @public
   * <p>The status of the Elasticsearch domain being deleted.</p>
   */
  DomainStatus?: ElasticsearchDomainStatus;
}

/**
 * @public
 * <p>Container for the parameters to the <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation.</p>
 */
export interface DeleteInboundCrossClusterSearchConnectionRequest {
  /**
   * @public
   * <p>The id of the inbound connection that you want to permanently delete.</p>
   */
  CrossClusterSearchConnectionId: string | undefined;
}

/**
 * @public
 * <p>The result of a <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted inbound connection.</p>
 */
export interface DeleteInboundCrossClusterSearchConnectionResponse {
  /**
   * @public
   * <p>Specifies the <code><a>InboundCrossClusterSearchConnection</a></code> of deleted inbound connection. </p>
   */
  CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
}

/**
 * @public
 * <p>Container for the parameters to the <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation.</p>
 */
export interface DeleteOutboundCrossClusterSearchConnectionRequest {
  /**
   * @public
   * <p>The id of the outbound connection that you want to permanently delete.</p>
   */
  CrossClusterSearchConnectionId: string | undefined;
}

/**
 * @public
 * <p>Specifies details of an outbound connection.</p>
 */
export interface OutboundCrossClusterSearchConnection {
  /**
   * @public
   * <p>Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.</p>
   */
  SourceDomainInfo?: DomainInformation;

  /**
   * @public
   * <p>Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.</p>
   */
  DestinationDomainInfo?: DomainInformation;

  /**
   * @public
   * <p>Specifies the connection id for the outbound cross-cluster search connection.</p>
   */
  CrossClusterSearchConnectionId?: string;

  /**
   * @public
   * <p>Specifies the connection alias for the outbound cross-cluster search connection.</p>
   */
  ConnectionAlias?: string;

  /**
   * @public
   * <p>Specifies the <code><a>OutboundCrossClusterSearchConnectionStatus</a></code> for the outbound connection.</p>
   */
  ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus;
}

/**
 * @public
 * <p>The result of a <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted outbound connection.</p>
 */
export interface DeleteOutboundCrossClusterSearchConnectionResponse {
  /**
   * @public
   * <p>Specifies the <code><a>OutboundCrossClusterSearchConnection</a></code> of deleted outbound connection. </p>
   */
  CrossClusterSearchConnection?: OutboundCrossClusterSearchConnection;
}

/**
 * @public
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>DeletePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DeletePackageRequest {
  /**
   * @public
   * <p>Internal ID of the package that you want to delete. Use <code>DescribePackages</code> to find this value.</p>
   */
  PackageID: string | undefined;
}

/**
 * @public
 * <p>
 *       Container for response parameters to
 *       <code>
 *         <a>DeletePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DeletePackageResponse {
  /**
   * @public
   * <p><code>PackageDetails</code></p>
   */
  PackageDetails?: PackageDetails;
}

/**
 * @public
 * <p>Deletes an Amazon OpenSearch Service-managed interface VPC endpoint.</p>
 */
export interface DeleteVpcEndpointRequest {
  /**
   * @public
   * <p>The unique identifier of the endpoint to be deleted.</p>
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
  Status?: VpcEndpointStatus;
}

/**
 * @public
 * <p>Container for response parameters to the <code><a>DeleteVpcEndpoint</a></code> operation. Contains the summarized detail of the VPC Endpoint being deleted.</p>
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
 * <p>Container for the parameters to the <code>DescribeDomainAutoTunes</code> operation.</p>
 */
export interface DescribeDomainAutoTunesRequest {
  /**
   * @public
   * <p>Specifies the domain name for which you want Auto-Tune action details.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.</p>
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
 * <p>Specifies details of the scheduled Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
 */
export interface ScheduledAutoTuneDetails {
  /**
   * @public
   * <p>Specifies timestamp for the Auto-Tune action scheduled for the domain. </p>
   */
  Date?: Date;

  /**
   * @public
   * <p>Specifies Auto-Tune action type. Valid values are JVM_HEAP_SIZE_TUNING and JVM_YOUNG_GEN_TUNING. </p>
   */
  ActionType?: ScheduledAutoTuneActionType;

  /**
   * @public
   * <p>Specifies Auto-Tune action description. </p>
   */
  Action?: string;

  /**
   * @public
   * <p>Specifies Auto-Tune action severity. Valid values are LOW, MEDIUM and HIGH. </p>
   */
  Severity?: ScheduledAutoTuneSeverityType;
}

/**
 * @public
 * <p>Specifies details of the Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
 */
export interface AutoTuneDetails {
  /**
   * @public
   * <p>Specifies details of the scheduled Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
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
 * <p>Specifies Auto-Tune type and Auto-Tune action details. </p>
 */
export interface AutoTune {
  /**
   * @public
   * <p>Specifies Auto-Tune type. Valid value is SCHEDULED_ACTION. </p>
   */
  AutoTuneType?: AutoTuneType;

  /**
   * @public
   * <p>Specifies details of the Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
   */
  AutoTuneDetails?: AutoTuneDetails;
}

/**
 * @public
 * <p>The result of <code>DescribeDomainAutoTunes</code> request. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
 */
export interface DescribeDomainAutoTunesResponse {
  /**
   * @public
   * <p>Specifies the list of setting adjustments that Auto-Tune has made to the domain. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   */
  AutoTunes?: AutoTune[];

  /**
   * @public
   * <p>Specifies an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Container for the parameters to the <code>DescribeDomainChangeProgress</code> operation. Specifies the
 *         domain name and optional change specific identity for which you want progress information.
 *       </p>
 */
export interface DescribeDomainChangeProgressRequest {
  /**
   * @public
   * <p>The domain you want to get the progress information about.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The specific change ID for which you want to get progress information. This is an optional parameter.
   *         If omitted, the service returns information about the most recent configuration change.
   *       </p>
   */
  ChangeId?: string;
}

/**
 * @public
 * <p>A progress stage details of a specific domain configuration change.</p>
 */
export interface ChangeProgressStage {
  /**
   * @public
   * <p>The name of the specific progress stage.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The overall status of a specific progress stage.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The description of the progress stage.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The last updated timestamp of the progress stage.</p>
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
   * <p>The overall status of the domain configuration change. This field can take the following values: <code>PENDING</code>, <code>PROCESSING</code>, <code>COMPLETED</code> and <code>FAILED</code></p>
   */
  Status?: OverallChangeStatus;

  /**
   * @public
   * <p>The list of properties involved in the domain configuration change that are still in pending.</p>
   */
  PendingProperties?: string[];

  /**
   * @public
   * <p>The list of properties involved in the domain configuration change that are completed.</p>
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
 * <p>The result of a <code>DescribeDomainChangeProgress</code> request. Contains the progress information of
 *         the requested domain change.
 *       </p>
 */
export interface DescribeDomainChangeProgressResponse {
  /**
   * @public
   * <p>Progress information for the configuration change that is requested in the <code>DescribeDomainChangeProgress</code> request.
   *       </p>
   */
  ChangeProgressStatus?: ChangeProgressStatusDetails;
}

/**
 * @public
 * <p>Container for the parameters to the <code><a>DescribeElasticsearchDomain</a></code> operation.</p>
 */
export interface DescribeElasticsearchDomainRequest {
  /**
   * @public
   * <p>The name of the Elasticsearch domain for which you want information.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * <p>The result of a <code>DescribeElasticsearchDomain</code> request. Contains the status of the domain specified in the request.</p>
 */
export interface DescribeElasticsearchDomainResponse {
  /**
   * @public
   * <p>The current status of the Elasticsearch domain.</p>
   */
  DomainStatus: ElasticsearchDomainStatus | undefined;
}

/**
 * @public
 * <p> Container for the parameters to the <code>DescribeElasticsearchDomainConfig</code> operation. Specifies the domain name for which you want configuration information.</p>
 */
export interface DescribeElasticsearchDomainConfigRequest {
  /**
   * @public
   * <p>The Elasticsearch domain that you want to get information about.</p>
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
 * <p>Specifies the Auto-Tune options: the Auto-Tune desired state for the domain, rollback state when disabling Auto-Tune options and list of maintenance schedules.</p>
 */
export interface AutoTuneOptions {
  /**
   * @public
   * <p>Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED. </p>
   */
  DesiredState?: AutoTuneDesiredState;

  /**
   * @public
   * <p>Specifies the rollback state while disabling Auto-Tune for the domain. Valid values are NO_ROLLBACK, DEFAULT_ROLLBACK. </p>
   */
  RollbackOnDisable?: RollbackOnDisable;

  /**
   * @public
   * <p>Specifies list of maitenance schedules. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[];
}

/**
 * @public
 * <p>Provides the current status of the Auto-Tune options. </p>
 */
export interface AutoTuneStatus {
  /**
   * @public
   * <p>Timestamp which tells Auto-Tune options creation date .</p>
   */
  CreationDate: Date | undefined;

  /**
   * @public
   * <p>Timestamp which tells Auto-Tune options last updated time.</p>
   */
  UpdateDate: Date | undefined;

  /**
   * @public
   * <p>Specifies the Auto-Tune options latest version.</p>
   */
  UpdateVersion?: number;

  /**
   * @public
   * <p>Specifies the <code>AutoTuneState</code> for the Elasticsearch domain.</p>
   */
  State: AutoTuneState | undefined;

  /**
   * @public
   * <p>Specifies the error message while enabling or disabling the Auto-Tune options.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>Indicates whether the Elasticsearch domain is being deleted.</p>
   */
  PendingDeletion?: boolean;
}

/**
 * @public
 * <p> Specifies the status of Auto-Tune options for the specified Elasticsearch domain.</p>
 */
export interface AutoTuneOptionsStatus {
  /**
   * @public
   * <p> Specifies Auto-Tune options for the specified Elasticsearch domain.</p>
   */
  Options?: AutoTuneOptions;

  /**
   * @public
   * <p> Specifies Status of the Auto-Tune options for the specified Elasticsearch domain.</p>
   */
  Status?: AutoTuneStatus;
}

/**
 * @public
 * <p>Status of the Cognito options for the specified Elasticsearch domain.</p>
 */
export interface CognitoOptionsStatus {
  /**
   * @public
   * <p>Specifies the Cognito options for the specified Elasticsearch domain.</p>
   */
  Options: CognitoOptions | undefined;

  /**
   * @public
   * <p>Specifies the status of the Cognito options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p>The configured endpoint options for the domain and their current status.</p>
 */
export interface DomainEndpointOptionsStatus {
  /**
   * @public
   * <p>Options to configure endpoint for the Elasticsearch domain.</p>
   */
  Options: DomainEndpointOptions | undefined;

  /**
   * @public
   * <p>The status of the endpoint options for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p> Status of the EBS options for the specified Elasticsearch domain.</p>
 */
export interface EBSOptionsStatus {
  /**
   * @public
   * <p> Specifies the EBS options for the specified Elasticsearch domain.</p>
   */
  Options: EBSOptions | undefined;

  /**
   * @public
   * <p> Specifies the status of the EBS options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p> Specifies the configuration status for the specified Elasticsearch domain.</p>
 */
export interface ElasticsearchClusterConfigStatus {
  /**
   * @public
   * <p> Specifies the cluster configuration for the specified Elasticsearch domain.</p>
   */
  Options: ElasticsearchClusterConfig | undefined;

  /**
   * @public
   * <p> Specifies the status of the configuration for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p> Status of the Elasticsearch version options for the specified Elasticsearch domain.</p>
 */
export interface ElasticsearchVersionStatus {
  /**
   * @public
   * <p> Specifies the Elasticsearch version for the specified Elasticsearch domain.</p>
   */
  Options: string | undefined;

  /**
   * @public
   * <p> Specifies the status of the Elasticsearch version options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p> Status of the Encryption At Rest options for the specified Elasticsearch domain.</p>
 */
export interface EncryptionAtRestOptionsStatus {
  /**
   * @public
   * <p> Specifies the Encryption At Rest options for the specified Elasticsearch domain.</p>
   */
  Options: EncryptionAtRestOptions | undefined;

  /**
   * @public
   * <p> Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.</p>
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
   * <p>The log publishing options configured for the Elasticsearch domain.</p>
   */
  Options?: Record<LogType, LogPublishingOption>;

  /**
   * @public
   * <p>The status of the log publishing options for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>
   */
  Status?: OptionStatus;
}

/**
 * @public
 * <p>Status of the node-to-node encryption options for the specified Elasticsearch domain.</p>
 */
export interface NodeToNodeEncryptionOptionsStatus {
  /**
   * @public
   * <p>Specifies the node-to-node encryption options for the specified Elasticsearch domain.</p>
   */
  Options: NodeToNodeEncryptionOptions | undefined;

  /**
   * @public
   * <p>Specifies the status of the node-to-node encryption options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p>Status of a daily automated snapshot.</p>
 */
export interface SnapshotOptionsStatus {
  /**
   * @public
   * <p>Specifies the daily snapshot options specified for the Elasticsearch domain.</p>
   */
  Options: SnapshotOptions | undefined;

  /**
   * @public
   * <p>Specifies the status of a daily automated snapshot.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p> Status of the VPC options for the specified Elasticsearch domain.</p>
 */
export interface VPCDerivedInfoStatus {
  /**
   * @public
   * <p> Specifies the VPC options for the specified Elasticsearch domain.</p>
   */
  Options: VPCDerivedInfo | undefined;

  /**
   * @public
   * <p> Specifies the status of the VPC options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * @public
 * <p>The configuration of an Elasticsearch domain.</p>
 */
export interface ElasticsearchDomainConfig {
  /**
   * @public
   * <p>String of format X.Y to specify version for the Elasticsearch domain.</p>
   */
  ElasticsearchVersion?: ElasticsearchVersionStatus;

  /**
   * @public
   * <p>Specifies the <code>ElasticsearchClusterConfig</code> for the Elasticsearch domain.</p>
   */
  ElasticsearchClusterConfig?: ElasticsearchClusterConfigStatus;

  /**
   * @public
   * <p>Specifies the <code>EBSOptions</code> for the Elasticsearch domain.</p>
   */
  EBSOptions?: EBSOptionsStatus;

  /**
   * @public
   * <p>IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: AccessPoliciesStatus;

  /**
   * @public
   * <p>Specifies the <code>SnapshotOptions</code> for the Elasticsearch domain.</p>
   */
  SnapshotOptions?: SnapshotOptionsStatus;

  /**
   * @public
   * <p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
   */
  VPCOptions?: VPCDerivedInfoStatus;

  /**
   * @public
   * <p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   */
  CognitoOptions?: CognitoOptionsStatus;

  /**
   * @public
   * <p>Specifies the <code>EncryptionAtRestOptions</code> for the Elasticsearch domain.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus;

  /**
   * @public
   * <p>Specifies the <code>NodeToNodeEncryptionOptions</code> for the Elasticsearch domain.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus;

  /**
   * @public
   * <p>Specifies the <code>AdvancedOptions</code> for the domain.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuring Advanced Options</a> for more information.</p>
   */
  AdvancedOptions?: AdvancedOptionsStatus;

  /**
   * @public
   * <p>Log publishing options for the given domain.</p>
   */
  LogPublishingOptions?: LogPublishingOptionsStatus;

  /**
   * @public
   * <p>Specifies the <code>DomainEndpointOptions</code> for the Elasticsearch domain.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus;

  /**
   * @public
   * <p>Specifies <code>AdvancedSecurityOptions</code> for the domain. </p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsStatus;

  /**
   * @public
   * <p>Specifies <code>AutoTuneOptions</code> for the domain. </p>
   */
  AutoTuneOptions?: AutoTuneOptionsStatus;

  /**
   * @public
   * <p>Specifies change details of the domain configuration change.</p>
   */
  ChangeProgressDetails?: ChangeProgressDetails;
}

/**
 * @public
 * <p>The result of a <code>DescribeElasticsearchDomainConfig</code> request. Contains the configuration information of the requested domain.</p>
 */
export interface DescribeElasticsearchDomainConfigResponse {
  /**
   * @public
   * <p>The configuration information of the domain requested in the <code>DescribeElasticsearchDomainConfig</code> request.</p>
   */
  DomainConfig: ElasticsearchDomainConfig | undefined;
}

/**
 * @public
 * <p>Container for the parameters to the <code><a>DescribeElasticsearchDomains</a></code> operation. By default, the API returns the status of all Elasticsearch domains.</p>
 */
export interface DescribeElasticsearchDomainsRequest {
  /**
   * @public
   * <p>The Elasticsearch domains for which you want information.</p>
   */
  DomainNames: string[] | undefined;
}

/**
 * @public
 * <p>The result of a <code>DescribeElasticsearchDomains</code> request. Contains the status of the specified domains or all domains owned by the account.</p>
 */
export interface DescribeElasticsearchDomainsResponse {
  /**
   * @public
   * <p>The status of the domains requested in the <code>DescribeElasticsearchDomains</code> request.</p>
   */
  DomainStatusList: ElasticsearchDomainStatus[] | undefined;
}

/**
 * @public
 * <p>
 *       Container for the parameters to
 *       <code>
 *         <a>DescribeElasticsearchInstanceTypeLimits</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DescribeElasticsearchInstanceTypeLimitsRequest {
  /**
   * @public
   * <p>
   *       DomainName represents the name of the Domain that we are trying to
   *       modify. This should be present only if we are
   *       querying for Elasticsearch
   *       <code>
   *         <a>Limits</a>
   *       </code>
   *       for existing domain.
   *     </p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>
   *       The instance type for an Elasticsearch cluster for which Elasticsearch
   *       <code>
   *         <a>Limits</a>
   *       </code>
   *       are needed.
   *     </p>
   */
  InstanceType: ESPartitionInstanceType | undefined;

  /**
   * @public
   * <p>
   *       Version of Elasticsearch for which
   *       <code>
   *         <a>Limits</a>
   *       </code>
   *       are needed.
   *     </p>
   */
  ElasticsearchVersion: string | undefined;
}

/**
 * @public
 * <p>
 *       InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for
 *       given InstanceType.
 *     </p>
 */
export interface InstanceCountLimits {
  /**
   * @public
   * <p>
   *       Minimum number of Instances that can be instantiated for given InstanceType.
   *     </p>
   */
  MinimumInstanceCount?: number;

  /**
   * @public
   * <p>
   *       Maximum number of Instances that can be instantiated for given InstanceType.
   *     </p>
   */
  MaximumInstanceCount?: number;
}

/**
 * @public
 * <p>InstanceLimits represents the list of instance related attributes that are available for given InstanceType.
 *     </p>
 */
export interface InstanceLimits {
  /**
   * @public
   * <p>
   *       InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for
   *       given InstanceType.
   *     </p>
   */
  InstanceCountLimits?: InstanceCountLimits;
}

/**
 * @public
 * <p>Limits that are applicable for given storage type.
 *     </p>
 */
export interface StorageTypeLimit {
  /**
   * @public
   * <p>
   *     Name of storage limits that are applicable for given storage type.
   *     If
   *     <code>
   *       <a>StorageType</a>
   *     </code>
   *     is ebs, following storage options are applicable
   *     <ol>
   *       <li>MinimumVolumeSize</li>
   *       Minimum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable.
   *       <li>MaximumVolumeSize</li>
   *       Maximum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable.
   *       <li>MaximumIops</li>
   *       Maximum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable.
   *       <li>MinimumIops</li>
   *       Minimum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable.
   *       <li>MaximumThroughput</li>
   *       Maximum amount of Throughput that is applicable for given storage type.It can be empty if it is not applicable.
   *       <li>MinimumThroughput</li>
   *       Minimum amount of Throughput that is applicable for given storage type.It can be empty if it is not applicable.
   *     </ol>
   *   </p>
   */
  LimitName?: string;

  /**
   * @public
   * <p>
   *       Values for the
   *       <code>
   *         <a>StorageTypeLimit$LimitName</a>
   *       </code>
   *       .
   *     </p>
   */
  LimitValues?: string[];
}

/**
 * @public
 * <p>StorageTypes represents the list of storage related types and their attributes
 *       that are available for given InstanceType.
 *     </p>
 */
export interface StorageType {
  /**
   * @public
   * <p>
   *   Type of the storage.
   *   List of available storage options:
   *   <ol>
   *     <li>instance</li> Inbuilt storage available for the given Instance
   *     <li>ebs</li> Elastic block storage that would be attached to the given Instance
   *   </ol>
   *     </p>
   */
  StorageTypeName?: string;

  /**
   * @public
   * <p>
   *       SubType of the given storage type.
   *       List of available sub-storage options:
   *       For "instance" storageType we wont have any storageSubType,
   *       in case of "ebs" storageType we will have following valid storageSubTypes
   *       <ol>
   *         <li>standard</li>
   *         <li>gp2</li>
   *         <li>gp3</li>
   *         <li>io1</li>
   *       </ol>
   *       Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options.
   *     </p>
   */
  StorageSubTypeName?: string;

  /**
   * @public
   * <p>List of limits that are applicable for given storage type.
   *     </p>
   */
  StorageTypeLimits?: StorageTypeLimit[];
}

/**
 * @public
 * <p>
 *       Limits for given InstanceType and for each of it's role.
 *       <br></br>
 *       Limits contains following
 *       <code>
 *         <a>StorageTypes,</a>
 *       </code>
 *       <code>
 *         <a>InstanceLimits</a>
 *       </code>
 *       and
 *       <code>
 *         <a>AdditionalLimits</a>
 *       </code>
 *     </p>
 */
export interface Limits {
  /**
   * @public
   * <p>StorageType represents the list of storage related types and attributes
   *       that are available for given InstanceType.
   *     </p>
   */
  StorageTypes?: StorageType[];

  /**
   * @public
   * <p>InstanceLimits represents the list of instance related attributes that are available for given InstanceType.
   *     </p>
   */
  InstanceLimits?: InstanceLimits;

  /**
   * @public
   * <p>
   *       List of additional limits that are specific to a given InstanceType and for each of it's
   *       <code>
   *         <a>InstanceRole</a>
   *       </code>
   *       .
   *     </p>
   */
  AdditionalLimits?: AdditionalLimit[];
}

/**
 * @public
 * <p>
 *       Container for the parameters received from
 *       <code>
 *         <a>DescribeElasticsearchInstanceTypeLimits</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DescribeElasticsearchInstanceTypeLimitsResponse {
  /**
   * @public
   * <p>
   *       Map of Role of the Instance and Limits that are applicable.
   *       Role performed by given Instance in Elasticsearch
   *       can be one of the following:
   *       <ul>
   *         <li>data: If the given InstanceType is used as data node</li>
   *         <li>master: If the given InstanceType is used as master node</li>
   *         <li>ultra_warm: If the given InstanceType is used as warm node</li>
   *       </ul>
   *     </p>
   */
  LimitsByRole?: Record<string, Limits>;
}

/**
 * @public
 * <p>
 *       A filter used to limit results when describing inbound or outbound cross-cluster search connections.
 *       Multiple values can be specified per filter.
 *       A cross-cluster search connection must match at least one of the specified values for it to be
 *       returned from an operation.
 *     </p>
 */
export interface Filter {
  /**
   * @public
   * <p>
   *       Specifies the name of the filter.
   *     </p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *       Contains one or more values for the filter.
   *     </p>
   */
  Values?: string[];
}

/**
 * @public
 * <p>Container for the parameters to the <code><a>DescribeInboundCrossClusterSearchConnections</a></code> operation.</p>
 */
export interface DescribeInboundCrossClusterSearchConnectionsRequest {
  /**
   * @public
   * <p>
   *       A list of filters used to match properties for inbound cross-cluster search connection.
   *       Available <code><a>Filter</a></code> names for this operation are:
   *       <ul>
   *         <li>cross-cluster-search-connection-id</li>
   *         <li>source-domain-info.domain-name</li>
   *         <li>source-domain-info.owner-id</li>
   *         <li>source-domain-info.region</li>
   *         <li>destination-domain-info.domain-name</li>
   *       </ul>
   *     </p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p> NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The result of a <code><a>DescribeInboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria.</p>
 */
export interface DescribeInboundCrossClusterSearchConnectionsResponse {
  /**
   * @public
   * <p>Consists of list of <code><a>InboundCrossClusterSearchConnection</a></code> matching the specified filter criteria.</p>
   */
  CrossClusterSearchConnections?: InboundCrossClusterSearchConnection[];

  /**
   * @public
   * <p>If more results are available and NextToken is present, make the next request to the same API with the received NextToken to paginate the remaining results.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The request processing has failed because of invalid pagination token provided by customer. Returns an HTTP status code of 400. </p>
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
 * <p>Container for the parameters to the <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> operation.</p>
 */
export interface DescribeOutboundCrossClusterSearchConnectionsRequest {
  /**
   * @public
   * <p>
   *       A list of filters used to match properties for outbound cross-cluster search connection.
   *       Available <code><a>Filter</a></code> names for this operation are:
   *       <ul>
   *         <li>cross-cluster-search-connection-id</li>
   *         <li>destination-domain-info.domain-name</li>
   *         <li>destination-domain-info.owner-id</li>
   *         <li>destination-domain-info.region</li>
   *         <li>source-domain-info.domain-name</li>
   *       </ul>
   *     </p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p> NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The result of a <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria.</p>
 */
export interface DescribeOutboundCrossClusterSearchConnectionsResponse {
  /**
   * @public
   * <p>Consists of list of <code><a>OutboundCrossClusterSearchConnection</a></code> matching the specified filter criteria.</p>
   */
  CrossClusterSearchConnections?: OutboundCrossClusterSearchConnection[];

  /**
   * @public
   * <p>If more results are available and NextToken is present, make the next request to the same API with the received NextToken to paginate the remaining results.
   *     </p>
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
 * <p>Filter to apply in <code>DescribePackage</code> response.</p>
 */
export interface DescribePackagesFilter {
  /**
   * @public
   * <p>Any field from <code>PackageDetails</code>.</p>
   */
  Name?: DescribePackagesFilterName;

  /**
   * @public
   * <p>A non-empty list of values for the specified field.</p>
   */
  Value?: string[];
}

/**
 * @public
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>DescribePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DescribePackagesRequest {
  /**
   * @public
   * <p>Only returns packages that match the <code>DescribePackagesFilterList</code> values.</p>
   */
  Filters?: DescribePackagesFilter[];

  /**
   * @public
   * <p>Limits results to a maximum number of packages.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>DescribePackages</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DescribePackagesResponse {
  /**
   * @public
   * <p>List of <code>PackageDetails</code> objects.</p>
   */
  PackageDetailsList?: PackageDetails[];

  NextToken?: string;
}

/**
 * @public
 * <p>Container for parameters to <code>DescribeReservedElasticsearchInstanceOfferings</code></p>
 */
export interface DescribeReservedElasticsearchInstanceOfferingsRequest {
  /**
   * @public
   * <p>The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.</p>
   */
  ReservedElasticsearchInstanceOfferingId?: string;

  /**
   * @public
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>NextToken should be sent in case if earlier API call produced result
   * 		containing NextToken. It is used for pagination.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ReservedElasticsearchInstancePaymentOption = {
  ALL_UPFRONT: "ALL_UPFRONT",
  NO_UPFRONT: "NO_UPFRONT",
  PARTIAL_UPFRONT: "PARTIAL_UPFRONT",
} as const;

/**
 * @public
 */
export type ReservedElasticsearchInstancePaymentOption =
  (typeof ReservedElasticsearchInstancePaymentOption)[keyof typeof ReservedElasticsearchInstancePaymentOption];

/**
 * @public
 * <p>Contains the specific price and frequency of a recurring charges for a reserved Elasticsearch instance, or for a reserved Elasticsearch instance offering.</p>
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
 * <p>Details of a reserved Elasticsearch instance offering.</p>
 */
export interface ReservedElasticsearchInstanceOffering {
  /**
   * @public
   * <p>The Elasticsearch reserved instance offering identifier.</p>
   */
  ReservedElasticsearchInstanceOfferingId?: string;

  /**
   * @public
   * <p>The Elasticsearch instance type offered by the reserved instance offering.</p>
   */
  ElasticsearchInstanceType?: ESPartitionInstanceType;

  /**
   * @public
   * <p>The duration, in seconds, for which the offering will reserve the Elasticsearch instance.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The upfront fixed charge you will pay to purchase the specific reserved Elasticsearch instance offering. </p>
   */
  FixedPrice?: number;

  /**
   * @public
   * <p>The rate you are charged for each hour the domain that is using the offering is running.</p>
   */
  UsagePrice?: number;

  /**
   * @public
   * <p>The currency code for the reserved Elasticsearch instance offering.</p>
   */
  CurrencyCode?: string;

  /**
   * @public
   * <p>Payment option for the reserved Elasticsearch instance offering</p>
   */
  PaymentOption?: ReservedElasticsearchInstancePaymentOption;

  /**
   * @public
   * <p>The charge to your account regardless of whether you are creating any domains using the instance offering.</p>
   */
  RecurringCharges?: RecurringCharge[];
}

/**
 * @public
 * <p>Container for results from <code>DescribeReservedElasticsearchInstanceOfferings</code></p>
 */
export interface DescribeReservedElasticsearchInstanceOfferingsResponse {
  /**
   * @public
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>List of reserved Elasticsearch instance offerings</p>
   */
  ReservedElasticsearchInstanceOfferings?: ReservedElasticsearchInstanceOffering[];
}

/**
 * @public
 * <p>Container for parameters to <code>DescribeReservedElasticsearchInstances</code></p>
 */
export interface DescribeReservedElasticsearchInstancesRequest {
  /**
   * @public
   * <p>The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the specified reserved Elasticsearch instance ID.</p>
   */
  ReservedElasticsearchInstanceId?: string;

  /**
   * @public
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>NextToken should be sent in case if earlier API call produced result
   * 		containing NextToken. It is used for pagination.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Details of a reserved Elasticsearch instance.</p>
 */
export interface ReservedElasticsearchInstance {
  /**
   * @public
   * <p>The customer-specified identifier to track this reservation.</p>
   */
  ReservationName?: string;

  /**
   * @public
   * <p>The unique identifier for the reservation.</p>
   */
  ReservedElasticsearchInstanceId?: string;

  /**
   * @public
   * <p>The offering identifier.</p>
   */
  ReservedElasticsearchInstanceOfferingId?: string;

  /**
   * @public
   * <p>The Elasticsearch instance type offered by the reserved instance offering.</p>
   */
  ElasticsearchInstanceType?: ESPartitionInstanceType;

  /**
   * @public
   * <p>The time the reservation started.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The duration, in seconds, for which the Elasticsearch instance is reserved.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The upfront fixed charge you will paid to purchase the specific reserved Elasticsearch instance offering. </p>
   */
  FixedPrice?: number;

  /**
   * @public
   * <p>The rate you are charged for each hour for the domain that is using this reserved instance.</p>
   */
  UsagePrice?: number;

  /**
   * @public
   * <p>The currency code for the reserved Elasticsearch instance offering.</p>
   */
  CurrencyCode?: string;

  /**
   * @public
   * <p>The number of Elasticsearch instances that have been reserved.</p>
   */
  ElasticsearchInstanceCount?: number;

  /**
   * @public
   * <p>The state of the reserved Elasticsearch instance.</p>
   */
  State?: string;

  /**
   * @public
   * <p>The payment option as defined in the reserved Elasticsearch instance offering.</p>
   */
  PaymentOption?: ReservedElasticsearchInstancePaymentOption;

  /**
   * @public
   * <p>The charge to your account regardless of whether you are creating any domains using the instance offering.</p>
   */
  RecurringCharges?: RecurringCharge[];
}

/**
 * @public
 * <p>Container for results from <code>DescribeReservedElasticsearchInstances</code></p>
 */
export interface DescribeReservedElasticsearchInstancesResponse {
  /**
   * @public
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>List of reserved Elasticsearch instances.</p>
   */
  ReservedElasticsearchInstances?: ReservedElasticsearchInstance[];
}

/**
 * @public
 * <p>Container for request parameters to the <code><a>DescribeVpcEndpoints</a></code> operation. Specifies the list of VPC endpoints to be described.</p>
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
   * <p>The unique identifier of the endpoint. </p>
   */
  VpcEndpointId?: string;

  /**
   * @public
   * <p>The code associated with the error.</p>
   */
  ErrorCode?: VpcEndpointErrorCode;

  /**
   * @public
   * <p>A message describing the error.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * <p>Container for response parameters to the <code><a>DescribeVpcEndpoints</a></code> operation. Returns a list containing configuration details and
 *           status of the VPC Endpoints as well as a list containing error responses of the endpoints that could not be described</p>
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
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>DissociatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DissociatePackageRequest {
  /**
   * @public
   * <p>Internal ID of the package that you want to associate with a domain. Use <code>DescribePackages</code> to find this value.</p>
   */
  PackageID: string | undefined;

  /**
   * @public
   * <p>Name of the domain that you want to associate the package with.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>DissociatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DissociatePackageResponse {
  /**
   * @public
   * <p><code>DomainPackageDetails</code></p>
   */
  DomainPackageDetails?: DomainPackageDetails;
}

/**
 * @public
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>GetCompatibleElasticsearchVersions</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetCompatibleElasticsearchVersionsRequest {
  /**
   * @public
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName?: string;
}

/**
 * @public
 * <p>
 *       A map from an
 *       <code>
 *         <a>ElasticsearchVersion</a>
 *       </code>
 *       to a list of compatible
 *       <code>
 *         <a>ElasticsearchVersion</a>
 *       </code>
 *       s to which the domain can be upgraded.
 *     </p>
 */
export interface CompatibleVersionsMap {
  /**
   * @public
   * <p>The current version of Elasticsearch on which a domain is.</p>
   */
  SourceVersion?: string;

  /**
   * @public
   * <p>List of supported elastic search versions.
   *     </p>
   */
  TargetVersions?: string[];
}

/**
 * @public
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>GetCompatibleElasticsearchVersions</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetCompatibleElasticsearchVersionsResponse {
  /**
   * @public
   * <p>
   *       A map of compatible Elasticsearch versions returned as part of the
   *       <code>
   *         <a>GetCompatibleElasticsearchVersions</a>
   *       </code>
   *       operation.
   *     </p>
   */
  CompatibleElasticsearchVersions?: CompatibleVersionsMap[];
}

/**
 * @public
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>GetPackageVersionHistory</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetPackageVersionHistoryRequest {
  /**
   * @public
   * <p>Returns an audit history of versions of the package.</p>
   */
  PackageID: string | undefined;

  /**
   * @public
   * <p>Limits results to a maximum number of versions.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Details of a package version.</p>
 */
export interface PackageVersionHistory {
  /**
   * @public
   * <p>Version of the package.</p>
   */
  PackageVersion?: string;

  /**
   * @public
   * <p>A message associated with the version.</p>
   */
  CommitMessage?: string;

  /**
   * @public
   * <p>Timestamp which tells creation time of the package version.</p>
   */
  CreatedAt?: Date;
}

/**
 * @public
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>GetPackageVersionHistory</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetPackageVersionHistoryResponse {
  PackageID?: string;
  /**
   * @public
   * <p>List of <code>PackageVersionHistory</code> objects.</p>
   */
  PackageVersionHistoryList?: PackageVersionHistory[];

  NextToken?: string;
}

/**
 * @public
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>GetUpgradeHistory</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetUpgradeHistoryRequest {
  /**
   * @public
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>
   *       Set this value to limit the number of results returned.
   *     </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>
   *       Paginated APIs accepts NextToken input to returns next page results and provides
   *       a NextToken output in the response which can be used by the client to retrieve more results.
   *     </p>
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
 * <p>Represents a single step of the Upgrade or Upgrade Eligibility Check workflow.</p>
 */
export interface UpgradeStepItem {
  /**
   * @public
   * <p>
   *       Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through:
   *       <ul>
   *         <li>PreUpgradeCheck</li>
   *         <li>Snapshot</li>
   *         <li>Upgrade</li>
   *       </ul>
   *     </p>
   */
  UpgradeStep?: UpgradeStep;

  /**
   * @public
   * <p>
   *       The status of a particular step during an upgrade. The status can take one of the following values:
   *       <ul>
   *         <li>In Progress</li>
   *         <li>Succeeded</li>
   *         <li>Succeeded with Issues</li>
   *         <li>Failed</li>
   *       </ul>
   *     </p>
   */
  UpgradeStepStatus?: UpgradeStatus;

  /**
   * @public
   * <p>A list of strings containing detailed information about the errors encountered in a particular step.</p>
   */
  Issues?: string[];

  /**
   * @public
   * <p>The Floating point value representing progress percentage of a particular step.</p>
   */
  ProgressPercent?: number;
}

/**
 * @public
 * <p>History of the last 10 Upgrades and Upgrade Eligibility Checks.</p>
 */
export interface UpgradeHistory {
  /**
   * @public
   * <p>A string that describes the update briefly</p>
   */
  UpgradeName?: string;

  /**
   * @public
   * <p>UTC Timestamp at which the Upgrade API call was made in "yyyy-MM-ddTHH:mm:ssZ" format.</p>
   */
  StartTimestamp?: Date;

  /**
   * @public
   * <p>
   *       The overall status of the update. The status can take one of the following values:
   *       <ul>
   *         <li>In Progress</li>
   *         <li>Succeeded</li>
   *         <li>Succeeded with Issues</li>
   *         <li>Failed</li>
   *       </ul>
   *     </p>
   */
  UpgradeStatus?: UpgradeStatus;

  /**
   * @public
   * <p>
   *       A list of
   *       <code>
   *         <a>UpgradeStepItem</a>
   *       </code>
   *       s representing information about each step performed as pard of a specific Upgrade or Upgrade Eligibility Check.
   *     </p>
   */
  StepsList?: UpgradeStepItem[];
}

/**
 * @public
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>GetUpgradeHistory</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetUpgradeHistoryResponse {
  /**
   * @public
   * <p>
   *       A list of
   *       <code>
   *         <a>UpgradeHistory</a>
   *       </code>
   *       objects corresponding to each Upgrade or Upgrade Eligibility Check performed on a domain returned as part of
   *       <code>
   *         <a>GetUpgradeHistoryResponse</a>
   *       </code>
   *       object.
   *     </p>
   */
  UpgradeHistories?: UpgradeHistory[];

  /**
   * @public
   * <p>Pagination token that needs to be supplied to the next call to get the next page of results</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>GetUpgradeStatus</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetUpgradeStatusRequest {
  /**
   * @public
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>GetUpgradeStatus</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetUpgradeStatusResponse {
  /**
   * @public
   * <p>
   *       Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through:
   *       <ul>
   *         <li>PreUpgradeCheck</li>
   *         <li>Snapshot</li>
   *         <li>Upgrade</li>
   *       </ul>
   *     </p>
   */
  UpgradeStep?: UpgradeStep;

  /**
   * @public
   * <p>
   *       One of 4 statuses that a step can go through returned as part of the
   *       <code>
   *         <a>GetUpgradeStatusResponse</a>
   *       </code>
   *       object. The status can take one of the following values:
   *       <ul>
   *         <li>In Progress</li>
   *         <li>Succeeded</li>
   *         <li>Succeeded with Issues</li>
   *         <li>Failed</li>
   *       </ul>
   *     </p>
   */
  StepStatus?: UpgradeStatus;

  /**
   * @public
   * <p>A string that describes the update briefly</p>
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
 * <p> Container for the parameters to the <code><a>ListDomainNames</a></code> operation.</p>
 */
export interface ListDomainNamesRequest {
  /**
   * @public
   * <p> Optional parameter to filter the output by domain engine type. Acceptable values are 'Elasticsearch' and 'OpenSearch'. </p>
   */
  EngineType?: EngineType;
}

/**
 * @public
 */
export interface DomainInfo {
  /**
   * @public
   * <p> Specifies the <code>DomainName</code>.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p> Specifies the <code>EngineType</code> of the domain.</p>
   */
  EngineType?: EngineType;
}

/**
 * @public
 * <p>The result of a <code>ListDomainNames</code> operation. Contains the names of all domains owned by this account and their respective engine types.</p>
 */
export interface ListDomainNamesResponse {
  /**
   * @public
   * <p>List of domain names and respective engine types.</p>
   */
  DomainNames?: DomainInfo[];
}

/**
 * @public
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>ListDomainsForPackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListDomainsForPackageRequest {
  /**
   * @public
   * <p>The package for which to list domains.</p>
   */
  PackageID: string | undefined;

  /**
   * @public
   * <p>Limits results to a maximum number of domains.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>
 *       Container for response parameters to
 *       <code>
 *         <a>ListDomainsForPackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListDomainsForPackageResponse {
  /**
   * @public
   * <p>List of <code>DomainPackageDetails</code> objects.</p>
   */
  DomainPackageDetailsList?: DomainPackageDetails[];

  NextToken?: string;
}

/**
 * @public
 * <p>
 *       Container for the parameters to the
 *       <code>
 *         <a>ListElasticsearchInstanceTypes</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListElasticsearchInstanceTypesRequest {
  /**
   * @public
   * <p>Version of Elasticsearch for which list of supported elasticsearch
   *       instance types are needed.
   *     </p>
   */
  ElasticsearchVersion: string | undefined;

  /**
   * @public
   * <p>DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are
   *       querying for list of available Elasticsearch instance types when modifying existing domain.
   *     </p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>
   *     Set this value to limit the number of results returned.
   *     Value provided must be greater than 30 else it wont be honored.
   *   </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>NextToken should be sent in case if earlier API call produced result
   *       containing NextToken. It is used for pagination.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>
 *       Container for the parameters returned by
 *       <code>
 *         <a>ListElasticsearchInstanceTypes</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListElasticsearchInstanceTypesResponse {
  /**
   * @public
   * <p>
   *       List of instance types supported by Amazon Elasticsearch service for
   *       given
   *       <code>
   *         <a>ElasticsearchVersion</a>
   *       </code>
   *     </p>
   */
  ElasticsearchInstanceTypes?: ESPartitionInstanceType[];

  /**
   * @public
   * <p>In case if there are more results available NextToken would be
   *       present, make further request to the same API with
   *       received NextToken to paginate remaining results.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>
 *       Container for the parameters to the
 *       <code>
 *         <a>ListElasticsearchVersions</a>
 *       </code>
 *       operation.
 *       <p>
 *         Use
 *         <code>
 *           <a>MaxResults</a>
 *         </code>
 *         to control the maximum number of results to retrieve in a single
 *         call.
 *       </p>
 *       <p>
 *         Use
 *         <code>
 *           <a>NextToken</a>
 *         </code>
 *         in response to retrieve more results. If the received response does
 *         not contain a NextToken, then there are no more results to retrieve.
 *       </p>
 *     </p>
 */
export interface ListElasticsearchVersionsRequest {
  /**
   * @public
   * <p>
   *       Set this value to limit the number of results returned.
   *       Value provided must be greater than 10 else it wont be honored.
   *     </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>
   *       Paginated APIs accepts NextToken input to returns next page results and provides
   *       a NextToken output in the response which can be used by the client to retrieve more results.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>
 *       Container for the parameters for response received from
 *       <code>
 *         <a>ListElasticsearchVersions</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListElasticsearchVersionsResponse {
  /**
   * @public
   * <p>List of supported elastic search versions.
   *     </p>
   */
  ElasticsearchVersions?: string[];

  /**
   * @public
   * <p>
   *       Paginated APIs accepts NextToken input to returns next page results and provides
   *       a NextToken output in the response which can be used by the client to retrieve more results.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>ListPackagesForDomain</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListPackagesForDomainRequest {
  /**
   * @public
   * <p>The name of the domain for which you want to list associated packages.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>Limits results to a maximum number of packages.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>
 *       Container for response parameters to
 *       <code>
 *         <a>ListPackagesForDomain</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListPackagesForDomainResponse {
  /**
   * @public
   * <p>List of <code>DomainPackageDetails</code> objects.</p>
   */
  DomainPackageDetailsList?: DomainPackageDetails[];

  /**
   * @public
   * <p>Pagination token that needs to be supplied to the next call to get the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Container for the parameters to the <code><a>ListTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view are attached.</p>
 */
export interface ListTagsRequest {
  /**
   * @public
   * <p> Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view.</p>
   */
  ARN: string | undefined;
}

/**
 * @public
 * <p>The result of a <code>ListTags</code> operation. Contains tags for all requested Elasticsearch domains.</p>
 */
export interface ListTagsResponse {
  /**
   * @public
   * <p> List of <code>Tag</code> for the requested Elasticsearch domain.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 * <p>Retrieves information about each principal that is allowed to access a
 *    given Amazon OpenSearch Service domain through the use of an interface VPC endpoint</p>
 */
export interface ListVpcEndpointAccessRequest {
  /**
   * @public
   * <p>The name of the OpenSearch Service domain to retrieve access information for.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Container for response parameters to the <code><a>ListVpcEndpointAccess</a></code> operation.
 *           Returns a list of accounts id and account type authorized to manage VPC endpoints.</p>
 */
export interface ListVpcEndpointAccessResponse {
  /**
   * @public
   * <p>List of <code>AuthorizedPrincipal</code> describing the details of the permissions to manage VPC endpoints against the specified domain.</p>
   */
  AuthorizedPrincipalList: AuthorizedPrincipal[] | undefined;

  /**
   * @public
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken: string | undefined;
}

/**
 * @public
 * <p>Container for request parameters to the <code><a>ListVpcEndpoints</a></code> operation.</p>
 */
export interface ListVpcEndpointsRequest {
  /**
   * @public
   * <p>Identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Container for response parameters to the <code><a>ListVpcEndpoints</a></code> operation. Returns a list containing summarized details of the VPC endpoints.</p>
 */
export interface ListVpcEndpointsResponse {
  /**
   * @public
   * <p>Information about each endpoint.</p>
   */
  VpcEndpointSummaryList: VpcEndpointSummary[] | undefined;

  /**
   * @public
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken: string | undefined;
}

/**
 * @public
 * <p>Container for request parameters to the <code><a>ListVpcEndpointsForDomain</a></code> operation. Specifies the domain whose VPC endpoints will be listed.</p>
 */
export interface ListVpcEndpointsForDomainRequest {
  /**
   * @public
   * <p>Name of the ElasticSearch domain whose VPC endpoints are to be listed.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Container for response parameters to the <code><a>ListVpcEndpointsForDomain</a></code> operation. Returns a list containing summarized details of the VPC endpoints.</p>
 */
export interface ListVpcEndpointsForDomainResponse {
  /**
   * @public
   * <p>Provides list of <code>VpcEndpointSummary</code> summarizing details of the VPC endpoints.</p>
   */
  VpcEndpointSummaryList: VpcEndpointSummary[] | undefined;

  /**
   * @public
   * <p>Information about each endpoint associated with the domain.</p>
   */
  NextToken: string | undefined;
}

/**
 * @public
 * <p>Container for parameters to <code>PurchaseReservedElasticsearchInstanceOffering</code></p>
 */
export interface PurchaseReservedElasticsearchInstanceOfferingRequest {
  /**
   * @public
   * <p>The ID of the reserved Elasticsearch instance offering to purchase.</p>
   */
  ReservedElasticsearchInstanceOfferingId: string | undefined;

  /**
   * @public
   * <p>A customer-specified identifier to track this reservation.</p>
   */
  ReservationName: string | undefined;

  /**
   * @public
   * <p>The number of Elasticsearch instances to reserve.</p>
   */
  InstanceCount?: number;
}

/**
 * @public
 * <p>Represents the output of a <code>PurchaseReservedElasticsearchInstanceOffering</code> operation.</p>
 */
export interface PurchaseReservedElasticsearchInstanceOfferingResponse {
  /**
   * @public
   * <p>Details of the reserved Elasticsearch instance which was purchased.</p>
   */
  ReservedElasticsearchInstanceId?: string;

  /**
   * @public
   * <p>The customer-specified identifier used to track this reservation.</p>
   */
  ReservationName?: string;
}

/**
 * @public
 * <p>Container for the parameters to the <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation.</p>
 */
export interface RejectInboundCrossClusterSearchConnectionRequest {
  /**
   * @public
   * <p>The id of the inbound connection that you want to reject.</p>
   */
  CrossClusterSearchConnectionId: string | undefined;
}

/**
 * @public
 * <p>The result of a <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation. Contains details of rejected inbound connection.</p>
 */
export interface RejectInboundCrossClusterSearchConnectionResponse {
  /**
   * @public
   * <p>Specifies the <code><a>InboundCrossClusterSearchConnection</a></code> of rejected inbound connection. </p>
   */
  CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
}

/**
 * @public
 * <p>Container for the parameters to the <code><a>RemoveTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain from which you want to remove the specified <code>TagKey</code>.</p>
 */
export interface RemoveTagsRequest {
  /**
   * @public
   * <p>Specifies the <code>ARN</code> for the Elasticsearch domain from which you want to delete the specified tags.</p>
   */
  ARN: string | undefined;

  /**
   * @public
   * <p>Specifies the <code>TagKey</code> list which you want to remove from the Elasticsearch domain.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 * <p>Revokes access to an Amazon OpenSearch Service domain that was provided through an interface
 *    VPC endpoint.</p>
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
 * <p>Container for response parameters to the <code><a>RevokeVpcEndpointAccess</a></code> operation. The response body for this operation is empty.</p>
 */
export interface RevokeVpcEndpointAccessResponse {}

/**
 * @public
 * <p>Container for the parameters to the <code><a>StartElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to schedule a service software update on.</p>
 */
export interface StartElasticsearchServiceSoftwareUpdateRequest {
  /**
   * @public
   * <p>The name of the domain that you want to update to the latest service software.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * <p>The result of a <code>StartElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update.</p>
 */
export interface StartElasticsearchServiceSoftwareUpdateResponse {
  /**
   * @public
   * <p>The current status of the Elasticsearch service software update.</p>
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}

/**
 * @public
 * <p>Container for the parameters to the <code><a>UpdateElasticsearchDomain</a></code> operation. Specifies the type and number of instances in the domain cluster.</p>
 */
export interface UpdateElasticsearchDomainConfigRequest {
  /**
   * @public
   * <p>The name of the Elasticsearch domain that you are updating. </p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The type and number of instances to instantiate for the domain cluster.</p>
   */
  ElasticsearchClusterConfig?: ElasticsearchClusterConfig;

  /**
   * @public
   * <p>Specify the type and size of the EBS volume that you want to use. </p>
   */
  EBSOptions?: EBSOptions;

  /**
   * @public
   * <p>Option to set the time, in UTC format, for the daily automated snapshot. Default value is <code>0</code> hours. </p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * @public
   * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-creating-vpc" target="_blank">Creating a VPC</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i></p>
   */
  VPCOptions?: VPCOptions;

  /**
   * @public
   * <p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * @public
   * <p>Modifies the advanced option to allow references to indices in an HTTP request body.  Must be <code>false</code> when configuring access to individual sub-resources.  By default, the value is <code>true</code>.
   *        See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</p>
   */
  AdvancedOptions?: Record<string, string>;

  /**
   * @public
   * <p>IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: string;

  /**
   * @public
   * <p>Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.</p>
   */
  LogPublishingOptions?: Record<LogType, LogPublishingOption>;

  /**
   * @public
   * <p>Options to specify configuration that will be applied to the domain endpoint.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * @public
   * <p>Specifies advanced security options.</p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;

  /**
   * @public
   * <p>Specifies the NodeToNodeEncryptionOptions.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * @public
   * <p>Specifies the Encryption At Rest Options.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * @public
   * <p>Specifies Auto-Tune options.</p>
   */
  AutoTuneOptions?: AutoTuneOptions;

  /**
   * @public
   * <p>
   *            This flag, when set to True, specifies whether the <code>UpdateElasticsearchDomain</code> request should return the results of validation checks without actually applying the change.
   *            This flag, when set to True, specifies the deployment mechanism through which the update shall be applied on the domain.
   *            This will not actually perform the Update.
   *        </p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface DryRunResults {
  /**
   * @public
   * <p>
   *             Specifies the deployment mechanism through which the update shall be applied on the domain.
   *             Possible responses are
   *             <code>Blue/Green</code> (The update will require a blue/green deployment.)
   *             <code>DynamicUpdate</code> (The update can be applied in-place without a Blue/Green deployment required.)
   *             <code>Undetermined</code> (The domain is undergoing an update which needs to complete before the deployment type can be predicted.)
   *             <code>None</code> (The configuration change matches the current configuration and will not result in any update.)
   *         </p>
   */
  DeploymentType?: string;

  /**
   * @public
   * <p>Contains an optional message associated with the DryRunResults.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The result of an <code>UpdateElasticsearchDomain</code> request. Contains the status of the Elasticsearch domain being updated.</p>
 */
export interface UpdateElasticsearchDomainConfigResponse {
  /**
   * @public
   * <p>The status of the updated Elasticsearch domain. </p>
   */
  DomainConfig: ElasticsearchDomainConfig | undefined;

  /**
   * @public
   * <p>Contains result of DryRun. </p>
   */
  DryRunResults?: DryRunResults;
}

/**
 * @public
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>UpdatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface UpdatePackageRequest {
  /**
   * @public
   * <p>Unique identifier for the package.</p>
   */
  PackageID: string | undefined;

  /**
   * @public
   * <p>The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code></p>
   */
  PackageSource: PackageSource | undefined;

  /**
   * @public
   * <p>New description of the package.</p>
   */
  PackageDescription?: string;

  /**
   * @public
   * <p>An info message for the new version which will be shown as part of <code>GetPackageVersionHistoryResponse</code>.</p>
   */
  CommitMessage?: string;
}

/**
 * @public
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>UpdatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface UpdatePackageResponse {
  /**
   * @public
   * <p>Information about the package <code>PackageDetails</code>.</p>
   */
  PackageDetails?: PackageDetails;
}

/**
 * @public
 * <p>Modifies an Amazon OpenSearch Service-managed interface VPC endpoint.</p>
 */
export interface UpdateVpcEndpointRequest {
  /**
   * @public
   * <p>Unique identifier of the VPC endpoint to be updated.</p>
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
 * <p>Contains the configuration and status of the VPC endpoint being updated.</p>
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
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>UpgradeElasticsearchDomain</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface UpgradeElasticsearchDomainRequest {
  /**
   * @public
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The version of Elasticsearch that you intend to upgrade the domain to.</p>
   */
  TargetVersion: string | undefined;

  /**
   * @public
   * <p>
   *       This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed.
   *       This will not actually perform the Upgrade.
   *     </p>
   */
  PerformCheckOnly?: boolean;
}

/**
 * @public
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>UpgradeElasticsearchDomain</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface UpgradeElasticsearchDomainResponse {
  /**
   * @public
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>The version of Elasticsearch that you intend to upgrade the domain to.</p>
   */
  TargetVersion?: string;

  /**
   * @public
   * <p>
   *       This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed.
   *       This will not actually perform the Upgrade.
   *     </p>
   */
  PerformCheckOnly?: boolean;

  /**
   * @public
   * <p>Specifies change details of the domain configuration change.</p>
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
export const CreateElasticsearchDomainRequestFilterSensitiveLog = (obj: CreateElasticsearchDomainRequest): any => ({
  ...obj,
  ...(obj.AdvancedSecurityOptions && {
    AdvancedSecurityOptions: AdvancedSecurityOptionsInputFilterSensitiveLog(obj.AdvancedSecurityOptions),
  }),
});

/**
 * @internal
 */
export const UpdateElasticsearchDomainConfigRequestFilterSensitiveLog = (
  obj: UpdateElasticsearchDomainConfigRequest
): any => ({
  ...obj,
  ...(obj.AdvancedSecurityOptions && {
    AdvancedSecurityOptions: AdvancedSecurityOptionsInputFilterSensitiveLog(obj.AdvancedSecurityOptions),
  }),
});
