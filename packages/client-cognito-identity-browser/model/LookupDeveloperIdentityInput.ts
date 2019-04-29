import { Structure as _Structure_ } from "@aws-sdk/types";

export const LookupDeveloperIdentityInput: _Structure_ = {
  type: "structure",
  required: ["IdentityPoolId"],
  members: {
    IdentityPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IdentityId: {
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
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
