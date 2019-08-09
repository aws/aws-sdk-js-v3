import { List as _List_ } from "@aws-sdk/types";
import { _DBClusterEndpoint } from "./_DBClusterEndpoint";

export const _DBClusterEndpointList: _List_ = {
  type: "list",
  member: {
    shape: _DBClusterEndpoint,
    locationName: "DBClusterEndpointList"
  }
};
