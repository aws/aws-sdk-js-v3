import {
  _NetworkBinding,
  _UnmarshalledNetworkBinding
} from "./_NetworkBinding";

/**
 * <p>An object representing a change in state for a container.</p>
 */
export interface _ContainerStateChange {
  /**
   * <p>The name of the container.</p>
   */
  containerName?: string;

  /**
   * <p>The exit code for the container, if the state change is a result of the container exiting.</p>
   */
  exitCode?: number;

  /**
   * <p>Any network bindings associated with the container.</p>
   */
  networkBindings?: Array<_NetworkBinding> | Iterable<_NetworkBinding>;

  /**
   * <p>The reason for the state change.</p>
   */
  reason?: string;

  /**
   * <p>The status of the container.</p>
   */
  status?: string;
}

export interface _UnmarshalledContainerStateChange
  extends _ContainerStateChange {
  /**
   * <p>Any network bindings associated with the container.</p>
   */
  networkBindings?: Array<_UnmarshalledNetworkBinding>;
}
