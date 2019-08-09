import { _GlobalClusterList } from "./_GlobalClusterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeGlobalClustersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    GlobalClusters: {
      shape: _GlobalClusterList
    }
  }
};
