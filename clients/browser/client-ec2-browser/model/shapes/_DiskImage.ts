import { _DiskImageDetail } from "./_DiskImageDetail";
import { _VolumeDetail } from "./_VolumeDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DiskImage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Description: {
      shape: {
        type: "string"
      }
    },
    Image: {
      shape: _DiskImageDetail
    },
    Volume: {
      shape: _VolumeDetail
    }
  }
};
