import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Container for the parameters to the <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation.</p>
 */
export interface AcceptInboundCrossClusterSearchConnectionRequest {
  /**
   * <p>The id of the inbound connection that you want to accept.</p>
   */
  CrossClusterSearchConnectionId: string | undefined;
}

export namespace AcceptInboundCrossClusterSearchConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptInboundCrossClusterSearchConnectionRequest): any => ({
    ...obj,
  });
}

export enum InboundCrossClusterSearchConnectionStatusCode {
  APPROVED = "APPROVED",
  DELETED = "DELETED",
  DELETING = "DELETING",
  PENDING_ACCEPTANCE = "PENDING_ACCEPTANCE",
  REJECTED = "REJECTED",
  REJECTING = "REJECTING",
}

/**
 * <p>Specifies the coonection status of an inbound cross-cluster search connection.</p>
 */
export interface InboundCrossClusterSearchConnectionStatus {
  /**
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
  StatusCode?: InboundCrossClusterSearchConnectionStatusCode | string;

  /**
   * <p>Specifies verbose information for the inbound connection status.</p>
   */
  Message?: string;
}

export namespace InboundCrossClusterSearchConnectionStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InboundCrossClusterSearchConnectionStatus): any => ({
    ...obj,
  });
}

export interface DomainInformation {
  OwnerId?: string;
  /**
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  Region?: string;
}

export namespace DomainInformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainInformation): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies details of an inbound connection.</p>
 */
export interface InboundCrossClusterSearchConnection {
  /**
   * <p>Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.</p>
   */
  SourceDomainInfo?: DomainInformation;

  /**
   * <p>Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.</p>
   */
  DestinationDomainInfo?: DomainInformation;

  /**
   * <p>Specifies the connection id for the inbound cross-cluster search connection.</p>
   */
  CrossClusterSearchConnectionId?: string;

  /**
   * <p>Specifies the <code><a>InboundCrossClusterSearchConnectionStatus</a></code> for the outbound connection.</p>
   */
  ConnectionStatus?: InboundCrossClusterSearchConnectionStatus;
}

export namespace InboundCrossClusterSearchConnection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InboundCrossClusterSearchConnection): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation. Contains details of accepted inbound connection.</p>
 */
export interface AcceptInboundCrossClusterSearchConnectionResponse {
  /**
   * <p>Specifies the <code><a>InboundCrossClusterSearchConnection</a></code> of accepted inbound connection. </p>
   */
  CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
}

export namespace AcceptInboundCrossClusterSearchConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptInboundCrossClusterSearchConnectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 */
export interface DisabledOperationException extends __SmithyException, $MetadataBearer {
  name: "DisabledOperationException";
  $fault: "client";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace DisabledOperationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisabledOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>An error occurred because user does not have permissions to access the resource. Returns HTTP status code 403.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export type OptionState = "Active" | "Processing" | "RequiresIndexDocuments";

/**
 * <p>Provides the current status of the entity.</p>
 */
export interface OptionStatus {
  /**
   * <p>Timestamp which tells the creation date for the entity.</p>
   */
  CreationDate: Date | undefined;

  /**
   * <p>Timestamp which tells the last updated time for the entity.</p>
   */
  UpdateDate: Date | undefined;

  /**
   * <p>Specifies the latest version for the entity.</p>
   */
  UpdateVersion?: number;

  /**
   * <p>Provides the <code>OptionState</code> for the Elasticsearch domain.</p>
   */
  State: OptionState | string | undefined;

  /**
   * <p>Indicates whether the Elasticsearch domain is being deleted.</p>
   */
  PendingDeletion?: boolean;
}

export namespace OptionStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptionStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The configured access rules for the domain's document and search endpoints, and the current status of those rules.</p>
 */
export interface AccessPoliciesStatus {
  /**
   * <p>The access policy configured for the Elasticsearch domain.  Access policies may be resource-based, IP-based, or IAM-based.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">
   *            Configuring Access Policies</a>for more information.</p>
   */
  Options: string | undefined;

  /**
   * <p>The status of the access policy for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>
   */
  Status: OptionStatus | undefined;
}

export namespace AccessPoliciesStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessPoliciesStatus): any => ({
    ...obj,
  });
}

/**
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

export namespace AdditionalLimit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdditionalLimit): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a key value pair for a resource tag.</p>
 */
export interface Tag {
  /**
   * <p>Specifies the <code>TagKey</code>, the name of the tag.  Tag keys must be unique for the Elasticsearch domain to which they are attached.</p>
   */
  Key: string | undefined;

  /**
   * <p>Specifies the <code>TagValue</code>, the value assigned to the corresponding tag key.  Tag values can be null and do not have to be unique in a tag set.  For example, you can have a key value
   *        pair in a tag set of <code>project : Trinity</code> and <code>cost-center : Trinity</code></p>
   */
  Value: string | undefined;
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
 * <p>Container for the parameters to the <code><a>AddTags</a></code> operation. Specify the tags that you want to attach to the Elasticsearch domain.</p>
 */
export interface AddTagsRequest {
  /**
   * <p> Specify the <code>ARN</code> for which you want to add the tags.</p>
   */
  ARN: string | undefined;

  /**
   * <p> List of <code>Tag</code> that need to be added for the Elasticsearch domain. </p>
   */
  TagList: Tag[] | undefined;
}

export namespace AddTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddTagsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An error occurred while processing the request.</p>
 */
export interface BaseException extends __SmithyException, $MetadataBearer {
  name: "BaseException";
  $fault: "client";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace BaseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BaseException): any => ({
    ...obj,
  });
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 */
export interface InternalException extends __SmithyException, $MetadataBearer {
  name: "InternalException";
  $fault: "server";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace InternalException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalException): any => ({
    ...obj,
  });
}

/**
 * <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

/**
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
   * <p> Specifies the status of advanced options for the specified Elasticsearch domain.</p>
   */
  Options: { [key: string]: string } | undefined;

  /**
   * <p> Specifies the status of <code>OptionStatus</code> for advanced options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace AdvancedOptionsStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdvancedOptionsStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the SAML Identity Provider's information.</p>
 */
export interface SAMLIdp {
  /**
   * <p>The Metadata of the SAML application in xml format.</p>
   */
  MetadataContent: string | undefined;

  /**
   * <p>The unique Entity ID of the application in SAML Identity Provider.</p>
   */
  EntityId: string | undefined;
}

export namespace SAMLIdp {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SAMLIdp): any => ({
    ...obj,
  });
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
   * <p>Describes the SAML Identity Provider's information.</p>
   */
  Idp?: SAMLIdp;

  /**
   * <p>The key used for matching the SAML Subject attribute.</p>
   */
  SubjectKey?: string;

  /**
   * <p>The key used for matching the SAML Roles attribute.</p>
   */
  RolesKey?: string;

  /**
   * <p>The duration, in minutes, after which a user session becomes inactive.</p>
   */
  SessionTimeoutMinutes?: number;
}

export namespace SAMLOptionsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SAMLOptionsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled.</p>
 */
export interface AdvancedSecurityOptions {
  /**
   * <p>True if advanced security is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>True if the internal user database is enabled.</p>
   */
  InternalUserDatabaseEnabled?: boolean;

  /**
   * <p>Describes the SAML application configured for a domain.</p>
   */
  SAMLOptions?: SAMLOptionsOutput;
}

export namespace AdvancedSecurityOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdvancedSecurityOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Credentials for the master user: username and password, ARN, or both.</p>
 */
export interface MasterUserOptions {
  /**
   * <p>ARN for the master user (if IAM is enabled).</p>
   */
  MasterUserARN?: string;

  /**
   * <p>The master user's username, which is stored in the Amazon Elasticsearch Service domain's internal database.</p>
   */
  MasterUserName?: string;

  /**
   * <p>The master user's password, which is stored in the Amazon Elasticsearch Service domain's internal database.</p>
   */
  MasterUserPassword?: string;
}

export namespace MasterUserOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MasterUserOptions): any => ({
    ...obj,
    ...(obj.MasterUserName && { MasterUserName: SENSITIVE_STRING }),
    ...(obj.MasterUserPassword && { MasterUserPassword: SENSITIVE_STRING }),
  });
}

/**
 * <p>Specifies the SAML application configuration for the domain.</p>
 */
export interface SAMLOptionsInput {
  /**
   * <p>True if SAML is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Specifies the SAML Identity Provider's information.</p>
   */
  Idp?: SAMLIdp;

  /**
   * <p>The SAML master username, which is stored in the Amazon Elasticsearch Service domain's internal database.</p>
   */
  MasterUserName?: string;

  /**
   * <p>The backend role to which the SAML master user is mapped to.</p>
   */
  MasterBackendRole?: string;

  /**
   * <p>The key to use for matching the SAML Subject attribute.</p>
   */
  SubjectKey?: string;

  /**
   * <p>The key to use for matching the SAML Roles attribute.</p>
   */
  RolesKey?: string;

  /**
   * <p>The duration, in minutes, after which a user session becomes inactive. Acceptable values are between 1 and 1440, and the default value is 60.</p>
   */
  SessionTimeoutMinutes?: number;
}

export namespace SAMLOptionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SAMLOptionsInput): any => ({
    ...obj,
    ...(obj.MasterUserName && { MasterUserName: SENSITIVE_STRING }),
  });
}

/**
 * <p>Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled).</p>
 */
export interface AdvancedSecurityOptionsInput {
  /**
   * <p>True if advanced security is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>True if the internal user database is enabled.</p>
   */
  InternalUserDatabaseEnabled?: boolean;

  /**
   * <p>Credentials for the master user: username and password, ARN, or both.</p>
   */
  MasterUserOptions?: MasterUserOptions;

  /**
   * <p>Specifies the SAML application configuration for the domain.</p>
   */
  SAMLOptions?: SAMLOptionsInput;
}

export namespace AdvancedSecurityOptionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdvancedSecurityOptionsInput): any => ({
    ...obj,
    ...(obj.MasterUserOptions && { MasterUserOptions: MasterUserOptions.filterSensitiveLog(obj.MasterUserOptions) }),
    ...(obj.SAMLOptions && { SAMLOptions: SAMLOptionsInput.filterSensitiveLog(obj.SAMLOptions) }),
  });
}

/**
 * <p> Specifies the status of advanced security options for the specified Elasticsearch domain.</p>
 */
export interface AdvancedSecurityOptionsStatus {
  /**
   * <p> Specifies advanced security options for the specified Elasticsearch domain.</p>
   */
  Options: AdvancedSecurityOptions | undefined;

