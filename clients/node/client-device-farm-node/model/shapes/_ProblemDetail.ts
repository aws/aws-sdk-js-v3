import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProblemDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    name: {
      shape: {
        type: "string"
      }
    }
  }
};
