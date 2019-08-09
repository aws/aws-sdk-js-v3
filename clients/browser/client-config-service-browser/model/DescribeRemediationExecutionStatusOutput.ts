import { _RemediationExecutionStatuses } from "./_RemediationExecutionStatuses";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRemediationExecutionStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RemediationExecutionStatuses: {
      shape: _RemediationExecutionStatuses
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
