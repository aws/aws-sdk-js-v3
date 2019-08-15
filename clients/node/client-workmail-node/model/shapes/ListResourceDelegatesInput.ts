import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResourceDelegatesInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "ResourceId"],
  members: {
    OrganizationId: {
      shape: {
        type: "string"
      }
    },
    ResourceId: {
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
