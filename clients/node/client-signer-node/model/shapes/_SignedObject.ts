import { _S3SignedObject } from "./_S3SignedObject";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SignedObject: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    s3: {
      shape: _S3SignedObject
    }
  }
};
