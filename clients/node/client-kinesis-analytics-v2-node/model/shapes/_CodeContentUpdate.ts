import { _S3ContentLocationUpdate } from "./_S3ContentLocationUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CodeContentUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TextContentUpdate: {
      shape: {
        type: "string"
      }
    },
    ZipFileContentUpdate: {
      shape: {
        type: "blob"
      }
    },
    S3ContentLocationUpdate: {
      shape: _S3ContentLocationUpdate
    }
  }
};
