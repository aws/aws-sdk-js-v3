import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimeToLiveDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TimeToLiveStatus: {
      shape: {
        type: "string"
      }
    },
    AttributeName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