  /**
   * <p> Status of the advanced security options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace AdvancedSecurityOptionsStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdvancedSecurityOptionsStatus): any => ({
    ...obj,
  });
}

/**
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
   * <p>Internal ID of the package that you want to associate with a domain. Use <code>DescribePackages</code> to find this value.</p>
   */
  PackageID: string | undefined;

  /**
   * <p>Name of the domain that you want to associate the package with.</p>
   */
  DomainName: string | undefined;
}

export namespace AssociatePackageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatePackageRequest): any => ({
    ...obj,
  });
}

export type DomainPackageStatus =
  | "ACTIVE"
  | "ASSOCIATING"
  | "ASSOCIATION_FAILED"
  | "DISSOCIATING"
  | "DISSOCIATION_FAILED";

export interface ErrorDetails {
  ErrorType?: string;
  ErrorMessage?: string;
}

export namespace ErrorDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorDetails): any => ({
    ...obj,
  });
}

export type PackageType = "TXT-DICTIONARY";

/**
 * <p>Information on a package that is associated with a domain.</p>
 */
export interface DomainPackageDetails {
  /**
   * <p>Internal ID of the package.</p>
   */
  PackageID?: string;

  /**
   * <p>User specified name of the package.</p>
   */
  PackageName?: string;

  /**
   * <p>Currently supports only TXT-DICTIONARY.</p>
   */
  PackageType?: PackageType | string;

  /**
   * <p>Timestamp of the most-recent update to the association status.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>Name of the domain you've associated a package with.</p>
   */
  DomainName?: string;

  /**
   * <p>State of the association. Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.</p>
   */
  DomainPackageStatus?: DomainPackageStatus | string;

  PackageVersion?: string;
  /**
   * <p>The relative path on Amazon ES nodes, which can be used as synonym_path when the package is synonym file.</p>
   */
  ReferencePath?: string;

  /**
   * <p>Additional information if the package is in an error state. Null otherwise.</p>
   */
  ErrorDetails?: ErrorDetails;
}

export namespace DomainPackageDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainPackageDetails): any => ({
    ...obj,
  });
}

/**
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
   * <p><code>DomainPackageDetails</code></p>
   */
  DomainPackageDetails?: DomainPackageDetails;
}

export namespace AssociatePackageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatePackageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An error occurred because the client attempts to remove a resource that is currently in use. Returns HTTP status code 409.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the parameters to the <code><a>CancelElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to cancel a service software update on.</p>
 */
export interface CancelElasticsearchServiceSoftwareUpdateRequest {
  /**
   * <p>The name of the domain that you want to stop the latest service software update on.</p>
   */
  DomainName: string | undefined;
}

export namespace CancelElasticsearchServiceSoftwareUpdateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelElasticsearchServiceSoftwareUpdateRequest): any => ({
    ...obj,
  });
}

export type DeploymentStatus = "COMPLETED" | "ELIGIBLE" | "IN_PROGRESS" | "NOT_ELIGIBLE" | "PENDING_UPDATE";

/**
 * <p>The current options of an Elasticsearch domain service software options.</p>
 */
export interface ServiceSoftwareOptions {
  /**
   * <p>The current service software version that is present on the domain.</p>
   */
  CurrentVersion?: string;

  /**
   * <p>The new service software version if one is available.</p>
   */
  NewVersion?: string;

  /**
   * <p><code>True</code> if you are able to update you service software version. <code>False</code> if you are not able to update your service software version. </p>
   */
  UpdateAvailable?: boolean;

  /**
   * <p><code>True</code> if you are able to cancel your service software version update. <code>False</code> if you are not able to cancel your service software version. </p>
   */
  Cancellable?: boolean;

  /**
   * <p>The status of your service software update. This field can take the following values: <code>ELIGIBLE</code>, <code>PENDING_UPDATE</code>, <code>IN_PROGRESS</code>, <code>COMPLETED</code>, and <code>NOT_ELIGIBLE</code>.</p>
   */
  UpdateStatus?: DeploymentStatus | string;

  /**
   * <p>The description of the <code>UpdateStatus</code>.</p>
   */
  Description?: string;

  /**
   * <p>Timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software.</p>
   */
  AutomatedUpdateDate?: Date;

  /**
   * <p><code>True</code> if a service software is never automatically updated. <code>False</code> if a service software is automatically updated after <code>AutomatedUpdateDate</code>.  </p>
   */
  OptionalDeployment?: boolean;
}

export namespace ServiceSoftwareOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceSoftwareOptions): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a <code>CancelElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update.</p>
 */
export interface CancelElasticsearchServiceSoftwareUpdateResponse {
  /**
   * <p>The current status of the Elasticsearch service software update.</p>
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}

export namespace CancelElasticsearchServiceSoftwareUpdateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelElasticsearchServiceSoftwareUpdateResponse): any => ({
    ...obj,
  });
}

export enum AutoTuneDesiredState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum TimeUnit {
  HOURS = "HOURS",
}

/**
 * <p>Specifies maintenance schedule duration: duration value and duration unit. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
 */
export interface Duration {
  /**
   * <p> Integer to specify the value of a maintenance schedule duration. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   */
  Value?: number;

  /**
   * <p>Specifies the unit of a maintenance schedule duration. Valid value is HOURS. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   */
  Unit?: TimeUnit | string;
}

export namespace Duration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Duration): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies Auto-Tune maitenance schedule. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
 */
export interface AutoTuneMaintenanceSchedule {
  /**
   * <p>Specifies timestamp at which Auto-Tune maintenance schedule start. </p>
   */
  StartAt?: Date;

  /**
   * <p>Specifies maintenance schedule duration: duration value and duration unit. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   */
  Duration?: Duration;

  /**
   * <p>Specifies cron expression for a recurring maintenance schedule. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   */
  CronExpressionForRecurrence?: string;
}

export namespace AutoTuneMaintenanceSchedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoTuneMaintenanceSchedule): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.</p>
 */
export interface AutoTuneOptionsInput {
  /**
   * <p>Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED. </p>
   */
  DesiredState?: AutoTuneDesiredState | string;

  /**
   * <p>Specifies list of maitenance schedules. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[];
}

export namespace AutoTuneOptionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoTuneOptionsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
 */
export interface CognitoOptions {
  /**
   * <p>Specifies the option to enable Cognito for Kibana authentication.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Specifies the Cognito user pool ID for Kibana authentication.</p>
   */
  UserPoolId?: string;

  /**
   * <p>Specifies the Cognito identity pool ID for Kibana authentication.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.</p>
   */
  RoleArn?: string;
}

export namespace CognitoOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CognitoOptions): any => ({
    ...obj,
  });
}

export enum TLSSecurityPolicy {
  POLICY_MIN_TLS_1_0_2019_07 = "Policy-Min-TLS-1-0-2019-07",
  POLICY_MIN_TLS_1_2_2019_07 = "Policy-Min-TLS-1-2-2019-07",
}

/**
 * <p>Options to configure endpoint for the Elasticsearch domain.</p>
 */
export interface DomainEndpointOptions {
  /**
   * <p>Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.</p>
   */
  EnforceHTTPS?: boolean;

  /**
   * <p>Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain.
   *         <br></br> It can be one of the following values:
   *         <ul>
   *             <li><b>Policy-Min-TLS-1-0-2019-07: </b> TLS security policy which supports TLSv1.0 and higher.</li>
   *             <li><b>Policy-Min-TLS-1-2-2019-07: </b> TLS security policy which supports only TLSv1.2</li>
   *         </ul>
   *     </p>
   */
  TLSSecurityPolicy?: TLSSecurityPolicy | string;

  /**
   * <p>Specify if custom endpoint should be enabled for the Elasticsearch domain.</p>
   */
  CustomEndpointEnabled?: boolean;

  /**
   * <p>Specify the fully qualified domain for your custom endpoint.</p>
   */
  CustomEndpoint?: string;

  /**
   * <p>Specify ACM certificate ARN for your custom endpoint.</p>
   */
  CustomEndpointCertificateArn?: string;
}

export namespace DomainEndpointOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainEndpointOptions): any => ({
    ...obj,
  });
}

export type VolumeType = "gp2" | "io1" | "standard";

/**
 * <p>Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.</p>
 */
export interface EBSOptions {
  /**
   * <p>Specifies whether EBS-based storage is enabled.</p>
   */
  EBSEnabled?: boolean;

  /**
   * <p> Specifies the volume type for EBS-based storage.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p> Integer to specify the size of an EBS volume.</p>
   */
  VolumeSize?: number;

  /**
   * <p>Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).</p>
   */
  Iops?: number;
}

export namespace EBSOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EBSOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration for cold storage options such as enabled</p>
 */
export interface ColdStorageOptions {
  /**
   * <p>Enable cold storage option. Accepted values true or false</p>
   */
  Enabled: boolean | undefined;
}

export namespace ColdStorageOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColdStorageOptions): any => ({
    ...obj,
  });
}

export type ESPartitionInstanceType =
  | "c4.2xlarge.elasticsearch"
  | "c4.4xlarge.elasticsearch"
  | "c4.8xlarge.elasticsearch"
  | "c4.large.elasticsearch"
  | "c4.xlarge.elasticsearch"
  | "c5.18xlarge.elasticsearch"
  | "c5.2xlarge.elasticsearch"
  | "c5.4xlarge.elasticsearch"
  | "c5.9xlarge.elasticsearch"
  | "c5.large.elasticsearch"
  | "c5.xlarge.elasticsearch"
  | "d2.2xlarge.elasticsearch"
  | "d2.4xlarge.elasticsearch"
  | "d2.8xlarge.elasticsearch"
  | "d2.xlarge.elasticsearch"
  | "i2.2xlarge.elasticsearch"
  | "i2.xlarge.elasticsearch"
  | "i3.16xlarge.elasticsearch"
  | "i3.2xlarge.elasticsearch"
  | "i3.4xlarge.elasticsearch"
  | "i3.8xlarge.elasticsearch"
  | "i3.large.elasticsearch"
  | "i3.xlarge.elasticsearch"
  | "m3.2xlarge.elasticsearch"
  | "m3.large.elasticsearch"
  | "m3.medium.elasticsearch"
  | "m3.xlarge.elasticsearch"
  | "m4.10xlarge.elasticsearch"
  | "m4.2xlarge.elasticsearch"
  | "m4.4xlarge.elasticsearch"
  | "m4.large.elasticsearch"
  | "m4.xlarge.elasticsearch"
  | "m5.12xlarge.elasticsearch"
  | "m5.2xlarge.elasticsearch"
  | "m5.4xlarge.elasticsearch"
  | "m5.large.elasticsearch"
  | "m5.xlarge.elasticsearch"
  | "r3.2xlarge.elasticsearch"
  | "r3.4xlarge.elasticsearch"
  | "r3.8xlarge.elasticsearch"
  | "r3.large.elasticsearch"
  | "r3.xlarge.elasticsearch"
  | "r4.16xlarge.elasticsearch"
  | "r4.2xlarge.elasticsearch"
  | "r4.4xlarge.elasticsearch"
  | "r4.8xlarge.elasticsearch"
  | "r4.large.elasticsearch"
  | "r4.xlarge.elasticsearch"
  | "r5.12xlarge.elasticsearch"
  | "r5.2xlarge.elasticsearch"
  | "r5.4xlarge.elasticsearch"
  | "r5.large.elasticsearch"
  | "r5.xlarge.elasticsearch"
  | "t2.medium.elasticsearch"
  | "t2.micro.elasticsearch"
  | "t2.small.elasticsearch"
  | "ultrawarm1.large.elasticsearch"
  | "ultrawarm1.medium.elasticsearch";

