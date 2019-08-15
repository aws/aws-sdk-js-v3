import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateUserInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "Name", "DisplayName", "Password"],
  members: {
    OrganizationId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DisplayName: {
      shape: {
        type: "string"
      }
    },
    Password: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
