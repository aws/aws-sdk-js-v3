import { _ClassificationTypeUpdate } from "./_ClassificationTypeUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3ResourceClassificationUpdate: _Structure_ = {
  type: "structure",
  required: ["bucketName", "classificationTypeUpdate"],
  members: {
    bucketName: {
      shape: {
        type: "string"
      }
    },
    prefix: {
      shape: {
        type: "string"
      }
    },
    classificationTypeUpdate: {
      shape: _ClassificationTypeUpdate
    }
  }
};
