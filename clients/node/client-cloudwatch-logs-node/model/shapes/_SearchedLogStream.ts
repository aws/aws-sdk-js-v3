import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SearchedLogStream: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    logStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    searchedCompletely: {
      shape: {
        type: "boolean"
      }
    }
  }
};
