import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified value for the schema is not valid. You can only specify a scheme for load balancers in a VPC.</p>
 */
export interface InvalidSchemeException
  extends __ServiceException__<_InvalidSchemeExceptionDetails> {
  name: "InvalidSchemeException";
}

export interface _InvalidSchemeExceptionDetails {}
