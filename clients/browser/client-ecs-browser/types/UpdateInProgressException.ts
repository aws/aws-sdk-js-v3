import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is already a current Amazon ECS container agent update in progress on the specified container instance. If the container agent becomes disconnected while it is in a transitional stage, such as <code>PENDING</code> or <code>STAGING</code>, the update process can get stuck in that state. However, when the agent reconnects, it resumes where it stopped previously.</p>
 */
export interface UpdateInProgressException
  extends __ServiceException__<_UpdateInProgressExceptionDetails> {
  name: "UpdateInProgressException";
}

export interface _UpdateInProgressExceptionDetails {}
