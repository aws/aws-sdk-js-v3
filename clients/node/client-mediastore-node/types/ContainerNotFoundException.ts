import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The container that you specified in the request does not exist.</p>
 */
export interface ContainerNotFoundException
  extends __ServiceException__<_ContainerNotFoundExceptionDetails> {
  name: "ContainerNotFoundException";
}

export interface _ContainerNotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
