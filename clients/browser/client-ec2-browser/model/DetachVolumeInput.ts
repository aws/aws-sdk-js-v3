import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetachVolumeInput: _Structure_ = {
  type: "structure",
  required: ["VolumeId"],
  members: {
    Device: {
      shape: {
        type: "string"
      }
    },
    Force: {
      shape: {
        type: "boolean"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    VolumeId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
