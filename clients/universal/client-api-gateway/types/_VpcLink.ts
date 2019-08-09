/**
 * <p>A API Gateway VPC link for a <a>RestApi</a> to access resources in an Amazon Virtual Private Cloud (VPC).</p> <div class="remarks"> <p><p>To enable access to a resource in an Amazon Virtual Private Cloud through Amazon API Gateway, you, as an API developer, create a <a>VpcLink</a> resource targeted for one or more network load balancers of the VPC and then integrate an API method with a private integration that uses the <a>VpcLink</a>. The private integration has an integration type of <code>HTTP</code> or <code>HTTP_PROXY</code> and has a connection type of <code>VPC_LINK</code>. The integration uses the <code>connectionId</code> property to identify the <a>VpcLink</a> used.</p> </p> </div>
 */
export interface _VpcLink {
  /**
   * <p>The identifier of the <a>VpcLink</a>. It is used in an <a>Integration</a> to reference this <a>VpcLink</a>.</p>
   */
  id?: string;

  /**
   * <p>The name used to label and identify the VPC link.</p>
   */
  name?: string;

  /**
   * <p>The description of the VPC link.</p>
   */
  description?: string;

  /**
   * <p>The ARNs of network load balancers of the VPC targeted by the VPC link. The network load balancers must be owned by the same AWS account of the API owner.</p>
   */
  targetArns?: Array<string> | Iterable<string>;

  /**
   * <p>The status of the VPC link. The valid values are <code>AVAILABLE</code>, <code>PENDING</code>, <code>DELETING</code>, or <code>FAILED</code>. Deploying an API will wait if the status is <code>PENDING</code> and will fail if the status is <code>DELETING</code>. </p>
   */
  status?: "AVAILABLE" | "PENDING" | "DELETING" | "FAILED" | string;

  /**
   * <p>A description about the VPC link status.</p>
   */
  statusMessage?: string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledVpcLink extends _VpcLink {
  /**
   * <p>The ARNs of network load balancers of the VPC targeted by the VPC link. The network load balancers must be owned by the same AWS account of the API owner.</p>
   */
  targetArns?: Array<string>;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };
}
