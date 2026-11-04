// smithy-typescript generated code
import type { EndpointAccessType, EndpointStatus } from "./enums";

/**
 * @public
 */
export interface CreateEndpointRequest {
  /**
   * The ID of the Outposts.
   *
   * @public
   */
  OutpostId: string | undefined;

  /**
   * The ID of the subnet in the selected VPC. The endpoint subnet must belong to the Outpost that has Amazon S3 on Outposts provisioned.
   *
   * @public
   */
  SubnetId: string | undefined;

  /**
   * The ID of the security group to use with the endpoint.
   *
   * @public
   */
  SecurityGroupId: string | undefined;

  /**
   * The type of access for the network connectivity for the Amazon S3 on Outposts endpoint. To use the Amazon Web Services VPC, choose `Private`. To use the endpoint with an on-premises network, choose `CustomerOwnedIp`. If you choose `CustomerOwnedIp`, you must also provide the customer-owned IP address pool (CoIP pool).
   *
   * > **Note:** `Private` is the default access type value.
   *
   * @public
   */
  AccessType?: EndpointAccessType | undefined;

  /**
   * The ID of the customer-owned IPv4 address pool (CoIP pool) for the endpoint. IP addresses are allocated from this pool for the endpoint.
   *
   * @public
   */
  CustomerOwnedIpv4Pool?: string | undefined;
}

/**
 * @public
 */
export interface CreateEndpointResult {
  /**
   * The Amazon Resource Name (ARN) of the endpoint.
   *
   * @public
   */
  EndpointArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointRequest {
  /**
   * The ID of the endpoint.
   *
   * @public
   */
  EndpointId: string | undefined;

  /**
   * The ID of the Outposts.
   *
   * @public
   */
  OutpostId: string | undefined;
}

/**
 * The failure reason, if any, for a create or delete endpoint operation.
 *
 * @public
 */
export interface FailedReason {
  /**
   * The failure code, if any, for a create or delete endpoint operation.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * Additional error details describing the endpoint failure and recommended action.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The container for the network interface.
 *
 * @public
 */
export interface NetworkInterface {
  /**
   * The ID for the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;
}

/**
 * Amazon S3 on Outposts Access Points simplify managing data access at scale for shared datasets in S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform actions within your virtual private cloud (VPC). For more information, see [Accessing S3 on Outposts using VPC-only access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WorkingWithS3Outposts.html) in the *Amazon Simple Storage Service User Guide*.
 *
 * @public
 */
export interface Endpoint {
  /**
   * The Amazon Resource Name (ARN) of the endpoint.
   *
   * @public
   */
  EndpointArn?: string | undefined;

  /**
   * The ID of the Outposts.
   *
   * @public
   */
  OutpostsId?: string | undefined;

  /**
   * The VPC CIDR committed by this endpoint.
   *
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * The status of the endpoint.
   *
   * @public
   */
  Status?: EndpointStatus | undefined;

  /**
   * The time the endpoint was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The network interface of the endpoint.
   *
   * @public
   */
  NetworkInterfaces?: NetworkInterface[] | undefined;

  /**
   * The ID of the VPC used for the endpoint.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The ID of the subnet used for the endpoint.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The ID of the security group used for the endpoint.
   *
   * @public
   */
  SecurityGroupId?: string | undefined;

  /**
   * The type of connectivity used to access the Amazon S3 on Outposts endpoint.
   *
   * @public
   */
  AccessType?: EndpointAccessType | undefined;

  /**
   * The ID of the customer-owned IPv4 address pool used for the endpoint.
   *
   * @public
   */
  CustomerOwnedIpv4Pool?: string | undefined;

  /**
   * The failure reason, if any, for a create or delete endpoint operation.
   *
   * @public
   */
  FailedReason?: FailedReason | undefined;
}

/**
 * @public
 */
export interface ListEndpointsRequest {
  /**
   * If a previous response from this operation included a `NextToken` value, provide that value here to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of endpoints that will be returned in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEndpointsResult {
  /**
   * The list of endpoints associated with the specified Outpost.
   *
   * @public
   */
  Endpoints?: Endpoint[] | undefined;

  /**
   * If the number of endpoints associated with the specified Outpost exceeds `MaxResults`, you can include this value in subsequent calls to this operation to retrieve more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOutpostsWithS3Request {
  /**
   * When you can get additional results from the `ListOutpostsWithS3` call, a `NextToken` parameter is returned in the output. You can then pass in a subsequent command to the `NextToken` parameter to continue listing additional Outposts.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of Outposts to return. The limit is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains the details for the Outpost object.
 *
 * @public
 */
export interface Outpost {
  /**
   * Specifies the unique Amazon Resource Name (ARN) for the outpost.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * Specifies the unique S3 on Outposts ARN for use with Resource Access Manager (RAM).
   *
   * @public
   */
  S3OutpostArn?: string | undefined;

  /**
   * Specifies the unique identifier for the outpost.
   *
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * Returns the Amazon Web Services account ID of the outpost owner. Useful for comparing owned versus shared outposts.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The Amazon S3 capacity of the outpost in bytes.
   *
   * @public
   */
  CapacityInBytes?: number | undefined;
}

/**
 * @public
 */
export interface ListOutpostsWithS3Result {
  /**
   * Returns the list of Outposts that have the following characteristics:
   *
   * - outposts that have S3 provisioned
   * - outposts that are `Active` (not pending any provisioning nor decommissioned)
   * - outposts to which the the calling Amazon Web Services account has access
   *
   * @public
   */
  Outposts?: Outpost[] | undefined;

  /**
   * Returns a token that you can use to call `ListOutpostsWithS3` again and receive additional results, if there are any.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSharedEndpointsRequest {
  /**
   * If a previous response from this operation included a `NextToken` value, you can provide that value here to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of endpoints that will be returned in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The ID of the Amazon Web Services Outpost.
   *
   * @public
   */
  OutpostId: string | undefined;
}

/**
 * @public
 */
export interface ListSharedEndpointsResult {
  /**
   * The list of endpoints associated with the specified Outpost that have been shared by Amazon Web Services Resource Access Manager (RAM).
   *
   * @public
   */
  Endpoints?: Endpoint[] | undefined;

  /**
   * If the number of endpoints associated with the specified Outpost exceeds `MaxResults`, you can include this value in subsequent calls to this operation to retrieve more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}
