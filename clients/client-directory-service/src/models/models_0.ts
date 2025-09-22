// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DirectoryServiceServiceException as __BaseException } from "./DirectoryServiceServiceException";

/**
 * @public
 */
export interface AcceptSharedDirectoryRequest {
  /**
   * <p>Identifier of the shared directory in the directory consumer account. This identifier is
   *       different for each directory owner account. </p>
   * @public
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
 * <p>Details about the shared directory in the directory owner account for which the share
 *       request in the directory consumer account has been accepted.</p>
 * @public
 */
export interface SharedDirectory {
  /**
   * <p>Identifier of the directory owner account, which contains the directory that has been
   *       shared to the consumer account.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>Identifier of the directory in the directory owner account. </p>
   * @public
   */
  OwnerDirectoryId?: string | undefined;

  /**
   * <p>The method used when sharing a directory to determine whether the directory should be
   *       shared within your Amazon Web Services organization (<code>ORGANIZATIONS</code>) or with any Amazon Web Services account
   *       by sending a shared directory request (<code>HANDSHAKE</code>).</p>
   * @public
   */
  ShareMethod?: ShareMethod | undefined;

  /**
   * <p>Identifier of the directory consumer account that has access to the shared directory
   *         (<code>OwnerDirectoryId</code>) in the directory owner account.</p>
   * @public
   */
  SharedAccountId?: string | undefined;

  /**
   * <p>Identifier of the shared directory in the directory consumer account. This identifier is
   *       different for each directory owner account.</p>
   * @public
   */
  SharedDirectoryId?: string | undefined;

  /**
   * <p>Current directory status of the shared Managed Microsoft AD directory.</p>
   * @public
   */
  ShareStatus?: ShareStatus | undefined;

  /**
   * <p>A directory share request that is sent by the directory owner to the directory consumer.
   *       The request includes a typed message to help the directory consumer administrator determine
   *       whether to approve or reject the share invitation.</p>
   * @public
   */
  ShareNotes?: string | undefined;

  /**
   * <p>The date and time that the shared directory was created.</p>
   * @public
   */
  CreatedDateTime?: Date | undefined;

