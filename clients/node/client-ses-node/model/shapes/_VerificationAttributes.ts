import { Map as _Map_ } from "@aws-sdk/types";
import { _IdentityVerificationAttributes } from "./_IdentityVerificationAttributes";

export const _VerificationAttributes: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _IdentityVerificationAttributes
  }
};
