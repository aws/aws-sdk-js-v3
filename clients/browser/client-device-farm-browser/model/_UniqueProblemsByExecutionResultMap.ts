import { Map as _Map_ } from "@aws-sdk/types";
import { _UniqueProblems } from "./_UniqueProblems";

export const _UniqueProblemsByExecutionResultMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _UniqueProblems
  }
};
