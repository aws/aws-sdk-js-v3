import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopExecutionOutput: _Structure_ = {
  type: "structure",
  required: ["stopDate"],
  members: {
    stopDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
