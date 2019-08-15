import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IdentityProviderDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Url: {
      shape: {
        type: "string"
      }
    },
    InvocationRole: {
      shape: {
        type: "string"
      }
    }
  }
};
