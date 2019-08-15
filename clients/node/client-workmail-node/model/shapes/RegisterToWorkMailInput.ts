import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterToWorkMailInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "EntityId", "Email"],
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
    Email: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
