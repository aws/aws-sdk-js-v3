import { _S3Location } from "./_S3Location";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CodeSource: _Structure_ = {
  type: "structure",
  required: ["s3"],
  members: {
    s3: {
      shape: _S3Location
    }
  }
};
