import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MountPoint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    sourceVolume: {
      shape: {
        type: "string"
      }
    },
    containerPath: {
      shape: {
        type: "string"
      }
    },
    readOnly: {
      shape: {
        type: "boolean"
      }
    }
  }
};
