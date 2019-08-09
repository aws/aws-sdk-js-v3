/**
 * <p>Contains details about the successful completion of a task state.</p>
 */
export interface _TaskSucceededEventDetails {
  /**
   * <p>The action of the resource called by a task state.</p>
   */
  resourceType: string;

  /**
   * <p>The service name of the resource in a task state.</p>
   */
  resource: string;

  /**
   * <p>The full JSON response from a resource when a task has succeeded. This response becomes the output of the related task.</p>
   */
  output?: string;
}

export type _UnmarshalledTaskSucceededEventDetails = _TaskSucceededEventDetails;
