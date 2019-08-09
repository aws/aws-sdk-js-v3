import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified filter value is not valid.</p>
 */
export interface InvalidInstanceInformationFilterValue
  extends __ServiceException__<_InvalidInstanceInformationFilterValueDetails> {
  name: "InvalidInstanceInformationFilterValue";
}

export interface _InvalidInstanceInformationFilterValueDetails {
  /**
   * _String shape
   */
  message?: string;
}
