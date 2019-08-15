import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopCompilationJobInput: _Structure_ = {
  type: "structure",
  required: ["CompilationJobName"],
  members: {
    CompilationJobName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
