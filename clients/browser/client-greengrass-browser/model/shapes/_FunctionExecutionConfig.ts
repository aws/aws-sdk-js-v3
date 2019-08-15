import { _FunctionRunAsConfig } from "./_FunctionRunAsConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FunctionExecutionConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IsolationMode: {
      shape: {
        type: "string"
      }
    },
    RunAs: {
      shape: _FunctionRunAsConfig
    }
  }
};
