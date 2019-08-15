import { _RecordList } from "./_RecordList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRecordsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Records: {
      shape: _RecordList
    },
    NextShardIterator: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
