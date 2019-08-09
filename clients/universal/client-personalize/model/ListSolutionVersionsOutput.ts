import { _SolutionVersions } from "./_SolutionVersions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSolutionVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    solutionVersions: {
      shape: _SolutionVersions
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