export type ESWarmPartitionInstanceType = "ultrawarm1.large.elasticsearch" | "ultrawarm1.medium.elasticsearch";

/**
 * <p>Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones.</p>
 */
export interface ZoneAwarenessConfig {
  /**
   * <p>An integer value to indicate the number of availability zones for a domain when zone awareness is enabled. This should be equal to number of subnets if VPC endpoints is enabled</p>
   */
  AvailabilityZoneCount?: number;
}

export namespace ZoneAwarenessConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ZoneAwarenessConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration for the domain cluster, such as the type and number of instances.</p>
 */
export interface ElasticsearchClusterConfig {
  /**
   * <p>The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances.</p>
   */
  InstanceType?: ESPartitionInstanceType | string;

  /**
   * <p>The number of instances in the specified domain cluster.</p>
   */
  InstanceCount?: number;

  /**
   * <p>A boolean value to indicate whether a dedicated master node is enabled.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-dedicatedmasternodes" target="_blank">About Dedicated Master Nodes</a> for more information.</p>
   */
  DedicatedMasterEnabled?: boolean;

  /**
   * <p>A boolean value to indicate whether zone awareness is enabled.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-zoneawareness" target="_blank">About Zone Awareness</a> for more information.</p>
   */
  ZoneAwarenessEnabled?: boolean;

  /**
   * <p>Specifies the zone awareness configuration for a domain when zone awareness is enabled.</p>
   */
  ZoneAwarenessConfig?: ZoneAwarenessConfig;

  /**
   * <p>The instance type for a dedicated master node.</p>
   */
  DedicatedMasterType?: ESPartitionInstanceType | string;

  /**
   * <p>Total number of dedicated master nodes, active and on standby, for the cluster.</p>
   */
  DedicatedMasterCount?: number;

  /**
   * <p>True to enable warm storage.</p>
   */
  WarmEnabled?: boolean;

  /**
   * <p>The instance type for the Elasticsearch cluster's warm nodes.</p>
   */
  WarmType?: ESWarmPartitionInstanceType | string;

  /**
   * <p>The number of warm nodes in the cluster.</p>
   */
  WarmCount?: number;

  /**
   * <p>Specifies the <code>ColdStorageOptions</code> config for Elasticsearch Domain</p>
   */
  ColdStorageOptions?: ColdStorageOptions;
}

export namespace ElasticsearchClusterConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticsearchClusterConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the Encryption At Rest Options.</p>
 */
export interface EncryptionAtRestOptions {
  /**
   * <p>Specifies the option to enable Encryption At Rest.</p>
   */
  Enabled?: boolean;

  /**
   * <p> Specifies the KMS Key ID for Encryption At Rest options.</p>
   */
  KmsKeyId?: string;
}

export namespace EncryptionAtRestOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionAtRestOptions): any => ({
    ...obj,
  });
}

export type LogType = "AUDIT_LOGS" | "ES_APPLICATION_LOGS" | "INDEX_SLOW_LOGS" | "SEARCH_SLOW_LOGS";

/**
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
   * <p>ARN of the Cloudwatch log group to which log needs to be published.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p> Specifies whether given log publishing option is enabled or not.</p>
   */
  Enabled?: boolean;
}

export namespace LogPublishingOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogPublishingOption): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the node-to-node encryption options.</p>
 */
export interface NodeToNodeEncryptionOptions {
  /**
   * <p>Specify true to enable node-to-node encryption.</p>
   */
  Enabled?: boolean;
}

export namespace NodeToNodeEncryptionOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeToNodeEncryptionOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.</p>
 */
export interface SnapshotOptions {
  /**
   * <p>Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.</p>
   */
  AutomatedSnapshotStartHour?: number;
}

export namespace SnapshotOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
 */
export interface VPCOptions {
  /**
   * <p>Specifies the subnets for VPC endpoint.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Specifies the security groups for VPC endpoint.</p>
   */
  SecurityGroupIds?: string[];
}

export namespace VPCOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VPCOptions): any => ({
    ...obj,
  });
}

export interface CreateElasticsearchDomainRequest {
  /**
   * <p>The name of the Elasticsearch domain that you are creating. Domain names are unique across the domains owned by an account within an AWS region. Domain names must start with a lowercase letter and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>String of format X.Y to specify version for the Elasticsearch domain eg. "1.5" or "2.3". For more information,
   *           see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.</p>
   */
  ElasticsearchVersion?: string;

  /**
   * <p>Configuration options for an Elasticsearch domain. Specifies the instance type and number of instances in the domain cluster. </p>
   */
  ElasticsearchClusterConfig?: ElasticsearchClusterConfig;

  /**
   * <p>Options to enable, disable and specify the type and size of EBS storage volumes. </p>
   */
  EBSOptions?: EBSOptions;

  /**
   * <p> IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>Option to set time, in UTC format, of the daily automated snapshot. Default value is 0 hours. </p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-creating-vpc" target="_blank">Creating a VPC</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i></p>
   */
  VPCOptions?: VPCOptions;

  /**
   * <p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * <p>Specifies the Encryption At Rest Options.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * <p>Specifies the NodeToNodeEncryptionOptions.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * <p> Option to allow references to indices in an HTTP request body.  Must be <code>false</code> when configuring access to individual sub-resources.  By default, the value is <code>true</code>.
   *           See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</p>
   */
  AdvancedOptions?: { [key: string]: string };

  /**
   * <p>Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.</p>
   */
  LogPublishingOptions?: { [key: string]: LogPublishingOption };

  /**
   * <p>Options to specify configuration that will be applied to the domain endpoint.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * <p>Specifies advanced security options.</p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;

  /**
   * <p>Specifies Auto-Tune options.</p>
   */
  AutoTuneOptions?: AutoTuneOptionsInput;

  /**
   * <p>A list of <code>Tag</code> added during domain creation.</p>
   */
  TagList?: Tag[];
}

export namespace CreateElasticsearchDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateElasticsearchDomainRequest): any => ({
    ...obj,
    ...(obj.AdvancedSecurityOptions && {
      AdvancedSecurityOptions: AdvancedSecurityOptionsInput.filterSensitiveLog(obj.AdvancedSecurityOptions),
    }),
  });
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
 * <p>Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.</p>
 */
export interface AutoTuneOptionsOutput {
  /**
   * <p>Specifies the <code>AutoTuneState</code> for the Elasticsearch domain.</p>
   */
  State?: AutoTuneState | string;

  /**
   * <p>Specifies the error message while enabling or disabling the Auto-Tune.</p>
   */
  ErrorMessage?: string;
}

export namespace AutoTuneOptionsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoTuneOptionsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
 */
export interface VPCDerivedInfo {
  /**
   * <p>The VPC Id for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.</p>
   */
  VPCId?: string;

  /**
   * <p>Specifies the subnets for VPC endpoint.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The availability zones for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Specifies the security groups for VPC endpoint.</p>
   */
  SecurityGroupIds?: string[];
}

export namespace VPCDerivedInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VPCDerivedInfo): any => ({
    ...obj,
  });
}

/**
 * <p>The current status of an Elasticsearch domain.</p>
 */
export interface ElasticsearchDomainStatus {
  /**
   * <p>The unique identifier for the specified Elasticsearch domain.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The Amazon resource name (ARN) of an Elasticsearch domain.  See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.</p>
   */
  ARN: string | undefined;

  /**
   * <p>The domain creation status. <code>True</code> if the creation of an Elasticsearch domain is complete. <code>False</code> if domain creation is still in progress.</p>
   */
  Created?: boolean;

  /**
   * <p>The domain deletion status. <code>True</code> if a delete request has been received for the domain but resource cleanup is still in progress. <code>False</code> if the domain has not been deleted. Once domain deletion is complete, the status of the domain is no longer returned.</p>
   */
  Deleted?: boolean;

  /**
   * <p>The Elasticsearch domain endpoint that you use to submit index and search requests.</p>
   */
  Endpoint?: string;

  /**
   * <p>Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example <code>key, value</code>: <code>'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com'</code>.</p>
   */
  Endpoints?: { [key: string]: string };

  /**
   * <p>The status of the Elasticsearch domain configuration. <code>True</code> if Amazon Elasticsearch Service is processing configuration changes. <code>False</code> if the configuration is active.</p>
   */
  Processing?: boolean;

  /**
   * <p>The status of an Elasticsearch domain version upgrade. <code>True</code> if Amazon Elasticsearch Service is undergoing a version upgrade. <code>False</code> if the configuration is active.</p>
   */
  UpgradeProcessing?: boolean;

  ElasticsearchVersion?: string;
  /**
   * <p>The type and number of instances in the domain cluster.</p>
   */
  ElasticsearchClusterConfig: ElasticsearchClusterConfig | undefined;

  /**
   * <p>The <code>EBSOptions</code> for the specified domain.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a> for more information.</p>
   */
  EBSOptions?: EBSOptions;

  /**
   * <p> IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>Specifies the status of the <code>SnapshotOptions</code></p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * <p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
   */
  VPCOptions?: VPCDerivedInfo;

  /**
   * <p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * <p> Specifies the status of the <code>EncryptionAtRestOptions</code>.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * <p>Specifies the status of the <code>NodeToNodeEncryptionOptions</code>.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * <p>Specifies the status of the <code>AdvancedOptions</code></p>
   */
  AdvancedOptions?: { [key: string]: string };

  /**
   * <p>Log publishing options for the given domain.</p>
   */
  LogPublishingOptions?: { [key: string]: LogPublishingOption };

