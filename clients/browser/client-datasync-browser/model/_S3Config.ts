import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Config: _Structure_ = {
  type: "structure",
  required: ["BucketAccessRoleArn"],
  members: {
    BucketAccessRoleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
