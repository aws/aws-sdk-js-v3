import { _CompilationJobSummaries } from "./_CompilationJobSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCompilationJobsOutput: _Structure_ = {
  type: "structure",
  required: ["CompilationJobSummaries"],
  members: {
    CompilationJobSummaries: {
      shape: _CompilationJobSummaries
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
