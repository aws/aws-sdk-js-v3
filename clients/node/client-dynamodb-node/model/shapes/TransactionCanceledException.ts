import { _CancellationReasonList } from "./_CancellationReasonList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TransactionCanceledException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    CancellationReasons: {
      shape: _CancellationReasonList
    }
  },
  exceptionType: "TransactionCanceledException"
};
