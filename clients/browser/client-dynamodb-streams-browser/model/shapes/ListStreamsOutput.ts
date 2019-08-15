import { _StreamList } from "./_StreamList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStreamsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Streams: {
      shape: _StreamList
    },
    LastEvaluatedStreamArn: {
      shape: {
        type: "string",
        min: 37
      }
    }
  }
};
