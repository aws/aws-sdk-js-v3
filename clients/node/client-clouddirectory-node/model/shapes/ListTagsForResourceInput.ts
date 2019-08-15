import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn"],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 50
      }
    }
  }
};
