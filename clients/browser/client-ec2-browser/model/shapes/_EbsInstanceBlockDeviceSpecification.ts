import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EbsInstanceBlockDeviceSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeleteOnTermination: {
      shape: {
        type: "boolean"
      },
      locationName: "deleteOnTermination"
    },
    VolumeId: {
      shape: {
        type: "string"
      },
      locationName: "volumeId"
    }
  }
};
