import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClusterVersion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterVersion: {
      shape: {
        type: "string"
      }
    },
    ClusterParameterGroupFamily: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
