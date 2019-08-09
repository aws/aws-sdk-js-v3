import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your IAM user lacks the necessary Amazon EC2 permissions to perform the attempted action.</p>
 */
export interface Ec2RequestFailedException
  extends __ServiceException__<_Ec2RequestFailedExceptionDetails> {
  name: "Ec2RequestFailedException";
}

export interface _Ec2RequestFailedExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
