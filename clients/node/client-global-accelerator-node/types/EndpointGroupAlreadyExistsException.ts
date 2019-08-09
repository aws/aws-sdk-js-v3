import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The endpoint group that you specified already exists.</p>
 */
export interface EndpointGroupAlreadyExistsException
  extends __ServiceException__<_EndpointGroupAlreadyExistsExceptionDetails> {
  name: "EndpointGroupAlreadyExistsException";
}

export interface _EndpointGroupAlreadyExistsExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
