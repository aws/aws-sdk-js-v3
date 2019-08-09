import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your request has already been completed.</p>
 */
export interface RequestAlreadyProcessedException
  extends __ServiceException__<_RequestAlreadyProcessedExceptionDetails> {
  name: "RequestAlreadyProcessedException";
}

export interface _RequestAlreadyProcessedExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
