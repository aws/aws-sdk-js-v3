import { _Solution } from "./_Solution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSolutionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    solution: {
      shape: _Solution
    }
  }
};
