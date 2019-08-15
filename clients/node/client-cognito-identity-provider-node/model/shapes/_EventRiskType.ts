import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventRiskType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RiskDecision: {
      shape: {
        type: "string"
      }
    },
    RiskLevel: {
      shape: {
        type: "string"
      }
    }
  }
};
