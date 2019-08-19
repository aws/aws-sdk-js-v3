import { _StreamNameList } from "./_StreamNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStreamsOutput: _Structure_ = {
  type: "structure",
  required: ["StreamNames", "HasMoreStreams"],
  members: {
    StreamNames: {
      shape: _StreamNameList
    },
    HasMoreStreams: {
      shape: {
        type: "boolean"
      }
    }
  }
};
