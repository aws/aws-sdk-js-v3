import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LayerVersionContentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Location: {
      shape: {
        type: "string"
      }
    },
    CodeSha256: {
      shape: {
        type: "string"
      }
    },
    CodeSize: {
      shape: {
        type: "integer"
      }
    }
  }
};
