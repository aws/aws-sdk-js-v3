import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBClusterOptionGroupStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBClusterOptionGroupName: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
