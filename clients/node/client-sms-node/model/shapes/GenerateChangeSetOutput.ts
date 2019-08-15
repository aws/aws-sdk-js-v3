import { _S3Location } from "./_S3Location";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GenerateChangeSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    s3Location: {
      shape: _S3Location
    }
  }
};
