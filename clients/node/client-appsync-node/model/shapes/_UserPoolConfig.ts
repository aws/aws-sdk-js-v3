import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserPoolConfig: _Structure_ = {
  type: "structure",
  required: ["userPoolId", "awsRegion", "defaultAction"],
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
    defaultAction: {
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
