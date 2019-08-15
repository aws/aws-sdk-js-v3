import { _StepExecutionFilterValueList } from "./_StepExecutionFilterValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StepExecutionFilter: _Structure_ = {
  type: "structure",
  required: ["Key", "Values"],
  members: {
    Key: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _StepExecutionFilterValueList
    }
  }
};
