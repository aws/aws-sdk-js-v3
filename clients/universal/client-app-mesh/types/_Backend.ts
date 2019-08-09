import {
  _VirtualServiceBackend,
  _UnmarshalledVirtualServiceBackend
} from "./_VirtualServiceBackend";

/**
 * <p>An object representing the backends that a virtual node is expected to send outbound
 *          traffic to. </p>
 */
export interface _Backend {
  /**
   * <p>Specifies a virtual service to use as a backend for a virtual node. </p>
   */
  virtualService?: _VirtualServiceBackend;
}

export interface _UnmarshalledBackend extends _Backend {
  /**
   * <p>Specifies a virtual service to use as a backend for a virtual node. </p>
   */
  virtualService?: _UnmarshalledVirtualServiceBackend;
}
