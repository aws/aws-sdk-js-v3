import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBParameterGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBParameterGroupName: {
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
    DBParameterGroupArn: {
      shape: {
        type: "string"
      }
    }
  }
};
