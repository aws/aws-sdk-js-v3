import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimecodeBurnin: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FontSize: {
      shape: {
        type: "integer",
        min: 10
      },
      locationName: "fontSize"
    },
    Position: {
      shape: {
        type: "string"
      },
      locationName: "position"
    },
    Prefix: {
      shape: {
        type: "string"
      },
      locationName: "prefix"
    }
  }
};
