/**
 * <p>An object representing a container instance host device.</p>
 */
export interface _Device {
  /**
   * <p>The path for the device on the host container instance.</p>
   */
  hostPath: string;

  /**
   * <p>The path inside the container at which to expose the host device. By default the <code>hostPath</code> value is used.</p>
   */
  containerPath?: string;

  /**
   * <p>The explicit permissions to provide to the container for the device. By default, the container has permissions for <code>read</code>, <code>write</code>, and <code>mknod</code> for the device.</p>
   */
  permissions?:
    | Array<"READ" | "WRITE" | "MKNOD" | string>
    | Iterable<"READ" | "WRITE" | "MKNOD" | string>;
}

export interface _UnmarshalledDevice extends _Device {
  /**
   * <p>The explicit permissions to provide to the container for the device. By default, the container has permissions for <code>read</code>, <code>write</code>, and <code>mknod</code> for the device.</p>
   */
  permissions?: Array<"READ" | "WRITE" | "MKNOD" | string>;
}
