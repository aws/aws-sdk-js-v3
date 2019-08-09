import { _S3Resource } from "./_S3Resource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FailedS3Resource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    failedItem: {
      shape: _S3Resource
    },
    errorCode: {
      shape: {
        type: "string"
      }
    },
    errorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
