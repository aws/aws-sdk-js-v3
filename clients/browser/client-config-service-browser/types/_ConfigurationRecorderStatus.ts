/**
 * <p>The current status of the configuration recorder.</p>
 */
export interface _ConfigurationRecorderStatus {
  /**
   * <p>The name of the configuration recorder.</p>
   */
  name?: string;

  /**
   * <p>The time the recorder was last started.</p>
   */
  lastStartTime?: Date | string | number;

  /**
   * <p>The time the recorder was last stopped.</p>
   */
  lastStopTime?: Date | string | number;

  /**
   * <p>Specifies whether or not the recorder is currently recording.</p>
   */
  recording?: boolean;

  /**
   * <p>The last (previous) status of the recorder.</p>
   */
  lastStatus?: "Pending" | "Success" | "Failure" | string;

  /**
   * <p>The error code indicating that the recording failed.</p>
   */
  lastErrorCode?: string;

  /**
   * <p>The message indicating that the recording failed due to an error.</p>
   */
  lastErrorMessage?: string;

  /**
   * <p>The time when the status was last changed.</p>
   */
  lastStatusChangeTime?: Date | string | number;
}

export interface _UnmarshalledConfigurationRecorderStatus
  extends _ConfigurationRecorderStatus {
  /**
   * <p>The time the recorder was last started.</p>
   */
  lastStartTime?: Date;

  /**
   * <p>The time the recorder was last stopped.</p>
   */
  lastStopTime?: Date;

  /**
   * <p>The time when the status was last changed.</p>
   */
  lastStatusChangeTime?: Date;
}
