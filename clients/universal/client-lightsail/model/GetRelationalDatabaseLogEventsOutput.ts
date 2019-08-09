import { _LogEventList } from "./_LogEventList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRelationalDatabaseLogEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceLogEvents: {
      shape: _LogEventList
    },
    nextBackwardToken: {
      shape: {
        type: "string"
      }
    },
    nextForwardToken: {
      shape: {
        type: "string"
      }
    }
  }
};
