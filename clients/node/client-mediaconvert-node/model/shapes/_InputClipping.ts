import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputClipping: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EndTimecode: {
      shape: {
        type: "string"
      },
      locationName: "endTimecode"
    },
    StartTimecode: {
      shape: {
        type: "string"
      },
      locationName: "startTimecode"
    }
  }
};
