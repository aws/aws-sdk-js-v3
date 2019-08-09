import { _S3Storage } from "./_S3Storage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Storage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3: {
      shape: _S3Storage
    }
  }
};
