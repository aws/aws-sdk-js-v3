import { _IdentityProviderType } from "./_IdentityProviderType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIdentityProviderByIdentifierOutput: _Structure_ = {
  type: "structure",
  required: ["IdentityProvider"],
  members: {
    IdentityProvider: {
      shape: _IdentityProviderType
    }
  }
};
