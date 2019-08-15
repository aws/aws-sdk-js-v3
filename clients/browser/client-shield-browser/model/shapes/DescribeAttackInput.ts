import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAttackInput: _Structure_ = {
  type: "structure",
  required: ["AttackId"],
  members: {
    AttackId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
