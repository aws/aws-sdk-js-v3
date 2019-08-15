import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Layer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CodeSize: {
      shape: {
        type: "integer"
      }
    }
  }
};
