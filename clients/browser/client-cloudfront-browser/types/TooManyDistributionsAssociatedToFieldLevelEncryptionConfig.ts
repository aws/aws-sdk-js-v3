import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of distributions have been associated with the specified configuration for field-level encryption.</p>
 */
export interface TooManyDistributionsAssociatedToFieldLevelEncryptionConfig
  extends __ServiceException__<
    _TooManyDistributionsAssociatedToFieldLevelEncryptionConfigDetails
  > {
  name: "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig";
}

export interface _TooManyDistributionsAssociatedToFieldLevelEncryptionConfigDetails {
  /**
   * _string shape
   */
  Message?: string;
}
