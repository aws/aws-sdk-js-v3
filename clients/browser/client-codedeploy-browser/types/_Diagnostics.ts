/**
 * <p>Diagnostic information about executable scripts that are part of a deployment.</p>
 */
export interface _Diagnostics {
  /**
   * <p>The associated error code:</p> <ul> <li> <p>Success: The specified script ran.</p> </li> <li> <p>ScriptMissing: The specified script was not found in the specified location.</p> </li> <li> <p>ScriptNotExecutable: The specified script is not a recognized executable file type.</p> </li> <li> <p>ScriptTimedOut: The specified script did not finish running in the specified time period.</p> </li> <li> <p>ScriptFailed: The specified script failed to run as expected.</p> </li> <li> <p>UnknownError: The specified script did not run for an unknown reason.</p> </li> </ul>
   */
  errorCode?:
    | "Success"
    | "ScriptMissing"
    | "ScriptNotExecutable"
    | "ScriptTimedOut"
    | "ScriptFailed"
    | "UnknownError"
    | string;

  /**
   * <p>The name of the script.</p>
   */
  scriptName?: string;

  /**
   * <p>The message associated with the error.</p>
   */
  message?: string;

  /**
   * <p>The last portion of the diagnostic log.</p> <p>If available, AWS CodeDeploy returns up to the last 4 KB of the diagnostic log.</p>
   */
  logTail?: string;
}

export type _UnmarshalledDiagnostics = _Diagnostics;
