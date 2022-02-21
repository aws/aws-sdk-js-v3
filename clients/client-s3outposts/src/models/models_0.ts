import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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
   * <p>The ID of the AWS Outposts. </p>
   */
  OutpostId: string | undefined;

  /**
   * <p>The ID of the subnet in the selected VPC. The endpoint subnet
   *             must belong to the Outpost that has the Amazon S3 on Outposts provisioned.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>The ID of the security group to use with the endpoint.</p>
   */
  SecurityGroupId: string | undefined;

  /**
   * <p>The type of access for the on-premise network connectivity for the
   *             Outpost endpoint. To access the endpoint from an on-premises network, you must
   *             specify the access type and provide the customer owned IPv4 pool.</p>
   */
  AccessType?: EndpointAccessType | string;

  /**
   * <p>The ID of the customer-owned IPv4 pool for the endpoint.
   *             IP addresses will be allocated from this pool for the endpoint.</p>
   */
  CustomerOwnedIpv4Pool?: string;
}

export namespace CreateEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEndpointRequest): any => ({
    ...obj,
  });
}

export interface CreateEndpointResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn?: string;
}

export namespace CreateEndpointResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEndpointResult): any => ({
    ...obj,
  });
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
   * <p>The ID of the AWS Outposts. </p>
   */
  OutpostId: string | undefined;
}

export namespace DeleteEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEndpointRequest): any => ({
    ...obj,
  });
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

export namespace NetworkInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterface): any => ({
    ...obj,
  });
}

export enum EndpointStatus {
  AVAILABLE = "Available",
  DELETING = "Deleting",
  PENDING = "Pending",
}

/**
 * <p>Amazon S3 on Outposts Access Points simplify managing data access at scale for shared datasets in S3 on Outposts.
 *             S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform actions within your
 *                virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/AccessingS3Outposts.html">
 *         Accessing S3 on Outposts using VPC only access points</a>.</p>
 */
export interface Endpoint {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * <p>The ID of the AWS Outposts.</p>
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
   * <p></p>
   */
  AccessType?: EndpointAccessType | string;

  /**
   * <p>The ID of the customer-owned IPv4 pool used for the endpoint.</p>
   */
  CustomerOwnedIpv4Pool?: string;
}

export namespace Endpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj,
  });
}

export interface ListEndpointsRequest {
  /**
   * <p>The next endpoint requested in the list.</p>
   */
  NextToken?: string;

  /**
   * <p>The max number of endpoints that can be returned on the request.</p>
   */
  MaxResults?: number;
}

export namespace ListEndpointsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEndpointsRequest): any => ({
    ...obj,
  });
}

export interface ListEndpointsResult {
  /**
   * <p>Returns an array of endpoints associated with AWS Outposts.</p>
   */
  Endpoints?: Endpoint[];

  /**
   * <p>The next endpoint returned in the list.</p>
   */
  NextToken?: string;
}

export namespace ListEndpointsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEndpointsResult): any => ({
    ...obj,
  });
}
