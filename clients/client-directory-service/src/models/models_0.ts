import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export interface AcceptSharedDirectoryRequest {
  /**
   * <p>Identifier of the shared directory in the directory consumer account. This identifier is
   *       different for each directory owner account. </p>
   */
  SharedDirectoryId: string | undefined;
}

export namespace AcceptSharedDirectoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptSharedDirectoryRequest): any => ({
    ...obj,
  });
}

export enum ShareMethod {
  HANDSHAKE = "HANDSHAKE",
  ORGANIZATIONS = "ORGANIZATIONS",
}

export enum ShareStatus {
  DELETED = "Deleted",
  DELETING = "Deleting",
  PENDING_ACCEPTANCE = "PendingAcceptance",
  REJECTED = "Rejected",
  REJECTING = "Rejecting",
  REJECT_FAILED = "RejectFailed",
  SHARED = "Shared",
  SHARE_FAILED = "ShareFailed",
  SHARING = "Sharing",
}

/**
 * <p>Details about the shared directory in the directory owner account for which the share
 *       request in the directory consumer account has been accepted.</p>
 */
export interface SharedDirectory {
  /**
   * <p>Identifier of the directory owner account, which contains the directory that has been
   *       shared to the consumer account.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>Identifier of the directory in the directory owner account. </p>
   */
  OwnerDirectoryId?: string;

  /**
   * <p>The method used when sharing a directory to determine whether the directory should be
   *       shared within your Amazon Web Services organization (<code>ORGANIZATIONS</code>) or with any Amazon Web Services account by
   *       sending a shared directory request (<code>HANDSHAKE</code>).</p>
   */
  ShareMethod?: ShareMethod | string;

  /**
   * <p>Identifier of the directory consumer account that has access to the shared directory
   *         (<code>OwnerDirectoryId</code>) in the directory owner account.</p>
   */
  SharedAccountId?: string;

  /**
   * <p>Identifier of the shared directory in the directory consumer account. This identifier is
   *       different for each directory owner account.</p>
   */
  SharedDirectoryId?: string;

  /**
   * <p>Current directory status of the shared Managed Microsoft AD directory.</p>
   */
  ShareStatus?: ShareStatus | string;

  /**
   * <p>A directory share request that is sent by the directory owner to the directory consumer.
   *       The request includes a typed message to help the directory consumer administrator determine
   *       whether to approve or reject the share invitation.</p>
   */
  ShareNotes?: string;

  /**
   * <p>The date and time that the shared directory was created.</p>
   */
  CreatedDateTime?: Date;

  /**
   * <p>The date and time that the shared directory was last updated.</p>
   */
  LastUpdatedDateTime?: Date;
}

export namespace SharedDirectory {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SharedDirectory): any => ({
    ...obj,
    ...(obj.ShareNotes && { ShareNotes: SENSITIVE_STRING }),
  });
}

export interface AcceptSharedDirectoryResult {
  /**
   * <p>The shared directory in the directory consumer account.</p>
   */
  SharedDirectory?: SharedDirectory;
}

export namespace AcceptSharedDirectoryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptSharedDirectoryResult): any => ({
    ...obj,
    ...(obj.SharedDirectory && { SharedDirectory: SharedDirectory.filterSensitiveLog(obj.SharedDirectory) }),
  });
}

/**
 * <p>A client exception has occurred.</p>
 */
export interface ClientException extends __SmithyException, $MetadataBearer {
  name: "ClientException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace ClientException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified directory has already been shared with this Amazon Web Services account.</p>
 */
export interface DirectoryAlreadySharedException extends __SmithyException, $MetadataBearer {
  name: "DirectoryAlreadySharedException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace DirectoryAlreadySharedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryAlreadySharedException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified entity could not be found.</p>
 */
export interface EntityDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "EntityDoesNotExistException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace EntityDoesNotExistException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more parameters are not valid.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace InvalidParameterException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>An exception has occurred in Directory Service.</p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
  name: "ServiceException";
  $fault: "server";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace ServiceException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceException): any => ({
    ...obj,
  });
}

/**
 * <p>Client authentication is not available in this region at this time.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>IP address block. This is often the address block of the DNS server used for your
 *          self-managed domain. </p>
 */
export interface IpRoute {
  /**
   * <p>IP address block using CIDR format, for example 10.0.0.0/24. This is often the
   *          address block of the DNS server used for your self-managed domain. For a single IP address
   *          use a CIDR address block with /32. For example 10.0.0.0/32.</p>
   */
  CidrIp?: string;

  /**
   * <p>Description of the address block.</p>
   */
  Description?: string;
}

export namespace IpRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpRoute): any => ({
    ...obj,
  });
}

export interface AddIpRoutesRequest {
  /**
   * <p>Identifier (ID) of the directory to which to add the address block.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>IP address blocks, using CIDR format, of the traffic to route. This is often the IP
   *          address block of the DNS server used for your self-managed domain.</p>
   */
  IpRoutes: IpRoute[] | undefined;

  /**
   * <p>If set to true, updates the inbound and outbound rules of the security group that has
   *          the description: "Amazon Web Services created security group for <i>directory ID</i>
   *          directory controllers." Following are the new rules: </p>
   *          <p>Inbound:</p>
   *          <ul>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 88, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 123, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 138, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 389, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 464, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 445, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 88, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 135, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 445, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 464, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 636, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 1024-65535, Source:
   *                0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 3268-33269, Source:
   *                0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: DNS (UDP), Protocol: UDP, Range: 53, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: DNS (TCP), Protocol: TCP, Range: 53, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: LDAP, Protocol: TCP, Range: 389, Source: 0.0.0.0/0</p>
   *             </li>
   *             <li>
   *                <p>Type: All ICMP, Protocol: All, Range: N/A, Source: 0.0.0.0/0</p>
   *             </li>
   *          </ul>
   *
   *          <p></p>
   *          <p>Outbound:</p>
   *          <ul>
   *             <li>
   *                <p>Type: All traffic, Protocol: All, Range: All, Destination: 0.0.0.0/0</p>
   *             </li>
   *          </ul>
   *          <p>These security rules impact an internal network interface that is not exposed
   *          publicly.</p>
   */
  UpdateSecurityGroupForDirectoryControllers?: boolean;
}

export namespace AddIpRoutesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddIpRoutesRequest): any => ({
    ...obj,
  });
}

export interface AddIpRoutesResult {}

export namespace AddIpRoutesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddIpRoutesResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified directory is unavailable or could not be found.</p>
 */
export interface DirectoryUnavailableException extends __SmithyException, $MetadataBearer {
  name: "DirectoryUnavailableException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace DirectoryUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified entity already exists.</p>
 */
export interface EntityAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "EntityAlreadyExistsException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace EntityAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum allowed number of IP addresses was exceeded. The default limit is 100 IP
 *          address blocks.</p>
 */
export interface IpRouteLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "IpRouteLimitExceededException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace IpRouteLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpRouteLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.</p>
 */
export interface DirectoryVpcSettings {
  /**
   * <p>The identifier of the VPC in which to create the directory.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The identifiers of the subnets for the directory servers. The two subnets must be in
   *       different Availability Zones. Directory Service creates a directory server and a DNS
   *       server in each of these subnets.</p>
   */
  SubnetIds: string[] | undefined;
}

export namespace DirectoryVpcSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryVpcSettings): any => ({
    ...obj,
  });
}

export interface AddRegionRequest {
  /**
   * <p>The identifier of the directory to which you want to add Region replication.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The name of the Region where you want to add domain controllers for replication. For
   *       example, <code>us-east-1</code>.</p>
   */
  RegionName: string | undefined;

  /**
   * <p>Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.</p>
   */
  VPCSettings: DirectoryVpcSettings | undefined;
}

export namespace AddRegionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddRegionRequest): any => ({
    ...obj,
  });
}

export interface AddRegionResult {}

export namespace AddRegionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddRegionResult): any => ({
    ...obj,
  });
}

/**
 * <p>The Region you specified is the same Region where the Managed Microsoft AD directory
 *       was created. Specify a different Region and try again.</p>
 */
export interface DirectoryAlreadyInRegionException extends __SmithyException, $MetadataBearer {
  name: "DirectoryAlreadyInRegionException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace DirectoryAlreadyInRegionException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryAlreadyInRegionException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified directory does not exist in the system.</p>
 */
export interface DirectoryDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "DirectoryDoesNotExistException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace DirectoryDoesNotExistException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>You have reached the limit for maximum number of simultaneous Region replications per
 *       directory.</p>
 */
export interface RegionLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "RegionLimitExceededException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace RegionLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegionLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The operation is not supported.</p>
 */
export interface UnsupportedOperationException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOperationException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace UnsupportedOperationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata assigned to a directory consisting of a key-value pair.</p>
 */
export interface Tag {
  /**
   * <p>Required name of the tag. The string value can be Unicode characters and cannot be
   *       prefixed with "aws:". The string can contain only the set of Unicode letters, digits,
   *       white-space, '_', '.', '/', '=', '+', '-' (Java regex:
   *       "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
   */
  Key: string | undefined;

  /**
   * <p>The optional value of the tag. The string value can be Unicode characters. The string
   *       can contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-'
   *       (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
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

export interface AddTagsToResourceRequest {
  /**
   * <p>Identifier (ID) for the directory to which to add the tag.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The tags to be assigned to the directory.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace AddTagsToResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddTagsToResourceRequest): any => ({
    ...obj,
  });
}

export interface AddTagsToResourceResult {}

export namespace AddTagsToResourceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddTagsToResourceResult): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum allowed number of tags was exceeded.</p>
 */
export interface TagLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "TagLimitExceededException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace TagLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a named directory attribute.</p>
 */
export interface Attribute {
  /**
   * <p>The name of the attribute.</p>
   */
  Name?: string;

  /**
   * <p>The value of the attribute.</p>
   */
  Value?: string;
}

export namespace Attribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Attribute): any => ({
    ...obj,
  });
}

/**
 * <p>An authentication error occurred.</p>
 */
export interface AuthenticationFailedException extends __SmithyException, $MetadataBearer {
  name: "AuthenticationFailedException";
  $fault: "client";
  /**
   * <p>The textual message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The identifier of the request that caused the exception.</p>
   */
  RequestId?: string;
}

export namespace AuthenticationFailedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuthenticationFailedException): any => ({
    ...obj,
  });
}

export interface CancelSchemaExtensionRequest {
  /**
   * <p>The identifier of the directory whose schema extension will be canceled.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The identifier of the schema extension that will be canceled.</p>
   */
  SchemaExtensionId: string | undefined;
}

export namespace CancelSchemaExtensionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelSchemaExtensionRequest): any => ({
    ...obj,
  });
}

export interface CancelSchemaExtensionResult {}

export namespace CancelSchemaExtensionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelSchemaExtensionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the client certificate authentication settings for the <code>RegisterCertificate</code> and <code>DescribeCertificate</code> operations. </p>
 */
export interface ClientCertAuthSettings {
  /**
   * <p>Specifies the URL of the default OCSP server used to check for revocation status. A secondary value to any OCSP address found in the AIA extension of the user certificate.</p>
   */
  OCSPUrl?: string;
}

export namespace ClientCertAuthSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientCertAuthSettings): any => ({
    ...obj,
  });
}

export enum CertificateState {
  DEREGISTERED = "Deregistered",
  DEREGISTERING = "Deregistering",
  DEREGISTER_FAILED = "DeregisterFailed",
  REGISTERED = "Registered",
  REGISTERING = "Registering",
  REGISTER_FAILED = "RegisterFailed",
}

export enum CertificateType {
  CLIENT_CERT_AUTH = "ClientCertAuth",
  CLIENT_LDAPS = "ClientLDAPS",
}

