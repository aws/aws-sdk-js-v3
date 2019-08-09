import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAliasesInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "EntityId"],
  members: {
    OrganizationId: {
      shape: {
        type: "string"
      }
    },
    EntityId: {
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
