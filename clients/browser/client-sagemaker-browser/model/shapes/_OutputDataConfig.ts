import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputDataConfig: _Structure_ = {
  type: "structure",
  required: ["S3OutputPath"],
  members: {
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    S3OutputPath: {
      shape: {
        type: "string"
      }
    }
  }
};
