import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateMailboxQuotaInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "UserId", "MailboxQuota"],
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
    MailboxQuota: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
