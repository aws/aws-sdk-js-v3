import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteClusterOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterArn: {
      shape: {
        type: "string"
      },
      locationName: "clusterArn"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    }
  }
};
