import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>AWS Lambda was not able to set up VPC access for the Lambda function because one or more configured subnets has no available IP addresses.</p>
 */
export interface SubnetIPAddressLimitReachedException
  extends __ServiceException__<_SubnetIPAddressLimitReachedExceptionDetails> {
  name: "SubnetIPAddressLimitReachedException";
}

export interface _SubnetIPAddressLimitReachedExceptionDetails {
  /**
   * _String shape
   */
  Type?: string;

  /**
   * _String shape
   */
  Message?: string;
}
