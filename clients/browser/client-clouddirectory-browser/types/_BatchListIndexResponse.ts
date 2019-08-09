import {
  _IndexAttachment,
  _UnmarshalledIndexAttachment
} from "./_IndexAttachment";

/**
 * <p>Represents the output of a <a>ListIndex</a> response operation.</p>
 */
export interface _BatchListIndexResponse {
  /**
   * <p>The objects and indexed values attached to the index.</p>
   */
  IndexAttachments?: Array<_IndexAttachment> | Iterable<_IndexAttachment>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface _UnmarshalledBatchListIndexResponse
  extends _BatchListIndexResponse {
  /**
   * <p>The objects and indexed values attached to the index.</p>
   */
  IndexAttachments?: Array<_UnmarshalledIndexAttachment>;
}
