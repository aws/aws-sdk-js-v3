/**
 * <p>The CPU options for the instance.</p>
 */
export interface _LaunchTemplateCpuOptions {
  /**
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * <p>The number of threads per CPU core.</p>
   */
  ThreadsPerCore?: number;
}

export type _UnmarshalledLaunchTemplateCpuOptions = _LaunchTemplateCpuOptions;
