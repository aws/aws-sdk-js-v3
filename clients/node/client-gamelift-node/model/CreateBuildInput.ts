import { _S3Location } from "./_S3Location";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBuildInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Version: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StorageLocation: {
      shape: _S3Location
    },
    OperatingSystem: {
      shape: {
        type: "string"
      }
    }
  }
};
