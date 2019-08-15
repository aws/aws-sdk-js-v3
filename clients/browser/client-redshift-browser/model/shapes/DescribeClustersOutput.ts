import { _ClusterList } from "./_ClusterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClustersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    Clusters: {
      shape: _ClusterList
    }
  }
};
