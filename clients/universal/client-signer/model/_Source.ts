import { _S3Source } from "./_S3Source";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Source: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    s3: {
      shape: _S3Source
    }
  }
};
