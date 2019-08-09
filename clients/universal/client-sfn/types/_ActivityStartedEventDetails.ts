/**
 * <p>Contains details about the start of an activity during an execution.</p>
 */
export interface _ActivityStartedEventDetails {
  /**
   * <p>The name of the worker that the task is assigned to. These names are provided by the workers when calling <a>GetActivityTask</a>.</p>
   */
  workerName?: string;
}

export type _UnmarshalledActivityStartedEventDetails = _ActivityStartedEventDetails;