  /**
   * <p>The current status of the Elasticsearch domain's service software.</p>
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;

  /**
   * <p>The current status of the Elasticsearch domain's endpoint options.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * <p>The current status of the Elasticsearch domain's advanced security options.</p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptions;

  /**
   * <p>The current status of the Elasticsearch domain's Auto-Tune options.</p>
   */
  AutoTuneOptions?: AutoTuneOptionsOutput;
}

export namespace ElasticsearchDomainStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticsearchDomainStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a <code>CreateElasticsearchDomain</code> operation. Contains the status of the newly created Elasticsearch domain.</p>
 */
export interface CreateElasticsearchDomainResponse {
  /**
   * <p>The status of the newly created Elasticsearch domain. </p>
   */
  DomainStatus?: ElasticsearchDomainStatus;
}

export namespace CreateElasticsearchDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateElasticsearchDomainResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An exception for trying to create or access sub-resource that is either invalid or not supported. Gives http status code of 409.</p>
 */
export interface InvalidTypeException extends __SmithyException, $MetadataBearer {
  name: "InvalidTypeException";
  $fault: "client";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace InvalidTypeException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidTypeException): any => ({
    ...obj,
  });
}

/**
 * <p>An exception for creating a resource that already exists. Gives http status code of 400.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace ResourceAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the parameters to the <code><a>CreateOutboundCrossClusterSearchConnection</a></code> operation.</p>
 */
export interface CreateOutboundCrossClusterSearchConnectionRequest {
  /**
   * <p>Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.</p>
   */
  SourceDomainInfo: DomainInformation | undefined;

  /**
   * <p>Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.</p>
   */
  DestinationDomainInfo: DomainInformation | undefined;

  /**
   * <p>Specifies the connection alias that will be used by the customer for this connection.</p>
   */
  ConnectionAlias: string | undefined;
}

export namespace CreateOutboundCrossClusterSearchConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOutboundCrossClusterSearchConnectionRequest): any => ({
    ...obj,
  });
}

export enum OutboundCrossClusterSearchConnectionStatusCode {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  DELETING = "DELETING",
  PENDING_ACCEPTANCE = "PENDING_ACCEPTANCE",
  PROVISIONING = "PROVISIONING",
  REJECTED = "REJECTED",
  VALIDATING = "VALIDATING",
  VALIDATION_FAILED = "VALIDATION_FAILED",
}

/**
 * <p>Specifies the connection status of an outbound cross-cluster search connection.</p>
 */
export interface OutboundCrossClusterSearchConnectionStatus {
  /**
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
  StatusCode?: OutboundCrossClusterSearchConnectionStatusCode | string;

  /**
   * <p>Specifies verbose information for the outbound connection status.</p>
   */
  Message?: string;
}

export namespace OutboundCrossClusterSearchConnectionStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutboundCrossClusterSearchConnectionStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a <code><a>CreateOutboundCrossClusterSearchConnection</a></code> request. Contains the details of the newly created cross-cluster search connection.</p>
 */
export interface CreateOutboundCrossClusterSearchConnectionResponse {
  /**
   * <p>Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.</p>
   */
  SourceDomainInfo?: DomainInformation;

  /**
   * <p>Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.</p>
   */
  DestinationDomainInfo?: DomainInformation;

  /**
   * <p>Specifies the connection alias provided during the create connection request.</p>
   */
  ConnectionAlias?: string;

  /**
   * <p>Specifies the <code><a>OutboundCrossClusterSearchConnectionStatus</a></code> for the newly created connection.</p>
   */
  ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus;

  /**
   * <p>Unique id for the created outbound connection, which is used for subsequent operations on connection.</p>
   */
  CrossClusterSearchConnectionId?: string;
}

export namespace CreateOutboundCrossClusterSearchConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOutboundCrossClusterSearchConnectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code></p>
 */
export interface PackageSource {
  /**
   * <p>Name of the bucket containing the package.</p>
   */
  S3BucketName?: string;

  /**
   * <p>Key (file name) of the package.</p>
   */
  S3Key?: string;
}

export namespace PackageSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PackageSource): any => ({
    ...obj,
  });
}

/**
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
   * <p>Unique identifier for the package.</p>
   */
  PackageName: string | undefined;

  /**
   * <p>Type of package. Currently supports only TXT-DICTIONARY.</p>
   */
  PackageType: PackageType | string | undefined;

  /**
   * <p>Description of the package.</p>
   */
  PackageDescription?: string;

  /**
   * <p>The customer S3 location <code>PackageSource</code> for importing the package.</p>
   */
  PackageSource: PackageSource | undefined;
}

export namespace CreatePackageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePackageRequest): any => ({
    ...obj,
  });
}

export type PackageStatus =
  | "AVAILABLE"
  | "COPYING"
  | "COPY_FAILED"
  | "DELETED"
  | "DELETE_FAILED"
  | "DELETING"
  | "VALIDATING"
  | "VALIDATION_FAILED";

/**
 * <p>Basic information about a package.</p>
 */
export interface PackageDetails {
  /**
   * <p>Internal ID of the package.</p>
   */
  PackageID?: string;

  /**
   * <p>User specified name of the package.</p>
   */
  PackageName?: string;

  /**
   * <p>Currently supports only TXT-DICTIONARY.</p>
   */
  PackageType?: PackageType | string;

  /**
   * <p>User-specified description of the package.</p>
   */
  PackageDescription?: string;

  /**
   * <p>Current state of the package. Values are COPYING/COPY_FAILED/AVAILABLE/DELETING/DELETE_FAILED</p>
   */
  PackageStatus?: PackageStatus | string;

  /**
   * <p>Timestamp which tells creation date of the package.</p>
   */
  CreatedAt?: Date;

  LastUpdatedAt?: Date;
  AvailablePackageVersion?: string;
  /**
   * <p>Additional information if the package is in an error state. Null otherwise.</p>
   */
  ErrorDetails?: ErrorDetails;
}

export namespace PackageDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PackageDetails): any => ({
    ...obj,
  });
}

/**
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
   * <p>Information about the package <code>PackageDetails</code>.</p>
   */
  PackageDetails?: PackageDetails;
}

export namespace CreatePackageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePackageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the parameters to the <code><a>DeleteElasticsearchDomain</a></code> operation. Specifies the name of the Elasticsearch domain that you want to delete.</p>
 */
export interface DeleteElasticsearchDomainRequest {
  /**
   * <p>The name of the Elasticsearch domain that you want to permanently delete.</p>
   */
  DomainName: string | undefined;
}

export namespace DeleteElasticsearchDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteElasticsearchDomainRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a <code>DeleteElasticsearchDomain</code> request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted.</p>
 */
export interface DeleteElasticsearchDomainResponse {
  /**
   * <p>The status of the Elasticsearch domain being deleted.</p>
   */
  DomainStatus?: ElasticsearchDomainStatus;
}

export namespace DeleteElasticsearchDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteElasticsearchDomainResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the parameters to the <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation.</p>
 */
export interface DeleteInboundCrossClusterSearchConnectionRequest {
  /**
   * <p>The id of the inbound connection that you want to permanently delete.</p>
   */
  CrossClusterSearchConnectionId: string | undefined;
}

export namespace DeleteInboundCrossClusterSearchConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInboundCrossClusterSearchConnectionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted inbound connection.</p>
 */
export interface DeleteInboundCrossClusterSearchConnectionResponse {
  /**
   * <p>Specifies the <code><a>InboundCrossClusterSearchConnection</a></code> of deleted inbound connection. </p>
   */
  CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
}

export namespace DeleteInboundCrossClusterSearchConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInboundCrossClusterSearchConnectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the parameters to the <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation.</p>
 */
export interface DeleteOutboundCrossClusterSearchConnectionRequest {
  /**
   * <p>The id of the outbound connection that you want to permanently delete.</p>
   */
  CrossClusterSearchConnectionId: string | undefined;
}

export namespace DeleteOutboundCrossClusterSearchConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOutboundCrossClusterSearchConnectionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies details of an outbound connection.</p>
 */
export interface OutboundCrossClusterSearchConnection {
  /**
   * <p>Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.</p>
   */
  SourceDomainInfo?: DomainInformation;

  /**
   * <p>Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.</p>
   */
  DestinationDomainInfo?: DomainInformation;

  /**
   * <p>Specifies the connection id for the outbound cross-cluster search connection.</p>
   */
  CrossClusterSearchConnectionId?: string;

  /**
   * <p>Specifies the connection alias for the outbound cross-cluster search connection.</p>
   */
  ConnectionAlias?: string;

  /**
   * <p>Specifies the <code><a>OutboundCrossClusterSearchConnectionStatus</a></code> for the outbound connection.</p>
   */
  ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus;
}

export namespace OutboundCrossClusterSearchConnection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutboundCrossClusterSearchConnection): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted outbound connection.</p>
 */
export interface DeleteOutboundCrossClusterSearchConnectionResponse {
  /**
   * <p>Specifies the <code><a>OutboundCrossClusterSearchConnection</a></code> of deleted outbound connection. </p>
   */
  CrossClusterSearchConnection?: OutboundCrossClusterSearchConnection;
}

export namespace DeleteOutboundCrossClusterSearchConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOutboundCrossClusterSearchConnectionResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>Internal ID of the package that you want to delete. Use <code>DescribePackages</code> to find this value.</p>
   */
  PackageID: string | undefined;
}

export namespace DeletePackageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePackageRequest): any => ({
    ...obj,
  });
}

/**
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
   * <p><code>PackageDetails</code></p>
   */
  PackageDetails?: PackageDetails;
}

export namespace DeletePackageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePackageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the parameters to the <code>DescribeDomainAutoTunes</code> operation.</p>
 */
export interface DescribeDomainAutoTunesRequest {
  /**
   * <p>Specifies the domain name for which you want Auto-Tune action details.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.</p>
   */
  NextToken?: string;
}

export namespace DescribeDomainAutoTunesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDomainAutoTunesRequest): any => ({
    ...obj,
  });
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
 * <p>Specifies details of the scheduled Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
 */
export interface ScheduledAutoTuneDetails {
  /**
   * <p>Specifies timestamp for the Auto-Tune action scheduled for the domain. </p>
   */
  Date?: Date;

  /**
   * <p>Specifies Auto-Tune action type. Valid values are JVM_HEAP_SIZE_TUNING and JVM_YOUNG_GEN_TUNING. </p>
   */
  ActionType?: ScheduledAutoTuneActionType | string;

  /**
   * <p>Specifies Auto-Tune action description. </p>
   */
  Action?: string;

