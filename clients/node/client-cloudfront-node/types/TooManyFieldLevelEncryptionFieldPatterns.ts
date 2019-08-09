import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of field patterns for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionFieldPatterns
  extends __ServiceException__<
    _TooManyFieldLevelEncryptionFieldPatternsDetails
  > {
  name: "TooManyFieldLevelEncryptionFieldPatterns";
}

export interface _TooManyFieldLevelEncryptionFieldPatternsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
