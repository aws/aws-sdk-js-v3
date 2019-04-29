import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A target table with the specified name is either being created or deleted. </p>
 */
export interface TableInUseException
  extends __ServiceException__<_TableInUseExceptionDetails> {
  name: "TableInUseException";
}

export interface _TableInUseExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
