import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VariableDefinition: _Structure_ = {
  type: "structure",
  required: ["name", "value"],
  members: {
    name: {
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
