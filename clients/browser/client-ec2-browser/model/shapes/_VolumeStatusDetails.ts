import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VolumeStatusDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    }
  }
};
