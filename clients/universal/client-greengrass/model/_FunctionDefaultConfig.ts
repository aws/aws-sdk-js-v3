import { _FunctionDefaultExecutionConfig } from "./_FunctionDefaultExecutionConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FunctionDefaultConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Execution: {
      shape: _FunctionDefaultExecutionConfig
    }
  }
};
