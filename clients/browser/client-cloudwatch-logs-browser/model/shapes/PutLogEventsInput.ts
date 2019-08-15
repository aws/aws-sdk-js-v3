import { _InputLogEvents } from "./_InputLogEvents";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutLogEventsInput: _Structure_ = {
  type: "structure",
  required: ["logGroupName", "logStreamName", "logEvents"],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    logStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    logEvents: {
      shape: _InputLogEvents
    },
    sequenceToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
