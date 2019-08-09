/**
 * <p>Contains informations about errors.</p>
 */
export interface _BatchPutMessageErrorEntry {
  /**
   * <p>The ID of the message that caused the error. (See the value corresponding to the "messageId" key in the message object.)</p>
   */
  messageId?: string;

  /**
   * <p>The code associated with the error.</p>
   */
  errorCode?: string;

  /**
   * <p>The message associated with the error.</p>
   */
  errorMessage?: string;
}

export type _UnmarshalledBatchPutMessageErrorEntry = _BatchPutMessageErrorEntry;
