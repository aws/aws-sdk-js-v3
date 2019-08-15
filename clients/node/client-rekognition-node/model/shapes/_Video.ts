import { _S3Object } from "./_S3Object";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Video: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3Object: {
      shape: _S3Object
    }
  }
};
