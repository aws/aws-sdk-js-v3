import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGroupsInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId"],
  members: {
    OrganizationId: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
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
