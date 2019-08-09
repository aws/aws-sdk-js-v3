import { _DiskImageDescription } from "./_DiskImageDescription";
import { _DiskImageVolumeDescription } from "./_DiskImageVolumeDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImportVolumeTaskDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    BytesConverted: {
      shape: {
        type: "integer"
      },
      locationName: "bytesConverted"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Image: {
      shape: _DiskImageDescription,
      locationName: "image"
    },
    Volume: {
      shape: _DiskImageVolumeDescription,
      locationName: "volume"
    }
  }
};
