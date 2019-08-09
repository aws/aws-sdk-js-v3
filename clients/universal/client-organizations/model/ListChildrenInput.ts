import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListChildrenInput: _Structure_ = {
  type: "structure",
  required: ["ParentId", "ChildType"],
  members: {
    ParentId: {
      shape: {
        type: "string"
      }
    },
    ChildType: {
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
        min: 1
      }
    }
  }
};
