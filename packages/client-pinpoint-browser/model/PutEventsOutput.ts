import { _EventsResponse } from "./_EventsResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutEventsOutput: _Structure_ = {
  type: "structure",
  required: ["EventsResponse"],
  members: {
    EventsResponse: {
      shape: _EventsResponse
    }
  },
  payload: "EventsResponse"
};
