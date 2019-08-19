import { _SeveritySummary } from "./_SeveritySummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CompliantSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CompliantCount: {
      shape: {
        type: "integer"
      }
    },
    SeveritySummary: {
      shape: _SeveritySummary
    }
  }
};
