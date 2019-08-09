import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3MachineLearningModelResourceData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DestinationPath: {
      shape: {
        type: "string"
      }
    },
    S3Uri: {
      shape: {
        type: "string"
      }
    }
  }
};
