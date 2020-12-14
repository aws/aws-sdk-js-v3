import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Access was denied for this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>There was a conflict with this action, and it could not be completed.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export interface CreateEndpointRequest {
  /**
   * <p>The ID of the AWS Outpost. </p>
   */
  OutpostId: string | undefined;

  /**
   * <p>The ID of the subnet in the selected VPC.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>The ID of the security group to use with the endpoint.</p>
   */
  SecurityGroupId: string | undefined;
}

export namespace CreateEndpointRequest {
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
  export const filterSensitiveLog = (obj: CreateEndpointResult): any => ({
    ...obj,
  });
}

/**
 * <p>There was an exception with the internal server.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>There was an exception validating this data.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface DeleteEndpointRequest {
  /**
   * <p>The ID of the end point.</p>
   */
  EndpointId: string | undefined;

  /**
   * <p>The ID of the AWS Outpost. </p>
   */
  OutpostId: string | undefined;
}

export namespace DeleteEndpointRequest {
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
  export const filterSensitiveLog = (obj: NetworkInterface): any => ({
    ...obj,
  });
}

export enum EndpointStatus {
  AVAILABLE = "AVAILABLE",
  PENDING = "PENDING",
}

/**
 * <p>S3 on Outposts access points simplify managing data access at scale for shared datasets
 *             in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform
 *             actions within your virtual private cloud (VPC). </p>
 */
export interface Endpoint {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * <p>The ID of the AWS Outpost.</p>
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
}

export namespace Endpoint {
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
  export const filterSensitiveLog = (obj: ListEndpointsRequest): any => ({
    ...obj,
  });
}

export interface ListEndpointsResult {
  /**
   * <p>Returns an array of endpoints associated with AWS Outpost.</p>
   */
  Endpoints?: Endpoint[];

  /**
   * <p>The next endpoint returned in the list.</p>
   */
  NextToken?: string;
}

export namespace ListEndpointsResult {
  export const filterSensitiveLog = (obj: ListEndpointsResult): any => ({
    ...obj,
  });
}
