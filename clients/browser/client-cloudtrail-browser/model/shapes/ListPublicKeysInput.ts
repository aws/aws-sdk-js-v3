import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPublicKeysInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
