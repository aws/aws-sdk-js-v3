import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A metering record has already been emitted by the same EC2 instance for the given {usageDimension, timestamp} with a different usageQuantity.</p>
 */
export interface DuplicateRequestException
  extends __ServiceException__<_DuplicateRequestExceptionDetails> {
  name: "DuplicateRequestException";
}

export interface _DuplicateRequestExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
