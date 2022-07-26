// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { S3OutpostsServiceException as __BaseException } from "./S3OutpostsServiceException";

/**
 * <p>Access was denied for this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
  }
}

/**
 * <p>There was a conflict with this action, and it could not be completed.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

export enum EndpointAccessType {
  CUSTOMER_OWNED_IP = "CustomerOwnedIp",
  PRIVATE = "Private",
}

export interface CreateEndpointRequest {
  /**
   * <p>The ID of the Outposts. </p>
   */
  OutpostId: string | undefined;

  /**
   * <p>The ID of the subnet in the selected VPC. The endpoint subnet must belong to the Outpost
   *             that has Amazon S3 on Outposts provisioned.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>The ID of the security group to use with the endpoint.</p>
   */
  SecurityGroupId: string | undefined;

  /**
   * <p>The type of access for the network connectivity for the Amazon S3 on Outposts endpoint. To use
   *             the Amazon Web Services VPC, choose <code>Private</code>. To use the endpoint with an on-premises
   *             network, choose <code>CustomerOwnedIp</code>.  If you choose
   *                 <code>CustomerOwnedIp</code>, you must also provide the customer-owned IP address
   *             pool (CoIP pool).</p>
   *         <note>
   *             <p>
   *                <code>Private</code> is the default access type value.</p>
   *          </note>
   */
  AccessType?: EndpointAccessType | string;

  /**
   * <p>The ID of the customer-owned IPv4 address pool (CoIP pool) for the endpoint. IP addresses
   *             are allocated from this pool for the endpoint.</p>
   */
  CustomerOwnedIpv4Pool?: string;
}

export interface CreateEndpointResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn?: string;
}

/**
 * <p>There was an exception with the internal server.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>There was an exception validating this data.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

export interface DeleteEndpointRequest {
  /**
   * <p>The ID of the endpoint.</p>
   */
  EndpointId: string | undefined;

  /**
   * <p>The ID of the Outposts. </p>
   */
  OutpostId: string | undefined;
}

/**
 * <p>The container for the network interface.</p>
 */
export interface NetworkInterface {
  /**
   * <p>The ID for the network interface.</p>
   */
  NetworkInterfaceId?: string;
}

export enum EndpointStatus {
  AVAILABLE = "Available",
  DELETING = "Deleting",
  PENDING = "Pending",
}

/**
 * <p>Amazon S3 on Outposts Access Points simplify managing data access at scale for shared datasets in S3 on Outposts.
 *             S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform actions within your
 *                virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/WorkingWithS3Outposts.html">
 *         Accessing S3 on Outposts using VPC-only access points</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 */
export interface Endpoint {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * <p>The ID of the Outposts.</p>
   */
  OutpostsId?: string;

  /**
   * <p>The VPC CIDR committed by this endpoint.</p>
   */
  CidrBlock?: string;

  /**
   * <p>The status of the endpoint.</p>
   */
  Status?: EndpointStatus | string;

  /**
   * <p>The time the endpoint was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The network interface of the endpoint.</p>
   */
  NetworkInterfaces?: NetworkInterface[];

  /**
   * <p>The ID of the VPC used for the endpoint.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the subnet used for the endpoint.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the security group used for the endpoint.</p>
   */
  SecurityGroupId?: string;

  /**
   * <p>The type of connectivity used to access the Amazon S3 on Outposts endpoint.</p>
   */
  AccessType?: EndpointAccessType | string;

  /**
   * <p>The ID of the customer-owned IPv4 address pool used for the endpoint.</p>
   */
  CustomerOwnedIpv4Pool?: string;
}

export interface ListEndpointsRequest {
  /**
   * <p>If a previous response from this operation included a <code>NextToken</code> value,
   *             provide that value here to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of endpoints that will be returned in the response.</p>
   */
  MaxResults?: number;
}

export interface ListEndpointsResult {
  /**
   * <p>The list of endpoints associated with the specified Outpost.</p>
   */
  Endpoints?: Endpoint[];

  /**
   * <p>If the number of endpoints associated with the specified Outpost exceeds <code>MaxResults</code>,
   *             you can include this value in subsequent calls to this operation to retrieve more results.</p>
   */
  NextToken?: string;
}

export interface ListSharedEndpointsRequest {
  /**
   * <p>If a previous response from this operation included a <code>NextToken</code> value, you
   *             can provide that value here to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of endpoints that will be returned in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the Amazon Web Services Outpost.</p>
   */
  OutpostId: string | undefined;
}

export interface ListSharedEndpointsResult {
  /**
   * <p>The list of endpoints associated with the specified Outpost that have been shared by Amazon Web Services Resource Access Manager (RAM).</p>
   */
  Endpoints?: Endpoint[];

  /**
   * <p>If the number of endpoints associated with the specified Outpost exceeds <code>MaxResults</code>,
   *             you can include this value in subsequent calls to this operation to retrieve more results.</p>
   */
  NextToken?: string;
}

/**
 * @internal
 */
export const CreateEndpointRequestFilterSensitiveLog = (obj: CreateEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEndpointResultFilterSensitiveLog = (obj: CreateEndpointResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEndpointRequestFilterSensitiveLog = (obj: DeleteEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfaceFilterSensitiveLog = (obj: NetworkInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointFilterSensitiveLog = (obj: Endpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEndpointsRequestFilterSensitiveLog = (obj: ListEndpointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEndpointsResultFilterSensitiveLog = (obj: ListEndpointsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSharedEndpointsRequestFilterSensitiveLog = (obj: ListSharedEndpointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSharedEndpointsResultFilterSensitiveLog = (obj: ListSharedEndpointsResult): any => ({
  ...obj,
});