/**
 * <p>Information about the certificate.</p>
 */
export interface Certificate {
  /**
   * <p>The identifier of the certificate.</p>
   */
  CertificateId?: string;

  /**
   * <p>The state of the certificate.</p>
   */
  State?: CertificateState | string;

  /**
   * <p>Describes a state change for the certificate.</p>
   */
  StateReason?: string;

  /**
   * <p>The common name for the certificate.</p>
   */
  CommonName?: string;

  /**
   * <p>The date and time that the certificate was registered.</p>
   */
  RegisteredDateTime?: Date;

  /**
   * <p>The date and time when the certificate will expire.</p>
   */
  ExpiryDateTime?: Date;

  /**
   * <p>The function that the registered certificate performs. Valid values include <code>ClientLDAPS</code> or <code>ClientCertAuth</code>. The default value is <code>ClientLDAPS</code>.</p>
   */
  Type?: CertificateType | string;

  /**
   * <p>A <code>ClientCertAuthSettings</code> object that contains client certificate authentication settings.</p>
   */
  ClientCertAuthSettings?: ClientCertAuthSettings;
}

export namespace Certificate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Certificate): any => ({
    ...obj,
  });
}

/**
 * <p>The certificate has already been registered into the system.</p>
 */
export interface CertificateAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "CertificateAlreadyExistsException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace CertificateAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>The certificate is not present in the system for describe or deregister activities.</p>
 */
export interface CertificateDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "CertificateDoesNotExistException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace CertificateDoesNotExistException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>Contains general information about a certificate.</p>
 */
export interface CertificateInfo {
  /**
   * <p>The identifier of the certificate.</p>
   */
  CertificateId?: string;

  /**
   * <p>The common name for the certificate.</p>
   */
  CommonName?: string;

  /**
   * <p>The state of the certificate.</p>
   */
  State?: CertificateState | string;

  /**
   * <p>The date and time when the certificate will expire.</p>
   */
  ExpiryDateTime?: Date;

  /**
   * <p>The function that the registered certificate performs. Valid values include <code>ClientLDAPS</code> or <code>ClientCertAuth</code>. The default value is <code>ClientLDAPS</code>.</p>
   */
  Type?: CertificateType | string;
}

export namespace CertificateInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateInfo): any => ({
    ...obj,
  });
}

/**
 * <p>The certificate is being used for the LDAP security connection and cannot be removed
 *       without disabling LDAP security.</p>
 */
export interface CertificateInUseException extends __SmithyException, $MetadataBearer {
  name: "CertificateInUseException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace CertificateInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>The certificate could not be added because the certificate limit has been reached.</p>
 */
export interface CertificateLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "CertificateLimitExceededException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace CertificateLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateLimitExceededException): any => ({
    ...obj,
  });
}

export enum ClientAuthenticationStatus {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

export enum ClientAuthenticationType {
  SMART_CARD = "SmartCard",
}

/**
 * <p>Contains information about a client authentication method for a directory.</p>
 */
export interface ClientAuthenticationSettingInfo {
  /**
   * <p>The type of client authentication for the specified directory. If no type is specified, a list of all client authentication types that are supported for the directory is retrieved. </p>
   */
  Type?: ClientAuthenticationType | string;

  /**
   * <p>Whether the client authentication type is enabled or disabled for the specified directory.</p>
   */
  Status?: ClientAuthenticationStatus | string;

  /**
   * <p>The date and time when the status of the client authentication type was last updated.</p>
   */
  LastUpdatedDateTime?: Date;
}

export namespace ClientAuthenticationSettingInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientAuthenticationSettingInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a computer account in a directory.</p>
 */
export interface Computer {
  /**
   * <p>The identifier of the computer.</p>
   */
  ComputerId?: string;

  /**
   * <p>The computer name.</p>
   */
  ComputerName?: string;

  /**
   * <p>An array of <a>Attribute</a> objects containing the LDAP attributes that belong to the
   *             computer account.</p>
   */
  ComputerAttributes?: Attribute[];
}

export namespace Computer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Computer): any => ({
    ...obj,
  });
}

export enum ReplicationScope {
  Domain = "Domain",
}

/**
 * <p>Points to a remote domain with which you are setting up a trust relationship.
 *       Conditional forwarders are required in order to set up a trust relationship with another
 *       domain.</p>
 */
export interface ConditionalForwarder {
  /**
   * <p>The fully qualified domain name (FQDN) of the remote domains pointed to by the
   *       conditional forwarder.</p>
   */
  RemoteDomainName?: string;

  /**
   * <p>The IP addresses of the remote DNS server associated with RemoteDomainName. This is the
   *       IP address of the DNS server that your conditional forwarder points to.</p>
   */
  DnsIpAddrs?: string[];

  /**
   * <p>The replication scope of the conditional forwarder. The only allowed value is
   *         <code>Domain</code>, which will replicate the conditional forwarder to all of the domain
   *       controllers for your Amazon Web Services directory.</p>
   */
  ReplicationScope?: ReplicationScope | string;
}

export namespace ConditionalForwarder {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConditionalForwarder): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information for the <a>ConnectDirectory</a> operation when an AD
 *       Connector directory is being created.</p>
 */
export interface DirectoryConnectSettings {
  /**
   * <p>The identifier of the VPC in which the AD Connector is created.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>A list of subnet identifiers in the VPC in which the AD Connector is created.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of one or more IP addresses of DNS servers or domain controllers in your self-managed
   *       directory.</p>
   */
  CustomerDnsIps: string[] | undefined;

  /**
   * <p>The user name of an account in your self-managed directory that is used to connect to the
   *       directory. This account must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>Read users and groups</p>
   *             </li>
   *             <li>
   *                <p>Create computer objects</p>
   *             </li>
   *             <li>
   *                <p>Join computers to the domain</p>
   *             </li>
   *          </ul>
   */
  CustomerUserName: string | undefined;
}

export namespace DirectoryConnectSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryConnectSettings): any => ({
    ...obj,
  });
}

export enum DirectorySize {
  LARGE = "Large",
  SMALL = "Small",
}

/**
 * <p>Contains the inputs for the <a>ConnectDirectory</a> operation.</p>
 */
export interface ConnectDirectoryRequest {
  /**
   * <p>The fully qualified name of your self-managed directory, such as
   *         <code>corp.example.com</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The NetBIOS name of your self-managed directory, such as <code>CORP</code>.</p>
   */
  ShortName?: string;

  /**
   * <p>The password for your self-managed user account.</p>
   */
  Password: string | undefined;

  /**
   * <p>A description for the directory.</p>
   */
  Description?: string;

  /**
   * <p>The size of the directory.</p>
   */
  Size: DirectorySize | string | undefined;

  /**
   * <p>A <a>DirectoryConnectSettings</a> object that contains additional information
   *       for the operation.</p>
   */
  ConnectSettings: DirectoryConnectSettings | undefined;

  /**
   * <p>The tags to be assigned to AD Connector.</p>
   */
  Tags?: Tag[];
}

export namespace ConnectDirectoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectDirectoryRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains the results of the <a>ConnectDirectory</a> operation.</p>
 */
export interface ConnectDirectoryResult {
  /**
   * <p>The identifier of the new directory.</p>
   */
  DirectoryId?: string;
}

export namespace ConnectDirectoryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectDirectoryResult): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of directories in the region has been reached. You can use the
 *                 <a>GetDirectoryLimits</a> operation to determine your directory limits in
 *             the region.</p>
 */
export interface DirectoryLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "DirectoryLimitExceededException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace DirectoryLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the inputs for the <a>CreateAlias</a> operation.</p>
 */
export interface CreateAliasRequest {
  /**
   * <p>The identifier of the directory for which to create the alias.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The requested alias.</p>
   *          <p>The alias must be unique amongst all aliases in Amazon Web Services. This operation throws an
   *             <code>EntityAlreadyExistsException</code> error if the alias already exists.</p>
   */
  Alias: string | undefined;
}

export namespace CreateAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAliasRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the results of the <a>CreateAlias</a> operation.</p>
 */
export interface CreateAliasResult {
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The alias for the directory.</p>
   */
  Alias?: string;
}

export namespace CreateAliasResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAliasResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the inputs for the <a>CreateComputer</a> operation.</p>
 */
export interface CreateComputerRequest {
  /**
   * <p>The identifier of the directory in which to create the computer account.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The name of the computer account.</p>
   */
  ComputerName: string | undefined;

  /**
   * <p>A one-time password that is used to join the computer to the directory. You should generate a random, strong password to use for this parameter.</p>
   */
  Password: string | undefined;

  /**
   * <p>The fully-qualified distinguished name of the organizational unit to place the computer account in.</p>
   */
  OrganizationalUnitDistinguishedName?: string;

  /**
   * <p>An array of <a>Attribute</a> objects that contain any LDAP attributes to apply to the
   *             computer account.</p>
   */
  ComputerAttributes?: Attribute[];
}

export namespace CreateComputerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateComputerRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains the results for the <a>CreateComputer</a> operation.</p>
 */
export interface CreateComputerResult {
  /**
   * <p>A <a>Computer</a> object that represents the computer account.</p>
   */
  Computer?: Computer;
}

export namespace CreateComputerResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateComputerResult): any => ({
    ...obj,
  });
}

/**
 * <p>Initiates the creation of a conditional forwarder for your Directory Service for Microsoft Active
 *       Directory. Conditional forwarders are required in order to set up a trust relationship with
 *       another domain.</p>
 */
export interface CreateConditionalForwarderRequest {
  /**
   * <p>The directory ID of the Amazon Web Services directory for which you are creating the conditional
   *       forwarder.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of the remote domain with which you will set up
   *       a trust relationship.</p>
   */
  RemoteDomainName: string | undefined;

  /**
   * <p>The IP addresses of the remote DNS server associated with RemoteDomainName.</p>
   */
  DnsIpAddrs: string[] | undefined;
}

export namespace CreateConditionalForwarderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConditionalForwarderRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a CreateConditinalForwarder request.</p>
 */
export interface CreateConditionalForwarderResult {}

export namespace CreateConditionalForwarderResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConditionalForwarderResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the inputs for the <a>CreateDirectory</a> operation. </p>
 */
export interface CreateDirectoryRequest {
  /**
   * <p>The fully qualified name for the directory, such as <code>corp.example.com</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The NetBIOS name of the directory, such as <code>CORP</code>.</p>
   */
  ShortName?: string;

  /**
   * <p>The password for the directory administrator. The directory creation process creates a
   *       directory administrator account with the user name <code>Administrator</code> and this
   *       password.</p>
   *          <p>If you need to change the password for the administrator account, you can use the <a>ResetUserPassword</a> API call.</p>
   *          <p>The regex pattern for this string is made up of the following conditions:</p>
   *          <ul>
   *             <li>
   *                <p>Length (?=^.{8,64}$) – Must be between 8 and 64 characters</p>
   *             </li>
   *          </ul>
   *          <p>AND any 3 of the following password complexity rules required by Active Directory:</p>
   *          <ul>
   *             <li>
   *                <p>Numbers and upper case and lowercase (?=.*\d)(?=.*[A-Z])(?=.*[a-z])</p>
   *             </li>
   *             <li>
   *                <p>Numbers and special characters and lower case
   *           (?=.*\d)(?=.*[^A-Za-z0-9\s])(?=.*[a-z])</p>
   *             </li>
   *             <li>
   *                <p>Special characters and upper case and lower case
   *           (?=.*[^A-Za-z0-9\s])(?=.*[A-Z])(?=.*[a-z])</p>
   *             </li>
   *             <li>
   *                <p>Numbers and upper case and special characters
   *           (?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9\s])</p>
   *             </li>
   *          </ul>
   *          <p>For additional information about how Active Directory passwords are enforced, see <a href="https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/password-must-meet-complexity-requirements">Password must meet complexity requirements</a> on the Microsoft website.</p>
   */
  Password: string | undefined;

