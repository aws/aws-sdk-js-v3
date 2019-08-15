import { _ClusterSummaryList } from "./_ClusterSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListClustersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Clusters: {
      shape: _ClusterSummaryList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
