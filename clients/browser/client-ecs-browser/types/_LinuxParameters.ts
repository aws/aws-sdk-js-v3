import {
  _KernelCapabilities,
  _UnmarshalledKernelCapabilities
} from "./_KernelCapabilities";
import { _Device, _UnmarshalledDevice } from "./_Device";
import { _Tmpfs, _UnmarshalledTmpfs } from "./_Tmpfs";

/**
 * <p>Linux-specific options that are applied to the container, such as Linux <a>KernelCapabilities</a>.</p>
 */
export interface _LinuxParameters {
  /**
   * <p>The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.</p> <note> <p>If you are using tasks that use the Fargate launch type, <code>capabilities</code> is supported but the <code>add</code> parameter is not supported.</p> </note>
   */
  capabilities?: _KernelCapabilities;

  /**
   * <p>Any host devices to expose to the container. This parameter maps to <code>Devices</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--device</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>If you are using tasks that use the Fargate launch type, the <code>devices</code> parameter is not supported.</p> </note>
   */
  devices?: Array<_Device> | Iterable<_Device>;

  /**
   * <p>Run an <code>init</code> process inside the container that forwards signals and reaps processes. This parameter maps to the <code>--init</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. This parameter requires version 1.25 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '{{.Server.APIVersion}}'</code> </p>
   */
  initProcessEnabled?: boolean;

  /**
   * <p>The value for the size (in MiB) of the <code>/dev/shm</code> volume. This parameter maps to the <code>--shm-size</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>If you are using tasks that use the Fargate launch type, the <code>sharedMemorySize</code> parameter is not supported.</p> </note>
   */
  sharedMemorySize?: number;

  /**
   * <p>The container path, mount options, and size (in MiB) of the tmpfs mount. This parameter maps to the <code>--tmpfs</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>If you are using tasks that use the Fargate launch type, the <code>tmpfs</code> parameter is not supported.</p> </note>
   */
  tmpfs?: Array<_Tmpfs> | Iterable<_Tmpfs>;
}

export interface _UnmarshalledLinuxParameters extends _LinuxParameters {
  /**
   * <p>The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.</p> <note> <p>If you are using tasks that use the Fargate launch type, <code>capabilities</code> is supported but the <code>add</code> parameter is not supported.</p> </note>
   */
  capabilities?: _UnmarshalledKernelCapabilities;

  /**
   * <p>Any host devices to expose to the container. This parameter maps to <code>Devices</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--device</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>If you are using tasks that use the Fargate launch type, the <code>devices</code> parameter is not supported.</p> </note>
   */
  devices?: Array<_UnmarshalledDevice>;

  /**
   * <p>The container path, mount options, and size (in MiB) of the tmpfs mount. This parameter maps to the <code>--tmpfs</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>If you are using tasks that use the Fargate launch type, the <code>tmpfs</code> parameter is not supported.</p> </note>
   */
  tmpfs?: Array<_UnmarshalledTmpfs>;
}
