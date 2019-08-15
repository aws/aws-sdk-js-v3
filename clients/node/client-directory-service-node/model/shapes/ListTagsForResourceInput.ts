import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId"],
  members: {
    ResourceId: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Limit: {
      shape: {
        type: "integer"
      }
    }
  }
};
