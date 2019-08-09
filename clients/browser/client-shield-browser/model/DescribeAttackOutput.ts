import { _AttackDetail } from "./_AttackDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAttackOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attack: {
      shape: _AttackDetail
    }
  }
};
