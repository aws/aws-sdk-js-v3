import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The endpoint group that you specified doesn't exist.</p>
 */
export interface EndpointGroupNotFoundException
  extends __ServiceException__<_EndpointGroupNotFoundExceptionDetails> {
  name: "EndpointGroupNotFoundException";
}

export interface _EndpointGroupNotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
