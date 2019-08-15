import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SetVariableAction: _Structure_ = {
  type: "structure",
  required: ["variableName", "value"],
  members: {
    variableName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    value: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
