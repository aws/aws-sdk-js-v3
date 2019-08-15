import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ShareResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PrincipalId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InviteePrincipalId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Role: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    ShareId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StatusMessage: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
