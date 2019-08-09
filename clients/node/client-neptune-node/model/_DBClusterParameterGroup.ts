import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBClusterParameterGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBClusterParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    DBParameterGroupFamily: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    DBClusterParameterGroupArn: {
      shape: {
        type: "string"
      }
    }
  }
};
