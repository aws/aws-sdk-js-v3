import { _ViolationEvents } from "./_ViolationEvents";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListViolationEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    violationEvents: {
      shape: _ViolationEvents
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
