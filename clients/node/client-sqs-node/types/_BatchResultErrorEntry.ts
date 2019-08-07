/**
 * <p>Gives a detailed description of the result of an action on each entry in the request.</p>
 */
export interface _BatchResultErrorEntry {
  /**
   * <p>The <code>Id</code> of an entry in a batch request.</p>
   */
  Id: string;

  /**
   * <p>Specifies whether the error happened due to the producer.</p>
   */
  SenderFault: boolean;

  /**
   * <p>An error code representing why the action failed on this entry.</p>
   */
  Code: string;

  /**
   * <p>A message explaining why the action failed on this entry.</p>
   */
  Message?: string;
}

export type _UnmarshalledBatchResultErrorEntry = _BatchResultErrorEntry;
