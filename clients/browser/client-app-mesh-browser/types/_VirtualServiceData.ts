import {
  _ResourceMetadata,
  _UnmarshalledResourceMetadata
} from "./_ResourceMetadata";
import {
  _VirtualServiceSpec,
  _UnmarshalledVirtualServiceSpec
} from "./_VirtualServiceSpec";
import {
  _VirtualServiceStatus,
  _UnmarshalledVirtualServiceStatus
} from "./_VirtualServiceStatus";

/**
 * <p>An object representing a virtual service returned by a describe operation.</p>
 */
export interface _VirtualServiceData {
  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string;

  /**
   * <p>An object representing metadata for a resource.</p>
   */
  metadata: _ResourceMetadata;

  /**
   * <p>The specifications of the virtual service.</p>
   */
  spec: _VirtualServiceSpec;

  /**
   * <p>The current status of the virtual service.</p>
   */
  status: _VirtualServiceStatus;

  /**
   * <p>The name of the virtual service.</p>
   */
  virtualServiceName: string;
}

export interface _UnmarshalledVirtualServiceData extends _VirtualServiceData {
  /**
   * <p>An object representing metadata for a resource.</p>
   */
  metadata: _UnmarshalledResourceMetadata;

  /**
   * <p>The specifications of the virtual service.</p>
   */
  spec: _UnmarshalledVirtualServiceSpec;

  /**
   * <p>The current status of the virtual service.</p>
   */
  status: _UnmarshalledVirtualServiceStatus;
}
