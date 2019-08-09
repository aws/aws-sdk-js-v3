import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResolveAliasInput: _Structure_ = {
  type: "structure",
  required: ["AliasId"],
  members: {
    AliasId: {
      shape: {
        type: "string"
      }
    }
  }
};
