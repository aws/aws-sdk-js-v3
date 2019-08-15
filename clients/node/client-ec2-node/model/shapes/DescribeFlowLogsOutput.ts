import { _FlowLogSet } from "./_FlowLogSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFlowLogsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FlowLogs: {
      shape: _FlowLogSet,
      locationName: "flowLogSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
