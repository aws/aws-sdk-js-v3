/**
 * <p>Describes an automatic scaling process that has been suspended. For more information, see <a>ProcessType</a>.</p>
 */
export interface _SuspendedProcess {
  /**
   * <p>The name of the suspended process.</p>
   */
  ProcessName?: string;

  /**
   * <p>The reason that the process was suspended.</p>
   */
  SuspensionReason?: string;
}

export type _UnmarshalledSuspendedProcess = _SuspendedProcess;
