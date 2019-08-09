import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The specified ARN is not supported. For example, it might be an ARN for a resource that is not expected. </p>
 */
export interface ArnNotSupportedException
  extends __ServiceException__<_ArnNotSupportedExceptionDetails> {
  name: "ArnNotSupportedException";
}

export interface _ArnNotSupportedExceptionDetails {}
