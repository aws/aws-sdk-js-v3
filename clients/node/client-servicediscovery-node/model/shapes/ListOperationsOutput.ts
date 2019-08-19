import { _OperationSummaryList } from "./_OperationSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOperationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Operations: {
      shape: _OperationSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
