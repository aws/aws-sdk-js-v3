import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Failed access to resources caused an exception. This exception is thrown when Application Auto Scaling is unable to retrieve the alarms associated with a scaling policy due to a client error, for example, if the role ARN specified for a scalable target does not have permission to call the CloudWatch <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> on your behalf.</p>
 */
export interface FailedResourceAccessException
  extends __ServiceException__<_FailedResourceAccessExceptionDetails> {
  name: "FailedResourceAccessException";
}

export interface _FailedResourceAccessExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
