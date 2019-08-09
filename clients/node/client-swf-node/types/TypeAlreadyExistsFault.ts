import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if the type already exists in the specified domain. You may get this fault if you are registering a type that is either already registered or deprecated, or if you undeprecate a type that is currently registered.</p>
 */
export interface TypeAlreadyExistsFault
  extends __ServiceException__<_TypeAlreadyExistsFaultDetails> {
  name: "TypeAlreadyExistsFault";
}

export interface _TypeAlreadyExistsFaultDetails {
  /**
   * <p>A description that may help with diagnosing the cause of the fault.</p>
   */
  message?: string;
}
