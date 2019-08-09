import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Parameter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterKey: {
      shape: {
        type: "string"
      }
    },
    ParameterValue: {
      shape: {
        type: "string"
      }
    },
    UsePreviousValue: {
      shape: {
        type: "boolean"
      }
    },
    ResolvedValue: {
      shape: {
        type: "string"
      }
    }
  }
};
