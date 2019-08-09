import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The syntax of the query is incorrect.</p>
 */
export interface InvalidExpressionException
  extends __ServiceException__<_InvalidExpressionExceptionDetails> {
  name: "InvalidExpressionException";
}

export interface _InvalidExpressionExceptionDetails {}
