import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CognitoUserPoolConfig: _Structure_ = {
  type: "structure",
  required: ["userPoolId", "awsRegion"],
  members: {
    userPoolId: {
      shape: {
        type: "string"
      }
    },
    awsRegion: {
      shape: {
        type: "string"
      }
    },
    appIdClientRegex: {
      shape: {
        type: "string"
      }
    }
  }
};
