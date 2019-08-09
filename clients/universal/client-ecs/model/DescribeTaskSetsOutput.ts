import { _TaskSets } from "./_TaskSets";
import { _Failures } from "./_Failures";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTaskSetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskSets: {
      shape: _TaskSets
    },
    failures: {
      shape: _Failures
    }
  }
};
