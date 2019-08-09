import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This action isn't available in the current Region.</p>
 */
export interface UnsupportedAPIEndpointException
  extends __ServiceException__<_UnsupportedAPIEndpointExceptionDetails> {
  name: "UnsupportedAPIEndpointException";
}

export interface _UnsupportedAPIEndpointExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
