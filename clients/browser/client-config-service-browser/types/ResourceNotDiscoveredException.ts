import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have specified a resource that is either unknown or has not been discovered.</p>
 */
export interface ResourceNotDiscoveredException
  extends __ServiceException__<_ResourceNotDiscoveredExceptionDetails> {
  name: "ResourceNotDiscoveredException";
}

export interface _ResourceNotDiscoveredExceptionDetails {}
