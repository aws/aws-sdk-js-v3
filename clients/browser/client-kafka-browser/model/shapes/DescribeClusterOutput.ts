import { _ClusterInfo } from "./_ClusterInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClusterOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterInfo: {
      shape: _ClusterInfo,
      locationName: "clusterInfo"
    }
  }
};
