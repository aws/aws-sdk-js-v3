import { Structure as _Structure_ } from "@aws-sdk/types";

export const UnlinkDeveloperIdentityInput: _Structure_ = {
  type: "structure",
  required: [
    "IdentityId",
    "IdentityPoolId",
    "DeveloperProviderName",
    "DeveloperUserIdentifier"
  ],
  members: {
    IdentityId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IdentityPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DeveloperProviderName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DeveloperUserIdentifier: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
