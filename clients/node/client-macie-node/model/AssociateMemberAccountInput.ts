import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateMemberAccountInput: _Structure_ = {
  type: "structure",
  required: ["memberAccountId"],
  members: {
    memberAccountId: {
      shape: {
        type: "string"
      }
    }
  }
};
