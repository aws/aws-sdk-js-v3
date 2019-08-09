/**
 * <p>The CPU options for the instance. Both the core count and threads per core must be specified in the request.</p>
 */
export interface _LaunchTemplateCpuOptionsRequest {
  /**
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * <p>The number of threads per CPU core. To disable Intel Hyper-Threading Technology for the instance, specify a value of 1. Otherwise, specify the default value of 2.</p>
   */
  ThreadsPerCore?: number;
}

export type _UnmarshalledLaunchTemplateCpuOptionsRequest = _LaunchTemplateCpuOptionsRequest;
