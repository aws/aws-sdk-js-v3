import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>
 */
export interface DeviceNotRegisteredException
  extends __ServiceException__<_DeviceNotRegisteredExceptionDetails> {
  name: "DeviceNotRegisteredException";
}

export interface _DeviceNotRegisteredExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
