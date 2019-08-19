import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The listener that you specified has an endpoint group associated with it. You must remove all dependent resources from a listener before you can delete it.</p>
 */
export interface AssociatedEndpointGroupFoundException
  extends __ServiceException__<_AssociatedEndpointGroupFoundExceptionDetails> {
  name: "AssociatedEndpointGroupFoundException";
}

export interface _AssociatedEndpointGroupFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
