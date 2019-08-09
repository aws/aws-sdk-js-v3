import { _OutputLogEvents } from "./_OutputLogEvents";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLogEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    events: {
      shape: _OutputLogEvents
    },
    nextForwardToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    nextBackwardToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
