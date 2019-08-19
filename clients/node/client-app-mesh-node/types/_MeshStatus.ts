/**
 * <p>An object representing the status of a service mesh.</p>
 */
export interface _MeshStatus {
  /**
   * <p>The current mesh status.</p>
   */
  status?: "ACTIVE" | "DELETED" | "INACTIVE" | string;
}

export type _UnmarshalledMeshStatus = _MeshStatus;
