import { _S3Object } from "./_S3Object";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Document: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Bytes: {
      shape: {
        type: "blob"
      }
    },
    S3Object: {
      shape: _S3Object
    }
  }
};
