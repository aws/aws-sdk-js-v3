import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsContentProtection: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Method: {
      shape: {
        type: "string"
      }
    },
    Key: {
      shape: {
        type: "string"
      }
    },
    KeyMd5: {
      shape: {
        type: "string"
      }
    },
    InitializationVector: {
      shape: {
        type: "string"
      }
    },
    LicenseAcquisitionUrl: {
      shape: {
        type: "string"
      }
    },
    KeyStoragePolicy: {
      shape: {
        type: "string"
      }
    }
  }
};
