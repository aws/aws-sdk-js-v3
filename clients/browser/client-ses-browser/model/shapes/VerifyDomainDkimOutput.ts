import { _VerificationTokenList } from "./_VerificationTokenList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const VerifyDomainDkimOutput: _Structure_ = {
  type: "structure",
  required: ["DkimTokens"],
  members: {
    DkimTokens: {
      shape: _VerificationTokenList
    }
  }
};
