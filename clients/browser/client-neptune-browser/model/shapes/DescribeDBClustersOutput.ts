import { _DBClusterList } from "./_DBClusterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBClustersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    DBClusters: {
      shape: _DBClusterList
    }
  }
};
