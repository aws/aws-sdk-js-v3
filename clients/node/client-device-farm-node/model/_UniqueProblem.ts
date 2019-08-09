import { _Problems } from "./_Problems";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UniqueProblem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    },
    problems: {
      shape: _Problems
    }
  }
};
