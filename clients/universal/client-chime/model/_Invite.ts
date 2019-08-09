import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Invite: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InviteId: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    EmailAddress: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    EmailStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
