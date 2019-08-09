import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified fleet has no available instances to fulfill a <code>CreateGameSession</code> request. Clients can retry such requests immediately or after a waiting period.</p>
 */
export interface FleetCapacityExceededException
  extends __ServiceException__<_FleetCapacityExceededExceptionDetails> {
  name: "FleetCapacityExceededException";
}

export interface _FleetCapacityExceededExceptionDetails {
  /**
   * _NonEmptyString shape
   */
  Message?: string;
}