  /**
   * <p>A description for the directory.</p>
   */
  Description?: string;

  /**
   * <p>The size of the directory.</p>
   */
  Size: DirectorySize | string | undefined;

  /**
   * <p>A <a>DirectoryVpcSettings</a> object that contains additional information for
   *       the operation.</p>
   */
  VpcSettings?: DirectoryVpcSettings;

  /**
   * <p>The tags to be assigned to the Simple AD directory.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDirectoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDirectoryRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains the results of the <a>CreateDirectory</a> operation.</p>
 */
export interface CreateDirectoryResult {
  /**
   * <p>The identifier of the directory that was created.</p>
   */
  DirectoryId?: string;
}

export namespace CreateDirectoryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDirectoryResult): any => ({
    ...obj,
  });
}

export interface CreateLogSubscriptionRequest {
  /**
   * <p>Identifier of the directory to which you want to subscribe and receive real-time logs to
   *       your specified CloudWatch log group.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The name of the CloudWatch log group where the real-time domain controller logs are
   *       forwarded.</p>
   */
  LogGroupName: string | undefined;
}

export namespace CreateLogSubscriptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLogSubscriptionRequest): any => ({
    ...obj,
  });
}

export interface CreateLogSubscriptionResult {}

export namespace CreateLogSubscriptionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLogSubscriptionResult): any => ({
    ...obj,
  });
}

/**
 * <p>The account does not have sufficient permission to perform the operation.</p>
 */
export interface InsufficientPermissionsException extends __SmithyException, $MetadataBearer {
  name: "InsufficientPermissionsException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace InsufficientPermissionsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsufficientPermissionsException): any => ({
    ...obj,
  });
}

export enum DirectoryEdition {
  ENTERPRISE = "Enterprise",
  STANDARD = "Standard",
}

/**
 * <p>Creates an Managed Microsoft AD directory.</p>
 */
export interface CreateMicrosoftADRequest {
  /**
   * <p>The fully qualified domain name for the Managed Microsoft AD directory, such as
   *         <code>corp.example.com</code>. This name will resolve inside your VPC only. It does not need
   *       to be publicly resolvable.</p>
   */
  Name: string | undefined;

  /**
   * <p>The NetBIOS name for your domain, such as <code>CORP</code>. If you don't specify a
   *       NetBIOS name, it will default to the first part of your directory DNS. For example,
   *         <code>CORP</code> for the directory DNS <code>corp.example.com</code>. </p>
   */
  ShortName?: string;

  /**
   * <p>The password for the default administrative user named <code>Admin</code>.</p>
   *          <p>If you need to change the password for the administrator account, you can use the <a>ResetUserPassword</a> API call.</p>
   */
  Password: string | undefined;

  /**
   * <p>A description for the directory. This label will appear on the Amazon Web Services console
   *         <code>Directory Details</code> page after the directory is created.</p>
   */
  Description?: string;

  /**
   * <p>Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.</p>
   */
  VpcSettings: DirectoryVpcSettings | undefined;

  /**
   * <p>Managed Microsoft AD is available in two editions: <code>Standard</code> and
   *         <code>Enterprise</code>. <code>Enterprise</code> is the default.</p>
   */
  Edition?: DirectoryEdition | string;

  /**
   * <p>The tags to be assigned to the Managed Microsoft AD directory.</p>
   */
  Tags?: Tag[];
}

export namespace CreateMicrosoftADRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMicrosoftADRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p>Result of a CreateMicrosoftAD request.</p>
 */
export interface CreateMicrosoftADResult {
  /**
   * <p>The identifier of the directory that was created.</p>
   */
  DirectoryId?: string;
}

export namespace CreateMicrosoftADResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMicrosoftADResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the inputs for the <a>CreateSnapshot</a> operation.</p>
 */
export interface CreateSnapshotRequest {
  /**
   * <p>The identifier of the directory of which to take a snapshot.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The descriptive name to apply to the snapshot.</p>
   */
  Name?: string;
}

export namespace CreateSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSnapshotRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the results of the <a>CreateSnapshot</a> operation.</p>
 */
export interface CreateSnapshotResult {
  /**
   * <p>The identifier of the snapshot that was created.</p>
   */
  SnapshotId?: string;
}

export namespace CreateSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of manual snapshots for the directory has been reached. You can
 *             use the <a>GetSnapshotLimits</a> operation to determine the snapshot limits
 *             for a directory.</p>
 */
export interface SnapshotLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "SnapshotLimitExceededException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace SnapshotLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotLimitExceededException): any => ({
    ...obj,
  });
}

export enum SelectiveAuth {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

export enum TrustDirection {
  ONE_WAY_INCOMING = "One-Way: Incoming",
  ONE_WAY_OUTGOING = "One-Way: Outgoing",
  TWO_WAY = "Two-Way",
}

export enum TrustType {
  EXTERNAL = "External",
  FOREST = "Forest",
}

/**
 * <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For
 *       example, you can establish a trust between your Managed Microsoft AD directory, and your existing
 *       self-managed Microsoft Active Directory. This would allow you to provide users and groups
 *       access to resources in either domain, with a single set of credentials.</p>
 *          <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an
 *       Managed Microsoft AD directory and an external domain.</p>
 */
export interface CreateTrustRequest {
  /**
   * <p>The Directory ID of the Managed Microsoft AD directory for which to establish the trust
   *       relationship.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The Fully Qualified Domain Name (FQDN) of the external domain for which to create the
   *       trust relationship.</p>
   */
  RemoteDomainName: string | undefined;

  /**
   * <p>The trust password. The must be the same password that was used when creating the trust
   *       relationship on the external domain.</p>
   */
  TrustPassword: string | undefined;

  /**
   * <p>The direction of the trust relationship.</p>
   */
  TrustDirection: TrustDirection | string | undefined;

  /**
   * <p>The trust relationship type. <code>Forest</code> is the default.</p>
   */
  TrustType?: TrustType | string;

  /**
   * <p>The IP addresses of the remote DNS server associated with RemoteDomainName.</p>
   */
  ConditionalForwarderIpAddrs?: string[];

  /**
   * <p>Optional parameter to enable selective authentication for the trust.</p>
   */
  SelectiveAuth?: SelectiveAuth | string;
}

export namespace CreateTrustRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrustRequest): any => ({
    ...obj,
    ...(obj.TrustPassword && { TrustPassword: SENSITIVE_STRING }),
  });
}

/**
 * <p>The result of a CreateTrust request.</p>
 */
export interface CreateTrustResult {
  /**
   * <p>A unique identifier for the trust relationship that was created.</p>
   */
  TrustId?: string;
}

export namespace CreateTrustResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrustResult): any => ({
    ...obj,
  });
}

/**
 * <p>Deletes a conditional forwarder.</p>
 */
export interface DeleteConditionalForwarderRequest {
  /**
   * <p>The directory ID for which you are deleting the conditional forwarder.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of the remote domain with which you are deleting
   *       the conditional forwarder.</p>
   */
  RemoteDomainName: string | undefined;
}

export namespace DeleteConditionalForwarderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConditionalForwarderRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a DeleteConditionalForwarder request.</p>
 */
export interface DeleteConditionalForwarderResult {}

export namespace DeleteConditionalForwarderResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConditionalForwarderResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the inputs for the <a>DeleteDirectory</a> operation.</p>
 */
export interface DeleteDirectoryRequest {
  /**
   * <p>The identifier of the directory to delete.</p>
   */
  DirectoryId: string | undefined;
}

export namespace DeleteDirectoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDirectoryRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the results of the <a>DeleteDirectory</a> operation.</p>
 */
export interface DeleteDirectoryResult {
  /**
   * <p>The directory identifier.</p>
   */
  DirectoryId?: string;
}

export namespace DeleteDirectoryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDirectoryResult): any => ({
    ...obj,
  });
}

export interface DeleteLogSubscriptionRequest {
  /**
   * <p>Identifier of the directory whose log subscription you want to delete.</p>
   */
  DirectoryId: string | undefined;
}

export namespace DeleteLogSubscriptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLogSubscriptionRequest): any => ({
    ...obj,
  });
}

export interface DeleteLogSubscriptionResult {}

export namespace DeleteLogSubscriptionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLogSubscriptionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the inputs for the <a>DeleteSnapshot</a> operation.</p>
 */
export interface DeleteSnapshotRequest {
  /**
   * <p>The identifier of the directory snapshot to be deleted.</p>
   */
  SnapshotId: string | undefined;
}

export namespace DeleteSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSnapshotRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the results of the <a>DeleteSnapshot</a> operation.</p>
 */
export interface DeleteSnapshotResult {
  /**
   * <p>The identifier of the directory snapshot that was deleted.</p>
   */
  SnapshotId?: string;
}

export namespace DeleteSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p>Deletes the local side of an existing trust relationship between the Managed Microsoft AD
 *       directory and the external domain.</p>
 */
export interface DeleteTrustRequest {
  /**
   * <p>The Trust ID of the trust relationship to be deleted.</p>
   */
  TrustId: string | undefined;

  /**
   * <p>Delete a conditional forwarder as part of a DeleteTrustRequest.</p>
   */
  DeleteAssociatedConditionalForwarder?: boolean;
}

export namespace DeleteTrustRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrustRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a DeleteTrust request.</p>
 */
export interface DeleteTrustResult {
  /**
   * <p>The Trust ID of the trust relationship that was deleted.</p>
   */
  TrustId?: string;
}

export namespace DeleteTrustResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrustResult): any => ({
    ...obj,
  });
}

export interface DeregisterCertificateRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The identifier of the certificate.</p>
   */
  CertificateId: string | undefined;
}

export namespace DeregisterCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterCertificateRequest): any => ({
    ...obj,
  });
}

export interface DeregisterCertificateResult {}

export namespace DeregisterCertificateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterCertificateResult): any => ({
    ...obj,
  });
}

/**
 * <p>Removes the specified directory as a publisher to the specified Amazon SNS topic.</p>
 */
export interface DeregisterEventTopicRequest {
  /**
   * <p>The Directory ID to remove as a publisher. This directory will no longer send messages
   *       to the specified Amazon SNS topic.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The name of the Amazon SNS topic from which to remove the directory as a
   *       publisher.</p>
   */
  TopicName: string | undefined;
}

export namespace DeregisterEventTopicRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterEventTopicRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a DeregisterEventTopic request.</p>
 */
export interface DeregisterEventTopicResult {}

export namespace DeregisterEventTopicResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterEventTopicResult): any => ({
    ...obj,
  });
}

export interface DescribeCertificateRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The identifier of the certificate.</p>
   */
  CertificateId: string | undefined;
}

export namespace DescribeCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCertificateRequest): any => ({
    ...obj,
  });
}

export interface DescribeCertificateResult {
  /**
   * <p>Information about the certificate, including registered date time, certificate state, the
   *       reason for the state, expiration date time, and certificate common name.</p>
   */
  Certificate?: Certificate;
}

export namespace DescribeCertificateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCertificateResult): any => ({
    ...obj,
  });
}

export interface DescribeClientAuthenticationSettingsRequest {
  /**
   * <p>The identifier of the directory for which to retrieve information.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The type of client authentication for which to retrieve information. If no type is specified, a list of all client authentication types that are supported for the specified directory is retrieved.</p>
   */
  Type?: ClientAuthenticationType | string;

  /**
   * <p>The <i>DescribeClientAuthenticationSettingsResult.NextToken</i> value from a previous call to <a>DescribeClientAuthenticationSettings</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return. If this value is zero, the maximum number of items is specified by the limitations of the operation. </p>
   */
  Limit?: number;
}

export namespace DescribeClientAuthenticationSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClientAuthenticationSettingsRequest): any => ({
    ...obj,
  });
}

