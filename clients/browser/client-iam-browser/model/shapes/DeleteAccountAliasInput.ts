import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAccountAliasInput: _Structure_ = {
  type: "structure",
  required: ["AccountAlias"],
  members: {
    AccountAlias: {
      shape: {
        type: "string",
        min: 3
      }
    }
  }
};