  /**
   * <p>Specifies Auto-Tune action severity. Valid values are LOW, MEDIUM and HIGH. </p>
   */
  Severity?: ScheduledAutoTuneSeverityType | string;
}

export namespace ScheduledAutoTuneDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduledAutoTuneDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies details of the Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
 */
export interface AutoTuneDetails {
  /**
   * <p>Specifies details of the scheduled Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
   */
  ScheduledAutoTuneDetails?: ScheduledAutoTuneDetails;
}

export namespace AutoTuneDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoTuneDetails): any => ({
    ...obj,
  });
}

export enum AutoTuneType {
  SCHEDULED_ACTION = "SCHEDULED_ACTION",
}

/**
 * <p>Specifies Auto-Tune type and Auto-Tune action details. </p>
 */
export interface AutoTune {
  /**
   * <p>Specifies Auto-Tune type. Valid value is SCHEDULED_ACTION. </p>
   */
  AutoTuneType?: AutoTuneType | string;

  /**
   * <p>Specifies details of the Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
   */
  AutoTuneDetails?: AutoTuneDetails;
}

export namespace AutoTune {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoTune): any => ({
    ...obj,
  });
}

/**
 * <p>The result of <code>DescribeDomainAutoTunes</code> request. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
 */
export interface DescribeDomainAutoTunesResponse {
  /**
   * <p>Specifies the list of setting adjustments that Auto-Tune has made to the domain. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   */
  AutoTunes?: AutoTune[];

  /**
   * <p>Specifies an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;
}

export namespace DescribeDomainAutoTunesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDomainAutoTunesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the parameters to the <code><a>DescribeElasticsearchDomain</a></code> operation.</p>
 */
export interface DescribeElasticsearchDomainRequest {
  /**
   * <p>The name of the Elasticsearch domain for which you want information.</p>
   */
  DomainName: string | undefined;
}

export namespace DescribeElasticsearchDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeElasticsearchDomainRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a <code>DescribeElasticsearchDomain</code> request. Contains the status of the domain specified in the request.</p>
 */
export interface DescribeElasticsearchDomainResponse {
  /**
   * <p>The current status of the Elasticsearch domain.</p>
   */
  DomainStatus: ElasticsearchDomainStatus | undefined;
}

export namespace DescribeElasticsearchDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeElasticsearchDomainResponse): any => ({
    ...obj,
  });
}

/**
 * <p> Container for the parameters to the <code>DescribeElasticsearchDomainConfig</code> operation. Specifies the domain name for which you want configuration information.</p>
 */
export interface DescribeElasticsearchDomainConfigRequest {
  /**
   * <p>The Elasticsearch domain that you want to get information about.</p>
   */
  DomainName: string | undefined;
}

export namespace DescribeElasticsearchDomainConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeElasticsearchDomainConfigRequest): any => ({
    ...obj,
  });
}

export enum RollbackOnDisable {
  DEFAULT_ROLLBACK = "DEFAULT_ROLLBACK",
  NO_ROLLBACK = "NO_ROLLBACK",
}

/**
 * <p>Specifies the Auto-Tune options: the Auto-Tune desired state for the domain, rollback state when disabling Auto-Tune options and list of maintenance schedules.</p>
 */
export interface AutoTuneOptions {
  /**
   * <p>Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED. </p>
   */
  DesiredState?: AutoTuneDesiredState | string;

  /**
   * <p>Specifies the rollback state while disabling Auto-Tune for the domain. Valid values are NO_ROLLBACK, DEFAULT_ROLLBACK. </p>
   */
  RollbackOnDisable?: RollbackOnDisable | string;

  /**
   * <p>Specifies list of maitenance schedules. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[];
}

export namespace AutoTuneOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoTuneOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the current status of the Auto-Tune options. </p>
 */
export interface AutoTuneStatus {
  /**
   * <p>Timestamp which tells Auto-Tune options creation date .</p>
   */
  CreationDate: Date | undefined;

  /**
   * <p>Timestamp which tells Auto-Tune options last updated time.</p>
   */
  UpdateDate: Date | undefined;

  /**
   * <p>Specifies the Auto-Tune options latest version.</p>
   */
  UpdateVersion?: number;

  /**
   * <p>Specifies the <code>AutoTuneState</code> for the Elasticsearch domain.</p>
   */
  State: AutoTuneState | string | undefined;

  /**
   * <p>Specifies the error message while enabling or disabling the Auto-Tune options.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>Indicates whether the Elasticsearch domain is being deleted.</p>
   */
  PendingDeletion?: boolean;
}

export namespace AutoTuneStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoTuneStatus): any => ({
    ...obj,
  });
}

/**
 * <p> Specifies the status of Auto-Tune options for the specified Elasticsearch domain.</p>
 */
export interface AutoTuneOptionsStatus {
  /**
   * <p> Specifies Auto-Tune options for the specified Elasticsearch domain.</p>
   */
  Options?: AutoTuneOptions;

  /**
   * <p> Specifies Status of the Auto-Tune options for the specified Elasticsearch domain.</p>
   */
  Status?: AutoTuneStatus;
}

export namespace AutoTuneOptionsStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoTuneOptionsStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Status of the Cognito options for the specified Elasticsearch domain.</p>
 */
export interface CognitoOptionsStatus {
  /**
   * <p>Specifies the Cognito options for the specified Elasticsearch domain.</p>
   */
  Options: CognitoOptions | undefined;

  /**
   * <p>Specifies the status of the Cognito options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace CognitoOptionsStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CognitoOptionsStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The configured endpoint options for the domain and their current status.</p>
 */
export interface DomainEndpointOptionsStatus {
  /**
   * <p>Options to configure endpoint for the Elasticsearch domain.</p>
   */
  Options: DomainEndpointOptions | undefined;

  /**
   * <p>The status of the endpoint options for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>
   */
  Status: OptionStatus | undefined;
}

export namespace DomainEndpointOptionsStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainEndpointOptionsStatus): any => ({
    ...obj,
  });
}

/**
 * <p> Status of the EBS options for the specified Elasticsearch domain.</p>
 */
export interface EBSOptionsStatus {
  /**
   * <p> Specifies the EBS options for the specified Elasticsearch domain.</p>
   */
  Options: EBSOptions | undefined;

  /**
   * <p> Specifies the status of the EBS options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace EBSOptionsStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EBSOptionsStatus): any => ({
    ...obj,
  });
}

/**
 * <p> Specifies the configuration status for the specified Elasticsearch domain.</p>
 */
export interface ElasticsearchClusterConfigStatus {
  /**
   * <p> Specifies the cluster configuration for the specified Elasticsearch domain.</p>
   */
  Options: ElasticsearchClusterConfig | undefined;

  /**
   * <p> Specifies the status of the configuration for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace ElasticsearchClusterConfigStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticsearchClusterConfigStatus): any => ({
    ...obj,
  });
}

/**
 * <p> Status of the Elasticsearch version options for the specified Elasticsearch domain.</p>
 */
export interface ElasticsearchVersionStatus {
  /**
   * <p> Specifies the Elasticsearch version for the specified Elasticsearch domain.</p>
   */
  Options: string | undefined;

  /**
   * <p> Specifies the status of the Elasticsearch version options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace ElasticsearchVersionStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticsearchVersionStatus): any => ({
    ...obj,
  });
}

/**
 * <p> Status of the Encryption At Rest options for the specified Elasticsearch domain.</p>
 */
export interface EncryptionAtRestOptionsStatus {
  /**
   * <p> Specifies the Encryption At Rest options for the specified Elasticsearch domain.</p>
   */
  Options: EncryptionAtRestOptions | undefined;

  /**
   * <p> Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace EncryptionAtRestOptionsStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionAtRestOptionsStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The configured log publishing options for the domain and their current status.</p>
 */
export interface LogPublishingOptionsStatus {
  /**
   * <p>The log publishing options configured for the Elasticsearch domain.</p>
   */
  Options?: { [key: string]: LogPublishingOption };

  /**
   * <p>The status of the log publishing options for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>
   */
  Status?: OptionStatus;
}

export namespace LogPublishingOptionsStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogPublishingOptionsStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Status of the node-to-node encryption options for the specified Elasticsearch domain.</p>
 */
export interface NodeToNodeEncryptionOptionsStatus {
  /**
   * <p>Specifies the node-to-node encryption options for the specified Elasticsearch domain.</p>
   */
  Options: NodeToNodeEncryptionOptions | undefined;

  /**
   * <p>Specifies the status of the node-to-node encryption options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace NodeToNodeEncryptionOptionsStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeToNodeEncryptionOptionsStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Status of a daily automated snapshot.</p>
 */
export interface SnapshotOptionsStatus {
  /**
   * <p>Specifies the daily snapshot options specified for the Elasticsearch domain.</p>
   */
  Options: SnapshotOptions | undefined;

  /**
   * <p>Specifies the status of a daily automated snapshot.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace SnapshotOptionsStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotOptionsStatus): any => ({
    ...obj,
  });
}

/**
 * <p> Status of the VPC options for the specified Elasticsearch domain.</p>
 */
export interface VPCDerivedInfoStatus {
  /**
   * <p> Specifies the VPC options for the specified Elasticsearch domain.</p>
   */
  Options: VPCDerivedInfo | undefined;

  /**
   * <p> Specifies the status of the VPC options for the specified Elasticsearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace VPCDerivedInfoStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VPCDerivedInfoStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration of an Elasticsearch domain.</p>
 */
export interface ElasticsearchDomainConfig {
  /**
   * <p>String of format X.Y to specify version for the Elasticsearch domain.</p>
   */
  ElasticsearchVersion?: ElasticsearchVersionStatus;

  /**
   * <p>Specifies the <code>ElasticsearchClusterConfig</code> for the Elasticsearch domain.</p>
   */
  ElasticsearchClusterConfig?: ElasticsearchClusterConfigStatus;

  /**
   * <p>Specifies the <code>EBSOptions</code> for the Elasticsearch domain.</p>
   */
  EBSOptions?: EBSOptionsStatus;

  /**
   * <p>IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: AccessPoliciesStatus;

  /**
   * <p>Specifies the <code>SnapshotOptions</code> for the Elasticsearch domain.</p>
   */
  SnapshotOptions?: SnapshotOptionsStatus;

  /**
   * <p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
   */
  VPCOptions?: VPCDerivedInfoStatus;

  /**
   * <p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   */
  CognitoOptions?: CognitoOptionsStatus;

