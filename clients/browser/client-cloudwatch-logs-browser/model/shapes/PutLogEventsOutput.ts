import { _RejectedLogEventsInfo } from "./_RejectedLogEventsInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutLogEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    nextSequenceToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    rejectedLogEventsInfo: {
      shape: _RejectedLogEventsInfo
    }
  }
};
