import { _Clusters } from "./_Clusters";
import { _Failures } from "./_Failures";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClustersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    clusters: {
      shape: _Clusters
    },
    failures: {
      shape: _Failures
    }
  }
};
