import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
 */
export interface NoSuchEntityException
  extends __ServiceException__<_NoSuchEntityExceptionDetails> {
  name: "NoSuchEntityException";
}

export interface _NoSuchEntityExceptionDetails {
  /**
   * _noSuchEntityMessage shape
   */
  message?: string;
}
