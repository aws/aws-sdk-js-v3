import { _CompletedPart, _UnmarshalledCompletedPart } from "./_CompletedPart";

/**
 * _CompletedMultipartUpload shape
 */
export interface _CompletedMultipartUpload {
  /**
   * _CompletedPartList shape
   */
  Parts?: Array<_CompletedPart> | Iterable<_CompletedPart>;
}

export interface _UnmarshalledCompletedMultipartUpload
  extends _CompletedMultipartUpload {
  /**
   * _CompletedPartList shape
   */
  Parts?: Array<_UnmarshalledCompletedPart>;
}
