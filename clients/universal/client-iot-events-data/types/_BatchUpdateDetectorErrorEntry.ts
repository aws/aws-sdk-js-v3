/**
 * <p>Information about the error that occured when attempting to update a detector.</p>
 */
export interface _BatchUpdateDetectorErrorEntry {
  /**
   * <p>The <code>"messageId"</code> of the update request that caused the error. (The value of the <code>"messageId"</code> in the update request <code>"Detector"</code> object.)</p>
   */
  messageId?: string;

  /**
   * <p>The code of the error.</p>
   */
  errorCode?:
    | "ResourceNotFoundException"
    | "InvalidRequestException"
    | "InternalFailureException"
    | "ServiceUnavailableException"
    | "ThrottlingException"
    | string;

  /**
   * <p>A message describing the error.</p>
   */
  errorMessage?: string;
}

export type _UnmarshalledBatchUpdateDetectorErrorEntry = _BatchUpdateDetectorErrorEntry;
