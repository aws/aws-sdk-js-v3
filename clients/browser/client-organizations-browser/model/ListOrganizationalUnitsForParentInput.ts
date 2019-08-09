import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOrganizationalUnitsForParentInput: _Structure_ = {
  type: "structure",
  required: ["ParentId"],
  members: {
    ParentId: {
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
