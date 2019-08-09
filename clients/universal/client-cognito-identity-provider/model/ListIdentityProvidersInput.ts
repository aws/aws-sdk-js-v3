import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListIdentityProvidersInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
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
