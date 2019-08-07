import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForStreamInput: _Structure_ = {
  type: "structure",
  required: ["StreamName"],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ExclusiveStartTagKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
