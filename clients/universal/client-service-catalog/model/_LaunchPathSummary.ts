import { _ConstraintSummaries } from "./_ConstraintSummaries";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchPathSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ConstraintSummaries: {
      shape: _ConstraintSummaries
    },
    Tags: {
      shape: _Tags
    },
    Name: {
      shape: {
        type: "string"
      }
    }
  }
};
