import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransformOutput: _Structure_ = {
  type: "structure",
  required: ["S3OutputPath"],
  members: {
    S3OutputPath: {
      shape: {
        type: "string"
      }
    },
    Accept: {
      shape: {
        type: "string"
      }
    },
    AssembleWith: {
      shape: {
        type: "string"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    }
  }
};
