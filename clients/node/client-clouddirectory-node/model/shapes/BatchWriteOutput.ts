import { _BatchWriteOperationResponseList } from "./_BatchWriteOperationResponseList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchWriteOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Responses: {
      shape: _BatchWriteOperationResponseList
    }
  }
};
