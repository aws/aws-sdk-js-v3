import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified container was not found for the specified account.</p>
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
