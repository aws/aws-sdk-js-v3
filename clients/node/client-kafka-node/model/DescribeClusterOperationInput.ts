import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClusterOperationInput: _Structure_ = {
  type: "structure",
  required: ["ClusterOperationArn"],
  members: {
    ClusterOperationArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "clusterOperationArn"
    }
  }
};
