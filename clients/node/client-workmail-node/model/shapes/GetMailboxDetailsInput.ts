import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMailboxDetailsInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "UserId"],
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
    }
  }
};
