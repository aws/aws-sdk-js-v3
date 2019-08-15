import { _EventsList } from "./_EventsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const LookupEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Events: {
      shape: _EventsList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
