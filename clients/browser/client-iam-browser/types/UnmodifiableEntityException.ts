import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.</p>
 */
export interface UnmodifiableEntityException
  extends __ServiceException__<_UnmodifiableEntityExceptionDetails> {
  name: "UnmodifiableEntityException";
}

export interface _UnmodifiableEntityExceptionDetails {
  /**
   * _unmodifiableEntityMessage shape
   */
  message?: string;
}
