/**
 * <p>CPU utilization metrics for an instance.</p>
 */
export interface _CPUUtilization {
  /**
   * <p>Percentage of time that the CPU has spent in the <code>User</code> state over the last 10 seconds.</p>
   */
  User?: number;

  /**
   * <p>Available on Linux environments only.</p> <p>Percentage of time that the CPU has spent in the <code>Nice</code> state over the last 10 seconds.</p>
   */
  Nice?: number;

  /**
   * <p>Available on Linux environments only.</p> <p>Percentage of time that the CPU has spent in the <code>System</code> state over the last 10 seconds.</p>
   */
  System?: number;

  /**
   * <p>Percentage of time that the CPU has spent in the <code>Idle</code> state over the last 10 seconds.</p>
   */
  Idle?: number;

  /**
   * <p>Available on Linux environments only.</p> <p>Percentage of time that the CPU has spent in the <code>I/O Wait</code> state over the last 10 seconds.</p>
   */
  IOWait?: number;

  /**
   * <p>Available on Linux environments only.</p> <p>Percentage of time that the CPU has spent in the <code>IRQ</code> state over the last 10 seconds.</p>
   */
  IRQ?: number;

  /**
   * <p>Available on Linux environments only.</p> <p>Percentage of time that the CPU has spent in the <code>SoftIRQ</code> state over the last 10 seconds.</p>
   */
  SoftIRQ?: number;

  /**
   * <p>Available on Windows environments only.</p> <p>Percentage of time that the CPU has spent in the <code>Privileged</code> state over the last 10 seconds.</p>
   */
  Privileged?: number;
}

export type _UnmarshalledCPUUtilization = _CPUUtilization;
