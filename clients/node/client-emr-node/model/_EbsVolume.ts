import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EbsVolume: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Device: {
      shape: {
        type: "string"
      }
    },
    VolumeId: {
      shape: {
        type: "string"
      }
    }
  }
};
