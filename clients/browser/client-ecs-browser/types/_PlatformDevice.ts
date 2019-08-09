/**
 * <p>The devices that are available on the container instance. The only supported device type is a GPU.</p>
 */
export interface _PlatformDevice {
  /**
   * <p>The ID for the GPU(s) on the container instance. The available GPU IDs can also be obtained on the container instance in the <code>/var/lib/ecs/gpu/nvidia_gpu_info.json</code> file.</p>
   */
  id: string;

  /**
   * <p>The type of device that is available on the container instance. The only supported value is <code>GPU</code>.</p>
   */
  type: "GPU" | string;
}

export type _UnmarshalledPlatformDevice = _PlatformDevice;
