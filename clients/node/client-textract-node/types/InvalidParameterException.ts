import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An input parameter violated a constraint. For example, in synchronous operations, an <code>InvalidParameterException</code> exception occurs when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code> request parameter. Validate your parameter before calling the API operation again.</p>
 */
export interface InvalidParameterException
  extends __ServiceException__<_InvalidParameterExceptionDetails> {
  name: "InvalidParameterException";
}

export interface _InvalidParameterExceptionDetails {}
