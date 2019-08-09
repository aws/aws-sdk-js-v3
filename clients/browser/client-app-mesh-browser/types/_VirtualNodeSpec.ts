import { _Backend, _UnmarshalledBackend } from "./_Backend";
import { _Listener, _UnmarshalledListener } from "./_Listener";
import { _Logging, _UnmarshalledLogging } from "./_Logging";
import {
  _ServiceDiscovery,
  _UnmarshalledServiceDiscovery
} from "./_ServiceDiscovery";

/**
 * <p>An object representing the specification of a virtual node.</p>
 */
export interface _VirtualNodeSpec {
  /**
   * <p>The backends that the virtual node is expected to send outbound traffic to.</p>
   */
  backends?: Array<_Backend> | Iterable<_Backend>;

  /**
   * <p>The listeners that the virtual node is expected to receive inbound traffic from.
   *          Currently only one listener is supported per virtual node.</p>
   */
  listeners?: Array<_Listener> | Iterable<_Listener>;

  /**
   * <p>The inbound and outbound access logging information for the virtual node.</p>
   */
  logging?: _Logging;

  /**
   * <p>The service discovery information for the virtual node. If your virtual node does not
   *          expect ingress traffic, you can omit this parameter.</p>
   */
  serviceDiscovery?: _ServiceDiscovery;
}

export interface _UnmarshalledVirtualNodeSpec extends _VirtualNodeSpec {
  /**
   * <p>The backends that the virtual node is expected to send outbound traffic to.</p>
   */
  backends?: Array<_UnmarshalledBackend>;

  /**
   * <p>The listeners that the virtual node is expected to receive inbound traffic from.
   *          Currently only one listener is supported per virtual node.</p>
   */
  listeners?: Array<_UnmarshalledListener>;

  /**
   * <p>The inbound and outbound access logging information for the virtual node.</p>
   */
  logging?: _UnmarshalledLogging;

  /**
   * <p>The service discovery information for the virtual node. If your virtual node does not
   *          expect ingress traffic, you can omit this parameter.</p>
   */
  serviceDiscovery?: _UnmarshalledServiceDiscovery;
}
