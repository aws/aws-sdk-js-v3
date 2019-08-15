import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EBSStorageInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VolumeSize: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "volumeSize"
    }
  }
};
