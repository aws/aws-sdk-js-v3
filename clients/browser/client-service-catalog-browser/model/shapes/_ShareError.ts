import { _Namespaces } from "./_Namespaces";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ShareError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Accounts: {
      shape: _Namespaces
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    Error: {
      shape: {
        type: "string"
      }
    }
  }
};
