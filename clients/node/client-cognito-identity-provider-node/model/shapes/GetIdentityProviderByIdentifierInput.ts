import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIdentityProviderByIdentifierInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "IdpIdentifier"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IdpIdentifier: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
