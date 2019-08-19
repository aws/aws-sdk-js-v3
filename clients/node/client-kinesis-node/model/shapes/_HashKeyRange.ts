import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HashKeyRange: _Structure_ = {
  type: "structure",
  required: ["StartingHashKey", "EndingHashKey"],
  members: {
    StartingHashKey: {
      shape: {
        type: "string"
      }
    },
    EndingHashKey: {
      shape: {
        type: "string"
      }
    }
  }
};
