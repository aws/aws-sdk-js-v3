import { _PortMapping, _UnmarshalledPortMapping } from "./_PortMapping";

/**
 * <p>An object representing a virtual router listener.</p>
 */
export interface _VirtualRouterListener {
  /**
   * <p>An object representing a virtual node or virtual router listener port mapping.</p>
   */
  portMapping: _PortMapping;
}

export interface _UnmarshalledVirtualRouterListener
  extends _VirtualRouterListener {
  /**
   * <p>An object representing a virtual node or virtual router listener port mapping.</p>
   */
  portMapping: _UnmarshalledPortMapping;
}
