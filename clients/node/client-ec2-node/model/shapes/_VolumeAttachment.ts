import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VolumeAttachment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttachTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "attachTime"
    },
    Device: {
      shape: {
        type: "string"
      },
      locationName: "device"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "status"
    },
    VolumeId: {
      shape: {
        type: "string"
      },
      locationName: "volumeId"
    },
    DeleteOnTermination: {
      shape: {
        type: "boolean"
      },
      locationName: "deleteOnTermination"
    }
  }
};
