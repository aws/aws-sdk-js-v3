import { _UpdateResults } from "./_UpdateResults";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchExecuteStatementOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    updateResults: {
      shape: _UpdateResults
    }
  }
};
