import { _ChangeMessageVisibilityBatchRequestEntryList } from "./_ChangeMessageVisibilityBatchRequestEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ChangeMessageVisibilityBatchInput: _Structure_ = {
  type: "structure",
  required: ["QueueUrl", "Entries"],
  members: {
    QueueUrl: {
      shape: {
        type: "string"
      }
    },
    Entries: {
      shape: _ChangeMessageVisibilityBatchRequestEntryList
    }
  }
};
