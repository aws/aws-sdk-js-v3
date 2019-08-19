import {
  _IndexAttachment,
  _UnmarshalledIndexAttachment
} from "./_IndexAttachment";

/**
 * <p>Represents the output of a <a>ListAttachedIndices</a> response operation.</p>
 */
export interface _BatchListAttachedIndicesResponse {
  /**
   * <p>The indices attached to the specified object.</p>
   */
  IndexAttachments?: Array<_IndexAttachment> | Iterable<_IndexAttachment>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface _UnmarshalledBatchListAttachedIndicesResponse
  extends _BatchListAttachedIndicesResponse {
  /**
   * <p>The indices attached to the specified object.</p>
   */
  IndexAttachments?: Array<_UnmarshalledIndexAttachment>;
}
