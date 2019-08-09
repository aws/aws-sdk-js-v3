/**
 * <p>An object representing a service mesh returned by a list operation.</p>
 */
export interface _MeshRef {
  /**
   * <p>The full Amazon Resource Name (ARN) of the service mesh.</p>
   */
  arn: string;

  /**
   * <p>The name of the service mesh.</p>
   */
  meshName: string;
}

export type _UnmarshalledMeshRef = _MeshRef;
