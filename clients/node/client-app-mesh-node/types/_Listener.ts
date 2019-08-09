import {
  _HealthCheckPolicy,
  _UnmarshalledHealthCheckPolicy
} from "./_HealthCheckPolicy";
import { _PortMapping, _UnmarshalledPortMapping } from "./_PortMapping";

/**
 * <p>An object representing a listener for a virtual node.</p>
 */
export interface _Listener {
  /**
   * <p>The health check information for the listener.</p>
   */
  healthCheck?: _HealthCheckPolicy;

  /**
   * <p>The port mapping information for the listener.</p>
   */
  portMapping: _PortMapping;
}

export interface _UnmarshalledListener extends _Listener {
  /**
   * <p>The health check information for the listener.</p>
   */
  healthCheck?: _UnmarshalledHealthCheckPolicy;

  /**
   * <p>The port mapping information for the listener.</p>
   */
  portMapping: _UnmarshalledPortMapping;
}
