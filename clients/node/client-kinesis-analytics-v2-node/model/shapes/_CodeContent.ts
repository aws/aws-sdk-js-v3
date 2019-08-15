import { _S3ContentLocation } from "./_S3ContentLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CodeContent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TextContent: {
      shape: {
        type: "string"
      }
    },
    ZipFileContent: {
      shape: {
        type: "blob"
      }
    },
    S3ContentLocation: {
      shape: _S3ContentLocation
    }
  }
};
