import { _S3ResourcesClassification } from "./_S3ResourcesClassification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListS3ResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    s3Resources: {
      shape: _S3ResourcesClassification
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
