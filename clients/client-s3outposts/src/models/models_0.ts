// smithy-typescript generated code
import { EndpointAccessType, EndpointStatus } from "./enums";

/**
 * @public
 */
export interface CreateEndpointRequest {
  /**
   * <p>The ID of the Outposts. </p>
   * @public
   */
  OutpostId: string | undefined;

  /**
   * <p>The ID of the subnet in the selected VPC. The endpoint subnet must belong to the Outpost
   *             that has Amazon S3 on Outposts provisioned.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>The ID of the security group to use with the endpoint.</p>
   * @public
   */
  SecurityGroupId: string | undefined;

  /**
   * <p>The type of access for the network connectivity for the Amazon S3 on Outposts endpoint. To use
   *             the Amazon Web Services VPC, choose <code>Private</code>. To use the endpoint with an on-premises
   *             network, choose <code>CustomerOwnedIp</code>.  If you choose
   *                 <code>CustomerOwnedIp</code>, you must also provide the customer-owned IP address
   *             pool (CoIP pool).</p>
   *          <note>
   *             <p>
   *                <code>Private</code> is the default access type value.</p>
   *          </note>
   * @public
   */
  AccessType?: EndpointAccessType | undefined;

  /**
   * <p>The ID of the customer-owned IPv4 address pool (CoIP pool) for the endpoint. IP addresses
   *             are allocated from this pool for the endpoint.</p>
   * @public
   */
  CustomerOwnedIpv4Pool?: string | undefined;
}

/**
 * @public
 */
export interface CreateEndpointResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   * @public
   */
  EndpointArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointRequest {
  /**
   * <p>The ID of the endpoint.</p>
   * @public
   */
  EndpointId: string | undefined;

  /**
   * <p>The ID of the Outposts. </p>
   * @public
   */
  OutpostId: string | undefined;
}

/**
 * <p>The failure reason, if any, for a create or delete endpoint operation.</p>
 * @public
 */
export interface FailedReason {
  /**
   * <p>The failure code, if any, for a create or delete endpoint operation.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>Additional error details describing the endpoint failure and recommended action.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The container for the network interface.</p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>The ID for the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;
}

/**
 * <p>Amazon S3 on Outposts Access Points simplify managing data access at scale for shared datasets in S3 on Outposts.
 *             S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform actions within your
 *                virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/WorkingWithS3Outposts.html">
 *         Accessing S3 on Outposts using VPC-only access points</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 * @public
 */
export interface Endpoint {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   * @public
   */
  EndpointArn?: string | undefined;

  /**
   * <p>The ID of the Outposts.</p>
   * @public
   */
  OutpostsId?: string | undefined;

  /**
   * <p>The VPC CIDR committed by this endpoint.</p>
   * @public
   */
  CidrBlock?: string | undefined;

  /**
   * <p>The status of the endpoint.</p>
   * @public
   */
  Status?: EndpointStatus | undefined;

  /**
   * <p>The time the endpoint was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The network interface of the endpoint.</p>
   * @public
   */
  NetworkInterfaces?: NetworkInterface[] | undefined;

  /**
   * <p>The ID of the VPC used for the endpoint.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ID of the subnet used for the endpoint.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The ID of the security group used for the endpoint.</p>
   * @public
   */
  SecurityGroupId?: string | undefined;

  /**
   * <p>The type of connectivity used to access the Amazon S3 on Outposts endpoint.</p>
   * @public
   */
  AccessType?: EndpointAccessType | undefined;

  /**
   * <p>The ID of the customer-owned IPv4 address pool used for the endpoint.</p>
   * @public
   */
  CustomerOwnedIpv4Pool?: string | undefined;

  /**
   * <p>The failure reason, if any, for a create or delete endpoint operation.</p>
   * @public
   */
  FailedReason?: FailedReason | undefined;
}

/**
 * @public
 */
export interface ListEndpointsRequest {
  /**
   * <p>If a previous response from this operation included a <code>NextToken</code> value,
   *             provide that value here to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of endpoints that will be returned in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEndpointsResult {
  /**
   * <p>The list of endpoints associated with the specified Outpost.</p>
   * @public
   */
  Endpoints?: Endpoint[] | undefined;

  /**
   * <p>If the number of endpoints associated with the specified Outpost exceeds <code>MaxResults</code>,
   *             you can include this value in subsequent calls to this operation to retrieve more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOutpostsWithS3Request {
  /**
   * <p>When you can get additional results from the <code>ListOutpostsWithS3</code> call, a
   *                 <code>NextToken</code> parameter is returned in the output. You can then pass in a
   *             subsequent command to the <code>NextToken</code> parameter to continue listing
   *             additional Outposts.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of Outposts to return. The limit is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains the details for the Outpost object.</p>
 * @public
 */
export interface Outpost {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) for the outpost.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>Specifies the unique S3 on Outposts ARN for use with Resource Access Manager (RAM).</p>
   * @public
   */
  S3OutpostArn?: string | undefined;

  /**
   * <p>Specifies the unique identifier for the outpost.</p>
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * <p>Returns the Amazon Web Services account ID of the outpost owner. Useful for comparing owned versus shared outposts.</p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>The Amazon S3 capacity of the outpost in bytes.</p>
   * @public
   */
  CapacityInBytes?: number | undefined;
}

/**
 * @public
 */
export interface ListOutpostsWithS3Result {
  /**
   * <p>Returns the list of Outposts that have the following characteristics:</p>
   *          <ul>
   *             <li>
   *                <p>outposts that have S3 provisioned</p>
   *             </li>
   *             <li>
   *                <p>outposts that are <code>Active</code> (not pending any provisioning nor decommissioned)</p>
   *             </li>
   *             <li>
   *                <p>outposts to which the the calling Amazon Web Services account has access</p>
   *             </li>
   *          </ul>
   * @public
   */
  Outposts?: Outpost[] | undefined;

  /**
   * <p>Returns a token that you can use to call <code>ListOutpostsWithS3</code> again and receive additional results, if there are any.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSharedEndpointsRequest {
  /**
   * <p>If a previous response from this operation included a <code>NextToken</code> value, you
   *             can provide that value here to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of endpoints that will be returned in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The ID of the Amazon Web Services Outpost.</p>
   * @public
   */
  OutpostId: string | undefined;
}

/**
 * @public
 */
export interface ListSharedEndpointsResult {
  /**
   * <p>The list of endpoints associated with the specified Outpost that have been shared by Amazon Web Services Resource Access Manager (RAM).</p>
   * @public
   */
  Endpoints?: Endpoint[] | undefined;

  /**
   * <p>If the number of endpoints associated with the specified Outpost exceeds <code>MaxResults</code>,
   *             you can include this value in subsequent calls to this operation to retrieve more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}
