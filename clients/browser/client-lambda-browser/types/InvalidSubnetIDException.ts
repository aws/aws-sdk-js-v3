import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The Subnet ID provided in the Lambda function VPC configuration is invalid.</p>
 */
export interface InvalidSubnetIDException
  extends __ServiceException__<_InvalidSubnetIDExceptionDetails> {
  name: "InvalidSubnetIDException";
}

export interface _InvalidSubnetIDExceptionDetails {
  /**
   * _String shape
   */
  Type?: string;

  /**
   * _String shape
   */
  Message?: string;
}
