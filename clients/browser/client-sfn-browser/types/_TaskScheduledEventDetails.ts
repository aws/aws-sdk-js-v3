/**
 * <p>Contains details about a task scheduled during an execution.</p>
 */
export interface _TaskScheduledEventDetails {
  /**
   * <p>The action of the resource called by a task state.</p>
   */
  resourceType: string;

  /**
   * <p>The service name of the resource in a task state.</p>
   */
  resource: string;

  /**
   * <p>The region of the scheduled task</p>
   */
  region: string;

  /**
   * <p>The JSON data passed to the resource referenced in a task state.</p>
   */
  parameters: string;

  /**
   * <p>The maximum allowed duration of the task.</p>
   */
  timeoutInSeconds?: number;
}

export type _UnmarshalledTaskScheduledEventDetails = _TaskScheduledEventDetails;