export interface DescribeClientAuthenticationSettingsResult {
  /**
   * <p>Information about the type of client authentication for the specified directory. The following information is retrieved: The date and time when the status of the client authentication type was last updated, whether the client authentication type is enabled or disabled, and the type of client authentication.</p>
   */
  ClientAuthenticationSettingsInfo?: ClientAuthenticationSettingInfo[];

  /**
   * <p>The next token used to retrieve the client authentication settings if the number of setting types exceeds
   *       page limit and there is another page.</p>
   */
  NextToken?: string;
}

export namespace DescribeClientAuthenticationSettingsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClientAuthenticationSettingsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a conditional forwarder.</p>
 */
export interface DescribeConditionalForwardersRequest {
  /**
   * <p>The directory ID for which to get the list of associated conditional
   *       forwarders.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The fully qualified domain names (FQDN) of the remote domains for which to get the list
   *       of associated conditional forwarders. If this member is null, all conditional forwarders are
   *       returned.</p>
   */
  RemoteDomainNames?: string[];
}

export namespace DescribeConditionalForwardersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConditionalForwardersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a DescribeConditionalForwarder request.</p>
 */
export interface DescribeConditionalForwardersResult {
  /**
   * <p>The list of conditional forwarders that have been created.</p>
   */
  ConditionalForwarders?: ConditionalForwarder[];
}

export namespace DescribeConditionalForwardersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConditionalForwardersResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the inputs for the <a>DescribeDirectories</a> operation.</p>
 */
export interface DescribeDirectoriesRequest {
  /**
   * <p>A list of identifiers of the directories for which to obtain the information. If this
   *       member is null, all directories that belong to the current account are returned.</p>
   *          <p>An empty list results in an <code>InvalidParameterException</code> being thrown.</p>
   */
  DirectoryIds?: string[];

  /**
   * <p>The <code>DescribeDirectoriesResult.NextToken</code> value from a previous call to <a>DescribeDirectories</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return. If this value is zero, the maximum number of items
   *       is specified by the limitations of the operation.</p>
   */
  Limit?: number;
}

export namespace DescribeDirectoriesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDirectoriesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an AD Connector directory.</p>
 */
export interface DirectoryConnectSettingsDescription {
  /**
   * <p>The identifier of the VPC that the AD Connector is in.</p>
   */
  VpcId?: string;

  /**
   * <p>A list of subnet identifiers in the VPC that the AD Connector is in.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The user name of the service account in your self-managed directory.</p>
   */
  CustomerUserName?: string;

  /**
   * <p>The security group identifier for the AD Connector directory.</p>
   */
  SecurityGroupId?: string;

  /**
   * <p>A list of the Availability Zones that the directory is in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The IP addresses of the AD Connector servers.</p>
   */
  ConnectIps?: string[];
}

export namespace DirectoryConnectSettingsDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryConnectSettingsDescription): any => ({
    ...obj,
  });
}

export enum RadiusAuthenticationProtocol {
  CHAP = "CHAP",
  MSCHAPV1 = "MS-CHAPv1",
  MSCHAPV2 = "MS-CHAPv2",
  PAP = "PAP",
}

/**
 * <p>Contains information about a Remote Authentication Dial In User Service (RADIUS)
 *          server.</p>
 */
export interface RadiusSettings {
  /**
   * <p>An array of strings that contains the fully qualified domain name (FQDN) or IP
   *          addresses of the RADIUS server endpoints, or the FQDN or IP addresses of your RADIUS server
   *          load balancer.</p>
   */
  RadiusServers?: string[];

  /**
   * <p>The port that your RADIUS server is using for communications. Your self-managed
   *          network must allow inbound traffic over this port from the Directory Service servers.</p>
   */
  RadiusPort?: number;

  /**
   * <p>The amount of time, in seconds, to wait for the RADIUS server to respond.</p>
   */
  RadiusTimeout?: number;

  /**
   * <p>The maximum number of times that communication with the RADIUS server is
   *          attempted.</p>
   */
  RadiusRetries?: number;

  /**
   * <p>Required for enabling RADIUS on the directory.</p>
   */
  SharedSecret?: string;

  /**
   * <p>The protocol specified for your RADIUS endpoints.</p>
   */
  AuthenticationProtocol?: RadiusAuthenticationProtocol | string;

  /**
   * <p>Not currently used.</p>
   */
  DisplayLabel?: string;

  /**
   * <p>Not currently used.</p>
   */
  UseSameUsername?: boolean;
}

export namespace RadiusSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RadiusSettings): any => ({
    ...obj,
    ...(obj.SharedSecret && { SharedSecret: SENSITIVE_STRING }),
  });
}

export enum RadiusStatus {
  COMPLETED = "Completed",
  CREATING = "Creating",
  FAILED = "Failed",
}

/**
 * <p>Contains information about the directory.</p>
 */
export interface DirectoryVpcSettingsDescription {
  /**
   * <p>The identifier of the VPC that the directory is in.</p>
   */
  VpcId?: string;

  /**
   * <p>The identifiers of the subnets for the directory servers.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The domain controller security group identifier for the directory.</p>
   */
  SecurityGroupId?: string;

  /**
   * <p>The list of Availability Zones that the directory is in.</p>
   */
  AvailabilityZones?: string[];
}

export namespace DirectoryVpcSettingsDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryVpcSettingsDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the directory owner account details that have been shared to the directory
 *       consumer account.</p>
 */
export interface OwnerDirectoryDescription {
  /**
   * <p>Identifier of the Managed Microsoft AD directory in the directory owner
   *       account.</p>
   */
  DirectoryId?: string;

  /**
   * <p>Identifier of the directory owner account.</p>
   */
  AccountId?: string;

  /**
   * <p>IP address of the directory’s domain controllers.</p>
   */
  DnsIpAddrs?: string[];

  /**
   * <p>Information about the VPC settings for the directory.</p>
   */
  VpcSettings?: DirectoryVpcSettingsDescription;

  /**
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS
   *       server.</p>
   */
  RadiusSettings?: RadiusSettings;

  /**
   * <p>Information about the status of the RADIUS server.</p>
   */
  RadiusStatus?: RadiusStatus | string;
}

export namespace OwnerDirectoryDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OwnerDirectoryDescription): any => ({
    ...obj,
    ...(obj.RadiusSettings && { RadiusSettings: RadiusSettings.filterSensitiveLog(obj.RadiusSettings) }),
  });
}

/**
 * <p>Provides information about the Regions that are configured for multi-Region
 *       replication.</p>
 */
export interface RegionsInfo {
  /**
   * <p>The Region where the Managed Microsoft AD directory was originally created.</p>
   */
  PrimaryRegion?: string;

  /**
   * <p>Lists the Regions where the directory has been replicated, excluding the primary
   *       Region.</p>
   */
  AdditionalRegions?: string[];
}

export namespace RegionsInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegionsInfo): any => ({
    ...obj,
  });
}

export enum DirectoryStage {
  ACTIVE = "Active",
  CREATED = "Created",
  CREATING = "Creating",
  DELETED = "Deleted",
  DELETING = "Deleting",
  FAILED = "Failed",
  IMPAIRED = "Impaired",
  INOPERABLE = "Inoperable",
  REQUESTED = "Requested",
  RESTOREFAILED = "RestoreFailed",
  RESTORING = "Restoring",
}

export enum DirectoryType {
  AD_CONNECTOR = "ADConnector",
  MICROSOFT_AD = "MicrosoftAD",
  SHARED_MICROSOFT_AD = "SharedMicrosoftAD",
  SIMPLE_AD = "SimpleAD",
}

/**
 * <p>Contains information about an Directory Service directory.</p>
 */
export interface DirectoryDescription {
  /**
   * <p>The directory identifier.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The fully qualified name of the directory.</p>
   */
  Name?: string;

  /**
   * <p>The short name of the directory.</p>
   */
  ShortName?: string;

  /**
   * <p>The directory size.</p>
   */
  Size?: DirectorySize | string;

  /**
   * <p>The edition associated with this directory.</p>
   */
  Edition?: DirectoryEdition | string;

  /**
   * <p>The alias for the directory. If no alias has been created for the directory, the alias is
   *       the directory identifier, such as <code>d-XXXXXXXXXX</code>.</p>
   */
  Alias?: string;

  /**
   * <p>The access URL for the directory, such as
   *         <code>http://<alias>.awsapps.com</code>. If no alias has been created for the
   *       directory, <code><alias></code> is the directory identifier, such as
   *         <code>d-XXXXXXXXXX</code>.</p>
   */
  AccessUrl?: string;

  /**
   * <p>The description for the directory.</p>
   */
  Description?: string;

  /**
   * <p>The IP addresses of the DNS servers for the directory. For a Simple AD or Microsoft AD
   *       directory, these are the IP addresses of the Simple AD or Microsoft AD directory servers. For
   *       an AD Connector directory, these are the IP addresses of the DNS servers or domain controllers
   *       in your self-managed directory to which the AD Connector is connected.</p>
   */
  DnsIpAddrs?: string[];

  /**
   * <p>The current stage of the directory.</p>
   */
  Stage?: DirectoryStage | string;

  /**
   * <p>Current directory status of the shared Managed Microsoft AD directory.</p>
   */
  ShareStatus?: ShareStatus | string;

  /**
   * <p>The method used when sharing a directory to determine whether the directory should be
   *       shared within your Amazon Web Services organization (<code>ORGANIZATIONS</code>) or with any Amazon Web Services account by
   *       sending a shared directory request (<code>HANDSHAKE</code>).</p>
   */
  ShareMethod?: ShareMethod | string;

  /**
   * <p>A directory share request that is sent by the directory owner to the directory consumer.
   *       The request includes a typed message to help the directory consumer administrator determine
   *       whether to approve or reject the share invitation.</p>
   */
  ShareNotes?: string;

  /**
   * <p>Specifies when the directory was created.</p>
   */
  LaunchTime?: Date;

  /**
   * <p>The date and time that the stage was last updated.</p>
   */
  StageLastUpdatedDateTime?: Date;

  /**
   * <p>The directory size.</p>
   */
  Type?: DirectoryType | string;

  /**
   * <p>A <a>DirectoryVpcSettingsDescription</a> object that contains additional
   *       information about a directory. This member is only present if the directory is a Simple AD or
   *       Managed Microsoft AD directory.</p>
   */
  VpcSettings?: DirectoryVpcSettingsDescription;

  /**
   * <p>A <a>DirectoryConnectSettingsDescription</a> object that contains additional
   *       information about an AD Connector directory. This member is only present if the directory is
   *       an AD Connector directory.</p>
   */
  ConnectSettings?: DirectoryConnectSettingsDescription;

  /**
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS
   *       server configured for this directory.</p>
   */
  RadiusSettings?: RadiusSettings;

  /**
   * <p>The status of the RADIUS MFA server connection.</p>
   */
  RadiusStatus?: RadiusStatus | string;

  /**
   * <p>Additional information about the directory stage.</p>
   */
  StageReason?: string;

  /**
   * <p>Indicates if single sign-on is enabled for the directory. For more information, see <a>EnableSso</a> and <a>DisableSso</a>.</p>
   */
  SsoEnabled?: boolean;

  /**
   * <p>The desired number of domain controllers in the directory if the directory is Microsoft
   *       AD.</p>
   */
  DesiredNumberOfDomainControllers?: number;

  /**
   * <p>Describes the Managed Microsoft AD directory in the directory owner account.</p>
   */
  OwnerDirectoryDescription?: OwnerDirectoryDescription;

  /**
   * <p>Lists the Regions where the directory has replicated.</p>
   */
  RegionsInfo?: RegionsInfo;
}

