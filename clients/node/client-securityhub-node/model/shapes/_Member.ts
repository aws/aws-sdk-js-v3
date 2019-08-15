import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Member: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountId: {
      shape: {
        type: "string"
      }
    },
    Email: {
      shape: {
        type: "string"
      }
    },
    MasterId: {
      shape: {
        type: "string"
      }
    },
    MemberStatus: {
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
    UpdatedAt: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    }
  }
};
