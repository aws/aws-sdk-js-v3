import { _DBClusterEndpointList } from "./_DBClusterEndpointList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBClusterEndpointsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    DBClusterEndpoints: {
      shape: _DBClusterEndpointList
    }
  }
};
