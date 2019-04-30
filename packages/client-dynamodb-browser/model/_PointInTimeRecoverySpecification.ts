import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PointInTimeRecoverySpecification: _Structure_ = {
  type: "structure",
  required: ["PointInTimeRecoveryEnabled"],
  members: {
    PointInTimeRecoveryEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
