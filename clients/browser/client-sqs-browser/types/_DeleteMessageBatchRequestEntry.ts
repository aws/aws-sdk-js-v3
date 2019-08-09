/**
 * <p>Encloses a receipt handle and an identifier for it.</p>
 */
export interface _DeleteMessageBatchRequestEntry {
  /**
   * <p>An identifier for this particular receipt handle. This is used to communicate the result.</p> <note> <p>The <code>Id</code>s of a batch request need to be unique within a request</p> </note>
   */
  Id: string;

  /**
   * <p>A receipt handle.</p>
   */
  ReceiptHandle: string;
}

export type _UnmarshalledDeleteMessageBatchRequestEntry = _DeleteMessageBatchRequestEntry;
