import { _PutRecordBatchRequestEntryList } from "./_PutRecordBatchRequestEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRecordBatchInput: _Structure_ = {
  type: "structure",
  required: ["DeliveryStreamName", "Records"],
  members: {
    DeliveryStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Records: {
      shape: _PutRecordBatchRequestEntryList
    }
  }
};
