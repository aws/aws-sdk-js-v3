/**
 * <p>Describes how many instances a stack has for each status.</p>
 */
export interface _InstancesCount {
  /**
   * <p>The number of instances in the Assigning state.</p>
   */
  Assigning?: number;

  /**
   * <p>The number of instances with <code>booting</code> status.</p>
   */
  Booting?: number;

  /**
   * <p>The number of instances with <code>connection_lost</code> status.</p>
   */
  ConnectionLost?: number;

  /**
   * <p>The number of instances in the Deregistering state.</p>
   */
  Deregistering?: number;

  /**
   * <p>The number of instances with <code>online</code> status.</p>
   */
  Online?: number;

  /**
   * <p>The number of instances with <code>pending</code> status.</p>
   */
  Pending?: number;

  /**
   * <p>The number of instances with <code>rebooting</code> status.</p>
   */
  Rebooting?: number;

  /**
   * <p>The number of instances in the Registered state.</p>
   */
  Registered?: number;

  /**
   * <p>The number of instances in the Registering state.</p>
   */
  Registering?: number;

  /**
   * <p>The number of instances with <code>requested</code> status.</p>
   */
  Requested?: number;

  /**
   * <p>The number of instances with <code>running_setup</code> status.</p>
   */
  RunningSetup?: number;

  /**
   * <p>The number of instances with <code>setup_failed</code> status.</p>
   */
  SetupFailed?: number;

  /**
   * <p>The number of instances with <code>shutting_down</code> status.</p>
   */
  ShuttingDown?: number;

  /**
   * <p>The number of instances with <code>start_failed</code> status.</p>
   */
  StartFailed?: number;

  /**
   * <p>The number of instances with <code>stop_failed</code> status.</p>
   */
  StopFailed?: number;

  /**
   * <p>The number of instances with <code>stopped</code> status.</p>
   */
  Stopped?: number;

  /**
   * <p>The number of instances with <code>stopping</code> status.</p>
   */
  Stopping?: number;

  /**
   * <p>The number of instances with <code>terminated</code> status.</p>
   */
  Terminated?: number;

  /**
   * <p>The number of instances with <code>terminating</code> status.</p>
   */
  Terminating?: number;

  /**
   * <p>The number of instances in the Unassigning state.</p>
   */
  Unassigning?: number;
}

export type _UnmarshalledInstancesCount = _InstancesCount;
