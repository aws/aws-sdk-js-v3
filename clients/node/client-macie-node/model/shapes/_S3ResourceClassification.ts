import { _ClassificationType } from "./_ClassificationType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3ResourceClassification: _Structure_ = {
  type: "structure",
  required: ["bucketName", "classificationType"],
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
    classificationType: {
      shape: _ClassificationType
    }
  }
};
