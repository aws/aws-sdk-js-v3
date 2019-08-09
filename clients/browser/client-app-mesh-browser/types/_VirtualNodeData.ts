import {
  _ResourceMetadata,
  _UnmarshalledResourceMetadata
} from "./_ResourceMetadata";
import {
  _VirtualNodeSpec,
  _UnmarshalledVirtualNodeSpec
} from "./_VirtualNodeSpec";
import {
  _VirtualNodeStatus,
  _UnmarshalledVirtualNodeStatus
} from "./_VirtualNodeStatus";

/**
 * <p>An object representing a virtual node returned by a describe operation.</p>
 */
export interface _VirtualNodeData {
  /**
   * <p>The name of the service mesh that the virtual node resides in.</p>
   */
  meshName: string;

  /**
   * <p>The associated metadata for the virtual node.</p>
   */
  metadata: _ResourceMetadata;

  /**
   * <p>The specifications of the virtual node.</p>
   */
  spec: _VirtualNodeSpec;

  /**
   * <p>The current status for the virtual node.</p>
   */
  status: _VirtualNodeStatus;

  /**
   * <p>The name of the virtual node.</p>
   */
  virtualNodeName: string;
}

export interface _UnmarshalledVirtualNodeData extends _VirtualNodeData {
  /**
   * <p>The associated metadata for the virtual node.</p>
   */
  metadata: _UnmarshalledResourceMetadata;

  /**
   * <p>The specifications of the virtual node.</p>
   */
  spec: _UnmarshalledVirtualNodeSpec;

  /**
   * <p>The current status for the virtual node.</p>
   */
  status: _UnmarshalledVirtualNodeStatus;
}
