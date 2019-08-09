import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AWSSessionCredentials: _Structure_ = {
  type: "structure",
  required: ["accessKeyId", "secretAccessKey", "sessionToken"],
  members: {
    accessKeyId: {
      shape: {
        type: "string"
      }
    },
    secretAccessKey: {
      shape: {
        type: "string"
      }
    },
    sessionToken: {
      shape: {
        type: "string"
      }
    }
  },
  sensitive: true
};
