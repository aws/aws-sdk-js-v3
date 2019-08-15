import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Invitation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountId: {
      shape: {
        type: "string"
      }
    },
    InvitationId: {
      shape: {
        type: "string"
      }
    },
    InvitedAt: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    },
    MemberStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
