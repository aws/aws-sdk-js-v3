import { List as _List_ } from "@aws-sdk/types";
import { _SummarizedAttackVector } from "./_SummarizedAttackVector";

export const _SummarizedAttackVectorList: _List_ = {
  type: "list",
  member: {
    shape: _SummarizedAttackVector
  }
};
