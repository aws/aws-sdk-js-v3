import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MountPoint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    containerPath: {
      shape: {
        type: "string"
      }
    },
    readOnly: {
      shape: {
        type: "boolean"
      }
    },
    sourceVolume: {
      shape: {
        type: "string"
      }
    }
  }
};
