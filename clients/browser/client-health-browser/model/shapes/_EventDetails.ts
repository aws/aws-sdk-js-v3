import { _Event } from "./_Event";
import { _EventDescription } from "./_EventDescription";
import { _eventMetadata } from "./_eventMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    event: {
      shape: _Event
    },
    eventDescription: {
      shape: _EventDescription
    },
    eventMetadata: {
      shape: _eventMetadata
    }
  }
};
