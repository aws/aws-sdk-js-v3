import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBParameterGroupStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    ParameterApplyStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
