import { _StreamInfoList } from "./_StreamInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStreamsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamInfoList: {
      shape: _StreamInfoList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
