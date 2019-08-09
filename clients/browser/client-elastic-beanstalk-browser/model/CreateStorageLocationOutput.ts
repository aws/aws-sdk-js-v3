import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStorageLocationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3Bucket: {
      shape: {
        type: "string"
      }
    }
  }
};
