import { _CompletedPart, _UnmarshalledCompletedPart } from "./_CompletedPart";

/**
 * <p/>
 */
export interface _CompletedMultipartUpload {
  /**
   * <p/>
   */
  Parts?: Array<_CompletedPart> | Iterable<_CompletedPart>;
}

export interface _UnmarshalledCompletedMultipartUpload
  extends _CompletedMultipartUpload {
  /**
   * <p/>
   */
  Parts?: Array<_UnmarshalledCompletedPart>;
}
