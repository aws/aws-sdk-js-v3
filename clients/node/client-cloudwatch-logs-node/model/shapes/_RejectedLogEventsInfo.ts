import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RejectedLogEventsInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    tooNewLogEventStartIndex: {
      shape: {
        type: "integer"
      }
    },
    tooOldLogEventEndIndex: {
      shape: {
        type: "integer"
      }
    },
    expiredLogEventEndIndex: {
      shape: {
        type: "integer"
      }
    }
  }
};
