import { _PutRecordsRequestEntryList } from "./_PutRecordsRequestEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRecordsInput: _Structure_ = {
  type: "structure",
  required: ["Records", "StreamName"],
  members: {
    Records: {
      shape: _PutRecordsRequestEntryList
    },
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