export namespace DirectoryDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryDescription): any => ({
    ...obj,
    ...(obj.ShareNotes && { ShareNotes: SENSITIVE_STRING }),
    ...(obj.RadiusSettings && { RadiusSettings: RadiusSettings.filterSensitiveLog(obj.RadiusSettings) }),
    ...(obj.OwnerDirectoryDescription && {
      OwnerDirectoryDescription: OwnerDirectoryDescription.filterSensitiveLog(obj.OwnerDirectoryDescription),
    }),
  });
}

/**
 * <p>Contains the results of the <a>DescribeDirectories</a> operation.</p>
 */
export interface DescribeDirectoriesResult {
  /**
   * <p>The list of <a>DirectoryDescription</a> objects that were retrieved.</p>
   *          <p>It is possible that this list contains less than the number of items specified in the
   *         <code>Limit</code> member of the request. This occurs if there are less than the requested
   *       number of items left to retrieve, or if the limitations of the operation have been
   *       exceeded.</p>
   */
  DirectoryDescriptions?: DirectoryDescription[];

  /**
   * <p>If not null, more results are available. Pass this value for the <code>NextToken</code>
   *       parameter in a subsequent call to <a>DescribeDirectories</a> to retrieve the next
   *       set of items.</p>
   */
  NextToken?: string;
}

export namespace DescribeDirectoriesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDirectoriesResult): any => ({
    ...obj,
    ...(obj.DirectoryDescriptions && {
      DirectoryDescriptions: obj.DirectoryDescriptions.map((item) => DirectoryDescription.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>The <code>NextToken</code> value is not valid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace InvalidNextTokenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

export interface DescribeDomainControllersRequest {
  /**
   * <p>Identifier of the directory for which to retrieve the domain controller
   *       information.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>A list of identifiers for the domain controllers whose information will be
   *       provided.</p>
   */
  DomainControllerIds?: string[];

  /**
   * <p>The <i>DescribeDomainControllers.NextToken</i> value from a previous call
   *       to <a>DescribeDomainControllers</a>. Pass null if this is the first call.
   *     </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;
}

export namespace DescribeDomainControllersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDomainControllersRequest): any => ({
    ...obj,
  });
}

export enum DomainControllerStatus {
  ACTIVE = "Active",
  CREATING = "Creating",
  DELETED = "Deleted",
  DELETING = "Deleting",
  FAILED = "Failed",
  IMPAIRED = "Impaired",
  RESTORING = "Restoring",
}

/**
 * <p>Contains information about the domain controllers for a specified directory.</p>
 */
export interface DomainController {
  /**
   * <p>Identifier of the directory where the domain controller resides.</p>
   */
  DirectoryId?: string;

  /**
   * <p>Identifies a specific domain controller in the directory.</p>
   */
  DomainControllerId?: string;

  /**
   * <p>The IP address of the domain controller.</p>
   */
  DnsIpAddr?: string;

  /**
   * <p>The identifier of the VPC that contains the domain controller.</p>
   */
  VpcId?: string;

  /**
   * <p>Identifier of the subnet in the VPC that contains the domain controller.</p>
   */
  SubnetId?: string;

  /**
   * <p>The Availability Zone where the domain controller is located.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The status of the domain controller.</p>
   */
  Status?: DomainControllerStatus | string;

  /**
   * <p>A description of the domain controller state.</p>
   */
  StatusReason?: string;

  /**
   * <p>Specifies when the domain controller was created.</p>
   */
  LaunchTime?: Date;

  /**
   * <p>The date and time that the status was last updated.</p>
   */
  StatusLastUpdatedDateTime?: Date;
}

export namespace DomainController {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainController): any => ({
    ...obj,
  });
}

export interface DescribeDomainControllersResult {
  /**
   * <p>List of the <a>DomainController</a> objects that were retrieved.</p>
   */
  DomainControllers?: DomainController[];

  /**
   * <p>If not null, more results are available. Pass this value for the <code>NextToken</code>
   *       parameter in a subsequent call to <a>DescribeDomainControllers</a> retrieve the
   *       next set of items.</p>
   */
  NextToken?: string;
}

export namespace DescribeDomainControllersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDomainControllersResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes event topics.</p>
 */
export interface DescribeEventTopicsRequest {
  /**
   * <p>The Directory ID for which to get the list of associated Amazon SNS topics. If this member
   *       is null, associations for all Directory IDs are returned.</p>
   */
  DirectoryId?: string;

  /**
   * <p>A list of Amazon SNS topic names for which to obtain the information. If this member is
   *       null, all associations for the specified Directory ID are returned.</p>
   *          <p>An empty list results in an <code>InvalidParameterException</code> being
   *       thrown.</p>
   */
  TopicNames?: string[];
}

export namespace DescribeEventTopicsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventTopicsRequest): any => ({
    ...obj,
  });
}

export enum TopicStatus {
  DELETED = "Deleted",
  FAILED = "Failed",
  REGISTERED = "Registered",
  TOPIC_NOT_FOUND = "Topic not found",
}

/**
 * <p>Information about Amazon SNS topic and Directory Service directory associations.</p>
 */
export interface EventTopic {
  /**
   * <p>The Directory ID of an Directory Service directory that will publish status messages to an Amazon SNS
   *       topic.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The name of an Amazon SNS topic the receives status messages from the directory.</p>
   */
  TopicName?: string;

  /**
   * <p>The Amazon SNS topic ARN (Amazon Resource Name).</p>
   */
  TopicArn?: string;

  /**
   * <p>The date and time of when you associated your directory with the Amazon SNS topic.</p>
   */
  CreatedDateTime?: Date;

  /**
   * <p>The topic registration status.</p>
   */
  Status?: TopicStatus | string;
}

export namespace EventTopic {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventTopic): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a DescribeEventTopic request.</p>
 */
export interface DescribeEventTopicsResult {
  /**
   * <p>A list of Amazon SNS topic names that receive status messages from the specified Directory
   *       ID.</p>
   */
  EventTopics?: EventTopic[];
}

export namespace DescribeEventTopicsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventTopicsResult): any => ({
    ...obj,
  });
}

export enum LDAPSType {
  CLIENT = "Client",
}

export interface DescribeLDAPSSettingsRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The type of LDAP security to enable. Currently only the value <code>Client</code> is
   *       supported.</p>
   */
  Type?: LDAPSType | string;

  /**
   * <p>The type of next token used for pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the number of items that should be displayed on one page.</p>
   */
  Limit?: number;
}

export namespace DescribeLDAPSSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLDAPSSettingsRequest): any => ({
    ...obj,
  });
}

export enum LDAPSStatus {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
  ENABLE_FAILED = "EnableFailed",
  ENABLING = "Enabling",
}

/**
 * <p>Contains general information about the LDAPS settings.</p>
 */
export interface LDAPSSettingInfo {
  /**
   * <p>The state of the LDAPS settings.</p>
   */
  LDAPSStatus?: LDAPSStatus | string;

  /**
   * <p>Describes a state change for LDAPS.</p>
   */
  LDAPSStatusReason?: string;

  /**
   * <p>The date and time when the LDAPS settings were last updated.</p>
   */
  LastUpdatedDateTime?: Date;
}

export namespace LDAPSSettingInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LDAPSSettingInfo): any => ({
    ...obj,
  });
}

export interface DescribeLDAPSSettingsResult {
  /**
   * <p>Information about LDAP security for the specified directory, including status of
   *       enablement, state last updated date time, and the reason for the state.</p>
   */
  LDAPSSettingsInfo?: LDAPSSettingInfo[];

  /**
   * <p>The next token used to retrieve the LDAPS settings if the number of setting types exceeds
   *       page limit and there is another page.</p>
   */
  NextToken?: string;
}

export namespace DescribeLDAPSSettingsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLDAPSSettingsResult): any => ({
    ...obj,
  });
}

export interface DescribeRegionsRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The name of the Region. For example, <code>us-east-1</code>.</p>
   */
  RegionName?: string;

  /**
   * <p>The <code>DescribeRegionsResult.NextToken</code> value from a previous call to <a>DescribeRegions</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;
}

export namespace DescribeRegionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRegionsRequest): any => ({
    ...obj,
  });
}

export enum RegionType {
  ADDITIONAL = "Additional",
  PRIMARY = "Primary",
}

/**
 * <p>The replicated Region information for a directory.</p>
 */
export interface RegionDescription {
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The name of the Region. For example, <code>us-east-1</code>.</p>
   */
  RegionName?: string;

  /**
   * <p>Specifies whether the Region is the primary Region or an additional Region.</p>
   */
  RegionType?: RegionType | string;

  /**
   * <p>The status of the replication process for the specified Region.</p>
   */
  Status?: DirectoryStage | string;

  /**
   * <p>Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.</p>
   */
  VpcSettings?: DirectoryVpcSettings;

  /**
   * <p>The desired number of domain controllers in the specified Region for the specified
   *       directory.</p>
   */
  DesiredNumberOfDomainControllers?: number;

  /**
   * <p>Specifies when the Region replication began.</p>
   */
  LaunchTime?: Date;

  /**
   * <p>The date and time that the Region status was last updated.</p>
   */
  StatusLastUpdatedDateTime?: Date;

  /**
   * <p>The date and time that the Region description was last updated.</p>
   */
  LastUpdatedDateTime?: Date;
}

export namespace RegionDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegionDescription): any => ({
    ...obj,
  });
}

export interface DescribeRegionsResult {
  /**
   * <p>List of Region information related to the directory for each replicated Region.</p>
   */
  RegionsDescription?: RegionDescription[];

  /**
   * <p>If not null, more results are available. Pass this value for the <code>NextToken</code>
   *       parameter in a subsequent call to <a>DescribeRegions</a> to retrieve the next set
   *       of items.</p>
   */
  NextToken?: string;
}

export namespace DescribeRegionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRegionsResult): any => ({
    ...obj,
  });
}

export interface DescribeSharedDirectoriesRequest {
  /**
   * <p>Returns the identifier of the directory in the directory owner account. </p>
   */
  OwnerDirectoryId: string | undefined;

  /**
   * <p>A list of identifiers of all shared directories in your account. </p>
   */
  SharedDirectoryIds?: string[];

  /**
   * <p>The <code>DescribeSharedDirectoriesResult.NextToken</code> value from a previous call to
   *         <a>DescribeSharedDirectories</a>. Pass null if this is the first call. </p>
   */
  NextToken?: string;

  /**
   * <p>The number of shared directories to return in the response object.</p>
   */
  Limit?: number;
}

export namespace DescribeSharedDirectoriesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSharedDirectoriesRequest): any => ({
    ...obj,
  });
}

export interface DescribeSharedDirectoriesResult {
  /**
   * <p>A list of all shared directories in your account.</p>
   */
  SharedDirectories?: SharedDirectory[];

  /**
   * <p>If not null, token that indicates that more results are available. Pass this value for the
   *         <code>NextToken</code> parameter in a subsequent call to <a>DescribeSharedDirectories</a> to retrieve the next set of items.</p>
   */
  NextToken?: string;
}

export namespace DescribeSharedDirectoriesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSharedDirectoriesResult): any => ({
    ...obj,
    ...(obj.SharedDirectories && {
      SharedDirectories: obj.SharedDirectories.map((item) => SharedDirectory.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>Contains the inputs for the <a>DescribeSnapshots</a> operation.</p>
 */
export interface DescribeSnapshotsRequest {
  /**
   * <p>The identifier of the directory for which to retrieve snapshot information.</p>
   */
  DirectoryId?: string;

  /**
   * <p>A list of identifiers of the snapshots to obtain the information for. If this member is
   *          null or empty, all snapshots are returned using the <i>Limit</i> and <i>NextToken</i>
   *          members.</p>
   */
  SnapshotIds?: string[];

  /**
   * <p>The <i>DescribeSnapshotsResult.NextToken</i> value from a previous call to
   *             <a>DescribeSnapshots</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects to return.</p>
   */
  Limit?: number;
}

export namespace DescribeSnapshotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSnapshotsRequest): any => ({
    ...obj,
  });
}

export enum SnapshotStatus {
  COMPLETED = "Completed",
  CREATING = "Creating",
  FAILED = "Failed",
}

export enum SnapshotType {
  AUTO = "Auto",
  MANUAL = "Manual",
}

/**
 * <p>Describes a directory snapshot.</p>
 */
export interface Snapshot {
  /**
   * <p>The directory identifier.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The snapshot identifier.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The snapshot type.</p>
   */
  Type?: SnapshotType | string;

  /**
   * <p>The descriptive name of the snapshot.</p>
   */
  Name?: string;

  /**
   * <p>The snapshot status.</p>
   */
  Status?: SnapshotStatus | string;

  /**
   * <p>The date and time that the snapshot was taken.</p>
   */
  StartTime?: Date;
}

export namespace Snapshot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Snapshot): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the results of the <a>DescribeSnapshots</a> operation.</p>
 */
export interface DescribeSnapshotsResult {
  /**
   * <p>The list of <a>Snapshot</a> objects that were retrieved.</p>
   *          <p>It is possible that this list contains less than the number of items specified in the
   *             <i>Limit</i> member of the request. This occurs if there are less than the requested
   *          number of items left to retrieve, or if the limitations of the operation have been
   *          exceeded.</p>
   */
  Snapshots?: Snapshot[];

  /**
   * <p>If not null, more results are available. Pass this value in the <i>NextToken</i> member of
   *          a subsequent call to <a>DescribeSnapshots</a>.</p>
   */
  NextToken?: string;
}

export namespace DescribeSnapshotsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSnapshotsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the trust relationships for a particular Managed Microsoft AD directory. If no input
 *       parameters are provided, such as directory ID or trust ID, this request describes all the
 *       trust relationships.</p>
 */
export interface DescribeTrustsRequest {
  /**
   * <p>The Directory ID of the Amazon Web Services directory that is a part of the requested trust
   *       relationship.</p>
   */
  DirectoryId?: string;

  /**
   * <p>A list of identifiers of the trust relationships for which to obtain the information. If
   *       this member is null, all trust relationships that belong to the current account are
   *       returned.</p>
   *          <p>An empty list results in an <code>InvalidParameterException</code> being thrown.</p>
   */
  TrustIds?: string[];

  /**
   * <p>The <i>DescribeTrustsResult.NextToken</i> value from a previous call to
   *         <a>DescribeTrusts</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of objects to return.</p>
   */
  Limit?: number;
}

export namespace DescribeTrustsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTrustsRequest): any => ({
    ...obj,
  });
}

export enum TrustState {
  CREATED = "Created",
  CREATING = "Creating",
  DELETED = "Deleted",
  DELETING = "Deleting",
  FAILED = "Failed",
  UPDATED = "Updated",
  UPDATE_FAILED = "UpdateFailed",
  UPDATING = "Updating",
  VERIFIED = "Verified",
  VERIFYING = "Verifying",
  VERIFY_FAILED = "VerifyFailed",
}

/**
 * <p>Describes a trust relationship between an Managed Microsoft AD directory and an external
 *       domain.</p>
 */
export interface Trust {
  /**
   * <p>The Directory ID of the Amazon Web Services directory involved in the trust relationship.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The unique ID of the trust relationship.</p>
   */
  TrustId?: string;

  /**
   * <p>The Fully Qualified Domain Name (FQDN) of the external domain involved in the trust
   *       relationship.</p>
   */
  RemoteDomainName?: string;

  /**
   * <p>The trust relationship type. <code>Forest</code> is the default.</p>
   */
  TrustType?: TrustType | string;

  /**
   * <p>The trust relationship direction.</p>
   */
  TrustDirection?: TrustDirection | string;

  /**
   * <p>The trust relationship state.</p>
   */
  TrustState?: TrustState | string;

  /**
   * <p>The date and time that the trust relationship was created.</p>
   */
  CreatedDateTime?: Date;

  /**
   * <p>The date and time that the trust relationship was last updated.</p>
   */
  LastUpdatedDateTime?: Date;

  /**
   * <p>The date and time that the TrustState was last updated.</p>
   */
  StateLastUpdatedDateTime?: Date;

  /**
   * <p>The reason for the TrustState.</p>
   */
  TrustStateReason?: string;

  /**
   * <p>Current state of selective authentication for the trust.</p>
   */
  SelectiveAuth?: SelectiveAuth | string;
}

export namespace Trust {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Trust): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a DescribeTrust request.</p>
 */
export interface DescribeTrustsResult {
  /**
   * <p>The list of Trust objects that were retrieved.</p>
   *          <p>It is possible that this list contains less than the number of items specified in the
   *         <i>Limit</i> member of the request. This occurs if there are less than the
   *       requested number of items left to retrieve, or if the limitations of the operation have been
   *       exceeded.</p>
   */
  Trusts?: Trust[];

  /**
   * <p>If not null, more results are available. Pass this value for the
   *         <i>NextToken</i> parameter in a subsequent call to <a>DescribeTrusts</a> to retrieve the next set of items.</p>
   */
  NextToken?: string;
}

export namespace DescribeTrustsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTrustsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains directory limit information for a Region.</p>
 */
export interface DirectoryLimits {
  /**
   * <p>The maximum number of cloud directories allowed in the Region.</p>
   */
  CloudOnlyDirectoriesLimit?: number;

  /**
   * <p>The current number of cloud directories in the Region.</p>
   */
  CloudOnlyDirectoriesCurrentCount?: number;

  /**
   * <p>Indicates if the cloud directory limit has been reached.</p>
   */
  CloudOnlyDirectoriesLimitReached?: boolean;

  /**
   * <p>The maximum number of Managed Microsoft AD directories allowed in the region.</p>
   */
  CloudOnlyMicrosoftADLimit?: number;

  /**
   * <p>The current number of Managed Microsoft AD directories in the region.</p>
   */
  CloudOnlyMicrosoftADCurrentCount?: number;

  /**
   * <p>Indicates if the Managed Microsoft AD directory limit has been reached.</p>
   */
  CloudOnlyMicrosoftADLimitReached?: boolean;

  /**
   * <p>The maximum number of connected directories allowed in the Region.</p>
   */
  ConnectedDirectoriesLimit?: number;

  /**
   * <p>The current number of connected directories in the Region.</p>
   */
  ConnectedDirectoriesCurrentCount?: number;

  /**
   * <p>Indicates if the connected directory limit has been reached.</p>
   */
  ConnectedDirectoriesLimitReached?: boolean;
}

export namespace DirectoryLimits {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryLimits): any => ({
    ...obj,
  });
}

/**
 * <p>The specified directory has not been shared with this Amazon Web Services account.</p>
 */
export interface DirectoryNotSharedException extends __SmithyException, $MetadataBearer {
  name: "DirectoryNotSharedException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace DirectoryNotSharedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryNotSharedException): any => ({
    ...obj,
  });
}

export interface DisableClientAuthenticationRequest {
  /**
   * <p>The identifier of the directory </p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The type of client authentication to disable. Currently, only the parameter, <code>SmartCard</code> is supported.</p>
   */
  Type: ClientAuthenticationType | string | undefined;
}

export namespace DisableClientAuthenticationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableClientAuthenticationRequest): any => ({
    ...obj,
  });
}

export interface DisableClientAuthenticationResult {}

export namespace DisableClientAuthenticationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableClientAuthenticationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Client authentication is already enabled.</p>
 */
export interface InvalidClientAuthStatusException extends __SmithyException, $MetadataBearer {
  name: "InvalidClientAuthStatusException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace InvalidClientAuthStatusException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidClientAuthStatusException): any => ({
    ...obj,
  });
}

export interface DisableLDAPSRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The type of LDAP security to enable. Currently only the value <code>Client</code> is
   *       supported.</p>
   */
  Type: LDAPSType | string | undefined;
}

export namespace DisableLDAPSRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableLDAPSRequest): any => ({
    ...obj,
  });
}

export interface DisableLDAPSResult {}

export namespace DisableLDAPSResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableLDAPSResult): any => ({
    ...obj,
  });
}

/**
 * <p>The LDAP activities could not be performed because they are limited by the LDAPS
 *       status.</p>
 */
export interface InvalidLDAPSStatusException extends __SmithyException, $MetadataBearer {
  name: "InvalidLDAPSStatusException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace InvalidLDAPSStatusException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidLDAPSStatusException): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the inputs for the <a>DisableRadius</a> operation.</p>
 */
export interface DisableRadiusRequest {
  /**
   * <p>The identifier of the directory for which to disable MFA.</p>
   */
  DirectoryId: string | undefined;
}

export namespace DisableRadiusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableRadiusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the results of the <a>DisableRadius</a> operation.</p>
 */
export interface DisableRadiusResult {}

export namespace DisableRadiusResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableRadiusResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the inputs for the <a>DisableSso</a> operation.</p>
 */
export interface DisableSsoRequest {
  /**
   * <p>The identifier of the directory for which to disable single-sign on.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The username of an alternate account to use to disable single-sign on. This is only used
   *       for AD Connector directories. This account must have privileges to remove a service
   *       principal name.</p>
   *          <p>If the AD Connector service account does not have privileges to remove a service
   *       principal name, you can specify an alternate account with the <i>UserName</i>
   *       and <i>Password</i> parameters. These credentials are only used to disable
   *       single sign-on and are not stored by the service. The AD Connector service account is not
   *       changed.</p>
   */
  UserName?: string;

  /**
   * <p>The password of an alternate account to use to disable single-sign on. This is only used
   *       for AD Connector directories. For more information, see the <i>UserName</i>
   *       parameter.</p>
   */
  Password?: string;
}

export namespace DisableSsoRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableSsoRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains the results of the <a>DisableSso</a> operation.</p>
 */
export interface DisableSsoResult {}

export namespace DisableSsoResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableSsoResult): any => ({
    ...obj,
  });
}

export interface EnableClientAuthenticationRequest {
  /**
   * <p>The identifier of the specified directory. </p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The type of client authentication to enable. Currently only the value <code>SmartCard</code> is
   *       supported. Smart card authentication in AD Connector requires that you enable Kerberos
   *       Constrained Delegation for the Service User to the LDAP service in your self-managed AD.
   *     </p>
   */
  Type: ClientAuthenticationType | string | undefined;
}

export namespace EnableClientAuthenticationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableClientAuthenticationRequest): any => ({
    ...obj,
  });
}

export interface EnableClientAuthenticationResult {}

export namespace EnableClientAuthenticationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableClientAuthenticationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Client authentication setup could not be completed because at least one valid certificate must be
 *       registered in the system.</p>
 */
export interface NoAvailableCertificateException extends __SmithyException, $MetadataBearer {
  name: "NoAvailableCertificateException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace NoAvailableCertificateException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoAvailableCertificateException): any => ({
    ...obj,
  });
}

export interface EnableLDAPSRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The type of LDAP security to enable. Currently only the value <code>Client</code> is
   *       supported.</p>
   */
  Type: LDAPSType | string | undefined;
}

export namespace EnableLDAPSRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableLDAPSRequest): any => ({
    ...obj,
  });
}

export interface EnableLDAPSResult {}

export namespace EnableLDAPSResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableLDAPSResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the inputs for the <a>EnableRadius</a> operation.</p>
 */
export interface EnableRadiusRequest {
  /**
   * <p>The identifier of the directory for which to enable MFA.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS
   *          server.</p>
   */
  RadiusSettings: RadiusSettings | undefined;
}

export namespace EnableRadiusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableRadiusRequest): any => ({
    ...obj,
    ...(obj.RadiusSettings && { RadiusSettings: RadiusSettings.filterSensitiveLog(obj.RadiusSettings) }),
  });
}

