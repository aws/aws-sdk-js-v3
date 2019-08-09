import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the provided Amazon S3 bucket or AWS KMS encryption key is invalid, or that Amazon SES could not publish to the bucket, possibly due to permissions issues. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p>
 */
export interface InvalidS3ConfigurationException
  extends __ServiceException__<_InvalidS3ConfigurationExceptionDetails> {
  name: "InvalidS3ConfigurationException";
}

export interface _InvalidS3ConfigurationExceptionDetails {
  /**
   * <p>Indicated that the S3 Bucket was not found.</p>
   */
  Bucket?: string;
}
