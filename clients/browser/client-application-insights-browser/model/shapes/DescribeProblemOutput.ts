import { _Problem } from "./_Problem";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProblemOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Problem: {
      shape: _Problem
    }
  }
};
