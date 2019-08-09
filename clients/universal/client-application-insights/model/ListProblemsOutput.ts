import { _ProblemList } from "./_ProblemList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProblemsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProblemList: {
      shape: _ProblemList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
