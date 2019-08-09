import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is no update available for this Amazon ECS container agent. This could be because the agent is already running the latest version, or it is so old that there is no update path to the current version.</p>
 */
export interface NoUpdateAvailableException
  extends __ServiceException__<_NoUpdateAvailableExceptionDetails> {
  name: "NoUpdateAvailableException";
}

export interface _NoUpdateAvailableExceptionDetails {}
