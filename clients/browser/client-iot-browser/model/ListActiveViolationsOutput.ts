import { _ActiveViolations } from "./_ActiveViolations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListActiveViolationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    activeViolations: {
      shape: _ActiveViolations
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
