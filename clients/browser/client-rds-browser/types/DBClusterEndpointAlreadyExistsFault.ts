import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified custom endpoint can't be created because it already exists.</p>
 */
export interface DBClusterEndpointAlreadyExistsFault
  extends __ServiceException__<_DBClusterEndpointAlreadyExistsFaultDetails> {
  name: "DBClusterEndpointAlreadyExistsFault";
}

export interface _DBClusterEndpointAlreadyExistsFaultDetails {}
