/**
 * <p>An object representing an Amazon EKS cluster VPC configuration response.</p>
 */
export interface _VpcConfigResponse {
  /**
   * <p>The subnets associated with your cluster.</p>
   */
  subnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>The security groups associated with the cross-account elastic network interfaces that are used to allow communication between your worker nodes and the Kubernetes control plane.</p>
   */
  securityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>The VPC associated with your cluster.</p>
   */
  vpcId?: string;

  /**
   * <p>This parameter indicates whether the Amazon EKS public API server endpoint is enabled. If the Amazon EKS public API server endpoint is disabled, your cluster's Kubernetes API server can receive only requests that originate from within the cluster VPC. </p>
   */
  endpointPublicAccess?: boolean;

  /**
   * <p>This parameter indicates whether the Amazon EKS private API server endpoint is enabled. If the Amazon EKS private API server endpoint is enabled, Kubernetes API requests that originate from within your cluster's VPC use the private VPC endpoint instead of traversing the internet.</p>
   */
  endpointPrivateAccess?: boolean;
}

export interface _UnmarshalledVpcConfigResponse extends _VpcConfigResponse {
  /**
   * <p>The subnets associated with your cluster.</p>
   */
  subnetIds?: Array<string>;

  /**
   * <p>The security groups associated with the cross-account elastic network interfaces that are used to allow communication between your worker nodes and the Kubernetes control plane.</p>
   */
  securityGroupIds?: Array<string>;
}
