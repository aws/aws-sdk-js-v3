/**
 * <p>Describes a scheduled action that could not be created, updated, or deleted.</p>
 */
export interface _FailedScheduledUpdateGroupActionRequest {
  /**
   * <p>The name of the scheduled action.</p>
   */
  ScheduledActionName: string;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message accompanying the error code.</p>
   */
  ErrorMessage?: string;
}

export type _UnmarshalledFailedScheduledUpdateGroupActionRequest = _FailedScheduledUpdateGroupActionRequest;
