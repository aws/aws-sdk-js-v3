/**
 * <p>The CPU options for the instance.</p>
 */
export interface _CpuOptions {
  /**
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * <p>The number of threads per CPU core.</p>
   */
  ThreadsPerCore?: number;
}

export type _UnmarshalledCpuOptions = _CpuOptions;
