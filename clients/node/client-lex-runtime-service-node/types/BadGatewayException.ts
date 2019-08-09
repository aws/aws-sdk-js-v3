import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Either the Amazon Lex bot is still building, or one of the dependent services (Amazon Polly, AWS Lambda) failed with an internal service error.</p>
 */
export interface BadGatewayException
  extends __ServiceException__<_BadGatewayExceptionDetails> {
  name: "BadGatewayException";
}

export interface _BadGatewayExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
