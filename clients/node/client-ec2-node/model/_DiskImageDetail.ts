import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DiskImageDetail: _Structure_ = {
  type: "structure",
  required: ["Bytes", "Format", "ImportManifestUrl"],
  members: {
    Bytes: {
      shape: {
        type: "integer"
      },
      locationName: "bytes"
    },
    Format: {
      shape: {
        type: "string"
      },
      locationName: "format"
    },
    ImportManifestUrl: {
      shape: {
        type: "string"
      },
      locationName: "importManifestUrl"
    }
  }
};
