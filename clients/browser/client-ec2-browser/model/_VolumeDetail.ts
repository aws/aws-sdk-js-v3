import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VolumeDetail: _Structure_ = {
  type: "structure",
  required: ["Size"],
  members: {
    Size: {
      shape: {
        type: "integer"
      },
      locationName: "size"
    }
  }
};
