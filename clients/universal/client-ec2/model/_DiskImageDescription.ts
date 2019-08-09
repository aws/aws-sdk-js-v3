import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DiskImageDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Checksum: {
      shape: {
        type: "string"
      },
      locationName: "checksum"
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
    },
    Size: {
      shape: {
        type: "integer"
      },
      locationName: "size"
    }
  }
};
