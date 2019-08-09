import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IdentityInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IdentityType: {
      shape: {
        type: "string"
      }
    },
    IdentityName: {
      shape: {
        type: "string"
      }
    },
    SendingEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
