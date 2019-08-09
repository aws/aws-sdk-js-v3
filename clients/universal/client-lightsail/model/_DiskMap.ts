import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DiskMap: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    originalDiskPath: {
      shape: {
        type: "string"
      }
    },
    newDiskName: {
      shape: {
        type: "string"
      }
    }
  }
};
