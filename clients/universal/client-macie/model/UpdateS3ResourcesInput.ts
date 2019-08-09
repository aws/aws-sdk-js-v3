import { _S3ResourcesClassificationUpdate } from "./_S3ResourcesClassificationUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateS3ResourcesInput: _Structure_ = {
  type: "structure",
  required: ["s3ResourcesUpdate"],
  members: {
    memberAccountId: {
      shape: {
        type: "string"
      }
    },
    s3ResourcesUpdate: {
      shape: _S3ResourcesClassificationUpdate
    }
  }
};
