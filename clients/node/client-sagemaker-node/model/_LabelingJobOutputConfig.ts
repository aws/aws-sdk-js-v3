import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LabelingJobOutputConfig: _Structure_ = {
  type: "structure",
  required: ["S3OutputPath"],
  members: {
    S3OutputPath: {
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
