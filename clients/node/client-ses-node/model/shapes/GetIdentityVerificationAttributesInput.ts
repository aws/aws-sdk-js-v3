import { _IdentityList } from "./_IdentityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIdentityVerificationAttributesInput: _Structure_ = {
  type: "structure",
  required: ["Identities"],
  members: {
    Identities: {
      shape: _IdentityList
    }
  }
};
