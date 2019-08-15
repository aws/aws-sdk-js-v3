import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EntityRecognizerDocuments: _Structure_ = {
  type: "structure",
  required: ["S3Uri"],
  members: {
    S3Uri: {
      shape: {
        type: "string"
      }
    }
  }
};
