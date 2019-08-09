/**
 * <p>In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>, <a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound resolver endpoint.</p>
 */
export interface _ResolverEndpoint {
  /**
   * <p>The ID of the resolver endpoint.</p>
   */
  Id?: string;

  /**
   * <p>A unique string that identifies the request that created the resolver endpoint. The <code>CreatorRequestId</code> allows failed requests to be retried without the risk of executing the operation twice.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The ARN (Amazon Resource Name) for the resolver endpoint.</p>
   */
  Arn?: string;

  /**
   * <p>The name that you assigned to the resolver endpoint when you submitted a <a>CreateResolverEndpoint</a> request.</p>
   */
  Name?: string;

  /**
   * <p>The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound resolver rules.</p>
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>Indicates whether the resolver endpoint allows inbound or outbound DNS queries:</p> <ul> <li> <p> <code>INBOUND</code>: allows DNS queries to your VPC from your network or another VPC</p> </li> <li> <p> <code>OUTBOUND</code>: allows DNS queries from your VPC to your network or another VPC</p> </li> </ul>
   */
  Direction?: "INBOUND" | "OUTBOUND" | string;

  /**
   * <p>The number of IP addresses that the resolver endpoint can use for DNS queries.</p>
   */
  IpAddressCount?: number;

  /**
   * <p>The ID of the VPC that you want to create the resolver endpoint in.</p>
   */
  HostVPCId?: string;

  /**
   * <p>A code that specifies the current status of the resolver endpoint.</p>
   */
  Status?:
    | "CREATING"
    | "OPERATIONAL"
    | "UPDATING"
    | "AUTO_RECOVERING"
    | "ACTION_NEEDED"
    | "DELETING"
    | string;

  /**
   * <p>A detailed description of the status of the resolver endpoint.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The date and time that the endpoint was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  CreationTime?: string;

  /**
   * <p>The date and time that the endpoint was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  ModificationTime?: string;
}

export interface _UnmarshalledResolverEndpoint extends _ResolverEndpoint {
  /**
   * <p>The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound resolver rules.</p>
   */
  SecurityGroupIds?: Array<string>;
}
