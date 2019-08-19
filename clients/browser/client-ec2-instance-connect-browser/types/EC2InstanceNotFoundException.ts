import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the instance requested was not found in the given zone. Check that you have provided a valid instance ID and the correct zone.</p>
 */
export interface EC2InstanceNotFoundException
  extends __ServiceException__<_EC2InstanceNotFoundExceptionDetails> {
  name: "EC2InstanceNotFoundException";
}

export interface _EC2InstanceNotFoundExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
