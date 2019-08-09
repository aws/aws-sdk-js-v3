import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified configuration for field-level encryption can't be associated with the specified cache behavior.</p>
 */
export interface IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
  extends __ServiceException__<
    _IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorDetails
  > {
  name: "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior";
}

export interface _IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorDetails {
  /**
   * _string shape
   */
  Message?: string;
}
