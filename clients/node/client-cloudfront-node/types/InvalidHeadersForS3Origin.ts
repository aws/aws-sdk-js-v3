import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The headers specified are not valid for an Amazon S3 origin.</p>
 */
export interface InvalidHeadersForS3Origin
  extends __ServiceException__<_InvalidHeadersForS3OriginDetails> {
  name: "InvalidHeadersForS3Origin";
}

export interface _InvalidHeadersForS3OriginDetails {
  /**
   * _string shape
   */
  Message?: string;
}
