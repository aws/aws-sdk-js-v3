// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { DirectoryServiceServiceException as __BaseException } from "./DirectoryServiceServiceException";

export interface AcceptSharedDirectoryRequest {
  /**
   * <p>Identifier of the shared directory in the directory consumer account. This identifier is
   *       different for each directory owner account. </p>
   */
  SharedDirectoryId: string | undefined;
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

export interface AcceptSharedDirectoryResult {
  /**
   * <p>The shared directory in the directory consumer account.</p>
   */
  SharedDirectory?: SharedDirectory;
}

/**
 * <p>A client exception has occurred.</p>
 */
export class ClientException extends __BaseException {
  readonly name: "ClientException" = "ClientException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClientException, __BaseException>) {
    super({
      name: "ClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClientException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The specified directory has already been shared with this Amazon Web Services account.</p>
 */
export class DirectoryAlreadySharedException extends __BaseException {
  readonly name: "DirectoryAlreadySharedException" = "DirectoryAlreadySharedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryAlreadySharedException, __BaseException>) {
    super({
      name: "DirectoryAlreadySharedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryAlreadySharedException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The specified entity could not be found.</p>
 */
export class EntityDoesNotExistException extends __BaseException {
  readonly name: "EntityDoesNotExistException" = "EntityDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityDoesNotExistException, __BaseException>) {
    super({
      name: "EntityDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityDoesNotExistException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>One or more parameters are not valid.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>An exception has occurred in Directory Service.</p>
 */
export class ServiceException extends __BaseException {
  readonly name: "ServiceException" = "ServiceException";
  readonly $fault: "server" = "server";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceException, __BaseException>) {
    super({
      name: "ServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>Client authentication is not available in this region at this time.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
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
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

export interface AddIpRoutesResult {}

/**
 * <p>The specified directory is unavailable or could not be found.</p>
 */
export class DirectoryUnavailableException extends __BaseException {
  readonly name: "DirectoryUnavailableException" = "DirectoryUnavailableException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryUnavailableException, __BaseException>) {
    super({
      name: "DirectoryUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryUnavailableException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The specified entity already exists.</p>
 */
export class EntityAlreadyExistsException extends __BaseException {
  readonly name: "EntityAlreadyExistsException" = "EntityAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityAlreadyExistsException, __BaseException>) {
    super({
      name: "EntityAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityAlreadyExistsException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The maximum allowed number of IP addresses was exceeded. The default limit is 100 IP
 *          address blocks.</p>
 */
export class IpRouteLimitExceededException extends __BaseException {
  readonly name: "IpRouteLimitExceededException" = "IpRouteLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IpRouteLimitExceededException, __BaseException>) {
    super({
      name: "IpRouteLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IpRouteLimitExceededException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

export interface AddRegionResult {}

/**
 * <p>The Region you specified is the same Region where the Managed Microsoft AD directory
 *       was created. Specify a different Region and try again.</p>
 */
export class DirectoryAlreadyInRegionException extends __BaseException {
  readonly name: "DirectoryAlreadyInRegionException" = "DirectoryAlreadyInRegionException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryAlreadyInRegionException, __BaseException>) {
    super({
      name: "DirectoryAlreadyInRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryAlreadyInRegionException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The specified directory does not exist in the system.</p>
 */
export class DirectoryDoesNotExistException extends __BaseException {
  readonly name: "DirectoryDoesNotExistException" = "DirectoryDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryDoesNotExistException, __BaseException>) {
    super({
      name: "DirectoryDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryDoesNotExistException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>You have reached the limit for maximum number of simultaneous Region replications per
 *       directory.</p>
 */
export class RegionLimitExceededException extends __BaseException {
  readonly name: "RegionLimitExceededException" = "RegionLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RegionLimitExceededException, __BaseException>) {
    super({
      name: "RegionLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RegionLimitExceededException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The operation is not supported.</p>
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

export interface AddTagsToResourceResult {}

/**
 * <p>The maximum allowed number of tags was exceeded.</p>
 */
export class TagLimitExceededException extends __BaseException {
  readonly name: "TagLimitExceededException" = "TagLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagLimitExceededException, __BaseException>) {
    super({
      name: "TagLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagLimitExceededException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

/**
 * <p>An authentication error occurred.</p>
 */
export class AuthenticationFailedException extends __BaseException {
  readonly name: "AuthenticationFailedException" = "AuthenticationFailedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The textual message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The identifier of the request that caused the exception.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthenticationFailedException, __BaseException>) {
    super({
      name: "AuthenticationFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthenticationFailedException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

export interface CancelSchemaExtensionResult {}

/**
 * <p>Contains information about the client certificate authentication settings for the <code>RegisterCertificate</code> and <code>DescribeCertificate</code> operations. </p>
 */
export interface ClientCertAuthSettings {
  /**
   * <p>Specifies the URL of the default OCSP server used to check for revocation status. A secondary value to any OCSP address found in the AIA extension of the user certificate.</p>
   */
  OCSPUrl?: string;
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

/**
 * <p>The certificate has already been registered into the system.</p>
 */
export class CertificateAlreadyExistsException extends __BaseException {
  readonly name: "CertificateAlreadyExistsException" = "CertificateAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateAlreadyExistsException, __BaseException>) {
    super({
      name: "CertificateAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateAlreadyExistsException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The certificate is not present in the system for describe or deregister activities.</p>
 */
export class CertificateDoesNotExistException extends __BaseException {
  readonly name: "CertificateDoesNotExistException" = "CertificateDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateDoesNotExistException, __BaseException>) {
    super({
      name: "CertificateDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateDoesNotExistException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

/**
 * <p>The certificate is being used for the LDAP security connection and cannot be removed
 *       without disabling LDAP security.</p>
 */
export class CertificateInUseException extends __BaseException {
  readonly name: "CertificateInUseException" = "CertificateInUseException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateInUseException, __BaseException>) {
    super({
      name: "CertificateInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateInUseException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The certificate could not be added because the certificate limit has been reached.</p>
 */
export class CertificateLimitExceededException extends __BaseException {
  readonly name: "CertificateLimitExceededException" = "CertificateLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateLimitExceededException, __BaseException>) {
    super({
      name: "CertificateLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateLimitExceededException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

export enum ClientAuthenticationStatus {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

export enum ClientAuthenticationType {
  SMART_CARD = "SmartCard",
  SMART_CARD_OR_PASSWORD = "SmartCardOrPassword",
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

/**
 * <p>Contains the results of the <a>ConnectDirectory</a> operation.</p>
 */
export interface ConnectDirectoryResult {
  /**
   * <p>The identifier of the new directory.</p>
   */
  DirectoryId?: string;
}

/**
 * <p>The maximum number of directories in the region has been reached. You can use the
 *                 <a>GetDirectoryLimits</a> operation to determine your directory limits in
 *             the region.</p>
 */
export class DirectoryLimitExceededException extends __BaseException {
  readonly name: "DirectoryLimitExceededException" = "DirectoryLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryLimitExceededException, __BaseException>) {
    super({
      name: "DirectoryLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryLimitExceededException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

/**
 * <p>Contains the results for the <a>CreateComputer</a> operation.</p>
 */
export interface CreateComputerResult {
  /**
   * <p>A <a>Computer</a> object that represents the computer account.</p>
   */
  Computer?: Computer;
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

/**
 * <p>The result of a CreateConditinalForwarder request.</p>
 */
export interface CreateConditionalForwarderResult {}

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

/**
 * <p>Contains the results of the <a>CreateDirectory</a> operation.</p>
 */
export interface CreateDirectoryResult {
  /**
   * <p>The identifier of the directory that was created.</p>
   */
  DirectoryId?: string;
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

export interface CreateLogSubscriptionResult {}

/**
 * <p>The account does not have sufficient permission to perform the operation.</p>
 */
export class InsufficientPermissionsException extends __BaseException {
  readonly name: "InsufficientPermissionsException" = "InsufficientPermissionsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientPermissionsException, __BaseException>) {
    super({
      name: "InsufficientPermissionsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientPermissionsException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

/**
 * <p>Result of a CreateMicrosoftAD request.</p>
 */
export interface CreateMicrosoftADResult {
  /**
   * <p>The identifier of the directory that was created.</p>
   */
  DirectoryId?: string;
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

/**
 * <p>Contains the results of the <a>CreateSnapshot</a> operation.</p>
 */
export interface CreateSnapshotResult {
  /**
   * <p>The identifier of the snapshot that was created.</p>
   */
  SnapshotId?: string;
}

/**
 * <p>The maximum number of manual snapshots for the directory has been reached. You can
 *             use the <a>GetSnapshotLimits</a> operation to determine the snapshot limits
 *             for a directory.</p>
 */
export class SnapshotLimitExceededException extends __BaseException {
  readonly name: "SnapshotLimitExceededException" = "SnapshotLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotLimitExceededException, __BaseException>) {
    super({
      name: "SnapshotLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotLimitExceededException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

/**
 * <p>The result of a CreateTrust request.</p>
 */
export interface CreateTrustResult {
  /**
   * <p>A unique identifier for the trust relationship that was created.</p>
   */
  TrustId?: string;
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

/**
 * <p>The result of a DeleteConditionalForwarder request.</p>
 */
export interface DeleteConditionalForwarderResult {}

/**
 * <p>Contains the inputs for the <a>DeleteDirectory</a> operation.</p>
 */
export interface DeleteDirectoryRequest {
  /**
   * <p>The identifier of the directory to delete.</p>
   */
  DirectoryId: string | undefined;
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

export interface DeleteLogSubscriptionRequest {
  /**
   * <p>Identifier of the directory whose log subscription you want to delete.</p>
   */
  DirectoryId: string | undefined;
}

export interface DeleteLogSubscriptionResult {}

/**
 * <p>Contains the inputs for the <a>DeleteSnapshot</a> operation.</p>
 */
export interface DeleteSnapshotRequest {
  /**
   * <p>The identifier of the directory snapshot to be deleted.</p>
   */
  SnapshotId: string | undefined;
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

/**
 * <p>The result of a DeleteTrust request.</p>
 */
export interface DeleteTrustResult {
  /**
   * <p>The Trust ID of the trust relationship that was deleted.</p>
   */
  TrustId?: string;
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

export interface DeregisterCertificateResult {}

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

/**
 * <p>The result of a DeregisterEventTopic request.</p>
 */
export interface DeregisterEventTopicResult {}

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

export interface DescribeCertificateResult {
  /**
   * <p>Information about the certificate, including registered date time, certificate state, the
   *       reason for the state, expiration date time, and certificate common name.</p>
   */
  Certificate?: Certificate;
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

/**
 * <p>The result of a DescribeConditionalForwarder request.</p>
 */
export interface DescribeConditionalForwardersResult {
  /**
   * <p>The list of conditional forwarders that have been created.</p>
   */
  ConditionalForwarders?: ConditionalForwarder[];
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

export enum OSVersion {
  VERSION_2012 = "SERVER_2012",
  VERSION_2019 = "SERVER_2019",
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

  /**
   * <p>The operating system (OS) version of the directory.</p>
   */
  OsVersion?: OSVersion | string;
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

/**
 * <p>The <code>NextToken</code> value is not valid.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

export enum DirectoryConfigurationStatus {
  DEFAULT = "Default",
  FAILED = "Failed",
  REQUESTED = "Requested",
  UPDATED = "Updated",
  UPDATING = "Updating",
}

export interface DescribeSettingsRequest {
  /**
   * <p>The identifier of the directory for which to retrieve information.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The status of the directory settings for which to retrieve information.</p>
   */
  Status?: DirectoryConfigurationStatus | string;

  /**
   * <p>The <code>DescribeSettingsResult.NextToken</code> value from a previous call to <a>DescribeSettings</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains information about the specified configurable setting for a directory.</p>
 */
export interface SettingEntry {
  /**
   * <p>The type of directory setting. For example, <code>Protocol</code> or <code>Cipher</code>.</p>
   */
  Type?: string;

  /**
   * <p>The name of the directory setting. For example:</p>
   *          <p>
   *             <code>TLS_1_0</code>
   *          </p>
   */
  Name?: string;

  /**
   * <p>The valid range of values for the directory setting.</p>
   */
  AllowedValues?: string;

  /**
   * <p>The value of the directory setting that is applied to the directory.</p>
   */
  AppliedValue?: string;

  /**
   * <p>The value that was last requested for the directory setting.</p>
   */
  RequestedValue?: string;

  /**
   * <p>The overall status of the request to update the directory setting request. If the directory setting is deployed in more than one region, and the request fails in any region, the overall status is <code>Failed</code>.</p>
   */
  RequestStatus?: DirectoryConfigurationStatus | string;

  /**
   * <p>Details about the status of the request to update the directory setting. If the directory setting is deployed in more than one region, status is returned for the request in each region where the setting is deployed.</p>
   */
  RequestDetailedStatus?: Record<string, DirectoryConfigurationStatus | string>;

  /**
   * <p>The last status message for the directory status request.</p>
   */
  RequestStatusMessage?: string;

  /**
   * <p>The date and time when the directory setting was last updated.</p>
   */
  LastUpdatedDateTime?: Date;

  /**
   * <p>The date and time when the request to update a directory setting was last submitted.</p>
   */
  LastRequestedDateTime?: Date;
}

export interface DescribeSettingsResult {
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The list of <a>SettingEntry</a> objects that were retrieved.</p>
   *          <p>It is possible that this list contains less than the number of items specified in the
   *       <code>Limit</code> member of the request. This occurs if there are less than the requested
   *       number of items left to retrieve, or if the limitations of the operation have been
   *       exceeded.</p>
   */
  SettingEntries?: SettingEntry[];

  /**
   * <p>If not null, token that indicates that more results are available. Pass this value for the <code>NextToken</code> parameter in a subsequent call to <code>DescribeSettings</code> to retrieve the next set of items. </p>
   */
  NextToken?: string;
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

export enum UpdateType {
  OS = "OS",
}

export interface DescribeUpdateDirectoryRequest {
  /**
   * <p>
   *       The unique identifier of the directory.
   *     </p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>
   *       The type of updates you want to describe for the directory.
   *     </p>
   */
  UpdateType: UpdateType | string | undefined;

  /**
   * <p>
   *       The name of the Region.
   *     </p>
   */
  RegionName?: string;

  /**
   * <p>
   *       The <code>DescribeUpdateDirectoryResult</code>. NextToken value from a previous call to <a>DescribeUpdateDirectory</a>. Pass null if this is the first call.
   *     </p>
   */
  NextToken?: string;
}

/**
 * <p>
 *       OS version that the directory needs to be updated to.
 *     </p>
 */
export interface OSUpdateSettings {
  /**
   * <p>
   *       OS version that the directory needs to be updated to.
   *     </p>
   */
  OSVersion?: OSVersion | string;
}

/**
 * <p>
 *       The value for a given type of <code>UpdateSettings</code>.
 *     </p>
 */
export interface UpdateValue {
  /**
   * <p>
   *       The OS update related settings.
   *     </p>
   */
  OSUpdateSettings?: OSUpdateSettings;
}

export enum UpdateStatus {
  UPDATED = "Updated",
  UPDATE_FAILED = "UpdateFailed",
  UPDATING = "Updating",
}

/**
 * <p>
 *       An entry of update information related to a requested update type.
 *     </p>
 */
export interface UpdateInfoEntry {
  /**
   * <p>
   *       The name of the Region.
   *     </p>
   */
  Region?: string;

  /**
   * <p>
   *       The status of the update performed on the directory.
   *     </p>
   */
  Status?: UpdateStatus | string;

  /**
   * <p>
   *       The reason for the current status of the update type activity.
   *     </p>
   */
  StatusReason?: string;

  /**
   * <p>
   *       This specifies if the update was initiated by the customer or by the service team.
   *     </p>
   */
  InitiatedBy?: string;

  /**
   * <p>
   *       The new value of the target setting.
   *     </p>
   */
  NewValue?: UpdateValue;

  /**
   * <p>
   *       The old value of the target setting.
   *     </p>
   */
  PreviousValue?: UpdateValue;

  /**
   * <p>
   *       The start time of the <code>UpdateDirectorySetup</code> for the particular type.
   *     </p>
   */
  StartTime?: Date;

  /**
   * <p>
   *       The last updated date and time of a particular directory setting.
   *     </p>
   */
  LastUpdatedDateTime?: Date;
}

export interface DescribeUpdateDirectoryResult {
  /**
   * <p>
   *       The list of update activities on a directory for the requested update type.
   *     </p>
   */
  UpdateActivities?: UpdateInfoEntry[];

  /**
   * <p>
   *       If not null, more results are available. Pass this value for the <code>NextToken</code> parameter.
   *     </p>
   */
  NextToken?: string;
}

/**
 * <p>
 *       The directory is already updated to desired update type settings.
 *     </p>
 */
export class DirectoryInDesiredStateException extends __BaseException {
  readonly name: "DirectoryInDesiredStateException" = "DirectoryInDesiredStateException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryInDesiredStateException, __BaseException>) {
    super({
      name: "DirectoryInDesiredStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryInDesiredStateException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

/**
 * <p>The specified directory has not been shared with this Amazon Web Services account.</p>
 */
export class DirectoryNotSharedException extends __BaseException {
  readonly name: "DirectoryNotSharedException" = "DirectoryNotSharedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryNotSharedException, __BaseException>) {
    super({
      name: "DirectoryNotSharedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryNotSharedException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

export interface DisableClientAuthenticationResult {}

/**
 * <p>Client authentication is already enabled.</p>
 */
export class InvalidClientAuthStatusException extends __BaseException {
  readonly name: "InvalidClientAuthStatusException" = "InvalidClientAuthStatusException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClientAuthStatusException, __BaseException>) {
    super({
      name: "InvalidClientAuthStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClientAuthStatusException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

export interface DisableLDAPSResult {}

/**
 * <p>The LDAP activities could not be performed because they are limited by the LDAPS
 *       status.</p>
 */
export class InvalidLDAPSStatusException extends __BaseException {
  readonly name: "InvalidLDAPSStatusException" = "InvalidLDAPSStatusException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLDAPSStatusException, __BaseException>) {
    super({
      name: "InvalidLDAPSStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLDAPSStatusException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

/**
 * <p>Contains the results of the <a>DisableRadius</a> operation.</p>
 */
export interface DisableRadiusResult {}

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

/**
 * <p>Contains the results of the <a>DisableSso</a> operation.</p>
 */
export interface DisableSsoResult {}

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

export interface EnableClientAuthenticationResult {}

/**
 * <p>Client authentication setup could not be completed because at least one valid certificate must be
 *       registered in the system.</p>
 */
export class NoAvailableCertificateException extends __BaseException {
  readonly name: "NoAvailableCertificateException" = "NoAvailableCertificateException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoAvailableCertificateException, __BaseException>) {
    super({
      name: "NoAvailableCertificateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoAvailableCertificateException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

export interface EnableLDAPSResult {}

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

/**
 * <p>Contains the results of the <a>EnableRadius</a> operation.</p>
 */
export interface EnableRadiusResult {}

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

/**
 * <p>Contains the results of the <a>EnableSso</a> operation.</p>
 */
export interface EnableSsoResult {}

/**
 * <p>Contains the inputs for the <a>GetDirectoryLimits</a> operation.</p>
 */
export interface GetDirectoryLimitsRequest {}

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

/**
 * <p>Contains the inputs for the <a>GetSnapshotLimits</a> operation.</p>
 */
export interface GetSnapshotLimitsRequest {
  /**
   * <p>Contains the identifier of the directory to obtain the limits for.</p>
   */
  DirectoryId: string | undefined;
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

/**
 * <p>The certificate PEM that was provided has incorrect encoding.</p>
 */
export class InvalidCertificateException extends __BaseException {
  readonly name: "InvalidCertificateException" = "InvalidCertificateException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCertificateException, __BaseException>) {
    super({
      name: "InvalidCertificateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCertificateException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

export interface RegisterCertificateResult {
  /**
   * <p>The identifier of the certificate.</p>
   */
  CertificateId?: string;
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

/**
 * <p>The result of a RegisterEventTopic request.</p>
 */
export interface RegisterEventTopicResult {}

export interface RejectSharedDirectoryRequest {
  /**
   * <p>Identifier of the shared directory in the directory consumer account. This identifier is
   *       different for each directory owner account.</p>
   */
  SharedDirectoryId: string | undefined;
}

export interface RejectSharedDirectoryResult {
  /**
   * <p>Identifier of the shared directory in the directory consumer account.</p>
   */
  SharedDirectoryId?: string;
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

export interface RemoveIpRoutesResult {}

export interface RemoveRegionRequest {
  /**
   * <p>The identifier of the directory for which you want to remove Region replication.</p>
   */
  DirectoryId: string | undefined;
}

export interface RemoveRegionResult {}

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

export interface RemoveTagsFromResourceResult {}

/**
 * <p>The new password provided by the user does not meet the password complexity
 *             requirements defined in your directory.</p>
 */
export class InvalidPasswordException extends __BaseException {
  readonly name: "InvalidPasswordException" = "InvalidPasswordException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPasswordException, __BaseException>) {
    super({
      name: "InvalidPasswordException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPasswordException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

export interface ResetUserPasswordResult {}

/**
 * <p>The user provided a username that does not exist in your directory.</p>
 */
export class UserDoesNotExistException extends __BaseException {
  readonly name: "UserDoesNotExistException" = "UserDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserDoesNotExistException, __BaseException>) {
    super({
      name: "UserDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserDoesNotExistException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

/**
 * <p>Contains the results of the <a>RestoreFromSnapshot</a> operation.</p>
 */
export interface RestoreFromSnapshotResult {}

/**
 * <p>The specified shared target is not valid.</p>
 */
export class InvalidTargetException extends __BaseException {
  readonly name: "InvalidTargetException" = "InvalidTargetException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTargetException, __BaseException>) {
    super({
      name: "InvalidTargetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTargetException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>Exception encountered while trying to access your Amazon Web Services organization.</p>
 */
export class OrganizationsException extends __BaseException {
  readonly name: "OrganizationsException" = "OrganizationsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationsException, __BaseException>) {
    super({
      name: "OrganizationsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationsException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

export interface ShareDirectoryResult {
  /**
   * <p>Identifier of the directory that is stored in the directory consumer account that is
   *       shared from the specified directory (<code>DirectoryId</code>).</p>
   */
  SharedDirectoryId?: string;
}

/**
 * <p>The maximum number of Amazon Web Services accounts that you can share with this directory has been
 *             reached.</p>
 */
export class ShareLimitExceededException extends __BaseException {
  readonly name: "ShareLimitExceededException" = "ShareLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ShareLimitExceededException, __BaseException>) {
    super({
      name: "ShareLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ShareLimitExceededException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

export interface StartSchemaExtensionResult {
  /**
   * <p>The identifier of the schema extension that will be applied.</p>
   */
  SchemaExtensionId?: string;
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

export interface UnshareDirectoryResult {
  /**
   * <p>Identifier of the directory stored in the directory consumer account that is to be
   *       unshared from the specified directory (<code>DirectoryId</code>).</p>
   */
  SharedDirectoryId?: string;
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

/**
 * <p>The result of an UpdateConditionalForwarder request.</p>
 */
export interface UpdateConditionalForwarderResult {}

export interface UpdateDirectorySetupRequest {
  /**
   * <p>
   *       The identifier of the directory on which you want to perform the update.
   *     </p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>
   *       The type of update that needs to be performed on the directory. For example, OS.
   *     </p>
   */
  UpdateType: UpdateType | string | undefined;

  /**
   * <p>
   *       The settings for the OS update that needs to be performed on the directory.
   *     </p>
   */
  OSUpdateSettings?: OSUpdateSettings;

  /**
   * <p>
   *       The boolean that specifies if a snapshot for the directory needs to be taken before updating the directory.
   *     </p>
   */
  CreateSnapshotBeforeUpdate?: boolean;
}

export interface UpdateDirectorySetupResult {}

/**
 * <p>The maximum allowed number of domain controllers per directory was exceeded. The
 *       default limit per directory is 20 domain controllers.</p>
 */
export class DomainControllerLimitExceededException extends __BaseException {
  readonly name: "DomainControllerLimitExceededException" = "DomainControllerLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DomainControllerLimitExceededException, __BaseException>) {
    super({
      name: "DomainControllerLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DomainControllerLimitExceededException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
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

export interface UpdateNumberOfDomainControllersResult {}

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

/**
 * <p>Contains the results of the <a>UpdateRadius</a> operation.</p>
 */
export interface UpdateRadiusResult {}

/**
 * <p>The specified directory setting is not compatible with other settings.</p>
 */
export class IncompatibleSettingsException extends __BaseException {
  readonly name: "IncompatibleSettingsException" = "IncompatibleSettingsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleSettingsException, __BaseException>) {
    super({
      name: "IncompatibleSettingsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleSettingsException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The specified directory setting is not supported.</p>
 */
export class UnsupportedSettingsException extends __BaseException {
  readonly name: "UnsupportedSettingsException" = "UnsupportedSettingsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedSettingsException, __BaseException>) {
    super({
      name: "UnsupportedSettingsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedSettingsException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>Contains information about the configurable settings for a directory.</p>
 */
export interface Setting {
  /**
   * <p>The name of the directory setting. For example:</p>
   *          <p>
   *             <code>TLS_1_0</code>
   *          </p>
   */
  Name: string | undefined;

  /**
   * <p>The value of the directory setting for which to retrieve information. For example, for <code>TLS_1_0</code>, the valid values are: <code>Enable</code> and <code>Disable</code>.</p>
   */
  Value: string | undefined;
}

export interface UpdateSettingsRequest {
  /**
   * <p>The identifier of the directory for which to update settings.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The list of <a>Setting</a> objects.</p>
   */
  Settings: Setting[] | undefined;
}

export interface UpdateSettingsResult {
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId?: string;
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

/**
 * <p>Result of a VerifyTrust request.</p>
 */
export interface VerifyTrustResult {
  /**
   * <p>The unique Trust ID of the trust relationship that was verified.</p>
   */
  TrustId?: string;
}

/**
 * @internal
 */
export const AcceptSharedDirectoryRequestFilterSensitiveLog = (obj: AcceptSharedDirectoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SharedDirectoryFilterSensitiveLog = (obj: SharedDirectory): any => ({
  ...obj,
  ...(obj.ShareNotes && { ShareNotes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AcceptSharedDirectoryResultFilterSensitiveLog = (obj: AcceptSharedDirectoryResult): any => ({
  ...obj,
  ...(obj.SharedDirectory && { SharedDirectory: SharedDirectoryFilterSensitiveLog(obj.SharedDirectory) }),
});

/**
 * @internal
 */
export const IpRouteFilterSensitiveLog = (obj: IpRoute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddIpRoutesRequestFilterSensitiveLog = (obj: AddIpRoutesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddIpRoutesResultFilterSensitiveLog = (obj: AddIpRoutesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DirectoryVpcSettingsFilterSensitiveLog = (obj: DirectoryVpcSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddRegionRequestFilterSensitiveLog = (obj: AddRegionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddRegionResultFilterSensitiveLog = (obj: AddRegionResult): any => ({
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
export const AddTagsToResourceRequestFilterSensitiveLog = (obj: AddTagsToResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddTagsToResourceResultFilterSensitiveLog = (obj: AddTagsToResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttributeFilterSensitiveLog = (obj: Attribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelSchemaExtensionRequestFilterSensitiveLog = (obj: CancelSchemaExtensionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelSchemaExtensionResultFilterSensitiveLog = (obj: CancelSchemaExtensionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientCertAuthSettingsFilterSensitiveLog = (obj: ClientCertAuthSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CertificateFilterSensitiveLog = (obj: Certificate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CertificateInfoFilterSensitiveLog = (obj: CertificateInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientAuthenticationSettingInfoFilterSensitiveLog = (obj: ClientAuthenticationSettingInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComputerFilterSensitiveLog = (obj: Computer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConditionalForwarderFilterSensitiveLog = (obj: ConditionalForwarder): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DirectoryConnectSettingsFilterSensitiveLog = (obj: DirectoryConnectSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectDirectoryRequestFilterSensitiveLog = (obj: ConnectDirectoryRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConnectDirectoryResultFilterSensitiveLog = (obj: ConnectDirectoryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAliasRequestFilterSensitiveLog = (obj: CreateAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAliasResultFilterSensitiveLog = (obj: CreateAliasResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateComputerRequestFilterSensitiveLog = (obj: CreateComputerRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateComputerResultFilterSensitiveLog = (obj: CreateComputerResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConditionalForwarderRequestFilterSensitiveLog = (obj: CreateConditionalForwarderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConditionalForwarderResultFilterSensitiveLog = (obj: CreateConditionalForwarderResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDirectoryRequestFilterSensitiveLog = (obj: CreateDirectoryRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateDirectoryResultFilterSensitiveLog = (obj: CreateDirectoryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLogSubscriptionRequestFilterSensitiveLog = (obj: CreateLogSubscriptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLogSubscriptionResultFilterSensitiveLog = (obj: CreateLogSubscriptionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMicrosoftADRequestFilterSensitiveLog = (obj: CreateMicrosoftADRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateMicrosoftADResultFilterSensitiveLog = (obj: CreateMicrosoftADResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSnapshotRequestFilterSensitiveLog = (obj: CreateSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSnapshotResultFilterSensitiveLog = (obj: CreateSnapshotResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTrustRequestFilterSensitiveLog = (obj: CreateTrustRequest): any => ({
  ...obj,
  ...(obj.TrustPassword && { TrustPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateTrustResultFilterSensitiveLog = (obj: CreateTrustResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConditionalForwarderRequestFilterSensitiveLog = (obj: DeleteConditionalForwarderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConditionalForwarderResultFilterSensitiveLog = (obj: DeleteConditionalForwarderResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDirectoryRequestFilterSensitiveLog = (obj: DeleteDirectoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDirectoryResultFilterSensitiveLog = (obj: DeleteDirectoryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLogSubscriptionRequestFilterSensitiveLog = (obj: DeleteLogSubscriptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLogSubscriptionResultFilterSensitiveLog = (obj: DeleteLogSubscriptionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSnapshotRequestFilterSensitiveLog = (obj: DeleteSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSnapshotResultFilterSensitiveLog = (obj: DeleteSnapshotResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrustRequestFilterSensitiveLog = (obj: DeleteTrustRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrustResultFilterSensitiveLog = (obj: DeleteTrustResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterCertificateRequestFilterSensitiveLog = (obj: DeregisterCertificateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterCertificateResultFilterSensitiveLog = (obj: DeregisterCertificateResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterEventTopicRequestFilterSensitiveLog = (obj: DeregisterEventTopicRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterEventTopicResultFilterSensitiveLog = (obj: DeregisterEventTopicResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCertificateRequestFilterSensitiveLog = (obj: DescribeCertificateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCertificateResultFilterSensitiveLog = (obj: DescribeCertificateResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClientAuthenticationSettingsRequestFilterSensitiveLog = (
  obj: DescribeClientAuthenticationSettingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClientAuthenticationSettingsResultFilterSensitiveLog = (
  obj: DescribeClientAuthenticationSettingsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConditionalForwardersRequestFilterSensitiveLog = (
  obj: DescribeConditionalForwardersRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConditionalForwardersResultFilterSensitiveLog = (
  obj: DescribeConditionalForwardersResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDirectoriesRequestFilterSensitiveLog = (obj: DescribeDirectoriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DirectoryConnectSettingsDescriptionFilterSensitiveLog = (
  obj: DirectoryConnectSettingsDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RadiusSettingsFilterSensitiveLog = (obj: RadiusSettings): any => ({
  ...obj,
  ...(obj.SharedSecret && { SharedSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DirectoryVpcSettingsDescriptionFilterSensitiveLog = (obj: DirectoryVpcSettingsDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OwnerDirectoryDescriptionFilterSensitiveLog = (obj: OwnerDirectoryDescription): any => ({
  ...obj,
  ...(obj.RadiusSettings && { RadiusSettings: RadiusSettingsFilterSensitiveLog(obj.RadiusSettings) }),
});

/**
 * @internal
 */
export const RegionsInfoFilterSensitiveLog = (obj: RegionsInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DirectoryDescriptionFilterSensitiveLog = (obj: DirectoryDescription): any => ({
  ...obj,
  ...(obj.ShareNotes && { ShareNotes: SENSITIVE_STRING }),
  ...(obj.RadiusSettings && { RadiusSettings: RadiusSettingsFilterSensitiveLog(obj.RadiusSettings) }),
  ...(obj.OwnerDirectoryDescription && {
    OwnerDirectoryDescription: OwnerDirectoryDescriptionFilterSensitiveLog(obj.OwnerDirectoryDescription),
  }),
});

/**
 * @internal
 */
export const DescribeDirectoriesResultFilterSensitiveLog = (obj: DescribeDirectoriesResult): any => ({
  ...obj,
  ...(obj.DirectoryDescriptions && {
    DirectoryDescriptions: obj.DirectoryDescriptions.map((item) => DirectoryDescriptionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DescribeDomainControllersRequestFilterSensitiveLog = (obj: DescribeDomainControllersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainControllerFilterSensitiveLog = (obj: DomainController): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainControllersResultFilterSensitiveLog = (obj: DescribeDomainControllersResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventTopicsRequestFilterSensitiveLog = (obj: DescribeEventTopicsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventTopicFilterSensitiveLog = (obj: EventTopic): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventTopicsResultFilterSensitiveLog = (obj: DescribeEventTopicsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLDAPSSettingsRequestFilterSensitiveLog = (obj: DescribeLDAPSSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LDAPSSettingInfoFilterSensitiveLog = (obj: LDAPSSettingInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLDAPSSettingsResultFilterSensitiveLog = (obj: DescribeLDAPSSettingsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRegionsRequestFilterSensitiveLog = (obj: DescribeRegionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegionDescriptionFilterSensitiveLog = (obj: RegionDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRegionsResultFilterSensitiveLog = (obj: DescribeRegionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSettingsRequestFilterSensitiveLog = (obj: DescribeSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SettingEntryFilterSensitiveLog = (obj: SettingEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSettingsResultFilterSensitiveLog = (obj: DescribeSettingsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSharedDirectoriesRequestFilterSensitiveLog = (obj: DescribeSharedDirectoriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSharedDirectoriesResultFilterSensitiveLog = (obj: DescribeSharedDirectoriesResult): any => ({
  ...obj,
  ...(obj.SharedDirectories && {
    SharedDirectories: obj.SharedDirectories.map((item) => SharedDirectoryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DescribeSnapshotsRequestFilterSensitiveLog = (obj: DescribeSnapshotsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotFilterSensitiveLog = (obj: Snapshot): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSnapshotsResultFilterSensitiveLog = (obj: DescribeSnapshotsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrustsRequestFilterSensitiveLog = (obj: DescribeTrustsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrustFilterSensitiveLog = (obj: Trust): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrustsResultFilterSensitiveLog = (obj: DescribeTrustsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUpdateDirectoryRequestFilterSensitiveLog = (obj: DescribeUpdateDirectoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OSUpdateSettingsFilterSensitiveLog = (obj: OSUpdateSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateValueFilterSensitiveLog = (obj: UpdateValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateInfoEntryFilterSensitiveLog = (obj: UpdateInfoEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUpdateDirectoryResultFilterSensitiveLog = (obj: DescribeUpdateDirectoryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DirectoryLimitsFilterSensitiveLog = (obj: DirectoryLimits): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableClientAuthenticationRequestFilterSensitiveLog = (obj: DisableClientAuthenticationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableClientAuthenticationResultFilterSensitiveLog = (obj: DisableClientAuthenticationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableLDAPSRequestFilterSensitiveLog = (obj: DisableLDAPSRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableLDAPSResultFilterSensitiveLog = (obj: DisableLDAPSResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableRadiusRequestFilterSensitiveLog = (obj: DisableRadiusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableRadiusResultFilterSensitiveLog = (obj: DisableRadiusResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableSsoRequestFilterSensitiveLog = (obj: DisableSsoRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DisableSsoResultFilterSensitiveLog = (obj: DisableSsoResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableClientAuthenticationRequestFilterSensitiveLog = (obj: EnableClientAuthenticationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableClientAuthenticationResultFilterSensitiveLog = (obj: EnableClientAuthenticationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableLDAPSRequestFilterSensitiveLog = (obj: EnableLDAPSRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableLDAPSResultFilterSensitiveLog = (obj: EnableLDAPSResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableRadiusRequestFilterSensitiveLog = (obj: EnableRadiusRequest): any => ({
  ...obj,
  ...(obj.RadiusSettings && { RadiusSettings: RadiusSettingsFilterSensitiveLog(obj.RadiusSettings) }),
});

/**
 * @internal
 */
export const EnableRadiusResultFilterSensitiveLog = (obj: EnableRadiusResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableSsoRequestFilterSensitiveLog = (obj: EnableSsoRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EnableSsoResultFilterSensitiveLog = (obj: EnableSsoResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDirectoryLimitsRequestFilterSensitiveLog = (obj: GetDirectoryLimitsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDirectoryLimitsResultFilterSensitiveLog = (obj: GetDirectoryLimitsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSnapshotLimitsRequestFilterSensitiveLog = (obj: GetSnapshotLimitsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotLimitsFilterSensitiveLog = (obj: SnapshotLimits): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSnapshotLimitsResultFilterSensitiveLog = (obj: GetSnapshotLimitsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCertificatesRequestFilterSensitiveLog = (obj: ListCertificatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCertificatesResultFilterSensitiveLog = (obj: ListCertificatesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListIpRoutesRequestFilterSensitiveLog = (obj: ListIpRoutesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpRouteInfoFilterSensitiveLog = (obj: IpRouteInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListIpRoutesResultFilterSensitiveLog = (obj: ListIpRoutesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLogSubscriptionsRequestFilterSensitiveLog = (obj: ListLogSubscriptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogSubscriptionFilterSensitiveLog = (obj: LogSubscription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLogSubscriptionsResultFilterSensitiveLog = (obj: ListLogSubscriptionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchemaExtensionsRequestFilterSensitiveLog = (obj: ListSchemaExtensionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SchemaExtensionInfoFilterSensitiveLog = (obj: SchemaExtensionInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchemaExtensionsResultFilterSensitiveLog = (obj: ListSchemaExtensionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResultFilterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterCertificateRequestFilterSensitiveLog = (obj: RegisterCertificateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterCertificateResultFilterSensitiveLog = (obj: RegisterCertificateResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterEventTopicRequestFilterSensitiveLog = (obj: RegisterEventTopicRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterEventTopicResultFilterSensitiveLog = (obj: RegisterEventTopicResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectSharedDirectoryRequestFilterSensitiveLog = (obj: RejectSharedDirectoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectSharedDirectoryResultFilterSensitiveLog = (obj: RejectSharedDirectoryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveIpRoutesRequestFilterSensitiveLog = (obj: RemoveIpRoutesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveIpRoutesResultFilterSensitiveLog = (obj: RemoveIpRoutesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveRegionRequestFilterSensitiveLog = (obj: RemoveRegionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveRegionResultFilterSensitiveLog = (obj: RemoveRegionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveTagsFromResourceRequestFilterSensitiveLog = (obj: RemoveTagsFromResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveTagsFromResourceResultFilterSensitiveLog = (obj: RemoveTagsFromResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetUserPasswordRequestFilterSensitiveLog = (obj: ResetUserPasswordRequest): any => ({
  ...obj,
  ...(obj.NewPassword && { NewPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResetUserPasswordResultFilterSensitiveLog = (obj: ResetUserPasswordResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreFromSnapshotRequestFilterSensitiveLog = (obj: RestoreFromSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreFromSnapshotResultFilterSensitiveLog = (obj: RestoreFromSnapshotResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ShareTargetFilterSensitiveLog = (obj: ShareTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ShareDirectoryRequestFilterSensitiveLog = (obj: ShareDirectoryRequest): any => ({
  ...obj,
  ...(obj.ShareNotes && { ShareNotes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ShareDirectoryResultFilterSensitiveLog = (obj: ShareDirectoryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSchemaExtensionRequestFilterSensitiveLog = (obj: StartSchemaExtensionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSchemaExtensionResultFilterSensitiveLog = (obj: StartSchemaExtensionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnshareTargetFilterSensitiveLog = (obj: UnshareTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnshareDirectoryRequestFilterSensitiveLog = (obj: UnshareDirectoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnshareDirectoryResultFilterSensitiveLog = (obj: UnshareDirectoryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConditionalForwarderRequestFilterSensitiveLog = (obj: UpdateConditionalForwarderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConditionalForwarderResultFilterSensitiveLog = (obj: UpdateConditionalForwarderResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDirectorySetupRequestFilterSensitiveLog = (obj: UpdateDirectorySetupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDirectorySetupResultFilterSensitiveLog = (obj: UpdateDirectorySetupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNumberOfDomainControllersRequestFilterSensitiveLog = (
  obj: UpdateNumberOfDomainControllersRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNumberOfDomainControllersResultFilterSensitiveLog = (
  obj: UpdateNumberOfDomainControllersResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRadiusRequestFilterSensitiveLog = (obj: UpdateRadiusRequest): any => ({
  ...obj,
  ...(obj.RadiusSettings && { RadiusSettings: RadiusSettingsFilterSensitiveLog(obj.RadiusSettings) }),
});

/**
 * @internal
 */
export const UpdateRadiusResultFilterSensitiveLog = (obj: UpdateRadiusResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SettingFilterSensitiveLog = (obj: Setting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSettingsRequestFilterSensitiveLog = (obj: UpdateSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSettingsResultFilterSensitiveLog = (obj: UpdateSettingsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTrustRequestFilterSensitiveLog = (obj: UpdateTrustRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTrustResultFilterSensitiveLog = (obj: UpdateTrustResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VerifyTrustRequestFilterSensitiveLog = (obj: VerifyTrustRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VerifyTrustResultFilterSensitiveLog = (obj: VerifyTrustResult): any => ({
  ...obj,
});
