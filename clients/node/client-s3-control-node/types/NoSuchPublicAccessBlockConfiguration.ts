import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p/>
 */
export interface NoSuchPublicAccessBlockConfiguration
  extends __ServiceException__<_NoSuchPublicAccessBlockConfigurationDetails> {
  name: "NoSuchPublicAccessBlockConfiguration";
}

export interface _NoSuchPublicAccessBlockConfigurationDetails {
  /**
   * _NoSuchPublicAccessBlockConfigurationMessage shape
   */
  Message?: string;
}
