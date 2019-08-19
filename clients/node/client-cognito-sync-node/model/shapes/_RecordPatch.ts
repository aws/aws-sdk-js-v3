import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RecordPatch: _Structure_ = {
  type: "structure",
  required: ["Op", "Key", "SyncCount"],
  members: {
    Op: {
      shape: {
        type: "string"
      }
    },
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
    DeviceLastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
