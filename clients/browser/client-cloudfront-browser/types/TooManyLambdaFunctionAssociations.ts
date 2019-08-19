import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your request contains more Lambda function associations than are allowed per distribution.</p>
 */
export interface TooManyLambdaFunctionAssociations
  extends __ServiceException__<_TooManyLambdaFunctionAssociationsDetails> {
  name: "TooManyLambdaFunctionAssociations";
}

export interface _TooManyLambdaFunctionAssociationsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
