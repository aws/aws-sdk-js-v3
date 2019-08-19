import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The AWS Serverless Application Repository service encountered an internal error.</p>
 */
export interface InternalServerErrorException
  extends __ServiceException__<_InternalServerErrorExceptionDetails> {
  name: "InternalServerErrorException";
}

export interface _InternalServerErrorExceptionDetails {
  /**
   * <p>500</p>
   */
  ErrorCode?: string;

  /**
   * <p>The AWS Serverless Application Repository service encountered an internal error.</p>
   */
  Message?: string;
}
