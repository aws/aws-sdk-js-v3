import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClusterOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterArn: {
      shape: {
        type: "string"
      },
      locationName: "clusterArn"
    },
    ClusterName: {
      shape: {
        type: "string"
      },
      locationName: "clusterName"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    }
  }
};
