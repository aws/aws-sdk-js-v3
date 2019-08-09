import { _ExecutionParameters } from "./_ExecutionParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeServiceActionExecutionParametersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceActionParameters: {
      shape: _ExecutionParameters
    }
  }
};
