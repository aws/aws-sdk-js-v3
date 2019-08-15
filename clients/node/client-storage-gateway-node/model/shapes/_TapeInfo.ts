import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TapeInfo: _Structure_ = {
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
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
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
