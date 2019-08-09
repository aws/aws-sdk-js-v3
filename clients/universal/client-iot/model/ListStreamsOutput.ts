import { _StreamsSummary } from "./_StreamsSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStreamsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    streams: {
      shape: _StreamsSummary
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
