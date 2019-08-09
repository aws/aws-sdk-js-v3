import { _SummarizedCounterList } from "./_SummarizedCounterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SummarizedAttackVector: _Structure_ = {
  type: "structure",
  required: ["VectorType"],
  members: {
    VectorType: {
      shape: {
        type: "string"
      }
    },
    VectorCounters: {
      shape: _SummarizedCounterList
    }
  }
};
