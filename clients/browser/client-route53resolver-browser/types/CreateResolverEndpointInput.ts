import { _IpAddressRequest } from "./_IpAddressRequest";
import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateResolverEndpointInput shape
 */
export interface CreateResolverEndpointInput {
  /**
   * <p>A unique string that identifies the request and that allows failed requests to be retried without the risk of executing the operation twice. <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp. </p>
   */
  CreatorRequestId: string;

  /**
   * <p>A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.</p>
   */
  Name?: string;

  /**
   * <p>The ID of one or more security groups that you want to use to control access to this VPC. The security group that you specify must include one or more inbound rules (for inbound resolver endpoints) or outbound rules (for outbound resolver endpoints).</p>
   */
  SecurityGroupIds: Array<string> | Iterable<string>;

  /**
   * <p>Specify the applicable value:</p> <ul> <li> <p> <code>INBOUND</code>: Resolver forwards DNS queries to the DNS service for a VPC from your network or another VPC</p> </li> <li> <p> <code>OUTBOUND</code>: Resolver forwards DNS queries from the DNS service for a VPC to your network or another VPC</p> </li> </ul>
   */
  Direction: "INBOUND" | "OUTBOUND" | string;

  /**
   * <p>The subnets and IP addresses in your VPC that you want DNS queries to pass through on the way from your VPCs to your network (for outbound endpoints) or on the way from your network to your VPCs (for inbound resolver endpoints). </p>
   */
  IpAddresses: Array<_IpAddressRequest> | Iterable<_IpAddressRequest>;

  /**
   * <p>A list of the tag keys and values that you want to associate with the endpoint.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
