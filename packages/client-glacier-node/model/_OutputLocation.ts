import { _S3Location } from "./_S3Location";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputLocation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3: {
      shape: _S3Location
    }
  }
};
