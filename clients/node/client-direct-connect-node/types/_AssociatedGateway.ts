/**
 * <p>Information about the associated gateway.</p>
 */
export interface _AssociatedGateway {
  /**
   * <p>The ID of the associated gateway.</p>
   */
  id?: string;

  /**
   * <p>The type of associated gateway.</p>
   */
  type?: "virtualPrivateGateway" | "transitGateway" | string;

  /**
   * <p>The ID of the AWS account that owns the associated virtual private gateway or transit gateway.</p>
   */
  ownerAccount?: string;

  /**
   * <p>The Region where the associated gateway is located.</p>
   */
  region?: string;
}

export type _UnmarshalledAssociatedGateway = _AssociatedGateway;