/**
 * <p>Contains the results of the <a>EnableRadius</a> operation.</p>
 */
export interface EnableRadiusResult {}

export namespace EnableRadiusResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableRadiusResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the inputs for the <a>EnableSso</a> operation.</p>
 */
export interface EnableSsoRequest {
  /**
   * <p>The identifier of the directory for which to enable single-sign on.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The username of an alternate account to use to enable single-sign on. This is only used
   *       for AD Connector directories. This account must have privileges to add a service principal
   *       name.</p>
   *          <p>If the AD Connector service account does not have privileges to add a service principal
   *       name, you can specify an alternate account with the <i>UserName</i> and
   *         <i>Password</i> parameters. These credentials are only used to enable single
   *       sign-on and are not stored by the service. The AD Connector service account is not
   *       changed.</p>
   */
  UserName?: string;

  /**
   * <p>The password of an alternate account to use to enable single-sign on. This is only used
   *       for AD Connector directories. For more information, see the <i>UserName</i>
   *       parameter.</p>
   */
  Password?: string;
}

export namespace EnableSsoRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableSsoRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains the results of the <a>EnableSso</a> operation.</p>
 */
export interface EnableSsoResult {}

export namespace EnableSsoResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableSsoResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the inputs for the <a>GetDirectoryLimits</a> operation.</p>
 */
export interface GetDirectoryLimitsRequest {}

export namespace GetDirectoryLimitsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDirectoryLimitsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the results of the <a>GetDirectoryLimits</a> operation.</p>
 */
export interface GetDirectoryLimitsResult {
  /**
   * <p>A <a>DirectoryLimits</a> object that contains the directory limits for the
   *       current Region.</p>
   */
  DirectoryLimits?: DirectoryLimits;
}

export namespace GetDirectoryLimitsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDirectoryLimitsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the inputs for the <a>GetSnapshotLimits</a> operation.</p>
 */
export interface GetSnapshotLimitsRequest {
  /**
   * <p>Contains the identifier of the directory to obtain the limits for.</p>
   */
  DirectoryId: string | undefined;
}

export namespace GetSnapshotLimitsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSnapshotLimitsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains manual snapshot limit information for a directory.</p>
 */
export interface SnapshotLimits {
  /**
   * <p>The maximum number of manual snapshots allowed.</p>
   */
  ManualSnapshotsLimit?: number;

  /**
   * <p>The current number of manual snapshots of the directory.</p>
   */
  ManualSnapshotsCurrentCount?: number;

  /**
   * <p>Indicates if the manual snapshot limit has been reached.</p>
   */
  ManualSnapshotsLimitReached?: boolean;
}

export namespace SnapshotLimits {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotLimits): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the results of the <a>GetSnapshotLimits</a> operation.</p>
 */
export interface GetSnapshotLimitsResult {
  /**
   * <p>A <a>SnapshotLimits</a> object that contains the manual snapshot limits for the specified
   *          directory.</p>
   */
  SnapshotLimits?: SnapshotLimits;
}

export namespace GetSnapshotLimitsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSnapshotLimitsResult): any => ({
    ...obj,
  });
}

export interface ListCertificatesRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>A token for requesting another page of certificates if the <code>NextToken</code> response
   *       element indicates that more certificates are available. Use the value of the returned
   *         <code>NextToken</code> element in your request until the token comes back as
   *         <code>null</code>. Pass <code>null</code> if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of items that should show up on one page</p>
   */
  Limit?: number;
}

export namespace ListCertificatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCertificatesRequest): any => ({
    ...obj,
  });
}

export interface ListCertificatesResult {
  /**
   * <p>Indicates whether another page of certificates is available when the number of available
   *       certificates exceeds the page limit.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of certificates with basic details including certificate ID, certificate common
   *       name, certificate state.</p>
   */
  CertificatesInfo?: CertificateInfo[];
}

export namespace ListCertificatesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCertificatesResult): any => ({
    ...obj,
  });
}

export interface ListIpRoutesRequest {
  /**
   * <p>Identifier (ID) of the directory for which you want to retrieve the IP
   *          addresses.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The <i>ListIpRoutes.NextToken</i> value from a previous call to <a>ListIpRoutes</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of items to return. If this value is zero, the maximum number of items
   *          is specified by the limitations of the operation.</p>
   */
  Limit?: number;
}

export namespace ListIpRoutesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListIpRoutesRequest): any => ({
    ...obj,
  });
}

export enum IpRouteStatusMsg {
  ADDED = "Added",
  ADDING = "Adding",
  ADD_FAILED = "AddFailed",
  REMOVED = "Removed",
  REMOVE_FAILED = "RemoveFailed",
  REMOVING = "Removing",
}

/**
 * <p>Information about one or more IP address blocks.</p>
 */
export interface IpRouteInfo {
  /**
   * <p>Identifier (ID) of the directory associated with the IP addresses.</p>
   */
  DirectoryId?: string;

  /**
   * <p>IP address block in the <a>IpRoute</a>.</p>
   */
  CidrIp?: string;

  /**
   * <p>The status of the IP address block.</p>
   */
  IpRouteStatusMsg?: IpRouteStatusMsg | string;

  /**
   * <p>The date and time the address block was added to the directory.</p>
   */
  AddedDateTime?: Date;

  /**
   * <p>The reason for the IpRouteStatusMsg.</p>
   */
  IpRouteStatusReason?: string;

  /**
   * <p>Description of the <a>IpRouteInfo</a>.</p>
   */
  Description?: string;
}

export namespace IpRouteInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpRouteInfo): any => ({
    ...obj,
  });
}

export interface ListIpRoutesResult {
  /**
   * <p>A list of <a>IpRoute</a>s.</p>
   */
  IpRoutesInfo?: IpRouteInfo[];

  /**
   * <p>If not null, more results are available. Pass this value for the
   *             <i>NextToken</i> parameter in a subsequent call to <a>ListIpRoutes</a> to retrieve the next set of items.</p>
   */
  NextToken?: string;
}

export namespace ListIpRoutesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListIpRoutesResult): any => ({
    ...obj,
  });
}

export interface ListLogSubscriptionsRequest {
  /**
   * <p>If a <i>DirectoryID</i> is provided, lists only the log subscription
   *       associated with that directory. If no <i>DirectoryId</i> is provided, lists all
   *       log subscriptions associated with your Amazon Web Services account. If there are no log subscriptions for the
   *       Amazon Web Services account or the directory, an empty list will be returned.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The token for the next set of items to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items returned.</p>
   */
  Limit?: number;
}

export namespace ListLogSubscriptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLogSubscriptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a log subscription, which tracks real-time data from a chosen log group to a
 *       specified destination.</p>
 */
export interface LogSubscription {
  /**
   * <p>Identifier (ID) of the directory that you want to associate with the log
   *       subscription.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The name of the log group.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The date and time that the log subscription was created.</p>
   */
  SubscriptionCreatedDateTime?: Date;
}

export namespace LogSubscription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogSubscription): any => ({
    ...obj,
  });
}

export interface ListLogSubscriptionsResult {
  /**
   * <p>A list of active <a>LogSubscription</a> objects for calling the Amazon Web Services account.</p>
   */
  LogSubscriptions?: LogSubscription[];

  /**
   * <p>The token for the next set of items to return.</p>
   */
  NextToken?: string;
}

export namespace ListLogSubscriptionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLogSubscriptionsResult): any => ({
    ...obj,
  });
}

export interface ListSchemaExtensionsRequest {
  /**
   * <p>The identifier of the directory from which to retrieve the schema extension
   *       information.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The <code>ListSchemaExtensions.NextToken</code> value from a previous call to
   *         <code>ListSchemaExtensions</code>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;
}

export namespace ListSchemaExtensionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSchemaExtensionsRequest): any => ({
    ...obj,
  });
}

export enum SchemaExtensionStatus {
  CANCELLED = "Cancelled",
  CANCEL_IN_PROGRESS = "CancelInProgress",
  COMPLETED = "Completed",
  CREATING_SNAPSHOT = "CreatingSnapshot",
  FAILED = "Failed",
  INITIALIZING = "Initializing",
  REPLICATING = "Replicating",
  ROLLBACK_IN_PROGRESS = "RollbackInProgress",
  UPDATING_SCHEMA = "UpdatingSchema",
}

/**
 * <p>Information about a schema extension.</p>
 */
export interface SchemaExtensionInfo {
  /**
   * <p>The identifier of the directory to which the schema extension is applied.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The identifier of the schema extension.</p>
   */
  SchemaExtensionId?: string;

  /**
   * <p>A description of the schema extension.</p>
   */
  Description?: string;

  /**
   * <p>The current status of the schema extension.</p>
   */
  SchemaExtensionStatus?: SchemaExtensionStatus | string;

  /**
   * <p>The reason for the <code>SchemaExtensionStatus</code>.</p>
   */
  SchemaExtensionStatusReason?: string;

  /**
   * <p>The date and time that the schema extension started being applied to the
   *       directory.</p>
   */
  StartDateTime?: Date;

  /**
   * <p>The date and time that the schema extension was completed.</p>
   */
  EndDateTime?: Date;
}

export namespace SchemaExtensionInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaExtensionInfo): any => ({
    ...obj,
  });
}

export interface ListSchemaExtensionsResult {
  /**
   * <p>Information about the schema extensions applied to the directory.</p>
   */
  SchemaExtensionsInfo?: SchemaExtensionInfo[];

  /**
   * <p>If not null, more results are available. Pass this value for the <code>NextToken</code>
   *       parameter in a subsequent call to <code>ListSchemaExtensions</code> to retrieve the next set
   *       of items.</p>
   */
  NextToken?: string;
}

export namespace ListSchemaExtensionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSchemaExtensionsResult): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>Identifier (ID) of the directory for which you want to retrieve tags.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  Limit?: number;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResult {
  /**
   * <p>List of tags returned by the ListTagsForResource operation.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;
}

export namespace ListTagsForResourceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
    ...obj,
  });
}

/**
 * <p>The certificate PEM that was provided has incorrect encoding.</p>
 */
export interface InvalidCertificateException extends __SmithyException, $MetadataBearer {
  name: "InvalidCertificateException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace InvalidCertificateException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidCertificateException): any => ({
    ...obj,
  });
}

export interface RegisterCertificateRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The certificate PEM string that needs to be registered.</p>
   */
  CertificateData: string | undefined;

  /**
   * <p>The function that the registered certificate performs. Valid values include <code>ClientLDAPS</code> or <code>ClientCertAuth</code>. The default value is <code>ClientLDAPS</code>.</p>
   */
  Type?: CertificateType | string;

  /**
   * <p>A <code>ClientCertAuthSettings</code> object that contains client certificate authentication settings.</p>
   */
  ClientCertAuthSettings?: ClientCertAuthSettings;
}

export namespace RegisterCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterCertificateRequest): any => ({
    ...obj,
  });
}

export interface RegisterCertificateResult {
  /**
   * <p>The identifier of the certificate.</p>
   */
  CertificateId?: string;
}

export namespace RegisterCertificateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterCertificateResult): any => ({
    ...obj,
  });
}

/**
 * <p>Registers a new event topic.</p>
 */
export interface RegisterEventTopicRequest {
  /**
   * <p>The Directory ID that will publish status messages to the Amazon SNS topic.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The Amazon SNS topic name to which the directory will publish status messages. This Amazon SNS
   *       topic must be in the same region as the specified Directory ID.</p>
   */
  TopicName: string | undefined;
}

export namespace RegisterEventTopicRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterEventTopicRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of a RegisterEventTopic request.</p>
 */
export interface RegisterEventTopicResult {}

export namespace RegisterEventTopicResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterEventTopicResult): any => ({
    ...obj,
  });
}

