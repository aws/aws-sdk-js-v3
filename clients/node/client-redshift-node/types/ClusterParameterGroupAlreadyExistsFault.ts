import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A cluster parameter group with the same name already exists.</p>
 */
export interface ClusterParameterGroupAlreadyExistsFault
  extends __ServiceException__<
    _ClusterParameterGroupAlreadyExistsFaultDetails
  > {
  name: "ClusterParameterGroupAlreadyExistsFault";
}

export interface _ClusterParameterGroupAlreadyExistsFaultDetails {}
