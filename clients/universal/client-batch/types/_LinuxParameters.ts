import { _Device, _UnmarshalledDevice } from "./_Device";

/**
 * <p>Linux-specific modifications that are applied to the container, such as details for device mappings.</p>
 */
export interface _LinuxParameters {
  /**
   * <p>Any host devices to expose to the container. This parameter maps to <code>Devices</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--device</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   */
  devices?: Array<_Device> | Iterable<_Device>;
}

export interface _UnmarshalledLinuxParameters extends _LinuxParameters {
  /**
   * <p>Any host devices to expose to the container. This parameter maps to <code>Devices</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the <code>--device</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   */
  devices?: Array<_UnmarshalledDevice>;
}
