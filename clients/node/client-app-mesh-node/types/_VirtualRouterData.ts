import {
  _ResourceMetadata,
  _UnmarshalledResourceMetadata
} from "./_ResourceMetadata";
import {
  _VirtualRouterSpec,
  _UnmarshalledVirtualRouterSpec
} from "./_VirtualRouterSpec";
import {
  _VirtualRouterStatus,
  _UnmarshalledVirtualRouterStatus
} from "./_VirtualRouterStatus";

/**
 * <p>An object representing a virtual router returned by a describe operation.</p>
 */
export interface _VirtualRouterData {
  /**
   * <p>The name of the service mesh that the virtual router resides in.</p>
   */
  meshName: string;

  /**
   * <p>The associated metadata for the virtual router.</p>
   */
  metadata: _ResourceMetadata;

  /**
   * <p>The specifications of the virtual router.</p>
   */
  spec: _VirtualRouterSpec;

  /**
   * <p>The current status of the virtual router.</p>
   */
  status: _VirtualRouterStatus;

  /**
   * <p>The name of the virtual router.</p>
   */
  virtualRouterName: string;
}

export interface _UnmarshalledVirtualRouterData extends _VirtualRouterData {
  /**
   * <p>The associated metadata for the virtual router.</p>
   */
  metadata: _UnmarshalledResourceMetadata;

  /**
   * <p>The specifications of the virtual router.</p>
   */
  spec: _UnmarshalledVirtualRouterSpec;

  /**
   * <p>The current status of the virtual router.</p>
   */
  status: _UnmarshalledVirtualRouterStatus;
}
