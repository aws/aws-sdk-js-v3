import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachVolumeInput: _Structure_ = {
  type: "structure",
  required: ["Device", "InstanceId", "VolumeId"],
  members: {
    Device: {
      shape: {
        type: "string"
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
