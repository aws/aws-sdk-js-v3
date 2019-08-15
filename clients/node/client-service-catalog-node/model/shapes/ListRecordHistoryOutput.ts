import { _RecordDetails } from "./_RecordDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRecordHistoryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RecordDetails: {
      shape: _RecordDetails
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
