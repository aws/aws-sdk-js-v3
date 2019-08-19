import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum size of a profile for field-level encryption was exceeded.</p>
 */
export interface FieldLevelEncryptionProfileSizeExceeded
  extends __ServiceException__<
    _FieldLevelEncryptionProfileSizeExceededDetails
  > {
  name: "FieldLevelEncryptionProfileSizeExceeded";
}

export interface _FieldLevelEncryptionProfileSizeExceededDetails {
  /**
   * _string shape
   */
  Message?: string;
}
