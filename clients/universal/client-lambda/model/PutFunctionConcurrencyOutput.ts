import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutFunctionConcurrencyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedConcurrentExecutions: {
      shape: {
        type: "integer"
      }
    }
  }
};
