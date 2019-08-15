import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccountWithRestoreAccess: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountId: {
      shape: {
        type: "string"
      }
    },
    AccountAlias: {
      shape: {
        type: "string"
      }
    }
  }
};
