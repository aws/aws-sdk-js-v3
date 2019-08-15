import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EbsInstanceBlockDevice: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttachTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "attachTime"
    },
    DeleteOnTermination: {
      shape: {
        type: "boolean"
      },
      locationName: "deleteOnTermination"
    },
    Status: {
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
    }
  }
};
