/**
 * <p>The CPU options for the instance. Both the core count and threads per core must be specified in the request.</p>
 */
export interface _CpuOptionsRequest {
  /**
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * <p>The number of threads per CPU core. To disable Intel Hyper-Threading Technology for the instance, specify a value of <code>1</code>. Otherwise, specify the default value of <code>2</code>.</p>
   */
  ThreadsPerCore?: number;
}

export type _UnmarshalledCpuOptionsRequest = _CpuOptionsRequest;
