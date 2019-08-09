import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The minimum healthy instance value was specified in an invalid format.</p>
 */
export interface InvalidMinimumHealthyHostValueException
  extends __ServiceException__<
    _InvalidMinimumHealthyHostValueExceptionDetails
  > {
  name: "InvalidMinimumHealthyHostValueException";
}

export interface _InvalidMinimumHealthyHostValueExceptionDetails {}
