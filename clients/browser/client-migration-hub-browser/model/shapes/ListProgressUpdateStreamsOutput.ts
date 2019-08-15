import { _ProgressUpdateStreamSummaryList } from "./_ProgressUpdateStreamSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProgressUpdateStreamsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProgressUpdateStreamSummaryList: {
      shape: _ProgressUpdateStreamSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
