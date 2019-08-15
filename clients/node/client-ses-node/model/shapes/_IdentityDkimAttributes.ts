import { _VerificationTokenList } from "./_VerificationTokenList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IdentityDkimAttributes: _Structure_ = {
  type: "structure",
  required: ["DkimEnabled", "DkimVerificationStatus"],
  members: {
    DkimEnabled: {
      shape: {
        type: "boolean"
      }
    },
    DkimVerificationStatus: {
      shape: {
        type: "string"
      }
    },
    DkimTokens: {
      shape: _VerificationTokenList
    }
  }
};
