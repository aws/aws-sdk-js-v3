import { _ClusterOperationInfo } from "./_ClusterOperationInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClusterOperationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterOperationInfo: {
      shape: _ClusterOperationInfo,
      locationName: "clusterOperationInfo"
    }
  }
};
