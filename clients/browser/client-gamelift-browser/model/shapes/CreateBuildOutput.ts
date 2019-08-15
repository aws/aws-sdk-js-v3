import { _Build } from "./_Build";
import { _AwsCredentials } from "./_AwsCredentials";
import { _S3Location } from "./_S3Location";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBuildOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Build: {
      shape: _Build
    },
    UploadCredentials: {
      shape: _AwsCredentials
    },
    StorageLocation: {
      shape: _S3Location
    }
  }
};
