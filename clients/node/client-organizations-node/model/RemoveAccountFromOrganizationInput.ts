import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveAccountFromOrganizationInput: _Structure_ = {
  type: "structure",
  required: ["AccountId"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      }
    }
  }
};