  /**
   * <p>Specifies the <code>EncryptionAtRestOptions</code> for the Elasticsearch domain.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus;

  /**
   * <p>Specifies the <code>NodeToNodeEncryptionOptions</code> for the Elasticsearch domain.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus;

  /**
   * <p>Specifies the <code>AdvancedOptions</code> for the domain.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuring Advanced Options</a> for more information.</p>
   */
  AdvancedOptions?: AdvancedOptionsStatus;

  /**
   * <p>Log publishing options for the given domain.</p>
   */
  LogPublishingOptions?: LogPublishingOptionsStatus;

  /**
   * <p>Specifies the <code>DomainEndpointOptions</code> for the Elasticsearch domain.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus;

  /**
   * <p>Specifies <code>AdvancedSecurityOptions</code> for the domain. </p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsStatus;

  /**
   * <p>Specifies <code>AutoTuneOptions</code> for the domain. </p>
   */
  AutoTuneOptions?: AutoTuneOptionsStatus;
}

export namespace ElasticsearchDomainConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticsearchDomainConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a <code>DescribeElasticsearchDomainConfig</code> request. Contains the configuration information of the requested domain.</p>
 */
export interface DescribeElasticsearchDomainConfigResponse {
  /**
   * <p>The configuration information of the domain requested in the <code>DescribeElasticsearchDomainConfig</code> request.</p>
   */
  DomainConfig: ElasticsearchDomainConfig | undefined;
}

export namespace DescribeElasticsearchDomainConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeElasticsearchDomainConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the parameters to the <code><a>DescribeElasticsearchDomains</a></code> operation. By default, the API returns the status of all Elasticsearch domains.</p>
 */
export interface DescribeElasticsearchDomainsRequest {
  /**
   * <p>The Elasticsearch domains for which you want information.</p>
   */
  DomainNames: string[] | undefined;
}

export namespace DescribeElasticsearchDomainsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeElasticsearchDomainsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a <code>DescribeElasticsearchDomains</code> request. Contains the status of the specified domains or all domains owned by the account.</p>
 */
export interface DescribeElasticsearchDomainsResponse {
  /**
   * <p>The status of the domains requested in the <code>DescribeElasticsearchDomains</code> request.</p>
   */
  DomainStatusList: ElasticsearchDomainStatus[] | undefined;
}

export namespace DescribeElasticsearchDomainsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeElasticsearchDomainsResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>
   *       The instance type for an Elasticsearch cluster for which Elasticsearch
   *       <code>
   *         <a>Limits</a>
   *       </code>
   *       are needed.
   *     </p>
   */
  InstanceType: ESPartitionInstanceType | string | undefined;

  /**
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

export namespace DescribeElasticsearchInstanceTypeLimitsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeElasticsearchInstanceTypeLimitsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for
 *       given InstanceType.
 *     </p>
 */
export interface InstanceCountLimits {
  /**
   * <p>
   *       Minimum number of Instances that can be instantiated for given InstanceType.
   *     </p>
   */
  MinimumInstanceCount?: number;

  /**
   * <p>
   *       Maximum number of Instances that can be instantiated for given InstanceType.
   *     </p>
   */
  MaximumInstanceCount?: number;
}

export namespace InstanceCountLimits {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceCountLimits): any => ({
    ...obj,
  });
}

/**
 * <p>InstanceLimits represents the list of instance related attributes that are available for given InstanceType.
 *     </p>
 */
export interface InstanceLimits {
  /**
   * <p>
   *       InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for
   *       given InstanceType.
   *     </p>
   */
  InstanceCountLimits?: InstanceCountLimits;
}

export namespace InstanceLimits {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceLimits): any => ({
    ...obj,
  });
}

/**
 * <p>Limits that are applicable for given storage type.
 *     </p>
 */
export interface StorageTypeLimit {
  /**
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
   *     </ol>
   *   </p>
   */
  LimitName?: string;

  /**
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

export namespace StorageTypeLimit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StorageTypeLimit): any => ({
    ...obj,
  });
}

/**
 * <p>StorageTypes represents the list of storage related types and their attributes
 *       that are available for given InstanceType.
 *     </p>
 */
export interface StorageType {
  /**
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
   * <p>
   *       SubType of the given storage type.
   *       List of available sub-storage options:
   *       For "instance" storageType we wont have any storageSubType,
   *       in case of "ebs" storageType we will have following valid storageSubTypes
   *       <ol>
   *         <li>standard</li>
   *         <li>gp2</li>
   *         <li>io1</li>
   *       </ol>
   *       Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options.
   *     </p>
   */
  StorageSubTypeName?: string;

  /**
   * <p>List of limits that are applicable for given storage type.
   *     </p>
   */
  StorageTypeLimits?: StorageTypeLimit[];
}

export namespace StorageType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StorageType): any => ({
    ...obj,
  });
}

/**
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
   * <p>StorageType represents the list of storage related types and attributes
   *       that are available for given InstanceType.
   *     </p>
   */
  StorageTypes?: StorageType[];

  /**
   * <p>InstanceLimits represents the list of instance related attributes that are available for given InstanceType.
   *     </p>
   */
  InstanceLimits?: InstanceLimits;

  /**
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

export namespace Limits {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Limits): any => ({
    ...obj,
  });
}

/**
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
  LimitsByRole?: { [key: string]: Limits };
}

export namespace DescribeElasticsearchInstanceTypeLimitsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeElasticsearchInstanceTypeLimitsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 *       A filter used to limit results when describing inbound or outbound cross-cluster search connections.
 *       Multiple values can be specified per filter.
 *       A cross-cluster search connection must match at least one of the specified values for it to be
 *       returned from an operation.
 *     </p>
 */
export interface Filter {
  /**
   * <p>
   *       Specifies the name of the filter.
   *     </p>
   */
  Name?: string;

  /**
   * <p>
   *       Contains one or more values for the filter.
   *     </p>
   */
  Values?: string[];
}

export namespace Filter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the parameters to the <code><a>DescribeInboundCrossClusterSearchConnections</a></code> operation.</p>
 */
export interface DescribeInboundCrossClusterSearchConnectionsRequest {
  /**
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
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p> NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.</p>
   */
  NextToken?: string;
}

export namespace DescribeInboundCrossClusterSearchConnectionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInboundCrossClusterSearchConnectionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a <code><a>DescribeInboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria.</p>
 */
export interface DescribeInboundCrossClusterSearchConnectionsResponse {
  /**
   * <p>Consists of list of <code><a>InboundCrossClusterSearchConnection</a></code> matching the specified filter criteria.</p>
   */
  CrossClusterSearchConnections?: InboundCrossClusterSearchConnection[];

  /**
   * <p>If more results are available and NextToken is present, make the next request to the same API with the received NextToken to paginate the remaining results.
   *     </p>
   */
  NextToken?: string;
}

export namespace DescribeInboundCrossClusterSearchConnectionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInboundCrossClusterSearchConnectionsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request processing has failed because of invalid pagination token provided by customer. Returns an HTTP status code of 400. </p>
 */
export interface InvalidPaginationTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidPaginationTokenException";
  $fault: "client";
  /**
   * <p>A description of the error.</p>
   */
  message?: string;
}

export namespace InvalidPaginationTokenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidPaginationTokenException): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the parameters to the <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> operation.</p>
 */
export interface DescribeOutboundCrossClusterSearchConnectionsRequest {
  /**
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
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p> NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.</p>
   */
  NextToken?: string;
}

export namespace DescribeOutboundCrossClusterSearchConnectionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOutboundCrossClusterSearchConnectionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria.</p>
 */
export interface DescribeOutboundCrossClusterSearchConnectionsResponse {
  /**
   * <p>Consists of list of <code><a>OutboundCrossClusterSearchConnection</a></code> matching the specified filter criteria.</p>
   */
  CrossClusterSearchConnections?: OutboundCrossClusterSearchConnection[];

  /**
   * <p>If more results are available and NextToken is present, make the next request to the same API with the received NextToken to paginate the remaining results.
   *     </p>
   */
  NextToken?: string;
}

export namespace DescribeOutboundCrossClusterSearchConnectionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOutboundCrossClusterSearchConnectionsResponse): any => ({
    ...obj,
  });
}

export enum DescribePackagesFilterName {
  PackageID = "PackageID",
  PackageName = "PackageName",
  PackageStatus = "PackageStatus",
}

/**
 * <p>Filter to apply in <code>DescribePackage</code> response.</p>
 */
export interface DescribePackagesFilter {
  /**
   * <p>Any field from <code>PackageDetails</code>.</p>
   */
  Name?: DescribePackagesFilterName | string;

  /**
   * <p>A list of values for the specified field.</p>
   */
  Value?: string[];
}

export namespace DescribePackagesFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePackagesFilter): any => ({
    ...obj,
  });
}

/**
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
   * <p>Only returns packages that match the <code>DescribePackagesFilterList</code> values.</p>
   */
  Filters?: DescribePackagesFilter[];

  /**
   * <p>Limits results to a maximum number of packages.</p>
   */
  MaxResults?: number;

  /**
   * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.</p>
   */
  NextToken?: string;
}

export namespace DescribePackagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePackagesRequest): any => ({
    ...obj,
  });
}

/**
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
   * <p>List of <code>PackageDetails</code> objects.</p>
   */
  PackageDetailsList?: PackageDetails[];

  NextToken?: string;
}

export namespace DescribePackagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePackagesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Container for parameters to <code>DescribeReservedElasticsearchInstanceOfferings</code></p>
 */
export interface DescribeReservedElasticsearchInstanceOfferingsRequest {
  /**
   * <p>The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.</p>
   */
  ReservedElasticsearchInstanceOfferingId?: string;

  /**
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>NextToken should be sent in case if earlier API call produced result
   * 		containing NextToken. It is used for pagination.</p>
   */
  NextToken?: string;
}

export namespace DescribeReservedElasticsearchInstanceOfferingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservedElasticsearchInstanceOfferingsRequest): any => ({
    ...obj,
  });
}

export type ReservedElasticsearchInstancePaymentOption = "ALL_UPFRONT" | "NO_UPFRONT" | "PARTIAL_UPFRONT";

/**
 * <p>Contains the specific price and frequency of a recurring charges for a reserved Elasticsearch instance, or for a reserved Elasticsearch instance offering.</p>
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

export namespace RecurringCharge {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecurringCharge): any => ({
    ...obj,
  });
}

/**
 * <p>Details of a reserved Elasticsearch instance offering.</p>
 */
export interface ReservedElasticsearchInstanceOffering {
  /**
   * <p>The Elasticsearch reserved instance offering identifier.</p>
   */
  ReservedElasticsearchInstanceOfferingId?: string;

