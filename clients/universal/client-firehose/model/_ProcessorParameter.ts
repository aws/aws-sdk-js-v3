import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProcessorParameter: _Structure_ = {
  type: "structure",
  required: ["ParameterName", "ParameterValue"],
  members: {
    ParameterName: {
      shape: {
        type: "string"
      }
    },
    ParameterValue: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
