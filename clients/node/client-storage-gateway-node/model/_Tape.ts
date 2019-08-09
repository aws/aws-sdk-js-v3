import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Tape: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TapeARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    TapeBarcode: {
      shape: {
        type: "string",
        min: 7
      }
    },
    TapeCreatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    TapeSizeInBytes: {
      shape: {
        type: "integer"
      }
    },
    TapeStatus: {
      shape: {
        type: "string"
      }
    },
    VTLDevice: {
      shape: {
        type: "string",
        min: 50
      }
    },
    Progress: {
      shape: {
        type: "float"
      }
    },
    TapeUsedInBytes: {
      shape: {
        type: "integer"
      }
    },
    KMSKey: {
      shape: {
        type: "string",
        min: 7
      }
    },
    PoolId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
