import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RotationRulesType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AutomaticallyAfterDays: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
