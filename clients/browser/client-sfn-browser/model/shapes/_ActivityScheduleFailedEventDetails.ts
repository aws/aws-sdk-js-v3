import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActivityScheduleFailedEventDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    error: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    cause: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
