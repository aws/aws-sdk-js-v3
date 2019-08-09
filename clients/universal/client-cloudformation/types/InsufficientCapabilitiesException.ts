import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The template contains resources with capabilities that weren't specified in the Capabilities parameter.</p>
 */
export interface InsufficientCapabilitiesException
  extends __ServiceException__<_InsufficientCapabilitiesExceptionDetails> {
  name: "InsufficientCapabilitiesException";
}

export interface _InsufficientCapabilitiesExceptionDetails {}
