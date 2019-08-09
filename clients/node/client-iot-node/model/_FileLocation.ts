import { _Stream } from "./_Stream";
import { _S3Location } from "./_S3Location";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FileLocation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    stream: {
      shape: _Stream
    },
    s3Location: {
      shape: _S3Location
    }
  }
};
