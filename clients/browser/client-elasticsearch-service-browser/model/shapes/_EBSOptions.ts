import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EBSOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EBSEnabled: {
      shape: {
        type: "boolean"
      }
    },
    VolumeType: {
      shape: {
        type: "string"
      }
    },
    VolumeSize: {
      shape: {
        type: "integer"
      }
    },
    Iops: {
      shape: {
        type: "integer"
      }
    }
  }
};
