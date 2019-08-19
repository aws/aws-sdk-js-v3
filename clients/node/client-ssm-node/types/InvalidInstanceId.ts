import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The following problems can cause this exception:</p> <p>You do not have permission to access the instance.</p> <p>SSM Agent is not running. Verify that SSM Agent is running.</p> <p>SSM Agent is not registered with the SSM endpoint. Try reinstalling SSM Agent.</p> <p>The instance is not in valid state. Valid states are: Running, Pending, Stopped, Stopping. Invalid states are: Shutting-down and Terminated.</p>
 */
export interface InvalidInstanceId
  extends __ServiceException__<_InvalidInstanceIdDetails> {
  name: "InvalidInstanceId";
}

export interface _InvalidInstanceIdDetails {
  /**
   * _String shape
   */
  Message?: string;
}
