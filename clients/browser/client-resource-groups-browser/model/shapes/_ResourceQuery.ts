import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceQuery: _Structure_ = {
  type: "structure",
  required: ["Type", "Query"],
  members: {
    Type: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Query: {
      shape: {
        type: "string"
      }
    }
  }
};
