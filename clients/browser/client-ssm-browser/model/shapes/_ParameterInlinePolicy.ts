import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParameterInlinePolicy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyText: {
      shape: {
        type: "string"
      }
    },
    PolicyType: {
      shape: {
        type: "string"
      }
    },
    PolicyStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
