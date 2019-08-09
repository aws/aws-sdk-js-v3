import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AwsCredentials: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccessKeyId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SecretAccessKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SessionToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  },
  sensitive: true
};
