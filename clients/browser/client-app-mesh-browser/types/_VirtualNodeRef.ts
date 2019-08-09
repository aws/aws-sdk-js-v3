/**
 * <p>An object representing a virtual node returned by a list operation.</p>
 */
export interface _VirtualNodeRef {
  /**
   * <p>The full Amazon Resource Name (ARN) for the virtual node.</p>
   */
  arn: string;

  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string;

  /**
   * <p>The name of the virtual node.</p>
   */
  virtualNodeName: string;
}

export type _UnmarshalledVirtualNodeRef = _VirtualNodeRef;
