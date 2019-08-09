import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResetPasswordInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "UserId", "Password"],
  members: {
    OrganizationId: {
      shape: {
        type: "string"
      }
    },
    UserId: {
      shape: {
        type: "string",
        min: 12
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
