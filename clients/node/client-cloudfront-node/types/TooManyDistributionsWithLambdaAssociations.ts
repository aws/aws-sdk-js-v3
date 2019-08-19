import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Processing your request would cause the maximum number of distributions with Lambda function associations per owner to be exceeded.</p>
 */
export interface TooManyDistributionsWithLambdaAssociations
  extends __ServiceException__<
    _TooManyDistributionsWithLambdaAssociationsDetails
  > {
  name: "TooManyDistributionsWithLambdaAssociations";
}

export interface _TooManyDistributionsWithLambdaAssociationsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
