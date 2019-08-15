import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssignVolumeInput: _Structure_ = {
  type: "structure",
  required: ["VolumeId"],
  members: {
    VolumeId: {
      shape: {
        type: "string"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    }
  }
};
