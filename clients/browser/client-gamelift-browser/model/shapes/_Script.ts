import { _S3Location } from "./_S3Location";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Script: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ScriptId: {
      shape: {
        type: "string"
      }
    },
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
    SizeOnDisk: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    StorageLocation: {
      shape: _S3Location
    }
  }
};
