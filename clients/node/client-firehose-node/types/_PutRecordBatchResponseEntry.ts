/**
 * <p>Contains the result for an individual record from a <a>PutRecordBatch</a> request. If the record is successfully added to your delivery stream, it receives a record ID. If the record fails to be added to your delivery stream, the result includes an error code and an error message.</p>
 */
export interface _PutRecordBatchResponseEntry {
  /**
   * <p>The ID of the record.</p>
   */
  RecordId?: string;

  /**
   * <p>The error code for an individual record result.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message for an individual record result.</p>
   */
  ErrorMessage?: string;
}

export type _UnmarshalledPutRecordBatchResponseEntry = _PutRecordBatchResponseEntry;
