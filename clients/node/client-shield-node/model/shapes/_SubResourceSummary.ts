import { _SummarizedAttackVectorList } from "./_SummarizedAttackVectorList";
import { _SummarizedCounterList } from "./_SummarizedCounterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SubResourceSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    AttackVectors: {
      shape: _SummarizedAttackVectorList
    },
    Counters: {
      shape: _SummarizedCounterList
    }
  }
};
