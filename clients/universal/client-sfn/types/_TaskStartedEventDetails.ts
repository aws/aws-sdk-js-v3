/**
 * <p>Contains details about the start of a task during an execution.</p>
 */
export interface _TaskStartedEventDetails {
  /**
   * <p>The action of the resource called by a task state.</p>
   */
  resourceType: string;

  /**
   * <p>The service name of the resource in a task state.</p>
   */
  resource: string;
}

export type _UnmarshalledTaskStartedEventDetails = _TaskStartedEventDetails;
