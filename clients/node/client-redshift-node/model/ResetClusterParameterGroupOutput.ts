import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResetClusterParameterGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    ParameterGroupStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
