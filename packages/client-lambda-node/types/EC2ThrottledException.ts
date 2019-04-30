import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>AWS Lambda was throttled by Amazon EC2 during Lambda function initialization using the execution role provided for the Lambda function.</p>
 */
export interface EC2ThrottledException
  extends __ServiceException__<_EC2ThrottledExceptionDetails> {
  name: "EC2ThrottledException";
}

export interface _EC2ThrottledExceptionDetails {
  /**
   * _String shape
   */
  Type?: string;

  /**
   * _String shape
   */
  Message?: string;
}
