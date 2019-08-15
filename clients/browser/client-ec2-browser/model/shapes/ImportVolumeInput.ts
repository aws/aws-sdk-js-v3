import { _DiskImageDetail } from "./_DiskImageDetail";
import { _VolumeDetail } from "./_VolumeDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportVolumeInput: _Structure_ = {
  type: "structure",
  required: ["AvailabilityZone", "Image", "Volume"],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    Image: {
      shape: _DiskImageDetail,
      locationName: "image"
    },
    Volume: {
      shape: _VolumeDetail,
      locationName: "volume"
    }
  }
};
