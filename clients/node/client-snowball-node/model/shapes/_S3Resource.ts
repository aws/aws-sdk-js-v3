import { _KeyRange } from "./_KeyRange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Resource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BucketArn: {
      shape: {
        type: "string"
      }
    },
    KeyRange: {
      shape: _KeyRange
    }
  }
};
