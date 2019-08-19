import { _Owner, _UnmarshalledOwner } from "./_Owner";
import { _Initiator, _UnmarshalledInitiator } from "./_Initiator";

/**
 * <p/>
 */
export interface _MultipartUpload {
  /**
   * <p>Upload ID that identifies the multipart upload.</p>
   */
  UploadId?: string;

  /**
   * <p>Key of the object for which the multipart upload was initiated.</p>
   */
  Key?: string;

  /**
   * <p>Date and time at which the multipart upload was initiated.</p>
   */
  Initiated?: Date | string | number;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?:
    | "STANDARD"
    | "REDUCED_REDUNDANCY"
    | "STANDARD_IA"
    | "ONEZONE_IA"
    | "INTELLIGENT_TIERING"
    | "GLACIER"
    | "DEEP_ARCHIVE"
    | string;

  /**
   * <p/>
   */
  Owner?: _Owner;

  /**
   * <p>Identifies who initiated the multipart upload.</p>
   */
  Initiator?: _Initiator;
}

export interface _UnmarshalledMultipartUpload extends _MultipartUpload {
  /**
   * <p>Date and time at which the multipart upload was initiated.</p>
   */
  Initiated?: Date;

  /**
   * <p/>
   */
  Owner?: _UnmarshalledOwner;

  /**
   * <p>Identifies who initiated the multipart upload.</p>
   */
  Initiator?: _UnmarshalledInitiator;
}