export interface RejectSharedDirectoryRequest {
  /**
   * <p>Identifier of the shared directory in the directory consumer account. This identifier is
   *       different for each directory owner account.</p>
   */
  SharedDirectoryId: string | undefined;
}

export namespace RejectSharedDirectoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RejectSharedDirectoryRequest): any => ({
    ...obj,
  });
}

export interface RejectSharedDirectoryResult {
  /**
   * <p>Identifier of the shared directory in the directory consumer account.</p>
   */
  SharedDirectoryId?: string;
}

export namespace RejectSharedDirectoryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RejectSharedDirectoryResult): any => ({
    ...obj,
  });
}

export interface RemoveIpRoutesRequest {
  /**
   * <p>Identifier (ID) of the directory from which you want to remove the IP
   *          addresses.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>IP address blocks that you want to remove.</p>
   */
  CidrIps: string[] | undefined;
}

export namespace RemoveIpRoutesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveIpRoutesRequest): any => ({
    ...obj,
  });
}

export interface RemoveIpRoutesResult {}

export namespace RemoveIpRoutesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveIpRoutesResult): any => ({
    ...obj,
  });
}

export interface RemoveRegionRequest {
  /**
   * <p>The identifier of the directory for which you want to remove Region replication.</p>
   */
  DirectoryId: string | undefined;
}

export namespace RemoveRegionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveRegionRequest): any => ({
    ...obj,
  });
}

export interface RemoveRegionResult {}

export namespace RemoveRegionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveRegionResult): any => ({
    ...obj,
  });
}

export interface RemoveTagsFromResourceRequest {
  /**
   * <p>Identifier (ID) of the directory from which to remove the tag.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The tag key (name) of the tag to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace RemoveTagsFromResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveTagsFromResourceRequest): any => ({
    ...obj,
  });
}

export interface RemoveTagsFromResourceResult {}

export namespace RemoveTagsFromResourceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveTagsFromResourceResult): any => ({
    ...obj,
  });
}

/**
 * <p>The new password provided by the user does not meet the password complexity
 *             requirements defined in your directory.</p>
 */
export interface InvalidPasswordException extends __SmithyException, $MetadataBearer {
  name: "InvalidPasswordException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace InvalidPasswordException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidPasswordException): any => ({
    ...obj,
  });
}

export interface ResetUserPasswordRequest {
  /**
   * <p>Identifier of the Managed Microsoft AD or Simple AD directory in which the user
   *       resides.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The user name of the user whose password will be reset.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The new password that will be reset.</p>
   */
  NewPassword: string | undefined;
}

export namespace ResetUserPasswordRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetUserPasswordRequest): any => ({
    ...obj,
    ...(obj.NewPassword && { NewPassword: SENSITIVE_STRING }),
  });
}

export interface ResetUserPasswordResult {}

export namespace ResetUserPasswordResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetUserPasswordResult): any => ({
    ...obj,
  });
}

/**
 * <p>The user provided a username that does not exist in your directory.</p>
 */
export interface UserDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "UserDoesNotExistException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace UserDoesNotExistException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the inputs for the <a>RestoreFromSnapshot</a> operation.</p>
 */
export interface RestoreFromSnapshotRequest {
  /**
   * <p>The identifier of the snapshot to restore from.</p>
   */
  SnapshotId: string | undefined;
}

export namespace RestoreFromSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreFromSnapshotRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the results of the <a>RestoreFromSnapshot</a> operation.</p>
 */
export interface RestoreFromSnapshotResult {}

export namespace RestoreFromSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreFromSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified shared target is not valid.</p>
 */
export interface InvalidTargetException extends __SmithyException, $MetadataBearer {
  name: "InvalidTargetException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace InvalidTargetException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidTargetException): any => ({
    ...obj,
  });
}

/**
 * <p>Exception encountered while trying to access your Amazon Web Services organization.</p>
 */
export interface OrganizationsException extends __SmithyException, $MetadataBearer {
  name: "OrganizationsException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace OrganizationsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationsException): any => ({
    ...obj,
  });
}

export enum TargetType {
  ACCOUNT = "ACCOUNT",
}

/**
 * <p>Identifier that contains details about the directory consumer account.</p>
 */
export interface ShareTarget {
  /**
   * <p>Identifier of the directory consumer account.</p>
   */
  Id: string | undefined;

  /**
   * <p>Type of identifier to be used in the <code>Id</code> field.</p>
   */
  Type: TargetType | string | undefined;
}

export namespace ShareTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ShareTarget): any => ({
    ...obj,
  });
}

export interface ShareDirectoryRequest {
  /**
   * <p>Identifier of the Managed Microsoft AD directory that you want to share with other Amazon Web Services accounts.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>A directory share request that is sent by the directory owner to the directory consumer.
   *       The request includes a typed message to help the directory consumer administrator determine
   *       whether to approve or reject the share invitation.</p>
   */
  ShareNotes?: string;

  /**
   * <p>Identifier for the directory consumer account with whom the directory is to be
   *       shared.</p>
   */
  ShareTarget: ShareTarget | undefined;

  /**
   * <p>The method used when sharing a directory to determine whether the directory should be
   *       shared within your Amazon Web Services organization (<code>ORGANIZATIONS</code>) or with any Amazon Web Services account by
   *       sending a directory sharing request (<code>HANDSHAKE</code>).</p>
   */
  ShareMethod: ShareMethod | string | undefined;
}

export namespace ShareDirectoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ShareDirectoryRequest): any => ({
    ...obj,
    ...(obj.ShareNotes && { ShareNotes: SENSITIVE_STRING }),
  });
}

export interface ShareDirectoryResult {
  /**
   * <p>Identifier of the directory that is stored in the directory consumer account that is
   *       shared from the specified directory (<code>DirectoryId</code>).</p>
   */
  SharedDirectoryId?: string;
}

export namespace ShareDirectoryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ShareDirectoryResult): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of Amazon Web Services accounts that you can share with this directory has been
 *             reached.</p>
 */
export interface ShareLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ShareLimitExceededException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace ShareLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ShareLimitExceededException): any => ({
    ...obj,
  });
}

export interface StartSchemaExtensionRequest {
  /**
   * <p>The identifier of the directory for which the schema extension will be applied
   *       to.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>If true, creates a snapshot of the directory before applying the schema
   *       extension.</p>
   */
  CreateSnapshotBeforeSchemaExtension: boolean | undefined;

  /**
   * <p>The LDIF file represented as a string. To construct the LdifContent string, precede
   *       each line as it would be formatted in an ldif file with \n. See the example request below for
   *       more details. The file size can be no larger than 1MB.</p>
   */
  LdifContent: string | undefined;

  /**
   * <p>A description of the schema extension.</p>
   */
  Description: string | undefined;
}

export namespace StartSchemaExtensionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSchemaExtensionRequest): any => ({
    ...obj,
  });
}

export interface StartSchemaExtensionResult {
  /**
   * <p>The identifier of the schema extension that will be applied.</p>
   */
  SchemaExtensionId?: string;
}

export namespace StartSchemaExtensionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSchemaExtensionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Identifier that contains details about the directory consumer account with whom the
 *       directory is being unshared.</p>
 */
export interface UnshareTarget {
  /**
   * <p>Identifier of the directory consumer account.</p>
   */
  Id: string | undefined;

  /**
   * <p>Type of identifier to be used in the <i>Id</i> field.</p>
   */
  Type: TargetType | string | undefined;
}

export namespace UnshareTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnshareTarget): any => ({
    ...obj,
  });
}

export interface UnshareDirectoryRequest {
  /**
   * <p>The identifier of the Managed Microsoft AD directory that you want to stop
   *       sharing.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>Identifier for the directory consumer account with whom the directory has to be
   *       unshared.</p>
   */
  UnshareTarget: UnshareTarget | undefined;
}

export namespace UnshareDirectoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnshareDirectoryRequest): any => ({
    ...obj,
  });
}

export interface UnshareDirectoryResult {
  /**
   * <p>Identifier of the directory stored in the directory consumer account that is to be
   *       unshared from the specified directory (<code>DirectoryId</code>).</p>
   */
  SharedDirectoryId?: string;
}

export namespace UnshareDirectoryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnshareDirectoryResult): any => ({
    ...obj,
  });
}

/**
 * <p>Updates a conditional forwarder.</p>
 */
export interface UpdateConditionalForwarderRequest {
  /**
   * <p>The directory ID of the Amazon Web Services directory for which to update the conditional
   *       forwarder.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of the remote domain with which you will set up
   *       a trust relationship.</p>
   */
  RemoteDomainName: string | undefined;

  /**
   * <p>The updated IP addresses of the remote DNS server associated with the conditional
   *       forwarder.</p>
   */
  DnsIpAddrs: string[] | undefined;
}

export namespace UpdateConditionalForwarderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConditionalForwarderRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The result of an UpdateConditionalForwarder request.</p>
 */
export interface UpdateConditionalForwarderResult {}

export namespace UpdateConditionalForwarderResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConditionalForwarderResult): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum allowed number of domain controllers per directory was exceeded. The
 *       default limit per directory is 20 domain controllers.</p>
 */
export interface DomainControllerLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "DomainControllerLimitExceededException";
  $fault: "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
}

export namespace DomainControllerLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DomainControllerLimitExceededException): any => ({
    ...obj,
  });
}

export interface UpdateNumberOfDomainControllersRequest {
  /**
   * <p>Identifier of the directory to which the domain controllers will be added or
   *       removed.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The number of domain controllers desired in the directory.</p>
   */
  DesiredNumber: number | undefined;
}

export namespace UpdateNumberOfDomainControllersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNumberOfDomainControllersRequest): any => ({
    ...obj,
  });
}

export interface UpdateNumberOfDomainControllersResult {}

export namespace UpdateNumberOfDomainControllersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNumberOfDomainControllersResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the inputs for the <a>UpdateRadius</a> operation.</p>
 */
export interface UpdateRadiusRequest {
  /**
   * <p>The identifier of the directory for which to update the RADIUS server
   *          information.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS
   *          server.</p>
   */
  RadiusSettings: RadiusSettings | undefined;
}

export namespace UpdateRadiusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRadiusRequest): any => ({
    ...obj,
    ...(obj.RadiusSettings && { RadiusSettings: RadiusSettings.filterSensitiveLog(obj.RadiusSettings) }),
  });
}

/**
 * <p>Contains the results of the <a>UpdateRadius</a> operation.</p>
 */
export interface UpdateRadiusResult {}

export namespace UpdateRadiusResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRadiusResult): any => ({
    ...obj,
  });
}

export interface UpdateTrustRequest {
  /**
   * <p>Identifier of the trust relationship.</p>
   */
  TrustId: string | undefined;

  /**
   * <p>Updates selective authentication for the trust.</p>
   */
  SelectiveAuth?: SelectiveAuth | string;
}

export namespace UpdateTrustRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrustRequest): any => ({
    ...obj,
  });
}

export interface UpdateTrustResult {
  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;

  /**
   * <p>Identifier of the trust relationship.</p>
   */
  TrustId?: string;
}

export namespace UpdateTrustResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrustResult): any => ({
    ...obj,
  });
}

/**
 * <p>Initiates the verification of an existing trust relationship between an Managed Microsoft AD
 *       directory and an external domain.</p>
 */
export interface VerifyTrustRequest {
  /**
   * <p>The unique Trust ID of the trust relationship to verify.</p>
   */
  TrustId: string | undefined;
}

export namespace VerifyTrustRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VerifyTrustRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Result of a VerifyTrust request.</p>
 */
export interface VerifyTrustResult {
  /**
   * <p>The unique Trust ID of the trust relationship that was verified.</p>
   */
  TrustId?: string;
}

export namespace VerifyTrustResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VerifyTrustResult): any => ({
    ...obj,
  });
}
