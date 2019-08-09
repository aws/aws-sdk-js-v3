/**
 * <p>Contains details about a task submitted to a resource .</p>
 */
export interface _TaskSubmittedEventDetails {
  /**
   * <p>The action of the resource called by a task state.</p>
   */
  resourceType: string;

  /**
   * <p>The service name of the resource in a task state.</p>
   */
  resource: string;

  /**
   * <p>The response from a resource when a task has started.</p>
   */
  output?: string;
}

export type _UnmarshalledTaskSubmittedEventDetails = _TaskSubmittedEventDetails;
