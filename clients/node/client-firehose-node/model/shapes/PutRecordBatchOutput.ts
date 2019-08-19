import { _PutRecordBatchResponseEntryList } from "./_PutRecordBatchResponseEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRecordBatchOutput: _Structure_ = {
  type: "structure",
  required: ["FailedPutCount", "RequestResponses"],
  members: {
    FailedPutCount: {
      shape: {
        type: "integer"
      }
    },
    Encrypted: {
      shape: {
        type: "boolean"
      }
    },
    RequestResponses: {
      shape: _PutRecordBatchResponseEntryList
    }
  }
};
