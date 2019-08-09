import {
  _VirtualNodeServiceProvider,
  _UnmarshalledVirtualNodeServiceProvider
} from "./_VirtualNodeServiceProvider";
import {
  _VirtualRouterServiceProvider,
  _UnmarshalledVirtualRouterServiceProvider
} from "./_VirtualRouterServiceProvider";

/**
 * <p>An object representing the provider for a virtual service.</p>
 */
export interface _VirtualServiceProvider {
  /**
   * <p>The virtual node associated with a virtual service.</p>
   */
  virtualNode?: _VirtualNodeServiceProvider;

  /**
   * <p>The virtual router associated with a virtual service.</p>
   */
  virtualRouter?: _VirtualRouterServiceProvider;
}

export interface _UnmarshalledVirtualServiceProvider
  extends _VirtualServiceProvider {
  /**
   * <p>The virtual node associated with a virtual service.</p>
   */
  virtualNode?: _UnmarshalledVirtualNodeServiceProvider;

  /**
   * <p>The virtual router associated with a virtual service.</p>
   */
  virtualRouter?: _UnmarshalledVirtualRouterServiceProvider;
}
