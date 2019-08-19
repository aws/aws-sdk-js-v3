/**
 * <p>An object representing a virtual router returned by a list operation.</p>
 */
export interface _VirtualRouterRef {
  /**
   * <p>The full Amazon Resource Name (ARN) for the virtual router.</p>
   */
  arn: string;

  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string;

  /**
   * <p>The name of the virtual router.</p>
   */
  virtualRouterName: string;
}

export type _UnmarshalledVirtualRouterRef = _VirtualRouterRef;
