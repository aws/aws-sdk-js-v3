/**
 * <p>The details of process-related information about a finding.</p>
 */
export interface _ProcessDetails {
  /**
   * <p>The name of the process.</p>
   */
  Name?: string;

  /**
   * <p>The path to the process executable.</p>
   */
  Path?: string;

  /**
   * <p>The process ID.</p>
   */
  Pid?: number;

  /**
   * <p>The parent process ID.</p>
   */
  ParentPid?: number;

  /**
   * <p>The date/time that the process was launched.</p>
   */
  LaunchedAt?: string;

  /**
   * <p>The date and time when the process was terminated.</p>
   */
  TerminatedAt?: string;
}

export type _UnmarshalledProcessDetails = _ProcessDetails;
