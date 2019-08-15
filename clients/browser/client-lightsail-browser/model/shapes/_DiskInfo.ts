import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DiskInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    path: {
      shape: {
        type: "string"
      }
    },
    sizeInGb: {
      shape: {
        type: "integer"
      }
    },
    isSystemDisk: {
      shape: {
        type: "boolean"
      }
    }
  }
};
