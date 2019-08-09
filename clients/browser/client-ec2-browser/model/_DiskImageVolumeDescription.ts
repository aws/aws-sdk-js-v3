import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DiskImageVolumeDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      },
      locationName: "id"
    },
    Size: {
      shape: {
        type: "integer"
      },
      locationName: "size"
    }
  }
};
