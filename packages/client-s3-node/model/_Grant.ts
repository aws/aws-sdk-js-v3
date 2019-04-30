import { _Grantee } from "./_Grantee";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Grant: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Grantee: {
      shape: _Grantee
    },
    Permission: {
      shape: {
        type: "string"
      }
    }
  }
};
