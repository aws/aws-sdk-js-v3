import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The string specified for the logging S3 key prefix does not comply with the documented constraints.</p>
 */
export interface InvalidS3KeyPrefixFault
  extends __ServiceException__<_InvalidS3KeyPrefixFaultDetails> {
  name: "InvalidS3KeyPrefixFault";
}

export interface _InvalidS3KeyPrefixFaultDetails {}
