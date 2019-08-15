import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGroupMembersInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "GroupId"],
  members: {
    OrganizationId: {
      shape: {
        type: "string"
      }
    },
    GroupId: {
      shape: {
        type: "string",
        min: 12
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