  /**
   * <p>The date and time that the shared directory was last updated.</p>
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface AcceptSharedDirectoryResult {
  /**
   * <p>The shared directory in the directory consumer account.</p>
   * @public
   */
  SharedDirectory?: SharedDirectory | undefined;
}

/**
 * <p>A client exception has occurred.</p>
 * @public
 */
export class ClientException extends __BaseException {
  readonly name: "ClientException" = "ClientException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export class DirectoryAlreadySharedException extends __BaseException {
  readonly name: "DirectoryAlreadySharedException" = "DirectoryAlreadySharedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export class EntityDoesNotExistException extends __BaseException {
  readonly name: "EntityDoesNotExistException" = "EntityDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export class ServiceException extends __BaseException {
  readonly name: "ServiceException" = "ServiceException";
  readonly $fault: "server" = "server";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>A directory assessment is automatically created when you create a hybrid directory.
 *             There are two types of assessments: <code>CUSTOMER</code> and <code>SYSTEM</code>. Your
 *             Amazon Web Services account has a limit of 100 <code>CUSTOMER</code> directory assessments.</p>
 *          <p>If you attempt to create a hybrid directory; and you already have 100
 *                 <code>CUSTOMER</code> directory assessments;, you will encounter an error. Delete
 *             assessments to free up capacity before trying again.</p>
 *          <p>You can request an increase to your <code>CUSTOMER</code> directory assessment quota
 *             by contacting customer support or delete existing CUSTOMER directory assessments; to
 *             free up capacity.</p>
 * @public
 */
export class ADAssessmentLimitExceededException extends __BaseException {
  readonly name: "ADAssessmentLimitExceededException" = "ADAssessmentLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ADAssessmentLimitExceededException, __BaseException>) {
    super({
      name: "ADAssessmentLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ADAssessmentLimitExceededException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>IP address block. This is often the address block of the DNS server used for your
 *          self-managed domain. </p>
 * @public
 */
export interface IpRoute {
  /**
   * <p>IP address block using CIDR format, for example 10.0.0.0/24. This is often the
   *          address block of the DNS server used for your self-managed domain. For a single IP address
   *          use a CIDR address block with /32. For example 10.0.0.0/32.</p>
   * @public
   */
  CidrIp?: string | undefined;

  /**
   * <p>Description of the address block.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface AddIpRoutesRequest {
  /**
   * <p>Identifier (ID) of the directory to which to add the address block.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>IP address blocks, using CIDR format, of the traffic to route. This is often the IP
   *          address block of the DNS server used for your self-managed domain.</p>
   * @public
   */
  IpRoutes: IpRoute[] | undefined;

  /**
   * <p>If set to true, updates the inbound and outbound rules of the security group that has
   *          the description: "Amazon Web Services created security group for <i>directory ID</i>
   *          directory controllers." Following are the new rules: </p>
   *          <p>Inbound:</p>
   *          <ul>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 88, Source: Managed Microsoft AD VPC IPv4 CIDR</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 123, Source: Managed Microsoft AD VPC IPv4 CIDR</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 138, Source: Managed Microsoft AD VPC IPv4 CIDR</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 389, Source: Managed Microsoft AD VPC IPv4 CIDR</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 464, Source: Managed Microsoft AD VPC IPv4 CIDR</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 445, Source: Managed Microsoft AD VPC IPv4 CIDR</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 88, Source: Managed Microsoft AD VPC IPv4 CIDR</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 135, Source: Managed Microsoft AD VPC IPv4 CIDR</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 445, Source: Managed Microsoft AD VPC IPv4 CIDR</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 464, Source: Managed Microsoft AD VPC IPv4 CIDR</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 636, Source: Managed Microsoft AD VPC IPv4 CIDR</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 1024-65535, Source:
   *                Managed Microsoft AD VPC IPv4 CIDR</p>
   *             </li>
   *             <li>
   *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 3268-33269, Source:
   *                Managed Microsoft AD VPC IPv4 CIDR</p>
   *             </li>
   *             <li>
   *                <p>Type: DNS (UDP), Protocol: UDP, Range: 53, Source: Managed Microsoft AD VPC IPv4 CIDR</p>
   *             </li>
   *             <li>
   *                <p>Type: DNS (TCP), Protocol: TCP, Range: 53, Source: Managed Microsoft AD VPC IPv4 CIDR</p>
   *             </li>
   *             <li>
   *                <p>Type: LDAP, Protocol: TCP, Range: 389, Source: Managed Microsoft AD VPC IPv4 CIDR</p>
   *             </li>
   *             <li>
   *                <p>Type: All ICMP, Protocol: All, Range: N/A, Source: Managed Microsoft AD VPC IPv4 CIDR</p>
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
   * @public
   */
  UpdateSecurityGroupForDirectoryControllers?: boolean | undefined;
}

/**
 * @public
 */
export interface AddIpRoutesResult {}

/**
 * <p>The specified directory is unavailable.</p>
 * @public
 */
export class DirectoryUnavailableException extends __BaseException {
  readonly name: "DirectoryUnavailableException" = "DirectoryUnavailableException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export class EntityAlreadyExistsException extends __BaseException {
  readonly name: "EntityAlreadyExistsException" = "EntityAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export class IpRouteLimitExceededException extends __BaseException {
  readonly name: "IpRouteLimitExceededException" = "IpRouteLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>Contains VPC information for the <a>CreateDirectory</a>, <a>CreateMicrosoftAD</a>, or <a>CreateHybridAD</a> operation.</p>
 * @public
 */
export interface DirectoryVpcSettings {
  /**
   * <p>The identifier of the VPC in which to create the directory.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The identifiers of the subnets for the directory servers. The two subnets must be in
   *       different Availability Zones. Directory Service creates a directory server and a DNS server in each of
   *       these subnets.</p>
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 */
export interface AddRegionRequest {
  /**
   * <p>The identifier of the directory to which you want to add Region replication.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The name of the Region where you want to add domain controllers for replication. For
   *       example, <code>us-east-1</code>.</p>
   * @public
   */
  RegionName: string | undefined;

  /**
   * <p>Contains VPC information for the <a>CreateDirectory</a>, <a>CreateMicrosoftAD</a>, or <a>CreateHybridAD</a> operation.</p>
   * @public
   */
  VPCSettings: DirectoryVpcSettings | undefined;
}

/**
 * @public
 */
export interface AddRegionResult {}

/**
 * <p>The Region you specified is the same Region where the Managed Microsoft AD directory was created.
 *       Specify a different Region and try again.</p>
 * @public
 */
export class DirectoryAlreadyInRegionException extends __BaseException {
  readonly name: "DirectoryAlreadyInRegionException" = "DirectoryAlreadyInRegionException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export class DirectoryDoesNotExistException extends __BaseException {
  readonly name: "DirectoryDoesNotExistException" = "DirectoryDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export class RegionLimitExceededException extends __BaseException {
  readonly name: "RegionLimitExceededException" = "RegionLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export interface Tag {
  /**
   * <p>Required name of the tag. The string value can be Unicode characters and cannot be
   *       prefixed with "aws:". The string can contain only the set of Unicode letters, digits,
   *       white-space, '_', '.', '/', '=', '+', '-', ':', '@'(Java regex:
   *       "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The optional value of the tag. The string value can be Unicode characters. The string
   *       can contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-', ':', '@'
   *       (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceRequest {
  /**
   * <p>Identifier (ID) for the directory to which to add the tag.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The tags to be assigned to the directory.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceResult {}

/**
 * <p>The maximum allowed number of tags was exceeded.</p>
 * @public
 */
export class TagLimitExceededException extends __BaseException {
  readonly name: "TagLimitExceededException" = "TagLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>Contains detailed information about a directory assessment, including configuration
 *             parameters, status, and validation results.</p>
 * @public
 */
export interface Assessment {
  /**
   * <p>The unique identifier of the directory assessment.</p>
   * @public
   */
  AssessmentId?: string | undefined;

  /**
   * <p>The identifier of the directory associated with this assessment.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of the Active Directory domain being
   *             assessed.</p>
   * @public
   */
  DnsName?: string | undefined;

  /**
   * <p>The date and time when the assessment was initiated.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time when the assessment status was last updated.</p>
   * @public
   */
  LastUpdateDateTime?: Date | undefined;

  /**
   * <p>The current status of the assessment. Valid values include <code>SUCCESS</code>,
   *                 <code>FAILED</code>, <code>PENDING</code>, and <code>IN_PROGRESS</code>.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>A detailed status code providing additional information about the assessment
   *             state.</p>
   * @public
   */
  StatusCode?: string | undefined;

  /**
   * <p>A human-readable description of the current assessment status, including any error
   *             details or progress information.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The IP addresses of the DNS servers or domain controllers in your self-managed AD
   *             environment.</p>
   * @public
   */
  CustomerDnsIps?: string[] | undefined;

  /**
   * <p>Contains Amazon VPC information for the <code>StartADAssessment</code> operation. </p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>A list of subnet identifiers in the Amazon VPC in which the hybrid directory is
   *             created.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The security groups identifiers attached to the network interfaces.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The identifiers of the self-managed AD instances used to perform the
   *             assessment.</p>
   * @public
   */
  SelfManagedInstanceIds?: string[] | undefined;

  /**
   * <p>The type of assessment report generated. Valid values are <code>CUSTOMER</code> and
   *                 <code>SYSTEM</code>.</p>
   * @public
   */
  ReportType?: string | undefined;

  /**
   * <p>The version of the assessment framework used to evaluate your self-managed AD
   *             environment.</p>
   * @public
   */
  Version?: string | undefined;
}

/**
 * <p>Contains configuration parameters required to perform a directory assessment.</p>
 * @public
 */
export interface AssessmentConfiguration {
  /**
   * <p>A list of IP addresses for the DNS servers or domain controllers in your self-managed
   *             AD that are tested during the assessment.</p>
   * @public
   */
  CustomerDnsIps: string[] | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of the self-managed AD domain to assess.</p>
   * @public
   */
  DnsName: string | undefined;

  /**
   * <p>Contains VPC information for the <a>CreateDirectory</a>, <a>CreateMicrosoftAD</a>, or <a>CreateHybridAD</a> operation.</p>
   * @public
   */
  VpcSettings: DirectoryVpcSettings | undefined;

  /**
   * <p>The identifiers of the self-managed instances with SSM that are used to perform
   *             connectivity and validation tests.</p>
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>By default, the service attaches a security group to allow network access to the
   *             self-managed nodes in your Amazon VPC. You can optionally supply your own security group that
   *             allows network traffic to and from your self-managed domain controllers outside of your
   *             Amazon VPC. </p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * <p>Contains information about a specific validation test performed during a directory
 *             assessment.</p>
 * @public
 */
export interface AssessmentValidation {
  /**
   * <p>The category of the validation test.</p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>The name of the specific validation test performed within the category.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The result status of the validation test. Valid values include <code>SUCCESS</code>,
   *                 <code>FAILED</code>, <code>PENDING</code>, and <code>IN_PROGRESS</code>.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>A detailed status code providing additional information about the validation
   *             result.</p>
   * @public
   */
  StatusCode?: string | undefined;

  /**
   * <p>A human-readable description of the validation result, including any error details or
   *             recommendations.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The date and time when the validation test was started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time when the validation test was completed or last updated.</p>
   * @public
   */
  LastUpdateDateTime?: Date | undefined;
}

/**
 * <p>Contains the results of validation tests performed against a specific domain
 *             controller during a directory assessment.</p>
 * @public
 */
export interface AssessmentReport {
  /**
   * <p>The IP address of the domain controller that was tested during the assessment.</p>
   * @public
   */
  DomainControllerIp?: string | undefined;

  /**
   * <p>A list of validation results for different test categories performed against this
   *             domain controller.</p>
   * @public
   */
  Validations?: AssessmentValidation[] | undefined;
}

/**
 * <p>Contains summary information about a directory assessment, providing a high-level
 *             overview without detailed validation results.</p>
 * @public
 */
export interface AssessmentSummary {
  /**
   * <p>The unique identifier of the directory assessment.</p>
   * @public
   */
  AssessmentId?: string | undefined;

  /**
   * <p>The identifier of the directory associated with this assessment.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of the Active Directory domain being
   *             assessed.</p>
   * @public
   */
  DnsName?: string | undefined;

  /**
   * <p>The date and time when the assessment was initiated.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time when the assessment status was last updated.</p>
   * @public
   */
  LastUpdateDateTime?: Date | undefined;

  /**
   * <p>The current status of the assessment. Valid values include <code>SUCCESS</code>,
   *                 <code>FAILED</code>, <code>PENDING</code>, and <code>IN_PROGRESS</code>.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The IP addresses of the DNS servers or domain controllers in your self-managed AD
   *             environment.</p>
   * @public
   */
  CustomerDnsIps?: string[] | undefined;

  /**
   * <p>The type of assessment report generated. Valid values include <code>CUSTOMER</code>
   *             and <code>SYSTEM</code>.</p>
   * @public
   */
  ReportType?: string | undefined;
}

/**
 * <p>Represents a named directory attribute.</p>
 * @public
 */
export interface Attribute {
  /**
   * <p>The name of the attribute.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The value of the attribute.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>An authentication error occurred.</p>
 * @public
 */
export class AuthenticationFailedException extends __BaseException {
  readonly name: "AuthenticationFailedException" = "AuthenticationFailedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The textual message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The identifier of the request that caused the exception.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @enum
 */
export const CaEnrollmentPolicyStatus = {
  DISABLED: "Disabled",
  DISABLING: "Disabling",
  FAILED: "Failed",
  IMPAIRED: "Impaired",
  IN_PROGRESS: "InProgress",
  SUCCESS: "Success",
} as const;

/**
 * @public
 */
export type CaEnrollmentPolicyStatus = (typeof CaEnrollmentPolicyStatus)[keyof typeof CaEnrollmentPolicyStatus];

/**
 * @public
 */
export interface CancelSchemaExtensionRequest {
  /**
   * <p>The identifier of the directory whose schema extension will be canceled.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The identifier of the schema extension that will be canceled.</p>
   * @public
   */
  SchemaExtensionId: string | undefined;
}

/**
 * @public
 */
export interface CancelSchemaExtensionResult {}

/**
 * <p>Contains information about the client certificate authentication settings for the
 *         <code>RegisterCertificate</code> and <code>DescribeCertificate</code> operations. </p>
 * @public
 */
export interface ClientCertAuthSettings {
  /**
   * <p>Specifies the URL of the default OCSP server used to check for revocation status. A
   *       secondary value to any OCSP address found in the AIA extension of the user certificate.</p>
   * @public
   */
  OCSPUrl?: string | undefined;
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
 * <p>Information about the certificate.</p>
 * @public
 */
export interface Certificate {
  /**
   * <p>The identifier of the certificate.</p>
   * @public
   */
  CertificateId?: string | undefined;

  /**
   * <p>The state of the certificate.</p>
   * @public
   */
  State?: CertificateState | undefined;

  /**
   * <p>Describes a state change for the certificate.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The common name for the certificate.</p>
   * @public
   */
  CommonName?: string | undefined;

  /**
   * <p>The date and time that the certificate was registered.</p>
   * @public
   */
  RegisteredDateTime?: Date | undefined;

  /**
   * <p>The date and time when the certificate will expire.</p>
   * @public
   */
  ExpiryDateTime?: Date | undefined;

  /**
   * <p>The function that the registered certificate performs. Valid values include
   *         <code>ClientLDAPS</code> or <code>ClientCertAuth</code>. The default value is
   *         <code>ClientLDAPS</code>.</p>
   * @public
   */
  Type?: CertificateType | undefined;

  /**
   * <p>A <code>ClientCertAuthSettings</code> object that contains client certificate
   *       authentication settings.</p>
   * @public
   */
  ClientCertAuthSettings?: ClientCertAuthSettings | undefined;
}

/**
 * <p>The certificate has already been registered into the system.</p>
 * @public
 */
export class CertificateAlreadyExistsException extends __BaseException {
  readonly name: "CertificateAlreadyExistsException" = "CertificateAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export class CertificateDoesNotExistException extends __BaseException {
  readonly name: "CertificateDoesNotExistException" = "CertificateDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export interface CertificateInfo {
  /**
   * <p>The identifier of the certificate.</p>
   * @public
   */
  CertificateId?: string | undefined;

  /**
   * <p>The common name for the certificate.</p>
   * @public
   */
  CommonName?: string | undefined;

  /**
   * <p>The state of the certificate.</p>
   * @public
   */
  State?: CertificateState | undefined;

  /**
   * <p>The date and time when the certificate will expire.</p>
   * @public
   */
  ExpiryDateTime?: Date | undefined;

  /**
   * <p>The function that the registered certificate performs. Valid values include
   *         <code>ClientLDAPS</code> or <code>ClientCertAuth</code>. The default value is
   *         <code>ClientLDAPS</code>.</p>
   * @public
   */
  Type?: CertificateType | undefined;
}

/**
 * <p>The certificate is being used for the LDAP security connection and cannot be removed
 *       without disabling LDAP security.</p>
 * @public
 */
export class CertificateInUseException extends __BaseException {
  readonly name: "CertificateInUseException" = "CertificateInUseException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export class CertificateLimitExceededException extends __BaseException {
  readonly name: "CertificateLimitExceededException" = "CertificateLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>Contains information about a client authentication method for a directory.</p>
 * @public
 */
export interface ClientAuthenticationSettingInfo {
  /**
   * <p>The type of client authentication for the specified directory. If no type is specified, a
   *       list of all client authentication types that are supported for the directory is retrieved.
   *     </p>
   * @public
   */
  Type?: ClientAuthenticationType | undefined;

  /**
   * <p>Whether the client authentication type is enabled or disabled for the specified
   *       directory.</p>
   * @public
   */
  Status?: ClientAuthenticationStatus | undefined;

  /**
   * <p>The date and time when the status of the client authentication type was last
   *       updated.</p>
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;
}

/**
 * <p>Contains information about a computer account in a directory.</p>
 * @public
 */
export interface Computer {
  /**
   * <p>The identifier of the computer.</p>
   * @public
   */
  ComputerId?: string | undefined;

  /**
   * <p>The computer name.</p>
   * @public
   */
  ComputerName?: string | undefined;

  /**
   * <p>An array of <a>Attribute</a> objects containing the LDAP attributes that belong to the
   *             computer account.</p>
   * @public
   */
  ComputerAttributes?: Attribute[] | undefined;
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
 * <p>Points to a remote domain with which you are setting up a trust relationship.
 *       Conditional forwarders are required in order to set up a trust relationship with another
 *       domain.</p>
 * @public
 */
export interface ConditionalForwarder {
  /**
   * <p>The fully qualified domain name (FQDN) of the remote domains pointed to by the
   *       conditional forwarder.</p>
   * @public
   */
  RemoteDomainName?: string | undefined;

  /**
   * <p>The IP addresses of the remote DNS server associated with RemoteDomainName. This is the
   *       IP address of the DNS server that your conditional forwarder points to.</p>
   * @public
   */
  DnsIpAddrs?: string[] | undefined;

  /**
   * <p>The replication scope of the conditional forwarder. The only allowed value is
   *         <code>Domain</code>, which will replicate the conditional forwarder to all of the domain
   *       controllers for your Amazon Web Services directory.</p>
   * @public
   */
  ReplicationScope?: ReplicationScope | undefined;
}

/**
 * <p>Contains information for the <a>ConnectDirectory</a> operation when an AD
 *       Connector directory is being created.</p>
 * @public
 */
export interface DirectoryConnectSettings {
  /**
   * <p>The identifier of the VPC in which the AD Connector is created.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>A list of subnet identifiers in the VPC in which the AD Connector is created.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of one or more IP addresses of DNS servers or domain controllers in your
   *       self-managed directory.</p>
   * @public
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
   * @public
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
 * <p>Contains the inputs for the <a>ConnectDirectory</a> operation.</p>
 * @public
 */
export interface ConnectDirectoryRequest {
  /**
   * <p>The fully qualified name of your self-managed directory, such as
   *         <code>corp.example.com</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The NetBIOS name of your self-managed directory, such as <code>CORP</code>.</p>
   * @public
   */
  ShortName?: string | undefined;

  /**
   * <p>The password for your self-managed user account.</p>
   * @public
   */
  Password: string | undefined;

  /**
   * <p>A description for the directory.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The size of the directory.</p>
   * @public
   */
  Size: DirectorySize | undefined;

  /**
   * <p>A <a>DirectoryConnectSettings</a> object that contains additional information
   *       for the operation.</p>
   * @public
   */
  ConnectSettings: DirectoryConnectSettings | undefined;

  /**
   * <p>The tags to be assigned to AD Connector.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the results of the <a>ConnectDirectory</a> operation.</p>
 * @public
 */
export interface ConnectDirectoryResult {
  /**
   * <p>The identifier of the new directory.</p>
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * <p>The maximum number of directories in the region has been reached. You can use the
 *                 <a>GetDirectoryLimits</a> operation to determine your directory limits in
 *             the region.</p>
 * @public
 */
export class DirectoryLimitExceededException extends __BaseException {
  readonly name: "DirectoryLimitExceededException" = "DirectoryLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export interface CreateAliasRequest {
  /**
   * <p>The identifier of the directory for which to create the alias.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The requested alias.</p>
   *          <p>The alias must be unique amongst all aliases in Amazon Web Services. This operation throws an
   *             <code>EntityAlreadyExistsException</code> error if the alias already exists.</p>
   * @public
   */
  Alias: string | undefined;
}

/**
 * <p>Contains the results of the <a>CreateAlias</a> operation.</p>
 * @public
 */
export interface CreateAliasResult {
  /**
   * <p>The identifier of the directory.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The alias for the directory.</p>
   * @public
   */
  Alias?: string | undefined;
}

/**
 * <p>Contains the inputs for the <a>CreateComputer</a> operation.</p>
 * @public
 */
export interface CreateComputerRequest {
  /**
   * <p>The identifier of the directory in which to create the computer account.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The name of the computer account.</p>
   * @public
   */
  ComputerName: string | undefined;

  /**
   * <p>A one-time password that is used to join the computer to the directory. You should generate a random, strong password to use for this parameter.</p>
   * @public
   */
  Password: string | undefined;

  /**
   * <p>The fully-qualified distinguished name of the organizational unit to place the computer account in.</p>
   * @public
   */
  OrganizationalUnitDistinguishedName?: string | undefined;

  /**
   * <p>An array of <a>Attribute</a> objects that contain any LDAP attributes to apply to the
   *             computer account.</p>
   * @public
   */
  ComputerAttributes?: Attribute[] | undefined;
}

/**
 * <p>Contains the results for the <a>CreateComputer</a> operation.</p>
 * @public
 */
export interface CreateComputerResult {
  /**
   * <p>A <a>Computer</a> object that represents the computer account.</p>
   * @public
   */
  Computer?: Computer | undefined;
}

/**
 * <p>Initiates the creation of a conditional forwarder for your Directory Service for Microsoft Active
 *       Directory. Conditional forwarders are required in order to set up a trust relationship with
 *       another domain.</p>
 * @public
 */
export interface CreateConditionalForwarderRequest {
  /**
   * <p>The directory ID of the Amazon Web Services directory for which you are creating the conditional
   *       forwarder.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of the remote domain with which you will set up
   *       a trust relationship.</p>
   * @public
   */
  RemoteDomainName: string | undefined;

  /**
   * <p>The IP addresses of the remote DNS server associated with RemoteDomainName.</p>
   * @public
   */
  DnsIpAddrs: string[] | undefined;
}

/**
 * <p>The result of a CreateConditinalForwarder request.</p>
 * @public
 */
export interface CreateConditionalForwarderResult {}

/**
 * <p>Contains the inputs for the <a>CreateDirectory</a> operation. </p>
 * @public
 */
export interface CreateDirectoryRequest {
  /**
   * <p>The fully qualified name for the directory, such as <code>corp.example.com</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The NetBIOS name of the directory, such as <code>CORP</code>.</p>
   * @public
   */
  ShortName?: string | undefined;

  /**
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
   * @public
   */
  Password: string | undefined;

  /**
   * <p>A description for the directory.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The size of the directory.</p>
   * @public
   */
  Size: DirectorySize | undefined;

  /**
   * <p>A <a>DirectoryVpcSettings</a> object that contains additional information for
   *       the operation.</p>
   * @public
   */
  VpcSettings?: DirectoryVpcSettings | undefined;

  /**
   * <p>The tags to be assigned to the Simple AD directory.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the results of the <a>CreateDirectory</a> operation.</p>
 * @public
 */
export interface CreateDirectoryResult {
  /**
   * <p>The identifier of the directory that was created.</p>
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * @public
 */
export interface CreateHybridADRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the
   *             credentials for the service account used to join hybrid domain controllers to your
   *             self-managed AD domain. This secret is used once and not stored.</p>
   *          <p>The secret must contain key-value pairs with keys matching
   *                 <code>customerAdAdminDomainUsername</code> and
   *                 <code>customerAdAdminDomainPassword</code>. For example:
   *                 <code>\{"customerAdAdminDomainUsername":"carlos_salazar","customerAdAdminDomainPassword":"ExamplePassword123!"\}</code>.</p>
   * @public
   */
  SecretArn: string | undefined;

  /**
   * <p>The unique identifier of the successful directory assessment that validates your
   *             self-managed AD environment. You must have a successful directory assessment before you
   *             create a hybrid directory.</p>
   * @public
   */
  AssessmentId: string | undefined;

  /**
   * <p>The tags to be assigned to the directory. Each tag consists of a key and value pair.
   *             You can specify multiple tags as a list.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateHybridADResult {
  /**
   * <p>The unique identifier of the newly created hybrid directory.</p>
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * @public
 */
export interface CreateLogSubscriptionRequest {
  /**
   * <p>Identifier of the directory to which you want to subscribe and receive real-time logs to
   *       your specified CloudWatch log group.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The name of the CloudWatch log group where the real-time domain controller logs are
   *       forwarded.</p>
   * @public
   */
  LogGroupName: string | undefined;
}

/**
 * @public
 */
export interface CreateLogSubscriptionResult {}

/**
 * <p>The account does not have sufficient permission to perform the operation.</p>
 * @public
 */
export class InsufficientPermissionsException extends __BaseException {
  readonly name: "InsufficientPermissionsException" = "InsufficientPermissionsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>Creates an Managed Microsoft AD directory.</p>
 * @public
 */
export interface CreateMicrosoftADRequest {
  /**
   * <p>The fully qualified domain name for the Managed Microsoft AD directory, such as
   *         <code>corp.example.com</code>. This name will resolve inside your VPC only. It does not need
   *       to be publicly resolvable.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The NetBIOS name for your domain, such as <code>CORP</code>. If you don't specify a
   *       NetBIOS name, it will default to the first part of your directory DNS. For example,
   *         <code>CORP</code> for the directory DNS <code>corp.example.com</code>. </p>
   * @public
   */
  ShortName?: string | undefined;

  /**
   * <p>The password for the default administrative user named <code>Admin</code>.</p>
   *          <p>If you need to change the password for the administrator account, you can use the <a>ResetUserPassword</a> API call.</p>
   * @public
   */
  Password: string | undefined;

  /**
   * <p>A description for the directory. This label will appear on the Amazon Web Services console
   *         <code>Directory Details</code> page after the directory is created.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.</p>
   * @public
   */
  VpcSettings: DirectoryVpcSettings | undefined;

  /**
   * <p>Managed Microsoft AD is available in two editions: <code>Standard</code> and
   *         <code>Enterprise</code>. <code>Enterprise</code> is the default.</p>
   * @public
   */
  Edition?: DirectoryEdition | undefined;

  /**
   * <p>The tags to be assigned to the Managed Microsoft AD directory.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Result of a CreateMicrosoftAD request.</p>
 * @public
 */
export interface CreateMicrosoftADResult {
  /**
   * <p>The identifier of the directory that was created.</p>
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * <p>Contains the inputs for the <a>CreateSnapshot</a> operation.</p>
 * @public
 */
export interface CreateSnapshotRequest {
  /**
   * <p>The identifier of the directory of which to take a snapshot.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The descriptive name to apply to the snapshot.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Contains the results of the <a>CreateSnapshot</a> operation.</p>
 * @public
 */
export interface CreateSnapshotResult {
  /**
   * <p>The identifier of the snapshot that was created.</p>
   * @public
   */
  SnapshotId?: string | undefined;
}

/**
 * <p>The maximum number of manual snapshots for the directory has been reached. You can
 *             use the <a>GetSnapshotLimits</a> operation to determine the snapshot limits
 *             for a directory.</p>
 * @public
 */
export class SnapshotLimitExceededException extends __BaseException {
  readonly name: "SnapshotLimitExceededException" = "SnapshotLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For
 *       example, you can establish a trust between your Managed Microsoft AD directory, and your existing
 *       self-managed Microsoft Active Directory. This would allow you to provide users and groups
 *       access to resources in either domain, with a single set of credentials.</p>
 *          <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an
 *       Managed Microsoft AD directory and an external domain.</p>
 * @public
 */
export interface CreateTrustRequest {
  /**
   * <p>The Directory ID of the Managed Microsoft AD directory for which to establish the trust
   *       relationship.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The Fully Qualified Domain Name (FQDN) of the external domain for which to create the
   *       trust relationship.</p>
   * @public
   */
  RemoteDomainName: string | undefined;

  /**
   * <p>The trust password. The trust password must be the same password that was used when creating the trust
   *       relationship on the external domain.</p>
   * @public
   */
  TrustPassword: string | undefined;

  /**
   * <p>The direction of the trust relationship.</p>
   * @public
   */
  TrustDirection: TrustDirection | undefined;

  /**
   * <p>The trust relationship type. <code>Forest</code> is the default.</p>
   * @public
   */
  TrustType?: TrustType | undefined;

  /**
   * <p>The IP addresses of the remote DNS server associated with RemoteDomainName.</p>
   * @public
   */
  ConditionalForwarderIpAddrs?: string[] | undefined;

  /**
   * <p>Optional parameter to enable selective authentication for the trust.</p>
   * @public
   */
  SelectiveAuth?: SelectiveAuth | undefined;
}

/**
 * <p>The result of a CreateTrust request.</p>
 * @public
 */
export interface CreateTrustResult {
  /**
   * <p>A unique identifier for the trust relationship that was created.</p>
   * @public
   */
  TrustId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataAccessStatus = {
  DISABLED: "Disabled",
  DISABLING: "Disabling",
  ENABLED: "Enabled",
  ENABLING: "Enabling",
  FAILED: "Failed",
} as const;

/**
 * @public
 */
export type DataAccessStatus = (typeof DataAccessStatus)[keyof typeof DataAccessStatus];

/**
 * @public
 */
export interface DeleteADAssessmentRequest {
  /**
   * <p>The unique identifier of the directory assessment to delete.</p>
   * @public
   */
  AssessmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteADAssessmentResult {
  /**
   * <p>The unique identifier of the deleted directory assessment.</p>
   * @public
   */
  AssessmentId?: string | undefined;
}

/**
 * <p>Deletes a conditional forwarder.</p>
 * @public
 */
export interface DeleteConditionalForwarderRequest {
  /**
   * <p>The directory ID for which you are deleting the conditional forwarder.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of the remote domain with which you are deleting
   *       the conditional forwarder.</p>
   * @public
   */
  RemoteDomainName: string | undefined;
}

/**
 * <p>The result of a DeleteConditionalForwarder request.</p>
 * @public
 */
export interface DeleteConditionalForwarderResult {}

/**
 * <p>Contains the inputs for the <a>DeleteDirectory</a> operation.</p>
 * @public
 */
export interface DeleteDirectoryRequest {
  /**
   * <p>The identifier of the directory to delete.</p>
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * <p>Contains the results of the <a>DeleteDirectory</a> operation.</p>
 * @public
 */
export interface DeleteDirectoryResult {
  /**
   * <p>The directory identifier.</p>
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLogSubscriptionRequest {
  /**
   * <p>Identifier of the directory whose log subscription you want to delete.</p>
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLogSubscriptionResult {}

/**
 * <p>Contains the inputs for the <a>DeleteSnapshot</a> operation.</p>
 * @public
 */
export interface DeleteSnapshotRequest {
  /**
   * <p>The identifier of the directory snapshot to be deleted.</p>
   * @public
   */
  SnapshotId: string | undefined;
}

/**
 * <p>Contains the results of the <a>DeleteSnapshot</a> operation.</p>
 * @public
 */
export interface DeleteSnapshotResult {
  /**
   * <p>The identifier of the directory snapshot that was deleted.</p>
   * @public
   */
  SnapshotId?: string | undefined;
}

/**
 * <p>Deletes the local side of an existing trust relationship between the Managed Microsoft AD
 *       directory and the external domain.</p>
 * @public
 */
export interface DeleteTrustRequest {
  /**
   * <p>The Trust ID of the trust relationship to be deleted.</p>
   * @public
   */
  TrustId: string | undefined;

  /**
   * <p>Delete a conditional forwarder as part of a DeleteTrustRequest.</p>
   * @public
   */
  DeleteAssociatedConditionalForwarder?: boolean | undefined;
}

/**
 * <p>The result of a DeleteTrust request.</p>
 * @public
 */
export interface DeleteTrustResult {
  /**
   * <p>The Trust ID of the trust relationship that was deleted.</p>
   * @public
   */
  TrustId?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterCertificateRequest {
  /**
   * <p>The identifier of the directory.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The identifier of the certificate.</p>
   * @public
   */
  CertificateId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterCertificateResult {}

/**
 * <p>Removes the specified directory as a publisher to the specified Amazon SNS topic.</p>
 * @public
 */
export interface DeregisterEventTopicRequest {
  /**
   * <p>The Directory ID to remove as a publisher. This directory will no longer send messages
   *       to the specified Amazon SNS topic.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The name of the Amazon SNS topic from which to remove the directory as a
   *       publisher.</p>
   * @public
   */
  TopicName: string | undefined;
}

/**
 * <p>The result of a DeregisterEventTopic request.</p>
 * @public
 */
export interface DeregisterEventTopicResult {}

/**
 * @public
 */
export interface DescribeADAssessmentRequest {
  /**
   * <p>The identifier of the directory assessment to describe.</p>
   * @public
   */
  AssessmentId: string | undefined;
}

/**
 * @public
 */
export interface DescribeADAssessmentResult {
  /**
   * <p>Detailed information about the self-managed instance settings (IDs and DNS
   *             IPs).</p>
   * @public
   */
  Assessment?: Assessment | undefined;

  /**
   * <p>A list of assessment reports containing validation results for each domain controller
   *             and test category. Each report includes specific validation details and outcomes.</p>
   * @public
   */
  AssessmentReports?: AssessmentReport[] | undefined;
}

/**
 * <p>Contains the inputs for the <a>DescribeCAEnrollmentPolicy</a> operation.</p>
 * @public
 */
export interface DescribeCAEnrollmentPolicyRequest {
  /**
   * <p>The identifier of the directory for which to retrieve the CA enrollment policy
   *       information.</p>
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * <p>Contains the results of the <a>DescribeCAEnrollmentPolicy</a> operation.</p>
 * @public
 */
export interface DescribeCAEnrollmentPolicyResult {
  /**
   * <p>The identifier of the directory associated with this CA enrollment policy.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Private Certificate Authority (PCA) connector
   *       that is configured for automatic certificate enrollment in this directory.</p>
   * @public
   */
  PcaConnectorArn?: string | undefined;

  /**
   * <p>The current status of the CA enrollment policy. This indicates if automatic certificate
   *       enrollment is currently active, inactive, or in a transitional state.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - The policy is being activated T</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code> - The policy is active and automatic certificate enrollment is
   *           operational</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The policy activation or deactivation failed</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLING</code> - The policy is being deactivated</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - The policy is inactive and automatic certificate enrollment is
   *           not available</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMPAIRED</code> - Network connectivity is impaired.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CaEnrollmentPolicyStatus?: CaEnrollmentPolicyStatus | undefined;

  /**
   * <p>The date and time when the CA enrollment policy was last modified or updated.</p>
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;

  /**
   * <p>Additional information explaining the current status of the CA enrollment policy,
   *       particularly useful when the policy is in an error or transitional state.</p>
   * @public
   */
  CaEnrollmentPolicyStatusReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateRequest {
  /**
   * <p>The identifier of the directory.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The identifier of the certificate.</p>
   * @public
   */
  CertificateId: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateResult {
  /**
   * <p>Information about the certificate, including registered date time, certificate state, the
   *       reason for the state, expiration date time, and certificate common name.</p>
   * @public
   */
  Certificate?: Certificate | undefined;
}

/**
 * @public
 */
export interface DescribeClientAuthenticationSettingsRequest {
  /**
   * <p>The identifier of the directory for which to retrieve information.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The type of client authentication for which to retrieve information. If no type is
   *       specified, a list of all client authentication types that are supported for the specified
   *       directory is retrieved.</p>
   * @public
   */
  Type?: ClientAuthenticationType | undefined;

  /**
   * <p>The <i>DescribeClientAuthenticationSettingsResult.NextToken</i> value from a
   *       previous call to <a>DescribeClientAuthenticationSettings</a>. Pass null if this is
   *       the first call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return. If this value is zero, the maximum number of items
   *       is specified by the limitations of the operation. </p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeClientAuthenticationSettingsResult {
  /**
   * <p>Information about the type of client authentication for the specified directory. The
   *       following information is retrieved: The date and time when the status of the client
   *       authentication type was last updated, whether the client authentication type is enabled or
   *       disabled, and the type of client authentication.</p>
   * @public
   */
  ClientAuthenticationSettingsInfo?: ClientAuthenticationSettingInfo[] | undefined;

  /**
   * <p>The next token used to retrieve the client authentication settings if the number of
   *       setting types exceeds page limit and there is another page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes a conditional forwarder.</p>
 * @public
 */
export interface DescribeConditionalForwardersRequest {
  /**
   * <p>The directory ID for which to get the list of associated conditional
   *       forwarders.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The fully qualified domain names (FQDN) of the remote domains for which to get the list
   *       of associated conditional forwarders. If this member is null, all conditional forwarders are
   *       returned.</p>
   * @public
   */
  RemoteDomainNames?: string[] | undefined;
}

/**
 * <p>The result of a DescribeConditionalForwarder request.</p>
 * @public
 */
export interface DescribeConditionalForwardersResult {
  /**
   * <p>The list of conditional forwarders that have been created.</p>
   * @public
   */
  ConditionalForwarders?: ConditionalForwarder[] | undefined;
}

/**
 * <p>Contains the inputs for the <a>DescribeDirectories</a> operation.</p>
 * @public
 */
export interface DescribeDirectoriesRequest {
  /**
   * <p>A list of identifiers of the directories for which to obtain the information. If this
   *       member is null, all directories that belong to the current account are returned.</p>
   *          <p>An empty list results in an <code>InvalidParameterException</code> being thrown.</p>
   * @public
   */
  DirectoryIds?: string[] | undefined;

  /**
   * <p>The <code>DescribeDirectoriesResult.NextToken</code> value from a previous call to <a>DescribeDirectories</a>. Pass null if this is the first call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return. If this value is zero, the maximum number of items
   *       is specified by the limitations of the operation.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>Contains information about an AD Connector directory.</p>
 * @public
 */
export interface DirectoryConnectSettingsDescription {
  /**
   * <p>The identifier of the VPC that the AD Connector is in.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>A list of subnet identifiers in the VPC that the AD Connector is in.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The user name of the service account in your self-managed directory.</p>
   * @public
   */
  CustomerUserName?: string | undefined;

  /**
   * <p>The security group identifier for the AD Connector directory.</p>
   * @public
   */
  SecurityGroupId?: string | undefined;

  /**
   * <p>A list of the Availability Zones that the directory is in.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The IP addresses of the AD Connector servers.</p>
   * @public
   */
  ConnectIps?: string[] | undefined;
}

/**
 * <p>Describes the current hybrid directory configuration settings for a directory.</p>
 * @public
 */
export interface HybridSettingsDescription {
  /**
   * <p>The IP addresses of the DNS servers in your self-managed AD environment.</p>
   * @public
   */
  SelfManagedDnsIpAddrs?: string[] | undefined;

  /**
   * <p>The identifiers of the self-managed instances with SSM used for hybrid directory
   *             operations.</p>
   * @public
   */
  SelfManagedInstanceIds?: string[] | undefined;
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
 * <p>Contains information about a Remote Authentication Dial In User Service (RADIUS)
 *          server.</p>
 * @public
 */
export interface RadiusSettings {
  /**
   * <p>An array of strings that contains the fully qualified domain name (FQDN) or IP
   *          addresses of the RADIUS server endpoints, or the FQDN or IP addresses of your RADIUS server
   *          load balancer.</p>
   * @public
   */
  RadiusServers?: string[] | undefined;

  /**
   * <p>The port that your RADIUS server is using for communications. Your self-managed
   *          network must allow inbound traffic over this port from the Directory Service servers.</p>
   * @public
   */
  RadiusPort?: number | undefined;

  /**
   * <p>The amount of time, in seconds, to wait for the RADIUS server to respond.</p>
   * @public
   */
  RadiusTimeout?: number | undefined;

  /**
   * <p>The maximum number of times that communication with the RADIUS server is retried after the initial attempt.</p>
   * @public
   */
  RadiusRetries?: number | undefined;

  /**
   * <p>Required for enabling RADIUS on the directory.</p>
   * @public
   */
  SharedSecret?: string | undefined;

  /**
   * <p>The protocol specified for your RADIUS endpoints.</p>
   * @public
   */
  AuthenticationProtocol?: RadiusAuthenticationProtocol | undefined;

  /**
   * <p>Not currently used.</p>
   * @public
   */
  DisplayLabel?: string | undefined;

  /**
   * <p>Not currently used.</p>
   * @public
   */
  UseSameUsername?: boolean | undefined;
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
 * <p>Contains information about the directory.</p>
 * @public
 */
export interface DirectoryVpcSettingsDescription {
  /**
   * <p>The identifier of the VPC that the directory is in.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The identifiers of the subnets for the directory servers.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The domain controller security group identifier for the directory.</p>
   * @public
   */
  SecurityGroupId?: string | undefined;

  /**
   * <p>The list of Availability Zones that the directory is in.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;
}

/**
 * <p>Describes the directory owner account details that have been shared to the directory
 *       consumer account.</p>
 * @public
 */
export interface OwnerDirectoryDescription {
  /**
   * <p>Identifier of the Managed Microsoft AD directory in the directory owner account.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>Identifier of the directory owner account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>IP address of the directory’s domain controllers.</p>
   * @public
   */
  DnsIpAddrs?: string[] | undefined;

  /**
   * <p>Information about the VPC settings for the directory.</p>
   * @public
   */
  VpcSettings?: DirectoryVpcSettingsDescription | undefined;

  /**
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS
   *       server.</p>
   * @public
   */
  RadiusSettings?: RadiusSettings | undefined;

  /**
   * <p>Information about the status of the RADIUS server.</p>
   * @public
   */
  RadiusStatus?: RadiusStatus | undefined;
}

/**
 * <p>Provides information about the Regions that are configured for multi-Region
 *       replication.</p>
 * @public
 */
export interface RegionsInfo {
  /**
   * <p>The Region where the Managed Microsoft AD directory was originally created.</p>
   * @public
   */
  PrimaryRegion?: string | undefined;

  /**
   * <p>Lists the Regions where the directory has been replicated, excluding the primary
   *       Region.</p>
   * @public
   */
  AdditionalRegions?: string[] | undefined;
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
  UPDATING: "Updating",
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
 * <p>Contains information about an Directory Service directory.</p>
 * @public
 */
export interface DirectoryDescription {
  /**
   * <p>The directory identifier.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The fully qualified name of the directory.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The short name of the directory.</p>
   * @public
   */
  ShortName?: string | undefined;

  /**
   * <p>The directory size.</p>
   * @public
   */
  Size?: DirectorySize | undefined;

  /**
   * <p>The edition associated with this directory.</p>
   * @public
   */
  Edition?: DirectoryEdition | undefined;

  /**
   * <p>The alias for the directory. If no alias has been created for the directory, the alias is
   *       the directory identifier, such as <code>d-XXXXXXXXXX</code>.</p>
   * @public
   */
  Alias?: string | undefined;

  /**
   * <p>The access URL for the directory, such as
   *         <code>http://<alias>.awsapps.com</code>. If no alias has been created for the
   *       directory, <code><alias></code> is the directory identifier, such as
   *         <code>d-XXXXXXXXXX</code>.</p>
   * @public
   */
  AccessUrl?: string | undefined;

  /**
   * <p>The description for the directory.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The IP addresses of the DNS servers for the directory. For a Simple AD or Microsoft AD
   *       directory, these are the IP addresses of the Simple AD or Microsoft AD directory servers.
   *       For an AD Connector directory, these are the IP addresses of the DNS servers or domain
   *       controllers in your self-managed directory to which the AD Connector is connected.</p>
   * @public
   */
  DnsIpAddrs?: string[] | undefined;

  /**
   * <p>The current stage of the directory.</p>
   * @public
   */
  Stage?: DirectoryStage | undefined;

  /**
   * <p>Current directory status of the shared Managed Microsoft AD directory.</p>
   * @public
   */
  ShareStatus?: ShareStatus | undefined;

  /**
   * <p>The method used when sharing a directory to determine whether the directory should be
   *       shared within your Amazon Web Services organization (<code>ORGANIZATIONS</code>) or with any Amazon Web Services account
   *       by sending a shared directory request (<code>HANDSHAKE</code>).</p>
   * @public
   */
  ShareMethod?: ShareMethod | undefined;

  /**
   * <p>A directory share request that is sent by the directory owner to the directory consumer.
   *       The request includes a typed message to help the directory consumer administrator determine
   *       whether to approve or reject the share invitation.</p>
   * @public
   */
  ShareNotes?: string | undefined;

  /**
   * <p>Specifies when the directory was created.</p>
   * @public
   */
  LaunchTime?: Date | undefined;

  /**
   * <p>The date and time that the stage was last updated.</p>
   * @public
   */
  StageLastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The directory type.</p>
   * @public
   */
  Type?: DirectoryType | undefined;

  /**
   * <p>A <a>DirectoryVpcSettingsDescription</a> object that contains additional
   *       information about a directory. This member is only present if the directory is a Simple AD
   *       or Managed Microsoft AD directory.</p>
   * @public
   */
  VpcSettings?: DirectoryVpcSettingsDescription | undefined;

  /**
   * <p>A <a>DirectoryConnectSettingsDescription</a> object that contains additional
   *       information about an AD Connector directory. This member is only present if the directory is
   *       an AD Connector directory.</p>
   * @public
   */
  ConnectSettings?: DirectoryConnectSettingsDescription | undefined;

  /**
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS
   *       server configured for this directory.</p>
   * @public
   */
  RadiusSettings?: RadiusSettings | undefined;

  /**
   * <p>The status of the RADIUS MFA server connection.</p>
   * @public
   */
  RadiusStatus?: RadiusStatus | undefined;

  /**
   * <p>Additional information about the directory stage.</p>
   * @public
   */
  StageReason?: string | undefined;

  /**
   * <p>Indicates if single sign-on is enabled for the directory. For more information, see <a>EnableSso</a> and <a>DisableSso</a>.</p>
   * @public
   */
  SsoEnabled?: boolean | undefined;

  /**
   * <p>The desired number of domain controllers in the directory if the directory is Microsoft
   *       AD.</p>
   * @public
   */
  DesiredNumberOfDomainControllers?: number | undefined;

  /**
   * <p>Describes the Managed Microsoft AD directory in the directory owner account.</p>
   * @public
   */
  OwnerDirectoryDescription?: OwnerDirectoryDescription | undefined;

  /**
   * <p>Lists the Regions where the directory has replicated.</p>
   * @public
   */
  RegionsInfo?: RegionsInfo | undefined;

  /**
   * <p>The operating system (OS) version of the directory.</p>
   * @public
   */
  OsVersion?: OSVersion | undefined;

  /**
   * <p>Contains information about the hybrid directory configuration for the directory,
   *             including Amazon Web Services System Manager managed node identifiers and DNS IPs.</p>
   * @public
   */
  HybridSettings?: HybridSettingsDescription | undefined;
}

/**
 * <p>Contains the results of the <a>DescribeDirectories</a> operation.</p>
 * @public
 */
export interface DescribeDirectoriesResult {
  /**
   * <p>The list of available <a>DirectoryDescription</a> objects that were retrieved.</p>
   *          <p>It is possible that this list contains less than the number of items specified in the
   *         <code>Limit</code> member of the request. This occurs if there are less than the requested
   *       number of items left to retrieve, or if the limitations of the operation have been
   *       exceeded.</p>
   * @public
   */
  DirectoryDescriptions?: DirectoryDescription[] | undefined;

  /**
   * <p>If not null, more results are available. Pass this value for the <code>NextToken</code>
   *       parameter in a subsequent call to <a>DescribeDirectories</a> to retrieve the next
   *       set of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The <code>NextToken</code> value is not valid.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
export interface DescribeDirectoryDataAccessRequest {
  /**
   * <p>The directory identifier.</p>
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectoryDataAccessResult {
  /**
   * <p>The current status of data access through the Directory Service Data API.</p>
   * @public
   */
  DataAccessStatus?: DataAccessStatus | undefined;
}

/**
 * @public
 */
export interface DescribeDomainControllersRequest {
  /**
   * <p>Identifier of the directory for which to retrieve the domain controller
   *       information.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>A list of identifiers for the domain controllers whose information will be
   *       provided.</p>
   * @public
   */
  DomainControllerIds?: string[] | undefined;

  /**
   * <p>The <i>DescribeDomainControllers.NextToken</i> value from a previous call
   *       to <a>DescribeDomainControllers</a>. Pass null if this is the first call.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  Limit?: number | undefined;
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
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type DomainControllerStatus = (typeof DomainControllerStatus)[keyof typeof DomainControllerStatus];

/**
 * <p>Contains information about the domain controllers for a specified directory.</p>
 * @public
 */
export interface DomainController {
  /**
   * <p>Identifier of the directory where the domain controller resides.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>Identifies a specific domain controller in the directory.</p>
   * @public
   */
  DomainControllerId?: string | undefined;

  /**
   * <p>The IP address of the domain controller.</p>
   * @public
   */
  DnsIpAddr?: string | undefined;

  /**
   * <p>The identifier of the VPC that contains the domain controller.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Identifier of the subnet in the VPC that contains the domain controller.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The Availability Zone where the domain controller is located.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The status of the domain controller.</p>
   * @public
   */
  Status?: DomainControllerStatus | undefined;

  /**
   * <p>A description of the domain controller state.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>Specifies when the domain controller was created.</p>
   * @public
   */
  LaunchTime?: Date | undefined;

  /**
   * <p>The date and time that the status was last updated.</p>
   * @public
   */
  StatusLastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDomainControllersResult {
  /**
   * <p>List of the <a>DomainController</a> objects that were retrieved.</p>
   * @public
   */
  DomainControllers?: DomainController[] | undefined;

  /**
   * <p>If not null, more results are available. Pass this value for the <code>NextToken</code>
   *       parameter in a subsequent call to <a>DescribeDomainControllers</a> retrieve the
   *       next set of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes event topics.</p>
 * @public
 */
export interface DescribeEventTopicsRequest {
  /**
   * <p>The Directory ID for which to get the list of associated Amazon SNS topics. If this member
   *       is null, associations for all Directory IDs are returned.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>A list of Amazon SNS topic names for which to obtain the information. If this member is
   *       null, all associations for the specified Directory ID are returned.</p>
   *          <p>An empty list results in an <code>InvalidParameterException</code> being
   *       thrown.</p>
   * @public
   */
  TopicNames?: string[] | undefined;
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
 * <p>Information about Amazon SNS topic and Directory Service directory associations.</p>
 * @public
 */
export interface EventTopic {
  /**
   * <p>The Directory ID of an Directory Service directory that will publish status messages to an Amazon SNS
   *       topic.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The name of an Amazon SNS topic the receives status messages from the directory.</p>
   * @public
   */
  TopicName?: string | undefined;

  /**
   * <p>The Amazon SNS topic ARN (Amazon Resource Name).</p>
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * <p>The date and time of when you associated your directory with the Amazon SNS topic.</p>
   * @public
   */
  CreatedDateTime?: Date | undefined;

  /**
   * <p>The topic registration status.</p>
   * @public
   */
  Status?: TopicStatus | undefined;
}

/**
 * <p>The result of a DescribeEventTopic request.</p>
 * @public
 */
export interface DescribeEventTopicsResult {
  /**
   * <p>A list of Amazon SNS topic names that receive status messages from the specified Directory
   *       ID.</p>
   * @public
   */
  EventTopics?: EventTopic[] | undefined;
}

/**
 * @public
 * @enum
 */
export const HybridUpdateType = {
  HYBRID_ADMINISTRATOR_ACCOUNT: "HybridAdministratorAccount",
  SELF_MANAGED_INSTANCES: "SelfManagedInstances",
} as const;

/**
 * @public
 */
export type HybridUpdateType = (typeof HybridUpdateType)[keyof typeof HybridUpdateType];

/**
 * @public
 */
export interface DescribeHybridADUpdateRequest {
  /**
   * <p>The identifier of the hybrid directory for which to retrieve update
   *             information.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The type of update activities to retrieve. Valid values include
   *                 <code>SelfManagedInstances</code> and
   *             <code>HybridAdministratorAccount</code>.</p>
   * @public
   */
  UpdateType?: HybridUpdateType | undefined;

  /**
   * <p>The pagination token from a previous request to <a>DescribeHybridADUpdate</a>. Pass null if this is the first request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the configuration values for a hybrid directory update, including Amazon Web Services
 *             System Manager managed node and DNS information.</p>
 * @public
 */
export interface HybridUpdateValue {
  /**
   * <p>The identifiers of the self-managed instances with SSM in the hybrid directory
   *             configuration.</p>
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * <p>The IP addresses of the DNS servers or domain controllers in the hybrid directory
   *             configuration.</p>
   * @public
   */
  DnsIps?: string[] | undefined;
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
 * <p>Contains detailed information about a specific update activity for a hybrid directory
 *             component.</p>
 * @public
 */
export interface HybridUpdateInfoEntry {
  /**
   * <p>The current status of the update activity. Valid values include <code>UPDATED</code>,
   *                 <code>UPDATING</code>, and <code>UPDATE_FAILED</code>.</p>
   * @public
   */
  Status?: UpdateStatus | undefined;

  /**
   * <p>A human-readable description of the update status, including any error details or
   *             progress information.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>Specifies if the update was initiated by the customer or Amazon Web Services.</p>
   * @public
   */
  InitiatedBy?: string | undefined;

  /**
   * <p>The new configuration values being applied in this update.</p>
   * @public
   */
  NewValue?: HybridUpdateValue | undefined;

  /**
   * <p>The previous configuration values before this update was applied.</p>
   * @public
   */
  PreviousValue?: HybridUpdateValue | undefined;

  /**
   * <p>The date and time when the update activity was initiated.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time when the update activity status was last updated.</p>
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The identifier of the assessment performed to validate this update
   *             configuration.</p>
   * @public
   */
  AssessmentId?: string | undefined;
}

/**
 * <p>Contains information about update activities for different components of a hybrid
 *             directory.</p>
 * @public
 */
export interface HybridUpdateActivities {
  /**
   * <p>A list of update activities related to the self-managed instances with SSM in the
   *             self-managed instances with SSM hybrid directory configuration.</p>
   * @public
   */
  SelfManagedInstances?: HybridUpdateInfoEntry[] | undefined;

  /**
   * <p>A list of update activities related to hybrid directory administrator account
   *             changes.</p>
   * @public
   */
  HybridAdministratorAccount?: HybridUpdateInfoEntry[] | undefined;
}

/**
 * @public
 */
export interface DescribeHybridADUpdateResult {
  /**
   * <p>Information about update activities for the hybrid directory, organized by update
   *             type.</p>
   * @public
   */
  UpdateActivities?: HybridUpdateActivities | undefined;

  /**
   * <p>If not null, more results are available. Pass this value for the
   *                 <code>NextToken</code> parameter in a subsequent request to retrieve the next set of
   *             items.</p>
   * @public
   */
  NextToken?: string | undefined;
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
   * <p>The identifier of the directory.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The type of LDAP security to enable. Currently only the value <code>Client</code> is
   *       supported.</p>
   * @public
   */
  Type?: LDAPSType | undefined;

  /**
   * <p>The type of next token used for pagination.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the number of items that should be displayed on one page.</p>
   * @public
   */
  Limit?: number | undefined;
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
 * <p>Contains general information about the LDAPS settings.</p>
 * @public
 */
export interface LDAPSSettingInfo {
  /**
   * <p>The state of the LDAPS settings.</p>
   * @public
   */
  LDAPSStatus?: LDAPSStatus | undefined;

  /**
   * <p>Describes a state change for LDAPS.</p>
   * @public
   */
  LDAPSStatusReason?: string | undefined;

  /**
   * <p>The date and time when the LDAPS settings were last updated.</p>
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeLDAPSSettingsResult {
  /**
   * <p>Information about LDAP security for the specified directory, including status of
   *       enablement, state last updated date time, and the reason for the state.</p>
   * @public
   */
  LDAPSSettingsInfo?: LDAPSSettingInfo[] | undefined;

  /**
   * <p>The next token used to retrieve the LDAPS settings if the number of setting types exceeds
   *       page limit and there is another page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegionsRequest {
  /**
   * <p>The identifier of the directory.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The name of the Region. For example, <code>us-east-1</code>.</p>
   * @public
   */
  RegionName?: string | undefined;

  /**
   * <p>The <code>DescribeRegionsResult.NextToken</code> value from a previous call to <a>DescribeRegions</a>. Pass null if this is the first call.</p>
   * @public
   */
  NextToken?: string | undefined;
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
 * <p>The replicated Region information for a directory.</p>
 * @public
 */
export interface RegionDescription {
  /**
   * <p>The identifier of the directory.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The name of the Region. For example, <code>us-east-1</code>.</p>
   * @public
   */
  RegionName?: string | undefined;

  /**
   * <p>Specifies whether the Region is the primary Region or an additional Region.</p>
   * @public
   */
  RegionType?: RegionType | undefined;

  /**
   * <p>The status of the replication process for the specified Region.</p>
   * @public
   */
  Status?: DirectoryStage | undefined;

  /**
   * <p>Contains VPC information for the <a>CreateDirectory</a>, <a>CreateMicrosoftAD</a>, or <a>CreateHybridAD</a> operation.</p>
   * @public
   */
  VpcSettings?: DirectoryVpcSettings | undefined;

  /**
   * <p>The desired number of domain controllers in the specified Region for the specified
   *       directory.</p>
   * @public
   */
  DesiredNumberOfDomainControllers?: number | undefined;

  /**
   * <p>Specifies when the Region replication began.</p>
   * @public
   */
  LaunchTime?: Date | undefined;

  /**
   * <p>The date and time that the Region status was last updated.</p>
   * @public
   */
  StatusLastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The date and time that the Region description was last updated.</p>
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRegionsResult {
  /**
   * <p>List of Region information related to the directory for each replicated Region.</p>
   * @public
   */
  RegionsDescription?: RegionDescription[] | undefined;

  /**
   * <p>If not null, more results are available. Pass this value for the <code>NextToken</code>
   *       parameter in a subsequent call to <a>DescribeRegions</a> to retrieve the next set
   *       of items.</p>
   * @public
   */
  NextToken?: string | undefined;
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
   * <p>The identifier of the directory for which to retrieve information.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The status of the directory settings for which to retrieve information.</p>
   * @public
   */
  Status?: DirectoryConfigurationStatus | undefined;

  /**
   * <p>The <code>DescribeSettingsResult.NextToken</code> value from a previous call to <a>DescribeSettings</a>. Pass null if this is the first call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains information about the specified configurable setting for a directory.</p>
 * @public
 */
export interface SettingEntry {
  /**
   * <p>The type, or category, of a directory setting. Similar settings have the same type. For
   *       example, <code>Protocol</code>, <code>Cipher</code>, or <code>Certificate-Based
   *         Authentication</code>.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The name of the directory setting. For example:</p>
   *          <p>
   *             <code>TLS_1_0</code>
   *          </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The valid range of values for the directory setting. These values depend on the
   *         <code>DataType</code> of your directory.</p>
   * @public
   */
  AllowedValues?: string | undefined;

  /**
   * <p>The value of the directory setting that is applied to the directory.</p>
   * @public
   */
  AppliedValue?: string | undefined;

  /**
   * <p>The value that was last requested for the directory setting.</p>
   * @public
   */
  RequestedValue?: string | undefined;

  /**
   * <p>The overall status of the request to update the directory setting request. If the
   *       directory setting is deployed in more than one region, and the request fails in any region,
   *       the overall status is <code>Failed</code>.</p>
   * @public
   */
  RequestStatus?: DirectoryConfigurationStatus | undefined;

  /**
   * <p>Details about the status of the request to update the directory setting. If the directory
   *       setting is deployed in more than one region, status is returned for the request in each region
   *       where the setting is deployed.</p>
   * @public
   */
  RequestDetailedStatus?: Record<string, DirectoryConfigurationStatus> | undefined;

  /**
   * <p>The last status message for the directory status request.</p>
   * @public
   */
  RequestStatusMessage?: string | undefined;

  /**
   * <p>The date and time when the directory setting was last updated.</p>
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The date and time when the request to update a directory setting was last
   *       submitted.</p>
   * @public
   */
  LastRequestedDateTime?: Date | undefined;

  /**
   * <p>The data type of a directory setting. This is used to define the
   *         <code>AllowedValues</code> of a setting. For example a data type can be
   *       <code>Boolean</code>, <code>DurationInSeconds</code>, or <code>Enum</code>.</p>
   * @public
   */
  DataType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSettingsResult {
  /**
   * <p>The identifier of the directory.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The list of <a>SettingEntry</a> objects that were retrieved.</p>
   *          <p>It is possible that this list contains less than the number of items specified in the
   *         <code>Limit</code> member of the request. This occurs if there are less than the requested
   *       number of items left to retrieve, or if the limitations of the operation have been
   *       exceeded.</p>
   * @public
   */
  SettingEntries?: SettingEntry[] | undefined;

  /**
   * <p>If not null, token that indicates that more results are available. Pass this value for the
   *         <code>NextToken</code> parameter in a subsequent call to <code>DescribeSettings</code> to
   *       retrieve the next set of items. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSharedDirectoriesRequest {
  /**
   * <p>Returns the identifier of the directory in the directory owner account. </p>
   * @public
   */
  OwnerDirectoryId: string | undefined;

  /**
   * <p>A list of identifiers of all shared directories in your account. </p>
   * @public
   */
  SharedDirectoryIds?: string[] | undefined;

  /**
   * <p>The <code>DescribeSharedDirectoriesResult.NextToken</code> value from a previous call to
   *         <a>DescribeSharedDirectories</a>. Pass null if this is the first call. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of shared directories to return in the response object.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeSharedDirectoriesResult {
  /**
   * <p>A list of all shared directories in your account.</p>
   * @public
   */
  SharedDirectories?: SharedDirectory[] | undefined;

  /**
   * <p>If not null, token that indicates that more results are available. Pass this value for the
   *         <code>NextToken</code> parameter in a subsequent call to <a>DescribeSharedDirectories</a> to retrieve the next set of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the inputs for the <a>DescribeSnapshots</a> operation.</p>
 * @public
 */
export interface DescribeSnapshotsRequest {
  /**
   * <p>The identifier of the directory for which to retrieve snapshot information.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>A list of identifiers of the snapshots to obtain the information for. If this member is
   *          null or empty, all snapshots are returned using the <i>Limit</i> and <i>NextToken</i>
   *          members.</p>
   * @public
   */
  SnapshotIds?: string[] | undefined;

  /**
   * <p>The <i>DescribeSnapshotsResult.NextToken</i> value from a previous call to
   *             <a>DescribeSnapshots</a>. Pass null if this is the first call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects to return.</p>
   * @public
   */
  Limit?: number | undefined;
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
 * <p>Describes a directory snapshot.</p>
 * @public
 */
export interface Snapshot {
  /**
   * <p>The directory identifier.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The snapshot identifier.</p>
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * <p>The snapshot type.</p>
   * @public
   */
  Type?: SnapshotType | undefined;

  /**
   * <p>The descriptive name of the snapshot.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The snapshot status.</p>
   * @public
   */
  Status?: SnapshotStatus | undefined;

  /**
   * <p>The date and time that the snapshot was taken.</p>
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * <p>Contains the results of the <a>DescribeSnapshots</a> operation.</p>
 * @public
 */
export interface DescribeSnapshotsResult {
  /**
   * <p>The list of <a>Snapshot</a> objects that were retrieved.</p>
   *          <p>It is possible that this list contains less than the number of items specified in the
   *             <i>Limit</i> member of the request. This occurs if there are less than the requested
   *          number of items left to retrieve, or if the limitations of the operation have been
   *          exceeded.</p>
   * @public
   */
  Snapshots?: Snapshot[] | undefined;

  /**
   * <p>If not null, more results are available. Pass this value in the <i>NextToken</i> member of
   *          a subsequent call to <a>DescribeSnapshots</a>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes the trust relationships for a particular Managed Microsoft AD directory. If no input
 *       parameters are provided, such as directory ID or trust ID, this request describes all the
 *       trust relationships.</p>
 * @public
 */
export interface DescribeTrustsRequest {
  /**
   * <p>The Directory ID of the Amazon Web Services directory that is a part of the requested trust
   *       relationship.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>A list of identifiers of the trust relationships for which to obtain the information. If
   *       this member is null, all trust relationships that belong to the current account are
   *       returned.</p>
   *          <p>An empty list results in an <code>InvalidParameterException</code> being thrown.</p>
   * @public
   */
  TrustIds?: string[] | undefined;

  /**
   * <p>The <i>DescribeTrustsResult.NextToken</i> value from a previous call to
   *         <a>DescribeTrusts</a>. Pass null if this is the first call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects to return.</p>
   * @public
   */
  Limit?: number | undefined;
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
 * <p>Describes a trust relationship between an Managed Microsoft AD directory and an external
 *       domain.</p>
 * @public
 */
export interface Trust {
  /**
   * <p>The Directory ID of the Amazon Web Services directory involved in the trust relationship.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The unique ID of the trust relationship.</p>
   * @public
   */
  TrustId?: string | undefined;

  /**
   * <p>The Fully Qualified Domain Name (FQDN) of the external domain involved in the trust
   *       relationship.</p>
   * @public
   */
  RemoteDomainName?: string | undefined;

  /**
   * <p>The trust relationship type. <code>Forest</code> is the default.</p>
   * @public
   */
  TrustType?: TrustType | undefined;

  /**
   * <p>The trust relationship direction.</p>
   * @public
   */
  TrustDirection?: TrustDirection | undefined;

  /**
   * <p>The trust relationship state.</p>
   * @public
   */
  TrustState?: TrustState | undefined;

  /**
   * <p>The date and time that the trust relationship was created.</p>
   * @public
   */
  CreatedDateTime?: Date | undefined;

  /**
   * <p>The date and time that the trust relationship was last updated.</p>
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The date and time that the TrustState was last updated.</p>
   * @public
   */
  StateLastUpdatedDateTime?: Date | undefined;

  /**
   * <p>The reason for the TrustState.</p>
   * @public
   */
  TrustStateReason?: string | undefined;

  /**
   * <p>Current state of selective authentication for the trust.</p>
   * @public
   */
  SelectiveAuth?: SelectiveAuth | undefined;
}

/**
 * <p>The result of a DescribeTrust request.</p>
 * @public
 */
export interface DescribeTrustsResult {
  /**
   * <p>The list of Trust objects that were retrieved.</p>
   *          <p>It is possible that this list contains less than the number of items specified in the
   *         <i>Limit</i> member of the request. This occurs if there are less than the
   *       requested number of items left to retrieve, or if the limitations of the operation have been
   *       exceeded.</p>
   * @public
   */
  Trusts?: Trust[] | undefined;

  /**
   * <p>If not null, more results are available. Pass this value for the
   *         <i>NextToken</i> parameter in a subsequent call to <a>DescribeTrusts</a> to retrieve the next set of items.</p>
   * @public
   */
  NextToken?: string | undefined;
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
   * <p> The unique identifier of the directory. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The type of updates you want to describe for the directory. </p>
   * @public
   */
  UpdateType: UpdateType | undefined;

  /**
   * <p> The name of the Region. </p>
   * @public
   */
  RegionName?: string | undefined;

  /**
   * <p> The <code>DescribeUpdateDirectoryResult</code>. NextToken value from a previous call to
   *         <a>DescribeUpdateDirectory</a>. Pass null if this is the first call. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> OS version that the directory needs to be updated to. </p>
 * @public
 */
export interface OSUpdateSettings {
  /**
   * <p> OS version that the directory needs to be updated to. </p>
   * @public
   */
  OSVersion?: OSVersion | undefined;
}

/**
 * <p> The value for a given type of <code>UpdateSettings</code>. </p>
 * @public
 */
export interface UpdateValue {
  /**
   * <p> The OS update related settings. </p>
   * @public
   */
  OSUpdateSettings?: OSUpdateSettings | undefined;
}

/**
 * <p> An entry of update information related to a requested update type. </p>
 * @public
 */
export interface UpdateInfoEntry {
  /**
   * <p> The name of the Region. </p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p> The status of the update performed on the directory. </p>
   * @public
   */
  Status?: UpdateStatus | undefined;

  /**
   * <p> The reason for the current status of the update type activity. </p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p> This specifies if the update was initiated by the customer or by the service team.
   *     </p>
   * @public
   */
  InitiatedBy?: string | undefined;

  /**
   * <p> The new value of the target setting. </p>
   * @public
   */
  NewValue?: UpdateValue | undefined;

  /**
   * <p> The old value of the target setting. </p>
   * @public
   */
  PreviousValue?: UpdateValue | undefined;

  /**
   * <p> The start time of the <code>UpdateDirectorySetup</code> for the particular type. </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p> The last updated date and time of a particular directory setting. </p>
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeUpdateDirectoryResult {
  /**
   * <p> The list of update activities on a directory for the requested update type. </p>
   * @public
   */
  UpdateActivities?: UpdateInfoEntry[] | undefined;

  /**
   * <p> If not null, more results are available. Pass this value for the <code>NextToken</code>
   *       parameter. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> The directory is already updated to desired update type settings. </p>
 * @public
 */
export class DirectoryInDesiredStateException extends __BaseException {
  readonly name: "DirectoryInDesiredStateException" = "DirectoryInDesiredStateException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export interface DirectoryLimits {
  /**
   * <p>The maximum number of cloud directories allowed in the Region.</p>
   * @public
   */
  CloudOnlyDirectoriesLimit?: number | undefined;

  /**
   * <p>The current number of cloud directories in the Region.</p>
   * @public
   */
  CloudOnlyDirectoriesCurrentCount?: number | undefined;

  /**
   * <p>Indicates if the cloud directory limit has been reached.</p>
   * @public
   */
  CloudOnlyDirectoriesLimitReached?: boolean | undefined;

  /**
   * <p>The maximum number of Managed Microsoft AD directories allowed in the region.</p>
   * @public
   */
  CloudOnlyMicrosoftADLimit?: number | undefined;

  /**
   * <p>The current number of Managed Microsoft AD directories in the region.</p>
   * @public
   */
  CloudOnlyMicrosoftADCurrentCount?: number | undefined;

  /**
   * <p>Indicates if the Managed Microsoft AD directory limit has been reached.</p>
   * @public
   */
  CloudOnlyMicrosoftADLimitReached?: boolean | undefined;

  /**
   * <p>The maximum number of connected directories allowed in the Region.</p>
   * @public
   */
  ConnectedDirectoriesLimit?: number | undefined;

  /**
   * <p>The current number of connected directories in the Region.</p>
   * @public
   */
  ConnectedDirectoriesCurrentCount?: number | undefined;

  /**
   * <p>Indicates if the connected directory limit has been reached.</p>
   * @public
   */
  ConnectedDirectoriesLimitReached?: boolean | undefined;
}

/**
 * <p>The specified directory has not been shared with this Amazon Web Services account.</p>
 * @public
 */
export class DirectoryNotSharedException extends __BaseException {
  readonly name: "DirectoryNotSharedException" = "DirectoryNotSharedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>A disable operation for CA enrollment policy is already in progress for this directory.</p>
 * @public
 */
export class DisableAlreadyInProgressException extends __BaseException {
  readonly name: "DisableAlreadyInProgressException" = "DisableAlreadyInProgressException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DisableAlreadyInProgressException, __BaseException>) {
    super({
      name: "DisableAlreadyInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DisableAlreadyInProgressException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>Contains the inputs for the <a>DisableCAEnrollmentPolicy</a> operation.</p>
 * @public
 */
export interface DisableCAEnrollmentPolicyRequest {
  /**
   * <p>The identifier of the directory for which to disable the CA enrollment policy.</p>
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * <p>Contains the results of the <a>DisableCAEnrollmentPolicy</a> operation.</p>
 * @public
 */
export interface DisableCAEnrollmentPolicyResult {}

/**
 * @public
 */
export interface DisableClientAuthenticationRequest {
  /**
   * <p>The identifier of the directory </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The type of client authentication to disable. Currently the only parameter
   *         <code>"SmartCard"</code> is supported.</p>
   * @public
   */
  Type: ClientAuthenticationType | undefined;
}

/**
 * @public
 */
export interface DisableClientAuthenticationResult {}

/**
 * <p>Client authentication is already enabled.</p>
 * @public
 */
export class InvalidClientAuthStatusException extends __BaseException {
  readonly name: "InvalidClientAuthStatusException" = "InvalidClientAuthStatusException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
export interface DisableDirectoryDataAccessRequest {
  /**
   * <p>The directory identifier.</p>
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * @public
 */
export interface DisableDirectoryDataAccessResult {}

/**
 * @public
 */
export interface DisableLDAPSRequest {
  /**
   * <p>The identifier of the directory.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The type of LDAP security to enable. Currently only the value <code>Client</code> is
   *       supported.</p>
   * @public
   */
  Type: LDAPSType | undefined;
}

/**
 * @public
 */
export interface DisableLDAPSResult {}

/**
 * <p>The LDAP activities could not be performed because they are limited by the LDAPS
 *       status.</p>
 * @public
 */
export class InvalidLDAPSStatusException extends __BaseException {
  readonly name: "InvalidLDAPSStatusException" = "InvalidLDAPSStatusException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export interface DisableRadiusRequest {
  /**
   * <p>The identifier of the directory for which to disable MFA.</p>
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * <p>Contains the results of the <a>DisableRadius</a> operation.</p>
 * @public
 */
export interface DisableRadiusResult {}

/**
 * <p>Contains the inputs for the <a>DisableSso</a> operation.</p>
 * @public
 */
export interface DisableSsoRequest {
  /**
   * <p>The identifier of the directory for which to disable single-sign on.</p>
   * @public
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
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The password of an alternate account to use to disable single-sign on. This is only used
   *       for AD Connector directories. For more information, see the <i>UserName</i>
   *       parameter.</p>
   * @public
   */
  Password?: string | undefined;
}

/**
 * <p>Contains the results of the <a>DisableSso</a> operation.</p>
 * @public
 */
export interface DisableSsoResult {}

/**
 * <p>An enable operation for CA enrollment policy is already in progress for this directory.</p>
 * @public
 */
export class EnableAlreadyInProgressException extends __BaseException {
  readonly name: "EnableAlreadyInProgressException" = "EnableAlreadyInProgressException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EnableAlreadyInProgressException, __BaseException>) {
    super({
      name: "EnableAlreadyInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EnableAlreadyInProgressException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>Contains the inputs for the <a>EnableCAEnrollmentPolicy</a> operation.</p>
 * @public
 */
export interface EnableCAEnrollmentPolicyRequest {
  /**
   * <p>The identifier of the directory for which to enable the CA enrollment policy.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Private Certificate Authority (PCA) connector to use
   *       for automatic certificate enrollment. This connector must be properly configured and
   *       accessible from the directory.</p>
   *          <p>The ARN format is:
   *       <code>arn:aws:pca-connector-ad:<i>region</i>:<i>account-id</i>:connector/<i>connector-id</i>
   *             </code>
   *          </p>
   * @public
   */
  PcaConnectorArn: string | undefined;
}

/**
 * <p>Contains the results of the <a>EnableCAEnrollmentPolicy</a> operation.</p>
 * @public
 */
export interface EnableCAEnrollmentPolicyResult {}

/**
 * @public
 */
export interface EnableClientAuthenticationRequest {
  /**
   * <p>The identifier of the specified directory. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The type of client authentication to enable. Currently only the value
   *         <code>SmartCard</code> is supported. Smart card authentication in AD Connector requires
   *       that you enable Kerberos Constrained Delegation for the Service User to the LDAP service in
   *       your self-managed AD. </p>
   * @public
   */
  Type: ClientAuthenticationType | undefined;
}

/**
 * @public
 */
export interface EnableClientAuthenticationResult {}

/**
 * <p>Client authentication setup could not be completed because at least one valid certificate
 *       must be registered in the system.</p>
 * @public
 */
export class NoAvailableCertificateException extends __BaseException {
  readonly name: "NoAvailableCertificateException" = "NoAvailableCertificateException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
export interface EnableDirectoryDataAccessRequest {
  /**
   * <p>The directory identifier.</p>
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * @public
 */
export interface EnableDirectoryDataAccessResult {}

/**
 * @public
 */
export interface EnableLDAPSRequest {
  /**
   * <p>The identifier of the directory.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The type of LDAP security to enable. Currently only the value <code>Client</code> is
   *       supported.</p>
   * @public
   */
  Type: LDAPSType | undefined;
}

/**
 * @public
 */
export interface EnableLDAPSResult {}

/**
 * <p>Contains the inputs for the <a>EnableRadius</a> operation.</p>
 * @public
 */
export interface EnableRadiusRequest {
  /**
   * <p>The identifier of the directory for which to enable MFA.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS
   *          server.</p>
   * @public
   */
  RadiusSettings: RadiusSettings | undefined;
}

/**
 * <p>Contains the results of the <a>EnableRadius</a> operation.</p>
 * @public
 */
export interface EnableRadiusResult {}

/**
 * <p>Contains the inputs for the <a>EnableSso</a> operation.</p>
 * @public
 */
export interface EnableSsoRequest {
  /**
   * <p>The identifier of the directory for which to enable single-sign on.</p>
   * @public
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
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The password of an alternate account to use to enable single-sign on. This is only used
   *       for AD Connector directories. For more information, see the <i>UserName</i>
   *       parameter.</p>
   * @public
   */
  Password?: string | undefined;
}

/**
 * <p>Contains the results of the <a>EnableSso</a> operation.</p>
 * @public
 */
export interface EnableSsoResult {}

/**
 * <p>Contains the inputs for the <a>GetDirectoryLimits</a> operation.</p>
 * @public
 */
export interface GetDirectoryLimitsRequest {}

/**
 * <p>Contains the results of the <a>GetDirectoryLimits</a> operation.</p>
 * @public
 */
export interface GetDirectoryLimitsResult {
  /**
   * <p>A <a>DirectoryLimits</a> object that contains the directory limits for the
   *       current Region.</p>
   * @public
   */
  DirectoryLimits?: DirectoryLimits | undefined;
}

/**
 * <p>Contains the inputs for the <a>GetSnapshotLimits</a> operation.</p>
 * @public
 */
export interface GetSnapshotLimitsRequest {
  /**
   * <p>Contains the identifier of the directory to obtain the limits for.</p>
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * <p>Contains manual snapshot limit information for a directory.</p>
 * @public
 */
export interface SnapshotLimits {
  /**
   * <p>The maximum number of manual snapshots allowed.</p>
   * @public
   */
  ManualSnapshotsLimit?: number | undefined;

  /**
   * <p>The current number of manual snapshots of the directory.</p>
   * @public
   */
  ManualSnapshotsCurrentCount?: number | undefined;

  /**
   * <p>Indicates if the manual snapshot limit has been reached.</p>
   * @public
   */
  ManualSnapshotsLimitReached?: boolean | undefined;
}

/**
 * <p>Contains the results of the <a>GetSnapshotLimits</a> operation.</p>
 * @public
 */
export interface GetSnapshotLimitsResult {
  /**
   * <p>A <a>SnapshotLimits</a> object that contains the manual snapshot limits for the specified
   *          directory.</p>
   * @public
   */
  SnapshotLimits?: SnapshotLimits | undefined;
}

/**
 * @public
 */
export interface ListADAssessmentsRequest {
  /**
   * <p>The identifier of the directory for which to list assessments. If not specified, all
   *             assessments in your account are returned.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The pagination token from a previous request to <a>ListADAssessments</a>.
   *             Pass null if this is the first request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of assessment summaries to return.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListADAssessmentsResult {
  /**
   * <p>A list of assessment summaries containing basic information about each directory
   *             assessment.</p>
   * @public
   */
  Assessments?: AssessmentSummary[] | undefined;

  /**
   * <p>If not null, more results are available. Pass this value for the
   *                 <code>NextToken</code> parameter in a subsequent request to retrieve the next set of
   *             items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCertificatesRequest {
  /**
   * <p>The identifier of the directory.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>A token for requesting another page of certificates if the <code>NextToken</code> response
   *       element indicates that more certificates are available. Use the value of the returned
   *         <code>NextToken</code> element in your request until the token comes back as
   *         <code>null</code>. Pass <code>null</code> if this is the first call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of items that should show up on one page</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListCertificatesResult {
  /**
   * <p>Indicates whether another page of certificates is available when the number of available
   *       certificates exceeds the page limit.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of certificates with basic details including certificate ID, certificate common
   *       name, certificate state.</p>
   * @public
   */
  CertificatesInfo?: CertificateInfo[] | undefined;
}

/**
 * @public
 */
export interface ListIpRoutesRequest {
  /**
   * <p>Identifier (ID) of the directory for which you want to retrieve the IP
   *          addresses.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The <i>ListIpRoutes.NextToken</i> value from a previous call to <a>ListIpRoutes</a>. Pass null if this is the first call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of items to return. If this value is zero, the maximum number of items
   *          is specified by the limitations of the operation.</p>
   * @public
   */
  Limit?: number | undefined;
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
 * <p>Information about one or more IP address blocks.</p>
 * @public
 */
export interface IpRouteInfo {
  /**
   * <p>Identifier (ID) of the directory associated with the IP addresses.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>IP address block in the <a>IpRoute</a>.</p>
   * @public
   */
  CidrIp?: string | undefined;

  /**
   * <p>The status of the IP address block.</p>
   * @public
   */
  IpRouteStatusMsg?: IpRouteStatusMsg | undefined;

  /**
   * <p>The date and time the address block was added to the directory.</p>
   * @public
   */
  AddedDateTime?: Date | undefined;

  /**
   * <p>The reason for the IpRouteStatusMsg.</p>
   * @public
   */
  IpRouteStatusReason?: string | undefined;

  /**
   * <p>Description of the <a>IpRouteInfo</a>.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListIpRoutesResult {
  /**
   * <p>A list of <a>IpRoute</a>s.</p>
   * @public
   */
  IpRoutesInfo?: IpRouteInfo[] | undefined;

  /**
   * <p>If not null, more results are available. Pass this value for the
   *             <i>NextToken</i> parameter in a subsequent call to <a>ListIpRoutes</a> to retrieve the next set of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLogSubscriptionsRequest {
  /**
   * <p>If a <i>DirectoryID</i> is provided, lists only the log subscription
   *       associated with that directory. If no <i>DirectoryId</i> is provided, lists all
   *       log subscriptions associated with your Amazon Web Services account. If there are no log subscriptions for
   *       the Amazon Web Services account or the directory, an empty list will be returned.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The token for the next set of items to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items returned.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>Represents a log subscription, which tracks real-time data from a chosen log group to a
 *       specified destination.</p>
 * @public
 */
export interface LogSubscription {
  /**
   * <p>Identifier (ID) of the directory that you want to associate with the log
   *       subscription.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The name of the log group.</p>
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * <p>The date and time that the log subscription was created.</p>
   * @public
   */
  SubscriptionCreatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListLogSubscriptionsResult {
  /**
   * <p>A list of active <a>LogSubscription</a> objects for calling the
   *       Amazon Web Services account.</p>
   * @public
   */
  LogSubscriptions?: LogSubscription[] | undefined;

  /**
   * <p>The token for the next set of items to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemaExtensionsRequest {
  /**
   * <p>The identifier of the directory from which to retrieve the schema extension
   *       information.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The <code>ListSchemaExtensions.NextToken</code> value from a previous call to
   *         <code>ListSchemaExtensions</code>. Pass null if this is the first call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  Limit?: number | undefined;
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
 * <p>Information about a schema extension.</p>
 * @public
 */
export interface SchemaExtensionInfo {
  /**
   * <p>The identifier of the directory to which the schema extension is applied.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The identifier of the schema extension.</p>
   * @public
   */
  SchemaExtensionId?: string | undefined;

  /**
   * <p>A description of the schema extension.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The current status of the schema extension.</p>
   * @public
   */
  SchemaExtensionStatus?: SchemaExtensionStatus | undefined;

  /**
   * <p>The reason for the <code>SchemaExtensionStatus</code>.</p>
   * @public
   */
  SchemaExtensionStatusReason?: string | undefined;

  /**
   * <p>The date and time that the schema extension started being applied to the
   *       directory.</p>
   * @public
   */
  StartDateTime?: Date | undefined;

  /**
   * <p>The date and time that the schema extension was completed.</p>
   * @public
   */
  EndDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSchemaExtensionsResult {
  /**
   * <p>Information about the schema extensions applied to the directory.</p>
   * @public
   */
  SchemaExtensionsInfo?: SchemaExtensionInfo[] | undefined;

  /**
   * <p>If not null, more results are available. Pass this value for the <code>NextToken</code>
   *       parameter in a subsequent call to <code>ListSchemaExtensions</code> to retrieve the next set
   *       of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>Identifier (ID) of the directory for which you want to retrieve tags.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * <p>List of tags returned by the ListTagsForResource operation.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The certificate PEM that was provided has incorrect encoding.</p>
 * @public
 */
export class InvalidCertificateException extends __BaseException {
  readonly name: "InvalidCertificateException" = "InvalidCertificateException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
   * <p>The identifier of the directory.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The certificate PEM string that needs to be registered.</p>
   * @public
   */
  CertificateData: string | undefined;

  /**
   * <p>The function that the registered certificate performs. Valid values include
   *         <code>ClientLDAPS</code> or <code>ClientCertAuth</code>. The default value is
   *         <code>ClientLDAPS</code>.</p>
   * @public
   */
  Type?: CertificateType | undefined;

  /**
   * <p>A <code>ClientCertAuthSettings</code> object that contains client certificate
   *       authentication settings.</p>
   * @public
   */
  ClientCertAuthSettings?: ClientCertAuthSettings | undefined;
}

/**
 * @public
 */
export interface RegisterCertificateResult {
  /**
   * <p>The identifier of the certificate.</p>
   * @public
   */
  CertificateId?: string | undefined;
}

/**
 * <p>Registers a new event topic.</p>
 * @public
 */
export interface RegisterEventTopicRequest {
  /**
   * <p>The Directory ID that will publish status messages to the Amazon SNS topic.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The Amazon SNS topic name to which the directory will publish status messages. This Amazon SNS
   *       topic must be in the same region as the specified Directory ID.</p>
   * @public
   */
  TopicName: string | undefined;
}

/**
 * <p>The result of a RegisterEventTopic request.</p>
 * @public
 */
export interface RegisterEventTopicResult {}

/**
 * @public
 */
export interface RejectSharedDirectoryRequest {
  /**
   * <p>Identifier of the shared directory in the directory consumer account. This identifier is
   *       different for each directory owner account.</p>
   * @public
   */
  SharedDirectoryId: string | undefined;
}

/**
 * @public
 */
export interface RejectSharedDirectoryResult {
  /**
   * <p>Identifier of the shared directory in the directory consumer account.</p>
   * @public
   */
  SharedDirectoryId?: string | undefined;
}

/**
 * @public
 */
export interface RemoveIpRoutesRequest {
  /**
   * <p>Identifier (ID) of the directory from which you want to remove the IP
   *          addresses.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>IP address blocks that you want to remove.</p>
   * @public
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
   * <p>The identifier of the directory for which you want to remove Region replication.</p>
   * @public
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
   * <p>Identifier (ID) of the directory from which to remove the tag.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The tag key (name) of the tag to be removed.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveTagsFromResourceResult {}

/**
 * <p>The new password provided by the user does not meet the password complexity
 *             requirements defined in your directory.</p>
 * @public
 */
export class InvalidPasswordException extends __BaseException {
  readonly name: "InvalidPasswordException" = "InvalidPasswordException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
   * <p>Identifier of the Managed Microsoft AD or Simple AD directory in which the user resides.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The user name of the user whose password will be reset.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The new password that will be reset.</p>
   * @public
   */
  NewPassword: string | undefined;
}

/**
 * @public
 */
export interface ResetUserPasswordResult {}

/**
 * <p>The user provided a username that does not exist in your directory.</p>
 * @public
 */
export class UserDoesNotExistException extends __BaseException {
  readonly name: "UserDoesNotExistException" = "UserDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export interface RestoreFromSnapshotRequest {
  /**
   * <p>The identifier of the snapshot to restore from.</p>
   * @public
   */
  SnapshotId: string | undefined;
}

/**
 * <p>Contains the results of the <a>RestoreFromSnapshot</a> operation.</p>
 * @public
 */
export interface RestoreFromSnapshotResult {}

/**
 * <p>The specified shared target is not valid.</p>
 * @public
 */
export class InvalidTargetException extends __BaseException {
  readonly name: "InvalidTargetException" = "InvalidTargetException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export class OrganizationsException extends __BaseException {
  readonly name: "OrganizationsException" = "OrganizationsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * <p>Identifier that contains details about the directory consumer account.</p>
 * @public
 */
export interface ShareTarget {
  /**
   * <p>Identifier of the directory consumer account.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Type of identifier to be used in the <code>Id</code> field.</p>
   * @public
   */
  Type: TargetType | undefined;
}

/**
 * @public
 */
export interface ShareDirectoryRequest {
  /**
   * <p>Identifier of the Managed Microsoft AD directory that you want to share with other
   *       Amazon Web Services accounts.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>A directory share request that is sent by the directory owner to the directory consumer.
   *       The request includes a typed message to help the directory consumer administrator determine
   *       whether to approve or reject the share invitation.</p>
   * @public
   */
  ShareNotes?: string | undefined;

  /**
   * <p>Identifier for the directory consumer account with whom the directory is to be
   *       shared.</p>
   * @public
   */
  ShareTarget: ShareTarget | undefined;

  /**
   * <p>The method used when sharing a directory to determine whether the directory should be
   *       shared within your Amazon Web Services organization (<code>ORGANIZATIONS</code>) or with any Amazon Web Services account
   *       by sending a directory sharing request (<code>HANDSHAKE</code>).</p>
   * @public
   */
  ShareMethod: ShareMethod | undefined;
}

/**
 * @public
 */
export interface ShareDirectoryResult {
  /**
   * <p>Identifier of the directory that is stored in the directory consumer account that is
   *       shared from the specified directory (<code>DirectoryId</code>).</p>
   * @public
   */
  SharedDirectoryId?: string | undefined;
}

/**
 * <p>The maximum number of Amazon Web Services accounts that you can share with this directory has been
 *             reached.</p>
 * @public
 */
export class ShareLimitExceededException extends __BaseException {
  readonly name: "ShareLimitExceededException" = "ShareLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
export interface StartADAssessmentRequest {
  /**
   * <p>Configuration parameters for the directory assessment, including DNS server
   *             information, domain name, Amazon VPC subnet, and Amazon Web Services System Manager managed node
   *             details.</p>
   * @public
   */
  AssessmentConfiguration?: AssessmentConfiguration | undefined;

  /**
   * <p>The identifier of the directory for which to perform the assessment. This should be an
   *             existing directory. If the assessment is not for an existing directory, this parameter
   *             should be omitted.</p>
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * @public
 */
export interface StartADAssessmentResult {
  /**
   * <p>The unique identifier of the newly started directory assessment. Use this identifier
   *             to monitor assessment progress and retrieve results.</p>
   * @public
   */
  AssessmentId?: string | undefined;
}

/**
 * @public
 */
export interface StartSchemaExtensionRequest {
  /**
   * <p>The identifier of the directory for which the schema extension will be applied
   *       to.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>If true, creates a snapshot of the directory before applying the schema
   *       extension.</p>
   * @public
   */
  CreateSnapshotBeforeSchemaExtension: boolean | undefined;

  /**
   * <p>The LDIF file represented as a string. To construct the LdifContent string, precede
   *       each line as it would be formatted in an ldif file with \n. See the example request below for
   *       more details. The file size can be no larger than 1MB.</p>
   * @public
   */
  LdifContent: string | undefined;

  /**
   * <p>A description of the schema extension.</p>
   * @public
   */
  Description: string | undefined;
}

/**
 * @public
 */
export interface StartSchemaExtensionResult {
  /**
   * <p>The identifier of the schema extension that will be applied.</p>
   * @public
   */
  SchemaExtensionId?: string | undefined;
}

/**
 * <p>Identifier that contains details about the directory consumer account with whom the
 *       directory is being unshared.</p>
 * @public
 */
export interface UnshareTarget {
  /**
   * <p>Identifier of the directory consumer account.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Type of identifier to be used in the <i>Id</i> field.</p>
   * @public
   */
  Type: TargetType | undefined;
}

/**
 * @public
 */
export interface UnshareDirectoryRequest {
  /**
   * <p>The identifier of the Managed Microsoft AD directory that you want to stop sharing.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>Identifier for the directory consumer account with whom the directory has to be
   *       unshared.</p>
   * @public
   */
  UnshareTarget: UnshareTarget | undefined;
}

/**
 * @public
 */
export interface UnshareDirectoryResult {
  /**
   * <p>Identifier of the directory stored in the directory consumer account that is to be
   *       unshared from the specified directory (<code>DirectoryId</code>).</p>
   * @public
   */
  SharedDirectoryId?: string | undefined;
}

/**
 * <p>Updates a conditional forwarder.</p>
 * @public
 */
export interface UpdateConditionalForwarderRequest {
  /**
   * <p>The directory ID of the Amazon Web Services directory for which to update the conditional
   *       forwarder.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of the remote domain with which you will set up
   *       a trust relationship.</p>
   * @public
   */
  RemoteDomainName: string | undefined;

  /**
   * <p>The updated IP addresses of the remote DNS server associated with the conditional
   *       forwarder.</p>
   * @public
   */
  DnsIpAddrs: string[] | undefined;
}

/**
 * <p>The result of an UpdateConditionalForwarder request.</p>
 * @public
 */
export interface UpdateConditionalForwarderResult {}

/**
 * @public
 */
export interface UpdateDirectorySetupRequest {
  /**
   * <p> The identifier of the directory on which you want to perform the update. </p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p> The type of update that needs to be performed on the directory. For example, OS. </p>
   * @public
   */
  UpdateType: UpdateType | undefined;

  /**
   * <p> The settings for the OS update that needs to be performed on the directory. </p>
   * @public
   */
  OSUpdateSettings?: OSUpdateSettings | undefined;

  /**
   * <p> The boolean that specifies if a snapshot for the directory needs to be taken before
   *       updating the directory. </p>
   * @public
   */
  CreateSnapshotBeforeUpdate?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDirectorySetupResult {}

/**
 * <p> Use to recover to the hybrid directory administrator account credentials.</p>
 * @public
 */
export interface HybridAdministratorAccountUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the
   *             credentials for the AD administrator user, and enables hybrid domain controllers to
   *             join the managed AD domain. For example:</p>
   *          <p>
   *             <code>
   *                 \{"customerAdAdminDomainUsername":"carlos_salazar","customerAdAdminDomainPassword":"ExamplePassword123!"\}.
   *             </code>
   *          </p>
   * @public
   */
  SecretArn: string | undefined;
}

/**
 * <p>Contains configuration settings for self-managed instances with SSM used in hybrid
 *             directory operations.</p>
 * @public
 */
export interface HybridCustomerInstancesSettings {
  /**
   * <p>The IP addresses of the DNS servers or domain controllers in your self-managed AD
   *             environment.</p>
   * @public
   */
  CustomerDnsIps: string[] | undefined;

  /**
   * <p>The identifiers of the self-managed instances with SSM used in hybrid
   *             directory.</p>
   * @public
   */
  InstanceIds: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateHybridADRequest {
  /**
   * <p>The identifier of the hybrid directory to update.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>We create a hybrid directory administrator account when we create a hybrid directory.
   *             Use <code>HybridAdministratorAccountUpdate</code> to recover the hybrid directory
   *             administrator account if you have deleted it.</p>
   *          <p>To recover your hybrid directory administrator account, we need temporary access to a
   *             user in your self-managed AD with administrator permissions in the form of a secret from
   *             Amazon Web Services Secrets Manager. We use these credentials once during recovery and don't store them.</p>
   *          <p>If your hybrid directory administrator account exists, then you don’t need to use
   *                 <code>HybridAdministratorAccountUpdate</code>, even if you have updated your
   *             self-managed AD administrator user.</p>
   * @public
   */
  HybridAdministratorAccountUpdate?: HybridAdministratorAccountUpdate | undefined;

  /**
   * <p>Updates to the self-managed AD configuration, including DNS server IP addresses and
   *             Amazon Web Services System Manager managed node identifiers.</p>
   * @public
   */
  SelfManagedInstancesSettings?: HybridCustomerInstancesSettings | undefined;
}

/**
 * @public
 */
export interface UpdateHybridADResult {
  /**
   * <p>The identifier of the updated hybrid directory.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The identifier of the assessment performed to validate the update configuration. This
   *             assessment ensures the updated settings are compatible with your environment.</p>
   * @public
   */
  AssessmentId?: string | undefined;
}

/**
 * <p>The maximum allowed number of domain controllers per directory was exceeded. The
 *       default limit per directory is 20 domain controllers.</p>
 * @public
 */
export class DomainControllerLimitExceededException extends __BaseException {
  readonly name: "DomainControllerLimitExceededException" = "DomainControllerLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
   * <p>Identifier of the directory to which the domain controllers will be added or
   *       removed.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The number of domain controllers desired in the directory.</p>
   * @public
   */
  DesiredNumber: number | undefined;
}

/**
 * @public
 */
export interface UpdateNumberOfDomainControllersResult {}

/**
 * <p>Contains the inputs for the <a>UpdateRadius</a> operation.</p>
 * @public
 */
export interface UpdateRadiusRequest {
  /**
   * <p>The identifier of the directory for which to update the RADIUS server
   *          information.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS
   *          server.</p>
   * @public
   */
  RadiusSettings: RadiusSettings | undefined;
}

/**
 * <p>Contains the results of the <a>UpdateRadius</a> operation.</p>
 * @public
 */
export interface UpdateRadiusResult {}

/**
 * <p>The specified directory setting is not compatible with other settings.</p>
 * @public
 */
export class IncompatibleSettingsException extends __BaseException {
  readonly name: "IncompatibleSettingsException" = "IncompatibleSettingsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export class UnsupportedSettingsException extends __BaseException {
  readonly name: "UnsupportedSettingsException" = "UnsupportedSettingsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The descriptive message for the exception.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;
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
 * @public
 */
export interface Setting {
  /**
   * <p>The name of the directory setting. For example:</p>
   *          <p>
   *             <code>TLS_1_0</code>
   *          </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value of the directory setting for which to retrieve information. For example, for
   *         <code>TLS_1_0</code>, the valid values are: <code>Enable</code> and
   *       <code>Disable</code>.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface UpdateSettingsRequest {
  /**
   * <p>The identifier of the directory for which to update settings.</p>
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * <p>The list of <a>Setting</a> objects.</p>
   * @public
   */
  Settings: Setting[] | undefined;
}

/**
 * @public
 */
export interface UpdateSettingsResult {
  /**
   * <p>The identifier of the directory.</p>
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrustRequest {
  /**
   * <p>Identifier of the trust relationship.</p>
   * @public
   */
  TrustId: string | undefined;

  /**
   * <p>Updates selective authentication for the trust.</p>
   * @public
   */
  SelectiveAuth?: SelectiveAuth | undefined;
}

/**
 * @public
 */
export interface UpdateTrustResult {
  /**
   * <p>The Amazon Web Services request identifier.</p>
   * @public
   */
  RequestId?: string | undefined;

  /**
   * <p>Identifier of the trust relationship.</p>
   * @public
   */
  TrustId?: string | undefined;
}

/**
 * <p>Initiates the verification of an existing trust relationship between an Managed Microsoft AD
 *       directory and an external domain.</p>
 * @public
 */
export interface VerifyTrustRequest {
  /**
   * <p>The unique Trust ID of the trust relationship to verify.</p>
   * @public
   */
  TrustId: string | undefined;
}

/**
 * <p>Result of a VerifyTrust request.</p>
 * @public
 */
export interface VerifyTrustResult {
  /**
   * <p>The unique Trust ID of the trust relationship that was verified.</p>
   * @public
   */
  TrustId?: string | undefined;
}
