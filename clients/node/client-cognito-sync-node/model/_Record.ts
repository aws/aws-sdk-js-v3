import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Record: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Value: {
      shape: {
        type: "string"
      }
    },
    SyncCount: {
      shape: {
        type: "integer"
      }
    },
    LastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedBy: {
      shape: {
        type: "string"
      }
    },
    DeviceLastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
