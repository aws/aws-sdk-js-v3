import { _FilteredLogEvents } from "./_FilteredLogEvents";
import { _SearchedLogStreams } from "./_SearchedLogStreams";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const FilterLogEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    events: {
      shape: _FilteredLogEvents
    },
    searchedLogStreams: {
      shape: _SearchedLogStreams
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
