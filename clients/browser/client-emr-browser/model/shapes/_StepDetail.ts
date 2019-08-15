import { _StepConfig } from "./_StepConfig";
import { _StepExecutionStatusDetail } from "./_StepExecutionStatusDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StepDetail: _Structure_ = {
  type: "structure",
  required: ["StepConfig", "ExecutionStatusDetail"],
  members: {
    StepConfig: {
      shape: _StepConfig
    },
    ExecutionStatusDetail: {
      shape: _StepExecutionStatusDetail
    }
  }
};
