import { _S3Location } from "./_S3Location";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamFile: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    fileId: {
      shape: {
        type: "integer"
      }
    },
    s3Location: {
      shape: _S3Location
    }
  }
};
