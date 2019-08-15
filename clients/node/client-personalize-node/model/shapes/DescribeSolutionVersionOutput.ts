import { _SolutionVersion } from "./_SolutionVersion";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSolutionVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    solutionVersion: {
      shape: _SolutionVersion
    }
  }
};
