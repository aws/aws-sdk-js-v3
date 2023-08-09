// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DirectoryServiceServiceException as __BaseException } from "./DirectoryServiceServiceException";

/**
 * @public
 */
export interface AcceptSharedDirectoryRequest {
  /**
   * @public
   * <p>Identifier of the shared directory in the directory consumer account. This identifier is
   *       different for each directory owner account. </p>
   */
  SharedDirectoryId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ShareMethod = {
  HANDSHAKE: "HANDSHAKE",
  ORGANIZATIONS: "ORGANIZATIONS",
} as const;

/**
 * @public
 */
export type ShareMethod = (typeof ShareMethod)[keyof typeof ShareMethod];

/**
 * @public
 * @enum
 */
export const ShareStatus = {
  DELETED: "Deleted",
  DELETING: "Deleting",
  PENDING_ACCEPTANCE: "PendingAcceptance",
  REJECTED: "Rejected",
  REJECTING: "Rejecting",
  REJECT_FAILED: "RejectFailed",
  SHARED: "Shared",
  SHARE_FAILED: "ShareFailed",
  SHARING: "Sharing",
} as const;

/**
 * @public
 */
export type ShareStatus = (typeof ShareStatus)[keyof typeof ShareStatus];

/**
 * @public
 * <p>Details about the shared directory in the directory owner account for which the share
 *       request in the directory consumer account has been accepted.</p>
 */
export interface SharedDirectory {
  /**
   * @public
   * <p>Identifier of the directory owner account, which contains the directory that has been
   *       shared to the consumer account.</p>
   */
  OwnerAccountId?: string;

  /**
   * @public
   * <p>Identifier of the directory in the directory owner account. </p>
   */
  OwnerDirectoryId?: string;

  /**
   * @public
   * <p>The method used when sharing a directory to determine whether the directory should be
   *       shared within your Amazon Web Services organization (<code>ORGANIZATIONS</code>) or with any Amazon Web Services account by
   *       sending a shared directory request (<code>HANDSHAKE</code>).</p>
   */
  ShareMethod?: ShareMethod | string;

  /**
   * @public
   * <p>Identifier of the directory consumer account that has access to the shared directory
   *         (<code>OwnerDirectoryId</code>) in the directory owner account.</p>
   */
  SharedAccountId?: string;

  /**
   * @public
   * <p>Identifier of the shared directory in the directory consumer account. This identifier is
   *       different for each directory owner account.</p>
   */
  SharedDirectoryId?: string;

  /**
   * @public
   * <p>Current directory status of the shared Managed Microsoft AD directory.</p>
   */
  ShareStatus?: ShareStatus | string;

  /**
   * @public
   * <p>A directory share request that is sent by the directory owner to the directory consumer.
   *       The request includes a typed message to help the directory consumer administrator determine
   *       whether to approve or reject the share invitation.</p>
   */
  ShareNotes?: string;

  /**
   * @public
   * <p>The date and time that the shared directory was created.</p>
   */
  CreatedDateTime?: Date;

  /**
   * @public
   * <p>The date and time that the shared directory was last updated.</p>
   */
  LastUpdatedDateTime?: Date;
}

/**
 * @public
 */
export interface AcceptSharedDirectoryResult {
  /**
   * @public
   * <p>The shared directory in the directory consumer account.</p>
   */
  SharedDirectory?: SharedDirectory;
}

/**
 * @public
 * <p>A client exception has occurred.</p>
 */
export class ClientException extends __BaseException {
  readonly name: "ClientException" = "ClientException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>The specified directory has already been shared with this Amazon Web Services account.</p>
 */
export class DirectoryAlreadySharedException extends __BaseException {
  readonly name: "DirectoryAlreadySharedException" = "DirectoryAlreadySharedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>The specified entity could not be found.</p>
 */
export class EntityDoesNotExistException extends __BaseException {
  readonly name: "EntityDoesNotExistException" = "EntityDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>One or more parameters are not valid.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>An exception has occurred in Directory Service.</p>
 */
export class ServiceException extends __BaseException {
  readonly name: "ServiceException" = "ServiceException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>Client authentication is not available in this region at this time.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>IP address block. This is often the address block of the DNS server used for your
 *          self-managed domain. </p>
 */
export interface IpRoute {
  /**
   * @public
   * <p>IP address block using CIDR format, for example 10.0.0.0/24. This is often the
   *          address block of the DNS server used for your self-managed domain. For a single IP address
   *          use a CIDR address block with /32. For example 10.0.0.0/32.</p>
   */
  CidrIp?: string;

  /**
   * @public
   * <p>Description of the address block.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface AddIpRoutesRequest {
  /**
   * @public
   * <p>Identifier (ID) of the directory to which to add the address block.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>IP address blocks, using CIDR format, of the traffic to route. This is often the IP
   *          address block of the DNS server used for your self-managed domain.</p>
   */
  IpRoutes: IpRoute[] | undefined;

  /**
   * @public
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

/**
 * @public
 */
export interface AddIpRoutesResult {}

/**
 * @public
 * <p>The specified directory is unavailable or could not be found.</p>
 */
export class DirectoryUnavailableException extends __BaseException {
  readonly name: "DirectoryUnavailableException" = "DirectoryUnavailableException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>The specified entity already exists.</p>
 */
export class EntityAlreadyExistsException extends __BaseException {
  readonly name: "EntityAlreadyExistsException" = "EntityAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>The maximum allowed number of IP addresses was exceeded. The default limit is 100 IP
 *          address blocks.</p>
 */
export class IpRouteLimitExceededException extends __BaseException {
  readonly name: "IpRouteLimitExceededException" = "IpRouteLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.</p>
 */
export interface DirectoryVpcSettings {
  /**
   * @public
   * <p>The identifier of the VPC in which to create the directory.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>The identifiers of the subnets for the directory servers. The two subnets must be in
   *       different Availability Zones. Directory Service creates a directory server and a DNS
   *       server in each of these subnets.</p>
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 */
export interface AddRegionRequest {
  /**
   * @public
   * <p>The identifier of the directory to which you want to add Region replication.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The name of the Region where you want to add domain controllers for replication. For
   *       example, <code>us-east-1</code>.</p>
   */
  RegionName: string | undefined;

