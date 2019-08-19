import {
  _ResourceMetadata,
  _UnmarshalledResourceMetadata
} from "./_ResourceMetadata";
import { _MeshSpec, _UnmarshalledMeshSpec } from "./_MeshSpec";
import { _MeshStatus, _UnmarshalledMeshStatus } from "./_MeshStatus";

/**
 * <p>An object representing a service mesh returned by a describe operation.</p>
 */
export interface _MeshData {
  /**
   * <p>The name of the service mesh.</p>
   */
  meshName: string;

  /**
   * <p>The associated metadata for the service mesh.</p>
   */
  metadata: _ResourceMetadata;

  /**
   * <p>The associated specification for the service mesh.</p>
   */
  spec: _MeshSpec;

  /**
   * <p>The status of the service mesh.</p>
   */
  status: _MeshStatus;
}

export interface _UnmarshalledMeshData extends _MeshData {
  /**
   * <p>The associated metadata for the service mesh.</p>
   */
  metadata: _UnmarshalledResourceMetadata;

  /**
   * <p>The associated specification for the service mesh.</p>
   */
  spec: _UnmarshalledMeshSpec;

  /**
   * <p>The status of the service mesh.</p>
   */
  status: _UnmarshalledMeshStatus;
}
