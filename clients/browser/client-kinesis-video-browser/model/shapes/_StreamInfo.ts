import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MediaType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    KmsKeyId: {
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
    Status: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    DataRetentionInHours: {
      shape: {
        type: "integer"
      }
    }
  }
};
