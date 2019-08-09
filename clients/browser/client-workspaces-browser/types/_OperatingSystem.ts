/**
 * <p>The operating system that the image is running.</p>
 */
export interface _OperatingSystem {
  /**
   * <p>The operating system.</p>
   */
  Type?: "WINDOWS" | "LINUX" | string;
}

export type _UnmarshalledOperatingSystem = _OperatingSystem;
