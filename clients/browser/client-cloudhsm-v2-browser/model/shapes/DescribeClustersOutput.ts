import { _Clusters } from "./_Clusters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClustersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Clusters: {
      shape: _Clusters
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
