import { _AuthInfo } from "./_AuthInfo";
import { _Allowed } from "./_Allowed";
import { _Denied } from "./_Denied";
import { _MissingContextValues } from "./_MissingContextValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuthResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    authInfo: {
      shape: _AuthInfo
    },
    allowed: {
      shape: _Allowed
    },
    denied: {
      shape: _Denied
    },
    authDecision: {
      shape: {
        type: "string"
      }
    },
    missingContextValues: {
      shape: _MissingContextValues
    }
  }
};
