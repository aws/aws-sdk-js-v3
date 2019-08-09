import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more of the parameters specified for the delete operation is not valid. Verify all parameters and try again.</p>
 */
export interface InvalidDeleteInventoryParametersException
  extends __ServiceException__<
    _InvalidDeleteInventoryParametersExceptionDetails
  > {
  name: "InvalidDeleteInventoryParametersException";
}

export interface _InvalidDeleteInventoryParametersExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
