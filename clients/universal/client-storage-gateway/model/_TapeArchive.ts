import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TapeArchive: _Structure_ = {
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
    CompletionTime: {
      shape: {
        type: "timestamp"
      }
    },
    RetrievedTo: {
      shape: {
        type: "string",
        min: 50
      }
    },
    TapeStatus: {
      shape: {
        type: "string"
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
