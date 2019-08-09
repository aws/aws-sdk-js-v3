import { _LogTarget, _UnmarshalledLogTarget } from "./_LogTarget";

/**
 * <p>The target configuration.</p>
 */
export interface _LogTargetConfiguration {
  /**
   * <p>A log target</p>
   */
  logTarget?: _LogTarget;

  /**
   * <p>The logging level.</p>
   */
  logLevel?: "DEBUG" | "INFO" | "ERROR" | "WARN" | "DISABLED" | string;
}

export interface _UnmarshalledLogTargetConfiguration
  extends _LogTargetConfiguration {
  /**
   * <p>A log target</p>
   */
  logTarget?: _UnmarshalledLogTarget;
}