  /**
   * <p>The Elasticsearch instance type offered by the reserved instance offering.</p>
   */
  ElasticsearchInstanceType?: ESPartitionInstanceType | string;

  /**
   * <p>The duration, in seconds, for which the offering will reserve the Elasticsearch instance.</p>
   */
  Duration?: number;

  /**
   * <p>The upfront fixed charge you will pay to purchase the specific reserved Elasticsearch instance offering. </p>
   */
  FixedPrice?: number;

  /**
   * <p>The rate you are charged for each hour the domain that is using the offering is running.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency code for the reserved Elasticsearch instance offering.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>Payment option for the reserved Elasticsearch instance offering</p>
   */
  PaymentOption?: ReservedElasticsearchInstancePaymentOption | string;

  /**
   * <p>The charge to your account regardless of whether you are creating any domains using the instance offering.</p>
   */
  RecurringCharges?: RecurringCharge[];
}

export namespace ReservedElasticsearchInstanceOffering {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedElasticsearchInstanceOffering): any => ({
    ...obj,
  });
}

/**
 * <p>Container for results from <code>DescribeReservedElasticsearchInstanceOfferings</code></p>
 */
export interface DescribeReservedElasticsearchInstanceOfferingsResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>List of reserved Elasticsearch instance offerings</p>
   */
  ReservedElasticsearchInstanceOfferings?: ReservedElasticsearchInstanceOffering[];
}

export namespace DescribeReservedElasticsearchInstanceOfferingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservedElasticsearchInstanceOfferingsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Container for parameters to <code>DescribeReservedElasticsearchInstances</code></p>
 */
export interface DescribeReservedElasticsearchInstancesRequest {
  /**
   * <p>The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the specified reserved Elasticsearch instance ID.</p>
   */
  ReservedElasticsearchInstanceId?: string;

  /**
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>NextToken should be sent in case if earlier API call produced result
   * 		containing NextToken. It is used for pagination.</p>
   */
  NextToken?: string;
}

export namespace DescribeReservedElasticsearchInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservedElasticsearchInstancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details of a reserved Elasticsearch instance.</p>
 */
export interface ReservedElasticsearchInstance {
  /**
   * <p>The customer-specified identifier to track this reservation.</p>
   */
  ReservationName?: string;

  /**
   * <p>The unique identifier for the reservation.</p>
   */
  ReservedElasticsearchInstanceId?: string;

  /**
   * <p>The offering identifier.</p>
   */
  ReservedElasticsearchInstanceOfferingId?: string;

  /**
   * <p>The Elasticsearch instance type offered by the reserved instance offering.</p>
   */
  ElasticsearchInstanceType?: ESPartitionInstanceType | string;

  /**
   * <p>The time the reservation started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The duration, in seconds, for which the Elasticsearch instance is reserved.</p>
   */
  Duration?: number;

  /**
   * <p>The upfront fixed charge you will paid to purchase the specific reserved Elasticsearch instance offering. </p>
   */
  FixedPrice?: number;

  /**
   * <p>The rate you are charged for each hour for the domain that is using this reserved instance.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency code for the reserved Elasticsearch instance offering.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The number of Elasticsearch instances that have been reserved.</p>
   */
  ElasticsearchInstanceCount?: number;

  /**
   * <p>The state of the reserved Elasticsearch instance.</p>
   */
  State?: string;

  /**
   * <p>The payment option as defined in the reserved Elasticsearch instance offering.</p>
   */
  PaymentOption?: ReservedElasticsearchInstancePaymentOption | string;

  /**
   * <p>The charge to your account regardless of whether you are creating any domains using the instance offering.</p>
   */
  RecurringCharges?: RecurringCharge[];
}

export namespace ReservedElasticsearchInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedElasticsearchInstance): any => ({
    ...obj,
  });
}

/**
 * <p>Container for results from <code>DescribeReservedElasticsearchInstances</code></p>
 */
export interface DescribeReservedElasticsearchInstancesResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>List of reserved Elasticsearch instances.</p>
   */
  ReservedElasticsearchInstances?: ReservedElasticsearchInstance[];
}

export namespace DescribeReservedElasticsearchInstancesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservedElasticsearchInstancesResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>Internal ID of the package that you want to associate with a domain. Use <code>DescribePackages</code> to find this value.</p>
   */
  PackageID: string | undefined;

  /**
   * <p>Name of the domain that you want to associate the package with.</p>
   */
  DomainName: string | undefined;
}

export namespace DissociatePackageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DissociatePackageRequest): any => ({
    ...obj,
  });
}

/**
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
   * <p><code>DomainPackageDetails</code></p>
   */
  DomainPackageDetails?: DomainPackageDetails;
}

export namespace DissociatePackageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DissociatePackageResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName?: string;
}

export namespace GetCompatibleElasticsearchVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCompatibleElasticsearchVersionsRequest): any => ({
    ...obj,
  });
}

/**
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
   * <p>The current version of Elasticsearch on which a domain is.</p>
   */
  SourceVersion?: string;

  /**
   * <p>List of supported elastic search versions.
   *     </p>
   */
  TargetVersions?: string[];
}

export namespace CompatibleVersionsMap {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CompatibleVersionsMap): any => ({
    ...obj,
  });
}

/**
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

export namespace GetCompatibleElasticsearchVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCompatibleElasticsearchVersionsResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>Returns an audit history of versions of the package.</p>
   */
  PackageID: string | undefined;

  /**
   * <p>Limits results to a maximum number of versions.</p>
   */
  MaxResults?: number;

  /**
   * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.</p>
   */
  NextToken?: string;
}

export namespace GetPackageVersionHistoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPackageVersionHistoryRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details of a package version.</p>
 */
export interface PackageVersionHistory {
  /**
   * <p>Version of the package.</p>
   */
  PackageVersion?: string;

  /**
   * <p>A message associated with the version.</p>
   */
  CommitMessage?: string;

  /**
   * <p>Timestamp which tells creation time of the package version.</p>
   */
  CreatedAt?: Date;
}

export namespace PackageVersionHistory {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PackageVersionHistory): any => ({
    ...obj,
  });
}

/**
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
   * <p>List of <code>PackageVersionHistory</code> objects.</p>
   */
  PackageVersionHistoryList?: PackageVersionHistory[];

  NextToken?: string;
}

export namespace GetPackageVersionHistoryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPackageVersionHistoryResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>
   *       Set this value to limit the number of results returned.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *       Paginated APIs accepts NextToken input to returns next page results and provides
   *       a NextToken output in the response which can be used by the client to retrieve more results.
   *     </p>
   */
  NextToken?: string;
}

export namespace GetUpgradeHistoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUpgradeHistoryRequest): any => ({
    ...obj,
  });
}

export type UpgradeStep = "PRE_UPGRADE_CHECK" | "SNAPSHOT" | "UPGRADE";

export type UpgradeStatus = "FAILED" | "IN_PROGRESS" | "SUCCEEDED" | "SUCCEEDED_WITH_ISSUES";

/**
 * <p>Represents a single step of the Upgrade or Upgrade Eligibility Check workflow.</p>
 */
export interface UpgradeStepItem {
  /**
   * <p>
   *       Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through:
   *       <ul>
   *         <li>PreUpgradeCheck</li>
   *         <li>Snapshot</li>
   *         <li>Upgrade</li>
   *       </ul>
   *     </p>
   */
  UpgradeStep?: UpgradeStep | string;

  /**
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
  UpgradeStepStatus?: UpgradeStatus | string;

  /**
   * <p>A list of strings containing detailed information about the errors encountered in a particular step.</p>
   */
  Issues?: string[];

  /**
   * <p>The Floating point value representing progress percentage of a particular step.</p>
   */
  ProgressPercent?: number;
}

export namespace UpgradeStepItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpgradeStepItem): any => ({
    ...obj,
  });
}

/**
 * <p>History of the last 10 Upgrades and Upgrade Eligibility Checks.</p>
 */
export interface UpgradeHistory {
  /**
   * <p>A string that describes the update briefly</p>
   */
  UpgradeName?: string;

  /**
   * <p>UTC Timestamp at which the Upgrade API call was made in "yyyy-MM-ddTHH:mm:ssZ" format.</p>
   */
  StartTimestamp?: Date;

  /**
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
  UpgradeStatus?: UpgradeStatus | string;

  /**
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

export namespace UpgradeHistory {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpgradeHistory): any => ({
    ...obj,
  });
}

/**
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
   * <p>Pagination token that needs to be supplied to the next call to get the next page of results</p>
   */
  NextToken?: string;
}

export namespace GetUpgradeHistoryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUpgradeHistoryResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;
}

export namespace GetUpgradeStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUpgradeStatusRequest): any => ({
    ...obj,
  });
}

/**
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
   * <p>
   *       Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through:
   *       <ul>
   *         <li>PreUpgradeCheck</li>
   *         <li>Snapshot</li>
   *         <li>Upgrade</li>
   *       </ul>
   *     </p>
   */
  UpgradeStep?: UpgradeStep | string;

  /**
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
  StepStatus?: UpgradeStatus | string;

  /**
   * <p>A string that describes the update briefly</p>
   */
  UpgradeName?: string;
}

export namespace GetUpgradeStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUpgradeStatusResponse): any => ({
    ...obj,
  });
}

export enum EngineType {
  Elasticsearch = "Elasticsearch",
  OpenSearch = "OpenSearch",
}

/**
 * <p> Container for the parameters to the <code><a>ListDomainNames</a></code> operation.</p>
 */
export interface ListDomainNamesRequest {
  /**
   * <p> Optional parameter to filter the output by domain engine type. Acceptable values are 'Elasticsearch' and 'OpenSearch'. </p>
   */
  EngineType?: EngineType | string;
}

export namespace ListDomainNamesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDomainNamesRequest): any => ({
    ...obj,
  });
}

export interface DomainInfo {
  /**
   * <p> Specifies the <code>DomainName</code>.</p>
   */
  DomainName?: string;

  /**
   * <p> Specifies the <code>EngineType</code> of the domain.</p>
   */
  EngineType?: EngineType | string;
}

export namespace DomainInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainInfo): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a <code>ListDomainNames</code> operation. Contains the names of all domains owned by this account and their respective engine types.</p>
 */
export interface ListDomainNamesResponse {
  /**
   * <p>List of domain names and respective engine types.</p>
   */
  DomainNames?: DomainInfo[];
}

export namespace ListDomainNamesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDomainNamesResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>The package for which to list domains.</p>
   */
  PackageID: string | undefined;

  /**
   * <p>Limits results to a maximum number of domains.</p>
   */
  MaxResults?: number;

  /**
   * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.</p>
   */
  NextToken?: string;
}

