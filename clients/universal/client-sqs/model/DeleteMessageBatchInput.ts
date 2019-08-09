import { _DeleteMessageBatchRequestEntryList } from "./_DeleteMessageBatchRequestEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteMessageBatchInput: _Structure_ = {
  type: "structure",
  required: ["QueueUrl", "Entries"],
  members: {
    QueueUrl: {
      shape: {
        type: "string"
      }
    },
    Entries: {
      shape: _DeleteMessageBatchRequestEntryList
    }
  }
};
