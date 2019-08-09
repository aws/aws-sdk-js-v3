import { _Diagnostics, _UnmarshalledDiagnostics } from "./_Diagnostics";

/**
 * <p>Information about a deployment lifecycle event.</p>
 */
export interface _LifecycleEvent {
  /**
   * <p>The deployment lifecycle event name, such as ApplicationStop, BeforeInstall, AfterInstall, ApplicationStart, or ValidateService.</p>
   */
  lifecycleEventName?: string;

  /**
   * <p>Diagnostic information about the deployment lifecycle event.</p>
   */
  diagnostics?: _Diagnostics;

  /**
   * <p>A timestamp that indicates when the deployment lifecycle event started.</p>
   */
  startTime?: Date | string | number;

  /**
   * <p>A timestamp that indicates when the deployment lifecycle event ended.</p>
   */
  endTime?: Date | string | number;

  /**
   * <p>The deployment lifecycle event status:</p> <ul> <li> <p>Pending: The deployment lifecycle event is pending.</p> </li> <li> <p>InProgress: The deployment lifecycle event is in progress.</p> </li> <li> <p>Succeeded: The deployment lifecycle event ran successfully.</p> </li> <li> <p>Failed: The deployment lifecycle event has failed.</p> </li> <li> <p>Skipped: The deployment lifecycle event has been skipped.</p> </li> <li> <p>Unknown: The deployment lifecycle event is unknown.</p> </li> </ul>
   */
  status?:
    | "Pending"
    | "InProgress"
    | "Succeeded"
    | "Failed"
    | "Skipped"
    | "Unknown"
    | string;
}

export interface _UnmarshalledLifecycleEvent extends _LifecycleEvent {
  /**
   * <p>Diagnostic information about the deployment lifecycle event.</p>
   */
  diagnostics?: _UnmarshalledDiagnostics;

  /**
   * <p>A timestamp that indicates when the deployment lifecycle event started.</p>
   */
  startTime?: Date;

  /**
   * <p>A timestamp that indicates when the deployment lifecycle event ended.</p>
   */
  endTime?: Date;
}
