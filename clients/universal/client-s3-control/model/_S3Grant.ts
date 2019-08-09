import { _S3Grantee } from "./_S3Grantee";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Grant: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Grantee: {
      shape: _S3Grantee
    },
    Permission: {
      shape: {
        type: "string"
      }
    }
  }
};