export namespace ListDomainsForPackageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDomainsForPackageRequest): any => ({
    ...obj,
  });
}

/**
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
   * <p>List of <code>DomainPackageDetails</code> objects.</p>
   */
  DomainPackageDetailsList?: DomainPackageDetails[];

  NextToken?: string;
}

export namespace ListDomainsForPackageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDomainsForPackageResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>Version of Elasticsearch for which list of supported elasticsearch
   *       instance types are needed.
   *     </p>
   */
  ElasticsearchVersion: string | undefined;

  /**
   * <p>DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are
   *       querying for list of available Elasticsearch instance types when modifying existing domain.
   *     </p>
   */
  DomainName?: string;

  /**
   * <p>
   *     Set this value to limit the number of results returned.
   *     Value provided must be greater than 30 else it wont be honored.
   *   </p>
   */
  MaxResults?: number;

  /**
   * <p>NextToken should be sent in case if earlier API call produced result
   *       containing NextToken. It is used for pagination.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListElasticsearchInstanceTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListElasticsearchInstanceTypesRequest): any => ({
    ...obj,
  });
}

/**
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
   * <p>
   *       List of instance types supported by Amazon Elasticsearch service for
   *       given
   *       <code>
   *         <a>ElasticsearchVersion</a>
   *       </code>
   *     </p>
   */
  ElasticsearchInstanceTypes?: (ESPartitionInstanceType | string)[];

  /**
   * <p>In case if there are more results available NextToken would be
   *       present, make further request to the same API with
   *       received NextToken to paginate remaining results.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListElasticsearchInstanceTypesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListElasticsearchInstanceTypesResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>
   *       Set this value to limit the number of results returned.
   *       Value provided must be greater than 10 else it wont be honored.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *       Paginated APIs accepts NextToken input to returns next page results and provides
   *       a NextToken output in the response which can be used by the client to retrieve more results.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListElasticsearchVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListElasticsearchVersionsRequest): any => ({
    ...obj,
  });
}

/**
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
   * <p>List of supported elastic search versions.
   *     </p>
   */
  ElasticsearchVersions?: string[];

  /**
   * <p>
   *       Paginated APIs accepts NextToken input to returns next page results and provides
   *       a NextToken output in the response which can be used by the client to retrieve more results.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListElasticsearchVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListElasticsearchVersionsResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>The name of the domain for which you want to list associated packages.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Limits results to a maximum number of packages.</p>
   */
  MaxResults?: number;

  /**
   * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.</p>
   */
  NextToken?: string;
}

export namespace ListPackagesForDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPackagesForDomainRequest): any => ({
    ...obj,
  });
}

/**
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
   * <p>List of <code>DomainPackageDetails</code> objects.</p>
   */
  DomainPackageDetailsList?: DomainPackageDetails[];

  /**
   * <p>Pagination token that needs to be supplied to the next call to get the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListPackagesForDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPackagesForDomainResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the parameters to the <code><a>ListTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view are attached.</p>
 */
export interface ListTagsRequest {
  /**
   * <p> Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view.</p>
   */
  ARN: string | undefined;
}

export namespace ListTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a <code>ListTags</code> operation. Contains tags for all requested Elasticsearch domains.</p>
 */
export interface ListTagsResponse {
  /**
   * <p> List of <code>Tag</code> for the requested Elasticsearch domain.</p>
   */
  TagList?: Tag[];
}

export namespace ListTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Container for parameters to <code>PurchaseReservedElasticsearchInstanceOffering</code></p>
 */
export interface PurchaseReservedElasticsearchInstanceOfferingRequest {
  /**
   * <p>The ID of the reserved Elasticsearch instance offering to purchase.</p>
   */
  ReservedElasticsearchInstanceOfferingId: string | undefined;

  /**
   * <p>A customer-specified identifier to track this reservation.</p>
   */
  ReservationName: string | undefined;

  /**
   * <p>The number of Elasticsearch instances to reserve.</p>
   */
  InstanceCount?: number;
}

export namespace PurchaseReservedElasticsearchInstanceOfferingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PurchaseReservedElasticsearchInstanceOfferingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a <code>PurchaseReservedElasticsearchInstanceOffering</code> operation.</p>
 */
export interface PurchaseReservedElasticsearchInstanceOfferingResponse {
  /**
   * <p>Details of the reserved Elasticsearch instance which was purchased.</p>
   */
  ReservedElasticsearchInstanceId?: string;

  /**
   * <p>The customer-specified identifier used to track this reservation.</p>
   */
  ReservationName?: string;
}

export namespace PurchaseReservedElasticsearchInstanceOfferingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PurchaseReservedElasticsearchInstanceOfferingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the parameters to the <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation.</p>
 */
export interface RejectInboundCrossClusterSearchConnectionRequest {
  /**
   * <p>The id of the inbound connection that you want to reject.</p>
   */
  CrossClusterSearchConnectionId: string | undefined;
}

export namespace RejectInboundCrossClusterSearchConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RejectInboundCrossClusterSearchConnectionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation. Contains details of rejected inbound connection.</p>
 */
export interface RejectInboundCrossClusterSearchConnectionResponse {
  /**
   * <p>Specifies the <code><a>InboundCrossClusterSearchConnection</a></code> of rejected inbound connection. </p>
   */
  CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
}

export namespace RejectInboundCrossClusterSearchConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RejectInboundCrossClusterSearchConnectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the parameters to the <code><a>RemoveTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain from which you want to remove the specified <code>TagKey</code>.</p>
 */
export interface RemoveTagsRequest {
  /**
   * <p>Specifies the <code>ARN</code> for the Elasticsearch domain from which you want to delete the specified tags.</p>
   */
  ARN: string | undefined;

  /**
   * <p>Specifies the <code>TagKey</code> list which you want to remove from the Elasticsearch domain.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace RemoveTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveTagsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the parameters to the <code><a>StartElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to schedule a service software update on.</p>
 */
export interface StartElasticsearchServiceSoftwareUpdateRequest {
  /**
   * <p>The name of the domain that you want to update to the latest service software.</p>
   */
  DomainName: string | undefined;
}

export namespace StartElasticsearchServiceSoftwareUpdateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartElasticsearchServiceSoftwareUpdateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a <code>StartElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update.</p>
 */
export interface StartElasticsearchServiceSoftwareUpdateResponse {
  /**
   * <p>The current status of the Elasticsearch service software update.</p>
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}

export namespace StartElasticsearchServiceSoftwareUpdateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartElasticsearchServiceSoftwareUpdateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the parameters to the <code><a>UpdateElasticsearchDomain</a></code> operation. Specifies the type and number of instances in the domain cluster.</p>
 */
export interface UpdateElasticsearchDomainConfigRequest {
  /**
   * <p>The name of the Elasticsearch domain that you are updating. </p>
   */
  DomainName: string | undefined;

  /**
   * <p>The type and number of instances to instantiate for the domain cluster.</p>
   */
  ElasticsearchClusterConfig?: ElasticsearchClusterConfig;

  /**
   * <p>Specify the type and size of the EBS volume that you want to use. </p>
   */
  EBSOptions?: EBSOptions;

  /**
   * <p>Option to set the time, in UTC format, for the daily automated snapshot. Default value is <code>0</code> hours. </p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-creating-vpc" target="_blank">Creating a VPC</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i></p>
   */
  VPCOptions?: VPCOptions;

  /**
   * <p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * <p>Modifies the advanced option to allow references to indices in an HTTP request body.  Must be <code>false</code> when configuring access to individual sub-resources.  By default, the value is <code>true</code>.
   *        See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</p>
   */
  AdvancedOptions?: { [key: string]: string };

  /**
   * <p>IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.</p>
   */
  LogPublishingOptions?: { [key: string]: LogPublishingOption };

  /**
   * <p>Options to specify configuration that will be applied to the domain endpoint.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * <p>Specifies advanced security options.</p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;

  /**
   * <p>Specifies the NodeToNodeEncryptionOptions.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * <p>Specifies the Encryption At Rest Options.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * <p>Specifies Auto-Tune options.</p>
   */
  AutoTuneOptions?: AutoTuneOptions;
}

export namespace UpdateElasticsearchDomainConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateElasticsearchDomainConfigRequest): any => ({
    ...obj,
    ...(obj.AdvancedSecurityOptions && {
      AdvancedSecurityOptions: AdvancedSecurityOptionsInput.filterSensitiveLog(obj.AdvancedSecurityOptions),
    }),
  });
}

/**
 * <p>The result of an <code>UpdateElasticsearchDomain</code> request. Contains the status of the Elasticsearch domain being updated.</p>
 */
export interface UpdateElasticsearchDomainConfigResponse {
  /**
   * <p>The status of the updated Elasticsearch domain. </p>
   */
  DomainConfig: ElasticsearchDomainConfig | undefined;
}

export namespace UpdateElasticsearchDomainConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateElasticsearchDomainConfigResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>Unique identifier for the package.</p>
   */
  PackageID: string | undefined;

  /**
   * <p>The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code></p>
   */
  PackageSource: PackageSource | undefined;

  /**
   * <p>New description of the package.</p>
   */
  PackageDescription?: string;

  /**
   * <p>An info message for the new version which will be shown as part of <code>GetPackageVersionHistoryResponse</code>.</p>
   */
  CommitMessage?: string;
}

export namespace UpdatePackageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePackageRequest): any => ({
    ...obj,
  });
}

/**
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
   * <p>Information about the package <code>PackageDetails</code>.</p>
   */
  PackageDetails?: PackageDetails;
}

export namespace UpdatePackageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePackageResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The version of Elasticsearch that you intend to upgrade the domain to.</p>
   */
  TargetVersion: string | undefined;

  /**
   * <p>
   *       This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed.
   *       This will not actually perform the Upgrade.
   *     </p>
   */
  PerformCheckOnly?: boolean;
}

export namespace UpgradeElasticsearchDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpgradeElasticsearchDomainRequest): any => ({
    ...obj,
  });
}

/**
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
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName?: string;

  /**
   * <p>The version of Elasticsearch that you intend to upgrade the domain to.</p>
   */
  TargetVersion?: string;

  /**
   * <p>
   *       This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed.
   *       This will not actually perform the Upgrade.
   *     </p>
   */
  PerformCheckOnly?: boolean;
}

export namespace UpgradeElasticsearchDomainResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpgradeElasticsearchDomainResponse): any => ({
    ...obj,
  });
}
