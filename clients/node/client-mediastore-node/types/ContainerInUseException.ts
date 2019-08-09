import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The container that you specified in the request already exists or is being updated.</p>
 */
export interface ContainerInUseException
  extends __ServiceException__<_ContainerInUseExceptionDetails> {
  name: "ContainerInUseException";
}

export interface _ContainerInUseExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
