import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The provided cluster track name is not valid.</p>
 */
export interface InvalidClusterTrackFault
  extends __ServiceException__<_InvalidClusterTrackFaultDetails> {
  name: "InvalidClusterTrackFault";
}

export interface _InvalidClusterTrackFaultDetails {}
