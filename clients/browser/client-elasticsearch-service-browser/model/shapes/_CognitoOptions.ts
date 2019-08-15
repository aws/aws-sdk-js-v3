import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CognitoOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    UserPoolId: {
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
    RoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
