import {
  _SseKmsEncryptedObjects,
  _UnmarshalledSseKmsEncryptedObjects
} from "./_SseKmsEncryptedObjects";

/**
 * <p>A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects. Currently, Amazon S3 supports only the filter that you can specify for objects created with server-side encryption using an AWS KMS-Managed Key (SSE-KMS).</p>
 */
export interface _SourceSelectionCriteria {
  /**
   * <p> A container for filter information for the selection of Amazon S3 objects encrypted with AWS KMS. If you include <code>SourceSelectionCriteria</code> in the replication configuration, this element is required. </p>
   */
  SseKmsEncryptedObjects?: _SseKmsEncryptedObjects;
}

export interface _UnmarshalledSourceSelectionCriteria
  extends _SourceSelectionCriteria {
  /**
   * <p> A container for filter information for the selection of Amazon S3 objects encrypted with AWS KMS. If you include <code>SourceSelectionCriteria</code> in the replication configuration, this element is required. </p>
   */
  SseKmsEncryptedObjects?: _UnmarshalledSseKmsEncryptedObjects;
}
