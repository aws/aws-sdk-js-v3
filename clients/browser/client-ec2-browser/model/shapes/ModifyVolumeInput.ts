import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyVolumeInput: _Structure_ = {
  type: "structure",
  required: ["VolumeId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    VolumeId: {
      shape: {
        type: "string"
      }
    },
    Size: {
      shape: {
        type: "integer"
      }
    },
    VolumeType: {
      shape: {
        type: "string"
      }
    },
    Iops: {
      shape: {
        type: "integer"
      }
    }
  }
};
