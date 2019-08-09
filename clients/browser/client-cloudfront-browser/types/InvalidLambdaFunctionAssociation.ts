import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified Lambda function association is invalid.</p>
 */
export interface InvalidLambdaFunctionAssociation
  extends __ServiceException__<_InvalidLambdaFunctionAssociationDetails> {
  name: "InvalidLambdaFunctionAssociation";
}

export interface _InvalidLambdaFunctionAssociationDetails {
  /**
   * _string shape
   */
  Message?: string;
}
