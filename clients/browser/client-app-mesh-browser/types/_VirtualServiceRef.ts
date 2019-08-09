/**
 * <p>An object representing a virtual service returned by a list operation.</p>
 */
export interface _VirtualServiceRef {
  /**
   * <p>The full Amazon Resource Name (ARN) for the virtual service.</p>
   */
  arn: string;

  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string;

  /**
   * <p>The name of the virtual service.</p>
   */
  virtualServiceName: string;
}

export type _UnmarshalledVirtualServiceRef = _VirtualServiceRef;
