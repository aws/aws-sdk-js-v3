import { _S3Destination } from "./_S3Destination";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Destination: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    s3: {
      shape: _S3Destination
    }
  }
};
