import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PlayReadyDrm: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Format: {
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
    KeyId: {
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
        type: "string",
        min: 1
      }
    }
  }
};
