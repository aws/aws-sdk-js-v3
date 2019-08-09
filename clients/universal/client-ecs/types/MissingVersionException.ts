import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Amazon ECS is unable to determine the current version of the Amazon ECS container agent on the container instance and does not have enough information to proceed with an update. This could be because the agent running on the container instance is an older or custom version that does not use our version information.</p>
 */
export interface MissingVersionException
  extends __ServiceException__<_MissingVersionExceptionDetails> {
  name: "MissingVersionException";
}

export interface _MissingVersionExceptionDetails {}
