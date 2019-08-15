import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamSelection: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxVideoBitsPerSecond: {
      shape: {
        type: "integer"
      },
      locationName: "maxVideoBitsPerSecond"
    },
    MinVideoBitsPerSecond: {
      shape: {
        type: "integer"
      },
      locationName: "minVideoBitsPerSecond"
    },
    StreamOrder: {
      shape: {
        type: "string"
      },
      locationName: "streamOrder"
    }
  }
};
