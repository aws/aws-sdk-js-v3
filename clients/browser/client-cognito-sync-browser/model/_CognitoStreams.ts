import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CognitoStreams: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamName: {
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
    },
    StreamingStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
