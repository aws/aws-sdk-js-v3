/**
 * <p>Contains information about the errors encountered.</p>
 */
export interface _BatchPutMessageErrorEntry {
  /**
   * <p>The ID of the message that caused the error. (See the value corresponding to the <code>"messageId"</code> key in the <code>"message"</code> object.)</p>
   */
  messageId?: string;

  /**
   * <p>The code associated with the error.</p>
   */
  errorCode?:
    | "ResourceNotFoundException"
    | "InvalidRequestException"
    | "InternalFailureException"
    | "ServiceUnavailableException"
    | "ThrottlingException"
    | string;

  /**
   * <p>More information about the error.</p>
   */
  errorMessage?: string;
}

export type _UnmarshalledBatchPutMessageErrorEntry = _BatchPutMessageErrorEntry;
