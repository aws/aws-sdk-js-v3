import {
  _NetworkBinding,
  _UnmarshalledNetworkBinding
} from "./_NetworkBinding";
import {
  _NetworkInterface,
  _UnmarshalledNetworkInterface
} from "./_NetworkInterface";

/**
 * <p>A Docker container that is part of a task.</p>
 */
export interface _Container {
  /**
   * <p>The Amazon Resource Name (ARN) of the container.</p>
   */
  containerArn?: string;

  /**
   * <p>The ARN of the task.</p>
   */
  taskArn?: string;

  /**
   * <p>The name of the container.</p>
   */
  name?: string;

  /**
   * <p>The last known status of the container.</p>
   */
  lastStatus?: string;

  /**
   * <p>The exit code returned from the container.</p>
   */
  exitCode?: number;

  /**
   * <p>A short (255 max characters) human-readable string to provide additional details about a running or stopped container.</p>
   */
  reason?: string;

  /**
   * <p>The network bindings associated with the container.</p>
   */
  networkBindings?: Array<_NetworkBinding> | Iterable<_NetworkBinding>;

  /**
   * <p>The network interfaces associated with the container.</p>
   */
  networkInterfaces?: Array<_NetworkInterface> | Iterable<_NetworkInterface>;

  /**
   * <p>The health status of the container. If health checks are not configured for this container in its task definition, then it reports the health status as <code>UNKNOWN</code>.</p>
   */
  healthStatus?: "HEALTHY" | "UNHEALTHY" | "UNKNOWN" | string;

  /**
   * <p>The number of CPU units set for the container. The value will be <code>0</code> if no value was specified in the container definition when the task definition was registered.</p>
   */
  cpu?: string;

  /**
   * <p>The hard limit (in MiB) of memory set for the container.</p>
   */
  memory?: string;

  /**
   * <p>The soft limit (in MiB) of memory set for the container.</p>
   */
  memoryReservation?: string;

  /**
   * <p>The IDs of each GPU assigned to the container.</p>
   */
  gpuIds?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledContainer extends _Container {
  /**
   * <p>The network bindings associated with the container.</p>
   */
  networkBindings?: Array<_UnmarshalledNetworkBinding>;

  /**
   * <p>The network interfaces associated with the container.</p>
   */
  networkInterfaces?: Array<_UnmarshalledNetworkInterface>;

  /**
   * <p>The IDs of each GPU assigned to the container.</p>
   */
  gpuIds?: Array<string>;
}
