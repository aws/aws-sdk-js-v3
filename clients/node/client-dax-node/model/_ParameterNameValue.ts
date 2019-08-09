import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParameterNameValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterName: {
      shape: {
        type: "string"
      }
    },
    ParameterValue: {
      shape: {
        type: "string"
      }
    }
  }
};
