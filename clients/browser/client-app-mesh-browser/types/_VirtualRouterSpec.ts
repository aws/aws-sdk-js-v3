import {
  _VirtualRouterListener,
  _UnmarshalledVirtualRouterListener
} from "./_VirtualRouterListener";

/**
 * <p>An object representing the specification of a virtual router.</p>
 */
export interface _VirtualRouterSpec {
  /**
   * <p>The listeners that the virtual router is expected to receive inbound traffic from.
   *          Currently only one listener is supported per virtual router.</p>
   */
  listeners?: Array<_VirtualRouterListener> | Iterable<_VirtualRouterListener>;
}

export interface _UnmarshalledVirtualRouterSpec extends _VirtualRouterSpec {
  /**
   * <p>The listeners that the virtual router is expected to receive inbound traffic from.
   *          Currently only one listener is supported per virtual router.</p>
   */
  listeners?: Array<_UnmarshalledVirtualRouterListener>;
}
