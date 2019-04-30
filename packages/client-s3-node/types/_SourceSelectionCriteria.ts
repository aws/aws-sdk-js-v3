import {
  _SseKmsEncryptedObjects,
  _UnmarshalledSseKmsEncryptedObjects
} from "./_SseKmsEncryptedObjects";

/**
 * <p>Container for filters that define which source objects should be replicated.</p>
 */
export interface _SourceSelectionCriteria {
  /**
   * <p> Container for filter information of selection of KMS Encrypted S3 objects. The element is required if you include <code>SourceSelectionCriteria</code> in the replication configuration. </p>
   */
  SseKmsEncryptedObjects?: _SseKmsEncryptedObjects;
}

export interface _UnmarshalledSourceSelectionCriteria
  extends _SourceSelectionCriteria {
  /**
   * <p> Container for filter information of selection of KMS Encrypted S3 objects. The element is required if you include <code>SourceSelectionCriteria</code> in the replication configuration. </p>
   */
  SseKmsEncryptedObjects?: _UnmarshalledSseKmsEncryptedObjects;
}
