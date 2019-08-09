import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified CloudFront distribution is not disabled. You must disable the distribution before you can delete it.</p>
 */
export interface StreamingDistributionNotDisabled
  extends __ServiceException__<_StreamingDistributionNotDisabledDetails> {
  name: "StreamingDistributionNotDisabled";
}

export interface _StreamingDistributionNotDisabledDetails {
  /**
   * _string shape
   */
  Message?: string;
}
