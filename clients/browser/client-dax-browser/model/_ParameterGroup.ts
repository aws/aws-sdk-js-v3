import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParameterGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterGroupName: {
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
