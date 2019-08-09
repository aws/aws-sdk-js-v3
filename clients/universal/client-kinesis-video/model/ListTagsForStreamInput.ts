import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForStreamInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    StreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