  /**
   * @public
   * <p>Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.</p>
   */
  VPCSettings: DirectoryVpcSettings | undefined;
}

/**
 * @public
 */
export interface AddRegionResult {}

/**
 * @public
 * <p>The Region you specified is the same Region where the Managed Microsoft AD directory
 *       was created. Specify a different Region and try again.</p>
 */
export class DirectoryAlreadyInRegionException extends __BaseException {
  readonly name: "DirectoryAlreadyInRegionException" = "DirectoryAlreadyInRegionException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>The specified directory does not exist in the system.</p>
 */
export class DirectoryDoesNotExistException extends __BaseException {
  readonly name: "DirectoryDoesNotExistException" = "DirectoryDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>You have reached the limit for maximum number of simultaneous Region replications per
 *       directory.</p>
 */
export class RegionLimitExceededException extends __BaseException {
  readonly name: "RegionLimitExceededException" = "RegionLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>The operation is not supported.</p>
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>Metadata assigned to a directory consisting of a key-value pair.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>Required name of the tag. The string value can be Unicode characters and cannot be
   *       prefixed with "aws:". The string can contain only the set of Unicode letters, digits,
   *       white-space, '_', '.', '/', '=', '+', '-' (Java regex:
   *       "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The optional value of the tag. The string value can be Unicode characters. The string
   *       can contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-'
   *       (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceRequest {
  /**
   * @public
   * <p>Identifier (ID) for the directory to which to add the tag.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the directory.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceResult {}

/**
 * @public
 * <p>The maximum allowed number of tags was exceeded.</p>
 */
export class TagLimitExceededException extends __BaseException {
  readonly name: "TagLimitExceededException" = "TagLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>Represents a named directory attribute.</p>
 */
export interface Attribute {
  /**
   * @public
   * <p>The name of the attribute.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The value of the attribute.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>An authentication error occurred.</p>
 */
export class AuthenticationFailedException extends __BaseException {
  readonly name: "AuthenticationFailedException" = "AuthenticationFailedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The textual message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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

/**
 * @public
 */
export interface CancelSchemaExtensionRequest {
  /**
   * @public
   * <p>The identifier of the directory whose schema extension will be canceled.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The identifier of the schema extension that will be canceled.</p>
   */
  SchemaExtensionId: string | undefined;
}

/**
 * @public
 */
export interface CancelSchemaExtensionResult {}

/**
 * @public
 * <p>Contains information about the client certificate authentication settings for the <code>RegisterCertificate</code> and <code>DescribeCertificate</code> operations. </p>
 */
export interface ClientCertAuthSettings {
  /**
   * @public
   * <p>Specifies the URL of the default OCSP server used to check for revocation status. A secondary value to any OCSP address found in the AIA extension of the user certificate.</p>
   */
  OCSPUrl?: string;
}

/**
 * @public
 * @enum
 */
export const CertificateState = {
  DEREGISTERED: "Deregistered",
  DEREGISTERING: "Deregistering",
  DEREGISTER_FAILED: "DeregisterFailed",
  REGISTERED: "Registered",
  REGISTERING: "Registering",
  REGISTER_FAILED: "RegisterFailed",
} as const;

/**
 * @public
 */
export type CertificateState = (typeof CertificateState)[keyof typeof CertificateState];

/**
 * @public
 * @enum
 */
export const CertificateType = {
  CLIENT_CERT_AUTH: "ClientCertAuth",
  CLIENT_LDAPS: "ClientLDAPS",
} as const;

/**
 * @public
 */
export type CertificateType = (typeof CertificateType)[keyof typeof CertificateType];

/**
 * @public
 * <p>Information about the certificate.</p>
 */
export interface Certificate {
  /**
   * @public
   * <p>The identifier of the certificate.</p>
   */
  CertificateId?: string;

  /**
   * @public
   * <p>The state of the certificate.</p>
   */
  State?: CertificateState | string;

  /**
   * @public
   * <p>Describes a state change for the certificate.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>The common name for the certificate.</p>
   */
  CommonName?: string;

  /**
   * @public
   * <p>The date and time that the certificate was registered.</p>
   */
  RegisteredDateTime?: Date;

  /**
   * @public
   * <p>The date and time when the certificate will expire.</p>
   */
  ExpiryDateTime?: Date;

  /**
   * @public
   * <p>The function that the registered certificate performs. Valid values include <code>ClientLDAPS</code> or <code>ClientCertAuth</code>. The default value is <code>ClientLDAPS</code>.</p>
   */
  Type?: CertificateType | string;

  /**
   * @public
   * <p>A <code>ClientCertAuthSettings</code> object that contains client certificate authentication settings.</p>
   */
  ClientCertAuthSettings?: ClientCertAuthSettings;
}

/**
 * @public
 * <p>The certificate has already been registered into the system.</p>
 */
export class CertificateAlreadyExistsException extends __BaseException {
  readonly name: "CertificateAlreadyExistsException" = "CertificateAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>The certificate is not present in the system for describe or deregister activities.</p>
 */
export class CertificateDoesNotExistException extends __BaseException {
  readonly name: "CertificateDoesNotExistException" = "CertificateDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>Contains general information about a certificate.</p>
 */
export interface CertificateInfo {
  /**
   * @public
   * <p>The identifier of the certificate.</p>
   */
  CertificateId?: string;

  /**
   * @public
   * <p>The common name for the certificate.</p>
   */
  CommonName?: string;

  /**
   * @public
   * <p>The state of the certificate.</p>
   */
  State?: CertificateState | string;

  /**
   * @public
   * <p>The date and time when the certificate will expire.</p>
   */
  ExpiryDateTime?: Date;

  /**
   * @public
   * <p>The function that the registered certificate performs. Valid values include <code>ClientLDAPS</code> or <code>ClientCertAuth</code>. The default value is <code>ClientLDAPS</code>.</p>
   */
  Type?: CertificateType | string;
}

/**
 * @public
 * <p>The certificate is being used for the LDAP security connection and cannot be removed
 *       without disabling LDAP security.</p>
 */
export class CertificateInUseException extends __BaseException {
  readonly name: "CertificateInUseException" = "CertificateInUseException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>The certificate could not be added because the certificate limit has been reached.</p>
 */
export class CertificateLimitExceededException extends __BaseException {
  readonly name: "CertificateLimitExceededException" = "CertificateLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const ClientAuthenticationStatus = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;

/**
 * @public
 */
export type ClientAuthenticationStatus = (typeof ClientAuthenticationStatus)[keyof typeof ClientAuthenticationStatus];

/**
 * @public
 * @enum
 */
export const ClientAuthenticationType = {
  SMART_CARD: "SmartCard",
  SMART_CARD_OR_PASSWORD: "SmartCardOrPassword",
} as const;

/**
 * @public
 */
export type ClientAuthenticationType = (typeof ClientAuthenticationType)[keyof typeof ClientAuthenticationType];

/**
 * @public
 * <p>Contains information about a client authentication method for a directory.</p>
 */
export interface ClientAuthenticationSettingInfo {
  /**
   * @public
   * <p>The type of client authentication for the specified directory. If no type is specified, a list of all client authentication types that are supported for the directory is retrieved. </p>
   */
  Type?: ClientAuthenticationType | string;

  /**
   * @public
   * <p>Whether the client authentication type is enabled or disabled for the specified directory.</p>
   */
  Status?: ClientAuthenticationStatus | string;

  /**
   * @public
   * <p>The date and time when the status of the client authentication type was last updated.</p>
   */
  LastUpdatedDateTime?: Date;
}

/**
 * @public
 * <p>Contains information about a computer account in a directory.</p>
 */
export interface Computer {
  /**
   * @public
   * <p>The identifier of the computer.</p>
   */
  ComputerId?: string;

  /**
   * @public
   * <p>The computer name.</p>
   */
  ComputerName?: string;

  /**
   * @public
   * <p>An array of <a>Attribute</a> objects containing the LDAP attributes that belong to the
   *             computer account.</p>
   */
  ComputerAttributes?: Attribute[];
}

/**
 * @public
 * @enum
 */
export const ReplicationScope = {
  Domain: "Domain",
} as const;

/**
 * @public
 */
export type ReplicationScope = (typeof ReplicationScope)[keyof typeof ReplicationScope];

/**
 * @public
 * <p>Points to a remote domain with which you are setting up a trust relationship.
 *       Conditional forwarders are required in order to set up a trust relationship with another
 *       domain.</p>
 */
export interface ConditionalForwarder {
  /**
   * @public
   * <p>The fully qualified domain name (FQDN) of the remote domains pointed to by the
   *       conditional forwarder.</p>
   */
  RemoteDomainName?: string;

  /**
   * @public
   * <p>The IP addresses of the remote DNS server associated with RemoteDomainName. This is the
   *       IP address of the DNS server that your conditional forwarder points to.</p>
   */
  DnsIpAddrs?: string[];

  /**
   * @public
   * <p>The replication scope of the conditional forwarder. The only allowed value is
   *         <code>Domain</code>, which will replicate the conditional forwarder to all of the domain
   *       controllers for your Amazon Web Services directory.</p>
   */
  ReplicationScope?: ReplicationScope | string;
}

/**
 * @public
 * <p>Contains information for the <a>ConnectDirectory</a> operation when an AD
 *       Connector directory is being created.</p>
 */
export interface DirectoryConnectSettings {
  /**
   * @public
   * <p>The identifier of the VPC in which the AD Connector is created.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>A list of subnet identifiers in the VPC in which the AD Connector is created.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>A list of one or more IP addresses of DNS servers or domain controllers in your self-managed
   *       directory.</p>
   */
  CustomerDnsIps: string[] | undefined;

  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const DirectorySize = {
  LARGE: "Large",
  SMALL: "Small",
} as const;

/**
 * @public
 */
export type DirectorySize = (typeof DirectorySize)[keyof typeof DirectorySize];

/**
 * @public
 * <p>Contains the inputs for the <a>ConnectDirectory</a> operation.</p>
 */
export interface ConnectDirectoryRequest {
  /**
   * @public
   * <p>The fully qualified name of your self-managed directory, such as
   *         <code>corp.example.com</code>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The NetBIOS name of your self-managed directory, such as <code>CORP</code>.</p>
   */
  ShortName?: string;

  /**
   * @public
   * <p>The password for your self-managed user account.</p>
   */
  Password: string | undefined;

  /**
   * @public
   * <p>A description for the directory.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The size of the directory.</p>
   */
  Size: DirectorySize | string | undefined;

  /**
   * @public
   * <p>A <a>DirectoryConnectSettings</a> object that contains additional information
   *       for the operation.</p>
   */
  ConnectSettings: DirectoryConnectSettings | undefined;

  /**
   * @public
   * <p>The tags to be assigned to AD Connector.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Contains the results of the <a>ConnectDirectory</a> operation.</p>
 */
export interface ConnectDirectoryResult {
  /**
   * @public
   * <p>The identifier of the new directory.</p>
   */
  DirectoryId?: string;
}

/**
 * @public
 * <p>The maximum number of directories in the region has been reached. You can use the
 *                 <a>GetDirectoryLimits</a> operation to determine your directory limits in
 *             the region.</p>
 */
export class DirectoryLimitExceededException extends __BaseException {
  readonly name: "DirectoryLimitExceededException" = "DirectoryLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>Contains the inputs for the <a>CreateAlias</a> operation.</p>
 */
export interface CreateAliasRequest {
  /**
   * @public
   * <p>The identifier of the directory for which to create the alias.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The requested alias.</p>
   *          <p>The alias must be unique amongst all aliases in Amazon Web Services. This operation throws an
   *             <code>EntityAlreadyExistsException</code> error if the alias already exists.</p>
   */
  Alias: string | undefined;
}

/**
 * @public
 * <p>Contains the results of the <a>CreateAlias</a> operation.</p>
 */
export interface CreateAliasResult {
  /**
   * @public
   * <p>The identifier of the directory.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>The alias for the directory.</p>
   */
  Alias?: string;
}

/**
 * @public
 * <p>Contains the inputs for the <a>CreateComputer</a> operation.</p>
 */
export interface CreateComputerRequest {
  /**
   * @public
   * <p>The identifier of the directory in which to create the computer account.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The name of the computer account.</p>
   */
  ComputerName: string | undefined;

  /**
   * @public
   * <p>A one-time password that is used to join the computer to the directory. You should generate a random, strong password to use for this parameter.</p>
   */
  Password: string | undefined;

  /**
   * @public
   * <p>The fully-qualified distinguished name of the organizational unit to place the computer account in.</p>
   */
  OrganizationalUnitDistinguishedName?: string;

  /**
   * @public
   * <p>An array of <a>Attribute</a> objects that contain any LDAP attributes to apply to the
   *             computer account.</p>
   */
  ComputerAttributes?: Attribute[];
}

/**
 * @public
 * <p>Contains the results for the <a>CreateComputer</a> operation.</p>
 */
export interface CreateComputerResult {
  /**
   * @public
   * <p>A <a>Computer</a> object that represents the computer account.</p>
   */
  Computer?: Computer;
}

/**
 * @public
 * <p>Initiates the creation of a conditional forwarder for your Directory Service for Microsoft Active
 *       Directory. Conditional forwarders are required in order to set up a trust relationship with
 *       another domain.</p>
 */
export interface CreateConditionalForwarderRequest {
  /**
   * @public
   * <p>The directory ID of the Amazon Web Services directory for which you are creating the conditional
   *       forwarder.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The fully qualified domain name (FQDN) of the remote domain with which you will set up
   *       a trust relationship.</p>
   */
  RemoteDomainName: string | undefined;

  /**
   * @public
   * <p>The IP addresses of the remote DNS server associated with RemoteDomainName.</p>
   */
  DnsIpAddrs: string[] | undefined;
}

/**
 * @public
 * <p>The result of a CreateConditinalForwarder request.</p>
 */
export interface CreateConditionalForwarderResult {}

/**
 * @public
 * <p>Contains the inputs for the <a>CreateDirectory</a> operation. </p>
 */
export interface CreateDirectoryRequest {
  /**
   * @public
   * <p>The fully qualified name for the directory, such as <code>corp.example.com</code>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The NetBIOS name of the directory, such as <code>CORP</code>.</p>
   */
  ShortName?: string;

  /**
   * @public
   * <p>The password for the directory administrator. The directory creation process creates a
   *       directory administrator account with the user name <code>Administrator</code> and this
   *       password.</p>
   *          <p>If you need to change the password for the administrator account, you can use the <a>ResetUserPassword</a> API call.</p>
   *          <p>The regex pattern for this string is made up of the following conditions:</p>
   *          <ul>
   *             <li>
   *                <p>Length (?=^.\{8,64\}$) – Must be between 8 and 64 characters</p>
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
   * @public
   * <p>A description for the directory.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The size of the directory.</p>
   */
  Size: DirectorySize | string | undefined;

  /**
   * @public
   * <p>A <a>DirectoryVpcSettings</a> object that contains additional information for
   *       the operation.</p>
   */
  VpcSettings?: DirectoryVpcSettings;

  /**
   * @public
   * <p>The tags to be assigned to the Simple AD directory.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Contains the results of the <a>CreateDirectory</a> operation.</p>
 */
export interface CreateDirectoryResult {
  /**
   * @public
   * <p>The identifier of the directory that was created.</p>
   */
  DirectoryId?: string;
}

/**
 * @public
 */
export interface CreateLogSubscriptionRequest {
  /**
   * @public
   * <p>Identifier of the directory to which you want to subscribe and receive real-time logs to
   *       your specified CloudWatch log group.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The name of the CloudWatch log group where the real-time domain controller logs are
   *       forwarded.</p>
   */
  LogGroupName: string | undefined;
}

/**
 * @public
 */
export interface CreateLogSubscriptionResult {}

/**
 * @public
 * <p>The account does not have sufficient permission to perform the operation.</p>
 */
export class InsufficientPermissionsException extends __BaseException {
  readonly name: "InsufficientPermissionsException" = "InsufficientPermissionsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const DirectoryEdition = {
  ENTERPRISE: "Enterprise",
  STANDARD: "Standard",
} as const;

/**
 * @public
 */
export type DirectoryEdition = (typeof DirectoryEdition)[keyof typeof DirectoryEdition];

/**
 * @public
 * <p>Creates an Managed Microsoft AD directory.</p>
 */
export interface CreateMicrosoftADRequest {
  /**
   * @public
   * <p>The fully qualified domain name for the Managed Microsoft AD directory, such as
   *         <code>corp.example.com</code>. This name will resolve inside your VPC only. It does not need
   *       to be publicly resolvable.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The NetBIOS name for your domain, such as <code>CORP</code>. If you don't specify a
   *       NetBIOS name, it will default to the first part of your directory DNS. For example,
   *         <code>CORP</code> for the directory DNS <code>corp.example.com</code>. </p>
   */
  ShortName?: string;

  /**
   * @public
   * <p>The password for the default administrative user named <code>Admin</code>.</p>
   *          <p>If you need to change the password for the administrator account, you can use the <a>ResetUserPassword</a> API call.</p>
   */
  Password: string | undefined;

  /**
   * @public
   * <p>A description for the directory. This label will appear on the Amazon Web Services console
   *         <code>Directory Details</code> page after the directory is created.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.</p>
   */
  VpcSettings: DirectoryVpcSettings | undefined;

  /**
   * @public
   * <p>Managed Microsoft AD is available in two editions: <code>Standard</code> and
   *         <code>Enterprise</code>. <code>Enterprise</code> is the default.</p>
   */
  Edition?: DirectoryEdition | string;

  /**
   * @public
   * <p>The tags to be assigned to the Managed Microsoft AD directory.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Result of a CreateMicrosoftAD request.</p>
 */
export interface CreateMicrosoftADResult {
  /**
   * @public
   * <p>The identifier of the directory that was created.</p>
   */
  DirectoryId?: string;
}

/**
 * @public
 * <p>Contains the inputs for the <a>CreateSnapshot</a> operation.</p>
 */
export interface CreateSnapshotRequest {
  /**
   * @public
   * <p>The identifier of the directory of which to take a snapshot.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The descriptive name to apply to the snapshot.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Contains the results of the <a>CreateSnapshot</a> operation.</p>
 */
export interface CreateSnapshotResult {
  /**
   * @public
   * <p>The identifier of the snapshot that was created.</p>
   */
  SnapshotId?: string;
}

/**
 * @public
 * <p>The maximum number of manual snapshots for the directory has been reached. You can
 *             use the <a>GetSnapshotLimits</a> operation to determine the snapshot limits
 *             for a directory.</p>
 */
export class SnapshotLimitExceededException extends __BaseException {
  readonly name: "SnapshotLimitExceededException" = "SnapshotLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const SelectiveAuth = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;

/**
 * @public
 */
export type SelectiveAuth = (typeof SelectiveAuth)[keyof typeof SelectiveAuth];

/**
 * @public
 * @enum
 */
export const TrustDirection = {
  ONE_WAY_INCOMING: "One-Way: Incoming",
  ONE_WAY_OUTGOING: "One-Way: Outgoing",
  TWO_WAY: "Two-Way",
} as const;

/**
 * @public
 */
export type TrustDirection = (typeof TrustDirection)[keyof typeof TrustDirection];

/**
 * @public
 * @enum
 */
export const TrustType = {
  EXTERNAL: "External",
  FOREST: "Forest",
} as const;

/**
 * @public
 */
export type TrustType = (typeof TrustType)[keyof typeof TrustType];

/**
 * @public
 * <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For
 *       example, you can establish a trust between your Managed Microsoft AD directory, and your existing
 *       self-managed Microsoft Active Directory. This would allow you to provide users and groups
 *       access to resources in either domain, with a single set of credentials.</p>
 *          <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an
 *       Managed Microsoft AD directory and an external domain.</p>
 */
export interface CreateTrustRequest {
  /**
   * @public
   * <p>The Directory ID of the Managed Microsoft AD directory for which to establish the trust
   *       relationship.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The Fully Qualified Domain Name (FQDN) of the external domain for which to create the
   *       trust relationship.</p>
   */
  RemoteDomainName: string | undefined;

  /**
   * @public
   * <p>The trust password. The must be the same password that was used when creating the trust
   *       relationship on the external domain.</p>
   */
  TrustPassword: string | undefined;

  /**
   * @public
   * <p>The direction of the trust relationship.</p>
   */
  TrustDirection: TrustDirection | string | undefined;

  /**
   * @public
   * <p>The trust relationship type. <code>Forest</code> is the default.</p>
   */
  TrustType?: TrustType | string;

  /**
   * @public
   * <p>The IP addresses of the remote DNS server associated with RemoteDomainName.</p>
   */
  ConditionalForwarderIpAddrs?: string[];

  /**
   * @public
   * <p>Optional parameter to enable selective authentication for the trust.</p>
   */
  SelectiveAuth?: SelectiveAuth | string;
}

/**
 * @public
 * <p>The result of a CreateTrust request.</p>
 */
export interface CreateTrustResult {
  /**
   * @public
   * <p>A unique identifier for the trust relationship that was created.</p>
   */
  TrustId?: string;
}

/**
 * @public
 * <p>Deletes a conditional forwarder.</p>
 */
export interface DeleteConditionalForwarderRequest {
  /**
   * @public
   * <p>The directory ID for which you are deleting the conditional forwarder.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The fully qualified domain name (FQDN) of the remote domain with which you are deleting
   *       the conditional forwarder.</p>
   */
  RemoteDomainName: string | undefined;
}

/**
 * @public
 * <p>The result of a DeleteConditionalForwarder request.</p>
 */
export interface DeleteConditionalForwarderResult {}

/**
 * @public
 * <p>Contains the inputs for the <a>DeleteDirectory</a> operation.</p>
 */
export interface DeleteDirectoryRequest {
  /**
   * @public
   * <p>The identifier of the directory to delete.</p>
   */
  DirectoryId: string | undefined;
}

/**
 * @public
 * <p>Contains the results of the <a>DeleteDirectory</a> operation.</p>
 */
export interface DeleteDirectoryResult {
  /**
   * @public
   * <p>The directory identifier.</p>
   */
  DirectoryId?: string;
}

/**
 * @public
 */
export interface DeleteLogSubscriptionRequest {
  /**
   * @public
   * <p>Identifier of the directory whose log subscription you want to delete.</p>
   */
  DirectoryId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLogSubscriptionResult {}

/**
 * @public
 * <p>Contains the inputs for the <a>DeleteSnapshot</a> operation.</p>
 */
export interface DeleteSnapshotRequest {
  /**
   * @public
   * <p>The identifier of the directory snapshot to be deleted.</p>
   */
  SnapshotId: string | undefined;
}

/**
 * @public
 * <p>Contains the results of the <a>DeleteSnapshot</a> operation.</p>
 */
export interface DeleteSnapshotResult {
  /**
   * @public
   * <p>The identifier of the directory snapshot that was deleted.</p>
   */
  SnapshotId?: string;
}

/**
 * @public
 * <p>Deletes the local side of an existing trust relationship between the Managed Microsoft AD
 *       directory and the external domain.</p>
 */
export interface DeleteTrustRequest {
  /**
   * @public
   * <p>The Trust ID of the trust relationship to be deleted.</p>
   */
  TrustId: string | undefined;

  /**
   * @public
   * <p>Delete a conditional forwarder as part of a DeleteTrustRequest.</p>
   */
  DeleteAssociatedConditionalForwarder?: boolean;
}

/**
 * @public
 * <p>The result of a DeleteTrust request.</p>
 */
export interface DeleteTrustResult {
  /**
   * @public
   * <p>The Trust ID of the trust relationship that was deleted.</p>
   */
  TrustId?: string;
}

/**
 * @public
 */
export interface DeregisterCertificateRequest {
  /**
   * @public
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The identifier of the certificate.</p>
   */
  CertificateId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterCertificateResult {}

/**
 * @public
 * <p>Removes the specified directory as a publisher to the specified Amazon SNS topic.</p>
 */
export interface DeregisterEventTopicRequest {
  /**
   * @public
   * <p>The Directory ID to remove as a publisher. This directory will no longer send messages
   *       to the specified Amazon SNS topic.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The name of the Amazon SNS topic from which to remove the directory as a
   *       publisher.</p>
   */
  TopicName: string | undefined;
}

/**
 * @public
 * <p>The result of a DeregisterEventTopic request.</p>
 */
export interface DeregisterEventTopicResult {}

/**
 * @public
 */
export interface DescribeCertificateRequest {
  /**
   * @public
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The identifier of the certificate.</p>
   */
  CertificateId: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateResult {
  /**
   * @public
   * <p>Information about the certificate, including registered date time, certificate state, the
   *       reason for the state, expiration date time, and certificate common name.</p>
   */
  Certificate?: Certificate;
}

/**
 * @public
 */
export interface DescribeClientAuthenticationSettingsRequest {
  /**
   * @public
   * <p>The identifier of the directory for which to retrieve information.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The type of client authentication for which to retrieve information. If no type is specified, a list of all client authentication types that are supported for the specified directory is retrieved.</p>
   */
  Type?: ClientAuthenticationType | string;

  /**
   * @public
   * <p>The <i>DescribeClientAuthenticationSettingsResult.NextToken</i> value from a previous call to <a>DescribeClientAuthenticationSettings</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return. If this value is zero, the maximum number of items is specified by the limitations of the operation. </p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface DescribeClientAuthenticationSettingsResult {
  /**
   * @public
   * <p>Information about the type of client authentication for the specified directory. The following information is retrieved: The date and time when the status of the client authentication type was last updated, whether the client authentication type is enabled or disabled, and the type of client authentication.</p>
   */
  ClientAuthenticationSettingsInfo?: ClientAuthenticationSettingInfo[];

  /**
   * @public
   * <p>The next token used to retrieve the client authentication settings if the number of setting types exceeds
   *       page limit and there is another page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes a conditional forwarder.</p>
 */
export interface DescribeConditionalForwardersRequest {
  /**
   * @public
   * <p>The directory ID for which to get the list of associated conditional
   *       forwarders.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The fully qualified domain names (FQDN) of the remote domains for which to get the list
   *       of associated conditional forwarders. If this member is null, all conditional forwarders are
   *       returned.</p>
   */
  RemoteDomainNames?: string[];
}

/**
 * @public
 * <p>The result of a DescribeConditionalForwarder request.</p>
 */
export interface DescribeConditionalForwardersResult {
  /**
   * @public
   * <p>The list of conditional forwarders that have been created.</p>
   */
  ConditionalForwarders?: ConditionalForwarder[];
}

/**
 * @public
 * <p>Contains the inputs for the <a>DescribeDirectories</a> operation.</p>
 */
export interface DescribeDirectoriesRequest {
  /**
   * @public
   * <p>A list of identifiers of the directories for which to obtain the information. If this
   *       member is null, all directories that belong to the current account are returned.</p>
   *          <p>An empty list results in an <code>InvalidParameterException</code> being thrown.</p>
   */
  DirectoryIds?: string[];

  /**
   * @public
   * <p>The <code>DescribeDirectoriesResult.NextToken</code> value from a previous call to <a>DescribeDirectories</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return. If this value is zero, the maximum number of items
   *       is specified by the limitations of the operation.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>Contains information about an AD Connector directory.</p>
 */
export interface DirectoryConnectSettingsDescription {
  /**
   * @public
   * <p>The identifier of the VPC that the AD Connector is in.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>A list of subnet identifiers in the VPC that the AD Connector is in.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>The user name of the service account in your self-managed directory.</p>
   */
  CustomerUserName?: string;

  /**
   * @public
   * <p>The security group identifier for the AD Connector directory.</p>
   */
  SecurityGroupId?: string;

  /**
   * @public
   * <p>A list of the Availability Zones that the directory is in.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>The IP addresses of the AD Connector servers.</p>
   */
  ConnectIps?: string[];
}

/**
 * @public
 * @enum
 */
export const OSVersion = {
  VERSION_2012: "SERVER_2012",
  VERSION_2019: "SERVER_2019",
} as const;

/**
 * @public
 */
export type OSVersion = (typeof OSVersion)[keyof typeof OSVersion];

/**
 * @public
 * @enum
 */
export const RadiusAuthenticationProtocol = {
  CHAP: "CHAP",
  MSCHAPV1: "MS-CHAPv1",
  MSCHAPV2: "MS-CHAPv2",
  PAP: "PAP",
} as const;

/**
 * @public
 */
export type RadiusAuthenticationProtocol =
  (typeof RadiusAuthenticationProtocol)[keyof typeof RadiusAuthenticationProtocol];

/**
 * @public
 * <p>Contains information about a Remote Authentication Dial In User Service (RADIUS)
 *          server.</p>
 */
export interface RadiusSettings {
  /**
   * @public
   * <p>An array of strings that contains the fully qualified domain name (FQDN) or IP
   *          addresses of the RADIUS server endpoints, or the FQDN or IP addresses of your RADIUS server
   *          load balancer.</p>
   */
  RadiusServers?: string[];

  /**
   * @public
   * <p>The port that your RADIUS server is using for communications. Your self-managed
   *          network must allow inbound traffic over this port from the Directory Service servers.</p>
   */
  RadiusPort?: number;

  /**
   * @public
   * <p>The amount of time, in seconds, to wait for the RADIUS server to respond.</p>
   */
  RadiusTimeout?: number;

  /**
   * @public
   * <p>The maximum number of times that communication with the RADIUS server is
   *          attempted.</p>
   */
  RadiusRetries?: number;

  /**
   * @public
   * <p>Required for enabling RADIUS on the directory.</p>
   */
  SharedSecret?: string;

  /**
   * @public
   * <p>The protocol specified for your RADIUS endpoints.</p>
   */
  AuthenticationProtocol?: RadiusAuthenticationProtocol | string;

  /**
   * @public
   * <p>Not currently used.</p>
   */
  DisplayLabel?: string;

  /**
   * @public
   * <p>Not currently used.</p>
   */
  UseSameUsername?: boolean;
}

/**
 * @public
 * @enum
 */
export const RadiusStatus = {
  COMPLETED: "Completed",
  CREATING: "Creating",
  FAILED: "Failed",
} as const;

/**
 * @public
 */
export type RadiusStatus = (typeof RadiusStatus)[keyof typeof RadiusStatus];

/**
 * @public
 * <p>Contains information about the directory.</p>
 */
export interface DirectoryVpcSettingsDescription {
  /**
   * @public
   * <p>The identifier of the VPC that the directory is in.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The identifiers of the subnets for the directory servers.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>The domain controller security group identifier for the directory.</p>
   */
  SecurityGroupId?: string;

  /**
   * @public
   * <p>The list of Availability Zones that the directory is in.</p>
   */
  AvailabilityZones?: string[];
}

/**
 * @public
 * <p>Describes the directory owner account details that have been shared to the directory
 *       consumer account.</p>
 */
export interface OwnerDirectoryDescription {
  /**
   * @public
   * <p>Identifier of the Managed Microsoft AD directory in the directory owner
   *       account.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>Identifier of the directory owner account.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>IP address of the directory’s domain controllers.</p>
   */
  DnsIpAddrs?: string[];

  /**
   * @public
   * <p>Information about the VPC settings for the directory.</p>
   */
  VpcSettings?: DirectoryVpcSettingsDescription;

  /**
   * @public
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS
   *       server.</p>
   */
  RadiusSettings?: RadiusSettings;

  /**
   * @public
   * <p>Information about the status of the RADIUS server.</p>
   */
  RadiusStatus?: RadiusStatus | string;
}

/**
 * @public
 * <p>Provides information about the Regions that are configured for multi-Region
 *       replication.</p>
 */
export interface RegionsInfo {
  /**
   * @public
   * <p>The Region where the Managed Microsoft AD directory was originally created.</p>
   */
  PrimaryRegion?: string;

  /**
   * @public
   * <p>Lists the Regions where the directory has been replicated, excluding the primary
   *       Region.</p>
   */
  AdditionalRegions?: string[];
}

/**
 * @public
 * @enum
 */
export const DirectoryStage = {
  ACTIVE: "Active",
  CREATED: "Created",
  CREATING: "Creating",
  DELETED: "Deleted",
  DELETING: "Deleting",
  FAILED: "Failed",
  IMPAIRED: "Impaired",
  INOPERABLE: "Inoperable",
  REQUESTED: "Requested",
  RESTOREFAILED: "RestoreFailed",
  RESTORING: "Restoring",
} as const;

/**
 * @public
 */
export type DirectoryStage = (typeof DirectoryStage)[keyof typeof DirectoryStage];

/**
 * @public
 * @enum
 */
export const DirectoryType = {
  AD_CONNECTOR: "ADConnector",
  MICROSOFT_AD: "MicrosoftAD",
  SHARED_MICROSOFT_AD: "SharedMicrosoftAD",
  SIMPLE_AD: "SimpleAD",
} as const;

/**
 * @public
 */
export type DirectoryType = (typeof DirectoryType)[keyof typeof DirectoryType];

/**
 * @public
 * <p>Contains information about an Directory Service directory.</p>
 */
export interface DirectoryDescription {
  /**
   * @public
   * <p>The directory identifier.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>The fully qualified name of the directory.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The short name of the directory.</p>
   */
  ShortName?: string;

  /**
   * @public
   * <p>The directory size.</p>
   */
  Size?: DirectorySize | string;

  /**
   * @public
   * <p>The edition associated with this directory.</p>
   */
  Edition?: DirectoryEdition | string;

  /**
   * @public
   * <p>The alias for the directory. If no alias has been created for the directory, the alias is
   *       the directory identifier, such as <code>d-XXXXXXXXXX</code>.</p>
   */
  Alias?: string;

  /**
   * @public
   * <p>The access URL for the directory, such as
   *         <code>http://<alias>.awsapps.com</code>. If no alias has been created for the
   *       directory, <code><alias></code> is the directory identifier, such as
   *         <code>d-XXXXXXXXXX</code>.</p>
   */
  AccessUrl?: string;

  /**
   * @public
   * <p>The description for the directory.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The IP addresses of the DNS servers for the directory. For a Simple AD or Microsoft AD
   *       directory, these are the IP addresses of the Simple AD or Microsoft AD directory servers. For
   *       an AD Connector directory, these are the IP addresses of the DNS servers or domain controllers
   *       in your self-managed directory to which the AD Connector is connected.</p>
   */
  DnsIpAddrs?: string[];

  /**
   * @public
   * <p>The current stage of the directory.</p>
   */
  Stage?: DirectoryStage | string;

  /**
   * @public
   * <p>Current directory status of the shared Managed Microsoft AD directory.</p>
   */
  ShareStatus?: ShareStatus | string;

  /**
   * @public
   * <p>The method used when sharing a directory to determine whether the directory should be
   *       shared within your Amazon Web Services organization (<code>ORGANIZATIONS</code>) or with any Amazon Web Services account by
   *       sending a shared directory request (<code>HANDSHAKE</code>).</p>
   */
  ShareMethod?: ShareMethod | string;

  /**
   * @public
   * <p>A directory share request that is sent by the directory owner to the directory consumer.
   *       The request includes a typed message to help the directory consumer administrator determine
   *       whether to approve or reject the share invitation.</p>
   */
  ShareNotes?: string;

  /**
   * @public
   * <p>Specifies when the directory was created.</p>
   */
  LaunchTime?: Date;

  /**
   * @public
   * <p>The date and time that the stage was last updated.</p>
   */
  StageLastUpdatedDateTime?: Date;

  /**
   * @public
   * <p>The directory size.</p>
   */
  Type?: DirectoryType | string;

  /**
   * @public
   * <p>A <a>DirectoryVpcSettingsDescription</a> object that contains additional
   *       information about a directory. This member is only present if the directory is a Simple AD or
   *       Managed Microsoft AD directory.</p>
   */
  VpcSettings?: DirectoryVpcSettingsDescription;

  /**
   * @public
   * <p>A <a>DirectoryConnectSettingsDescription</a> object that contains additional
   *       information about an AD Connector directory. This member is only present if the directory is
   *       an AD Connector directory.</p>
   */
  ConnectSettings?: DirectoryConnectSettingsDescription;

  /**
   * @public
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS
   *       server configured for this directory.</p>
   */
  RadiusSettings?: RadiusSettings;

  /**
   * @public
   * <p>The status of the RADIUS MFA server connection.</p>
   */
  RadiusStatus?: RadiusStatus | string;

  /**
   * @public
   * <p>Additional information about the directory stage.</p>
   */
  StageReason?: string;

  /**
   * @public
   * <p>Indicates if single sign-on is enabled for the directory. For more information, see <a>EnableSso</a> and <a>DisableSso</a>.</p>
   */
  SsoEnabled?: boolean;

  /**
   * @public
   * <p>The desired number of domain controllers in the directory if the directory is Microsoft
   *       AD.</p>
   */
  DesiredNumberOfDomainControllers?: number;

  /**
   * @public
   * <p>Describes the Managed Microsoft AD directory in the directory owner account.</p>
   */
  OwnerDirectoryDescription?: OwnerDirectoryDescription;

  /**
   * @public
   * <p>Lists the Regions where the directory has replicated.</p>
   */
  RegionsInfo?: RegionsInfo;

  /**
   * @public
   * <p>The operating system (OS) version of the directory.</p>
   */
  OsVersion?: OSVersion | string;
}

/**
 * @public
 * <p>Contains the results of the <a>DescribeDirectories</a> operation.</p>
 */
export interface DescribeDirectoriesResult {
  /**
   * @public
   * <p>The list of <a>DirectoryDescription</a> objects that were retrieved.</p>
   *          <p>It is possible that this list contains less than the number of items specified in the
   *         <code>Limit</code> member of the request. This occurs if there are less than the requested
   *       number of items left to retrieve, or if the limitations of the operation have been
   *       exceeded.</p>
   */
  DirectoryDescriptions?: DirectoryDescription[];

  /**
   * @public
   * <p>If not null, more results are available. Pass this value for the <code>NextToken</code>
   *       parameter in a subsequent call to <a>DescribeDirectories</a> to retrieve the next
   *       set of items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The <code>NextToken</code> value is not valid.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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

/**
 * @public
 */
export interface DescribeDomainControllersRequest {
  /**
   * @public
   * <p>Identifier of the directory for which to retrieve the domain controller
   *       information.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>A list of identifiers for the domain controllers whose information will be
   *       provided.</p>
   */
  DomainControllerIds?: string[];

  /**
   * @public
   * <p>The <i>DescribeDomainControllers.NextToken</i> value from a previous call
   *       to <a>DescribeDomainControllers</a>. Pass null if this is the first call.
   *     </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;
}

/**
 * @public
 * @enum
 */
export const DomainControllerStatus = {
  ACTIVE: "Active",
  CREATING: "Creating",
  DELETED: "Deleted",
  DELETING: "Deleting",
  FAILED: "Failed",
  IMPAIRED: "Impaired",
  RESTORING: "Restoring",
} as const;

/**
 * @public
 */
export type DomainControllerStatus = (typeof DomainControllerStatus)[keyof typeof DomainControllerStatus];

/**
 * @public
 * <p>Contains information about the domain controllers for a specified directory.</p>
 */
export interface DomainController {
  /**
   * @public
   * <p>Identifier of the directory where the domain controller resides.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>Identifies a specific domain controller in the directory.</p>
   */
  DomainControllerId?: string;

  /**
   * @public
   * <p>The IP address of the domain controller.</p>
   */
  DnsIpAddr?: string;

  /**
   * @public
   * <p>The identifier of the VPC that contains the domain controller.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>Identifier of the subnet in the VPC that contains the domain controller.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The Availability Zone where the domain controller is located.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The status of the domain controller.</p>
   */
  Status?: DomainControllerStatus | string;

  /**
   * @public
   * <p>A description of the domain controller state.</p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>Specifies when the domain controller was created.</p>
   */
  LaunchTime?: Date;

  /**
   * @public
   * <p>The date and time that the status was last updated.</p>
   */
  StatusLastUpdatedDateTime?: Date;
}

/**
 * @public
 */
export interface DescribeDomainControllersResult {
  /**
   * @public
   * <p>List of the <a>DomainController</a> objects that were retrieved.</p>
   */
  DomainControllers?: DomainController[];

  /**
   * @public
   * <p>If not null, more results are available. Pass this value for the <code>NextToken</code>
   *       parameter in a subsequent call to <a>DescribeDomainControllers</a> retrieve the
   *       next set of items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes event topics.</p>
 */
export interface DescribeEventTopicsRequest {
  /**
   * @public
   * <p>The Directory ID for which to get the list of associated Amazon SNS topics. If this member
   *       is null, associations for all Directory IDs are returned.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>A list of Amazon SNS topic names for which to obtain the information. If this member is
   *       null, all associations for the specified Directory ID are returned.</p>
   *          <p>An empty list results in an <code>InvalidParameterException</code> being
   *       thrown.</p>
   */
  TopicNames?: string[];
}

/**
 * @public
 * @enum
 */
export const TopicStatus = {
  DELETED: "Deleted",
  FAILED: "Failed",
  REGISTERED: "Registered",
  TOPIC_NOT_FOUND: "Topic not found",
} as const;

/**
 * @public
 */
export type TopicStatus = (typeof TopicStatus)[keyof typeof TopicStatus];

/**
 * @public
 * <p>Information about Amazon SNS topic and Directory Service directory associations.</p>
 */
export interface EventTopic {
  /**
   * @public
   * <p>The Directory ID of an Directory Service directory that will publish status messages to an Amazon SNS
   *       topic.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>The name of an Amazon SNS topic the receives status messages from the directory.</p>
   */
  TopicName?: string;

  /**
   * @public
   * <p>The Amazon SNS topic ARN (Amazon Resource Name).</p>
   */
  TopicArn?: string;

  /**
   * @public
   * <p>The date and time of when you associated your directory with the Amazon SNS topic.</p>
   */
  CreatedDateTime?: Date;

  /**
   * @public
   * <p>The topic registration status.</p>
   */
  Status?: TopicStatus | string;
}

/**
 * @public
 * <p>The result of a DescribeEventTopic request.</p>
 */
export interface DescribeEventTopicsResult {
  /**
   * @public
   * <p>A list of Amazon SNS topic names that receive status messages from the specified Directory
   *       ID.</p>
   */
  EventTopics?: EventTopic[];
}

/**
 * @public
 * @enum
 */
export const LDAPSType = {
  CLIENT: "Client",
} as const;

/**
 * @public
 */
export type LDAPSType = (typeof LDAPSType)[keyof typeof LDAPSType];

/**
 * @public
 */
export interface DescribeLDAPSSettingsRequest {
  /**
   * @public
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The type of LDAP security to enable. Currently only the value <code>Client</code> is
   *       supported.</p>
   */
  Type?: LDAPSType | string;

  /**
   * @public
   * <p>The type of next token used for pagination.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies the number of items that should be displayed on one page.</p>
   */
  Limit?: number;
}

/**
 * @public
 * @enum
 */
export const LDAPSStatus = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
  ENABLE_FAILED: "EnableFailed",
  ENABLING: "Enabling",
} as const;

/**
 * @public
 */
export type LDAPSStatus = (typeof LDAPSStatus)[keyof typeof LDAPSStatus];

/**
 * @public
 * <p>Contains general information about the LDAPS settings.</p>
 */
export interface LDAPSSettingInfo {
  /**
   * @public
   * <p>The state of the LDAPS settings.</p>
   */
  LDAPSStatus?: LDAPSStatus | string;

  /**
   * @public
   * <p>Describes a state change for LDAPS.</p>
   */
  LDAPSStatusReason?: string;

  /**
   * @public
   * <p>The date and time when the LDAPS settings were last updated.</p>
   */
  LastUpdatedDateTime?: Date;
}

/**
 * @public
 */
export interface DescribeLDAPSSettingsResult {
  /**
   * @public
   * <p>Information about LDAP security for the specified directory, including status of
   *       enablement, state last updated date time, and the reason for the state.</p>
   */
  LDAPSSettingsInfo?: LDAPSSettingInfo[];

  /**
   * @public
   * <p>The next token used to retrieve the LDAPS settings if the number of setting types exceeds
   *       page limit and there is another page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeRegionsRequest {
  /**
   * @public
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The name of the Region. For example, <code>us-east-1</code>.</p>
   */
  RegionName?: string;

  /**
   * @public
   * <p>The <code>DescribeRegionsResult.NextToken</code> value from a previous call to <a>DescribeRegions</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const RegionType = {
  ADDITIONAL: "Additional",
  PRIMARY: "Primary",
} as const;

/**
 * @public
 */
export type RegionType = (typeof RegionType)[keyof typeof RegionType];

/**
 * @public
 * <p>The replicated Region information for a directory.</p>
 */
export interface RegionDescription {
  /**
   * @public
   * <p>The identifier of the directory.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>The name of the Region. For example, <code>us-east-1</code>.</p>
   */
  RegionName?: string;

  /**
   * @public
   * <p>Specifies whether the Region is the primary Region or an additional Region.</p>
   */
  RegionType?: RegionType | string;

  /**
   * @public
   * <p>The status of the replication process for the specified Region.</p>
   */
  Status?: DirectoryStage | string;

  /**
   * @public
   * <p>Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.</p>
   */
  VpcSettings?: DirectoryVpcSettings;

  /**
   * @public
   * <p>The desired number of domain controllers in the specified Region for the specified
   *       directory.</p>
   */
  DesiredNumberOfDomainControllers?: number;

  /**
   * @public
   * <p>Specifies when the Region replication began.</p>
   */
  LaunchTime?: Date;

  /**
   * @public
   * <p>The date and time that the Region status was last updated.</p>
   */
  StatusLastUpdatedDateTime?: Date;

  /**
   * @public
   * <p>The date and time that the Region description was last updated.</p>
   */
  LastUpdatedDateTime?: Date;
}

/**
 * @public
 */
export interface DescribeRegionsResult {
  /**
   * @public
   * <p>List of Region information related to the directory for each replicated Region.</p>
   */
  RegionsDescription?: RegionDescription[];

  /**
   * @public
   * <p>If not null, more results are available. Pass this value for the <code>NextToken</code>
   *       parameter in a subsequent call to <a>DescribeRegions</a> to retrieve the next set
   *       of items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const DirectoryConfigurationStatus = {
  DEFAULT: "Default",
  FAILED: "Failed",
  REQUESTED: "Requested",
  UPDATED: "Updated",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type DirectoryConfigurationStatus =
  (typeof DirectoryConfigurationStatus)[keyof typeof DirectoryConfigurationStatus];

/**
 * @public
 */
export interface DescribeSettingsRequest {
  /**
   * @public
   * <p>The identifier of the directory for which to retrieve information.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The status of the directory settings for which to retrieve information.</p>
   */
  Status?: DirectoryConfigurationStatus | string;

  /**
   * @public
   * <p>The <code>DescribeSettingsResult.NextToken</code> value from a previous call to <a>DescribeSettings</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains information about the specified configurable setting for a directory.</p>
 */
export interface SettingEntry {
  /**
   * @public
   * <p>The type, or category, of a directory setting. Similar settings have the same type. For example, <code>Protocol</code>, <code>Cipher</code>,
   *       or <code>Certificate-Based Authentication</code>.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The name of the directory setting. For example:</p>
   *          <p>
   *             <code>TLS_1_0</code>
   *          </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The valid range of values for the directory setting. These values depend on the <code>DataType</code> of your directory.</p>
   */
  AllowedValues?: string;

  /**
   * @public
   * <p>The value of the directory setting that is applied to the directory.</p>
   */
  AppliedValue?: string;

  /**
   * @public
   * <p>The value that was last requested for the directory setting.</p>
   */
  RequestedValue?: string;

  /**
   * @public
   * <p>The overall status of the request to update the directory setting request. If the directory setting is deployed in more than one region, and the request fails in any region, the overall status is <code>Failed</code>.</p>
   */
  RequestStatus?: DirectoryConfigurationStatus | string;

  /**
   * @public
   * <p>Details about the status of the request to update the directory setting. If the directory setting is deployed in more than one region, status is returned for the request in each region where the setting is deployed.</p>
   */
  RequestDetailedStatus?: Record<string, DirectoryConfigurationStatus | string>;

  /**
   * @public
   * <p>The last status message for the directory status request.</p>
   */
  RequestStatusMessage?: string;

  /**
   * @public
   * <p>The date and time when the directory setting was last updated.</p>
   */
  LastUpdatedDateTime?: Date;

  /**
   * @public
   * <p>The date and time when the request to update a directory setting was last submitted.</p>
   */
  LastRequestedDateTime?: Date;

  /**
   * @public
   * <p>The data type of a directory setting. This is used to define the <code>AllowedValues</code> of a setting.
   *       For example a data type can be <code>Boolean</code>, <code>DurationInSeconds</code>, or <code>Enum</code>.</p>
   */
  DataType?: string;
}

/**
 * @public
 */
export interface DescribeSettingsResult {
  /**
   * @public
   * <p>The identifier of the directory.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>The list of <a>SettingEntry</a> objects that were retrieved.</p>
   *          <p>It is possible that this list contains less than the number of items specified in the
   *       <code>Limit</code> member of the request. This occurs if there are less than the requested
   *       number of items left to retrieve, or if the limitations of the operation have been
   *       exceeded.</p>
   */
  SettingEntries?: SettingEntry[];

  /**
   * @public
   * <p>If not null, token that indicates that more results are available. Pass this value for the <code>NextToken</code> parameter in a subsequent call to <code>DescribeSettings</code> to retrieve the next set of items. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeSharedDirectoriesRequest {
  /**
   * @public
   * <p>Returns the identifier of the directory in the directory owner account. </p>
   */
  OwnerDirectoryId: string | undefined;

  /**
   * @public
   * <p>A list of identifiers of all shared directories in your account. </p>
   */
  SharedDirectoryIds?: string[];

  /**
   * @public
   * <p>The <code>DescribeSharedDirectoriesResult.NextToken</code> value from a previous call to
   *         <a>DescribeSharedDirectories</a>. Pass null if this is the first call. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of shared directories to return in the response object.</p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface DescribeSharedDirectoriesResult {
  /**
   * @public
   * <p>A list of all shared directories in your account.</p>
   */
  SharedDirectories?: SharedDirectory[];

  /**
   * @public
   * <p>If not null, token that indicates that more results are available. Pass this value for the
   *         <code>NextToken</code> parameter in a subsequent call to <a>DescribeSharedDirectories</a> to retrieve the next set of items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains the inputs for the <a>DescribeSnapshots</a> operation.</p>
 */
export interface DescribeSnapshotsRequest {
  /**
   * @public
   * <p>The identifier of the directory for which to retrieve snapshot information.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>A list of identifiers of the snapshots to obtain the information for. If this member is
   *          null or empty, all snapshots are returned using the <i>Limit</i> and <i>NextToken</i>
   *          members.</p>
   */
  SnapshotIds?: string[];

  /**
   * @public
   * <p>The <i>DescribeSnapshotsResult.NextToken</i> value from a previous call to
   *             <a>DescribeSnapshots</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects to return.</p>
   */
  Limit?: number;
}

/**
 * @public
 * @enum
 */
export const SnapshotStatus = {
  COMPLETED: "Completed",
  CREATING: "Creating",
  FAILED: "Failed",
} as const;

/**
 * @public
 */
export type SnapshotStatus = (typeof SnapshotStatus)[keyof typeof SnapshotStatus];

/**
 * @public
 * @enum
 */
export const SnapshotType = {
  AUTO: "Auto",
  MANUAL: "Manual",
} as const;

/**
 * @public
 */
export type SnapshotType = (typeof SnapshotType)[keyof typeof SnapshotType];

/**
 * @public
 * <p>Describes a directory snapshot.</p>
 */
export interface Snapshot {
  /**
   * @public
   * <p>The directory identifier.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>The snapshot identifier.</p>
   */
  SnapshotId?: string;

  /**
   * @public
   * <p>The snapshot type.</p>
   */
  Type?: SnapshotType | string;

  /**
   * @public
   * <p>The descriptive name of the snapshot.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The snapshot status.</p>
   */
  Status?: SnapshotStatus | string;

  /**
   * @public
   * <p>The date and time that the snapshot was taken.</p>
   */
  StartTime?: Date;
}

/**
 * @public
 * <p>Contains the results of the <a>DescribeSnapshots</a> operation.</p>
 */
export interface DescribeSnapshotsResult {
  /**
   * @public
   * <p>The list of <a>Snapshot</a> objects that were retrieved.</p>
   *          <p>It is possible that this list contains less than the number of items specified in the
   *             <i>Limit</i> member of the request. This occurs if there are less than the requested
   *          number of items left to retrieve, or if the limitations of the operation have been
   *          exceeded.</p>
   */
  Snapshots?: Snapshot[];

  /**
   * @public
   * <p>If not null, more results are available. Pass this value in the <i>NextToken</i> member of
   *          a subsequent call to <a>DescribeSnapshots</a>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes the trust relationships for a particular Managed Microsoft AD directory. If no input
 *       parameters are provided, such as directory ID or trust ID, this request describes all the
 *       trust relationships.</p>
 */
export interface DescribeTrustsRequest {
  /**
   * @public
   * <p>The Directory ID of the Amazon Web Services directory that is a part of the requested trust
   *       relationship.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>A list of identifiers of the trust relationships for which to obtain the information. If
   *       this member is null, all trust relationships that belong to the current account are
   *       returned.</p>
   *          <p>An empty list results in an <code>InvalidParameterException</code> being thrown.</p>
   */
  TrustIds?: string[];

  /**
   * @public
   * <p>The <i>DescribeTrustsResult.NextToken</i> value from a previous call to
   *         <a>DescribeTrusts</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects to return.</p>
   */
  Limit?: number;
}

/**
 * @public
 * @enum
 */
export const TrustState = {
  CREATED: "Created",
  CREATING: "Creating",
  DELETED: "Deleted",
  DELETING: "Deleting",
  FAILED: "Failed",
  UPDATED: "Updated",
  UPDATE_FAILED: "UpdateFailed",
  UPDATING: "Updating",
  VERIFIED: "Verified",
  VERIFYING: "Verifying",
  VERIFY_FAILED: "VerifyFailed",
} as const;

/**
 * @public
 */
export type TrustState = (typeof TrustState)[keyof typeof TrustState];

/**
 * @public
 * <p>Describes a trust relationship between an Managed Microsoft AD directory and an external
 *       domain.</p>
 */
export interface Trust {
  /**
   * @public
   * <p>The Directory ID of the Amazon Web Services directory involved in the trust relationship.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>The unique ID of the trust relationship.</p>
   */
  TrustId?: string;

  /**
   * @public
   * <p>The Fully Qualified Domain Name (FQDN) of the external domain involved in the trust
   *       relationship.</p>
   */
  RemoteDomainName?: string;

  /**
   * @public
   * <p>The trust relationship type. <code>Forest</code> is the default.</p>
   */
  TrustType?: TrustType | string;

  /**
   * @public
   * <p>The trust relationship direction.</p>
   */
  TrustDirection?: TrustDirection | string;

  /**
   * @public
   * <p>The trust relationship state.</p>
   */
  TrustState?: TrustState | string;

  /**
   * @public
   * <p>The date and time that the trust relationship was created.</p>
   */
  CreatedDateTime?: Date;

  /**
   * @public
   * <p>The date and time that the trust relationship was last updated.</p>
   */
  LastUpdatedDateTime?: Date;

  /**
   * @public
   * <p>The date and time that the TrustState was last updated.</p>
   */
  StateLastUpdatedDateTime?: Date;

  /**
   * @public
   * <p>The reason for the TrustState.</p>
   */
  TrustStateReason?: string;

  /**
   * @public
   * <p>Current state of selective authentication for the trust.</p>
   */
  SelectiveAuth?: SelectiveAuth | string;
}

/**
 * @public
 * <p>The result of a DescribeTrust request.</p>
 */
export interface DescribeTrustsResult {
  /**
   * @public
   * <p>The list of Trust objects that were retrieved.</p>
   *          <p>It is possible that this list contains less than the number of items specified in the
   *         <i>Limit</i> member of the request. This occurs if there are less than the
   *       requested number of items left to retrieve, or if the limitations of the operation have been
   *       exceeded.</p>
   */
  Trusts?: Trust[];

  /**
   * @public
   * <p>If not null, more results are available. Pass this value for the
   *         <i>NextToken</i> parameter in a subsequent call to <a>DescribeTrusts</a> to retrieve the next set of items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const UpdateType = {
  OS: "OS",
} as const;

/**
 * @public
 */
export type UpdateType = (typeof UpdateType)[keyof typeof UpdateType];

/**
 * @public
 */
export interface DescribeUpdateDirectoryRequest {
  /**
   * @public
   * <p>
   *       The unique identifier of the directory.
   *     </p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>
   *       The type of updates you want to describe for the directory.
   *     </p>
   */
  UpdateType: UpdateType | string | undefined;

  /**
   * @public
   * <p>
   *       The name of the Region.
   *     </p>
   */
  RegionName?: string;

  /**
   * @public
   * <p>
   *       The <code>DescribeUpdateDirectoryResult</code>. NextToken value from a previous call to <a>DescribeUpdateDirectory</a>. Pass null if this is the first call.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>
 *       OS version that the directory needs to be updated to.
 *     </p>
 */
export interface OSUpdateSettings {
  /**
   * @public
   * <p>
   *       OS version that the directory needs to be updated to.
   *     </p>
   */
  OSVersion?: OSVersion | string;
}

/**
 * @public
 * <p>
 *       The value for a given type of <code>UpdateSettings</code>.
 *     </p>
 */
export interface UpdateValue {
  /**
   * @public
   * <p>
   *       The OS update related settings.
   *     </p>
   */
  OSUpdateSettings?: OSUpdateSettings;
}

/**
 * @public
 * @enum
 */
export const UpdateStatus = {
  UPDATED: "Updated",
  UPDATE_FAILED: "UpdateFailed",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type UpdateStatus = (typeof UpdateStatus)[keyof typeof UpdateStatus];

/**
 * @public
 * <p>
 *       An entry of update information related to a requested update type.
 *     </p>
 */
export interface UpdateInfoEntry {
  /**
   * @public
   * <p>
   *       The name of the Region.
   *     </p>
   */
  Region?: string;

  /**
   * @public
   * <p>
   *       The status of the update performed on the directory.
   *     </p>
   */
  Status?: UpdateStatus | string;

  /**
   * @public
   * <p>
   *       The reason for the current status of the update type activity.
   *     </p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>
   *       This specifies if the update was initiated by the customer or by the service team.
   *     </p>
   */
  InitiatedBy?: string;

  /**
   * @public
   * <p>
   *       The new value of the target setting.
   *     </p>
   */
  NewValue?: UpdateValue;

  /**
   * @public
   * <p>
   *       The old value of the target setting.
   *     </p>
   */
  PreviousValue?: UpdateValue;

  /**
   * @public
   * <p>
   *       The start time of the <code>UpdateDirectorySetup</code> for the particular type.
   *     </p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>
   *       The last updated date and time of a particular directory setting.
   *     </p>
   */
  LastUpdatedDateTime?: Date;
}

/**
 * @public
 */
export interface DescribeUpdateDirectoryResult {
  /**
   * @public
   * <p>
   *       The list of update activities on a directory for the requested update type.
   *     </p>
   */
  UpdateActivities?: UpdateInfoEntry[];

  /**
   * @public
   * <p>
   *       If not null, more results are available. Pass this value for the <code>NextToken</code> parameter.
   *     </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>
 *       The directory is already updated to desired update type settings.
 *     </p>
 */
export class DirectoryInDesiredStateException extends __BaseException {
  readonly name: "DirectoryInDesiredStateException" = "DirectoryInDesiredStateException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>Contains directory limit information for a Region.</p>
 */
export interface DirectoryLimits {
  /**
   * @public
   * <p>The maximum number of cloud directories allowed in the Region.</p>
   */
  CloudOnlyDirectoriesLimit?: number;

  /**
   * @public
   * <p>The current number of cloud directories in the Region.</p>
   */
  CloudOnlyDirectoriesCurrentCount?: number;

  /**
   * @public
   * <p>Indicates if the cloud directory limit has been reached.</p>
   */
  CloudOnlyDirectoriesLimitReached?: boolean;

  /**
   * @public
   * <p>The maximum number of Managed Microsoft AD directories allowed in the region.</p>
   */
  CloudOnlyMicrosoftADLimit?: number;

  /**
   * @public
   * <p>The current number of Managed Microsoft AD directories in the region.</p>
   */
  CloudOnlyMicrosoftADCurrentCount?: number;

  /**
   * @public
   * <p>Indicates if the Managed Microsoft AD directory limit has been reached.</p>
   */
  CloudOnlyMicrosoftADLimitReached?: boolean;

  /**
   * @public
   * <p>The maximum number of connected directories allowed in the Region.</p>
   */
  ConnectedDirectoriesLimit?: number;

  /**
   * @public
   * <p>The current number of connected directories in the Region.</p>
   */
  ConnectedDirectoriesCurrentCount?: number;

  /**
   * @public
   * <p>Indicates if the connected directory limit has been reached.</p>
   */
  ConnectedDirectoriesLimitReached?: boolean;
}

/**
 * @public
 * <p>The specified directory has not been shared with this Amazon Web Services account.</p>
 */
export class DirectoryNotSharedException extends __BaseException {
  readonly name: "DirectoryNotSharedException" = "DirectoryNotSharedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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

/**
 * @public
 */
export interface DisableClientAuthenticationRequest {
  /**
   * @public
   * <p>The identifier of the directory </p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The type of client authentication to disable. Currently, only the parameter, <code>SmartCard</code> is supported.</p>
   */
  Type: ClientAuthenticationType | string | undefined;
}

/**
 * @public
 */
export interface DisableClientAuthenticationResult {}

/**
 * @public
 * <p>Client authentication is already enabled.</p>
 */
export class InvalidClientAuthStatusException extends __BaseException {
  readonly name: "InvalidClientAuthStatusException" = "InvalidClientAuthStatusException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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

/**
 * @public
 */
export interface DisableLDAPSRequest {
  /**
   * @public
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The type of LDAP security to enable. Currently only the value <code>Client</code> is
   *       supported.</p>
   */
  Type: LDAPSType | string | undefined;
}

/**
 * @public
 */
export interface DisableLDAPSResult {}

/**
 * @public
 * <p>The LDAP activities could not be performed because they are limited by the LDAPS
 *       status.</p>
 */
export class InvalidLDAPSStatusException extends __BaseException {
  readonly name: "InvalidLDAPSStatusException" = "InvalidLDAPSStatusException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>Contains the inputs for the <a>DisableRadius</a> operation.</p>
 */
export interface DisableRadiusRequest {
  /**
   * @public
   * <p>The identifier of the directory for which to disable MFA.</p>
   */
  DirectoryId: string | undefined;
}

/**
 * @public
 * <p>Contains the results of the <a>DisableRadius</a> operation.</p>
 */
export interface DisableRadiusResult {}

/**
 * @public
 * <p>Contains the inputs for the <a>DisableSso</a> operation.</p>
 */
export interface DisableSsoRequest {
  /**
   * @public
   * <p>The identifier of the directory for which to disable single-sign on.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The password of an alternate account to use to disable single-sign on. This is only used
   *       for AD Connector directories. For more information, see the <i>UserName</i>
   *       parameter.</p>
   */
  Password?: string;
}

/**
 * @public
 * <p>Contains the results of the <a>DisableSso</a> operation.</p>
 */
export interface DisableSsoResult {}

/**
 * @public
 */
export interface EnableClientAuthenticationRequest {
  /**
   * @public
   * <p>The identifier of the specified directory. </p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The type of client authentication to enable. Currently only the value <code>SmartCard</code> is
   *       supported. Smart card authentication in AD Connector requires that you enable Kerberos
   *       Constrained Delegation for the Service User to the LDAP service in your self-managed AD.
   *     </p>
   */
  Type: ClientAuthenticationType | string | undefined;
}

/**
 * @public
 */
export interface EnableClientAuthenticationResult {}

/**
 * @public
 * <p>Client authentication setup could not be completed because at least one valid certificate must be
 *       registered in the system.</p>
 */
export class NoAvailableCertificateException extends __BaseException {
  readonly name: "NoAvailableCertificateException" = "NoAvailableCertificateException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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

/**
 * @public
 */
export interface EnableLDAPSRequest {
  /**
   * @public
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The type of LDAP security to enable. Currently only the value <code>Client</code> is
   *       supported.</p>
   */
  Type: LDAPSType | string | undefined;
}

/**
 * @public
 */
export interface EnableLDAPSResult {}

/**
 * @public
 * <p>Contains the inputs for the <a>EnableRadius</a> operation.</p>
 */
export interface EnableRadiusRequest {
  /**
   * @public
   * <p>The identifier of the directory for which to enable MFA.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS
   *          server.</p>
   */
  RadiusSettings: RadiusSettings | undefined;
}

/**
 * @public
 * <p>Contains the results of the <a>EnableRadius</a> operation.</p>
 */
export interface EnableRadiusResult {}

/**
 * @public
 * <p>Contains the inputs for the <a>EnableSso</a> operation.</p>
 */
export interface EnableSsoRequest {
  /**
   * @public
   * <p>The identifier of the directory for which to enable single-sign on.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The password of an alternate account to use to enable single-sign on. This is only used
   *       for AD Connector directories. For more information, see the <i>UserName</i>
   *       parameter.</p>
   */
  Password?: string;
}

/**
 * @public
 * <p>Contains the results of the <a>EnableSso</a> operation.</p>
 */
export interface EnableSsoResult {}

/**
 * @public
 * <p>Contains the inputs for the <a>GetDirectoryLimits</a> operation.</p>
 */
export interface GetDirectoryLimitsRequest {}

/**
 * @public
 * <p>Contains the results of the <a>GetDirectoryLimits</a> operation.</p>
 */
export interface GetDirectoryLimitsResult {
  /**
   * @public
   * <p>A <a>DirectoryLimits</a> object that contains the directory limits for the
   *       current Region.</p>
   */
  DirectoryLimits?: DirectoryLimits;
}

/**
 * @public
 * <p>Contains the inputs for the <a>GetSnapshotLimits</a> operation.</p>
 */
export interface GetSnapshotLimitsRequest {
  /**
   * @public
   * <p>Contains the identifier of the directory to obtain the limits for.</p>
   */
  DirectoryId: string | undefined;
}

/**
 * @public
 * <p>Contains manual snapshot limit information for a directory.</p>
 */
export interface SnapshotLimits {
  /**
   * @public
   * <p>The maximum number of manual snapshots allowed.</p>
   */
  ManualSnapshotsLimit?: number;

  /**
   * @public
   * <p>The current number of manual snapshots of the directory.</p>
   */
  ManualSnapshotsCurrentCount?: number;

  /**
   * @public
   * <p>Indicates if the manual snapshot limit has been reached.</p>
   */
  ManualSnapshotsLimitReached?: boolean;
}

/**
 * @public
 * <p>Contains the results of the <a>GetSnapshotLimits</a> operation.</p>
 */
export interface GetSnapshotLimitsResult {
  /**
   * @public
   * <p>A <a>SnapshotLimits</a> object that contains the manual snapshot limits for the specified
   *          directory.</p>
   */
  SnapshotLimits?: SnapshotLimits;
}

/**
 * @public
 */
export interface ListCertificatesRequest {
  /**
   * @public
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>A token for requesting another page of certificates if the <code>NextToken</code> response
   *       element indicates that more certificates are available. Use the value of the returned
   *         <code>NextToken</code> element in your request until the token comes back as
   *         <code>null</code>. Pass <code>null</code> if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of items that should show up on one page</p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface ListCertificatesResult {
  /**
   * @public
   * <p>Indicates whether another page of certificates is available when the number of available
   *       certificates exceeds the page limit.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of certificates with basic details including certificate ID, certificate common
   *       name, certificate state.</p>
   */
  CertificatesInfo?: CertificateInfo[];
}

/**
 * @public
 */
export interface ListIpRoutesRequest {
  /**
   * @public
   * <p>Identifier (ID) of the directory for which you want to retrieve the IP
   *          addresses.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The <i>ListIpRoutes.NextToken</i> value from a previous call to <a>ListIpRoutes</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of items to return. If this value is zero, the maximum number of items
   *          is specified by the limitations of the operation.</p>
   */
  Limit?: number;
}

/**
 * @public
 * @enum
 */
export const IpRouteStatusMsg = {
  ADDED: "Added",
  ADDING: "Adding",
  ADD_FAILED: "AddFailed",
  REMOVED: "Removed",
  REMOVE_FAILED: "RemoveFailed",
  REMOVING: "Removing",
} as const;

/**
 * @public
 */
export type IpRouteStatusMsg = (typeof IpRouteStatusMsg)[keyof typeof IpRouteStatusMsg];

/**
 * @public
 * <p>Information about one or more IP address blocks.</p>
 */
export interface IpRouteInfo {
  /**
   * @public
   * <p>Identifier (ID) of the directory associated with the IP addresses.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>IP address block in the <a>IpRoute</a>.</p>
   */
  CidrIp?: string;

  /**
   * @public
   * <p>The status of the IP address block.</p>
   */
  IpRouteStatusMsg?: IpRouteStatusMsg | string;

  /**
   * @public
   * <p>The date and time the address block was added to the directory.</p>
   */
  AddedDateTime?: Date;

  /**
   * @public
   * <p>The reason for the IpRouteStatusMsg.</p>
   */
  IpRouteStatusReason?: string;

  /**
   * @public
   * <p>Description of the <a>IpRouteInfo</a>.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface ListIpRoutesResult {
  /**
   * @public
   * <p>A list of <a>IpRoute</a>s.</p>
   */
  IpRoutesInfo?: IpRouteInfo[];

  /**
   * @public
   * <p>If not null, more results are available. Pass this value for the
   *             <i>NextToken</i> parameter in a subsequent call to <a>ListIpRoutes</a> to retrieve the next set of items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLogSubscriptionsRequest {
  /**
   * @public
   * <p>If a <i>DirectoryID</i> is provided, lists only the log subscription
   *       associated with that directory. If no <i>DirectoryId</i> is provided, lists all
   *       log subscriptions associated with your Amazon Web Services account. If there are no log subscriptions for the
   *       Amazon Web Services account or the directory, an empty list will be returned.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>The token for the next set of items to return.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items returned.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>Represents a log subscription, which tracks real-time data from a chosen log group to a
 *       specified destination.</p>
 */
export interface LogSubscription {
  /**
   * @public
   * <p>Identifier (ID) of the directory that you want to associate with the log
   *       subscription.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>The name of the log group.</p>
   */
  LogGroupName?: string;

  /**
   * @public
   * <p>The date and time that the log subscription was created.</p>
   */
  SubscriptionCreatedDateTime?: Date;
}

/**
 * @public
 */
export interface ListLogSubscriptionsResult {
  /**
   * @public
   * <p>A list of active <a>LogSubscription</a> objects for calling the Amazon Web Services account.</p>
   */
  LogSubscriptions?: LogSubscription[];

  /**
   * @public
   * <p>The token for the next set of items to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSchemaExtensionsRequest {
  /**
   * @public
   * <p>The identifier of the directory from which to retrieve the schema extension
   *       information.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The <code>ListSchemaExtensions.NextToken</code> value from a previous call to
   *         <code>ListSchemaExtensions</code>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;
}

/**
 * @public
 * @enum
 */
export const SchemaExtensionStatus = {
  CANCELLED: "Cancelled",
  CANCEL_IN_PROGRESS: "CancelInProgress",
  COMPLETED: "Completed",
  CREATING_SNAPSHOT: "CreatingSnapshot",
  FAILED: "Failed",
  INITIALIZING: "Initializing",
  REPLICATING: "Replicating",
  ROLLBACK_IN_PROGRESS: "RollbackInProgress",
  UPDATING_SCHEMA: "UpdatingSchema",
} as const;

/**
 * @public
 */
export type SchemaExtensionStatus = (typeof SchemaExtensionStatus)[keyof typeof SchemaExtensionStatus];

/**
 * @public
 * <p>Information about a schema extension.</p>
 */
export interface SchemaExtensionInfo {
  /**
   * @public
   * <p>The identifier of the directory to which the schema extension is applied.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>The identifier of the schema extension.</p>
   */
  SchemaExtensionId?: string;

  /**
   * @public
   * <p>A description of the schema extension.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The current status of the schema extension.</p>
   */
  SchemaExtensionStatus?: SchemaExtensionStatus | string;

  /**
   * @public
   * <p>The reason for the <code>SchemaExtensionStatus</code>.</p>
   */
  SchemaExtensionStatusReason?: string;

  /**
   * @public
   * <p>The date and time that the schema extension started being applied to the
   *       directory.</p>
   */
  StartDateTime?: Date;

  /**
   * @public
   * <p>The date and time that the schema extension was completed.</p>
   */
  EndDateTime?: Date;
}

/**
 * @public
 */
export interface ListSchemaExtensionsResult {
  /**
   * @public
   * <p>Information about the schema extensions applied to the directory.</p>
   */
  SchemaExtensionsInfo?: SchemaExtensionInfo[];

  /**
   * @public
   * <p>If not null, more results are available. Pass this value for the <code>NextToken</code>
   *       parameter in a subsequent call to <code>ListSchemaExtensions</code> to retrieve the next set
   *       of items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>Identifier (ID) of the directory for which you want to retrieve tags.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * @public
   * <p>List of tags returned by the ListTagsForResource operation.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The certificate PEM that was provided has incorrect encoding.</p>
 */
export class InvalidCertificateException extends __BaseException {
  readonly name: "InvalidCertificateException" = "InvalidCertificateException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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

/**
 * @public
 */
export interface RegisterCertificateRequest {
  /**
   * @public
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The certificate PEM string that needs to be registered.</p>
   */
  CertificateData: string | undefined;

  /**
   * @public
   * <p>The function that the registered certificate performs. Valid values include <code>ClientLDAPS</code> or <code>ClientCertAuth</code>. The default value is <code>ClientLDAPS</code>.</p>
   */
  Type?: CertificateType | string;

  /**
   * @public
   * <p>A <code>ClientCertAuthSettings</code> object that contains client certificate authentication settings.</p>
   */
  ClientCertAuthSettings?: ClientCertAuthSettings;
}

/**
 * @public
 */
export interface RegisterCertificateResult {
  /**
   * @public
   * <p>The identifier of the certificate.</p>
   */
  CertificateId?: string;
}

/**
 * @public
 * <p>Registers a new event topic.</p>
 */
export interface RegisterEventTopicRequest {
  /**
   * @public
   * <p>The Directory ID that will publish status messages to the Amazon SNS topic.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The Amazon SNS topic name to which the directory will publish status messages. This Amazon SNS
   *       topic must be in the same region as the specified Directory ID.</p>
   */
  TopicName: string | undefined;
}

/**
 * @public
 * <p>The result of a RegisterEventTopic request.</p>
 */
export interface RegisterEventTopicResult {}

/**
 * @public
 */
export interface RejectSharedDirectoryRequest {
  /**
   * @public
   * <p>Identifier of the shared directory in the directory consumer account. This identifier is
   *       different for each directory owner account.</p>
   */
  SharedDirectoryId: string | undefined;
}

/**
 * @public
 */
export interface RejectSharedDirectoryResult {
  /**
   * @public
   * <p>Identifier of the shared directory in the directory consumer account.</p>
   */
  SharedDirectoryId?: string;
}

/**
 * @public
 */
export interface RemoveIpRoutesRequest {
  /**
   * @public
   * <p>Identifier (ID) of the directory from which you want to remove the IP
   *          addresses.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>IP address blocks that you want to remove.</p>
   */
  CidrIps: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveIpRoutesResult {}

/**
 * @public
 */
export interface RemoveRegionRequest {
  /**
   * @public
   * <p>The identifier of the directory for which you want to remove Region replication.</p>
   */
  DirectoryId: string | undefined;
}

/**
 * @public
 */
export interface RemoveRegionResult {}

/**
 * @public
 */
export interface RemoveTagsFromResourceRequest {
  /**
   * @public
   * <p>Identifier (ID) of the directory from which to remove the tag.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The tag key (name) of the tag to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveTagsFromResourceResult {}

/**
 * @public
 * <p>The new password provided by the user does not meet the password complexity
 *             requirements defined in your directory.</p>
 */
export class InvalidPasswordException extends __BaseException {
  readonly name: "InvalidPasswordException" = "InvalidPasswordException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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

/**
 * @public
 */
export interface ResetUserPasswordRequest {
  /**
   * @public
   * <p>Identifier of the Managed Microsoft AD or Simple AD directory in which the user
   *       resides.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The user name of the user whose password will be reset.</p>
   */
  UserName: string | undefined;

  /**
   * @public
   * <p>The new password that will be reset.</p>
   */
  NewPassword: string | undefined;
}

/**
 * @public
 */
export interface ResetUserPasswordResult {}

/**
 * @public
 * <p>The user provided a username that does not exist in your directory.</p>
 */
export class UserDoesNotExistException extends __BaseException {
  readonly name: "UserDoesNotExistException" = "UserDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>An object representing the inputs for the <a>RestoreFromSnapshot</a> operation.</p>
 */
export interface RestoreFromSnapshotRequest {
  /**
   * @public
   * <p>The identifier of the snapshot to restore from.</p>
   */
  SnapshotId: string | undefined;
}

/**
 * @public
 * <p>Contains the results of the <a>RestoreFromSnapshot</a> operation.</p>
 */
export interface RestoreFromSnapshotResult {}

/**
 * @public
 * <p>The specified shared target is not valid.</p>
 */
export class InvalidTargetException extends __BaseException {
  readonly name: "InvalidTargetException" = "InvalidTargetException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>Exception encountered while trying to access your Amazon Web Services organization.</p>
 */
export class OrganizationsException extends __BaseException {
  readonly name: "OrganizationsException" = "OrganizationsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const TargetType = {
  ACCOUNT: "ACCOUNT",
} as const;

/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * @public
 * <p>Identifier that contains details about the directory consumer account.</p>
 */
export interface ShareTarget {
  /**
   * @public
   * <p>Identifier of the directory consumer account.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>Type of identifier to be used in the <code>Id</code> field.</p>
   */
  Type: TargetType | string | undefined;
}

/**
 * @public
 */
export interface ShareDirectoryRequest {
  /**
   * @public
   * <p>Identifier of the Managed Microsoft AD directory that you want to share with other Amazon Web Services accounts.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>A directory share request that is sent by the directory owner to the directory consumer.
   *       The request includes a typed message to help the directory consumer administrator determine
   *       whether to approve or reject the share invitation.</p>
   */
  ShareNotes?: string;

  /**
   * @public
   * <p>Identifier for the directory consumer account with whom the directory is to be
   *       shared.</p>
   */
  ShareTarget: ShareTarget | undefined;

  /**
   * @public
   * <p>The method used when sharing a directory to determine whether the directory should be
   *       shared within your Amazon Web Services organization (<code>ORGANIZATIONS</code>) or with any Amazon Web Services account by
   *       sending a directory sharing request (<code>HANDSHAKE</code>).</p>
   */
  ShareMethod: ShareMethod | string | undefined;
}

/**
 * @public
 */
export interface ShareDirectoryResult {
  /**
   * @public
   * <p>Identifier of the directory that is stored in the directory consumer account that is
   *       shared from the specified directory (<code>DirectoryId</code>).</p>
   */
  SharedDirectoryId?: string;
}

/**
 * @public
 * <p>The maximum number of Amazon Web Services accounts that you can share with this directory has been
 *             reached.</p>
 */
export class ShareLimitExceededException extends __BaseException {
  readonly name: "ShareLimitExceededException" = "ShareLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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

/**
 * @public
 */
export interface StartSchemaExtensionRequest {
  /**
   * @public
   * <p>The identifier of the directory for which the schema extension will be applied
   *       to.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>If true, creates a snapshot of the directory before applying the schema
   *       extension.</p>
   */
  CreateSnapshotBeforeSchemaExtension: boolean | undefined;

  /**
   * @public
   * <p>The LDIF file represented as a string. To construct the LdifContent string, precede
   *       each line as it would be formatted in an ldif file with \n. See the example request below for
   *       more details. The file size can be no larger than 1MB.</p>
   */
  LdifContent: string | undefined;

  /**
   * @public
   * <p>A description of the schema extension.</p>
   */
  Description: string | undefined;
}

/**
 * @public
 */
export interface StartSchemaExtensionResult {
  /**
   * @public
   * <p>The identifier of the schema extension that will be applied.</p>
   */
  SchemaExtensionId?: string;
}

/**
 * @public
 * <p>Identifier that contains details about the directory consumer account with whom the
 *       directory is being unshared.</p>
 */
export interface UnshareTarget {
  /**
   * @public
   * <p>Identifier of the directory consumer account.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>Type of identifier to be used in the <i>Id</i> field.</p>
   */
  Type: TargetType | string | undefined;
}

/**
 * @public
 */
export interface UnshareDirectoryRequest {
  /**
   * @public
   * <p>The identifier of the Managed Microsoft AD directory that you want to stop
   *       sharing.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>Identifier for the directory consumer account with whom the directory has to be
   *       unshared.</p>
   */
  UnshareTarget: UnshareTarget | undefined;
}

/**
 * @public
 */
export interface UnshareDirectoryResult {
  /**
   * @public
   * <p>Identifier of the directory stored in the directory consumer account that is to be
   *       unshared from the specified directory (<code>DirectoryId</code>).</p>
   */
  SharedDirectoryId?: string;
}

/**
 * @public
 * <p>Updates a conditional forwarder.</p>
 */
export interface UpdateConditionalForwarderRequest {
  /**
   * @public
   * <p>The directory ID of the Amazon Web Services directory for which to update the conditional
   *       forwarder.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The fully qualified domain name (FQDN) of the remote domain with which you will set up
   *       a trust relationship.</p>
   */
  RemoteDomainName: string | undefined;

  /**
   * @public
   * <p>The updated IP addresses of the remote DNS server associated with the conditional
   *       forwarder.</p>
   */
  DnsIpAddrs: string[] | undefined;
}

/**
 * @public
 * <p>The result of an UpdateConditionalForwarder request.</p>
 */
export interface UpdateConditionalForwarderResult {}

/**
 * @public
 */
export interface UpdateDirectorySetupRequest {
  /**
   * @public
   * <p>
   *       The identifier of the directory on which you want to perform the update.
   *     </p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>
   *       The type of update that needs to be performed on the directory. For example, OS.
   *     </p>
   */
  UpdateType: UpdateType | string | undefined;

  /**
   * @public
   * <p>
   *       The settings for the OS update that needs to be performed on the directory.
   *     </p>
   */
  OSUpdateSettings?: OSUpdateSettings;

  /**
   * @public
   * <p>
   *       The boolean that specifies if a snapshot for the directory needs to be taken before updating the directory.
   *     </p>
   */
  CreateSnapshotBeforeUpdate?: boolean;
}

/**
 * @public
 */
export interface UpdateDirectorySetupResult {}

/**
 * @public
 * <p>The maximum allowed number of domain controllers per directory was exceeded. The
 *       default limit per directory is 20 domain controllers.</p>
 */
export class DomainControllerLimitExceededException extends __BaseException {
  readonly name: "DomainControllerLimitExceededException" = "DomainControllerLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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

/**
 * @public
 */
export interface UpdateNumberOfDomainControllersRequest {
  /**
   * @public
   * <p>Identifier of the directory to which the domain controllers will be added or
   *       removed.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The number of domain controllers desired in the directory.</p>
   */
  DesiredNumber: number | undefined;
}

/**
 * @public
 */
export interface UpdateNumberOfDomainControllersResult {}

/**
 * @public
 * <p>Contains the inputs for the <a>UpdateRadius</a> operation.</p>
 */
export interface UpdateRadiusRequest {
  /**
   * @public
   * <p>The identifier of the directory for which to update the RADIUS server
   *          information.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS
   *          server.</p>
   */
  RadiusSettings: RadiusSettings | undefined;
}

/**
 * @public
 * <p>Contains the results of the <a>UpdateRadius</a> operation.</p>
 */
export interface UpdateRadiusResult {}

/**
 * @public
 * <p>The specified directory setting is not compatible with other settings.</p>
 */
export class IncompatibleSettingsException extends __BaseException {
  readonly name: "IncompatibleSettingsException" = "IncompatibleSettingsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>The specified directory setting is not supported.</p>
 */
export class UnsupportedSettingsException extends __BaseException {
  readonly name: "UnsupportedSettingsException" = "UnsupportedSettingsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * @public
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
 * @public
 * <p>Contains information about the configurable settings for a directory.</p>
 */
export interface Setting {
  /**
   * @public
   * <p>The name of the directory setting. For example:</p>
   *          <p>
   *             <code>TLS_1_0</code>
   *          </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The value of the directory setting for which to retrieve information. For example, for <code>TLS_1_0</code>, the valid values are: <code>Enable</code> and <code>Disable</code>.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface UpdateSettingsRequest {
  /**
   * @public
   * <p>The identifier of the directory for which to update settings.</p>
   */
  DirectoryId: string | undefined;

  /**
   * @public
   * <p>The list of <a>Setting</a> objects.</p>
   */
  Settings: Setting[] | undefined;
}

/**
 * @public
 */
export interface UpdateSettingsResult {
  /**
   * @public
   * <p>The identifier of the directory.</p>
   */
  DirectoryId?: string;
}

/**
 * @public
 */
export interface UpdateTrustRequest {
  /**
   * @public
   * <p>Identifier of the trust relationship.</p>
   */
  TrustId: string | undefined;

  /**
   * @public
   * <p>Updates selective authentication for the trust.</p>
   */
  SelectiveAuth?: SelectiveAuth | string;
}

/**
 * @public
 */
export interface UpdateTrustResult {
  /**
   * @public
   * <p>The Amazon Web Services request identifier.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>Identifier of the trust relationship.</p>
   */
  TrustId?: string;
}

/**
 * @public
 * <p>Initiates the verification of an existing trust relationship between an Managed Microsoft AD
 *       directory and an external domain.</p>
 */
export interface VerifyTrustRequest {
  /**
   * @public
   * <p>The unique Trust ID of the trust relationship to verify.</p>
   */
  TrustId: string | undefined;
}

/**
 * @public
 * <p>Result of a VerifyTrust request.</p>
 */
export interface VerifyTrustResult {
  /**
   * @public
   * <p>The unique Trust ID of the trust relationship that was verified.</p>
   */
  TrustId?: string;
}

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
export const ConnectDirectoryRequestFilterSensitiveLog = (obj: ConnectDirectoryRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
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
export const CreateDirectoryRequestFilterSensitiveLog = (obj: CreateDirectoryRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
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
export const CreateTrustRequestFilterSensitiveLog = (obj: CreateTrustRequest): any => ({
  ...obj,
  ...(obj.TrustPassword && { TrustPassword: SENSITIVE_STRING }),
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
export const OwnerDirectoryDescriptionFilterSensitiveLog = (obj: OwnerDirectoryDescription): any => ({
  ...obj,
  ...(obj.RadiusSettings && { RadiusSettings: RadiusSettingsFilterSensitiveLog(obj.RadiusSettings) }),
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
export const DescribeSharedDirectoriesResultFilterSensitiveLog = (obj: DescribeSharedDirectoriesResult): any => ({
  ...obj,
  ...(obj.SharedDirectories && {
    SharedDirectories: obj.SharedDirectories.map((item) => SharedDirectoryFilterSensitiveLog(item)),
  }),
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
export const EnableRadiusRequestFilterSensitiveLog = (obj: EnableRadiusRequest): any => ({
  ...obj,
  ...(obj.RadiusSettings && { RadiusSettings: RadiusSettingsFilterSensitiveLog(obj.RadiusSettings) }),
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
export const ResetUserPasswordRequestFilterSensitiveLog = (obj: ResetUserPasswordRequest): any => ({
  ...obj,
  ...(obj.NewPassword && { NewPassword: SENSITIVE_STRING }),
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
export const UpdateRadiusRequestFilterSensitiveLog = (obj: UpdateRadiusRequest): any => ({
  ...obj,
  ...(obj.RadiusSettings && { RadiusSettings: RadiusSettingsFilterSensitiveLog(obj.RadiusSettings) }),
});
