/**
 * <p>Contains details about a task that failed to start during an execution.</p>
 */
export interface _TaskStartFailedEventDetails {
  /**
   * <p>The action of the resource called by a task state.</p>
   */
  resourceType: string;

  /**
   * <p>The service name of the resource in a task state.</p>
   */
  resource: string;

  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export type _UnmarshalledTaskStartFailedEventDetails = _TaskStartFailedEventDetails;
