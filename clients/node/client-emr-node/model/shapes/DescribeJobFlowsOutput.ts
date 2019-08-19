import { _JobFlowDetailList } from "./_JobFlowDetailList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeJobFlowsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobFlows: {
      shape: _JobFlowDetailList
    }
  }
};
