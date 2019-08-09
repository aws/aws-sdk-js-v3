import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p/>
 */
export interface GlobalClusterAlreadyExistsFault
  extends __ServiceException__<_GlobalClusterAlreadyExistsFaultDetails> {
  name: "GlobalClusterAlreadyExistsFault";
}

export interface _GlobalClusterAlreadyExistsFaultDetails {}
