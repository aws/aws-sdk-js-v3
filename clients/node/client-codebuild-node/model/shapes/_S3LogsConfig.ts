import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3LogsConfig: _Structure_ = {
  type: "structure",
  required: ["status"],
  members: {
    status: {
      shape: {
        type: "string"
      }
    },
    location: {
      shape: {
        type: "string"
      }
    },
    encryptionDisabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
