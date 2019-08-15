import { _EventSourceList } from "./_EventSourceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEventSourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EventSources: {
      shape: _EventSourceList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
