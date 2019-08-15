import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Sample: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    url: {
      shape: {
        type: "string"
      }
    }
  }
};
