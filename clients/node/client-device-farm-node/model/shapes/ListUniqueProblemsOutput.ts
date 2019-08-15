import { _UniqueProblemsByExecutionResultMap } from "./_UniqueProblemsByExecutionResultMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUniqueProblemsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    uniqueProblems: {
      shape: _UniqueProblemsByExecutionResultMap
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
