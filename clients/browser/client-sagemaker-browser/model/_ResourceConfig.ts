import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceConfig: _Structure_ = {
  type: "structure",
  required: ["InstanceType", "InstanceCount", "VolumeSizeInGB"],
  members: {
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    InstanceCount: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    VolumeSizeInGB: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    VolumeKmsKeyId: {
      shape: {
        type: "string"
      }
    }
  }
};
