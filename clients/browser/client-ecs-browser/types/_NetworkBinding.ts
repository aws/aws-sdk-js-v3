/**
 * <p>Details on the network bindings between a container and its host container instance. After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.</p>
 */
export interface _NetworkBinding {
  /**
   * <p>The IP address that the container is bound to on the container instance.</p>
   */
  bindIP?: string;

  /**
   * <p>The port number on the container that is used with the network binding.</p>
   */
  containerPort?: number;

  /**
   * <p>The port number on the host that is used with the network binding.</p>
   */
  hostPort?: number;

  /**
   * <p>The protocol used for the network binding.</p>
   */
  protocol?: "tcp" | "udp" | string;
}

export type _UnmarshalledNetworkBinding = _NetworkBinding;
